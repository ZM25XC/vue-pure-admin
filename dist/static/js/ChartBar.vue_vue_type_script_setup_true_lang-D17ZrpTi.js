var l=(s,a,t)=>new Promise((i,r)=>{var n=e=>{try{o(t.next(e))}catch(c){r(c)}},p=e=>{try{o(t.throw(e))}catch(c){r(c)}},o=e=>e.done?i(e.value):Promise.resolve(e.value).then(n,p);o((t=t.apply(s,a)).next())});import{d,ar as f,p as y,a as m,as as u,n as h,y as x,f as b,k as g}from"./index-BoJRq02v.js";const S=d({__name:"ChartBar",props:{requireData:{type:Array,default:()=>[]},questionData:{type:Array,default:()=>[]}},setup(s){const a=s,{isDark:t}=f(),i=y(()=>t.value?"dark":"light"),r=m(),{setOptions:n}=u(r,{theme:i});return h(()=>a,()=>l(this,null,function*(){yield x(),n({container:".bar-card",color:["#41b6ff","#e85f33"],tooltip:{trigger:"axis",axisPointer:{type:"none"}},grid:{top:"20px",left:"50px",right:0},legend:{data:["需求人数","提问数量"],textStyle:{color:"#606266",fontSize:"0.875rem"},bottom:0},xAxis:[{type:"category",data:["周一","周二","周三","周四","周五","周六","周日"],axisLabel:{fontSize:"0.875rem"},axisPointer:{type:"shadow"}}],yAxis:[{type:"value",axisLabel:{fontSize:"0.875rem"},splitLine:{show:!1}}],series:[{name:"需求人数",type:"bar",barWidth:10,itemStyle:{color:"#41b6ff",borderRadius:[10,10,0,0]},data:a.requireData},{name:"提问数量",type:"bar",barWidth:10,itemStyle:{color:"#e86033ce",borderRadius:[10,10,0,0]},data:a.questionData}]})}),{deep:!0,immediate:!0}),(p,o)=>(b(),g("div",{ref_key:"chartRef",ref:r,style:{width:"100%",height:"365px"}},null,512))}});export{S as _};
