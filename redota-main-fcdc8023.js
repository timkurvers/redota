(()=>{"use strict";var e,t,a,r={8159(e,t,a){var r=a(6540),n=a(961),l=a(4565),i=a(4612),o=a(4625),s=a(4180),c=a(4576),m=a(2048),d=a(979),u=a(7886);const p=i.Ay.div`
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
`,h=i.Ay.div`
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
`,g=i.Ay.div`
  position: relative;
  z-index: 2;
`,f=i.Ay.header`
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
`,b=i.Ay.div`
  opacity: .25;
  padding: 2em 0;
  text-align: center;

  p {
    font-size: .75rem;
  }
`,E=e=>{const{children:t,className:a}=e,n=r.createElement(d.A,{to:"https://github.com/timkurvers/redota/#legalese",grayscale:!0},"legal and resource attributions"),l=r.createElement(d.A,{to:"https://github.com/timkurvers/redota/compare/v1.13.0...v1.14.0",grayscale:!0},"v1.14.0");return r.createElement(p,null,r.createElement(f,null,r.createElement(d.A,{to:"/"},r.createElement(u.A,null)),r.createElement("p",null,"Revisit past Dota 2 matches in the browser")),r.createElement(h,null,r.createElement("img",{src:"./images/backdrop.jpg",alt:""})),r.createElement(g,{className:a},t),r.createElement(b,null,r.createElement("p",null,r.createElement("strong",null,"©2020-2025 ReDota ",l)),r.createElement("p",null,"Dota 2 is a registered trademark of Valve Corporation.",r.createElement("br",null),"Image resources, lore and other references are property of Valve Corporation."),r.createElement("p",null,"See additional ",n," on ",r.createElement(m.A,{brand:!0,name:"github"})," GitHub.")))};var y=a(3539),_=a(3763),A=a(7515),v=a(725),w=a(9829),x=a(300);const k=()=>{const e=(0,s.W6)(),[t,a]=(0,w.$S)(()=>v.A.models.Match.query.orderBy("endedAt").reverse().toArray()),n=(0,r.useCallback)(()=>{e.push("/matches/find")},[e]),l=(0,r.useCallback)(()=>{e.push("/matches/select")},[e]);let i=null;if(!a){const e=t.reduce((e,t)=>e+t.replay.size,0);i=Math.round(e/1e6)}const o=r.createElement(d.A,{to:"/matches/find/5712001132"},"searching for a professional game"),c=r.createElement(y.pG,null,r.createElement(y.Ay,{fancy:!0,onClick:n},"Find replay by match ID"),r.createElement(y.Ay,{fancy:!0,onClick:l},"Select local replay file"));return r.createElement(r.Fragment,null,!a&&!t.length&&r.createElement(A.A,{kind:"instructions"},"Get started with ReDota by ",o,"."),!a&&t.length>5&&c,!a&&t.map(e=>r.createElement(x.A,{key:e.uuid,match:e})),c,i>0&&r.createElement(r.Fragment,null,r.createElement("p",null,"The above replays take up approximately ",r.createElement("strong",null,i," MB")," of storage space in your browser. Use the trash cans to get rid of unwanted replays."),r.createElement("p",null,r.createElement("strong",null,"Note:")," Your browser may perform house keeping and remove replay data. Keep a copy if you need them.")))},D=i.Ay.div``,C=()=>r.createElement(D,null,r.createElement("h2",null,"Matches"),r.createElement(_.A,{context:"database"},r.createElement(k,null))),T=i.Ay.aside``,F=()=>{const e=r.createElement(d.A,{to:"https://github.com/dotabuff/manta"},"Dotabuff"),t=r.createElement(d.A,{to:"https://github.com/timkurvers/redota"},r.createElement(m.A,{brand:!0,name:"github"})," GitHub"),a=r.createElement(d.A,{to:"https://moddota.com"},"ModDota"),n=r.createElement(d.A,{to:"https://www.opendota.com"},"OpenDota"),l=r.createElement(d.A,{to:"https://github.com/skadistats/clarity"},"Skadistats");return r.createElement(T,null,r.createElement("h2",null,"What is this?"),r.createElement("p",null,"An open-source experiment to revisit past Dota 2 matches in a web browser, visualizing the game as an interactive map."),r.createElement("p",null,"For bug reports, feedback and development of ReDota, visit the project on ",t,"."),r.createElement("h2",null,"Performance"),r.createElement("p",null,"Real-time playback of replays can be taxing on your machine, but should be performant in recent versions of modern browsers."),r.createElement("h2",null,"Attribution"),r.createElement("p",null,"ReDota is a heavily derived project and stands on the shoulders of giants, notably parsers by ",e," and ",l,"."),r.createElement("p",null,"Special thanks to community members from ",n," and ",a," who assisted in deciphering replay specifics."))},$=i.Ay.div`
  width: 2px;
  background: linear-gradient(
    to bottom,
    rgba(151, 151, 151, 0) 0%, rgba(151, 151, 151, .15) 10%,
    rgba(151, 151, 151, .15) 90%, rgba(151, 151, 151, 0) 100%
  );
  margin: 0 20px;
`,I=i.Ay.div``,S=(0,i.Ay)(E)`
  @media screen and (min-width: 900px) {
    ${I} {
      display: flex;
      flex-direction: row-reverse;
    }

    ${D} {
      width: 76%;
    }

    ${T} {
      width: 24%;
    }
  }
`,O=e=>{const{children:t}=e;return(0,c.P)(),r.createElement(S,null,r.createElement(I,null,r.createElement(F,null),r.createElement($,null),r.createElement(C,null)),t)},P=(0,i.Ay)(E)`
  text-align: center;
`,z=()=>((0,c.A)("404"),r.createElement(P,null,r.createElement("h2",null,"404 Not Found"),r.createElement("p",null,"Exist, this page does not."))),N=(0,l.Ay)(()=>Promise.all([a.e(121),a.e(234),a.e(115)]).then(a.bind(a,826))),R=(0,l.Ay)(()=>Promise.all([a.e(121),a.e(234),a.e(115)]).then(a.bind(a,9073))),M=(0,l.Ay)(()=>Promise.all([a.e(121),a.e(234),a.e(115)]).then(a.bind(a,8464))),j=i.Ay.div`
  box-sizing: content-box;
  letter-spacing: 0.5px;
`,B=()=>r.createElement(j,null,r.createElement(o.I9,null,r.createElement(s.dO,null,r.createElement(s.qh,{exact:!0,path:["/","/matches","/matches/find/:prefill?","/matches/select"]},r.createElement(O,null,r.createElement(s.qh,{path:"/matches/find/:prefill?"},r.createElement(R,null)),r.createElement(s.qh,{path:"/matches/select"},r.createElement(M,null)))),r.createElement(s.qh,{path:"/matches/:id"},r.createElement(N,null)),r.createElement(s.qh,null,r.createElement(z,null))))),G=document.querySelector("#container");n.render(r.createElement(B,null),G)},3539(e,t,a){a.d(t,{Ay:()=>m,OV:()=>o,pG:()=>c});var r=a(6540),n=a(4612),l=a(7643);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(null,arguments)}const o=n.Ay.button`
  appearance: none;
  background: none;
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: 1rem;
  cursor: pointer;

  ${e=>e.fancy&&n.AH`
    background: #610606;
    box-shadow: inset 1px 1px 0 0 #B60A0A, inset -1px -1px 0 0 #410404;
    border-radius: 6px;
    padding: 6px 40px;
    margin: .5em 1em 1em;
    font-family: 'Galdeano', sans-serif;
    text-shadow: 1px 1px 0 #942020, -1px -1px 1px #000000;

    ${!e.disabled&&n.AH`
      &:hover, &:focus {
        filter: saturate(125%);
      }
    `}
  `}

  ${e=>e.disabled&&n.AH`
    filter: brightness(50%);
    cursor: not-allowed;
  `}
`,s=(0,n.Ay)(l.z)`
  margin-top: .8125rem;

  ${o} {
    margin: 1em;
  }
`,c=e=>r.createElement(s,i({justify:"center"},e)),m=e=>{const{label:t,...a}=e,n={};return t&&(n["aria-label"]=t,n.title=t),r.createElement(o,i({type:"button"},a,n))}},1805(e,t,a){a.d(t,{A:()=>s});var r=a(6540),n=a(4612),l=a(979);const i=n.Ay.div`
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
`,o=n.Ay.div`
  padding: 1.25em;
`,s=e=>{const{context:t,error:a}=e,n=r.createElement(l.A,{to:"https://github.com/timkurvers/redota/issues",grayscale:!0},"open an issue"),{name:s,message:c}=a,m=`${s?`${s}: `:""}${c}\n`;let{stack:d}=a;return d&&(d=d.startsWith(m)?d.replace(m,""):d.replace(/^/gm,"    at ")),r.createElement(o,null,r.createElement(i,null,r.createElement("h3",null,"Whoops, an error occurred!"),"database"===t&&r.createElement(r.Fragment,null,r.createElement("p",null,"ReDota stores match and replay data in a local database in your browser and unfortunately something went wrong trying to access it."),r.createElement("p",null,"Please note that private / incognito mode is ",r.createElement("strong",null,"NOT")," supported in Mozilla Firefox and Safari as these browsers restrict access or lack features while in this mode.")),r.createElement("p",null,"If you believe this to be a novel bug in ReDota, please ",n,"."),r.createElement("details",null,r.createElement("summary",null,"Technical details"),r.createElement("pre",null,m,d))))}},3763(e,t,a){a.d(t,{A:()=>i});var r=a(6540),n=a(1805);class l extends r.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}render(){const{children:e,context:t}=this.props,{error:a}=this.state;return a?r.createElement(n.A,{context:t,error:a}):e}}const i=l},2048(e,t,a){a.d(t,{A:()=>l});var r=a(6540);const n=a(4612).Ay.i``,l=e=>{const{brand:t,className:a="",name:l,title:i}=e,o=`${t?"fab":"fas"} fa-${l} ${a}`;return r.createElement(n,{className:o,title:i})}},979(e,t,a){a.d(t,{A:()=>c});var r=a(6540),n=a(4612),l=a(4625);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(null,arguments)}const o=(0,n.Ay)(l.N_)`
  color: #C22E1F;
  text-decoration: none;

  &:hover, &:focus {
    color: #FF1700;
  }

  ${e=>e.grayscale&&n.AH`
    color: #CCC;
    border-bottom: 1px solid currentColor;

    &:hover, &:focus {
      color: #FFF;
    }
  `}
`,s=e=>{const{to:t}=e;return t.startsWith("http")?r.createElement(o,i({as:"a",href:t},e)):r.createElement(o,e)},c=r.memo(s)},7886(e,t,a){a.d(t,{A:()=>n});var r=a(6540);const n=()=>r.createElement("img",{alt:"ReDota",src:"./images/logo.svg"})},7515(e,t,a){a.d(t,{A:()=>i});var r=a(6540),n=a(4612);const l=n.Ay.p`
  color: #BBB;
  text-align: center;

  ${e=>"error"===e.kind&&n.AH`
    color: #C22E1F;
  `}

  ${e=>"warning"===e.kind&&n.AH`
    color: #B08C00;
  `}
`,i=e=>{const{children:t,kind:a="notice"}=e;return r.createElement(l,{kind:a},t)}},3066(e,t,a){a.d(t,{Lf:()=>E,PB:()=>y,mD:()=>_,ME:()=>f,tp:()=>A,QS:()=>w});var r=a(6540),n=a(4612);const l="./images",i="https://cdn.cloudflare.steamstatic.com/apps/dota2/images",o=["ancient_rock_golem_weakening_aura","berserker_troll_break","black_drake_magic_amplification_aura","creep_irresolute","creep_piercing","creep_siege","enraged_wildkin_hurricane","fel_beast_haunt","flagbearer_creep_aura_effect","forest_troll_high_priest_heal_amp_aura","frogmen_arm_of_the_deep","frogmen_congregation_of_the_deep","frogmen_riverborn_aura","frogmen_tendrils_of_the_deep","frogmen_water_bubble_large","frogmen_water_bubble_medium","frogmen_water_bubble_small","frostbitten_golem_time_warp_aura","furbolg_enrage_attack_speed","furbolg_enrage_damage","giant_wolf_intimidate","harpy_scout_take_off","hill_troll_rally","ice_shaman_incendiary_bomb","kobold_disarm","kobold_tunneler_prospecting","miniboss_alleviation","miniboss_unyielding_shield","miniboss_radiance","miniboss_reflect","ogre_bruiser_ogre_smash","roshan_grab_and_throw","roshan_revengeroar","warpine_raider_seed_shot"],s={dawnbreaker:["portrait","landscape","icon"],largo:["icon"],marci:["portrait","icon"],muerta:["portrait","icon"],primal_beast:["portrait","icon"],ringmaster:["icon"]},c=["npc_dota_neutral_ancient_frog","npc_dota_neutral_ancient_frog_mage","npc_dota_neutral_froglet","npc_dota_neutral_froglet_mage","npc_dota_neutral_grown_frog","npc_dota_neutral_grown_frog_mage","npc_dota_neutral_tadpole"],m=["npc_dota_base_additive","npc_dota_base","npc_dota_broodmother_web","npc_dota_companion","npc_dota_thinker"],d="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",u=e=>{if(!e)return d;let t=`${i}/dota_react`;return o.includes(e)&&(t=l),`${t}/abilities/${e}.png`},p=(e,t)=>{if(!e)return d;const a=e.replace("npc_dota_hero_","");let r=null;switch(t){case"portrait":r="_vert.jpg";break;default:case"landscape":r="_sb.png";break;case"icon":r="_icon.png"}let n=i;return s[a]?.includes(t)&&(n=l),`${n}/heroes/${a}${r}`},h=e=>{if(!e)return d;let t=e.replace("item_","");return t.startsWith("recipe_")&&(t="recipe"),`${i}/dota_react/items/${t}.png`},g=e=>`${i}/dota_react/teams/${e}.png`,f=n.Ay.img`
  user-select: none;
`,b=e=>{const{alt:t,src:a,title:n}=e,l=(0,r.useCallback)(e=>{e.preventDefault()},[]);return r.createElement(f,{src:a,draggable:"false",alt:t,title:n,onDragStart:l})},E=r.memo(e=>{const{name:t,refname:a}=e;return r.createElement(b,{alt:t,src:u(a),title:t})}),y=r.memo(e=>{const{refname:t,variant:a}=e;return r.createElement(b,{src:p(t,a)})}),_=r.memo(e=>{const{name:t,refname:a}=e;return r.createElement(b,{alt:t,src:h(a),title:t})}),A=r.memo(e=>{const{alt:t,teamID:a}=e;return r.createElement(b,{alt:t,src:g(a),title:t})}),v=r.memo(e=>{const{refname:t,variant:a}=e,n=((e,t)=>{if(!e||m.includes(e))return d;switch(t){case"portrait":return c.includes(e)?`${l}/portraits/missing.png`:`${l}/portraits/${e}.jpg`;case"icon":return`${l}/icons/${e}.png`;default:return null}})(t,a);return n?r.createElement(b,{src:n}):null}),w=r.memo(e=>{const{unit:t,unit:{refname:a},variant:n}=e;return"hero"===t.type?r.createElement(y,{refname:a,variant:n}):r.createElement(v,{refname:a,variant:n})})},7643(e,t,a){a.d(t,{T:()=>l,z:()=>n});var r=a(4612);const n=r.Ay.div.withConfig({shouldForwardProp:e=>"wrap"!==e})`
  display: flex;
  flex-direction: row;

  ${e=>"center"===e.justify&&r.AH`
    justify-content: center;
  `}

  ${e=>e.wrap&&r.AH`
    flex-wrap: wrap;
  `}
`,l=(0,r.Ay)(n)`
  flex-direction: column;
`},2781(e,t,a){a.d(t,{A:()=>s,q:()=>i});var r=a(6540),n=a(4612),l=a(3066);const i=n.Ay.div`
  padding: 0 10px;
  text-align: center;

  ${l.ME} {
    max-width: 40px;
  }
`,o=e=>{const{alt:t,teamID:a}=e;return r.createElement(i,null,r.createElement(l.tp,{alt:t,teamID:a}))},s=r.memo(o)},8260(e,t,a){a.d(t,{A:()=>l,F:()=>n});var r=a(6540);const n=a(4612).Ay.span``,l=e=>{let{time:t}=e;const a=t<0?"-":"";t=Math.abs(t);const l=t/3600|0;t%=3600;const i=t/60|0;t%=60;const o=0|t;return r.createElement(n,null,a,l>0&&r.createElement(r.Fragment,null,l,":"),`00${i}`.slice(-2),":",`00${o}`.slice(-2),a?" ":"")}},4576(e,t,a){a.d(t,{A:()=>s,P:()=>o});var r=a(6540),n=a(4180);const l=document.title,i=(e=null)=>{const t=(0,n.zy)();(0,r.useEffect)(()=>{document.title=e?`${e} | ReDota`:l},[t,e])},o=i,s=i},300(e,t,a){a.d(t,{A:()=>k});var r=a(6540),n=a(4612),l=a(3539);const i=n.Ay.span`
  white-space: nowrap;
`,o=e=>{const{date:t}=e;return t?r.createElement(i,null,t.toLocaleString("en-US",{year:"numeric",month:"short",day:"numeric"})):"-"};var s=a(2048),c=a(979),m=a(2781),d=a(8260),u=a(6241),p=a(3066),h=a(7643),g=a(3087);const f=(0,n.Ay)(h.z)`
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
`,b=(0,n.Ay)(h.z)`
  height: 26px;
  align-items: center;
  justify-content: flex-end;
  font-size: 0.8rem;

  ${m.q}, ${h.z} {
    height: 100%;
  }

  ${p.ME} {
    height: 100%;
    margin-right: 2px;
    vertical-align: middle;
  }

  i + ${h.z} {
    margin-left: 10px;
  }

  & + & {
    margin-top: 2px;
  }
`,E=e=>{const{team:t,isWinner:a}=e,{name:n,players:l,proID:i}=t;return r.createElement(b,null,a&&r.createElement(s.A,{name:"trophy",title:"Winner"}),i>0&&r.createElement(m.A,{alt:n,teamID:i}),r.createElement(h.z,null,l.map((e,t)=>r.createElement(p.PB,{key:e.hero||t,refname:e.hero,variant:"landscape"}))))},y=(0,n.Ay)(h.T)`
  border-left: 1px solid rgba(151, 151, 151, .15);
  margin-left: 18px;
  padding-left: 10px;

  ${l.OV} {
    opacity: .5;
    padding: 5px 10px;

    &:hover, &:focus {
      opacity: 1;
    }
  }
`,_=n.Ay.div`
  min-width: 90px;
  text-align: center;
  white-space: nowrap;

  @media screen and (max-width: 700px) {
    display: none;
  }
`,A=(0,n.Ay)(h.T)`
  flex-grow: 1;
`,v=(0,n.Ay)(h.z)``,w=n.Ay.div`
  opacity: .25;
  margin-left: .5em;
`,x=(0,n.Ay)(h.T)`
  min-width: 340px;
  min-height: 54px;
`,k=e=>{const{match:t,isPreview:a=!1}=e,{id:n,duration:i,endedAt:m,gameMode:p,label:h,patch:b,radiant:k,dire:D,winningTeamID:C}=t,T=(0,r.useCallback)(()=>{const e=document.createElement("a");e.setAttribute("download",t.replay.filename),e.setAttribute("href",URL.createObjectURL(t.replay.blob)),e.click()},[t]),F=(0,r.useCallback)(()=>{t.delete()},[t]);return r.createElement(f,null,r.createElement(A,null,!a&&r.createElement(c.A,{to:`/matches/${n}`},h),u.A[p]?.name,r.createElement(v,null,r.createElement(o,{date:m}),b&&r.createElement(w,null,b.name))),r.createElement(_,null,r.createElement(d.A,{time:i})),r.createElement(x,{justify:"center"},k&&r.createElement(E,{team:k,isWinner:C===g.y}),D&&r.createElement(E,{team:D,isWinner:C===g.dl})),!a&&r.createElement(y,null,r.createElement(l.Ay,{onClick:T,label:"Download replay"},r.createElement(s.A,{name:"file-download"})),r.createElement(l.Ay,{onClick:F,label:"Remove match"},r.createElement(s.A,{name:"trash-alt"}))))}},3087(e,t,a){a.d(t,{Dq:()=>n,F6:()=>l,Hg:()=>i,T3:()=>p,T4:()=>o,dl:()=>m,tV:()=>r,tp:()=>s,y:()=>c});const r=16384,n=128,l={[-1]:"#DDDDDD",0:"#3375FF",1:"#66FFBF",2:"#BF00BF",3:"#F3F00B",4:"#FF6B00",5:"#FE86C2",6:"#A1B447",7:"#65D9F7",8:"#008321",9:"#A46900"},i={UNKNOWN:0,NOT_YET_CONNECTED:1,CONNECTED:2,DISCONNECTED:3,ABANDONED:4,LOADING:5,FAILED:6},o={INIT:0,WAIT_FOR_PLAYERS_TO_LOAD:1,HERO_SELECTION:2,STRATEGY_TIME:3,PRE_GAME:4,GAME_IN_PROGRESS:5,POST_GAME:6,DISCONNECT:7,PREGAME:4,START:5,END:6},s=1,c=2,m=3,d=4,u=5,p={[c]:"#23B200",[m]:"#B21000",[d]:"#CAAA32",[u]:"#CCCCCC"}},725(e,t,a){a.d(t,{A:()=>p});var r=a(5830),n=(a(8760),a(3087)),l=a(1081);const i=[{id:"7.23",size:16384,backdrop:{size:4e3,offset:{x:-.2,y:.4}}},{id:"7.33",size:19134,backdrop:{size:4700,offset:{x:-1.2,y:-.3}}},{id:"7.38",size:19134,backdrop:{size:4700,offset:{x:-1.2,y:-.3}}},{id:"7.40",size:19134,backdrop:{size:4700,offset:{x:-1.2,y:-.3}}}],o=[];let s=0;for(const e of l.F6){const t=s+1,a=i[t];e.name===a?.id&&(s=t),o.unshift({...e,date:new Date(e.date),map:i[s]})}const c=o;let m=null;const d="matches",u=new r.default("redota");u.version(1).stores({matches:"$$uuid, &matchID, endedAt"}),u.models={Match:class{constructor(){this.uuid=void 0,this.replay=null,this.matchID=null,this.leagueID=null,this.duration=null,this.createdAt=new Date,this.endedAt=null,this.winningTeamID=null,this.teams={}}get id(){return this.matchID||this.uuid}get label(){return this.matchID||this.replay.filename}get radiant(){return this.teams[n.y]}get dire(){return this.teams[n.dl]}get patch(){return c.find(e=>this.endedAt>=e.date)||c[0]}get winner(){return this.teams[this.winningTeamID]}delete(){return m[d].delete(this.uuid)}async update(e){const{default:t}=await Promise.all([a.e(121),a.e(234),a.e(115)]).then(a.bind(a,5363));this.replay={filename:e.name,size:e.size,blob:e};const r=new t(await e.arrayBuffer()),{summary:n}=r,l=n.gameInfo?.dota;if(this.duration=n.playbackTime,l){this.matchID=l.matchId,this.leagueID=l.leagueid,this.endedAt=new Date(1e3*l.endTime),this.gameMode=l.gameMode,this.winningTeamID=l.gameWinner,this.teams={};for(const e of l.playerInfo){const t=e.gameTeam;let a=this.teams[t];a||(a={name:null,proID:null,players:[]},this.teams[t]=a),a.players.push({hero:e.heroName})}this.radiant&&(this.radiant.name=l.radiantTeamTag,this.radiant.proID=l.radiantTeamId),this.dire&&(this.dire.name=l.direTeamTag,this.dire.proID=l.direTeamId)}else this.matchID=null,this.leagueID=null,this.endedAt=new Date(e.lastModified),this.gameMode=-1,this.winningTeamID=null}async refresh(){return this.replay&&await this.update(this.replay.blob),this.save()}save(){return m[d].put(this)}static get query(){return m[d]}static connect(e){return m=e,m[d].mapToClass(this),this}}.connect(u)};const p=u},6241(e,t,a){a.d(t,{A:()=>r});const r={0:{name:"Unknown"},1:{name:"All Pick"},2:{name:"Captains Mode"},3:{name:"Random Draft"},4:{name:"Single Draft"},5:{name:"All Random"},6:{name:"Intro"},7:{name:"Diretide"},8:{name:"Reverse Captains Mode"},9:{name:"The Greeviling"},10:{name:"Tutorial"},11:{name:"Mid Only"},12:{name:"Least Played"},13:{name:"Limited Heroes"},14:{name:"Compendium"},15:{name:"Custom"},16:{name:"Captains Draft"},17:{name:"Balanced Draft"},18:{name:"Ability Draft"},19:{name:"Custom Game"},20:{name:"All Random Deathmatch"},21:{name:"1v1 Solo Mid"},22:{name:"Ranked All Pick"},23:{name:"Turbo"},24:{name:"Mutation"},25:{name:"Coaches Challenge"}}},9829(e,t,a){a.d(t,{Zu:()=>o,$S:()=>m,EE:()=>r.v,V1:()=>p,K7:()=>h.A,vh:()=>f});var r=a(770),n=a(6540),l=a(4225),i=a.n(l);const o=(e,...t)=>{const[a,r]=(0,n.useState)(null);if(a)throw a;return i()(async()=>{try{await e()}catch(e){r(e)}},...t)};var s=a(2676);const c=Symbol("awaiting db result"),m=(e,t=[])=>{const a=(0,s.useLiveQuery)(e,t,c),r=a===c;return[r?null:a,r]};var d=a(3087);const u=new URLSearchParams(window.location.search).has("debug"),p=e=>{const[t,a]=(0,n.useState)({relX:0,relY:0,width:0,height:0}),[r,l]=(0,n.useState)(-1),[i,o]=(0,n.useState)(!1),[s,c]=(0,n.useState)(1),[m,p]=(0,n.useState)(null),h=-1===r,g=h?t:e?.players.get(r)?.camera;(0,n.useEffect)(()=>{e.on("warn",console.warn),e.start(),e.jumpTo(d.T4.PRE_GAME),e.seek(e.tick+e.ticksPerSecond)},[e]),((e,t)=>{const a=(0,n.useRef)();(0,n.useEffect)(()=>{a.current=e},[e]),(0,n.useEffect)(()=>{if(null!==t){const e=setInterval(()=>{a.current()},t);return()=>clearInterval(e)}},[t])})(()=>{e.step(2)},e&&i?2*e.ticksPerSecond*(1/s):null);const f=e?.units.find(e=>e.handle===m),b=(0,n.useCallback)(t=>{t-e.tick<1e3?e.seek(t):e.jump(t)},[e]),E=(0,n.useCallback)(e=>{e===m&&h&&a(e=>({...e,relX:f.position.relX,relY:f.position.relY})),p(e)},[h,m,f,a,p]);return((e,t)=>{(0,n.useEffect)(()=>{u&&(window.redota={replay:e,selectedUnit:t})},[e,t])})(e,f),{camera:g,cameraID:r,isFreeCamera:h,playbackSpeed:s,playing:i,requestTick:b,selectedUnit:f,setCameraID:l,setFreeCamera:a,setPlaybackSpeed:c,setPlaying:o,setSelection:E}};var h=a(4576);const g=()=>{const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}},f=()=>{const[e,t]=(0,n.useState)(g());return(0,n.useEffect)(()=>{const e=()=>{t(g())};return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[t]),[e]}}},n={};function l(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={exports:{}};return r[e].call(a.exports,a,a.exports,l),a.exports}l.m=r,e=[],l.O=(t,a,r,n)=>{if(!a){var i=1/0;for(m=0;m<e.length;m++){for(var[a,r,n]=e[m],o=!0,s=0;s<a.length;s++)(!1&n||i>=n)&&Object.keys(l.O).every(e=>l.O[e](a[s]))?a.splice(s--,1):(o=!1,n<i&&(i=n));if(o){e.splice(m--,1);var c=r();void 0!==c&&(t=c)}}return t}n=n||0;for(var m=e.length;m>0&&e[m-1][2]>n;m--)e[m]=e[m-1];e[m]=[a,r,n]},l.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return l.d(t,{a:t}),t},l.d=(e,t)=>{for(var a in t)l.o(t,a)&&!l.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},l.f={},l.e=e=>Promise.all(Object.keys(l.f).reduce((t,a)=>(l.f[a](e,t),t),[])),l.u=e=>"redota-"+{115:"parser+viewer",234:"protobuf"}[e]+"-"+{115:"44ad75d0",234:"fa68d285"}[e]+".js",l.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),l.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),t={},a="@timkurvers/redota:",l.l=(e,r,n,i)=>{if(t[e])t[e].push(r);else{var o,s;if(void 0!==n)for(var c=document.getElementsByTagName("script"),m=0;m<c.length;m++){var d=c[m];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==a+n){o=d;break}}o||(s=!0,(o=document.createElement("script")).charset="utf-8",l.nc&&o.setAttribute("nonce",l.nc),o.setAttribute("data-webpack",a+n),o.src=e),t[e]=[r];var u=(a,r)=>{o.onerror=o.onload=null,clearTimeout(p);var n=t[e];if(delete t[e],o.parentNode&&o.parentNode.removeChild(o),n&&n.forEach(e=>e(r)),a)return a(r)},p=setTimeout(u.bind(null,void 0,{type:"timeout",target:o}),12e4);o.onerror=u.bind(null,o.onerror),o.onload=u.bind(null,o.onload),s&&document.head.appendChild(o)}},l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;l.g.importScripts&&(e=l.g.location+"");var t=l.g.document;if(!e&&t&&(t.currentScript&&"SCRIPT"===t.currentScript.tagName.toUpperCase()&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/^blob:/,"").replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),l.p=e})(),(()=>{var e={792:0};l.f.j=(t,a)=>{var r=l.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var n=new Promise((a,n)=>r=e[t]=[a,n]);a.push(r[2]=n);var i=l.p+l.u(t),o=new Error;l.l(i,a=>{if(l.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var n=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+i+")",o.name="ChunkLoadError",o.type=n,o.request=i,r[1](o)}},"chunk-"+t,t)}},l.O.j=t=>0===e[t];var t=(t,a)=>{var r,n,[i,o,s]=a,c=0;if(i.some(t=>0!==e[t])){for(r in o)l.o(o,r)&&(l.m[r]=o[r]);if(s)var m=s(l)}for(t&&t(a);c<i.length;c++)n=i[c],l.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return l.O(m)},a=self.webpackChunk_timkurvers_redota=self.webpackChunk_timkurvers_redota||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})(),l.nc=void 0;var i=l.O(void 0,[121,628],()=>l(8159));i=l.O(i)})();