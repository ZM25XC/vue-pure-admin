import{d as T,r as j,K as V,c as b,w as c,b as i,af as F,j as G,e as r,f as e,m as N,h as l,i as n,a1 as K,B,k as I,u as d,E as Y,al as Q,C as E,am as W,an as X,ao as ee,A as $,v as te,y as se,p as oe,q as ae,_ as ne}from"./index-WGKmNNf0.js";import{S as le}from"./sortable.esm-6WsHlDA5.js";import{_ as ie}from"./form.vue_vue_type_script_setup_true_lang-BU_hRE_p.js";import{d as ce}from"./plus-C98eNXam.js";import"./mock-BQHgPhlF.js";const re="/vue-pure-admin/static/jpg/1-CNu9tHLV.jpg",pe="/vue-pure-admin/static/jpg/2-Dn7NyzRJ.jpg",de="/vue-pure-admin/static/jpg/3-BNVYzMvF.jpg",ue={width:24,height:24,body:'<path fill="currentColor" d="M12 3c5.392 0 9.878 3.88 10.819 9c-.94 5.12-5.427 9-10.819 9c-5.392 0-9.878-3.88-10.818-9C2.122 6.88 6.608 3 12 3Zm0 16a9.005 9.005 0 0 0 8.778-7a9.005 9.005 0 0 0-17.555 0A9.005 9.005 0 0 0 12 19Zm0-2.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9Zm0-2a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z"/>'},me={width:24,height:24,body:'<path fill="currentColor" d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3Zm1 2H6v12h12V8ZM9 4v2h6V4H9Z"/>'},u=h=>(oe("data-v-cc9c60b8"),h=h(),ae(),h),_e={class:"card-header"},ve={class:"header-right"},he=u(()=>e("p",{class:"mb-4"},[l(" 综合示例"),e("span",{class:"text-[14px]"},[l(" （ "),e("span",{class:"text-[red]"},"自动上传"),l(" 、拖拽上传、拖拽排序、设置请求头、上传进度、大图预览、多选文件、最大文件数量、文件类型限制、文件大小限制、删除文件） ")])],-1)),ge={key:0,class:"mt-[35%] m-auto"},fe=u(()=>e("p",{class:"font-medium"},"文件上传中",-1)),xe=["onMouseenter"],ye=["src"],be=["onClick"],ke=["onClick"],we={title:"移除",class:"hover:text-[var(--el-color-danger)]"},Ce={key:0,effect:"dark",round:"",size:"large",type:"info",class:"img-name"},je={class:"text-[#fff] dark:text-black"},Ie=u(()=>e("p",{class:"el-upload__tip"}," 可拖拽上传最多3张单个不超过2MB且格式为jpeg/png/gif的图片 ",-1)),$e=u(()=>e("p",{class:"mb-4 mt-4"},[l(" 结合表单校验进行"),e("span",{class:"text-[red]"},"手动上传"),e("span",{class:"text-[14px]"}," （可先打开浏览器控制台找到Network，然后填写表单内容后点击点提交观察请求变化） ")],-1)),Se={class:"flex justify-between"},ze=u(()=>e("p",{class:"text-center"},"上传接口相关截图",-1)),Me={class:"flex flex-wrap"},Ve={class:"text-[red] text-[12px] flex flex-auto items-center justify-end"},Ne=u(()=>e("span",{class:"font-bold text-[18x]"}," 请不要上传重要信息 ",-1)),Be=T({name:"PureUpload",__name:"index",setup(h){const o=j([]),L=F(),m=j(0),g=j(!1),U=V(()=>X(o.value,"url")),A=V(()=>ee(o.value,"name","size")),Z=s=>new URL(Object.assign({"./imgs/1.jpg":re,"./imgs/2.jpg":pe,"./imgs/3.jpg":de})[`./imgs/${s}.jpg`],import.meta.url).href,S=Array.from({length:3}).map((s,t)=>Z(t+1)),D=s=>{if(!["image/jpeg","image/png","image/gif"].includes(s.type))return $("只能上传图片"),!1;if(s.size/1024/1024>2)return $("单个图片大小不能超过2MB"),!1},O=()=>{$("最多上传3张图片，请先删除在上传")},H=s=>{o.value.splice(o.value.indexOf(s),1)},J=s=>{m.value=o.value.findIndex(t=>t.uid===s.uid),g.value=!0},z=()=>document.querySelectorAll("#pure-upload-item"),R=s=>{var p,x,y;const t="el-upload-list",f=o.value.findIndex(_=>_.uid===s);(y=(x=(p=z())==null?void 0:p[f])==null?void 0:x.classList)==null||y.add(`${t}__item-actions`);const k=document.querySelector(`.${t}`);le.create(k,{handle:`.${t}__item`,onEnd:({newIndex:_,oldIndex:v})=>{const w=o.value[v];o.value.splice(v,1),o.value.splice(_,0,w),z().forEach(C=>{C.classList.remove(`${t}__item-actions`)})}})},q=()=>{[{name:"巴旦木.jpeg",type:"img"},{name:"恭喜发财.png",type:"img"},{name:"可爱动物.gif",type:"gif"},{name:"pure-upload.csv",type:"other"},{name:"pure-upload.txt",type:"other"}].forEach(s=>{te.get(`https://xiaoxian521.github.io/hyperlink/${s.type}/${s.name}`,{responseType:"blob"}).then(({data:t})=>{se(t,s.name)})})};return(s,t)=>{const f=i("el-link"),k=i("el-button"),p=i("IconifyIconOffline"),x=i("el-progress"),y=i("el-upload"),_=i("el-image-viewer"),v=i("el-divider"),w=i("el-image"),C=i("el-card"),P=G("tippy");return r(),b(C,{shadow:"never"},{header:c(()=>[e("div",_e,[N((r(),b(f,{href:"https://element-plus.org/zh-CN/component/upload.html",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:c(()=>[l(" 文件上传 ")]),_:1})),[[P,{content:"点击查看详细文档"}]]),e("span",ve,[n(k,{class:"ml-1",text:"",bg:"",onClick:q},{default:c(()=>[l(" 点击下载安全文件进行上传测试 ")]),_:1})])])]),default:c(()=>[he,N(e("p",{class:"mb-4"},B(A.value),513),[[K,o.value.length>0]]),n(y,{"file-list":o.value,"onUpdate:fileList":t[0]||(t[0]=a=>o.value=a),drag:"",multiple:"",class:"pure-upload","list-type":"picture-card",accept:"image/jpeg,image/png,image/gif",action:"https://run.mocky.io/v3/3aa761d7-b0b3-4a03-96b3-6168d4f7467b",limit:3,headers:{Authorization:"eyJhbGciOiJIUzUxMiJ9.admin"},"on-exceed":O,"before-upload":D},{file:c(({file:a})=>[a.status=="ready"||a.status=="uploading"?(r(),I("div",ge,[fe,n(x,{class:"mt-2","stroke-width":2,"text-inside":!0,"show-text":!1,percentage:a.percentage},null,8,["percentage"])])):(r(),I("div",{key:1,onMouseenter:Q(M=>R(a.uid),["stop"])},[e("img",{class:"el-upload-list__item-thumbnail select-none",src:a.url},null,8,ye),e("span",{id:"pure-upload-item",class:Y(["el-upload-list__item-actions",o.value.length>1&&"!cursor-move"])},[e("span",{title:"查看",class:"hover:text-primary",onClick:M=>J(a)},[n(p,{icon:d(ue),class:"hover:scale-125 duration-100"},null,8,["icon"])],8,be),e("span",{class:"el-upload-list__item-delete",onClick:M=>H(a)},[e("span",we,[n(p,{icon:d(me),class:"hover:scale-125 duration-100"},null,8,["icon"])])],8,ke)],2)],40,xe))]),default:c(()=>[n(p,{icon:d(ce),class:"m-auto mt-4",width:"30"},null,8,["icon"])]),_:1},8,["file-list","headers"]),g.value?(r(),b(_,{key:0,initialIndex:m.value,"url-list":U.value,"zoom-rate":1.2,"max-scale":7,"min-scale":.2,onClose:t[1]||(t[1]=a=>g.value=!1),onSwitch:t[2]||(t[2]=a=>m.value=a)},null,8,["initialIndex","url-list"])):E("",!0),(r(),b(W,{to:"body"},[o.value[m.value]&&g.value?(r(),I("div",Ce,[e("p",je,B(o.value[m.value].name),1)])):E("",!0)])),Ie,n(v),$e,e("div",Se,[n(ie),e("div",null,[ze,n(w,{class:"w-[200px] rounded-md",src:d(S)[0],"preview-src-list":d(S),fit:"cover"},null,8,["src","preview-src-list"])])]),n(v),e("div",Me,[e("p",null,[l(" 裁剪、上传头像请参考 "),e("span",{class:"font-bold text-[18x] cursor-pointer hover:text-[red]",onClick:t[3]||(t[3]=a=>d(L).push({name:"SystemUser"}))}," 系统管理-用户管理 "),l(" 表格操作栏中的上传头像功能 ")]),e("p",Ve,[l(" 免责声明：上传接口使用免费开源的 "),n(f,{href:"https://designer.mocky.io/",target:"_blank",style:{"font-size":"16px","font-weight":"800"}},{default:c(()=>[l("  Mocky  ")]),_:1}),Ne,l("，如果造成任何损失，我们概不负责 ")])])]),_:1})}}}),De=ne(Be,[["__scopeId","data-v-cc9c60b8"]]);export{De as default};
