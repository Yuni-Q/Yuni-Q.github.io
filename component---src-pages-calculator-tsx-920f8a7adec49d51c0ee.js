"use strict";(self.webpackChunkyuni_q_blog=self.webpackChunkyuni_q_blog||[]).push([[777],{2322:function(e,t,n){n.r(t);var l=n(7294);const r=n(2788).default.div.withConfig({displayName:"calculator__StyledCalculator",componentId:"sc-19a80fn-0"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;height:100vh;button{width:50px;height:50px;}"]);t.default=()=>{const{0:e,1:t}=(0,l.useState)(""),{0:n,1:i}=(0,l.useState)(""),{0:c,1:o}=(0,l.useState)(""),a=(0,l.useCallback)((e=>{const n=e.target.innerText;c?i((e=>e+n)):t((e=>e+n))}),[c]),u=l=>{const r=l=>{const r=Number(e),c=Number(n);switch(l){case"+":{const e=(r+c).toString();return t(e),void i("")}case"-":{const e=(r-c).toString();return t(e),void i("")}case"x":{const e=(r*c).toString();return t(e),void i("")}case"/":{const e=(r/c).toString();return t(e),void i("")}default:{const e=(r+c).toString();t(e),i("")}}},a=l.target.innerText;if(!e||"-"===e)return"-"!==a||c?void alert("숫자를 먼저 입력하세요"):void t("-");if("C"===a)return t(""),i(""),void o("");if("="===a){if(!n)return void alert("숫자를 먼저 입력하세요");r(c)}n&&r(a),o(l.target.innerText)};return l.createElement(r,null,l.createElement("div",null,l.createElement("input",{style:{width:50,textAlign:"center"},readOnly:!0,type:"text",value:c}),l.createElement("input",{style:{width:150,textAlign:"right"},readOnly:!0,type:"text",value:n||e})),l.createElement("div",null,[7,8,9].map((e=>l.createElement("button",{key:e,onClick:a},e))),l.createElement("button",{onClick:u},"+")),l.createElement("div",null,[4,5,6].map((e=>l.createElement("button",{key:e,onClick:a},e))),l.createElement("button",{onClick:u},"-")),l.createElement("div",null,[1,2,3].map((e=>l.createElement("button",{key:e,onClick:a},e))),l.createElement("button",{onClick:u},"/")),l.createElement("div",null,l.createElement("button",{onClick:u},"C"),l.createElement("button",{onClick:a},"0"),l.createElement("button",{onClick:u},"="),l.createElement("button",{onClick:u},"x")))}}}]);
//# sourceMappingURL=component---src-pages-calculator-tsx-920f8a7adec49d51c0ee.js.map