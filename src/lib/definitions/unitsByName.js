/* eslint-disable func-names */

import MurmurHash from '../utils/MurmurHash.js';

// Names from Dota 2's English localization: resource/localizations/dota_english.txt
//
// Certain units (most notably neutral creeps) can only be uniquely identified
// by their model ID: a Murmur resource-hash of the model's full path. As some of
// these units support skins, we need to match on these variants, too.
//
// For units that share a model (such as granite and rock golems) a match function
// is used to derive the type at runtime using a unit's properties (e.g level).

// Augments unit definitions with model IDs
const augment = (definitions) => {
  for (const [, definition] of Object.entries(definitions)) {
    const modelIDs = {
      [MurmurHash.hash64(definition.model)]: definition.model,
    };
    if (definition.variants) {
      for (const model of definition.variants) {
        modelIDs[MurmurHash.hash64(model)] = model;
      }
    }
    definition.modelIDs = modelIDs;
  }
  return definitions;
};

// Matcher to uniquely identify units using its model ID
const matchByModelID = function (unit, definition = this) {
  return unit.modelID in definition.modelIDs;
};

export default augment({

  //
  // Regular units
  //

  npc_dota_beastmaster_boar: {
    name: 'Boar',
    model: 'models/heroes/beastmaster/beastmaster_beast.vmdl',
  },

  npc_dota_beastmaster_hawk: {
    name: 'Hawk',
    model: 'models/heroes/beastmaster/beastmaster_bird.vmdl',
  },

  npc_dota_brewmaster_earth: {
    name: 'Earth',
    model: 'models/heroes/brewmaster/brewmaster_earthspirit.vmdl',
  },

  npc_dota_brewmaster_fire: {
    name: 'Fire',
    model: 'models/heroes/brewmaster/brewmaster_firespirit.vmdl',
  },

  npc_dota_brewmaster_storm: {
    name: 'Storm',
    model: 'models/heroes/brewmaster/brewmaster_windspirit.vmdl',
  },

  npc_dota_brewmaster_void: {
    name: 'Void',
    model: 'models/heroes/brewmaster/brewmaster_voidspirit.vmdl',
  },

  npc_dota_broodmother_spiderling: {
    name: 'Spiderling',
    model: 'models/heroes/broodmother/spiderling.vmdl',
    match(unit) {
      return matchByModelID(unit, this) && unit.level === 3;
    },
    variants: [
      'models/items/broodmother/spiderling/amber_queen_spiderling_2/amber_queen_spiderling_2.vmdl',
      'models/items/broodmother/spiderling/araknarok_broodmother_araknarok_spiderling/araknarok_broodmother_araknarok_spiderling.vmdl',
      'models/items/broodmother/spiderling/dplus_malevolent_mother_malevoling/dplus_malevolent_mother_malevoling.vmdl',
      'models/items/broodmother/spiderling/elder_blood_heir_of_elder_blood/elder_blood_heir_of_elder_blood.vmdl',
      'models/items/broodmother/spiderling/lycosidae_spiderling/lycosidae_spiderling.vmdl',
      'models/items/broodmother/spiderling/perceptive_spiderling/perceptive_spiderling.vmdl',
      'models/items/broodmother/spiderling/spiderling_dlotus_red/spiderling_dlotus_red.vmdl',
      'models/items/broodmother/spiderling/strangling_gloom_spiderling/strangling_gloom_spiderling.vmdl',
      'models/items/broodmother/spiderling/the_glacial_creeper_creepling/the_glacial_creeper_creepling_dpc.vmdl',
      'models/items/broodmother/spiderling/the_glacial_creeper_creepling/the_glacial_creeper_creepling.vmdl',
      'models/items/broodmother/spiderling/thistle_crawler/thistle_crawler.vmdl',
      'models/items/broodmother/spiderling/ti8_brood_the_great_arachne_spiderling/ti8_brood_the_great_arachne_spiderling.vmdl',
      'models/items/broodmother/spiderling/ti9_cache_brood_mother_of_thousands_spiderling/ti9_cache_brood_mother_of_thousands_spiderling.vmdl',
      'models/items/broodmother/spiderling/venomous_caressin_spiderling/venomous_caressin_spiderling.vmdl',
      'models/items/broodmother/spiderling/virulent_matriarchs_spiderling/virulent_matriarchs_spiderling.vmdl',
      'models/items/broodmother/spiderling/witchs_grasp_spiderling/witchs_grasp_spiderling.vmdl',
    ],
  },

  npc_dota_broodmother_spiderite: {
    name: 'Spiderite',
    model: 'models/heroes/broodmother/spiderling.vmdl',
    match(unit) {
      return matchByModelID(unit, this) && unit.level === 2;
    },
    variants: [
      'models/items/broodmother/spiderling/amber_queen_spiderling_2/amber_queen_spiderling_2.vmdl',
      'models/items/broodmother/spiderling/araknarok_broodmother_araknarok_spiderling/araknarok_broodmother_araknarok_spiderling.vmdl',
      'models/items/broodmother/spiderling/dplus_malevolent_mother_malevoling/dplus_malevolent_mother_malevoling.vmdl',
      'models/items/broodmother/spiderling/elder_blood_heir_of_elder_blood/elder_blood_heir_of_elder_blood.vmdl',
      'models/items/broodmother/spiderling/lycosidae_spiderling/lycosidae_spiderling.vmdl',
      'models/items/broodmother/spiderling/perceptive_spiderling/perceptive_spiderling.vmdl',
      'models/items/broodmother/spiderling/spiderling_dlotus_red/spiderling_dlotus_red.vmdl',
      'models/items/broodmother/spiderling/strangling_gloom_spiderling/strangling_gloom_spiderling.vmdl',
      'models/items/broodmother/spiderling/the_glacial_creeper_creepling/the_glacial_creeper_creepling_dpc.vmdl',
      'models/items/broodmother/spiderling/the_glacial_creeper_creepling/the_glacial_creeper_creepling.vmdl',
      'models/items/broodmother/spiderling/thistle_crawler/thistle_crawler.vmdl',
      'models/items/broodmother/spiderling/ti8_brood_the_great_arachne_spiderling/ti8_brood_the_great_arachne_spiderling.vmdl',
      'models/items/broodmother/spiderling/ti9_cache_brood_mother_of_thousands_spiderling/ti9_cache_brood_mother_of_thousands_spiderling.vmdl',
      'models/items/broodmother/spiderling/venomous_caressin_spiderling/venomous_caressin_spiderling.vmdl',
      'models/items/broodmother/spiderling/virulent_matriarchs_spiderling/virulent_matriarchs_spiderling.vmdl',
      'models/items/broodmother/spiderling/witchs_grasp_spiderling/witchs_grasp_spiderling.vmdl',
    ],
  },

  npc_dota_broodmother_web: {
    name: 'Spin Web',
    model: '???',
  },

  npc_dota_clinkz_skeleton_archer: {
    name: 'Skeleton Archer',
    model: 'models/heroes/clinkz/clinkz_archer.vmdl',
  },

  npc_dota_courier: {
    name: 'Courier',
    model: 'models/props_gameplay/donkey.vmdl',
  },

  npc_dota_flying_courier: {
    name: 'Flying Courier',
    model: 'models/props_gameplay/donkey_wings.vmdl',
  },

  npc_dota_earth_spirit_stone: {
    name: 'Stone Remnant',
    model: 'models/heroes/earth_spirit/stonesummon.vmdl',
  },

  npc_dota_eidolon: {
    name: 'Eidolon',
    model: 'models/heroes/enigma/eidelon.vmdl',
    match: matchByModelID,
    variants: [
      'models/items/enigma/eidolon/absolute_zero_updated_eidolon/absolute_zero_updated_eidolon.vmdl',
      'models/items/enigma/eidolon/artifacts_of_crushing_depths_eidolon_of_crushing_depths/artifacts_of_crushing_depths_eidolon_of_crushing_depths.vmdl',
      'models/items/enigma/eidolon/enigma_seer_of_infinity_space_eidolon/enigma_seer_of_infinity_space_eidolon.vmdl',
      'models/items/enigma/eidolon/geodesic/geodesic.vmdl',
      'models/items/enigma/eidolon/life_cycle_life_cycle_eidolons/life_cycle_life_cycle_eidolons.vmdl',
      'models/items/enigma/eidolon/tentacular_conqueror_tentacular_conqueror_eidolons/tentacular_conqueror_tentacular_conqueror_eidolons.vmdl',
      'models/items/enigma/eidolon/ti9_cache_enigma_lord_of_luminaries_eidolons/ti9_cache_enigma_lord_of_luminaries_eidolons.vmdl',
      'models/items/enigma/eidolon/world_eater_eidelon/world_eater_eidelon.vmdl',
    ],
  },

  npc_dota_elder_titan_ancestral_spirit: {
    name: 'Astral Spirit',
    model: 'models/heroes/elder_titan/ancestral_spirit.vmdl',
  },

  npc_dota_furion_treant: {
    name: 'Treant',
    model: 'models/heroes/furion/treant.vmdl',
    match: matchByModelID,
    variants: [
      'models/items/furion/treant_flower_1.vmdl',
      'models/items/furion/treant_stump.vmdl',
      'models/items/furion/treant/abyssal_prophet_abyssal_prophet_treant/abyssal_prophet_abyssal_prophet_treant.vmdl',
      'models/items/furion/treant/allfather_of_nature_treant/allfather_of_nature_treant.vmdl',
      'models/items/furion/treant/defender_of_the_jungle_lakad_coconut/defender_of_the_jungle_lakad_coconut.vmdl',
      'models/items/furion/treant/eternalseasons_treant/eternalseasons_treant.vmdl',
      'models/items/furion/treant/father_treant/father_treant.vmdl',
      'models/items/furion/treant/fungal_lord_shroomthing/fungal_lord_shroomthing.vmdl',
      'models/items/furion/treant/furion_treant_nelum_red/furion_treant_nelum_red.vmdl',
      'models/items/furion/treant/hallowed_horde/hallowed_horde.vmdl',
      'models/items/furion/treant/np_cute_cactus_treant/np_cute_cactus_treant.vmdl',
      'models/items/furion/treant/np_desert_traveller_treant/np_desert_traveller_treant.vmdl',
      'models/items/furion/treant/primeval_treant/primeval_treant.vmdl',
      'models/items/furion/treant/ravenous_woodfang/ravenous_woodfang.vmdl',
      'models/items/furion/treant/shroomling_treant/shroomling_treant.vmdl',
      'models/items/furion/treant/supreme_gardener_treants/supreme_gardener_treants.vmdl',
      'models/items/furion/treant/the_ancient_guardian_the_ancient_treants/the_ancient_guardian_the_ancient_treants.vmdl',
      'models/items/furion/treant/treant_cis/treant_cis.vmdl',
    ],
  },

  npc_dota_grimstroke_ink_creature: {
    name: 'Phantom',
    model: 'models/heroes/grimstroke/ink_phantom.vmdl',
    match: matchByModelID,
  },

  npc_dota_gyrocopter_homing_missile: {
    name: 'Homing Missile',
    model: 'models/heroes/gyro/gyro_missile.vmdl',
    match: matchByModelID,
    variants: [
      'models/items/gyrocopter/dwarven_gyrocopter_off_hand/dwarven_gyrocopter_off_hand.vmdl',
      'models/items/gyrocopter/emerging_dragon_attack/emerging_dragon_attack.vmdl',
      'models/items/gyrocopter/emerging_dragon/emerging_dragon.vmdl',
      'models/items/gyrocopter/flamed_falcon_patrol_off_hand/flamed_falcon_patrol_off_hand.vmdl',
      'models/items/gyrocopter/flying_dutchman_offhand/flying_dutchman_offhand.vmdl',
      'models/items/gyrocopter/g17_flying_fortress_offhand/g17_flying_fortress_offhand.vmdl',
      'models/items/gyrocopter/gyro_allied_commander_off_hand/gyro_allied_commander_off_hand.vmdl',
      'models/items/gyrocopter/gyro_ti10_immortal_missile/gyro_ti10_immortal_missile.vmdl',
      'models/items/gyrocopter/gyros_gift_copter_off_hand_bluesnow/gyros_gift_copter_off_hand_bluesnow.vmdl',
      'models/items/gyrocopter/rainmaker_offhand/rainmaker_offhand.vmdl',
      'models/items/gyrocopter/skyhigh_bomb_missle/skyhigh_bomb.vmdl',
      'models/items/gyrocopter/submersible_aircraft_08_off_hand/submersible_aircraft_08_off_hand.vmdl',
      'models/items/gyrocopter/thunderbolt_quadcopter_off_hand/thunderbolt_quadcopter_off_hand.vmdl',
      'models/items/gyrocopter/ti8_gyro_digger_wasp_copter_off_hand/ti8_gyro_digger_wasp_copter_off_hand.vmdl',
      'models/items/gyrocopter/ti9_cache_gyro_airborne_machete_off_hand/ti9_cache_gyro_airborne_machete_off_hand.vmdl',
    ],
  },

  npc_dota_ignis_fatuus: {
    name: 'Will-o-Wisp',
    model: 'models/heroes/keeper_of_the_light/kotl_wisp.vmdl',
  },

  npc_dota_invoker_forged_spirit: {
    name: 'Forged Spirit',
    model: 'models/heroes/invoker/forge_spirit.vmdl',
  },

  npc_dota_juggernaut_healing_ward: {
    name: 'Healing Ward',
    model: 'models/heroes/juggernaut/jugg_healing_ward.vmdl',
    match: matchByModelID,
    variants: [
      'models/items/juggernaut/ward_foo.vmdl',
      'models/items/juggernaut/ward/dc_wardupate/dc_wardupate.vmdl',
      'models/items/juggernaut/ward/fall20_juggernaut_katz_ward/fall20_juggernaut_katz_ward.vmdl',
      'models/items/juggernaut/ward/fortunes_tout/fortunes_tout.vmdl',
      'models/items/juggernaut/ward/frostivus2018_jugg_northern_wanderer_ward/frostivus2018_jugg_northern_wanderer_ward.vmdl',
      'models/items/juggernaut/ward/healing_gills_of_the_lost_isles/healing_gills_of_the_lost_isles.vmdl',
      'models/items/juggernaut/ward/sinister_shadow_healing_cauldron/sinister_shadow_healing_cauldron.vmdl',
      'models/items/juggernaut/ward/sinister_shadow_helloween_cauldron/sinister_shadow_helloween_cauldron.vmdl',
      'models/items/juggernaut/ward/susano_os_descendant_healing_ward/susano_os_descendant_healing_ward.vmdl',
    ],
  },

  npc_dota_lich_ice_spire: {
    name: 'Ice Spire',
    model: 'models/heroes/lich/ice_spire.vmdl',
  },

  npc_dota_lone_druid_bear: {
    name: 'Spirit Bear',
    model: 'models/heroes/lone_druid/spirit_bear.vmdl',
  },

  npc_dota_lycan_wolf: {
    name: 'Lycan Wolf',
    model: 'models/heroes/lycan/summon_wolves.vmdl',
    match: matchByModelID,
    variants: [
      'models/items/lycan/wolves/_ascension_of_the_hallowed_beast_summons/_ascension_of_the_hallowed_beast_summons.vmdl',
      'models/items/lycan/wolves/alpha_summon_01/alpha_summon_01.vmdl',
      'models/items/lycan/wolves/ambry_summon/ambry_summon.vmdl',
      'models/items/lycan/wolves/blood_moon_hunter_wolves/blood_moon_hunter_wolves.vmdl',
      'models/items/lycan/wolves/frostivus2018_lycan_winter_snow_wolf_wolves/dpc_2022_frostivus2018_lycan_winter_snow_wolf_wolves.vmdl',
      'models/items/lycan/wolves/frostivus2018_lycan_winter_snow_wolf_wolves/frostivus2018_lycan_winter_snow_wolf_wolves.vmdl',
      'models/items/lycan/wolves/hunter_kings_wolves/hunter_kings_wolves.vmdl',
      'models/items/lycan/wolves/icewrack_pack/icewrack_pack.vmdl',
      'models/items/lycan/wolves/mutant_exorcist_summon/mutant_exorcist_summon.vmdl',
      'models/items/lycan/wolves/watchdog_lycan_summons/watchdog_lycan_summons.vmdl',
    ],
  },

  npc_dota_necronomicon_warrior: {
    name: 'Necronomicon Warrior',
    model: 'models/creeps/item_creeps/i_creep_necro_warrior/necro_warrior.vmdl',
    match: matchByModelID,
  },

  npc_dota_necronomicon_archer: {
    name: 'Necronomicon Archer',
    model: 'models/creeps/item_creeps/i_creep_necro_archer/necro_archer.vmdl',
    match: matchByModelID,
  },

  npc_dota_phoenix_sun: {
    name: 'Phoenix Sun',
    model: 'models/heroes/phoenix/phoenix_egg.vmdl',
    match: matchByModelID,
    variants: [
      'models/items/phoenix/ultimate/aristocratic_rebirth_supernova/aristocratic_rebirth_supernova.vmdl',
      'models/items/phoenix/ultimate/blazing_wing_blazing_egg/blazing_wing_blazing_egg.vmdl',
      'models/items/phoenix/ultimate/eye_of_the_sun_sun_pyramid/eye_of_the_sun_sun_pyramid.vmdl',
      'models/items/phoenix/ultimate/golden_nirvana_golden_nirvana_nova/golden_nirvana_golden_nirvana_nova.vmdl',
      'models/items/phoenix/ultimate/nirvana_spiritual_supernova/nirvana_spiritual_supernova.vmdl',
      'models/items/phoenix/ultimate/ti8_phoenix_heart_of_volcano_egg/ti8_phoenix_heart_of_volcano_egg.vmdl',
      'models/items/rubick/rubick_arcana/rubick_arcana_phoenix_egg.vmdl',
    ],
  },

  npc_dota_pugna_nether_ward: {
    name: 'Nether Ward',
    model: 'models/heroes/pugna/pugna_ward.vmdl',
    match: matchByModelID,
    variants: [
      'models/items/pugna/ward/dplus_battlemages_fury_ward/dplus_battlemages_fury_ward.vmdl',
      'models/items/pugna/ward/furious_phantasm_ward/furious_phantasm_ward.vmdl',
      'models/items/pugna/ward/nether_grandmasters_ward/nether_grandmasters_ward.vmdl',
      'models/items/pugna/ward/nether_heart/nether_heart.vmdl',
      'models/items/pugna/ward/pugna_researcher_of_oblivion_magic_ward/pugna_researcher_of_oblivion_magic_ward.vmdl',
      'models/items/pugna/ward/tentaclesofnetherreach/tentaclesofnetherreach.vmdl',
      'models/items/pugna/ward/weta_call_of_the_nether_lotus_ward/weta_call_of_the_nether_lotus_ward.vmdl',
    ],
  },

  npc_dota_rattletrap_cog: {
    name: 'Power Cog',
    model: 'models/heroes/rattletrap/rattletrap_cog.vmdl',
  },

  npc_dota_roshan: {
    name: 'Roshan',
    model: 'models/creeps/roshan/roshan.vmdl',
  },

  npc_dota_shadowshaman_serpentward: {
    name: 'Serpent Ward',
    model: 'models/heroes/shadowshaman/shadowshaman_totem.vmdl',
  },

  npc_dota_techies_land_mine: {
    name: 'Proximity Mine',
    model: 'models/heroes/techies/fx_techiesfx_mine.vmdl',
    match: matchByModelID,
    variants: [
      'models/items/techies/bigshot/fx_bigshot_mine.vmdl',
      'models/items/techies/techies_ti9_immortal_prox_mine/techies_ti9_immortal_prox_mine.vmdl',
    ],
  },

  npc_dota_techies_minefield_sign: {
    name: 'Minefield Sign',
    model: 'models/heroes/techies/techies_sign.vmdl',
  },

  npc_dota_techies_stasis_trap: {
    name: 'Stasis Trap',
    model: 'models/heroes/techies/fx_techiesfx_stasis.vmdl',
    match: matchByModelID,
    variants: [
      'models/items/techies/bigshot/fx_bigshot_stasis.vmdl',
    ],
  },

  npc_dota_techies_remote_mine: {
    name: 'Remote Mine',
    model: 'models/heroes/techies/fx_techies_remotebomb.vmdl',
    match: matchByModelID,
    variants: [
      'models/heroes/techies/fx_techies_remote_cart_elephant.vmdl',
      'models/heroes/techies/fx_techies_remote_cart_pig.vmdl',
      'models/heroes/techies/fx_techies_remotebomb_rubick.vmdl',
      'models/items/techies/bigshot/bigshot_remotebomb.vmdl',
      'models/items/techies/crazy_night_of_magic_mines/crazy_night_of_magic_mines.vmdl',
      'models/items/techies/frostivus2018_techies_squad_penguins_bomb/frostivus2018_techies_squad_penguins_bomb.vmdl',
      'models/items/techies/frostivus2018_techies_team_nutcracker_remote/frostivus2018_techies_team_nutcracker_remote.vmdl',
      'models/items/techies/techies_ti9_immortal_remote_mine/techies_ti9_immortal_remote_mine.vmdl',
      'models/items/techies/ti8_techies_subterranean_sapper_squad_bomb/ti8_techies_subterranean_sapper_squad_bomb.vmdl',
    ],
  },

  npc_dota_templar_assassin_psionic_trap: {
    name: 'Psionic Trap',
    // Visual model: models/heroes/lanaya/lanaya_trap_crystal.vmdl
    model: 'models/heroes/lanaya/lanaya_trap_crystal_invis.vmdl',
    match: matchByModelID,
  },

  npc_dota_tusk_frozen_sigil: {
    name: 'Frozen Sigil',
    model: 'models/particle/tusk_sigil.vmdl',
  },

  npc_dota_unit_undying_tombstone: {
    name: 'Tombstone',
    model: 'models/heroes/undying/undying_tower.vmdl',
  },

  npc_dota_unit_undying_zombie: {
    name: 'Undying Zombie',
    model: 'models/heroes/undying/undying_minion.vmdl',
  },

  npc_dota_venomancer_plagueward: {
    name: 'Plague Ward',
    model: 'models/heroes/venomancer/venomancer_ward.vmdl',
  },

  npc_dota_visage_familiar: {
    name: 'Familiar',
    model: 'models/heroes/visage/visage_familiar.vmdl',
  },

  npc_dota_ward_base: {
    name: 'Observer Ward',
    model: 'models/props_gameplay/default_ward.vmdl',
  },

  npc_dota_ward_base_truesight: {
    name: 'Sentry Ward',
    model: 'models/props_gameplay/default_ward.vmdl',
  },

  npc_dota_warlock_golem: {
    name: 'Warlock Golem',
    model: 'models/heroes/warlock/warlock_demon.vmdl',
  },

  npc_dota_weaver_swarm: {
    name: 'Beetle',
    model: 'models/heroes/weaver/weaver_bug.vmdl',
    match: matchByModelID,
    variants: [
      'models/items/weaver/weaver_immortal_head_ti7/weaver_bug_ti7.vmdl',
    ],
  },

  npc_dota_witch_doctor_death_ward: {
    name: 'Death Ward',
    model: 'models/heroes/witchdoctor/witchdoctor_ward.vmdl',
  },

  npc_dota_zeus_cloud: {
    name: 'Nimbus',
    model: 'models/heroes/zeus/zeus_sigil.vmdl',
  },

  //
  // Lane creeps
  //

  npc_dota_creep_badguys_melee: {
    name: 'Dire Melee Creep',
    model: 'models/creeps/lane_creeps/creep_bad_melee/creep_bad_melee.vmdl',
    match: matchByModelID,
  },

  npc_dota_creep_badguys_melee_upgraded: {
    name: 'Dire Super Melee Creep',
    model: 'models/creeps/lane_creeps/creep_bad_melee/creep_bad_melee.vmdl',
    match: matchByModelID,
  },

  npc_dota_creep_badguys_melee_upgraded_mega: {
    name: 'Dire Mega Melee Creep',
    model: 'models/creeps/lane_creeps/creep_bad_melee/creep_bad_melee_mega.vmdl',
    match: matchByModelID,
  },

  npc_dota_creep_badguys_ranged: {
    name: 'Dire Ranged Creep',
    model: 'models/creeps/lane_creeps/creep_bad_ranged/lane_dire_ranged.vmdl',
    match: matchByModelID,
  },

  npc_dota_creep_badguys_ranged_upgraded: {
    name: 'Dire Super Ranged Creep',
    model: 'models/creeps/lane_creeps/creep_bad_ranged/lane_dire_ranged.vmdl',
    match: matchByModelID,
  },

  npc_dota_creep_badguys_ranged_upgraded_mega: {
    name: 'Dire Mega Ranged Creep',
    model: 'models/creeps/lane_creeps/creep_bad_ranged/lane_dire_ranged_mega.vmdl',
    match: matchByModelID,
  },

  npc_dota_badguys_siege: {
    name: 'Dire Siege Creep',
    model: 'models/creeps/lane_creeps/creep_bad_siege/creep_bad_siege.vmdl',
    match: matchByModelID,
  },

  npc_dota_badguys_siege_upgraded: {
    name: 'Dire Super Siege Creep',
    model: 'models/creeps/lane_creeps/creep_bad_siege/creep_bad_siege.vmdl',
    match: matchByModelID,
  },

  npc_dota_badguys_siege_upgraded_mega: {
    name: 'Dire Mega Siege Creep',
    model: 'models/creeps/lane_creeps/creep_bad_siege/creep_bad_siege.vmdl',
    match: matchByModelID,
  },

  npc_dota_creep_goodguys_melee: {
    name: 'Radiant Melee Creep',
    model: 'models/creeps/lane_creeps/creep_radiant_melee/radiant_melee.vmdl',
    match: matchByModelID,
  },

  npc_dota_creep_goodguys_melee_upgraded: {
    name: 'Radiant Super Melee Creep',
    model: 'models/creeps/lane_creeps/creep_radiant_melee/radiant_melee.vmdl',
    match: matchByModelID,
  },

  npc_dota_creep_goodguys_melee_upgraded_mega: {
    name: 'Radiant Mega Melee Creep',
    model: 'models/creeps/lane_creeps/creep_radiant_melee/radiant_melee_mega.vmdl',
    match: matchByModelID,
  },

  npc_dota_creep_goodguys_ranged: {
    name: 'Radiant Ranged Creep',
    model: 'models/creeps/lane_creeps/creep_radiant_ranged/radiant_ranged.vmdl',
    match: matchByModelID,
  },

  npc_dota_creep_goodguys_ranged_upgraded: {
    name: 'Radiant Super Ranged Creep',
    model: 'models/creeps/lane_creeps/creep_radiant_ranged/radiant_ranged.vmdl',
    match: matchByModelID,
  },

  npc_dota_creep_goodguys_ranged_upgraded_mega: {
    name: 'Radiant Mega Ranged Creep',
    model: 'models/creeps/lane_creeps/creep_radiant_ranged/radiant_ranged_mega.vmdl',
    match: matchByModelID,
  },

  npc_dota_goodguys_siege: {
    name: 'Radiant Siege Creep',
    model: 'models/creeps/lane_creeps/creep_good_siege/creep_good_siege.vmdl',
    match: matchByModelID,
  },

  npc_dota_goodguys_siege_upgraded: {
    name: 'Radiant Super Siege Creep',
    model: 'models/creeps/lane_creeps/creep_good_siege/creep_good_siege.vmdl',
    match: matchByModelID,
  },

  npc_dota_goodguys_siege_upgraded_mega: {
    name: 'Radiant Mega Siege Creep',
    model: 'models/creeps/lane_creeps/creep_good_siege/creep_good_siege.vmdl',
    match: matchByModelID,
  },

  //
  // Neutral creeps
  //

  npc_dota_dark_troll_warlord_skeleton_warrior: {
    name: 'Skeleton',
    model: 'models/creeps/neutral_creeps/n_creep_troll_skeleton/n_creep_skeleton_melee.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_alpha_wolf: {
    name: 'Alpha Wolf',
    model: 'models/creeps/neutral_creeps/n_creep_worg_large/n_creep_worg_large.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_giant_wolf: {
    name: 'Giant Wolf',
    model: 'models/creeps/neutral_creeps/n_creep_worg_small/n_creep_worg_small.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_big_thunder_lizard: {
    name: 'Ancient Thunderhide',
    model: 'models/creeps/neutral_creeps/n_creep_thunder_lizard/n_creep_thunder_lizard_big.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_small_thunder_lizard: {
    name: 'Ancient Rumblehide',
    model: 'models/creeps/neutral_creeps/n_creep_thunder_lizard/n_creep_thunder_lizard_small.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_black_drake: {
    name: 'Ancient Black Drake',
    model: 'models/creeps/neutral_creeps/n_creep_black_drake/n_creep_black_drake.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_black_dragon: {
    name: 'Ancient Black Dragon',
    model: 'models/creeps/neutral_creeps/n_creep_black_dragon/n_creep_black_dragon.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_centaur_outrunner: {
    name: 'Centaur Courser',
    model: 'models/creeps/neutral_creeps/n_creep_centaur_med/n_creep_centaur_med.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_centaur_khan: {
    name: 'Centaur Conqueror',
    model: 'models/creeps/neutral_creeps/n_creep_centaur_lrg/n_creep_centaur_lrg.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_dark_troll: {
    name: 'Hill Troll',
    model: 'models/creeps/neutral_creeps/n_creep_troll_dark_a/n_creep_troll_dark_a.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_dark_troll_warlord: {
    name: 'Dark Troll Summoner',
    model: 'models/creeps/neutral_creeps/n_creep_troll_dark_b/n_creep_troll_dark_b.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_enraged_wildkin: {
    name: 'Wildwing Ripper',
    model: 'models/creeps/neutral_creeps/n_creep_vulture_a/n_creep_vulture_a.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_wildkin: {
    name: 'Wildwing',
    model: 'models/creeps/neutral_creeps/n_creep_vulture_b/n_creep_vulture_b.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_fel_beast: {
    name: 'Fell Spirit',
    model: 'models/creeps/neutral_creeps/n_creep_ghost_b/n_creep_ghost_b.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_ghost: {
    name: 'Ghost',
    model: 'models/creeps/neutral_creeps/n_creep_ghost_a/n_creep_ghost_a.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_forest_troll_berserker: {
    name: 'Hill Troll Berserker',
    model: 'models/creeps/neutral_creeps/n_creep_forest_trolls/n_creep_forest_troll_berserker.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_forest_troll_high_priest: {
    name: 'Hill Troll Priest',
    model: 'models/creeps/neutral_creeps/n_creep_forest_trolls/n_creep_forest_troll_high_priest.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_gnoll_assassin: {
    name: 'Vhoul Assassin',
    model: 'models/creeps/neutral_creeps/n_creep_gnoll/n_creep_gnoll.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_granite_golem: {
    name: 'Ancient Granite Golem',
    model: 'models/creeps/neutral_creeps/n_creep_golem_a/neutral_creep_golem_a.vmdl',
    match(unit) {
      return matchByModelID(unit, this) && unit.level === 6;
    },
  },

  npc_dota_neutral_rock_golem: {
    name: 'Ancient Rock Golem',
    model: 'models/creeps/neutral_creeps/n_creep_golem_a/neutral_creep_golem_a.vmdl',
    match(unit) {
      return matchByModelID(unit, this) && unit.level === 5;
    },
  },

  npc_dota_neutral_harpy_scout: {
    name: 'Harpy Scout',
    model: 'models/creeps/neutral_creeps/n_creep_harpy_a/n_creep_harpy_a.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_harpy_storm: {
    name: 'Harpy Stormcrafter',
    model: 'models/creeps/neutral_creeps/n_creep_harpy_b/n_creep_harpy_b.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_jungle_stalker: {
    name: 'Ancient Stalker',
    model: 'models/creeps/neutral_creeps/n_creep_gargoyle/n_creep_gargoyle.vmdl',
    match(unit) {
      return matchByModelID(unit, this) && unit.level === 5;
    },
  },

  npc_dota_neutral_elder_jungle_stalker: {
    name: 'Ancient Primal Stalker',
    model: 'models/creeps/neutral_creeps/n_creep_gargoyle/n_creep_gargoyle.vmdl',
    match(unit) {
      return matchByModelID(unit, this) && unit.level === 6;
    },
  },

  npc_dota_neutral_frostbitten_golem: {
    name: 'Ancient Frostbitten Golem',
    model: 'models/creeps/ice_biome/frostbitten/n_creep_frostbitten_swollen01.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_ice_shaman: {
    name: 'Ancient Ice Shaman',
    model: 'models/creeps/ice_biome/giant/ice_giant01.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_kobold: {
    name: 'Kobold',
    model: 'models/creeps/neutral_creeps/n_creep_kobold/kobold_c/n_creep_kobold_c.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_kobold_tunneler: {
    name: 'Kobold Soldier',
    model: 'models/creeps/neutral_creeps/n_creep_kobold/kobold_b/n_creep_kobold_b.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_kobold_taskmaster: {
    name: 'Kobold Foreman',
    model: 'models/creeps/neutral_creeps/n_creep_kobold/kobold_a/n_creep_kobold_a.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_mud_golem: {
    name: 'Mud Golem',
    model: 'models/creeps/neutral_creeps/n_creep_golem_b/n_creep_golem_b.vmdl',
    match(unit) {
      return matchByModelID(unit, this) && unit.hpMax >= 750;
    },
  },

  npc_dota_neutral_mud_golem_split: {
    name: 'Shard Golem',
    model: 'models/creeps/neutral_creeps/n_creep_golem_b/n_creep_golem_b.vmdl',
    match(unit) {
      return matchByModelID(unit, this) && unit.hpMax <= 400;
    },
  },

  npc_dota_neutral_mud_golem_split_doom: {
    name: 'Doom Shard',
    model: 'models/heroes/doom/doom.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_ogre_mauler: {
    name: 'Ogre Bruiser',
    model: 'models/creeps/neutral_creeps/n_creep_ogre_med/n_creep_ogre_med.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_ogre_magi: {
    name: 'Ogre Frostmage',
    model: 'models/creeps/neutral_creeps/n_creep_ogre_lrg/n_creep_ogre_lrg.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_polar_furbolg_champion: {
    name: 'Hellbear',
    model: 'models/creeps/neutral_creeps/n_creep_beast/n_creep_beast.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_polar_furbolg_ursa_warrior: {
    name: 'Hellbear Smasher',
    model: 'models/creeps/neutral_creeps/n_creep_furbolg/n_creep_furbolg_disrupter.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_prowler_acolyte: {
    name: 'Ancient Prowler Acolyte',
    model: 'models/creeps/neutral_creeps/n_creep_satyr_spawn_a/n_creep_satyr_spawn_b.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_prowler_shaman: {
    name: 'Ancient Prowler Shaman',
    model: 'models/creeps/neutral_creeps/n_creep_satyr_spawn_a/n_creep_satyr_spawn_a.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_satyr_soulstealer: {
    name: 'Satyr Mindstealer',
    model: 'models/creeps/neutral_creeps/n_creep_satyr_c/n_creep_satyr_c.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_satyr_hellcaller: {
    name: 'Satyr Tormenter',
    model: 'models/creeps/neutral_creeps/n_creep_satyr_a/n_creep_satyr_a.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_satyr_trickster: {
    name: 'Satyr Banisher',
    model: 'models/creeps/neutral_creeps/n_creep_satyr_b/n_creep_satyr_b.vmdl',
    match: matchByModelID,
  },

  npc_dota_neutral_warpine_raider: {
    name: 'Warpine Raider',
    model: 'models/creeps/pine_cone/pine_cone.vmdl',
    match: matchByModelID,
  },

  //
  // Buildings
  //

  npc_dota_badguys_fort: {
    name: 'Dire Ancient',
    model: 'models/props_structures/dire_ancient_base001.vmdl',
    match: (unit) => unit.internalName === 'dota_badguys_fort',
  },

  npc_dota_badguys_melee_rax: {
    name: 'Dire Melee Barracks',
    model: 'models/props_structures/dire_barracks_melee001.vmdl',
    match: (unit) => unit.internalName.startsWith('bad_rax_melee'),
  },

  npc_dota_badguys_range_rax: {
    name: 'Dire Ranged Barracks',
    model: 'models/props_structures/dire_barracks_ranged001.vmdl',
    match: (unit) => unit.internalName.startsWith('bad_rax_range'),
  },

  npc_dota_badguys_tower: {
    name: 'Dire Tower',
    model: 'models/props_structures/dire_tower002.vmdl',
    match: (unit) => unit.internalName.startsWith('dota_badguys_tower'),
  },

  npc_dota_goodguys_fort: {
    name: 'Radiant Ancient',
    model: 'models/props_structures/radiant_ancient001.vmdl',
    match: (unit) => unit.internalName === 'dota_goodguys_fort',
  },

  npc_dota_goodguys_melee_rax: {
    name: 'Radiant Melee Barracks',
    model: 'models/props_structures/radiant_melee_barracks001.vmdl',
    match: (unit) => unit.internalName.startsWith('good_rax_melee'),
  },

  npc_dota_goodguys_range_rax: {
    name: 'Radiant Ranged Barracks',
    model: 'models/props_structures/radiant_ranged_barracks001.vmdl',
    match: (unit) => unit.internalName.startsWith('good_rax_range'),
  },

  npc_dota_goodguys_tower: {
    name: 'Radiant Tower',
    model: 'models/props_structures/radiant_tower002.vmdl',
    match: (unit) => unit.internalName.startsWith('dota_goodguys_tower'),
  },

  npc_dota_watch_tower: {
    name: 'Outpost',
    model: 'models/props_structures/outpost.vmdl',
    match: (unit) => unit.internalName.startsWith('npc_dota_watch_tower'),
  },

});
