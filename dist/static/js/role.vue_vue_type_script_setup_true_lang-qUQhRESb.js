import{R as m}from"./index-OsKVQ-Xt.js";import{d as V,r as b,b as a,e as r,c as u,w as e,i as p,h as o,F as w,B as g,g as x,l as B,k as C}from"./index-1OSFatVP.js";const O=V({__name:"role",props:{formInline:{default:()=>({username:"",nickname:"",roleOptions:[],ids:[]})}},setup(d){const n=b(d.formInline);return(I,t)=>{const _=a("el-input"),s=a("el-form-item"),i=a("el-option"),c=a("el-select"),f=a("el-row"),k=a("el-form");return r(),u(k,{model:n.value},{default:e(()=>[o(f,{gutter:30},{default:e(()=>[o(p(m),null,{default:e(()=>[o(s,{label:"用户昵称",prop:"nickname"},{default:e(()=>[o(_,{modelValue:n.value.nickname,"onUpdate:modelValue":t[0]||(t[0]=l=>n.value.nickname=l),disabled:""},null,8,["modelValue"])]),_:1})]),_:1}),o(p(m),null,{default:e(()=>[o(s,{label:"角色列表",prop:"ids"},{default:e(()=>[o(c,{modelValue:n.value.ids,"onUpdate:modelValue":t[1]||(t[1]=l=>n.value.ids=l),placeholder:"请选择",class:"w-full",clearable:"",multiple:""},{default:e(()=>[(r(!0),C(w,null,B(n.value.roleOptions,(l,v)=>(r(),u(i,{key:v,value:l.id,label:l.name},{default:e(()=>[x(g(l.name),1)]),_:2},1032,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])}}});export{O as _};