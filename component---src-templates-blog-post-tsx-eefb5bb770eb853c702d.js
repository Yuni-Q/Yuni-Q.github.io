"use strict";(self.webpackChunkyuni_q_blog=self.webpackChunkyuni_q_blog||[]).push([[7],{8154:function(t,e,n){n.r(e),n.d(e,{default:function(){return T}});var a=n(7294),o=n(2497),s=n(7326),r=n(4578);let c=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={toasts:[]},n.notifyAboutComment=n.notifyAboutComment.bind((0,s.Z)(n)),n.onSnackbarDismiss=n.onSnackbarDismiss.bind((0,s.Z)(n)),n}(0,r.Z)(e,t);var n=e.prototype;return n.onSnackbarDismiss=function(){const[,...t]=this.state.toasts;this.setState({toasts:t})},n.notifyAboutComment=function(){const t=this.state.toasts.slice();t.push({text:"New comment available!!"}),this.setState({toasts:t})},n.render=function(){const{post:t,shortName:e,siteUrl:n,slug:o}=this.props;return a.createElement(a.Fragment,null)},e}(a.Component);const i=()=>a.createElement("hr",{className:"custom-hr"});var l=n(6661),m=n(2788);const d=m.default.div.withConfig({displayName:"post-container__StyledDiv",componentId:"sc-wcqbpn-0"})(["hr{display:none;}"]),u=t=>{let{html:e}=t;return a.createElement(d,{className:"post-content",dangerouslySetInnerHTML:{__html:e}})};var f=n(4854);const h=t=>{let{pageContext:e}=t;const{previous:n,next:o}=e;return a.createElement("ul",{className:"navigator"},a.createElement("li",null,n&&a.createElement(f.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),a.createElement("li",null,o&&a.createElement(f.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →")))},p=t=>{let{title:e}=t;return a.createElement("h1",null,e)},y=t=>{let{title:e,author:n}=t;(0,a.useEffect)((()=>{if(window.addthis)window.addthis.layers.refresh();else{const t=document.createElement("script");t.setAttribute("src","https://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-60bcf43de82361a8"),document.body&&document.body.appendChild(t)}}),[]);return a.createElement("div",{className:"social-share",style:{marginTop:32}},a.createElement("div",{className:"addthis_inline_share_toolbox_7fpx"}))},g=t=>{let{sponsorId:e}=t;return a.createElement("div",{className:"sponsor-button"},a.createElement("a",{className:"bmc-button",target:"_blank",rel:"noopener noreferrer",href:"https://www.buymeacoffee.com/"+e},a.createElement("img",{src:"https://www.buymeacoffee.com/assets/img/BMC-btn-logo.svg",alt:"Buy me a coffee"}),a.createElement("span",null,"Buy me a coffee")))},E=t=>{let{repo:e}=t;const n=a.createRef();return(0,a.useEffect)((()=>{const t=document.createElement("script"),a={src:"https://utteranc.es/client.js",repo:e,branch:"master",async:!0,"issue-term":"pathname",crossorigin:"anonymous"};Object.keys(a).forEach((e=>{t.setAttribute(e,a[e])})),n.current.appendChild(t)}),[]),a.createElement("div",{className:"utterences",ref:n})};var b=n(6780),v=n(7200),w=n(8251),C=n(8225),x=n(3095);let S=function(){function t(t,e,n){this.targets=Array.from(t.querySelectorAll("a")),this.refs=e,this.sensitivity=n||-10,window.addEventListener("scroll",(()=>this.onScroll()))}var e=t.prototype;return e.onScroll=function(){this.isOnTopOfDoc(this.refs[0])||this.deactiveateTarget(),this.refs.forEach((t=>{if(this.isOnTopOfDoc(t)){this.deactiveateTarget();const e=this.findTarget(t.id);e&&this.activate(e)}}))},e.isOnTopOfDoc=function(t){return document.documentElement.scrollTop-t.offsetTop>=this.sensitivity},e.deactiveateTarget=function(){this.targets.forEach((t=>this.deactivate(t)))},e.findTarget=function(t){return this.targets.filter((e=>decodeURIComponent(e.attributes.href.value).split("#")[1]===decodeURIComponent(t)))[0]},e.activate=function(t){t.classList.add("active")},e.deactivate=function(t){t.classList.remove("active")},t}();var _=n(2246);const k=m.default.aside.withConfig({displayName:"post-toc__StyledToc",componentId:"sc-1fk213p-0"})(["order:1;width:240px;position:fixed;max-height:90vh;overflow-y:scroll;top:68px;right:32px;@media (max-width:1200px){display:none;}.post-toc{z-index:10;ul{padding-left:16px;list-style:none;margin:0;li{margin-bottom:4px;p{margin:0;}a{text-decoration:none;color:",";font-size:14px;&:hover,&:focus{color:",";}&.active{color:",";}}}}}"],(t=>{let{theme:e}=t;return e===_.C6.LIGHT?"#fff":"#3d3d3f"}),(t=>{let{theme:e}=t;return e===_.C6.LIGHT?"#212329":"#F8F9FA"}),(t=>{let{theme:e}=t;return e===_.C6.LIGHT?"#212329":"#F8F9FA"}));var N=t=>{let{tableOfContents:e}=t;(0,a.useEffect)((()=>{const t=document.querySelector(".post-content"),e=Array.from(t.querySelectorAll("h1,h2,h3,h4,h5,h6")).filter((t=>t.id)),n=document.querySelector(".post-toc");new S(n,e)}),[]);const n=(0,x.ls)();return a.createElement(k,{theme:n.theme},a.createElement("div",{className:"post-toc",dangerouslySetInnerHTML:{__html:e}}))},T=t=>{let{data:e,pageContext:n,location:s}=t;(0,a.useEffect)((()=>((0,w.ZP)("blog-post",w.fz.EXPOSE,r.frontmatter.title),C.S(),()=>C.o())),[]);const r=e.markdownRemark,{tableOfContents:m}=r,d=e.site.siteMetadata,{title:f,comment:x,siteUrl:S,author:_,sponsor:k}=d,{disqusShortName:T,utterances:A}=x;return(0,a.useEffect)((()=>{if(document.querySelector("#adFit")){const t=document.querySelector("#adFit");document.body&&document.body.removeChild(t)}const t=document.createElement("script");t.id="adFit",t.async=!0,t.type="text/javascript",t.src="https://t1.daumcdn.net/kas/static/ba.min.js",document.body&&document.body.appendChild(t);try{(window.adsbygoogle||[]).push({})}catch(e){console.log("adsbygoogle error",e.message)}})),a.createElement(b.A,{location:s},a.createElement(l.F,{title:r.frontmatter.title,description:r.excerpt}),a.createElement("div",{style:{marginBottom:24}},a.createElement(v.Ins,{className:"adsbygoogle","data-ad-client":"ca-pub-2667251850399676","data-ad-slot":"9586629994","data-ad-format":"auto","data-full-width-responsive":"true"})),a.createElement(p,{title:r.frontmatter.title}),a.createElement(N,{tableOfContents:m}),a.createElement(u,{html:r.html}),a.createElement(y,{title:r.frontmatter.title,author:_}),!!k.buyMeACoffeeId&&a.createElement(g,{sponsorId:k.buyMeACoffeeId}),a.createElement("ins",{className:"kakao_ad_area",style:{display:"none"},"data-ad-unit":"DAN-tzy6JQMnGdkMHytZ","data-ad-width":"320","data-ad-height":"50"}),a.createElement(i,null),a.createElement(o.w,null),a.createElement(h,{pageContext:n}),!!T&&a.createElement(c,{post:r,shortName:T,siteUrl:S,slug:n.slug}),!!A&&a.createElement(E,{repo:A}))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-eefb5bb770eb853c702d.js.map