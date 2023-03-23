import{j as l,I as k,r as h,b as i,a4 as P,a5 as ee,a6 as ae,F as le,P as oe}from"./index-b6841ae3.js";import{u as z}from"./useQuery-4fcc4ac8.js";import{g as re,a as ce,s as Q,c as n,b as _,u as se,d as te,B as j,e as R,f as ie,l as B,C as A}from"./branch-select-003ef01b.js";import{L as q,u as ne,a as de,C as ue}from"./usePost-8065c0df.js";import{r as pe,i as fe,a as me}from"./jsx-runtime_commonjs-proxy-0577540e.js";import{_ as ve}from"./TransitionGroupContext-2ca2a48c.js";import{c as be}from"./IconButton-76dab406.js";import"./Transition-8b1a79cc.js";const Ce=be(l("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");function ge(e){return ce("MuiChip",e)}const he=re("MuiChip",["root","sizeSmall","sizeMedium","colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","disabled","clickable","clickableColorPrimary","clickableColorSecondary","deletable","deletableColorPrimary","deletableColorSecondary","outlined","filled","outlinedPrimary","outlinedSecondary","filledPrimary","filledSecondary","avatar","avatarSmall","avatarMedium","avatarColorPrimary","avatarColorSecondary","icon","iconSmall","iconMedium","iconColorPrimary","iconColorSecondary","label","labelSmall","labelMedium","deleteIcon","deleteIconSmall","deleteIconMedium","deleteIconColorPrimary","deleteIconColorSecondary","deleteIconOutlinedColorPrimary","deleteIconOutlinedColorSecondary","deleteIconFilledColorPrimary","deleteIconFilledColorSecondary","focusVisible"]),s=he,ye=["avatar","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant","tabIndex","skipFocusWhenDisabled"],$e=e=>{const{classes:a,disabled:d,size:o,color:c,iconColor:b,onDelete:C,clickable:p,variant:m}=e,y={root:["root",m,d&&"disabled",`size${n(o)}`,`color${n(c)}`,p&&"clickable",p&&`clickableColor${n(c)}`,C&&"deletable",C&&`deletableColor${n(c)}`,`${m}${n(c)}`],label:["label",`label${n(o)}`],avatar:["avatar",`avatar${n(o)}`,`avatarColor${n(c)}`],icon:["icon",`icon${n(o)}`,`iconColor${n(b)}`],deleteIcon:["deleteIcon",`deleteIcon${n(o)}`,`deleteIconColor${n(c)}`,`deleteIcon${n(m)}Color${n(c)}`]};return ie(y,ge,a)},Ne=Q("div",{name:"MuiChip",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:d}=e,{color:o,iconColor:c,clickable:b,onDelete:C,size:p,variant:m}=d;return[{[`& .${s.avatar}`]:a.avatar},{[`& .${s.avatar}`]:a[`avatar${n(p)}`]},{[`& .${s.avatar}`]:a[`avatarColor${n(o)}`]},{[`& .${s.icon}`]:a.icon},{[`& .${s.icon}`]:a[`icon${n(p)}`]},{[`& .${s.icon}`]:a[`iconColor${n(c)}`]},{[`& .${s.deleteIcon}`]:a.deleteIcon},{[`& .${s.deleteIcon}`]:a[`deleteIcon${n(p)}`]},{[`& .${s.deleteIcon}`]:a[`deleteIconColor${n(o)}`]},{[`& .${s.deleteIcon}`]:a[`deleteIcon${n(m)}Color${n(o)}`]},a.root,a[`size${n(p)}`],a[`color${n(o)}`],b&&a.clickable,b&&o!=="default"&&a[`clickableColor${n(o)})`],C&&a.deletable,C&&o!=="default"&&a[`deletableColor${n(o)}`],a[m],a[`${m}${n(o)}`]]}})(({theme:e,ownerState:a})=>{const d=_(e.palette.text.primary,.26),o=e.palette.mode==="light"?e.palette.grey[700]:e.palette.grey[300];return k({maxWidth:"100%",fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:(e.vars||e).palette.text.primary,backgroundColor:(e.vars||e).palette.action.selected,borderRadius:32/2,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:0,padding:0,verticalAlign:"middle",boxSizing:"border-box",[`&.${s.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`& .${s.avatar}`]:{marginLeft:5,marginRight:-6,width:24,height:24,color:e.vars?e.vars.palette.Chip.defaultAvatarColor:o,fontSize:e.typography.pxToRem(12)},[`& .${s.avatarColorPrimary}`]:{color:(e.vars||e).palette.primary.contrastText,backgroundColor:(e.vars||e).palette.primary.dark},[`& .${s.avatarColorSecondary}`]:{color:(e.vars||e).palette.secondary.contrastText,backgroundColor:(e.vars||e).palette.secondary.dark},[`& .${s.avatarSmall}`]:{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)},[`& .${s.icon}`]:k({marginLeft:5,marginRight:-6},a.size==="small"&&{fontSize:18,marginLeft:4,marginRight:-4},a.iconColor===a.color&&k({color:e.vars?e.vars.palette.Chip.defaultIconColor:o},a.color!=="default"&&{color:"inherit"})),[`& .${s.deleteIcon}`]:k({WebkitTapHighlightColor:"transparent",color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.26)`:d,fontSize:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / 0.4)`:_(d,.4)}},a.size==="small"&&{fontSize:16,marginRight:4,marginLeft:-4},a.color!=="default"&&{color:e.vars?`rgba(${e.vars.palette[a.color].contrastTextChannel} / 0.7)`:_(e.palette[a.color].contrastText,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].contrastText}})},a.size==="small"&&{height:24},a.color!=="default"&&{backgroundColor:(e.vars||e).palette[a.color].main,color:(e.vars||e).palette[a.color].contrastText},a.onDelete&&{[`&.${s.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:_(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},a.onDelete&&a.color!=="default"&&{[`&.${s.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}})},({theme:e,ownerState:a})=>k({},a.clickable&&{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:_(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)},[`&.${s.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:_(e.palette.action.selected,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)},"&:active":{boxShadow:(e.vars||e).shadows[1]}},a.clickable&&a.color!=="default"&&{[`&:hover, &.${s.focusVisible}`]:{backgroundColor:(e.vars||e).palette[a.color].dark}}),({theme:e,ownerState:a})=>k({},a.variant==="outlined"&&{backgroundColor:"transparent",border:e.vars?`1px solid ${e.vars.palette.Chip.defaultBorder}`:`1px solid ${e.palette.mode==="light"?e.palette.grey[400]:e.palette.grey[700]}`,[`&.${s.clickable}:hover`]:{backgroundColor:(e.vars||e).palette.action.hover},[`&.${s.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`& .${s.avatar}`]:{marginLeft:4},[`& .${s.avatarSmall}`]:{marginLeft:2},[`& .${s.icon}`]:{marginLeft:4},[`& .${s.iconSmall}`]:{marginLeft:2},[`& .${s.deleteIcon}`]:{marginRight:5},[`& .${s.deleteIconSmall}`]:{marginRight:3}},a.variant==="outlined"&&a.color!=="default"&&{color:(e.vars||e).palette[a.color].main,border:`1px solid ${e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:_(e.palette[a.color].main,.7)}`,[`&.${s.clickable}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:_(e.palette[a.color].main,e.palette.action.hoverOpacity)},[`&.${s.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / ${e.vars.palette.action.focusOpacity})`:_(e.palette[a.color].main,e.palette.action.focusOpacity)},[`& .${s.deleteIcon}`]:{color:e.vars?`rgba(${e.vars.palette[a.color].mainChannel} / 0.7)`:_(e.palette[a.color].main,.7),"&:hover, &:active":{color:(e.vars||e).palette[a.color].main}}})),_e=Q("span",{name:"MuiChip",slot:"Label",overridesResolver:(e,a)=>{const{ownerState:d}=e,{size:o}=d;return[a.label,a[`label${n(o)}`]]}})(({ownerState:e})=>k({overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},e.size==="small"&&{paddingLeft:8,paddingRight:8}));function H(e){return e.key==="Backspace"||e.key==="Delete"}const ke=h.forwardRef(function(a,d){const o=se({props:a,name:"MuiChip"}),{avatar:c,className:b,clickable:C,color:p="default",component:m,deleteIcon:y,disabled:u=!1,icon:$,label:t,onClick:N,onDelete:f,onKeyDown:O,onKeyUp:I,size:L="medium",variant:v="filled",tabIndex:r,skipFocusWhenDisabled:S=!1}=o,D=ve(o,ye),F=h.useRef(null),J=te(F,d),w=g=>{g.stopPropagation(),f&&f(g)},X=g=>{g.currentTarget===g.target&&H(g)&&g.preventDefault(),O&&O(g)},Y=g=>{g.currentTarget===g.target&&(f&&H(g)?f(g):g.key==="Escape"&&F.current&&F.current.blur()),I&&I(g)},T=C!==!1&&N?!0:C,E=T||f?j:m||"div",V=k({},o,{component:E,disabled:u,size:L,color:p,iconColor:h.isValidElement($)&&$.props.color||p,onDelete:!!f,clickable:T,variant:v}),x=$e(V),Z=E===j?k({component:m||"div",focusVisibleClassName:x.focusVisible},f&&{disableRipple:!0}):{};let K=null;f&&(K=y&&h.isValidElement(y)?h.cloneElement(y,{className:R(y.props.className,x.deleteIcon),onClick:w}):l(Ce,{className:R(x.deleteIcon),onClick:w}));let U=null;c&&h.isValidElement(c)&&(U=h.cloneElement(c,{className:R(x.avatar,c.props.className)}));let W=null;return $&&h.isValidElement($)&&(W=h.cloneElement($,{className:R(x.icon,$.props.className)})),i(Ne,k({as:E,className:R(x.root,b),disabled:T&&u?!0:void 0,onClick:N,onKeyDown:X,onKeyUp:Y,ref:J,tabIndex:S&&u?-1:r,ownerState:V},Z,D,{children:[U||W,l(_e,{className:R(x.label),ownerState:V,children:t}),K]}))}),xe=ke;var M={},Ie=fe;Object.defineProperty(M,"__esModule",{value:!0});var G=M.default=void 0,Se=Ie(pe()),Re=me,Pe=(0,Se.default)((0,Re.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckCircle");G=M.default=Pe;function Oe(e){var u,$;const{value:a,setValue:d}=e,o=h.useRef(null),{data:c}=z({queryKey:["SELECT_ROLE"],queryFn:()=>P.roles({is_super_admin:!1}),refetchOnWindowFocus:!1}),b=t=>{d&&d(N=>N.includes(t)?N.filter(f=>f!==t):[...N,t])},C=t=>{d&&d(N=>N.filter(f=>f!==t))};let p=[];for(var m=0;m<((u=c==null?void 0:c.data)==null?void 0:u.length);m++)a!=null&&a.includes(($=c==null?void 0:c.data[m])==null?void 0:$.id)&&p.push(c==null?void 0:c.data[m]);const y=()=>{var t;(t=o.current)==null||t.classList.add("role_select_show")};return window.addEventListener("click",()=>{var t;return(t=o.current)==null?void 0:t.classList.remove("role_select_show")}),i("div",{className:"role_cnt",children:[l("div",{onClick:t=>{y(),t.stopPropagation()},className:"form-control form-control-solid",children:p.map(t=>l(xe,{label:t.title,onDelete:()=>C(t.id),size:"medium",color:"primary"},t.id))}),l("div",{ref:o,onClick:t=>t.stopPropagation(),className:"role_select",children:l("ul",{className:"role_list",children:c==null?void 0:c.data.map(t=>l("li",{className:"role_item",children:l(q,{onClick:()=>b(t.id),variant:"text",title:t.title,color:"inherit",size:"large",style:a!=null&&a.includes(t.id)?{backgroundColor:"var(--kt-gray-300)"}:{}})},t.id))})})]})}function ze(){var y;const[e,a]=h.useState(""),[d,o]=h.useState(null),{data:c}=z({queryKey:["BRANCH_SELECT",e],queryFn:()=>P.branches({status:!0,search:e}),refetchOnWindowFocus:!1}),{data:b}=z({queryKey:[d],queryFn:()=>P.branchById(d),refetchOnWindowFocus:!1,enabled:!!d}),C=(c==null?void 0:c.data)??[],p=h.useCallback(B.debounce(u=>a(u),600),[]),m=u=>{o(d===u?null:u)};return console.log(b),i("div",{children:[l("input",{disabled:!0,value:((y=b==null?void 0:b.data)==null?void 0:y.name)??"",onChange:u=>p(u.target.value),type:"text",className:"form-control form-control-solid"}),"BranchSelect",l("ul",{children:C.map(u=>l("li",{children:l(q,{title:u.name,onClick:()=>m(u.id)})},u.id))})]})}function Me(){const e=ee(),[a]=ae(v=>[v.isSPA]);console.log(a);const d=e.id,[o,c]=h.useState({fullname:"",full_address:"",status:!0,sex:!0}),[b,C]=h.useState([]),{register:p,handleSubmit:m,formState:y,setValue:u}=ne(),{handle:$,result:t,onCloseNoti:N}=de(),{data:f,refetch:O}=z({queryKey:["FORM_ACCOUNT",d],queryFn:()=>P.accountById(d),enabled:!!d,refetchOnWindowFocus:!1,onSuccess(v){var S;const r=v.data;c({fullname:r==null?void 0:r.fullname,full_address:r==null?void 0:r.full_address,status:r==null?void 0:r.status,sex:r==null?void 0:r.sex}),C((S=r==null?void 0:r.roles)==null?void 0:S.map(D=>D.id)),u("fullname",r==null?void 0:r.fullname),u("telephone",r==null?void 0:r.telephone),u("email",r==null?void 0:r.email),u("password",r==null?void 0:r.password),u("description",r==null?void 0:r.description),u("full_address",r==null?void 0:r.full_address)}});let I="POST";d&&(f!=null&&f.data)&&(I="PUT");const L=async v=>{var r;if(I!=="POST"&&I==="PUT"){const S={...v,telephone:v.telephone!==((r=f==null?void 0:f.data)==null?void 0:r.telephone)?v.telephone:null,roles:b};await $({handleFn:()=>P.putAccount(d,{...B.pickBy(S,B.identity),sex:o.sex,status:o.status}),messageSuccess:"Update account success !"})}};return i(le,{children:[l(oe,{children:"Create new account"}),l(ue,{open:t.open,onClose:N,message:t.message,severity:t.messageColor}),i("div",{className:"card card_cnt",children:[i("div",{className:"account_head",children:[l("div",{className:"account_head-avatar",children:i("div",{className:"avatar_cnt",children:[l("img",{src:"https://source.unsplash.com/random",alt:""}),o.status&&l("div",{className:"avatar_cnt-act",children:l(G,{color:"success"})})]})}),i("div",{className:"account_head-info",children:[l("p",{className:"acc_fullname",children:o.fullname}),l("p",{className:"acc_address",children:o.full_address})]})]}),i("div",{className:"account_form",children:[l("span",{className:"title",children:"Information"}),i("form",{onSubmit:m(L),className:"form",children:[i("div",{className:"form_body",children:[i("div",{className:"form_row",children:[i("div",{className:"form_column",children:[l("label",{className:"form-label required",children:"Fullname"}),l("input",{type:"text",...p("fullname",{required:!0}),onChange:v=>c({...o,fullname:v.target.value}),className:"form-control form-control-solid"})]}),i("div",{className:"form_column",children:[l("label",{className:"form-label required",children:"Telephone"}),l("input",{type:"text",...p("telephone",{required:!0}),className:"form-control form-control-solid"})]})]}),i("div",{className:"form_row",children:[i("div",{className:"form_column form_column_status",children:[l("label",{className:"form-label required",children:"Email"}),l("input",{...p("email",{required:!0}),type:"text",disabled:!0,className:"form-control form-control-solid"})]}),i("div",{className:"form_column form_column_control",children:[i("div",{className:"item",children:[l("label",{className:"form-label required",children:"Status"}),l(A,{checked:o.status,onChange:v=>c({...o,status:v.target.checked})})]}),i("div",{className:"item",children:[l("label",{className:"form-label required",children:"Sex"}),l(A,{checked:o.sex,onChange:v=>c({...o,sex:v.target.checked})})]})]})]}),!f&&i("div",{className:"form_row",children:[i("div",{className:"form_column",children:[l("label",{className:"form-label required",children:"Password"}),l("input",{...p("password",{required:!0}),type:"text",className:"form-control form-control-solid"})]}),i("div",{className:"form_column",children:[l("label",{className:"form-label required",children:"Confirm password"}),l("input",{type:"text",className:"form-control form-control-solid"})]})]}),l("div",{className:"form_row",children:i("div",{className:"form_column_1",children:[l("label",{className:"form-label required",children:"Description"}),l("input",{...p("description"),type:"text",className:"form-control form-control-solid"})]})}),l("div",{className:"form_row",children:i("div",{className:"form_column_1",children:[l("label",{className:"form-label required",children:"Full address"}),l("input",{type:"text",className:"form-control form-control-solid",...p("full_address",{required:!0}),onChange:v=>c({...o,full_address:v.target.value})})]})}),i("div",{className:"form_row",children:[i("div",{className:"form_column",children:[l("label",{className:"form-label required",children:"Roles"}),l(Oe,{value:b,setValue:C})]}),a&&i("div",{className:"form_column",children:[l("label",{className:"form-label required",children:"Branch"}),l(ze,{})]})]})]}),i("div",{className:"form_bottom",children:[l("div",{className:"form_bottom_btn",children:l(q,{size:"large",title:"Save",color:"success",type:"submit",load:t.load})}),l("div",{className:"form_bottom_btn",children:l(q,{size:"large",title:"Restore",color:"inherit",variant:"outlined",type:"submit",onClick:O})})]})]})]})]})]})}export{Me as default};