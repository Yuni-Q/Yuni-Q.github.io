(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{i4a2:function(e,t,n){"use strict";n.r(t);var a=n("KQm4"),c=n("q1tI"),r=n.n(c);t.default=function(){var e=Object(c.useState)([]),t=e[0],n=e[1],u=Object(c.useState)([]),i=u[0],o=u[1],l=Object(c.useState)([]),f=l[0],s=l[1],b=Object(c.useState)(0),m=b[0],v=b[1],j=Object(c.useState)(""),h=j[0],p=j[1],O=i.length>9||m>2,d=Object(c.useCallback)((function(){return 4!==h.length?alert("4자리 숫자를 입력해 주세요"):4!==new Set(h).size?alert("중복되지 않게 입력해 주세요."):!i.includes(h)||alert("이미 시도한 값입니다.")}),[h,i]);return Object(c.useEffect)((function(){for(var e=new Array(9).fill(0).map((function(e,t){return t+1})),t=[],a=0;a<4;a++){var c=Math.floor(Math.random()*e.length);t.push(e[c]),e.splice(c,1)}console.log(t),n(t)}),[]),Object(c.useEffect)((function(){if(O){var e=t.join("");s((function(t){return[].concat(Object(a.a)(t),["패배하였습니다. 정답은 "+e+"입니다."])}))}}),[i,m]),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",height:"100vh"}},r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),!O&&d()){p(""),o((function(e){return[].concat(Object(a.a)(e),[h])}));var n=t.join("");if(h!==n){var c=0,r=0;if(t.forEach((function(e,t){var n=h.indexOf(e.toString());n===t?c+=1:n>-1&&(r+=1)})),!c&&!r)return s((function(e){return[].concat(Object(a.a)(e),[h+" : 아웃"])})),void v((function(e){return e+1}));s((function(e){return[].concat(Object(a.a)(e),[h+" : "+c+"스트라이크, 볼 "+r])}))}else s((function(e){return[].concat(Object(a.a)(e),["홈런"])}))}}},r.a.createElement("input",{type:"text",value:h,minLength:4,maxLength:4,readOnly:O,pattern:"^(?!.*(.).*\\1)\\d{4}$",onChange:function(e){return p(e.target.value)},style:{marginRight:8}}),r.a.createElement("button",{type:"submit"},"확인")),r.a.createElement("div",null,r.a.createElement("div",null,"아웃 카운트 : ",m,f.map((function(e){return r.a.createElement("div",{key:e,style:{textAlign:"center"}},e)})))))}}}]);
//# sourceMappingURL=component---src-pages-number-baseball-tsx-bc9b73e42e33ee45e210.js.map