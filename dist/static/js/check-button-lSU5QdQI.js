var Z=Object.defineProperty,ee=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var L=(n,c,a)=>c in n?Z(n,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[c]=a,U=(n,c)=>{for(var a in c||(c={}))ae.call(c,a)&&L(n,a,c[a]);if(D)for(var a of D(c))se.call(c,a)&&L(n,a,c[a]);return n},S=(n,c)=>ee(n,le(c));import{d as oe,r as u,aj as te,c as j,w as l,b as i,e as g,f as d,g as o,h as e,k as H,l as J,E as G,B as T,F as K,i as de,an as ce,A as ne,p as ue,q as ie,_ as re}from"./index-1OSFatVP.js";const _=n=>(ue("data-v-60a25134"),n=n(),ie(),n),_e={class:"card-header"},be={class:"font-medium"},me=_(()=>d("br",null,null,-1)),pe=_(()=>d("p",{class:"mb-2"},"单选（紧凑风格的按钮样式）",-1)),fe=_(()=>d("p",{class:"mb-2"},"单选（带有边框）",-1)),he=_(()=>d("p",{class:"mb-2"},"单选（自定义内容）",-1)),ve={class:"flex"},ke={class:"flex"},Ve={class:"flex"},ge=_(()=>d("p",{class:"mb-2"},"多选（紧凑风格的按钮样式）",-1)),ze=_(()=>d("p",{class:"mb-2"},"多选（带有边框）",-1)),we=_(()=>d("p",{class:"mb-2"},"多选（来点不一样的体验）",-1)),xe={class:"flex"},Ce={class:"flex"},ye={class:"flex"},Be=_(()=>d("p",null,"可控制间距的按钮样式",-1)),Ie=_(()=>d("p",{class:"mb-2"},"单选",-1)),Ue={class:"mb-2 mt-4"},Se=_(()=>d("p",{class:"mb-2"},"单个可选按钮",-1)),je=oe({name:"CheckButton",__name:"check-button",setup(n){const c=u(20),a=u("default"),b=u(),z=u(!0),O=u("wait"),$=u("complete"),N=u("progress"),E=u(["apple","tomato"]),F=u(["cucumber","onion","blueberry"]),M=u(["tomato","watermelon","strawberry"]),w=u([{title:"等待中",checked:!1},{title:"进行中",checked:!0},{title:"已完成",checked:!1}]),x=u({});function P(m,t){if(a.value==="disabled")return;x.value[t]=Object.assign(S(U({},m),{checked:!m.checked})),w.value.map(p=>p.checked=!1),w.value[t].checked=x.value[t].checked;const{title:r,checked:h}=x.value[t];ne(h?`已选中${r}`:`取消选中${r}`,{type:"success"})}const C=u([{title:"苹果",checked:!0},{title:"西红柿",checked:!0},{title:"香蕉",checked:!1}]),q=u({});function Q(m,t){a.value!=="disabled"&&(q.value[t]=Object.assign(S(U({},m),{checked:!m.checked})),C.value[t].checked=q.value[t].checked)}function R(){a.value!=="disabled"&&(z.value=!z.value)}return te(a,m=>m==="disabled"?b.value="default":b.value=a.value),(m,t)=>{const r=i("el-radio"),h=i("el-radio-group"),p=i("el-radio-button"),f=i("el-divider"),v=i("IconifyIconOnline"),k=i("el-checkbox-button"),y=i("el-checkbox-group"),B=i("el-checkbox"),W=i("el-slider"),I=i("el-check-tag"),A=i("el-space"),X=i("el-card");return g(),j(X,{shadow:"never"},{header:l(()=>[d("div",_e,[d("span",be,[o(" 可选按钮 "),me,e(h,{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),size:"small"},{default:l(()=>[e(r,{label:"large"},{default:l(()=>[o("大尺寸")]),_:1}),e(r,{label:"default"},{default:l(()=>[o("默认尺寸")]),_:1}),e(r,{label:"small"},{default:l(()=>[o("小尺寸")]),_:1}),e(r,{label:"disabled"},{default:l(()=>[o("禁用")]),_:1})]),_:1},8,["modelValue"])])])]),default:l(()=>[pe,e(h,{modelValue:O.value,"onUpdate:modelValue":t[1]||(t[1]=s=>O.value=s),size:b.value,disabled:a.value==="disabled"},{default:l(()=>[e(p,{label:"wait"},{default:l(()=>[o("等待中")]),_:1}),e(p,{label:"progress"},{default:l(()=>[o("进行中")]),_:1}),e(p,{label:"complete"},{default:l(()=>[o("已完成")]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(f),fe,e(h,{modelValue:$.value,"onUpdate:modelValue":t[2]||(t[2]=s=>$.value=s),size:b.value,disabled:a.value==="disabled"},{default:l(()=>[e(r,{label:"wait",border:""},{default:l(()=>[o("等待中")]),_:1}),e(r,{label:"progress",border:""},{default:l(()=>[o("进行中")]),_:1}),e(r,{label:"complete",border:""},{default:l(()=>[o("已完成")]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(f),he,e(h,{modelValue:N.value,"onUpdate:modelValue":t[3]||(t[3]=s=>N.value=s),size:b.value,disabled:a.value==="disabled"},{default:l(()=>[e(p,{label:"wait"},{default:l(()=>[d("span",ve,[e(v,{icon:"ri:progress-8-fill",class:"mr-1"}),o(" 等待中 ")])]),_:1}),e(p,{label:"progress"},{default:l(()=>[d("span",ke,[e(v,{icon:"ri:progress-6-line",class:"mr-1"}),o(" 进行中 ")])]),_:1}),e(p,{label:"complete"},{default:l(()=>[d("span",Ve,[e(v,{icon:"ri:progress-8-line",class:"mr-1"}),o(" 已完成 ")])]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(f),ge,e(y,{modelValue:E.value,"onUpdate:modelValue":t[4]||(t[4]=s=>E.value=s),size:b.value,disabled:a.value==="disabled"},{default:l(()=>[e(k,{label:"apple"},{default:l(()=>[o("苹果")]),_:1}),e(k,{label:"tomato"},{default:l(()=>[o("西红柿")]),_:1}),e(k,{label:"banana"},{default:l(()=>[o("香蕉")]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(f),ze,e(y,{modelValue:F.value,"onUpdate:modelValue":t[5]||(t[5]=s=>F.value=s),size:b.value,disabled:a.value==="disabled"},{default:l(()=>[e(B,{label:"cucumber",border:""},{default:l(()=>[o("黄瓜")]),_:1}),e(B,{label:"onion",border:""},{default:l(()=>[o("洋葱")]),_:1}),e(B,{label:"blueberry",border:""},{default:l(()=>[o("蓝莓")]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(f),we,e(y,{modelValue:M.value,"onUpdate:modelValue":t[6]||(t[6]=s=>M.value=s),class:"pure-checkbox",size:b.value,disabled:a.value==="disabled"},{default:l(()=>[e(k,{label:"tomato"},{default:l(()=>[d("span",xe,[e(v,{icon:"streamline-emojis:tomato",class:"mr-1"}),o(" 番茄 ")])]),_:1}),e(k,{label:"watermelon"},{default:l(()=>[d("span",Ce,[e(v,{icon:"streamline-emojis:watermelon-1",class:"mr-1"}),o(" 西瓜 ")])]),_:1}),e(k,{label:"strawberry"},{default:l(()=>[d("span",ye,[e(v,{icon:"streamline-emojis:strawberry-1",class:"mr-1"}),o(" 草莓 ")])]),_:1})]),_:1},8,["modelValue","size","disabled"]),e(f),Be,e(W,{modelValue:c.value,"onUpdate:modelValue":t[7]||(t[7]=s=>c.value=s),class:"mb-2 !w-[300px]","show-tooltip":!1,disabled:a.value==="disabled"},null,8,["modelValue","disabled"]),Ie,e(A,{wrap:"",size:c.value},{default:l(()=>[(g(!0),H(K,null,J(w.value,(s,V)=>(g(),j(I,{key:V,class:G(["select-none",a.value==="disabled"&&"tag-disabled",s.checked&&"is-active"]),checked:s.checked,onChange:Y=>P(s,V)},{default:l(()=>[o(T(s.title),1)]),_:2},1032,["class","checked","onChange"]))),128))]),_:1},8,["size"]),d("p",Ue," 多选 "+T(de(ce)(C.value.filter(s=>s.checked),"title")),1),e(A,{wrap:"",size:c.value},{default:l(()=>[(g(!0),H(K,null,J(C.value,(s,V)=>(g(),j(I,{key:V,class:G(["select-none",a.value==="disabled"&&"tag-disabled",s.checked&&"is-active"]),checked:s.checked,onChange:Y=>Q(s,V)},{default:l(()=>[o(T(s.title),1)]),_:2},1032,["class","checked","onChange"]))),128))]),_:1},8,["size"]),e(f),Se,e(I,{class:G(["select-none",a.value==="disabled"&&"tag-disabled",z.value&&"is-active"]),checked:z.value,onChange:R},{default:l(()=>[o(" 一个人也要努力 😊 ")]),_:1},8,["class","checked"])]),_:1})}}}),Oe=re(je,[["__scopeId","data-v-60a25134"]]);export{Oe as default};