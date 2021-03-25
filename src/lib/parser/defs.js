/* eslint-disable no-param-reassign */

import defs from '../../../dota/compiled.cjs';

export const {
  CDemoFileInfo,
  CSVCMsg_FlattenedSerializer,
  EDemoCommands,
} = defs;

const {
  CDemoPacket,
  CDOTAMatchMetadataFile,
  CDOTAUserMsg_StatsHeroMinuteDetails,
  CMsgDOTACombatLogEntry,
  CMsgGCToClientTournamentItemDrop,
  CMsgSource1LegacyGameEvent,
  CNETMsg_SpawnGroup_Load,
  CNETMsg_Tick,
  CSVCMsg_ClearAllStringTables,
  CSVCMsg_CreateStringTable,
  CSVCMsg_PacketEntities,
  CSVCMsg_UpdateStringTable,
  EBaseEntityMessages,
  EBaseGameEvents,
  EBaseUserMessages,
  EDotaUserMessages,
  NET_Messages,
  SVC_Messages,
} = defs;

const mapping = (enumeration, search, replace, lookup = {}) => {
  for (const [name, value] of Object.entries(enumeration)) {
    const fnname = name.replace(search, replace);
    const type = defs[fnname];
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
    case CNETMsg_SpawnGroup_Load:
    case CNETMsg_Tick:
    case CSVCMsg_ClearAllStringTables:
    case CSVCMsg_CreateStringTable:
    case CSVCMsg_UpdateStringTable:
      return -10;
    // Medium priority: provides and needs context for the rest of the tick
    case CSVCMsg_PacketEntities:
      return 5;
    // Low priority: mostly needs context for the rest of the tick
    case CMsgSource1LegacyGameEvent:
      return 10;
    default:
      return 0;
  }
};
