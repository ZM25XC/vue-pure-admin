import{S as c}from"./sortable.esm-6WsHlDA5.js";import{a as p,ab as i,h as r,e as u,y as d}from"./index-BXHkKmv3.js";import{a as m}from"./data-BJGYAv9w.js";function y(){const e=p(i(m,!0)),n=o=>{o.preventDefault(),d(()=>{const a=document.querySelector(".el-table__body-wrapper tbody");c.create(a,{animation:300,handle:".drag-btn",onEnd:({newIndex:t,oldIndex:l})=>{const s=e.value.splice(l,1)[0];e.value.splice(t,0,s)}})})};return{columns:[{label:"ID",prop:"id",cellRenderer:({row:o})=>r("div",{class:"flex items-center"},[r(u("iconify-icon-online"),{icon:"icon-park-outline:drag",class:"drag-btn cursor-grab",onMouseenter:a=>n(a)},null),r("p",{class:"ml-[16px]"},[o.id])])},{label:"日期",prop:"date"},{label:"姓名",prop:"name"}],dataList:e}}export{y as useColumns};
