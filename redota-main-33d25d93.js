(()=>{"use strict";var e,t,r,n={7548:(e,t,r)=>{r.d(t,{GC:()=>n,bM:()=>a,PS:()=>l,L2:()=>i,x3:()=>o,$e:()=>s,nc:()=>c,ct:()=>m});const n=16384,a=128,l={[-1]:"#DDDDDD",0:"#3375FF",1:"#66FFBF",2:"#BF00BF",3:"#F3F00B",4:"#FF6B00",5:"#FE86C2",6:"#A1B447",7:"#65D9F7",8:"#008321",9:"#A46900"},i={PREGAME:4,START:5,END:6},o=1,s=2,c=3,m={[s]:"#23B200",[c]:"#B21000",4:"#CAAA32"}},8098:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7548);let a=null;const l="matches",i=class{constructor(){this.uuid=void 0,this.replay=null,this.matchID=null,this.leagueID=null,this.duration=null,this.endedAt=null,this.winningTeamID=null,this.teams={}}get id(){return this.matchID||this.uuid}get label(){return this.matchID||this.replay.filename}get radiant(){return this.teams[n.$e]}get dire(){return this.teams[n.nc]}get winner(){return this.teams[this.winningTeamID]}delete(){return a[l].delete(this.uuid)}async update(e){const{default:t}=await Promise.all([r.e(736),r.e(827),r.e(153),r.e(319)]).then(r.bind(r,9384));this.replay={filename:e.name,size:e.size,blob:e};const n=new t(await e.arrayBuffer()),{summary:a}=n,l=a.gameInfo?.dota;if(this.duration=a.playbackTime,l){this.matchID=l.matchId,this.leagueID=l.leagueid,this.endedAt=new Date(1e3*l.endTime),this.gameMode=l.gameMode,this.winningTeamID=l.gameWinner,this.teams={};for(const e of l.playerInfo){const t=e.gameTeam;let r=this.teams[t];r||(r={name:null,proID:null,players:[]},this.teams[t]=r),r.players.push({hero:e.heroName})}this.radiant&&(this.radiant.name=l.radiantTeamTag,this.radiant.proID=l.radiantTeamId),this.dire&&(this.dire.name=l.direTeamTag,this.dire.proID=l.direTeamId)}else this.matchID=null,this.leagueID=null,this.endedAt=new Date(e.lastModified),this.gameMode=-1,this.winningTeamID=null}async refresh(){return this.replay&&await this.update(this.replay.blob),this.save()}save(){return a[l].put(this)}static get query(){return a[l]}static connect(e){return a=e,a[l].mapToClass(this),this}}},2954:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(9642),a=(r(5214),r(8098));const l=new n.default("redota");l.version(1).stores({matches:"$$uuid, &matchID, endedAt"}),l.models={Match:a.Z.connect(l)};const i=l},5531:(e,t,r)=>{var n=r(7294),a=r(3935),l=r(2168),i=r(9163),o=r(3727),s=r(5977),c=r(2743),m=r(1823),d=r(5036),u=r(1264);const p=i.ZP.div`
  position: relative;
  max-width: 1000px;
  padding: 0 64px;
  margin: 0 auto;
  text-shadow: 1px 1px 1px #000000;

  h1, h2 {
    margin-top: 1.5em;
    font-weight: normal;
    font-size: 1.625rem;
  }

  @media screen and (max-width: 1128px) {
    padding: 0 25px;
  }
`,h=i.ZP.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  opacity: .5;
  overflow: hidden;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    background:
      linear-gradient(to right, #0E0E0E 0%, rgba(14, 14, 14, 0.00) 10%, rgba(14, 14, 14, 0.00) 90%, #0E0E0E 100%),
      linear-gradient(to bottom, rgba(14, 14, 14, 0.00) 0%, #0E0E0E 82%);
  }
`,g=i.ZP.div`
  position: relative;
  z-index: 2;
`,f=i.ZP.header`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2.75em;

  h1, p {
    margin: 0;
  }

  p {
    font-family: 'Galdeano', sans-serif;
    font-size: 1.125rem;
    color: #D4D4D4;
    letter-spacing: 1.15px;
  }
`,b=i.ZP.div`
  opacity: .25;
  padding: 2em 0;
  text-align: center;

  p {
    font-size: .75rem;
  }
`,E=e=>{const{children:t,className:r}=e,a=n.createElement(d.Z,{to:"https://github.com/timkurvers/redota/#legalese",grayscale:!0},"legal and resource attributions");return n.createElement(p,null,n.createElement(f,null,n.createElement(d.Z,{to:"/"},n.createElement(u.Z,null)),n.createElement("p",null,"Revisit past Dota 2 matches in the browser")),n.createElement(h,null,n.createElement("img",{src:"./images/backdrop.jpg",alt:""})),n.createElement(g,{className:r},t),n.createElement(b,null,n.createElement("p",null,n.createElement("strong",null,"©2020-2021 ReDota")),n.createElement("p",null,"Dota 2 is a registered trademark of Valve Corporation.",n.createElement("br",null),"Image resources, lore and other references are property of Valve Corporation."),n.createElement("p",null,"See additional ",a," on ",n.createElement(m.Z,{brand:!0,name:"github"})," GitHub.")))};var v=r(1990),y=r(1690),x=r(2096),w=r(2954),Z=r(9649),k=r(2129);const D=e=>{const{date:t}=e;return t?t.toLocaleString(navigator.language,{year:"numeric",month:"short",day:"numeric"}):"-"};var P=r(6689),F=r(8588),$=r(3841),I=r(7548);const T=(0,i.ZP)(Z.U)`
  padding: 12px 15px;
  background: rgba(255, 255, 255, .02);
  border-radius: 10px;
  margin: 6px 0;
  align-items: center;

  &:nth-child(2n) {
    background: rgba(255, 255, 255, .04);
  }

  &:hover {
    background: rgba(255, 255, 255, .06);
  }
`,C=(0,i.ZP)(Z.U)`
  height: 26px;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.8rem;

  ${P.e}, ${Z.U} {
    height: 100%;
  }

  img {
    height: 100%;
    margin-right: 2px;
    vertical-align: middle;
  }

  i + ${Z.U} {
    margin-left: 10px;
  }

  & + & {
    margin-top: 2px;
  }
`,A=e=>{const{team:t,isWinner:r}=e,{name:a,players:l,proID:i}=t;return n.createElement(C,null,r&&n.createElement(m.Z,{name:"trophy",title:"Winner"}),i>0&&n.createElement(P.Z,{alt:a,teamID:i}),n.createElement(Z.U,null,l.map((e=>n.createElement($.mZ,{key:e.hero,refname:e.hero,variant:"landscape"})))))},S=(0,i.ZP)(Z.g)`
  border-left: 1px solid rgba(151, 151, 151, .15);
  margin-left: 18px;
  padding-left: 10px;

  ${v.S} {
    opacity: .5;
    padding: 5px 10px;

    &:hover {
      opacity: 1;
    }
  }
`,j=i.ZP.div`
  min-width: 90px;
  text-align: center;

  @media screen and (max-width: 700px) {
    display: none;
  }
`,O=(0,i.ZP)(Z.g)`
  flex-grow: 1;
`,z=(0,i.ZP)(Z.g)`
  min-width: 340px;
  min-height: 54px;
`,M=e=>{const{match:t}=e,{id:r,duration:a,endedAt:l,label:i,radiant:o,dire:s,winningTeamID:c}=t,u=(0,n.useCallback)((()=>{t.delete()}),[t]);return n.createElement(T,null,n.createElement(O,null,n.createElement(d.Z,{to:`/matches/${r}`},i),n.createElement(D,{date:l})),n.createElement(j,null,n.createElement(F.Z,{time:a})),n.createElement(z,{justify:"center"},o&&n.createElement(A,{team:o,isWinner:c===I.$e}),s&&n.createElement(A,{team:s,isWinner:c===I.nc})),n.createElement(S,null,n.createElement(v.Z,{onClick:u,label:"Remove match"},n.createElement(m.Z,{name:"trash-alt"}))))},_=(0,i.ZP)(Z.U)`
  margin-top: .8125rem;

  ${v.S} {
    margin: 1em;
  }
`,B=()=>{const e=(0,s.k6)(),[t,r]=(0,k.r8)((()=>w.Z.models.Match.query.orderBy("endedAt").reverse().toArray())),a=(0,n.useCallback)((()=>{e.push("/matches/find")}),[e]),l=(0,n.useCallback)((()=>{e.push("/matches/select")}),[e]);let i=null;if(!r){const e=t.reduce(((e,t)=>e+t.replay.size),0);i=Math.round(e/1e6)}const o=n.createElement(d.Z,{to:"http://replay138.valve.net/570/5712001132_579859928.dem.bz2"},"Download a replay of a pro-team match");return n.createElement(n.Fragment,null,!r&&t.map((e=>n.createElement(M,{key:e.uuid,match:e}))),!r&&!t.length&&n.createElement(x.Z,{kind:"instructions"},"Need a replay file to get started?",n.createElement("br",null),o,", unzip it and select it below."),n.createElement(_,{justify:"center"},n.createElement(v.Z,{fancy:!0,onClick:a,disabled:!0},"Find replays by match ID"),n.createElement(v.Z,{fancy:!0,onClick:l},"Select a local replay file")),i>0&&n.createElement("p",null,"The above replays take up approximately ",n.createElement("strong",null,i," MB")," of storage space in your browser. Use the trash cans to get rid of unwanted replays."))},W=i.ZP.div``,R=()=>n.createElement(W,null,n.createElement("h2",null,"Matches"),n.createElement(y.Z,{context:"database"},n.createElement(B,null)),n.createElement("p",null,n.createElement("strong",null,"Note:")," your browser may occasionally perform house keeping and remove website data including the replays. Maintain a local copy on your computer if you need them.")),N=i.ZP.aside``,U=()=>{const e=n.createElement(d.Z,{to:"https://github.com/dotabuff/manta"},"Dotabuff"),t=n.createElement(d.Z,{to:"https://github.com/timkurvers/redota"},n.createElement(m.Z,{brand:!0,name:"github"})," GitHub"),r=n.createElement(d.Z,{to:"https://moddota.com"},"ModDota"),a=n.createElement(d.Z,{to:"https://www.opendota.com"},"OpenDota"),l=n.createElement(d.Z,{to:"https://github.com/skadistats/clarity"},"Skadistats");return n.createElement(N,null,n.createElement("h2",null,"What is this?"),n.createElement("p",null,"An open-source experiment to revisit past Dota 2 matches in a web browser, visualizing the game as an interactive map."),n.createElement("p",null,"For bug reports, feedback and development of ReDota, visit the project on ",t,"."),n.createElement("h2",null,"Performance"),n.createElement("p",null,"Real-time playback of replays can be taxing on your machine, but should be performant in recent versions of modern browsers."),n.createElement("h2",null,"Attribution"),n.createElement("p",null,"ReDota is a heavily derived project and stands on the shoulders of giants, notably parsers by ",e," and ",l,"."),n.createElement("p",null,"Special thanks to community members from ",a," and ",r," who assisted in deciphering replay specifics."))},L=i.ZP.div`
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(151, 151, 151, 0) 0%, rgba(151, 151, 151, .15) 10%,
    rgba(151, 151, 151, .15) 90%, rgba(151, 151, 151, 0) 100%
  );
  margin: 0 20px;
`,G=i.ZP.div``,q=(0,i.ZP)(E)`
  @media screen and (min-width: 900px) {
    ${G} {
      display: flex;
      flex-direction: row-reverse;
    }

    ${W} {
      width: 76%;
    }

    ${N} {
      width: 24%;
    }
  }
`,Y=e=>{const{children:t}=e;return(0,c.K)(),n.createElement(q,null,n.createElement(G,null,n.createElement(U,null),n.createElement(L,null),n.createElement(R,null)),t)},H=(0,i.ZP)(E)`
  text-align: center;
`,X=()=>((0,c.Z)("404"),n.createElement(H,null,n.createElement("h2",null,"404 Not Found"),n.createElement("p",null,"Exist, this page does not."))),K=(0,l.ZP)((()=>Promise.all([r.e(736),r.e(827),r.e(153),r.e(319)]).then(r.bind(r,106)))),Q=(0,l.ZP)((()=>Promise.all([r.e(736),r.e(827),r.e(153),r.e(319)]).then(r.bind(r,3887)))),V=(0,l.ZP)((()=>Promise.all([r.e(736),r.e(827),r.e(153),r.e(319)]).then(r.bind(r,4088)))),J=i.ZP.div`
  box-sizing: content-box;
  letter-spacing: 0.5px;
`,ee=()=>n.createElement(J,null,n.createElement(o.UT,null,n.createElement(s.rs,null,n.createElement(s.AW,{exact:!0,path:["/","/matches","/matches/find","/matches/select"]},n.createElement(Y,null,n.createElement(s.AW,{path:"/matches/find"},n.createElement(Q,null)),n.createElement(s.AW,{path:"/matches/select"},n.createElement(V,null)))),n.createElement(s.AW,{path:"/matches/:id"},n.createElement(K,null)),n.createElement(s.AW,null,n.createElement(X,null))))),te=document.querySelector("#container");a.render(n.createElement(ee,null),te)},1990:(e,t,r)=>{r.d(t,{Z:()=>o,S:()=>i});var n=r(7294),a=r(9163);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const i=a.ZP.button`
  appearance: none;
  background: none;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;

  ${e=>e.fancy&&a.iv`
    background: #610606;
    box-shadow: inset 1px 1px 0 0 #B60A0A, inset -1px -1px 0 0 #410404;
    border-radius: 6px;
    padding: 6px 40px;
    font-family: 'Galdeano', sans-serif;
    text-shadow: 1px 1px 0 #942020, -1px -1px 1px #000000;
  `}

  ${e=>e.disabled&&a.iv`
    filter: grayscale(50%);
    opacity: .5;
    cursor: not-allowed;
  `}
`,o=e=>{const{label:t,...r}=e,a={};return t&&(a["aria-label"]=t,a.title=t),n.createElement(i,l({type:"button"},r,a))}},9535:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(9163),l=r(5036);const i=a.ZP.div`
  display: block;
  position: relative;
  padding: 20px;
  border-radius: 5px;
  background: #820000;
  border: 1px solid #FF0000;
  color: #FFFFFF;
  text-shadow: 1px 1px 1px #000000;

  h3 {
    margin-top: 0;
  }

  details {
    margin-top: 1.5em;
  }

  summary {
    cursor: pointer;
  }

  pre {
    max-height: 15em;
    padding-left: 1.5em;
    overflow: auto;
    white-space: pre-wrap;
    font-size: .8rem;
    text-shadow: none;
  }
`,o=a.ZP.div`
  padding: 1.25em;
`,s=e=>{const{context:t,error:r}=e,a=n.createElement(l.Z,{to:"https://github.com/timkurvers/redota/issues",grayscale:!0},"open an issue"),{name:s,message:c}=r,m=`${s}: ${c}\n`;let{stack:d}=r;return d=d.startsWith(m)?d.replace(m,""):d.replace(/^/gm,"    at "),n.createElement(o,null,n.createElement(i,null,n.createElement("h3",null,"Whoops, an error occurred!"),"database"===t&&n.createElement(n.Fragment,null,n.createElement("p",null,"ReDota stores match and replay data in a local database in your browser and unfortunately something went wrong trying to access it."),n.createElement("p",null,"Please note that private / incognito mode is ",n.createElement("strong",null,"NOT")," supported in Mozilla Firefox and Safari as these browsers restrict access or lack features while in this mode.")),n.createElement("p",null,"If you believe this to be a novel bug in ReDota, please ",a,"."),n.createElement("details",null,n.createElement("summary",null,"Technical details"),n.createElement("pre",null,m,d))))}},1690:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(9535);class l extends n.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){const{children:e,context:t}=this.props,{error:r}=this.state;return r?n.createElement(a.Z,{context:t,error:r}):e}}const i=l},1823:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{const{brand:t,name:r,title:a}=e,l=`${t?"fab":"fas"} fa-${r}`;return n.createElement("i",{className:l,title:a})}},5036:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7294),a=r(9163),l=r(3727);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const o=(0,a.ZP)(l.rU)`
  color: #C22E1F;
  text-decoration: none;

  &:hover {
    color: #FF1700;
  }

  ${e=>e.grayscale&&a.iv`
    color: #CCC;
    border-bottom: 1px solid currentColor;

    &:hover {
      color: #FFF;
    }
  `}
`,s=e=>{const{to:t}=e;return t.startsWith("http")?n.createElement(o,i({as:"a",href:t},e)):n.createElement(o,e)},c=n.memo(s)},1264:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=()=>n.createElement("img",{alt:"ReDota",src:"./images/logo.svg"})},2096:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(9163);const l=a.ZP.p`
  color: #BBB;
  text-align: center;

  ${e=>"error"===e.kind&&a.iv`
    color: #C22E1F;
  `}
`,i=e=>{const{children:t,kind:r="notice"}=e;return n.createElement(l,{kind:r},t)}},3841:(e,t,r)=>{r.d(t,{tc:()=>m,mZ:()=>d,Ji:()=>u,Y:()=>p,$i:()=>g});var n=r(7294);const a="https://cdn.cloudflare.steamstatic.com/apps/dota2/images",l=e=>`${a}/dota_react/abilities/${e}.png`,i=(e,t)=>{let r="full.png";switch(t){case"portrait":r="vert.jpg";break;case"landscape":r="sb.png";break;case"icon":r="icon.png";break;default:r="full.png"}const n=e.replace("npc_dota_hero_","");return`${a}/heroes/${n}_${r}`},o=e=>{let t=e.replace("item_","");return t.startsWith("recipe_")&&(t="recipe"),`${a}/items/${t}_lg.png`},s=e=>`${a}/team_logos/${e}.png`,c=e=>{const{alt:t,src:r}=e;return n.createElement("img",{src:r,draggable:"false",alt:t,style:{userSelect:"none"}})},m=n.memo((e=>{const{refname:t}=e;return n.createElement(c,{src:l(t)})})),d=n.memo((e=>{const{refname:t,variant:r}=e;return n.createElement(c,{src:i(t,r)})})),u=n.memo((e=>{const{refname:t}=e;return n.createElement(c,{src:o(t)})})),p=n.memo((e=>{const{alt:t,teamID:r}=e;return n.createElement(c,{alt:t,src:s(r)})})),h=n.memo((e=>{const{refname:t,variant:r}=e,a=((e,t)=>{switch(t){case"portrait":return`./images/portraits/${e}.jpg`;case"icon":return`./images/icons/${e}.png`;default:return null}})(t,r);return a?n.createElement(c,{src:a}):null})),g=n.memo((e=>{const{unit:t,unit:{refname:r},variant:a}=e;return"hero"===t.type?n.createElement(d,{refname:r,variant:a}):n.createElement(h,{refname:r,variant:a})}))},9649:(e,t,r)=>{r.d(t,{g:()=>l,U:()=>a});var n=r(9163);const a=n.ZP.div.withConfig({shouldForwardProp:e=>"wrap"!==e})`
  display: flex;
  flex-direction: row;

  ${e=>"center"===e.justify&&n.iv`
    justify-content: center;
  `}

  ${e=>e.wrap&&n.iv`
    flex-wrap: wrap;
  `}
`,l=(0,n.ZP)(a)`
  flex-direction: column;
`},6689:(e,t,r)=>{r.d(t,{Z:()=>s,e:()=>i});var n=r(7294),a=r(9163),l=r(3841);const i=a.ZP.div`
  padding: 0 10px;
  text-align: center;

  img {
    max-width: 40px;
  }
`,o=e=>{const{alt:t,teamID:r}=e;return n.createElement(i,null,n.createElement(l.Y,{alt:t,teamID:r}))},s=n.memo(o)},8588:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{let{time:t}=e;const r=t<0?"-":"";t=Math.abs(t);const a=t/3600|0;t%=3600;const l=t/60|0;t%=60;const i=0|t;return n.createElement(n.Fragment,null,r,a>0&&n.createElement(n.Fragment,null,a,":"),`00${l}`.slice(-2),":",`00${i}`.slice(-2),r?" ":"")}},2129:(e,t,r)=>{r.d(t,{bd:()=>n,r8:()=>i,_P:()=>c,ZQ:()=>m.Z,dz:()=>u});var n=r(3280),a=r(1039);const l=Symbol("awaiting db result"),i=(e,t=[])=>{const r=(0,a.useLiveQuery)(e,t,l),n=r===l;return[n?null:r,n]};var o=r(7294);var s=r(7548);const c=e=>{const[t,r]=(0,o.useState)({relX:0,relY:0,width:0,height:0}),[n,a]=(0,o.useState)(-1),[l,i]=(0,o.useState)(!1),[c,m]=(0,o.useState)(null),d=-1===n,u=d?t:e?.players.byID.get(n)?.camera;(0,o.useEffect)((()=>{e.on("warn",console.warn),e.start(),e.jumpTo(s.L2.PREGAME)}),[e]),((e,t)=>{const r=(0,o.useRef)();(0,o.useEffect)((()=>{r.current=e}),[e]),(0,o.useEffect)((()=>{if(null!==t){const e=setInterval((()=>{r.current()}),t);return()=>clearInterval(e)}}),[t])})((()=>{e.step(2)}),e&&l?1/e.tickInterval*2:null);const p=e?.units.find((e=>e.handle===c)),h=(0,o.useCallback)((t=>{e.jump(t)}),[e]),g=(0,o.useCallback)((e=>{e===c&&d&&r((e=>({...e,relX:p.position.relX,relY:p.position.relY}))),m(e)}),[d,c,p,r,m]);return{camera:u,cameraID:n,isFreeCamera:d,playing:l,requestTick:h,selectedUnit:p,setCameraID:a,setFreeCamera:r,setPlaying:i,setSelection:g}};var m=r(2743);const d=()=>{const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}},u=()=>{const[e,t]=(0,o.useState)(d());return(0,o.useEffect)((()=>{const e=()=>{t(d())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[t]),[e]}},2743:(e,t,r)=>{r.d(t,{Z:()=>s,K:()=>o});var n=r(7294),a=r(5977);const l=document.title,i=(e=null)=>{const t=(0,a.TH)();(0,n.useEffect)((()=>{document.title=e?`${e} | ReDota`:l}),[t,e])},o=i,s=i}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return n[e].call(r.exports,r,r.exports,l),r.exports}l.m=n,e=[],l.O=(t,r,n,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,n,a]=e[c],o=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(l.O).every((e=>l.O[e](r[s])))?r.splice(s--,1):(o=!1,a<i&&(i=a));o&&(e.splice(c--,1),t=n())}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>"redota-"+{153:"dotaconstants",319:"parser+viewer",827:"protobuf"}[e]+"-"+{153:"94c2cf18",319:"da20fb6e",827:"6118ddd5"}[e]+".js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="@timkurvers/redota:",l.l=(e,n,a,i)=>{if(t[e])t[e].push(n);else{var o,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),m=0;m<c.length;m++){var d=c[m];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+a){o=d;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.setAttribute("data-webpack",r+a),o.src=e),t[e]=[n];var u=(r,n)=>{o.onerror=o.onload=null,clearTimeout(p);var a=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),s&&document.head.appendChild(o)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={179:0};l.f.j=(t,r)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var i=l.p+l.u(t),o=new Error;l.l(i,(r=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",o.name="ChunkLoadError",o.type=a,o.request=i,n[1](o)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[i,o,s]=r,c=0;for(n in o)l.o(o,n)&&(l.m[n]=o[n]);for(s&&s(l),t&&t(r);c<i.length;c++)a=i[c],l.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;l.O()},r=self.webpackChunk_timkurvers_redota=self.webpackChunk_timkurvers_redota||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=l.O(void 0,[736],(()=>l(5531)));i=l.O(i)})();