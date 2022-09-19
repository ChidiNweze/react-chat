import{a as V,j as m,r as H,F as Fe}from"./jsx-runtime.b44296f9.js";import{A as z}from"./index.39dc8abe.js";import{s as M,a as St}from"./theme.106f5753.js";import{B as J}from"./index.8f5dfbc3.js";import{C as $t}from"./index.ed4bb5ae.js";import{I as _t,c as Ue}from"./index.4c0e545f.js";import{I as xe}from"./index.7946e9d3.js";import{L as Ct}from"./index.ccf72718.js";import{c as ze}from"./iframe.041f3d57.js";import{M as ae}from"./index.8656d7e2.js";import{C as wt}from"./index.8ce12895.js";import{C as xt}from"./index.9d1589c4.js";import{I as bt}from"./index.8d8a4c8f.js";import{T as Z}from"./index.bbafd4c0.js";import{T as At}from"./index.ec3f590e.js";import{T as Ke}from"./index.0b0576af.js";const Me=M("h2",{margin:0,typo:{size:20,weight:"$2",height:"$2"},color:"$black"}),We=M("p",{margin:0,typo:{},color:"$darkGrey"}),Ge=M("div",{display:"flex",flexDirection:"column",alignItems:"center",padding:"48px 0",[`& ${z.Container}`]:{marginBottom:"$4"},[`& ${Me}`]:{marginBottom:8}}),Ot=({name:e,description:t,image:r})=>V(Ge,{children:[m(z,{size:"large",image:r}),m(Me,{children:e}),m(We,{children:t})]}),Tt=Object.assign(Ot,{Container:Ge,Title:Me,Description:We});try{AssistantInfo.displayName="AssistantInfo",AssistantInfo.__docgenInfo={description:"",displayName:"AssistantInfo",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/AssistantInfo/index.tsx#AssistantInfo"]={docgenInfo:AssistantInfo.__docgenInfo,name:"AssistantInfo",path:"src/components/AssistantInfo/index.tsx#AssistantInfo"})}catch{}const Je=M("footer",{padding:"$3 $4 0 $4",[`& ${_t.Container}`]:{flex:1},[`& ${J.Base}`]:{width:"100%"},variants:{withShadow:{true:{boxShadow:"0 12px 48px $shadow16"}}}}),Xe=M("aside",{display:"flex",justifyContent:"center",alignItems:"center",padding:"10px 0 $3 0",typo:{size:12,height:"17px"},color:"$darkGrey","& a":{marginLeft:"0.5ch",textDecoration:"none",color:"$primary","&:focus":{outline:0}}}),ce=({isRunning:e,onStart:t,onSend:r})=>{const[n,s]=H.exports.useState("");return V(Je,{withShadow:!e,children:[e?m($t,{value:n,placeholder:"Message\u2026",autoFocus:!0,onValueChange:s,onSend:()=>{!n||(r==null||r(n),s(""))}}):m(J,{onClick:t,children:"Start New Chat"}),V(Xe,{children:["Conversation \u26A1\uFE0F by",m("a",{target:"_blank",href:"https://voiceflow.com",rel:"noreferrer",children:"Voiceflow"})]})]})},Et=Object.assign(ce,{Container:Je,Watermark:Xe});try{ce.displayName="Footer",ce.__docgenInfo={description:"",displayName:"Footer",props:{isRunning:{defaultValue:null,description:"",name:"isRunning",required:!1,type:{name:"boolean | undefined"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"((message: string) => void) | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Footer/index.tsx#Footer"]={docgenInfo:ce.__docgenInfo,name:"Footer",path:"src/components/Footer/index.tsx#Footer"})}catch{}const Ie=M("h1",{typo:{size:17,weight:"$2",height:"$2"},color:"rgba(255,255,255,0.95)"}),Ze=M("button",{display:"flex",justifyContent:"center",alignItems:"center",height:32,width:32,marginLeft:8,border:0,borderRadius:6,padding:0,background:"none",trans:["background-color"],"&:focus":{outline:0},"&:hover":{cursor:"pointer",backgroundColor:"rgba(255,255,255,0.16)",[`& ${xe.Frame}`]:{color:"$white"}},[`& ${xe.Frame}`]:{height:"$xxs",width:"$xxs",color:"rgba(255,255,255,0.8)",trans:["color"]}}),Qe=M("header",{display:"flex",flexShrink:0,alignItems:"center",height:"$lg",padding:"0 $4 0 $5",backgroundColor:"$primary",boxShadow:"0 1px 2px $shadow16",[`& ${z.Container}`]:{height:32,width:32},[`& ${Ie}`]:{flex:1,marginLeft:14}}),le=({title:e,image:t,actions:r=[]})=>V(Qe,{children:[m(z,{image:t}),m(Ie,{children:e}),r.map(({svg:n,onClick:s},c)=>m(Ze,{onClick:s,children:m(xe,{svg:n})},c))]}),Rt=Object.assign(le,{Container:Qe,Title:Ie,Button:Ze});try{le.displayName="Header",le.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},actions:{defaultValue:{value:"[]"},description:"",name:"actions",required:!1,type:{name:"HeaderActionProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Header/index.tsx#Header"]={docgenInfo:le.__docgenInfo,name:"Header",path:"src/components/Header/index.tsx#Header"})}catch{}const et=M("div",{padding:"$4 $4 $3 $4",borderRadius:"$1",backgroundColor:"$white",boxShadow:"0 12px 48px 4px $shadow12",[`& ${J.Base}`]:{width:"100%",marginTop:"$1","&:first-of-type":{marginTop:0}}}),de=({accept:e,cancel:t})=>V(et,{children:[m(J.Primary,{tabIndex:-1,...e,children:e.label}),m(J,{type:"subtle",tabIndex:-1,...t,children:t.label})]}),be=Object.assign(de,{Container:et});try{de.displayName="Prompt",de.__docgenInfo={description:"",displayName:"Prompt",props:{accept:{defaultValue:null,description:"",name:"accept",required:!0,type:{name:"PromptOptionProps"}},cancel:{defaultValue:null,description:"",name:"cancel",required:!0,type:{name:"PromptOptionProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Prompt/index.tsx#Prompt"]={docgenInfo:de.__docgenInfo,name:"Prompt",path:"src/components/Prompt/index.tsx#Prompt"})}catch{}const Le=H.exports.createContext({scrollToBottom:()=>{}}),{Consumer:_e}=Le,pe=({target:e,children:t})=>{const r=H.exports.useCallback(()=>{requestAnimationFrame(()=>{const s=e.current;if(!s)return;const{scrollTop:c,scrollHeight:g,clientHeight:A}=s,C=g-A;C!==c&&s.scrollTo({top:C})})},[]),n=H.exports.useMemo(()=>({scrollToBottom:r}),[r]);return m(Le.Provider,{value:n,children:t})};try{_e.displayName="AutoScrollConsumer",_e.__docgenInfo={description:"",displayName:"AutoScrollConsumer",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/contexts/AutoScrollContext.tsx#AutoScrollConsumer"]={docgenInfo:_e.__docgenInfo,name:"AutoScrollConsumer",path:"src/contexts/AutoScrollContext.tsx#AutoScrollConsumer"})}catch{}try{pe.displayName="AutoScrollProvider",pe.__docgenInfo={description:"",displayName:"AutoScrollProvider",props:{target:{defaultValue:null,description:"",name:"target",required:!0,type:{name:"RefObject<T>"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/contexts/AutoScrollContext.tsx#AutoScrollProvider"]={docgenInfo:pe.__docgenInfo,name:"AutoScrollProvider",path:"src/contexts/AutoScrollContext.tsx#AutoScrollProvider"})}catch{}var Mt={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(ze,function(){return function(r,n,s){r=r||{};var c=n.prototype,g={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function A(y,x,w,P){return c.fromToBase(y,x,w,P)}s.en.relativeTime=g,c.fromToBase=function(y,x,w,P,T){for(var u,E,l,B=w.$locale().relativeTime||g,v=r.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],b=v.length,O=0;O<b;O+=1){var S=v[O];S.d&&(u=P?s(y).diff(w,S.d,!0):w.diff(y,S.d,!0));var L=(r.rounding||Math.round)(Math.abs(u));if(l=u>0,L<=S.r||!S.r){L<=1&&O>0&&(S=v[O-1]);var K=B[S.l];T&&(L=T(""+L)),E=typeof K=="string"?K.replace("%d",L):K(L,x,S.l,l);break}}if(x)return E;var Y=l?B.future:B.past;return typeof Y=="function"?Y(E):Y.replace("%s",E)},c.to=function(y,x){return A(y,x,this,!0)},c.from=function(y,x){return A(y,x,this)};var C=function(y){return y.$u?s.utc():s()};c.toNow=function(y){return this.to(C(this),y)},c.fromNow=function(y){return this.from(C(this),y)}}})})(Mt);var tt={exports:{}};(function(e,t){(function(r,n){e.exports=n()})(ze,function(){var r=1e3,n=6e4,s=36e5,c="millisecond",g="second",A="minute",C="hour",y="day",x="week",w="month",P="quarter",T="year",u="date",E="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,B=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},b=function(h,i,o){var d=String(h);return!d||d.length>=i?h:""+Array(i+1-d.length).join(o)+h},O={s:b,z:function(h){var i=-h.utcOffset(),o=Math.abs(i),d=Math.floor(o/60),a=o%60;return(i<=0?"+":"-")+b(d,2,"0")+":"+b(a,2,"0")},m:function h(i,o){if(i.date()<o.date())return-h(o,i);var d=12*(o.year()-i.year())+(o.month()-i.month()),a=i.clone().add(d,w),f=o-a<0,p=i.clone().add(d+(f?-1:1),w);return+(-(d+(o-a)/(f?a-p:p-a))||0)},a:function(h){return h<0?Math.ceil(h)||0:Math.floor(h)},p:function(h){return{M:w,y:T,w:x,d:y,D:u,h:C,m:A,s:g,ms:c,Q:P}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(h){return h===void 0}},S="en",L={};L[S]=v;var K=function(h){return h instanceof se},Y=function h(i,o,d){var a;if(!i)return S;if(typeof i=="string"){var f=i.toLowerCase();L[f]&&(a=f),o&&(L[f]=o,a=f);var p=i.split("-");if(!a&&p.length>1)return h(p[0])}else{var $=i.name;L[$]=i,a=$}return!d&&a&&(S=a),a||!d&&S},D=function(h,i){if(K(h))return h.clone();var o=typeof i=="object"?i:{};return o.date=h,o.args=arguments,new se(o)},_=O;_.l=Y,_.i=K,_.w=function(h,i){return D(h,{locale:i.$L,utc:i.$u,x:i.$x,$offset:i.$offset})};var se=function(){function h(o){this.$L=Y(o.locale,null,!0),this.parse(o)}var i=h.prototype;return i.parse=function(o){this.$d=function(d){var a=d.date,f=d.utc;if(a===null)return new Date(NaN);if(_.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var p=a.match(l);if(p){var $=p[2]-1||0,I=(p[7]||"0").substring(0,3);return f?new Date(Date.UTC(p[1],$,p[3]||1,p[4]||0,p[5]||0,p[6]||0,I)):new Date(p[1],$,p[3]||1,p[4]||0,p[5]||0,p[6]||0,I)}}return new Date(a)}(o),this.$x=o.x||{},this.init()},i.init=function(){var o=this.$d;this.$y=o.getFullYear(),this.$M=o.getMonth(),this.$D=o.getDate(),this.$W=o.getDay(),this.$H=o.getHours(),this.$m=o.getMinutes(),this.$s=o.getSeconds(),this.$ms=o.getMilliseconds()},i.$utils=function(){return _},i.isValid=function(){return this.$d.toString()!==E},i.isSame=function(o,d){var a=D(o);return this.startOf(d)<=a&&a<=this.endOf(d)},i.isAfter=function(o,d){return D(o)<this.startOf(d)},i.isBefore=function(o,d){return this.endOf(d)<D(o)},i.$g=function(o,d,a){return _.u(o)?this[d]:this.set(a,o)},i.unix=function(){return Math.floor(this.valueOf()/1e3)},i.valueOf=function(){return this.$d.getTime()},i.startOf=function(o,d){var a=this,f=!!_.u(d)||d,p=_.p(o),$=function(X,q){var U=_.w(a.$u?Date.UTC(a.$y,q,X):new Date(a.$y,q,X),a);return f?U:U.endOf(y)},I=function(X,q){return _.w(a.toDate()[X].apply(a.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(q)),a)},R=this.$W,N=this.$M,F=this.$D,k="set"+(this.$u?"UTC":"");switch(p){case T:return f?$(1,0):$(31,11);case w:return f?$(1,N):$(0,N+1);case x:var Q=this.$locale().weekStart||0,ee=(R<Q?R+7:R)-Q;return $(f?F-ee:F+(6-ee),N);case y:case u:return I(k+"Hours",0);case C:return I(k+"Minutes",1);case A:return I(k+"Seconds",2);case g:return I(k+"Milliseconds",3);default:return this.clone()}},i.endOf=function(o){return this.startOf(o,!1)},i.$set=function(o,d){var a,f=_.p(o),p="set"+(this.$u?"UTC":""),$=(a={},a[y]=p+"Date",a[u]=p+"Date",a[w]=p+"Month",a[T]=p+"FullYear",a[C]=p+"Hours",a[A]=p+"Minutes",a[g]=p+"Seconds",a[c]=p+"Milliseconds",a)[f],I=f===y?this.$D+(d-this.$W):d;if(f===w||f===T){var R=this.clone().set(u,1);R.$d[$](I),R.init(),this.$d=R.set(u,Math.min(this.$D,R.daysInMonth())).$d}else $&&this.$d[$](I);return this.init(),this},i.set=function(o,d){return this.clone().$set(o,d)},i.get=function(o){return this[_.p(o)]()},i.add=function(o,d){var a,f=this;o=Number(o);var p=_.p(d),$=function(N){var F=D(f);return _.w(F.date(F.date()+Math.round(N*o)),f)};if(p===w)return this.set(w,this.$M+o);if(p===T)return this.set(T,this.$y+o);if(p===y)return $(1);if(p===x)return $(7);var I=(a={},a[A]=n,a[C]=s,a[g]=r,a)[p]||1,R=this.$d.getTime()+o*I;return _.w(R,this)},i.subtract=function(o,d){return this.add(-1*o,d)},i.format=function(o){var d=this,a=this.$locale();if(!this.isValid())return a.invalidDate||E;var f=o||"YYYY-MM-DDTHH:mm:ssZ",p=_.z(this),$=this.$H,I=this.$m,R=this.$M,N=a.weekdays,F=a.months,k=function(q,U,$e,ue){return q&&(q[U]||q(d,f))||$e[U].slice(0,ue)},Q=function(q){return _.s($%12||12,q,"0")},ee=a.meridiem||function(q,U,$e){var ue=q<12?"AM":"PM";return $e?ue.toLowerCase():ue},X={YY:String(this.$y).slice(-2),YYYY:this.$y,M:R+1,MM:_.s(R+1,2,"0"),MMM:k(a.monthsShort,R,F,3),MMMM:k(F,R),D:this.$D,DD:_.s(this.$D,2,"0"),d:String(this.$W),dd:k(a.weekdaysMin,this.$W,N,2),ddd:k(a.weekdaysShort,this.$W,N,3),dddd:N[this.$W],H:String($),HH:_.s($,2,"0"),h:Q(1),hh:Q(2),a:ee($,I,!0),A:ee($,I,!1),m:String(I),mm:_.s(I,2,"0"),s:String(this.$s),ss:_.s(this.$s,2,"0"),SSS:_.s(this.$ms,3,"0"),Z:p};return f.replace(B,function(q,U){return U||X[q]||p.replace(":","")})},i.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},i.diff=function(o,d,a){var f,p=_.p(d),$=D(o),I=($.utcOffset()-this.utcOffset())*n,R=this-$,N=_.m(this,$);return N=(f={},f[T]=N/12,f[w]=N,f[P]=N/3,f[x]=(R-I)/6048e5,f[y]=(R-I)/864e5,f[C]=R/s,f[A]=R/n,f[g]=R/r,f)[p]||R,a?N:_.a(N)},i.daysInMonth=function(){return this.endOf(w).$D},i.$locale=function(){return L[this.$L]},i.locale=function(o,d){if(!o)return this.$L;var a=this.clone(),f=Y(o,d,!0);return f&&(a.$L=f),a},i.clone=function(){return _.w(this.$d,this)},i.toDate=function(){return new Date(this.valueOf())},i.toJSON=function(){return this.isValid()?this.toISOString():null},i.toISOString=function(){return this.$d.toISOString()},i.toString=function(){return this.$d.toUTCString()},h}(),Ne=se.prototype;return D.prototype=Ne,[["$ms",c],["$s",g],["$m",A],["$H",C],["$W",y],["$M",w],["$y",T],["$D",u]].forEach(function(h){Ne[h[1]]=function(i){return this.$g(i,h[0],h[1])}}),D.extend=function(h,i){return h.$i||(h(i,se,D),h.$i=!0),D},D.locale=Y,D.isDayjs=K,D.unix=function(h){return D(1e3*h)},D.en=L[S],D.Ls=L,D.p={},D})})(tt);const qe=tt.exports,It=e=>H.exports.useMemo(()=>{const t=qe(e),r=qe();switch(!0){case r.isSame(t,"day"):return"Today";case r.subtract(1,"day").isSame(t,"day"):return"Yesterday";default:return t.fromNow()}},[]);var Lt=globalThis&&globalThis.__spreadArray||function(e,t,r){if(r||arguments.length===2)for(var n=0,s=t.length,c;n<s;n++)(c||!(n in t))&&(c||(c=Array.prototype.slice.call(t,0,n)),c[n]=t[n]);return e.concat(c||Array.prototype.slice.call(t))};function Pt(e,t,r){var n=e.length-t.length,s=Array.from(t);if(n===0)return e.apply(void 0,s);if(n===1){var c=function(g){return e.apply(void 0,Lt([g],s,!1))};return(r||e.lazy)&&(c.lazy=r||e.lazy,c.lazyArgs=t),c}throw new Error("Wrong number of arguments")}var Dt=function(){};function He(){return Pt(Bt,arguments)}function Bt(e,t){var r=new Set(t);return Object.entries(e).reduce(function(n,s){var c=s[0],g=s[1];return r.has(c)||(n[c]=g),n},{})}const Ae=Symbol("@ts-pattern/matcher"),Ve="@ts-pattern/anonymous-select-key",je=e=>Boolean(e&&typeof e=="object"),Ce=e=>e&&!!e[Ae],ne=(e,t,r)=>{if(je(e)){if(Ce(e)){const n=e[Ae](),{matched:s,selections:c}=n.match(t);return s&&c&&Object.keys(c).forEach(g=>r(g,c[g])),s}if(!je(t))return!1;if(Array.isArray(e))return!!Array.isArray(t)&&e.length===t.length&&e.every((n,s)=>ne(n,t[s],r));if(e instanceof Map)return t instanceof Map&&Array.from(e.keys()).every(n=>ne(e.get(n),t.get(n),r));if(e instanceof Set){if(!(t instanceof Set))return!1;if(e.size===0)return t.size===0;if(e.size===1){const[n]=Array.from(e.values());return Ce(n)?Array.from(t.values()).every(s=>ne(n,s,r)):t.has(n)}return Array.from(e.values()).every(n=>t.has(n))}return Object.keys(e).every(n=>{const s=e[n];return(n in t||Ce(c=s)&&c[Ae]().matcherType==="optional")&&ne(s,t[n],r);var c})}return Object.is(t,e)},Nt=e=>new oe(e,[]);class oe{constructor(t,r){this.value=void 0,this.cases=void 0,this.value=t,this.cases=r}with(...t){const r=t[t.length-1],n=[t[0]],s=[];return t.length===3&&typeof t[1]=="function"?(n.push(t[0]),s.push(t[1])):t.length>2&&n.push(...t.slice(1,t.length-1)),new oe(this.value,this.cases.concat([{match:c=>{let g={};const A=Boolean(n.some(C=>ne(C,c,(y,x)=>{g[y]=x}))&&s.every(C=>C(c)));return{matched:A,value:A&&Object.keys(g).length?Ve in g?g[Ve]:g:c}},handler:r}]))}when(t,r){return new oe(this.value,this.cases.concat([{match:n=>({matched:Boolean(t(n)),value:n}),handler:r}]))}otherwise(t){return new oe(this.value,this.cases.concat([{match:r=>({matched:!0,value:r}),handler:t}])).run()}exhaustive(){return this.run()}run(){let t,r=this.value;for(let n=0;n<this.cases.length;n++){const s=this.cases[n],c=s.match(this.value);if(c.matched){r=c.value,t=s.handler;break}}if(!t){let n;try{n=JSON.stringify(this.value)}catch{n=this.value}throw new Error(`Pattern matching error: no pattern matches value ${n}`)}return t(r,this.value)}}const rt=(e=[])=>{const{scrollToBottom:t}=H.exports.useContext(Le);H.exports.useLayoutEffect(()=>{t()},e)};var nt={exports:{}};/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */var qt=Ht;function Ht(e){if(!e)throw new TypeError("argument namespace is required");function t(r){}return t._file=void 0,t._ignored=!0,t._namespace=e,t._traced=!1,t._warned=Object.create(null),t.function=Vt,t.property=jt,t}function Vt(e,t){if(typeof e!="function")throw new TypeError("argument fn must be a function");return e}function jt(e,t,r){if(!e||typeof e!="object"&&typeof e!="function")throw new TypeError("argument obj must be object");var n=Object.getOwnPropertyDescriptor(e,t);if(!n)throw new TypeError("must call property on owner object");if(!n.configurable)throw new TypeError("property must be configurable")}var kt=Object.setPrototypeOf||({__proto__:[]}instanceof Array?Yt:Ft);function Yt(e,t){return e.__proto__=t,e}function Ft(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(e,r)||(e[r]=t[r]);return e}const Ut={100:"Continue",101:"Switching Protocols",102:"Processing",103:"Early Hints",200:"OK",201:"Created",202:"Accepted",203:"Non-Authoritative Information",204:"No Content",205:"Reset Content",206:"Partial Content",207:"Multi-Status",208:"Already Reported",226:"IM Used",300:"Multiple Choices",301:"Moved Permanently",302:"Found",303:"See Other",304:"Not Modified",305:"Use Proxy",307:"Temporary Redirect",308:"Permanent Redirect",400:"Bad Request",401:"Unauthorized",402:"Payment Required",403:"Forbidden",404:"Not Found",405:"Method Not Allowed",406:"Not Acceptable",407:"Proxy Authentication Required",408:"Request Timeout",409:"Conflict",410:"Gone",411:"Length Required",412:"Precondition Failed",413:"Payload Too Large",414:"URI Too Long",415:"Unsupported Media Type",416:"Range Not Satisfiable",417:"Expectation Failed",418:"I'm a Teapot",421:"Misdirected Request",422:"Unprocessable Entity",423:"Locked",424:"Failed Dependency",425:"Too Early",426:"Upgrade Required",428:"Precondition Required",429:"Too Many Requests",431:"Request Header Fields Too Large",451:"Unavailable For Legal Reasons",500:"Internal Server Error",501:"Not Implemented",502:"Bad Gateway",503:"Service Unavailable",504:"Gateway Timeout",505:"HTTP Version Not Supported",506:"Variant Also Negotiates",507:"Insufficient Storage",508:"Loop Detected",509:"Bandwidth Limit Exceeded",510:"Not Extended",511:"Network Authentication Required"};/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */var Pe=Ut,zt=j;j.message=Pe;j.code=Kt(Pe);j.codes=Wt(Pe);j.redirect={300:!0,301:!0,302:!0,303:!0,305:!0,307:!0,308:!0};j.empty={204:!0,205:!0,304:!0};j.retry={502:!0,503:!0,504:!0};function Kt(e){var t={};return Object.keys(e).forEach(function(n){var s=e[n],c=Number(n);t[s.toLowerCase()]=c}),t}function Wt(e){return Object.keys(e).map(function(r){return Number(r)})}function Gt(e){var t=e.toLowerCase();if(!Object.prototype.hasOwnProperty.call(j.code,t))throw new Error('invalid status message: "'+e+'"');return j.code[t]}function ke(e){if(!Object.prototype.hasOwnProperty.call(j.message,e))throw new Error("invalid status code: "+e);return j.message[e]}function j(e){if(typeof e=="number")return ke(e);if(typeof e!="string")throw new TypeError("code must be a number or string");var t=parseInt(e,10);return isNaN(t)?Gt(e):ke(t)}var Oe={exports:{}};typeof Object.create=="function"?Oe.exports=function(t,r){r&&(t.super_=r,t.prototype=Object.create(r.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}))}:Oe.exports=function(t,r){if(r){t.super_=r;var n=function(){};n.prototype=r.prototype,t.prototype=new n,t.prototype.constructor=t}};/*!
 * toidentifier
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */var Jt=Xt;function Xt(e){return e.split(" ").map(function(t){return t.slice(0,1).toUpperCase()+t.slice(1)}).join("").replace(/[^ _0-9a-z]/gi,"")}/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */(function(e){qt("http-errors");var t=kt,r=zt,n=Oe.exports,s=Jt;e.exports=g,e.exports.HttpError=A(),e.exports.isHttpError=y(e.exports.HttpError),P(e.exports,r.codes,e.exports.HttpError);function c(u){return Number(String(u).charAt(0)+"00")}function g(){for(var u,E,l=500,B={},v=0;v<arguments.length;v++){var b=arguments[v],O=typeof b;if(O==="object"&&b instanceof Error)u=b,l=u.status||u.statusCode||l;else if(O==="number"&&v===0)l=b;else if(O==="string")E=b;else if(O==="object")B=b;else throw new TypeError("argument #"+(v+1)+" unsupported type "+O)}(typeof l!="number"||!r.message[l]&&(l<400||l>=600))&&(l=500);var S=g[l]||g[c(l)];u||(u=S?new S(E):new Error(E||r.message[l]),Error.captureStackTrace(u,g)),(!S||!(u instanceof S)||u.status!==l)&&(u.expose=l<500,u.status=u.statusCode=l);for(var L in B)L!=="status"&&L!=="statusCode"&&(u[L]=B[L]);return u}function A(){function u(){throw new TypeError("cannot construct abstract class")}return n(u,Error),u}function C(u,E,l){var B=T(E);function v(b){var O=b!=null?b:r.message[l],S=new Error(O);return Error.captureStackTrace(S,v),t(S,v.prototype),Object.defineProperty(S,"message",{enumerable:!0,configurable:!0,value:O,writable:!0}),Object.defineProperty(S,"name",{enumerable:!1,configurable:!0,value:B,writable:!0}),S}return n(v,u),w(v,B),v.prototype.status=l,v.prototype.statusCode=l,v.prototype.expose=!0,v}function y(u){return function(l){return!l||typeof l!="object"?!1:l instanceof u?!0:l instanceof Error&&typeof l.expose=="boolean"&&typeof l.statusCode=="number"&&l.status===l.statusCode}}function x(u,E,l){var B=T(E);function v(b){var O=b!=null?b:r.message[l],S=new Error(O);return Error.captureStackTrace(S,v),t(S,v.prototype),Object.defineProperty(S,"message",{enumerable:!0,configurable:!0,value:O,writable:!0}),Object.defineProperty(S,"name",{enumerable:!1,configurable:!0,value:B,writable:!0}),S}return n(v,u),w(v,B),v.prototype.status=l,v.prototype.statusCode=l,v.prototype.expose=!1,v}function w(u,E){var l=Object.getOwnPropertyDescriptor(u,"name");l&&l.configurable&&(l.value=E,Object.defineProperty(u,"name",l))}function P(u,E,l){E.forEach(function(v){var b,O=s(r.message[v]);switch(c(v)){case 400:b=C(l,O,v);break;case 500:b=x(l,O,v);break}b&&(u[v]=b,u[O]=b)})}function T(u){return u.substr(-5)!=="Error"?u+"Error":u}})(nt);const xr=nt.exports;var ot=function(t,r){var n="000000000"+t;return n.substr(n.length-r)},Zt=ot,Qt=typeof window=="object"?window:self,er=Object.keys(Qt).length,tr=navigator.mimeTypes?navigator.mimeTypes.length:0,rr=Zt((tr+navigator.userAgent.length).toString(36)+er.toString(36),4),nr=function(){return rr},Te,Ye=typeof window<"u"&&(window.crypto||window.msCrypto)||typeof self<"u"&&self.crypto;if(Ye){var or=Math.pow(2,32)-1;Te=function(){return Math.abs(Ye.getRandomValues(new Uint32Array(1))[0]/or)}}else Te=Math.random;var ar=Te,ye=nr,at=ot,ir=ar,te=0,De=4,ve=36,it=Math.pow(ve,De);function Ee(){return at((ir()*it<<0).toString(ve),De)}function st(){return te=te<it?te:0,te++,te-1}function ie(){var e="c",t=new Date().getTime().toString(ve),r=at(st().toString(ve),De),n=ye(),s=Ee()+Ee();return e+t+r+n+s}ie.slug=function(){var t=new Date().getTime().toString(36),r=st().toString(36).slice(-4),n=ye().slice(0,1)+ye().slice(-1),s=Ee().slice(-2);return t.slice(-2)+r+n+s};ie.isCuid=function(t){return typeof t!="string"?!1:!!t.startsWith("c")};ie.isSlug=function(t){if(typeof t!="string")return!1;var r=t.length;return r>=7&&r<=10};ie.fingerprint=ye;var br=ie,G=(e=>(e.TEXT="text",e.IMAGE="image",e.CARD="card",e.CAROUSEL="carousel",e))(G||{});const sr=(e,t,r)=>{const n=t&&e.length,[s,c]=H.exports.useState(!1),[g,A]=H.exports.useState(n?[]:e);return H.exports.useEffect(()=>{if(!n)return;c(!0),A([]);const C=[...e];let y;const x=()=>{y=setTimeout(()=>{const w=C.shift();A(P=>[...P,w]),C.length===0?(c(!1),r()):x()},1e3)};return x(),()=>{clearTimeout(y)}},[]),{showIndicator:s,visibleMessages:g}},ut=M("span",{flexGrow:1}),ct=M("div",{display:"flex",flexWrap:"wrap",marginBottom:"$5",padding:"0 $5 0 34px",[`& ${J.Base}`]:{height:"unset",paddingTop:7,paddingBottom:7,marginTop:8,marginRight:8,whiteSpace:"normal",textAlign:"start"}}),Be=M("div",{display:"flex",[`& ${z.Container}`]:{visibility:"hidden",alignSelf:"flex-end",margin:"0 8px 4px 0"},[`& ${Z.Container}`]:{alignSelf:"center",whiteSpace:"nowrap",opacity:"0%",trans:["opacity"]},[`&:hover ${Z.Container}`]:{opacity:"100%"},variants:{withImage:{true:{[`& ${z.Container}`]:{visibility:"visible"}}},scrollable:{true:{overflowX:"scroll",flexShrink:0}},center:{true:{alignItems:"center"}}}}),lt=M("div",{display:"flex",flexDirection:"column",[`& ${ae.Container}`]:{marginBottom:"$1",maxWidth:248,"&:last-of-type":{marginBottom:0}}}),fe=({image:e})=>V(Be,{withImage:!0,center:!0,children:[m(z,{image:e}),m(At,{})]}),dt=fe;try{fe.displayName="Indicator",fe.__docgenInfo={description:"",displayName:"Indicator",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SystemResponse/Indicator.tsx#Indicator"]={docgenInfo:fe.__docgenInfo,name:"Indicator",path:"src/components/SystemResponse/Indicator.tsx#Indicator"})}catch{}const me=({image:e,timestamp:t,messages:r,actions:n=[],isAnimated:s=!1,onAnimationEnd:c=Dt})=>{const[g,A]=H.exports.useState(!1),{showIndicator:C,visibleMessages:y}=sr(r,s,c),x=!!n.length&&!C&&!g,w=()=>A(!0);return rt([y.length]),r.length?V(Fe,{children:[y.map((P,T)=>V(Be,{withImage:T===r.length-1,scrollable:P.type===G.CAROUSEL,children:[m(z,{image:e}),m(lt,{children:Nt(P).with({type:G.TEXT},({text:u})=>m(ae,{from:"system",children:u},T)).with({type:G.IMAGE},({url:u})=>m(bt,{image:u})).with({type:G.CARD},u=>m(wt,{...He(u,["type"])})).with({type:G.CAROUSEL},u=>m(xt,{...He(u,["type"])})).otherwise(()=>null)}),m(ut,{}),m(Z,{value:t})]},T)),x&&m(ct,{children:n.map(({label:P,onClick:T},u)=>m(J,{variant:"secondary",onClick:Ue(T,w),children:P},u))}),C&&m(dt,{image:e})]}):null},W=Object.assign(me,{Message:G,Container:Be,List:lt,Spacer:ut,Actions:ct,Indicator:dt});try{me.displayName="SystemResponse",me.__docgenInfo={description:"",displayName:"SystemResponse",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"Date"}},messages:{defaultValue:null,description:"",name:"messages",required:!0,type:{name:"MessageProps[]"}},actions:{defaultValue:{value:"[]"},description:"",name:"actions",required:!1,type:{name:"ResponseActionProps[]"}},isAnimated:{defaultValue:{value:"false"},description:"",name:"isAnimated",required:!1,type:{name:"boolean"}},onAnimationEnd:{defaultValue:{value:"R.noop"},description:"",name:"onAnimationEnd",required:!1,type:{name:"VoidFunction"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SystemResponse/index.tsx#SystemResponse"]={docgenInfo:me.__docgenInfo,name:"SystemResponse",path:"src/components/SystemResponse/index.tsx#SystemResponse"})}catch{}const pt=M("aside",{typo:{size:"12px",height:"17px"},color:"$darkGrey",marginTop:"$2"}),ft=M("div",{display:"flex",flexDirection:"column",alignItems:"flex-end",[`& ${ae.Container}`]:{maxWidth:282},[`& > ${Ke.Container}`]:{marginTop:"$1"}}),mt=M("div",{display:"flex",width:"100%",alignItems:"center",[`& ${Z.Container}`]:{flexGrow:1,opacity:"0%",trans:["opacity"]},[`&:hover ${Z.Container}`]:{opacity:"100%"}}),he=({message:e,timestamp:t,debug:r})=>{var n,s;return rt(),V(ft,{children:[V(mt,{children:[m(Z,{value:t}),m(ae,{from:"user",children:e})]}),r&&V(Fe,{children:[m(pt,{children:r.message}),r.reason&&m(Ke,{label:(n=r.action)==null?void 0:n.label,onClick:(s=r.action)==null?void 0:s.onClick,orientation:"right",children:r.reason})]})]})},re=Object.assign(he,{Container:ft,Debug:pt,Row:mt});try{he.displayName="UserResponse",he.__docgenInfo={description:"",displayName:"UserResponse",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"Date"}},debug:{defaultValue:null,description:"",name:"debug",required:!1,type:{name:"DebugResponseProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/UserResponse/index.tsx#UserResponse"]={docgenInfo:he.__docgenInfo,name:"UserResponse",path:"src/components/UserResponse/index.tsx#UserResponse"})}catch{}const we=10,Se=M("div",{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:0,backgroundColor:"$shadow12"}),Re=M("article",{position:"relative",display:"flex",flexDirection:"column",width:380,borderRadius:"$2",overflow:"hidden",backgroundColor:"$white",boxShadow:"0 2px 48px rgba(19,33,68,0.12), 0 0 0 1px $shadow4",[`& ${Se}`]:{opacity:0,pointerEvents:"none",trans:["opacity"]},[`& ${be.Container}`]:{position:"absolute",bottom:0,width:"100%",boxSizing:"border-box",paddingBottom:`calc($3 + ${we}px)`,transition:"transform 320ms cubic-bezier(0.45, 1.29, 0.64, 1)",transform:`translateY(calc(100% + ${we}px))`},variants:{withPrompt:{true:{[`& ${Se}`]:{opacity:1,pointerEvents:"auto"},[`& ${be.Container}`]:{transform:`translateY(${we}px)`}}}}}),ht=M("div",{display:"flex",justifyContent:"center",typo:{size:12},color:"$darkGrey"}),gt=M("main",{display:"flex",flexDirection:"column",height:"100%",overflowY:"scroll",overflowX:"hidden",paddingBottom:"$3",[`
    & ${W.List} > *,
    & ${ae.Container},
    & > ${W.Actions}
  `]:{anim:[St]},[`
    & > ${re.Container},
    & > ${W.Container}
  `]:{padding:"0 $5"},[`& > ${W.Actions}`]:{padding:"0 $5 0 54px"},[`& ${W.Container}`]:{marginBottom:"$1","&:last-of-type":{marginBottom:0}},[`& ${re.Container} + ${re.Container}`]:{marginTop:"$1"},[`
    & ${W.Container} + ${re.Container},
    & ${re.Container} + ${W.Container}
  `]:{marginTop:"$5"}}),yt=M("div",{flexGrow:1}),vt=M(ht,{paddingBottom:"$3"}),ge=({isRunning:e,title:t,image:r,description:n,startTime:s,isLoading:c,onMinimize:g,onEnd:A,onStart:C,onSend:y,children:x})=>{const w=It(s),P=H.exports.useRef(null),[T,u]=H.exports.useState(!1),E=()=>u(!0),l=()=>u(!1);return c?m(Re,{children:m(Ct,{})}):V(Re,{withPrompt:T,children:[m(Rt,{title:t,image:r,actions:[{svg:"minus",onClick:g},{svg:"close",onClick:E}]}),m(gt,{ref:P,children:V(pe,{target:P,children:[m(Tt,{name:t,image:r,description:n}),m(yt,{}),m(vt,{children:w}),x]})}),m(Et,{isRunning:e,onStart:C,onSend:y}),m(Se,{}),m(be,{accept:{label:"End Chat",type:"warn",onClick:Ue(A,l)},cancel:{label:"Cancel",onClick:l}})]})},Ar=Object.assign(H.exports.memo(ge),{Container:Re,Dialog:gt,Overlay:Se,Spacer:yt,Status:ht,Timestamp:vt});try{ge.displayName="Chat",ge.__docgenInfo={description:"",displayName:"Chat",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},startTime:{defaultValue:null,description:"",name:"startTime",required:!0,type:{name:"Date"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!0,type:{name:"boolean"}},onMinimize:{defaultValue:null,description:"",name:"onMinimize",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"HeaderActionProps[]"}},isRunning:{defaultValue:null,description:"",name:"isRunning",required:!1,type:{name:"boolean | undefined"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"((message: string) => void) | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Chat/index.tsx#Chat"]={docgenInfo:ge.__docgenInfo,name:"Chat",path:"src/components/Chat/index.tsx#Chat"})}catch{}export{Tt as A,Ar as C,Et as F,Rt as H,Nt as K,be as P,W as S,re as U,br as a,xr as c,He as o};
//# sourceMappingURL=index.137c6163.js.map
