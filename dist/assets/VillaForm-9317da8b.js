import{aq as r,w as i,j as e,F as s,P as l}from"./index-ebcff714.js";import{u as d}from"./useQuery-a6480589.js";function u(){const a=r();return a.id,d({queryKey:["VILLA_ID",a.id],queryFn:()=>i.villaById(a.id??0,{includes:"category|branch|full_address"}),enabled:!!a.id,refetchOnWindowFocus:!1}),e(s,{children:e(l,{children:a.id?"Update villa":"Create new villa"})})}export{u as default};