import{o as E,p as g,r as t,A as M,j as e,F as m,c as l,q as F,k as P,l as h,s as D,v as x,w as k,x as b,C as A,t as I,I as U,y as V,z as B,u as O,B as j,K as L,e as _,f as T,g as v,O as z,P as S,N as R}from"./index-c60e490b.js";import{u as $,P as K}from"./PhotoCamera-83bf00eb.js";function G(){const c=E(),[s]=g(n=>[n.profile]),{branch:d}=t.useContext(M);return e(m,{children:l("div",{className:"card mb-5 mb-xl-10",id:"kt_profile_details_view",children:[l("div",{className:"card-header cursor-pointer overview-head",children:[e("div",{className:"card-title m-0",children:e("h3",{className:"fw-bolder m-0",children:"Profile Details"})}),e(F,{title:"Edit profile",size:"large",onClick:()=>c("/crafted/profile/settings")})]}),l("div",{className:"card-body p-9",children:[l("div",{className:"row mb-7",children:[e("label",{className:"col-lg-4 fw-bold text-muted",children:"Full Name"}),e("div",{className:"col-lg-8",children:e("span",{className:"fw-bolder fs-6 text-dark",children:s==null?void 0:s.fullname})})]}),l("div",{className:"row mb-7",children:[e("label",{className:"col-lg-4 fw-bold text-muted",children:"CCID"}),e("div",{className:"col-lg-8",children:e("span",{className:"fw-bolder fs-6 text-dark",children:s==null?void 0:s.ccid})})]}),l("div",{className:"row mb-7",children:[e("label",{className:"col-lg-4 fw-bold text-muted",children:"Branch"}),e("div",{className:"col-lg-8 fv-row",children:e("span",{className:"fw-bold fs-6",children:(d==null?void 0:d.name)??"All"})})]}),l("div",{className:"row mb-7",children:[l("label",{className:"col-lg-4 fw-bold text-muted",children:["Contact Phone",e("i",{className:"fas fa-exclamation-circle ms-1 fs-7","data-bs-toggle":"tooltip",title:"Phone number must be active"})]}),e("div",{className:"col-lg-8 d-flex align-items-center",children:e("span",{className:"fw-bolder fs-6 me-2",children:s==null?void 0:s.telephone})})]}),l("div",{className:"row mb-7",children:[e("label",{className:"col-lg-4 fw-bold text-muted",children:"Email"}),e("div",{className:"col-lg-8",children:e("span",{className:"fw-bold fs-6 text-dark",children:s==null?void 0:s.email})})]}),l("div",{className:"row mb-7",children:[e("label",{className:"col-lg-4 fw-bold text-muted",children:"Communication"}),e("div",{className:"col-lg-8",children:e("span",{className:"fw-bolder fs-6 text-dark",children:"Email, Phone"})})]}),l("div",{className:"row mb-10",children:[e("label",{className:"col-lg-4 fw-bold text-muted",children:"Allow Changes"}),e("div",{className:"col-lg-8",children:e("span",{className:"fw-bold fs-6",children:"Yes"})})]})]})]})})}const H=P().shape({fullname:h().required("Full name is required"),telephone:h().required("Telephone is required")}),W=c=>{var p;const{profile:s}=c,[d]=g(i=>[i.onUpdateProfile]),{handle:n,result:o,onCloseNoti:w}=D(),{handlePostMedia:f}=$(),a=x({initialValues:{email:s.email,fullname:s.fullname,telephone:s.telephone,description:s.description,full_address:s.full_address,sex:s.sex,ccid:s.ccid},validationSchema:H,onSubmit:async i=>{const r={...i,telephone:s.telephone!==a.getFieldProps("telephone").value?i.telephone:null};await n({handleFn:()=>k.putProfile({...b.pickBy(r,b.identity),sex:i.sex}),messageSuccess:"Update profile success",messageColor:"success",callback:()=>d({...b.pickBy(r,b.identity),sex:i.sex})})}}),y=async i=>{await f({e:i,callBack:r=>n({handleFn:()=>k.putProfile({mediaId:r[0].mediaId}),callback:()=>d({media:{original_url:r[0].original_url}})})})},u=i=>{a.setFieldValue("sex",i.target.checked)};return l(m,{children:[e(A,{open:o.open,onClose:w,message:o.message,severity:o.messageColor}),l("div",{className:"card mb-5 mb-xl-10",children:[e("div",{className:"card-header border-0 cursor-pointer",role:"button","data-bs-toggle":"collapse","data-bs-target":"#kt_account_profile_details","aria-expanded":"true","aria-controls":"kt_account_profile_details",children:e("div",{className:"card-title m-0",children:e("h3",{className:"fw-bolder m-0",children:"Profile Details"})})}),e("div",{id:"kt_account_profile_details",className:"collapse show",children:l("form",{onSubmit:a.handleSubmit,noValidate:!0,className:"form",children:[l("div",{className:"card-body border-top p-9",children:[l("div",{className:"row mb-6",children:[e("label",{className:"col-lg-4 col-form-label fw-bold fs-6",children:"Avatar"}),e("div",{className:"col-lg-8",children:l("div",{className:"image-input image-input-outline","data-kt-image-input":"true",style:{backgroundImage:`url(${I("/media/avatars/blank.png")})`},children:[e("div",{className:"image-input-wrapper w-125px h-125px",style:{backgroundImage:`url(${(p=s.media)==null?void 0:p.original_url})`}}),l(U,{size:"large",color:"primary","aria-label":"upload picture",component:"label",children:[e("input",{onChange:y,hidden:!0,accept:"image/*",type:"file"}),e(K,{})]})]})})]}),l("div",{className:"row mb-6",children:[e("label",{className:"col-lg-4 col-form-label required fw-bold fs-6",children:"Email"}),l("div",{className:"col-lg-8 fv-row",children:[e("input",{disabled:!0,type:"text",className:"form-control form-control-lg form-control-solid",placeholder:"Email",...a.getFieldProps("email")}),a.touched.email&&a.errors.email&&e("div",{className:"fv-plugins-message-container",children:e("div",{className:"fv-help-block",children:a.errors.email})})]})]}),l("div",{className:"row mb-6",children:[e("label",{className:"col-lg-4 col-form-label required fw-bold fs-6",children:"CCID"}),l("div",{className:"col-lg-8 fv-row",children:[e("input",{disabled:!0,type:"text",className:"form-control form-control-lg form-control-solid",placeholder:"ccid",...a.getFieldProps("ccid")}),a.touched.ccid&&a.errors.ccid&&e("div",{className:"fv-plugins-message-container",children:e("div",{className:"fv-help-block",children:a.errors.ccid})})]})]}),l("div",{className:"row mb-6",children:[e("label",{className:"col-lg-4 col-form-label required fw-bold fs-6",children:"Full Name"}),l("div",{className:"col-lg-8 fv-row",children:[e("input",{type:"text",className:"form-control form-control-lg form-control-solid",placeholder:"Full name",...a.getFieldProps("fullname")}),a.touched.fullname&&a.errors.fullname&&e("div",{className:"fv-plugins-message-container",children:e("div",{className:"fv-help-block",children:a.errors.fullname})})]})]}),l("div",{className:"row mb-6",children:[e("label",{className:"col-lg-4 col-form-label fw-bold fs-6",children:e("span",{className:"required",children:"Contact Phone"})}),l("div",{className:"col-lg-8 fv-row",children:[e("input",{type:"tel",className:"form-control form-control-lg form-control-solid",placeholder:"Phone number",...a.getFieldProps("telephone")}),a.touched.telephone&&a.errors.telephone&&e("div",{className:"fv-plugins-message-container",children:e("div",{className:"fv-help-block",children:a.errors.telephone})})]})]}),l("div",{className:"row mb-6",children:[e("label",{className:"col-lg-4 col-form-label fw-bold fs-6",children:e("span",{className:"required",children:"Description"})}),l("div",{className:"col-lg-8 fv-row",children:[e("input",{type:"tel",className:"form-control form-control-lg form-control-solid",placeholder:"Description",...a.getFieldProps("description")}),a.touched.description&&a.errors.description&&e("div",{className:"fv-plugins-message-container",children:e("div",{className:"fv-help-block",children:a.errors.description})})]})]}),l("div",{className:"row mb-6",children:[e("label",{className:"col-lg-4 col-form-label fw-bold fs-6",children:e("span",{className:"required",children:"Full address"})}),l("div",{className:"col-lg-8 fv-row",children:[e("input",{type:"tel",className:"form-control form-control-lg form-control-solid",placeholder:"Full address",...a.getFieldProps("full_address")}),a.touched.full_address&&a.errors.full_address&&e("div",{className:"fv-plugins-message-container",children:e("div",{className:"fv-help-block",children:a.errors.full_address})})]})]}),l("div",{className:"row mb-6",children:[e("label",{className:"col-lg-4 col-form-label fw-bold fs-6",children:e("span",{className:"required",children:"Sex"})}),l("div",{className:"col-lg-8 fv-row",children:[e(V,{checked:a.getFieldProps("sex").value,onChange:u}),a.touched.sex&&a.errors.sex&&e("div",{className:"fv-plugins-message-container",children:e("div",{className:"fv-help-block",children:a.errors.sex})})]})]})]}),e("div",{className:"card-footer d-flex justify-content-end py-6 px-9",children:e(F,{title:"Save changes",color:"success",size:"large",type:"submit",load:o.load})})]})})]})]})},Y={newEmail:"support@keenthemes.com",confirmPassword:""},J={currentPassword:"",newPassword:"",passwordConfirmation:""},Q=P().shape({newEmail:h().email("Wrong email format").min(3,"Minimum 3 symbols").max(50,"Maximum 50 symbols").required("Email is required"),confirmPassword:h().min(3,"Minimum 3 symbols").max(50,"Maximum 50 symbols").required("Password is required")}),X=P().shape({currentPassword:h().min(3,"Minimum 3 symbols").max(50,"Maximum 50 symbols").required("Password is required"),newPassword:h().min(3,"Minimum 3 symbols").max(50,"Maximum 50 symbols").required("Password is required"),passwordConfirmation:h().min(3,"Minimum 3 symbols").max(50,"Maximum 50 symbols").required("Password is required").oneOf([B("newPassword"),null],"Passwords must match")}),Z=()=>{const[c,s]=t.useState(Y),[d,n]=t.useState(J),[o,w]=t.useState(!1),[f,a]=t.useState(!1),[y,u]=t.useState(!1);x({initialValues:{...c},validationSchema:Q,onSubmit:q=>{u(!0),setTimeout(N=>{s(N),u(!1),w(!1)},1e3)}});const[p,i]=t.useState(!1),r=x({initialValues:{...d},validationSchema:X,onSubmit:q=>{i(!0),setTimeout(N=>{n(N),i(!1),a(!1)},1e3)}});return l("div",{className:"card mb-5 mb-xl-10",children:[e("div",{className:"card-header border-0 cursor-pointer",role:"button","data-bs-toggle":"collapse","data-bs-target":"#kt_account_signin_method",children:e("div",{className:"card-title m-0",children:e("h3",{className:"fw-bolder m-0",children:"Sign-in Method"})})}),e("div",{id:"kt_account_signin_method",className:"collapse show",children:e("div",{className:"card-body border-top p-9",children:l("div",{className:"d-flex flex-wrap align-items-center mb-10",children:[l("div",{id:"kt_signin_password",className:" "+(f&&"d-none"),children:[e("div",{className:"fs-6 fw-bolder mb-1",children:"Password"}),e("div",{className:"fw-bold text-gray-600",children:"************"})]}),e("div",{id:"kt_signin_password_edit",className:"flex-row-fluid "+(!f&&"d-none"),children:l("form",{onSubmit:r.handleSubmit,id:"kt_signin_change_password",className:"form",noValidate:!0,children:[l("div",{className:"row mb-1",children:[e("div",{className:"col-lg-4",children:l("div",{className:"fv-row mb-0",children:[e("label",{htmlFor:"currentpassword",className:"form-label fs-6 fw-bolder mb-3",children:"Current Password"}),e("input",{type:"password",className:"form-control form-control-lg form-control-solid ",id:"currentpassword",...r.getFieldProps("currentPassword")}),r.touched.currentPassword&&r.errors.currentPassword&&e("div",{className:"fv-plugins-message-container",children:e("div",{className:"fv-help-block",children:r.errors.currentPassword})})]})}),e("div",{className:"col-lg-4",children:l("div",{className:"fv-row mb-0",children:[e("label",{htmlFor:"newpassword",className:"form-label fs-6 fw-bolder mb-3",children:"New Password"}),e("input",{type:"password",className:"form-control form-control-lg form-control-solid ",id:"newpassword",...r.getFieldProps("newPassword")}),r.touched.newPassword&&r.errors.newPassword&&e("div",{className:"fv-plugins-message-container",children:e("div",{className:"fv-help-block",children:r.errors.newPassword})})]})}),e("div",{className:"col-lg-4",children:l("div",{className:"fv-row mb-0",children:[e("label",{htmlFor:"confirmpassword",className:"form-label fs-6 fw-bolder mb-3",children:"Confirm New Password"}),e("input",{type:"password",className:"form-control form-control-lg form-control-solid ",id:"confirmpassword",...r.getFieldProps("passwordConfirmation")}),r.touched.passwordConfirmation&&r.errors.passwordConfirmation&&e("div",{className:"fv-plugins-message-container",children:e("div",{className:"fv-help-block",children:r.errors.passwordConfirmation})})]})})]}),e("div",{className:"form-text mb-5",children:"Password must be at least 8 character and contain symbols"}),l("div",{className:"d-flex",children:[l("button",{id:"kt_password_submit",type:"submit",className:"btn btn-primary me-2 px-6",children:[!p&&"Update Password",p&&l("span",{className:"indicator-progress",style:{display:"block"},children:["Please wait..."," ",e("span",{className:"spinner-border spinner-border-sm align-middle ms-2"})]})]}),e("button",{onClick:()=>{a(!1)},id:"kt_password_cancel",type:"button",className:"btn btn-color-gray-400 btn-active-light-primary px-6",children:"Cancel"})]})]})}),e("div",{id:"kt_signin_password_button",className:"ms-auto "+(f&&"d-none"),children:e("button",{onClick:()=>{a(!0)},className:"btn btn-light btn-active-light-primary",children:"Reset Password"})})]})})})]})};function ee(){const[c]=g(s=>[s.profile]);return e(m,{children:c&&l(m,{children:[e(W,{profile:c}),e(Z,{})]})})}const le=()=>{var n;const c=O(),[s]=g(o=>[o.profile]),[d]=j(o=>[o.roles]);return e("div",{className:"card mb-5 mb-xl-10",children:l("div",{className:"card-body pt-9 pb-0",children:[l("div",{className:"d-flex flex-wrap flex-sm-nowrap mb-3",children:[e("div",{className:"me-7 mb-4",children:l("div",{className:"symbol symbol-100px symbol-lg-160px symbol-fixed position-relative account-img-cnt",children:[e("img",{src:(n=s==null?void 0:s.media)==null?void 0:n.original_url,alt:"",className:"account-avatar"}),e("div",{className:"position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"})]})}),e("div",{className:"flex-grow-1",children:e("div",{className:"d-flex justify-content-between align-items-start flex-wrap mb-2",children:l("div",{className:"d-flex flex-column",children:[l("div",{className:"d-flex align-items-center mb-2",children:[e("span",{className:"text-gray-800 fs-2 fw-bolder me-1",children:s==null?void 0:s.fullname}),e("span",{children:e(L,{path:"/media/icons/duotune/general/gen026.svg",className:"svg-icon-1 svg-icon-primary"})})]}),e("div",{className:"d-flex flex-wrap fw-bold fs-6 mb-4 pe-2",children:d.map(o=>e("span",{className:"d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2",children:o.title},o.id))})]})})})]}),e("div",{className:"d-flex overflow-auto h-55px",children:l("ul",{className:"nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap",children:[e("li",{className:"nav-item",children:e(_,{className:"nav-link text-active-primary me-6 "+(c.pathname==="/crafted/profile/overview"&&"active"),to:"/crafted/profile/overview",children:"Overview"})}),e("li",{className:"nav-item",children:e(_,{className:"nav-link text-active-primary me-6 "+(c.pathname==="/crafted/profile/settings"&&"active"),to:"/crafted/profile/settings",children:"Settings"})})]})})]})})},C=[{title:"Account",path:"/crafted/profile/overview",isSeparator:!1,isActive:!1},{title:"",path:"",isSeparator:!0,isActive:!1}],re=()=>e(T,{children:l(v,{element:l(m,{children:[e(le,{}),e(z,{})]}),children:[e(v,{path:"overview",element:l(m,{children:[e(S,{breadcrumbs:C,children:"Overview"}),e(G,{})]})}),e(v,{path:"settings",element:l(m,{children:[e(S,{breadcrumbs:C,children:"Settings"}),e(ee,{})]})}),e(v,{index:!0,element:e(R,{to:"/crafted/profile/overview"})})]})});export{re as default};
