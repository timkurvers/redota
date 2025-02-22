(()=>{"use strict";var e,t,a,r={8717:(e,t,a)=>{var r=a(7294),n=a(3935),l=a(3810),i=a(9163),o=a(3727),s=a(5977),c=a(2743),m=a(1823),d=a(5036),u=a(1264);const p=i.ZP.div`
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
`,E=e=>{const{children:t,className:a}=e,n=r.createElement(d.Z,{to:"https://github.com/timkurvers/redota/#legalese",grayscale:!0},"legal and resource attributions"),l=r.createElement(d.Z,{to:"https://github.com/timkurvers/redota/compare/v1.9.0...v1.10.0",grayscale:!0},"v1.10.0");return r.createElement(p,null,r.createElement(f,null,r.createElement(d.Z,{to:"/"},r.createElement(u.Z,null)),r.createElement("p",null,"Revisit past Dota 2 matches in the browser")),r.createElement(h,null,r.createElement("img",{src:"./images/backdrop.jpg",alt:""})),r.createElement(g,{className:a},t),r.createElement(b,null,r.createElement("p",null,r.createElement("strong",null,"©2020-2023 ReDota ",l)),r.createElement("p",null,"Dota 2 is a registered trademark of Valve Corporation.",r.createElement("br",null),"Image resources, lore and other references are property of Valve Corporation."),r.createElement("p",null,"See additional ",n," on ",r.createElement(m.Z,{brand:!0,name:"github"})," GitHub.")))};var v=a(1990),y=a(1690),w=a(2096),x=a(8514),_=a(5402),k=a(3552);const Z=()=>{const e=(0,s.k6)(),[t,a]=(0,_.r8)((()=>x.Z.models.Match.query.orderBy("endedAt").reverse().toArray())),n=(0,r.useCallback)((()=>{e.push("/matches/find")}),[e]),l=(0,r.useCallback)((()=>{e.push("/matches/select")}),[e]);let i=null;if(!a){const e=t.reduce(((e,t)=>e+t.replay.size),0);i=Math.round(e/1e6)}const o=r.createElement(d.Z,{to:"/matches/find/5712001132"},"searching for a professional game"),c=r.createElement(v.pA,null,r.createElement(v.ZP,{fancy:!0,onClick:n},"Find replay by match ID"),r.createElement(v.ZP,{fancy:!0,onClick:l},"Select local replay file"));return r.createElement(r.Fragment,null,!a&&!t.length&&r.createElement(w.Z,{kind:"instructions"},"Get started with ReDota by ",o,"."),!a&&t.length>5&&c,!a&&t.map((e=>r.createElement(k.Z,{key:e.uuid,match:e}))),c,i>0&&r.createElement(r.Fragment,null,r.createElement("p",null,"The above replays take up approximately ",r.createElement("strong",null,i," MB")," of storage space in your browser. Use the trash cans to get rid of unwanted replays."),r.createElement("p",null,r.createElement("strong",null,"Note:")," Your browser may perform house keeping and remove replay data. Keep a copy if you need them.")))},D=i.ZP.div``,A=()=>r.createElement(D,null,r.createElement("h2",null,"Matches"),r.createElement(y.Z,{context:"database"},r.createElement(Z,null))),P=i.ZP.aside``,C=()=>{const e=r.createElement(d.Z,{to:"https://github.com/dotabuff/manta"},"Dotabuff"),t=r.createElement(d.Z,{to:"https://github.com/timkurvers/redota"},r.createElement(m.Z,{brand:!0,name:"github"})," GitHub"),a=r.createElement(d.Z,{to:"https://moddota.com"},"ModDota"),n=r.createElement(d.Z,{to:"https://www.opendota.com"},"OpenDota"),l=r.createElement(d.Z,{to:"https://github.com/skadistats/clarity"},"Skadistats");return r.createElement(P,null,r.createElement("h2",null,"What is this?"),r.createElement("p",null,"An open-source experiment to revisit past Dota 2 matches in a web browser, visualizing the game as an interactive map."),r.createElement("p",null,"For bug reports, feedback and development of ReDota, visit the project on ",t,"."),r.createElement("h2",null,"Performance"),r.createElement("p",null,"Real-time playback of replays can be taxing on your machine, but should be performant in recent versions of modern browsers."),r.createElement("h2",null,"Attribution"),r.createElement("p",null,"ReDota is a heavily derived project and stands on the shoulders of giants, notably parsers by ",e," and ",l,"."),r.createElement("p",null,"Special thanks to community members from ",n," and ",a," who assisted in deciphering replay specifics."))},T=i.ZP.div`
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(151, 151, 151, 0) 0%, rgba(151, 151, 151, .15) 10%,
    rgba(151, 151, 151, .15) 90%, rgba(151, 151, 151, 0) 100%
  );
  margin: 0 20px;
`,F=i.ZP.div``,$=(0,i.ZP)(E)`
  @media screen and (min-width: 900px) {
    ${F} {
      display: flex;
      flex-direction: row-reverse;
    }

    ${D} {
      width: 76%;
    }

    ${P} {
      width: 24%;
    }
  }
`,I=e=>{const{children:t}=e;return(0,c.K)(),r.createElement($,null,r.createElement(F,null,r.createElement(C,null),r.createElement(T,null),r.createElement(A,null)),t)},S=(0,i.ZP)(E)`
  text-align: center;
`,O=()=>((0,c.Z)("404"),r.createElement(S,null,r.createElement("h2",null,"404 Not Found"),r.createElement("p",null,"Exist, this page does not."))),N=(0,l.ZP)((()=>Promise.all([a.e(153),a.e(736),a.e(827),a.e(319)]).then(a.bind(a,2755)))),R=(0,l.ZP)((()=>Promise.all([a.e(153),a.e(736),a.e(827),a.e(319)]).then(a.bind(a,3887)))),j=(0,l.ZP)((()=>Promise.all([a.e(153),a.e(736),a.e(827),a.e(319)]).then(a.bind(a,8209)))),M=i.ZP.div`
  box-sizing: content-box;
  letter-spacing: 0.5px;
`,z=()=>r.createElement(M,null,r.createElement(o.UT,null,r.createElement(s.rs,null,r.createElement(s.AW,{exact:!0,path:["/","/matches","/matches/find/:prefill?","/matches/select"]},r.createElement(I,null,r.createElement(s.AW,{path:"/matches/find/:prefill?"},r.createElement(R,null)),r.createElement(s.AW,{path:"/matches/select"},r.createElement(j,null)))),r.createElement(s.AW,{path:"/matches/:id"},r.createElement(N,null)),r.createElement(s.AW,null,r.createElement(O,null))))),B=document.querySelector("#container");n.render(r.createElement(z,null),B)},1990:(e,t,a)=>{a.d(t,{Sn:()=>o,ZP:()=>m,pA:()=>c});var r=a(7294),n=a(9163),l=a(9649);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}const o=n.ZP.button`
  appearance: none;
  background: none;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;

  ${e=>e.fancy&&n.iv`
    background: #610606;
    box-shadow: inset 1px 1px 0 0 #B60A0A, inset -1px -1px 0 0 #410404;
    border-radius: 6px;
    padding: 6px 40px;
    margin: .5em 1em 1em;
    font-family: 'Galdeano', sans-serif;
    text-shadow: 1px 1px 0 #942020, -1px -1px 1px #000000;

    ${!e.disabled&&n.iv`
      &:hover, &:focus {
        filter: saturate(125%);
      }
    `}
  `}

  ${e=>e.disabled&&n.iv`
    filter: brightness(50%);
    cursor: not-allowed;
  `}
`,s=(0,n.ZP)(l.U)`
  margin-top: .8125rem;

  ${o} {
    margin: 1em;
  }
`,c=e=>r.createElement(s,i({justify:"center"},e)),m=e=>{const{label:t,...a}=e,n={};return t&&(n["aria-label"]=t,n.title=t),r.createElement(o,i({type:"button"},a,n))}},9535:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(7294),n=a(9163),l=a(5036);const i=n.ZP.div`
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
`,o=n.ZP.div`
  padding: 1.25em;
`,s=e=>{const{context:t,error:a}=e,n=r.createElement(l.Z,{to:"https://github.com/timkurvers/redota/issues",grayscale:!0},"open an issue"),{name:s,message:c}=a,m=`${s?`${s}: `:""}${c}\n`;let{stack:d}=a;return d&&(d=d.startsWith(m)?d.replace(m,""):d.replace(/^/gm,"    at ")),r.createElement(o,null,r.createElement(i,null,r.createElement("h3",null,"Whoops, an error occurred!"),"database"===t&&r.createElement(r.Fragment,null,r.createElement("p",null,"ReDota stores match and replay data in a local database in your browser and unfortunately something went wrong trying to access it."),r.createElement("p",null,"Please note that private / incognito mode is ",r.createElement("strong",null,"NOT")," supported in Mozilla Firefox and Safari as these browsers restrict access or lack features while in this mode.")),r.createElement("p",null,"If you believe this to be a novel bug in ReDota, please ",n,"."),r.createElement("details",null,r.createElement("summary",null,"Technical details"),r.createElement("pre",null,m,d))))}},1690:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(9535);class l extends r.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){const{children:e,context:t}=this.props,{error:a}=this.state;return a?r.createElement(n.Z,{context:t,error:a}):e}}const i=l},1823:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294);const n=a(9163).ZP.i``,l=e=>{const{brand:t,className:a="",name:l,title:i}=e,o=`${t?"fab":"fas"} fa-${l} ${a}`;return r.createElement(n,{className:o,title:i})}},5036:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(7294),n=a(9163),l=a(3727);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}const o=(0,n.ZP)(l.rU)`
  color: #C22E1F;
  text-decoration: none;

  &:hover, &:focus {
    color: #FF1700;
  }

  ${e=>e.grayscale&&n.iv`
    color: #CCC;
    border-bottom: 1px solid currentColor;

    &:hover, &:focus {
      color: #FFF;
    }
  `}
`,s=e=>{const{to:t}=e;return t.startsWith("http")?r.createElement(o,i({as:"a",href:t},e)):r.createElement(o,e)},c=r.memo(s)},1264:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294);const n=()=>r.createElement("img",{alt:"ReDota",src:"./images/logo.svg"})},2096:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(9163);const l=n.ZP.p`
  color: #BBB;
  text-align: center;

  ${e=>"error"===e.kind&&n.iv`
    color: #C22E1F;
  `}

  ${e=>"warning"===e.kind&&n.iv`
    color: #B08C00;
  `}
`,i=e=>{const{children:t,kind:a="notice"}=e;return r.createElement(l,{kind:a},t)}},2338:(e,t,a)=>{a.d(t,{tc:()=>b,mZ:()=>E,Ji:()=>v,xW:()=>g,Y:()=>y,$i:()=>x});var r=a(7294),n=a(9163);const l="./images",i="https://cdn.cloudflare.steamstatic.com/apps/dota2/images",o=["ancient_rock_golem_weakening_aura","berserker_troll_break","black_drake_magic_amplification_aura","creep_irresolute","creep_piercing","creep_siege","enraged_wildkin_hurricane","fel_beast_haunt","flagbearer_creep_aura_effect","forest_troll_high_priest_heal_amp_aura","frostbitten_golem_time_warp_aura","furbolg_enrage_attack_speed","furbolg_enrage_damage","giant_wolf_intimidate","harpy_scout_take_off","hill_troll_rally","ice_shaman_incendiary_bomb","kobold_disarm","kobold_tunneler_prospecting","miniboss_unyielding_shield","miniboss_reflect","ogre_bruiser_ogre_smash","roshan_revengeroar","warpine_raider_seed_shot"],s={dawnbreaker:["portrait","landscape","icon"],marci:["portrait","icon"],muerta:["portrait","icon"],primal_beast:["portrait","icon"],ringmaster:["icon"]},c=["npc_dota_base_additive","npc_dota_base","npc_dota_broodmother_web","npc_dota_companion","npc_dota_thinker"],m="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",d=e=>{if(!e)return m;let t=`${i}/dota_react`;return o.includes(e)&&(t=l),`${t}/abilities/${e}.png`},u=(e,t)=>{var a;if(!e)return m;const r=e.replace("npc_dota_hero_","");let n=null;switch(t){case"portrait":n="_vert.jpg";break;default:case"landscape":n="_sb.png";break;case"icon":n="_icon.png"}let o=i;return null!==(a=s[r])&&void 0!==a&&a.includes(t)&&(o=l),`${o}/heroes/${r}${n}`},p=e=>{if(!e)return m;let t=e.replace("item_","");return t.startsWith("recipe_")&&(t="recipe"),`${i}/dota_react/items/${t}.png`},h=e=>`${i}/dota_react/teams/${e}.png`,g=n.ZP.img`
  user-select: none;
`,f=e=>{const{alt:t,src:a,title:n}=e,l=(0,r.useCallback)((e=>{e.preventDefault()}),[]);return r.createElement(g,{src:a,draggable:"false",alt:t,title:n,onDragStart:l})},b=r.memo((e=>{const{name:t,refname:a}=e;return r.createElement(f,{alt:t,src:d(a),title:t})})),E=r.memo((e=>{const{refname:t,variant:a}=e;return r.createElement(f,{src:u(t,a)})})),v=r.memo((e=>{const{name:t,refname:a}=e;return r.createElement(f,{alt:t,src:p(a),title:t})})),y=r.memo((e=>{const{alt:t,teamID:a}=e;return r.createElement(f,{alt:t,src:h(a),title:t})})),w=r.memo((e=>{const{refname:t,variant:a}=e,n=((e,t)=>{if(!e||c.includes(e))return m;switch(t){case"portrait":return`./images/portraits/${e}.jpg`;case"icon":return`./images/icons/${e}.png`;default:return null}})(t,a);return n?r.createElement(f,{src:n}):null})),x=r.memo((e=>{const{unit:t,unit:{refname:a},variant:n}=e;return"hero"===t.type?r.createElement(E,{refname:a,variant:n}):r.createElement(w,{refname:a,variant:n})}))},9649:(e,t,a)=>{a.d(t,{U:()=>n,g:()=>l});var r=a(9163);const n=r.ZP.div.withConfig({shouldForwardProp:e=>"wrap"!==e})`
  display: flex;
  flex-direction: row;

  ${e=>"center"===e.justify&&r.iv`
    justify-content: center;
  `}

  ${e=>e.wrap&&r.iv`
    flex-wrap: wrap;
  `}
`,l=(0,r.ZP)(n)`
  flex-direction: column;
`},6689:(e,t,a)=>{a.d(t,{Z:()=>s,e:()=>i});var r=a(7294),n=a(9163),l=a(2338);const i=n.ZP.div`
  padding: 0 10px;
  text-align: center;

  ${l.xW} {
    max-width: 40px;
  }
`,o=e=>{const{alt:t,teamID:a}=e;return r.createElement(i,null,r.createElement(l.Y,{alt:t,teamID:a}))},s=r.memo(o)},8588:(e,t,a)=>{a.d(t,{Z:()=>l,z:()=>n});var r=a(7294);const n=a(9163).ZP.span``,l=e=>{let{time:t}=e;const a=t<0?"-":"";t=Math.abs(t);const l=t/3600|0;t%=3600;const i=t/60|0;t%=60;const o=0|t;return r.createElement(n,null,a,l>0&&r.createElement(r.Fragment,null,l,":"),`00${i}`.slice(-2),":",`00${o}`.slice(-2),a?" ":"")}},2743:(e,t,a)=>{a.d(t,{K:()=>o,Z:()=>s});var r=a(7294),n=a(5977);const l=document.title,i=(e=null)=>{const t=(0,n.TH)();(0,r.useEffect)((()=>{document.title=e?`${e} | ReDota`:l}),[t,e])},o=i,s=i},3552:(e,t,a)=>{a.d(t,{Z:()=>Z});var r=a(7294),n=a(9163),l=a(1990);const i=n.ZP.span`
  white-space: nowrap;
`,o=e=>{const{date:t}=e;return t?r.createElement(i,null,t.toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"})):"-"};var s=a(1823),c=a(5036),m=a(6689),d=a(8588),u=a(5250),p=a(2338),h=a(9649),g=a(3851);const f=(0,n.ZP)(h.U)`
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
`,b=(0,n.ZP)(h.U)`
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
`,E=e=>{const{team:t,isWinner:a}=e,{name:n,players:l,proID:i}=t;return r.createElement(b,null,a&&r.createElement(s.Z,{name:"trophy",title:"Winner"}),i>0&&r.createElement(m.Z,{alt:n,teamID:i}),r.createElement(h.U,null,l.map(((e,t)=>r.createElement(p.mZ,{key:e.hero||t,refname:e.hero,variant:"landscape"})))))},v=(0,n.ZP)(h.g)`
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
`,y=n.ZP.div`
  min-width: 90px;
  text-align: center;
  white-space: nowrap;

  @media screen and (max-width: 700px) {
    display: none;
  }
`,w=(0,n.ZP)(h.g)`
  flex-grow: 1;
`,x=(0,n.ZP)(h.U)``,_=n.ZP.div`
  opacity: .25;
  margin-left: .5em;
`,k=(0,n.ZP)(h.g)`
  min-width: 340px;
  min-height: 54px;
`,Z=e=>{var t;const{match:a,isPreview:n=!1}=e,{id:i,duration:m,endedAt:p,gameMode:h,label:b,patch:Z,radiant:D,dire:A,winningTeamID:P}=a,C=(0,r.useCallback)((()=>{const e=document.createElement("a");e.setAttribute("download",a.replay.filename),e.setAttribute("href",URL.createObjectURL(a.replay.blob)),e.click()}),[a]),T=(0,r.useCallback)((()=>{a.delete()}),[a]);return r.createElement(f,null,r.createElement(w,null,!n&&r.createElement(c.Z,{to:`/matches/${i}`},b),null===(t=u.Z[h])||void 0===t?void 0:t.name,r.createElement(x,null,r.createElement(o,{date:p}),Z&&r.createElement(_,null,Z.name))),r.createElement(y,null,r.createElement(d.Z,{time:m})),r.createElement(k,{justify:"center"},D&&r.createElement(E,{team:D,isWinner:P===g.$e}),A&&r.createElement(E,{team:A,isWinner:P===g.nc})),!n&&r.createElement(v,null,r.createElement(l.ZP,{onClick:C,label:"Download replay"},r.createElement(s.Z,{name:"file-download"})),r.createElement(l.ZP,{onClick:T,label:"Remove match"},r.createElement(s.Z,{name:"trash-alt"}))))}},3851:(e,t,a)=>{a.d(t,{$e:()=>c,L2:()=>o,PS:()=>l,bM:()=>n,ct:()=>d,nc:()=>m,pz:()=>i,rl:()=>r,x3:()=>s});const r=16384,n=128,l={[-1]:"#DDDDDD",0:"#3375FF",1:"#66FFBF",2:"#BF00BF",3:"#F3F00B",4:"#FF6B00",5:"#FE86C2",6:"#A1B447",7:"#65D9F7",8:"#008321",9:"#A46900"},i={UNKNOWN:0,NOT_YET_CONNECTED:1,CONNECTED:2,DISCONNECTED:3,ABANDONED:4,LOADING:5,FAILED:6},o={INIT:0,WAIT_FOR_PLAYERS_TO_LOAD:1,HERO_SELECTION:2,STRATEGY_TIME:3,PRE_GAME:4,GAME_IN_PROGRESS:5,POST_GAME:6,DISCONNECT:7,PREGAME:4,START:5,END:6},s=1,c=2,m=3,d={[c]:"#23B200",[m]:"#B21000",4:"#CAAA32"}},8514:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(9520),n=(a(5214),a(3851)),l=a(3491);const i=[{id:"7.23",size:16384,backdrop:{size:4e3,offset:{x:-.2,y:.4}}},{id:"7.33",size:19134,backdrop:{size:4700,offset:{x:-1.2,y:-.3}}}],o=[];let s=0;for(const e of l){const t=s+1,a=i[t];e.name===(null==a?void 0:a.id)&&(s=t),o.unshift({...e,date:new Date(e.date),map:i[s]})}const c=o;let m=null;const d="matches",u=new r.default("redota");u.version(1).stores({matches:"$$uuid, &matchID, endedAt"}),u.models={Match:class{constructor(){this.uuid=void 0,this.replay=null,this.matchID=null,this.leagueID=null,this.duration=null,this.createdAt=new Date,this.endedAt=null,this.winningTeamID=null,this.teams={}}get id(){return this.matchID||this.uuid}get label(){return this.matchID||this.replay.filename}get radiant(){return this.teams[n.$e]}get dire(){return this.teams[n.nc]}get patch(){return c.find((e=>this.endedAt>=e.date))||c[0]}get winner(){return this.teams[this.winningTeamID]}delete(){return m[d].delete(this.uuid)}async update(e){var t;const{default:r}=await Promise.all([a.e(153),a.e(736),a.e(827),a.e(319)]).then(a.bind(a,2167));this.replay={filename:e.name,size:e.size,blob:e};const n=new r(await e.arrayBuffer()),{summary:l}=n,i=null===(t=l.gameInfo)||void 0===t?void 0:t.dota;if(this.duration=l.playbackTime,i){this.matchID=i.matchId,this.leagueID=i.leagueid,this.endedAt=new Date(1e3*i.endTime),this.gameMode=i.gameMode,this.winningTeamID=i.gameWinner,this.teams={};for(const e of i.playerInfo){const t=e.gameTeam;let a=this.teams[t];a||(a={name:null,proID:null,players:[]},this.teams[t]=a),a.players.push({hero:e.heroName})}this.radiant&&(this.radiant.name=i.radiantTeamTag,this.radiant.proID=i.radiantTeamId),this.dire&&(this.dire.name=i.direTeamTag,this.dire.proID=i.direTeamId)}else this.matchID=null,this.leagueID=null,this.endedAt=new Date(e.lastModified),this.gameMode=-1,this.winningTeamID=null}async refresh(){return this.replay&&await this.update(this.replay.blob),this.save()}save(){return m[d].put(this)}static get query(){return m[d]}static connect(e){return m=e,m[d].mapToClass(this),this}}.connect(u)};const p=u},5250:(e,t,a)=>{a.d(t,{Z:()=>r});const r={0:{name:"Unknown"},1:{name:"All Pick"},2:{name:"Captains Mode"},3:{name:"Random Draft"},4:{name:"Single Draft"},5:{name:"All Random"},6:{name:"Intro"},7:{name:"Diretide"},8:{name:"Reverse Captains Mode"},9:{name:"The Greeviling"},10:{name:"Tutorial"},11:{name:"Mid Only"},12:{name:"Least Played"},13:{name:"Limited Heroes"},14:{name:"Compendium"},15:{name:"Custom"},16:{name:"Captains Draft"},17:{name:"Balanced Draft"},18:{name:"Ability Draft"},19:{name:"Custom Game"},20:{name:"All Random Deathmatch"},21:{name:"1v1 Solo Mid"},22:{name:"Ranked All Pick"},23:{name:"Turbo"},24:{name:"Mutation"},25:{name:"Coaches Challenge"}}},5402:(e,t,a)=>{a.d(t,{bd:()=>o,r8:()=>m,Pp:()=>r.y,_P:()=>u,ZQ:()=>p.Z,dz:()=>g});var r=a(5172),n=a(7294),l=a(3280),i=a.n(l);const o=(e,...t)=>{const[a,r]=(0,n.useState)(null);if(a)throw a;return i()((async()=>{try{await e()}catch(e){r(e)}}),...t)};var s=a(1039);const c=Symbol("awaiting db result"),m=(e,t=[])=>{const a=(0,s.useLiveQuery)(e,t,c),r=a===c;return[r?null:a,r]};var d=a(3851);const u=e=>{var t;const[a,r]=(0,n.useState)({relX:0,relY:0,width:0,height:0}),[l,i]=(0,n.useState)(-1),[o,s]=(0,n.useState)(!1),[c,m]=(0,n.useState)(1),[u,p]=(0,n.useState)(null),h=-1===l,g=h?a:null==e||null===(t=e.players.get(l))||void 0===t?void 0:t.camera;(0,n.useEffect)((()=>{e.on("warn",console.warn),e.start(),e.jumpTo(d.L2.PRE_GAME),e.seek(e.tick+e.ticksPerSecond)}),[e]),((e,t)=>{const a=(0,n.useRef)();(0,n.useEffect)((()=>{a.current=e}),[e]),(0,n.useEffect)((()=>{if(null!==t){const e=setInterval((()=>{a.current()}),t);return()=>clearInterval(e)}}),[t])})((()=>{e.step(2)}),e&&o?2*e.ticksPerSecond*(1/c):null);const f=null==e?void 0:e.units.find((e=>e.handle===u)),b=(0,n.useCallback)((t=>{t-e.tick<1e3?e.seek(t):e.jump(t)}),[e]),E=(0,n.useCallback)((e=>{e===u&&h&&r((e=>({...e,relX:f.position.relX,relY:f.position.relY}))),p(e)}),[h,u,f,r,p]);return{camera:g,cameraID:l,isFreeCamera:h,playbackSpeed:c,playing:o,requestTick:b,selectedUnit:f,setCameraID:i,setFreeCamera:r,setPlaybackSpeed:m,setPlaying:s,setSelection:E}};var p=a(2743);const h=()=>{const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}},g=()=>{const[e,t]=(0,n.useState)(h());return(0,n.useEffect)((()=>{const e=()=>{t(h())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[t]),[e]}}},n={};function l(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e].call(a.exports,a,a.exports,l),a.exports}l.m=r,e=[],l.O=(t,a,r,n)=>{if(!a){var i=1/0;for(m=0;m<e.length;m++){for(var[a,r,n]=e[m],o=!0,s=0;s<a.length;s++)(!1&n||i>=n)&&Object.keys(l.O).every((e=>l.O[e](a[s])))?a.splice(s--,1):(o=!1,n<i&&(i=n));if(o){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[a,r,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce(((t,a)=>(l.f[a](e,t),t)),[])),l.u=e=>"redota-"+{319:"parser+viewer",827:"protobuf"}[e]+"-"+{319:"2923b214",827:"12672194"}[e]+".js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},a="@timkurvers/redota:",l.l=(e,r,n,i)=>{if(t[e])t[e].push(r);else{var o,s;if(void 0!==n)for(var c=document.getElementsByTagName("script"),m=0;m<c.length;m++){var d=c[m];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==a+n){o=d;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",o.timeout=120,l.nc&&o.setAttribute("nonce",l.nc),o.setAttribute("data-webpack",a+n),o.src=e),t[e]=[r];var u=(a,r)=>{o.onerror=o.onload=null,clearTimeout(p);var n=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach((e=>e(r))),a)return a(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),s&&document.head.appendChild(o)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={179:0};l.f.j=(t,a)=>{var r=l.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var n=new Promise(((a,n)=>r=e[t]=[a,n]));a.push(r[2]=n);var i=l.p+l.u(t),o=new Error;l.l(i,(a=>{if(l.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,r[1](o)}}),"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,[i,o,s]=a,c=0;if(i.some((t=>0!==e[t]))){for(r in o)l.o(o,r)&&(l.m[r]=o[r]);if(s)var m=s(l)}for(t&&t(a);c<i.length;c++)n=i[c],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(m)},a=self.webpackChunk_timkurvers_redota=self.webpackChunk_timkurvers_redota||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),l.nc=void 0;var i=l.O(void 0,[153,736],(()=>l(8717)));i=l.O(i)})();