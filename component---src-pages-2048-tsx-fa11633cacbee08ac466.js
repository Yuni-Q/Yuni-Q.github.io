(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"/b8u":function(t,e,n){var r=n("STAE");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"33Wh":function(t,e,n){var r=n("yoRg"),o=n("eDl+");t.exports=Object.keys||function(t){return r(t,o)}},"6LWA":function(t,e,n){var r=n("xrYK");t.exports=Array.isArray||function(t){return"Array"==r(t)}},A2ZE:function(t,e,n){var r=n("HAuM");t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},BIHw:function(t,e,n){"use strict";var r=n("I+eb"),o=n("or9q"),c=n("ewvW"),a=n("UMSQ"),u=n("ppGB"),i=n("ZfDv");r({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),n=a(e.length),r=i(e,0);return r.length=o(r,e,e,n,0,void 0===t?1:u(t)),r}})},"G+Rx":function(t,e,n){var r=n("0GbY");t.exports=r("document","documentElement")},GP3R:function(t,e,n){"use strict";n.r(e);n("BIHw"),n("QGkA");var r=n("KQm4"),o=n("q1tI"),c=n.n(o),a=n("vOnD"),u=a.c.table.withConfig({displayName:"sc-2048__Table",componentId:"unuaaf-0"})(["td{border:10px solid #bbada0;width:116px;height:128px;font-size:50px;font-weight:bold;text-align:center;}"]),i=a.c.div.withConfig({displayName:"sc-2048__Wrapper",componentId:"unuaaf-1"})(["user-select:none;.color-2{background-color:#eee4da;color:#776e65;}.color-4{background-color:#eee1c9;color:#776e65;}.color-8{background-color:#f3b27a;color:'white';}.color-16{background-color:#f69664;color:'white';}.color-32{background-color:#f77c5f;color:'white';}.color-64{background-color:#f75f3b;color:'white';}.color-128{background-color:#edd073;color:#776e65;}.color-256{background-color:#edcc62;color:#776e65;}.color-512{background-color:#edc950;color:#776e65;}.color-1024{background-color:#edc53f;color:#776e65;}.color-2048{background-color:#edc22e;color:#776e65;}"]);e.default=function(){var t=Object(o.useState)([]),e=t[0],n=t[1],a=Object(o.useState)(0),l=a[0],f=a[1],s=Object(o.useRef)(!1),h=Object(o.useRef)(!1),b=Object(o.useRef)([0,0]),d=Object(o.useRef)({data:[[]],score:[0,0]}),p=Object(o.useCallback)((function(){var t=[];if(e.forEach((function(e,n){e.forEach((function(e,r){e||t.push([n,r])}))})),t.length){var o=t[Math.floor(Math.random()*t.length)];n((function(t){var e=Object(r.a)(t);return e[o[0]][o[1]]=2,e}))}}),[e]),w=Object(o.useCallback)((function(t){var e=[[],[],[],[]],n=[[],[],[],[]],r=0;return t.forEach((function(t,e){t.forEach((function(t){if(t){var o=n[e];o[o.length-1]===t?(o[o.length-1]*=-2,r+=Math.abs(o[o.length-1])):n[e].push(t)}}))})),Array(4).fill(0).forEach((function(t,r){Array(4).fill(0).forEach((function(t,o){e[r][o]=Math.abs(n[r][o])||0}))})),{newData:e,score:r}}),[]),v=Object(o.useCallback)((function(t){var e=[[],[],[],[]],n=[[],[],[],[]],r=0;return t.forEach((function(t,e){t.forEach((function(o,c){if(t[3-c]){var a=n[e];a[a.length-1]===t[3-c]?(a[a.length-1]*=-2,r+=Math.abs(a[a.length-1])):n[e].push(t[3-c])}}))})),Array(4).fill(0).forEach((function(t,r){Array(4).fill(0).forEach((function(t,o){e[r][3-o]=Math.abs(n[r][o])||0}))})),{newData:e,score:r}}),[]),g=Object(o.useCallback)((function(t){var e=[[],[],[],[]],n=[[],[],[],[]],r=0;return t.forEach((function(t){t.forEach((function(t,e){if(t){var o=n[e];o[o.length-1]===t?(o[o.length-1]*=-2,r+=Math.abs(o[o.length-1])):n[e].push(t)}}))})),Array(4).fill(0).forEach((function(t,r){Array(4).fill(0).forEach((function(t,o){e[o][r]=Math.abs(n[r][o])||0}))})),{newData:e,score:r}}),[]),y=Object(o.useCallback)((function(t){var e=[[],[],[],[]],n=[[],[],[],[]],r=0;return t.forEach((function(e,o){e.forEach((function(e,c){if(t[3-o][c]){var a=n[c];a[a.length-1]===t[3-o][c]?(a[a.length-1]*=-2,r+=Math.abs(a[a.length-1])):n[c].push(t[3-o][c])}}))})),Array(4).fill(0).forEach((function(t,r){Array(4).fill(0).forEach((function(t,o){e[3-o][r]=Math.abs(n[r][o])||0}))})),{newData:e,score:r}}),[]),m=Object(o.useCallback)((function(t){if(console.log(2222),null==e||!e[0])return e;var r={newData:e,score:0};switch(t){case"left":r=w(e);break;case"right":r=v(e);break;case"up":r=g(e);break;case"down":r=y(e);break;default:r={newData:e,score:0}}JSON.stringify(e)!==JSON.stringify(r.newData)&&(d.current.data=e,s.current=!0,f((function(t){return t+r.score}))),n(r.newData)}),[e]),E=Object(o.useCallback)((function(){if(null==e||!e[0])return!1;var t=0;return JSON.stringify(e)===JSON.stringify(w(e).newData)&&(t+=1),JSON.stringify(e)===JSON.stringify(v(e).newData)&&(t+=1),JSON.stringify(e)===JSON.stringify(g(e).newData)&&(t+=1),JSON.stringify(e)===JSON.stringify(y(e).newData)&&(t+=1),t>=4||void 0}),[e]),k=Object(o.useCallback)((function(){var t=[new Array(4).fill(0),new Array(4).fill(0),new Array(4).fill(0),new Array(4).fill(0)];n(t),s.current=!0}),[]);return Object(o.useEffect)((function(){k()}),[]),Object(o.useEffect)((function(){var t=function(t){"ArrowUp"===t.key&&m("up"),"ArrowDown"===t.key&&m("down"),"ArrowLeft"===t.key&&m("left"),"ArrowRight"===t.key&&m("right")},e=function(t){b.current=[t.clientX,t.clientY]},n=function(t){var e=[t.clientX,t.clientY],n=e[0]-b.current[0],r=e[1]-b.current[1];n<0&&Math.abs(n)>Math.abs(r)&&m("left"),n>0&&Math.abs(n)>Math.abs(r)&&m("right"),r>0&&Math.abs(n)<=Math.abs(r)&&m("down"),r<0&&Math.abs(n)<=Math.abs(r)&&m("up")};return window.addEventListener("keydown",t),window.addEventListener("mousedown",e),window.addEventListener("mouseup",n),function(){window.removeEventListener("keydown",t),window.removeEventListener("mousedown",e),window.removeEventListener("mouseup",n)}}),[e]),Object(o.useEffect)((function(){(null==e?void 0:e.length)>3&&!e.flat().every((function(t){return 0===t}))&&E()&&setTimeout((function(){alert("패배했습니다...")}),500),!h.current&&e.flat().includes(2048)&&(h.current=!0,setTimeout((function(){alert("축하합니다. 2048을 만들었습니다.")}),500)),e.length>0&&s.current&&(p(),s.current=!1)}),[e]),Object(o.useEffect)((function(){l===d.current.score[1]&&(d.current.score=[l,l]),d.current.score.unshift(l),d.current.score.length=2}),[l]),c.a.createElement(i,null,c.a.createElement(u,null,c.a.createElement("tbody",null,e.map((function(t,e){return c.a.createElement("tr",{key:t+"-"+e},t.map((function(t,e){return c.a.createElement("td",{className:"color-"+t,key:t+"-"+e},!!t&&t)})))})))),c.a.createElement("div",null,c.a.createElement("span",null,l),c.a.createElement("button",{onClick:function(t){t.stopPropagation(),n(d.current.data),f(d.current.score[1])}},"되돌리기")))}},"N+g0":function(t,e,n){var r=n("g6v/"),o=n("m/L8"),c=n("glrk"),a=n("33Wh");t.exports=r?Object.defineProperties:function(t,e){c(t);for(var n,r=a(e),u=r.length,i=0;u>i;)o.f(t,n=r[i++],e[n]);return t}},QGkA:function(t,e,n){n("RNIs")("flat")},RNIs:function(t,e,n){var r=n("tiKp"),o=n("fHMY"),c=n("m/L8"),a=r("unscopables"),u=Array.prototype;null==u[a]&&c.f(u,a,{configurable:!0,value:o(null)}),t.exports=function(t){u[a][t]=!0}},STAE:function(t,e,n){var r=n("0Dky");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},ZfDv:function(t,e,n){var r=n("hh1v"),o=n("6LWA"),c=n("tiKp")("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[c])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},fHMY:function(t,e,n){var r,o=n("glrk"),c=n("N+g0"),a=n("eDl+"),u=n("0BK2"),i=n("G+Rx"),l=n("zBJ4"),f=n("93I0"),s=f("IE_PROTO"),h=function(){},b=function(t){return"<script>"+t+"<\/script>"},d=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(o){}var t,e;d=r?function(t){t.write(b("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=l("iframe")).style.display="none",i.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(b("document.F=Object")),t.close(),t.F);for(var n=a.length;n--;)delete d.prototype[a[n]];return d()};u[s]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(h.prototype=o(t),n=new h,h.prototype=null,n[s]=t):n=d(),void 0===e?n:c(n,e)}},or9q:function(t,e,n){"use strict";var r=n("6LWA"),o=n("UMSQ"),c=n("A2ZE"),a=function(t,e,n,u,i,l,f,s){for(var h,b=i,d=0,p=!!f&&c(f,s,3);d<u;){if(d in n){if(h=p?p(n[d],d,e):n[d],l>0&&r(h))b=a(t,e,h,o(h.length),b,l-1)-1;else{if(b>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[b]=h}b++}d++}return b};t.exports=a},tiKp:function(t,e,n){var r=n("2oRo"),o=n("VpIT"),c=n("UTVS"),a=n("kOOl"),u=n("STAE"),i=n("/b8u"),l=o("wks"),f=r.Symbol,s=i?f:f&&f.withoutSetter||a;t.exports=function(t){return c(l,t)||(u&&c(f,t)?l[t]=f[t]:l[t]=s("Symbol."+t)),l[t]}}}]);
//# sourceMappingURL=component---src-pages-2048-tsx-fa11633cacbee08ac466.js.map