(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{QeBL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return v}));var r=n("7tbW"),o=n.n(r),c=n("q1tI"),a=n.n(c),i=n("WFmE"),u=n("O09R"),s=n("9NZr"),l=n("3KeE"),f=n("jxKE"),d=n("8yLC"),w=n("I0BZ"),b=n("XqSy"),E=n("HUVf"),m=n("ewXD"),g=n("hXx/"),O=n("AXCQ");t.default=function(e){var t=e.data,n=e.location,r=g.b(1),v=g.a(f.a.ALL),y=Object(c.useState)(r),p=y[0],j=y[1],k=Object(c.useRef)(p),h=Object(c.useState)(v),L=h[0],C=h[1],I=t.site.siteMetadata,S=I.configs.countOfInitialPost,X=t.allMarkdownRemark.edges,q=o()(X.map((function(e){return e.node.frontmatter.category})));Object(c.useEffect)((function(){return Object(E.c)("index",E.b.EXPOSE),window.addEventListener("scroll",x,{passive:!1}),O.c(),m.b(),function(){window.removeEventListener("scroll",x),O.b(),m.a()}}),[]),Object(c.useEffect)((function(){k.current=p,O.d(),g.d(p),g.c(L)})),Object(c.useEffect)((function(){document.querySelector("li[aria-selected=true]").scrollIntoView({behavior:"smooth",inline:"center",block:"end"})}),[L]);var x=function(){var e=window.scrollY+window.innerHeight,t=function(){return function(e){return w.c()-e}(e)<80};return b.a((function(){return j((function(e){return e+1}))}),{dismissCondition:function(){return!t()},triggerCondition:function(){return t()&&X.length>k.current*S}})()};return a.a.createElement(d.a,{location:n},a.a.createElement(l.a,{title:f.b,keywords:I.keywords}),a.a.createElement(i.a,null),a.a.createElement(u.a,{categories:q,category:L,selectCategory:function(e){C(e)}}),a.a.createElement(s.a,{posts:X,countOfInitialPost:S,count:p,category:L}))};var v="2140477617"}}]);
//# sourceMappingURL=component---src-pages-index-tsx-032581b04490a0cad3c3.js.map