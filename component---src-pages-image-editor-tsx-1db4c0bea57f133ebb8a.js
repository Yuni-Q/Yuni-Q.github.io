"use strict";(self.webpackChunkyuni_q_blog=self.webpackChunkyuni_q_blog||[]).push([[9612],{3608:function(t,e,n){n.r(e);var i=n(4506),h=n(6540);const l="/favicon.png",o=180,u=360,c="blur(10px)",r={x:0,y:0,width:0,height:0},a={x:0,y:0,width:0,height:0};e.default=()=>{const t=(0,h.useRef)(null),e=(0,h.useRef)(null),n=(0,h.useRef)(null),{0:d,1:s}=(0,h.useState)(!1),{0:g,1:f}=(0,h.useState)(0),{0:w,1:x}=(0,h.useState)(!1),{0:y,1:v}=(0,h.useState)(r),{0:m,1:b}=(0,h.useState)([]);function E(){const n=e.current;if(null===n)return;const i=n.getContext("2d"),h=C(l);h.onload=function(){const{x:t,y:e,width:l,height:u}=R(h,g),r=k({width:l,height:u},g);p(n,r),null==i||i.rotate(Math.PI/o*g),null==i||i.drawImage(h,t,e,l,u),m.forEach((t=>{let{...e}=t;const n=Math.abs(g)%360;90===n?(a.x=e.maxHeight-e.y-e.height,a.y=e.x,a.width=e.height,a.height=e.width):180===n?(a.x=e.maxWidth-e.x-e.width,a.y=e.maxHeight-e.y-e.height,a.width=e.width,a.height=e.height):270===n?(a.x=e.y,a.y=e.maxWidth-e.x-e.width,a.width=e.height,a.height=e.width):(a.x=e.x,a.y=e.y,a.width=e.width,a.height=e.height);const h=null==c?void 0:c.getImageData(a.x,a.y,a.width,a.height);null==i||i.putImageData(h,a.x,a.y)})),null==i||i.restore()};const u=t.current,c=null==u?void 0:u.getContext("2d")}function M(){if(!w)return;const e=t.current,n=null==e?void 0:e.getContext("2d");if(0!==y.width&&0!==y.height){const{x:t,y:h,width:l,height:o}=y;90===g&&(console.log("??",y),a.x=h,a.y=(null==n?void 0:n.canvas.height)-t-l,a.width=o,a.height=l),180===g&&(a.x=(null==n?void 0:n.canvas.width)-t-l,a.y=(null==n?void 0:n.canvas.height)-h-o,a.width=l,a.height=o),270===g&&(a.x=(null==n?void 0:n.canvas.width)-h-o,a.y=t,a.width=o,a.height=l),0===g&&(a.x=t,a.y=h,a.width=l,a.height=o),b((t=>[].concat((0,i.A)(t),[{x:a.x,y:a.y,width:a.width,height:a.height,maxWidth:null==e?void 0:e.width,maxHeight:null==e?void 0:e.height,rotationAngle:g}])))}v(r)}function C(t){const e=new Image;return e.src=t,e}function p(t,e){let{width:n,height:i}=e;null!==t&&([t.width,t.height]=[n,i])}function k(t,e){let{width:n,height:i}=t;return{width:e%o?i:n,height:e%o?n:i}}function R(t,e){const n=k({width:800,height:600},e),i=t.width>t.height+(n.width-n.height),h=i?n.width:t.width*n.height/t.height,l=i?t.height*n.width/t.width:n.height;return{x:-Math.floor(e/o)*h,y:-Math.floor((e+90)%u/o)*l,width:h,height:l}}return(0,h.useEffect)(E,[y]),(0,h.useEffect)((()=>{!function(){const e=t.current;if(null===e)return;const n=e.getContext("2d"),i=C(l);function h(){const{x:t,y:h,width:l,height:u}=R(i,g),r=k({width:l,height:u},g);p(e,r),null==n||n.rotate(Math.PI/o*g),n&&(n.filter=c),null==n||n.drawImage(i,t,h,l,u),null==n||n.restore()}i.onload=h}(),function(){const t=n.current;if(null===t)return;const e=C(l);function i(){const{width:n,height:i}=R(e,g),h=k({width:n,height:i},g);p(t,h)}e.onload=i}(),E()}),[l,g]),(0,h.useEffect)((function(){const t=n.current,e=null==t?void 0:t.getContext("2d");t&&(null==e||e.clearRect(0,0,t.width,t.height));e&&(e.fillStyle="rgba(255, 255, 255, 0.2)");null==e||e.fillRect(y.x,y.y,y.width,y.height)}),[y]),h.createElement(h.Fragment,null,h.createElement("button",{style:{color:d?"blue":"black"},onClick:function(){d&&f(0),s((t=>!t))}},"회전모드"),d&&h.createElement(h.Fragment,null,h.createElement("button",{onClick:function(){f((t=>(t+90)%u))}},"오른쪽"),h.createElement("button",{onClick:function(){f((t=>(t+u-90)%u))}},"왼쪽")),h.createElement("button",{style:{color:w?"blue":"black"},onClick:function(){w&&b([]),x((t=>!t))}},"블러모드"),h.createElement("button",{onClick:function(){b([]),f(0),x(!1),s(!1)}},"지우기"),h.createElement("br",null),h.createElement(h.Fragment,null,h.createElement("canvas",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},ref:t}),h.createElement("canvas",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},ref:e}),h.createElement("canvas",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},ref:n,onMouseDown:function(t){var e,i;let{buttons:h,clientX:l,clientY:o}=t;if(console.log("handleMouseDown",{isBlurMode:w,buttons:h}),!w)return;if(1!==h)return;const u=null!==(e=null===(i=n.current)||void 0===i?void 0:i.getBoundingClientRect())&&void 0!==e?e:new DOMRect(0,0,0,0);v({...r,x:l-u.x,y:o-u.y})},onMouseMove:function(t){var e,i;let{buttons:h,clientX:l,clientY:o}=t;if(!w)return;if(1!==h)return;const u=null!==(e=null===(i=n.current)||void 0===i?void 0:i.getBoundingClientRect())&&void 0!==e?e:new DOMRect(0,0,0,0);v((t=>({...t,width:l-t.x-u.x,height:o-t.y-u.y})))},onMouseUp:M,onMouseLeave:function(t){let{buttons:e}=t;console.log("handleMouseLeave",{isBlurMode:w,buttons:e}),1===e&&M()}})))}}}]);
//# sourceMappingURL=component---src-pages-image-editor-tsx-1db4c0bea57f133ebb8a.js.map