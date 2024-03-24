import{d as x,a as g,b as C,w as e,e as n,f as b,l,g as s,h as t,u as a,t as y,c$ as v,C as T,D as w,_ as k}from"./index-BXHkKmv3.js";import{R as o}from"./index-BI7hIAOp.js";const p=c=>(T("data-v-547d9e4f"),c=c(),w(),c),P={class:"card-header"},z={class:"font-medium"},D=p(()=>l("p",{class:"mb-2"},"基础用法",-1)),I={class:"content"},V=p(()=>l("p",{class:"mb-2"},"自定义 Tooltip 内容",-1)),N={class:"mb-2"},S={class:"content"},Y=p(()=>l("b",null,"这是插槽写法: ",-1)),B=p(()=>l("p",{class:"mb-2"},"自定义 el-text 配置",-1)),M={class:"content"},R=p(()=>l("p",{class:"mb-2"},"自定义 VueTippy 配置",-1)),H={class:"content"},j=p(()=>l("p",{class:"mb-2"},"组件嵌套: 不需要省略的需设置 truncated 为 false",-1)),E={class:"content"},$=x({name:"PureText",__name:"text",setup(c){const u=g("自定义tooltip内容"),f=()=>{u.value="现在的时间是: "+v().format("YYYY-MM-DD HH:mm:ss")};return(q,A)=>{const r=n("el-link"),i=n("el-space"),d=n("el-divider"),m=n("el-button"),_=n("el-text"),h=n("el-card");return b(),C(h,{shadow:"never"},{header:e(()=>[l("div",P,[l("span",z,[s(" 文本省略，基于 "),t(r,{href:"https://element-plus.org/zh-CN/component/text.html",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:e(()=>[s(" el-text ")]),_:1}),s(" 和 "),t(r,{href:"https://vue-tippy.netlify.app/basic-usage",target:"_blank",style:{margin:"0 4px 5px","font-size":"16px"}},{default:e(()=>[s(" VueTippy ")]),_:1}),s(" 自动省略后显示 Tooltip 提示， 支持多行省略 ")])])]),default:e(()=>[D,t(i,{wrap:""},{default:e(()=>[l("ul",I,[l("li",null,[t(a(o),null,{default:e(()=>[s(" 测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1}),t(a(o),{lineClamp:2},{default:e(()=>[s(" 测试文本，这是一个稍微有点长的文本，lineClamp参数为2，即两行过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1})])])]),_:1}),t(d),V,l("div",N,[t(m,{onClick:f},{default:e(()=>[s(" 点击切换下方 Tooltip 内容 ")]),_:1})]),t(i,{wrap:""},{default:e(()=>[l("ul",S,[l("li",null,[t(a(o),{tippyProps:{content:u.value}},{default:e(()=>[s(" props写法 - 测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1},8,["tippyProps"])]),l("li",null,[t(a(o),null,{content:e(()=>[l("div",null,[Y,l("div",null,y(u.value),1)])]),default:e(()=>[s(" 插槽写法 - 测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1})])])]),_:1}),t(d),B,t(i,{wrap:""},{default:e(()=>[l("ul",M,[l("li",null,[t(a(o),{type:"primary",size:"large"},{default:e(()=>[s(" 测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1})]),l("li",null,[t(a(o),{lineClamp:4,type:"info"},{default:e(()=>[s(" 测试文本，这是一个非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长的文本，lineClamp参数为4，即四行过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1})])])]),_:1}),t(d),R,t(i,{wrap:""},{default:e(()=>[l("ul",H,[l("li",null,[t(a(o),{tippyProps:{offset:[0,-20],theme:"light",arrow:!1}},{default:e(()=>[s(" 偏移白色无箭头 - 测试文本，这是一个稍微有点长的文本，过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1})]),l("li",null,[t(a(o),{lineClamp:4,tippyProps:{followCursor:!0}},{default:e(()=>[s(" 鼠标跟随 - 测试文本，这是一个非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长，非常非常长的文本，lineClamp参数为4，即四行过长省略后，鼠标悬浮会有tooltip提示 ")]),_:1})])])]),_:1}),t(d),j,t(i,{wrap:""},{default:e(()=>[l("ul",E,[l("li",null,[t(a(o),{tag:"p",lineClamp:2},{default:e(()=>[s(" This is a paragraph. Paragraph start "),t(a(o),{truncated:!1},{default:e(()=>[s(" 【 This is ReText "),t(a(o),{tag:"sup",size:"small",truncated:!1},{default:e(()=>[s(" superscript 】 ")]),_:1})]),_:1}),t(_,null,{default:e(()=>[s(" 【 This is El-Text "),t(_,{tag:"sub",size:"small"},{default:e(()=>[s(" subscript 】 ")]),_:1})]),_:1}),t(_,{tag:"ins"},{default:e(()=>[s("【Inserted】")]),_:1}),t(_,{tag:"del"},{default:e(()=>[s("【Deleted】")]),_:1}),t(_,{tag:"mark"},{default:e(()=>[s("【Marked】")]),_:1}),s(" Paragraph end. ")]),_:1})])])]),_:1})]),_:1})}}}),J=k($,[["__scopeId","data-v-547d9e4f"]]);export{J as default};
