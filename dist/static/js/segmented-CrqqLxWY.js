import{d as R,a as h,n as $,b as L,w as o,e as u,f as T,l,h as e,g as c,t as U,u as s,N as z,L as O,C as q,D as A,_ as F}from"./index-BXHkKmv3.js";import{d as w}from"./home-filled-NADQtN-e.js";import{u as g}from"./hooks-CFzL8YXt.js";import{R as t}from"./index-CWa_ux6P.js";const n=m=>(q("data-v-e38a1938"),m=m(),A(),m),G={class:"card-header"},H=n(()=>l("span",{style:{"font-size":"16px","font-weight":"800"}}," 分段控制器 ",-1)),J={class:"mb-2"},K={class:"text-primary"},M=n(()=>l("p",{class:"mb-2"},"tooltip 提示",-1)),P=n(()=>l("p",{class:"mb-2"},"change 事件",-1)),Q=n(()=>l("p",{class:"mb-2"},"禁用",-1)),W=n(()=>l("p",{class:"mb-2"},"block 属性(将宽度调整为父元素宽度)",-1)),X=n(()=>l("p",{class:"mb-2"},"可设置图标",-1)),Y=n(()=>l("p",{class:"mb-2"},"只设置图标",-1)),Z=n(()=>l("p",{class:"mb-2"},"自定义渲染",-1)),ee=R({name:"Segmented",__name:"segmented",setup(m){const _=h(4),r=h("default"),a=h(),x=[{label:"周一"},{label:"周二"},{label:"周三"},{label:"周四"},{label:"周五"}],V=[{label:"周一",tip:"周一启航，新的篇章"},{label:"周二",tip:"周二律动，携手共进"},{label:"周三",tip:"周三昂扬，激情不减"},{label:"周四",tip:"周四精进，事半功倍"},{label:"周五",tip:"周五喜悦，收尾归档"}],C=[{label:"周一"},{label:"周二"},{label:"周三",disabled:!0},{label:"周四"},{label:"周五",disabled:!0}],I=[{label:"周一"},{label:"周二"},{label:"周三"},{label:"周四"},{label:"周五喜悦，收尾归档，周末倒计时",tip:"周五喜悦，收尾归档，周末倒计时"}],S=[{label:"周一",icon:w},{label:"周二"},{label:"周三",icon:"ri:terminal-window-line"},{label:"周四"},{label:"周五",icon:"streamline-emojis:2"}],y=[{icon:w},{icon:"ri:terminal-window-line"},{icon:"streamline-emojis:cow-face"},{icon:"streamline-emojis:airplane"},{icon:"streamline-emojis:2"}],j=[{label:()=>e("div",null,[z(g(w),{class:"m-auto mt-1 w-[18px] h-[18px]"}),e("p",null,[c("周一")])])},{label:()=>e("div",null,[z(g("ri:terminal-window-line"),{class:"m-auto mt-1 w-[18px] h-[18px]"}),e("p",null,[c("周二")])])},{label:()=>e("div",null,[z(g("streamline-emojis:cow-face"),{class:"m-auto mt-1 w-[18px] h-[18px]"}),e("p",null,[c("周三")])])}],k=[{label:"周一",value:1},{label:"周二",value:2},{label:"周三",value:3}];function B({index:b,option:p}){const{label:d,value:v}=p;O(`当前选中项索引为：${b}，名字为${d}，值为${v}`,{type:"success"})}return $(r,b=>a.value=r.value),(b,p)=>{const d=u("el-radio"),v=u("el-radio-group"),N=u("el-space"),i=u("el-divider"),D=u("el-scrollbar"),E=u("el-card");return T(),L(E,{shadow:"never"},{header:o(()=>[l("div",G,[e(N,{wrap:"",size:40},{default:o(()=>[H,e(v,{modelValue:r.value,"onUpdate:modelValue":p[0]||(p[0]=f=>r.value=f),size:"small"},{default:o(()=>[e(d,{value:"large"},{default:o(()=>[c("大尺寸")]),_:1}),e(d,{value:"default"},{default:o(()=>[c("默认尺寸")]),_:1}),e(d,{value:"small"},{default:o(()=>[c("小尺寸")]),_:1})]),_:1},8,["modelValue"])]),_:1})])]),default:o(()=>[e(D,null,{default:o(()=>[l("p",J,[c(" 基础用法（v-model）"),l("span",K,U(x[_.value].label),1)]),e(s(t),{modelValue:_.value,"onUpdate:modelValue":p[1]||(p[1]=f=>_.value=f),options:x,size:a.value},null,8,["modelValue","size"]),e(i),M,e(s(t),{options:V,size:a.value},null,8,["size"]),e(i),P,e(s(t),{options:k,size:a.value,onChange:B},null,8,["size"]),e(i),Q,e(s(t),{options:C,size:a.value},null,8,["size"]),e(i),W,e(s(t),{options:I,block:"",size:a.value},null,8,["size"]),e(i),X,e(s(t),{options:S,size:a.value},null,8,["size"]),e(i),Y,e(s(t),{options:y,size:a.value},null,8,["size"]),e(i),Z,e(s(t),{options:j,size:a.value},null,8,["size"])]),_:1})]),_:1})}}}),te=F(ee,[["__scopeId","data-v-e38a1938"]]);export{te as default};
