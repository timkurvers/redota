/* eslint-disable no-param-reassign */

import defs from '../../../dota/compiled.cjs';

const { dota } = defs;

export const {
  CSVCMsg_FlattenedSerializer,
  EDemoCommands,
} = dota;

const {
  CDemoPacket,
  CDOTAMatchMetadataFile,
  CDOTAUserMsg_StatsHeroMinuteDetails,
  CMsgDOTACombatLogEntry,
  CMsgGCToClientTournamentItemDrop,
  EBaseEntityMessages,
  EBaseGameEvents,
  EBaseUserMessages,
  EDotaUserMessages,
  NET_Messages,
  SVC_Messages,
} = dota;

const mapping = (enumeration, search, replace, lookup = {}) => {
  for (const [name, value] of Object.entries(enumeration)) {
    const fnname = name.replace(search, replace);
    const type = dota[fnname];
    if (type) {
      lookup[value] = [type, fnname];
    }
  }
  return lookup;
};

export const commandToTypeMapping = {
  ...mapping(EDemoCommands, 'DEM_', 'CDemo', {
    [EDemoCommands.DEM_SignonPacket]: [CDemoPacket, 'CDemoSignonPacket'],
  }),
};

export const packetToTypeMapping = {
  ...mapping(EBaseEntityMessages, 'EM_', 'CEntityMessage'),
  ...mapping(EBaseGameEvents, 'GE_', 'CMsg'),
  ...mapping(EBaseUserMessages, 'UM_', 'CUserMessage'),
  ...mapping(EDotaUserMessages, 'DOTA_UM_', 'CDOTAUserMsg_', {
    [EDotaUserMessages.DOTA_UM_TournamentDrop]: [CMsgGCToClientTournamentItemDrop, 'CMsgGCToClientTournamentItemDrop'],
    [EDotaUserMessages.DOTA_UM_StatsHeroDetails]: [CDOTAUserMsg_StatsHeroMinuteDetails, 'CDOTAUserMsg_StatsHeroMinuteDetails'],
    [EDotaUserMessages.DOTA_UM_CombatLogDataHLTV]: [CMsgDOTACombatLogEntry, 'CMsgDOTACombatLogEntry'],
    [EDotaUserMessages.DOTA_UM_MatchMetadata]: [CDOTAMatchMetadataFile, 'CDOTAMatchMetadataFile'],
  }),
  ...mapping(NET_Messages, 'net_', 'CNETMsg_'),
  ...mapping(SVC_Messages, 'svc_', 'CSVCMsg_'),
};

export const priorityForType = (type) => {
  switch (type) {
    // High priority: provides context for the rest of the tick
    case NET_Messages.net_Tick:
    case SVC_Messages.svc_CreateStringTable:
    case SVC_Messages.svc_UpdateStringTable:
    case NET_Messages.net_SpawnGroup_Load:
      return -10;
    // Medium priority: provides and needs context for the rest of the tick
    case SVC_Messages.svc_PacketEntities:
      return 5;
    // Low priority: mostly needs context for the rest of the tick
    case EBaseGameEvents.GE_Source1LegacyGameEvent:
      return 10;
    default:
      return 0;
  }
};
