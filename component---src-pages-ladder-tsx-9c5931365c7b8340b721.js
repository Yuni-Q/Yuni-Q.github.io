(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"/hxN":function(e,t,n){"use strict";n.r(t);var r=n("KQm4"),a=n("o0o1"),o=n.n(a),i=(n("ls82"),n("HaE+")),s=n("vDqi"),c=n.n(s),u=n("q1tI"),l=n.n(u),f=n("vOnD");t.default=function(){var e=Object(u.useState)(0),t=e[0],n=e[1],a=Object(u.useState)([]),s=a[0],f=a[1],p=Object(u.useState)({}),d=p[0],h=p[1],b=Object(u.useState)([]),v=b[0],y=b[1],g=Object(u.useState)({}),x=g[0],w=g[1],E=Object(u.useState)([]),j=E[0],O=E[1],k=Object(u.useRef)(null),S=Object(u.useRef)(null);return Object(u.useEffect)((function(){var e;return t>0&&(e=setInterval((function(){n((function(e){if(e-1==0){var t=S.current;t.volume=.005,t.play()}return e-1}))}),1e3)),function(){return clearInterval(e)}}),[t]),Object(u.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://script.google.com/macros/s/AKfycbwiRDzA_FHVDm7VFkBI6_fXGAehsCaHQ_a8S5E8gFy47bD1dgnYOxeyjw/exec");case 2:null!=(n=e.sent)&&null!==(t=n.data)&&void 0!==t&&t.items&&f(n.data.items);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(u.useEffect)((function(){var e={};s.forEach((function(t){e[t.team]?e[t.team].push(t):e[t.team]=[t]})),h(e);var t={};v.forEach((function(e){t[e.team]?t[e.team].push(e):t[e.team]=[e]})),w(t)}),[s,v]),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("audio",{ref:k,src:"/drum.mp3"}),l.a.createElement("audio",{ref:S,src:"/good.mp3"}),t>0&&l.a.createElement(m,{time:t}),l.a.createElement("div",{style:{margin:16,textAlign:"center"}},l.a.createElement("div",{onClick:function(){y([].concat(Object(r.a)(s),Object(r.a)(v))),f([])}},l.a.createElement("div",{style:{background:"chartreuse",whiteSpace:"nowrap",padding:4}},"모두 선택")),l.a.createElement("div",null,Object.keys(d).map((function(e){if(0!==d[e].length)return l.a.createElement("div",{key:e,onClick:function(){var t=s.filter((function(t){var n=!1;return d[e].map((function(e){e.name===t.name&&(n=!0)})),!n}));f(t);var n=[].concat(Object(r.a)(v),Object(r.a)(d[e]));y(Object(r.a)(n))}},l.a.createElement("div",{style:{background:"aqua"}},e),d[e].map((function(e){return l.a.createElement("div",{onClick:function(t){t.stopPropagation();var n=[].concat(Object(r.a)(v),[e]).filter((function(e,t,n){return t==n.indexOf(e)}));y(Object(r.a)(n)),f(s.filter((function(t){return t.name!==e.name})))},key:e.name},e.name)})))})))),l.a.createElement("div",{style:{margin:16,textAlign:"center"}},l.a.createElement("div",null,l.a.createElement("div",{onClick:function(){y([]),f([].concat(Object(r.a)(s),Object(r.a)(v)))}},l.a.createElement("div",{style:{background:"gray",whiteSpace:"nowrap",padding:4}},"선택받은 사람들")),Object.keys(x).map((function(e){if(0!==x[e].length)return l.a.createElement("div",{key:e,onClick:function(){var t=v.filter((function(t){var n=!1;return x[e].map((function(e){e.name===t.name&&(n=!0)})),!n}));y(t);var n=[].concat(Object(r.a)(s),Object(r.a)(x[e]));f(Object(r.a)(n))}},l.a.createElement("div",{style:{background:"aquamarine"}},e),x[e].map((function(e){return l.a.createElement("div",{onClick:function(t){t.stopPropagation();var n=[].concat(Object(r.a)(s),[e]);f(Object(r.a)(n)),y(v.filter((function(t){return t.name!==e.name})))},key:e.name},e.name)})))})))),l.a.createElement("div",{style:{margin:16,textAlign:"center"}},v.map((function(e){return l.a.createElement("div",{key:e.name},l.a.createElement("input",{type:"text",className:"item"}))})),v.length>0&&l.a.createElement("button",{type:"button",onClick:function(){n(5);var e=k.current;e.volume=.005,e.play();var t=document.querySelectorAll(".item"),a=Object(r.a)(v),o=[];t.forEach((function(e){var t=e.value,n=Math.floor(Math.random()*a.length);t&&o.push({name:a[n].name,value:t}),a=a.filter((function(e,t){return t!==n}))})),O(o)}},"시작!! 하겠습니다 !!")),l.a.createElement("div",{style:{margin:16,textAlign:"center"}},j.map((function(e){return l.a.createElement("div",{key:e.name,style:{whiteSpace:"nowrap"}},e.name," : ",e.value)}))))};var p=f.b.div.withConfig({displayName:"ladder__StyledDiv",componentId:"qia491-0"})(["position:absolute;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;z-index:1000;backdrop-filter:blur(10px);background:fixed;"]),d=f.b.div.withConfig({displayName:"ladder__Div",componentId:"qia491-1"})(["background:transparent;/*! * Load Awesome v1.1.0 (http://github.danielcardoso.net/load-awesome/) * Copyright 2015 Daniel Cardoso <@DanielCardoso> * Licensed under MIT */ .spinner{margin:0 auto;background-color:transparent !important;}.la-ball-pulse,.la-ball-pulse > div{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;}.la-ball-pulse{display:flex;justify-content:center;align-items:center;font-size:0;color:#d7dbe6;}.la-ball-pulse.la-dark{color:#333;}.la-ball-pulse > div{display:inline-block;float:none;background-color:currentColor;border:0 solid currentColor;}.la-ball-pulse{width:54px;height:18px;}.la-ball-pulse > div:nth-child(1){-webkit-animation-delay:-200ms;-moz-animation-delay:-200ms;-o-animation-delay:-200ms;animation-delay:-200ms;}.la-ball-pulse > div:nth-child(2){-webkit-animation-delay:-100ms;-moz-animation-delay:-100ms;-o-animation-delay:-100ms;animation-delay:-100ms;}.la-ball-pulse > div:nth-child(3){-webkit-animation-delay:0ms;-moz-animation-delay:0ms;-o-animation-delay:0ms;animation-delay:0ms;}.la-ball-pulse > div{width:8px;height:8px;margin:4px;border-radius:100%;-webkit-animation:ball-pulse 1s ease infinite;-moz-animation:ball-pulse 1s ease infinite;-o-animation:ball-pulse 1s ease infinite;animation:ball-pulse 1s ease infinite;}.la-ball-pulse.la-sm{width:26px;height:8px;}.la-ball-pulse.la-sm > div{width:4px;height:4px;margin:2px;}.la-ball-pulse.la-2x{width:108px;height:36px;}.la-ball-pulse.la-2x > div{width:20px;height:20px;margin:8px;}.la-ball-pulse.la-3x{width:162px;height:54px;}.la-ball-pulse.la-3x > div{width:30px;height:30px;margin:12px;}@-webkit-keyframes ball-pulse{0%,60%,100%{opacity:1;-webkit-transform:scale(1);transform:scale(1);}30%{opacity:0.1;-webkit-transform:scale(0.01);transform:scale(0.01);}}@-moz-keyframes ball-pulse{0%,60%,100%{opacity:1;-moz-transform:scale(1);transform:scale(1);}30%{opacity:0.1;-moz-transform:scale(0.01);transform:scale(0.01);}}@-o-keyframes ball-pulse{0%,60%,100%{opacity:1;-o-transform:scale(1);transform:scale(1);}30%{opacity:0.1;-o-transform:scale(0.01);transform:scale(0.01);}}@keyframes ball-pulse{0%,60%,100%{opacity:1;-webkit-transform:scale(1);-moz-transform:scale(1);-o-transform:scale(1);transform:scale(1);}30%{opacity:0.1;-webkit-transform:scale(0.01);-moz-transform:scale(0.01);-o-transform:scale(0.01);transform:scale(0.01);}}"]),m=function(e){var t=e.time;return l.a.createElement(p,null,l.a.createElement(d,null,t))}},"2SVd":function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},"5oMp":function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},"9rSQ":function(e,t,n){"use strict";var r=n("xTJ+");function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=a},CgaS:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("MLWZ"),o=n("9rSQ"),i=n("UnBK"),s=n("SntB");function c(e){this.defaults=e,this.interceptors={request:new o,response:new o}}c.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=s(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[i,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},c.prototype.getUri=function(e){return e=s(this.defaults,e),a(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){c.prototype[e]=function(t,n){return this.request(s(n||{},{method:e,url:t,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(e){c.prototype[e]=function(t,n,r){return this.request(s(r||{},{method:e,url:t,data:n}))}})),e.exports=c},DfZB:function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},HSsa:function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},JEQr:function(e,t,n){"use strict";(function(t){var r=n("xTJ+"),a=n("yK9s"),o={"Content-Type":"application/x-www-form-urlencoded"};function i(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var s,c={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(s=n("tQ2B")),s),transformRequest:[function(e,t){return a(t,"Accept"),a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(i(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(i(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};c.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){c.headers[e]=r.merge(o)})),e.exports=c}).call(this,n("8oxB"))},LYNF:function(e,t,n){"use strict";var r=n("OH9c");e.exports=function(e,t,n,a,o){var i=new Error(e);return r(i,t,n,a,o)}},Lmem:function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},MLWZ:function(e,t,n){"use strict";var r=n("xTJ+");function a(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(r.isURLSearchParams(t))o=t.toString();else{var i=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),i.push(a(t)+"="+a(e))})))})),o=i.join("&")}if(o){var s=e.indexOf("#");-1!==s&&(e=e.slice(0,s)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},OH9c:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},OTTw:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},"Rn+g":function(e,t,n){"use strict";var r=n("LYNF");e.exports=function(e,t,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},SntB:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){t=t||{};var n={},a=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function c(e,t){return r.isPlainObject(e)&&r.isPlainObject(t)?r.merge(e,t):r.isPlainObject(t)?r.merge({},t):r.isArray(t)?t.slice():t}function u(a){r.isUndefined(t[a])?r.isUndefined(e[a])||(n[a]=c(void 0,e[a])):n[a]=c(e[a],t[a])}r.forEach(a,(function(e){r.isUndefined(t[e])||(n[e]=c(void 0,t[e]))})),r.forEach(o,u),r.forEach(i,(function(a){r.isUndefined(t[a])?r.isUndefined(e[a])||(n[a]=c(void 0,e[a])):n[a]=c(void 0,t[a])})),r.forEach(s,(function(r){r in t?n[r]=c(e[r],t[r]):r in e&&(n[r]=c(void 0,e[r]))}));var l=a.concat(o).concat(i).concat(s),f=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===l.indexOf(e)}));return r.forEach(f,u),n}},UnBK:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("xAGQ"),o=n("Lmem"),i=n("JEQr");function s(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return s(e),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||i.adapter)(e).then((function(t){return s(e),t.data=a(t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(s(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},XwJu:function(e,t,n){"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},endd:function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},eqyj:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(a)&&s.push("path="+a),r.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},g7np:function(e,t,n){"use strict";var r=n("2SVd"),a=n("5oMp");e.exports=function(e,t){return e&&!r(t)?a(e,t):t}},"jfS+":function(e,t,n){"use strict";var r=n("endd");function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a((function(t){e=t})),cancel:e}},e.exports=a},tQ2B:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("Rn+g"),o=n("eqyj"),i=n("MLWZ"),s=n("g7np"),c=n("w0Vi"),u=n("OTTw"),l=n("LYNF");e.exports=function(e){return new Promise((function(t,n){var f=e.data,p=e.headers;r.isFormData(f)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var m=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";p.Authorization="Basic "+btoa(m+":"+h)}var b=s(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),i(b,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in d?c(d.getAllResponseHeaders()):null,o={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:r,config:e,request:d};a(t,n,o),d=null}},d.onabort=function(){d&&(n(l("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){n(l("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(l(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var v=(e.withCredentials||u(b))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;v&&(p[e.xsrfHeaderName]=v)}if("setRequestHeader"in d&&r.forEach(p,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete p[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(y){if("json"!==e.responseType)throw y}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),n(e),d=null)})),f||(f=null),d.send(f)}))}},vDqi:function(e,t,n){e.exports=n("zuR4")},w0Vi:function(e,t,n){"use strict";var r=n("xTJ+"),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,i={};return e?(r.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=r.trim(e.substr(0,o)).toLowerCase(),n=r.trim(e.substr(o+1)),t){if(i[t]&&a.indexOf(t)>=0)return;i[t]="set-cookie"===t?(i[t]?i[t]:[]).concat([n]):i[t]?i[t]+", "+n:n}})),i):i}},xAGQ:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},"xTJ+":function(e,t,n){"use strict";var r=n("HSsa"),a=Object.prototype.toString;function o(e){return"[object Array]"===a.call(e)}function i(e){return void 0===e}function s(e){return null!==e&&"object"==typeof e}function c(e){if("[object Object]"!==a.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function u(e){return"[object Function]"===a.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),o(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:o,isArrayBuffer:function(e){return"[object ArrayBuffer]"===a.call(e)},isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:s,isPlainObject:c,isUndefined:i,isDate:function(e){return"[object Date]"===a.call(e)},isFile:function(e){return"[object File]"===a.call(e)},isBlob:function(e){return"[object Blob]"===a.call(e)},isFunction:u,isStream:function(e){return s(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:l,merge:function e(){var t={};function n(n,r){c(t[r])&&c(n)?t[r]=e(t[r],n):c(n)?t[r]=e({},n):o(n)?t[r]=n.slice():t[r]=n}for(var r=0,a=arguments.length;r<a;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,(function(t,a){e[a]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},yK9s:function(e,t,n){"use strict";var r=n("xTJ+");e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},zuR4:function(e,t,n){"use strict";var r=n("xTJ+"),a=n("HSsa"),o=n("CgaS"),i=n("SntB");function s(e){var t=new o(e),n=a(o.prototype.request,t);return r.extend(n,o.prototype,t),r.extend(n,t),n}var c=s(n("JEQr"));c.Axios=o,c.create=function(e){return s(i(c.defaults,e))},c.Cancel=n("endd"),c.CancelToken=n("jfS+"),c.isCancel=n("Lmem"),c.all=function(e){return Promise.all(e)},c.spread=n("DfZB"),c.isAxiosError=n("XwJu"),e.exports=c,e.exports.default=c}}]);
//# sourceMappingURL=component---src-pages-ladder-tsx-9c5931365c7b8340b721.js.map