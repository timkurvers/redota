(()=>{"use strict";var e,t,r,n={7548:(e,t,r)=>{r.d(t,{GC:()=>n,bM:()=>a,PS:()=>l,L2:()=>i,x3:()=>o,$e:()=>s,nc:()=>c,ct:()=>m});const n=16384,a=128,l={[-1]:"#DDDDDD",0:"#3375FF",1:"#66FFBF",2:"#BF00BF",3:"#F3F00B",4:"#FF6B00",5:"#FE86C2",6:"#A1B447",7:"#65D9F7",8:"#008321",9:"#A46900"},i={PREGAME:4,START:5,END:6},o=1,s=2,c=3,m={[s]:"#23B200",[c]:"#B21000",4:"#CAAA32"}},1204:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(9642),a=(r(5214),r(7548));let l=null;const i="matches",o=new n.default("redota");o.version(1).stores({matches:"$$uuid, &matchID, endedAt"}),o.models={Match:class{constructor(){this.uuid=void 0,this.replay=null,this.matchID=null,this.leagueID=null,this.duration=null,this.createdAt=new Date,this.endedAt=null,this.winningTeamID=null,this.teams={}}get id(){return this.matchID||this.uuid}get label(){return this.matchID||this.replay.filename}get radiant(){return this.teams[a.$e]}get dire(){return this.teams[a.nc]}get winner(){return this.teams[this.winningTeamID]}delete(){return l[i].delete(this.uuid)}async update(e){var t;const{default:n}=await Promise.all([r.e(736),r.e(827),r.e(153),r.e(319)]).then(r.bind(r,9384));this.replay={filename:e.name,size:e.size,blob:e};const a=new n(await e.arrayBuffer()),{summary:l}=a,i=null===(t=l.gameInfo)||void 0===t?void 0:t.dota;if(this.duration=l.playbackTime,i){this.matchID=i.matchId,this.leagueID=i.leagueid,this.endedAt=new Date(1e3*i.endTime),this.gameMode=i.gameMode,this.winningTeamID=i.gameWinner,this.teams={};for(const e of i.playerInfo){const t=e.gameTeam;let r=this.teams[t];r||(r={name:null,proID:null,players:[]},this.teams[t]=r),r.players.push({hero:e.heroName})}this.radiant&&(this.radiant.name=i.radiantTeamTag,this.radiant.proID=i.radiantTeamId),this.dire&&(this.dire.name=i.direTeamTag,this.dire.proID=i.direTeamId)}else this.matchID=null,this.leagueID=null,this.endedAt=new Date(e.lastModified),this.gameMode=-1,this.winningTeamID=null}async refresh(){return this.replay&&await this.update(this.replay.blob),this.save()}save(){return l[i].put(this)}static get query(){return l[i]}static connect(e){return l=e,l[i].mapToClass(this),this}}.connect(o)};const s=o},8717:(e,t,r)=>{var n=r(7294),a=r(3935),l=r(2168),i=r(9163),o=r(3727),s=r(5977),c=r(2743),m=r(1823),d=r(5036),u=r(1264);const p=i.ZP.div`
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
`,E=e=>{const{children:t,className:r}=e,a=n.createElement(d.Z,{to:"https://github.com/timkurvers/redota/#legalese",grayscale:!0},"legal and resource attributions");return n.createElement(p,null,n.createElement(f,null,n.createElement(d.Z,{to:"/"},n.createElement(u.Z,null)),n.createElement("p",null,"Revisit past Dota 2 matches in the browser")),n.createElement(h,null,n.createElement("img",{src:"./images/backdrop.jpg",alt:""})),n.createElement(g,{className:r},t),n.createElement(b,null,n.createElement("p",null,n.createElement("strong",null,"©2020-2021 ReDota")),n.createElement("p",null,"Dota 2 is a registered trademark of Valve Corporation.",n.createElement("br",null),"Image resources, lore and other references are property of Valve Corporation."),n.createElement("p",null,"See additional ",a," on ",n.createElement(m.Z,{brand:!0,name:"github"})," GitHub.")))};var v=r(1990),y=r(1690),w=r(2096),x=r(1204),Z=r(2129),k=r(3552);const P=()=>{const e=(0,s.k6)(),[t,r]=(0,Z.r8)((()=>x.Z.models.Match.query.orderBy("endedAt").reverse().toArray())),a=(0,n.useCallback)((()=>{e.push("/matches/find")}),[e]),l=(0,n.useCallback)((()=>{e.push("/matches/select")}),[e]);let i=null;if(!r){const e=t.reduce(((e,t)=>e+t.replay.size),0);i=Math.round(e/1e6)}const o=n.createElement(d.Z,{to:"/matches/find/5712001132"},"searching for a professional game");return n.createElement(n.Fragment,null,!r&&!t.length&&n.createElement(w.Z,{kind:"instructions"},"Get started with ReDota by ",o,"."),n.createElement(w.Z,{kind:"warning"},n.createElement(m.Z,{name:"exclamation-triangle"})," ReDota currently uses the 7.23 map as a background.",n.createElement("br",null),"Games played on patch 7.29 may consequently look odd."),!r&&t.map((e=>n.createElement(k.Z,{key:e.uuid,match:e}))),n.createElement(v.pA,null,n.createElement(v.ZP,{fancy:!0,onClick:a},"Find replay by match ID"),n.createElement(v.ZP,{fancy:!0,onClick:l},"Select local replay file")),i>0&&n.createElement("p",null,"The above replays take up approximately ",n.createElement("strong",null,i," MB")," of storage space in your browser. Use the trash cans to get rid of unwanted replays."),n.createElement("p",null,n.createElement("strong",null,"Note:")," your browser may occasionally perform house keeping and remove website data including the replays. Maintain a local copy on your computer if you need them."))},D=i.ZP.div``,F=()=>n.createElement(D,null,n.createElement("h2",null,"Matches"),n.createElement(y.Z,{context:"database"},n.createElement(P,null))),$=i.ZP.aside``,I=()=>{const e=n.createElement(d.Z,{to:"https://github.com/dotabuff/manta"},"Dotabuff"),t=n.createElement(d.Z,{to:"https://github.com/timkurvers/redota"},n.createElement(m.Z,{brand:!0,name:"github"})," GitHub"),r=n.createElement(d.Z,{to:"https://moddota.com"},"ModDota"),a=n.createElement(d.Z,{to:"https://www.opendota.com"},"OpenDota"),l=n.createElement(d.Z,{to:"https://github.com/skadistats/clarity"},"Skadistats");return n.createElement($,null,n.createElement("h2",null,"What is this?"),n.createElement("p",null,"An open-source experiment to revisit past Dota 2 matches in a web browser, visualizing the game as an interactive map."),n.createElement("p",null,"For bug reports, feedback and development of ReDota, visit the project on ",t,"."),n.createElement("h2",null,"Performance"),n.createElement("p",null,"Real-time playback of replays can be taxing on your machine, but should be performant in recent versions of modern browsers."),n.createElement("h2",null,"Attribution"),n.createElement("p",null,"ReDota is a heavily derived project and stands on the shoulders of giants, notably parsers by ",e," and ",l,"."),n.createElement("p",null,"Special thanks to community members from ",a," and ",r," who assisted in deciphering replay specifics."))},A=i.ZP.div`
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(151, 151, 151, 0) 0%, rgba(151, 151, 151, .15) 10%,
    rgba(151, 151, 151, .15) 90%, rgba(151, 151, 151, 0) 100%
  );
  margin: 0 20px;
`,T=i.ZP.div``,C=(0,i.ZP)(E)`
  @media screen and (min-width: 900px) {
    ${T} {
      display: flex;
      flex-direction: row-reverse;
    }

    ${D} {
      width: 76%;
    }

    ${$} {
      width: 24%;
    }
  }
`,S=e=>{const{children:t}=e;return(0,c.K)(),n.createElement(C,null,n.createElement(T,null,n.createElement(I,null),n.createElement(A,null),n.createElement(F,null)),t)},j=(0,i.ZP)(E)`
  text-align: center;
`,O=()=>((0,c.Z)("404"),n.createElement(j,null,n.createElement("h2",null,"404 Not Found"),n.createElement("p",null,"Exist, this page does not."))),z=(0,l.ZP)((()=>Promise.all([r.e(736),r.e(827),r.e(153),r.e(319)]).then(r.bind(r,5038)))),M=(0,l.ZP)((()=>Promise.all([r.e(736),r.e(827),r.e(153),r.e(319)]).then(r.bind(r,3887)))),B=(0,l.ZP)((()=>Promise.all([r.e(736),r.e(827),r.e(153),r.e(319)]).then(r.bind(r,8209)))),_=i.ZP.div`
  box-sizing: content-box;
  letter-spacing: 0.5px;
`,R=()=>n.createElement(_,null,n.createElement(o.UT,null,n.createElement(s.rs,null,n.createElement(s.AW,{exact:!0,path:["/","/matches","/matches/find/:prefill?","/matches/select"]},n.createElement(S,null,n.createElement(s.AW,{path:"/matches/find/:prefill?"},n.createElement(M,null)),n.createElement(s.AW,{path:"/matches/select"},n.createElement(B,null)))),n.createElement(s.AW,{path:"/matches/:id"},n.createElement(z,null)),n.createElement(s.AW,null,n.createElement(O,null))))),W=document.querySelector("#container");a.render(n.createElement(R,null),W)},1990:(e,t,r)=>{r.d(t,{ZP:()=>m,pA:()=>c,Sn:()=>o});var n=r(7294),a=r(9163),l=r(9649);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const o=a.ZP.button`
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
    margin: .5em 1em 1em;
    font-family: 'Galdeano', sans-serif;
    text-shadow: 1px 1px 0 #942020, -1px -1px 1px #000000;

    ${!e.disabled&&a.iv`
      &:hover, &:focus {
        filter: saturate(125%);
      }
    `}
  `}

  ${e=>e.disabled&&a.iv`
    filter: brightness(50%);
    cursor: not-allowed;
  `}
`,s=(0,a.ZP)(l.U)`
  margin-top: .8125rem;

  ${o} {
    margin: 1em;
  }
`,c=e=>n.createElement(s,i({justify:"center"},e)),m=e=>{const{label:t,...r}=e,a={};return t&&(a["aria-label"]=t,a.title=t),n.createElement(o,i({type:"button"},r,a))}},9535:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(9163),l=r(5036);const i=a.ZP.div`
  display: block;
  position: relative;
  padding: 20px;
  border-radius: 5px;
  background: #820000;
  border: 1px solid #FF0000;
  color: #FFFFFF;
  text-shadow: 1px 1px 1px #000000;
  text-align: left;

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
`,s=e=>{const{context:t,error:r}=e,a=n.createElement(l.Z,{to:"https://github.com/timkurvers/redota/issues",grayscale:!0},"open an issue"),{name:s,message:c}=r,m=`${s?`${s}: `:""}${c}\n`;let{stack:d}=r;return d&&(d=d.startsWith(m)?d.replace(m,""):d.replace(/^/gm,"    at ")),n.createElement(o,null,n.createElement(i,null,n.createElement("h3",null,"Whoops, an error occurred!"),"database"===t&&n.createElement(n.Fragment,null,n.createElement("p",null,"ReDota stores match and replay data in a local database in your browser and unfortunately something went wrong trying to access it."),n.createElement("p",null,"Please note that private / incognito mode is ",n.createElement("strong",null,"NOT")," supported in Mozilla Firefox and Safari as these browsers restrict access or lack features while in this mode.")),n.createElement("p",null,"If you believe this to be a novel bug in ReDota, please ",a,"."),n.createElement("details",null,n.createElement("summary",null,"Technical details"),n.createElement("pre",null,m,d))))}},1690:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(9535);class l extends n.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){const{children:e,context:t}=this.props,{error:r}=this.state;return r?n.createElement(a.Z,{context:t,error:r}):e}}const i=l},1823:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{const{brand:t,name:r,title:a}=e,l=`${t?"fab":"fas"} fa-${r}`;return n.createElement("i",{className:l,title:a})}},5036:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(7294),a=r(9163),l=r(3727);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}const o=(0,a.ZP)(l.rU)`
  color: #C22E1F;
  text-decoration: none;

  &:hover, &:focus {
    color: #FF1700;
  }

  ${e=>e.grayscale&&a.iv`
    color: #CCC;
    border-bottom: 1px solid currentColor;

    &:hover, &:focus {
      color: #FFF;
    }
  `}
`,s=e=>{const{to:t}=e;return t.startsWith("http")?n.createElement(o,i({as:"a",href:t},e)):n.createElement(o,e)},c=n.memo(s)},1264:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=()=>n.createElement("img",{alt:"ReDota",src:"./images/logo.svg"})},2096:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7294),a=r(9163);const l=a.ZP.p`
  color: #BBB;
  text-align: center;

  ${e=>"error"===e.kind&&a.iv`
    color: #C22E1F;
  `}

  ${e=>"warning"===e.kind&&a.iv`
    color: #B08C00;
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
`,o=e=>{const{alt:t,teamID:r}=e;return n.createElement(i,null,n.createElement(l.Y,{alt:t,teamID:r}))},s=n.memo(o)},8588:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{let{time:t}=e;const r=t<0?"-":"";t=Math.abs(t);const a=t/3600|0;t%=3600;const l=t/60|0;t%=60;const i=0|t;return n.createElement(n.Fragment,null,r,a>0&&n.createElement(n.Fragment,null,a,":"),`00${l}`.slice(-2),":",`00${i}`.slice(-2),r?" ":"")}},2129:(e,t,r)=>{r.d(t,{bd:()=>n,r8:()=>i,_P:()=>c,ZQ:()=>m.Z,dz:()=>u});var n=r(3280),a=r(1039);const l=Symbol("awaiting db result"),i=(e,t=[])=>{const r=(0,a.useLiveQuery)(e,t,l),n=r===l;return[n?null:r,n]};var o=r(7294);var s=r(7548);const c=e=>{var t;const[r,n]=(0,o.useState)({relX:0,relY:0,width:0,height:0}),[a,l]=(0,o.useState)(-1),[i,c]=(0,o.useState)(!1),[m,d]=(0,o.useState)(null),u=-1===a,p=u?r:null==e||null===(t=e.players.byID.get(a))||void 0===t?void 0:t.camera;(0,o.useEffect)((()=>{e.on("warn",console.warn),e.start(),e.jumpTo(s.L2.PREGAME)}),[e]),((e,t)=>{const r=(0,o.useRef)();(0,o.useEffect)((()=>{r.current=e}),[e]),(0,o.useEffect)((()=>{if(null!==t){const e=setInterval((()=>{r.current()}),t);return()=>clearInterval(e)}}),[t])})((()=>{e.step(2)}),e&&i?1/e.tickInterval*2:null);const h=null==e?void 0:e.units.find((e=>e.handle===m)),g=(0,o.useCallback)((t=>{e.jump(t)}),[e]),f=(0,o.useCallback)((e=>{e===m&&u&&n((e=>({...e,relX:h.position.relX,relY:h.position.relY}))),d(e)}),[u,m,h,n,d]);return{camera:p,cameraID:a,isFreeCamera:u,playing:i,requestTick:g,selectedUnit:h,setCameraID:l,setFreeCamera:n,setPlaying:c,setSelection:f}};var m=r(2743);const d=()=>{const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}},u=()=>{const[e,t]=(0,o.useState)(d());return(0,o.useEffect)((()=>{const e=()=>{t(d())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[t]),[e]}},2743:(e,t,r)=>{r.d(t,{Z:()=>s,K:()=>o});var n=r(7294),a=r(5977);const l=document.title,i=(e=null)=>{const t=(0,a.TH)();(0,n.useEffect)((()=>{document.title=e?`${e} | ReDota`:l}),[t,e])},o=i,s=i},3552:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(7294),a=r(9163),l=r(1990);const i=a.ZP.span`
  white-space: nowrap;
`,o=e=>{const{date:t}=e;return t?n.createElement(i,null,t.toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"})):"-"};var s=r(1823),c=r(5036),m=r(6689),d=r(8588),u=r(3841),p=r(9649),h=r(7548);const g=(0,a.ZP)(p.U)`
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
`,f=(0,a.ZP)(p.U)`
  height: 26px;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.8rem;

  ${m.e}, ${p.U} {
    height: 100%;
  }

  img {
    height: 100%;
    margin-right: 2px;
    vertical-align: middle;
  }

  i + ${p.U} {
    margin-left: 10px;
  }

  & + & {
    margin-top: 2px;
  }
`,b=e=>{const{team:t,isWinner:r}=e,{name:a,players:l,proID:i}=t;return n.createElement(f,null,r&&n.createElement(s.Z,{name:"trophy",title:"Winner"}),i>0&&n.createElement(m.Z,{alt:a,teamID:i}),n.createElement(p.U,null,l.map((e=>n.createElement(u.mZ,{key:e.hero,refname:e.hero,variant:"landscape"})))))},E=(0,a.ZP)(p.g)`
  border-left: 1px solid rgba(151, 151, 151, .15);
  margin-left: 18px;
  padding-left: 10px;

  ${l.Sn} {
    opacity: .5;
    padding: 5px 10px;

    &:hover, &:focus {
      opacity: 1;
    }
  }
`,v=a.ZP.div`
  min-width: 90px;
  text-align: center;
  white-space: nowrap;

  @media screen and (max-width: 700px) {
    display: none;
  }
`,y=(0,a.ZP)(p.g)`
  flex-grow: 1;
`,w=(0,a.ZP)(p.g)`
  min-width: 340px;
  min-height: 54px;
`,x=e=>{const{match:t,isPreview:r=!1}=e,{id:a,duration:i,endedAt:m,label:u,radiant:p,dire:f,winningTeamID:x}=t,Z=(0,n.useCallback)((()=>{t.delete()}),[t]);return n.createElement(g,null,n.createElement(y,null,!r&&n.createElement(c.Z,{to:`/matches/${a}`},u),n.createElement(o,{date:m})),n.createElement(v,null,n.createElement(d.Z,{time:i})),n.createElement(w,{justify:"center"},p&&n.createElement(b,{team:p,isWinner:x===h.$e}),f&&n.createElement(b,{team:f,isWinner:x===h.nc})),!r&&n.createElement(E,null,n.createElement(l.ZP,{onClick:Z,label:"Remove match"},n.createElement(s.Z,{name:"trash-alt"}))))}}},a={};function l(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return n[e].call(r.exports,r,r.exports,l),r.exports}l.m=n,e=[],l.O=(t,r,n,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,n,a]=e[c],o=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(l.O).every((e=>l.O[e](r[s])))?r.splice(s--,1):(o=!1,a<i&&(i=a));o&&(e.splice(c--,1),t=n())}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var r in t)l.o(t,r)&&!l.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,r)=>(l.f[r](e,t),t)),[])),l.u=e=>"redota-"+{153:"dotaconstants",319:"parser+viewer",827:"protobuf"}[e]+"-"+{153:"bc5f714d",319:"20227ef9",827:"6118ddd5"}[e]+".js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},r="@timkurvers/redota:",l.l=(e,n,a,i)=>{if(t[e])t[e].push(n);else{var o,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),m=0;m<c.length;m++){var d=c[m];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==r+a){o=d;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.setAttribute("data-webpack",r+a),o.src=e),t[e]=[n];var u=(r,n)=>{o.onerror=o.onload=null,clearTimeout(p);var a=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),a&&a.forEach((e=>e(n))),r)return r(n)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),s&&document.head.appendChild(o)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={179:0};l.f.j=(t,r)=>{var n=l.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var a=new Promise(((r,a)=>n=e[t]=[r,a]));r.push(n[2]=a);var i=l.p+l.u(t),o=new Error;l.l(i,(r=>{if(l.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",o.name="ChunkLoadError",o.type=a,o.request=i,n[1](o)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,r)=>{var n,a,[i,o,s]=r,c=0;for(n in o)l.o(o,n)&&(l.m[n]=o[n]);for(s&&s(l),t&&t(r);c<i.length;c++)a=i[c],l.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;l.O()},r=self.webpackChunk_timkurvers_redota=self.webpackChunk_timkurvers_redota||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var i=l.O(void 0,[736],(()=>l(8717)));i=l.O(i)})();