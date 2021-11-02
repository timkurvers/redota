(self.webpackChunk_timkurvers_redota=self.webpackChunk_timkurvers_redota||[]).push([[319],{5937:(e,t,a)=>{"use strict";a.d(t,{Y4:()=>l,Sw:()=>o,uP:()=>r,TO:()=>s,Uc:()=>p,Dt:()=>n});var r=a(5878),s=a(8173),n=a(7529),i=a(232);const l=Object.entries(i).reduce(((e,[t,a])=>{const{attrib:r=[],cd:s,dmg:n,mc:i}=a,l=[...r.map((e=>e.value)),s,n,i];let o=1;for(const e of l)if(Array.isArray(e)){o=e.length;break}return e[t]={...a,maxLevel:o},e}),{});a(1590);const o=Object.values(r).reduce(((e,t)=>(e[t.id]=t,e)),{});var d=a(7218),m=a(8764).Buffer;const c=(e,t)=>(65535&e)*t+(((e>>>16)*t&65535)<<16)>>>0,h=(e,t=3987459567)=>{const a=1540483477;let r=t^e.length,s=0;const n=m.from(e),i=new d.Z(n);for(;i.remaining>=8;){let e=i.readUint32LE();e=c(e,a),e^=e>>>24,e=c(e,a),r=c(r,a),r^=e;let t=i.readUint32LE();t=c(t,a),t^=t>>>24,t=c(t,a),s=c(s,a),s^=t}if(i.remaining>=4){let e=i.readUint32LE();e=c(e,a),e^=e>>>24,e=c(e,a),r=c(r,a),r^=e}switch(i.remaining){case 3:s^=(255&i.buffer[i.pos+2])<<16;case 2:s^=(255&i.buffer[i.pos+1])<<8;case 1:s^=255&i.buffer[i.pos],s=c(s,a)}return r^=s>>>18,r=c(r,a),s^=r>>>22,s=c(s,a),r^=s>>>17,r=c(r,a),s^=r>>>19,s=c(s,a),(0xFFFFFFFFn&BigInt(r))<<32n|0xFFFFFFFFn&BigInt(s)},_=function(e,t=this){return e.modelID in t.modelIDs},p=(e=>{for(const[,t]of Object.entries(e)){const e={[h(t.model)]:t.model};if(t.variants)for(const a of t.variants)e[h(a)]=a;t.modelIDs=e}return e})({npc_dota_beastmaster_boar:{name:"Boar",model:"models/heroes/beastmaster/beastmaster_beast.vmdl"},npc_dota_beastmaster_hawk:{name:"Hawk",model:"models/heroes/beastmaster/beastmaster_bird.vmdl"},npc_dota_brewmaster_earth:{name:"Earth",model:"models/heroes/brewmaster/brewmaster_earthspirit.vmdl"},npc_dota_brewmaster_fire:{name:"Fire",model:"models/heroes/brewmaster/brewmaster_firespirit.vmdl"},npc_dota_brewmaster_storm:{name:"Storm",model:"models/heroes/brewmaster/brewmaster_windspirit.vmdl"},npc_dota_brewmaster_void:{name:"Void",model:"models/heroes/brewmaster/brewmaster_voidspirit.vmdl"},npc_dota_broodmother_spiderling:{name:"Spiderling",model:"models/heroes/broodmother/spiderling.vmdl",match(e){return _(e,this)&&3===e.level}},npc_dota_broodmother_spiderite:{name:"Spiderite",model:"models/heroes/broodmother/spiderling.vmdl",match(e){return _(e,this)&&2===e.level}},npc_dota_broodmother_web:{name:"Spin Web",model:"???"},npc_dota_clinkz_skeleton_archer:{name:"Skeleton Archer",model:"models/heroes/clinkz/clinkz_archer.vmdl"},npc_dota_courier:{name:"Courier",model:"models/props_gameplay/donkey.vmdl"},npc_dota_flying_courier:{name:"Flying Courier",model:"models/props_gameplay/donkey_wings.vmdl"},npc_dota_earth_spirit_stone:{name:"Stone Remnant",model:"models/heroes/earth_spirit/stonesummon.vmdl"},npc_dota_eidolon:{name:"Eidolon",model:"models/heroes/enigma/eidelon.vmdl",match:_,variants:["models/items/enigma/eidolon/absolute_zero_updated_eidolon/absolute_zero_updated_eidolon.vmdl","models/items/enigma/eidolon/artifacts_of_crushing_depths_eidolon_of_crushing_depths/artifacts_of_crushing_depths_eidolon_of_crushing_depths.vmdl","models/items/enigma/eidolon/enigma_seer_of_infinity_space_eidolon/enigma_seer_of_infinity_space_eidolon.vmdl","models/items/enigma/eidolon/geodesic/geodesic.vmdl","models/items/enigma/eidolon/life_cycle_life_cycle_eidolons/life_cycle_life_cycle_eidolons.vmdl","models/items/enigma/eidolon/tentacular_conqueror_tentacular_conqueror_eidolons/tentacular_conqueror_tentacular_conqueror_eidolons.vmdl","models/items/enigma/eidolon/ti9_cache_enigma_lord_of_luminaries_eidolons/ti9_cache_enigma_lord_of_luminaries_eidolons.vmdl"]},npc_dota_elder_titan_ancestral_spirit:{name:"Astral Spirit",model:"models/heroes/elder_titan/ancestral_spirit.vmdl"},npc_dota_furion_treant:{name:"Treant",model:"models/heroes/furion/treant.vmdl",match:_,variants:["models/items/furion/treant_flower_1.vmdl","models/items/furion/treant_stump.vmdl","models/items/furion/treant/abyssal_prophet_abyssal_prophet_treant/abyssal_prophet_abyssal_prophet_treant.vmdl","models/items/furion/treant/allfather_of_nature_treant/allfather_of_nature_treant.vmdl","models/items/furion/treant/defender_of_the_jungle_lakad_coconut/defender_of_the_jungle_lakad_coconut.vmdl","models/items/furion/treant/eternalseasons_treant/eternalseasons_treant.vmdl","models/items/furion/treant/father_treant/father_treant.vmdl","models/items/furion/treant/fungal_lord_shroomthing/fungal_lord_shroomthing.vmdl","models/items/furion/treant/furion_treant_nelum_red/furion_treant_nelum_red.vmdl","models/items/furion/treant/hallowed_horde/hallowed_horde.vmdl","models/items/furion/treant/primeval_treant/primeval_treant.vmdl","models/items/furion/treant/ravenous_woodfang/ravenous_woodfang.vmdl","models/items/furion/treant/shroomling_treant/shroomling_treant.vmdl","models/items/furion/treant/the_ancient_guardian_the_ancient_treants/the_ancient_guardian_the_ancient_treants.vmdl","models/items/furion/treant/treant_cis/treant_cis.vmdl"]},npc_dota_grimstroke_ink_creature:{name:"Phantom",model:"models/heroes/grimstroke/ink_phantom.vmdl",match:_},npc_dota_gyrocopter_homing_missile:{name:"Homing Missile",model:"models/heroes/gyro/gyro_missile.vmdl",match:_,variants:["models/items/gyrocopter/dwarven_gyrocopter_off_hand/dwarven_gyrocopter_off_hand.vmdl","models/items/gyrocopter/emerging_dragon_attack/emerging_dragon_attack.vmdl","models/items/gyrocopter/emerging_dragon/emerging_dragon.vmdl","models/items/gyrocopter/flamed_falcon_patrol_off_hand/flamed_falcon_patrol_off_hand.vmdl","models/items/gyrocopter/flying_dutchman_offhand/flying_dutchman_offhand.vmdl","models/items/gyrocopter/g17_flying_fortress_offhand/g17_flying_fortress_offhand.vmdl","models/items/gyrocopter/gyro_allied_commander_off_hand/gyro_allied_commander_off_hand.vmdl","models/items/gyrocopter/gyro_ti10_immortal_missile/gyro_ti10_immortal_missile.vmdl","models/items/gyrocopter/gyros_gift_copter_off_hand_bluesnow/gyros_gift_copter_off_hand_bluesnow.vmdl","models/items/gyrocopter/rainmaker_offhand/rainmaker_offhand.vmdl","models/items/gyrocopter/skyhigh_bomb_missle/skyhigh_bomb.vmdl","models/items/gyrocopter/submersible_aircraft_08_off_hand/submersible_aircraft_08_off_hand.vmdl","models/items/gyrocopter/ti8_gyro_digger_wasp_copter_off_hand/ti8_gyro_digger_wasp_copter_off_hand.vmdl"]},npc_dota_ignis_fatuus:{name:"Will-o-Wisp",model:"models/heroes/keeper_of_the_light/kotl_wisp.vmdl"},npc_dota_invoker_forged_spirit:{name:"Forged Spirit",model:"models/heroes/invoker/forge_spirit.vmdl"},npc_dota_juggernaut_healing_ward:{name:"Healing Ward",model:"models/heroes/juggernaut/jugg_healing_ward.vmdl",match:_,variants:["models/items/juggernaut/ward_foo.vmdl","models/items/juggernaut/ward/dc_wardupate/dc_wardupate.vmdl","models/items/juggernaut/ward/fall20_juggernaut_katz_ward/fall20_juggernaut_katz_ward.vmdl","models/items/juggernaut/ward/fortunes_tout/fortunes_tout.vmdl","models/items/juggernaut/ward/frostivus2018_jugg_northern_wanderer_ward/frostivus2018_jugg_northern_wanderer_ward.vmdl","models/items/juggernaut/ward/healing_gills_of_the_lost_isles/healing_gills_of_the_lost_isles.vmdl","models/items/juggernaut/ward/sinister_shadow_healing_cauldron/sinister_shadow_healing_cauldron.vmdl","models/items/juggernaut/ward/sinister_shadow_helloween_cauldron/sinister_shadow_helloween_cauldron.vmdl","models/items/juggernaut/ward/susano_os_descendant_healing_ward/susano_os_descendant_healing_ward.vmdl"]},npc_dota_lich_ice_spire:{name:"Ice Spire",model:"models/heroes/lich/ice_spire.vmdl"},npc_dota_lone_druid_bear:{name:"Spirit Bear",model:"models/heroes/lone_druid/spirit_bear.vmdl"},npc_dota_lycan_wolf:{name:"Lycan Wolf",model:"models/heroes/lycan/summon_wolves.vmdl",match:_,variants:["models/items/lycan/wolves/alpha_summon_01/alpha_summon_01.vmdl","models/items/lycan/wolves/ambry_summon/ambry_summon.vmdl","models/items/lycan/wolves/blood_moon_hunter_wolves/blood_moon_hunter_wolves.vmdl","models/items/lycan/wolves/frostivus2018_lycan_winter_snow_wolf_wolves/frostivus2018_lycan_winter_snow_wolf_wolves.vmdl","models/items/lycan/wolves/hunter_kings_wolves/hunter_kings_wolves.vmdl","models/items/lycan/wolves/icewrack_pack/icewrack_pack.vmdl","models/items/lycan/wolves/mutant_exorcist_summon/mutant_exorcist_summon.vmdl"]},npc_dota_necronomicon_warrior:{name:"Necronomicon Warrior",model:"models/creeps/item_creeps/i_creep_necro_warrior/necro_warrior.vmdl",match:_},npc_dota_necronomicon_archer:{name:"Necronomicon Archer",model:"models/creeps/item_creeps/i_creep_necro_archer/necro_archer.vmdl",match:_},npc_dota_phoenix_sun:{name:"Phoenix Sun",model:"models/heroes/phoenix/phoenix_egg.vmdl",match:_,variants:["models/items/phoenix/ultimate/aristocratic_rebirth_supernova/aristocratic_rebirth_supernova.vmdl","models/items/phoenix/ultimate/blazing_wing_blazing_egg/blazing_wing_blazing_egg.vmdl","models/items/phoenix/ultimate/eye_of_the_sun_sun_pyramid/eye_of_the_sun_sun_pyramid.vmdl","models/items/phoenix/ultimate/golden_nirvana_golden_nirvana_nova/golden_nirvana_golden_nirvana_nova.vmdl","models/items/phoenix/ultimate/nirvana_spiritual_supernova/nirvana_spiritual_supernova.vmdl","models/items/phoenix/ultimate/ti8_phoenix_heart_of_volcano_egg/ti8_phoenix_heart_of_volcano_egg.vmdl","models/items/rubick/rubick_arcana/rubick_arcana_phoenix_egg.vmdl"]},npc_dota_pugna_nether_ward:{name:"Nether Ward",model:"models/heroes/pugna/pugna_ward.vmdl",match:_,variants:["models/items/pugna/ward/dplus_battlemages_fury_ward/dplus_battlemages_fury_ward.vmdl","models/items/pugna/ward/nether_grandmasters_ward/nether_grandmasters_ward.vmdl","models/items/pugna/ward/nether_heart/nether_heart.vmdl","models/items/pugna/ward/nether_heart/nether_heart.vmdl","models/items/pugna/ward/tentaclesofnetherreach/tentaclesofnetherreach.vmdl","models/items/pugna/ward/tentaclesofnetherreach/tentaclesofnetherreach.vmdl","models/items/pugna/ward/weta_call_of_the_nether_lotus_ward/weta_call_of_the_nether_lotus_ward.vmdl"]},npc_dota_rattletrap_cog:{name:"Power Cog",model:"models/heroes/rattletrap/rattletrap_cog.vmdl"},npc_dota_roshan:{name:"Roshan",model:"models/creeps/roshan/roshan.vmdl"},npc_dota_shadowshaman_serpentward:{name:"Serpent Ward",model:"models/heroes/shadowshaman/shadowshaman_totem.vmdl"},npc_dota_techies_land_mine:{name:"Proximity Mine",model:"models/heroes/techies/fx_techiesfx_mine.vmdl",match:_,variants:["models/items/techies/bigshot/fx_bigshot_mine.vmdl","models/items/techies/techies_ti9_immortal_prox_mine/techies_ti9_immortal_prox_mine.vmdl"]},npc_dota_techies_minefield_sign:{name:"Minefield Sign",model:"models/heroes/techies/techies_sign.vmdl"},npc_dota_techies_stasis_trap:{name:"Stasis Trap",model:"models/heroes/techies/fx_techiesfx_stasis.vmdl",match:_,variants:["models/items/techies/bigshot/fx_bigshot_stasis.vmdl"]},npc_dota_techies_remote_mine:{name:"Remote Mine",model:"models/heroes/techies/fx_techies_remotebomb.vmdl",match:_,variants:["models/heroes/techies/fx_techies_remotebomb_rubick.vmdl","models/items/techies/bigshot/bigshot_remotebomb.vmdl","models/items/techies/crazy_night_of_magic_mines/crazy_night_of_magic_mines.vmdl","models/items/techies/frostivus2018_techies_squad_penguins_bomb/frostivus2018_techies_squad_penguins_bomb.vmdl","models/items/techies/frostivus2018_techies_team_nutcracker_remote/frostivus2018_techies_team_nutcracker_remote.vmdl","models/items/techies/techies_ti9_immortal_remote_mine/techies_ti9_immortal_remote_mine.vmdl","models/items/techies/ti8_techies_subterranean_sapper_squad_bomb/ti8_techies_subterranean_sapper_squad_bomb.vmdl"]},npc_dota_templar_assassin_psionic_trap:{name:"Psionic Trap",model:"models/heroes/lanaya/lanaya_trap_crystal_invis.vmdl",match:_},npc_dota_tusk_frozen_sigil:{name:"Frozen Sigil",model:"models/particle/tusk_sigil.vmdl"},npc_dota_unit_undying_tombstone:{name:"Tombstone",model:"models/heroes/undying/undying_tower.vmdl"},npc_dota_unit_undying_zombie:{name:"Undying Zombie",model:"models/heroes/undying/undying_minion.vmdl"},npc_dota_venomancer_plagueward:{name:"Plague Ward",model:"models/heroes/venomancer/venomancer_ward.vmdl"},npc_dota_visage_familiar:{name:"Familiar",model:"models/heroes/visage/visage_familiar.vmdl"},npc_dota_ward_base:{name:"Observer Ward",model:"models/props_gameplay/default_ward.vmdl"},npc_dota_ward_base_truesight:{name:"Sentry Ward",model:"models/props_gameplay/default_ward.vmdl"},npc_dota_warlock_golem:{name:"Warlock Golem",model:"models/heroes/warlock/warlock_demon.vmdl"},npc_dota_weaver_swarm:{name:"Beetle",model:"models/heroes/weaver/weaver_bug.vmdl",match:_,variants:["models/items/weaver/weaver_immortal_head_ti7/weaver_bug_ti7.vmdl"]},npc_dota_witch_doctor_death_ward:{name:"Death Ward",model:"models/heroes/witchdoctor/witchdoctor_ward.vmdl"},npc_dota_zeus_cloud:{name:"Nimbus",model:"models/heroes/zeus/zeus_sigil.vmdl"},npc_dota_creep_badguys_melee:{name:"Dire Melee Creep",model:"models/creeps/lane_creeps/creep_bad_melee/creep_bad_melee.vmdl",match:_},npc_dota_creep_badguys_melee_upgraded:{name:"Dire Super Melee Creep",model:"models/creeps/lane_creeps/creep_bad_melee/creep_bad_melee.vmdl",match:_},npc_dota_creep_badguys_melee_upgraded_mega:{name:"Dire Mega Melee Creep",model:"models/creeps/lane_creeps/creep_bad_melee/creep_bad_melee_mega.vmdl",match:_},npc_dota_creep_badguys_ranged:{name:"Dire Ranged Creep",model:"models/creeps/lane_creeps/creep_bad_ranged/lane_dire_ranged.vmdl",match:_},npc_dota_creep_badguys_ranged_upgraded:{name:"Dire Super Ranged Creep",model:"models/creeps/lane_creeps/creep_bad_ranged/lane_dire_ranged.vmdl",match:_},npc_dota_creep_badguys_ranged_upgraded_mega:{name:"Dire Mega Ranged Creep",model:"models/creeps/lane_creeps/creep_bad_ranged/lane_dire_ranged_mega.vmdl",match:_},npc_dota_badguys_siege:{name:"Dire Siege Creep",model:"models/creeps/lane_creeps/creep_bad_siege/creep_bad_siege.vmdl",match:_},npc_dota_badguys_siege_upgraded:{name:"Dire Super Siege Creep",model:"models/creeps/lane_creeps/creep_bad_siege/creep_bad_siege.vmdl",match:_},npc_dota_badguys_siege_upgraded_mega:{name:"Dire Mega Siege Creep",model:"models/creeps/lane_creeps/creep_bad_siege/creep_bad_siege.vmdl",match:_},npc_dota_creep_goodguys_melee:{name:"Radiant Melee Creep",model:"models/creeps/lane_creeps/creep_radiant_melee/radiant_melee.vmdl",match:_},npc_dota_creep_goodguys_melee_upgraded:{name:"Radiant Super Melee Creep",model:"models/creeps/lane_creeps/creep_radiant_melee/radiant_melee.vmdl",match:_},npc_dota_creep_goodguys_melee_upgraded_mega:{name:"Radiant Mega Melee Creep",model:"models/creeps/lane_creeps/creep_radiant_melee/radiant_melee_mega.vmdl",match:_},npc_dota_creep_goodguys_ranged:{name:"Radiant Ranged Creep",model:"models/creeps/lane_creeps/creep_radiant_ranged/radiant_ranged.vmdl",match:_},npc_dota_creep_goodguys_ranged_upgraded:{name:"Radiant Super Ranged Creep",model:"models/creeps/lane_creeps/creep_radiant_ranged/radiant_ranged.vmdl",match:_},npc_dota_creep_goodguys_ranged_upgraded_mega:{name:"Radiant Mega Ranged Creep",model:"models/creeps/lane_creeps/creep_radiant_ranged/radiant_ranged_mega.vmdl",match:_},npc_dota_goodguys_siege:{name:"Radiant Siege Creep",model:"models/creeps/lane_creeps/creep_good_siege/creep_good_siege.vmdl",match:_},npc_dota_goodguys_siege_upgraded:{name:"Radiant Super Siege Creep",model:"models/creeps/lane_creeps/creep_good_siege/creep_good_siege.vmdl",match:_},npc_dota_goodguys_siege_upgraded_mega:{name:"Radiant Mega Siege Creep",model:"models/creeps/lane_creeps/creep_good_siege/creep_good_siege.vmdl",match:_},npc_dota_dark_troll_warlord_skeleton_warrior:{name:"Skeleton",model:"models/creeps/neutral_creeps/n_creep_troll_skeleton/n_creep_skeleton_melee.vmdl",match:_},npc_dota_neutral_alpha_wolf:{name:"Alpha Wolf",model:"models/creeps/neutral_creeps/n_creep_worg_large/n_creep_worg_large.vmdl",match:_},npc_dota_neutral_giant_wolf:{name:"Giant Wolf",model:"models/creeps/neutral_creeps/n_creep_worg_small/n_creep_worg_small.vmdl",match:_},npc_dota_neutral_big_thunder_lizard:{name:"Ancient Thunderhide",model:"models/creeps/neutral_creeps/n_creep_thunder_lizard/n_creep_thunder_lizard_big.vmdl",match:_},npc_dota_neutral_small_thunder_lizard:{name:"Ancient Rumblehide",model:"models/creeps/neutral_creeps/n_creep_thunder_lizard/n_creep_thunder_lizard_small.vmdl",match:_},npc_dota_neutral_black_drake:{name:"Ancient Black Drake",model:"models/creeps/neutral_creeps/n_creep_black_drake/n_creep_black_drake.vmdl",match:_},npc_dota_neutral_black_dragon:{name:"Ancient Black Dragon",model:"models/creeps/neutral_creeps/n_creep_black_dragon/n_creep_black_dragon.vmdl",match:_},npc_dota_neutral_centaur_outrunner:{name:"Centaur Courser",model:"models/creeps/neutral_creeps/n_creep_centaur_med/n_creep_centaur_med.vmdl",match:_},npc_dota_neutral_centaur_khan:{name:"Centaur Conqueror",model:"models/creeps/neutral_creeps/n_creep_centaur_lrg/n_creep_centaur_lrg.vmdl",match:_},npc_dota_neutral_dark_troll:{name:"Hill Troll",model:"models/creeps/neutral_creeps/n_creep_troll_dark_a/n_creep_troll_dark_a.vmdl",match:_},npc_dota_neutral_dark_troll_warlord:{name:"Dark Troll Summoner",model:"models/creeps/neutral_creeps/n_creep_troll_dark_b/n_creep_troll_dark_b.vmdl",match:_},npc_dota_neutral_enraged_wildkin:{name:"Wildwing Ripper",model:"models/creeps/neutral_creeps/n_creep_vulture_a/n_creep_vulture_a.vmdl",match:_},npc_dota_neutral_wildkin:{name:"Wildwing",model:"models/creeps/neutral_creeps/n_creep_vulture_b/n_creep_vulture_b.vmdl",match:_},npc_dota_neutral_fel_beast:{name:"Fell Spirit",model:"models/creeps/neutral_creeps/n_creep_ghost_b/n_creep_ghost_b.vmdl",match:_},npc_dota_neutral_ghost:{name:"Ghost",model:"models/creeps/neutral_creeps/n_creep_ghost_a/n_creep_ghost_a.vmdl",match:_},npc_dota_neutral_forest_troll_berserker:{name:"Hill Troll Berserker",model:"models/creeps/neutral_creeps/n_creep_forest_trolls/n_creep_forest_troll_berserker.vmdl",match:_},npc_dota_neutral_forest_troll_high_priest:{name:"Hill Troll Priest",model:"models/creeps/neutral_creeps/n_creep_forest_trolls/n_creep_forest_troll_high_priest.vmdl",match:_},npc_dota_neutral_gnoll_assassin:{name:"Vhoul Assassin",model:"models/creeps/neutral_creeps/n_creep_gnoll/n_creep_gnoll.vmdl",match:_},npc_dota_neutral_granite_golem:{name:"Ancient Granite Golem",model:"models/creeps/neutral_creeps/n_creep_golem_a/neutral_creep_golem_a.vmdl",match(e){return _(e,this)&&6===e.level}},npc_dota_neutral_rock_golem:{name:"Ancient Rock Golem",model:"models/creeps/neutral_creeps/n_creep_golem_a/neutral_creep_golem_a.vmdl",match(e){return _(e,this)&&5===e.level}},npc_dota_neutral_harpy_scout:{name:"Harpy Scout",model:"models/creeps/neutral_creeps/n_creep_harpy_a/n_creep_harpy_a.vmdl",match:_},npc_dota_neutral_harpy_storm:{name:"Harpy Stormcrafter",model:"models/creeps/neutral_creeps/n_creep_harpy_b/n_creep_harpy_b.vmdl",match:_},npc_dota_neutral_jungle_stalker:{name:"Ancient Stalker",model:"models/creeps/neutral_creeps/n_creep_gargoyle/n_creep_gargoyle.vmdl",match(e){return _(e,this)&&5===e.level}},npc_dota_neutral_elder_jungle_stalker:{name:"Ancient Primal Stalker",model:"models/creeps/neutral_creeps/n_creep_gargoyle/n_creep_gargoyle.vmdl",match(e){return _(e,this)&&6===e.level}},npc_dota_neutral_kobold:{name:"Kobold",model:"models/creeps/neutral_creeps/n_creep_kobold/kobold_c/n_creep_kobold_c.vmdl",match:_},npc_dota_neutral_kobold_tunneler:{name:"Kobold Soldier",model:"models/creeps/neutral_creeps/n_creep_kobold/kobold_b/n_creep_kobold_b.vmdl",match:_},npc_dota_neutral_kobold_taskmaster:{name:"Kobold Foreman",model:"models/creeps/neutral_creeps/n_creep_kobold/kobold_a/n_creep_kobold_a.vmdl",match:_},npc_dota_neutral_mud_golem:{name:"Mud Golem",model:"models/creeps/neutral_creeps/n_creep_golem_b/n_creep_golem_b.vmdl",match(e){return _(e,this)&&e.hpMax>=800}},npc_dota_neutral_mud_golem_split:{name:"Shard Golem",model:"models/creeps/neutral_creeps/n_creep_golem_b/n_creep_golem_b.vmdl",match(e){return _(e,this)&&e.hpMax<=400}},npc_dota_neutral_mud_golem_split_doom:{name:"Doom Shard",model:"models/heroes/doom/doom.vmdl",match:_},npc_dota_neutral_ogre_mauler:{name:"Ogre Bruiser",model:"models/creeps/neutral_creeps/n_creep_ogre_med/n_creep_ogre_med.vmdl",match:_},npc_dota_neutral_ogre_magi:{name:"Ogre Frostmage",model:"models/creeps/neutral_creeps/n_creep_ogre_lrg/n_creep_ogre_lrg.vmdl",match:_},npc_dota_neutral_polar_furbolg_champion:{name:"Hellbear",model:"models/creeps/neutral_creeps/n_creep_beast/n_creep_beast.vmdl",match:_},npc_dota_neutral_polar_furbolg_ursa_warrior:{name:"Hellbear Smasher",model:"models/creeps/neutral_creeps/n_creep_furbolg/n_creep_furbolg_disrupter.vmdl",match:_},npc_dota_neutral_prowler_acolyte:{name:"Ancient Prowler Acolyte",model:"models/creeps/neutral_creeps/n_creep_satyr_spawn_a/n_creep_satyr_spawn_b.vmdl",match:_},npc_dota_neutral_prowler_shaman:{name:"Ancient Prowler Shaman",model:"models/creeps/neutral_creeps/n_creep_satyr_spawn_a/n_creep_satyr_spawn_a.vmdl",match:_},npc_dota_neutral_satyr_soulstealer:{name:"Satyr Mindstealer",model:"models/creeps/neutral_creeps/n_creep_satyr_c/n_creep_satyr_c.vmdl",match:_},npc_dota_neutral_satyr_hellcaller:{name:"Satyr Tormenter",model:"models/creeps/neutral_creeps/n_creep_satyr_a/n_creep_satyr_a.vmdl",match:_},npc_dota_neutral_satyr_trickster:{name:"Satyr Banisher",model:"models/creeps/neutral_creeps/n_creep_satyr_b/n_creep_satyr_b.vmdl",match:_},npc_dota_badguys_fort:{name:"Dire Ancient",model:"models/props_structures/dire_ancient_base001.vmdl",match:e=>"dota_badguys_fort"===e.internalName},npc_dota_badguys_melee_rax:{name:"Dire Melee Barracks",model:"models/props_structures/dire_barracks_melee001.vmdl",match:e=>e.internalName.startsWith("bad_rax_melee")},npc_dota_badguys_range_rax:{name:"Dire Ranged Barracks",model:"models/props_structures/dire_barracks_ranged001.vmdl",match:e=>e.internalName.startsWith("bad_rax_range")},npc_dota_badguys_tower:{name:"Dire Tower",model:"models/props_structures/dire_tower002.vmdl",match:e=>e.internalName.startsWith("dota_badguys_tower")},npc_dota_goodguys_fort:{name:"Radiant Ancient",model:"models/props_structures/radiant_ancient001.vmdl",match:e=>"dota_goodguys_fort"===e.internalName},npc_dota_goodguys_melee_rax:{name:"Radiant Melee Barracks",model:"models/props_structures/radiant_melee_barracks001.vmdl",match:e=>e.internalName.startsWith("good_rax_melee")},npc_dota_goodguys_range_rax:{name:"Radiant Ranged Barracks",model:"models/props_structures/radiant_ranged_barracks001.vmdl",match:e=>e.internalName.startsWith("good_rax_range")},npc_dota_goodguys_tower:{name:"Radiant Tower",model:"models/props_structures/radiant_tower002.vmdl",match:e=>e.internalName.startsWith("dota_goodguys_tower")},npc_dota_watch_tower:{name:"Outpost",model:"models/props_structures/outpost.vmdl",match:e=>e.internalName.startsWith("npc_dota_watch_tower")}})},3388:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});class r{constructor(e,t,a){this.name=e,this.weight=t,this.execute=a}}const s=[new r("PlusOne",36271,(e=>{e.path[e.last]+=1})),new r("PlusTwo",10334,(e=>{e.path[e.last]+=2})),new r("PlusThree",1375,(e=>{e.path[e.last]+=3})),new r("PlusFour",646,(e=>{e.path[e.last]+=4})),new r("PlusN",4128,((e,t)=>{e.path[e.last]+=t.readUBitVarFieldPath()+5})),new r("PushOneLeftDeltaZeroRightZero",35,(e=>{e.last++,e.path[e.last]=0})),new r("PushOneLeftDeltaZeroRightNonZero",3,((e,t)=>{e.last++,e.path[e.last]=t.readUBitVarFieldPath()})),new r("PushOneLeftDeltaOneRightZero",521,(e=>{e.path[e.last]+=1,e.last++,e.path[e.last]=0})),new r("PushOneLeftDeltaOneRightNonZero",2942,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]=t.readUBitVarFieldPath()})),new r("PushOneLeftDeltaNRightZero",560,((e,t)=>{e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]=0})),new r("PushOneLeftDeltaNRightNonZero",471,((e,t)=>{e.path[e.last]+=t.readUBitVarFieldPath()+2,e.last++,e.path[e.last]=t.readUBitVarFieldPath()+1})),new r("PushOneLeftDeltaNRightNonZeroPack6Bits",10530,((e,t)=>{e.path[e.last]+=t.readBitInt(3)+2,e.last++,e.path[e.last]=t.readBitInt(3)+1})),new r("PushOneLeftDeltaNRightNonZeroPack8Bits",251,((e,t)=>{e.path[e.last]+=t.readBitInt(4)+2,e.last++,e.path[e.last]=t.readBitInt(4)+1})),new r("PushTwoLeftDeltaZero",0,((e,t)=>{e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new r("PushTwoPack5LeftDeltaZero",0,((e,t)=>{e.last++,e.path[e.last]=t.readBitInt(5),e.last++,e.path[e.last]=t.readBitInt(5)})),new r("PushThreeLeftDeltaZero",0,((e,t)=>{e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new r("PushThreePack5LeftDeltaZero",0,((e,t)=>{e.last++,e.path[e.last]=t.readBitInt(5),e.last++,e.path[e.last]=t.readBitInt(5),e.last++,e.path[e.last]=t.readBitInt(5)})),new r("PushTwoLeftDeltaOne",0,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new r("PushTwoPack5LeftDeltaOne",0,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5)})),new r("PushThreeLeftDeltaOne",0,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new r("PushThreePack5LeftDeltaOne",0,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5)})),new r("PushTwoLeftDeltaN",0,((e,t)=>{e.path[e.last]+=t.readUBitVar()+2,e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new r("PushTwoPack5LeftDeltaN",0,((e,t)=>{e.path[e.last]+=t.readUBitVar()+2,e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5)})),new r("PushThreeLeftDeltaN",0,((e,t)=>{e.path[e.last]+=t.readUBitVar()+2,e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new r("PushThreePack5LeftDeltaN",0,((e,t)=>{e.path[e.last]+=t.readUBitVar()+2,e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5)})),new r("PushN",0,((e,t)=>{const a=t.readUBitVar();e.path[e.last]+=t.readUBitVar();for(let r=0;r<a;++r)e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new r("PushNAndNonTopological",310,((e,t)=>{for(let a=0;a<=e.last;++a)t.readBitFlag()&&(e.path[a]+=t.readVarInt32()+1);const a=t.readUBitVar();for(let r=0;r<a;++r)e.last++,e.path[e.last]=t.readUBitVarFieldPath()})),new r("PopOnePlusOne",2,(e=>{e.pop(1),e.path[e.last]+=1})),new r("PopOnePlusN",0,((e,t)=>{e.pop(1),e.path[e.last]+=t.readUBitVarFieldPath()+1})),new r("PopAllButOnePlusOne",1837,(e=>{e.pop(e.last),e.path[0]+=1})),new r("PopAllButOnePlusN",149,((e,t)=>{e.pop(e.last),e.path[0]+=t.readUBitVarFieldPath()+1})),new r("PopAllButOnePlusNPack3Bits",300,((e,t)=>{e.pop(e.last),e.path[0]+=t.readBitInt(3)+1})),new r("PopAllButOnePlusNPack6Bits",634,((e,t)=>{e.pop(e.last),e.path[0]+=t.readBitInt(6)+1})),new r("PopNPlusOne",0,((e,t)=>{e.pop(t.readUBitVarFieldPath()),e.path[e.last]+=1})),new r("PopNPlusN",0,((e,t)=>{e.pop(t.readUBitVarFieldPath()),e.path[e.last]+=t.readVarInt32()})),new r("PopNAndNonTopographical",1,((e,t)=>{e.pop(t.readUBitVarFieldPath());for(let a=0;a<=e.last;++a)t.readBitFlag()&&(e.path[a]+=t.readVarInt32())})),new r("NonTopoComplex",76,((e,t)=>{for(let a=0;a<=e.last;++a)t.readBitFlag()&&(e.path[a]+=t.readVarInt32())})),new r("NonTopoPenultimatePlusOne",271,(e=>{e.path[e.last-1]+=1})),new r("NonTopoComplexPack4Bits",99,((e,t)=>{for(let a=0;a<=e.last;++a)t.readBitFlag()&&(e.path[a]+=t.readBitInt(4)-7)})),new r("FieldPathEncodeFinish",25474,(e=>{e.done=!0}))];var n=a(2023);class i{constructor(e,t){this.weight=e,this.value=t,this.left=null,this.right=null}get isLeaf(){return null===this.left&&null===this.right}}const l=(()=>{const e=new n.Lw(((e,t)=>e.weight===t.weight?t.value-e.value:e.weight-t.weight)),t=s.map((e=>e.weight||1));for(const[a,r]of t.entries()){const t=new i(r,a);e.insert(t)}let a=e.size;for(;e.size>1;){const t=e.extract(),r=e.extract(),s=new i(t.weight+r.weight,a++);s.left=t,s.right=r,e.insert(s)}return e.extract()})();class o{constructor(){this.path=[-1,0,0,0,0,0],this.last=0,this.done=!1}copy(){const e=new o;return e.path=[...this.path],e.last=this.last,e.done=this.done,e}pop(e){for(let t=0;t<e;++t)this.path[this.last]=0,this.last--}toString(){const e=new Array(this.last+1);for(let t=0;t<=this.last;++t)e[t]=this.path[t];return e.join("/")}static from(e){const t=new o;let a=l,r=l;const n=[];for(;!t.done;)r=e.readBitFlag()?a.right:a.left,r.isLeaf?(s[r.value].execute(t,e),t.done||n.push(t.copy()),a=l):a=r;return n}}const d=o},4562:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});class r{constructor(){this.state=new Array(8)}get(e){let t=this,a=0;for(let s=0;s<=e.last;++s){if(a=e.path[s],t.state.length<a+2)return null;if(s===e.last)return t.state[a];if(!(t.state[a]instanceof r))return null;t=t.state[a]}return null}set(e,t){let a=this,s=0;for(let n=0;n<=e.last;++n){s=e.path[n];const{length:i}=a.state;if(i<s+2){const e=[...a.state];e.length=Math.max(s+2,2*i),a.state=e}if(n===e.last)return void(a.state[s]instanceof r||(a.state[s]=t));a.state[s]instanceof r||(a.state[s]=new r),a=a.state[s]}}}const s=r},9384:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ue});var r=a(7187),s=a(678),n=a(2023),i=a(4562);const l=e=>e.read3BitNormal(),o=e=>e.readUint64LE(),d=e=>e.readBitFlag(),m=e=>e.readString(),c=e=>e.readVarUint32(),h=e=>e.readVarInt32(),_=e=>e.readCoord(),p=e=>e.readBitFloat(32),u=e=>e.readBitFloat(4),g=e=>e.readVarUint32()*(1/30),f=e=>e.readVarUint32(),b=e=>e.readVarUint64(),v=e=>e.readBitInt(1),y=()=>f,w=e=>{switch(e.encoder){case"fixed64":return o}return b},C=e=>{const t=new class{constructor(e,t,a,r){if(0===e||e>=32)throw this.noScale=!0,this.bitCount=32,new Error("quantized float with bitCount >= 32 not yet supported");this.noScale=!1,this.bitCount=e,this.offset=0,this.low=null!==a?a:0,this.high=null!==r?r:1,this.flags=null!==t?t:0,this.decMul=0,this.highLowMul=0,this.validateFlags();let s=1<<this.bitCount,n=0;if(0!=(1&this.flags)?(n=this.high-this.low,this.offset=n/s,this.high-=this.offset):0!=(2&this.flags)&&(n=this.high-this.low,this.offset=n/s,this.low+=this.offset),0!=(8&this.flags)){let e=this.high-this.low;e<1&&(e=1);const t=1<<Math.ceil(Math.log2(e));let a=this.bitCount;for(;!(1<<a>t);)a++;a>this.bitCount&&(this.bitCount=a,s=1<<this.bitCount),this.offset=t/s,this.high=this.low+t-this.offset}this.assignMultipliers(s),0!=(1&this.flags)&&this.quantize(this.low)===this.low&&(this.flags&=-2),0!=(2&this.flags)&&this.quantize(this.high)===this.high&&(this.flags&=-3),0!=(4&this.flags)&&0===this.quantize(0)&&(this.flags&=-5)}validateFlags(){if(0!==this.flags&&((0===this.low&&0!=(1&this.flags)||0===this.high&&0!=(2&this.flags))&&(this.flags&=-5),0===this.low&&0!=(4&this.flags)&&(this.flags|=1,this.flags&=-5),0===this.high&&0!=(4&this.flags)&&(this.flags|=2,this.flags&=-5),(this.low>0||this.high<0)&&(this.flags&=-5),0!=(8&this.flags)&&(this.flags&=-8),3==(3&this.flags)))throw new Error("roundup / rounddown flags are mutually exclusive")}assignMultipliers(e){const t=this.high-this.low;let a=0;a=32===this.bitCount?4294967294:(1<<this.bitCount)-1;let r=0;if(r=Math.abs(t)<=0?a:a/t,r*t>a||r*t>a){const e=[.9999,.99,.9,.8,.7];for(const s of e)if(r=a/t*s,!(r*t>a||r*t>a))break}if(this.highLowMul=r,this.decMul=1/(e-1),0===this.highLowMul)throw new Error("error computing high / low multiplier")}quantize(e){if(e<this.low){if(0==(2&this.flags))throw new Error("field tried to quantize an out of range value");return this.low}if(e>this.high){if(0==(1&this.flags))throw new Error("field tried to quantize an out of range value");return this.high}const t=(e-this.low)*this.highLowMul|0;return this.low+(this.high-this.low)*t*this.decMul}}(e.bitCount,e.encodeFlags,e.lowValue,e.highValue);return e=>0!=(1&t.flags)&&e.readBitFlag()?t.low:0!=(2&t.flags)&&e.readBitFlag()?t.high:0!=(4&t.flags)&&e.readBitFlag()?0:t.low+(t.high-t.low)*e.readBitInt(t.bitCount)*t.decMul},k=e=>{switch(e.encoder){case"coord":return _;case"simtime":return g;case"runetime":return u}const{bitCount:t}=e;return null===t||t<=0||t>=32?p:C(e)},E=e=>t=>{if(3===e&&"normal"===t.encoder)return l;const a=k(t);return t=>{const r=new Array(e);for(let s=0;s<e;++s)r[s]=a(t);return r}},D={float32:k,CNetworkedQuantizedFloat:C,Vector:E(3),Vector2D:E(2),Vector4D:E(4),uint64:w,QAngle:e=>{const{bitCount:t}=e;if("qangle_pitch_yaw"===e.encoder){const e=t;return t=>[t.readAngle(e),t.readAngle(e),0]}if(null!==t&&0!==t){const e=t;return t=>[t.readAngle(e),t.readAngle(e),t.readAngle(e)]}return e=>{const t=new Array(3),a=e.readBitFlag(),r=e.readBitFlag(),s=e.readBitFlag();return a&&(t[0]=e.readCoord()),r&&(t[1]=e.readCoord()),s&&(t[2]=e.readCoord()),t}},CHandle:y,CStrongHandle:w,CEntityHandle:y},x={bool:d,char:m,color32:f,int16:h,int32:h,int64:h,int8:h,uint16:f,uint32:f,uint8:f,CBodyComponent:v,CGameSceneNodeHandle:f,Color:f,CPhysicsComponent:v,CRenderComponent:v,CUtlString:m,CUtlStringToken:f,CUtlSymbolLarge:m},P=e=>{const{baseType:t}=e.fieldType,a=D[t];return a?a(e):x[t]||c},T={CBodyComponent:!0,CEntityIdentity:!0,CPhysicsComponent:!0,CRenderComponent:!0,CDOTAGamerules:!0,CDOTAGameManager:!0,CDOTASpectatorGraphManager:!0,CPlayerLocalData:!0,PhysicsRagdollPose_t:!0};class F{constructor(){this.parentName=null,this.varName=null,this.varType=null,this.sendNode=null,this.serializerName=null,this.serializerVersion=null,this.encoder=null,this.encodeFlags=null,this.bitCount=null,this.lowValue=null,this.highValue=null,this.fieldType=null,this.serializer=null,this.value=null,this._model=0,this.decoder=null,this.baseDecoder=null,this.childDecoder=null}get isPointerType(){return T[this.fieldType.baseType]}get model(){return this._model}set model(e){switch(this._model=e,e){case 1:this.decoder=P(this);break;case 2:this.baseDecoder=d;break;case 3:{const{genericType:e}=this.fieldType;if(!e)throw new Error(`no generic type for variable array field: ${this}`);this.baseDecoder=f,this.childDecoder=(t=e.baseType,x[t]||c)}break;case 4:this.baseDecoder=f;break;case 0:this.decoder=P(this)}var t}getDecoderForFieldPath(e,t){switch(this.model){case 1:return this.decoder;case 2:return e.last===t-1?this.baseDecoder:this.serializer.getDecoderForFieldPath(e,t);case 3:return e.last===t?this.childDecoder:this.baseDecoder;case 4:return e.last>=t+1?this.serializer.getDecoderForFieldPath(e,t+1):this.baseDecoder}return this.decoder}getFieldForFieldPath(e,t){switch(this.model){case 1:return this;case 2:if(e.last!==t-1)return this.serializer.getFieldForFieldPath(e,t);break;case 3:return this;case 4:if(e.last>=t+1)return this.serializer.getFieldForFieldPath(e,t+1)}return this}getFieldPathForName(e,t){switch(this.model){case 1:case 3:return e.path[e.last]=+t,!0;case 2:return this.serializer.getFieldPathForName(e,t);case 4:return e.path[e.last]=+t.slice(0,4),e.last++,this.serializer.getFieldPathForName(e,t.slice(5));case 0:throw new Error("not supported")}return!1}getFieldPaths(e,t){const a=[];switch(this.model){case 1:case 3:{const r=t.get(e);if(r instanceof i.Z){e.last++;for(const[t,s]of r.state.entries())null!==s&&(e.path[e.last]=t,a.push(e.copy()));e.last--}}break;case 2:{const r=t.get(e);r instanceof i.Z&&(e.last++,a.push(...this.serializer.getFieldPaths(e,r)),e.last--)}break;case 4:{const r=t.get(e);if(r instanceof i.Z){e.last+=2;for(const[t,s]of r.state.entries())s instanceof i.Z&&(e.path[e.last-1]=t,a.push(...this.serializer.getFieldPaths(e,s)));e.last-=2}}break;case 0:a.push(e.copy())}return a}getNameForFieldPath(e,t){const a=[this.varName];switch(this.model){case 1:e.last===t&&a.push(`${e.path[t]}`.padStart(4,"0"));break;case 2:e.last>=t&&a.push(...this.serializer.getNameForFieldPath(e,t));break;case 3:e.last===t&&a.push(`${e.path[t]}`.padStart(4,"0"));break;case 4:e.last!==t-1&&(a.push(`${e.path[t]}`.padStart(4,"0")),e.last!==t&&a.push(...this.serializer.getNameForFieldPath(e,t+1)))}return a}getTypeForFieldPath(e,t){switch(this.model){case 1:return this.fieldType;case 2:if(e.last!==t-1)return this.serializer.getTypeForFieldPath(e,t);break;case 3:if(e.last===t)return this.fieldType.genericType;break;case 4:if(e.last>=t+1)return this.serializer.getTypeForFieldPath(e,t+1)}return this.fieldType}static for(e,t){const a=a=>{const r=(0,n.eg)(t,a);return e[r]},r=new F;return r.varName=a("varNameSym"),r.varType=a("varTypeSym"),r.sendNode=a("sendNodeSym"),r.serializerName=a("fieldSerializerNameSym"),r.serializerVersion=t.fieldSerializerVersion||0,r.encoder=a("varEncoderSym"),r.encodeFlags=t.encodeFlags,r.bitCount=t.bitCount,r.lowValue=t.lowValue,r.highValue=t.highValue,r}}const B=F,I=/([^<[*]+)(<\s(.*)\s>)?(\*)?(\[(.*)\])?/,S={MAX_ITEM_STOCKS:8,MAX_ABILITY_DRAFT_ABILITIES:48},O=class{constructor(e,t){this.baseType=e,this.pointer=t,this.genericType=null,this.count=null}toString(){let e=this.baseType;return null!==this.genericType&&(e+=`<${this.genericType}>`),this.pointer&&(e+="*"),this.count>0&&(e+=`[${this.count}]`),e}static for(e){const t=I.exec(e);if(!t)throw new Error(`could not parse field type from: ${e}`);const a=new this(t[1],"*"===t[4]);t[3]&&(a.genericType=this.for(t[3]));const r=t[6];return r&&(a.count=r in S?S[r]:+r>0?+r:1024),a}};var A=a(7218);const L=class{constructor(e,t){this.name=e,this.version=t,this.fields=[]}get id(){return`${this.name}(${this.version})`}getDecoderForFieldPath(e,t){const a=e.path[t],r=this.fields[a];if(!r)throw new Error(`serializer ${this.id}: fp ${e} has no field (${a})`);return r.getDecoderForFieldPath(e,t+1)}getFieldForFieldPath(e,t){const a=e.path[t];return this.fields[a].getFieldForFieldPath(e,t+1)}getFieldPathForName(e,t){for(const[a,r]of this.fields.entries()){if(t===r.varName)return e.path[e.last]=a,!0;if(t.startsWith(`${r.varName}.`))return e.path[e.last]=a,e.last++,r.getFieldPathForName(e,t.slice(r.varName.length+1))}return!1}getFieldPaths(e,t){const a=[];for(const[r,s]of this.fields.entries())e.path[e.last]=r,a.push(...s.getFieldPaths(e,t));return a}getNameForFieldPath(e,t){const a=e.path[t];return this.fields[a].getNameForFieldPath(e,t+1)}getTypeForFieldPath(e,t){const a=e.path[t];return this.fields[a].getTypeForFieldPath(e,t+1)}};class U{constructor(e,t,a){this.index=e,this.key=t,this.data=a}static decode(e,t,a){const r=new Array(32),n=new A.Z(t);let i=-1;for(let t=0;t<a;++t){n.readBitFlag()?++i:i+=n.readVarUint32()+2;let a=null;if(n.readBitFlag())if(n.readBitFlag()){const e=t>32?t:0,s=n.readBitInt(5),i=n.readBitInt(5);a=r[e+s&31].substring(0,i)+n.readString()}else a=n.readString();let l=null;if(n.readBitFlag()){let t,a=!1;e.userDataFixedSize?t=e.userDataSizeBits:(0!=(1&e.flags)&&(a=n.readBitFlag()),t=8*n.readBitInt(17)),l=n.readBitsAsBytes(t),a&&(l=s.uncompress(l))}const o=e.entries.length;if(i<o)e.entries[i].data=l,a=e.entries[i].key;else{if(i!==o)throw new Error(`index and entry count mismatch for table: ${e.name}`);{const t=new this(i,a,l);e.entries.push(t)}}r[31&t]=a}}}var M=a(4321),N=a(9299);const{CDemoFileInfo:Z,CSVCMsg_FlattenedSerializer:z,EDemoCommands:$}=N,{CDemoPacket:V,CDOTAMatchMetadataFile:H,CDOTAUserMsg_StatsHeroMinuteDetails:R,CMsgDOTACombatLogEntry:W,CMsgGCToClientTournamentItemDrop:G,CMsgSource1LegacyGameEvent:X,CNETMsg_SpawnGroup_Load:Y,CNETMsg_Tick:q,CSVCMsg_ClearAllStringTables:j,CSVCMsg_CreateStringTable:K,CSVCMsg_PacketEntities:Q,CSVCMsg_UpdateStringTable:J,EBaseEntityMessages:ee,EBaseGameEvents:te,EBaseUserMessages:ae,EDotaUserMessages:re,NET_Messages:se,SVC_Messages:ne}=N,ie=(e,t,a,r={})=>{for(const[s,n]of Object.entries(e)){const e=s.replace(t,a),i=N[e];i&&(r[n]=[i,e])}return r},le={...ie($,"DEM_","CDemo",{[$.DEM_SignonPacket]:[V,"CDemoSignonPacket"]})},oe={...ie(ee,"EM_","CEntityMessage"),...ie(te,"GE_","CMsg"),...ie(ae,"UM_","CUserMessage"),...ie(re,"DOTA_UM_","CDOTAUserMsg_",{[re.DOTA_UM_TournamentDrop]:[G,"CMsgGCToClientTournamentItemDrop"],[re.DOTA_UM_StatsHeroDetails]:[R,"CDOTAUserMsg_StatsHeroMinuteDetails"],[re.DOTA_UM_CombatLogDataHLTV]:[W,"CMsgDOTACombatLogEntry"],[re.DOTA_UM_MatchMetadata]:[H,"CDOTAMatchMetadataFile"]}),...ie(se,"net_","CNETMsg_"),...ie(ne,"svc_","CSVCMsg_")},de=e=>{switch(e){case Y:case q:case j:case K:case J:return-10;case Q:return 5;case X:return 10;default:return 0}};class me{constructor(e,t,a){this.minBuild=e,this.maxBuild=t,this.apply=a}appliesFor(e){return 0===this.minBuild&&0===this.maxBuild||e>=this.minBuild&&e<=this.maxBuild}}const ce=[new me(0,990,(e=>{switch(e.varName){case"angExtraLocalAngles":case"angLocalAngles":case"m_angInitialAngles":case"m_angRotation":case"m_ragAngles":case"m_vLightDirection":"CBodyComponentBaseAnimatingOverlay"===e.parentName?e.encoder="qangle_pitch_yaw":e.encoder="QAngle";break;case"dirPrimary":case"localSound":case"m_flElasticity":case"m_location":case"m_poolOrigin":case"m_ragPos":case"m_vecEndPos":case"m_vecLadderDir":case"m_vecPlayerMountPositionBottom":case"m_vecPlayerMountPositionTop":case"m_viewtarget":case"m_WorldMaxs":case"m_WorldMins":case"origin":case"vecLocalOrigin":e.encoder="coord";break;case"m_vecLadderNormal":e.encoder="normal"}})),new me(0,954,(e=>{switch(e.varName){case"m_flMana":case"m_flMaxMana":e.lowValue=null,e.highValue=8192}})),new me(1016,1027,(e=>{switch(e.varName){case"m_bItemWhiteList":case"m_bWorldTreeState":case"m_iPlayerIDsInControl":case"m_iPlayerSteamID":case"m_ulTeamBannerLogo":case"m_ulTeamBaseLogo":case"m_ulTeamLogo":e.encoder="fixed64"}})),new me(0,0,(e=>{switch(e.varName){case"m_flSimulationTime":case"m_flAnimTime":e.encoder="simtime";break;case"m_flRuneTime":e.encoder="runetime"}}))],he="PBDEMS2\0";class _e extends A.Z{constructor(e){super(e),this.buildNumber=null,this.classes=new n.yk("id",{byName:"name"}),this.classBaselines={},this.classIDSize=null,this.entityFullPacketCount=0,this.entities=new n.yk("index"),this.gameEventTypes=new n.yk("id",{byName:"name"}),this.serializers=new n.yk("name"),this.stringTables=new n.yk("name",{byIndex:"index"}),this.emitter=new r,this.tick=-1,this.tickInterval=null,this.parsing=!1,this.synced=!1,this.on("msg:CDemoPacket",this.onCDemoPacket.bind(this)),this.on("msg:CDemoSignonPacket",this.onCDemoPacket.bind(this)),this.on("msg:CDemoFullPacket",this.onCDemoFullPacket.bind(this)),this.on("msg:CDemoStringTables",this.onCDemoStringTables.bind(this)),this.on("msg:CDemoSyncTick",this.onCDemoSyncTick.bind(this)),this.on("msg:CSVCMsg_ClearAllStringTables",this.onCSVCMsg_ClearAllStringTables.bind(this)),this.on("msg:CSVCMsg_CreateStringTable",this.onCSVCMsg_CreateStringTable.bind(this)),this.on("msg:CSVCMsg_UpdateStringTable",this.onCSVCMsg_UpdateStringTable.bind(this)),this.on("msg:CSVCMsg_ServerInfo",this.onCSVCMsg_ServerInfo.bind(this)),this.on("msg:CMsgSource1LegacyGameEventList",this.onCMsgSource1LegacyGameEventList.bind(this)),this.on("msg:CMsgSource1LegacyGameEvent",this.onCMsgSource1LegacyGameEvent.bind(this)),this.on("msg:CDemoClassInfo",this.onCDemoClassInfo.bind(this)),this.on("msg:CDemoSendTables",this.onCDemoSendTables.bind(this)),this.on("msg:CSVCMsg_PacketEntities",this.onCSVCMsg_PacketEntities.bind(this)),this.on("msg:CDemoStop",this.stop.bind(this));const t=this.readStringN(he.length);if(t!==he)throw new Error(`unexpected magic: ${t}; expected: PBDEMS2\0`);this.skip(8)}get lastTick(){return this.summary.playbackTicks}get summary(){const{pos:e}=this;this.pos=he.length,this.pos=this.readUint32LE();const t=this.readVarUint32();this.readVarUint32();const a=this.readVarUint32();let r=this.readBytes(a);(t&$.DEM_IsCompressed)===$.DEM_IsCompressed&&(r=s.uncompress(r));const n=Z.decode(r);return this.pos=e,n}on(...e){this.emitter.on(...e)}off(...e){this.emitter.off(...e)}start(){for(this.parsing=!0;!this.synced&&this.parsing;)this.step()}step(e=1){this.seek(this.tick+e)}seek(e){for(;this.tick<e&&this.parsing;){const e=this.readVarUint32(),t=this.readVarUint32(),a=this.readVarUint32();let r=this.readBytes(a);const n=e&~$.DEM_IsCompressed;(e&$.DEM_IsCompressed)===$.DEM_IsCompressed&&(r=s.uncompress(r));const i=le[n];if(!i)throw new Error(`no type to handle demo command: ${n}`);const[l,o]=i;this.tick=t;const d=`msg:${o}`;if(!this.emitter.listenerCount(d)){this.emitter.emit("msg:skip",o,t);continue}const m=l.decode(r);this.emitter.emit(d,m,t),this.emitter.emit("tick",t)}}play(){this.seek(1/0)}stop(){this.parsing=!1}onCDemoPacket(e){const t=new A.Z(e.data),a=[];for(;!t.eof;){const e=t.readUBitVar(),r=t.readVarUint32(),s=oe[e];if(!s){t.skip(r);continue}const[n,i]=s,l=`msg:${i}`;if(!this.emitter.listenerCount(l)){this.emitter.emit("msg:skip",i),t.skip(r);continue}const o=t.readBytes(r);a.push({type:n,event:l,data:o})}a.length>1&&a.sort(pe);for(const e of a){const{type:t,event:a,data:r}=e,s=t.decode(r);this.emitter.emit(a,s)}}onCDemoFullPacket({stringTable:e,packet:t}){t&&this.onCDemoPacket(t)}onCDemoStringTables({tables:e}){for(const{items:t,tableName:a}of e){const e=this.stringTables.get(a);if(e){e.clear();for(const[a,{str:r,data:s}]of t.entries()){const t=new U(a,r,s);e.entries.push(t)}"instancebaseline"===e.name&&this.updateInstanceBaseline()}}}onCDemoSyncTick(){this.synced=!0}onCSVCMsg_ClearAllStringTables(){this.stringTables.clear()}onCSVCMsg_CreateStringTable(e){const{name:t,userDataFixedSize:a,userDataSize:r,userDataSizeBits:n,flags:i,numEntries:l}=e,o=new class{constructor(e,t,a,r,s){this.name=e,this.index=null,this.userDataFixedSize=t,this.userDataSize=a,this.userDataSizeBits=r,this.flags=s,this.entries=[]}clear(){this.entries.length=0}}(t,a,r,n,i);o.index=this.stringTables.size,this.stringTables.add(o);let d=e.stringData;if(e.dataCompressed){if("LZSS"===new A.Z(d).readStringN(4))throw new Error("LZSS string tables in old replays not yet supported");d=s.uncompress(d)}U.decode(o,d,l),"instancebaseline"===o.name&&this.updateInstanceBaseline()}onCSVCMsg_UpdateStringTable(e){const{stringData:t,numChangedEntries:a,tableId:r}=e,s=this.stringTables.byIndex.get(r);if(!s)throw new Error(`could not find string table: ${r}`);U.decode(s,t,a),"instancebaseline"===s.name&&this.updateInstanceBaseline()}onCSVCMsg_ServerInfo(e){this.classIDSize=A.Z.calcBitsNeededFor(e.maxClasses),this.tickInterval=e.tickInterval;const t=e.gameDir.match(/dota_v(\d+)/);if(t)this.buildNumber=+t[1];else{const t=new Error(`could not retrieve build number from: ${e.gameDir}`);this.emitter.emit("warn",t)}}onCMsgSource1LegacyGameEventList(e){for(const{eventid:t,name:a,keys:r}of e.descriptors){const e=new M.x0(t,a);for(const t of r)e.fields.push(new M.Ok(e.fields.length,t.name,t.type));this.gameEventTypes.add(e)}}onCMsgSource1LegacyGameEvent(e){const t=this.gameEventTypes.get(e.eventid);if(!t)throw new Error(`unknown event: ${e.eventid}`);const a=new M.Zm(t,e);this.emitter.emit("event",a),this.emitter.emit(`event:${t.name}`,a)}onCDemoClassInfo(e){for(const{classId:t,networkName:a}of e.classes){const e=new M.wT(t,a,this.serializers.get(a));this.classes.add(e)}this.updateInstanceBaseline()}onCDemoSendTables(e){const t=new A.Z(e.data),a=t.readBytes(t.readVarUint32()),r=z.decode(a),s=ce.filter((e=>e.appliesFor(this.buildNumber))),n={},i={};for(const{fieldsIndex:e,serializerVersion:t,serializerNameSym:a}of r.serializers){const l=r.symbols[a],o=new L(l,t);for(const t of e){let e=n[t];if(!e){e=B.for(r.symbols,r.fields[t]),this.buildNumber<=990&&(e.parentName=o.name);const{varType:a}=e;let l=i[a];l||(l=O.for(a),i[a]=l),e.fieldType=l,e.serializerName&&(e.serializer=this.serializers.get(e.serializerName));for(const t of s)t.apply(e);e.serializer?e.isPointerType?e.model=2:e.model=4:e.fieldType.count>0&&"char"!==e.fieldType.baseType?e.model=1:"CUtlVector"===e.fieldType.baseType?e.model=3:e.model=0,n[t]=e}o.fields.push(e)}this.serializers.add(o);const d=this.classes.byName[o.name];d&&(d.serializer=o)}}onCSVCMsg_PacketEntities(e){const t=new A.Z(e.entityData),a=[];let r,s,n,i,l,o,d=-1;if(!e.isDelta){if(this.entityFullPacketCount>0)return;this.entityFullPacketCount++}for(let m=e.updatedEntries;m>0;--m){if(d+=t.readUBitVar()+1,l=M._V.NONE,r=t.readBitInt(2),o={},0==(1&r))if(0!=(2&r)){s=t.readBitInt(this.classIDSize),n=t.readBitInt(M.F5),t.readVarUint32();const e=this.classes.get(s);if(!e)throw new Error(`unable to find new class: ${s}`);const a=this.classBaselines[s];if(!a)throw new Error(`unable to find new baseline: ${s}`);i=new M.JH(d,n,e),this.entities.add(i),new A.Z(a).readFieldsInto(i.state,e.serializer),t.readFieldsInto(i.state,e.serializer),l=M._V.CREATED|M._V.ENTERED,o=i.snapshot}else{if(i=this.entities.get(d),!i)throw new Error(`unable to find existing entity: ${d}`);l=M._V.UPDATED,i.active||(i.active=!0,l|=M._V.ENTERED),o=t.readFieldsInto(i.state,i.class.serializer)}else{if(i=this.entities.get(d),!i)continue;if(!i.active)throw new Error(`entity ${i.class.name} ordered to leave, already inactive`);l=M._V.LEFT,0!=(2&r)&&(l|=M._V.DELETED,this.entities.delete(i))}a.push({entity:i,delta:o,event:l})}this.emitter.emit("entities",a)}updateInstanceBaseline(){const e=this.stringTables.get("instancebaseline");if(e)for(const t of e.entries){const e=+t.key;this.classBaselines[e]=t.data}}}const pe=(e,t)=>de(e.type)-de(t.type),ue=_e},7218:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(3388),s=a(8764).Buffer;const n=(e,t)=>new RangeError(`cannot read ${t} bytes at position ${e}`),i=class{constructor(e){this.buffer=s.from(e),this.pos=0,this.bitVal=0,this.bitCount=0}get length(){return this.buffer.length}get eof(){return this.pos>=this.length}get bitLength(){return 8*this.length}get bitPos(){return 8*(this.pos-1)+(8-this.bitCount)}get posWithBit(){const{bitCount:e,pos:t}=this;return e>0?`${t-1}.${8-e}`:t}get remaining(){return this.length-this.pos}nextByte(){const{pos:e}=this;if(this.eof)throw n(e,1);return this.pos+=1,this.buffer[e]}readAngle(e){return 360*this.readBitInt(e)/(1<<e)}readBitFloat(e){const t=this.readBitInt(e),a=s.alloc(4);return a.writeUInt32LE(t),a.readFloatLE()}readBitInt(e){if(e>=32){const t=BigInt(e);let a=BigInt(this.bitVal),r=BigInt(this.bitCount);for(;t>r;)a|=BigInt(this.nextByte())<<r,r+=8n;const s=a&(1n<<t)-1n;return this.bitVal=Number(a>>t),this.bitCount=Number(r-t),Number(s)}for(;e>this.bitCount;)this.bitVal|=this.nextByte()<<this.bitCount,this.bitCount+=8;const t=this.bitVal&(1<<e)-1;return this.bitVal>>=e,this.bitCount-=e,t}readBitFlag(){return 1===this.readBitInt(1)}readBitsAsBytes(e){const t=[];for(;e>=8;e-=8)t.push(this.readByte());return e>0&&t.push(this.readBitInt(e)),s.from(t)}readByte(){return 0===this.bitCount?this.nextByte():this.readBitInt(8)}readBytes(e){if(0===this.bitCount){const t=this.pos,a=t+e;if(a>this.length)throw n(t,e);return this.pos=a,this.buffer.slice(t,a)}const t=s.alloc(e);for(let a=0;a<e;++a)t[a]=this.readBitInt(8);return t}readCoord(){let e=0,t=this.readBitInt(1),a=this.readBitInt(1),r=!1;return 0===t&&0===a||(r=this.readBitFlag(),0!==t&&(t=this.readBitInt(14)+1),0!==a&&(a=this.readBitInt(5)),e=t+a*(1/32),r&&(e=-e)),e}read3BitNormal(){const e=[0,0,0],t=this.readBitFlag(),a=this.readBitFlag();t&&(e[0]=this.readNormal()),a&&(e[1]=this.readNormal());const r=this.readBitFlag(),s=e[0]*e[0]+e[1]*e[1];return e[2]=s<1?Math.sqrt(1-s):0,r&&(e[2]=-e[2]),e}readFieldsInto(e,t){const a=r.Z.from(this),s={};for(const r of a){const a=t.getDecoderForFieldPath(r,0)(this),n=t.getNameForFieldPath(r,0).join(".");e.set(r,a),s[n]=a}return s}readStringN(e,t="utf8"){return this.readBytes(e).toString(t)}readString(e="utf8"){const t=[];for(;;){const e=this.readByte();if(0===e)break;t.push(e)}return s.from(t).toString(e)}readUBitVar(){let e=this.readBitInt(6);switch(48&e){case 16:e=15&e|this.readBitInt(4)<<4;break;case 32:e=15&e|this.readBitInt(8)<<4;break;case 48:e=15&e|this.readBitInt(28)<<4}return e}readUBitVarFieldPath(){return this.readBitFlag()?this.readBitInt(2):this.readBitFlag()?this.readBitInt(4):this.readBitFlag()?this.readBitInt(10):this.readBitFlag()?this.readBitInt(17):this.readBitInt(31)}readUint32LE(){return this.readBytes(4).readUInt32LE()}readUint64LE(){return this.readBytes(8).readBigUInt64LE()}readVarInt32(){const e=this.readVarUint32();let t=e>>1;return!0&e&&(t=~t),t}readVarUint32(){let e=0,t=0;for(;;){const a=this.readByte();if(e|=(127&a)<<t,t+=7,0==(128&a)||38===t)break}return e}readVarUint64(){let e=0n,t=0n;for(let a=0;;++a){const r=BigInt(this.readByte());if(r<128){if(a>9||9===a&&r>1)throw new Error("varint overflows uint64");return e|r<<t}e|=(0x7fn&r)<<t,t+=7n}}skip(e){const t=this.pos+e;if(t>this.length)throw new RangeError(`cannot skip ${e} bytes`);this.pos=t,this.bitCount>0&&(this.bitVal=this.buffer[this.pos-1]>>8-this.bitCount)}static calcBitsNeededFor(e){return Math.log2(e)+1|0}}},4321:(e,t,a)=>{"use strict";a.d(t,{wT:()=>r,JH:()=>o,_V:()=>l,Zm:()=>h,Ok:()=>m,x0:()=>c,F5:()=>i});const r=class{constructor(e,t,a){this.id=e,this.name=t,this.serializer=a}getFieldPaths(e,t){return this.serializer.getFieldPaths(e,t)}getFieldPathForName(e,t){return this.serializer.getFieldPathForName(e,t)}getNameForFieldPath(e){return this.serializer.getNameForFieldPath(e,0).join(".")}};var s=a(3388),n=a(4562);const i=17,l={NONE:0,CREATED:1,UPDATED:2,DELETED:4,ENTERED:8,LEFT:16},o=class{constructor(e,t,a){this.index=e,this.serial=t,this.handle=((e,t)=>t<<14|e)(e,t),this.class=a,this.active=!0,this.state=new n.Z,this.fpCache={}}get snapshot(){const e={},t=this.class.getFieldPaths(new s.Z,this.state);for(const a of t)e[this.class.getNameForFieldPath(a)]=this.state.get(a);return e}get(e){let t=this.fpCache[e];if(!t){if(t=new s.Z,!this.class.getFieldPathForName(t,e))throw new Error(`entity ${this.class.name} does not have field: ${e}`);this.fpCache[e]=t}return this.state.get(t)}},d={1:"valString",2:"valFloat",3:"valLong",4:"valShort",5:"valByte",6:"valBool",7:"valUint64"};class m{constructor(e,t,a){this.index=+e,this.name=t,this.type=a}}class c{constructor(e,t){this.id=e,this.name=t,this.fields=[]}}const h=class{constructor(e,t){this.type=e,this.packet=t,this.data={};for(const[e,t]of Object.entries(this.type.fields)){const a=d[t.type];this.data[t.name]=this.packet.keys[e][a]}}}},2023:(e,t,a)=>{"use strict";a.d(t,{Lw:()=>r,yk:()=>l,Yw:()=>i,qr:()=>h,w7:()=>_,yo:()=>p,eg:()=>d,bA:()=>c});const r=class{constructor(e){this.compare=e,this.data=[]}get isEmpty(){return 0===this.data.length}get root(){return this.data[0]}get size(){return this.data.length}insert(e){const{data:t}=this;t.push(e),this._bubbleUp(t.length-1)}extract(){const{data:e,root:t}=this,a=e.pop();return e.length>0&&(e[0]=a,this._bubbleDown(0)),t}_bubbleUp(e){const{compare:t,data:a}=this,r=a[e],s=(e-1)/2|0,n=a[s];t(r,n)<0&&(a[s]=r,a[e]=n,this._bubbleUp(s))}_bubbleDown(e){const{compare:t,data:a}=this,r=2*e+1,s=2*e+2;let n=e;if(void 0!==a[r]&&t(a[r],a[n])<0&&(n=r),void 0!==a[s]&&t(a[s],a[n])<0&&(n=s),n!==e){const t=a[n];a[n]=a[e],a[e]=t,this._bubbleDown(n)}}static from(e,t){const a=new this(t);for(const t of e)a.insert(t);return a}};var s=a(8949);class n{constructor(e,t={}){this.keyProp=e,this.data=new Map,this.indices=Object.entries(t).map((([e,t])=>{const a=new Map;return this[e]=a,{accessor:e,prop:t,collection:a}}))}get size(){return this.data.size}add(e){this.data.set(e[this.keyProp],e);for(const{prop:t,collection:a}of this.indices){const r=e[t];a.set(r,e)}}get(e){return this.data.get(e)}delete(e){this.data.delete(e[this.keyProp]);for(const{prop:t,collection:a}of this.indices){const r=e[t];a.delete(r)}}clear(){this.data.clear();for(const{collection:e}of this.indices)e.clear()}filter(e){const t=[];for(const[a,r]of this.data)e(r,a)&&t.push(r);return t}find(e){for(const[t,a]of this.data)if(e(a,t))return a;return null}map(e){const t=[];for(const[a,r]of this.data)t.push(e(r,a));return t}*[Symbol.iterator](){for(const[,e]of this.data)yield e}}class i extends n{constructor(e,t={}){super(e,t),(0,s.rC)(this,{data:s.LO,size:s.Fl,get:s.LO,filter:s.LO,find:s.LO,map:s.LO,[Symbol.iterator]:s.LO,add:s.aD,delete:s.aD,clear:s.aD});for(const e of this.indices)(0,s.rC)(this,{[e.accessor]:s.LO}),e.collection=this[e.accessor]}}const l=n,{hasOwnProperty:o}={},d=(e,t)=>o.call(e,t)?e[t]:null;var m=a(7548);const c=e=>e/m.GC,h=e=>(t,a)=>t[e]-a[e],_=e=>(t,a)=>a[e]-t[e],p=(...e)=>(t,a)=>{for(const r of e){if(!r)continue;const e=r(t,a);if(0!==e)return e}return 0}},6471:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n,G:()=>s});var r=a(7294);const s=a(9163).ZP.form`
  text-align: center;
`,n=e=>r.createElement(s,e)},7318:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var r=a(7294),s=a(3935),n=a(9163),i=a(1990),l=a(1823);const o=document.querySelector("#modal"),d=n.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  box-sizing: content-box;
  letter-spacing: 0.5px;
`,m=n.ZP.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .75);
`,c=(0,n.ZP)(i.ZP)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 7px 10px;
  font-size: 1.25em;
  opacity: .5;

  &:hover, &:focus {
    opacity: 1;
  }
`,h=n.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 0px 20px 10px;
  transform: translate(-50%, -50%);
  background: rgba(17, 17, 17, .75);
  border: 2px solid #333;
  border-radius: 10px;
  text-align: center;
`,_=e=>{const{children:t,onClose:a}=e,n=(0,r.useRef)();return(0,r.useEffect)((()=>{n.current.focus()}),[n]),s.createPortal(r.createElement(d,{ref:n},r.createElement(m,{onClick:a}),r.createElement(h,null,r.createElement(c,{label:"Close",onClick:a},r.createElement(l.Z,{name:"times-circle"})),t)),o)}},9984:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(7294);const s=a(9163).ZP.div`
  min-width: 350px;
`,n=e=>{const{children:t,onDone:a}=e,[n,i]=(0,r.useState)([]),l=n.length,o=(0,r.useCallback)((e=>{i(n.slice(0,e))}),[i,n]),d=(0,r.useCallback)(((e,t)=>{i(n.slice(0,e).concat(t))}),[i,n]),m=(0,r.useCallback)((()=>{i(n.slice(0,-1))}),[i,n]),c=(0,r.useCallback)((()=>{i([])}),[i]),h=t.map(((e,t)=>r.cloneElement(e,{input:n[t-1],key:t,invalidate:o.bind(null,t),next:d.bind(null,t),prev:m,reset:c})));(0,r.useEffect)((()=>{l===h.length&&a()}),[l,a,h]);const _=h[l];return r.createElement(s,null,_)}},7541:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>kt});var r=a(7294),s=a(9163),n=a(5977),i=a(7187),l=a(8949),o=a(9384),d=a(4321),m=a(2023),c=a(7548);const h=class{constructor(e){this.replay=e,this.value=0,this.duration=null,(0,l.rC)(this,{value:l.LO,duration:l.LO,remaining:l.Fl})}get remaining(){return null===this.duration||this.value<=this.duration?this.value:this.value-this.replay.game.time}};var _=a(5937);const p=class{constructor(e,t,a=null){this.replay=e,this.entity=t,this.internalName=a,(0,l.rC)(this,{refname:l.Fl})}get class(){return this.entity.class.name}get handle(){return this.entity.handle}get refname(){return this.internalName}},u=class extends p{constructor(e,...t){super(e,...t),this.cooldown=new h(e),this.isHidden=!1,this.level=null,this.manaCost=null,this.definition=_.Y4[this.refname]||{dname:this.refname},(0,l.rC)(this,{cooldown:l.LO,isHidden:l.LO,level:l.LO,manaCost:l.LO})}get isDotaPlus(){return this.refname.startsWith("plus_")}get isFluff(){return this.isDotaPlus||this.isSeasonal}get isSeasonal(){return this.refname.startsWith("seasonal_")}get isTalent(){return this.refname.startsWith("special_bonus_")||this.refname.startsWith("ad_special_bonus_")}get maxLevel(){return this.definition.maxLevel??this.level}get name(){return this.definition.dname}},g=class{constructor(){this.cellX=0,this.cellY=0,this.vecX=0,this.vecY=0,(0,l.rC)(this,{cellX:l.LO,cellY:l.LO,vecX:l.LO,vecY:l.LO,x:l.Fl,y:l.Fl,relX:l.Fl,relY:l.Fl})}get x(){return this.cellX*c.bM+this.vecX}get y(){return this.cellY*c.bM+this.vecY}get relX(){return(0,m.bA)(this.x-c.GC)}get relY(){return(0,m.bA)(this.y-c.GC)}},f=class extends p{constructor(...e){super(...e),this.type="unit",this.modelID=null,this.teamID=null,this.position=new g,this.rotation=null,this.level=1,this.hp=0,this.hpMax=0,this.mana=0,this.manaMax=0,this.isWaitingToSpawn=!1,this.ownerHandle=null,this.abilityHandles=[],(0,l.rC)(this,{modelID:l.LO,teamID:l.LO,position:l.LO,rotation:l.LO,level:l.LO,hp:l.LO,hpMax:l.LO,mana:l.LO,manaMax:l.LO,isWaitingToSpawn:l.LO,ownerHandle:l.LO,abilityHandles:l.LO,abilities:l.Fl,color:l.Fl,isDead:l.Fl,name:l.Fl,owner:l.Fl,team:l.Fl})}get abilities(){return this.abilityHandles.reduce(((e,t)=>{const a=this.replay.abilities.get(t);return!a||a.isFluff||a.isTalent||e.push(a),e}),[])}get color(){var e;return(null===(e=this.owner)||void 0===e?void 0:e.color)||c.ct[this.teamID]}get isDead(){return this.hp<=0}get name(){var e;return(null===(e=_.Uc[this.refname])||void 0===e?void 0:e.name)||this.refname}get owner(){const{ownerHandle:e,replay:t}=this;return t.units.get(e)||t.players.get(e)}get refname(){const{internalName:e}=this,t=_.Uc[e];if(t&&!t.match)return e;for(const[e,t]of Object.entries(_.Uc))if(t.match&&t.match(this))return e;return e}get team(){return this.replay.teams.byID.get(this.teamID)}},b=class extends f{constructor(...e){super(...e),this.type="building"}},v=class extends f{constructor(...e){super(...e),this.inventoryHandles=[null,null,null,null,null,null],(0,l.rC)(this,{inventoryHandles:l.LO,inventory:l.Fl})}get inventory(){return this.inventoryHandles.map((e=>this.replay.items.get(e)))}},y=class extends v{constructor(...e){super(...e),this.type="courier",this.isFlying=!1,(0,l.rC)(this,{isFlying:l.LO})}get refname(){return this.isFlying?"npc_dota_flying_courier":super.refname}},w=class extends v{constructor(...e){super(...e),this.type="hero",this.playerID=-1,this.xp=0,this.isIllusion=!1,this.backpackHandles=[null,null,null],this.neutralItemHandle=null,this.stashHandles=[null,null,null,null,null,null],this.teleportScrollHandle=null,(0,l.rC)(this,{playerID:l.LO,xp:l.LO,isIllusion:l.LO,backpackHandles:l.LO,neutralItemHandle:l.LO,stashHandles:l.LO,teleportScrollHandle:l.LO,backpack:l.Fl,neutralItem:l.Fl,player:l.Fl,respawnCooldown:l.Fl,stash:l.Fl,teleportScroll:l.Fl})}get backpack(){return this.backpackHandles.map((e=>this.replay.items.get(e)))}get color(){return c.PS[this.playerID]}get name(){return _.uP[this.refname].localized_name}get neutralItem(){return this.replay.items.get(this.neutralItemHandle)}get player(){return this.replay.players.byID.get(this.playerID)}get refname(){return this.internalName}get respawnCooldown(){var e;return null===(e=this.player)||void 0===e?void 0:e.respawnCooldown}get stash(){return this.stashHandles.map((e=>this.replay.items.get(e)))}get teleportScroll(){return this.replay.items.get(this.teleportScrollHandle)}},C=class extends p{constructor(e,...t){super(e,...t),this.acquireTime=null,this.charges=null,this.cooldown=new h(e),this.level=null,this.manaCost=null,this.definition=_.TO[this.refname.replace("item_","")]||{dname:this.refname},(0,l.rC)(this,{acquireTime:l.LO,charges:l.LO,cooldown:l.LO,level:l.LO,manaCost:l.LO,annotation:l.Fl,name:l.Fl})}get annotation(){const{refname:e}=this;return"item_aegis"===e?(0|300-(this.replay.game.time-this.acquireTime))+"s":"item_black_king_bar"===e?11-this.level+"s":null}get name(){return this.definition.dname}},k=class extends p{constructor(e,...t){super(e,...t),this.id=null,this.name=null,this.heroID=null,this.teamID=null,this.steamID=null,this.kills=0,this.assists=0,this.deaths=0,this.lastHits=0,this.denies=0,this.networth=0,this.reliableGold=0,this.unreliableGold=0,this.totalEarnedGold=0,this.totalEarnedXP=0,this.isBot=!1,this.isBroadcaster=!1,this.camera=new class{constructor(){this.position=new g,(0,l.rC)(this,{position:l.LO,relX:l.Fl,relY:l.Fl})}get relX(){return this.position.relX}get relY(){return this.position.relY+.05}},this.respawnCooldown=new h(e),(0,l.rC)(this,{id:l.LO,name:l.LO,heroID:l.LO,teamID:l.LO,steamID:l.LO,kills:l.LO,assists:l.LO,deaths:l.LO,lastHits:l.LO,denies:l.LO,networth:l.LO,reliableGold:l.LO,unreliableGold:l.LO,totalEarnedGold:l.LO,totalEarnedXP:l.LO,isBot:l.LO,isBroadcaster:l.LO,camera:l.LO,respawnCooldown:l.LO,color:l.Fl,gold:l.Fl,gpm:l.Fl,hero:l.Fl,index:l.Fl,team:l.Fl,xpm:l.Fl})}get color(){return c.PS[this.id]}get gold(){return this.reliableGold+this.unreliableGold}get gpm(){const{clockTime:e}=this.replay.game;return!e||e<=0?0:Math.round(this.totalEarnedGold/e*60)}get hero(){return this.replay.units.get(this.heroID)}get index(){return String(this.id).padStart(4,"0")}get isPlayer(){return this.teamID===c.$e||this.teamID===c.nc}get isSpectator(){return this.teamID===c.x3}get kda(){return(this.kills+this.assists)/(this.deaths+1)}get level(){var e;return null===(e=this.hero)||void 0===e?void 0:e.level}get team(){return this.replay.teams.byID.get(this.teamID)}get xpm(){const{clockTime:e}=this.replay.game;return!e||e<=0?0:Math.round(this.totalEarnedXP/e*60)}},E=(0,m.qr)("id"),D=class extends p{constructor(...e){super(...e),this.id=null,this.name=null,this.kills=0,this.proID=null,(0,l.rC)(this,{id:l.LO,name:l.LO,kills:l.LO,proID:l.LO,heroes:l.Fl,players:l.Fl,units:l.Fl})}get heroes(){return this.players.map((e=>e.hero)).filter(Boolean)}get players(){return this.replay.players.filter((e=>e.teamID===this.id)).sort(E)}get units(){return this.replay.units.filter((e=>e.teamID===this.id))}},x={CDOTA_BaseNPC:"processUnit",CDOTA_BaseNPC_Additive:"processUnit",CDOTA_BaseNPC_Barracks:"processBuilding",CDOTA_BaseNPC_Clinkz_Skeleton_Army:"processUnit",CDOTA_BaseNPC_Creature:"processUnit",CDOTA_BaseNPC_Creep_Lane:"processUnit",CDOTA_BaseNPC_Creep_Neutral:"processUnit",CDOTA_BaseNPC_Creep_Siege:"processUnit",CDOTA_BaseNPC_Creep:"processUnit",CDOTA_BaseNPC_Fort:"processBuilding",CDOTA_BaseNPC_Invoker_Forged_Spirit:"processUnit",CDOTA_BaseNPC_ShadowShaman_SerpentWard:"processUnit",CDOTA_BaseNPC_Tower:"processBuilding",CDOTA_BaseNPC_Tusk_Sigil:"processUnit",CDOTA_BaseNPC_Venomancer_PlagueWard:"processUnit",CDOTA_BaseNPC_Warlock_Golem:"processUnit",CDOTA_BaseNPC_Watch_Tower:"processBuilding",CDOTA_DarkWillow_Creature:"processUnit",CDOTA_DataDire:"processTeamData",CDOTA_DataRadiant:"processTeamData",CDOTA_Item_Physical:"processCollectable",CDOTA_Item_Rune:"processCollectable",CDOTA_Item_RuneSpawner:null,CDOTA_Item_RuneSpawner_Bounty:null,CDOTA_Item_RuneSpawner_Powerup:null,CDOTA_Item:"processItem",CDOTA_NPC_Lich_Ice_Spire:"processUnit",CDOTA_NPC_Observer_Ward_TrueSight:"processUnit",CDOTA_NPC_Observer_Ward:"processUnit",CDOTA_NPC_Sentry_Ward:"processUnit",CDOTA_NPC_Techies_Minefield_Sign:"processUnit",CDOTA_NPC_TechiesMines:"processUnit",CDOTA_NPC_Treant_EyesInTheForest:"processUnit",CDOTA_NPC_WitchDoctor_Ward:"processUnit",CDOTA_PlayerResource:"processPlayerResource",CDOTA_Unit_Brewmaster_PrimalEarth:"processUnit",CDOTA_Unit_Brewmaster_PrimalFire:"processUnit",CDOTA_Unit_Brewmaster_PrimalStorm:"processUnit",CDOTA_Unit_Brewmaster_PrimalVoid:"processUnit",CDOTA_Unit_Broodmother_Spiderling:"processUnit",CDOTA_Unit_Broodmother_Web:"processUnit",CDOTA_Unit_Courier:"processCourier",CDOTA_Unit_Earth_Spirit_Stone:"processUnit",CDOTA_Unit_Elder_Titan_AncestralSpirit:"processUnit",CDOTA_Unit_Hero_Beastmaster_Boar:"processUnit",CDOTA_Unit_Hero_Beastmaster_Hawk:"processUnit",CDOTA_Unit_IngisFatuus:"processUnit",CDOTA_Unit_Roshan:"processUnitWithInventory",CDOTA_Unit_SpiritBear:"processUnitWithInventory",CDOTA_Unit_Undying_Tombstone:"processUnit",CDOTA_Unit_Undying_Zombie:"processUnit",CDOTA_Unit_VisageFamiliar:"processUnit",CDOTA_Unit_ZeusCloud:"processUnit",CDOTABaseAbility:"processAbility",CDOTAGamerulesProxy:"processGameRules",CDOTAPlayer:"processPlayer",CDOTATeam:"processTeam"},P=[{startsWith:"CDOTA_Ability_",method:"processAbility"},{startsWith:"CDOTA_Item_",method:"processItem"},{startsWith:"CDOTA_Unit_Hero_",method:"processHero"}];var T=a(74),F=a(2129);const B=s.ZP.div`
  position: absolute;
  bottom: 1px;
  right: 4px;
  font-size: 0.85em;

  ${e=>"mana"===e.type&&s.iv`
    color: #65D9F7;
  `}
`,I=e=>{const{type:t,value:a}=e;return r.createElement(B,{type:t},a)},S=s.ZP.div`
  ${e=>!e.active&&s.iv`
    filter: grayscale(100%) brightness(80%);

    ${e.translucentWhenInactive&&s.iv`
      opacity: 0.8;
    `}
  `}
`,O=s.ZP.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`,A=e=>{const{children:t,remaining:a}=e,s=a>0;return r.createElement(r.Fragment,null,s&&r.createElement(O,null,Math.ceil(a)),r.createElement(S,{active:!s},t))};var L=a(3841);const U=s.ZP.div`
  position: relative;
  width: 60px;
  height: 60px;
  border: 2px solid #333;
  border-color: #444 #333 #333 #444;
  outline: 1px solid #111;
  background: black;

  ${L.xW} {
    display: block;
    width: 100%;
    height: 100%;
  }
`,M=(0,T.P)((e=>{const{className:t,ability:a}=e;return r.createElement(U,{className:t},a&&r.createElement(A,{remaining:a.cooldown.remaining},a.manaCost>0&&r.createElement(I,{type:"mana",value:a.manaCost}),r.createElement(L.tc,{refname:a.refname})))})),N=s.ZP.div`
  position: absolute;
  z-index: 1;
`,Z=s.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);

  span {
    margin: 5px;
  }
`,z=s.ZP.div`
  position: relative;
  margin: 4px 0px 0px;
  background: rgba(0, 0, 0, .4);
  border-radius: 4px;
  text-align: center;

  ${e=>"default"===e.size&&s.iv`
    height: 25px;

    ${N} {
      border-radius: 4px;
      top: 1px;
      bottom: 1px;
      left: 1px;
      right: 1px;
    }
  `}

  ${e=>"mini"===e.size&&s.iv`
    height: 3px;
    margin: 1px auto;

    ${N} {
      height: 100%;
    }
  `}
`,$=e=>{let{color:t}=e;const{max:a,value:s,size:n="default",teamID:i,type:l}=e,o=s/a*100|0;return"health"===l?t=c.ct[i]:"mana"===l&&(t="#466DDC"),r.createElement(z,{size:n},"default"===n&&a>0&&r.createElement(Z,null,0|s,r.createElement("span",null,"/"),0|a),r.createElement(N,{style:{background:t,width:`${o}%`}}))};var V=a(1990);const H=e=>r.createElement("select",e);a(9535);var R=a(1690),W=a(6471),G=a(1823),X=a(9649);const Y=s.ZP.div`
  position: relative;
  width: 50px;
  height: 38px;
  border: 1px solid #333;
  border-color: #333 #444 #444 #333;
  background: black;

  ${L.xW} {
    display: block;
    width: 100%;
    height: 100%;
  }

  ${e=>e.rounded&&s.iv`
    width: 38px;
    border-radius: 50%;
    overflow: hidden;

    ${L.xW} {
      width: 50px;
      transform: translate(-6px, 0);
    }
  `}
`,q=(0,T.P)((e=>{const{className:t,item:a,rounded:s=!1}=e;return r.createElement(Y,{className:t,rounded:s},a&&r.createElement(A,{remaining:a.cooldown.remaining},r.createElement(L.Ji,{refname:a.refname}),a.charges>0&&r.createElement(I,{value:a.charges}),!a.charges&&a.manaCost>0&&r.createElement(I,{type:"mana",value:a.manaCost}),a.annotation&&r.createElement(I,{value:a.annotation})))})),j=(0,s.ZP)(X.U)`
  align-content: flex-start;
  margin: 9px;

  ${Y} {
    margin: 1px;
  }
`,K=(0,T.P)((e=>{const{items:t,wrap:a}=e;return r.createElement(j,{wrap:a},t.map(((e,t)=>r.createElement(q,{key:t,item:e}))))})),Q=q,J=s.ZP.div`
  position: relative;
  width: ${e=>2*e.radius}px;
  height: ${e=>2*e.radius}px;
  background: rgba(0, 0, 0, .75);
  border-radius: 50%;
  color: #FFCC00;
  font-weight: bold;
  text-align: center;
  line-height: 30px;

  svg {
    transform: rotate(-90deg);
  }

  span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    letter-spacing: 0px;

    ${e=>"small"===e.size&&s.iv`
      font-size: 0.7em;
    `}
  }
`,ee=e=>{const{children:t,size:a="default",xp:s}=e;let n=20,i=3;"small"===a&&(n=10,i=2);const l=_.Dt[t-1],o=_.Dt[t],d=o?(s-l)/(o-l):1,m=n-i,c=2*m*Math.PI,h=c-d*c;return r.createElement(J,{radius:n,size:a},r.createElement("svg",{height:2*n,width:2*n},r.createElement("circle",{stroke:"#FFCC00",fill:"transparent",strokeWidth:i,strokeDasharray:`${c} ${c}`,style:{strokeDashoffset:h},r:m,cx:n,cy:n})),r.createElement("span",null,t))},te=r.memo(ee);var ae=a(5036);a(1264),a(7318),a(2096);const re=s.ZP.div`
  height: 3px;
  border-bottom: 1px solid black;
`,se=e=>{const{color:t}=e;return r.createElement(re,{style:{background:t}})},ne=r.memo(se);var ie=a(6689),le=a(8588);a(9984);const oe=s.ZP.div`
  width: 25px;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, 50%);
  pointer-events: none;

  img {
    display: block;
  }
`,de=(0,T.P)((e=>{const{selected:t,unit:a}=e,{isDead:s,position:{relX:n,relY:i}}=a,l=a instanceof w;return s?null:r.createElement(oe,{selected:t,style:{left:100*n+"%",bottom:100*i+"%"}},l&&r.createElement(L.mZ,{refname:a.refname,variant:"icon"}))})),me=s.ZP.div`
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 5;
  background: rgba(0, 0, 0, .5);
  border: 1px solid rgba(0, 0, 0, .5);
  border-left-color: black;
  border-bottom-color: black;
  border-top-right-radius: 15px;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    z-index: 1;
  }

  ${oe} {
    z-index: 2;
  }
`,ce=s.ZP.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 100%;

  > img {
    display: block;
    transform: translate(-50%, 50%);
  }
`,he=s.ZP.div`
  position: absolute;
  z-index: 100;
  background: rgba(255, 255, 255, .45);
  pointer-events: none;
  transform: translate(-50%, 50%);
`,_e=(0,T.P)((e=>{const{camera:t,isFreeCamera:a,selectedUnit:s,setFreeCamera:n,units:i}=e,[l,o]=(0,r.useState)(!1),d=(0,r.useRef)(null),m=(0,r.useCallback)((e=>{if(e.preventDefault(),!a)return;o(!0);const{width:t,height:r}=d.current,s=d.current.getBoundingClientRect(),i=e.clientX-s.x-t/2,l=e.clientY-s.y-r/2;n((e=>({...e,relX:i/t,relY:-l/r})))}),[a,n]),c=(0,r.useCallback)((e=>{e.preventDefault(),a&&o(!1)}),[a,o]),h=(0,r.useCallback)((e=>{if(!a||!l)return;const{movementX:t,movementY:r}=e,{width:s,height:i}=d.current;n((e=>({...e,relX:e.relX+t/s,relY:e.relY+-r/i})))}),[l,a,n]),_=i.filter((e=>e instanceof w));return r.createElement(me,{onMouseDown:m,onMouseUp:c,onMouseMove:h,onMouseOut:c},r.createElement(ce,null,r.createElement("img",{ref:d,src:"./images/minimap/7.23.webp",draggable:"false",alt:"Dota 2 minimap"}),r.createElement(he,{style:{left:100*t.relX+"%",bottom:100*t.relY+"%",width:100*t.width+"%",height:100*t.height+"%"}}),_.map((e=>r.createElement(de,{key:e.handle,selected:s===e,unit:e})))))})),pe=s.ZP.div`
  padding: 7px 7px;
  position: absolute;
  top: 54px;
  right: 10px;
  z-index: 6;
  background: rgba(0, 0, 0, .5);
  text-align: center;
`,ue=(0,T.P)((e=>{const{label:t,players:a}=e;return a.length?r.createElement("optgroup",{label:t},a.map((e=>{var t;return r.createElement("option",{key:e.id,value:e.id},(null===(t=e.hero)||void 0===t?void 0:t.name)||e.name)}))):null})),ge=(0,T.P)((e=>{const{cameraID:t,players:a,setCameraID:s}=e,n=a.filter((e=>e.teamID===c.$e)),i=a.filter((e=>e.teamID===c.nc)),l=a.filter((e=>e.isBroadcaster)),o=(0,r.useCallback)((e=>{s(+e.target.value)}),[s]);return r.createElement(pe,null,r.createElement(H,{onChange:o,value:t},r.createElement("option",{value:-1},"Free camera"),r.createElement(ue,{label:"Radiant",players:n}),r.createElement(ue,{label:"Dire",players:i}),r.createElement(ue,{label:"Broadcasters",players:l})))})),fe=(0,s.ZP)(X.g)`
  margin: 11px 6px 14px;
  justify-content: space-between;
`,be=s.ZP.div`
  flex: 1;
  min-width: 3px;
  max-width: 8px;
  height: 3px;
  margin: 0 3px;
  background: #444444;
  box-shadow: 1px 1px 1px #111,
              -1px 1px 1px #111,
              1px -1px 1px #111,
              -1px -1px 1px #111;

  ${e=>e.acquired&&s.iv`
    background: #FFCC00;
  `}
`,ve=(0,T.P)((e=>{const{ability:t}=e,{level:a,maxLevel:s}=t,n=new Array(s).fill();return r.createElement(fe,null,r.createElement(S,{active:a>=1},r.createElement(M,{ability:t})),r.createElement(X.U,{justify:"center"},n.map(((e,t)=>r.createElement(be,{key:t,acquired:t<a})))))})),ye=(0,s.ZP)(X.U)`
  flex: 1;
`,we=(0,T.P)((e=>{const{abilities:t=[]}=e;return r.createElement(ye,null,t.map((e=>!e.isHidden&&r.createElement(ve,{key:e.handle,ability:e}))))})),Ce=(0,s.ZP)(X.g)`
  position: relative;
  align-content: flex-start;
  width: 180px;
  padding-right: 50px;
`,ke=s.ZP.div`
  position: absolute;
  top: 30px;
  right: 6px;
`,Ee=s.ZP.div`
  position: absolute;
  top: 112px;
  right: 6px;
`,De=(0,T.P)((e=>{const{backpack:t,inventory:a,neutralItem:s,teleportScroll:n}=e;return r.createElement(Ce,null,r.createElement(K,{items:a,wrap:!0}),t&&r.createElement(S,{active:!1},r.createElement(K,{items:t})),r.createElement(ke,null,r.createElement(Q,{item:s,rounded:!0})),r.createElement(Ee,null,r.createElement(Q,{item:n,rounded:!0})))})),xe=r.memo(De),Pe=s.ZP.div`
  color: #FFCC00;
  text-align: center;
  text-transform: uppercase;
`,Te=e=>{const{children:t}=e;return r.createElement(Pe,null,t)},Fe=r.memo(Te),Be=s.ZP.div`
  position: relative;
  width: 138px;
  cursor: pointer;

  ${L.xW} {
    width: 138px;
  }

  ${O} {
    font-size: 2em;
  }
`,Ie=(0,T.P)((e=>{const{onClick:t,unit:a}=e,{isDead:s,respawnCooldown:n}=a,i=r.createElement(L.$i,{unit:a,variant:"portrait"}),l=n?r.createElement(A,{remaining:n.remaining},i):r.createElement(S,{active:!s},i);return r.createElement(Be,{onClick:t},l)})),Se=(0,s.ZP)(X.U)`
  height: 160px;
  padding-bottom: 65px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, .5);
  border: 1px solid rgba(0, 0, 0, .5);
  border-top-left-radius: 2px;

  ${Pe} {
    position: absolute;
    top: -25px;
    left: 69px;
    transform: translateX(-50%);
  }

  ${J} {
    position: absolute;
    left: 0;
    bottom: 75px;
    z-index: 1;
    transform: translateX(-50%);
  }

  ${Be} {
    margin-right: 8px;
  }
`,Oe=(0,s.ZP)(X.g)`
  min-width: 260px;
  margin: 0 10px;
`,Ae=(0,T.P)((e=>{const{selectedUnit:t,setSelection:a}=e;if(!t)return null;const{handle:s,name:n,hp:i,hpMax:l,mana:o,manaMax:d,level:m,teamID:c,xp:h,abilities:_,backpack:p,inventory:u,neutralItem:g,teleportScroll:f}=t;(0,F.Pp)("esc",(()=>{a(null)}),[a]);const b=(0,r.useCallback)((()=>{a(s)}),[s,a]),v=t instanceof w;return r.createElement(Se,null,r.createElement(Fe,null,n),v&&r.createElement(te,{xp:h},m),r.createElement(Ie,{unit:t,onClick:b}),r.createElement(Oe,null,r.createElement(we,{abilities:_}),r.createElement($,{type:"health",value:i,max:l,teamID:c}),r.createElement($,{type:"mana",value:o,max:d})),u&&r.createElement(xe,{backpack:p,inventory:u,neutralItem:g,teleportScroll:f}))})),Le=(0,s.ZP)(X.U)`
  align-items: center;
  height: 28px;
  margin-top: 2px;

  ${L.xW} {
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #000;
  }
`,Ue=s.ZP.div`
  flex: 1;
  display: flex;
  align-items: center;
  height: 100%;
  position: relative;
  padding-left: 10px;
`,Me=(0,T.P)((e=>{const{children:t,player:a}=e,{hero:s,teamID:n}=a,i=c.ct[n],l=`linear-gradient(to right, ${i}AA, ${i}00)`;return r.createElement(Le,{style:{backgroundImage:l}},r.createElement(L.mZ,{refname:s.refname,variant:"landscape"}),r.createElement(Ue,null,t))})),Ne=(0,T.P)((e=>{const{definition:t,players:a}=e;return a.map((e=>r.createElement(Me,{key:e.id,player:e},t.renderer(e))))})),Ze=s.ZP.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 0;
  height: 11px;
  transform: translate(0, -50%);
  mask-image: linear-gradient(to right, transparent 0%, #000F 50%);
`,ze=s.ZP.div`
  position: relative;
  border: 1px solid #0007;
  border-style: solid none solid none;
  height: 3px;

  &:after {
    display: block;
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 9px;
    height: 9px;
    border: 1px solid #0009;
    border-radius: 50%;
    background-color: inherit;
    background-image: radial-gradient(#FFF5, #0000);
    transform: translate(0%, -50%);
  }
`,$e=s.ZP.div`
  position: relative;
  z-index: 2;
`,Ve=(0,T.P)((e=>{const{definition:t,players:a}=e,s=a.map((e=>t.value(e))),n=Math.max(...s)||1;return a.map(((e,t)=>{const a=c.ct[e.teamID],i=s[t]/n*100|0;return r.createElement(Me,{key:e.id,player:e},r.createElement(Ze,null,r.createElement(ze,{style:{background:a,width:`${i}%`}})),r.createElement($e,null,s[t]))}))})),He={kda:{label:"Kills / Deaths / Assists",hotkey:"Q",sort:(0,m.yo)((0,m.w7)("kda"),(0,m.w7)("kills"),(0,m.w7)("deaths"),(0,m.w7)("assists")),renderer:e=>`${e.kills} / ${e.deaths} / ${e.assists}`},lhd:{label:"Last Hits / Denies",hotkey:"W",sort:(0,m.yo)((0,m.w7)("lastHits"),(0,m.w7)("denies")),renderer:e=>`${e.lastHits} / ${e.denies}`},level:{label:"Hero Level",hotkey:"E",sort:(0,m.w7)("level"),value:e=>e.level},xpm:{label:"XP Per Minute",hotkey:"R",sort:(0,m.w7)("xpm"),value:e=>e.xpm},gold:{label:"Current Gold",hotkey:"T",sort:(0,m.w7)("gold"),value:e=>e.gold},networth:{label:"Net Worth",hotkey:"Y",sort:(0,m.w7)("networth"),value:e=>e.networth},gpm:{label:"Gold Per Minute",hotkey:"U",sort:(0,m.w7)("gpm"),value:e=>e.gpm}},Re=s.ZP.div`
  position: absolute;
  top: 54px;
  left: 10px;
  z-index: 6;

  ${W.G} {
    padding: 7px 7px;
    background: rgba(0, 0, 0, .5);
    margin-bottom: 6px;
  }

  ${V.Sn} {
    width: 30px;
  }
`,We=(0,m.qr)("teamID"),Ge=(0,T.P)((e=>{const{players:t}=e,[a,s]=(0,r.useState)("sorted"),[n,i]=(0,r.useState)("lhd"),l=He[n],o=(0,r.useCallback)((()=>{"collapsed"===a?s("sorted"):"sorted"===a?s("split"):"split"===a&&s("collapsed")}),[a,s]),d=(0,r.useCallback)((e=>{n===e?o():(i(e),"collapsed"===a&&s("sorted"))}),[o,a,n,s,i]);for(const[e,{hotkey:t}]of Object.entries(He))(0,F.Pp)(`${t}`,(()=>{d(e)}),[d]);(0,F.Pp)("S",(()=>{s("sorted"===a?"split":"sorted")}),[a,s]),(0,F.Pp)("A",(()=>{s("collapsed")}),[s]);const c=(0,r.useCallback)((e=>{d(e.target.value)}),[d]);let h=null;if("collapsed"!==a){const e=t.filter((e=>e.isPlayer&&e.hero)),s="split"===a,n=Array.from(e).sort((0,m.yo)(s?We:null,l.sort)),i=l.value?Ve:Ne;h=r.createElement(i,{definition:l,players:n})}return r.createElement(Re,null,r.createElement(W.Z,null,r.createElement(H,{onChange:c,value:n},Object.entries(He).map((([e,{label:t,hotkey:a}])=>r.createElement("option",{key:e,value:e},t,a?` [${a}]`:"")))),r.createElement(V.ZP,{onClick:o},"collapsed"===a&&r.createElement(G.Z,{name:"eye-slash"}),"sorted"===a&&r.createElement(G.Z,{name:"sort-amount-down"}),"split"===a&&r.createElement(G.Z,{name:"sort"}))),h)})),Xe=(0,s.ZP)(X.U)`
  display: flex;
  align-items: center;
  width: 500px;
  padding: 7px 7px;
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  background: rgba(0, 0, 0, .5);
  border-radius: 100px;
  text-align: center;

  > * {
    margin: auto 5px;
  }

  input {
    width: 100%;
  }

  ${V.Sn} {
    width: 50px;
  }
`,Ye=(0,T.P)((e=>{const{playing:t,replay:{lastTick:a,tick:s},requestTick:n,setPlaying:i}=e,l=(0,r.useCallback)((()=>{i(!t)}),[t,i]),o=(0,r.useCallback)((e=>{n(+e.target.value)}),[n]);return r.createElement(Xe,null,r.createElement(V.ZP,{onClick:l},r.createElement(G.Z,{name:t?"pause":"play"})),r.createElement("input",{type:"range",min:0,max:a,step:1,value:s,onChange:o}),r.createElement("div",{style:{whiteSpace:"nowrap"}},r.createElement(le.Z,{time:s/30})," / ",r.createElement(le.Z,{time:a/30})))})),qe=(0,s.ZP)(le.Z)`
  min-width: 70px;
  text-align: center;
`,je=e=>r.createElement(qe,e),Ke=r.memo(je),Qe=s.ZP.div`
  position: relative;
  cursor: pointer;
  margin-left: 1px;

  &:last-child {
    margin-right: 1px;
  }
`,Je=(0,T.P)((e=>{const{hero:t,setSelection:a}=e,{color:s,handle:n,hp:i,hpMax:l,mana:o,manaMax:d,player:m,refname:c,respawnCooldown:h,teamID:_}=t,p=(m.id+1)%10;(0,F.Pp)(`${p}`,(()=>{a(n)}),[n,a]);const u=(0,r.useCallback)((()=>{a(n)}),[n,a]);return r.createElement(Qe,{onClick:u},r.createElement(ne,{color:s}),r.createElement(A,{remaining:h.remaining},r.createElement(L.mZ,{refname:c,variant:"landscape"}),r.createElement($,{type:"health",size:"mini",value:i,max:l,teamID:_}),r.createElement($,{type:"mana",size:"mini",value:o,max:d})))})),et=(0,s.ZP)(X.U)`
  img {
    display: block;
  }
`,tt=(0,T.P)((e=>{const{heroes:t,setSelection:a}=e;return r.createElement(et,null,t.map((e=>r.createElement(Je,{key:e.handle,hero:e,setSelection:a}))))})),at=s.ZP.div`
  font-weight: bold;
  min-width: 50px;
  text-align: center;
`,rt=e=>{const{value:t}=e;return r.createElement(at,null,t)},st=r.memo(rt),nt=(0,s.ZP)(X.U)`
  align-items: center;
  min-height: 46px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, .5);
`,it=(0,T.P)((e=>{const{game:{clockTime:t},setSelection:a,teams:s}=e,n=s.byID.get(c.$e),i=s.byID.get(c.nc);return n&&i?r.createElement(nt,null,n.proID>0&&r.createElement(ie.Z,{alt:n.name,teamID:n.proID}),r.createElement(tt,{heroes:n.heroes,setSelection:a}),r.createElement(st,{value:n.kills}),r.createElement(Ke,{time:t}),r.createElement(st,{value:i.kills}),r.createElement(tt,{heroes:i.heroes,setSelection:a}),i.proID>0&&r.createElement(ie.Z,{alt:i.name,teamID:i.proID})):null})),lt=e=>{const{children:t}=e;return r.createElement(r.Fragment,null,t)},ot=s.ZP.div`
  position: absolute;
  // Adding an additional 8% to place the camera a bit higher up for comfort
  bottom: 58%;
  left: 50%;
`,dt=s.ZP.div`
  position: relative;

  > img {
    position: relative;
    width: 4000px;
    height: 4000px;
    // Minor offsets here to get the map to align with actual entities
    transform: translate(-50.2%, 50.5%)
  }
`,mt=s.ZP.div`
  width: 300px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  text-align: center;

  p {
    margin: 10px 10px;
  }
`,ct=r.forwardRef(((e,t)=>{const{children:a,style:s}=e;return r.createElement(ot,{style:s},r.createElement(dt,null,r.createElement(mt,null,r.createElement("p",null,"Loading the Dota 2 map background..."),r.createElement("p",null,"If it never loads, your browser may not support the WebP image format."),r.createElement("p",null,"¯\\_(ツ)_/¯")),r.createElement("img",{ref:t,src:"./images/map/7.23.webp",alt:"Dota 2 map"}),a))})),ht=(0,s.ZP)(S)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  ${e=>e.active&&e.isIllusion&&s.iv`
    filter: sepia(100%) hue-rotate(190deg) saturate(500%);
  `}
  ${e=>"hero"===e.type&&s.iv`
    padding: 10px;
    z-index: 2;
  `}
  ${e=>"building"===e.type&&s.iv`
    padding: 5px;
  `}
  border: 3px solid ${e=>e.color}DD;
  ${e=>e.selected&&s.iv`
    border-color: white;
    z-index: 3;
  `}
  position: absolute;
  transform: translate(-50%, 50%);
  background: ${e=>e.color}AA;
  box-shadow: 1px 1px 1px #111;
  cursor: pointer;

  ${L.xW} {
    display: block;
  }

  ${J} {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-20%, 20%);
  }
`,_t=s.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    right: -12px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 12px solid currentColor;
    transform: translate(0, -50%);
  }
`,pt=(0,T.P)((e=>{const{selected:t,unit:a}=e;let{color:s,rotation:n}=a;return null===n?null:(t&&(s="white"),n*=-1,r.createElement(_t,{style:{color:s,transform:`rotate(${n}deg`}}))})),ut=(0,T.P)((e=>{const{selected:t,setSelection:a,unit:s}=e,{color:n,handle:i,isDead:l,isWaitingToSpawn:o,position:{relX:d,relY:m}}=s,c=(0,r.useCallback)((()=>{a(i)}),[i,a]);if(o)return null;const h=s instanceof w;return r.createElement(ht,{active:!l,translucentWhenInactive:!0,color:n,onClick:c,selected:t,isIllusion:s.isIllusion,style:{left:100*d+"%",bottom:100*m+"%"},type:s.type},r.createElement(pt,{selected:t,unit:s}),r.createElement(L.$i,{unit:s,variant:"icon"}),h&&r.createElement(te,{xp:s.xp,size:"small"},s.level))})),gt=s.ZP.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  overflow: hidden;
  background-image:
    linear-gradient(45deg, #222 25%, transparent 25%),
    linear-gradient(-45deg, #222 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #222 75%),
    linear-gradient(-45deg, transparent 75%, #222 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
  cursor: ${e=>e.dragging?"grabbing":"grab"};
`,ft=(0,T.P)((e=>{const{camera:t,isFreeCamera:a,selectedUnit:s,setFreeCamera:n,setSelection:i,units:l}=e,[o,d]=(0,r.useState)(!1),m=(0,r.useRef)(null),[c]=(0,F.dz)();(0,r.useEffect)((()=>{var e,t;const a=null===(e=m.current)||void 0===e?void 0:e.width,r=null===(t=m.current)||void 0===t?void 0:t.height;n((e=>({...e,width:a?c.width/a:0,height:r?c.height/r:0})))}),[n,c]);const h=(0,r.useCallback)((e=>e.preventDefault()),[]),_=(0,r.useCallback)((e=>{e.preventDefault(),a&&d(!0)}),[a,d]),p=(0,r.useCallback)((e=>{e.preventDefault(),a&&d(!1)}),[a,d]),u=(0,r.useCallback)((e=>{if(!a||!o)return;const{movementX:t,movementY:r}=e,{width:s,height:i}=m.current;n((e=>({...e,relX:e.relX+-t/s,relY:e.relY+r/i})))}),[o,a,n]),{relX:g,relY:f}=t;return r.createElement(gt,{dragging:o,onDoubleClick:h,onMouseDown:_,onMouseUp:p,onMouseMove:u},r.createElement(ct,{ref:m,style:{transform:`translate(${100*-g}%, ${100*f}%)`}},l.map((e=>r.createElement(ut,{key:e.handle,unit:e,selected:s===e,setSelection:i})))))})),bt=s.ZP.div`
  width: 100%;
  height: 100%;
`,vt=(0,T.P)((({replay:e})=>{const{camera:t,cameraID:a,isFreeCamera:s,playing:n,requestTick:i,selectedUnit:l,setCameraID:o,setFreeCamera:d,setPlaying:m,setSelection:c}=(0,F._P)(e);return r.createElement(bt,null,r.createElement(lt,null,r.createElement(_e,{camera:t,isFreeCamera:s,setFreeCamera:d,units:e.units}),r.createElement(ge,{cameraID:a,players:e.players,setCameraID:o}),l&&r.createElement(Ae,{key:l.handle,selectedUnit:l,setSelection:c}),r.createElement(Ge,{players:e.players}),r.createElement(Ye,{playing:n,replay:e,setPlaying:m,requestTick:i}),r.createElement(it,{game:e.game,teams:e.teams,setSelection:c})),r.createElement(ft,{camera:t,isFreeCamera:s,selectedUnit:l,setFreeCamera:d,setSelection:c,units:e.units}))}));var yt=a(1204);const wt=(0,s.ZP)(ae.Z)`
  position: absolute;
  top: 16px;
  right: 15px;
  z-index: 5;

  i {
    position: relative;
    top: 1px;
  }
`,Ct=s.ZP.div`
  text-shadow: 1px 1px 1px #111,
               -1px 1px 1px #111,
               1px -1px 1px #111,
               -1px -1px 1px #111;
`,kt=()=>{const e=(0,n.k6)(),{id:t}=(0,n.UO)(),a=/^\d+$/.test(t),[s,h]=(0,r.useState)(null);return(0,F.ZQ)(`Match ${t}`),(0,F.bd)((async()=>{let r;if(r=a?await yt.Z.models.Match.query.get({matchID:+t}):await yt.Z.models.Match.query.get({uuid:t}),!r)return void(a?e.push(`/matches/find/${t}`):e.push("/"));const s=await r.replay.blob.arrayBuffer();h(new class{constructor(e){this.emitter=new i,this.parser=new o.default(e),this.tick=-1,this.tickInterval=null,this.lastTick=this.parser.lastTick,this.abilities=new m.Yw("handle"),this.items=new m.Yw("handle"),this.players=new m.Yw("handle",{byID:"id"}),this.teams=new m.Yw("handle",{byID:"id"}),this.units=new m.Yw("handle"),this.game=new class{constructor(){this.phase=null,this.preStartTime=null,this.startTime=null,this.stateTransitionTime=null,this.time=null,(0,l.rC)(this,{phase:l.LO,preStartTime:l.LO,startTime:l.LO,stateTransitionTime:l.LO,time:l.LO,clockTime:l.Fl})}get clockTime(){return this.startTime?this.time-this.startTime:this.preStartTime?this.time-this.stateTransitionTime:null}},this.onEntities=this.onEntities.bind(this),this.onTick=this.onTick.bind(this),this.parser.on("warn",this.emitter.emit.bind(this.emitter,"warn")),this.parser.on("entities",this.onEntities),this.parser.on("tick",this.onTick),this.seek=this.parser.seek.bind(this.parser),this.start=this.parser.start.bind(this.parser),this.step=this.parser.step.bind(this.parser),(0,l.rC)(this,{tick:l.LO,tickInterval:l.LO,lastTick:l.LO,abilities:l.LO,items:l.LO,players:l.LO,teams:l.LO,units:l.LO,game:l.LO,jump:l.aD,seek:l.aD,start:l.aD,step:l.aD})}entityNameFor(e){const t=e.get("m_pEntity.m_nameStringableIndex");return this.parser.stringTables.get("EntityNames").entries[t].key}jump(e){this.parser.off("entities",this.onEntities),this.parser.off("tick",this.onTick),this.parser.seek(e),this.parser.on("entities",this.onEntities),this.parser.on("tick",this.onTick),this.players.clear(),this.teams.clear(),this.units.clear();const t=this.parser.entities.map((e=>({entity:e,delta:e.snapshot,event:d._V.CREATED})));this.onTick(this.parser.tick),this.onEntities(t)}jumpTo(e){for(;this.game.phase!==e&&this.parser.parsing;)this.step()}on(...e){this.emitter.on(...e)}off(...e){this.emitter.remove(...e)}onEntities(e){for(const{entity:a,delta:r,event:s}of e){const e=a.class.name;let n=x[e];var t;void 0===n&&(n=null===(t=P.find((t=>e.startsWith(t.startsWith))))||void 0===t?void 0:t.method,x[e]=n||null),n&&this[n](a,r,s)}this.emitter.emit("update")}onTick(e){this.tick=e,this.tickInterval=this.parser.tickInterval,this.emitter.emit("update")}processAbility(e,t,a){const r=e.handle;let s=this.abilities.get(r);s||(s=new u(this,e,this.entityNameFor(e)),this.abilities.add(s)),s&&a&d._V.DELETED&&this.abilities.delete(s),"m_fCooldown"in t&&(s.cooldown.value=t.m_fCooldown),"m_flCooldownLength"in t&&(s.cooldown.duration=t.m_flCooldownLength),"m_bHidden"in t&&(s.isHidden=t.m_bHidden),"m_iLevel"in t&&(s.level=t.m_iLevel),"m_iManaCost"in t&&(s.manaCost=t.m_iManaCost)}processBuilding(e,t,a){return this.processUnit(e,t,a,{class:b,hasRotation:!1})}processCourier(e,t,a){const r=this.processUnitWithInventory(e,t,a,{class:y});r&&"m_bFlyingCourier"in t&&(r.isFlying=t.m_bFlyingCourier)}processCollectable(e,t,a){}processGameRules(e,t){const{game:a}=this;"m_pGameRules.m_nGameState"in t&&(a.phase=t["m_pGameRules.m_nGameState"]),"m_pGameRules.m_flPreGameStartTime"in t&&(a.preStartTime=0|t["m_pGameRules.m_flPreGameStartTime"]),"m_pGameRules.m_flGameStartTime"in t&&(a.startTime=0|t["m_pGameRules.m_flGameStartTime"]),"m_pGameRules.m_flStateTransitionTime"in t&&(a.stateTransitionTime=0|t["m_pGameRules.m_flStateTransitionTime"]),"m_pGameRules.m_fGameTime"in t&&(a.time=0|t["m_pGameRules.m_fGameTime"])}processHero(e,t,a){const r=this.processUnitWithInventory(e,t,a,{class:w});r&&("m_iPlayerID"in t&&(r.playerID=t.m_iPlayerID),"m_iCurrentXP"in t&&(r.xp=t.m_iCurrentXP),"m_hItems.0006"in t&&(r.backpackHandles[0]=t["m_hItems.0006"]),"m_hItems.0007"in t&&(r.backpackHandles[1]=t["m_hItems.0007"]),"m_hItems.0008"in t&&(r.backpackHandles[2]=t["m_hItems.0008"]),"m_hItems.0009"in t&&(r.stashHandles[0]=t["m_hItems.0009"]),"m_hItems.0010"in t&&(r.stashHandles[1]=t["m_hItems.0010"]),"m_hItems.0011"in t&&(r.stashHandles[2]=t["m_hItems.0011"]),"m_hItems.0012"in t&&(r.stashHandles[3]=t["m_hItems.0012"]),"m_hItems.0013"in t&&(r.stashHandles[4]=t["m_hItems.0013"]),"m_hItems.0014"in t&&(r.stashHandles[5]=t["m_hItems.0014"]),"m_hItems.0015"in t&&(r.teleportScrollHandle=t["m_hItems.0015"]),"m_hItems.0016"in t&&(r.neutralItemHandle=t["m_hItems.0016"]),"m_hReplicatingOtherHeroModel"in t&&(r.isIllusion=16777215!==t.m_hReplicatingOtherHeroModel))}processItem(e,t,a){const r=e.handle;let s=this.items.get(r);s||(s=new C(this,e,this.entityNameFor(e)),this.items.add(s)),s&&a&d._V.DELETED&&this.items.delete(s),"m_flAssembledTime"in t&&(s.acquireTime=t.m_flAssembledTime),"m_iCurrentCharges"in t&&(s.charges=t.m_iCurrentCharges),"m_fCooldown"in t&&(s.cooldown.value=t.m_fCooldown),"m_flCooldownLength"in t&&(s.cooldown.duration=t.m_flCooldownLength),"m_iLevel"in t&&(s.level=t.m_iLevel),"m_iManaCost"in t&&(s.manaCost=t.m_iManaCost)}processPlayer(e,t,a){const r=e.handle;let s=this.players.get(r);s||(s=new k(this,e),s.id=e.get("m_iPlayerID"),this.players.add(s)),s&&a&d._V.DELETED?this.players.delete(s):("m_hAssignedHero"in t&&(s.heroID=t.m_hAssignedHero),"m_iTeamNum"in t&&(s.teamID=t.m_iTeamNum),"CBodyComponent.m_cellX"in t&&(s.camera.position.cellX=t["CBodyComponent.m_cellX"]),"CBodyComponent.m_cellY"in t&&(s.camera.position.cellY=t["CBodyComponent.m_cellY"]),"CBodyComponent.m_vecX"in t&&(s.camera.position.vecX=t["CBodyComponent.m_vecX"]),"CBodyComponent.m_vecY"in t&&(s.camera.position.vecY=t["CBodyComponent.m_vecY"]))}processPlayerResource(e,t){for(const e of this.players){if(-1===e.id)continue;const a=`m_vecPlayerData.${e.index}`;`${a}.m_iszPlayerName`in t&&(e.name=t[`${a}.m_iszPlayerName`]),`${a}.m_iPlayerSteamID`in t&&(e.steamID=t[`${a}.m_iPlayerSteamID`]),`${a}.m_bFakeClient`in t&&(e.isBot=t[`${a}.m_bFakeClient`]),`${a}.m_bIsBroadcaster`in t&&(e.isBroadcaster=t[`${a}.m_bIsBroadcaster`]);const r=`m_vecPlayerTeamData.${e.index}`;`${r}.m_iKills`in t&&(e.kills=t[`${r}.m_iKills`]),`${r}.m_iDeaths`in t&&(e.deaths=t[`${r}.m_iDeaths`]),`${r}.m_iAssists`in t&&(e.assists=t[`${r}.m_iAssists`]),`${r}.m_iRespawnSeconds`in t&&(e.respawnCooldown.value=t[`${r}.m_iRespawnSeconds`])}}processTeam(e,t,a){const r=e.handle;let s=this.teams.get(r);if(s||(s=new D(this,e),s.id=e.get("m_iTeamNum"),s.proID=e.get("m_unTournamentTeamID"),this.teams.add(s)),s&&a&d._V.DELETED)throw new Error("no support for team deletion");"m_szTeamname"in t&&(s.name=t.m_szTeamname),"m_iHeroKills"in t&&(s.kills=t.m_iHeroKills)}processTeamData(e,t){const a="CDOTA_DataDire"===e.class.name?c.nc:c.$e,r=this.teams.byID.get(a).players;for(const[e,a]of Object.entries(r)){const r=`m_vecDataTeam.000${e}`;`${r}.m_iLastHitCount`in t&&(a.lastHits=t[`${r}.m_iLastHitCount`]),`${r}.m_iDenyCount`in t&&(a.denies=t[`${r}.m_iDenyCount`]),`${r}.m_iNetWorth`in t&&(a.networth=t[`${r}.m_iNetWorth`]),`${r}.m_iReliableGold`in t&&(a.reliableGold=t[`${r}.m_iReliableGold`]),`${r}.m_iUnreliableGold`in t&&(a.unreliableGold=t[`${r}.m_iUnreliableGold`]),`${r}.m_iTotalEarnedGold`in t&&(a.totalEarnedGold=t[`${r}.m_iTotalEarnedGold`]),`${r}.m_iTotalEarnedXP`in t&&(a.totalEarnedXP=t[`${r}.m_iTotalEarnedXP`])}}processUnit(e,t,a,{class:r=f,hasRotation:s=!0}={}){const n=e.handle;let i=this.units.get(n);return i||(i=new r(this,e,this.entityNameFor(e)),this.units.add(i)),i&&a&d._V.DELETED?(this.units.delete(i),null):("CBodyComponent.m_hModel"in t&&(i.modelID=t["CBodyComponent.m_hModel"]),"m_iTeamNum"in t&&(i.teamID=t.m_iTeamNum),"CBodyComponent.m_cellX"in t&&(i.position.cellX=t["CBodyComponent.m_cellX"]),"CBodyComponent.m_cellY"in t&&(i.position.cellY=t["CBodyComponent.m_cellY"]),"CBodyComponent.m_vecX"in t&&(i.position.vecX=t["CBodyComponent.m_vecX"]),"CBodyComponent.m_vecY"in t&&(i.position.vecY=t["CBodyComponent.m_vecY"]),s&&"CBodyComponent.m_angRotation"in t&&(i.rotation=t["CBodyComponent.m_angRotation"][1]),"m_iCurrentLevel"in t&&(i.level=t.m_iCurrentLevel),"m_iHealth"in t&&(i.hp=t.m_iHealth),"m_iMaxHealth"in t&&(i.hpMax=t.m_iMaxHealth),"m_flMana"in t&&(i.mana=t.m_flMana),"m_flMaxMana"in t&&(i.manaMax=t.m_flMaxMana),"m_bIsWaitingToSpawn"in t&&(i.isWaitingToSpawn=t.m_bIsWaitingToSpawn),"m_hOwnerEntity"in t&&(i.ownerHandle=t.m_hOwnerEntity),"m_hAbilities.0000"in t&&(i.abilityHandles[0]=t["m_hAbilities.0000"]),"m_hAbilities.0001"in t&&(i.abilityHandles[1]=t["m_hAbilities.0001"]),"m_hAbilities.0002"in t&&(i.abilityHandles[2]=t["m_hAbilities.0002"]),"m_hAbilities.0003"in t&&(i.abilityHandles[3]=t["m_hAbilities.0003"]),"m_hAbilities.0004"in t&&(i.abilityHandles[4]=t["m_hAbilities.0004"]),"m_hAbilities.0005"in t&&(i.abilityHandles[5]=t["m_hAbilities.0005"]),"m_hAbilities.0006"in t&&(i.abilityHandles[6]=t["m_hAbilities.0006"]),"m_hAbilities.0007"in t&&(i.abilityHandles[7]=t["m_hAbilities.0007"]),"m_hAbilities.0008"in t&&(i.abilityHandles[8]=t["m_hAbilities.0008"]),"m_hAbilities.0009"in t&&(i.abilityHandles[9]=t["m_hAbilities.0009"]),"m_hAbilities.0010"in t&&(i.abilityHandles[10]=t["m_hAbilities.0010"]),"m_hAbilities.0011"in t&&(i.abilityHandles[11]=t["m_hAbilities.0011"]),"m_hAbilities.0012"in t&&(i.abilityHandles[12]=t["m_hAbilities.0012"]),"m_hAbilities.0013"in t&&(i.abilityHandles[13]=t["m_hAbilities.0013"]),"m_hAbilities.0014"in t&&(i.abilityHandles[14]=t["m_hAbilities.0014"]),"m_hAbilities.0015"in t&&(i.abilityHandles[15]=t["m_hAbilities.0015"]),"m_hAbilities.0016"in t&&(i.abilityHandles[16]=t["m_hAbilities.0016"]),i)}processUnitWithInventory(e,t,a,{class:r=v}={}){const s=this.processUnit(e,t,a,{class:r});return s?("m_hItems.0000"in t&&(s.inventoryHandles[0]=t["m_hItems.0000"]),"m_hItems.0001"in t&&(s.inventoryHandles[1]=t["m_hItems.0001"]),"m_hItems.0002"in t&&(s.inventoryHandles[2]=t["m_hItems.0002"]),"m_hItems.0003"in t&&(s.inventoryHandles[3]=t["m_hItems.0003"]),"m_hItems.0004"in t&&(s.inventoryHandles[4]=t["m_hItems.0004"]),"m_hItems.0005"in t&&(s.inventoryHandles[5]=t["m_hItems.0005"]),s):null}}(s))}),(()=>{}),[t,a]),s?r.createElement(Ct,null,r.createElement(wt,{to:"/"},r.createElement(G.Z,{name:"times"})," Close replay"),r.createElement(R.Z,{context:"replay"},r.createElement(vt,{replay:s}))):null}},3887:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var r=a(7294),s=a(5977),n=a(7318),i=a(9984),l=a(2743),o=a(7496);const d=()=>{(0,l.Z)("Find match");const e=(0,s.k6)(),{prefill:t}=(0,s.UO)(),a=(0,r.useCallback)((()=>{e.push("/")}),[e]);return r.createElement(n.Z,{onClose:a},r.createElement("h2",null,"Find replay by match ID"),r.createElement(i.Z,{onDone:a},r.createElement(o.Ec,{prefill:t}),r.createElement(o.fp,null),r.createElement(o.No,null),r.createElement(o.T_,null),r.createElement(o.iX,null)))}},8209:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>d});var r=a(7294),s=a(5977),n=a(7318),i=a(9984),l=a(2743),o=a(7496);const d=()=>{(0,l.Z)("Select replay");const e=(0,s.k6)(),t=(0,r.useCallback)((()=>{e.push("/")}),[e]);return r.createElement(n.Z,{onClose:t},r.createElement("h2",null,"Select local replay file"),r.createElement(i.Z,{onDone:t},r.createElement(o.f3,null),r.createElement(o.T_,null),r.createElement(o.iX,null)))}},7496:(e,t,a)=>{"use strict";a.d(t,{fp:()=>_,Ec:()=>b,iX:()=>w,T_:()=>E,No:()=>D,f3:()=>T});var r=a(7294),s=a(1990),n=a(3552),i=a(2096),l=a(1204),o=a(9669),d=a(7548),m=a(5937);const c=(e,t={})=>{const a=o.CancelToken.source(),r=()=>o.request({timeout:1e4,method:"get",...t,cancelToken:a.token,url:e});return r.cancel=()=>{a.cancel()},r};var h=a(2129);const _=e=>{const{input:t,next:a,prev:o}=e,[_,p]=(0,r.useState)(null),[u,g]=(0,r.useState)(null),f=null==u?void 0:u.replayURL,b=(0,r.useRef)(null);(0,h.bd)((async()=>{if(await l.Z.models.Match.query.get({matchID:t}))return void p("That match is already on your dashboard.");const e=await(a=t,c(`https://api.opendota.com/api/matches/${a}`,undefined));var a;let r;b.current=e;try{r=await e()}catch(e){var s,n;return void(404===(null===(s=e.response)||void 0===s?void 0:s.status)?p("That match does not exist (yet)."):429===(null===(n=e.response)||void 0===n?void 0:n.status)?p("OpenDota query quota reached. Try again later."):p("Search failed. Try again later."))}const i={replayURL:(o=r.data).replay_url,matchID:o.match_id,leagueID:o.leagueid,duration:o.duration,endedAt:new Date(1e3*(o.start_time+o.duration)),winningTeamID:o.radiant_win?d.$e:d.nc,radiant:{name:null===(h=o.radiant_team)||void 0===h?void 0:h.tag,proID:null===(_=o.radiant_team)||void 0===_?void 0:_.team_id,players:o.players.filter((e=>e.isRadiant)).map((e=>({hero:m.Sw[e.hero_id].name})))},dire:{name:null===(u=o.dire_team)||void 0===u?void 0:u.tag,proID:null===(f=o.dire_team)||void 0===f?void 0:f.team_id,players:o.players.filter((e=>!e.isRadiant)).map((e=>({hero:m.Sw[e.hero_id].name})))}};var o,h,_,u,f;g(i)}),(()=>{var e;null===(e=b.current)||void 0===e||e.cancel()}),[t]);const v=(0,r.useCallback)((()=>{f&&a(f)}),[a,f]);return r.createElement(r.Fragment,null,!u&&!_&&r.createElement(i.Z,null,"Searching for match..."),u&&r.createElement(r.Fragment,null,r.createElement("p",null,"Is this the match you are looking for?"),r.createElement(n.Z,{match:u,isPreview:!0}),!f&&r.createElement(r.Fragment,null,r.createElement(i.Z,{kind:"error"},"No replay is available for this match."),r.createElement(s.ZP,{fancy:!0,onClick:o},"Back")),f&&r.createElement(r.Fragment,null,r.createElement(s.pA,null,r.createElement(s.ZP,{fancy:!0,onClick:v},"Yes, add to ReDota"),r.createElement(s.ZP,{fancy:!0,onClick:o},"Back")),r.createElement(i.Z,null,r.createElement("strong",null,"Note:")," The replay for this match will be downloaded automatically.",r.createElement("br",null),"Replays are typically between 40 MB and 120 MB in size."))),_&&r.createElement(r.Fragment,null,r.createElement(i.Z,{kind:"error"},_),r.createElement(s.ZP,{fancy:!0,onClick:o},"Back")))};var p=a(9163),u=a(6471),g=a(5036);const f=(0,p.ZP)(u.Z)`
  // TODO: Refactor this into some generic text input component
  input {
    display: block;
    border: 0;
    border-radius: 4px;
    padding: 0.4em 0.8em;
    margin: .5em auto;
  }
`,b=e=>{const{invalidate:t,next:a,prefill:n=""}=e,[l,o]=(0,r.useState)(n),d=/^\d+$/.test(l),m=(0,r.useCallback)((e=>{o(e.target.value),t()}),[t]),c=(0,r.useCallback)((async e=>{e.preventDefault(),t(),a(+l)}),[t,l,a]),h=(0,r.useRef)();(0,r.useEffect)((()=>{h.current.focus()}),[h]);const _=r.createElement(g.Z,{to:"https://www.opendota.com"},"OpenDota");return r.createElement(f,{onSubmit:c},r.createElement("input",{type:"input",maxLength:"15",onChange:m,pattern:"\\d+",placeholder:"Match ID",ref:h,required:!0,value:l}),r.createElement(s.ZP,{fancy:!0,type:"submit",disabled:!d},"Search"),r.createElement(i.Z,null,r.createElement("strong",null,"Note:")," This will request match data from ",_,"."))};var v=a(9535);const y="PBDEMS2\0",w=e=>{const{input:t,next:a}=e,[[s,n],o]=(0,r.useState)([]),[d,m]=(0,r.useState)(null);return(0,h.bd)((async()=>{if(o([]),m(null),!await(async e=>{const{length:t}=y;return!(e.size<t)&&await e.slice(0,y.length).text()===y})(t))return void m("Not a valid Dota 2 replay file.");const e=new l.Z.models.Match;try{await e.update(t)}catch(e){return void o([e,"parser"])}const{matchID:r}=e;if(r&&await l.Z.models.Match.query.get({matchID:r}))m("That match is already on your dashboard.");else{try{await e.save()}catch(e){return void o([e,"database"])}a(e)}}),[t]),r.createElement(r.Fragment,null,!d&&r.createElement(i.Z,null,"Please wait..."),d&&r.createElement(i.Z,{kind:"error"},d),s&&r.createElement(v.Z,{error:s,context:n}))};function C(){return new Worker(a.p+"redota-bzip2-decompressor-dd784adb.worker.js")}const k="BZh",E=e=>{const{input:t,next:a,reset:n}=e,[l,o]=(0,r.useState)(null),[d,m]=(0,r.useState)(0),c=(0,r.useRef)(null);return(0,h.bd)((async()=>{if(!await(async e=>{const{length:t}=k;return!(e.size<t)&&await e.slice(0,k.length).text()===k})(t))return void a(t);const e=new C;c.current=e,e.addEventListener("error",(t=>{o(t),e.terminate()})),e.addEventListener("message",(r=>{const{data:s}=r;if("progress"===s.type)m(s.processed/s.total*100|0);else if("complete"===s.type){const{result:r}=s,n=t.name.replace(".bz2",""),i=new File([r],n,{lastModified:t.lastModified});e.terminate(),a(i)}}));const r=await t.arrayBuffer();e.postMessage(r,[r])}),(()=>{var e;null===(e=c.current)||void 0===e||e.terminate()}),[t]),r.createElement(r.Fragment,null,!l&&r.createElement(r.Fragment,null,r.createElement(i.Z,null,"Decompressing replay file...",r.createElement("br",null),d,"%"),r.createElement(s.ZP,{fancy:!0,onClick:n},"Cancel")),l&&r.createElement(v.Z,{error:l}))},D=e=>{const{input:t,next:a,reset:n}=e,[l,o]=(0,r.useState)(null),[d,m]=(0,r.useState)(0),_=(0,r.useRef)(null);return(0,h.bd)((async()=>{const e=((e,t)=>c(`https://redota.timkurvers.workers.dev/?replay=${e}`,{...t,responseType:"blob",timeout:0}))(t,{onDownloadProgress:e=>{e.lengthComputable&&m(e.loaded/e.total*100|0)}});let r;_.current=e;try{r=await e()}catch(e){var s;return void(404===(null===(s=e.response)||void 0===s?void 0:s.status)?o("Replay data for this match is no longer available."):o("Replay data could not be retrieved. Try again later."))}const n=t.split("/").pop(),i=new File([r.data],n,{lastModified:new Date(Date.parse(r.headers["last-modified"]))});a(i)}),(()=>{var e;null===(e=_.current)||void 0===e||e.cancel()}),[t]),r.createElement(r.Fragment,null,!l&&r.createElement(r.Fragment,null,r.createElement(i.Z,null,"Downloading replay file...",r.createElement("br",null),d,"%"),r.createElement(s.pA,null,r.createElement(s.ZP,{fancy:!0,onClick:n},"Cancel"))),l&&r.createElement(r.Fragment,null,r.createElement(i.Z,{kind:"error"},l),r.createElement(s.ZP,{fancy:!0,onClick:n},"Back")))};var x=a(1823);const P=p.ZP.div`
  text-align: left;
  border-top: 1px solid rgba(125, 125, 125, .25);
  color: gray;

  p {
    margin-top: 1.5em;
  }

  pre {
    margin-left: 1.5em;
    font-size: .8em;
  }
`,T=e=>{const{invalidate:t,next:a}=e,s=(0,r.useCallback)((e=>{const r=e.target.files[0];r?a(r):t()}),[t,a]);return r.createElement(u.Z,null,r.createElement("input",{type:"file",onChange:s,accept:".dem,.bz2"}),r.createElement("p",null,r.createElement("strong",null,"Note:")," The replay file you select is never uploaded to any server."),r.createElement(P,null,r.createElement("p",null,"Where to find your local Dota 2 replay files?"),r.createElement("p",null,r.createElement(x.Z,{brand:!0,name:"windows"})," Windows:",r.createElement("pre",null,"C:\\Program Files (x86)\\Steam\\SteamApps\\common\\dota 2 beta\\dota\\replays")),r.createElement("p",null,r.createElement(x.Z,{brand:!0,name:"apple"})," macOS:",r.createElement("pre",null,"~/Library/Application Support/Steam/steamapps/common/dota 2 beta/game/dota/replays")),r.createElement("p",null,r.createElement(x.Z,{brand:!0,name:"linux"})," Linux:",r.createElement("pre",null,"~/.local/share/Steam/steamapps/common/dota 2 beta/game/dota/replays"))))}}}]);