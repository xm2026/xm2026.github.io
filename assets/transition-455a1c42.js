import{am as te,p as y,n as T,e as c,an as G,ao as Ne,ap as xe,aq as Ct,ar as St,as as pt,c as v,F as xt,C as we,m as M,g as B,b as D,X as Re,t as E,V as ie,q as wt,i as ze,j as kt,G as oe,h as le,a5 as _t,d as Ae,H as Vt,at as Oe,B as Pt,a8 as Bt,y as je,au as Lt,x as C,I as ne,f as re,av as Et,aw as It,ax as $t,s as Tt,W as Nt,Z as Rt,u as ue,ay as X,az as zt,aA as ke,K as At,aj as Ot,aB as _e,k as jt,M as Gt,aC as Y,ab as ce,ad as F,aD as Mt,ac as Dt}from"./index-9652806f.js";import{m as I,a as $,u as N,b as Ft}from"./tag-80512e37.js";const Ht=["top","bottom"],Wt=["start","end","left","right"];function Ut(e,s){let[n,t]=e.split(" ");return t||(t=te(Ht,n)?"start":te(Wt,n)?"top":"center"),{side:Ve(n,s),align:Ve(t,s)}}function Ve(e,s){return e==="start"?s?"right":"left":e==="end"?s?"left":"right":e}class Q{constructor(s){let{x:n,y:t,width:a,height:i}=s;this.x=n,this.y=t,this.width=a,this.height=i}get top(){return this.y}get bottom(){return this.y+this.height}get left(){return this.x}get right(){return this.x+this.width}}function Fn(e){const s=e.getBoundingClientRect(),n=getComputedStyle(e),t=n.transform;if(t){let a,i,o,l,r;if(t.startsWith("matrix3d("))a=t.slice(9,-1).split(/, /),i=+a[0],o=+a[5],l=+a[12],r=+a[13];else if(t.startsWith("matrix("))a=t.slice(7,-1).split(/, /),i=+a[0],o=+a[3],l=+a[4],r=+a[5];else return new Q(s);const f=n.transformOrigin,h=s.x-l-(1-i)*parseFloat(f),b=s.y-r-(1-o)*parseFloat(f.slice(f.indexOf(" ")+1)),u=i?s.width/i:e.offsetWidth+1,d=o?s.height/o:e.offsetHeight+1;return new Q({x:h,y:b,width:u,height:d})}else return new Q(s)}function Hn(e,s,n){if(typeof e.animate>"u")return{finished:Promise.resolve()};let t;try{t=e.animate(s,n)}catch{return{finished:Promise.resolve()}}return typeof t.finished>"u"&&(t.finished=new Promise(a=>{t.onfinish=()=>{a(t)}})),t}const Wn="cubic-bezier(0.4, 0, 0.2, 1)";const Ge=y({border:[Boolean,Number,String]},"border");function Me(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{borderClasses:c(()=>{const t=G(e)?e.value:e.border,a=[];if(t===!0||t==="")a.push(`${s}--border`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))a.push(`border-${i}`);return a})}}const qt=[null,"default","comfortable","compact"],De=y({density:{type:String,default:"default",validator:e=>qt.includes(e)}},"density");function Fe(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{densityClasses:c(()=>`${s}--density-${e.density}`)}}const He=y({elevation:{type:[Number,String],validator(e){const s=parseInt(e);return!isNaN(s)&&s>=0&&s<=24}}},"elevation");function We(e){return{elevationClasses:c(()=>{const n=G(e)?e.value:e.elevation,t=[];return n==null||t.push(`elevation-${n}`),t})}}const de=y({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function fe(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{roundedClasses:c(()=>{const t=G(e)?e.value:e.rounded,a=[];if(t===!0||t==="")a.push(`${s}--rounded`);else if(typeof t=="string"||t===0)for(const i of String(t).split(" "))a.push(`rounded-${i}`);return a})}}function ve(e){return Ne(()=>{const s=[],n={};if(e.value.background)if(xe(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&Ct(e.value.background)){const t=St(e.value.background);if(t.a==null||t.a===1){const a=pt(t);n.color=a,n.caretColor=a}}}else s.push(`bg-${e.value.background}`);return e.value.text&&(xe(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):s.push(`text-${e.value.text}`)),{colorClasses:s,colorStyles:n}})}function U(e,s){const n=c(()=>({text:G(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:a}=ve(n);return{textColorClasses:t,textColorStyles:a}}function Pe(e,s){const n=c(()=>({background:G(e)?e.value:s?e[s]:null})),{colorClasses:t,colorStyles:a}=ve(n);return{backgroundColorClasses:t,backgroundColorStyles:a}}const Xt=["elevated","flat","tonal","outlined","text","plain"];function Yt(e,s){return v(xt,null,[e&&v("span",{key:"overlay",class:`${s}__overlay`},null),v("span",{key:"underlay",class:`${s}__underlay`},null)])}const Ue=y({color:String,variant:{type:String,default:"elevated",validator:e=>Xt.includes(e)}},"variant");function Kt(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();const n=c(()=>{const{variant:i}=we(e);return`${s}--variant-${i}`}),{colorClasses:t,colorStyles:a}=ve(c(()=>{const{variant:i,color:o}=we(e);return{[["elevated","flat"].includes(i)?"background":"text"]:o}}));return{colorClasses:t,colorStyles:a,variantClasses:n}}const qe=y({divided:Boolean,...Ge(),...I(),...De(),...He(),...de(),...$(),...M(),...Ue()},"VBtnGroup"),Be=B()({name:"VBtnGroup",props:qe(),setup(e,s){let{slots:n}=s;const{themeClasses:t}=D(e),{densityClasses:a}=Fe(e),{borderClasses:i}=Me(e),{elevationClasses:o}=We(e),{roundedClasses:l}=fe(e);Re({VBtn:{height:"auto",color:E(e,"color"),density:E(e,"density"),flat:!0,variant:E(e,"variant")}}),N(()=>v(e.tag,{class:["v-btn-group",{"v-btn-group--divided":e.divided},t.value,i.value,a.value,o.value,l.value,e.class],style:e.style},n))}}),Jt=y({modelValue:{type:null,default:void 0},multiple:Boolean,mandatory:[Boolean,String],max:Number,selectedClass:String,disabled:Boolean},"group"),Qt=y({value:null,disabled:Boolean,selectedClass:String},"group-item");function Zt(e,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;const t=ie("useGroupItem");if(!t)throw new Error("[Vuetify] useGroupItem composable must be used inside a component setup function");const a=wt();ze(Symbol.for(`${s.description}:id`),a);const i=kt(s,null);if(!i){if(!n)return i;throw new Error(`[Vuetify] Could not find useGroup injection with symbol ${s.description}`)}const o=E(e,"value"),l=c(()=>!!(i.disabled.value||e.disabled));i.register({id:a,value:o,disabled:l},t),oe(()=>{i.unregister(a)});const r=c(()=>i.isSelected(a)),f=c(()=>r.value&&[i.selectedClass.value,e.selectedClass]);return le(r,h=>{t.emit("group:selected",{value:h})}),{id:a,isSelected:r,toggle:()=>i.select(a,!r.value),select:h=>i.select(a,h),selectedClass:f,value:o,disabled:l,group:i}}function en(e,s){let n=!1;const t=_t([]),a=Ae(e,"modelValue",[],u=>u==null?[]:Xe(t,Pt(u)),u=>{const d=nn(t,u);return e.multiple?d:d[0]}),i=ie("useGroup");function o(u,d){const S=u,g=Symbol.for(`${s.description}:id`),x=Bt(g,i==null?void 0:i.vnode).indexOf(d);x>-1?t.splice(x,0,S):t.push(S)}function l(u){if(n)return;r();const d=t.findIndex(S=>S.id===u);t.splice(d,1)}function r(){const u=t.find(d=>!d.disabled);u&&e.mandatory==="force"&&!a.value.length&&(a.value=[u.id])}Vt(()=>{r()}),oe(()=>{n=!0});function f(u,d){const S=t.find(g=>g.id===u);if(!(d&&(S!=null&&S.disabled)))if(e.multiple){const g=a.value.slice(),k=g.findIndex(m=>m===u),x=~k;if(d=d??!x,x&&e.mandatory&&g.length<=1||!x&&e.max!=null&&g.length+1>e.max)return;k<0&&d?g.push(u):k>=0&&!d&&g.splice(k,1),a.value=g}else{const g=a.value.includes(u);if(e.mandatory&&g)return;a.value=d??!g?[u]:[]}}function h(u){if(e.multiple,a.value.length){const d=a.value[0],S=t.findIndex(x=>x.id===d);let g=(S+u)%t.length,k=t[g];for(;k.disabled&&g!==S;)g=(g+u)%t.length,k=t[g];if(k.disabled)return;a.value=[t[g].id]}else{const d=t.find(S=>!S.disabled);d&&(a.value=[d.id])}}const b={register:o,unregister:l,selected:a,select:f,disabled:E(e,"disabled"),prev:()=>h(t.length-1),next:()=>h(1),isSelected:u=>a.value.includes(u),selectedClass:c(()=>e.selectedClass),items:c(()=>t),getItemIndex:u=>tn(t,u)};return ze(s,b),b}function tn(e,s){const n=Xe(e,[s]);return n.length?e.findIndex(t=>t.id===n[0]):-1}function Xe(e,s){const n=[];return s.forEach(t=>{const a=e.find(o=>Oe(t,o.value)),i=e[t];(a==null?void 0:a.value)!=null?n.push(a.id):i!=null&&n.push(i.id)}),n}function nn(e,s){const n=[];return s.forEach(t=>{const a=e.findIndex(i=>i.id===t);if(~a){const i=e[a];n.push(i.value!=null?i.value:a)}}),n}const Ye=Symbol.for("vuetify:v-btn-toggle"),sn=y({...qe(),...Jt()},"VBtnToggle");B()({name:"VBtnToggle",props:sn(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:n}=s;const{isSelected:t,next:a,prev:i,select:o,selected:l}=en(e,Ye);return N(()=>{const r=Be.filterProps(e);return v(Be,je({class:["v-btn-toggle",e.class]},r,{style:e.style}),{default:()=>{var f;return[(f=n.default)==null?void 0:f.call(n,{isSelected:t,next:a,prev:i,select:o,selected:l})]}})}),{next:a,prev:i,select:o}}});const an=y({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Z=B(!1)({name:"VDefaultsProvider",props:an(),setup(e,s){let{slots:n}=s;const{defaults:t,disabled:a,reset:i,root:o,scoped:l}=Lt(e);return Re(t,{reset:i,root:o,scoped:l,disabled:a}),()=>{var r;return(r=n.default)==null?void 0:r.call(n)}}});const on=["x-small","small","default","large","x-large"],me=y({size:{type:[String,Number],default:"default"}},"size");function ge(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return Ne(()=>{let n,t;return te(on,e.size)?n=`${s}--size-${e.size}`:e.size&&(t={width:C(e.size),height:C(e.size)}),{sizeClasses:n,sizeStyles:t}})}const ln=y({color:String,start:Boolean,end:Boolean,icon:ne,...I(),...me(),...$({tag:"i"}),...M()},"VIcon"),ee=B()({name:"VIcon",props:ln(),setup(e,s){let{attrs:n,slots:t}=s;const a=re(),{themeClasses:i}=D(e),{iconData:o}=Et(c(()=>a.value||e.icon)),{sizeClasses:l}=ge(e),{textColorClasses:r,textColorStyles:f}=U(E(e,"color"));return N(()=>{var b,u;const h=(b=t.default)==null?void 0:b.call(t);return h&&(a.value=(u=It(h).filter(d=>d.type===$t&&d.children&&typeof d.children=="string")[0])==null?void 0:u.children),v(o.value.component,{tag:e.tag,icon:o.value.icon,class:["v-icon","notranslate",i.value,l.value,r.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[l.value?void 0:{fontSize:C(e.size),height:C(e.size),width:C(e.size)},f.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[h]})}),{}}});function Ke(e,s){const n=re(),t=Tt(!1);if(Nt){const a=new IntersectionObserver(i=>{e==null||e(i,a),t.value=!!i.find(o=>o.isIntersecting)},s);oe(()=>{a.disconnect()}),le(n,(i,o)=>{o&&(a.unobserve(o),t.value=!1),i&&a.observe(i)},{flush:"post"})}return{intersectionRef:n,isIntersecting:t}}const rn=y({bgColor:String,color:String,indeterminate:[Boolean,String],modelValue:{type:[Number,String],default:0},rotate:{type:[Number,String],default:0},width:{type:[Number,String],default:4},...I(),...me(),...$({tag:"div"}),...M()},"VProgressCircular"),un=B()({name:"VProgressCircular",props:rn(),setup(e,s){let{slots:n}=s;const t=20,a=2*Math.PI*t,i=re(),{themeClasses:o}=D(e),{sizeClasses:l,sizeStyles:r}=ge(e),{textColorClasses:f,textColorStyles:h}=U(E(e,"color")),{textColorClasses:b,textColorStyles:u}=U(E(e,"bgColor")),{intersectionRef:d,isIntersecting:S}=Ke(),{resizeRef:g,contentRect:k}=Ft(),x=c(()=>Math.max(0,Math.min(100,parseFloat(e.modelValue)))),m=c(()=>Number(e.width)),p=c(()=>r.value?Number(e.size):k.value?k.value.width:Math.max(m.value,32)),L=c(()=>t/(1-m.value/p.value)*2),P=c(()=>m.value/p.value*L.value),A=c(()=>C((100-x.value)/100*a));return Rt(()=>{d.value=i.value,g.value=i.value}),N(()=>v(e.tag,{ref:i,class:["v-progress-circular",{"v-progress-circular--indeterminate":!!e.indeterminate,"v-progress-circular--visible":S.value,"v-progress-circular--disable-shrink":e.indeterminate==="disable-shrink"},o.value,l.value,f.value,e.class],style:[r.value,h.value,e.style],role:"progressbar","aria-valuemin":"0","aria-valuemax":"100","aria-valuenow":e.indeterminate?void 0:x.value},{default:()=>[v("svg",{style:{transform:`rotate(calc(-90deg + ${Number(e.rotate)}deg))`},xmlns:"http://www.w3.org/2000/svg",viewBox:`0 0 ${L.value} ${L.value}`},[v("circle",{class:["v-progress-circular__underlay",b.value],style:u.value,fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":P.value,"stroke-dasharray":a,"stroke-dashoffset":0},null),v("circle",{class:"v-progress-circular__overlay",fill:"transparent",cx:"50%",cy:"50%",r:t,"stroke-width":P.value,"stroke-dasharray":a,"stroke-dashoffset":A.value},null)]),n.default&&v("div",{class:"v-progress-circular__content"},[n.default({value:x.value})])]})),{}}}),cn=y({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function dn(e){return{dimensionStyles:c(()=>({height:C(e.height),maxHeight:C(e.maxHeight),maxWidth:C(e.maxWidth),minHeight:C(e.minHeight),minWidth:C(e.minWidth),width:C(e.width)}))}}const Le={center:"center",top:"bottom",bottom:"top",left:"right",right:"left"},Je=y({location:String},"location");function Qe(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2?arguments[2]:void 0;const{isRtl:t}=ue();return{locationStyles:c(()=>{if(!e.location)return{};const{side:i,align:o}=Ut(e.location.split(" ").length>1?e.location:`${e.location} center`,t.value);function l(f){return n?n(f):0}const r={};return i!=="center"&&(s?r[Le[i]]=`calc(100% - ${l(i)}px)`:r[i]=0),o!=="center"?s?r[Le[o]]=`calc(100% - ${l(o)}px)`:r[o]=0:(i==="center"?r.top=r.left="50%":r[{top:"left",bottom:"left",left:"top",right:"top"}[i]]="50%",r.transform={top:"translateX(-50%)",bottom:"translateX(-50%)",left:"translateY(-50%)",right:"translateY(-50%)",center:"translate(-50%, -50%)"}[i]),r})}}const fn=y({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...I(),...Je({location:"top"}),...de(),...$(),...M()},"VProgressLinear"),vn=B()({name:"VProgressLinear",props:fn(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:n}=s;const t=Ae(e,"modelValue"),{isRtl:a,rtlClasses:i}=ue(),{themeClasses:o}=D(e),{locationStyles:l}=Qe(e),{textColorClasses:r,textColorStyles:f}=U(e,"color"),{backgroundColorClasses:h,backgroundColorStyles:b}=Pe(c(()=>e.bgColor||e.color)),{backgroundColorClasses:u,backgroundColorStyles:d}=Pe(e,"color"),{roundedClasses:S}=fe(e),{intersectionRef:g,isIntersecting:k}=Ke(),x=c(()=>parseInt(e.max,10)),m=c(()=>parseInt(e.height,10)),p=c(()=>parseFloat(e.bufferValue)/x.value*100),L=c(()=>parseFloat(t.value)/x.value*100),P=c(()=>a.value!==e.reverse),A=c(()=>e.indeterminate?"fade-transition":"slide-x-transition"),H=c(()=>e.bgOpacity==null?e.bgOpacity:parseFloat(e.bgOpacity));function K(w){if(!g.value)return;const{left:R,right:J,width:z}=g.value.getBoundingClientRect(),W=P.value?z-w.clientX+(J-z):w.clientX-R;t.value=Math.round(W/z*x.value)}return N(()=>v(e.tag,{ref:g,class:["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&k.value,"v-progress-linear--reverse":P.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped},S.value,o.value,i.value,e.class],style:[{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?C(m.value):0,"--v-progress-linear-height":C(m.value),...l.value},e.style],role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:L.value,onClick:e.clickable&&K},{default:()=>[e.stream&&v("div",{key:"stream",class:["v-progress-linear__stream",r.value],style:{...f.value,[P.value?"left":"right"]:C(-m.value),borderTop:`${C(m.value/2)} dotted`,opacity:H.value,top:`calc(50% - ${C(m.value/4)})`,width:C(100-p.value,"%"),"--v-progress-linear-stream-to":C(m.value*(P.value?1:-1))}},null),v("div",{class:["v-progress-linear__background",h.value],style:[b.value,{opacity:H.value,width:C(e.stream?p.value:100,"%")}]},null),v(X,{name:A.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(w=>v("div",{key:w,class:["v-progress-linear__indeterminate",w,u.value],style:d.value},null))]):v("div",{class:["v-progress-linear__determinate",u.value],style:[d.value,{width:C(L.value,"%")}]},null)]}),n.default&&v("div",{class:"v-progress-linear__content"},[n.default({value:L.value,buffer:p.value})])]})),{}}}),mn=y({loading:[Boolean,String]},"loader");function gn(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{loaderClasses:c(()=>({[`${s}--loading`]:e.loading}))}}function Un(e,s){var t;let{slots:n}=s;return v("div",{class:`${e.name}__loader`},[((t=n.default)==null?void 0:t.call(n,{color:e.color,isActive:e.active}))||v(vn,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const hn=["static","relative","fixed","absolute","sticky"],yn=y({position:{type:String,validator:e=>hn.includes(e)}},"position");function bn(e){let s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:T();return{positionClasses:c(()=>e.position?`${s}--${e.position}`:void 0)}}function Cn(){const e=ie("useRoute");return c(()=>{var s;return(s=e==null?void 0:e.proxy)==null?void 0:s.$route})}function Sn(e,s){const n=zt("RouterLink"),t=c(()=>!!(e.href||e.to)),a=c(()=>(t==null?void 0:t.value)||ke(s,"click")||ke(e,"click"));if(typeof n=="string")return{isLink:t,isClickable:a,href:E(e,"href")};const i=e.to?n.useLink(e):void 0,o=Cn();return{isLink:t,isClickable:a,route:i==null?void 0:i.route,navigate:i==null?void 0:i.navigate,isActive:i&&c(()=>{var l,r,f;return e.exact?o.value?((f=i.isExactActive)==null?void 0:f.value)&&Oe(i.route.value.query,o.value.query):(r=i.isExactActive)==null?void 0:r.value:(l=i.isActive)==null?void 0:l.value}),href:c(()=>e.to?i==null?void 0:i.route.value.href:e.href)}}const pn=y({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router");function xn(e,s){le(()=>{var n;return(n=e.isActive)==null?void 0:n.value},n=>{e.isLink.value&&n&&s&&At(()=>{s(!0)})},{immediate:!0})}const se=Symbol("rippleStop"),wn=80;function Ee(e,s){e.style.transform=s,e.style.webkitTransform=s}function ae(e){return e.constructor.name==="TouchEvent"}function Ze(e){return e.constructor.name==="KeyboardEvent"}const kn=function(e,s){var b;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=0,a=0;if(!Ze(e)){const u=s.getBoundingClientRect(),d=ae(e)?e.touches[e.touches.length-1]:e;t=d.clientX-u.left,a=d.clientY-u.top}let i=0,o=.3;(b=s._ripple)!=null&&b.circle?(o=.15,i=s.clientWidth/2,i=n.center?i:i+Math.sqrt((t-i)**2+(a-i)**2)/4):i=Math.sqrt(s.clientWidth**2+s.clientHeight**2)/2;const l=`${(s.clientWidth-i*2)/2}px`,r=`${(s.clientHeight-i*2)/2}px`,f=n.center?l:`${t-i}px`,h=n.center?r:`${a-i}px`;return{radius:i,scale:o,x:f,y:h,centerX:l,centerY:r}},q={show(e,s){var d;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((d=s==null?void 0:s._ripple)!=null&&d.enabled))return;const t=document.createElement("span"),a=document.createElement("span");t.appendChild(a),t.className="v-ripple__container",n.class&&(t.className+=` ${n.class}`);const{radius:i,scale:o,x:l,y:r,centerX:f,centerY:h}=kn(e,s,n),b=`${i*2}px`;a.className="v-ripple__animation",a.style.width=b,a.style.height=b,s.appendChild(t);const u=window.getComputedStyle(s);u&&u.position==="static"&&(s.style.position="relative",s.dataset.previousPosition="static"),a.classList.add("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--visible"),Ee(a,`translate(${l}, ${r}) scale3d(${o},${o},${o})`),a.dataset.activated=String(performance.now()),setTimeout(()=>{a.classList.remove("v-ripple__animation--enter"),a.classList.add("v-ripple__animation--in"),Ee(a,`translate(${f}, ${h}) scale3d(1,1,1)`)},0)},hide(e){var i;if(!((i=e==null?void 0:e._ripple)!=null&&i.enabled))return;const s=e.getElementsByClassName("v-ripple__animation");if(s.length===0)return;const n=s[s.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const t=performance.now()-Number(n.dataset.activated),a=Math.max(250-t,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var l;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((l=n.parentNode)==null?void 0:l.parentNode)===e&&e.removeChild(n.parentNode)},300)},a)}};function et(e){return typeof e>"u"||!!e}function O(e){const s={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[se])){if(e[se]=!0,ae(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(s.center=n._ripple.centered||Ze(e),n._ripple.class&&(s.class=n._ripple.class),ae(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{q.show(e,n,s)},n._ripple.showTimer=window.setTimeout(()=>{var t;(t=n==null?void 0:n._ripple)!=null&&t.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},wn)}else q.show(e,n,s)}}function Ie(e){e[se]=!0}function _(e){const s=e.currentTarget;if(s!=null&&s._ripple){if(window.clearTimeout(s._ripple.showTimer),e.type==="touchend"&&s._ripple.showTimerCommit){s._ripple.showTimerCommit(),s._ripple.showTimerCommit=null,s._ripple.showTimer=window.setTimeout(()=>{_(e)});return}window.setTimeout(()=>{s._ripple&&(s._ripple.touched=!1)}),q.hide(s)}}function tt(e){const s=e.currentTarget;s!=null&&s._ripple&&(s._ripple.showTimerCommit&&(s._ripple.showTimerCommit=null),window.clearTimeout(s._ripple.showTimer))}let j=!1;function nt(e){!j&&(e.keyCode===_e.enter||e.keyCode===_e.space)&&(j=!0,O(e))}function st(e){j=!1,_(e)}function at(e){j&&(j=!1,_(e))}function it(e,s,n){const{value:t,modifiers:a}=s,i=et(t);if(i||q.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=i,e._ripple.centered=a.center,e._ripple.circle=a.circle,Ot(t)&&t.class&&(e._ripple.class=t.class),i&&!n){if(a.stop){e.addEventListener("touchstart",Ie,{passive:!0}),e.addEventListener("mousedown",Ie);return}e.addEventListener("touchstart",O,{passive:!0}),e.addEventListener("touchend",_,{passive:!0}),e.addEventListener("touchmove",tt,{passive:!0}),e.addEventListener("touchcancel",_),e.addEventListener("mousedown",O),e.addEventListener("mouseup",_),e.addEventListener("mouseleave",_),e.addEventListener("keydown",nt),e.addEventListener("keyup",st),e.addEventListener("blur",at),e.addEventListener("dragstart",_,{passive:!0})}else!i&&n&&ot(e)}function ot(e){e.removeEventListener("mousedown",O),e.removeEventListener("touchstart",O),e.removeEventListener("touchend",_),e.removeEventListener("touchmove",tt),e.removeEventListener("touchcancel",_),e.removeEventListener("mouseup",_),e.removeEventListener("mouseleave",_),e.removeEventListener("keydown",nt),e.removeEventListener("keyup",st),e.removeEventListener("dragstart",_),e.removeEventListener("blur",at)}function _n(e,s){it(e,s,!1)}function Vn(e){delete e._ripple,ot(e)}function Pn(e,s){if(s.value===s.oldValue)return;const n=et(s.oldValue);it(e,s,n)}const Bn={mounted:_n,unmounted:Vn,updated:Pn},Ln=y({active:{type:Boolean,default:void 0},symbol:{type:null,default:Ye},flat:Boolean,icon:[Boolean,String,Function,Object],prependIcon:ne,appendIcon:ne,block:Boolean,slim:Boolean,stacked:Boolean,ripple:{type:[Boolean,Object],default:!0},text:String,...Ge(),...I(),...De(),...cn(),...He(),...Qt(),...mn(),...Je(),...yn(),...de(),...pn(),...me(),...$({tag:"button"}),...M(),...Ue({variant:"elevated"})},"VBtn"),qn=B()({name:"VBtn",directives:{Ripple:Bn},props:Ln(),emits:{"group:selected":e=>!0},setup(e,s){let{attrs:n,slots:t}=s;const{themeClasses:a}=D(e),{borderClasses:i}=Me(e),{colorClasses:o,colorStyles:l,variantClasses:r}=Kt(e),{densityClasses:f}=Fe(e),{dimensionStyles:h}=dn(e),{elevationClasses:b}=We(e),{loaderClasses:u}=gn(e),{locationStyles:d}=Qe(e),{positionClasses:S}=bn(e),{roundedClasses:g}=fe(e),{sizeClasses:k,sizeStyles:x}=ge(e),m=Zt(e,e.symbol,!1),p=Sn(e,n),L=c(()=>{var w;return e.active!==void 0?e.active:p.isLink.value?(w=p.isActive)==null?void 0:w.value:m==null?void 0:m.isSelected.value}),P=c(()=>(m==null?void 0:m.disabled.value)||e.disabled),A=c(()=>e.variant==="elevated"&&!(e.disabled||e.flat||e.border)),H=c(()=>{if(!(e.value===void 0||typeof e.value=="symbol"))return Object(e.value)===e.value?JSON.stringify(e.value,null,0):e.value});function K(w){var R;P.value||p.isLink.value&&(w.metaKey||w.ctrlKey||w.shiftKey||w.button!==0||n.target==="_blank")||((R=p.navigate)==null||R.call(p,w),m==null||m.toggle())}return xn(p,m==null?void 0:m.select),N(()=>{var be,Ce;const w=p.isLink.value?"a":e.tag,R=!!(e.prependIcon||t.prepend),J=!!(e.appendIcon||t.append),z=!!(e.icon&&e.icon!==!0),W=(m==null?void 0:m.isSelected.value)&&(!p.isLink.value||((be=p.isActive)==null?void 0:be.value))||!m||((Ce=p.isActive)==null?void 0:Ce.value);return jt(v(w,{type:w==="a"?void 0:"button",class:["v-btn",m==null?void 0:m.selectedClass.value,{"v-btn--active":L.value,"v-btn--block":e.block,"v-btn--disabled":P.value,"v-btn--elevated":A.value,"v-btn--flat":e.flat,"v-btn--icon":!!e.icon,"v-btn--loading":e.loading,"v-btn--slim":e.slim,"v-btn--stacked":e.stacked},a.value,i.value,W?o.value:void 0,f.value,b.value,u.value,S.value,g.value,k.value,r.value,e.class],style:[W?l.value:void 0,h.value,d.value,x.value,e.style],disabled:P.value||void 0,href:p.href.value,onClick:K,value:H.value},{default:()=>{var Se;return[Yt(!0,"v-btn"),!e.icon&&R&&v("span",{key:"prepend",class:"v-btn__prepend"},[t.prepend?v(Z,{key:"prepend-defaults",disabled:!e.prependIcon,defaults:{VIcon:{icon:e.prependIcon}}},t.prepend):v(ee,{key:"prepend-icon",icon:e.prependIcon},null)]),v("span",{class:"v-btn__content","data-no-activator":""},[!t.default&&z?v(ee,{key:"content-icon",icon:e.icon},null):v(Z,{key:"content-defaults",disabled:!z,defaults:{VIcon:{icon:e.icon}}},{default:()=>{var pe;return[((pe=t.default)==null?void 0:pe.call(t))??e.text]}})]),!e.icon&&J&&v("span",{key:"append",class:"v-btn__append"},[t.append?v(Z,{key:"append-defaults",disabled:!e.appendIcon,defaults:{VIcon:{icon:e.appendIcon}}},t.append):v(ee,{key:"append-icon",icon:e.appendIcon},null)]),!!e.loading&&v("span",{key:"loader",class:"v-btn__loader"},[((Se=t.loader)==null?void 0:Se.call(t))??v(un,{color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0,size:"23",width:"2"},null)])]}}),[[Gt("ripple"),!P.value&&e.ripple,null]])}),{}}});const En=y({fluid:{type:Boolean,default:!1},...I(),...$()},"VContainer"),Xn=B()({name:"VContainer",props:En(),setup(e,s){let{slots:n}=s;const{rtlClasses:t}=ue();return N(()=>v(e.tag,{class:["v-container",{"v-container--fluid":e.fluid},t.value,e.class],style:e.style},n)),{}}}),lt=(()=>Y.reduce((e,s)=>(e[s]={type:[Boolean,String,Number],default:!1},e),{}))(),rt=(()=>Y.reduce((e,s)=>{const n="offset"+ce(s);return e[n]={type:[String,Number],default:null},e},{}))(),ut=(()=>Y.reduce((e,s)=>{const n="order"+ce(s);return e[n]={type:[String,Number],default:null},e},{}))(),$e={col:Object.keys(lt),offset:Object.keys(rt),order:Object.keys(ut)};function In(e,s,n){let t=e;if(!(n==null||n===!1)){if(s){const a=s.replace(e,"");t+=`-${a}`}return e==="col"&&(t="v-"+t),e==="col"&&(n===""||n===!0)||(t+=`-${n}`),t.toLowerCase()}}const $n=["auto","start","end","center","baseline","stretch"],Tn=y({cols:{type:[Boolean,String,Number],default:!1},...lt,offset:{type:[String,Number],default:null},...rt,order:{type:[String,Number],default:null},...ut,alignSelf:{type:String,default:null,validator:e=>$n.includes(e)},...I(),...$()},"VCol"),Yn=B()({name:"VCol",props:Tn(),setup(e,s){let{slots:n}=s;const t=c(()=>{const a=[];let i;for(i in $e)$e[i].forEach(l=>{const r=e[l],f=In(i,l,r);f&&a.push(f)});const o=a.some(l=>l.startsWith("v-col-"));return a.push({"v-col":!o||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),a});return()=>{var a;return F(e.tag,{class:[t.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}}),he=["start","end","center"],ct=["space-between","space-around","space-evenly"];function ye(e,s){return Y.reduce((n,t)=>{const a=e+ce(t);return n[a]=s(),n},{})}const Nn=[...he,"baseline","stretch"],dt=e=>Nn.includes(e),ft=ye("align",()=>({type:String,default:null,validator:dt})),Rn=[...he,...ct],vt=e=>Rn.includes(e),mt=ye("justify",()=>({type:String,default:null,validator:vt})),zn=[...he,...ct,"stretch"],gt=e=>zn.includes(e),ht=ye("alignContent",()=>({type:String,default:null,validator:gt})),Te={align:Object.keys(ft),justify:Object.keys(mt),alignContent:Object.keys(ht)},An={align:"align",justify:"justify",alignContent:"align-content"};function On(e,s,n){let t=An[e];if(n!=null){if(s){const a=s.replace(e,"");t+=`-${a}`}return t+=`-${n}`,t.toLowerCase()}}const jn=y({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:dt},...ft,justify:{type:String,default:null,validator:vt},...mt,alignContent:{type:String,default:null,validator:gt},...ht,...I(),...$()},"VRow"),Kn=B()({name:"VRow",props:jn(),setup(e,s){let{slots:n}=s;const t=c(()=>{const a=[];let i;for(i in Te)Te[i].forEach(o=>{const l=e[o],r=On(i,o,l);r&&a.push(r)});return a.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),a});return()=>{var a;return F(e.tag,{class:["v-row",t.value,e.class],style:e.style},(a=n.default)==null?void 0:a.call(n))}}}),Gn=y({disabled:Boolean,group:Boolean,hideOnLeave:Boolean,leaveAbsolute:Boolean,mode:String,origin:String},"transition");function V(e,s,n){return B()({name:e,props:Gn({mode:n,origin:s}),setup(t,a){let{slots:i}=a;const o={onBeforeEnter(l){t.origin&&(l.style.transformOrigin=t.origin)},onLeave(l){if(t.leaveAbsolute){const{offsetTop:r,offsetLeft:f,offsetWidth:h,offsetHeight:b}=l;l._transitionInitialStyles={position:l.style.position,top:l.style.top,left:l.style.left,width:l.style.width,height:l.style.height},l.style.position="absolute",l.style.top=`${r}px`,l.style.left=`${f}px`,l.style.width=`${h}px`,l.style.height=`${b}px`}t.hideOnLeave&&l.style.setProperty("display","none","important")},onAfterLeave(l){if(t.leaveAbsolute&&(l!=null&&l._transitionInitialStyles)){const{position:r,top:f,left:h,width:b,height:u}=l._transitionInitialStyles;delete l._transitionInitialStyles,l.style.position=r||"",l.style.top=f||"",l.style.left=h||"",l.style.width=b||"",l.style.height=u||""}}};return()=>{const l=t.group?Mt:X;return F(l,{name:t.disabled?"":e,css:!t.disabled,...t.group?void 0:{mode:t.mode},...t.disabled?{}:o},i.default)}}})}function yt(e,s){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"in-out";return B()({name:e,props:{mode:{type:String,default:n},disabled:Boolean},setup(t,a){let{slots:i}=a;return()=>F(X,{name:t.disabled?"":e,css:!t.disabled,...t.disabled?{}:s},i.default)}})}function bt(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";const n=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1)?"width":"height",t=Dt(`offset-${n}`);return{onBeforeEnter(o){o._parent=o.parentNode,o._initialStyle={transition:o.style.transition,overflow:o.style.overflow,[n]:o.style[n]}},onEnter(o){const l=o._initialStyle;o.style.setProperty("transition","none","important"),o.style.overflow="hidden";const r=`${o[t]}px`;o.style[n]="0",o.offsetHeight,o.style.transition=l.transition,e&&o._parent&&o._parent.classList.add(e),requestAnimationFrame(()=>{o.style[n]=r})},onAfterEnter:i,onEnterCancelled:i,onLeave(o){o._initialStyle={transition:"",overflow:o.style.overflow,[n]:o.style[n]},o.style.overflow="hidden",o.style[n]=`${o[t]}px`,o.offsetHeight,requestAnimationFrame(()=>o.style[n]="0")},onAfterLeave:a,onLeaveCancelled:a};function a(o){e&&o._parent&&o._parent.classList.remove(e),i(o)}function i(o){const l=o._initialStyle[n];o.style.overflow=o._initialStyle.overflow,l!=null&&(o.style[n]=l),delete o._initialStyle}}V("fab-transition","center center","out-in");V("dialog-bottom-transition");V("dialog-top-transition");const Jn=V("fade-transition");V("scale-transition");V("scroll-x-transition");V("scroll-x-reverse-transition");V("scroll-y-transition");V("scroll-y-reverse-transition");V("slide-x-transition");V("slide-x-reverse-transition");const Qn=V("slide-y-transition");V("slide-y-reverse-transition");const Zn=yt("expand-transition",bt()),es=yt("expand-x-transition",bt("",!0)),ts=y({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),ns=(e,s)=>{let{slots:n}=s;const{transition:t,disabled:a,...i}=e,{component:o=X,...l}=typeof t=="object"?t:{};return F(o,je(typeof t=="string"?{name:a?"":t}:l,i,{disabled:a}),n)};export{me as A,Ue as B,Kt as C,ge as D,Yt as E,cn as F,yn as G,pn as H,dn as I,bn as J,Sn as K,Un as L,ns as M,vn as N,un as O,Ln as P,Jt as Q,Bn as R,en as S,Jn as T,Qt as U,Qn as V,Zt as W,ee as a,mn as b,de as c,fe as d,Pe as e,U as f,Hn as g,es as h,De as i,Fe as j,Kn as k,Yn as l,ts as m,Fn as n,qn as o,Xn as p,Ge as q,He as r,Wn as s,Me as t,gn as u,We as v,Z as w,Zn as x,Je as y,Qe as z};
