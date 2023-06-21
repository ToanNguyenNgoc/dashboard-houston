import{o as u,c as s,F as p,j as e,P as f,e as x,K as N,y as b,I as w,w as g}from"./index-c60e490b.js";import{u as v}from"./useQuery-9354becc.js";import{d as y}from"./Edit-a01af978.js";import{s as k}from"./string-avatar-ff3eebaf.js";import{d as n}from"./dayjs.min-ba05d44e.js";import{A}from"./Avatar-288d54a9.js";import"./jsx-runtime_commonjs-proxy-133f3eab.js";function H(){var l;const m=u(),{data:t}=v({queryKey:["PAGE_ACCOUNTS"],queryFn:()=>g.accounts(),refetchOnWindowFocus:!1});return s(p,{children:[e(f,{children:"Accounts"}),s("div",{className:"card card-account",children:[s("div",{className:"card-header border-0 pt-5",children:[e("h3",{className:"card-title align-items-start flex-column"}),e("div",{className:"card-toolbar",children:s(x,{to:{pathname:"form"},className:"btn btn-sm btn-light-primary",children:[e(N,{path:"/media/icons/duotune/arrows/arr075.svg",className:"svg-icon-2"}),"Tạo mới"]})})]}),e("div",{className:"card-body py-3",children:e("div",{className:"table-responsive",children:s("table",{className:"table align-middle gs-0 gy-4",children:[e("thead",{children:s("tr",{className:"fw-bold text-muted bg-light",children:[e("th",{className:"min-w-60px",children:"Avatar"}),e("th",{className:"ps-4 min-w-200px rounded-start",children:"Fullname"}),e("th",{className:"min-w-125px",children:"Email"}),e("th",{className:"min-w-125px",children:"Telephone"}),e("th",{className:"min-w-200px",children:"Branch"}),e("th",{className:"min-w-200px",children:"Roles"}),e("th",{className:"min-w-125px",children:"Created at"}),e("th",{className:"min-w-125px",children:"Update at"}),e("th",{className:"min-w-100px",children:"Status"}),e("th",{className:"min-w-80px",children:"Detail"})]})}),e("tbody",{children:(l=t==null?void 0:t.data)==null?void 0:l.map((a,i)=>{var d,c,r;return s("tr",{children:[e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:e(A,{...k(a.fullname),alt:"",src:((d=a.media)==null?void 0:d.original_url)??""})})}),e("td",{children:e("div",{className:"d-flex align-items-center",children:e("div",{className:"d-flex justify-content-start flex-column",children:e("span",{className:"text-dark fw-bold text-hover-primary mb-1 fs-6",children:a.fullname})})})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:a.email})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:a.telephone})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:(c=a.branch)==null?void 0:c.name})}),e("td",{children:(r=a.roles)==null?void 0:r.map((o,h)=>e("span",{className:"badge badge-success role-item",children:o.title},h))}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:n(a.created_at).format("DD/MM/YYYY HH:mm")})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:n(a.updated_at).format("DD/MM/YYYY HH:mm")})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:e(b,{checked:a.status})})}),e("td",{children:e(w,{size:"medium",style:{backgroundColor:"var(--kt-gray-200)"},onClick:()=>m(`form/${a.id}`),children:e(y,{color:"success"})})})]},i)})})]})})})]})]})}export{H as default};
