import{j as a,aq as s,r as l,c as t,F as c,P as d,w as m}from"./index-97d1d3fe.js";import{u}from"./useQuery-beab7f21.js";import{U as p}from"./index-0c7e274d.js";/* empty css              */import"./jsx-runtime_commonjs-proxy-4ae2505d.js";import"./Dialog-25d51f56.js";const f=({children:r,className:e=""})=>a("div",{style:{paddingTop:"20px",paddingBottom:"20px"},className:`card card_cnt ${e}`,children:r});function N(){const{id:r}=s(),[e,n]=l.useState({media_id:null,original_url:null});return u({queryKey:["FOOD",r],queryFn:()=>m.food(r??""),enabled:!!parseInt(r??""),onSuccess:i=>{var o;console.log(i),n({...e,original_url:((o=i.data.media)==null?void 0:o.original_url)??""})}}),t(c,{children:[a(d,{children:r?"Update food":"Create new food"}),a(f,{children:a("form",{action:"",className:"form-container",children:a("div",{className:"d-flex justify-content-center",children:t("div",{className:"image-place",children:[(e==null?void 0:e.original_url)&&a("img",{className:"image",src:(e==null?void 0:e.original_url)??"",alt:""}),a("div",{className:"image-input-btn d-flex justify-content-center align-items-center",children:a(p,{image:e,setImage:n})})]})})})})]})}export{N as default};
