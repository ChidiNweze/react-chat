import{S as r,C as i}from"./index.cbc127aa.js";import{j as o}from"./jsx-runtime.80f478aa.js";import"./index.e28c95c1.js";import"./theme.671bfe4d.js";import"./index.7f7cbbdb.js";import"./variants.db8faf16.js";import"./index.64ad05f0.js";import"./index.0dcdc4d4.js";import"./index.0f3126b4.js";import"./index.21a9cad0.js";import"./index.725319d7.js";import"./index.449445b7.js";import"./index.7eb301c2.js";import"./index.ee962f77.js";import"./index.a9cee817.js";import"./iframe.19570ee8.js";const e="https://source.unsplash.com/random/248x150",s={type:"text",text:"Lorem ipsum dolor sit amet consectetur"},a={type:"card",title:"Card Message",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:e},M={title:"Components/Chat/SystemResponse",component:r,args:{timestamp:new Date().toISOString(),image:"https://source.unsplash.com/random/26x26"},argTypes:{timestamp:{control:{type:"date"}}}},t=m=>o(i.Container,{children:o(i.Dialog,{css:{padding:"64px 0",display:"flex",flexDirection:"column",justifyContent:"center"},children:o(r,{...m})})}),n=t.bind({});n.args={messages:[s]};const l=t.bind({});l.args={messages:[s,s,s]};const p=t.bind({});p.args={...n.args,actions:[{label:"Button One"},{label:"Button Two"},{label:"Button Three"}]};const c=t.bind({});c.args={messages:[a]};const d=t.bind({});d.args={messages:[{...a,actions:[{label:"First Button"},{label:"Second Button"},{label:"Third Button"}]}]};const u=t.bind({});u.args={messages:[{type:"carousel",cards:[{title:"First Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptas perspiciatis est quis dolores!",image:e},{title:"Second Card",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",image:e,actions:[{label:"First Button"},{label:"Second Button"}]},{title:"Third Card",description:"Lorem ipsum dolor sit amet",image:e,actions:[{label:"First Button"},{label:"Second Button"},{label:"Third Button"}]}]}]};export{d as ActionableCard,p as ActionableText,c as Card,u as Carousel,l as MultipleText,n as SingleText,M as default};
//# sourceMappingURL=SystemResponse.story.57449a1d.js.map