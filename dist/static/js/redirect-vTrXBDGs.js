import{d as s,u as c,k as p,af as u,e as _}from"./index-DZLwq52W.js";const l=s({name:"Redirect",__name:"redirect",setup(i){const{currentRoute:r,replace:t}=u(),{params:a,query:n}=c(r),{path:e}=a,o=Array.isArray(e)?e.join("/"):e;return t({path:"/"+o,query:n}),(m,d)=>(_(),p("div"))}});export{l as default};