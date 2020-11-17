/* eslint-disable default-case, no-param-reassign */

// See: https://github.com/dotabuff/manta/blob/master/field_patch.go
class FieldPatch {
  constructor(minBuild, maxBuild, apply) {
    this.minBuild = minBuild;
    this.maxBuild = maxBuild;
    this.apply = apply;
  }

  appliesFor(build) {
    if (this.minBuild === 0 && this.maxBuild === 0) {
      return true;
    }
    return build >= this.minBuild && build <= this.maxBuild;
  }
}

const fieldPatches = [
  new FieldPatch(0, 990, (field) => {
    switch (field.varName) {
      case 'angExtraLocalAngles':
      case 'angLocalAngles':
      case 'm_angInitialAngles':
      case 'm_angRotation':
      case 'm_ragAngles':
      case 'm_vLightDirection':
        if (field.parentName === 'CBodyComponentBaseAnimatingOverlay') {
          field.encoder = 'qangle_pitch_yaw';
        } else {
          field.encoder = 'QAngle';
        }
        break;
      case 'dirPrimary':
      case 'localSound':
      case 'm_flElasticity':
      case 'm_location':
      case 'm_poolOrigin':
      case 'm_ragPos':
      case 'm_vecEndPos':
      case 'm_vecLadderDir':
      case 'm_vecPlayerMountPositionBottom':
      case 'm_vecPlayerMountPositionTop':
      case 'm_viewtarget':
      case 'm_WorldMaxs':
      case 'm_WorldMins':
      case 'origin':
      case 'vecLocalOrigin':
        field.encoder = 'coord';
        break;

      case 'm_vecLadderNormal':
        field.encoder = 'normal';
        break;
    }
  }),
  new FieldPatch(0, 954, (field) => {
    switch (field.varName) {
      case 'm_flMana':
      case 'm_flMaxMana':
        field.lowValue = null;
        field.highValue = 8192.0;
        break;
    }
  }),
  new FieldPatch(1016, 1027, (field) => {
    switch (field.varName) {
      case 'm_bItemWhiteList':
      case 'm_bWorldTreeState':
      case 'm_iPlayerIDsInControl':
      case 'm_iPlayerSteamID':
      case 'm_ulTeamBannerLogo':
      case 'm_ulTeamBaseLogo':
      case 'm_ulTeamLogo':
        field.encoder = 'fixed64';
        break;
    }
  }),
  new FieldPatch(0, 0, (field) => {
    switch (field.varName) {
      case 'm_flSimulationTime':
      case 'm_flAnimTime':
        field.encoder = 'simtime';
        break;
      case 'm_flRuneTime':
        field.encoder = 'runetime';
        break;
    }
  }),
];

export default FieldPatch;
export { fieldPatches };
