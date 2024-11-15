import{j as e}from"./jsx-runtime-DRTy3Uxn.js";import{C as g,S as y,U as j}from"./index-BbdDbxKv.js";import{V as x,M as m}from"./fixtures-BG8dVRKH.js";import"./index-BBkUAzwr.js";import"./index-Bjyw5yqY.js";import"./constants-CnzOgqsw.js";import"./tag-CD_1nE8q.js";import"./animation-LM1V2pjp.js";import"./index-k-mBE7b6.js";import"./variants-BbyesEZ0.js";import"./index-B792wbPy.js";import"./device-WPWeBsw9.js";import"./index-DMkto-UT.js";import"./index-8wHEbfWR.js";import"./top-caret-CFqa3nzJ.js";import"./index-D9IMDxHf.js";import"./functional-ii7S4iDS.js";import"./extends-CF3RwP-h.js";import"./index--I7-kaqz.js";import"./index-CX0VroFg.js";import"./index-BUrDBgG0.js";import"./index-BfNzsk-l.js";import"./index-D21AaJ_Q.js";import"./_createSet-zuc-p8Rl.js";import"./_baseToString-BV3LLLfG.js";import"./is-plain-object-BrWfeXm7.js";import"./index-DL_PF9NM.js";import"./index-BNrZ85bq.js";import"./index-Dn3NLog5.js";import"./index-PqR-_bA4.js";import"./index-BZREYrMm.js";const Q={title:"Templates/Chat",component:g,args:{isLoading:!1,actions:[],title:"Assistant Name",withWatermark:!0,image:x,description:"Voiceflow's virtual assistant is here to help.",startTime:Date.now(),hasEnded:!1}},s=({messages:t,...a})=>e.jsx(y,{...a,messages:t,avatar:x,timestamp:Date.now()}),c=({message:t,...a})=>e.jsx(j,{timestamp:Date.now(),message:t||"Lorem ipsum dolor",...a}),o={},r={render:t=>e.jsxs(g,{...t,children:[e.jsx(s,{messages:[{type:"text",text:"Lorem ipsum dolor"}]}),e.jsx(s,{messages:[{type:"image",url:m}]}),e.jsx(c,{}),e.jsx(s,{messages:[{type:"text",text:"Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor consecteturaconsect turaconse lorem teturaconsecteturaconsecteturaconsectetura consectetura"}]}),e.jsx(c,{message:"Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor consecteturaconsect turaconse lorem teturaconsecteturaconsecteturaconsectetura consecteturac onsecteturaconsecteturaconsecteturaco nsecteturaconsectetura"}),e.jsx(s,{messages:[{type:"card",title:"Card Message",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:m}]})]})};var i,n,p;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var u,l,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    return <Chat {...args}>
        <SystemResponseTemplate messages={[{
        type: 'text',
        text: 'Lorem ipsum dolor'
      }]} />
        <SystemResponseTemplate messages={[{
        type: 'image',
        url: MOCK_IMAGE
      }]} />
        <UserResponseTemplate />
        <SystemResponseTemplate messages={[{
        type: 'text',
        text: 'Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor consecteturaconsect turaconse lorem teturaconsecteturaconsecteturaconsectetura consectetura'
      }]} />
        <UserResponseTemplate message="Lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor consecteturaconsect turaconse lorem teturaconsecteturaconsecteturaconsectetura consecteturac onsecteturaconsecteturaconsecteturaco nsecteturaconsectetura" />
        <SystemResponseTemplate messages={[{
        type: 'card',
        title: 'Card Message',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!',
        image: MOCK_IMAGE
      }]} />
      </Chat>;
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};export{o as Empty,r as Exhaustive,Q as default};
