(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{"C+5o":function(e,t,n){},HUVf:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var a=n("Kfvu"),r=function(e,t,n){void 0===t&&(t=""),void 0===n&&(n=""),Object(a.trackCustomEvent)({category:e,action:t,label:n})};t.b=r;var i={EXPOSE:"화면진입",CLICK:"클릭"}},Kfvu:function(e,t,n){"use strict";var a=n("TqRt");t.__esModule=!0,t.OutboundLink=u,t.trackCustomEvent=function(e){var t=e.category,n=e.action,a=e.label,r=e.value,i=e.nonInteraction,o=void 0!==i&&i,c=e.transport,u=e.hitCallback,l=e.callbackTimeout,s=void 0===l?1e3:l;if("undefined"!=typeof window&&window.ga){var d={eventCategory:t,eventAction:n,eventLabel:a,eventValue:r,nonInteraction:o,transport:c};u&&"function"==typeof u&&(d.hitCallback=function(e,t){void 0===t&&(t=1e3);var n=!1,a=function(){n||(n=!0,e())};return setTimeout(a,t),a}(u,s)),window.ga("send","event",d)}};var r=a(n("pVnL")),i=a(n("8OQS")),o=a(n("q1tI")),c=a(n("17x9"));function u(e){var t=e.eventCategory,n=e.eventAction,a=e.eventLabel,c=e.eventValue,u=(0,i.default)(e,["eventCategory","eventAction","eventLabel","eventValue"]);return o.default.createElement("a",(0,r.default)({},u,{onClick:function(r){"function"==typeof e.onClick&&e.onClick(r);var i=!0;return(0!==r.button||r.altKey||r.ctrlKey||r.metaKey||r.shiftKey||r.defaultPrevented)&&(i=!1),e.target&&"_self"!==e.target.toLowerCase()&&(i=!1),window.ga?window.ga("send","event",{eventCategory:t||"Outbound Link",eventAction:n||"click",eventLabel:a||e.href,eventValue:c,transport:i?"beacon":"",hitCallback:function(){i&&(document.location=e.href)}}):i&&(document.location=e.href),!1}}))}u.propTypes={href:c.default.string,target:c.default.string,eventCategory:c.default.string,eventAction:c.default.string,eventLabel:c.default.string,eventValue:c.default.number,onClick:c.default.func}},q2Eg:function(e,t,n){"use strict";n.r(t);var a,r=n("HaE+"),i=n("KQm4"),o=n("o0o1"),c=n.n(o),u=n("q1tI"),l=n.n(u),s=n("vOnD"),d=new Uint8Array(16);function f(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(d)}var p=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var v=function(e){return"string"==typeof e&&p.test(e)},m=[],h=0;h<256;++h)m.push((h+256).toString(16).substr(1));var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(m[e[t+0]]+m[e[t+1]]+m[e[t+2]]+m[e[t+3]]+"-"+m[e[t+4]]+m[e[t+5]]+"-"+m[e[t+6]]+m[e[t+7]]+"-"+m[e[t+8]]+m[e[t+9]]+"-"+m[e[t+10]]+m[e[t+11]]+m[e[t+12]]+m[e[t+13]]+m[e[t+14]]+m[e[t+15]]).toLowerCase();if(!v(n))throw TypeError("Stringified UUID is invalid");return n};var g=function(e,t,n){var a=(e=e||{}).random||(e.rng||f)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var r=0;r<16;++r)t[n+r]=a[r];return t}return b(a)},y=(n("xr0Z"),function(e){var t=e.id,n=e.top,a=e.left,r=e.width,i=e.height,o=e.text,c=e.onClickDelete,s=e.onClickMove,d=e.onClickResize,f=e.onChangeText,p=Object(u.useRef)(null),v=Object(u.useRef)(null),m=Object(u.useRef)(null),h=Object(u.useRef)(null),b=Object(u.useRef)(null),g=Object(u.useRef)(null),y=Object(u.useRef)(null),w=Object(u.useRef)(null),C=Object(u.useCallback)((function(e){if(!e.target.dataset.delete)return e.target.dataset.header?(p.current=e.clientX-a,v.current=e.clientY-n,void(b.current=!0)):void 0;c(e)}),[c,a,n]),E=function(e){e.target.dataset.blind&&(g.current=!0)},O=Object(u.useCallback)((function(e){var t=y.current.style;if(b.current){var r=y.current.style;r.top=e.clientY-v.current+"px",r.left=e.clientX-p.current+"px",r.zIndex="1"}if(g.current){var i=w.current.style;i.height=e.clientY-n-30+"px",i.width=e.clientX-a-15+"px",t.zIndex="1"}}),[n,a]),k=Object(u.useCallback)((function(){s(t,y.current.style.top,y.current.style.left),b.current=!1}),[t,s]),j=Object(u.useCallback)((function(){g.current=!1,d(t,w.current.style.width,w.current.style.height)}),[t,d]);return Object(u.useEffect)((function(){var e=m.current,t=h.current;return e.addEventListener("mousedown",C,!0),window.addEventListener("mousemove",O,!0),e.addEventListener("mouseup",k,!0),t.addEventListener("mousedown",E,!0),t.addEventListener("mouseup",j,!0),function(){e.removeEventListener("mousedown",C,!0),window.removeEventListener("mousemove",O,!0),e.removeEventListener("mouseup",k,!0),t.removeEventListener("mousedown",E,!0),t.removeEventListener("mouseup",j,!0)}}),[C,t,O,f,j,k,o]),l.a.createElement("div",{className:"memo",ref:y,style:{top:n+"px",left:a+"px"}},l.a.createElement("div",{className:"header","data-header":!0,"data-id":t,ref:m,onClick:C},l.a.createElement("h1",{className:"blind"},"메모장"),l.a.createElement("button",{className:"btn_close","data-delete":!0,"data-id":t,onClick:c},l.a.createElement("span",{className:"blind"},"닫기"))),l.a.createElement("div",{className:"content"},l.a.createElement("textarea",{className:"textarea",ref:w,style:{width:r+"px",height:i+"px"},placeholder:"메모 하십시오!",value:o,onChange:function(e){f(t,e.target.value,e.target)}}),l.a.createElement("button",{className:"btn_size","data-blind":!0,ref:h},l.a.createElement("span",{className:"blind"},"메모장 크기 조절"))))}),w=(n("C+5o"),function(e){var t=e.className,n=(e.status,e.size),a=void 0===n?28:n;return l.a.createElement("div",{className:"spinner la-ball-pulse "+(t||""),style:{height:a}},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null))}),C=n("Jgta");C.default.apps.length||C.default.initializeApp({apiKey:"AIzaSyDlYM9tmiCS8cpJNCJDt1ayilldy4ZHcqA",authDomain:"yuni-q.firebaseapp.com",databaseURL:"https://yuni-q.firebaseio.com",projectId:"yuni-q",storageBucket:"yuni-q.appspot.com",messagingSenderId:"158413688649",appId:"1:158413688649:web:a15e7e4e8ff8894f049498",measurementId:"G-J4THPFQ6L1"});var E=C.default,O={apiKey:"AIzaSyDlYM9tmiCS8cpJNCJDt1ayilldy4ZHcqA",authDomain:"yuni-q.firebaseapp.com",databaseURL:"https://yuni-q.firebaseio.com",projectId:"yuni-q",storageBucket:"yuni-q.appspot.com",messagingSenderId:"158413688649",appId:"1:158413688649:web:a15e7e4e8ff8894f049498",measurementId:"G-J4THPFQ6L1"},k=function(e){return E.apps.length||E.initializeApp(O),E.database().ref("/").child("memo").set(e)},j=n("HUVf"),x=s.c.div.withConfig({displayName:"memo__StyledLoading",componentId:"e5ril5-0"})(["width:100vw;height:100vh;background:gray;display:flex;color:white;align-items:center;"]);t.default=function(){var e=Object(u.useState)(!0),t=e[0],n=e[1],a=Object(u.useState)([]),o=a[0],s=a[1],d=Object(u.useRef)(null),f=Object(u.useRef)(!1),p=Object(u.useRef)(!1),v=Object(u.useCallback)((function(e){e.preventDefault(),e.target.dataset.wrap&&s([].concat(Object(i.a)(o),[{id:g(),top:window.event.clientY,left:window.event.clientX,width:200,height:100,text:""}]))}),[o]),m=function(e){var t=o.filter((function(t){return t.id!==e.target.dataset.id}));s(t)},h=function(e,t,n){var a=o.find((function(t){return t.id===e})),r=o.filter((function(t){return t.id!==e}));s([].concat(Object(i.a)(r),[{id:g(),top:parseInt(t,10),left:parseInt(n,10),width:a.width,height:a.height,text:a.text}]))},b=function(e,t,n){var a=o.find((function(t){return t.id===e})),r=o.filter((function(t){return t.id!==e}));s([].concat(Object(i.a)(r),[{id:g(),top:a.top,left:a.left,width:parseInt(t,10),height:parseInt(n,10),text:a.text}]))},C=function(e,t){var n=o.find((function(t){return t.id===e})),a=o.filter((function(t){return t.id!==e}));s([].concat(Object(i.a)(a),[{id:n.id,top:n.top,left:n.left,width:n.width,height:n.height,text:t}]))},L=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(!1);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f.current){e.next=4;break}return e.abrupt("return",f.current=!0);case 4:p.current?p.current=!1:k(t);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(u.useEffect)((function(){I(JSON.stringify(o))}),[o,v]),Object(u.useEffect)((function(){var e=d.current;return e.addEventListener("contextmenu",v,!0),function(){return e.removeEventListener("contextmenu",v,!0)}}),[v]),Object(u.useEffect)((function(){Object(j.b)("memo",j.a.EXPOSE,"memo"),L(),(console.log(E),E.apps.length||E.initializeApp(O),E.database().ref("/").child("memo")).on("value",(function(e){console.log(222,e);try{p.current=!0,s(JSON.parse(e.node_.value_))}catch(t){k([])}}))}),[]),l.a.createElement("div",{className:"wrap","data-wrap":!0,ref:d,style:{width:"100vw",height:"100vh"}},!!t&&l.a.createElement(x,null,l.a.createElement(w,null)),!t&&o&&o.map((function(e){var t=e.id,n=e.top,a=e.left,r=e.width,i=e.height,o=e.text;return l.a.createElement(y,{key:t,id:t,top:n,left:a,width:r,height:i,text:o,onClickDelete:m,onClickMove:h,onClickResize:b,onChangeText:C})})))}},xr0Z:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-memo-tsx-7d6cc57eb15d338f179c.js.map