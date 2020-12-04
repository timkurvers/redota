/* eslint-disable prefer-destructuring */

import EventEmitter from 'events';
import { action, makeObservable, observable } from 'mobx';

import Parser from '../parser/Parser.js';
import { CELL_SIZE, MAP_SIZE } from '../constants.js';
import { EntityEvent } from '../parser/model/index.js';
import { IndexedCollection } from '../utils/index.js';

import {
  Ability, Hero, Item, Player, Team, Unit, UnitWithInventory,
} from './entities/index.js';

const processorByClass = {
  CDOTA_BaseNPC_Barracks: 'processBuilding',
  CDOTA_BaseNPC_Creep_Lane: 'processUnit',
  CDOTA_BaseNPC_Creep_Neutral: 'processUnit',
  CDOTA_BaseNPC_Creep_Siege: 'processUnit',
  CDOTA_BaseNPC_Fort: 'processBuilding',
  CDOTA_BaseNPC_Tower: 'processBuilding',
  CDOTA_BaseNPC_Watch_Tower: 'processBuilding',
  CDOTA_Item: 'processItem',
  CDOTA_Item_Rune: null, // TODO: Process properly
  CDOTA_NPC_Observer_Ward: 'processUnit',
  CDOTA_NPC_Sentry_Ward: 'processUnit',
  CDOTA_PlayerResource: 'processPlayerResource',
  CDOTA_Unit_Courier: 'processUnitWithInventory',
  CDOTA_Unit_Roshan: 'processUnitWithInventory',
  CDOTAGamerulesProxy: 'processGameRules',
  CDOTAPlayer: 'processPlayer',
  CDOTATeam: 'processTeam',
};

const processorByPartialClass = [
  { startsWith: 'CDOTA_Item_', method: 'processItem' },
  { startsWith: 'CDOTA_Unit_Hero_', method: 'processHero' },
];

class Replay {
  constructor(buffer) {
    this.emitter = new EventEmitter();
    this.parser = new Parser(buffer);
    this.tick = -1;
    this.tickInterval = null;
    this.lastTick = this.parser.lastTick;
    this.items = new IndexedCollection('eid', { byHandle: 'handle' });
    this.players = new IndexedCollection('eid', { byID: 'id' });
    this.teams = new IndexedCollection('eid', { byID: 'id' });
    this.units = new IndexedCollection('eid');
    this.time = null;

    this.onEntities = this.onEntities.bind(this);
    this.onTick = this.onTick.bind(this);

    this.parser.on('warn', this.emitter.emit.bind(this.emitter, 'warn'));
    this.parser.on('entities', this.onEntities);
    this.parser.on('tick', this.onTick);

    this.seek = this.parser.seek.bind(this.parser);
    this.start = this.parser.start.bind(this.parser);
    this.step = this.parser.step.bind(this.parser);

    makeObservable(this, {
      tick: observable,
      tickInterval: observable,
      lastTick: observable,
      items: observable,
      players: observable,
      teams: observable,
      units: observable,
      time: observable,

      jump: action,
      seek: action,
      start: action,
      step: action,
    });
  }

  // TODO: Rather than temporarily not listening for parser events, resetting
  // all observables, and then forcefully updating all entities, the parser
  // should optimally support seeking to full packets properly
  jump(target) {
    this.parser.off('entities', this.onEntities);
    this.parser.off('tick', this.onTick);
    this.parser.seek(target);
    this.parser.on('entities', this.onEntities);
    this.parser.on('tick', this.onTick);

    this.players.clear();
    this.teams.clear();
    this.units.clear();

    const changeset = this.parser.entities.map((entity) => ({
      entity,
      event: EntityEvent.CREATED,
    }));

    this.onTick(this.parser.tick);
    this.onEntities(changeset);
  }

  on(...args) {
    this.emitter.on(...args);
  }

  off(...args) {
    this.emitter.remove(...args);
  }

  onEntities(changeset) {
    for (const { entity, event } of changeset) {
      const cls = entity.class.name;
      const method = processorByClass[cls] || processorByPartialClass.find((c) => (
        cls.startsWith(c.startsWith)
      ))?.method;
      if (method) {
        this[method](entity, event);
      }
    }
    this.emitter.emit('update');
  }

  onTick(tick) {
    this.tick = tick;
    this.tickInterval = this.parser.tickInterval;
    this.emitter.emit('update');
  }

  processBuilding(entity, event) {
    return this.processUnit(entity, event, { hasRotation: false });
  }

  processGameRules(entity) {
    const gameTime = entity.get('m_pGameRules.m_fGameTime');
    const startTime = entity.get('m_pGameRules.m_flGameStartTime');
    const preStartTime = entity.get('m_pGameRules.m_flPreGameStartTime');

    // TODO: Handle game end time?
    if (startTime) {
      this.time = gameTime - startTime;
    } else if (preStartTime) {
      const transitionTime = entity.get('m_pGameRules.m_flStateTransitionTime');
      this.time = gameTime - transitionTime;
    }
  }

  processHero(entity, event) {
    const hero = this.processUnitWithInventory(entity, event, { class: Hero });
    if (!hero) {
      // Deleted in the unit processor
      return;
    }
    if (!hero.refname) {
      const index = entity.get('m_pEntity.m_nameStringableIndex');
      const refname = this.parser.stringTables.get('EntityNames').entries[index].key;
      hero.refname = refname.replace('npc_dota_hero_', '');
    }
    hero.playerID = entity.get('m_iPlayerID');
    hero.level = entity.get('m_iCurrentLevel');
    hero.xp = entity.get('m_iCurrentXP');
    hero.backpackHandles[0] = entity.get('m_hItems.0006');
    hero.backpackHandles[1] = entity.get('m_hItems.0007');
    hero.backpackHandles[2] = entity.get('m_hItems.0008');
    hero.stashHandles[0] = entity.get('m_hItems.0009');
    hero.stashHandles[1] = entity.get('m_hItems.0010');
    hero.stashHandles[2] = entity.get('m_hItems.0011');
    hero.stashHandles[3] = entity.get('m_hItems.0012');
    hero.stashHandles[4] = entity.get('m_hItems.0013');
    hero.stashHandles[5] = entity.get('m_hItems.0014');
    hero.teleportScrollHandle = entity.get('m_hItems.0015');
    hero.neutralItemHandle = entity.get('m_hItems.0016');
  }

  processItem(entity, event) {
    const eid = entity.index;
    let item = this.items.get(eid);
    if (!item) {
      item = new Item(this, eid);
      item.handle = entity.handle;
      this.items.add(item);
    }
    if (item && event & EntityEvent.DELETED) {
      this.items.delete(item);
    }
    if (!item.refname) {
      const index = entity.get('m_pEntity.m_nameStringableIndex');
      const refname = this.parser.stringTables.get('EntityNames').entries[index].key;
      item.refname = refname.replace('item_', '');
    }
  }

  processPlayer(entity, event) {
    const eid = entity.index;
    let player = this.players.get(eid);
    if (!player) {
      player = new Player(this, eid);
      player.id = entity.get('m_iPlayerID');
      this.players.add(player);
    }
    if (player && event & EntityEvent.DELETED) {
      this.players.delete(player);
      return;
    }
    player.teamID = entity.get('m_iTeamNum');
  }

  processPlayerResource(entity) {
    // TODO: Race conditions may occur when reloading the entire entity state
    for (const player of this.players) {
      if (player.id === -1) continue;

      const prefix = `m_vecPlayerData.${player.index}`;
      player.name = entity.get(`${prefix}.m_iszPlayerName`);
      player.steamID = entity.get(`${prefix}.m_iPlayerSteamID`);
      player.isBot = entity.get(`${prefix}.m_bFakeClient`);

      const tprefix = `m_vecPlayerTeamData.${player.index}`;
      player.kills = entity.get(`${tprefix}.m_iKills`);
      player.deaths = entity.get(`${tprefix}.m_iDeaths`);
      player.assists = entity.get(`${tprefix}.m_iAssists`);
    }
  }

  processTeam(entity, event) {
    const eid = entity.index;
    let team = this.teams.get(eid);
    if (!team) {
      team = new Team(this, eid);
      team.id = entity.get('m_iTeamNum');
      team.proID = entity.get('m_unTournamentTeamID');
      this.teams.add(team);
    }
    if (team && event & EntityEvent.DELETED) {
      throw new Error('no support for team deletion');
    }
    team.name = entity.get('m_szTeamname');
    team.kills = entity.get('m_iHeroKills');
  }

  processUnit(entity, event, { class: Class = Unit, hasRotation = true } = {}) {
    const eid = entity.index;
    let unit = this.units.get(eid);
    if (!unit) {
      unit = new Class(this, eid);
      unit.class = entity.class.name;
      this.units.add(unit);
    }
    if (unit && event & EntityEvent.DELETED) {
      this.units.delete(unit);
      return null;
    }
    unit.teamID = entity.get('m_iTeamNum');
    unit.x = entity.get('CBodyComponent.m_cellX') * CELL_SIZE
             + entity.get('CBodyComponent.m_vecX')
             - MAP_SIZE;
    unit.y = entity.get('CBodyComponent.m_cellY') * CELL_SIZE
             + entity.get('CBodyComponent.m_vecY') - MAP_SIZE;
    if (hasRotation) {
      unit.rotation = entity.get('CBodyComponent.m_angRotation')[1];
    }
    unit.hp = entity.get('m_iHealth');
    unit.hpMax = entity.get('m_iMaxHealth');
    unit.mp = entity.get('m_flMana');
    unit.mpMax = entity.get('m_flMaxMana');
    return unit;
  }

  processUnitWithInventory(entity, event, { class: klass = UnitWithInventory } = {}) {
    const unit = this.processUnit(entity, event, { class: klass });
    if (!unit) {
      // Deleted in the unit processor
      return null;
    }
    unit.inventoryHandles[0] = entity.get('m_hItems.0000');
    unit.inventoryHandles[1] = entity.get('m_hItems.0001');
    unit.inventoryHandles[2] = entity.get('m_hItems.0002');
    unit.inventoryHandles[3] = entity.get('m_hItems.0003');
    unit.inventoryHandles[4] = entity.get('m_hItems.0004');
    unit.inventoryHandles[5] = entity.get('m_hItems.0005');
    return unit;
  }
}

export default Replay;
