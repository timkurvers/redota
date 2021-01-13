(self.webpackChunk_timkurvers_redota=self.webpackChunk_timkurvers_redota||[]).push([[319],{4820:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Bs});var a=s(7294),i=s(5977),r=s(7187),n=s(8949),l=s(678);class o{constructor(e,t={}){this.keyProp=e,this.data=new Map,this.indices=Object.entries(t).map((([e,t])=>{const s=new Map;return this[e]=s,{accessor:e,prop:t,collection:s}}))}get size(){return this.data.size}add(e){this.data.set(e[this.keyProp],e);for(const{prop:t,collection:s}of this.indices){const a=e[t];s.set(a,e)}}get(e){return this.data.get(e)}delete(e){this.data.delete(e[this.keyProp]);for(const{prop:t,collection:s}of this.indices){const a=e[t];s.delete(a)}}clear(){this.data.clear();for(const{collection:e}of this.indices)e.clear()}filter(e){const t=[];for(const[s,a]of this.data)e(a,s)&&t.push(a);return t}find(e){for(const[t,s]of this.data)if(e(s,t))return s;return null}map(e){const t=[];for(const[s,a]of this.data)t.push(e(a,s));return t}*[Symbol.iterator](){for(const[,e]of this.data)yield e}}class h extends o{constructor(e,t={}){super(e,t),(0,n.rC)(this,{data:n.LO,size:n.Fl,get:n.LO,filter:n.LO,find:n.LO,map:n.LO,[Symbol.iterator]:n.LO,add:n.aD,delete:n.aD,clear:n.aD});for(const e of this.indices)(0,n.rC)(this,{[e.accessor]:n.LO}),e.collection=this[e.accessor]}}const c=o,{hasOwnProperty:d}={};var m=s(5878),u=s(8173),p=s(7529);const g=16384,f=["#3375FF","#66FFBF","#BF00BF","#F3F00B","#FF6B00","#FE86C2","#A1B447","#65D9F7","#008321","#A46900"],b={2:"#23B200",3:"#B21000",4:"#CAAA32"},y={CDOTA_BaseNPC_Barracks:"Barracks",CDOTA_BaseNPC_Creep_Lane:"Creep",CDOTA_BaseNPC_Creep_Neutral:"Neutral Creep",CDOTA_BaseNPC_Creep_Siege:"Siege Creep",CDOTA_BaseNPC_Fort:"Ancient",CDOTA_BaseNPC_Shop:"Shop",CDOTA_BaseNPC_Tower:"Tower",CDOTA_BaseNPC_Watch_Tower:"Outpost",CDOTA_NPC_Observer_Ward:"Observer Ward",CDOTA_NPC_Sentry_Ward:"Sentry Ward",CDOTA_Unit_Courier:"Courier",CDOTA_Unit_Roshan:"Roshan"},w=e=>e/g;class C{constructor(){this.state=new Array(8)}get(e){let t=this,s=0;for(let a=0;a<=e.last;++a){if(s=e.path[a],t.state.length<s+2)return null;if(a===e.last)return t.state[s];if(!(t.state[s]instanceof C))return null;t=t.state[s]}return null}set(e,t){let s=this,a=0;for(let i=0;i<=e.last;++i){a=e.path[i];const{length:r}=s.state;if(r<a+2){const e=[...s.state];e.length=Math.max(a+2,2*r),s.state=e}if(i===e.last)return void(s.state[a]instanceof C||(s.state[a]=t));s.state[a]instanceof C||(s.state[a]=new C),s=s.state[a]}}}const _=C,P=e=>e.read3BitNormal(),x=e=>e.readUint64LE(),v=e=>e.readBitFlag(),B=e=>e.readString(),D=e=>e.readVarUint32(),k=e=>e.readVarInt32(),F=e=>e.readCoord(),E=e=>e.readBitFloat(32),I=e=>e.readBitFloat(4),T=e=>e.readVarUint32()*(1/30),S=e=>e.readVarUint32(),O=e=>e.readVarUint64(),L=e=>e.readBitInt(1),N=()=>S,M=e=>{switch(e.encoder){case"fixed64":return x}return O},A=e=>{const t=new class{constructor(e,t,s,a){if(0===e||e>=32)throw this.noScale=!0,this.bitCount=32,new Error("quantized float with bitCount >= 32 not yet supported");this.noScale=!1,this.bitCount=e,this.offset=0,this.low=null!==s?s:0,this.high=null!==a?a:1,this.flags=null!==t?t:0,this.decMul=0,this.highLowMul=0,this.validateFlags();let i=1<<this.bitCount,r=0;if(0!=(1&this.flags)?(r=this.high-this.low,this.offset=r/i,this.high-=this.offset):0!=(2&this.flags)&&(r=this.high-this.low,this.offset=r/i,this.low+=this.offset),0!=(8&this.flags)){let e=this.high-this.low;e<1&&(e=1);const t=1<<Math.ceil(Math.log2(e));let s=this.bitCount;for(;!(1<<s>t);)s++;s>this.bitCount&&(this.bitCount=s,i=1<<this.bitCount),this.offset=t/i,this.high=this.low+t-this.offset}this.assignMultipliers(i),0!=(1&this.flags)&&this.quantize(this.low)===this.low&&(this.flags&=-2),0!=(2&this.flags)&&this.quantize(this.high)===this.high&&(this.flags&=-3),0!=(4&this.flags)&&0===this.quantize(0)&&(this.flags&=-5)}validateFlags(){if(0!==this.flags&&((0===this.low&&0!=(1&this.flags)||0===this.high&&0!=(2&this.flags))&&(this.flags&=-5),0===this.low&&0!=(4&this.flags)&&(this.flags|=1,this.flags&=-5),0===this.high&&0!=(4&this.flags)&&(this.flags|=2,this.flags&=-5),(this.low>0||this.high<0)&&(this.flags&=-5),0!=(8&this.flags)&&(this.flags&=-8),3==(3&this.flags)))throw new Error("roundup / rounddown flags are mutually exclusive")}assignMultipliers(e){const t=this.high-this.low;let s=0;s=32===this.bitCount?4294967294:(1<<this.bitCount)-1;let a=0;if(a=Math.abs(t)<=0?s:s/t,a*t>s||a*t>s){const e=[.9999,.99,.9,.8,.7];for(const i of e)if(a=s/t*i,!(a*t>s||a*t>s))break}if(this.highLowMul=a,this.decMul=1/(e-1),0===this.highLowMul)throw new Error("error computing high / low multiplier")}quantize(e){if(e<this.low){if(0==(2&this.flags))throw new Error("field tried to quantize an out of range value");return this.low}if(e>this.high){if(0==(1&this.flags))throw new Error("field tried to quantize an out of range value");return this.high}const t=(e-this.low)*this.highLowMul|0;return this.low+(this.high-this.low)*t*this.decMul}}(e.bitCount,e.encodeFlags,e.lowValue,e.highValue);return e=>0!=(1&t.flags)&&e.readBitFlag()?t.low:0!=(2&t.flags)&&e.readBitFlag()?t.high:0!=(4&t.flags)&&e.readBitFlag()?0:t.low+(t.high-t.low)*e.readBitInt(t.bitCount)*t.decMul},U=e=>{switch(e.encoder){case"coord":return F;case"simtime":return T;case"runetime":return I}const{bitCount:t}=e;return null===t||t<=0||t>=32?E:A(e)},V=e=>t=>{if(3===e&&"normal"===t.encoder)return P;const s=U(t);return t=>{const a=new Array(e);for(let i=0;i<e;++i)a[i]=s(t);return a}},z={float32:U,CNetworkedQuantizedFloat:A,Vector:V(3),Vector2D:V(2),Vector4D:V(4),uint64:M,QAngle:e=>{const{bitCount:t}=e;if("qangle_pitch_yaw"===e.encoder){const e=t;return t=>[t.readAngle(e),t.readAngle(e),0]}if(null!==t&&0!==t){const e=t;return t=>[t.readAngle(e),t.readAngle(e),t.readAngle(e)]}return e=>{const t=new Array(3),s=e.readBitFlag(),a=e.readBitFlag(),i=e.readBitFlag();return s&&(t[0]=e.readCoord()),a&&(t[1]=e.readCoord()),i&&(t[2]=e.readCoord()),t}},CHandle:N,CStrongHandle:M,CEntityHandle:N},H={bool:v,char:B,color32:S,int16:k,int32:k,int64:k,int8:k,uint16:S,uint32:S,uint8:S,CBodyComponent:L,CGameSceneNodeHandle:S,Color:S,CPhysicsComponent:L,CRenderComponent:L,CUtlString:B,CUtlStringToken:S,CUtlSymbolLarge:B},Z=e=>{const{baseType:t}=e.fieldType,s=z[t];return s?s(e):H[t]||D},$={CBodyComponent:!0,CEntityIdentity:!0,CPhysicsComponent:!0,CRenderComponent:!0,CDOTAGamerules:!0,CDOTAGameManager:!0,CDOTASpectatorGraphManager:!0,CPlayerLocalData:!0,PhysicsRagdollPose_t:!0};class R{constructor(){this.parentName=null,this.varName=null,this.varType=null,this.sendNode=null,this.serializerName=null,this.serializerVersion=null,this.encoder=null,this.encodeFlags=null,this.bitCount=null,this.lowValue=null,this.highValue=null,this.fieldType=null,this.serializer=null,this.value=null,this._model=0,this.decoder=null,this.baseDecoder=null,this.childDecoder=null}get isPointerType(){return $[this.fieldType.baseType]}get model(){return this._model}set model(e){switch(this._model=e,e){case 1:this.decoder=Z(this);break;case 2:this.baseDecoder=v;break;case 3:{const{genericType:e}=this.fieldType;if(!e)throw new Error("no generic type for variable array field: "+this);this.baseDecoder=S,this.childDecoder=(t=e.baseType,H[t]||D)}break;case 4:this.baseDecoder=S;break;case 0:this.decoder=Z(this)}var t}getDecoderForFieldPath(e,t){switch(this.model){case 1:return this.decoder;case 2:return e.last===t-1?this.baseDecoder:this.serializer.getDecoderForFieldPath(e,t);case 3:return e.last===t?this.childDecoder:this.baseDecoder;case 4:return e.last>=t+1?this.serializer.getDecoderForFieldPath(e,t+1):this.baseDecoder}return this.decoder}getFieldForFieldPath(e,t){switch(this.model){case 1:return this;case 2:if(e.last!==t-1)return this.serializer.getFieldForFieldPath(e,t);break;case 3:return this;case 4:if(e.last>=t+1)return this.serializer.getFieldForFieldPath(e,t+1)}return this}getFieldPathForName(e,t){switch(this.model){case 1:case 3:return e.path[e.last]=+t,!0;case 2:return this.serializer.getFieldPathForName(e,t);case 4:return e.path[e.last]=+t.slice(0,4),e.last++,this.serializer.getFieldPathForName(e,t.slice(5));case 0:throw new Error("not supported")}return!1}getFieldPaths(e,t){const s=[];switch(this.model){case 1:case 3:{const a=t.get(e);if(a instanceof _){e.last++;for(const[t,i]of a.state.entries())null!==i&&(e.path[e.last]=t,s.push(e.copy()));e.last--}}break;case 2:{const a=t.get(e);a instanceof _&&(e.last++,s.push(...this.serializer.getFieldPaths(e,a)),e.last--)}break;case 4:{const a=t.get(e);if(a instanceof _){e.last+=2;for(const[t,i]of a.state.entries())i instanceof _&&(e.path[e.last-1]=t,s.push(...this.serializer.getFieldPaths(e,i)));e.last-=2}}break;case 0:s.push(e.copy())}return s}getNameForFieldPath(e,t){const s=[this.varName];switch(this.model){case 1:e.last===t&&s.push((""+e.path[t]).padStart(4,"0"));break;case 2:e.last>=t&&s.push(...this.serializer.getNameForFieldPath(e,t));break;case 3:e.last===t&&s.push((""+e.path[t]).padStart(4,"0"));break;case 4:e.last!==t-1&&(s.push((""+e.path[t]).padStart(4,"0")),e.last!==t&&s.push(...this.serializer.getNameForFieldPath(e,t+1)))}return s}getTypeForFieldPath(e,t){switch(this.model){case 1:return this.fieldType;case 2:if(e.last!==t-1)return this.serializer.getTypeForFieldPath(e,t);break;case 3:if(e.last===t)return this.fieldType.genericType;break;case 4:if(e.last>=t+1)return this.serializer.getTypeForFieldPath(e,t+1)}return this.fieldType}static for(e,t){const s=s=>{const a=((e,t)=>d.call(e,t)?e[t]:null)(t,s);return e[a]},a=new R;return a.varName=s("varNameSym"),a.varType=s("varTypeSym"),a.sendNode=s("sendNodeSym"),a.serializerName=s("fieldSerializerNameSym"),a.serializerVersion=t.fieldSerializerVersion||0,a.encoder=s("varEncoderSym"),a.encodeFlags=t.encodeFlags,a.bitCount=t.bitCount,a.lowValue=t.lowValue,a.highValue=t.highValue,a}}const W=R,G=/([^<[*]+)(<\s(.*)\s>)?(\*)?(\[(.*)\])?/,X={MAX_ITEM_STOCKS:8,MAX_ABILITY_DRAFT_ABILITIES:48},j=class{constructor(e,t){this.baseType=e,this.pointer=t,this.genericType=null,this.count=null}toString(){let e=this.baseType;return null!==this.genericType&&(e+=`<${this.genericType}>`),this.pointer&&(e+="*"),this.count>0&&(e+=`[${this.count}]`),e}static for(e){const t=G.exec(e);if(!t)throw new Error("could not parse field type from: "+e);const s=new this(t[1],"*"===t[4]);t[3]&&(s.genericType=this.for(t[3]));const a=t[6];return a&&(s.count=a in X?X[a]:+a>0?+a:1024),s}};class q{constructor(e,t,s){this.name=e,this.weight=t,this.execute=s}}const Y=[new q("PlusOne",36271,(e=>{e.path[e.last]+=1})),new q("PlusTwo",10334,(e=>{e.path[e.last]+=2})),new q("PlusThree",1375,(e=>{e.path[e.last]+=3})),new q("PlusFour",646,(e=>{e.path[e.last]+=4})),new q("PlusN",4128,((e,t)=>{e.path[e.last]+=t.readUBitVarFieldPath()+5})),new q("PushOneLeftDeltaZeroRightZero",35,(e=>{e.last++,e.path[e.last]=0})),new q("PushOneLeftDeltaZeroRightNonZero",3,((e,t)=>{e.last++,e.path[e.last]=t.readUBitVarFieldPath()})),new q("PushOneLeftDeltaOneRightZero",521,(e=>{e.path[e.last]+=1,e.last++,e.path[e.last]=0})),new q("PushOneLeftDeltaOneRightNonZero",2942,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]=t.readUBitVarFieldPath()})),new q("PushOneLeftDeltaNRightZero",560,((e,t)=>{e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]=0})),new q("PushOneLeftDeltaNRightNonZero",471,((e,t)=>{e.path[e.last]+=t.readUBitVarFieldPath()+2,e.last++,e.path[e.last]=t.readUBitVarFieldPath()+1})),new q("PushOneLeftDeltaNRightNonZeroPack6Bits",10530,((e,t)=>{e.path[e.last]+=t.readBitInt(3)+2,e.last++,e.path[e.last]=t.readBitInt(3)+1})),new q("PushOneLeftDeltaNRightNonZeroPack8Bits",251,((e,t)=>{e.path[e.last]+=t.readBitInt(4)+2,e.last++,e.path[e.last]=t.readBitInt(4)+1})),new q("PushTwoLeftDeltaZero",0,((e,t)=>{e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new q("PushTwoPack5LeftDeltaZero",0,((e,t)=>{e.last++,e.path[e.last]=t.readBitInt(5),e.last++,e.path[e.last]=t.readBitInt(5)})),new q("PushThreeLeftDeltaZero",0,((e,t)=>{e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new q("PushThreePack5LeftDeltaZero",0,((e,t)=>{e.last++,e.path[e.last]=t.readBitInt(5),e.last++,e.path[e.last]=t.readBitInt(5),e.last++,e.path[e.last]=t.readBitInt(5)})),new q("PushTwoLeftDeltaOne",0,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new q("PushTwoPack5LeftDeltaOne",0,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5)})),new q("PushThreeLeftDeltaOne",0,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new q("PushThreePack5LeftDeltaOne",0,((e,t)=>{e.path[e.last]+=1,e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5)})),new q("PushTwoLeftDeltaN",0,((e,t)=>{e.path[e.last]+=t.readUBitVar()+2,e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new q("PushTwoPack5LeftDeltaN",0,((e,t)=>{e.path[e.last]+=t.readUBitVar()+2,e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5)})),new q("PushThreeLeftDeltaN",0,((e,t)=>{e.path[e.last]+=t.readUBitVar()+2,e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath(),e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new q("PushThreePack5LeftDeltaN",0,((e,t)=>{e.path[e.last]+=t.readUBitVar()+2,e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5),e.last++,e.path[e.last]+=t.readBitInt(5)})),new q("PushN",0,((e,t)=>{const s=t.readUBitVar();e.path[e.last]+=t.readUBitVar();for(let a=0;a<s;++a)e.last++,e.path[e.last]+=t.readUBitVarFieldPath()})),new q("PushNAndNonTopological",310,((e,t)=>{for(let s=0;s<=e.last;++s)t.readBitFlag()&&(e.path[s]+=t.readVarInt32()+1);const s=t.readUBitVar();for(let a=0;a<s;++a)e.last++,e.path[e.last]=t.readUBitVarFieldPath()})),new q("PopOnePlusOne",2,(e=>{e.pop(1),e.path[e.last]+=1})),new q("PopOnePlusN",0,((e,t)=>{e.pop(1),e.path[e.last]+=t.readUBitVarFieldPath()+1})),new q("PopAllButOnePlusOne",1837,(e=>{e.pop(e.last),e.path[0]+=1})),new q("PopAllButOnePlusN",149,((e,t)=>{e.pop(e.last),e.path[0]+=t.readUBitVarFieldPath()+1})),new q("PopAllButOnePlusNPack3Bits",300,((e,t)=>{e.pop(e.last),e.path[0]+=t.readBitInt(3)+1})),new q("PopAllButOnePlusNPack6Bits",634,((e,t)=>{e.pop(e.last),e.path[0]+=t.readBitInt(6)+1})),new q("PopNPlusOne",0,((e,t)=>{e.pop(t.readUBitVarFieldPath()),e.path[e.last]+=1})),new q("PopNPlusN",0,((e,t)=>{e.pop(t.readUBitVarFieldPath()),e.path[e.last]+=t.readVarInt32()})),new q("PopNAndNonTopographical",1,((e,t)=>{e.pop(t.readUBitVarFieldPath());for(let s=0;s<=e.last;++s)t.readBitFlag()&&(e.path[s]+=t.readVarInt32())})),new q("NonTopoComplex",76,((e,t)=>{for(let s=0;s<=e.last;++s)t.readBitFlag()&&(e.path[s]+=t.readVarInt32())})),new q("NonTopoPenultimatePlusOne",271,(e=>{e.path[e.last-1]+=1})),new q("NonTopoComplexPack4Bits",99,((e,t)=>{for(let s=0;s<=e.last;++s)t.readBitFlag()&&(e.path[s]+=t.readBitInt(4)-7)})),new q("FieldPathEncodeFinish",25474,(e=>{e.done=!0}))];class K{constructor(e,t){this.weight=e,this.value=t,this.left=null,this.right=null}get isLeaf(){return null===this.left&&null===this.right}}const Q=(()=>{const e=new class{constructor(e){this.compare=e,this.data=[]}get isEmpty(){return 0===this.data.length}get root(){return this.data[0]}get size(){return this.data.length}insert(e){const{data:t}=this;t.push(e),this._bubbleUp(t.length-1)}extract(){const{data:e,root:t}=this,s=e.pop();return e.length>0&&(e[0]=s,this._bubbleDown(0)),t}_bubbleUp(e){const{compare:t,data:s}=this,a=s[e],i=(e-1)/2|0,r=s[i];t(a,r)<0&&(s[i]=a,s[e]=r,this._bubbleUp(i))}_bubbleDown(e){const{compare:t,data:s}=this,a=2*e+1,i=2*e+2;let r=e;if(void 0!==s[a]&&t(s[a],s[r])<0&&(r=a),void 0!==s[i]&&t(s[i],s[r])<0&&(r=i),r!==e){const t=s[r];s[r]=s[e],s[e]=t,this._bubbleDown(r)}}static from(e,t){const s=new this(t);for(const t of e)s.insert(t);return s}}(((e,t)=>e.weight===t.weight?t.value-e.value:e.weight-t.weight)),t=Y.map((e=>e.weight||1));for(const[s,a]of t.entries()){const t=new K(a,s);e.insert(t)}let s=e.size;for(;e.size>1;){const t=e.extract(),a=e.extract(),i=new K(t.weight+a.weight,s++);i.left=t,i.right=a,e.insert(i)}return e.extract()})();class J{constructor(){this.path=[-1,0,0,0,0,0],this.last=0,this.done=!1}copy(){const e=new J;return e.path=[...this.path],e.last=this.last,e.done=this.done,e}pop(e){for(let t=0;t<e;++t)this.path[this.last]=0,this.last--}toString(){const e=new Array(this.last+1);for(let t=0;t<=this.last;++t)e[t]=this.path[t];return e.join("/")}static from(e){const t=new J;let s=Q,a=Q;const i=[];for(;!t.done;)a=e.readBitFlag()?s.right:s.left,a.isLeaf?(Y[a.value].execute(t,e),t.done||i.push(t.copy()),s=Q):s=a;return i}}const ee=J;var te=s(8764).Buffer;const se=(e,t)=>new RangeError(`cannot read ${t} bytes at position ${e}`),ae=class{constructor(e){this.buffer=te.from(e),this.pos=0,this.bitVal=0,this.bitCount=0}get length(){return this.buffer.length}get eof(){return this.pos>=this.length}get bitLength(){return 8*this.length}get bitPos(){return 8*(this.pos-1)+(8-this.bitCount)}get posWithBit(){const{bitCount:e,pos:t}=this;return e>0?`${t-1}.${8-e}`:t}nextByte(){const{pos:e}=this;if(this.eof)throw se(e,this.length);return this.pos+=1,this.buffer[e]}readAngle(e){return 360*this.readBitInt(e)/(1<<e)}readBitFloat(e){const t=this.readBitInt(e),s=te.alloc(4);return s.writeUInt32LE(t),s.readFloatLE()}readBitInt(e){if(e>=32){const t=BigInt(e);let s=BigInt(this.bitVal),a=BigInt(this.bitCount);for(;t>a;)s|=BigInt(this.nextByte())<<a,a+=8n;const i=s&(1n<<t)-1n;return this.bitVal=Number(s>>t),this.bitCount=Number(a-t),Number(i)}for(;e>this.bitCount;)this.bitVal|=this.nextByte()<<this.bitCount,this.bitCount+=8;const t=this.bitVal&(1<<e)-1;return this.bitVal>>=e,this.bitCount-=e,t}readBitFlag(){return 1===this.readBitInt(1)}readBitsAsBytes(e){const t=[];for(;e>=8;e-=8)t.push(this.readByte());return e>0&&t.push(this.readBitInt(e)),te.from(t)}readByte(){return 0===this.bitCount?this.nextByte():this.readBitInt(8)}readBytes(e){if(0===this.bitCount){const t=this.pos,s=t+e;if(s>this.length)throw se(t,e);return this.pos=s,this.buffer.slice(t,s)}const t=te.alloc(e);for(let s=0;s<e;++s)t[s]=this.readBitInt(8);return t}readCoord(){let e=0,t=this.readBitInt(1),s=this.readBitInt(1),a=!1;return 0===t&&0===s||(a=this.readBitFlag(),0!==t&&(t=this.readBitInt(14)+1),0!==s&&(s=this.readBitInt(5)),e=t+s*(1/32),a&&(e=-e)),e}read3BitNormal(){const e=[0,0,0],t=this.readBitFlag(),s=this.readBitFlag();t&&(e[0]=this.readNormal()),s&&(e[1]=this.readNormal());const a=this.readBitFlag(),i=e[0]*e[0]+e[1]*e[1];return e[2]=i<1?Math.sqrt(1-i):0,a&&(e[2]=-e[2]),e}readFieldsInto(e,t){const s=ee.from(this);for(const a of s){const s=t.getDecoderForFieldPath(a,0)(this);e.set(a,s)}}readStringN(e,t="utf8"){return this.readBytes(e).toString(t)}readString(e="utf8"){const t=[];for(;;){const e=this.readByte();if(0===e)break;t.push(e)}return te.from(t).toString(e)}readUBitVar(){let e=this.readBitInt(6);switch(48&e){case 16:e=15&e|this.readBitInt(4)<<4;break;case 32:e=15&e|this.readBitInt(8)<<4;break;case 48:e=15&e|this.readBitInt(28)<<4}return e}readUBitVarFieldPath(){return this.readBitFlag()?this.readBitInt(2):this.readBitFlag()?this.readBitInt(4):this.readBitFlag()?this.readBitInt(10):this.readBitFlag()?this.readBitInt(17):this.readBitInt(31)}readUint32LE(){return this.readBytes(4).readUInt32LE()}readUint64LE(){return this.readBytes(8).readBigUInt64LE()}readVarInt32(){const e=this.readVarUint32();let t=e>>1;return!0&e&&(t=~t),t}readVarUint32(){let e=0,t=0;for(;;){const s=this.readByte();if(e|=(127&s)<<t,t+=7,0==(128&s)||38===t)break}return e}readVarUint64(){let e=0n,t=0n;for(let s=0;;++s){const a=BigInt(this.readByte());if(a<128){if(s>9||9===s&&a>1)throw new Error("varint overflows uint64");return e|a<<t}e|=(0x7fn&a)<<t,t+=7n}}skip(e){const t=this.pos+e;if(t>this.length)throw new RangeError(`cannot skip ${e} bytes`);this.pos=t,this.bitCount>0&&(this.bitVal=this.buffer[this.pos-1]>>8-this.bitCount)}static calcBitsNeededFor(e){return Math.log2(e)+1|0}},ie=class{constructor(e,t){this.name=e,this.version=t,this.fields=[]}get id(){return`${this.name}(${this.version})`}getDecoderForFieldPath(e,t){const s=e.path[t],a=this.fields[s];if(!a)throw new Error(`serializer ${this.id}: fp ${e} has no field (${s})`);return a.getDecoderForFieldPath(e,t+1)}getFieldForFieldPath(e,t){const s=e.path[t];return this.fields[s].getFieldForFieldPath(e,t+1)}getFieldPathForName(e,t){for(const[s,a]of this.fields.entries()){if(t===a.varName)return e.path[e.last]=s,!0;if(t.startsWith(a.varName+"."))return e.path[e.last]=s,e.last++,a.getFieldPathForName(e,t.slice(a.varName.length+1))}return!1}getFieldPaths(e,t){const s=[];for(const[a,i]of this.fields.entries())e.path[e.last]=a,s.push(...i.getFieldPaths(e,t));return s}getNameForFieldPath(e,t){const s=e.path[t];return this.fields[s].getNameForFieldPath(e,t+1)}getTypeForFieldPath(e,t){const s=e.path[t];return this.fields[s].getTypeForFieldPath(e,t+1)}};class re{constructor(e,t,s){this.index=e,this.key=t,this.data=s}static decode(e,t,s){const a=new Array(32),i=new ae(t);let r=-1;for(let t=0;t<s;++t){i.readBitFlag()?++r:r+=i.readVarUint32()+2;let s=null;if(i.readBitFlag())if(i.readBitFlag()){const e=t>32?t:0,r=i.readBitInt(5),n=i.readBitInt(5);s=a[e+r&31].substring(0,n)+i.readString()}else s=i.readString();let n=null;if(i.readBitFlag()){let t,s=!1;if(e.userDataFixedSize?t=e.userDataSizeBits:(0!=(1&e.flags)&&(s=i.readBitFlag()),t=8*i.readBitInt(17)),s)throw new Error("does not yet support compressed string table data");n=i.readBitsAsBytes(t)}const l=e.entries.length;if(r<l)e.entries[r].data=n,s=e.entries[r].key;else{if(r!==l)throw new Error("index and entry count mismatch for table: "+e.name);{const t=new this(r,s,n);e.entries.push(t)}}a[31&t]=s}}}const ne=class{constructor(e,t,s){this.id=e,this.name=t,this.serializer=s}getFieldPaths(e,t){return this.serializer.getFieldPaths(e,t)}getFieldPathForName(e,t){return this.serializer.getFieldPathForName(e,t)}getNameForFieldPath(e){return this.serializer.getNameForFieldPath(e,0).join(".")}},le=class{constructor(e,t,s){this.index=e,this.serial=t,this.handle=((e,t)=>t<<14|e)(e,t),this.class=s,this.active=!0,this.state=new _,this.fpCache={}}get snapshot(){const e={},t=this.class.getFieldPaths(new ee,this.state);for(const s of t)e[this.class.getNameForFieldPath(s)]=this.state.get(s);return e}get(e){let t=this.fpCache[e];if(!t){if(t=new ee,!this.class.getFieldPathForName(t,e))throw new Error(`entity ${this.class.name} does not have field: ${e}`);this.fpCache[e]=t}return this.state.get(t)}},oe={1:"valString",2:"valFloat",3:"valLong",4:"valShort",5:"valByte",6:"valBool",7:"valUint64"};class he{constructor(e,t,s){this.index=+e,this.name=t,this.type=s}}class ce{constructor(e,t){this.id=e,this.name=t,this.fields=[]}}var de=s(9299);const{dota:me}=de,{CSVCMsg_FlattenedSerializer:ue,EDemoCommands:pe}=me,{CDemoPacket:ge,CDOTAMatchMetadataFile:fe,CDOTAUserMsg_StatsHeroMinuteDetails:be,CMsgDOTACombatLogEntry:ye,CMsgGCToClientTournamentItemDrop:we,EBaseEntityMessages:Ce,EBaseGameEvents:_e,EBaseUserMessages:Pe,EDotaUserMessages:xe,NET_Messages:ve,SVC_Messages:Be}=me,De=(e,t,s,a={})=>{for(const[i,r]of Object.entries(e)){const e=i.replace(t,s),n=me[e];n&&(a[r]=[n,e])}return a},ke={...De(pe,"DEM_","CDemo",{[pe.DEM_SignonPacket]:[ge,"CDemoSignonPacket"]})},Fe={...De(Ce,"EM_","CEntityMessage"),...De(_e,"GE_","CMsg"),...De(Pe,"UM_","CUserMessage"),...De(xe,"DOTA_UM_","CDOTAUserMsg_",{[xe.DOTA_UM_TournamentDrop]:[we,"CMsgGCToClientTournamentItemDrop"],[xe.DOTA_UM_StatsHeroDetails]:[be,"CDOTAUserMsg_StatsHeroMinuteDetails"],[xe.DOTA_UM_CombatLogDataHLTV]:[ye,"CMsgDOTACombatLogEntry"],[xe.DOTA_UM_MatchMetadata]:[fe,"CDOTAMatchMetadataFile"]}),...De(ve,"net_","CNETMsg_"),...De(Be,"svc_","CSVCMsg_")},Ee=e=>{switch(e){case ve.net_Tick:case Be.svc_CreateStringTable:case Be.svc_UpdateStringTable:case ve.net_SpawnGroup_Load:return-10;case Be.svc_PacketEntities:return 5;case _e.GE_Source1LegacyGameEvent:return 10;default:return 0}};class Ie{constructor(e,t,s){this.minBuild=e,this.maxBuild=t,this.apply=s}appliesFor(e){return 0===this.minBuild&&0===this.maxBuild||e>=this.minBuild&&e<=this.maxBuild}}const Te=[new Ie(0,990,(e=>{switch(e.varName){case"angExtraLocalAngles":case"angLocalAngles":case"m_angInitialAngles":case"m_angRotation":case"m_ragAngles":case"m_vLightDirection":"CBodyComponentBaseAnimatingOverlay"===e.parentName?e.encoder="qangle_pitch_yaw":e.encoder="QAngle";break;case"dirPrimary":case"localSound":case"m_flElasticity":case"m_location":case"m_poolOrigin":case"m_ragPos":case"m_vecEndPos":case"m_vecLadderDir":case"m_vecPlayerMountPositionBottom":case"m_vecPlayerMountPositionTop":case"m_viewtarget":case"m_WorldMaxs":case"m_WorldMins":case"origin":case"vecLocalOrigin":e.encoder="coord";break;case"m_vecLadderNormal":e.encoder="normal"}})),new Ie(0,954,(e=>{switch(e.varName){case"m_flMana":case"m_flMaxMana":e.lowValue=null,e.highValue=8192}})),new Ie(1016,1027,(e=>{switch(e.varName){case"m_bItemWhiteList":case"m_bWorldTreeState":case"m_iPlayerIDsInControl":case"m_iPlayerSteamID":case"m_ulTeamBannerLogo":case"m_ulTeamBaseLogo":case"m_ulTeamLogo":e.encoder="fixed64"}})),new Ie(0,0,(e=>{switch(e.varName){case"m_flSimulationTime":case"m_flAnimTime":e.encoder="simtime";break;case"m_flRuneTime":e.encoder="runetime"}}))],Se="PBDEMS2\0",Oe=(e,t)=>Ee(e.type)-Ee(t.type),Le=class extends ae{constructor(e){super(e),this.buildNumber=null,this.classes=new c("id",{byName:"name"}),this.classBaselines={},this.classIDSize=null,this.entityFullPacketCount=0,this.entities=new c("index"),this.gameEventTypes=new c("id",{byName:"name"}),this.serializers=new c("name"),this.stringTables=new c("name",{byIndex:"index"}),this.emitter=new r,this.tick=-1,this.tickInterval=null,this.parsing=!1,this.synced=!1,this.on("msg:CDemoPacket",this.onCDemoPacket.bind(this)),this.on("msg:CDemoSignonPacket",this.onCDemoPacket.bind(this)),this.on("msg:CDemoFullPacket",this.onCDemoFullPacket.bind(this)),this.on("msg:CDemoSyncTick",this.onCDemoSyncTick.bind(this)),this.on("msg:CSVCMsg_ClearAllStringTables",this.onCSVCMsg_ClearAllStringTables.bind(this)),this.on("msg:CSVCMsg_CreateStringTable",this.onCSVCMsg_CreateStringTable.bind(this)),this.on("msg:CSVCMsg_UpdateStringTable",this.onCSVCMsg_UpdateStringTable.bind(this)),this.on("msg:CSVCMsg_ServerInfo",this.onCSVCMsg_ServerInfo.bind(this)),this.on("msg:CMsgSource1LegacyGameEventList",this.onCMsgSource1LegacyGameEventList.bind(this)),this.on("msg:CMsgSource1LegacyGameEvent",this.onCMsgSource1LegacyGameEvent.bind(this)),this.on("msg:CDemoClassInfo",this.onCDemoClassInfo.bind(this)),this.on("msg:CDemoSendTables",this.onCDemoSendTables.bind(this)),this.on("msg:CSVCMsg_PacketEntities",this.onCSVCMsg_PacketEntities.bind(this)),this.on("msg:CDemoStop",this.stop.bind(this));const t=this.readStringN(Se.length);if(t!==Se)throw new Error(`unexpected magic: ${t}; expected: PBDEMS2\0`);this.skip(8)}get lastTick(){const{pos:e}=this;this.pos=Se.length,this.pos=this.readUint32LE(),this.readVarUint32();const t=this.readVarUint32();return this.pos=e,t}on(...e){this.emitter.on(...e)}off(...e){this.emitter.off(...e)}start(){for(this.parsing=!0;!this.synced&&this.parsing;)this.step()}step(e=1){this.seek(this.tick+e)}seek(e){for(;this.tick<e&&this.parsing;){const e=this.readVarUint32(),t=this.readVarUint32(),s=this.readVarUint32();let a=this.readBytes(s);const i=e&~pe.DEM_IsCompressed;(e&pe.DEM_IsCompressed)===pe.DEM_IsCompressed&&(a=l.W(a));const r=ke[i];if(!r)throw new Error("no type to handle demo command: "+i);const[n,o]=r;this.tick=t;const h="msg:"+o;if(!this.emitter.listenerCount(h)){this.emitter.emit("msg:skip",o,t);continue}const c=n.decode(a);this.emitter.emit(h,c,t),this.emitter.emit("tick",t)}}play(){this.seek(1/0)}stop(){this.parsing=!1}onCDemoPacket(e){const t=new ae(e.data),s=[];for(;!t.eof;){const e=t.readUBitVar(),a=t.readVarUint32(),i=Fe[e];if(!i){t.skip(a);continue}const[r,n]=i,l="msg:"+n;if(!this.emitter.listenerCount(l)){this.emitter.emit("msg:skip",n),t.skip(a);continue}const o=t.readBytes(a);s.push({Type:r,event:l,data:o})}s.length>1&&s.sort(Oe);for(const e of s){const{Type:t,event:s,data:a}=e,i=t.decode(a);this.emitter.emit(s,i)}}onCDemoFullPacket({stringTable:e,packet:t}){t&&this.onCDemoPacket(t)}onCDemoSyncTick(){this.synced=!0}onCSVCMsg_ClearAllStringTables(){this.stringTables.clear()}onCSVCMsg_CreateStringTable(e){const{name:t,userDataFixedSize:s,userDataSize:a,userDataSizeBits:i,flags:r,numEntries:n}=e,o=new class{constructor(e,t,s,a,i){this.name=e,this.index=null,this.userDataFixedSize=t,this.userDataSize=s,this.userDataSizeBits=a,this.flags=i,this.entries=[]}}(t,s,a,i,r);o.index=this.stringTables.size,this.stringTables.add(o);let h=e.stringData;if(e.dataCompressed){if("LZSS"===new ae(h).readStringN(8))throw new Error("LZSS string tables in old replays not yet supported");h=l.W(h)}re.decode(o,h,n),"instancebaseline"===o.name&&this.updateInstanceBaseline()}onCSVCMsg_UpdateStringTable(e){const{stringData:t,numChangedEntries:s,tableId:a}=e,i=this.stringTables.byIndex.get(a);if(!i)throw new Error("could not find string table: "+a);re.decode(i,t,s),"instancebaseline"===i.name&&this.updateInstanceBaseline()}onCSVCMsg_ServerInfo(e){this.classIDSize=ae.calcBitsNeededFor(e.maxClasses),this.tickInterval=e.tickInterval;const t=e.gameDir.match(/dota_v(\d+)/);if(t)this.buildNumber=+t[1];else{const t=new Error("could not retrieve build number from: "+e.gameDir);this.emitter.emit("warn",t)}}onCMsgSource1LegacyGameEventList(e){for(const{eventid:t,name:s,keys:a}of e.descriptors){const e=new ce(t,s);for(const t of a)e.fields.push(new he(e.fields.length,t.name,t.type));this.gameEventTypes.add(e)}}onCMsgSource1LegacyGameEvent(e){const t=this.gameEventTypes.get(e.eventid);if(!t)throw new Error("unknown event: "+e.eventid);const s=new class{constructor(e,t){this.type=e,this.packet=t,this.data={};for(const[e,t]of Object.entries(this.type.fields)){const s=oe[t.type];this.data[t.name]=this.packet.keys[e][s]}}}(t,e);this.emitter.emit("event",s),this.emitter.emit("event:"+t.name,s)}onCDemoClassInfo(e){for(const{classId:t,networkName:s}of e.classes){const e=new ne(t,s,this.serializers.get(s));this.classes.add(e)}this.updateInstanceBaseline()}onCDemoSendTables(e){const t=new ae(e.data),s=t.readBytes(t.readVarUint32()),a=ue.decode(s),i=Te.filter((e=>e.appliesFor(this.buildNumber))),r={},n={};for(const{fieldsIndex:e,serializerVersion:t,serializerNameSym:s}of a.serializers){const l=a.symbols[s],o=new ie(l,t);for(const t of e){let e=r[t];if(!e){e=W.for(a.symbols,a.fields[t]),this.buildNumber<=990&&(e.parentName=o.name);const{varType:s}=e;let l=n[s];l||(l=j.for(s),n[s]=l),e.fieldType=l,e.serializerName&&(e.serializer=this.serializers.get(e.serializerName));for(const t of i)t.apply(e);e.serializer?e.isPointerType?e.model=2:e.model=4:e.fieldType.count>0&&"char"!==e.fieldType.baseType?e.model=1:"CUtlVector"===e.fieldType.baseType?e.model=3:e.model=0,r[t]=e}o.fields.push(e)}this.serializers.add(o);const h=this.classes.byName[o.name];h&&(h.serializer=o)}}onCSVCMsg_PacketEntities(e){const t=new ae(e.entityData),s=[];let a,i,r,n,l,o=-1;if(!e.isDelta){if(this.entityFullPacketCount>0)return;this.entityFullPacketCount++}for(let h=e.updatedEntries;h>0;--h){if(o+=t.readUBitVar()+1,l=0,a=t.readBitInt(2),0==(1&a))if(0!=(2&a)){i=t.readBitInt(this.classIDSize),r=t.readBitInt(17),t.readVarUint32();const e=this.classes.get(i);if(!e)throw new Error("unable to find new class: "+i);const s=this.classBaselines[i];if(!s)throw new Error("unable to find new baseline: "+i);n=new le(o,r,e),this.entities.add(n),new ae(s).readFieldsInto(n.state,e.serializer),t.readFieldsInto(n.state,e.serializer),l=9}else{if(n=this.entities.get(o),!n)throw new Error("unable to find existing entity: "+o);l=2,n.active||(n.active=!0,l|=8),t.readFieldsInto(n.state,n.class.serializer)}else{if(n=this.entities.get(o),!n)throw new Error("unable to find existing entity: "+o);if(!n.active)throw new Error(`entity ${n.class.name} ordered to leave, already inactive`);l=16,0!=(2&a)&&(l|=4,this.entities.delete(n))}s.push({entity:n,event:l})}this.emitter.emit("entities",s)}updateInstanceBaseline(){const e=this.stringTables.get("instancebaseline");if(e)for(const t of e.entries){const e=+t.key;this.classBaselines[e]=t.data}}},Ne=class{constructor(e,t){this.replay=e,this.handle=t,this.class=null,this.teamID=null,this.x=0,this.y=0,this.rotation=null,this.hp=0,this.hpMax=0,this.mp=0,this.mpMax=0,(0,n.rC)(this,{class:n.LO,teamID:n.LO,x:n.LO,y:n.LO,rotation:n.LO,hp:n.LO,hpMax:n.LO,mp:n.LO,mpMax:n.LO,color:n.Fl,isDead:n.Fl,name:n.Fl,relX:n.Fl,relY:n.Fl,team:n.Fl})}get color(){return b[this.teamID]}get isDead(){return this.hp<=0}get name(){return y[this.class]}get relX(){return w(this.x)}get relY(){return w(this.y)}get team(){return this.replay.teams.byID.get(this.teamID)}},Me=class extends Ne{constructor(e,t){super(e,t),this.inventoryHandles=[null,null,null,null,null,null],(0,n.rC)(this,{inventoryHandles:n.LO,inventory:n.Fl})}get inventory(){return this.inventoryHandles.map((e=>this.replay.items.get(e)))}},Ae=class extends Me{constructor(e,t){super(e,t),this.refname=null,this.playerID=-1,this.level=1,this.xp=0,this.abilityHandles=[],this.backpackHandles=[null,null,null],this.neutralItemHandle=null,this.stashHandles=[null,null,null,null,null,null],this.teleportScrollHandle=null,(0,n.rC)(this,{refname:n.LO,playerID:n.LO,level:n.LO,xp:n.LO,abilityHandles:n.LO,backpackHandles:n.LO,neutralItemHandle:n.LO,stashHandles:n.LO,teleportScrollHandle:n.LO,abilities:n.Fl,backpack:n.Fl,neutralItem:n.Fl,player:n.Fl,stash:n.Fl,teleportScroll:n.Fl})}get abilities(){return this.abilityHandles.reduce(((e,t)=>{const s=this.replay.abilities.get(t);return!s||s.isSeasonal||s.isTalent||e.push(s),e}),[])}get backpack(){return this.backpackHandles.map((e=>this.replay.items.get(e)))}get color(){return f[this.playerID]}get name(){const e="npc_dota_hero_"+this.refname;return m[e].localized_name}get neutralItem(){return this.replay.items.get(this.neutralItemHandle)}get player(){return this.replay.players.byID.get(this.playerID)}get stash(){return this.stashHandles.map((e=>this.replay.items.get(e)))}get teleportScroll(){return this.replay.items.get(this.teleportScrollHandle)}},Ue={CDOTA_BaseNPC_Barracks:"processBuilding",CDOTA_BaseNPC_Creep_Lane:"processUnit",CDOTA_BaseNPC_Creep_Neutral:"processUnit",CDOTA_BaseNPC_Creep_Siege:"processUnit",CDOTA_BaseNPC_Fort:"processBuilding",CDOTA_BaseNPC_Tower:"processBuilding",CDOTA_BaseNPC_Watch_Tower:"processBuilding",CDOTA_Item_Physical:"processCollectable",CDOTA_Item_Rune:"processCollectable",CDOTA_Item_RuneSpawner_Bounty:null,CDOTA_Item_RuneSpawner_Powerup:null,CDOTA_Item:"processItem",CDOTA_NPC_Observer_Ward:"processUnit",CDOTA_NPC_Sentry_Ward:"processUnit",CDOTA_PlayerResource:"processPlayerResource",CDOTA_Unit_Courier:"processUnitWithInventory",CDOTA_Unit_Roshan:"processUnitWithInventory",CDOTABaseAbility:"processAbility",CDOTAGamerulesProxy:"processGameRules",CDOTAPlayer:"processPlayer",CDOTATeam:"processTeam"},Ve=[{startsWith:"CDOTA_Ability_",method:"processAbility"},{startsWith:"CDOTA_Item_",method:"processItem"},{startsWith:"CDOTA_Unit_Hero_",method:"processHero"}];var ze=s(9163),He=s(74);const Ze=ze.ZP.div`
  position: absolute;
  bottom: 1px;
  right: 3px;
  font-size: 0.85em;

  ${e=>"mana"===e.type&&ze.iv`
    color: #65D9F7;
  `}
`,$e=e=>{const{type:t,value:s}=e;return a.createElement(Ze,{type:t},s)},Re=ze.ZP.div`
  ${e=>!e.active&&ze.iv`
    filter: grayscale(100%) brightness(80%);

    ${e.translucentWhenInactive&&ze.iv`
      opacity: 0.8;
    `}
  `}
`,We=ze.ZP.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`,Ge=e=>{const{children:t,remaining:s}=e,i=s>0;return a.createElement(a.Fragment,null,i&&a.createElement(We,null,Math.ceil(s)),a.createElement(Re,{active:!i},t))},Xe=e=>{const{path:t}=e,s="https://steamcdn-a.akamaihd.net/apps/dota2/images/"+t;return a.createElement("img",{src:s,draggable:"false",alt:""})},je=a.memo((e=>{const{refname:t}=e;return a.createElement(Xe,{path:`abilities/${t}_md.png`})})),qe=a.memo((e=>{const{refname:t,variant:s}=e;let i="full.png";switch(s){case"portrait":i="vert.jpg";break;case"landscape":i="sb.png";break;case"icon":i="icon.png";break;default:i="full.png"}return a.createElement(Xe,{path:`heroes/${t}_${i}`})})),Ye=a.memo((e=>{let{refname:t}=e;return t.startsWith("recipe_")&&(t="recipe"),a.createElement(Xe,{path:`items/${t}_lg.png`})})),Ke=a.memo((e=>{const{teamID:t}=e;return a.createElement(Xe,{path:`team_logos/${t}.png`})})),Qe=ze.ZP.div`
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
`,Je=(0,He.P)((e=>{const{className:t,ability:s}=e;return a.createElement(Qe,{className:t},s&&a.createElement(Ge,{remaining:s.cooldown},s.manaCost>0&&a.createElement($e,{type:"mana",value:s.manaCost}),a.createElement(je,{refname:s.refname})))})),et=ze.ZP.div`
  position: absolute;
  z-index: 1;
`,tt=ze.ZP.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);

  span {
    margin: 5px;
  }
`,st=ze.ZP.div`
  position: relative;
  margin: 4px 0px 0px;
  background: rgba(0, 0, 0, .4);
  border-radius: 4px;
  text-align: center;

  ${e=>"default"===e.size&&ze.iv`
    height: 25px;

    ${et} {
      border-radius: 4px;
      top: 1px;
      bottom: 1px;
      left: 1px;
      right: 1px;
    }
  `}

  ${e=>"mini"===e.size&&ze.iv`
    height: 3px;
    margin: 1px auto;

    ${et} {
      height: 100%;
    }
  `}
`,at=e=>{let{color:t}=e;const{max:s,value:i,size:r="default",teamID:n,type:l}=e,o=i/s*100|0;return"health"===l?t=b[n]:"mana"===l&&(t="#466DDC"),a.createElement(st,{size:r},"default"===r&&s>0&&a.createElement(tt,null,0|i,a.createElement("span",null,"/"),0|s),a.createElement(et,{style:{background:t,width:o+"%"}}))};function it(){return(it=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a])}return e}).apply(this,arguments)}const rt=ze.ZP.button`
  appearance: none;
  background: none;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 1.25em;
`,nt=e=>a.createElement(rt,it({type:"button"},e)),lt=ze.ZP.div.withConfig({shouldForwardProp:e=>"wrap"!==e})`
  display: flex;
  flex-direction: row;

  ${e=>"center"===e.justify&&ze.iv`
    justify-content: center;
  `}

  ${e=>e.wrap&&ze.iv`
    flex-wrap: wrap;
  `}
`,ot=lt,ht=(0,ze.ZP)(lt)`
  flex-direction: column;
`,ct=ze.ZP.div`
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

  ${e=>e.rounded&&ze.iv`
    width: 38px;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 50px;
      transform: translate(-6px, 0);
    }
  `}
`,dt=(0,He.P)((e=>{const{className:t,item:s,rounded:i=!1}=e;return a.createElement(ct,{className:t,rounded:i},s&&a.createElement(Ge,{remaining:s.cooldown},s.charges>0&&a.createElement($e,{value:s.charges}),s.manaCost>0&&a.createElement($e,{type:"mana",value:s.manaCost}),a.createElement(Ye,{refname:s.refname})))})),mt=(0,ze.ZP)(ot)`
  align-content: flex-start;
  margin: 9px;

  ${ct} {
    margin: 1px;
  }
`,ut=(0,He.P)((e=>{const{items:t,wrap:s}=e;return a.createElement(mt,{wrap:s},t.map(((e,t)=>a.createElement(dt,{key:t,item:e}))))})),pt=dt,gt=ze.ZP.div`
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

    ${e=>"small"===e.size&&ze.iv`
      font-size: 0.7em;
    `}
  }
`,ft=e=>{const{children:t,size:s="default",xp:i}=e;let r=20,n=3;"small"===s&&(r=10,n=2);const l=p[t-1],o=(i-l)/(p[t]-l),h=r-n,c=2*h*Math.PI,d=c-o*c;return a.createElement(gt,{radius:r,size:s},a.createElement("svg",{height:2*r,width:2*r},a.createElement("circle",{stroke:"#FFCC00",fill:"transparent",strokeWidth:n,strokeDasharray:`${c} ${c}`,style:{strokeDashoffset:d},r:h,cx:r,cy:r})),a.createElement("span",null,t))},bt=a.memo(ft);var yt=s(5036);const wt=ze.ZP.div`
  height: 3px;
  border-bottom: 1px solid black;
`,Ct=e=>{const{color:t}=e;return a.createElement(wt,{style:{background:t}})},_t=a.memo(Ct),Pt=ze.ZP.div`
  width: 60px;
  text-align: center;

  img {
    max-width: 40px;
  }
`,xt=e=>{const{teamID:t}=e;return a.createElement(Pt,null,a.createElement(Ke,{teamID:t}))},vt=a.memo(xt),Bt=e=>{let{time:t}=e;const s=t<0?"-":"";t=Math.abs(t);const i=t/3600|0;t%=3600;const r=t/60|0;t%=60;const n=0|t;return a.createElement(a.Fragment,null,s,i>0&&a.createElement(a.Fragment,null,i,":"),("00"+r).slice(-2),":",("00"+n).slice(-2),s?" ":"")},Dt=e=>{const[t,s]=(0,a.useState)({x:0,y:0,width:0,height:0}),[i,r]=(0,a.useState)("free"),[n,l]=(0,a.useState)(!1),[o,h]=(0,a.useState)(null),c=t;(0,a.useEffect)((()=>{e.on("warn",console.warn),e.start(),e.jumpTo(4)}),[e]),((e,t)=>{const s=(0,a.useRef)();(0,a.useEffect)((()=>{s.current=e}),[e]),(0,a.useEffect)((()=>{if(null!==t){const e=setInterval((()=>{s.current()}),t);return()=>clearInterval(e)}}),[t])})((()=>{e.step(2)}),e&&n?1/e.tickInterval*2:null);const d=e?.units?.find((e=>e.handle===o)),m=(0,a.useCallback)((t=>{e.jump(t)}),[e]),u=(0,a.useCallback)((e=>{e===o&&"free"===i&&s((e=>({...e,x:d.relX,y:d.relY}))),h(e)}),[i,o,d,s,h]);return{camera:c,cameraID:i,playing:n,requestTick:m,selectedUnit:d,setCameraID:r,setFreeCamera:s,setPlaying:l,setSelection:u}},kt=()=>{const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}},Ft=ze.ZP.div`
  width: 25px;
  border-radius: 50%;
  position: absolute;
  transform: translate(-50%, 50%);
  pointer-events: none;

  img {
    display: block;
  }
`,Et=(0,He.P)((e=>{const{selected:t,unit:s}=e,{isDead:i,relX:r,relY:n}=s,l=s instanceof Ae;return i?null:a.createElement(Ft,{selected:t,style:{left:100*r+"%",bottom:100*n+"%"}},l&&a.createElement(qe,{refname:s.refname,variant:"icon"}))})),It=ze.ZP.div`
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

  ${Ft} {
    z-index: 2;
  }
`,Tt=ze.ZP.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 100%;

  > img {
    display: block;
    transform: translate(-50%, 50%);
  }
`,St=ze.ZP.div`
  position: absolute;
  z-index: 100;
  background: rgba(255, 255, 255, .45);
  pointer-events: none;
  transform: translate(-50%, 50%);
`,Ot=(0,He.P)((e=>{const{camera:t,selectedUnit:s,setFreeCamera:i,units:r}=e,[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(null),h=(0,a.useCallback)((e=>{e.preventDefault(),l(!0);const{width:t,height:s}=o.current,a=o.current.getBoundingClientRect(),r=e.clientX-a.x-t/2,n=e.clientY-a.y-s/2;i((e=>({...e,x:r/t,y:-n/s})))}),[i]),c=(0,a.useCallback)((e=>{e.preventDefault(),l(!1)}),[l]),d=(0,a.useCallback)((e=>{if(!n)return;const{movementX:t,movementY:s}=e,{width:a,height:r}=o.current;i((e=>({...e,x:e.x+t/a,y:e.y+-s/r})))}),[n,i]),m=r.filter((e=>e instanceof Ae));return a.createElement(It,{onMouseDown:h,onMouseUp:c,onMouseMove:d,onMouseOut:c},a.createElement(Tt,null,a.createElement("img",{ref:o,src:"./images/minimap/7.23.webp",draggable:"false",alt:"Dota 2 minimap"}),a.createElement(St,{style:{left:100*t.x+"%",bottom:100*t.y+"%",width:100*t.width+"%",height:100*t.height+"%"}}),m.map((e=>a.createElement(Et,{key:e.handle,selected:s===e,unit:e})))))})),Lt=(0,ze.ZP)(ht)`
  margin: 11px 6px 14px;
  justify-content: space-between;
`,Nt=ze.ZP.div`
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

  ${e=>e.acquired&&ze.iv`
    background: #FFCC00;
  `}
`,Mt=(0,He.P)((e=>{const{ability:t}=e,{level:s}=t,i=new Array(s).fill();return a.createElement(Lt,null,a.createElement(Re,{active:s>=1},a.createElement(Je,{ability:t})),a.createElement(ot,{justify:"center"},i.map(((e,t)=>a.createElement(Nt,{key:t,acquired:!0})))))})),At=(0,ze.ZP)(ot)`
  flex: 1;
`,Ut=(0,He.P)((e=>{const{abilities:t=[]}=e;return a.createElement(At,null,t.map((e=>!e.hidden&&a.createElement(Mt,{key:e.handle,ability:e}))))})),Vt=(0,ze.ZP)(ht)`
  position: relative;
  align-content: flex-start;
  width: 180px;
  padding-right: 50px;
`,zt=ze.ZP.div`
  position: absolute;
  top: 30px;
  right: 6px;
`,Ht=ze.ZP.div`
  position: absolute;
  top: 112px;
  right: 6px;
`,Zt=(0,He.P)((e=>{const{backpack:t,inventory:s,neutralItem:i,teleportScroll:r}=e;return a.createElement(Vt,null,a.createElement(ut,{items:s,wrap:!0}),t&&a.createElement(Re,{active:!1},a.createElement(ut,{items:t})),a.createElement(zt,null,a.createElement(pt,{item:i,rounded:!0})),a.createElement(Ht,null,a.createElement(pt,{item:r,rounded:!0})))})),$t=a.memo(Zt),Rt=ze.ZP.div`
  color: #FFCC00;
  text-align: center;
  text-transform: uppercase;
`,Wt=e=>{const{children:t}=e;return a.createElement(Rt,null,t)},Gt=a.memo(Wt),Xt=ze.ZP.div`
  width: 138px;
  cursor: pointer;

  img {
    width: 138px;
  }
`,jt=e=>{const{hero:t,onClick:s}=e;return a.createElement(Xt,{onClick:s},t&&a.createElement(qe,{refname:t,variant:"portrait"}))},qt=a.memo(jt),Yt=(0,ze.ZP)(ot)`
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

  ${Rt} {
    position: absolute;
    top: -25px;
    left: 69px;
    transform: translateX(-50%);
  }

  ${gt} {
    position: absolute;
    left: 0;
    bottom: 75px;
    z-index: 1;
    transform: translateX(-50%);
  }

  ${Xt} {
    margin-right: 8px;
  }
`,Kt=(0,ze.ZP)(ht)`
  min-width: 260px;
  margin: 0 10px;
`,Qt=(0,He.P)((e=>{const{selectedUnit:t,setSelection:s}=e;if(!t)return null;const{handle:i,isDead:r,name:n,refname:l,hp:o,hpMax:h,mp:c,mpMax:d,level:m,teamID:u,xp:p,abilities:g,backpack:f,inventory:b,neutralItem:y,teleportScroll:w}=t,C=(0,a.useCallback)((()=>{s(i)}),[i,s]);return a.createElement(Yt,null,a.createElement(Gt,null,n),m&&a.createElement(bt,{xp:p},m),a.createElement(Re,{active:!r},a.createElement(qt,{hero:l,onClick:C})),a.createElement(Kt,null,a.createElement(Ut,{abilities:g}),a.createElement(at,{type:"health",value:o,max:h,teamID:u}),a.createElement(at,{type:"mana",value:c,max:d})),b&&a.createElement($t,{backpack:f,inventory:b,neutralItem:y,teleportScroll:w}))})),Jt=(0,ze.ZP)(ot)`
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

  ${rt} {
    width: 50px;
  }
`,es=(0,He.P)((e=>{const{tick:t,lastTick:s,requestTick:i,playing:r,setPlaying:n}=e;return a.createElement(Jt,null,a.createElement(nt,{onClick:()=>n(!r)},r?"❚❚":"►"),a.createElement("input",{type:"range",min:0,max:s,step:1,value:t,onChange:e=>i(+e.target.value)}),a.createElement("div",{style:{whiteSpace:"nowrap"}},a.createElement(Bt,{time:t/30})," / ",a.createElement(Bt,{time:s/30})))})),ts=(0,ze.ZP)(Bt)`
  min-width: 70px;
  text-align: center;
`,ss=e=>a.createElement(ts,e),as=a.memo(ss),is=ze.ZP.div`
  cursor: pointer;
  margin-left: 1px;

  &:last-child {
    margin-right: 1px;
  }
`,rs=(0,He.P)((e=>{const{hero:t,onClick:s}=e,{color:i,isDead:r,hp:n,hpMax:l,mp:o,mpMax:h,refname:c,teamID:d}=t;return a.createElement(is,{onClick:s},a.createElement(_t,{color:i}),a.createElement(Re,{active:!r},a.createElement(qe,{refname:c,variant:"landscape"}),a.createElement(at,{type:"health",size:"mini",value:n,max:l,teamID:d}),a.createElement(at,{type:"mana",size:"mini",value:o,max:h})))})),ns=(0,ze.ZP)(ot)`
  img {
    display: block;
  }
`,ls=(0,He.P)((e=>{const{heroes:t,setSelection:s}=e;return a.createElement(ns,null,t.map((e=>a.createElement(rs,{key:e.handle,hero:e,onClick:()=>s(e.handle)}))))})),os=ze.ZP.div`
  font-weight: bold;
  min-width: 50px;
  text-align: center;
`,hs=e=>{const{value:t}=e;return a.createElement(os,null,t)},cs=a.memo(hs),ds=(0,ze.ZP)(ot)`
  align-items: center;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  background: rgba(0, 0, 0, .5);
`,ms=(0,He.P)((e=>{const{setSelection:t,teams:s,time:i}=e,r=s.byID.get(2),n=s.byID.get(3);return r&&n?a.createElement(ds,null,r.proID>0&&a.createElement(vt,{teamID:r.proID}),a.createElement(ls,{heroes:r.heroes,setSelection:t}),a.createElement(cs,{value:r.kills}),a.createElement(as,{time:i}),a.createElement(cs,{value:n.kills}),a.createElement(ls,{heroes:n.heroes,setSelection:t}),n.proID>0&&a.createElement(vt,{teamID:n.proID})):null})),us=e=>{const{children:t}=e;return a.createElement(a.Fragment,null,t)},ps=ze.ZP.div`
  position: absolute;
  // Adding an additional 8% to place the camera a bit higher up for comfort
  bottom: 58%;
  left: 50%;
`,gs=ze.ZP.div`
  position: relative;

  > img {
    position: relative;
    width: 4000px;
    height: 4000px;
    // Minor offsets here to get the map to align with actual entities
    transform: translate(-50.2%, 50.5%)
  }
`,fs=ze.ZP.div`
  width: 300px;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  text-align: center;

  p {
    margin: 10px 10px;
  }
`,bs=a.forwardRef(((e,t)=>{const{children:s,style:i}=e;return a.createElement(ps,{style:i},a.createElement(gs,null,a.createElement(fs,null,a.createElement("p",null,"Loading the Dota 2 map background..."),a.createElement("p",null,"If it never loads, your browser may not support the WebP image format."),a.createElement("p",null,"¯\\_(ツ)_/¯")),a.createElement("img",{ref:t,src:"./images/map/7.23.webp",alt:"Dota 2 map"}),s))})),ys=(0,ze.ZP)(Re)`
  ${e=>"large"===e.size&&ze.iv`
    width: 30px;
    height: 30px;
  `}
  padding: 10px;
  border-radius: 50%;
  border: 3px solid ${e=>e.color}DD;
  ${e=>e.selected&&ze.iv`
    border-color: white;
  `}
  position: absolute;
  transform: translate(-50%, 50%);
  background: ${e=>e.color}AA;
  cursor: pointer;

  img {
    display: block;
  }

  ${gt} {
    position: absolute;
    bottom: 0;
    left: 0;
    transform: translate(-20%, 20%);
  }
`,ws=(0,He.P)((e=>{const{onClick:t,selected:s,unit:i}=e,{handle:r,isDead:n,color:l,relX:o,relY:h}=i,c=i instanceof Ae;return a.createElement(ys,{active:!n,translucentWhenInactive:!0,color:l,onClick:()=>t(r),selected:s,size:c?"large":"default",style:{left:100*o+"%",bottom:100*h+"%"}},c&&a.createElement(a.Fragment,null,a.createElement(qe,{refname:i.refname,variant:"icon"}),a.createElement(bt,{xp:i.xp,size:"small"},i.level)))})),Cs=ze.ZP.div`
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
`,_s=e=>{const{camera:t,selectedUnit:s,setFreeCamera:i,setSelection:r,units:n}=e,[l,o]=(0,a.useState)(!1),h=(0,a.useRef)(null),[c]=(()=>{const[e,t]=(0,a.useState)(kt());return(0,a.useEffect)((()=>{const e=()=>{t(kt())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[t]),[e]})();(0,a.useEffect)((()=>{const e=h.current?.width,t=h.current?.height;i((s=>({...s,width:e?c.width/e:0,height:t?c.height/t:0})))}),[i,c]);const d=(0,a.useCallback)((e=>{e.preventDefault(),o(!0)}),[o]),m=(0,a.useCallback)((e=>{e.preventDefault(),o(!1)}),[o]),u=(0,a.useCallback)((e=>{if(!l)return;const{movementX:t,movementY:s}=e,{width:a,height:r}=h.current;i((e=>({...e,x:e.x+-t/a,y:e.y+s/r})))}),[l,i]),{x:p,y:g}=t;return a.createElement(Cs,{dragging:l,onDoubleClick:e=>e.preventDefault(),onMouseDown:d,onMouseUp:m,onMouseMove:u},a.createElement(bs,{ref:h,style:{transform:`translate(${100*-p}%, ${100*g}%)`}},n.map((e=>a.createElement(ws,{key:e.handle,unit:e,selected:s===e,onClick:r})))))},Ps=(0,ze.ZP)(yt.Z)`
  position: absolute;
  top: 12px;
  left: 15px;
  z-index: 5;
`,xs=ze.ZP.div`
  width: 100%;
  height: 100%;
  text-shadow: 1px 1px 1px #111,
               -1px 1px 1px #111,
               1px -1px 1px #111,
               -1px -1px 1px #111;
`,vs=(0,He.P)((({replay:e})=>{const{camera:t,playing:s,requestTick:i,selectedUnit:r,setFreeCamera:n,setPlaying:l,setSelection:o}=Dt(e);return a.createElement(xs,null,a.createElement(Ps,{to:"/"},"Back to ReDota"),a.createElement(us,null,a.createElement(Ot,{camera:t,setFreeCamera:n,units:e.units}),r&&a.createElement(Qt,{key:r.handle,selectedUnit:r,setSelection:o}),a.createElement(es,{playing:s,setPlaying:l,tick:e.tick,lastTick:e.lastTick,requestTick:i}),a.createElement(ms,{teams:e.teams,setSelection:o,time:e.time})),a.createElement(_s,{camera:t,selectedUnit:r,setFreeCamera:n,setSelection:o,units:e.units}))})),Bs=()=>{const e=(0,i.k6)(),{safeReplayURL:t}=(0,i.UO)(),s=decodeURIComponent(t),[l,o]=(0,a.useState)(null);return(0,a.useEffect)((()=>{(async()=>{let t=null;try{const e=await fetch(s);t=await e.arrayBuffer()}catch(t){return void e.push("/")}o(new class{constructor(e){this.emitter=new r,this.parser=new Le(e),this.tick=-1,this.tickInterval=null,this.lastTick=this.parser.lastTick,this.abilities=new h("handle"),this.items=new h("handle"),this.players=new h("handle",{byID:"id"}),this.teams=new h("handle",{byID:"id"}),this.units=new h("handle"),this.time=null,this.phase=null,this.onEntities=this.onEntities.bind(this),this.onTick=this.onTick.bind(this),this.parser.on("warn",this.emitter.emit.bind(this.emitter,"warn")),this.parser.on("entities",this.onEntities),this.parser.on("tick",this.onTick),this.seek=this.parser.seek.bind(this.parser),this.start=this.parser.start.bind(this.parser),this.step=this.parser.step.bind(this.parser),(0,n.rC)(this,{tick:n.LO,tickInterval:n.LO,lastTick:n.LO,abilities:n.LO,items:n.LO,players:n.LO,teams:n.LO,units:n.LO,time:n.LO,jump:n.aD,seek:n.aD,start:n.aD,step:n.aD})}jump(e){this.parser.off("entities",this.onEntities),this.parser.off("tick",this.onTick),this.parser.seek(e),this.parser.on("entities",this.onEntities),this.parser.on("tick",this.onTick),this.players.clear(),this.teams.clear(),this.units.clear();const t=this.parser.entities.map((e=>({entity:e,event:1})));this.onTick(this.parser.tick),this.onEntities(t)}jumpTo(e){for(;this.phase!==e;)this.step()}on(...e){this.emitter.on(...e)}off(...e){this.emitter.remove(...e)}onEntities(e){for(const{entity:t,event:s}of e){const e=t.class.name;let a=Ue[e];void 0===a&&(a=Ve.find((t=>e.startsWith(t.startsWith)))?.method,Ue[e]=a||null),a&&this[a](t,s)}this.emitter.emit("update")}onTick(e){this.tick=e,this.tickInterval=this.parser.tickInterval,this.emitter.emit("update")}processAbility(e,t){const s=e.handle;let a=this.abilities.get(s);if(a||(a=new class{constructor(e,t){this.replay=e,this.handle=t,this.refname=null,this.level=null,this.hidden=!1,this.manaCost=null,this.cooldown=null,(0,n.rC)(this,{refname:n.LO,hidden:n.LO,level:n.LO,manaCost:n.LO,cooldown:n.LO})}get isSeasonal(){return this.refname.startsWith("seasonal_")}get isTalent(){return this.refname.startsWith("special_bonus_")}}(this,s),this.abilities.add(a)),a&&4&t&&this.abilities.delete(a),!a.refname){const t=e.get("m_pEntity.m_nameStringableIndex"),s=this.parser.stringTables.get("EntityNames").entries[t].key;a.refname=s}a.entity=e,a.hidden=e.get("m_bHidden"),a.level=e.get("m_iLevel"),a.manaCost=e.get("m_iManaCost"),a.cooldown=e.get("m_fCooldown")}processBuilding(e,t){return this.processUnit(e,t,{hasRotation:!1})}processCollectable(e,t){}processGameRules(e){const t=e.get("m_pGameRules.m_fGameTime"),s=e.get("m_pGameRules.m_flGameStartTime"),a=e.get("m_pGameRules.m_flPreGameStartTime");if(s)this.time=t-s;else if(a){const s=e.get("m_pGameRules.m_flStateTransitionTime");this.time=t-s}this.phase=e.get("m_pGameRules.m_nGameState")}processHero(e,t){const s=this.processUnitWithInventory(e,t,{class:Ae});if(s){if(!s.refname){const t=e.get("m_pEntity.m_nameStringableIndex"),a=this.parser.stringTables.get("EntityNames").entries[t].key;s.refname=a.replace("npc_dota_hero_","")}s.playerID=e.get("m_iPlayerID"),s.level=e.get("m_iCurrentLevel"),s.xp=e.get("m_iCurrentXP"),s.abilityHandles[0]=e.get("m_hAbilities.0000"),s.abilityHandles[1]=e.get("m_hAbilities.0001"),s.abilityHandles[2]=e.get("m_hAbilities.0002"),s.abilityHandles[3]=e.get("m_hAbilities.0003"),s.abilityHandles[4]=e.get("m_hAbilities.0004"),s.abilityHandles[5]=e.get("m_hAbilities.0005"),s.abilityHandles[6]=e.get("m_hAbilities.0006"),s.abilityHandles[7]=e.get("m_hAbilities.0007"),s.abilityHandles[8]=e.get("m_hAbilities.0008"),s.abilityHandles[9]=e.get("m_hAbilities.0009"),s.abilityHandles[10]=e.get("m_hAbilities.0010"),s.abilityHandles[11]=e.get("m_hAbilities.0011"),s.abilityHandles[12]=e.get("m_hAbilities.0012"),s.abilityHandles[13]=e.get("m_hAbilities.0013"),s.abilityHandles[14]=e.get("m_hAbilities.0014"),s.abilityHandles[15]=e.get("m_hAbilities.0015"),s.abilityHandles[16]=e.get("m_hAbilities.0016"),s.backpackHandles[0]=e.get("m_hItems.0006"),s.backpackHandles[1]=e.get("m_hItems.0007"),s.backpackHandles[2]=e.get("m_hItems.0008"),s.stashHandles[0]=e.get("m_hItems.0009"),s.stashHandles[1]=e.get("m_hItems.0010"),s.stashHandles[2]=e.get("m_hItems.0011"),s.stashHandles[3]=e.get("m_hItems.0012"),s.stashHandles[4]=e.get("m_hItems.0013"),s.stashHandles[5]=e.get("m_hItems.0014"),s.teleportScrollHandle=e.get("m_hItems.0015"),s.neutralItemHandle=e.get("m_hItems.0016")}}processItem(e,t){const s=e.handle;let a=this.items.get(s);if(a||(a=new class{constructor(e,t){this.replay=e,this.handle=t,this.refname=null,this.charges=null,this.cooldown=null,(0,n.rC)(this,{handle:n.LO,refname:n.LO,charges:n.LO,cooldown:n.LO,name:n.Fl})}get name(){return u[this.refname].dname}}(this,s),this.items.add(a)),a&&4&t&&this.items.delete(a),!a.refname){const t=e.get("m_pEntity.m_nameStringableIndex"),s=this.parser.stringTables.get("EntityNames").entries[t].key;a.refname=s.replace("item_","")}a.charges=e.get("m_iCurrentCharges"),a.manaCost=e.get("m_iManaCost"),a.cooldown=e.get("m_fCooldown")}processPlayer(e,t){const s=e.handle;let a=this.players.get(s);a||(a=new class{constructor(e,t){this.replay=e,this.handle=t,this.id=null,this.name=null,this.teamID=null,this.kills=0,this.assists=0,this.deaths=0,this.isBot=!1,this.isBroadcaster=!1,(0,n.rC)(this,{id:n.LO,name:n.LO,teamID:n.LO,kills:n.LO,assists:n.LO,deaths:n.LO,isBot:n.LO,isBroadcaster:n.LO,color:n.Fl,index:n.Fl,team:n.Fl})}get color(){return f[this.id]}get index(){return String(this.id).padStart(4,"0")}get team(){return this.replay.teams.byID.get(this.teamID)}}(this,s),a.id=e.get("m_iPlayerID"),this.players.add(a)),a&&4&t?this.players.delete(a):a.teamID=e.get("m_iTeamNum")}processPlayerResource(e){for(const t of this.players){if(-1===t.id)continue;const s="m_vecPlayerData."+t.index;t.name=e.get(s+".m_iszPlayerName"),t.steamID=e.get(s+".m_iPlayerSteamID"),t.isBot=e.get(s+".m_bFakeClient");const a="m_vecPlayerTeamData."+t.index;t.kills=e.get(a+".m_iKills"),t.deaths=e.get(a+".m_iDeaths"),t.assists=e.get(a+".m_iAssists")}}processTeam(e,t){const s=e.handle;let a=this.teams.get(s);if(a||(a=new class{constructor(e,t){this.replay=e,this.handle=t,this.id=null,this.name=null,this.kills=0,this.proID=null,(0,n.rC)(this,{id:n.LO,name:n.LO,kills:n.LO,proID:n.LO,heroes:n.Fl,players:n.Fl,units:n.Fl})}get heroes(){return this.replay.units.filter((e=>e instanceof Ae&&e.teamID===this.id))}get players(){return this.replay.players.filter((e=>e.teamID===this.id))}get units(){return this.replay.units.filter((e=>e.teamID===this.id))}}(this,s),a.id=e.get("m_iTeamNum"),a.proID=e.get("m_unTournamentTeamID"),this.teams.add(a)),a&&4&t)throw new Error("no support for team deletion");a.name=e.get("m_szTeamname"),a.kills=e.get("m_iHeroKills")}processUnit(e,t,{class:s=Ne,hasRotation:a=!0}={}){const i=e.handle;let r=this.units.get(i);return r||(r=new s(this,i),r.class=e.class.name,this.units.add(r)),r&&4&t?(this.units.delete(r),null):(r.teamID=e.get("m_iTeamNum"),r.x=128*e.get("CBodyComponent.m_cellX")+e.get("CBodyComponent.m_vecX")-g,r.y=128*e.get("CBodyComponent.m_cellY")+e.get("CBodyComponent.m_vecY")-g,a&&(r.rotation=e.get("CBodyComponent.m_angRotation")[1]),r.hp=e.get("m_iHealth"),r.hpMax=e.get("m_iMaxHealth"),r.mp=e.get("m_flMana"),r.mpMax=e.get("m_flMaxMana"),r)}processUnitWithInventory(e,t,{class:s=Me}={}){const a=this.processUnit(e,t,{class:s});return a?(a.inventoryHandles[0]=e.get("m_hItems.0000"),a.inventoryHandles[1]=e.get("m_hItems.0001"),a.inventoryHandles[2]=e.get("m_hItems.0002"),a.inventoryHandles[3]=e.get("m_hItems.0003"),a.inventoryHandles[4]=e.get("m_hItems.0004"),a.inventoryHandles[5]=e.get("m_hItems.0005"),a):null}}(t))})()}),[e,s]),l?a.createElement(vs,{replay:l}):null}}}]);