import{T as f,E as m}from"./index.esm-DCPjOB7S.js";import{d as c,S as p,a as g,z as _,f as v,k as C,i as n,u as r}from"./index-BoJRq02v.js";const h={class:"wangeditor"},d="default",U=c({name:"picUpload",__name:"EditorUpload",setup(y){const a=p(),t=g("<p>仅提供代码参考，暂不可上传图片，可根据实际业务改写</p>"),s={excludeKeys:"fullScreen"},l={placeholder:"请输入内容...",MENU_CONF:{}};l.MENU_CONF.uploadImage={server:"",fieldName:"file",allowedFileTypes:["image/png","image/jpg","image/jpeg"],customInsert(e,o){e.data.url&&setTimeout(()=>{o(e.data.url)},2e3)}};const i=e=>{a.value=e};return _(()=>{const e=a.value;e!=null&&e.destroy()}),(e,o)=>(v(),C("div",h,[n(r(f),{editor:a.value,defaultConfig:s,mode:d,style:{"border-bottom":"1px solid #ccc"}},null,8,["editor"]),n(r(m),{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=u=>t.value=u),defaultConfig:l,mode:d,style:{height:"500px","overflow-y":"hidden"},onOnCreated:i},null,8,["modelValue"])]))}});export{U as _};
