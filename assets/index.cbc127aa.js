import{a as c,j as s,r as d,F as B}from"./jsx-runtime.80f478aa.js";import{A as f}from"./index.e28c95c1.js";import{s as l}from"./theme.671bfe4d.js";import{B as p}from"./index.7f7cbbdb.js";import{C as se}from"./index.64ad05f0.js";import{I as ie,c as le}from"./index.21a9cad0.js";import{I}from"./index.0f3126b4.js";import{C as ce}from"./index.725319d7.js";import{C as de}from"./index.7eb301c2.js";import{I as pe}from"./index.449445b7.js";import{M as k}from"./index.ee962f77.js";import{T as z}from"./index.a9cee817.js";const V=l("h2",{margin:0,typo:{size:20,weight:"$2",height:"$2"},color:"$black"}),F=l("p",{margin:0,typo:{},color:"$darkGrey"}),N=l("div",{display:"flex",flexDirection:"column",alignItems:"center",padding:"48px 0",[`& ${f.Container}`]:{marginBottom:"$4"},[`& ${V}`]:{marginBottom:8}}),ue=({name:n,description:e,image:r})=>c(N,{children:[s(f,{size:"large",image:r}),s(V,{children:n}),s(F,{children:e})]}),me=Object.assign(ue,{Container:N,Title:V,Description:F});try{AssistantInfo.displayName="AssistantInfo",AssistantInfo.__docgenInfo={description:"",displayName:"AssistantInfo",props:{name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/AssistantInfo/index.tsx#AssistantInfo"]={docgenInfo:AssistantInfo.__docgenInfo,name:"AssistantInfo",path:"src/components/AssistantInfo/index.tsx#AssistantInfo"})}catch{}const K=l("footer",{padding:"$3 $4 0 $4",[`& ${ie.Container}`]:{flex:1},[`& ${p.Base}`]:{width:"100%"}}),Y=l("aside",{display:"flex",justifyContent:"center",alignItems:"center",height:40,padding:"10px 0 $3 0",typo:{size:12,height:"17px"},color:"$darkGrey","& a":{marginLeft:"0.5ch",textDecoration:"none",color:"$primary","&:focus":{outline:0}}}),$=({isRunning:n,onStart:e,onSend:r})=>{const[t,a]=d.exports.useState("");return c(K,{children:[n?s(se,{value:t,placeholder:"Message\u2026",autoFocus:!0,onValueChange:a,onSend:()=>{!t||(r==null||r(t),a(""))}}):s(p,{onClick:e,children:"Start New Chat"}),c(Y,{children:["Conversation \u26A1\uFE0F by",s("a",{target:"_blank",href:"https://voiceflow.com",rel:"noreferrer",children:"Voiceflow"})]})]})},fe=Object.assign($,{Container:K,Watermark:Y});try{$.displayName="Footer",$.__docgenInfo={description:"",displayName:"Footer",props:{isRunning:{defaultValue:null,description:"",name:"isRunning",required:!1,type:{name:"boolean | undefined"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"((message: string) => void) | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Footer/index.tsx#Footer"]={docgenInfo:$.__docgenInfo,name:"Footer",path:"src/components/Footer/index.tsx#Footer"})}catch{}const q=l("h1",{typo:{size:17,weight:"$2",height:"$2"},color:"rgba(255,255,255,0.95)"}),D=l("button",{display:"flex",justifyContent:"center",alignItems:"center",height:32,width:32,marginLeft:8,border:0,borderRadius:6,padding:0,background:"none",trans:["background-color"],"&:focus":{outline:0},"&:hover":{cursor:"pointer",backgroundColor:"rgba(255,255,255,0.16)",[`& ${I.Frame}`]:{color:"$white"}},[`& ${I.Frame}`]:{height:"$xxs",width:"$xxs",color:"rgba(255,255,255,0.8)",trans:["color"]}}),U=l("header",{display:"flex",flexShrink:0,alignItems:"center",height:"$lg",padding:"0 $4 0 $5",backgroundColor:"$primary",boxShadow:"0 1px 2px $shadow16",[`& ${f.Container}`]:{height:32,width:32},[`& ${q}`]:{flex:1,marginLeft:14}}),S=({title:n,image:e,actions:r=[]})=>c(U,{children:[s(f,{image:e}),s(q,{children:n}),r.map(({svg:t,onClick:a},o)=>s(D,{onClick:a,children:s(I,{svg:t})},o))]}),he=Object.assign(S,{Container:U,Title:q,Button:D});try{S.displayName="Header",S.__docgenInfo={description:"",displayName:"Header",props:{title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},actions:{defaultValue:{value:"[]"},description:"",name:"actions",required:!1,type:{name:"HeaderActionProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Header/index.tsx#Header"]={docgenInfo:S.__docgenInfo,name:"Header",path:"src/components/Header/index.tsx#Header"})}catch{}const G=l("div",{padding:"$4 $4 $3 $4",borderRadius:"$1",backgroundColor:"$white",boxShadow:"0 12px 48px 4px $shadow12",[`& ${p.Base}`]:{width:"100%",marginTop:"$1","&:first-of-type":{marginTop:0}}}),x=({accept:n,cancel:e})=>c(G,{children:[s(p.Primary,{...n,children:n.label}),s(p,{type:"subtle",...e,children:e.label})]}),W=Object.assign(x,{Container:G});try{x.displayName="Prompt",x.__docgenInfo={description:"",displayName:"Prompt",props:{accept:{defaultValue:null,description:"",name:"accept",required:!0,type:{name:"PromptOptionProps"}},cancel:{defaultValue:null,description:"",name:"cancel",required:!0,type:{name:"PromptOptionProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Prompt/index.tsx#Prompt"]={docgenInfo:x.__docgenInfo,name:"Prompt",path:"src/components/Prompt/index.tsx#Prompt"})}catch{}const ge=(n=[])=>{const e=d.exports.useRef(null);return d.exports.useLayoutEffect(()=>{const r=e.current;if(!r)return;const{scrollTop:t,scrollHeight:a,clientHeight:o}=r,i=a-o;i!==t&&r.scrollTo({top:i})},n),e};var ye=globalThis&&globalThis.__spreadArray||function(n,e,r){if(r||arguments.length===2)for(var t=0,a=e.length,o;t<a;t++)(o||!(t in e))&&(o||(o=Array.prototype.slice.call(e,0,t)),o[t]=e[t]);return n.concat(o||Array.prototype.slice.call(e))};function _e(n,e,r){var t=n.length-e.length,a=Array.from(e);if(t===0)return n.apply(void 0,a);if(t===1){var o=function(i){return n.apply(void 0,ye([i],a,!1))};return(r||n.lazy)&&(o.lazy=r||n.lazy,o.lazyArgs=e),o}throw new Error("Wrong number of arguments")}function P(){return _e(Ce,arguments)}function Ce(n,e){var r=new Set(e);return Object.entries(n).reduce(function(t,a){var o=a[0],i=a[1];return r.has(o)||(t[o]=i),t},{})}const w=Symbol("@ts-pattern/matcher"),j="@ts-pattern/anonymous-select-key",M=n=>Boolean(n&&typeof n=="object"),T=n=>n&&!!n[w],y=(n,e,r)=>{if(M(n)){if(T(n)){const t=n[w](),{matched:a,selections:o}=t.match(e);return a&&o&&Object.keys(o).forEach(i=>r(i,o[i])),a}if(!M(e))return!1;if(Array.isArray(n))return!!Array.isArray(e)&&n.length===e.length&&n.every((t,a)=>y(t,e[a],r));if(n instanceof Map)return e instanceof Map&&Array.from(n.keys()).every(t=>y(n.get(t),e.get(t),r));if(n instanceof Set){if(!(e instanceof Set))return!1;if(n.size===0)return e.size===0;if(n.size===1){const[t]=Array.from(n.values());return T(t)?Array.from(e.values()).every(a=>y(t,a,r)):e.has(t)}return Array.from(n.values()).every(t=>e.has(t))}return Object.keys(n).every(t=>{const a=n[t];return(t in e||T(o=a)&&o[w]().matcherType==="optional")&&y(a,e[t],r);var o})}return Object.is(e,n)},$e=n=>new _(n,[]);class _{constructor(e,r){this.value=void 0,this.cases=void 0,this.value=e,this.cases=r}with(...e){const r=e[e.length-1],t=[e[0]],a=[];return e.length===3&&typeof e[1]=="function"?(t.push(e[0]),a.push(e[1])):e.length>2&&t.push(...e.slice(1,e.length-1)),new _(this.value,this.cases.concat([{match:o=>{let i={};const C=Boolean(t.some(u=>y(u,o,(b,E)=>{i[b]=E}))&&a.every(u=>u(o)));return{matched:C,value:C&&Object.keys(i).length?j in i?i[j]:i:o}},handler:r}]))}when(e,r){return new _(this.value,this.cases.concat([{match:t=>({matched:Boolean(e(t)),value:t}),handler:r}]))}otherwise(e){return new _(this.value,this.cases.concat([{match:r=>({matched:!0,value:r}),handler:e}])).run()}exhaustive(){return this.run()}run(){let e,r=this.value;for(let t=0;t<this.cases.length;t++){const a=this.cases[t],o=a.match(this.value);if(o.matched){r=o.value,e=a.handler;break}}if(!e){let t;try{t=JSON.stringify(this.value)}catch{t=this.value}throw new Error(`Pattern matching error: no pattern matches value ${t}`)}return e(r,this.value)}}var m=(n=>(n.TEXT="text",n.IMAGE="image",n.CARD="card",n.CAROUSEL="carousel",n))(m||{});const X=l("span",{flex:1}),O=l("span",{typo:{size:12,height:"17px"},color:"$darkGrey"}),J=l("div",{display:"flex",flexWrap:"wrap",marginBottom:"$5",padding:"0 $5 0 34px",[`& ${p.Base}`]:{marginTop:8,marginRight:8}}),Q=l("div",{display:"flex",[`& ${f.Container}`]:{alignSelf:"flex-end",margin:"7px 8px 7px 0"},[`& ${O}`]:{margin:"$3 0 $3 $3",whiteSpace:"nowrap",opacity:"0%",trans:["opacity"]},[`&:hover ${O}`]:{opacity:"100%"}}),Z=l("div",{display:"flex",flexDirection:"column",[`& ${k.Container}`]:{marginBottom:"$1","&:last-of-type":{marginBottom:0}}}),Se=n=>{const e=new Date(n),r=e.getHours(),t=e.getMinutes();return`${r}:${t>=10?"":"0"}${t} ${r>=12?"pm":"am"}`},A=({image:n,timestamp:e,messages:r,actions:t=[]})=>c(B,{children:[c(Q,{children:[s(f,{image:n}),s(Z,{children:r.map((a,o)=>$e(a).with({type:m.TEXT},({text:i})=>s(k,{from:"system",children:i},o)).with({type:m.IMAGE},({url:i})=>s(pe,{image:i},o)).with({type:m.CARD},i=>d.exports.createElement(ce,{...P(i,["type"]),key:o})).with({type:m.CAROUSEL},i=>d.exports.createElement(de,{...P(i,["type"]),key:o})).otherwise(()=>null))}),s(X,{}),s(O,{children:Se(e)})]}),!!t.length&&s(J,{children:t.map(({label:a,onClick:o},i)=>s(p,{variant:"secondary",onClick:o,children:a},i))})]}),h=Object.assign(A,{Message:m,Container:Q,List:Z,Spacer:X,Timestamp:O,Actions:J});try{A.displayName="SystemResponse",A.__docgenInfo={description:"",displayName:"SystemResponse",props:{image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},timestamp:{defaultValue:null,description:"",name:"timestamp",required:!0,type:{name:"string"}},messages:{defaultValue:null,description:"",name:"messages",required:!0,type:{name:"MessageProps[]"}},actions:{defaultValue:{value:"[]"},description:"",name:"actions",required:!1,type:{name:"ResponseActionProps[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/SystemResponse/index.tsx#SystemResponse"]={docgenInfo:A.__docgenInfo,name:"SystemResponse",path:"src/components/SystemResponse/index.tsx#SystemResponse"})}catch{}const ee=l("aside",{typo:{size:"12px",height:"17px"},color:"$darkGrey",marginTop:"$2"}),ne=l("div",{display:"flex",flexDirection:"column",alignItems:"flex-end",[`& > ${z.Container}`]:{marginTop:"$1"}}),v=({message:n,debug:e})=>{var r,t;return c(ne,{children:[s(k,{from:"user",children:n}),e&&c(B,{children:[s(ee,{children:e.message}),e.reason&&s(z,{label:(r=e.action)==null?void 0:r.label,onClick:(t=e.action)==null?void 0:t.onClick,orientation:"right",children:e.reason})]})]})},g=Object.assign(v,{Container:ne,Debug:ee});try{v.displayName="UserResponse",v.__docgenInfo={description:"",displayName:"UserResponse",props:{message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string"}},debug:{defaultValue:null,description:"",name:"debug",required:!1,type:{name:"DebugResponseProps"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/UserResponse/index.tsx#UserResponse"]={docgenInfo:v.__docgenInfo,name:"UserResponse",path:"src/components/UserResponse/index.tsx#UserResponse"})}catch{}const te=l("article",{position:"relative",display:"flex",flexDirection:"column",width:380,borderRadius:"$2",overflow:"hidden",backgroundColor:"$white",boxShadow:"0 2px 48px rgba(19,33,68,0.12), 0 0 0 1px $shadow4",[`& ${W.Container}`]:{position:"absolute",bottom:0,width:"100%",boxSizing:"border-box",zIndex:1}}),re=l("div",{position:"absolute",top:0,bottom:0,left:0,right:0,zIndex:0,backgroundColor:"$shadow12"}),oe=l("main",{overflowY:"scroll",overflowX:"hidden",[`
    & > ${g.Container},
    & > ${h.Container}
  `]:{padding:"0 $5"},[`& > ${h.Actions}`]:{padding:"0 $5 0 54px"},[`& ${h.Container}`]:{marginBottom:"$1","&:last-of-type":{marginBottom:0}},[`& ${g.Container} + ${g.Container}`]:{marginTop:"$1"},[`
    & ${h.Container} + ${g.Container},
    & ${g.Container} + ${h.Container}
  `]:{marginTop:"$5"}}),R=({isRunning:n,title:e,image:r,description:t,onMinimize:a,onEnd:o,onStart:i,onSend:C,children:u})=>{const b=ge([d.exports.Children.count(u)]),[E,H]=d.exports.useState(!1),ae=()=>H(!0),L=()=>H(!1);return c(te,{children:[s(he,{title:e,image:r,actions:[{svg:"minus",onClick:a},{svg:"close",onClick:ae}]}),c(oe,{ref:b,children:[s(me,{name:e,image:r,description:t}),u]}),s(fe,{isRunning:n,onStart:i,onSend:C}),E&&c(B,{children:[s(re,{}),s(W,{accept:{label:"End Chat",type:"warn",onClick:le(o,L)},cancel:{label:"Cancel",onClick:L}})]})]})},Ve=Object.assign(d.exports.memo(R),{Container:te,Dialog:oe,Overlay:re});try{R.displayName="Chat",R.__docgenInfo={description:"",displayName:"Chat",props:{description:{defaultValue:null,description:"",name:"description",required:!0,type:{name:"string"}},onMinimize:{defaultValue:null,description:"",name:"onMinimize",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},onEnd:{defaultValue:null,description:"",name:"onEnd",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},image:{defaultValue:null,description:"",name:"image",required:!0,type:{name:"string"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"HeaderActionProps[]"}},isRunning:{defaultValue:null,description:"",name:"isRunning",required:!1,type:{name:"boolean | undefined"}},onStart:{defaultValue:null,description:"",name:"onStart",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement> | undefined"}},onSend:{defaultValue:null,description:"",name:"onSend",required:!1,type:{name:"((message: string) => void) | undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Chat/index.tsx#Chat"]={docgenInfo:R.__docgenInfo,name:"Chat",path:"src/components/Chat/index.tsx#Chat"})}catch{}export{me as A,Ve as C,fe as F,he as H,$e as K,W as P,h as S,g as U,P as o};
//# sourceMappingURL=index.cbc127aa.js.map