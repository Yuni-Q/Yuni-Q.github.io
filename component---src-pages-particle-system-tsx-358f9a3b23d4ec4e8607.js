"use strict";(self.webpackChunkyuni_q_blog=self.webpackChunkyuni_q_blog||[]).push([[335],{7247:function(t,i,h){h.r(i);var s=h(7294);let n=function(){function t(t,i,h){this.x=Math.random()*i,this.y=Math.random()*h,this.vx=30*this.sinRandom(),this.vy=30*this.sinRandom(),this.r=Math.abs(20*this.sinRandom())+5,this.dt=.1,this.color=this.randomColor(),this.ctx=t,this.width=i,this.height=h}var i=t.prototype;return i.sinRandom=function(){return 2*Math.random()-1},i.draw=function(){this.ctx.fillStyle=this.color,this.ctx.beginPath(),this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,!1),this.ctx.closePath(),this.ctx.fill()},i.update=function(){this.x+=this.vx*this.dt,this.y+=this.vy*this.dt,this.bound()},i.bound=function(){this.x<0&&(this.x=0,this.vx*=-1),this.y<0&&(this.y=0,this.vy*=-1),this.x>this.width&&(this.x=this.width,this.vx*=-1),this.y>this.height&&(this.y=this.height,this.vy*=-1)},i.randomColor=function(){return"hsl("+Math.floor(360*Math.random())+", 100%, 50%)"},t}(),e=function(){function t(t,i,h){this.particles=[],this.particles=[],this.pause=!1,this.ctx=t,this.width=i,this.height=h}var i=t.prototype;return i.addParticles=function(t){for(let i=0;i<t;i++){const t=new n(this.ctx,this.width,this.height);this.particles.push(t)}},i.clearParticles=function(){this.particles=[]},i.loop=function(){this.pause||(this.ctx.clearRect(0,0,this.width,this.height),this.particles.forEach((t=>{this.interact(t),t.update(),t.draw()})),this.loopDelegate())},i.loopDelegate=function(){const t=this.loop.bind(this);requestAnimationFrame(t)},i.interact=function(t){this.particles.forEach((i=>{if(t!==i){const h=t.x-i.x,s=t.y-i.y,n=Math.sqrt(h*h+s*s);if(n>0){const e=t.r+i.r;if(n<e){const o=e-n,a=h/n,c=s/n;t.vx+=a*o*.1,t.vy+=c*o*.1,i.vx+=-a*o*.1,i.vy+=-c*o*.1}}}}))},t}();i.default=()=>((0,s.useEffect)((()=>{const t=document.createElement("canvas"),i=t.getContext("2d");document.body.appendChild(t);const h=window.innerWidth,s=window.innerHeight;t.width=h,t.height=s,i.clearRect(0,0,h,s);const n=new e(i,h,s);n.addParticles(100),n.loopDelegate()}),[]),s.createElement(s.Fragment,null))}}]);
//# sourceMappingURL=component---src-pages-particle-system-tsx-358f9a3b23d4ec4e8607.js.map