(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"4USb":function(t,e,r){"use strict";r.r(e),r.d(e,"v1",(function(){return v})),r.d(e,"v3",(function(){return j})),r.d(e,"v4",(function(){return k})),r.d(e,"v5",(function(){return N})),r.d(e,"NIL",(function(){return A})),r.d(e,"version",(function(){return R})),r.d(e,"validate",(function(){return c})),r.d(e,"stringify",(function(){return d})),r.d(e,"parse",(function(){return m}));var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),o=new Uint8Array(16);function a(){if(!n)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(o)}var i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var c=function(t){return"string"==typeof t&&i.test(t)},u=[],s=0;s<256;++s)u.push((s+256).toString(16).substr(1));var l,f,d=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(u[t[e+0]]+u[t[e+1]]+u[t[e+2]]+u[t[e+3]]+"-"+u[t[e+4]]+u[t[e+5]]+"-"+u[t[e+6]]+u[t[e+7]]+"-"+u[t[e+8]]+u[t[e+9]]+"-"+u[t[e+10]]+u[t[e+11]]+u[t[e+12]]+u[t[e+13]]+u[t[e+14]]+u[t[e+15]]).toLowerCase();if(!c(r))throw TypeError("Stringified UUID is invalid");return r},h=0,p=0;var v=function(t,e,r){var n=e&&r||0,o=e||new Array(16),i=(t=t||{}).node||l,c=void 0!==t.clockseq?t.clockseq:f;if(null==i||null==c){var u=t.random||(t.rng||a)();null==i&&(i=l=[1|u[0],u[1],u[2],u[3],u[4],u[5]]),null==c&&(c=f=16383&(u[6]<<8|u[7]))}var s=void 0!==t.msecs?t.msecs:Date.now(),v=void 0!==t.nsecs?t.nsecs:p+1,m=s-h+(v-p)/1e4;if(m<0&&void 0===t.clockseq&&(c=c+1&16383),(m<0||s>h)&&void 0===t.nsecs&&(v=0),v>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");h=s,p=v,f=c;var y=(1e4*(268435455&(s+=122192928e5))+v)%4294967296;o[n++]=y>>>24&255,o[n++]=y>>>16&255,o[n++]=y>>>8&255,o[n++]=255&y;var g=s/4294967296*1e4&268435455;o[n++]=g>>>8&255,o[n++]=255&g,o[n++]=g>>>24&15|16,o[n++]=g>>>16&255,o[n++]=c>>>8|128,o[n++]=255&c;for(var w=0;w<6;++w)o[n+w]=i[w];return e||d(o)};var m=function(t){if(!c(t))throw TypeError("Invalid UUID");var e,r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=255&e,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=255&e,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=255&e,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=255&e,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=255&e,r};var y=function(t,e,r){function n(t,n,o,a){if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));for(var e=[],r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}(t)),"string"==typeof n&&(n=m(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var i=new Uint8Array(16+t.length);if(i.set(n),i.set(t,n.length),(i=r(i))[6]=15&i[6]|e,i[8]=63&i[8]|128,o){a=a||0;for(var c=0;c<16;++c)o[a+c]=i[c];return o}return d(i)}try{n.name=t}catch(o){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n};function g(t){return 14+(t+64>>>9<<4)+1}function w(t,e){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}function b(t,e,r,n,o,a){return w((i=w(w(e,t),w(n,a)))<<(c=o)|i>>>32-c,r);var i,c}function E(t,e,r,n,o,a,i){return b(e&r|~e&n,t,e,o,a,i)}function x(t,e,r,n,o,a,i){return b(e&n|r&~n,t,e,o,a,i)}function L(t,e,r,n,o,a,i){return b(e^r^n,t,e,o,a,i)}function O(t,e,r,n,o,a,i){return b(r^(e|~n),t,e,o,a,i)}var j=y("v3",48,(function(t){if("string"==typeof t){var e=unescape(encodeURIComponent(t));t=new Uint8Array(e.length);for(var r=0;r<e.length;++r)t[r]=e.charCodeAt(r)}return function(t){for(var e=[],r=32*t.length,n=0;n<r;n+=8){var o=t[n>>5]>>>n%32&255,a=parseInt("0123456789abcdef".charAt(o>>>4&15)+"0123456789abcdef".charAt(15&o),16);e.push(a)}return e}(function(t,e){t[e>>5]|=128<<e%32,t[g(e)-1]=e;for(var r=1732584193,n=-271733879,o=-1732584194,a=271733878,i=0;i<t.length;i+=16){var c=r,u=n,s=o,l=a;r=E(r,n,o,a,t[i],7,-680876936),a=E(a,r,n,o,t[i+1],12,-389564586),o=E(o,a,r,n,t[i+2],17,606105819),n=E(n,o,a,r,t[i+3],22,-1044525330),r=E(r,n,o,a,t[i+4],7,-176418897),a=E(a,r,n,o,t[i+5],12,1200080426),o=E(o,a,r,n,t[i+6],17,-1473231341),n=E(n,o,a,r,t[i+7],22,-45705983),r=E(r,n,o,a,t[i+8],7,1770035416),a=E(a,r,n,o,t[i+9],12,-1958414417),o=E(o,a,r,n,t[i+10],17,-42063),n=E(n,o,a,r,t[i+11],22,-1990404162),r=E(r,n,o,a,t[i+12],7,1804603682),a=E(a,r,n,o,t[i+13],12,-40341101),o=E(o,a,r,n,t[i+14],17,-1502002290),n=E(n,o,a,r,t[i+15],22,1236535329),r=x(r,n,o,a,t[i+1],5,-165796510),a=x(a,r,n,o,t[i+6],9,-1069501632),o=x(o,a,r,n,t[i+11],14,643717713),n=x(n,o,a,r,t[i],20,-373897302),r=x(r,n,o,a,t[i+5],5,-701558691),a=x(a,r,n,o,t[i+10],9,38016083),o=x(o,a,r,n,t[i+15],14,-660478335),n=x(n,o,a,r,t[i+4],20,-405537848),r=x(r,n,o,a,t[i+9],5,568446438),a=x(a,r,n,o,t[i+14],9,-1019803690),o=x(o,a,r,n,t[i+3],14,-187363961),n=x(n,o,a,r,t[i+8],20,1163531501),r=x(r,n,o,a,t[i+13],5,-1444681467),a=x(a,r,n,o,t[i+2],9,-51403784),o=x(o,a,r,n,t[i+7],14,1735328473),n=x(n,o,a,r,t[i+12],20,-1926607734),r=L(r,n,o,a,t[i+5],4,-378558),a=L(a,r,n,o,t[i+8],11,-2022574463),o=L(o,a,r,n,t[i+11],16,1839030562),n=L(n,o,a,r,t[i+14],23,-35309556),r=L(r,n,o,a,t[i+1],4,-1530992060),a=L(a,r,n,o,t[i+4],11,1272893353),o=L(o,a,r,n,t[i+7],16,-155497632),n=L(n,o,a,r,t[i+10],23,-1094730640),r=L(r,n,o,a,t[i+13],4,681279174),a=L(a,r,n,o,t[i],11,-358537222),o=L(o,a,r,n,t[i+3],16,-722521979),n=L(n,o,a,r,t[i+6],23,76029189),r=L(r,n,o,a,t[i+9],4,-640364487),a=L(a,r,n,o,t[i+12],11,-421815835),o=L(o,a,r,n,t[i+15],16,530742520),n=L(n,o,a,r,t[i+2],23,-995338651),r=O(r,n,o,a,t[i],6,-198630844),a=O(a,r,n,o,t[i+7],10,1126891415),o=O(o,a,r,n,t[i+14],15,-1416354905),n=O(n,o,a,r,t[i+5],21,-57434055),r=O(r,n,o,a,t[i+12],6,1700485571),a=O(a,r,n,o,t[i+3],10,-1894986606),o=O(o,a,r,n,t[i+10],15,-1051523),n=O(n,o,a,r,t[i+1],21,-2054922799),r=O(r,n,o,a,t[i+8],6,1873313359),a=O(a,r,n,o,t[i+15],10,-30611744),o=O(o,a,r,n,t[i+6],15,-1560198380),n=O(n,o,a,r,t[i+13],21,1309151649),r=O(r,n,o,a,t[i+4],6,-145523070),a=O(a,r,n,o,t[i+11],10,-1120210379),o=O(o,a,r,n,t[i+2],15,718787259),n=O(n,o,a,r,t[i+9],21,-343485551),r=w(r,c),n=w(n,u),o=w(o,s),a=w(a,l)}return[r,n,o,a]}(function(t){if(0===t.length)return[];for(var e=8*t.length,r=new Uint32Array(g(e)),n=0;n<e;n+=8)r[n>>5]|=(255&t[n/8])<<n%32;return r}(t),8*t.length))}));var k=function(t,e,r){var n=(t=t||{}).random||(t.rng||a)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){r=r||0;for(var o=0;o<16;++o)e[r+o]=n[o];return e}return d(n)};function I(t,e,r,n){switch(t){case 0:return e&r^~e&n;case 1:return e^r^n;case 2:return e&r^e&n^r&n;case 3:return e^r^n}}function C(t,e){return t<<e|t>>>32-e}var N=y("v5",80,(function(t){var e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){var n=unescape(encodeURIComponent(t));t=[];for(var o=0;o<n.length;++o)t.push(n.charCodeAt(o))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);for(var a=t.length/4+2,i=Math.ceil(a/16),c=new Array(i),u=0;u<i;++u){for(var s=new Uint32Array(16),l=0;l<16;++l)s[l]=t[64*u+4*l]<<24|t[64*u+4*l+1]<<16|t[64*u+4*l+2]<<8|t[64*u+4*l+3];c[u]=s}c[i-1][14]=8*(t.length-1)/Math.pow(2,32),c[i-1][14]=Math.floor(c[i-1][14]),c[i-1][15]=8*(t.length-1)&4294967295;for(var f=0;f<i;++f){for(var d=new Uint32Array(80),h=0;h<16;++h)d[h]=c[f][h];for(var p=16;p<80;++p)d[p]=C(d[p-3]^d[p-8]^d[p-14]^d[p-16],1);for(var v=r[0],m=r[1],y=r[2],g=r[3],w=r[4],b=0;b<80;++b){var E=Math.floor(b/20),x=C(v,5)+I(E,m,y,g)+w+e[E]+d[b]>>>0;w=g,g=y,y=C(m,30)>>>0,m=v,v=x}r[0]=r[0]+v>>>0,r[1]=r[1]+m>>>0,r[2]=r[2]+y>>>0,r[3]=r[3]+g>>>0,r[4]=r[4]+w>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]})),A="00000000-0000-0000-0000-000000000000";var R=function(t){if(!c(t))throw TypeError("Invalid UUID");return parseInt(t.substr(14,1),16)}},"C+5o":function(t,e,r){},kD0k:function(t,e,r){t.exports=r("ls82")},ls82:function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new L(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return j()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var l={};function f(){}function d(){}function h(){}var p={};p[o]=function(){return this};var v=Object.getPrototypeOf,m=v&&v(v(O([])));m&&m!==e&&r.call(m,o)&&(p=m);var y=h.prototype=f.prototype=Object.create(p);function g(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){var n;this._invoke=function(o,a){function i(){return new e((function(n,i){!function n(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,i,c)}),(function(t){n("throw",t,i,c)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return n("throw",t,i,c)}))}c(u.arg)}(o,a,n,i)}))}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:j}}function j(){return{value:void 0,done:!0}}return d.prototype=y.constructor=h,h.constructor=d,d.displayName=c(h,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},g(w.prototype),w.prototype[a]=function(){return this},t.AsyncIterator=w,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new w(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},g(y),c(y,i,"Generator"),y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;x(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},q2Eg:function(t,e,r){"use strict";r.r(e);var n=r("kD0k"),o=r.n(n);r("ls82");function a(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(s){return void r(s)}c.done?e(u):Promise.resolve(u).then(n,o)}function i(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)}))}}var c=r("t8Zj"),u=r("q1tI"),s=r.n(u),l=r("vOnD"),f=(r("xr0Z"),function(t){var e=t.id,r=t.top,n=t.left,o=t.width,a=t.height,i=t.text,c=t.onClickDelete,l=t.onClickMove,f=t.onClickResize,d=t.onChangeText,h=Object(u.useRef)(null),p=Object(u.useRef)(null),v=Object(u.useRef)(null),m=Object(u.useRef)(null),y=Object(u.useRef)(null),g=Object(u.useRef)(null),w=Object(u.useRef)(null),b=Object(u.useRef)(null),E=Object(u.useCallback)((function(t){if(!t.target.dataset.delete)return t.target.dataset.header?(h.current=t.clientX-n,p.current=t.clientY-r,void(y.current=!0)):void 0;c(t)}),[c,n,r]),x=function(t){t.target.dataset.blind&&(g.current=!0)},L=Object(u.useCallback)((function(t){var e=w.current.style;if(y.current){var o=w.current.style;o.top=t.clientY-p.current+"px",o.left=t.clientX-h.current+"px",o.zIndex="1"}if(g.current){var a=b.current.style;a.height=t.clientY-r-30+"px",a.width=t.clientX-n-15+"px",e.zIndex="1"}}),[r,n]),O=Object(u.useCallback)((function(){l(e,w.current.style.top,w.current.style.left),y.current=!1}),[e,l]),j=Object(u.useCallback)((function(){g.current=!1,f(e,b.current.style.width,b.current.style.height)}),[e,f]);return Object(u.useEffect)((function(){var t=v.current,e=m.current;return t.addEventListener("mousedown",E,!0),window.addEventListener("mousemove",L,!0),t.addEventListener("mouseup",O,!0),e.addEventListener("mousedown",x,!0),e.addEventListener("mouseup",j,!0),function(){t.removeEventListener("mousedown",E,!0),window.removeEventListener("mousemove",L,!0),t.removeEventListener("mouseup",O,!0),e.removeEventListener("mousedown",x,!0),e.removeEventListener("mouseup",j,!0)}}),[E,e,L,d,j,O,i]),s.a.createElement("div",{className:"memo",ref:w,style:{top:r+"px",left:n+"px"}},s.a.createElement("div",{className:"header","data-header":!0,"data-id":e,ref:v,onClick:E},s.a.createElement("h1",{className:"blind"},"메모장"),s.a.createElement("button",{className:"btn_close","data-delete":!0,"data-id":e,onClick:c},s.a.createElement("span",{className:"blind"},"닫기"))),s.a.createElement("div",{className:"content"},s.a.createElement("textarea",{className:"textarea",ref:b,style:{width:o+"px",height:a+"px"},placeholder:"메모 하십시오!",value:i,onChange:function(t){d(e,t.target.value,t.target)}}),s.a.createElement("button",{className:"btn_size","data-blind":!0,ref:m},s.a.createElement("span",{className:"blind"},"메모장 크기 조절"))))}),d=(r("C+5o"),function(t){var e=t.className,r=(t.status,t.size),n=void 0===r?28:r;return s.a.createElement("div",{className:"spinner la-ball-pulse "+(e||""),style:{height:n}},s.a.createElement("div",null),s.a.createElement("div",null),s.a.createElement("div",null))}),h=r("HUVf"),p=r("Jgta");p.default.apps.length||p.default.initializeApp({apiKey:"AIzaSyDlYM9tmiCS8cpJNCJDt1ayilldy4ZHcqA",authDomain:"yuni-q.firebaseapp.com",databaseURL:"https://yuni-q.firebaseio.com",projectId:"yuni-q",storageBucket:"yuni-q.appspot.com",messagingSenderId:"158413688649",appId:"1:158413688649:web:a15e7e4e8ff8894f049498",measurementId:"G-J4THPFQ6L1"});var v=p.default,m={apiKey:"AIzaSyDlYM9tmiCS8cpJNCJDt1ayilldy4ZHcqA",authDomain:"yuni-q.firebaseapp.com",databaseURL:"https://yuni-q.firebaseio.com",projectId:"yuni-q",storageBucket:"yuni-q.appspot.com",messagingSenderId:"158413688649",appId:"1:158413688649:web:a15e7e4e8ff8894f049498",measurementId:"G-J4THPFQ6L1"},y=function(t){return v.apps.length||v.initializeApp(m),v.database().ref("/").child("memo").set(t)},g=r("4USb").v4,w=l.b.div.withConfig({displayName:"memo__StyledLoading",componentId:"e5ril5-0"})(["width:100vw;height:100vh;background:gray;display:flex;color:white;align-items:center;"]);e.default=function(){var t=Object(u.useState)(!0),e=t[0],r=t[1],n=Object(u.useState)([]),a=n[0],l=n[1],p=Object(u.useRef)(null),b=Object(u.useRef)(!1),E=Object(u.useRef)(!1),x=Object(u.useCallback)((function(t){t.preventDefault(),t.target.dataset.wrap&&l([].concat(Object(c.a)(a),[{id:g(),top:window.event.clientY,left:window.event.clientX,width:200,height:100,text:""}]))}),[a]),L=function(t){var e=a.filter((function(e){return e.id!==t.target.dataset.id}));l(e)},O=function(t,e,r){var n=a.find((function(e){return e.id===t})),o=a.filter((function(e){return e.id!==t}));l([].concat(Object(c.a)(o),[{id:g(),top:parseInt(e,10),left:parseInt(r,10),width:n.width,height:n.height,text:n.text}]))},j=function(t,e,r){var n=a.find((function(e){return e.id===t})),o=a.filter((function(e){return e.id!==t}));l([].concat(Object(c.a)(o),[{id:g(),top:n.top,left:n.left,width:parseInt(e,10),height:parseInt(r,10),text:n.text}]))},k=function(t,e){var r=a.find((function(e){return e.id===t})),n=a.filter((function(e){return e.id!==t}));l([].concat(Object(c.a)(n),[{id:r.id,top:r.top,left:r.left,width:r.width,height:r.height,text:e}]))},I=function(){var t=i(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r(!1);case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),C=function(){var t=i(o.a.mark((function t(e){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(b.current){t.next=4;break}return t.abrupt("return",b.current=!0);case 4:E.current?E.current=!1:y(e);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(u.useEffect)((function(){C(JSON.stringify(a))}),[a,x]),Object(u.useEffect)((function(){var t=p.current;return t.addEventListener("contextmenu",x,!0),function(){return t.removeEventListener("contextmenu",x,!0)}}),[x]),Object(u.useEffect)((function(){Object(h.b)("memo",h.a.EXPOSE,"memo"),I(),(console.log(v),v.apps.length||v.initializeApp(m),v.database().ref("/").child("memo")).on("value",(function(t){try{E.current=!0,l(JSON.parse(t.node_.value_))}catch(e){y([])}}))}),[]),s.a.createElement("div",{className:"wrap","data-wrap":!0,ref:p,style:{width:"100vw",height:"100vh"}},!!e&&s.a.createElement(w,null,s.a.createElement(d,null)),!e&&a&&a.map((function(t){var e=t.id,r=t.top,n=t.left,o=t.width,a=t.height,i=t.text;return s.a.createElement(f,{key:e,id:e,top:r,left:n,width:o,height:a,text:i,onClickDelete:L,onClickMove:O,onClickResize:j,onChangeText:k})})))}},xr0Z:function(t,e,r){}}]);
//# sourceMappingURL=component---src-pages-memo-tsx-194bc041551a3a7c25f5.js.map