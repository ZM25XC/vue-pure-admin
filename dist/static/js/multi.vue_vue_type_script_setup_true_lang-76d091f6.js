import{R as h}from"./index-901d205d.js";import{T as C,E as g}from"./index.esm-55ccaf0b.js";import{d as R,r as w,aW as y,a as E,b as V,e as l,c as u,w as d,k as b,F as k,l as x,u as r,i as B,g as i}from"./index-cc64e5e0.js";const L={class:"wangeditor"},c="default",T=R({name:"MultiEditor",__name:"multi",setup(U){const f=[{value:"<p>测试一</p>"},{value:"<p>测试二</p>"},{value:"<p>测试三</p>"},{value:"<p>测试四</p>"}],o=w([]);f.forEach(e=>{o.value.push({value:e.value,editorRef:y()})});const p={excludeKeys:"fullScreen"},m={placeholder:"请输入内容..."},v=(e,n)=>{o.value[n].editorRef=e};return E(()=>o.value.map(e=>{e.editorRef!=null&&e.editorRef.destroy()})),(e,n)=>{const _=V("el-row");return l(),u(_,{gutter:30,justify:"space-around"},{default:d(()=>[(l(!0),b(k,null,x(o.value,(t,s)=>(l(),u(r(h),{value:11,key:s},{default:d(()=>[B("div",L,[i(r(C),{editor:t.editorRef,defaultConfig:p,mode:c,style:{"border-bottom":"1px solid #ccc"}},null,8,["editor"]),i(r(g),{modelValue:t.value,"onUpdate:modelValue":a=>t.value=a,defaultConfig:m,mode:c,style:{height:"300px","overflow-y":"hidden"},onOnCreated:a=>v(a,s)},null,8,["modelValue","onUpdate:modelValue","onOnCreated"])])]),_:2},1024))),128))]),_:1})}}});export{T as _};
