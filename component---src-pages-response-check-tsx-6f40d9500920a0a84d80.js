"use strict";(self.webpackChunkyuni_q_blog=self.webpackChunkyuni_q_blog||[]).push([[742],{5591:function(e,t,n){n.r(t);var l=n(5785),r=n(7294),c=n(2788);const u="aqua",o="red",a="greenyellow",s=c.default.div.withConfig({displayName:"response-check__Screen",componentId:"sc-x4kqy5-0"})(["width:300px;height:200px;text-align:center;user-select:none;background-color:",";color:",";"],(e=>{let{color:t}=e;return t}),(e=>{let{color:t}=e;return t===o?"white":"black"}));t.default=()=>{const{0:e,1:t}=(0,r.useState)(u),{0:n,1:c}=(0,r.useState)([]),{0:i,1:m}=(0,r.useState)(0),h=(0,r.useRef)(null),d=(0,r.useRef)(null),f=(0,r.useCallback)((()=>{if(e===u&&(t(o),d.current=setTimeout((()=>{h.current=(new Date).getTime(),t(a)}),Math.floor(1e3*Math.random())+2e3)),e===o&&(h.current=null,t(u),alert("너무 성급하군요"),clearTimeout(d.current)),e===a){const e=(new Date).getTime()-h.current;c((t=>[e].concat((0,l.Z)(t)).sort(((e,t)=>e-t)))),m(e),t(u)}}),[e]);return r.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh"}},r.createElement(s,{color:e,onClick:f},e===u?"클릭해서 시작하세요.":e===o?"초록색이 되면 클릭하세요.":"클릭하세요!"),r.createElement("div",null,r.createElement("div",null,n.length>0&&"햔재 "+i+"ms / 평균 : "+n.reduce(((e,t)=>e+t),0)/n.length+"ms"),n.map(((e,t)=>r.createElement("div",{key:e+"-"+t},t+1+"위 : "+e+"ms")))))}}}]);
//# sourceMappingURL=component---src-pages-response-check-tsx-6f40d9500920a0a84d80.js.map