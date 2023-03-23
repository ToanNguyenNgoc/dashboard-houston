import{j as e,I as N,r as x,a4 as I,F as _,b as i,a5 as U,P as E}from"./index-b6841ae3.js";import{u as O}from"./useQuery-4fcc4ac8.js";import{g as H,a as T,s as V,S as j,r as D,c as M,b as W,u as K,e as Q,f as A,C as J}from"./branch-select-003ef01b.js";import{_ as X}from"./TransitionGroupContext-2ca2a48c.js";import{c as z}from"./IconButton-76dab406.js";import{a as Y,u as Z,C as G,L as w}from"./usePost-8065c0df.js";import"./Transition-8b1a79cc.js";function ee(s){let t=[];for(var a=0;a<(s==null?void 0:s.length);a++)t.indexOf(s[a])===-1&&t.push(s[a]);return t}const se=z(e("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),te=z(e("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),oe=z(e("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox");function ae(s){return T("MuiCheckbox",s)}const ce=H("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),F=ce,ne=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],re=s=>{const{classes:t,indeterminate:a,color:n}=s,l={root:["root",a&&"indeterminate",`color${M(n)}`]},r=A(l,ae,t);return N({},t,r)},ie=V(j,{shouldForwardProp:s=>D(s)||s==="classes",name:"MuiCheckbox",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:a}=s;return[t.root,a.indeterminate&&t.indeterminate,a.color!=="default"&&t[`color${M(a.color)}`]]}})(({theme:s,ownerState:t})=>N({color:(s.vars||s).palette.text.secondary},!t.disableRipple&&{"&:hover":{backgroundColor:s.vars?`rgba(${t.color==="default"?s.vars.palette.action.activeChannel:s.vars.palette.primary.mainChannel} / ${s.vars.palette.action.hoverOpacity})`:W(t.color==="default"?s.palette.action.active:s.palette[t.color].main,s.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},t.color!=="default"&&{[`&.${F.checked}, &.${F.indeterminate}`]:{color:(s.vars||s).palette[t.color].main},[`&.${F.disabled}`]:{color:(s.vars||s).palette.action.disabled}})),le=e(te,{}),de=e(se,{}),me=e(oe,{}),ue=x.forwardRef(function(t,a){var n,l;const r=K({props:t,name:"MuiCheckbox"}),{checkedIcon:f=le,color:C="primary",icon:p=de,indeterminate:o=!1,indeterminateIcon:c=me,inputProps:d,size:m="medium",className:u}=r,P=X(r,ne),y=o?c:p,g=o?c:f,S=N({},r,{color:C,indeterminate:o,size:m}),b=re(S);return e(ie,N({type:"checkbox",inputProps:N({"data-indeterminate":o},d),icon:x.cloneElement(y,{fontSize:(n=y.props.fontSize)!=null?n:m}),checkedIcon:x.cloneElement(g,{fontSize:(l=g.props.fontSize)!=null?l:m}),ownerState:S,ref:a,className:Q(b.root,u)},P,{classes:b}))}),he=ue;function pe(s){var p;const{permissions:t,setPermissions:a}=s,{data:n}=O({queryKey:["PERMISSION_CPN"],queryFn:()=>I.permissions(),refetchOnWindowFocus:!1}),l=(p=n==null?void 0:n.data)==null?void 0:p.map(o=>{const c=o.permission_path.split(".")[1];return{...o,path:c}}),r=ee(l==null?void 0:l.map(o=>o.path)),f=r==null?void 0:r.map(o=>{const c=l.filter(d=>d.path===o);return{title:o,group:c}}),C=o=>{a&&a(c=>c.includes(o)?c.filter(d=>d!==o):[...c,o])};return e(_,{children:i("div",{className:"permission-cnt",children:[e("div",{className:"per-header",children:i("ul",{className:"list-item",children:[e("li",{className:"item",children:"Find all"}),e("li",{className:"item",children:"Create"}),e("li",{className:"item",children:"Find one"}),e("li",{className:"item",children:"Update"}),e("li",{className:"item",children:"Delete"})]})}),e("div",{className:"per-body",children:f==null?void 0:f.map((o,c)=>{var d;return i("div",{className:"per-body-item",children:[e("div",{className:"item-name",children:e("span",{children:o.title})}),e("ul",{className:"item-check-list",children:(d=o.group)==null?void 0:d.map(m=>i("li",{className:"item-check",children:[e(he,{checked:t==null?void 0:t.includes(m.id),onChange:()=>C(m.id),color:"success"}),e("div",{className:"item-hover",children:m.permission_path})]},m.id))})]},c)})})]})})}function ye(){var b;const t=U().id,{handle:a,result:n,onCloseNoti:l}=Y(),{register:r,formState:f,handleSubmit:C,setValue:p}=Z(),[o,c]=x.useState([]),[d,m]=x.useState(!0),{data:u,isFetching:P,refetch:y}=O({queryKey:["ROLE_ID",t],queryFn:()=>I.roleById(t),enabled:!!t,refetchOnWindowFocus:!1,onSuccess(h){var v,k,$,R,q,B;p("title",(v=h.data)==null?void 0:v.title),p("description",(k=h.data)==null?void 0:k.description),p("status",($=h.data)==null?void 0:$.status),m((R=h.data)==null?void 0:R.status),c((B=(q=h.data)==null?void 0:q.permissions)==null?void 0:B.map(L=>L.id))}}),g=h=>{m(h.target.checked)},S=async h=>{var k;const v={...h,permissions:o,status:d};u!=null&&u.data?await a({handleFn:()=>I.putRole(t,v),messageSuccess:`Update role ${(k=u==null?void 0:u.data)==null?void 0:k.title} success`}):await a({handleFn:()=>I.postRole(v),messageSuccess:"Create role success"})};return i(_,{children:[e(E,{children:t?`Thay đổi quyền ${(b=u==null?void 0:u.data)==null?void 0:b.title}`:"Tạo quyền"}),e(G,{onClose:l,open:n.open,message:n.message,severity:n.messageColor}),i("div",{className:"card ",children:[e("div",{className:"role-form-cnt",children:i("form",{onSubmit:C(S),className:"form",children:[i("div",{className:"form_head",children:[e(w,{title:"Save",size:"large",color:"success",type:"submit",load:n.load}),e(w,{title:"Restore",size:"large",variant:"outlined",color:"inherit",type:"button",onClick:y,style:{marginLeft:"8px"},load:P})]}),i("div",{className:"form_body",children:[i("div",{className:"form-row",children:[e("label",{className:"form-label required",children:"Name"}),e("input",{type:"text",...r("title",{required:!0}),className:"form-control form-control-solid"})]}),i("div",{className:"form-row",children:[e("label",{className:"form-label required",children:"Description"}),e("input",{...r("description",{required:!0}),type:"text",className:"form-control form-control-solid"})]}),i("div",{className:"form-row",children:[e("label",{className:"form-label required",children:"Status"}),e(J,{checked:d,onChange:g})]})]})]})}),e("div",{className:"card-body py-3",children:e(pe,{permissions:o,setPermissions:c})})]})]})}export{ye as default};