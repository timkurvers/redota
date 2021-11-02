(()=>{"use strict";var e,t,n,a={7548:(e,t,n)=>{n.d(t,{GC:()=>a,bM:()=>r,PS:()=>l,L2:()=>i,x3:()=>o,$e:()=>s,nc:()=>c,ct:()=>m});const a=16384,r=128,l={[-1]:"#DDDDDD",0:"#3375FF",1:"#66FFBF",2:"#BF00BF",3:"#F3F00B",4:"#FF6B00",5:"#FE86C2",6:"#A1B447",7:"#65D9F7",8:"#008321",9:"#A46900"},i={PREGAME:4,START:5,END:6},o=1,s=2,c=3,m={[s]:"#23B200",[c]:"#B21000",4:"#CAAA32"}},1204:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(9642),r=(n(5214),n(7548));let l=null;const i="matches",o=new a.default("redota");o.version(1).stores({matches:"$$uuid, &matchID, endedAt"}),o.models={Match:class{constructor(){this.uuid=void 0,this.replay=null,this.matchID=null,this.leagueID=null,this.duration=null,this.createdAt=new Date,this.endedAt=null,this.winningTeamID=null,this.teams={}}get id(){return this.matchID||this.uuid}get label(){return this.matchID||this.replay.filename}get radiant(){return this.teams[r.$e]}get dire(){return this.teams[r.nc]}get winner(){return this.teams[this.winningTeamID]}delete(){return l[i].delete(this.uuid)}async update(e){var t;const{default:a}=await Promise.all([n.e(736),n.e(827),n.e(153),n.e(319)]).then(n.bind(n,9384));this.replay={filename:e.name,size:e.size,blob:e};const r=new a(await e.arrayBuffer()),{summary:l}=r,i=null===(t=l.gameInfo)||void 0===t?void 0:t.dota;if(this.duration=l.playbackTime,i){this.matchID=i.matchId,this.leagueID=i.leagueid,this.endedAt=new Date(1e3*i.endTime),this.gameMode=i.gameMode,this.winningTeamID=i.gameWinner,this.teams={};for(const e of i.playerInfo){const t=e.gameTeam;let n=this.teams[t];n||(n={name:null,proID:null,players:[]},this.teams[t]=n),n.players.push({hero:e.heroName})}this.radiant&&(this.radiant.name=i.radiantTeamTag,this.radiant.proID=i.radiantTeamId),this.dire&&(this.dire.name=i.direTeamTag,this.dire.proID=i.direTeamId)}else this.matchID=null,this.leagueID=null,this.endedAt=new Date(e.lastModified),this.gameMode=-1,this.winningTeamID=null}async refresh(){return this.replay&&await this.update(this.replay.blob),this.save()}save(){return l[i].put(this)}static get query(){return l[i]}static connect(e){return l=e,l[i].mapToClass(this),this}}.connect(o)};const s=o},1590:(e,t,n)=>{n.d(t,{Z:()=>a});const a={0:{name:"Unknown"},1:{name:"All Pick"},2:{name:"Captains Mode"},3:{name:"Random Draft"},4:{name:"Single Draft"},5:{name:"All Random"},6:{name:"Intro"},7:{name:"Diretide"},8:{name:"Reverse Captains Mode"},9:{name:"The Greeviling"},10:{name:"Tutorial"},11:{name:"Mid Only"},12:{name:"Least Played"},13:{name:"Limited Heroes"},14:{name:"Compendium"},15:{name:"Custom"},16:{name:"Captains Draft"},17:{name:"Balanced Draft"},18:{name:"Ability Draft"},19:{name:"Custom Game"},20:{name:"All Random Deathmatch"},21:{name:"1v1 Solo Mid"},22:{name:"Ranked All Pick"},23:{name:"Turbo"},24:{name:"Mutation"},25:{name:"Coaches Challenge"}}},8717:(e,t,n)=>{var a=n(7294),r=n(3935),l=n(2168),i=n(9163),o=n(3727),s=n(5977),c=n(2743),m=n(1823),d=n(5036),u=n(1264);const p=i.ZP.div`
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
`,E=e=>{const{children:t,className:n}=e,r=a.createElement(d.Z,{to:"https://github.com/timkurvers/redota/#legalese",grayscale:!0},"legal and resource attributions");return a.createElement(p,null,a.createElement(f,null,a.createElement(d.Z,{to:"/"},a.createElement(u.Z,null)),a.createElement("p",null,"Revisit past Dota 2 matches in the browser")),a.createElement(h,null,a.createElement("img",{src:"./images/backdrop.jpg",alt:""})),a.createElement(g,{className:n},t),a.createElement(b,null,a.createElement("p",null,a.createElement("strong",null,"©2020-2021 ReDota")),a.createElement("p",null,"Dota 2 is a registered trademark of Valve Corporation.",a.createElement("br",null),"Image resources, lore and other references are property of Valve Corporation."),a.createElement("p",null,"See additional ",r," on ",a.createElement(m.Z,{brand:!0,name:"github"})," GitHub.")))};var v=n(1990),y=n(1690),w=n(2096),x=n(1204),Z=n(2129),k=n(3552);const D=()=>{const e=(0,s.k6)(),[t,n]=(0,Z.r8)((()=>x.Z.models.Match.query.orderBy("endedAt").reverse().toArray())),r=(0,a.useCallback)((()=>{e.push("/matches/find")}),[e]),l=(0,a.useCallback)((()=>{e.push("/matches/select")}),[e]);let i=null;if(!n){const e=t.reduce(((e,t)=>e+t.replay.size),0);i=Math.round(e/1e6)}const o=a.createElement(d.Z,{to:"/matches/find/5712001132"},"searching for a professional game"),c=a.createElement(v.pA,null,a.createElement(v.ZP,{fancy:!0,onClick:r},"Find replay by match ID"),a.createElement(v.ZP,{fancy:!0,onClick:l},"Select local replay file"));return a.createElement(a.Fragment,null,!n&&!t.length&&a.createElement(w.Z,{kind:"instructions"},"Get started with ReDota by ",o,"."),a.createElement(w.Z,{kind:"warning"},a.createElement(m.Z,{name:"exclamation-triangle"})," ReDota currently uses the 7.23 map as a background.",a.createElement("br",null),"Games played on patch 7.29 or 7.30 may consequently look odd."),!n&&t.length>5&&c,!n&&t.map((e=>a.createElement(k.Z,{key:e.uuid,match:e}))),c,i>0&&a.createElement(a.Fragment,null,a.createElement("p",null,"The above replays take up approximately ",a.createElement("strong",null,i," MB")," of storage space in your browser. Use the trash cans to get rid of unwanted replays."),a.createElement("p",null,a.createElement("strong",null,"Note:")," Your browser may perform house keeping and remove replay data. Keep a copy if you need them.")))},P=i.ZP.div``,F=()=>a.createElement(P,null,a.createElement("h2",null,"Matches"),a.createElement(y.Z,{context:"database"},a.createElement(D,null))),$=i.ZP.aside``,C=()=>{const e=a.createElement(d.Z,{to:"https://github.com/dotabuff/manta"},"Dotabuff"),t=a.createElement(d.Z,{to:"https://github.com/timkurvers/redota"},a.createElement(m.Z,{brand:!0,name:"github"})," GitHub"),n=a.createElement(d.Z,{to:"https://moddota.com"},"ModDota"),r=a.createElement(d.Z,{to:"https://www.opendota.com"},"OpenDota"),l=a.createElement(d.Z,{to:"https://github.com/skadistats/clarity"},"Skadistats");return a.createElement($,null,a.createElement("h2",null,"What is this?"),a.createElement("p",null,"An open-source experiment to revisit past Dota 2 matches in a web browser, visualizing the game as an interactive map."),a.createElement("p",null,"For bug reports, feedback and development of ReDota, visit the project on ",t,"."),a.createElement("h2",null,"Performance"),a.createElement("p",null,"Real-time playback of replays can be taxing on your machine, but should be performant in recent versions of modern browsers."),a.createElement("h2",null,"Attribution"),a.createElement("p",null,"ReDota is a heavily derived project and stands on the shoulders of giants, notably parsers by ",e," and ",l,"."),a.createElement("p",null,"Special thanks to community members from ",r," and ",n," who assisted in deciphering replay specifics."))},A=i.ZP.div`
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(151, 151, 151, 0) 0%, rgba(151, 151, 151, .15) 10%,
    rgba(151, 151, 151, .15) 90%, rgba(151, 151, 151, 0) 100%
  );
  margin: 0 20px;
`,I=i.ZP.div``,T=(0,i.ZP)(E)`
  @media screen and (min-width: 900px) {
    ${I} {
      display: flex;
      flex-direction: row-reverse;
    }

    ${P} {
      width: 76%;
    }

    ${$} {
      width: 24%;
    }
  }
`,S=e=>{const{children:t}=e;return(0,c.K)(),a.createElement(T,null,a.createElement(I,null,a.createElement(C,null),a.createElement(A,null),a.createElement(F,null)),t)},j=(0,i.ZP)(E)`
  text-align: center;
`,M=()=>((0,c.Z)("404"),a.createElement(j,null,a.createElement("h2",null,"404 Not Found"),a.createElement("p",null,"Exist, this page does not."))),O=(0,l.ZP)((()=>Promise.all([n.e(736),n.e(827),n.e(153),n.e(319)]).then(n.bind(n,7541)))),R=(0,l.ZP)((()=>Promise.all([n.e(736),n.e(827),n.e(153),n.e(319)]).then(n.bind(n,3887)))),_=(0,l.ZP)((()=>Promise.all([n.e(736),n.e(827),n.e(153),n.e(319)]).then(n.bind(n,8209)))),z=i.ZP.div`
  box-sizing: content-box;
  letter-spacing: 0.5px;
`,B=()=>a.createElement(z,null,a.createElement(o.UT,null,a.createElement(s.rs,null,a.createElement(s.AW,{exact:!0,path:["/","/matches","/matches/find/:prefill?","/matches/select"]},a.createElement(S,null,a.createElement(s.AW,{path:"/matches/find/:prefill?"},a.createElement(R,null)),a.createElement(s.AW,{path:"/matches/select"},a.createElement(_,null)))),a.createElement(s.AW,{path:"/matches/:id"},a.createElement(O,null)),a.createElement(s.AW,null,a.createElement(M,null))))),W=document.querySelector("#container");r.render(a.createElement(B,null),W)},1990:(e,t,n)=>{n.d(t,{ZP:()=>m,pA:()=>c,Sn:()=>o});var a=n(7294),r=n(9163),l=n(9649);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const o=r.ZP.button`
  appearance: none;
  background: none;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;

  ${e=>e.fancy&&r.iv`
    background: #610606;
    box-shadow: inset 1px 1px 0 0 #B60A0A, inset -1px -1px 0 0 #410404;
    border-radius: 6px;
    padding: 6px 40px;
    margin: .5em 1em 1em;
    font-family: 'Galdeano', sans-serif;
    text-shadow: 1px 1px 0 #942020, -1px -1px 1px #000000;

    ${!e.disabled&&r.iv`
      &:hover, &:focus {
        filter: saturate(125%);
      }
    `}
  `}

  ${e=>e.disabled&&r.iv`
    filter: brightness(50%);
    cursor: not-allowed;
  `}
`,s=(0,r.ZP)(l.U)`
  margin-top: .8125rem;

  ${o} {
    margin: 1em;
  }
`,c=e=>a.createElement(s,i({justify:"center"},e)),m=e=>{const{label:t,...n}=e,r={};return t&&(r["aria-label"]=t,r.title=t),a.createElement(o,i({type:"button"},n,r))}},9535:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(9163),l=n(5036);const i=r.ZP.div`
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
`,o=r.ZP.div`
  padding: 1.25em;
`,s=e=>{const{context:t,error:n}=e,r=a.createElement(l.Z,{to:"https://github.com/timkurvers/redota/issues",grayscale:!0},"open an issue"),{name:s,message:c}=n,m=`${s?`${s}: `:""}${c}\n`;let{stack:d}=n;return d&&(d=d.startsWith(m)?d.replace(m,""):d.replace(/^/gm,"    at ")),a.createElement(o,null,a.createElement(i,null,a.createElement("h3",null,"Whoops, an error occurred!"),"database"===t&&a.createElement(a.Fragment,null,a.createElement("p",null,"ReDota stores match and replay data in a local database in your browser and unfortunately something went wrong trying to access it."),a.createElement("p",null,"Please note that private / incognito mode is ",a.createElement("strong",null,"NOT")," supported in Mozilla Firefox and Safari as these browsers restrict access or lack features while in this mode.")),a.createElement("p",null,"If you believe this to be a novel bug in ReDota, please ",r,"."),a.createElement("details",null,a.createElement("summary",null,"Technical details"),a.createElement("pre",null,m,d))))}},1690:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(9535);class l extends a.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){const{children:e,context:t}=this.props,{error:n}=this.state;return n?a.createElement(r.Z,{context:t,error:n}):e}}const i=l},1823:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=e=>{const{brand:t,name:n,title:r}=e,l=`${t?"fab":"fas"} fa-${n}`;return a.createElement("i",{className:l,title:r})}},5036:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),r=n(9163),l=n(3727);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const o=(0,r.ZP)(l.rU)`
  color: #C22E1F;
  text-decoration: none;

  &:hover, &:focus {
    color: #FF1700;
  }

  ${e=>e.grayscale&&r.iv`
    color: #CCC;
    border-bottom: 1px solid currentColor;

    &:hover, &:focus {
      color: #FFF;
    }
  `}
`,s=e=>{const{to:t}=e;return t.startsWith("http")?a.createElement(o,i({as:"a",href:t},e)):a.createElement(o,e)},c=a.memo(s)},1264:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=()=>a.createElement("img",{alt:"ReDota",src:"./images/logo.svg"})},2096:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(9163);const l=r.ZP.p`
  color: #BBB;
  text-align: center;

  ${e=>"error"===e.kind&&r.iv`
    color: #C22E1F;
  `}

  ${e=>"warning"===e.kind&&r.iv`
    color: #B08C00;
  `}
`,i=e=>{const{children:t,kind:n="notice"}=e;return a.createElement(l,{kind:n},t)}},3841:(e,t,n)=>{n.d(t,{tc:()=>u,mZ:()=>p,Ji:()=>h,xW:()=>m,Y:()=>g,$i:()=>b});var a=n(7294),r=n(9163);const l="https://cdn.cloudflare.steamstatic.com/apps/dota2/images",i=e=>`${l}/dota_react/abilities/${e}.png`,o=(e,t)=>{const n=e.replace("npc_dota_hero_","");let a=null;switch(t){case"portrait":a="_vert.jpg";break;default:case"landscape":a="_sb.png";break;case"icon":a="_icon.png"}let r=l;return"dawnbreaker"!==n&&"marci"!==n||(r="./images"),`${r}/heroes/${n}${a}`},s=e=>{let t=e.replace("item_","");return t.startsWith("recipe_")&&(t="recipe"),`${l}/dota_react/items/${t}.png`},c=e=>`${l}/dota_react/teams/${e}.png`,m=r.ZP.img`
  user-select: none;
`,d=e=>{const{alt:t,src:n,title:r}=e;return a.createElement(m,{src:n,draggable:"false",alt:t,title:r})},u=a.memo((e=>{const{refname:t}=e;return a.createElement(d,{src:i(t)})})),p=a.memo((e=>{const{refname:t,variant:n}=e;return a.createElement(d,{src:o(t,n)})})),h=a.memo((e=>{const{refname:t}=e;return a.createElement(d,{src:s(t)})})),g=a.memo((e=>{const{alt:t,teamID:n}=e;return a.createElement(d,{alt:t,src:c(n),title:t})})),f=a.memo((e=>{const{refname:t,variant:n}=e,r=((e,t)=>{switch(t){case"portrait":return`./images/portraits/${e}.jpg`;case"icon":return`./images/icons/${e}.png`;default:return null}})(t,n);return r?a.createElement(d,{src:r}):null})),b=a.memo((e=>{const{unit:t,unit:{refname:n},variant:r}=e;return"hero"===t.type?a.createElement(p,{refname:n,variant:r}):a.createElement(f,{refname:n,variant:r})}))},9649:(e,t,n)=>{n.d(t,{g:()=>l,U:()=>r});var a=n(9163);const r=a.ZP.div.withConfig({shouldForwardProp:e=>"wrap"!==e})`
  display: flex;
  flex-direction: row;

  ${e=>"center"===e.justify&&a.iv`
    justify-content: center;
  `}

  ${e=>e.wrap&&a.iv`
    flex-wrap: wrap;
  `}
`,l=(0,a.ZP)(r)`
  flex-direction: column;
`},6689:(e,t,n)=>{n.d(t,{Z:()=>s,e:()=>i});var a=n(7294),r=n(9163),l=n(3841);const i=r.ZP.div`
  padding: 0 10px;
  text-align: center;

  ${l.xW} {
    max-width: 40px;
  }
`,o=e=>{const{alt:t,teamID:n}=e;return a.createElement(i,null,a.createElement(l.Y,{alt:t,teamID:n}))},s=a.memo(o)},8588:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=e=>{let{time:t}=e;const n=t<0?"-":"";t=Math.abs(t);const r=t/3600|0;t%=3600;const l=t/60|0;t%=60;const i=0|t;return a.createElement(a.Fragment,null,n,r>0&&a.createElement(a.Fragment,null,r,":"),`00${l}`.slice(-2),":",`00${i}`.slice(-2),n?" ":"")}},2129:(e,t,n)=>{n.d(t,{bd:()=>a,r8:()=>o,Pp:()=>r.y,_P:()=>m,ZQ:()=>d.Z,dz:()=>p});var a=n(3280),r=n(5172),l=n(1039);const i=Symbol("awaiting db result"),o=(e,t=[])=>{const n=(0,l.useLiveQuery)(e,t,i),a=n===i;return[a?null:n,a]};var s=n(7294);var c=n(7548);const m=e=>{var t;const[n,a]=(0,s.useState)({relX:0,relY:0,width:0,height:0}),[r,l]=(0,s.useState)(-1),[i,o]=(0,s.useState)(!1),[m,d]=(0,s.useState)(null),u=-1===r,p=u?n:null==e||null===(t=e.players.byID.get(r))||void 0===t?void 0:t.camera;(0,s.useEffect)((()=>{e.on("warn",console.warn),e.start(),e.jumpTo(c.L2.PREGAME)}),[e]),((e,t)=>{const n=(0,s.useRef)();(0,s.useEffect)((()=>{n.current=e}),[e]),(0,s.useEffect)((()=>{if(null!==t){const e=setInterval((()=>{n.current()}),t);return()=>clearInterval(e)}}),[t])})((()=>{e.step(2)}),e&&i?1/e.tickInterval*2:null);const h=null==e?void 0:e.units.find((e=>e.handle===m)),g=(0,s.useCallback)((t=>{e.jump(t)}),[e]),f=(0,s.useCallback)((e=>{e===m&&u&&a((e=>({...e,relX:h.position.relX,relY:h.position.relY}))),d(e)}),[u,m,h,a,d]);return{camera:p,cameraID:r,isFreeCamera:u,playing:i,requestTick:g,selectedUnit:h,setCameraID:l,setFreeCamera:a,setPlaying:o,setSelection:f}};var d=n(2743);const u=()=>{const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}},p=()=>{const[e,t]=(0,s.useState)(u());return(0,s.useEffect)((()=>{const e=()=>{t(u())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[t]),[e]}},2743:(e,t,n)=>{n.d(t,{Z:()=>s,K:()=>o});var a=n(7294),r=n(5977);const l=document.title,i=(e=null)=>{const t=(0,r.TH)();(0,a.useEffect)((()=>{document.title=e?`${e} | ReDota`:l}),[t,e])},o=i,s=i},3552:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(7294),r=n(9163),l=n(1990);const i=r.ZP.span`
  white-space: nowrap;
`,o=e=>{const{date:t}=e;return t?a.createElement(i,null,t.toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"})):"-"};var s=n(1823),c=n(5036),m=n(6689),d=n(8588),u=n(1590),p=n(3841),h=n(9649),g=n(7548);const f=(0,r.ZP)(h.U)`
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
`,b=(0,r.ZP)(h.U)`
  height: 26px;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.8rem;

  ${m.e}, ${h.U} {
    height: 100%;
  }

  ${p.xW} {
    height: 100%;
    margin-right: 2px;
    vertical-align: middle;
  }

  i + ${h.U} {
    margin-left: 10px;
  }

  & + & {
    margin-top: 2px;
  }
`,E=e=>{const{team:t,isWinner:n}=e,{name:r,players:l,proID:i}=t;return a.createElement(b,null,n&&a.createElement(s.Z,{name:"trophy",title:"Winner"}),i>0&&a.createElement(m.Z,{alt:r,teamID:i}),a.createElement(h.U,null,l.map((e=>a.createElement(p.mZ,{key:e.hero,refname:e.hero,variant:"landscape"})))))},v=(0,r.ZP)(h.g)`
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
`,y=r.ZP.div`
  min-width: 90px;
  text-align: center;
  white-space: nowrap;

  @media screen and (max-width: 700px) {
    display: none;
  }
`,w=(0,r.ZP)(h.g)`
  flex-grow: 1;
`,x=(0,r.ZP)(h.g)`
  min-width: 340px;
  min-height: 54px;
`,Z=e=>{var t;const{match:n,isPreview:r=!1}=e,{id:i,duration:m,endedAt:p,gameMode:h,label:b,radiant:Z,dire:k,winningTeamID:D}=n,P=(0,a.useCallback)((()=>{const e=document.createElement("a");e.setAttribute("download",n.replay.filename),e.setAttribute("href",URL.createObjectURL(n.replay.blob)),e.click()}),[n]),F=(0,a.useCallback)((()=>{n.delete()}),[n]);return a.createElement(f,null,a.createElement(w,null,!r&&a.createElement(c.Z,{to:`/matches/${i}`},b),null===(t=u.Z[h])||void 0===t?void 0:t.name,a.createElement(o,{date:p})),a.createElement(y,null,a.createElement(d.Z,{time:m})),a.createElement(x,{justify:"center"},Z&&a.createElement(E,{team:Z,isWinner:D===g.$e}),k&&a.createElement(E,{team:k,isWinner:D===g.nc})),!r&&a.createElement(v,null,a.createElement(l.ZP,{onClick:P,label:"Download replay"},a.createElement(s.Z,{name:"file-download"})),a.createElement(l.ZP,{onClick:F,label:"Remove match"},a.createElement(s.Z,{name:"trash-alt"}))))}}},r={};function l(e){var t=r[e];if(void 0!==t)return t.exports;var n=r[e]={exports:{}};return a[e].call(n.exports,n,n.exports,l),n.exports}l.m=a,e=[],l.O=(t,n,a,r)=>{if(!n){var i=1/0;for(c=0;c<e.length;c++){for(var[n,a,r]=e[c],o=!0,s=0;s<n.length;s++)(!1&r||i>=r)&&Object.keys(l.O).every((e=>l.O[e](n[s])))?n.splice(s--,1):(o=!1,r<i&&(i=r));o&&(e.splice(c--,1),t=a())}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[n,a,r]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var n in t)l.o(t,n)&&!l.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,n)=>(l.f[n](e,t),t)),[])),l.u=e=>"redota-"+{153:"dotaconstants",319:"parser+viewer",827:"protobuf"}[e]+"-"+{153:"e3f283db",319:"17795d95",827:"6118ddd5"}[e]+".js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},n="@timkurvers/redota:",l.l=(e,a,r,i)=>{if(t[e])t[e].push(a);else{var o,s;if(void 0!==r)for(var c=document.getElementsByTagName("script"),m=0;m<c.length;m++){var d=c[m];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+r){o=d;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.setAttribute("data-webpack",n+r),o.src=e),t[e]=[a];var u=(n,a)=>{o.onerror=o.onload=null,clearTimeout(p);var r=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),r&&r.forEach((e=>e(a))),n)return n(a)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),s&&document.head.appendChild(o)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={179:0};l.f.j=(t,n)=>{var a=l.o(e,t)?e[t]:void 0;if(0!==a)if(a)n.push(a[2]);else{var r=new Promise(((n,r)=>a=e[t]=[n,r]));n.push(a[2]=r);var i=l.p+l.u(t),o=new Error;l.l(i,(n=>{if(l.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var r=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;o.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",o.name="ChunkLoadError",o.type=r,o.request=i,a[1](o)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,n)=>{var a,r,[i,o,s]=n,c=0;for(a in o)l.o(o,a)&&(l.m[a]=o[a]);for(s&&s(l),t&&t(n);c<i.length;c++)r=i[c],l.o(e,r)&&e[r]&&e[r][0](),e[i[c]]=0;l.O()},n=self.webpackChunk_timkurvers_redota=self.webpackChunk_timkurvers_redota||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var i=l.O(void 0,[736],(()=>l(8717)));i=l.O(i)})();