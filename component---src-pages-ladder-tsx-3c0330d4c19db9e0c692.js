"use strict";(self.webpackChunkyuni_q_blog=self.webpackChunkyuni_q_blog||[]).push([[6495],{1895:function(e,a,t){t.r(a);var l=t(4506),n=t(1083),i=t(6540),r=t(2568);a.default=()=>{const{0:e,1:a}=(0,i.useState)(.05),{0:t,1:r}=(0,i.useState)(0),{0:o,1:s}=(0,i.useState)([]),{0:c,1:d}=(0,i.useState)({}),{0:p,1:u}=(0,i.useState)([]),{0:f,1:b}=(0,i.useState)({}),{0:y,1:g}=(0,i.useState)([]),h=(0,i.useRef)(null),v=(0,i.useRef)(null);return(0,i.useEffect)((()=>{let a;return t>0&&(a=setInterval((()=>{r((a=>{if(a-1==0){const a=v.current;a.volume=e,a.play()}return a-1}))}),1e3)),()=>clearInterval(a)}),[t]),(0,i.useEffect)((()=>{(async()=>{var e;const a=await n.A.get("https://script.google.com/macros/s/AKfycbwiRDzA_FHVDm7VFkBI6_fXGAehsCaHQ_a8S5E8gFy47bD1dgnYOxeyjw/exec");null!=a&&null!==(e=a.data)&&void 0!==e&&e.items&&s(a.data.items)})()}),[]),(0,i.useEffect)((()=>{const e={};o.forEach((a=>{e[a.team]?e[a.team].push(a):e[a.team]=[a]})),d(e);const a={};p.forEach((e=>{a[e.team]?a[e.team].push(e):a[e.team]=[e]})),b(a)}),[o,p]),i.createElement(i.Fragment,null,i.createElement("input",{type:"range",min:"0",step:"0.05",max:"1",value:e,onChange:e=>a(parseFloat(e.target.value))}),i.createElement("div",{style:{display:"flex"}},i.createElement("audio",{ref:h,src:"/drum.mp3"}),i.createElement("audio",{ref:v,src:"/good.mp3"}),t>0&&i.createElement(m,{time:t}),i.createElement("div",{style:{margin:16,textAlign:"center"}},i.createElement("div",{onClick:()=>{u([].concat((0,l.A)(o),(0,l.A)(p))),s([])}},i.createElement("div",{style:{background:"chartreuse",whiteSpace:"nowrap",padding:4}},"모두 선택")),i.createElement("div",null,Object.keys(c).map((e=>{if(0!==c[e].length)return i.createElement("div",{key:e,onClick:()=>{const a=o.filter((a=>{let t=!1;return c[e].map((e=>{e.name===a.name&&(t=!0)})),!t}));s(a);const t=[].concat((0,l.A)(p),(0,l.A)(c[e]));u((0,l.A)(t))}},i.createElement("div",{style:{background:"aqua"}},e),c[e].map((e=>i.createElement("div",{onClick:a=>{a.stopPropagation();const t=[].concat((0,l.A)(p),[e]).filter(((e,a,t)=>a==t.indexOf(e)));u((0,l.A)(t)),s(o.filter((a=>a.name!==e.name)))},key:e.name},e.name))))})))),i.createElement("div",{style:{margin:16,textAlign:"center"}},i.createElement("div",null,i.createElement("div",{onClick:()=>{u([]),s([].concat((0,l.A)(o),(0,l.A)(p)))}},i.createElement("div",{style:{background:"gray",whiteSpace:"nowrap",padding:4}},"선택받은 사람들")),Object.keys(f).map((e=>{if(0!==f[e].length)return i.createElement("div",{key:e,onClick:()=>{const a=p.filter((a=>{let t=!1;return f[e].map((e=>{e.name===a.name&&(t=!0)})),!t}));u(a);const t=[].concat((0,l.A)(o),(0,l.A)(f[e]));s((0,l.A)(t))}},i.createElement("div",{style:{background:"aquamarine"}},e),f[e].map((e=>i.createElement("div",{onClick:a=>{a.stopPropagation();const t=[].concat((0,l.A)(o),[e]);s((0,l.A)(t)),u(p.filter((a=>a.name!==e.name)))},key:e.name},e.name))))})))),i.createElement("div",{style:{margin:16,textAlign:"center"}},p.map((e=>i.createElement("div",{key:e.name},i.createElement("input",{type:"text",className:"item"})))),p.length>0&&i.createElement("button",{type:"button",onClick:()=>{r(5);const a=h.current;a.volume=e,a.play();const t=document.querySelectorAll(".item");let n=(0,l.A)(p);const i=[];t.forEach((e=>{const a=e.value,t=Math.floor(Math.random()*n.length);a&&i.push({name:n[t].name,value:a}),n=n.filter(((e,a)=>a!==t))})),g(i)}},"시작!! 하겠습니다 !!")),i.createElement("div",{style:{margin:16,textAlign:"center"}},y.map((e=>i.createElement("div",{key:e.name,style:{whiteSpace:"nowrap"}},e.name," : ",e.value))))))};const o=r.default.div.withConfig({displayName:"ladder__StyledDiv",componentId:"sc-qia491-0"})(["position:absolute;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;z-index:1000;backdrop-filter:blur(10px);background:fixed;"]),s=r.default.div.withConfig({displayName:"ladder__Div",componentId:"sc-qia491-1"})(["background:transparent;/*! * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/) * Copyright 2015 Daniel Cardoso <@DanielCardoso> * Licensed under MIT */ .spinner{margin:0 auto;background-color:transparent !important;}.la-ball-pulse,.la-ball-pulse > div{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}.la-ball-pulse{display:flex;justify-content:center;align-items:center;font-size:0;color:#d7dbe6;}.la-ball-pulse.la-dark{color:#333;}.la-ball-pulse > div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;}.la-ball-pulse{width:54px;height:18px;}.la-ball-pulse > div:nth-child(1){-webkit-animation-delay:-200ms;-moz-animation-delay:-200ms;-o-animation-delay:-200ms;animation-delay:-200ms;}.la-ball-pulse > div:nth-child(2){-webkit-animation-delay:-100ms;-moz-animation-delay:-100ms;-o-animation-delay:-100ms;animation-delay:-100ms;}.la-ball-pulse > div:nth-child(3){-webkit-animation-delay:0ms;-moz-animation-delay:0ms;-o-animation-delay:0ms;animation-delay:0ms;}.la-ball-pulse > div{width:8px;height:8px;margin:4px;border-radius:100%;-webkit-animation:ball-pulse 1s ease infinite;-moz-animation:ball-pulse 1s ease infinite;-o-animation:ball-pulse 1s ease infinite;animation:ball-pulse 1s ease infinite;}.la-ball-pulse.la-sm{width:26px;height:8px;}.la-ball-pulse.la-sm > div{width:4px;height:4px;margin:2px;}.la-ball-pulse.la-2x{width:108px;height:36px;}.la-ball-pulse.la-2x > div{width:20px;height:20px;margin:8px;}.la-ball-pulse.la-3x{width:162px;height:54px;}.la-ball-pulse.la-3x > div{width:30px;height:30px;margin:12px;}@-webkit-keyframes ball-pulse{0%,60%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1);}30%{opacity:0.1;-webkit-transform:scale(0.01);transform:scale(0.01);}}@-moz-keyframes ball-pulse{0%,60%,100%{opacity:1;-moz-transform:scale(1);transform:scale(1);}30%{opacity:0.1;-moz-transform:scale(0.01);transform:scale(0.01);}}@-o-keyframes ball-pulse{0%,60%,100%{opacity:1;-o-transform:scale(1);transform:scale(1);}30%{opacity:0.1;-o-transform:scale(0.01);transform:scale(0.01);}}@keyframes ball-pulse{0%,60%,100%{opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);}30%{opacity:0.1;-webkit-transform:scale(0.01);-moz-transform:scale(0.01);-o-transform:scale(0.01);transform:scale(0.01);}}"]),m=e=>{let{time:a}=e;return i.createElement(o,null,i.createElement(s,null,a))}}}]);
//# sourceMappingURL=component---src-pages-ladder-tsx-3c0330d4c19db9e0c692.js.map