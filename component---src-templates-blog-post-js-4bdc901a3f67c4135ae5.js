(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"1jzt":function(e,t,a){(function(r){var n,i;a("hEkN"),a("a1Th"),a("h7Nl"),a("Btvt"),a("8+KV"),i=void 0!==r?r:"undefined"!=typeof window?window:this,void 0===(n=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},a=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var a in t){if(!t.hasOwnProperty(a))return;e[a]=t[a]}})),e},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,a=String(e),r=a.length,n=-1,i="",o=a.charCodeAt(0);++n<r;){if(0===(t=a.charCodeAt(n)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");i+=1<=t&&t<=31||127==t||0===n&&48<=t&&t<=57||1===n&&48<=t&&t<=57&&45===o?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?a.charAt(n):"\\"+a.charAt(n)}return"#"+i},n=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},i=function(t,a,r,n){if(a.emitEvents&&"function"==typeof e.CustomEvent){var i=new CustomEvent(t,{bubbles:!0,detail:{anchor:r,toggle:n}});document.dispatchEvent(i)}};return function(o,s){var c,l,u,d,f={cancelScroll:function(e){cancelAnimationFrame(d),d=null,e||i("scrollCancel",c)},animateScroll:function(r,o,s){f.cancelScroll();var l=a(c||t,s||{}),m="[object Number]"===Object.prototype.toString.call(r),p=m||!r.tagName?null:r;if(m||p){var h=e.pageYOffset;l.header&&!u&&(u=document.querySelector(l.header));var g,b,v,y,w,E,S,O,N=function(t){return t?(a=t,parseInt(e.getComputedStyle(a).height,10)+t.offsetTop):0;var a}(u),k=m?r:function(t,a,r,i){var o=0;if(t.offsetParent)for(;o+=t.offsetTop,t=t.offsetParent;);return o=Math.max(o-a-r,0),i&&(o=Math.min(o,n()-e.innerHeight)),o}(p,N,parseInt("function"==typeof l.offset?l.offset(r,o):l.offset,10),l.clip),A=k-h,C=n(),L=0,I=(g=A,v=(b=l).speedAsDuration?b.speed:Math.abs(g/1e3*b.speed),b.durationMax&&v>b.durationMax?b.durationMax:b.durationMin&&v<b.durationMin?b.durationMin:parseInt(v,10));0===e.pageYOffset&&e.scrollTo(0,0),S=r,O=l,m||history.pushState&&O.updateURL&&history.pushState({smoothScroll:JSON.stringify(O),anchor:S.id},document.title,S===document.documentElement?"#top":"#"+S.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?e.scrollTo(0,Math.floor(k)):(i("scrollStart",l,r,o),f.cancelScroll(!0),e.requestAnimationFrame((function t(a){var n,s,c;y||(y=a),L+=a-y,E=h+A*(s=w=1<(w=0===I?0:L/I)?1:w,"easeInQuad"===(n=l).easing&&(c=s*s),"easeOutQuad"===n.easing&&(c=s*(2-s)),"easeInOutQuad"===n.easing&&(c=s<.5?2*s*s:(4-2*s)*s-1),"easeInCubic"===n.easing&&(c=s*s*s),"easeOutCubic"===n.easing&&(c=--s*s*s+1),"easeInOutCubic"===n.easing&&(c=s<.5?4*s*s*s:(s-1)*(2*s-2)*(2*s-2)+1),"easeInQuart"===n.easing&&(c=s*s*s*s),"easeOutQuart"===n.easing&&(c=1- --s*s*s*s),"easeInOutQuart"===n.easing&&(c=s<.5?8*s*s*s*s:1-8*--s*s*s*s),"easeInQuint"===n.easing&&(c=s*s*s*s*s),"easeOutQuint"===n.easing&&(c=1+--s*s*s*s*s),"easeInOutQuint"===n.easing&&(c=s<.5?16*s*s*s*s*s:1+16*--s*s*s*s*s),n.customEasing&&(c=n.customEasing(s)),c||s),e.scrollTo(0,Math.floor(E)),function(t,a){var n,s,c,u=e.pageYOffset;if(t==a||u==a||(h<a&&e.innerHeight+u)>=C)return f.cancelScroll(!0),s=a,c=m,0===(n=r)&&document.body.focus(),c||(n.focus(),document.activeElement!==n&&(n.setAttribute("tabindex","-1"),n.focus(),n.style.outline="none"),e.scrollTo(0,s)),i("scrollStop",l,r,o),!(d=y=null)}(E,k)||(d=e.requestAnimationFrame(t),y=a)})))}}},m=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(l=t.target.closest(o))&&"a"===l.tagName.toLowerCase()&&!t.target.closest(c.ignore)&&l.hostname===e.location.hostname&&l.pathname===e.location.pathname&&/#/.test(l.href)){var a,n;try{a=r(decodeURIComponent(l.hash))}catch(t){a=r(l.hash)}if(console.log(a),"#"===a){if(!c.topOnEmptyHash)return;n=document.documentElement}else n=document.querySelector(a);(n=n||"#top"!==a?n:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var a=e.location.hash;a=a||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:a||e.pageYOffset},document.title,a||e.location.href)}}(c),f.animateScroll(n,l))}},p=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(c)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(r(history.state.anchor)))||f.animateScroll(t,null,{updateURL:!1})}};return f.destroy=function(){c&&(document.removeEventListener("click",m,!1),e.removeEventListener("popstate",p,!1),f.cancelScroll(),d=u=l=c=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";f.destroy(),c=a(t,s||{}),u=c.header?document.querySelector(c.header):null,document.addEventListener("click",m,!1),c.updateURL&&c.popstate&&e.addEventListener("popstate",p,!1)}(),f}}(i)}.apply(t,[]))||(e.exports=n)}).call(this,a("yLpj"))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),o=r(a("VbXa")),s=r(a("8OQS")),c=r(a("pVnL")),l=r(a("q1tI")),u=r(a("17x9")),d=function(e){var t=(0,c.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},h=Object.create({}),g=function(e){var t=d(e),a=m(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,w=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),l.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function O(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var A=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(w.has(e.target)){var t=w.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),w.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),w.set(e,t)),function(){a.unobserve(e),w.delete(e)}},C=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+l+o+s+a+r+t+i+n+c+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},L=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=l.default.createElement(I,(0,c.default)({src:t},n));return a.length>1?l.default.createElement("picture",null,r(a),i):i},I=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,u=e.onError,d=e.loading,f=e.draggable,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return l.default.createElement("img",(0,c.default)({sizes:a,srcSet:r,src:n},m,{onLoad:o,onError:u,ref:t,loading:d,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));I.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=A(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=m(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,u=e.placeholderStyle,f=void 0===u?{}:u,m=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,w=e.itemProp,S=e.loading,k=e.draggable,A=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,q=(0,c.default)({opacity:A?1:0,transition:x?"opacity "+v+"ms":"none"},s),M="boolean"==typeof b?"lightgray":b,j={transitionDelay:v+"ms"},R=(0,c.default)({opacity:this.state.imgLoaded?0:1},x&&j,{},s,{},f),z={title:t,alt:this.state.isVisible?"":a,style:R,className:m,itemProp:w};if(h){var P=h,T=p(h);return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},l.default.createElement(y,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),M&&l.default.createElement(y,{title:t,style:(0,c.default)({backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&j)}),T.base64&&l.default.createElement(L,{src:T.base64,spreadProps:z,imageVariants:P,generateSources:N}),T.tracedSVG&&l.default.createElement(L,{src:T.tracedSVG,spreadProps:z,imageVariants:P,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,E(P),l.default.createElement(I,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,c.default)({alt:a,title:t,loading:S},T,{imageVariants:P}))}}))}if(g){var V=g,U=p(g),_=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:U.width,height:U.height},i);return"inherit"===i.display&&delete _.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:_,ref:this.handleRef,key:"fixed-"+JSON.stringify(U.srcSet)},M&&l.default.createElement(y,{title:t,style:(0,c.default)({backgroundColor:M,width:U.width,opacity:this.state.imgLoaded?0:1,height:U.height},x&&j)}),U.base64&&l.default.createElement(L,{src:U.base64,spreadProps:z,imageVariants:V,generateSources:N}),U.tracedSVG&&l.default.createElement(L,{src:U.tracedSVG,spreadProps:z,imageVariants:V,generateSources:O}),this.state.isVisible&&l.default.createElement("picture",null,E(V),l.default.createElement(I,{alt:a,title:t,width:U.width,height:U.height,sizes:U.sizes,src:U.src,crossOrigin:this.props.crossOrigin,srcSet:U.srcSet,style:q,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:w,loading:S,draggable:k})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,c.default)({alt:a,title:t,loading:S},U,{imageVariants:V}))}}))}return null},t}(l.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var q=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),M=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});x.propTypes={resolutions:q,sizes:M,fixed:u.default.oneOfType([q,u.default.arrayOf(q)]),fluid:u.default.oneOfType([M,u.default.arrayOf(M)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var j=x;t.default=j},EXIE:function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return c}));var r,n=a("1jzt"),i=a.n(n);function o(){return r=new i.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function s(){if(!r)throw Error("Not founded SmoothScroll instance");return r.destroy(),r=null}function c(e){if(!r)throw Error("Not founded SmoothScroll instance");return r.animateScroll(e),r}},INYr:function(e,t,a){"use strict";var r=a("XKFU"),n=a("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(i)},OGtf:function(e,t,a){var r=a("XKFU"),n=a("eeVq"),i=a("vhPU"),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},RPjP:function(e,t,a){"use strict";e.exports=a("SLms")},SLms:function(e,t,a){"use strict";a("pIFo"),a("8+KV"),a("dZ+Y"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("DNiP"),a("V+eJ"),a("/SS/"),a("hHhE"),a("91GP"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,a,r){return a&&e(t.prototype,a),r&&e(t,r),t}}(),i=s(a("q1tI")),o=s(a("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var u=["shortname","identifier","title","url","category_id","onNewComment","language"],d=!1;function f(e,t){var a=t.onNewComment,r=t.language,n=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(t,["onNewComment","language"]);for(var i in n)e.page[i]=n[i];e.language=r,a&&(e.callbacks={onNewComment:[a]})}var m=function(e){function t(){return c(this,t),l(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,a){return u.some((function(e){return e===a}))?t:r({},t,function(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}({},a,e.props[a]))}),{});return i.default.createElement("div",t,i.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!d){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),d=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};u.forEach((function(a){"shortname"!==a&&e.props[a]&&(t[a]=e.props[a])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){f(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){f(this,t)},this.addDisqusScript())}}]),t}(i.default.Component);m.displayName="DisqusThread",m.propTypes={id:o.default.string,shortname:o.default.string.isRequired,identifier:o.default.string,title:o.default.string,url:o.default.string,category_id:o.default.string,onNewComment:o.default.func,language:o.default.string},m.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=m},hEkN:function(e,t,a){"use strict";a("OGtf")("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},lbRd:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));a("0mN4");var r=a("xz1E"),n=a("q1tI"),i=a.n(n),o=a("Wbzz"),s=a("9eSz"),c=a.n(s),l=(a("9H8W"),function(){return i.a.createElement(o.StaticQuery,{query:u,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social,n=t.introduction;return i.a.createElement("div",{className:"bio"},i.a.createElement("div",{className:"author"},i.a.createElement("div",{className:"author-description"},i.a.createElement(c.a,{className:"author-image",fixed:e.avatar.childImageSharp.fixed,alt:a,style:{borderRadius:"100%"}}),i.a.createElement("div",{className:"author-name"},i.a.createElement("span",{className:"author-name-prefix"},"Written by"),i.a.createElement(o.Link,{to:"/about",className:"author-name-content"},i.a.createElement("span",null,"@",a)),i.a.createElement("div",{className:"author-introduction"},n),i.a.createElement("p",{className:"author-socials"},r.github&&i.a.createElement("a",{href:"https://github.com/"+r.github},"GitHub"),r.medium&&i.a.createElement("a",{href:"https://medium.com/"+r.medium},"Medium"),r.twitter&&i.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"Twitter"),r.facebook&&i.a.createElement("a",{href:"https://www.facebook.com/"+r.facebook},"Facebook"))))))},data:r})}),u="1177532027"},xz1E:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAEz0lEQVQ4ywHEBDv7AHR9g36Pmam4xMPR3s/k8crh7o+Oluvl6+bl6+Lg5eri4riytio1TTtIY0JOa1FfgXeIpu/z+fn5/vb3/AB3hoeBjZWSn66nuMjA1eTM4e6UlJ3j3uHo5+3j4eXp4uPAubowOVA5R2FCTGlQXX1wgaDn6/P6+//29/0AprW7v87axtbiwdHetcbVrL3Ki42W3djd6unw4+Hm5+PjxcC/NDtSOkZiQ0xqUFx8bnyd4uXw/f3/9/j9AK24wr7N2s3f69Xk8MLY6MDc65CVntbP1+3t9eTj5+bj5M3Gxzk+VTtFYURMalJbfHR+neDh6/79//j3/QCcqrOYrrqqwNCtxNSQr8WfwtuJlaLUzdTu7vjl5Onm4uXVzM5AQlg7RGJFTWpRWXp7gZ7k4Of+/v/5+P4Ai5egiJqmkaW3nrLFkqu/m7rRiZepzMbM8PH65+bs5+Tm2tLSSUtfO0NgR09qUVl3eoGe39zk////+ff9AJejrp2stpurtpeotJSns5Cmtn+OnsG8wfP0/Ojo7efl6N/Z2FFTZDlCXkdPa01UcXZ+mtfU3v////j3/QCmtb6wwcqqwMmuxM2fucGlwMyYrLbAu8H4+P/p6e/n5urk399XWWw4QF1KUW1GTGpveJfOzNf////49/0Ap7i/rb3Fobi+pLnBnLK9psDLfJCejI2Y8vL77Ozz6Ofr6OXmW2BxLztXSFFtQUdkZG+Ovb3M////+Pf9AKO4up2ztKO4v5iuuJavu5GjrxwfLjM3Sc3N2PX1++fn6+7r7WFkdSo1UERQaz1BXlplhKyxw//9//j3/ACLmZiIm5qDl5ptgot/lKKcrbuLdnW+oKDm4uzw8vrq6e3v7vFpa3sqNFBBTWg1OlVPXHufpLb//f/59/4AjaGVka2dnLGreot9ipyV0ujzz8nH2bOq5trg7/D57Ovw9vX5aGt7HSlFOkhiLDNNQ1Bwio+i/Pfv9/TyAISekIikk42flHyFd46ZkdjY29fLyN3OyeXe5d/W2d7U1djNzqifpU5TZjRAXCQqRDlGY1hlfbKytMvGxQBvi3aSoJTJx8nDw8XNxcbr3dzj19bs5efj4uzVy83Fube0pqHr087WwbxfX2wZIjwpMk1SXWzl4bj278EAuqiYvKme1cO/4tbV2M3N4dXV6d/f4Nnd4N7m5Nvc2MrHvLKws6Opwqyqa2l1HihEKS9HPEZZ4uG8//zEAJePjsarnsKsn7+pnMq3rdvOzOHY2+bd4Oro7qaqt2t2iT1NZi5EY4WKmGdmcxwqSTU9VyMxUKawuern0ABkcoG7o5bEq6DBqqDCqJzRwLvv5ui9vMdGUmkeLkoZLEgbKUQhNFNYbIiOkp1XYXhbZXuHk6e+z+TBzuQASmJ5g3l5yaudwKmev6ic1cO63tXWMDdMCRg2JDFNGh80ISxDQFp5R2SHrrbC4dvc29fc5ePp5ebt4efxAFJrgElTYbqdj7yilbulmMiypMG5unBxf0JJXgoRJggGExIaLys7VkNcfGx+ltPFws/CwdHGyNjPz9zS0gBteYhIWGqVgHWzloW2nI+4n5Df0Mz88/fTztSYl56YkpNaVl0cJkBAVHM8VHSwpKXgwarVvK/ZxLnbyMO16Qb4kbLKZwAAAABJRU5ErkJggg==","width":72,"height":72,"src":"/static/f6deb50fcc5a91ee8d9c7361637c1c61/c5212/profile.png","srcSet":"/static/f6deb50fcc5a91ee8d9c7361637c1c61/c5212/profile.png 1x,\\n/static/f6deb50fcc5a91ee8d9c7361637c1c61/52093/profile.png 1.5x,\\n/static/f6deb50fcc5a91ee8d9c7361637c1c61/467da/profile.png 2x"}}},"site":{"siteMetadata":{"author":"yuniq","introduction":"yuniq\'s graffiti.","social":{"twitter":"","github":"Yuni-Q","medium":"","facebook":""}}}}}')},yZlL:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=(a("TsVF"),function(){return n.a.createElement("hr",{className:"custom-hr"})}),o=a("hpys"),s=a("CC2r"),c=function(e){var t=e.title;return n.a.createElement("h1",null,t)},l=function(e){var t=e.html;return n.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}})},u=(a("weRM"),function(e){var t=e.onClick;return n.a.createElement("a",{className:"resp-sharing-button__link",href:"#",target:"_blank",rel:"noopener","aria-label":"Share on Facebook",onClick:t},n.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large"},n.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}))),n.a.createElement("span",{className:"service-label"},"Share on Facebook")))}),d=(a("hUWy"),function(e){var t=e.onClick;return n.a.createElement("a",{className:"resp-sharing-button__link",href:"#",rel:"noopener","aria-label":"Share on Twitter",onClick:t},n.a.createElement("div",{className:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--large"},n.a.createElement("div",{"aria-hidden":"true",className:"resp-sharing-button__icon resp-sharing-button__icon--solid"},n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},n.a.createElement("path",{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}))),n.a.createElement("span",{className:"service-label"},"Share on Twitter")))}),f=(a("DMNx"),function(e){var t='Recommend on "'+e.title+'" written by @'+e.author;return n.a.createElement("div",{className:"social-share"},n.a.createElement(u,{onClick:function(e){return e.preventDefault(),function(e,t){window.FB.ui({method:"share",mobile_iframe:!0,href:e,quote:t})}(window.location.href,t)}}),n.a.createElement(d,{onClick:function(e){return e.preventDefault(),function(e,t){window.open("https://twitter.com/share?url="+encodeURI(encodeURI(e))+"&text="+t,"sharer","toolbar=0,status=0,width=626,height=436")}(window.location.href,t)}}))}),m=(a("jmfv"),function(e){var t=e.sponsorId;return n.a.createElement("div",{className:"sponsor-button"},n.a.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/"+t},n.a.createElement("img",{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}),n.a.createElement("span",null,"Buy me a coffee")))}),p=a("lbRd"),h=a("Wbzz"),g=(a("n1n/"),function(e){var t=e.pageContext,a=t.previous,r=t.next;return n.a.createElement("ul",{className:"navigator"},n.a.createElement("li",null,a&&n.a.createElement(h.Link,{to:a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),n.a.createElement("li",null,r&&n.a.createElement(h.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →")))}),b=a("RPjP"),v=a.n(b);function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var w=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(y(a)),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(y(a)),a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=r.prototype;return i.onSnackbarDismiss=function(){var e=this.state.toasts.slice(1);this.setState({toasts:e})},i.notifyAboutComment=function(){var e=this.state.toasts.slice();e.push({text:"New comment available!!"}),this.setState({toasts:e})},i.render=function(){var e=this.props,t=e.post,a=e.shortName,r=e.siteUrl+e.slug;return n.a.createElement(v.a,{shortname:a,identifier:t.frontmatter.title,title:t.frontmatter.title,url:r,category_id:t.frontmatter.category_id,onNewComment:this.notifyAboutComment})},r}(r.Component),E=(a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),function(e){var t=e.repo,a=n.a.createRef();return Object(r.useEffect)((function(){var e=document.createElement("script"),r={src:"https://utteranc.es/client.js",repo:t,branch:"master",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),a.current.appendChild(e)}),[]),n.a.createElement("div",{className:"utterences",ref:a})}),S=a("EXIE");a("uhgt");a.d(t,"pageQuery",(function(){return O}));t.default=function(e){var t=e.data,a=e.pageContext,u=e.location;Object(r.useEffect)((function(){return S.c(),function(){return S.a()}}),[]);var d=t.markdownRemark,h=t.site.siteMetadata,b=h.title,v=h.comment,y=h.siteUrl,O=h.author,N=h.sponsor,k=v.disqusShortName,A=v.utterances;return n.a.createElement(o.a,{location:u,title:b},n.a.createElement(s.a,{title:d.frontmatter.title,description:d.excerpt}),n.a.createElement(c,{title:d.frontmatter.title}),n.a.createElement(l,{html:d.html}),n.a.createElement(f,{title:d.frontmatter.title,author:O}),!!N.buyMeACoffeeId&&n.a.createElement(m,{sponsorId:N.buyMeACoffeeId}),n.a.createElement(i,null),n.a.createElement(p.a,null),n.a.createElement(g,{pageContext:a}),!!k&&n.a.createElement(w,{post:d,shortName:k,siteUrl:y,slug:a.slug}),!!A&&n.a.createElement(E,{repo:A}))};var O="1559320954"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-4bdc901a3f67c4135ae5.js.map