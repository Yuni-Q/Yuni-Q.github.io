(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{pcw8:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),o=a("Wbzz"),l=a("8yLC"),c=a("3KeE"),s=a("jxKE"),i=a("QeBL"),u=a("9NZr"),d=a("AXCQ"),f=function(e){var t=Object(r.useState)({filteredData:[],query:""}),a=t[0],o=t[1];Object(r.useEffect)((function(){d.c()}),[a]);var f=e.data.site.siteMetadata,m=a.query,w=a.filteredData,g=w&&""!==m?w:[];return n.a.createElement(l.a,null,n.a.createElement(c.a,{title:s.b,keywords:f.keywords}),n.a.createElement("input",{className:"form-control form-control-sm ml-3 w-75",type:"text",placeholder:"Search","aria-label":"Search",onChange:function(t){var a=t.target.value,r=(e.data.allMarkdownRemark.edges||[]).filter((function(e){var t=e.node,r=t.html,n=t.frontmatter,o=n.category,l=n.title,c=n.tags;n.draft;return r&&r.toLowerCase().includes(a.toLowerCase())||o&&o.toLowerCase().includes(a.toLowerCase())||l&&l.toLowerCase().includes(a.toLowerCase())||c&&c.join("").toLowerCase().includes(a)}));o({query:a,filteredData:r})}}),n.a.createElement("div",{style:{marginBottom:24}},n.a.createElement(i.Ins,{className:"adsbygoogle","data-ad-client":"ca-pub-2667251850399676","data-ad-slot":"4831328462","data-ad-format":"auto","data-full-width-responsive":"true"})),0===g.length&&n.a.createElement("div",null,"검색 결과가 없습니다."),g.length>0&&n.a.createElement(u.a,{posts:g,countOfInitialPost:g.length,count:g.length,category:s.a.ALL}))};t.default=function(e){return n.a.createElement(o.StaticQuery,{query:"1556710558",render:function(t){return n.a.createElement(f,Object.assign({data:t},e))}})}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-664ad599071fc1f8597d.js.map