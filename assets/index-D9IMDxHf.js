import{j as A}from"./jsx-runtime-DRTy3Uxn.js";import{r as i}from"./index-BBkUAzwr.js";import{c as j,a as I}from"./functional-ii7S4iDS.js";import{_ as N}from"./extends-CF3RwP-h.js";import{s as B}from"./animation-LM1V2pjp.js";function M(n,e){if(n==null)return{};var r={};for(var t in n)if({}.hasOwnProperty.call(n,t)){if(e.includes(t))continue;r[t]=n[t]}return r}var V=i.useLayoutEffect,O=function(e){var r=i.useRef(e);return V(function(){r.current=e}),r},R=function(e,r){if(typeof e=="function"){e(r);return}e.current=r},P=function(e,r){var t=i.useRef();return i.useCallback(function(o){e.current=o,t.current&&R(t.current,null),t.current=r,r&&R(r,o)},[r])},C={"min-height":"0","max-height":"none",height:"0",visibility:"hidden",overflow:"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},q=function(e){Object.keys(C).forEach(function(r){e.style.setProperty(r,C[r],"important")})},L=q,a=null,H=function(e,r){var t=e.scrollHeight;return r.sizingStyle.boxSizing==="border-box"?t+r.borderSize:t-r.paddingSize};function G(n,e,r,t){r===void 0&&(r=1),t===void 0&&(t=1/0),a||(a=document.createElement("textarea"),a.setAttribute("tabindex","-1"),a.setAttribute("aria-hidden","true"),L(a)),a.parentNode===null&&document.body.appendChild(a);var o=n.paddingSize,u=n.borderSize,d=n.sizingStyle,g=d.boxSizing;Object.keys(d).forEach(function(p){var v=p;a.style[v]=d[v]}),L(a),a.value=e;var s=H(a,n);a.value=e,s=H(a,n),a.value="x";var h=a.scrollHeight-o,l=h*r;g==="border-box"&&(l=l+o+u),s=Math.max(l,s);var f=h*t;return g==="border-box"&&(f=f+o+u),s=Math.min(f,s),[s,h]}var T=function(){},U=function(e,r){return e.reduce(function(t,o){return t[o]=r[o],t},{})},Y=["borderBottomWidth","borderLeftWidth","borderRightWidth","borderTopWidth","boxSizing","fontFamily","fontSize","fontStyle","fontWeight","letterSpacing","lineHeight","paddingBottom","paddingLeft","paddingRight","paddingTop","tabSize","textIndent","textRendering","textTransform","width","wordBreak"],X=!!document.documentElement.currentStyle,Z=function(e){var r=window.getComputedStyle(e);if(r===null)return null;var t=U(Y,r),o=t.boxSizing;if(o==="")return null;X&&o==="border-box"&&(t.width=parseFloat(t.width)+parseFloat(t.borderRightWidth)+parseFloat(t.borderLeftWidth)+parseFloat(t.paddingRight)+parseFloat(t.paddingLeft)+"px");var u=parseFloat(t.paddingBottom)+parseFloat(t.paddingTop),d=parseFloat(t.borderBottomWidth)+parseFloat(t.borderTopWidth);return{sizingStyle:t,paddingSize:u,borderSize:d}},D=Z;function $(n,e,r){var t=O(r);i.useLayoutEffect(function(){var o=function(d){return t.current(d)};if(n)return n.addEventListener(e,o),function(){return n.removeEventListener(e,o)}},[])}var J=function(e){$(window,"resize",e)},K=function(e){$(document.fonts,"loadingdone",e)},Q=["cacheMeasurements","maxRows","minRows","onChange","onHeightChange"],ee=function(e,r){var t=e.cacheMeasurements,o=e.maxRows,u=e.minRows,d=e.onChange,g=d===void 0?T:d,s=e.onHeightChange,h=s===void 0?T:s,l=M(e,Q),f=l.value!==void 0,p=i.useRef(null),v=P(p,r),z=i.useRef(0),S=i.useRef(),x=function(){var c=p.current,y=t&&S.current?S.current:D(c);if(y){S.current=y;var w=G(y,c.value||c.placeholder||"x",u,o),b=w[0],k=w[1];z.current!==b&&(z.current=b,c.style.setProperty("height",b+"px","important"),h(b,{rowHeight:k}))}},W=function(c){f||x(),g(c)};return i.useLayoutEffect(x),J(x),K(x),i.createElement("textarea",N({},l,{onChange:W,ref:v}))},te=i.forwardRef(ee);const E={width:"calc(100% - 42px)",borderRadius:"$1 0 0 $1",height:"42px",borderRightWidth:0,fontFamily:"$default",fontSize:"$2"},re={boxSizing:"border-box",border:"1px solid rgba(115,115,118,0.3)",backgroundColor:"$white",boxShadow:"0 1px 12px $shadow2",trans:["border-color"],resize:"none"},ne={border:"1px solid rgba(115,115,118,0.5)"},F=B(te,{...re,...E,padding:"11px $4 11px",color:"$black","&:focus":{...ne,...E,outline:"none"},"&::placeholder":{color:"$darkGrey"}}),m=i.forwardRef(({onValueChange:n,onChange:e,...r},t)=>{const o=I(e,u=>n(u.target.value));return A.jsx(F,{ref:t,...r,onChange:o,minRows:1,maxRows:5,style:{height:42}})}),se=Object.assign(m,{Controlled:j(m,{defaultValue:""}),Container:F});try{m.displayName="Textarea",m.__docgenInfo={description:"A textarea form control.",displayName:"Textarea",props:{value:{defaultValue:null,description:"The value being controlled by the component.",name:"value",required:!0,type:{name:"string"}},onValueChange:{defaultValue:null,description:"A callback that will be called with new values when the control is updated.",name:"onValueChange",required:!0,type:{name:"(value: string) => void"}}}}}catch{}export{se as T,ne as a,re as t};