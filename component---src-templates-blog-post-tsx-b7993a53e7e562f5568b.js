/*! For license information please see component---src-templates-blog-post-tsx-b7993a53e7e562f5568b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{"1jzt":function(t,e,n){(function(n){var r,o;o=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(r=function(){return function(t){"use strict";var e={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},n=function(){var t={};return Array.prototype.forEach.call(arguments,(function(e){for(var n in e){if(!e.hasOwnProperty(n))return;t[n]=e[n]}})),t},r=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),r=n.length,o=-1,a="",i=n.charCodeAt(0);++o<r;){if(0===(e=n.charCodeAt(o)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");a+=1<=e&&e<=31||127==e||0===o&&48<=e&&e<=57||1===o&&48<=e&&e<=57&&45===i?"\\"+e.toString(16)+" ":128<=e||45===e||95===e||48<=e&&e<=57||65<=e&&e<=90||97<=e&&e<=122?n.charAt(o):"\\"+n.charAt(o)}return"#"+a},o=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},a=function(e,n,r){0===e&&document.body.focus(),r||(e.focus(),document.activeElement!==e&&(e.setAttribute("tabindex","-1"),e.focus(),e.style.outline="none"),t.scrollTo(0,n))},i=function(e,n,r,o){if(n.emitEvents&&"function"==typeof t.CustomEvent){var a=new CustomEvent(e,{bubbles:!0,detail:{anchor:r,toggle:o}});document.dispatchEvent(a)}};return function(s,c){var u,l,f,d,m={cancelScroll:function(t){cancelAnimationFrame(d),d=null,t||i("scrollCancel",u)},animateScroll:function(r,s,c){m.cancelScroll();var l=n(u||e,c||{}),p="[object Number]"===Object.prototype.toString.call(r),h=p||!r.tagName?null:r;if(p||h){var y=t.pageYOffset;l.header&&!f&&(f=document.querySelector(l.header));var v,g,b,E,w,S,O,C,j=function(e){return e?(n=e,parseInt(t.getComputedStyle(n).height,10)+e.offsetTop):0;var n}(f),x=p?r:function(e,n,r,a){var i=0;if(e.offsetParent)for(;i+=e.offsetTop,e=e.offsetParent;);return i=Math.max(i-n-r,0),a&&(i=Math.min(i,o()-t.innerHeight)),i}(h,j,parseInt("function"==typeof l.offset?l.offset(r,s):l.offset,10),l.clip),N=x-y,I=o(),_=0,T=(v=N,b=(g=l).speedAsDuration?g.speed:Math.abs(v/1e3*g.speed),g.durationMax&&b>g.durationMax?g.durationMax:g.durationMin&&b<g.durationMin?g.durationMin:parseInt(b,10));0===t.pageYOffset&&t.scrollTo(0,0),O=r,C=l,p||history.pushState&&C.updateURL&&history.pushState({smoothScroll:JSON.stringify(C),anchor:O.id},document.title,O===document.documentElement?"#top":"#"+O.id),"matchMedia"in t&&t.matchMedia("(prefers-reduced-motion)").matches?a(r,Math.floor(x),!1):(i("scrollStart",l,r,s),m.cancelScroll(!0),t.requestAnimationFrame((function e(n){var o,c,u;E||(E=n),_+=n-E,S=y+N*(c=w=1<(w=0===T?0:_/T)?1:w,"easeInQuad"===(o=l).easing&&(u=c*c),"easeOutQuad"===o.easing&&(u=c*(2-c)),"easeInOutQuad"===o.easing&&(u=c<.5?2*c*c:(4-2*c)*c-1),"easeInCubic"===o.easing&&(u=c*c*c),"easeOutCubic"===o.easing&&(u=--c*c*c+1),"easeInOutCubic"===o.easing&&(u=c<.5?4*c*c*c:(c-1)*(2*c-2)*(2*c-2)+1),"easeInQuart"===o.easing&&(u=c*c*c*c),"easeOutQuart"===o.easing&&(u=1- --c*c*c*c),"easeInOutQuart"===o.easing&&(u=c<.5?8*c*c*c*c:1-8*--c*c*c*c),"easeInQuint"===o.easing&&(u=c*c*c*c*c),"easeOutQuint"===o.easing&&(u=1+--c*c*c*c*c),"easeInOutQuint"===o.easing&&(u=c<.5?16*c*c*c*c*c:1+16*--c*c*c*c*c),o.customEasing&&(u=o.customEasing(c)),u||c),t.scrollTo(0,Math.floor(S)),function(e,n){var o=t.pageYOffset;if(e==n||o==n||(y<n&&t.innerHeight+o)>=I)return m.cancelScroll(!0),a(r,n,p),i("scrollStop",l,r,s),!(d=E=null)}(S,x)||(d=t.requestAnimationFrame(e),E=n)})))}}},p=function(e){if(!e.defaultPrevented&&!(0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey)&&"closest"in e.target&&(l=e.target.closest(s))&&"a"===l.tagName.toLowerCase()&&!e.target.closest(u.ignore)&&l.hostname===t.location.hostname&&l.pathname===t.location.pathname&&/#/.test(l.href)){var n,o;try{n=r(decodeURIComponent(l.hash))}catch(e){n=r(l.hash)}if("#"===n){if(!u.topOnEmptyHash)return;o=document.documentElement}else o=document.querySelector(n);(o=o||"#top"!==n?o:document.documentElement)&&(e.preventDefault(),function(e){if(history.replaceState&&e.updateURL&&!history.state){var n=t.location.hash;n=n||"",history.replaceState({smoothScroll:JSON.stringify(e),anchor:n||t.pageYOffset},document.title,n||t.location.href)}}(u),m.animateScroll(o,l))}},h=function(t){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(u)){var e=history.state.anchor;"string"==typeof e&&e&&!(e=document.querySelector(r(history.state.anchor)))||m.animateScroll(e,null,{updateURL:!1})}};return m.destroy=function(){u&&(document.removeEventListener("click",p,!1),t.removeEventListener("popstate",h,!1),m.cancelScroll(),d=f=l=u=null)},function(){if(!("querySelector"in document&&"addEventListener"in t&&"requestAnimationFrame"in t&&"closest"in t.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";m.destroy(),u=n(e,c||{}),f=u.header?document.querySelector(u.header):null,document.addEventListener("click",p,!1),u.updateURL&&u.popstate&&t.addEventListener("popstate",h,!1)}(),m}}(o)}.apply(e,[]))||(t.exports=r)}).call(this,n("yLpj"))},DMNx:function(t,e,n){},RPjP:function(t,e,n){"use strict";t.exports=n("SLms")},SLms:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),a=s(n("q1tI")),i=s(n("17x9"));function s(t){return t&&t.__esModule?t:{default:t}}function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function u(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}var l=["shortname","identifier","title","url","category_id","onNewComment","language"],f=!1;function d(t,e){var n=e.onNewComment,r=e.language,o=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["onNewComment","language"]);for(var a in o)t.page[a]=o[a];t.language=r,n&&(t.callbacks={onNewComment:[n]})}var m=function(t){function e(){return c(this,e),u(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),o(e,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(t,e){return t.identifier!==this.props.identifier}},{key:"render",value:function(){var t=this,e=Object.keys(this.props).reduce((function(e,n){return l.some((function(t){return t===n}))?e:r({},e,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,t.props[n]))}),{});return a.default.createElement("div",e,a.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!f){var t=this.disqus=document.createElement("script"),e=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];t.async=!0,t.type="text/javascript",t.src="//"+this.props.shortname+".disqus.com/embed.js",e.appendChild(t),f=!0}}},{key:"loadDisqus",value:function(){var t=this,e={};l.forEach((function(n){"shortname"!==n&&t.props[n]&&(e[n]=t.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){d(this,e),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){d(this,e)},this.addDisqusScript())}}]),e}(a.default.Component);m.displayName="DisqusThread",m.propTypes={id:i.default.string,shortname:i.default.string.isRequired,identifier:i.default.string,title:i.default.string,url:i.default.string,category_id:i.default.string,onNewComment:i.default.func,language:i.default.string},m.defaultProps={url:"undefined"==typeof window?null:window.location.href},e.default=m},TsVF:function(t,e,n){},cZrw:function(t,e,n){"use strict";n.r(e);var r=n("q1tI"),o=n.n(r),a=n("WFmE");function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var s=n("dI71"),c=n("RPjP"),u=n.n(c),l=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind(i(n)),n.onSnackbarDismiss=n.onSnackbarDismiss.bind(i(n)),n}Object(s.a)(e,t);var n=e.prototype;return n.onSnackbarDismiss=function(){var t=this.state.toasts.slice(1);this.setState({toasts:t})},n.notifyAboutComment=function(){var t=this.state.toasts.slice();t.push({text:"New comment available!!"}),this.setState({toasts:t})},n.render=function(){var t=this.props,e=t.post,n=t.shortName,r=t.siteUrl+t.slug;return o.a.createElement(u.a,{shortname:n,identifier:e.frontmatter.title,title:e.frontmatter.title,url:r,category_id:e.frontmatter.category_id,onNewComment:this.notifyAboutComment})},e}(r.Component),f=(n("TsVF"),function(){return o.a.createElement("hr",{className:"custom-hr"})}),d=n("3KeE"),m=n("vOnD"),p=m.c.div.withConfig({displayName:"post-container__StyledDiv",componentId:"wcqbpn-0"})(["hr{display:none;}"]),h=function(t){var e=t.html;return o.a.createElement(p,{className:"post-content",dangerouslySetInnerHTML:{__html:e}})},y=n("Wbzz"),v=(n("n1n/"),function(t){var e=t.pageContext,n=e.previous,r=e.next;return o.a.createElement("ul",{className:"navigator"},o.a.createElement("li",null,n&&o.a.createElement(y.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),o.a.createElement("li",null,r&&o.a.createElement(y.Link,{to:r.fields.slug,rel:"next"},r.frontmatter.title," →")))}),g=function(t){var e=t.title;return o.a.createElement("h1",null,e)},b=(n("DMNx"),function(t){t.title,t.author;Object(r.useEffect)((function(){setTimeout((function(){if(window.addthis)window.addthis.layers.refresh();else{var t=document.createElement("script");t.setAttribute("src","https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60bcf43de82361a8"),document.body&&document.body.appendChild(t)}}))}),[]);return o.a.createElement("div",{className:"social-share",style:{marginTop:32}},o.a.createElement("div",{className:"addthis_inline_share_toolbox_7fpx"}))}),E=(n("jmfv"),function(t){var e=t.sponsorId;return o.a.createElement("div",{className:"sponsor-button"},o.a.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/"+e},o.a.createElement("img",{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}),o.a.createElement("span",null,"Buy me a coffee")))}),w=function(t){var e=t.repo,n=o.a.createRef();return Object(r.useEffect)((function(){var t=document.createElement("script"),r={src:"https://utteranc.es/client.js",repo:e,branch:"master",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),n.current.appendChild(t)}),[]),o.a.createElement("div",{className:"utterences",ref:n})},S=n("8yLC"),O=(n("uhgt"),n("HUVf")),C=n("ewXD"),j=n("PxZ2"),x=function(){function t(t,e,n){var r=this;this.targets=Array.from(t.querySelectorAll("a")),this.refs=e,this.sensitivity=n||-10,window.addEventListener("scroll",(function(){return r.onScroll()}))}var e=t.prototype;return e.onScroll=function(){var t=this;this.isOnTopOfDoc(this.refs[0])||this.deactiveateTarget(),this.refs.forEach((function(e){if(t.isOnTopOfDoc(e)){t.deactiveateTarget();var n=t.findTarget(e.id);n&&t.activate(n)}}))},e.isOnTopOfDoc=function(t){return document.documentElement.scrollTop-t.offsetTop>=this.sensitivity},e.deactiveateTarget=function(){var t=this;this.targets.forEach((function(e){return t.deactivate(e)}))},e.findTarget=function(t){return this.targets.filter((function(e){return decodeURIComponent(e.attributes.href.value).split("#")[1]===decodeURIComponent(t)}))[0]},e.activate=function(t){t.classList.add("active")},e.deactivate=function(t){t.classList.remove("active")},t}(),N=n("jxKE"),I=m.c.aside.withConfig({displayName:"post-toc__StyledToc",componentId:"sc-1fk213p-0"})(["order:1;width:240px;position:fixed;max-height:90vh;overflow-y:scroll;top:68px;right:32px;@media (max-width:1200px){display:none;}.post-toc{z-index:10;ul{padding-left:16px;list-style:none;margin:0;li{margin-bottom:4px;p{margin:0;}a{text-decoration:none;color:",";font-size:14px;&:hover,&:focus{color:",";}&.active{color:",";}}}}}"],(function(t){return t.theme===N.e.LIGHT?"#fff":"#3d3d3f"}),(function(t){return t.theme===N.e.LIGHT?"#212329":"#F8F9FA"}),(function(t){return t.theme===N.e.LIGHT?"#212329":"#F8F9FA"})),_=function(t){var e=t.tableOfContents;Object(r.useEffect)((function(){var t=document.querySelector(".post-content"),e=Array.from(t.querySelectorAll("h1,h2,h3,h4,h5,h6")).filter((function(t){return t.id})),n=document.querySelector(".post-toc");new x(n,e)}),[]);var n=Object(j.c)();return o.a.createElement(I,{theme:n.theme},o.a.createElement("div",{className:"post-toc",dangerouslySetInnerHTML:{__html:e}}))};e.default=function(t){var e=t.data,n=t.pageContext,i=t.location;Object(r.useEffect)((function(){return Object(O.b)("blog-post",O.a.EXPOSE,s.frontmatter.title),C.b(),function(){return C.a()}}),[]);var s=e.markdownRemark,c=s.tableOfContents,u=e.site.siteMetadata,m=(u.title,u.comment),p=u.siteUrl,y=u.author,j=u.sponsor,x=m.disqusShortName,N=m.utterances;return Object(r.useEffect)((function(){document.createElement("ins");var t=document.createElement("script");t.async=!0,t.type="text/javascript",t.src="https://t1.daumcdn.net/kas/static/ba.min.js",document.body&&document.body.appendChild(t)}),[]),o.a.createElement(S.a,{location:i},o.a.createElement(d.a,{title:s.frontmatter.title,description:s.excerpt}),o.a.createElement(g,{title:s.frontmatter.title}),o.a.createElement(_,{tableOfContents:c}),o.a.createElement(h,{html:s.html}),o.a.createElement(b,{title:s.frontmatter.title,author:y}),!!j.buyMeACoffeeId&&o.a.createElement(E,{sponsorId:j.buyMeACoffeeId}),o.a.createElement("ins",{className:"kakao_ad_area",style:{display:"none"},"data-ad-unit":"DAN-tzy6JQMnGdkMHytZ","data-ad-width":"320","data-ad-height":"50"}),o.a.createElement("script",{type:"text/javascript",src:"//t1.daumcdn.net/kas/static/ba.min.js",async:!0}),o.a.createElement(f,null),o.a.createElement(a.a,null),o.a.createElement(v,{pageContext:n}),!!x&&o.a.createElement(l,{post:s,shortName:x,siteUrl:p,slug:n.slug}),!!N&&o.a.createElement(w,{repo:N}))}},ewXD:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return s}));var r,o=n("1jzt"),a=n.n(o);function i(){return r=new a.a('a[href*="#"]',{speed:500,speedAsDuration:!0})}function s(){if(!r)throw Error("Not founded SmoothScroll instance");return r.destroy(),r=null}},jmfv:function(t,e,n){},"n1n/":function(t,e,n){},uhgt:function(t,e,n){}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-b7993a53e7e562f5568b.js.map