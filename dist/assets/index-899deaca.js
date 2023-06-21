import{r as x,A as b,B as N,o as w,w as g,c as t,F as u,j as e,P as v,q as k,y,I as _}from"./index-c60e490b.js";import{u as A}from"./useQuery-9354becc.js";import{s as C}from"./string-avatar-ff3eebaf.js";import{d as Y}from"./Edit-a01af978.js";import{d as p}from"./dayjs.min-ba05d44e.js";import{A as P}from"./Avatar-288d54a9.js";import"./jsx-runtime_commonjs-proxy-133f3eab.js";function c(s){var l;return(l=parseInt(s))==null?void 0:l.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1.")}function M(){var i;const{branch:s}=x.useContext(b),[l]=N(a=>[a.isSPA]),r=w();let n;l||(n=s==null?void 0:s.id);const{data:d,isLoading:S}=A({queryKey:["VILLA_CATE",s.id],queryFn:()=>g.villa({branch_id:n}),refetchOnWindowFocus:!1});return t(u,{children:[e(v,{children:"Villas"}),t("div",{className:"card card-account",children:[t("div",{className:"card-header border-0 pt-5",children:[e("h3",{className:"card-title align-items-start flex-column"}),e("div",{className:"card-toolbar",children:e(k,{title:"Create new villa",onClick:()=>r("form")})})]}),e("div",{className:"card-body py-3",children:e("div",{className:"table-responsive",children:t("table",{className:"table align-middle gs-0 gy-4",children:[e("thead",{children:t("tr",{className:"fw-bold text-muted bg-light",children:[e("th",{className:"min-w-60px",children:"Thumbnail"}),e("th",{className:"min-w-250px",children:"Villa name"}),e("th",{className:"min-w-125px",children:"Category"}),e("th",{className:"min-w-125px",children:"Price"}),e("th",{className:"min-w-200px",children:"Branch"}),e("th",{className:"min-w-80px",children:"Acreage"}),e("th",{className:"min-w-100px",children:"Status"}),e("th",{className:"min-w-125px",children:"Created at"}),e("th",{className:"min-w-125px",children:"Update at"}),e("th",{className:"min-w-80px",children:"Detail"})]})}),e("tbody",{children:(i=d==null?void 0:d.data)==null?void 0:i.map((a,f)=>{var m,o,h;return t("tr",{children:[e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:e(P,{...C(a.name),alt:"",src:((m=a.thumbnail)==null?void 0:m.original_url)??""})})}),e("td",{children:e("div",{className:"d-flex align-items-center",children:e("div",{className:"d-flex justify-content-start flex-column",children:e("span",{className:"text-dark fw-bold text-hover-primary mb-1 fs-6",children:a.name})})})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:(o=a.villa_cate)==null?void 0:o.villa_cate_name})}),e("td",{children:a.special_price<a.price?t(u,{children:[e("span",{className:"text-muted fw-semobold text-muted d-block fs-6",children:c(a.special_price)}),e("span",{className:"text-muted text-decoration-line-through fw-semobold text-muted d-block fs-8",children:c(a.price)})]}):e("span",{className:"text-muted fw-semobold text-muted d-block fs-6",children:c(a.price)})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:(h=a.branch)==null?void 0:h.name})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:a.acreage&&`${a.acreage} m2`})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:e(y,{checked:a.status})})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:p(a.created_at).format("DD/MM/YYYY HH:mm")})}),e("td",{children:e("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:p(a.updated_at).format("DD/MM/YYYY HH:mm")})}),e("td",{children:e(_,{size:"medium",style:{backgroundColor:"var(--kt-gray-200)"},onClick:()=>r(`form/${a.id}`),children:e(Y,{color:"success"})})})]},f)})})]})})})]})]})}export{M as default};
