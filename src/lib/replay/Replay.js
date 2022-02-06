/* eslint-disable prefer-destructuring */

import EventEmitter from 'events';
import { action, makeObservable, observable } from 'mobx';

import Parser from '../parser/Parser.js';
import { EntityEvent } from '../parser/model/index.js';
import { ObservableIndexedCollection } from '../utils/index.js';
import { TEAM_DIRE, TEAM_RADIANT } from '../constants.js';

import Game from './Game.js';
import {
  Ability, Building, Courier, Hero, Item, Player, Team, Unit, UnitWithInventory,
} from './entities/index.js';

const processorByClass = {
  CDOTA_BaseNPC: 'processUnit',
  CDOTA_BaseNPC_Additive: 'processUnit',
  CDOTA_BaseNPC_Barracks: 'processBuilding',
  CDOTA_BaseNPC_Clinkz_Skeleton_Army: 'processUnit',
  CDOTA_BaseNPC_Creature: 'processUnit',
  CDOTA_BaseNPC_Creep_Lane: 'processUnit',
  CDOTA_BaseNPC_Creep_Neutral: 'processUnit',
  CDOTA_BaseNPC_Creep_Siege: 'processUnit',
  CDOTA_BaseNPC_Creep: 'processUnit',
  CDOTA_BaseNPC_Fort: 'processBuilding',
  CDOTA_BaseNPC_Invoker_Forged_Spirit: 'processUnit',
  CDOTA_BaseNPC_ShadowShaman_SerpentWard: 'processUnit',
  CDOTA_BaseNPC_Tower: 'processBuilding',
  CDOTA_BaseNPC_Tusk_Sigil: 'processUnit',
  CDOTA_BaseNPC_Venomancer_PlagueWard: 'processUnit',
  CDOTA_BaseNPC_Warlock_Golem: 'processUnit',
  CDOTA_BaseNPC_Watch_Tower: 'processBuilding',
  CDOTA_DarkWillow_Creature: 'processUnit',
  CDOTA_DataDire: 'processTeamData',
  CDOTA_DataRadiant: 'processTeamData',
  CDOTA_Item_Physical: 'processCollectable',
  CDOTA_Item_Rune: 'processCollectable',
  CDOTA_Item_RuneSpawner: null,
  CDOTA_Item_RuneSpawner_Bounty: null,
  CDOTA_Item_RuneSpawner_Powerup: null,
  CDOTA_Item: 'processItem',
  CDOTA_NPC_Lich_Ice_Spire: 'processUnit',
  CDOTA_NPC_Observer_Ward_TrueSight: 'processUnit',
  CDOTA_NPC_Observer_Ward: 'processUnit',
  CDOTA_NPC_Sentry_Ward: 'processUnit',
  CDOTA_NPC_Techies_Minefield_Sign: 'processUnit',
  CDOTA_NPC_TechiesMines: 'processUnit',
  CDOTA_NPC_Treant_EyesInTheForest: 'processUnit',
  CDOTA_NPC_WitchDoctor_Ward: 'processUnit',
  CDOTA_PlayerResource: 'processPlayerResource',
  CDOTA_Unit_Brewmaster_PrimalEarth: 'processUnit',
  CDOTA_Unit_Brewmaster_PrimalFire: 'processUnit',
  CDOTA_Unit_Brewmaster_PrimalStorm: 'processUnit',
  CDOTA_Unit_Brewmaster_PrimalVoid: 'processUnit',
  CDOTA_Unit_Broodmother_Spiderling: 'processUnit',
  CDOTA_Unit_Broodmother_Web: 'processUnit',
  CDOTA_Unit_Courier: 'processCourier',
  CDOTA_Unit_Earth_Spirit_Stone: 'processUnit',
  CDOTA_Unit_Elder_Titan_AncestralSpirit: 'processUnit',
  CDOTA_Unit_Hero_Beastmaster_Boar: 'processUnit',
  CDOTA_Unit_Hero_Beastmaster_Hawk: 'processUnit',
  CDOTA_Unit_IngisFatuus: 'processUnit',
  CDOTA_Unit_Roshan: 'processUnitWithInventory',
  CDOTA_Unit_SpiritBear: 'processUnitWithInventory',
  CDOTA_Unit_Undying_Tombstone: 'processUnit',
  CDOTA_Unit_Undying_Zombie: 'processUnit',
  CDOTA_Unit_VisageFamiliar: 'processUnit',
  CDOTA_Unit_ZeusCloud: 'processUnit',
  CDOTABaseAbility: 'processAbility',
  CDOTAGamerulesProxy: 'processGameRules',
  CDOTAPlayer: 'processPlayer',
  CDOTATeam: 'processTeam',
};

// These partial matches are used to patch the above list at runtime
const processorByPartialClass = [
  { startsWith: 'CDOTA_Ability_', method: 'processAbility' },
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

    this.abilities = new ObservableIndexedCollection('handle');
    this.items = new ObservableIndexedCollection('handle');
    this.players = new ObservableIndexedCollection('handle', { byID: 'id' });
    this.teams = new ObservableIndexedCollection('handle', { byID: 'id' });
    this.units = new ObservableIndexedCollection('handle');
    this.game = new Game();

    this.onEntities = this.onEntities.bind(this);
    this.onTick = this.onTick.bind(this);

    // TODO: Support deregistering listeners
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

      abilities: observable,
      items: observable,
      players: observable,
      teams: observable,
      units: observable,
      game: observable,

      jump: action,
      seek: action,
      start: action,
      step: action,
    });
  }

  entityNameFor(entity) {
    const index = entity.get('m_pEntity.m_nameStringableIndex');
    return this.parser.stringTables.get('EntityNames').entries[index].key;
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

    const changesets = this.parser.entities.map((entity) => ({
      entity,
      delta: entity.snapshot,
      event: EntityEvent.CREATED,
    }));

    this.onTick(this.parser.tick);
    this.onEntities(changesets);
  }

  // TODO: As with jump(), this should preferably be supported in the parser
  jumpTo(targetPhase) {
    while (this.game.phase !== targetPhase && this.parser.parsing) {
      this.step();
    }
  }

  on(...args) {
    this.emitter.on(...args);
  }

  off(...args) {
    this.emitter.remove(...args);
  }

  onEntities(changesets) {
    for (const { entity, delta, event } of changesets) {
      const cls = entity.class.name;
      let method = processorByClass[cls];
      if (method === undefined) {
        method = processorByPartialClass.find((c) => (
          cls.startsWith(c.startsWith)
        ))?.method;
        processorByClass[cls] = method || null;
      }
      if (method) {
        this[method](entity, delta, event);
      }
    }
    this.emitter.emit('update');
  }

  onTick(tick) {
    this.tick = tick;
    this.tickInterval = this.parser.tickInterval;
    this.emitter.emit('update');
  }

  processAbility(entity, delta, event) {
    const handle = entity.handle;
    let ability = this.abilities.get(handle);
    if (!ability) {
      ability = new Ability(this, entity, this.entityNameFor(entity));
      this.abilities.add(ability);
    }
    if (ability && event & EntityEvent.DELETED) {
      this.abilities.delete(ability);
    }
    if ('m_fCooldown' in delta) {
      ability.cooldown.value = delta.m_fCooldown;
    }
    if ('m_flCooldownLength' in delta) {
      ability.cooldown.duration = delta.m_flCooldownLength;
    }
    if ('m_bHidden' in delta) {
      ability.isHidden = delta.m_bHidden;
    }
    if ('m_iLevel' in delta) {
      ability.level = delta.m_iLevel;
    }
    if ('m_iManaCost' in delta) {
      ability.manaCost = delta.m_iManaCost;
    }
  }

  processBuilding(entity, delta, event) {
    return this.processUnit(entity, delta, event, { class: Building, hasRotation: false });
  }

  processCourier(entity, delta, event) {
    const courier = this.processUnitWithInventory(entity, delta, event, { class: Courier });
    if (!courier) {
      // Deleted in the unit processor
      return;
    }
    if ('m_bFlyingCourier' in delta) {
      courier.isFlying = delta.m_bFlyingCourier;
    }
  }

  // TODO: Process runes and physical item drops properly
  processCollectable(entity, delta, event) { // eslint-disable-line
  }

  processGameRules(_entity, delta) {
    const { game } = this;
    if ('m_pGameRules.m_nGameState' in delta) {
      game.phase = delta['m_pGameRules.m_nGameState'];
    }
    if ('m_pGameRules.m_flPreGameStartTime' in delta) {
      game.preStartTime = delta['m_pGameRules.m_flPreGameStartTime'] | 0;
    }
    if ('m_pGameRules.m_flGameStartTime' in delta) {
      game.startTime = delta['m_pGameRules.m_flGameStartTime'] | 0;
    }
    if ('m_pGameRules.m_flStateTransitionTime' in delta) {
      game.stateTransitionTime = delta['m_pGameRules.m_flStateTransitionTime'] | 0;
    }
    if ('m_pGameRules.m_fGameTime' in delta) {
      game.time = delta['m_pGameRules.m_fGameTime'] | 0;
    }
  }

  processHero(entity, delta, event) {
    const hero = this.processUnitWithInventory(entity, delta, event, { class: Hero });
    if (!hero) {
      // Deleted in the unit processor
      return;
    }
    if ('m_iPlayerID' in delta) {
      hero.playerID = delta.m_iPlayerID;
    }
    if ('m_iCurrentXP' in delta) {
      hero.xp = delta.m_iCurrentXP;
    }
    if ('m_hItems.0006' in delta) {
      hero.backpackHandles[0] = delta['m_hItems.0006'];
    }
    if ('m_hItems.0007' in delta) {
      hero.backpackHandles[1] = delta['m_hItems.0007'];
    }
    if ('m_hItems.0008' in delta) {
      hero.backpackHandles[2] = delta['m_hItems.0008'];
    }
    if ('m_hItems.0009' in delta) {
      hero.stashHandles[0] = delta['m_hItems.0009'];
    }
    if ('m_hItems.0010' in delta) {
      hero.stashHandles[1] = delta['m_hItems.0010'];
    }
    if ('m_hItems.0011' in delta) {
      hero.stashHandles[2] = delta['m_hItems.0011'];
    }
    if ('m_hItems.0012' in delta) {
      hero.stashHandles[3] = delta['m_hItems.0012'];
    }
    if ('m_hItems.0013' in delta) {
      hero.stashHandles[4] = delta['m_hItems.0013'];
    }
    if ('m_hItems.0014' in delta) {
      hero.stashHandles[5] = delta['m_hItems.0014'];
    }
    if ('m_hItems.0015' in delta) {
      hero.teleportScrollHandle = delta['m_hItems.0015'];
    }
    if ('m_hItems.0016' in delta) {
      hero.neutralItemHandle = delta['m_hItems.0016'];
    }
    if ('m_hReplicatingOtherHeroModel' in delta) {
      hero.isIllusion = delta.m_hReplicatingOtherHeroModel !== 16777215;
    }
  }

  processItem(entity, delta, event) {
    const handle = entity.handle;
    let item = this.items.get(handle);
    if (!item) {
      item = new Item(this, entity, this.entityNameFor(entity));
      this.items.add(item);
    }
    if (item && event & EntityEvent.DELETED) {
      this.items.delete(item);
    }
    if ('m_flAssembledTime' in delta) {
      item.acquireTime = delta.m_flAssembledTime;
    }
    if ('m_iCurrentCharges' in delta) {
      item.charges = delta.m_iCurrentCharges;
    }
    if ('m_fCooldown' in delta) {
      item.cooldown.value = delta.m_fCooldown;
    }
    if ('m_flCooldownLength' in delta) {
      item.cooldown.duration = delta.m_flCooldownLength;
    }
    if ('m_iLevel' in delta) {
      item.level = delta.m_iLevel;
    }
    if ('m_iManaCost' in delta) {
      item.manaCost = delta.m_iManaCost;
    }
  }

  processPlayer(entity, delta, event) {
    const handle = entity.handle;
    let player = this.players.get(handle);
    if (!player) {
      player = new Player(this, entity);
      player.id = entity.get('m_iPlayerID');
      this.players.add(player);
    }
    if (player && event & EntityEvent.DELETED) {
      this.players.delete(player);
      return;
    }
    if ('m_hAssignedHero' in delta) {
      player.heroID = delta.m_hAssignedHero;
    }
    if ('m_iTeamNum' in delta) {
      player.teamID = delta.m_iTeamNum;
    }

    // TODO: Handle player unit selection (m_hSpectatorQueryUnit)

    if ('CBodyComponent.m_cellX' in delta) {
      player.camera.position.cellX = delta['CBodyComponent.m_cellX'];
    }
    if ('CBodyComponent.m_cellY' in delta) {
      player.camera.position.cellY = delta['CBodyComponent.m_cellY'];
    }
    if ('CBodyComponent.m_vecX' in delta) {
      player.camera.position.vecX = delta['CBodyComponent.m_vecX'];
    }
    if ('CBodyComponent.m_vecY' in delta) {
      player.camera.position.vecY = delta['CBodyComponent.m_vecY'];
    }
  }

  processPlayerResource(_entity, delta) {
    // TODO: Race conditions may occur when reloading the entire entity state
    for (const player of this.players) {
      if (player.id === -1) continue;

      const prefix = `m_vecPlayerData.${player.index}`;
      if (`${prefix}.m_iszPlayerName` in delta) {
        player.nickname = delta[`${prefix}.m_iszPlayerName`];
      }
      if (`${prefix}.m_iPlayerSteamID` in delta) {
        player.steamID = delta[`${prefix}.m_iPlayerSteamID`];
      }
      if (`${prefix}.m_bFakeClient` in delta) {
        player.isBot = delta[`${prefix}.m_bFakeClient`];
      }
      if (`${prefix}.m_bIsBroadcaster` in delta) {
        player.isBroadcaster = delta[`${prefix}.m_bIsBroadcaster`];
      }

      const tprefix = `m_vecPlayerTeamData.${player.index}`;
      if (`${tprefix}.m_iKills` in delta) {
        player.kills = delta[`${tprefix}.m_iKills`];
      }
      if (`${tprefix}.m_iDeaths` in delta) {
        player.deaths = delta[`${tprefix}.m_iDeaths`];
      }
      if (`${tprefix}.m_iAssists` in delta) {
        player.assists = delta[`${tprefix}.m_iAssists`];
      }
      if (`${tprefix}.m_iRespawnSeconds` in delta) {
        player.respawnCooldown.value = delta[`${tprefix}.m_iRespawnSeconds`];
      }
    }
  }

  processTeam(entity, delta, event) {
    const handle = entity.handle;
    let team = this.teams.get(handle);
    if (!team) {
      team = new Team(this, entity);
      team.id = entity.get('m_iTeamNum');
      this.teams.add(team);
    }
    team.proID = entity.get('m_unTournamentTeamID');
    if (team && event & EntityEvent.DELETED) {
      throw new Error('no support for team deletion');
    }
    if ('m_szTeamname' in delta) {
      team.name = delta.m_szTeamname;
    }
    if ('m_iHeroKills' in delta) {
      team.kills = delta.m_iHeroKills;
    }
  }

  processTeamData(entity, delta) {
    const teamID = entity.class.name === 'CDOTA_DataDire' ? TEAM_DIRE : TEAM_RADIANT;

    // Older replays may initialize team entities in a later changeset
    let team = this.teams.byID.get(teamID);
    if (!team) {
      team = new Team(this, entity);
      team.id = entity.get('m_iTeamNum');
      this.teams.add(team);
    }

    const players = team.players;

    for (const [index, player] of Object.entries(players)) {
      const tprefix = `m_vecDataTeam.000${index}`;
      if (`${tprefix}.m_iLastHitCount` in delta) {
        player.lastHits = delta[`${tprefix}.m_iLastHitCount`];
      }
      if (`${tprefix}.m_iDenyCount` in delta) {
        player.denies = delta[`${tprefix}.m_iDenyCount`];
      }
      if (`${tprefix}.m_iNetWorth` in delta) {
        player.networth = delta[`${tprefix}.m_iNetWorth`];
      }
      if (`${tprefix}.m_iReliableGold` in delta) {
        player.reliableGold = delta[`${tprefix}.m_iReliableGold`];
      }
      if (`${tprefix}.m_iUnreliableGold` in delta) {
        player.unreliableGold = delta[`${tprefix}.m_iUnreliableGold`];
      }
      if (`${tprefix}.m_iTotalEarnedGold` in delta) {
        player.totalEarnedGold = delta[`${tprefix}.m_iTotalEarnedGold`];
      }
      if (`${tprefix}.m_iTotalEarnedXP` in delta) {
        player.totalEarnedXP = delta[`${tprefix}.m_iTotalEarnedXP`];
      }
    }
  }

  processUnit(entity, delta, event, { class: Class = Unit, hasRotation = true } = {}) {
    const handle = entity.handle;
    let unit = this.units.get(handle);
    if (!unit) {
      unit = new Class(this, entity, this.entityNameFor(entity));
      this.units.add(unit);
    }
    if (unit && event & EntityEvent.DELETED) {
      this.units.delete(unit);
      return null;
    }
    if ('CBodyComponent.m_hModel' in delta) {
      unit.modelID = delta['CBodyComponent.m_hModel'];
    }
    if ('m_iTeamNum' in delta) {
      unit.teamID = delta.m_iTeamNum;
    }
    if ('CBodyComponent.m_cellX' in delta) {
      unit.position.cellX = delta['CBodyComponent.m_cellX'];
    }
    if ('CBodyComponent.m_cellY' in delta) {
      unit.position.cellY = delta['CBodyComponent.m_cellY'];
    }
    if ('CBodyComponent.m_vecX' in delta) {
      unit.position.vecX = delta['CBodyComponent.m_vecX'];
    }
    if ('CBodyComponent.m_vecY' in delta) {
      unit.position.vecY = delta['CBodyComponent.m_vecY'];
    }
    if (hasRotation && 'CBodyComponent.m_angRotation' in delta) {
      unit.rotation = delta['CBodyComponent.m_angRotation'][1];
    }
    if ('m_iCurrentLevel' in delta) {
      unit.level = delta.m_iCurrentLevel;
    }
    if ('m_iHealth' in delta) {
      unit.hp = delta.m_iHealth;
    }
    if ('m_iMaxHealth' in delta) {
      unit.hpMax = delta.m_iMaxHealth;
    }
    if ('m_flMana' in delta) {
      unit.mana = delta.m_flMana;
    }
    if ('m_flMaxMana' in delta) {
      unit.manaMax = delta.m_flMaxMana;
    }
    if ('m_bIsWaitingToSpawn' in delta) {
      unit.isWaitingToSpawn = delta.m_bIsWaitingToSpawn;
    }

    if ('m_hOwnerEntity' in delta) {
      unit.ownerHandle = delta.m_hOwnerEntity;
    }
    if ('m_hAbilities.0000' in delta) {
      unit.abilityHandles[0] = delta['m_hAbilities.0000'];
    }
    if ('m_hAbilities.0001' in delta) {
      unit.abilityHandles[1] = delta['m_hAbilities.0001'];
    }
    if ('m_hAbilities.0002' in delta) {
      unit.abilityHandles[2] = delta['m_hAbilities.0002'];
    }
    if ('m_hAbilities.0003' in delta) {
      unit.abilityHandles[3] = delta['m_hAbilities.0003'];
    }
    if ('m_hAbilities.0004' in delta) {
      unit.abilityHandles[4] = delta['m_hAbilities.0004'];
    }
    if ('m_hAbilities.0005' in delta) {
      unit.abilityHandles[5] = delta['m_hAbilities.0005'];
    }
    if ('m_hAbilities.0006' in delta) {
      unit.abilityHandles[6] = delta['m_hAbilities.0006'];
    }
    if ('m_hAbilities.0007' in delta) {
      unit.abilityHandles[7] = delta['m_hAbilities.0007'];
    }
    if ('m_hAbilities.0008' in delta) {
      unit.abilityHandles[8] = delta['m_hAbilities.0008'];
    }
    if ('m_hAbilities.0009' in delta) {
      unit.abilityHandles[9] = delta['m_hAbilities.0009'];
    }
    if ('m_hAbilities.0010' in delta) {
      unit.abilityHandles[10] = delta['m_hAbilities.0010'];
    }
    if ('m_hAbilities.0011' in delta) {
      unit.abilityHandles[11] = delta['m_hAbilities.0011'];
    }
    if ('m_hAbilities.0012' in delta) {
      unit.abilityHandles[12] = delta['m_hAbilities.0012'];
    }
    if ('m_hAbilities.0013' in delta) {
      unit.abilityHandles[13] = delta['m_hAbilities.0013'];
    }
    if ('m_hAbilities.0014' in delta) {
      unit.abilityHandles[14] = delta['m_hAbilities.0014'];
    }
    if ('m_hAbilities.0015' in delta) {
      unit.abilityHandles[15] = delta['m_hAbilities.0015'];
    }
    if ('m_hAbilities.0016' in delta) {
      unit.abilityHandles[16] = delta['m_hAbilities.0016'];
    }
    return unit;
  }

  processUnitWithInventory(entity, delta, event, { class: klass = UnitWithInventory } = {}) {
    const unit = this.processUnit(entity, delta, event, { class: klass });
    if (!unit) {
      // Deleted in the unit processor
      return null;
    }
    if ('m_hItems.0000' in delta) {
      unit.inventoryHandles[0] = delta['m_hItems.0000'];
    }
    if ('m_hItems.0001' in delta) {
      unit.inventoryHandles[1] = delta['m_hItems.0001'];
    }
    if ('m_hItems.0002' in delta) {
      unit.inventoryHandles[2] = delta['m_hItems.0002'];
    }
    if ('m_hItems.0003' in delta) {
      unit.inventoryHandles[3] = delta['m_hItems.0003'];
    }
    if ('m_hItems.0004' in delta) {
      unit.inventoryHandles[4] = delta['m_hItems.0004'];
    }
    if ('m_hItems.0005' in delta) {
      unit.inventoryHandles[5] = delta['m_hItems.0005'];
    }
    return unit;
  }
}

export default Replay;
