import{d as b,E as k,r as w,ds as u,b as a,f as d,c as x,w as t,ah as i,h as C,i as l,t as V,g as m,F as B,x as S,m as P,ay as z,D,dD as N}from"./index-3m0KmRGm.js";const U={class:"card-header"},H=b({name:"PermissionPage",__name:"index",setup(E){var n;const o=k(()=>({width:"85vw",justifyContent:"start"})),s=w((n=u())==null?void 0:n.username),_=[{value:"admin",label:"管理员角色"},{value:"common",label:"普通角色"}];function p(){u().loginByUsername({username:s.value,password:"admin123"}).then(r=>{r.success&&(z().removeItem("async-routes"),D().clearAllCachePage(),N())})}return(r,c)=>{const v=a("el-tag"),f=a("el-option"),y=a("el-select"),g=a("el-card"),h=a("el-space");return d(),x(h,{direction:"vertical",size:"large"},{default:t(()=>[l(v,{style:i(o.value),size:"large",effect:"dark"},{default:t(()=>[C(" 模拟后台根据不同角色返回对应路由，观察左侧菜单变化（管理员角色可查看系统管理菜单、普通角色不可查看系统管理菜单） ")]),_:1},8,["style"]),l(g,{shadow:"never",style:i(o.value)},{header:t(()=>[m("div",U,[m("span",null,"当前角色："+V(s.value),1)])]),default:t(()=>[l(y,{modelValue:s.value,"onUpdate:modelValue":c[0]||(c[0]=e=>s.value=e),onChange:p},{default:t(()=>[(d(),P(B,null,S(_,e=>l(f,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1},8,["style"])]),_:1})}}});export{H as default};