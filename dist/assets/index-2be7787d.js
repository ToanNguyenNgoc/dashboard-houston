import{au as Te,a as P,r as _,c as g,j as s,q as z,s as we,w as N,ac as Ce,B as te,A as oe,a3 as We,F as H,I as q,P as Oe,y as Fe}from"./index-ebcff714.js";import{u as _e}from"./useMutation-a82572d4.js";import{u as ye}from"./useQuery-a6480589.js";import{d as ke}from"./Edit-67c052b0.js";import{D as xe,d as Ze}from"./Delete-af50aa6a.js";import{r as re,i as ne,a as ie}from"./jsx-runtime_commonjs-proxy-0bea5e44.js";import{d as le}from"./dayjs.min-67caee2e.js";import{B as je}from"./index-8fe2c6ca.js";import{A as He}from"./Avatar-0f3153a7.js";const Ve=o=>new Promise((r,e)=>{const t=new Image;t.addEventListener("load",()=>r(t)),t.addEventListener("error",n=>e(n)),t.setAttribute("crossOrigin","anonymous"),t.src=o}),be=o=>o*Math.PI/180;function qe(o,r,e){const t=be(e);return{width:Math.abs(Math.cos(t)*o)+Math.abs(Math.sin(t)*r),height:Math.abs(Math.sin(t)*o)+Math.abs(Math.cos(t)*r)}}const Ue=async(o,r,e=0,t={horizontal:!1,vertical:!1})=>{const n=await Ve(o),i=document.createElement("canvas"),a=i.getContext("2d");if(!a)return null;const c=be(e),{width:l,height:d}=qe(n.width,n.height,e);i.width=l,i.height=d,a.translate(l/2,d/2),a.rotate(c),a.scale(t.horizontal?-1:1,t.vertical?-1:1),a.translate(-n.width/2,-n.height/2),a.drawImage(n,0,0);const h=a.getImageData(r.x,r.y,r.width,r.height);return i.width=r.width,i.height=r.height,a.putImageData(h,0,0),new Promise((m,f)=>{i.toBlob(C=>{C.name="cropped.jpeg",m({file:C,url:URL.createObjectURL(C)})},"image/jpeg")})};var ae={},Be=ne;Object.defineProperty(ae,"__esModule",{value:!0});var Se=ae.default=void 0,Ye=Be(re()),$e=ie,Ge=(0,Ye.default)((0,$e.jsx)("path",{d:"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"}),"FileUpload");Se=ae.default=Ge;var se={},Xe=ne;Object.defineProperty(se,"__esModule",{value:!0});var Re=se.default=void 0,Ke=Xe(re()),Je=ie,Qe=(0,Ke.default)((0,Je.jsx)("path",{d:"M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"}),"Sync");Re=se.default=Qe;var ce={},et=ne;Object.defineProperty(ce,"__esModule",{value:!0});var Ee=ce.default=void 0,tt=et(re()),ot=ie,rt=(0,tt.default)((0,ot.jsx)("path",{d:"M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"}),"AddAPhoto");Ee=ce.default=rt;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var U=function(o,r){return U=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},U(o,r)};function nt(o,r){U(o,r);function e(){this.constructor=o}o.prototype=r===null?Object.create(r):(e.prototype=r.prototype,new e)}var x=function(){return x=Object.assign||function(r){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=e[i])}return r},x.apply(this,arguments)},B={},it={get exports(){return B},set exports(o){B=o}},de=!1,M,Y,$,k,Z,De,j,G,X,K,Pe,J,Q,Me,ze;function b(){if(!de){de=!0;var o=navigator.userAgent,r=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(o),e=/(Mac OS X)|(Windows)|(Linux)/.exec(o);if(J=/\b(iPhone|iP[ao]d)/.exec(o),Q=/\b(iP[ao]d)/.exec(o),K=/Android/i.exec(o),Me=/FBAN\/\w+;/i.exec(o),ze=/Mobile/i.exec(o),Pe=!!/Win64/.exec(o),r){M=r[1]?parseFloat(r[1]):r[5]?parseFloat(r[5]):NaN,M&&document&&document.documentMode&&(M=document.documentMode);var t=/(?:Trident\/(\d+.\d+))/.exec(o);De=t?parseFloat(t[1])+4:M,Y=r[2]?parseFloat(r[2]):NaN,$=r[3]?parseFloat(r[3]):NaN,k=r[4]?parseFloat(r[4]):NaN,k?(r=/(?:Chrome\/(\d+\.\d+))/.exec(o),Z=r&&r[1]?parseFloat(r[1]):NaN):Z=NaN}else M=Y=$=Z=k=NaN;if(e){if(e[1]){var n=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(o);j=n?parseFloat(n[1].replace("_",".")):!0}else j=!1;G=!!e[2],X=!!e[3]}else j=G=X=!1}}var ee={ie:function(){return b()||M},ieCompatibilityMode:function(){return b()||De>M},ie64:function(){return ee.ie()&&Pe},firefox:function(){return b()||Y},opera:function(){return b()||$},webkit:function(){return b()||k},safari:function(){return ee.webkit()},chrome:function(){return b()||Z},windows:function(){return b()||G},osx:function(){return b()||j},linux:function(){return b()||X},iphone:function(){return b()||J},mobile:function(){return b()||J||Q||K||ze},nativeApp:function(){return b()||Me},android:function(){return b()||K},ipad:function(){return b()||Q}},at=ee,W=!!(typeof window<"u"&&window.document&&window.document.createElement),st={canUseDOM:W,canUseWorkers:typeof Worker<"u",canUseEventListeners:W&&!!(window.addEventListener||window.attachEvent),canUseViewport:W&&!!window.screen,isInWorker:!W},ct=st,Ne=ct,Ae;Ne.canUseDOM&&(Ae=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function lt(o,r){if(!Ne.canUseDOM||r&&!("addEventListener"in document))return!1;var e="on"+o,t=e in document;if(!t){var n=document.createElement("div");n.setAttribute(e,"return;"),t=typeof n[e]=="function"}return!t&&Ae&&o==="wheel"&&(t=document.implementation.hasFeature("Events.wheel","3.0")),t}var dt=lt,ht=at,ut=dt,he=10,ue=40,pe=800;function Ie(o){var r=0,e=0,t=0,n=0;return"detail"in o&&(e=o.detail),"wheelDelta"in o&&(e=-o.wheelDelta/120),"wheelDeltaY"in o&&(e=-o.wheelDeltaY/120),"wheelDeltaX"in o&&(r=-o.wheelDeltaX/120),"axis"in o&&o.axis===o.HORIZONTAL_AXIS&&(r=e,e=0),t=r*he,n=e*he,"deltaY"in o&&(n=o.deltaY),"deltaX"in o&&(t=o.deltaX),(t||n)&&o.deltaMode&&(o.deltaMode==1?(t*=ue,n*=ue):(t*=pe,n*=pe)),t&&!r&&(r=t<1?-1:1),n&&!e&&(e=n<1?-1:1),{spinX:r,spinY:e,pixelX:t,pixelY:n}}Ie.getEventType=function(){return ht.firefox()?"DOMMouseScroll":ut("wheel")?"wheel":"mousewheel"};var pt=Ie;(function(o){o.exports=pt})(it);const mt=Te(B);function ft(o,r,e,t,n,i){i===void 0&&(i=0);var a=I(o,r,i),c=a.width,l=a.height,d=Math.min(c,e),h=Math.min(l,t);return d>h*n?{width:h*n,height:h}:{width:d,height:d/n}}function vt(o){return o.width>o.height?o.width/o.naturalWidth:o.height/o.naturalHeight}function O(o,r,e,t,n){n===void 0&&(n=0);var i=I(r.width,r.height,n),a=i.width,c=i.height;return{x:me(o.x,a,e.width,t),y:me(o.y,c,e.height,t)}}function me(o,r,e,t){var n=r*t/2-e/2;return V(o,-n,n)}function fe(o,r){return Math.sqrt(Math.pow(o.y-r.y,2)+Math.pow(o.x-r.x,2))}function ve(o,r){return Math.atan2(r.y-o.y,r.x-o.x)*180/Math.PI}function gt(o,r,e,t,n,i,a){i===void 0&&(i=0),a===void 0&&(a=!0);var c=a?wt:Ct,l=I(r.width,r.height,i),d=I(r.naturalWidth,r.naturalHeight,i),h={x:c(100,((l.width-e.width/n)/2-o.x/n)/l.width*100),y:c(100,((l.height-e.height/n)/2-o.y/n)/l.height*100),width:c(100,e.width/l.width*100/n),height:c(100,e.height/l.height*100/n)},m=Math.round(c(d.width,h.width*d.width/100)),f=Math.round(c(d.height,h.height*d.height/100)),C=d.width>=d.height*t,u=C?{width:Math.round(f*t),height:f}:{width:m,height:Math.round(m/t)},v=x(x({},u),{x:Math.round(c(d.width-u.width,h.x*d.width/100)),y:Math.round(c(d.height-u.height,h.y*d.height/100))});return{croppedAreaPercentages:h,croppedAreaPixels:v}}function wt(o,r){return Math.min(o,Math.max(0,r))}function Ct(o,r){return r}function _t(o,r,e,t,n,i){var a=I(r.width,r.height,e),c=V(t.width/a.width*(100/o.width),n,i),l={x:c*a.width/2-t.width/2-a.width*c*(o.x/100),y:c*a.height/2-t.height/2-a.height*c*(o.y/100)};return{crop:l,zoom:c}}function yt(o,r,e){var t=vt(r);return e.height>e.width?e.height/(o.height*t):e.width/(o.width*t)}function xt(o,r,e,t,n,i){e===void 0&&(e=0);var a=I(r.naturalWidth,r.naturalHeight,e),c=V(yt(o,r,t),n,i),l=t.height>t.width?t.height/o.height:t.width/o.width,d={x:((a.width-o.width)/2-o.x)*l,y:((a.height-o.height)/2-o.y)*l};return{crop:d,zoom:c}}function ge(o,r){return{x:(r.x+o.x)/2,y:(r.y+o.y)/2}}function bt(o){return o*Math.PI/180}function I(o,r,e){var t=bt(e);return{width:Math.abs(Math.cos(t)*o)+Math.abs(Math.sin(t)*r),height:Math.abs(Math.sin(t)*o)+Math.abs(Math.cos(t)*r)}}function V(o,r,e){return Math.min(Math.max(o,r),e)}function F(){for(var o=[],r=0;r<arguments.length;r++)o[r]=arguments[r];return o.filter(function(e){return typeof e=="string"&&e.length>0}).join(" ").trim()}var St=`.reactEasyCrop_Container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  user-select: none;
  touch-action: none;
  cursor: move;
  display: flex;
  justify-content: center;
  align-items: center;
}

.reactEasyCrop_Image,
.reactEasyCrop_Video {
  will-change: transform; /* this improves performances and prevent painting issues on iOS Chrome */
}

.reactEasyCrop_Contain {
  max-width: 100%;
  max-height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.reactEasyCrop_Cover_Horizontal {
  width: 100%;
  height: auto;
}
.reactEasyCrop_Cover_Vertical {
  width: auto;
  height: 100%;
}

.reactEasyCrop_CropArea {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
  box-shadow: 0 0 0 9999em;
  color: rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.reactEasyCrop_CropAreaRound {
  border-radius: 50%;
}

.reactEasyCrop_CropAreaGrid::before {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 0;
  bottom: 0;
  left: 33.33%;
  right: 33.33%;
  border-top: 0;
  border-bottom: 0;
}

.reactEasyCrop_CropAreaGrid::after {
  content: ' ';
  box-sizing: border-box;
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.5);
  top: 33.33%;
  bottom: 33.33%;
  left: 0;
  right: 0;
  border-left: 0;
  border-right: 0;
}
`,Rt=1,Et=3,Dt=function(o){nt(r,o);function r(){var e=o!==null&&o.apply(this,arguments)||this;return e.imageRef=P.createRef(),e.videoRef=P.createRef(),e.containerRef=null,e.styleRef=null,e.containerRect=null,e.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},e.dragStartPosition={x:0,y:0},e.dragStartCrop={x:0,y:0},e.gestureZoomStart=0,e.gestureRotationStart=0,e.isTouching=!1,e.lastPinchDistance=0,e.lastPinchRotation=0,e.rafDragTimeout=null,e.rafPinchTimeout=null,e.wheelTimer=null,e.currentDoc=typeof document<"u"?document:null,e.currentWindow=typeof window<"u"?window:null,e.resizeObserver=null,e.state={cropSize:null,hasWheelJustStarted:!1},e.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!e.containerRef)){var t=!0;e.resizeObserver=new window.ResizeObserver(function(n){if(t){t=!1;return}e.computeSizes()}),e.resizeObserver.observe(e.containerRef)}},e.preventZoomSafari=function(t){return t.preventDefault()},e.cleanEvents=function(){e.currentDoc&&(e.currentDoc.removeEventListener("mousemove",e.onMouseMove),e.currentDoc.removeEventListener("mouseup",e.onDragStopped),e.currentDoc.removeEventListener("touchmove",e.onTouchMove),e.currentDoc.removeEventListener("touchend",e.onDragStopped),e.currentDoc.removeEventListener("gesturemove",e.onGestureMove),e.currentDoc.removeEventListener("gestureend",e.onGestureEnd))},e.clearScrollEvent=function(){e.containerRef&&e.containerRef.removeEventListener("wheel",e.onWheel),e.wheelTimer&&clearTimeout(e.wheelTimer)},e.onMediaLoad=function(){var t=e.computeSizes();t&&(e.emitCropData(),e.setInitialCrop(t)),e.props.onMediaLoaded&&e.props.onMediaLoaded(e.mediaSize)},e.setInitialCrop=function(t){if(e.props.initialCroppedAreaPercentages){var n=_t(e.props.initialCroppedAreaPercentages,e.mediaSize,e.props.rotation,t,e.props.minZoom,e.props.maxZoom),i=n.crop,a=n.zoom;e.props.onCropChange(i),e.props.onZoomChange&&e.props.onZoomChange(a)}else if(e.props.initialCroppedAreaPixels){var c=xt(e.props.initialCroppedAreaPixels,e.mediaSize,e.props.rotation,t,e.props.minZoom,e.props.maxZoom),i=c.crop,a=c.zoom;e.props.onCropChange(i),e.props.onZoomChange&&e.props.onZoomChange(a)}},e.computeSizes=function(){var t,n,i,a,c,l,d=e.imageRef.current||e.videoRef.current;if(d&&e.containerRef){e.containerRect=e.containerRef.getBoundingClientRect();var h=e.containerRect.width/e.containerRect.height,m=((t=e.imageRef.current)===null||t===void 0?void 0:t.naturalWidth)||((n=e.videoRef.current)===null||n===void 0?void 0:n.videoWidth)||0,f=((i=e.imageRef.current)===null||i===void 0?void 0:i.naturalHeight)||((a=e.videoRef.current)===null||a===void 0?void 0:a.videoHeight)||0,C=d.offsetWidth<m||d.offsetHeight<f,u=m/f,v=void 0;if(C)switch(e.props.objectFit){default:case"contain":v=h>u?{width:e.containerRect.height*u,height:e.containerRect.height}:{width:e.containerRect.width,height:e.containerRect.width/u};break;case"horizontal-cover":v={width:e.containerRect.width,height:e.containerRect.width/u};break;case"vertical-cover":v={width:e.containerRect.height*u,height:e.containerRect.height};break;case"auto-cover":v=m>f?{width:e.containerRect.width,height:e.containerRect.width/u}:{width:e.containerRect.height*u,height:e.containerRect.height};break}else v={width:d.offsetWidth,height:d.offsetHeight};e.mediaSize=x(x({},v),{naturalWidth:m,naturalHeight:f}),e.props.setMediaSize&&e.props.setMediaSize(e.mediaSize);var y=e.props.cropSize?e.props.cropSize:ft(e.mediaSize.width,e.mediaSize.height,e.containerRect.width,e.containerRect.height,e.props.aspect,e.props.rotation);return(((c=e.state.cropSize)===null||c===void 0?void 0:c.height)!==y.height||((l=e.state.cropSize)===null||l===void 0?void 0:l.width)!==y.width)&&e.props.onCropSizeChange&&e.props.onCropSizeChange(y),e.setState({cropSize:y},e.recomputeCropPosition),e.props.setCropSize&&e.props.setCropSize(y),y}},e.onMouseDown=function(t){e.currentDoc&&(t.preventDefault(),e.currentDoc.addEventListener("mousemove",e.onMouseMove),e.currentDoc.addEventListener("mouseup",e.onDragStopped),e.onDragStart(r.getMousePoint(t)))},e.onMouseMove=function(t){return e.onDrag(r.getMousePoint(t))},e.onTouchStart=function(t){e.currentDoc&&(e.isTouching=!0,!(e.props.onTouchRequest&&!e.props.onTouchRequest(t))&&(e.currentDoc.addEventListener("touchmove",e.onTouchMove,{passive:!1}),e.currentDoc.addEventListener("touchend",e.onDragStopped),t.touches.length===2?e.onPinchStart(t):t.touches.length===1&&e.onDragStart(r.getTouchPoint(t.touches[0]))))},e.onTouchMove=function(t){t.preventDefault(),t.touches.length===2?e.onPinchMove(t):t.touches.length===1&&e.onDrag(r.getTouchPoint(t.touches[0]))},e.onGestureStart=function(t){e.currentDoc&&(t.preventDefault(),e.currentDoc.addEventListener("gesturechange",e.onGestureMove),e.currentDoc.addEventListener("gestureend",e.onGestureEnd),e.gestureZoomStart=e.props.zoom,e.gestureRotationStart=e.props.rotation)},e.onGestureMove=function(t){if(t.preventDefault(),!e.isTouching){var n=r.getMousePoint(t),i=e.gestureZoomStart-1+t.scale;if(e.setNewZoom(i,n,{shouldUpdatePosition:!0}),e.props.onRotationChange){var a=e.gestureRotationStart+t.rotation;e.props.onRotationChange(a)}}},e.onGestureEnd=function(t){e.cleanEvents()},e.onDragStart=function(t){var n,i,a=t.x,c=t.y;e.dragStartPosition={x:a,y:c},e.dragStartCrop=x({},e.props.crop),(i=(n=e.props).onInteractionStart)===null||i===void 0||i.call(n)},e.onDrag=function(t){var n=t.x,i=t.y;e.currentWindow&&(e.rafDragTimeout&&e.currentWindow.cancelAnimationFrame(e.rafDragTimeout),e.rafDragTimeout=e.currentWindow.requestAnimationFrame(function(){if(e.state.cropSize&&!(n===void 0||i===void 0)){var a=n-e.dragStartPosition.x,c=i-e.dragStartPosition.y,l={x:e.dragStartCrop.x+a,y:e.dragStartCrop.y+c},d=e.props.restrictPosition?O(l,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):l;e.props.onCropChange(d)}}))},e.onDragStopped=function(){var t,n;e.isTouching=!1,e.cleanEvents(),e.emitCropData(),(n=(t=e.props).onInteractionEnd)===null||n===void 0||n.call(t)},e.onWheel=function(t){if(e.currentWindow&&!(e.props.onWheelRequest&&!e.props.onWheelRequest(t))){t.preventDefault();var n=r.getMousePoint(t),i=mt(t).pixelY,a=e.props.zoom-i*e.props.zoomSpeed/200;e.setNewZoom(a,n,{shouldUpdatePosition:!0}),e.state.hasWheelJustStarted||e.setState({hasWheelJustStarted:!0},function(){var c,l;return(l=(c=e.props).onInteractionStart)===null||l===void 0?void 0:l.call(c)}),e.wheelTimer&&clearTimeout(e.wheelTimer),e.wheelTimer=e.currentWindow.setTimeout(function(){return e.setState({hasWheelJustStarted:!1},function(){var c,l;return(l=(c=e.props).onInteractionEnd)===null||l===void 0?void 0:l.call(c)})},250)}},e.getPointOnContainer=function(t){var n=t.x,i=t.y;if(!e.containerRect)throw new Error("The Cropper is not mounted");return{x:e.containerRect.width/2-(n-e.containerRect.left),y:e.containerRect.height/2-(i-e.containerRect.top)}},e.getPointOnMedia=function(t){var n=t.x,i=t.y,a=e.props,c=a.crop,l=a.zoom;return{x:(n+c.x)/l,y:(i+c.y)/l}},e.setNewZoom=function(t,n,i){var a=i===void 0?{}:i,c=a.shouldUpdatePosition,l=c===void 0?!0:c;if(!(!e.state.cropSize||!e.props.onZoomChange)){var d=V(t,e.props.minZoom,e.props.maxZoom);if(l){var h=e.getPointOnContainer(n),m=e.getPointOnMedia(h),f={x:m.x*d-h.x,y:m.y*d-h.y},C=e.props.restrictPosition?O(f,e.mediaSize,e.state.cropSize,d,e.props.rotation):f;e.props.onCropChange(C)}e.props.onZoomChange(d)}},e.getCropData=function(){if(!e.state.cropSize)return null;var t=e.props.restrictPosition?O(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;return gt(t,e.mediaSize,e.state.cropSize,e.getAspect(),e.props.zoom,e.props.rotation,e.props.restrictPosition)},e.emitCropData=function(){var t=e.getCropData();if(t){var n=t.croppedAreaPercentages,i=t.croppedAreaPixels;e.props.onCropComplete&&e.props.onCropComplete(n,i),e.props.onCropAreaChange&&e.props.onCropAreaChange(n,i)}},e.emitCropAreaChange=function(){var t=e.getCropData();if(t){var n=t.croppedAreaPercentages,i=t.croppedAreaPixels;e.props.onCropAreaChange&&e.props.onCropAreaChange(n,i)}},e.recomputeCropPosition=function(){if(e.state.cropSize){var t=e.props.restrictPosition?O(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;e.props.onCropChange(t),e.emitCropData()}},e}return r.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=St,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef))},r.prototype.componentWillUnmount=function(){var e,t;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((t=this.styleRef.parentNode)===null||t===void 0||t.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},r.prototype.componentDidUpdate=function(e){var t,n,i,a,c,l,d,h,m;e.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):e.aspect!==this.props.aspect?this.computeSizes():e.zoom!==this.props.zoom?this.recomputeCropPosition():((t=e.cropSize)===null||t===void 0?void 0:t.height)!==((n=this.props.cropSize)===null||n===void 0?void 0:n.height)||((i=e.cropSize)===null||i===void 0?void 0:i.width)!==((a=this.props.cropSize)===null||a===void 0?void 0:a.width)?this.computeSizes():(((c=e.crop)===null||c===void 0?void 0:c.x)!==((l=this.props.crop)===null||l===void 0?void 0:l.x)||((d=e.crop)===null||d===void 0?void 0:d.y)!==((h=this.props.crop)===null||h===void 0?void 0:h.y))&&this.emitCropAreaChange(),e.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),e.video!==this.props.video&&((m=this.videoRef.current)===null||m===void 0||m.load())},r.prototype.getAspect=function(){var e=this.props,t=e.cropSize,n=e.aspect;return t?t.width/t.height:n},r.prototype.onPinchStart=function(e){var t=r.getTouchPoint(e.touches[0]),n=r.getTouchPoint(e.touches[1]);this.lastPinchDistance=fe(t,n),this.lastPinchRotation=ve(t,n),this.onDragStart(ge(t,n))},r.prototype.onPinchMove=function(e){var t=this;if(!(!this.currentDoc||!this.currentWindow)){var n=r.getTouchPoint(e.touches[0]),i=r.getTouchPoint(e.touches[1]),a=ge(n,i);this.onDrag(a),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var c=fe(n,i),l=t.props.zoom*(c/t.lastPinchDistance);t.setNewZoom(l,a,{shouldUpdatePosition:!1}),t.lastPinchDistance=c;var d=ve(n,i),h=t.props.rotation+(d-t.lastPinchRotation);t.props.onRotationChange&&t.props.onRotationChange(h),t.lastPinchRotation=d})}},r.prototype.render=function(){var e=this,t=this.props,n=t.image,i=t.video,a=t.mediaProps,c=t.transform,l=t.crop,d=l.x,h=l.y,m=t.rotation,f=t.zoom,C=t.cropShape,u=t.showGrid,v=t.style,y=v.containerStyle,R=v.cropAreaStyle,w=v.mediaStyle,p=t.classes,E=p.containerClassName,D=p.cropAreaClassName,L=p.mediaClassName,S=t.objectFit;return P.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(T){return e.containerRef=T},"data-testid":"container",style:y,className:F("reactEasyCrop_Container",E)},n?P.createElement("img",x({alt:"",className:F("reactEasyCrop_Image",S==="contain"&&"reactEasyCrop_Contain",S==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",S==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",S==="auto-cover"&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),L)},a,{src:n,ref:this.imageRef,style:x(x({},w),{transform:c||"translate(".concat(d,"px, ").concat(h,"px) rotate(").concat(m,"deg) scale(").concat(f,")")}),onLoad:this.onMediaLoad})):i&&P.createElement("video",x({autoPlay:!0,loop:!0,muted:!0,className:F("reactEasyCrop_Video",S==="contain"&&"reactEasyCrop_Contain",S==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",S==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",S==="auto-cover"&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),L)},a,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:x(x({},w),{transform:c||"translate(".concat(d,"px, ").concat(h,"px) rotate(").concat(m,"deg) scale(").concat(f,")")}),controls:!1}),(Array.isArray(i)?i:[{src:i}]).map(function(A){return P.createElement("source",x({key:A.src},A))})),this.state.cropSize&&P.createElement("div",{style:x(x({},R),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:F("reactEasyCrop_CropArea",C==="round"&&"reactEasyCrop_CropAreaRound",u&&"reactEasyCrop_CropAreaGrid",D)}))},r.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:Et,minZoom:Rt,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},r.getMousePoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},r.getTouchPoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},r}(P.Component);const Pt=[{name:"1 : 1",value:1/1},{name:"5 : 4",value:5/4},{name:"4 : 3",value:4/3},{name:"3 : 2",value:3/2},{name:"5 : 3",value:5/3},{name:"16 : 9",value:16/9},{name:"2 : 1",value:2/1}],Mt=({image:o,onCropDone:r,onCropCancel:e,load:t,onImageSelected:n})=>{const[i,a]=_.useState({x:0,y:0}),[c,l]=_.useState(1),[d,h]=_.useState(null),[m,f]=_.useState(4/3),C=_.useRef(null),u=w=>{if(w.target.files&&w.target.files.length>0){const p=new FileReader;p.readAsDataURL(w.target.files[0]),p.onload=function(E){n(p.result)}}},v=()=>{var w;(w=C.current)==null||w.click()},y=(w,p)=>{h(p)},R=w=>{f(w)};return g("div",{className:"cropper",children:[s(Dt,{image:o,aspect:m,crop:i,zoom:c,onCropChange:a,onZoomChange:l,onCropComplete:y,style:{containerStyle:{width:"100%",height:"80%",backgroundColor:"#fff"}}}),g("div",{className:"action-btns",children:[s("ul",{className:"spec_list",children:Pt.map(w=>s("li",{className:"spec_list_item",children:s(z,{title:w.name,size:"medium",color:m===w.value?"success":"inherit",variant:m===w.value?"contained":"text",onClick:()=>R(w.value)})},w.name))}),g("div",{className:"action-btns-bot",children:[g("div",{className:"bot_item",children:[s("input",{type:"file",accept:"image/*",ref:C,onChange:u,style:{display:"none"}}),s(z,{icon:s(Se,{}),title:"Open file",onClick:v,size:"large",variant:"outlined",color:"inherit"})]}),g("div",{className:"bot_item",children:[s(z,{size:"large",title:"Cancel",color:"error",variant:"text",onClick:e}),s(z,{size:"large",title:"Crop & Save",color:"success",load:t,onClick:()=>{r(d)}})]})]})]})]})};function zt({setOpen:o,onChange:r,original_url:e}){const[t,n]=_.useState(e||"");console.log(t);const[i,a]=_.useState("choose-img"),[c,l]=_.useState(""),d=u=>{n(u),a("crop-img")},{handle:h,result:m}=we();return s("div",{className:"crop_img_container",children:s(Mt,{image:t,onCropDone:async u=>{const v=document.createElement("canvas");v.width=u.width,v.height=u.height;const y=v.getContext("2d");let R=new Image;R.src=t,R.onload=function(){y==null||y.drawImage(R,u.x,u.y,u.width,u.height,0,0,u.width,u.height);const D=v.toDataURL("image/jpeg");l(D),a("img-cropped")};const{file:w,url:p}=await Ue(t,u);let E=new FormData;E.append("file",w),h({handleFn:()=>N.uploadImage(E),callback:D=>{o&&o(!1),r&&r(D)}})},onCropCancel:()=>{o&&o(!1)},onImageSelected:d,load:m.load})})}function Le(o){const r=Ce(),[e]=te(p=>[p.isSPA]),{open:t,setOpen:n,id:i}=o,{branch:a}=_.useContext(oe),[c,l]=_.useState(a.id),[d,h]=_.useState({media_id:null,original_url:null}),{handleSubmit:m,register:f,reset:C,setValue:u}=We({defaultValues:{villa_cate_name:"",description:""}});let v="post";i&&(v="put"),ye({queryKey:["CATEGORY",i],queryFn:()=>N.villaCateById(i??0),enabled:!!(i&&t),refetchOnWindowFocus:!1,onSuccess:p=>{var E,D,L,S,A,T;u("villa_cate_name",(E=p==null?void 0:p.data)==null?void 0:E.villa_cate_name),u("description",(D=p==null?void 0:p.data)==null?void 0:D.description),h({media_id:(S=(L=p==null?void 0:p.data)==null?void 0:L.villa_cate_image)==null?void 0:S.media_id,original_url:(T=(A=p==null?void 0:p.data)==null?void 0:A.villa_cate_image)==null?void 0:T.original_url})}});const{mutate:y,isLoading:R}=_e({mutationKey:"",mutationFn:p=>v==="post"?N.postVillaCate(p):N.putVillaCate(i??0,p),onSuccess:()=>{r.invalidateQueries({queryKey:["VILLA_CATE",a.id]}),n(!1),C()}}),w=async p=>{y({...p,branch_id:c,media_id:d.media_id})};return s(xe,{open:t,onClose:()=>n(!1),children:g("div",{className:"villa_cate_form",children:[s("div",{className:"form_cnt-header",children:v==="post"?"Create new category":"Update Category"}),g("div",{className:"form_cnt-body",children:[g("div",{className:"body_img_cnt",children:[s("img",{src:(d==null?void 0:d.original_url)||"",alt:""}),s("div",{className:"change_img",children:s(Nt,{setImage:h,image:d})})]}),s("div",{className:"body_desc_cnt",children:g("form",{onSubmit:m(w),children:[g("div",{children:[e&&g("div",{className:"form_column",children:[s("label",{className:"form-label required",children:"Branch"}),s(je,{})]}),g("div",{className:"form_column",children:[s("label",{className:"form-label required",children:"Category name"}),s("input",{type:"text",className:"form-control form-control-solid",...f("villa_cate_name",{required:!0})})]}),g("div",{className:"form_column",children:[s("label",{className:"form-label required",children:"Description"}),s("input",{type:"text",className:"form-control form-control-solid",...f("description",{required:!0})})]})]}),g("div",{className:"form_bottom",children:[s(z,{title:"Cancel",color:"error",variant:"text",onClick:()=>n(!1)}),s(z,{title:"Save",type:"submit",load:R})]})]})})]})]})})}const Nt=o=>{const{setImage:r,image:e}=o,[t,n]=_.useState(!1);return g(H,{children:[s(q,{onClick:()=>n(!0),style:{backgroundColor:"var(--kt-white)"},children:s(Ee,{})}),s(xe,{open:t,onClose:()=>n(!1),children:s("div",{className:"villa_cate_crop_img",children:s(zt,{setOpen:n,onChange:a=>{var c,l;r({media_id:(c=a==null?void 0:a.data)==null?void 0:c.id,original_url:(l=a==null?void 0:a.data)==null?void 0:l.original_url})},original_url:e.original_url??""})})})]})};function Vt(){var n;const{branch:o}=_.useContext(oe),[r]=te(i=>[i.isSPA]);let e;r||(e=o==null?void 0:o.id);const{data:t}=ye({queryKey:["VILLA_CATE",o.id],queryFn:()=>N.villaCates({branch_id:e}),refetchOnWindowFocus:!1});return g(H,{children:[s(Oe,{children:"Villa category"}),g("div",{className:"card card-account card-villa-cate",children:[s("div",{className:"card-header border-0 pt-5",children:s("div",{className:"card-toolbar",children:s(At,{})})}),s("div",{className:"card-body py-3",children:s("div",{className:"table-responsive",children:g("table",{className:"table align-middle gs-0 gy-4",children:[s("thead",{children:g("tr",{className:"fw-bold text-muted bg-light",children:[s("th",{className:"min-w-100px",children:"Icon"}),s("th",{className:"ps-4 min-w-200px rounded-start",children:"Category name"}),r&&s("th",{className:"ps-4 min-w-200px rounded-start",children:"Branch name"}),s("th",{className:"min-w-80px",children:"Status"}),s("th",{className:"min-w-200px",children:"Description"}),s("th",{className:"min-w-150px",children:"Created at"}),s("th",{className:"min-w-150px",children:"Updated at"}),s("th",{className:"min-w-100px"})]})}),s("tbody",{children:(n=t==null?void 0:t.data)==null?void 0:n.map((i,a)=>s(It,{item:i},a))})]})})})]})]})}const At=()=>{const[o,r]=_.useState(!1);return g(H,{children:[s(z,{title:"Create new category",variant:"contained",onClick:()=>r(!0)}),s(Le,{open:o,setOpen:r})]})},It=({item:o})=>{var f,C;const{branch:r}=_.useContext(oe),e=Ce(),[t]=te(u=>[u.isSPA]),[n,i]=_.useState(!1),{handle:a}=we(),[c,l]=_.useState(o.status),d=u=>{a({handleFn:()=>N.putVillaCate(o.id,{status:u.target.checked})}),l(u.target.checked)},{isLoading:h,mutate:m}=_e({mutationKey:["DELETE_CATE",o.id],mutationFn:()=>N.deleteVillaCate(o.id),onSuccess:()=>{e.invalidateQueries({queryKey:["VILLA_CATE",r.id]})}});return g(H,{children:[g("tr",{children:[s("td",{children:s("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:s(He,{alt:"",src:((f=o.villa_cate_image)==null?void 0:f.original_url)??""})})}),s("td",{children:s("div",{className:"d-flex align-items-center",children:s("div",{className:"d-flex justify-content-start flex-column",children:s("span",{className:"text-dark fw-bold text-hover-primary mb-1 fs-6",children:o.villa_cate_name})})})}),t&&s("td",{children:s("div",{className:"d-flex align-items-center",children:s("div",{className:"d-flex justify-content-start flex-column",children:s("span",{className:"text-dark fw-bold  mb-1 fs-6",children:(C=o.branch)==null?void 0:C.name})})})}),s("td",{children:s("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:s(Fe,{onChange:d,checked:c})})}),s("td",{children:s("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:o.description})}),s("td",{children:s("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:le(o.created_at).format("DD/MM/YYYY HH:mm")})}),s("td",{children:s("span",{className:"text-muted fw-semobold text-muted d-block fs-7",children:le(o.updated_at).format("DD/MM/YYYY HH:mm")})}),g("td",{children:[s(q,{size:"small",style:{backgroundColor:"var(--kt-gray-200)"},onClick:()=>i(!0),children:s(ke,{color:"success"})}),s(q,{disabled:h,size:"small",style:{backgroundColor:"var(--kt-gray-200)",marginLeft:"8px"},onClick:()=>m(),children:h?s(Re,{color:"error"}):s(Ze,{color:"error"})})]})]}),s(Le,{open:n,setOpen:i,id:o.id})]})};export{Vt as default};