"use strict";(self.webpackChunkyuni_q_blog=self.webpackChunkyuni_q_blog||[]).push([[932],{8010:function(e,t,n){n.r(t);var l=n(5785),a=n(7294),r=n(2788);const i=r.default.div.withConfig({displayName:"jas-stone__Card",componentId:"sc-1mcpstd-0"})(["width:75px;height:120px;display:inline-block;position:relative;border:solid ",";margin-bottom:10px;background:",";"],(e=>{let{on:t}=e;return t?"3px red":"1px black"}),(e=>{let{off:t}=e;return t?"gray":"white"})),o=r.default.div.withConfig({displayName:"jas-stone__My",componentId:"sc-1mcpstd-1"})(["display:inline-block;vertical-align:top;margin-right:50px;background:",";"],(e=>{let{turn:t}=e;return t?"white":"gray"})),c=(0,r.default)(o).withConfig({displayName:"jas-stone__Rival",componentId:"sc-1mcpstd-2"})(["vertical-align:bottom;"]),s=r.default.div.withConfig({displayName:"jas-stone__MyDeck",componentId:"sc-1mcpstd-3"})(["display:inline-block;vertical-align:top;width:300px;background:silver;text-align:center;"]),m=(0,r.default)(s).withConfig({displayName:"jas-stone__RivalDeck",componentId:"sc-1mcpstd-4"})([""]),u=r.default.div.withConfig({displayName:"jas-stone__CardAttribute",componentId:"sc-1mcpstd-5"})(["font-size:16px;font-weight:bold;text-align:center;line-height:30px;width:30px;height:30px;border-radius:50%;display:inline-block;position:absolute;bottom:0;border:1px solid black;"]),d=(0,r.default)(u).withConfig({displayName:"jas-stone__CardCost",componentId:"sc-1mcpstd-6"})(["bottom:auto;top:0;left:0;background-color:blue;color:white;"]),p=(0,r.default)(u).withConfig({displayName:"jas-stone__CardAtt",componentId:"sc-1mcpstd-7"})(["left:0;background-color:yellow;"]),h=(0,r.default)(u).withConfig({displayName:"jas-stone__CardHp",componentId:"sc-1mcpstd-8"})(["right:0;background-color:red;color:white;"]),f=r.default.button.withConfig({displayName:"jas-stone__TurnButton",componentId:"sc-1mcpstd-9"})(["float:right;position:relative;top:-23px;"]),g=e=>{const t=e?Math.ceil(2*Math.random()):Math.ceil(5*Math.random()),n=e?25:0,l=Math.ceil(5*Math.random())+n;return{att:t,hp:l,cost:Math.floor((t+l)/2)}};t.default=()=>{const{0:e,1:t}=(0,a.useState)(g(!0)),{0:n,1:r}=(0,a.useState)(g(!0)),{0:u,1:E}=(0,a.useState)(1),{0:y,1:k}=(0,a.useState)(1),{0:b,1:v}=(0,a.useState)(!0),{0:x,1:C}=(0,a.useState)([g(),g(),g(),g(),g()]),{0:_,1:w}=(0,a.useState)([g(),g(),g(),g(),g()]),{0:S,1:F}=(0,a.useState)([]),{0:N,1:M}=(0,a.useState)([]),{0:j,1:I}=(0,a.useState)(null),{0:A,1:J}=(0,a.useState)([]),{0:O,1:Z}=(0,a.useState)(!1),{0:T,1:q}=(0,a.useState)(1),{0:D,1:R}=(0,a.useState)(1),z=e=>{let{turn:t,deck:n,filed:a,cost:r,idx:i,my:o}=e;if(!t)return;const c=r-n[i].cost;if(c<0)return;const s=[].concat((0,l.Z)(_.filter(((e,t)=>t!==i))),[g()]),m=[].concat((0,l.Z)(a),[n[i]]);o?(M(m),k(c),C(s)):(F(m),E(c),w(s))},B=a=>{let{turn:i,my:o,idx:c,masterFiled:s,slaveFiled:m}=a;const u=j;if(i&&A[c])return;if(i)return void I(c);if(null===j)return;const d=-1===u?o?n:e:s[u],p=m[c].hp-d.att;let h=[];h=p<=0?m.filter(((e,t)=>c!==t)):m.map(((e,t)=>c!==t?e:{...e,hp:p}));const f=d.hp-m[c].att;let g=[];-1!==u&&f<=0?g=s.filter(((e,t)=>t!==u)):-1!==u?g=s.map(((e,t)=>t!==u?e:{...e,hp:p})):(g=s,f<=0&&setTimeout((()=>alert(o?"승리하셨습니다.":"패배하였습니다.")),500),o?r((e=>({...e,hp:f}))):t((e=>({...e,hp:f})))),F(o?g:h),M(o?h:g),J((e=>{const t=(0,l.Z)(e);return t[u]=!0,t})),I(null),-1===u&&Z(!0)},H=a=>{let{turn:i,my:o,hero:c,masterFiled:s}=a;const m=j;if(i&&O)return;if(i&&null===j)return void I(-1);if(!i&&null===j)return;const u=-1===m?o?n:e:s[m],d=c.hp-u.att,p=u.hp-c.att;if(d<=0&&setTimeout((()=>alert(o?"패배하였습니다.":"승리하셨습니다.")),500),o?(t((e=>({...e,hp:d}))),-1===m&&r((e=>({...e,hp:p})))):(r((e=>({...e,hp:d}))),-1===m&&t((e=>({...e,hp:p})))),-1!==m){let e=[];p<=0?e=s.filter(((e,t)=>t!==m)):-1!==m&&(e=s.map(((e,t)=>t!==m?e:{...e,hp:p}))),o?F(e):M(e)}J((e=>{const t=(0,l.Z)(e);return t[m]=!0,t})),I(null),-1===m&&Z(!0)};return a.createElement(a.Fragment,null,a.createElement(c,{turn:!b},a.createElement("div",null,"코스트: ",a.createElement("span",null,u),"/",a.createElement("span",null,D)),a.createElement("div",{style:{textAlign:"center"}},a.createElement(i,{off:!b&&!!O,on:!b&&-1===j,onClick:()=>{H({turn:!b,my:!1,hero:n,masterFiled:N})}},a.createElement("div",null,"적 영웅"),a.createElement(p,null,n.att),a.createElement(h,null,n.hp))),a.createElement("div",{style:{textAlign:"center",height:150}},S.map(((e,t)=>a.createElement(a.Fragment,{key:JSON.stringify(e)+"-"+t},a.createElement(i,{off:!b&&A[t],on:!b&&j===t,onClick:()=>{B({turn:!b,my:!1,masterFiled:N,slaveFiled:S,idx:t})}},a.createElement(d,null,e.cost),a.createElement(p,null,e.att),a.createElement(h,null,e.hp))))))),a.createElement(m,null,a.createElement("div",null,"덱"),_.map(((e,t)=>a.createElement(a.Fragment,{key:JSON.stringify(e)+"-"+t},a.createElement(i,{onClick:()=>{z({turn:!b,cost:u,deck:_,filed:S,idx:t,my:!1})}},a.createElement(d,null,e.cost),a.createElement(p,null,e.att),a.createElement(h,null,e.hp)))))),a.createElement("hr",null),a.createElement(f,{onClick:()=>{b?(q((e=>Math.min(e+1,10))),k(Math.min(T+1,10))):(R((e=>Math.min(e+1,10))),E(Math.min(D+1,10))),I(null),J([]),Z(!1),v((e=>!e))}},"턴넘기기"),a.createElement(o,{turn:b},a.createElement("div",{style:{textAlign:"center",height:150}},N.map(((e,t)=>a.createElement(a.Fragment,{key:JSON.stringify(e)+"-"+t},a.createElement(i,{off:!!b&&A[t],on:!!b&&j===t,onClick:()=>{B({turn:b,my:!0,masterFiled:S,slaveFiled:N,idx:t})}},a.createElement(d,null,e.cost),a.createElement(p,null,e.att),a.createElement(h,null,e.hp)))))),a.createElement("div",{style:{textAlign:"center"}},a.createElement(i,{off:!!b&&!!O,on:!!b&&-1===j,onClick:()=>{H({turn:b,my:!0,hero:e,masterFiled:S})}},a.createElement("div",null,"내 영웅"),a.createElement(p,null,e.att),a.createElement(h,null,e.hp))),a.createElement("div",null,"코스트: ",a.createElement("span",null,y),"/",a.createElement("span",null,T))),a.createElement(s,null,a.createElement("div",null,"덱"),x.map(((e,t)=>a.createElement(a.Fragment,{key:JSON.stringify(e)+"-"+t},a.createElement(i,{onClick:()=>{z({turn:b,cost:y,deck:x,filed:N,idx:t,my:!0})}},a.createElement(d,null,e.cost),a.createElement(p,null,e.att),a.createElement(h,null,e.hp)))))))}}}]);
//# sourceMappingURL=component---src-pages-jas-stone-tsx-22b35ba8b087ed7f717a.js.map