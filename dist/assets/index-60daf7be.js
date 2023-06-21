import{k as w,l as q,ac as x,a3 as S,a4 as _,w as l,j as e,c as s,au as y,r as h,A as D,F as b,P as O,q as Y,s as A,y as E,av as g,I as N}from"./index-97d1d3fe.js";import{u as v}from"./useMutation-5bdb14ff.js";import{u as F}from"./useQuery-beab7f21.js";import{d as K}from"./Edit-9c67022c.js";import{d as L}from"./Delete-2a67f5a8.js";import{d as M}from"./Sync-89914c50.js";import{D as T}from"./Dialog-25d51f56.js";import"./jsx-runtime_commonjs-proxy-4ae2505d.js";const H=w({name:q().required("Food category name is required")}),k=({open:t,setOpen:r,id:a,query:n})=>{const d=x(),{handleSubmit:p,register:i,reset:f,setValue:m}=S({resolver:_(H),defaultValues:{name:"",description:""}});F({queryKey:["FOOD_CATE",a],queryFn:()=>l.foodCate(a??0),enabled:!!(t&&a),onSuccess:o=>{m("name",o.data.name),m("description",o.data.description??"")}});const{mutate:C,isLoading:u}=v({mutationKey:"",mutationFn:o=>a?l.putFoodCate(a??0,o):l.postFoodCate(o),onSuccess:()=>{d.invalidateQueries({queryKey:["FOOD_CATE",n]}),r(!1),f()}});return e(T,{open:t,onClose:()=>r(!1),children:s("div",{className:"food-cate-form",children:[e("div",{className:"title",children:a?"Create new category":"Update category"}),s("form",{onSubmit:p(o=>C(o)),autoComplete:"off",children:[s("div",{className:"form_column",children:[e("label",{className:"form-label required",children:"Category name"}),e("input",{type:"text",className:"form-control form-control-solid",...i("name",{required:!0})})]}),s("div",{className:"form_column",children:[e("label",{className:"form-label required",children:"Description"}),e("textarea",{className:"form-control form-control-solid",...i("description",{required:!0})})]}),s("div",{className:"bottom",children:[e(y,{type:"button",variant:"contained",children:"Restore"}),e(y,{loading:u,type:"submit",variant:"contained",style:{backgroundColor:"var(--bs-green)"},children:"Save"})]})]})]})})};function G(){const{branch:t}=h.useContext(D),r={branch_id:t==null?void 0:t.id},{data:a}=F({queryKey:["FOOD_CATE",r],queryFn:()=>l.foodCates(r)}),n=(a==null?void 0:a.data)??[];return s(b,{children:[e(O,{children:"Food category"}),s("div",{className:"card card-account card-villa-cate",children:[e("div",{className:"card-header border-0 pt-5",children:e("div",{className:"card-toolbar",children:e(P,{query:r})})}),e("div",{className:"card-body py-3",children:e("div",{className:"table-responsive",children:s("table",{className:"table align-middle gs-0 gy-4",children:[e("thead",{children:s("tr",{className:"fw-bold text-muted bg-light",children:[e("th",{className:"ps-4 min-w-200px rounded-start",children:"Category name"}),e("th",{className:"min-w-80px",children:"Status"}),e("th",{className:"min-w-200px",children:"Description"}),e("th",{className:"min-w-150px",children:"Updated at"}),e("th",{className:"min-w-150px",children:"Created at"}),e("th",{className:"min-w-100px"})]})}),e("tbody",{children:n.map(d=>e(Q,{cate:d,query:r},d.id))})]})})})]})]})}const P=({query:t})=>{const[r,a]=h.useState(!1);return s(b,{children:[e(Y,{title:"Create new category",variant:"contained",onClick:()=>a(!0)}),e(k,{open:r,setOpen:a,query:t})]})},Q=({cate:t,query:r})=>{const[a,n]=h.useState(!1),d=x(),{handle:p}=A(),[i,f]=h.useState(t.status),m=c=>{p({handleFn:()=>l.putFoodCate(t.id,{status:c.target.checked})}),f(c.target.checked)},{mutate:C,isLoading:u}=v({mutationFn:c=>l.deleteFoodCate(c),onSuccess:()=>{d.invalidateQueries({queryKey:["FOOD_CATE",r]})}});return s(b,{children:[e(k,{open:a,setOpen:n,id:t.id,query:r}),s("tr",{children:[e("td",{children:e("div",{className:"d-flex align-items-center",children:e("span",{className:"text-dark fw-bold text-hover-primary mb-1 fs-6",children:t.name})})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:e(E,{onChange:m,checked:i})})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:t.description})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:g(t.updated_at).format("DD/MM/YYYY HH:mm")})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:g(t.created_at).format("DD/MM/YYYY HH:mm")})}),s("td",{children:[e(N,{size:"small",style:{backgroundColor:"var(--kt-gray-200)"},onClick:()=>n(!0),children:e(K,{color:"success"})}),e(N,{disabled:u,size:"small",style:{backgroundColor:"var(--kt-gray-200)",marginLeft:"8px"},onClick:()=>C(t.id),children:u?e(M,{color:"error"}):e(L,{color:"error"})})]})]},t.id)]})};export{G as default};
