var M=Object.defineProperty,y=Object.defineProperties;var V=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var v=(n,e,o)=>e in n?M(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,m=(n,e)=>{for(var o in e||(e={}))k.call(e,o)&&v(n,o,e[o]);if(c)for(var o of c(e))D.call(e,o)&&v(n,o,e[o]);return n},f=(n,e)=>y(n,V(e));import{a as u,p,h as t,F as E,e as r,B as F,a5 as S}from"./index-BXHkKmv3.js";import{a as j}from"./data-Dd4sCrbk.js";import{d as B}from"./edit-pen-Ci7W0xNM.js";import{d as I}from"./check-CIQVCvCT.js";function $(){const n=u({}),e=u(-1),o=u(j),s=p(()=>l=>{var a;return(a=n.value[l])==null?void 0:a.editing}),i=p(()=>(l,a=!1)=>["cursor-pointer","ml-2","transition","delay-100",a?["hover:scale-110","hover:text-red-500"]:s.value(l)&&["scale-150","text-red-500"]]),d=[{label:"姓名（可修改）",prop:"name",cellRenderer:({row:l,index:a})=>t("div",{class:"flex-bc w-full h-[32px]",onMouseenter:()=>e.value=a,onMouseleave:()=>g(a)},[s.value(a)?t(E,null,[t(r("el-input"),{modelValue:l.name,"onUpdate:modelValue":C=>l.name=C},null),t(r("iconify-icon-offline"),{icon:I,class:i.value(a),onClick:()=>b(a)},null)]):t("p",null,[l.name]),F(t(r("iconify-icon-offline"),{icon:B,class:i.value(a,!0),onClick:()=>h(l,a)},null),[[S,e.value===a&&!s.value(a)]])])},{label:"地址",prop:"address"}];function g(l){s.value[l]?e.value=l:e.value=-1}function h(l,a){n.value[a]=Object.assign(f(m({},l),{editing:!0}))}function b(l){n.value[l].editing=!1}return{columns:d,dataList:o}}export{$ as useColumns};
