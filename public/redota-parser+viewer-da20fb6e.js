(self.webpackChunk_timkurvers_redota=self.webpackChunk_timkurvers_redota||[]).push([[319],{3388:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});class s{constructor(e,t,a){this.name=e,this.weight=t,this.execute=a}}const r=[new s("PlusOne",36271,(e=>{e.path[e.last]+=1})),new s("PlusTwo",10334,(e=>{e.path[e.last]+=2})),new s("PlusThree",1375,(e=>{e.path[e.last]+=3})),new s("PlusFour",646,(e=>{e.path[e.last]+=4})),new s("PlusN",4128,((e,t)=>{e.path[e.last]+=t.readUBitVarFieldPath()+5})),new s("PushOneLeftDeltaZeroRightZero",35,(e=>{e.last++,e.path[e.last]=0})),new s("PushOneLeftDeltaZeroRightNonZero",3,((e,t)=>{e.last++,e.path[e.last]=t.readUBitVarFieldPath()})),new s("PushOneLeftDeltaOneRightZero",521,(e=>{e.path[e.last]+=1,e.last++,e.path[e.last]=0})),new s("PushOneLeftDeltaOneRightNonZero",2942,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]=t.readUBitVarFieldPath()})),new s("PushOneLeftDeltaNRightZero",560,((e,t)=>{e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]=0})),new s("PushOneLeftDeltaNRightNonZero",471,((e,t)=>{e.path[e.last]+=t.readUBitVarFieldPath()+2,e.last++,e.path[e.last]=t.readUBitVarFieldPath()+1})),new s("PushOneLeftDeltaNRightNonZeroPack6Bits",10530,((e,t)=>{e.path[e.last]+=t.readBitInt(3)+2,e.last++,e.path[e.last]=t.readBitInt(3)+1})),new s("PushOneLeftDeltaNRightNonZeroPack8Bits",251,((e,t)=>{e.path[e.last]+=t.readBitInt(4)+2,e.last++,e.path[e.last]=t.readBitInt(4)+1})),new s("PushTwoLeftDeltaZero",0,((e,t)=>{e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new s("PushTwoPack5LeftDeltaZero",0,((e,t)=>{e.last++,e.path[e.last]=t.readBitInt(5),e.last++,e.path[e.last]=t.readBitInt(5)})),new s("PushThreeLeftDeltaZero",0,((e,t)=>{e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new s("PushThreePack5LeftDeltaZero",0,((e,t)=>{e.last++,e.path[e.last]=t.readBitInt(5),e.last++,e.path[e.last]=t.readBitInt(5),e.last++,e.path[e.last]=t.readBitInt(5)})),new s("PushTwoLeftDeltaOne",0,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new s("PushTwoPack5LeftDeltaOne",0,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5)})),new s("PushThreeLeftDeltaOne",0,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new s("PushThreePack5LeftDeltaOne",0,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5)})),new s("PushTwoLeftDeltaN",0,((e,t)=>{e.path[e.last]+=t.readUBitVar()+2,e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new s("PushTwoPack5LeftDeltaN",0,((e,t)=>{e.path[e.last]+=t.readUBitVar()+2,e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5)})),new s("PushThreeLeftDeltaN",0,((e,t)=>{e.path[e.last]+=t.readUBitVar()+2,e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new s("PushThreePack5LeftDeltaN",0,((e,t)=>{e.path[e.last]+=t.readUBitVar()+2,e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5)})),new s("PushN",0,((e,t)=>{const a=t.readUBitVar();e.path[e.last]+=t.readUBitVar();for(let s=0;s<a;++s)e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new s("PushNAndNonTopological",310,((e,t)=>{for(let a=0;a<=e.last;++a)t.readBitFlag()&&(e.path[a]+=t.readVarInt32()+1);const a=t.readUBitVar();for(let s=0;s<a;++s)e.last++,e.path[e.last]=t.readUBitVarFieldPath()})),new s("PopOnePlusOne",2,(e=>{e.pop(1),e.path[e.last]+=1})),new s("PopOnePlusN",0,((e,t)=>{e.pop(1),e.path[e.last]+=t.readUBitVarFieldPath()+1})),new s("PopAllButOnePlusOne",1837,(e=>{e.pop(e.last),e.path[0]+=1})),new s("PopAllButOnePlusN",149,((e,t)=>{e.pop(e.last),e.path[0]+=t.readUBitVarFieldPath()+1})),new s("PopAllButOnePlusNPack3Bits",300,((e,t)=>{e.pop(e.last),e.path[0]+=t.readBitInt(3)+1})),new s("PopAllButOnePlusNPack6Bits",634,((e,t)=>{e.pop(e.last),e.path[0]+=t.readBitInt(6)+1})),new s("PopNPlusOne",0,((e,t)=>{e.pop(t.readUBitVarFieldPath()),e.path[e.last]+=1})),new s("PopNPlusN",0,((e,t)=>{e.pop(t.readUBitVarFieldPath()),e.path[e.last]+=t.readVarInt32()})),new s("PopNAndNonTopographical",1,((e,t)=>{e.pop(t.readUBitVarFieldPath());for(let a=0;a<=e.last;++a)t.readBitFlag()&&(e.path[a]+=t.readVarInt32())})),new s("NonTopoComplex",76,((e,t)=>{for(let a=0;a<=e.last;++a)t.readBitFlag()&&(e.path[a]+=t.readVarInt32())})),new s("NonTopoPenultimatePlusOne",271,(e=>{e.path[e.last-1]+=1})),new s("NonTopoComplexPack4Bits",99,((e,t)=>{for(let a=0;a<=e.last;++a)t.readBitFlag()&&(e.path[a]+=t.readBitInt(4)-7)})),new s("FieldPathEncodeFinish",25474,(e=>{e.done=!0}))];var n=a(9631);class i{constructor(e,t){this.weight=e,this.value=t,this.left=null,this.right=null}get isLeaf(){return null===this.left&&null===this.right}}const l=(()=>{const e=new n.Lw(((e,t)=>e.weight===t.weight?t.value-e.value:e.weight-t.weight)),t=r.map((e=>e.weight||1));for(const[a,s]of t.entries()){const t=new i(s,a);e.insert(t)}let a=e.size;for(;e.size>1;){const t=e.extract(),s=e.extract(),r=new i(t.weight+s.weight,a++);r.left=t,r.right=s,e.insert(r)}return e.extract()})();class o{constructor(){this.path=[-1,0,0,0,0,0],this.last=0,this.done=!1}copy(){const e=new o;return e.path=[...this.path],e.last=this.last,e.done=this.done,e}pop(e){for(let t=0;t<e;++t)this.path[this.last]=0,this.last--}toString(){const e=new Array(this.last+1);for(let t=0;t<=this.last;++t)e[t]=this.path[t];return e.join("/")}static from(e){const t=new o;let a=l,s=l;const n=[];for(;!t.done;)s=e.readBitFlag()?a.right:a.left,s.isLeaf?(r[s.value].execute(t,e),t.done||n.push(t.copy()),a=l):a=s;return n}}const m=o},4562:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});class s{constructor(){this.state=new Array(8)}get(e){let t=this,a=0;for(let r=0;r<=e.last;++r){if(a=e.path[r],t.state.length<a+2)return null;if(r===e.last)return t.state[a];if(!(t.state[a]instanceof s))return null;t=t.state[a]}return null}set(e,t){let a=this,r=0;for(let n=0;n<=e.last;++n){r=e.path[n];const{length:i}=a.state;if(i<r+2){const e=[...a.state];e.length=Math.max(r+2,2*i),a.state=e}if(n===e.last)return void(a.state[r]instanceof s||(a.state[r]=t));a.state[r]instanceof s||(a.state[r]=new s),a=a.state[r]}}}const r=s},9384:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ue});var s=a(7187),r=a(678),n=a(9631),i=a(4562);const l=e=>e.read3BitNormal(),o=e=>e.readUint64LE(),m=e=>e.readBitFlag(),d=e=>e.readString(),c=e=>e.readVarUint32(),h=e=>e.readVarInt32(),_=e=>e.readCoord(),p=e=>e.readBitFloat(32),u=e=>e.readBitFloat(4),g=e=>e.readVarUint32()*(1/30),f=e=>e.readVarUint32(),b=e=>e.readVarUint64(),y=e=>e.readBitInt(1),v=()=>f,w=e=>{switch(e.encoder){case"fixed64":return o}return b},C=e=>{const t=new class{constructor(e,t,a,s){if(0===e||e>=32)throw this.noScale=!0,this.bitCount=32,new Error("quantized float with bitCount >= 32 not yet supported");this.noScale=!1,this.bitCount=e,this.offset=0,this.low=null!==a?a:0,this.high=null!==s?s:1,this.flags=null!==t?t:0,this.decMul=0,this.highLowMul=0,this.validateFlags();let r=1<<this.bitCount,n=0;if(0!=(1&this.flags)?(n=this.high-this.low,this.offset=n/r,this.high-=this.offset):0!=(2&this.flags)&&(n=this.high-this.low,this.offset=n/r,this.low+=this.offset),0!=(8&this.flags)){let e=this.high-this.low;e<1&&(e=1);const t=1<<Math.ceil(Math.log2(e));let a=this.bitCount;for(;!(1<<a>t);)a++;a>this.bitCount&&(this.bitCount=a,r=1<<this.bitCount),this.offset=t/r,this.high=this.low+t-this.offset}this.assignMultipliers(r),0!=(1&this.flags)&&this.quantize(this.low)===this.low&&(this.flags&=-2),0!=(2&this.flags)&&this.quantize(this.high)===this.high&&(this.flags&=-3),0!=(4&this.flags)&&0===this.quantize(0)&&(this.flags&=-5)}validateFlags(){if(0!==this.flags&&((0===this.low&&0!=(1&this.flags)||0===this.high&&0!=(2&this.flags))&&(this.flags&=-5),0===this.low&&0!=(4&this.flags)&&(this.flags|=1,this.flags&=-5),0===this.high&&0!=(4&this.flags)&&(this.flags|=2,this.flags&=-5),(this.low>0||this.high<0)&&(this.flags&=-5),0!=(8&this.flags)&&(this.flags&=-8),3==(3&this.flags)))throw new Error("roundup / rounddown flags are mutually exclusive")}assignMultipliers(e){const t=this.high-this.low;let a=0;a=32===this.bitCount?4294967294:(1<<this.bitCount)-1;let s=0;if(s=Math.abs(t)<=0?a:a/t,s*t>a||s*t>a){const e=[.9999,.99,.9,.8,.7];for(const r of e)if(s=a/t*r,!(s*t>a||s*t>a))break}if(this.highLowMul=s,this.decMul=1/(e-1),0===this.highLowMul)throw new Error("error computing high / low multiplier")}quantize(e){if(e<this.low){if(0==(2&this.flags))throw new Error("field tried to quantize an out of range value");return this.low}if(e>this.high){if(0==(1&this.flags))throw new Error("field tried to quantize an out of range value");return this.high}const t=(e-this.low)*this.highLowMul|0;return this.low+(this.high-this.low)*t*this.decMul}}(e.bitCount,e.encodeFlags,e.lowValue,e.highValue);return e=>0!=(1&t.flags)&&e.readBitFlag()?t.low:0!=(2&t.flags)&&e.readBitFlag()?t.high:0!=(4&t.flags)&&e.readBitFlag()?0:t.low+(t.high-t.low)*e.readBitInt(t.bitCount)*t.decMul},k=e=>{switch(e.encoder){case"coord":return _;case"simtime":return g;case"runetime":return u}const{bitCount:t}=e;return null===t||t<=0||t>=32?p:C(e)},D=e=>t=>{if(3===e&&"normal"===t.encoder)return l;const a=k(t);return t=>{const s=new Array(e);for(let r=0;r<e;++r)s[r]=a(t);return s}},x={float32:k,CNetworkedQuantizedFloat:C,Vector:D(3),Vector2D:D(2),Vector4D:D(4),uint64:w,QAngle:e=>{const{bitCount:t}=e;if("qangle_pitch_yaw"===e.encoder){const e=t;return t=>[t.readAngle(e),t.readAngle(e),0]}if(null!==t&&0!==t){const e=t;return t=>[t.readAngle(e),t.readAngle(e),t.readAngle(e)]}return e=>{const t=new Array(3),a=e.readBitFlag(),s=e.readBitFlag(),r=e.readBitFlag();return a&&(t[0]=e.readCoord()),s&&(t[1]=e.readCoord()),r&&(t[2]=e.readCoord()),t}},CHandle:v,CStrongHandle:w,CEntityHandle:v},P={bool:m,char:d,color32:f,int16:h,int32:h,int64:h,int8:h,uint16:f,uint32:f,uint8:f,CBodyComponent:y,CGameSceneNodeHandle:f,Color:f,CPhysicsComponent:y,CRenderComponent:y,CUtlString:d,CUtlStringToken:f,CUtlSymbolLarge:d},T=e=>{const{baseType:t}=e.fieldType,a=x[t];return a?a(e):P[t]||c},E={CBodyComponent:!0,CEntityIdentity:!0,CPhysicsComponent:!0,CRenderComponent:!0,CDOTAGamerules:!0,CDOTAGameManager:!0,CDOTASpectatorGraphManager:!0,CPlayerLocalData:!0,PhysicsRagdollPose_t:!0};class B{constructor(){this.parentName=null,this.varName=null,this.varType=null,this.sendNode=null,this.serializerName=null,this.serializerVersion=null,this.encoder=null,this.encodeFlags=null,this.bitCount=null,this.lowValue=null,this.highValue=null,this.fieldType=null,this.serializer=null,this.value=null,this._model=0,this.decoder=null,this.baseDecoder=null,this.childDecoder=null}get isPointerType(){return E[this.fieldType.baseType]}get model(){return this._model}set model(e){switch(this._model=e,e){case 1:this.decoder=T(this);break;case 2:this.baseDecoder=m;break;case 3:{const{genericType:e}=this.fieldType;if(!e)throw new Error(`no generic type for variable array field: ${this}`);this.baseDecoder=f,this.childDecoder=(t=e.baseType,P[t]||c)}break;case 4:this.baseDecoder=f;break;case 0:this.decoder=T(this)}var t}getDecoderForFieldPath(e,t){switch(this.model){case 1:return this.decoder;case 2:return e.last===t-1?this.baseDecoder:this.serializer.getDecoderForFieldPath(e,t);case 3:return e.last===t?this.childDecoder:this.baseDecoder;case 4:return e.last>=t+1?this.serializer.getDecoderForFieldPath(e,t+1):this.baseDecoder}return this.decoder}getFieldForFieldPath(e,t){switch(this.model){case 1:return this;case 2:if(e.last!==t-1)return this.serializer.getFieldForFieldPath(e,t);break;case 3:return this;case 4:if(e.last>=t+1)return this.serializer.getFieldForFieldPath(e,t+1)}return this}getFieldPathForName(e,t){switch(this.model){case 1:case 3:return e.path[e.last]=+t,!0;case 2:return this.serializer.getFieldPathForName(e,t);case 4:return e.path[e.last]=+t.slice(0,4),e.last++,this.serializer.getFieldPathForName(e,t.slice(5));case 0:throw new Error("not supported")}return!1}getFieldPaths(e,t){const a=[];switch(this.model){case 1:case 3:{const s=t.get(e);if(s instanceof i.Z){e.last++;for(const[t,r]of s.state.entries())null!==r&&(e.path[e.last]=t,a.push(e.copy()));e.last--}}break;case 2:{const s=t.get(e);s instanceof i.Z&&(e.last++,a.push(...this.serializer.getFieldPaths(e,s)),e.last--)}break;case 4:{const s=t.get(e);if(s instanceof i.Z){e.last+=2;for(const[t,r]of s.state.entries())r instanceof i.Z&&(e.path[e.last-1]=t,a.push(...this.serializer.getFieldPaths(e,r)));e.last-=2}}break;case 0:a.push(e.copy())}return a}getNameForFieldPath(e,t){const a=[this.varName];switch(this.model){case 1:e.last===t&&a.push(`${e.path[t]}`.padStart(4,"0"));break;case 2:e.last>=t&&a.push(...this.serializer.getNameForFieldPath(e,t));break;case 3:e.last===t&&a.push(`${e.path[t]}`.padStart(4,"0"));break;case 4:e.last!==t-1&&(a.push(`${e.path[t]}`.padStart(4,"0")),e.last!==t&&a.push(...this.serializer.getNameForFieldPath(e,t+1)))}return a}getTypeForFieldPath(e,t){switch(this.model){case 1:return this.fieldType;case 2:if(e.last!==t-1)return this.serializer.getTypeForFieldPath(e,t);break;case 3:if(e.last===t)return this.fieldType.genericType;break;case 4:if(e.last>=t+1)return this.serializer.getTypeForFieldPath(e,t+1)}return this.fieldType}static for(e,t){const a=a=>{const s=(0,n.eg)(t,a);return e[s]},s=new B;return s.varName=a("varNameSym"),s.varType=a("varTypeSym"),s.sendNode=a("sendNodeSym"),s.serializerName=a("fieldSerializerNameSym"),s.serializerVersion=t.fieldSerializerVersion||0,s.encoder=a("varEncoderSym"),s.encodeFlags=t.encodeFlags,s.bitCount=t.bitCount,s.lowValue=t.lowValue,s.highValue=t.highValue,s}}const F=B,I=/([^<[*]+)(<\s(.*)\s>)?(\*)?(\[(.*)\])?/,S={MAX_ITEM_STOCKS:8,MAX_ABILITY_DRAFT_ABILITIES:48},O=class{constructor(e,t){this.baseType=e,this.pointer=t,this.genericType=null,this.count=null}toString(){let e=this.baseType;return null!==this.genericType&&(e+=`<${this.genericType}>`),this.pointer&&(e+="*"),this.count>0&&(e+=`[${this.count}]`),e}static for(e){const t=I.exec(e);if(!t)throw new Error(`could not parse field type from: ${e}`);const a=new this(t[1],"*"===t[4]);t[3]&&(a.genericType=this.for(t[3]));const s=t[6];return s&&(a.count=s in S?S[s]:+s>0?+s:1024),a}};var A=a(7218);const U=class{constructor(e,t){this.name=e,this.version=t,this.fields=[]}get id(){return`${this.name}(${this.version})`}getDecoderForFieldPath(e,t){const a=e.path[t],s=this.fields[a];if(!s)throw new Error(`serializer ${this.id}: fp ${e} has no field (${a})`);return s.getDecoderForFieldPath(e,t+1)}getFieldForFieldPath(e,t){const a=e.path[t];return this.fields[a].getFieldForFieldPath(e,t+1)}getFieldPathForName(e,t){for(const[a,s]of this.fields.entries()){if(t===s.varName)return e.path[e.last]=a,!0;if(t.startsWith(`${s.varName}.`))return e.path[e.last]=a,e.last++,s.getFieldPathForName(e,t.slice(s.varName.length+1))}return!1}getFieldPaths(e,t){const a=[];for(const[s,r]of this.fields.entries())e.path[e.last]=s,a.push(...r.getFieldPaths(e,t));return a}getNameForFieldPath(e,t){const a=e.path[t];return this.fields[a].getNameForFieldPath(e,t+1)}getTypeForFieldPath(e,t){const a=e.path[t];return this.fields[a].getTypeForFieldPath(e,t+1)}};class L{constructor(e,t,a){this.index=e,this.key=t,this.data=a}static decode(e,t,a){const s=new Array(32),n=new A.Z(t);let i=-1;for(let t=0;t<a;++t){n.readBitFlag()?++i:i+=n.readVarUint32()+2;let a=null;if(n.readBitFlag())if(n.readBitFlag()){const e=t>32?t:0,r=n.readBitInt(5),i=n.readBitInt(5);a=s[e+r&31].substring(0,i)+n.readString()}else a=n.readString();let l=null;if(n.readBitFlag()){let t,a=!1;e.userDataFixedSize?t=e.userDataSizeBits:(0!=(1&e.flags)&&(a=n.readBitFlag()),t=8*n.readBitInt(17)),l=n.readBitsAsBytes(t),a&&(l=r.uncompress(l))}const o=e.entries.length;if(i<o)e.entries[i].data=l,a=e.entries[i].key;else{if(i!==o)throw new Error(`index and entry count mismatch for table: ${e.name}`);{const t=new this(i,a,l);e.entries.push(t)}}s[31&t]=a}}}var M=a(4321),N=a(9299);const{CDemoFileInfo:z,CSVCMsg_FlattenedSerializer:V,EDemoCommands:Z}=N,{CDemoPacket:H,CDOTAMatchMetadataFile:$,CDOTAUserMsg_StatsHeroMinuteDetails:R,CMsgDOTACombatLogEntry:W,CMsgGCToClientTournamentItemDrop:G,CMsgSource1LegacyGameEvent:X,CNETMsg_SpawnGroup_Load:Y,CNETMsg_Tick:j,CSVCMsg_ClearAllStringTables:q,CSVCMsg_CreateStringTable:K,CSVCMsg_PacketEntities:Q,CSVCMsg_UpdateStringTable:J,EBaseEntityMessages:ee,EBaseGameEvents:te,EBaseUserMessages:ae,EDotaUserMessages:se,NET_Messages:re,SVC_Messages:ne}=N,ie=(e,t,a,s={})=>{for(const[r,n]of Object.entries(e)){const e=r.replace(t,a),i=N[e];i&&(s[n]=[i,e])}return s},le={...ie(Z,"DEM_","CDemo",{[Z.DEM_SignonPacket]:[H,"CDemoSignonPacket"]})},oe={...ie(ee,"EM_","CEntityMessage"),...ie(te,"GE_","CMsg"),...ie(ae,"UM_","CUserMessage"),...ie(se,"DOTA_UM_","CDOTAUserMsg_",{[se.DOTA_UM_TournamentDrop]:[G,"CMsgGCToClientTournamentItemDrop"],[se.DOTA_UM_StatsHeroDetails]:[R,"CDOTAUserMsg_StatsHeroMinuteDetails"],[se.DOTA_UM_CombatLogDataHLTV]:[W,"CMsgDOTACombatLogEntry"],[se.DOTA_UM_MatchMetadata]:[$,"CDOTAMatchMetadataFile"]}),...ie(re,"net_","CNETMsg_"),...ie(ne,"svc_","CSVCMsg_")},me=e=>{switch(e){case Y:case j:case q:case K:case J:return-10;case Q:return 5;case X:return 10;default:return 0}};class de{constructor(e,t,a){this.minBuild=e,this.maxBuild=t,this.apply=a}appliesFor(e){return 0===this.minBuild&&0===this.maxBuild||e>=this.minBuild&&e<=this.maxBuild}}const ce=[new de(0,990,(e=>{switch(e.varName){case"angExtraLocalAngles":case"angLocalAngles":case"m_angInitialAngles":case"m_angRotation":case"m_ragAngles":case"m_vLightDirection":"CBodyComponentBaseAnimatingOverlay"===e.parentName?e.encoder="qangle_pitch_yaw":e.encoder="QAngle";break;case"dirPrimary":case"localSound":case"m_flElasticity":case"m_location":case"m_poolOrigin":case"m_ragPos":case"m_vecEndPos":case"m_vecLadderDir":case"m_vecPlayerMountPositionBottom":case"m_vecPlayerMountPositionTop":case"m_viewtarget":case"m_WorldMaxs":case"m_WorldMins":case"origin":case"vecLocalOrigin":e.encoder="coord";break;case"m_vecLadderNormal":e.encoder="normal"}})),new de(0,954,(e=>{switch(e.varName){case"m_flMana":case"m_flMaxMana":e.lowValue=null,e.highValue=8192}})),new de(1016,1027,(e=>{switch(e.varName){case"m_bItemWhiteList":case"m_bWorldTreeState":case"m_iPlayerIDsInControl":case"m_iPlayerSteamID":case"m_ulTeamBannerLogo":case"m_ulTeamBaseLogo":case"m_ulTeamLogo":e.encoder="fixed64"}})),new de(0,0,(e=>{switch(e.varName){case"m_flSimulationTime":case"m_flAnimTime":e.encoder="simtime";break;case"m_flRuneTime":e.encoder="runetime"}}))],he="PBDEMS2\0";class _e extends A.Z{constructor(e){super(e),this.buildNumber=null,this.classes=new n.yk("id",{byName:"name"}),this.classBaselines={},this.classIDSize=null,this.entityFullPacketCount=0,this.entities=new n.yk("index"),this.gameEventTypes=new n.yk("id",{byName:"name"}),this.serializers=new n.yk("name"),this.stringTables=new n.yk("name",{byIndex:"index"}),this.emitter=new s,this.tick=-1,this.tickInterval=null,this.parsing=!1,this.synced=!1,this.on("msg:CDemoPacket",this.onCDemoPacket.bind(this)),this.on("msg:CDemoSignonPacket",this.onCDemoPacket.bind(this)),this.on("msg:CDemoFullPacket",this.onCDemoFullPacket.bind(this)),this.on("msg:CDemoStringTables",this.onCDemoStringTables.bind(this)),this.on("msg:CDemoSyncTick",this.onCDemoSyncTick.bind(this)),this.on("msg:CSVCMsg_ClearAllStringTables",this.onCSVCMsg_ClearAllStringTables.bind(this)),this.on("msg:CSVCMsg_CreateStringTable",this.onCSVCMsg_CreateStringTable.bind(this)),this.on("msg:CSVCMsg_UpdateStringTable",this.onCSVCMsg_UpdateStringTable.bind(this)),this.on("msg:CSVCMsg_ServerInfo",this.onCSVCMsg_ServerInfo.bind(this)),this.on("msg:CMsgSource1LegacyGameEventList",this.onCMsgSource1LegacyGameEventList.bind(this)),this.on("msg:CMsgSource1LegacyGameEvent",this.onCMsgSource1LegacyGameEvent.bind(this)),this.on("msg:CDemoClassInfo",this.onCDemoClassInfo.bind(this)),this.on("msg:CDemoSendTables",this.onCDemoSendTables.bind(this)),this.on("msg:CSVCMsg_PacketEntities",this.onCSVCMsg_PacketEntities.bind(this)),this.on("msg:CDemoStop",this.stop.bind(this));const t=this.readStringN(he.length);if(t!==he)throw new Error(`unexpected magic: ${t}; expected: PBDEMS2\0`);this.skip(8)}get lastTick(){return this.summary.playbackTicks}get summary(){const{pos:e}=this;this.pos=he.length,this.pos=this.readUint32LE();const t=this.readVarUint32();this.readVarUint32();const a=this.readVarUint32();let s=this.readBytes(a);(t&Z.DEM_IsCompressed)===Z.DEM_IsCompressed&&(s=r.uncompress(s));const n=z.decode(s);return this.pos=e,n}on(...e){this.emitter.on(...e)}off(...e){this.emitter.off(...e)}start(){for(this.parsing=!0;!this.synced&&this.parsing;)this.step()}step(e=1){this.seek(this.tick+e)}seek(e){for(;this.tick<e&&this.parsing;){const e=this.readVarUint32(),t=this.readVarUint32(),a=this.readVarUint32();let s=this.readBytes(a);const n=e&~Z.DEM_IsCompressed;(e&Z.DEM_IsCompressed)===Z.DEM_IsCompressed&&(s=r.uncompress(s));const i=le[n];if(!i)throw new Error(`no type to handle demo command: ${n}`);const[l,o]=i;this.tick=t;const m=`msg:${o}`;if(!this.emitter.listenerCount(m)){this.emitter.emit("msg:skip",o,t);continue}const d=l.decode(s);this.emitter.emit(m,d,t),this.emitter.emit("tick",t)}}play(){this.seek(1/0)}stop(){this.parsing=!1}onCDemoPacket(e){const t=new A.Z(e.data),a=[];for(;!t.eof;){const e=t.readUBitVar(),s=t.readVarUint32(),r=oe[e];if(!r){t.skip(s);continue}const[n,i]=r,l=`msg:${i}`;if(!this.emitter.listenerCount(l)){this.emitter.emit("msg:skip",i),t.skip(s);continue}const o=t.readBytes(s);a.push({type:n,event:l,data:o})}a.length>1&&a.sort(pe);for(const e of a){const{type:t,event:a,data:s}=e,r=t.decode(s);this.emitter.emit(a,r)}}onCDemoFullPacket({stringTable:e,packet:t}){t&&this.onCDemoPacket(t)}onCDemoStringTables({tables:e}){for(const{items:t,tableName:a}of e){const e=this.stringTables.get(a);if(e){e.clear();for(const[a,{str:s,data:r}]of t.entries()){const t=new L(a,s,r);e.entries.push(t)}"instancebaseline"===e.name&&this.updateInstanceBaseline()}}}onCDemoSyncTick(){this.synced=!0}onCSVCMsg_ClearAllStringTables(){this.stringTables.clear()}onCSVCMsg_CreateStringTable(e){const{name:t,userDataFixedSize:a,userDataSize:s,userDataSizeBits:n,flags:i,numEntries:l}=e,o=new class{constructor(e,t,a,s,r){this.name=e,this.index=null,this.userDataFixedSize=t,this.userDataSize=a,this.userDataSizeBits=s,this.flags=r,this.entries=[]}clear(){this.entries.length=0}}(t,a,s,n,i);o.index=this.stringTables.size,this.stringTables.add(o);let m=e.stringData;if(e.dataCompressed){if("LZSS"===new A.Z(m).readStringN(4))throw new Error("LZSS string tables in old replays not yet supported");m=r.uncompress(m)}L.decode(o,m,l),"instancebaseline"===o.name&&this.updateInstanceBaseline()}onCSVCMsg_UpdateStringTable(e){const{stringData:t,numChangedEntries:a,tableId:s}=e,r=this.stringTables.byIndex.get(s);if(!r)throw new Error(`could not find string table: ${s}`);L.decode(r,t,a),"instancebaseline"===r.name&&this.updateInstanceBaseline()}onCSVCMsg_ServerInfo(e){this.classIDSize=A.Z.calcBitsNeededFor(e.maxClasses),this.tickInterval=e.tickInterval;const t=e.gameDir.match(/dota_v(\d+)/);if(t)this.buildNumber=+t[1];else{const t=new Error(`could not retrieve build number from: ${e.gameDir}`);this.emitter.emit("warn",t)}}onCMsgSource1LegacyGameEventList(e){for(const{eventid:t,name:a,keys:s}of e.descriptors){const e=new M.x0(t,a);for(const t of s)e.fields.push(new M.Ok(e.fields.length,t.name,t.type));this.gameEventTypes.add(e)}}onCMsgSource1LegacyGameEvent(e){const t=this.gameEventTypes.get(e.eventid);if(!t)throw new Error(`unknown event: ${e.eventid}`);const a=new M.Zm(t,e);this.emitter.emit("event",a),this.emitter.emit(`event:${t.name}`,a)}onCDemoClassInfo(e){for(const{classId:t,networkName:a}of e.classes){const e=new M.wT(t,a,this.serializers.get(a));this.classes.add(e)}this.updateInstanceBaseline()}onCDemoSendTables(e){const t=new A.Z(e.data),a=t.readBytes(t.readVarUint32()),s=V.decode(a),r=ce.filter((e=>e.appliesFor(this.buildNumber))),n={},i={};for(const{fieldsIndex:e,serializerVersion:t,serializerNameSym:a}of s.serializers){const l=s.symbols[a],o=new U(l,t);for(const t of e){let e=n[t];if(!e){e=F.for(s.symbols,s.fields[t]),this.buildNumber<=990&&(e.parentName=o.name);const{varType:a}=e;let l=i[a];l||(l=O.for(a),i[a]=l),e.fieldType=l,e.serializerName&&(e.serializer=this.serializers.get(e.serializerName));for(const t of r)t.apply(e);e.serializer?e.isPointerType?e.model=2:e.model=4:e.fieldType.count>0&&"char"!==e.fieldType.baseType?e.model=1:"CUtlVector"===e.fieldType.baseType?e.model=3:e.model=0,n[t]=e}o.fields.push(e)}this.serializers.add(o);const m=this.classes.byName[o.name];m&&(m.serializer=o)}}onCSVCMsg_PacketEntities(e){const t=new A.Z(e.entityData),a=[];let s,r,n,i,l,o,m=-1;if(!e.isDelta){if(this.entityFullPacketCount>0)return;this.entityFullPacketCount++}for(let d=e.updatedEntries;d>0;--d){if(m+=t.readUBitVar()+1,l=M._V.NONE,s=t.readBitInt(2),o={},0==(1&s))if(0!=(2&s)){r=t.readBitInt(this.classIDSize),n=t.readBitInt(M.F5),t.readVarUint32();const e=this.classes.get(r);if(!e)throw new Error(`unable to find new class: ${r}`);const a=this.classBaselines[r];if(!a)throw new Error(`unable to find new baseline: ${r}`);i=new M.JH(m,n,e),this.entities.add(i),new A.Z(a).readFieldsInto(i.state,e.serializer),t.readFieldsInto(i.state,e.serializer),l=M._V.CREATED|M._V.ENTERED,o=i.snapshot}else{if(i=this.entities.get(m),!i)throw new Error(`unable to find existing entity: ${m}`);l=M._V.UPDATED,i.active||(i.active=!0,l|=M._V.ENTERED),o=t.readFieldsInto(i.state,i.class.serializer)}else{if(i=this.entities.get(m),!i)continue;if(!i.active)throw new Error(`entity ${i.class.name} ordered to leave, already inactive`);l=M._V.LEFT,0!=(2&s)&&(l|=M._V.DELETED,this.entities.delete(i))}a.push({entity:i,delta:o,event:l})}this.emitter.emit("entities",a)}updateInstanceBaseline(){const e=this.stringTables.get("instancebaseline");if(e)for(const t of e.entries){const e=+t.key;this.classBaselines[e]=t.data}}}const pe=(e,t)=>me(e.type)-me(t.type),ue=_e},7218:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var s=a(3388),r=a(8764).Buffer;const n=(e,t)=>new RangeError(`cannot read ${t} bytes at position ${e}`),i=class{constructor(e){this.buffer=r.from(e),this.pos=0,this.bitVal=0,this.bitCount=0}get length(){return this.buffer.length}get eof(){return this.pos>=this.length}get bitLength(){return 8*this.length}get bitPos(){return 8*(this.pos-1)+(8-this.bitCount)}get posWithBit(){const{bitCount:e,pos:t}=this;return e>0?`${t-1}.${8-e}`:t}get remaining(){return this.length-this.pos}nextByte(){const{pos:e}=this;if(this.eof)throw n(e,this.length);return this.pos+=1,this.buffer[e]}readAngle(e){return 360*this.readBitInt(e)/(1<<e)}readBitFloat(e){const t=this.readBitInt(e),a=r.alloc(4);return a.writeUInt32LE(t),a.readFloatLE()}readBitInt(e){if(e>=32){const t=BigInt(e);let a=BigInt(this.bitVal),s=BigInt(this.bitCount);for(;t>s;)a|=BigInt(this.nextByte())<<s,s+=8n;const r=a&(1n<<t)-1n;return this.bitVal=Number(a>>t),this.bitCount=Number(s-t),Number(r)}for(;e>this.bitCount;)this.bitVal|=this.nextByte()<<this.bitCount,this.bitCount+=8;const t=this.bitVal&(1<<e)-1;return this.bitVal>>=e,this.bitCount-=e,t}readBitFlag(){return 1===this.readBitInt(1)}readBitsAsBytes(e){const t=[];for(;e>=8;e-=8)t.push(this.readByte());return e>0&&t.push(this.readBitInt(e)),r.from(t)}readByte(){return 0===this.bitCount?this.nextByte():this.readBitInt(8)}readBytes(e){if(0===this.bitCount){const t=this.pos,a=t+e;if(a>this.length)throw n(t,e);return this.pos=a,this.buffer.slice(t,a)}const t=r.alloc(e);for(let a=0;a<e;++a)t[a]=this.readBitInt(8);return t}readCoord(){let e=0,t=this.readBitInt(1),a=this.readBitInt(1),s=!1;return 0===t&&0===a||(s=this.readBitFlag(),0!==t&&(t=this.readBitInt(14)+1),0!==a&&(a=this.readBitInt(5)),e=t+a*(1/32),s&&(e=-e)),e}read3BitNormal(){const e=[0,0,0],t=this.readBitFlag(),a=this.readBitFlag();t&&(e[0]=this.readNormal()),a&&(e[1]=this.readNormal());const s=this.readBitFlag(),r=e[0]*e[0]+e[1]*e[1];return e[2]=r<1?Math.sqrt(1-r):0,s&&(e[2]=-e[2]),e}readFieldsInto(e,t){const a=s.Z.from(this),r={};for(const s of a){const a=t.getDecoderForFieldPath(s,0)(this),n=t.getNameForFieldPath(s,0).join(".");e.set(s,a),r[n]=a}return r}readStringN(e,t="utf8"){return this.readBytes(e).toString(t)}readString(e="utf8"){const t=[];for(;;){const e=this.readByte();if(0===e)break;t.push(e)}return r.from(t).toString(e)}readUBitVar(){let e=this.readBitInt(6);switch(48&e){case 16:e=15&e|this.readBitInt(4)<<4;break;case 32:e=15&e|this.readBitInt(8)<<4;break;case 48:e=15&e|this.readBitInt(28)<<4}return e}readUBitVarFieldPath(){return this.readBitFlag()?this.readBitInt(2):this.readBitFlag()?this.readBitInt(4):this.readBitFlag()?this.readBitInt(10):this.readBitFlag()?this.readBitInt(17):this.readBitInt(31)}readUint32LE(){return this.readBytes(4).readUInt32LE()}readUint64LE(){return this.readBytes(8).readBigUInt64LE()}readVarInt32(){const e=this.readVarUint32();let t=e>>1;return!0&e&&(t=~t),t}readVarUint32(){let e=0,t=0;for(;;){const a=this.readByte();if(e|=(127&a)<<t,t+=7,0==(128&a)||38===t)break}return e}readVarUint64(){let e=0n,t=0n;for(let a=0;;++a){const s=BigInt(this.readByte());if(s<128){if(a>9||9===a&&s>1)throw new Error("varint overflows uint64");return e|s<<t}e|=(0x7fn&s)<<t,t+=7n}}skip(e){const t=this.pos+e;if(t>this.length)throw new RangeError(`cannot skip ${e} bytes`);this.pos=t,this.bitCount>0&&(this.bitVal=this.buffer[this.pos-1]>>8-this.bitCount)}static calcBitsNeededFor(e){return Math.log2(e)+1|0}}},4321:(e,t,a)=>{"use strict";a.d(t,{wT:()=>s,JH:()=>o,_V:()=>l,Zm:()=>h,Ok:()=>d,x0:()=>c,F5:()=>i});const s=class{constructor(e,t,a){this.id=e,this.name=t,this.serializer=a}getFieldPaths(e,t){return this.serializer.getFieldPaths(e,t)}getFieldPathForName(e,t){return this.serializer.getFieldPathForName(e,t)}getNameForFieldPath(e){return this.serializer.getNameForFieldPath(e,0).join(".")}};var r=a(3388),n=a(4562);const i=17,l={NONE:0,CREATED:1,UPDATED:2,DELETED:4,ENTERED:8,LEFT:16},o=class{constructor(e,t,a){this.index=e,this.serial=t,this.handle=((e,t)=>t<<14|e)(e,t),this.class=a,this.active=!0,this.state=new n.Z,this.fpCache={}}get snapshot(){const e={},t=this.class.getFieldPaths(new r.Z,this.state);for(const a of t)e[this.class.getNameForFieldPath(a)]=this.state.get(a);return e}get(e){let t=this.fpCache[e];if(!t){if(t=new r.Z,!this.class.getFieldPathForName(t,e))throw new Error(`entity ${this.class.name} does not have field: ${e}`);this.fpCache[e]=t}return this.state.get(t)}},m={1:"valString",2:"valFloat",3:"valLong",4:"valShort",5:"valByte",6:"valBool",7:"valUint64"};class d{constructor(e,t,a){this.index=+e,this.name=t,this.type=a}}class c{constructor(e,t){this.id=e,this.name=t,this.fields=[]}}const h=class{constructor(e,t){this.type=e,this.packet=t,this.data={};for(const[e,t]of Object.entries(this.type.fields)){const a=m[t.type];this.data[t.name]=this.packet.keys[e][a]}}}},9631:(e,t,a)=>{"use strict";a.d(t,{Lw:()=>s,yk:()=>l,Yw:()=>i,eg:()=>m,bA:()=>c});const s=class{constructor(e){this.compare=e,this.data=[]}get isEmpty(){return 0===this.data.length}get root(){return this.data[0]}get size(){return this.data.length}insert(e){const{data:t}=this;t.push(e),this._bubbleUp(t.length-1)}extract(){const{data:e,root:t}=this,a=e.pop();return e.length>0&&(e[0]=a,this._bubbleDown(0)),t}_bubbleUp(e){const{compare:t,data:a}=this,s=a[e],r=(e-1)/2|0,n=a[r];t(s,n)<0&&(a[r]=s,a[e]=n,this._bubbleUp(r))}_bubbleDown(e){const{compare:t,data:a}=this,s=2*e+1,r=2*e+2;let n=e;if(void 0!==a[s]&&t(a[s],a[n])<0&&(n=s),void 0!==a[r]&&t(a[r],a[n])<0&&(n=r),n!==e){const t=a[n];a[n]=a[e],a[e]=t,this._bubbleDown(n)}}static from(e,t){const a=new this(t);for(const t of e)a.insert(t);return a}};var r=a(8949);class n{constructor(e,t={}){this.keyProp=e,this.data=new Map,this.indices=Object.entries(t).map((([e,t])=>{const a=new Map;return this[e]=a,{accessor:e,prop:t,collection:a}}))}get size(){return this.data.size}add(e){this.data.set(e[this.keyProp],e);for(const{prop:t,collection:a}of this.indices){const s=e[t];a.set(s,e)}}get(e){return this.data.get(e)}delete(e){this.data.delete(e[this.keyProp]);for(const{prop:t,collection:a}of this.indices){const s=e[t];a.delete(s)}}clear(){this.data.clear();for(const{collection:e}of this.indices)e.clear()}filter(e){const t=[];for(const[a,s]of this.data)e(s,a)&&t.push(s);return t}find(e){for(const[t,a]of this.data)if(e(a,t))return a;return null}map(e){const t=[];for(const[a,s]of this.data)t.push(e(s,a));return t}*[Symbol.iterator](){for(const[,e]of this.data)yield e}}class i extends n{constructor(e,t={}){super(e,t),(0,r.rC)(this,{data:r.LO,size:r.Fl,get:r.LO,filter:r.LO,find:r.LO,map:r.LO,[Symbol.iterator]:r.LO,add:r.aD,delete:r.aD,clear:r.aD});for(const e of this.indices)(0,r.rC)(this,{[e.accessor]:r.LO}),e.collection=this[e.accessor]}}const l=n,{hasOwnProperty:o}={},m=(e,t)=>o.call(e,t)?e[t]:null;var d=a(7548);const c=e=>e/d.GC},7318:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var s=a(7294),r=a(3935),n=a(9163),i=a(1990),l=a(1823);const o=document.querySelector("#modal"),m=n.ZP.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  box-sizing: content-box;
  letter-spacing: 0.5px;
`,d=n.ZP.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, .75);
`,c=(0,n.ZP)(i.Z)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 7px 10px;
  font-size: 1.5em;
  opacity: .5;

  &:hover {
    opacity: 1;
  }
`,h=n.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 25px;
  transform: translate(-50%, -50%);
  background: rgba(17, 17, 17, .75);
  border: 2px solid #333;
  border-radius: 10px;

  & :nth-child(2) {
    margin-top: 0;
  }

  & :last-child {
    margin-bottom: 0;
  }
`,_=e=>{const{children:t,onClose:a}=e,n=(0,s.useRef)();return(0,s.useEffect)((()=>{n.current.focus()}),[n]),r.createPortal(s.createElement(m,{ref:n},s.createElement(d,{onClick:a}),s.createElement(h,null,s.createElement(c,{label:"Close",onClick:a},s.createElement(l.Z,{name:"times-circle"})),t)),o)}},106:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>gt});var s=a(7294),r=a(9163),n=a(5977),i=a(7187),l=a(8949),o=a(9384),m=a(4321),d=a(9631);const c=class{constructor(e){this.replay=e,this.value=0,this.duration=null,(0,l.rC)(this,{value:l.LO,duration:l.LO,remaining:l.Fl})}get remaining(){return null===this.duration||this.value<=this.duration?this.value:this.value-this.replay.game.time}},h=class{constructor(e,t,a=null){this.replay=e,this.entity=t,this.internalName=a,(0,l.rC)(this,{refname:l.Fl})}get class(){return this.entity.class.name}get handle(){return this.entity.handle}get refname(){return this.internalName}},_=class extends h{constructor(e,...t){super(e,...t),this.cooldown=new c(e),this.hidden=!1,this.level=null,this.manaCost=null,(0,l.rC)(this,{cooldown:l.LO,hidden:l.LO,level:l.LO,manaCost:l.LO})}get isSeasonal(){return this.refname.startsWith("seasonal_")}get isTalent(){return this.refname.startsWith("special_bonus_")||this.refname.startsWith("ad_special_bonus_")}};var p=a(7548);const u=class{constructor(){this.cellX=0,this.cellY=0,this.vecX=0,this.vecY=0,(0,l.rC)(this,{cellX:l.LO,cellY:l.LO,vecX:l.LO,vecY:l.LO,x:l.Fl,y:l.Fl,relX:l.Fl,relY:l.Fl})}get x(){return this.cellX*p.bM+this.vecX}get y(){return this.cellY*p.bM+this.vecY}get relX(){return(0,d.bA)(this.x-p.GC)}get relY(){return(0,d.bA)(this.y-p.GC)}};var g=a(5878),f=a(8173),b=a(7529),y=a(7218),v=a(8764).Buffer;const w=(e,t)=>(65535&e)*t+(((e>>>16)*t&65535)<<16)>>>0,C=(e,t=3987459567)=>{const a=1540483477;let s=t^e.length,r=0;const n=v.from(e),i=new y.Z(n);for(;i.remaining>=8;){let e=i.readUint32LE();e=w(e,a),e^=e>>>24,e=w(e,a),s=w(s,a),s^=e;let t=i.readUint32LE();t=w(t,a),t^=t>>>24,t=w(t,a),r=w(r,a),r^=t}if(i.remaining>=4){let e=i.readUint32LE();e=w(e,a),e^=e>>>24,e=w(e,a),s=w(s,a),s^=e}switch(i.remaining){case 3:r^=(255&i.buffer[i.pos+2])<<16;case 2:r^=(255&i.buffer[i.pos+1])<<8;case 1:r^=255&i.buffer[i.pos],r=w(r,a)}return s^=r>>>18,s=w(s,a),r^=s>>>22,r=w(r,a),s^=r>>>17,s=w(s,a),r^=s>>>19,r=w(r,a),(0xFFFFFFFFn&BigInt(s))<<32n|0xFFFFFFFFn&BigInt(r)},k=function(e,t=this){return e.modelID in t.modelIDs},D=(e=>{for(const[,t]of Object.entries(e)){const e={[C(t.model)]:t.model};if(t.variants)for(const a of t.variants)e[C(a)]=a;t.modelIDs=e}return e})({npc_dota_beastmaster_boar:{name:"Boar",model:"models/heroes/beastmaster/beastmaster_beast.vmdl"},npc_dota_beastmaster_hawk:{name:"Hawk",model:"models/heroes/beastmaster/beastmaster_bird.vmdl"},npc_dota_brewmaster_earth:{name:"Earth",model:"models/heroes/brewmaster/brewmaster_earthspirit.vmdl"},npc_dota_brewmaster_fire:{name:"Fire",model:"models/heroes/brewmaster/brewmaster_firespirit.vmdl"},npc_dota_brewmaster_storm:{name:"Storm",model:"models/heroes/brewmaster/brewmaster_windspirit.vmdl"},npc_dota_brewmaster_void:{name:"Void",model:"models/heroes/brewmaster/brewmaster_voidspirit.vmdl"},npc_dota_broodmother_spiderling:{name:"Spiderling",model:"models/heroes/broodmother/spiderling.vmdl",match(e){return k(e,this)&&3===e.level}},npc_dota_broodmother_spiderite:{name:"Spiderite",model:"models/heroes/broodmother/spiderling.vmdl",match(e){return k(e,this)&&2===e.level}},npc_dota_broodmother_web:{name:"Spin Web",model:"???"},npc_dota_clinkz_skeleton_archer:{name:"Skeleton Archer",model:"models/heroes/clinkz/clinkz_archer.vmdl"},npc_dota_courier:{name:"Courier",model:"models/props_gameplay/donkey.vmdl"},npc_dota_flying_courier:{name:"Flying Courier",model:"models/props_gameplay/donkey_wings.vmdl"},npc_dota_earth_spirit_stone:{name:"Stone Remnant",model:"models/heroes/earth_spirit/stonesummon.vmdl"},npc_dota_eidolon:{name:"Eidolon",model:"models/heroes/enigma/eidelon.vmdl",match:k,variants:["models/items/enigma/eidolon/absolute_zero_updated_eidolon/absolute_zero_updated_eidolon.vmdl","models/items/enigma/eidolon/artifacts_of_crushing_depths_eidolon_of_crushing_depths/artifacts_of_crushing_depths_eidolon_of_crushing_depths.vmdl","models/items/enigma/eidolon/enigma_seer_of_infinity_space_eidolon/enigma_seer_of_infinity_space_eidolon.vmdl","models/items/enigma/eidolon/geodesic/geodesic.vmdl","models/items/enigma/eidolon/life_cycle_life_cycle_eidolons/life_cycle_life_cycle_eidolons.vmdl","models/items/enigma/eidolon/tentacular_conqueror_tentacular_conqueror_eidolons/tentacular_conqueror_tentacular_conqueror_eidolons.vmdl","models/items/enigma/eidolon/ti9_cache_enigma_lord_of_luminaries_eidolons/ti9_cache_enigma_lord_of_luminaries_eidolons.vmdl"]},npc_dota_elder_titan_ancestral_spirit:{name:"Astral Spirit",model:"models/heroes/elder_titan/ancestral_spirit.vmdl"},npc_dota_furion_treant:{name:"Treant",model:"models/heroes/furion/treant.vmdl",match:k,variants:["models/items/furion/treant_flower_1.vmdl","models/items/furion/treant_stump.vmdl","models/items/furion/treant/abyssal_prophet_abyssal_prophet_treant/abyssal_prophet_abyssal_prophet_treant.vmdl","models/items/furion/treant/allfather_of_nature_treant/allfather_of_nature_treant.vmdl","models/items/furion/treant/defender_of_the_jungle_lakad_coconut/defender_of_the_jungle_lakad_coconut.vmdl","models/items/furion/treant/eternalseasons_treant/eternalseasons_treant.vmdl","models/items/furion/treant/father_treant/father_treant.vmdl","models/items/furion/treant/fungal_lord_shroomthing/fungal_lord_shroomthing.vmdl","models/items/furion/treant/furion_treant_nelum_red/furion_treant_nelum_red.vmdl","models/items/furion/treant/hallowed_horde/hallowed_horde.vmdl","models/items/furion/treant/primeval_treant/primeval_treant.vmdl","models/items/furion/treant/ravenous_woodfang/ravenous_woodfang.vmdl","models/items/furion/treant/shroomling_treant/shroomling_treant.vmdl","models/items/furion/treant/the_ancient_guardian_the_ancient_treants/the_ancient_guardian_the_ancient_treants.vmdl","models/items/furion/treant/treant_cis/treant_cis.vmdl"]},npc_dota_grimstroke_ink_creature:{name:"Phantom",model:"models/heroes/grimstroke/ink_phantom.vmdl",match:k},npc_dota_gyrocopter_homing_missile:{name:"Homing Missile",model:"models/heroes/gyro/gyro_missile.vmdl",match:k,variants:["models/items/gyrocopter/dwarven_gyrocopter_off_hand/dwarven_gyrocopter_off_hand.vmdl","models/items/gyrocopter/emerging_dragon_attack/emerging_dragon_attack.vmdl","models/items/gyrocopter/emerging_dragon/emerging_dragon.vmdl","models/items/gyrocopter/flamed_falcon_patrol_off_hand/flamed_falcon_patrol_off_hand.vmdl","models/items/gyrocopter/flying_dutchman_offhand/flying_dutchman_offhand.vmdl","models/items/gyrocopter/g17_flying_fortress_offhand/g17_flying_fortress_offhand.vmdl","models/items/gyrocopter/gyro_allied_commander_off_hand/gyro_allied_commander_off_hand.vmdl","models/items/gyrocopter/gyro_ti10_immortal_missile/gyro_ti10_immortal_missile.vmdl","models/items/gyrocopter/gyros_gift_copter_off_hand_bluesnow/gyros_gift_copter_off_hand_bluesnow.vmdl","models/items/gyrocopter/rainmaker_offhand/rainmaker_offhand.vmdl","models/items/gyrocopter/skyhigh_bomb_missle/skyhigh_bomb.vmdl","models/items/gyrocopter/submersible_aircraft_08_off_hand/submersible_aircraft_08_off_hand.vmdl","models/items/gyrocopter/ti8_gyro_digger_wasp_copter_off_hand/ti8_gyro_digger_wasp_copter_off_hand.vmdl"]},npc_dota_ignis_fatuus:{name:"Will-o-Wisp",model:"models/heroes/keeper_of_the_light/kotl_wisp.vmdl"},npc_dota_invoker_forged_spirit:{name:"Forged Spirit",model:"models/heroes/invoker/forge_spirit.vmdl"},npc_dota_juggernaut_healing_ward:{name:"Healing Ward",model:"models/heroes/juggernaut/jugg_healing_ward.vmdl",match:k,variants:["models/items/juggernaut/ward_foo.vmdl","models/items/juggernaut/ward/dc_wardupate/dc_wardupate.vmdl","models/items/juggernaut/ward/fall20_juggernaut_katz_ward/fall20_juggernaut_katz_ward.vmdl","models/items/juggernaut/ward/fortunes_tout/fortunes_tout.vmdl","models/items/juggernaut/ward/frostivus2018_jugg_northern_wanderer_ward/frostivus2018_jugg_northern_wanderer_ward.vmdl","models/items/juggernaut/ward/healing_gills_of_the_lost_isles/healing_gills_of_the_lost_isles.vmdl","models/items/juggernaut/ward/sinister_shadow_healing_cauldron/sinister_shadow_healing_cauldron.vmdl","models/items/juggernaut/ward/sinister_shadow_helloween_cauldron/sinister_shadow_helloween_cauldron.vmdl","models/items/juggernaut/ward/susano_os_descendant_healing_ward/susano_os_descendant_healing_ward.vmdl"]},npc_dota_lich_ice_spire:{name:"Ice Spire",model:"models/heroes/lich/ice_spire.vmdl"},npc_dota_lone_druid_bear:{name:"Spirit Bear",model:"models/heroes/lone_druid/spirit_bear.vmdl"},npc_dota_lycan_wolf:{name:"Lycan Wolf",model:"models/heroes/lycan/summon_wolves.vmdl",match:k,variants:["models/items/lycan/wolves/alpha_summon_01/alpha_summon_01.vmdl","models/items/lycan/wolves/ambry_summon/ambry_summon.vmdl","models/items/lycan/wolves/blood_moon_hunter_wolves/blood_moon_hunter_wolves.vmdl","models/items/lycan/wolves/frostivus2018_lycan_winter_snow_wolf_wolves/frostivus2018_lycan_winter_snow_wolf_wolves.vmdl","models/items/lycan/wolves/hunter_kings_wolves/hunter_kings_wolves.vmdl","models/items/lycan/wolves/icewrack_pack/icewrack_pack.vmdl","models/items/lycan/wolves/mutant_exorcist_summon/mutant_exorcist_summon.vmdl"]},npc_dota_necronomicon_warrior:{name:"Necronomicon Warrior",model:"models/creeps/item_creeps/i_creep_necro_warrior/necro_warrior.vmdl",match:k},npc_dota_necronomicon_archer:{name:"Necronomicon Archer",model:"models/creeps/item_creeps/i_creep_necro_archer/necro_archer.vmdl",match:k},npc_dota_phoenix_sun:{name:"Phoenix Sun",model:"models/heroes/phoenix/phoenix_egg.vmdl",match:k,variants:["models/items/phoenix/ultimate/aristocratic_rebirth_supernova/aristocratic_rebirth_supernova.vmdl","models/items/phoenix/ultimate/blazing_wing_blazing_egg/blazing_wing_blazing_egg.vmdl","models/items/phoenix/ultimate/eye_of_the_sun_sun_pyramid/eye_of_the_sun_sun_pyramid.vmdl","models/items/phoenix/ultimate/golden_nirvana_golden_nirvana_nova/golden_nirvana_golden_nirvana_nova.vmdl","models/items/phoenix/ultimate/nirvana_spiritual_supernova/nirvana_spiritual_supernova.vmdl","models/items/phoenix/ultimate/ti8_phoenix_heart_of_volcano_egg/ti8_phoenix_heart_of_volcano_egg.vmdl","models/items/rubick/rubick_arcana/rubick_arcana_phoenix_egg.vmdl"]},npc_dota_pugna_nether_ward:{name:"Nether Ward",model:"models/heroes/pugna/pugna_ward.vmdl",match:k,variants:["models/items/pugna/ward/dplus_battlemages_fury_ward/dplus_battlemages_fury_ward.vmdl","models/items/pugna/ward/nether_grandmasters_ward/nether_grandmasters_ward.vmdl","models/items/pugna/ward/nether_heart/nether_heart.vmdl","models/items/pugna/ward/nether_heart/nether_heart.vmdl","models/items/pugna/ward/tentaclesofnetherreach/tentaclesofnetherreach.vmdl","models/items/pugna/ward/tentaclesofnetherreach/tentaclesofnetherreach.vmdl","models/items/pugna/ward/weta_call_of_the_nether_lotus_ward/weta_call_of_the_nether_lotus_ward.vmdl"]},npc_dota_rattletrap_cog:{name:"Power Cog",model:"models/heroes/rattletrap/rattletrap_cog.vmdl"},npc_dota_roshan:{name:"Roshan",model:"models/creeps/roshan/roshan.vmdl"},npc_dota_shadowshaman_serpentward:{name:"Serpent Ward",model:"models/heroes/shadowshaman/shadowshaman_totem.vmdl"},npc_dota_techies_land_mine:{name:"Proximity Mine",model:"models/heroes/techies/fx_techiesfx_mine.vmdl",match:k,variants:["models/items/techies/bigshot/fx_bigshot_mine.vmdl","models/items/techies/techies_ti9_immortal_prox_mine/techies_ti9_immortal_prox_mine.vmdl"]},npc_dota_techies_minefield_sign:{name:"Minefield Sign",model:"models/heroes/techies/techies_sign.vmdl"},npc_dota_techies_stasis_trap:{name:"Stasis Trap",model:"models/heroes/techies/fx_techiesfx_stasis.vmdl",match:k,variants:["models/items/techies/bigshot/fx_bigshot_stasis.vmdl"]},npc_dota_techies_remote_mine:{name:"Remote Mine",model:"models/heroes/techies/fx_techies_remotebomb.vmdl",match:k,variants:["models/heroes/techies/fx_techies_remotebomb_rubick.vmdl","models/items/techies/bigshot/bigshot_remotebomb.vmdl","models/items/techies/crazy_night_of_magic_mines/crazy_night_of_magic_mines.vmdl","models/items/techies/frostivus2018_techies_squad_penguins_bomb/frostivus2018_techies_squad_penguins_bomb.vmdl","models/items/techies/frostivus2018_techies_team_nutcracker_remote/frostivus2018_techies_team_nutcracker_remote.vmdl","models/items/techies/techies_ti9_immortal_remote_mine/techies_ti9_immortal_remote_mine.vmdl","models/items/techies/ti8_techies_subterranean_sapper_squad_bomb/ti8_techies_subterranean_sapper_squad_bomb.vmdl"]},npc_dota_templar_assassin_psionic_trap:{name:"Psionic Trap",model:"models/heroes/lanaya/lanaya_trap_crystal_invis.vmdl",match:k},npc_dota_tusk_frozen_sigil:{name:"Frozen Sigil",model:"models/particle/tusk_sigil.vmdl"},npc_dota_unit_undying_tombstone:{name:"Tombstone",model:"models/heroes/undying/undying_tower.vmdl"},npc_dota_unit_undying_zombie:{name:"Undying Zombie",model:"models/heroes/undying/undying_minion.vmdl"},npc_dota_venomancer_plagueward:{name:"Plague Ward",model:"models/heroes/venomancer/venomancer_ward.vmdl"},npc_dota_visage_familiar:{name:"Familiar",model:"models/heroes/visage/visage_familiar.vmdl"},npc_dota_ward_base:{name:"Observer Ward",model:"models/props_gameplay/default_ward.vmdl"},npc_dota_ward_base_truesight:{name:"Sentry Ward",model:"models/props_gameplay/default_ward.vmdl"},npc_dota_warlock_golem:{name:"Warlock Golem",model:"models/heroes/warlock/warlock_demon.vmdl"},npc_dota_weaver_swarm:{name:"Beetle",model:"models/heroes/weaver/weaver_bug.vmdl",match:k,variants:["models/items/weaver/weaver_immortal_head_ti7/weaver_bug_ti7.vmdl"]},npc_dota_witch_doctor_death_ward:{name:"Death Ward",model:"models/heroes/witchdoctor/witchdoctor_ward.vmdl"},npc_dota_zeus_cloud:{name:"Nimbus",model:"models/heroes/zeus/zeus_sigil.vmdl"},npc_dota_creep_badguys_melee:{name:"Dire Melee Creep",model:"models/creeps/lane_creeps/creep_bad_melee/creep_bad_melee.vmdl",match:k},npc_dota_creep_badguys_melee_upgraded:{name:"Dire Super Melee Creep",model:"models/creeps/lane_creeps/creep_bad_melee/creep_bad_melee.vmdl",match:k},npc_dota_creep_badguys_melee_upgraded_mega:{name:"Dire Mega Melee Creep",model:"models/creeps/lane_creeps/creep_bad_melee/creep_bad_melee_mega.vmdl",match:k},npc_dota_creep_badguys_ranged:{name:"Dire Ranged Creep",model:"models/creeps/lane_creeps/creep_bad_ranged/lane_dire_ranged.vmdl",match:k},npc_dota_creep_badguys_ranged_upgraded:{name:"Dire Super Ranged Creep",model:"models/creeps/lane_creeps/creep_bad_ranged/lane_dire_ranged.vmdl",match:k},npc_dota_creep_badguys_ranged_upgraded_mega:{name:"Dire Mega Ranged Creep",model:"models/creeps/lane_creeps/creep_bad_ranged/lane_dire_ranged_mega.vmdl",match:k},npc_dota_badguys_siege:{name:"Dire Siege Creep",model:"models/creeps/lane_creeps/creep_bad_siege/creep_bad_siege.vmdl",match:k},npc_dota_badguys_siege_upgraded:{name:"Dire Super Siege Creep",model:"models/creeps/lane_creeps/creep_bad_siege/creep_bad_siege.vmdl",match:k},npc_dota_badguys_siege_upgraded_mega:{name:"Dire Mega Siege Creep",model:"models/creeps/lane_creeps/creep_bad_siege/creep_bad_siege.vmdl",match:k},npc_dota_creep_goodguys_melee:{name:"Radiant Melee Creep",model:"models/creeps/lane_creeps/creep_radiant_melee/radiant_melee.vmdl",match:k},npc_dota_creep_goodguys_melee_upgraded:{name:"Radiant Super Melee Creep",model:"models/creeps/lane_creeps/creep_radiant_melee/radiant_melee.vmdl",match:k},npc_dota_creep_goodguys_melee_upgraded_mega:{name:"Radiant Mega Melee Creep",model:"models/creeps/lane_creeps/creep_radiant_melee/radiant_melee_mega.vmdl",match:k},npc_dota_creep_goodguys_ranged:{name:"Radiant Ranged Creep",model:"models/creeps/lane_creeps/creep_radiant_ranged/radiant_ranged.vmdl",match:k},npc_dota_creep_goodguys_ranged_upgraded:{name:"Radiant Super Ranged Creep",model:"models/creeps/lane_creeps/creep_radiant_ranged/radiant_ranged.vmdl",match:k},npc_dota_creep_goodguys_ranged_upgraded_mega:{name:"Radiant Mega Ranged Creep",model:"models/creeps/lane_creeps/creep_radiant_ranged/radiant_ranged_mega.vmdl",match:k},npc_dota_goodguys_siege:{name:"Radiant Siege Creep",model:"models/creeps/lane_creeps/creep_good_siege/creep_good_siege.vmdl",match:k},npc_dota_goodguys_siege_upgraded:{name:"Radiant Super Siege Creep",model:"models/creeps/lane_creeps/creep_good_siege/creep_good_siege.vmdl",match:k},npc_dota_goodguys_siege_upgraded_mega:{name:"Radiant Mega Siege Creep",model:"models/creeps/lane_creeps/creep_good_siege/creep_good_siege.vmdl",match:k},npc_dota_dark_troll_warlord_skeleton_warrior:{name:"Skeleton",model:"models/creeps/neutral_creeps/n_creep_troll_skeleton/n_creep_skeleton_melee.vmdl",match:k},npc_dota_neutral_alpha_wolf:{name:"Alpha Wolf",model:"models/creeps/neutral_creeps/n_creep_worg_large/n_creep_worg_large.vmdl",match:k},npc_dota_neutral_giant_wolf:{name:"Giant Wolf",model:"models/creeps/neutral_creeps/n_creep_worg_small/n_creep_worg_small.vmdl",match:k},npc_dota_neutral_big_thunder_lizard:{name:"Ancient Thunderhide",model:"models/creeps/neutral_creeps/n_creep_thunder_lizard/n_creep_thunder_lizard_big.vmdl",match:k},npc_dota_neutral_small_thunder_lizard:{name:"Ancient Rumblehide",model:"models/creeps/neutral_creeps/n_creep_thunder_lizard/n_creep_thunder_lizard_small.vmdl",match:k},npc_dota_neutral_black_drake:{name:"Ancient Black Drake",model:"models/creeps/neutral_creeps/n_creep_black_drake/n_creep_black_drake.vmdl",match:k},npc_dota_neutral_black_dragon:{name:"Ancient Black Dragon",model:"models/creeps/neutral_creeps/n_creep_black_dragon/n_creep_black_dragon.vmdl",match:k},npc_dota_neutral_centaur_outrunner:{name:"Centaur Courser",model:"models/creeps/neutral_creeps/n_creep_centaur_med/n_creep_centaur_med.vmdl",match:k},npc_dota_neutral_centaur_khan:{name:"Centaur Conqueror",model:"models/creeps/neutral_creeps/n_creep_centaur_lrg/n_creep_centaur_lrg.vmdl",match:k},npc_dota_neutral_dark_troll:{name:"Hill Troll",model:"models/creeps/neutral_creeps/n_creep_troll_dark_a/n_creep_troll_dark_a.vmdl",match:k},npc_dota_neutral_dark_troll_warlord:{name:"Dark Troll Summoner",model:"models/creeps/neutral_creeps/n_creep_troll_dark_b/n_creep_troll_dark_b.vmdl",match:k},npc_dota_neutral_enraged_wildkin:{name:"Wildwing Ripper",model:"models/creeps/neutral_creeps/n_creep_vulture_a/n_creep_vulture_a.vmdl",match:k},npc_dota_neutral_wildkin:{name:"Wildwing",model:"models/creeps/neutral_creeps/n_creep_vulture_b/n_creep_vulture_b.vmdl",match:k},npc_dota_neutral_fel_beast:{name:"Fell Spirit",model:"models/creeps/neutral_creeps/n_creep_ghost_b/n_creep_ghost_b.vmdl",match:k},npc_dota_neutral_ghost:{name:"Ghost",model:"models/creeps/neutral_creeps/n_creep_ghost_a/n_creep_ghost_a.vmdl",match:k},npc_dota_neutral_forest_troll_berserker:{name:"Hill Troll Berserker",model:"models/creeps/neutral_creeps/n_creep_forest_trolls/n_creep_forest_troll_berserker.vmdl",match:k},npc_dota_neutral_forest_troll_high_priest:{name:"Hill Troll Priest",model:"models/creeps/neutral_creeps/n_creep_forest_trolls/n_creep_forest_troll_high_priest.vmdl",match:k},npc_dota_neutral_gnoll_assassin:{name:"Vhoul Assassin",model:"models/creeps/neutral_creeps/n_creep_gnoll/n_creep_gnoll.vmdl",match:k},npc_dota_neutral_granite_golem:{name:"Ancient Granite Golem",model:"models/creeps/neutral_creeps/n_creep_golem_a/neutral_creep_golem_a.vmdl",match(e){return k(e,this)&&6===e.level}},npc_dota_neutral_rock_golem:{name:"Ancient Rock Golem",model:"models/creeps/neutral_creeps/n_creep_golem_a/neutral_creep_golem_a.vmdl",match(e){return k(e,this)&&5===e.level}},npc_dota_neutral_harpy_scout:{name:"Harpy Scout",model:"models/creeps/neutral_creeps/n_creep_harpy_a/n_creep_harpy_a.vmdl",match:k},npc_dota_neutral_harpy_storm:{name:"Harpy Stormcrafter",model:"models/creeps/neutral_creeps/n_creep_harpy_b/n_creep_harpy_b.vmdl",match:k},npc_dota_neutral_jungle_stalker:{name:"Ancient Stalker",model:"models/creeps/neutral_creeps/n_creep_gargoyle/n_creep_gargoyle.vmdl",match(e){return k(e,this)&&5===e.level}},npc_dota_neutral_elder_jungle_stalker:{name:"Ancient Primal Stalker",model:"models/creeps/neutral_creeps/n_creep_gargoyle/n_creep_gargoyle.vmdl",match(e){return k(e,this)&&6===e.level}},npc_dota_neutral_kobold:{name:"Kobold",model:"models/creeps/neutral_creeps/n_creep_kobold/kobold_c/n_creep_kobold_c.vmdl",match:k},npc_dota_neutral_kobold_tunneler:{name:"Kobold Soldier",model:"models/creeps/neutral_creeps/n_creep_kobold/kobold_b/n_creep_kobold_b.vmdl",match:k},npc_dota_neutral_kobold_taskmaster:{name:"Kobold Foreman",model:"models/creeps/neutral_creeps/n_creep_kobold/kobold_a/n_creep_kobold_a.vmdl",match:k},npc_dota_neutral_mud_golem:{name:"Mud Golem",model:"models/creeps/neutral_creeps/n_creep_golem_b/n_creep_golem_b.vmdl",match(e){return k(e,this)&&e.hpMax>=800}},npc_dota_neutral_mud_golem_split:{name:"Shard Golem",model:"models/creeps/neutral_creeps/n_creep_golem_b/n_creep_golem_b.vmdl",match(e){return k(e,this)&&e.hpMax<=400}},npc_dota_neutral_mud_golem_split_doom:{name:"Doom Shard",model:"models/heroes/doom/doom.vmdl",match:k},npc_dota_neutral_ogre_mauler:{name:"Ogre Bruiser",model:"models/creeps/neutral_creeps/n_creep_ogre_med/n_creep_ogre_med.vmdl",match:k},npc_dota_neutral_ogre_magi:{name:"Ogre Frostmage",model:"models/creeps/neutral_creeps/n_creep_ogre_lrg/n_creep_ogre_lrg.vmdl",match:k},npc_dota_neutral_polar_furbolg_champion:{name:"Hellbear",model:"models/creeps/neutral_creeps/n_creep_beast/n_creep_beast.vmdl",match:k},npc_dota_neutral_polar_furbolg_ursa_warrior:{name:"Hellbear Smasher",model:"models/creeps/neutral_creeps/n_creep_furbolg/n_creep_furbolg_disrupter.vmdl",match:k},npc_dota_neutral_prowler_acolyte:{name:"Ancient Prowler Acolyte",model:"models/creeps/neutral_creeps/n_creep_satyr_spawn_a/n_creep_satyr_spawn_b.vmdl",match:k},npc_dota_neutral_prowler_shaman:{name:"Ancient Prowler Shaman",model:"models/creeps/neutral_creeps/n_creep_satyr_spawn_a/n_creep_satyr_spawn_a.vmdl",match:k},npc_dota_neutral_satyr_soulstealer:{name:"Satyr Mindstealer",model:"models/creeps/neutral_creeps/n_creep_satyr_c/n_creep_satyr_c.vmdl",match:k},npc_dota_neutral_satyr_hellcaller:{name:"Satyr Tormenter",model:"models/creeps/neutral_creeps/n_creep_satyr_a/n_creep_satyr_a.vmdl",match:k},npc_dota_neutral_satyr_trickster:{name:"Satyr Banisher",model:"models/creeps/neutral_creeps/n_creep_satyr_b/n_creep_satyr_b.vmdl",match:k},npc_dota_badguys_fort:{name:"Dire Ancient",model:"models/props_structures/dire_ancient_base001.vmdl",match:e=>"dota_badguys_fort"===e.internalName},npc_dota_badguys_melee_rax:{name:"Dire Melee Barracks",model:"models/props_structures/dire_barracks_melee001.vmdl",match:e=>e.internalName.startsWith("bad_rax_melee")},npc_dota_badguys_range_rax:{name:"Dire Ranged Barracks",model:"models/props_structures/dire_barracks_ranged001.vmdl",match:e=>e.internalName.startsWith("bad_rax_range")},npc_dota_badguys_tower:{name:"Dire Tower",model:"models/props_structures/dire_tower002.vmdl",match:e=>e.internalName.startsWith("dota_badguys_tower")},npc_dota_goodguys_fort:{name:"Radiant Ancient",model:"models/props_structures/radiant_ancient001.vmdl",match:e=>"dota_goodguys_fort"===e.internalName},npc_dota_goodguys_melee_rax:{name:"Radiant Melee Barracks",model:"models/props_structures/radiant_melee_barracks001.vmdl",match:e=>e.internalName.startsWith("good_rax_melee")},npc_dota_goodguys_range_rax:{name:"Radiant Ranged Barracks",model:"models/props_structures/radiant_ranged_barracks001.vmdl",match:e=>e.internalName.startsWith("good_rax_range")},npc_dota_goodguys_tower:{name:"Radiant Tower",model:"models/props_structures/radiant_tower002.vmdl",match:e=>e.internalName.startsWith("dota_goodguys_tower")},npc_dota_watch_tower:{name:"Outpost",model:"models/props_structures/outpost.vmdl",match:e=>e.internalName.startsWith("npc_dota_watch_tower")}}),x=class extends h{constructor(...e){super(...e),this.type="unit",this.modelID=null,this.teamID=null,this.position=new u,this.rotation=null,this.level=1,this.hp=0,this.hpMax=0,this.mp=0,this.mpMax=0,this.isWaitingToSpawn=!1,this.ownerHandle=null,this.abilityHandles=[],(0,l.rC)(this,{modelID:l.LO,teamID:l.LO,position:l.LO,rotation:l.LO,level:l.LO,hp:l.LO,hpMax:l.LO,mp:l.LO,mpMax:l.LO,isWaitingToSpawn:l.LO,ownerHandle:l.LO,abilityHandles:l.LO,abilities:l.Fl,color:l.Fl,isDead:l.Fl,name:l.Fl,owner:l.Fl,team:l.Fl})}get abilities(){return this.abilityHandles.reduce(((e,t)=>{const a=this.replay.abilities.get(t);return!a||a.isSeasonal||a.isTalent||e.push(a),e}),[])}get color(){return this.owner?.color||p.ct[this.teamID]}get isDead(){return this.hp<=0}get name(){return D[this.refname]?.name||this.refname}get owner(){const{ownerHandle:e,replay:t}=this;return t.units.get(e)||t.players.get(e)}get refname(){const{internalName:e}=this,t=D[e];if(t&&!t.match)return e;for(const[e,t]of Object.entries(D))if(t.match&&t.match(this))return e;return e}get team(){return this.replay.teams.byID.get(this.teamID)}},P=class extends x{constructor(...e){super(...e),this.type="building"}},T=class extends x{constructor(...e){super(...e),this.inventoryHandles=[null,null,null,null,null,null],(0,l.rC)(this,{inventoryHandles:l.LO,inventory:l.Fl})}get inventory(){return this.inventoryHandles.map((e=>this.replay.items.get(e)))}},E=class extends T{constructor(...e){super(...e),this.type="courier",this.isFlying=!1,(0,l.rC)(this,{isFlying:l.LO})}get refname(){return this.isFlying?"npc_dota_flying_courier":super.refname}},B=class extends T{constructor(...e){super(...e),this.type="hero",this.playerID=-1,this.xp=0,this.backpackHandles=[null,null,null],this.neutralItemHandle=null,this.stashHandles=[null,null,null,null,null,null],this.teleportScrollHandle=null,(0,l.rC)(this,{playerID:l.LO,xp:l.LO,backpackHandles:l.LO,neutralItemHandle:l.LO,stashHandles:l.LO,teleportScrollHandle:l.LO,backpack:l.Fl,neutralItem:l.Fl,player:l.Fl,respawnCooldown:l.Fl,stash:l.Fl,teleportScroll:l.Fl})}get backpack(){return this.backpackHandles.map((e=>this.replay.items.get(e)))}get color(){return p.PS[this.playerID]}get name(){return g[this.refname].localized_name}get neutralItem(){return this.replay.items.get(this.neutralItemHandle)}get player(){return this.replay.players.byID.get(this.playerID)}get refname(){return this.internalName}get respawnCooldown(){return this.player?.respawnCooldown}get stash(){return this.stashHandles.map((e=>this.replay.items.get(e)))}get teleportScroll(){return this.replay.items.get(this.teleportScrollHandle)}},F=class extends h{constructor(e,...t){super(e,...t),this.acquireTime=null,this.charges=null,this.cooldown=new c(e),this.level=null,this.manaCost=null,(0,l.rC)(this,{acquireTime:l.LO,charges:l.LO,cooldown:l.LO,level:l.LO,manaCost:l.LO,annotation:l.Fl,name:l.Fl})}get annotation(){const{refname:e}=this;return"item_aegis"===e?(0|300-(this.replay.game.time-this.acquireTime))+"s":"item_black_king_bar"===e?11-this.level+"s":null}get name(){return f[this.refname.replace("item_","")].dname}},I=class extends h{constructor(e,...t){super(e,...t),this.id=null,this.name=null,this.heroID=null,this.teamID=null,this.steamID=null,this.kills=0,this.assists=0,this.deaths=0,this.isBot=!1,this.isBroadcaster=!1,this.camera=new class{constructor(){this.position=new u,(0,l.rC)(this,{position:l.LO,relX:l.Fl,relY:l.Fl})}get relX(){return this.position.relX}get relY(){return this.position.relY+.05}},this.respawnCooldown=new c(e),(0,l.rC)(this,{id:l.LO,name:l.LO,heroID:l.LO,teamID:l.LO,steamID:l.LO,kills:l.LO,assists:l.LO,deaths:l.LO,isBot:l.LO,isBroadcaster:l.LO,camera:l.LO,respawnCooldown:l.LO,color:l.Fl,hero:l.Fl,index:l.Fl,team:l.Fl})}get color(){return p.PS[this.id]}get hero(){return this.replay.units.get(this.heroID)}get index(){return String(this.id).padStart(4,"0")}get isPlayer(){return this.teamID===p.$e||this.teamID===p.nc}get isSpectator(){return this.teamID===p.x3}get team(){return this.replay.teams.byID.get(this.teamID)}},S=class extends h{constructor(...e){super(...e),this.id=null,this.name=null,this.kills=0,this.proID=null,(0,l.rC)(this,{id:l.LO,name:l.LO,kills:l.LO,proID:l.LO,heroes:l.Fl,players:l.Fl,units:l.Fl})}get heroes(){return this.players.map((e=>e.hero)).filter(Boolean)}get players(){return this.replay.players.filter((e=>e.teamID===this.id)).sort(((e,t)=>e.id-t.id))}get units(){return this.replay.units.filter((e=>e.teamID===this.id))}},O={CDOTA_BaseNPC:"processUnit",CDOTA_BaseNPC_Additive:"processUnit",CDOTA_BaseNPC_Barracks:"processBuilding",CDOTA_BaseNPC_Clinkz_Skeleton_Army:"processUnit",CDOTA_BaseNPC_Creature:"processUnit",CDOTA_BaseNPC_Creep_Lane:"processUnit",CDOTA_BaseNPC_Creep_Neutral:"processUnit",CDOTA_BaseNPC_Creep_Siege:"processUnit",CDOTA_BaseNPC_Creep:"processUnit",CDOTA_BaseNPC_Fort:"processBuilding",CDOTA_BaseNPC_Invoker_Forged_Spirit:"processUnit",CDOTA_BaseNPC_ShadowShaman_SerpentWard:"processUnit",CDOTA_BaseNPC_Tower:"processBuilding",CDOTA_BaseNPC_Tusk_Sigil:"processUnit",CDOTA_BaseNPC_Venomancer_PlagueWard:"processUnit",CDOTA_BaseNPC_Warlock_Golem:"processUnit",CDOTA_BaseNPC_Watch_Tower:"processBuilding",CDOTA_DarkWillow_Creature:"processUnit",CDOTA_Item_Physical:"processCollectable",CDOTA_Item_Rune:"processCollectable",CDOTA_Item_RuneSpawner:null,CDOTA_Item_RuneSpawner_Bounty:null,CDOTA_Item_RuneSpawner_Powerup:null,CDOTA_Item:"processItem",CDOTA_NPC_Lich_Ice_Spire:"processUnit",CDOTA_NPC_Observer_Ward_TrueSight:"processUnit",CDOTA_NPC_Observer_Ward:"processUnit",CDOTA_NPC_Sentry_Ward:"processUnit",CDOTA_NPC_Techies_Minefield_Sign:"processUnit",CDOTA_NPC_TechiesMines:"processUnit",CDOTA_NPC_Treant_EyesInTheForest:"processUnit",CDOTA_NPC_WitchDoctor_Ward:"processUnit",CDOTA_PlayerResource:"processPlayerResource",CDOTA_Unit_Brewmaster_PrimalEarth:"processUnit",CDOTA_Unit_Brewmaster_PrimalFire:"processUnit",CDOTA_Unit_Brewmaster_PrimalStorm:"processUnit",CDOTA_Unit_Brewmaster_PrimalVoid:"processUnit",CDOTA_Unit_Broodmother_Spiderling:"processUnit",CDOTA_Unit_Broodmother_Web:"processUnit",CDOTA_Unit_Courier:"processCourier",CDOTA_Unit_Earth_Spirit_Stone:"processUnit",CDOTA_Unit_Elder_Titan_AncestralSpirit:"processUnit",CDOTA_Unit_Hero_Beastmaster_Boar:"processUnit",CDOTA_Unit_Hero_Beastmaster_Hawk:"processUnit",CDOTA_Unit_IngisFatuus:"processUnit",CDOTA_Unit_Roshan:"processUnitWithInventory",CDOTA_Unit_SpiritBear:"processUnitWithInventory",CDOTA_Unit_Undying_Tombstone:"processUnit",CDOTA_Unit_Undying_Zombie:"processUnit",CDOTA_Unit_VisageFamiliar:"processUnit",CDOTA_Unit_ZeusCloud:"processUnit",CDOTABaseAbility:"processAbility",CDOTAGamerulesProxy:"processGameRules",CDOTAPlayer:"processPlayer",CDOTATeam:"processTeam"},A=[{startsWith:"CDOTA_Ability_",method:"processAbility"},{startsWith:"CDOTA_Item_",method:"processItem"},{startsWith:"CDOTA_Unit_Hero_",method:"processHero"}];var U=a(74),L=a(2129);const M=r.ZP.div`
  position: absolute;
  bottom: 1px;
  right: 3px;
  font-size: 0.85em;

  ${e=>"mana"===e.type&&r.iv`
    color: #65D9F7;
  `}
`,N=e=>{const{type:t,value:a}=e;return s.createElement(M,{type:t},a)},z=r.ZP.div`
  ${e=>!e.active&&r.iv`
    filter: grayscale(100%) brightness(80%);

    ${e.translucentWhenInactive&&r.iv`
      opacity: 0.8;
    `}
  `}
`,V=r.ZP.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`,Z=e=>{const{children:t,remaining:a}=e,r=a>0;return s.createElement(s.Fragment,null,r&&s.createElement(V,null,Math.ceil(a)),s.createElement(z,{active:!r},t))};var H=a(3841);const $=r.ZP.div`
  position: relative;
  width: 60px;
  height: 60px;
  border: 2px solid #333;
  border-color: #444 #333 #333 #444;
  outline: 1px solid #111;
  background: black;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`,R=(0,U.P)((e=>{const{className:t,ability:a}=e;return s.createElement($,{className:t},a&&s.createElement(Z,{remaining:a.cooldown.remaining},a.manaCost>0&&s.createElement(N,{type:"mana",value:a.manaCost}),s.createElement(H.tc,{refname:a.refname})))})),W=r.ZP.div`
  position: absolute;
  z-index: 1;
`,G=r.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);

  span {
    margin: 5px;
  }
`,X=r.ZP.div`
  position: relative;
  margin: 4px 0px 0px;
  background: rgba(0, 0, 0, .4);
  border-radius: 4px;
  text-align: center;

  ${e=>"default"===e.size&&r.iv`
    height: 25px;

    ${W} {
      border-radius: 4px;
      top: 1px;
      bottom: 1px;
      left: 1px;
      right: 1px;
    }
  `}

  ${e=>"mini"===e.size&&r.iv`
    height: 3px;
    margin: 1px auto;

    ${W} {
      height: 100%;
    }
  `}
`,Y=e=>{let{color:t}=e;const{max:a,value:r,size:n="default",teamID:i,type:l}=e,o=r/a*100|0;return"health"===l?t=p.ct[i]:"mana"===l&&(t="#466DDC"),s.createElement(X,{size:n},"default"===n&&a>0&&s.createElement(G,null,0|r,s.createElement("span",null,"/"),0|a),s.createElement(W,{style:{background:t,width:`${o}%`}}))};var j=a(1990),q=(a(9535),a(1690)),K=a(1823),Q=a(9649);const J=r.ZP.div`
  position: relative;
  width: 50px;
  height: 38px;
  border: 1px solid #333;
  border-color: #333 #444 #444 #333;
  background: black;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  ${e=>e.rounded&&r.iv`
    width: 38px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 50px;
      transform: translate(-6px, 0);
    }
  `}
`,ee=(0,U.P)((e=>{const{className:t,item:a,rounded:r=!1}=e;return s.createElement(J,{className:t,rounded:r},a&&s.createElement(Z,{remaining:a.cooldown.remaining},a.charges>0&&s.createElement(N,{value:a.charges}),a.manaCost>0&&s.createElement(N,{type:"mana",value:a.manaCost}),a.annotation&&s.createElement(N,{value:a.annotation}),s.createElement(H.Ji,{refname:a.refname})))})),te=(0,r.ZP)(Q.U)`
  align-content: flex-start;
  margin: 9px;

  ${J} {
    margin: 1px;
  }
`,ae=(0,U.P)((e=>{const{items:t,wrap:a}=e;return s.createElement(te,{wrap:a},t.map(((e,t)=>s.createElement(ee,{key:t,item:e}))))})),se=ee,re=r.ZP.div`
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

    ${e=>"small"===e.size&&r.iv`
      font-size: 0.7em;
    `}
  }
`,ne=e=>{const{children:t,size:a="default",xp:r}=e;let n=20,i=3;"small"===a&&(n=10,i=2);const l=b[t-1],o=b[t],m=o?(r-l)/(o-l):1,d=n-i,c=2*d*Math.PI,h=c-m*c;return s.createElement(re,{radius:n,size:a},s.createElement("svg",{height:2*n,width:2*n},s.createElement("circle",{stroke:"#FFCC00",fill:"transparent",strokeWidth:i,strokeDasharray:`${c} ${c}`,style:{strokeDashoffset:h},r:d,cx:n,cy:n})),s.createElement("span",null,t))},ie=s.memo(ne);var le=a(5036);a(1264),a(7318),a(2096);const oe=r.ZP.div`
  height: 3px;
  border-bottom: 1px solid black;
`,me=e=>{const{color:t}=e;return s.createElement(oe,{style:{background:t}})},de=s.memo(me);var ce=a(6689),he=a(8588);const _e=r.ZP.div`
  width: 25px;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, 50%);
  pointer-events: none;

  img {
    display: block;
  }
`,pe=(0,U.P)((e=>{const{selected:t,unit:a}=e,{isDead:r,position:{relX:n,relY:i}}=a,l=a instanceof B;return r?null:s.createElement(_e,{selected:t,style:{left:100*n+"%",bottom:100*i+"%"}},l&&s.createElement(H.mZ,{refname:a.refname,variant:"icon"}))})),ue=r.ZP.div`
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

  ${_e} {
    z-index: 2;
  }
`,ge=r.ZP.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 100%;

  > img {
    display: block;
    transform: translate(-50%, 50%);
  }
`,fe=r.ZP.div`
  position: absolute;
  z-index: 100;
  background: rgba(255, 255, 255, .45);
  pointer-events: none;
  transform: translate(-50%, 50%);
`,be=(0,U.P)((e=>{const{camera:t,isFreeCamera:a,selectedUnit:r,setFreeCamera:n,units:i}=e,[l,o]=(0,s.useState)(!1),m=(0,s.useRef)(null),d=(0,s.useCallback)((e=>{if(e.preventDefault(),!a)return;o(!0);const{width:t,height:s}=m.current,r=m.current.getBoundingClientRect(),i=e.clientX-r.x-t/2,l=e.clientY-r.y-s/2;n((e=>({...e,relX:i/t,relY:-l/s})))}),[a,n]),c=(0,s.useCallback)((e=>{e.preventDefault(),a&&o(!1)}),[a,o]),h=(0,s.useCallback)((e=>{if(!a||!l)return;const{movementX:t,movementY:s}=e,{width:r,height:i}=m.current;n((e=>({...e,relX:e.relX+t/r,relY:e.relY+-s/i})))}),[l,a,n]),_=i.filter((e=>e instanceof B));return s.createElement(ue,{onMouseDown:d,onMouseUp:c,onMouseMove:h,onMouseOut:c},s.createElement(ge,null,s.createElement("img",{ref:m,src:"./images/minimap/7.23.webp",draggable:"false",alt:"Dota 2 minimap"}),s.createElement(fe,{style:{left:100*t.relX+"%",bottom:100*t.relY+"%",width:100*t.width+"%",height:100*t.height+"%"}}),_.map((e=>s.createElement(pe,{key:e.handle,selected:r===e,unit:e})))))})),ye=r.ZP.div`
  padding: 7px 7px;
  position: absolute;
  top: 54px;
  right: 10px;
  z-index: 6;
  background: rgba(0, 0, 0, .5);
  text-align: center;
`,ve=(0,U.P)((e=>{const{label:t,players:a}=e;return a.length?s.createElement("optgroup",{label:t},a.map((e=>s.createElement("option",{key:e.id,value:e.id},e.hero?.name||e.name)))):null})),we=(0,U.P)((e=>{const{cameraID:t,players:a,setCameraID:r}=e,n=a.filter((e=>e.teamID===p.$e)),i=a.filter((e=>e.teamID===p.nc)),l=a.filter((e=>e.isBroadcaster)),o=(0,s.useCallback)((e=>{r(+e.target.value)}),[r]);return s.createElement(ye,null,s.createElement("label",null,s.createElement("span",null,"Camera: "),s.createElement("select",{onChange:o,value:t},s.createElement("option",{value:-1},"Free"),s.createElement(ve,{label:"Radiant",players:n}),s.createElement(ve,{label:"Dire",players:i}),s.createElement(ve,{label:"Broadcasters",players:l}))))})),Ce=(0,r.ZP)(Q.g)`
  margin: 11px 6px 14px;
  justify-content: space-between;
`,ke=r.ZP.div`
  flex: 1;
  min-width: 3px;
  max-width: 8px;
  height: 3px;
  margin: 0 3px;
  background: darkgray;
  box-shadow: 1px 1px 1px #111,
              -1px 1px 1px #111,
              1px -1px 1px #111,
              -1px -1px 1px #111;

  ${e=>e.acquired&&r.iv`
    background: #FFCC00;
  `}
`,De=(0,U.P)((e=>{const{ability:t}=e,{level:a}=t,r=new Array(a).fill();return s.createElement(Ce,null,s.createElement(z,{active:a>=1},s.createElement(R,{ability:t})),s.createElement(Q.U,{justify:"center"},r.map(((e,t)=>s.createElement(ke,{key:t,acquired:!0})))))})),xe=(0,r.ZP)(Q.U)`
  flex: 1;
`,Pe=(0,U.P)((e=>{const{abilities:t=[]}=e;return s.createElement(xe,null,t.map((e=>!e.hidden&&s.createElement(De,{key:e.handle,ability:e}))))})),Te=(0,r.ZP)(Q.g)`
  position: relative;
  align-content: flex-start;
  width: 180px;
  padding-right: 50px;
`,Ee=r.ZP.div`
  position: absolute;
  top: 30px;
  right: 6px;
`,Be=r.ZP.div`
  position: absolute;
  top: 112px;
  right: 6px;
`,Fe=(0,U.P)((e=>{const{backpack:t,inventory:a,neutralItem:r,teleportScroll:n}=e;return s.createElement(Te,null,s.createElement(ae,{items:a,wrap:!0}),t&&s.createElement(z,{active:!1},s.createElement(ae,{items:t})),s.createElement(Ee,null,s.createElement(se,{item:r,rounded:!0})),s.createElement(Be,null,s.createElement(se,{item:n,rounded:!0})))})),Ie=s.memo(Fe),Se=r.ZP.div`
  color: #FFCC00;
  text-align: center;
  text-transform: uppercase;
`,Oe=e=>{const{children:t}=e;return s.createElement(Se,null,t)},Ae=s.memo(Oe),Ue=r.ZP.div`
  position: relative;
  width: 138px;
  cursor: pointer;

  img {
    width: 138px;
  }

  ${V} {
    font-size: 2em;
  }
`,Le=(0,U.P)((e=>{const{onClick:t,unit:a}=e,{isDead:r,respawnCooldown:n}=a,i=s.createElement(H.$i,{unit:a,variant:"portrait"}),l=n?s.createElement(Z,{remaining:n.remaining},i):s.createElement(z,{active:!r},i);return s.createElement(Ue,{onClick:t},l)})),Me=(0,r.ZP)(Q.U)`
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

  ${Se} {
    position: absolute;
    top: -25px;
    left: 69px;
    transform: translateX(-50%);
  }

  ${re} {
    position: absolute;
    left: 0;
    bottom: 75px;
    z-index: 1;
    transform: translateX(-50%);
  }

  ${Ue} {
    margin-right: 8px;
  }
`,Ne=(0,r.ZP)(Q.g)`
  min-width: 260px;
  margin: 0 10px;
`,ze=(0,U.P)((e=>{const{selectedUnit:t,setSelection:a}=e;if(!t)return null;const{handle:r,name:n,refname:i,hp:l,hpMax:o,mp:m,mpMax:d,level:c,teamID:h,xp:_,abilities:p,backpack:u,inventory:g,neutralItem:f,teleportScroll:b}=t,y=(0,s.useCallback)((()=>{a(r)}),[r,a]),v=t instanceof B;return s.createElement(Me,null,s.createElement(Ae,null,n),v&&s.createElement(ie,{xp:_},c),s.createElement(Le,{unit:t,onClick:y}),s.createElement(Ne,null,s.createElement(Pe,{abilities:p}),s.createElement(Y,{type:"health",value:l,max:o,teamID:h}),s.createElement(Y,{type:"mana",value:m,max:d})),g&&s.createElement(Ie,{backpack:u,inventory:g,neutralItem:f,teleportScroll:b}))})),Ve=(0,r.ZP)(Q.U)`
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

  ${j.S} {
    width: 50px;
  }
`,Ze=(0,U.P)((e=>{const{playing:t,replay:{lastTick:a,tick:r},requestTick:n,setPlaying:i}=e,l=(0,s.useCallback)((()=>{i(!t)}),[t,i]),o=(0,s.useCallback)((e=>{n(+e.target.value)}),[n]);return s.createElement(Ve,null,s.createElement(j.Z,{onClick:l},s.createElement(K.Z,{name:t?"pause":"play"})),s.createElement("input",{type:"range",min:0,max:a,step:1,value:r,onChange:o}),s.createElement("div",{style:{whiteSpace:"nowrap"}},s.createElement(he.Z,{time:r/30})," / ",s.createElement(he.Z,{time:a/30})))})),He=(0,r.ZP)(he.Z)`
  min-width: 70px;
  text-align: center;
`,$e=e=>s.createElement(He,e),Re=s.memo($e),We=r.ZP.div`
  position: relative;
  cursor: pointer;
  margin-left: 1px;

  &:last-child {
    margin-right: 1px;
  }
`,Ge=(0,U.P)((e=>{const{hero:t,setSelection:a}=e,{color:r,handle:n,hp:i,hpMax:l,mp:o,mpMax:m,refname:d,respawnCooldown:c,teamID:h}=t,_=(0,s.useCallback)((()=>{a(n)}),[n,a]);return s.createElement(We,{onClick:_},s.createElement(de,{color:r}),s.createElement(Z,{remaining:c.remaining},s.createElement(H.mZ,{refname:d,variant:"landscape"}),s.createElement(Y,{type:"health",size:"mini",value:i,max:l,teamID:h}),s.createElement(Y,{type:"mana",size:"mini",value:o,max:m})))})),Xe=(0,r.ZP)(Q.U)`
  img {
    display: block;
  }
`,Ye=(0,U.P)((e=>{const{heroes:t,setSelection:a}=e;return s.createElement(Xe,null,t.map((e=>s.createElement(Ge,{key:e.handle,hero:e,setSelection:a}))))})),je=r.ZP.div`
  font-weight: bold;
  min-width: 50px;
  text-align: center;
`,qe=e=>{const{value:t}=e;return s.createElement(je,null,t)},Ke=s.memo(qe),Qe=(0,r.ZP)(Q.U)`
  align-items: center;
  min-height: 46px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, .5);
`,Je=(0,U.P)((e=>{const{game:{clockTime:t},setSelection:a,teams:r}=e,n=r.byID.get(p.$e),i=r.byID.get(p.nc);return n&&i?s.createElement(Qe,null,n.proID>0&&s.createElement(ce.Z,{alt:n.name,teamID:n.proID}),s.createElement(Ye,{heroes:n.heroes,setSelection:a}),s.createElement(Ke,{value:n.kills}),s.createElement(Re,{time:t}),s.createElement(Ke,{value:i.kills}),s.createElement(Ye,{heroes:i.heroes,setSelection:a}),i.proID>0&&s.createElement(ce.Z,{alt:i.name,teamID:i.proID})):null})),et=e=>{const{children:t}=e;return s.createElement(s.Fragment,null,t)},tt=r.ZP.div`
  position: absolute;
  // Adding an additional 8% to place the camera a bit higher up for comfort
  bottom: 58%;
  left: 50%;
`,at=r.ZP.div`
  position: relative;

  > img {
    position: relative;
    width: 4000px;
    height: 4000px;
    // Minor offsets here to get the map to align with actual entities
    transform: translate(-50.2%, 50.5%)
  }
`,st=r.ZP.div`
  width: 300px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  text-align: center;

  p {
    margin: 10px 10px;
  }
`,rt=s.forwardRef(((e,t)=>{const{children:a,style:r}=e;return s.createElement(tt,{style:r},s.createElement(at,null,s.createElement(st,null,s.createElement("p",null,"Loading the Dota 2 map background..."),s.createElement("p",null,"If it never loads, your browser may not support the WebP image format."),s.createElement("p",null,"¯\\_(ツ)_/¯")),s.createElement("img",{ref:t,src:"./images/map/7.23.webp",alt:"Dota 2 map"}),a))})),nt=(0,r.ZP)(z)`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  ${e=>"hero"===e.type&&r.iv`
    padding: 10px;
    z-index: 2;
  `}
  ${e=>"building"===e.type&&r.iv`
    padding: 5px;
  `}
  border: 3px solid ${e=>e.color}DD;
  ${e=>e.selected&&r.iv`
    border-color: white;
    z-index: 3;
  `}
  position: absolute;
  transform: translate(-50%, 50%);
  background: ${e=>e.color}AA;
  box-shadow: 1px 1px 1px #111;
  cursor: pointer;

  img {
    display: block;
  }

  ${re} {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-20%, 20%);
  }
`,it=r.ZP.div`
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
`,lt=(0,U.P)((e=>{const{selected:t,unit:a}=e;let{color:r,rotation:n}=a;return null===n?null:(t&&(r="white"),n*=-1,s.createElement(it,{style:{color:r,transform:`rotate(${n}deg`}}))})),ot=(0,U.P)((e=>{const{selected:t,setSelection:a,unit:r}=e,{color:n,handle:i,isDead:l,isWaitingToSpawn:o,position:{relX:m,relY:d}}=r,c=(0,s.useCallback)((()=>{a(i)}),[i,a]);if(o)return null;const h=r instanceof B;return s.createElement(nt,{active:!l,translucentWhenInactive:!0,color:n,onClick:c,selected:t,style:{left:100*m+"%",bottom:100*d+"%"},type:r.type},s.createElement(lt,{selected:t,unit:r}),s.createElement(H.$i,{unit:r,variant:"icon"}),h&&s.createElement(ie,{xp:r.xp,size:"small"},r.level))})),mt=r.ZP.div`
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
`,dt=(0,U.P)((e=>{const{camera:t,isFreeCamera:a,selectedUnit:r,setFreeCamera:n,setSelection:i,units:l}=e,[o,m]=(0,s.useState)(!1),d=(0,s.useRef)(null),[c]=(0,L.dz)();(0,s.useEffect)((()=>{const e=d.current?.width,t=d.current?.height;n((a=>({...a,width:e?c.width/e:0,height:t?c.height/t:0})))}),[n,c]);const h=(0,s.useCallback)((e=>e.preventDefault()),[]),_=(0,s.useCallback)((e=>{e.preventDefault(),a&&m(!0)}),[a,m]),p=(0,s.useCallback)((e=>{e.preventDefault(),a&&m(!1)}),[a,m]),u=(0,s.useCallback)((e=>{if(!a||!o)return;const{movementX:t,movementY:s}=e,{width:r,height:i}=d.current;n((e=>({...e,relX:e.relX+-t/r,relY:e.relY+s/i})))}),[o,a,n]),{relX:g,relY:f}=t;return s.createElement(mt,{dragging:o,onDoubleClick:h,onMouseDown:_,onMouseUp:p,onMouseMove:u},s.createElement(rt,{ref:d,style:{transform:`translate(${100*-g}%, ${100*f}%)`}},l.map((e=>s.createElement(ot,{key:e.handle,unit:e,selected:r===e,setSelection:i})))))})),ct=r.ZP.div`
  width: 100%;
  height: 100%;
`,ht=(0,U.P)((({replay:e})=>{const{camera:t,cameraID:a,isFreeCamera:r,playing:n,requestTick:i,selectedUnit:l,setCameraID:o,setFreeCamera:m,setPlaying:d,setSelection:c}=(0,L._P)(e);return s.createElement(ct,null,s.createElement(et,null,s.createElement(be,{camera:t,isFreeCamera:r,setFreeCamera:m,units:e.units}),s.createElement(we,{cameraID:a,players:e.players,setCameraID:o}),l&&s.createElement(ze,{key:l.handle,selectedUnit:l,setSelection:c}),s.createElement(Ze,{playing:n,replay:e,setPlaying:d,requestTick:i}),s.createElement(Je,{game:e.game,teams:e.teams,setSelection:c})),s.createElement(dt,{camera:t,isFreeCamera:r,selectedUnit:l,setFreeCamera:m,setSelection:c,units:e.units}))}));var _t=a(2954);const pt=(0,r.ZP)(le.Z)`
  position: absolute;
  top: 16px;
  right: 15px;
  z-index: 5;

  i {
    position: relative;
    top: 1px;
  }
`,ut=r.ZP.div`
  text-shadow: 1px 1px 1px #111,
               -1px 1px 1px #111,
               1px -1px 1px #111,
               -1px -1px 1px #111;
`,gt=()=>{const e=(0,n.k6)(),{id:t}=(0,n.UO)(),a=/^\d+$/.test(t),[r,c]=(0,s.useState)(null);return(0,L.ZQ)(`Match ${t}`),(0,L.bd)((async()=>{let s;if(s=a?await _t.Z.models.Match.query.get({matchID:+t}):await _t.Z.models.Match.query.get({uuid:t}),!s)return void e.push("/");const r=await s.replay.blob.arrayBuffer();c(new class{constructor(e){this.emitter=new i,this.parser=new o.default(e),this.tick=-1,this.tickInterval=null,this.lastTick=this.parser.lastTick,this.abilities=new d.Yw("handle"),this.items=new d.Yw("handle"),this.players=new d.Yw("handle",{byID:"id"}),this.teams=new d.Yw("handle",{byID:"id"}),this.units=new d.Yw("handle"),this.game=new class{constructor(){this.phase=null,this.preStartTime=null,this.startTime=null,this.stateTransitionTime=null,this.time=null,(0,l.rC)(this,{phase:l.LO,preStartTime:l.LO,startTime:l.LO,stateTransitionTime:l.LO,time:l.LO,clockTime:l.Fl})}get clockTime(){return this.startTime?this.time-this.startTime:this.preStartTime?this.time-this.stateTransitionTime:null}},this.onEntities=this.onEntities.bind(this),this.onTick=this.onTick.bind(this),this.parser.on("warn",this.emitter.emit.bind(this.emitter,"warn")),this.parser.on("entities",this.onEntities),this.parser.on("tick",this.onTick),this.seek=this.parser.seek.bind(this.parser),this.start=this.parser.start.bind(this.parser),this.step=this.parser.step.bind(this.parser),(0,l.rC)(this,{tick:l.LO,tickInterval:l.LO,lastTick:l.LO,abilities:l.LO,items:l.LO,players:l.LO,teams:l.LO,units:l.LO,game:l.LO,jump:l.aD,seek:l.aD,start:l.aD,step:l.aD})}entityNameFor(e){const t=e.get("m_pEntity.m_nameStringableIndex");return this.parser.stringTables.get("EntityNames").entries[t].key}jump(e){this.parser.off("entities",this.onEntities),this.parser.off("tick",this.onTick),this.parser.seek(e),this.parser.on("entities",this.onEntities),this.parser.on("tick",this.onTick),this.players.clear(),this.teams.clear(),this.units.clear();const t=this.parser.entities.map((e=>({entity:e,delta:e.snapshot,event:m._V.CREATED})));this.onTick(this.parser.tick),this.onEntities(t)}jumpTo(e){for(;this.game.phase!==e&&this.parser.parsing;)this.step()}on(...e){this.emitter.on(...e)}off(...e){this.emitter.remove(...e)}onEntities(e){for(const{entity:t,delta:a,event:s}of e){const e=t.class.name;let r=O[e];void 0===r&&(r=A.find((t=>e.startsWith(t.startsWith)))?.method,O[e]=r||null),r&&this[r](t,a,s)}this.emitter.emit("update")}onTick(e){this.tick=e,this.tickInterval=this.parser.tickInterval,this.emitter.emit("update")}processAbility(e,t,a){const s=e.handle;let r=this.abilities.get(s);r||(r=new _(this,e,this.entityNameFor(e)),this.abilities.add(r)),r&&a&m._V.DELETED&&this.abilities.delete(r),"m_fCooldown"in t&&(r.cooldown.value=t.m_fCooldown),"m_flCooldownLength"in t&&(r.cooldown.duration=t.m_flCooldownLength),"m_bHidden"in t&&(r.hidden=t.m_bHidden),"m_iLevel"in t&&(r.level=t.m_iLevel),"m_iManaCost"in t&&(r.manaCost=t.m_iManaCost)}processBuilding(e,t,a){return this.processUnit(e,t,a,{class:P,hasRotation:!1})}processCourier(e,t,a){const s=this.processUnitWithInventory(e,t,a,{class:E});s&&"m_bFlyingCourier"in t&&(s.isFlying=t.m_bFlyingCourier)}processCollectable(e,t,a){}processGameRules(e,t){const{game:a}=this;"m_pGameRules.m_nGameState"in t&&(a.phase=t["m_pGameRules.m_nGameState"]),"m_pGameRules.m_flPreGameStartTime"in t&&(a.preStartTime=0|t["m_pGameRules.m_flPreGameStartTime"]),"m_pGameRules.m_flGameStartTime"in t&&(a.startTime=0|t["m_pGameRules.m_flGameStartTime"]),"m_pGameRules.m_flStateTransitionTime"in t&&(a.stateTransitionTime=0|t["m_pGameRules.m_flStateTransitionTime"]),"m_pGameRules.m_fGameTime"in t&&(a.time=0|t["m_pGameRules.m_fGameTime"])}processHero(e,t,a){const s=this.processUnitWithInventory(e,t,a,{class:B});s&&("m_iPlayerID"in t&&(s.playerID=t.m_iPlayerID),"m_iCurrentXP"in t&&(s.xp=t.m_iCurrentXP),"m_hItems.0006"in t&&(s.backpackHandles[0]=t["m_hItems.0006"]),"m_hItems.0007"in t&&(s.backpackHandles[1]=t["m_hItems.0007"]),"m_hItems.0008"in t&&(s.backpackHandles[2]=t["m_hItems.0008"]),"m_hItems.0009"in t&&(s.stashHandles[0]=t["m_hItems.0009"]),"m_hItems.0010"in t&&(s.stashHandles[1]=t["m_hItems.0010"]),"m_hItems.0011"in t&&(s.stashHandles[2]=t["m_hItems.0011"]),"m_hItems.0012"in t&&(s.stashHandles[3]=t["m_hItems.0012"]),"m_hItems.0013"in t&&(s.stashHandles[4]=t["m_hItems.0013"]),"m_hItems.0014"in t&&(s.stashHandles[5]=t["m_hItems.0014"]),"m_hItems.0015"in t&&(s.teleportScrollHandle=t["m_hItems.0015"]),"m_hItems.0016"in t&&(s.neutralItemHandle=t["m_hItems.0016"]))}processItem(e,t,a){const s=e.handle;let r=this.items.get(s);r||(r=new F(this,e,this.entityNameFor(e)),this.items.add(r)),r&&a&m._V.DELETED&&this.items.delete(r),"m_flAssembledTime"in t&&(r.acquireTime=t.m_flAssembledTime),"m_iCurrentCharges"in t&&(r.charges=t.m_iCurrentCharges),"m_fCooldown"in t&&(r.cooldown.value=t.m_fCooldown),"m_flCooldownLength"in t&&(r.cooldown.duration=t.m_flCooldownLength),"m_iLevel"in t&&(r.level=t.m_iLevel),"m_iManaCost"in t&&(r.manaCost=t.m_iManaCost)}processPlayer(e,t,a){const s=e.handle;let r=this.players.get(s);r||(r=new I(this,e),r.id=e.get("m_iPlayerID"),this.players.add(r)),r&&a&m._V.DELETED?this.players.delete(r):("m_hAssignedHero"in t&&(r.heroID=t.m_hAssignedHero),"m_iTeamNum"in t&&(r.teamID=t.m_iTeamNum),"CBodyComponent.m_cellX"in t&&(r.camera.position.cellX=t["CBodyComponent.m_cellX"]),"CBodyComponent.m_cellY"in t&&(r.camera.position.cellY=t["CBodyComponent.m_cellY"]),"CBodyComponent.m_vecX"in t&&(r.camera.position.vecX=t["CBodyComponent.m_vecX"]),"CBodyComponent.m_vecY"in t&&(r.camera.position.vecY=t["CBodyComponent.m_vecY"]))}processPlayerResource(e,t){for(const e of this.players){if(-1===e.id)continue;const a=`m_vecPlayerData.${e.index}`;`${a}.m_iszPlayerName`in t&&(e.name=t[`${a}.m_iszPlayerName`]),`${a}.m_iPlayerSteamID`in t&&(e.steamID=t[`${a}.m_iPlayerSteamID`]),`${a}.m_bFakeClient`in t&&(e.isBot=t[`${a}.m_bFakeClient`]),`${a}.m_bIsBroadcaster`in t&&(e.isBroadcaster=t[`${a}.m_bIsBroadcaster`]);const s=`m_vecPlayerTeamData.${e.index}`;`${s}.m_iKills`in t&&(e.kills=t[`${s}.m_iKills`]),`${s}.m_iDeaths`in t&&(e.deaths=t[`${s}.m_iDeaths`]),`${s}.m_iAssists`in t&&(e.assists=t[`${s}.m_iAssists`]),`${s}.m_iRespawnSeconds`in t&&(e.respawnCooldown.value=t[`${s}.m_iRespawnSeconds`])}}processTeam(e,t,a){const s=e.handle;let r=this.teams.get(s);if(r||(r=new S(this,e),r.id=e.get("m_iTeamNum"),r.proID=e.get("m_unTournamentTeamID"),this.teams.add(r)),r&&a&m._V.DELETED)throw new Error("no support for team deletion");"m_szTeamname"in t&&(r.name=t.m_szTeamname),"m_iHeroKills"in t&&(r.kills=t.m_iHeroKills)}processUnit(e,t,a,{class:s=x,hasRotation:r=!0}={}){const n=e.handle;let i=this.units.get(n);return i||(i=new s(this,e,this.entityNameFor(e)),this.units.add(i)),i&&a&m._V.DELETED?(this.units.delete(i),null):("CBodyComponent.m_hModel"in t&&(i.modelID=t["CBodyComponent.m_hModel"]),"m_iTeamNum"in t&&(i.teamID=t.m_iTeamNum),"CBodyComponent.m_cellX"in t&&(i.position.cellX=t["CBodyComponent.m_cellX"]),"CBodyComponent.m_cellY"in t&&(i.position.cellY=t["CBodyComponent.m_cellY"]),"CBodyComponent.m_vecX"in t&&(i.position.vecX=t["CBodyComponent.m_vecX"]),"CBodyComponent.m_vecY"in t&&(i.position.vecY=t["CBodyComponent.m_vecY"]),r&&"CBodyComponent.m_angRotation"in t&&(i.rotation=t["CBodyComponent.m_angRotation"][1]),"m_iCurrentLevel"in t&&(i.level=t.m_iCurrentLevel),"m_iHealth"in t&&(i.hp=t.m_iHealth),"m_iMaxHealth"in t&&(i.hpMax=t.m_iMaxHealth),"m_flMana"in t&&(i.mp=t.m_flMana),"m_flMaxMana"in t&&(i.mpMax=t.m_flMaxMana),"m_bIsWaitingToSpawn"in t&&(i.isWaitingToSpawn=t.m_bIsWaitingToSpawn),"m_hOwnerEntity"in t&&(i.ownerHandle=t.m_hOwnerEntity),"m_hAbilities.0000"in t&&(i.abilityHandles[0]=t["m_hAbilities.0000"]),"m_hAbilities.0001"in t&&(i.abilityHandles[1]=t["m_hAbilities.0001"]),"m_hAbilities.0002"in t&&(i.abilityHandles[2]=t["m_hAbilities.0002"]),"m_hAbilities.0003"in t&&(i.abilityHandles[3]=t["m_hAbilities.0003"]),"m_hAbilities.0004"in t&&(i.abilityHandles[4]=t["m_hAbilities.0004"]),"m_hAbilities.0005"in t&&(i.abilityHandles[5]=t["m_hAbilities.0005"]),"m_hAbilities.0006"in t&&(i.abilityHandles[6]=t["m_hAbilities.0006"]),"m_hAbilities.0007"in t&&(i.abilityHandles[7]=t["m_hAbilities.0007"]),"m_hAbilities.0008"in t&&(i.abilityHandles[8]=t["m_hAbilities.0008"]),"m_hAbilities.0009"in t&&(i.abilityHandles[9]=t["m_hAbilities.0009"]),"m_hAbilities.0010"in t&&(i.abilityHandles[10]=t["m_hAbilities.0010"]),"m_hAbilities.0011"in t&&(i.abilityHandles[11]=t["m_hAbilities.0011"]),"m_hAbilities.0012"in t&&(i.abilityHandles[12]=t["m_hAbilities.0012"]),"m_hAbilities.0013"in t&&(i.abilityHandles[13]=t["m_hAbilities.0013"]),"m_hAbilities.0014"in t&&(i.abilityHandles[14]=t["m_hAbilities.0014"]),"m_hAbilities.0015"in t&&(i.abilityHandles[15]=t["m_hAbilities.0015"]),"m_hAbilities.0016"in t&&(i.abilityHandles[16]=t["m_hAbilities.0016"]),i)}processUnitWithInventory(e,t,a,{class:s=T}={}){const r=this.processUnit(e,t,a,{class:s});return r?("m_hItems.0000"in t&&(r.inventoryHandles[0]=t["m_hItems.0000"]),"m_hItems.0001"in t&&(r.inventoryHandles[1]=t["m_hItems.0001"]),"m_hItems.0002"in t&&(r.inventoryHandles[2]=t["m_hItems.0002"]),"m_hItems.0003"in t&&(r.inventoryHandles[3]=t["m_hItems.0003"]),"m_hItems.0004"in t&&(r.inventoryHandles[4]=t["m_hItems.0004"]),"m_hItems.0005"in t&&(r.inventoryHandles[5]=t["m_hItems.0005"]),r):null}}(r))}),(()=>{}),[t,a]),r?s.createElement(ut,null,s.createElement(pt,{to:"/"},s.createElement(K.Z,{name:"times"})," Close replay"),s.createElement(q.Z,{context:"replay"},s.createElement(ht,{replay:r}),";")):null}},3887:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>l});var s=a(7294),r=a(5977),n=a(7318),i=a(2743);const l=()=>{(0,i.Z)("Find match");const e=(0,r.k6)(),t=(0,s.useCallback)((()=>{e.push("/")}),[e]);return s.createElement(n.Z,{onClose:t},s.createElement("h2",null,"Find match"),"Finding matches by ID is not yet implemented")}},4088:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var s=a(7294),r=a(5977),n=a(9535),i=a(8098),l=a(7318),o=a(2096);const m="PBDEMS2\0";var d=a(2743);const c=()=>{(0,d.Z)("Select replay");const e=(0,r.k6)(),[t,a]=(0,s.useState)(null),[c,h]=(0,s.useState)(null),_=(0,s.useCallback)((()=>{e.push("/")}),[e]);return s.createElement(l.Z,{onClose:_},s.createElement("h2",null,"Select local replay file"),s.createElement("p",null,s.createElement("input",{type:"file",onChange:async e=>{const t=e.target.files[0];let s=null;if(t)try{if(s=await(async e=>{const{length:t}=m;return!(e.size<t)&&await e.slice(0,m.length).text()===m})(t),s){const e=new i.Z;return await e.update(t),await e.save(),void _()}}catch(e){a(e)}h(s)},accept:".dem"})),t&&s.createElement(n.Z,{context:"database",error:t}),!1===c&&s.createElement(o.Z,{kind:"error"},"That is not a valid Dota 2 replay file :("),s.createElement("p",null,"The replay file you select is never uploaded to any server."))}}}]);