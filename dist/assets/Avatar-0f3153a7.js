import{a5 as w,j as u,af as C,ae as I,ag as m,aj as n,r as p,ak as S,al as D,ao as M,ap as P}from"./index-ebcff714.js";const j=w(u("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function z(a){return C("MuiAvatar",a)}I("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const F=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],N=a=>{const{classes:e,variant:t,colorDefault:r}=a;return P({root:["root",t,r&&"colorDefault"],img:["img"],fallback:["fallback"]},z,e)},U=m("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(a,e)=>{const{ownerState:t}=a;return[e.root,e[t.variant],t.colorDefault&&e.colorDefault]}})(({theme:a,ownerState:e})=>n({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:a.typography.fontFamily,fontSize:a.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},e.variant==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius},e.variant==="square"&&{borderRadius:0},e.colorDefault&&n({color:(a.vars||a).palette.background.default},a.vars?{backgroundColor:a.vars.palette.Avatar.defaultBg}:{backgroundColor:a.palette.mode==="light"?a.palette.grey[400]:a.palette.grey[600]}))),L=m("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(a,e)=>e.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),_=m(j,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(a,e)=>e.fallback})({width:"75%",height:"75%"});function q({crossOrigin:a,referrerPolicy:e,src:t,srcSet:r}){const[s,l]=p.useState(!1);return p.useEffect(()=>{if(!t&&!r)return;l(!1);let i=!0;const o=new Image;return o.onload=()=>{i&&l("loaded")},o.onerror=()=>{i&&l("error")},o.crossOrigin=a,o.referrerPolicy=e,o.src=t,r&&(o.srcset=r),()=>{i=!1}},[a,e,t,r]),s}const E=p.forwardRef(function(e,t){const r=S({props:e,name:"MuiAvatar"}),{alt:s,children:l,className:i,component:o="div",imgProps:h,sizes:y,src:f,srcSet:v,variant:k="circular"}=r,x=D(r,F);let c=null;const R=q(n({},h,{src:f,srcSet:v})),b=f||v,A=b&&R!=="error",d=n({},r,{colorDefault:!A,component:o,variant:k}),g=N(d);return A?c=u(L,n({alt:s,src:f,srcSet:v,sizes:y,ownerState:d,className:g.img},h)):l!=null?c=l:b&&s?c=s[0]:c=u(_,{ownerState:d,className:g.fallback}),u(U,n({as:o,ownerState:d,className:M(g.root,i),ref:t},x,{children:c}))}),B=E;export{B as A};
