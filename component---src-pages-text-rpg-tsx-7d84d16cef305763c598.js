"use strict";(self.webpackChunkyuni_q_blog=self.webpackChunkyuni_q_blog||[]).push([[4724],{5440:function(e,t,l){l.r(t);var n=l(6540);const a={name:"",level:1,maxHp:100,hp:100,xp:0,att:10},u=[{name:"슬라임",hp:25,maxHp:25,att:10,xp:10},{name:"스켈레톤",hp:50,maxHp:50,att:15,xp:20},{name:"마왕",hp:150,maxHp:150,att:30,xp:50}];t.default=()=>{const{0:e,1:t}=(0,n.useState)(!1),{0:l,1:m}=(0,n.useState)(""),{0:p,1:c}=(0,n.useState)(null),{0:r,1:o}=(0,n.useState)(null),i=(0,n.useCallback)((()=>{o((e=>({...e,hp:e.hp-p.att}))),c((e=>({...e,hp:e.hp-r.att}))),m(`${p.att}의 데미지를 주고, ${r.att}의 데미지를 받았습니다.`)}),[p,r]),E=(0,n.useCallback)((()=>{c((e=>({...e,hp:Math.min(e.maxHp,e.hp+20)-r.att})))}),[p,r]);return(0,n.useEffect)((()=>p&&p.hp<=0?(m(`${p.level} 레벨에서 전사. 새 주인공을 생성하세요 !`),c(null),o(null),void t(!1)):p&&r&&r.hp<=0?(c((e=>({...e,xp:e.xp+r.xp}))),o(null),void t(!1)):void(p&&p.xp>=15*p.level&&(c((e=>{const t=e.maxHp+5;return{...e,xp:e.xp-15*e.level,level:e.level+1,maxHp:t,hp:t,att:e.att+5}})),m(`레벨업! 레벨 ${p.level+1}`)))),[p,r]),null!=p&&p.name?n.createElement("div",null,n.createElement("div",null,n.createElement("button",null,"이름 : ",p.name),n.createElement("button",null,"레벨 : ",p.level),n.createElement("button",null,"체력 : ",p.hp,"/",p.maxHp),n.createElement("button",null,"공격력 :",p.att),n.createElement("button",null,"경험치 : ",p.xp,"/",15*p.level)),!e&&n.createElement("div",null,n.createElement("div",null,"menu"),n.createElement("button",{onClick:()=>{const e=u[Math.floor(Math.random()*u.length)];o({...e}),t(!0),m(`몬스터와 마주쳤다. ${e.name}인 것 같다!`)}},"1. 모험"),n.createElement("button",{onClick:()=>{c((e=>({...e,hp:e.maxHp})))}},"2. 휴식"),n.createElement("button",{onClick:()=>{m(`${p.level} 레벨에서 종료. 새 주인공을 생성하세요 !`),c(null)}},"3. 종료")),e&&n.createElement("div",null,n.createElement("div",null,"battle"),n.createElement("button",{onClick:()=>{i()}},"1. 공격"),n.createElement("button",{onClick:()=>{E()}},"2. 회복"),n.createElement("button",{onClick:()=>{t(!1),o(null),m(`${r.name}으로부터 도망쳤습니다.`)}},"3. 도망")),n.createElement("div",null,l),r&&n.createElement("div",null,n.createElement("button",null,"이름: ",r.name),n.createElement("button",null,"체력 : ",r.hp,"/",r.maxHp),n.createElement("button",null,"공격 :",r.att))):n.createElement("form",{onSubmit:e=>{if(e.preventDefault(),!e.target[0].value)return alert("이름을 입력해주세요.");c({...a,name:e.target[0].value})}},n.createElement("input",{type:"text",placeholder:"주인공 이름을 입력하세요!"}),n.createElement("button",{type:"submit"},"시작"),n.createElement("div",null,l))}}}]);
//# sourceMappingURL=component---src-pages-text-rpg-tsx-7d84d16cef305763c598.js.map