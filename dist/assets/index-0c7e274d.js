import{aD as _e,a as S,r as x,c as D,j as g,q as A,s as xe,w as Re,F as Se,I as Ee}from"./index-97d1d3fe.js";import{r as se,i as ce,a as he}from"./jsx-runtime_commonjs-proxy-4ae2505d.js";import{D as be}from"./Dialog-25d51f56.js";const De=r=>new Promise((o,e)=>{const t=new Image;t.addEventListener("load",()=>o(t)),t.addEventListener("error",n=>e(n)),t.setAttribute("crossOrigin","anonymous"),t.src=r}),ue=r=>r*Math.PI/180;function ze(r,o,e){const t=ue(e);return{width:Math.abs(Math.cos(t)*r)+Math.abs(Math.sin(t)*o),height:Math.abs(Math.sin(t)*r)+Math.abs(Math.cos(t)*o)}}const Pe=async(r,o,e=0,t={horizontal:!1,vertical:!1})=>{const n=await De(r),i=document.createElement("canvas"),a=i.getContext("2d");if(!a)return null;const s=ue(e),{width:c,height:h}=ze(n.width,n.height,e);i.width=c,i.height=h,a.translate(c/2,h/2),a.rotate(s),a.scale(t.horizontal?-1:1,t.vertical?-1:1),a.translate(-n.width/2,-n.height/2),a.drawImage(n,0,0);const u=a.getImageData(o.x,o.y,o.width,o.height);return i.width=o.width,i.height=o.height,a.putImageData(u,0,0),new Promise((l,v)=>{i.toBlob(w=>{w.name="cropped.jpeg",l({file:w,url:URL.createObjectURL(w)})},"image/jpeg")})};var Y={},Me=ce;Object.defineProperty(Y,"__esModule",{value:!0});var pe=Y.default=void 0,Ae=Me(se()),We=he,Ie=(0,Ae.default)((0,We.jsx)("path",{d:"M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"}),"FileUpload");pe=Y.default=Ie;var J={},Ne=ce;Object.defineProperty(J,"__esModule",{value:!0});var le=J.default=void 0,Te=Ne(se()),Le=he,Oe=(0,Te.default)((0,Le.jsx)("path",{d:"M3 4V1h2v3h3v2H5v3H3V6H0V4h3zm3 6V7h3V4h7l1.83 2H21c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V10h3zm7 9c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-3.2-5c0 1.77 1.43 3.2 3.2 3.2s3.2-1.43 3.2-3.2-1.43-3.2-3.2-3.2-3.2 1.43-3.2 3.2z"}),"AddAPhoto");le=J.default=Oe;/*! *****************************************************************************
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
***************************************************************************** */var j=function(r,o){return j=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},j(r,o)};function Ze(r,o){j(r,o);function e(){this.constructor=r}r.prototype=o===null?Object.create(o):(e.prototype=o.prototype,new e)}var m=function(){return m=Object.assign||function(o){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(o[i]=e[i])}return o},m.apply(this,arguments)},H={},Fe={get exports(){return H},set exports(r){H=r}},Q=!1,b,U,k,T,L,de,O,V,G,B,fe,X,$,ve,me;function y(){if(!Q){Q=!0;var r=navigator.userAgent,o=/(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(r),e=/(Mac OS X)|(Windows)|(Linux)/.exec(r);if(X=/\b(iPhone|iP[ao]d)/.exec(r),$=/\b(iP[ao]d)/.exec(r),B=/Android/i.exec(r),ve=/FBAN\/\w+;/i.exec(r),me=/Mobile/i.exec(r),fe=!!/Win64/.exec(r),o){b=o[1]?parseFloat(o[1]):o[5]?parseFloat(o[5]):NaN,b&&document&&document.documentMode&&(b=document.documentMode);var t=/(?:Trident\/(\d+.\d+))/.exec(r);de=t?parseFloat(t[1])+4:b,U=o[2]?parseFloat(o[2]):NaN,k=o[3]?parseFloat(o[3]):NaN,T=o[4]?parseFloat(o[4]):NaN,T?(o=/(?:Chrome\/(\d+\.\d+))/.exec(r),L=o&&o[1]?parseFloat(o[1]):NaN):L=NaN}else b=U=k=L=T=NaN;if(e){if(e[1]){var n=/(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(r);O=n?parseFloat(n[1].replace("_",".")):!0}else O=!1;V=!!e[2],G=!!e[3]}else O=V=G=!1}}var q={ie:function(){return y()||b},ieCompatibilityMode:function(){return y()||de>b},ie64:function(){return q.ie()&&fe},firefox:function(){return y()||U},opera:function(){return y()||k},webkit:function(){return y()||T},safari:function(){return q.webkit()},chrome:function(){return y()||L},windows:function(){return y()||V},osx:function(){return y()||O},linux:function(){return y()||G},iphone:function(){return y()||X},mobile:function(){return y()||X||$||B||me},nativeApp:function(){return y()||ve},android:function(){return y()||B},ipad:function(){return y()||$}},je=q,W=!!(typeof window<"u"&&window.document&&window.document.createElement),He={canUseDOM:W,canUseWorkers:typeof Worker<"u",canUseEventListeners:W&&!!(window.addEventListener||window.attachEvent),canUseViewport:W&&!!window.screen,isInWorker:!W},Ue=He,ge=Ue,we;ge.canUseDOM&&(we=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0);/**
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
 */function ke(r,o){if(!ge.canUseDOM||o&&!("addEventListener"in document))return!1;var e="on"+r,t=e in document;if(!t){var n=document.createElement("div");n.setAttribute(e,"return;"),t=typeof n[e]=="function"}return!t&&we&&r==="wheel"&&(t=document.implementation.hasFeature("Events.wheel","3.0")),t}var Ve=ke,Ge=je,Be=Ve,ee=10,te=40,oe=800;function Ce(r){var o=0,e=0,t=0,n=0;return"detail"in r&&(e=r.detail),"wheelDelta"in r&&(e=-r.wheelDelta/120),"wheelDeltaY"in r&&(e=-r.wheelDeltaY/120),"wheelDeltaX"in r&&(o=-r.wheelDeltaX/120),"axis"in r&&r.axis===r.HORIZONTAL_AXIS&&(o=e,e=0),t=o*ee,n=e*ee,"deltaY"in r&&(n=r.deltaY),"deltaX"in r&&(t=r.deltaX),(t||n)&&r.deltaMode&&(r.deltaMode==1?(t*=te,n*=te):(t*=oe,n*=oe)),t&&!o&&(o=t<1?-1:1),n&&!e&&(e=n<1?-1:1),{spinX:o,spinY:e,pixelX:t,pixelY:n}}Ce.getEventType=function(){return Ge.firefox()?"DOMMouseScroll":Be("wheel")?"wheel":"mousewheel"};var Xe=Ce;(function(r){r.exports=Xe})(Fe);const $e=_e(H);function qe(r,o,e,t,n,i){i===void 0&&(i=0);var a=z(r,o,i),s=a.width,c=a.height,h=Math.min(s,e),u=Math.min(c,t);return h>u*n?{width:u*n,height:u}:{width:h,height:h/n}}function Ye(r){return r.width>r.height?r.width/r.naturalWidth:r.height/r.naturalHeight}function I(r,o,e,t,n){n===void 0&&(n=0);var i=z(o.width,o.height,n),a=i.width,s=i.height;return{x:re(r.x,a,e.width,t),y:re(r.y,s,e.height,t)}}function re(r,o,e,t){var n=o*t/2-e/2;return Z(r,-n,n)}function ne(r,o){return Math.sqrt(Math.pow(r.y-o.y,2)+Math.pow(r.x-o.x,2))}function ie(r,o){return Math.atan2(o.y-r.y,o.x-r.x)*180/Math.PI}function Je(r,o,e,t,n,i,a){i===void 0&&(i=0),a===void 0&&(a=!0);var s=a?Ke:Qe,c=z(o.width,o.height,i),h=z(o.naturalWidth,o.naturalHeight,i),u={x:s(100,((c.width-e.width/n)/2-r.x/n)/c.width*100),y:s(100,((c.height-e.height/n)/2-r.y/n)/c.height*100),width:s(100,e.width/c.width*100/n),height:s(100,e.height/c.height*100/n)},l=Math.round(s(h.width,u.width*h.width/100)),v=Math.round(s(h.height,u.height*h.height/100)),w=h.width>=h.height*t,p=w?{width:Math.round(v*t),height:v}:{width:l,height:Math.round(l/t)},f=m(m({},p),{x:Math.round(s(h.width-p.width,u.x*h.width/100)),y:Math.round(s(h.height-p.height,u.y*h.height/100))});return{croppedAreaPercentages:u,croppedAreaPixels:f}}function Ke(r,o){return Math.min(r,Math.max(0,o))}function Qe(r,o){return o}function et(r,o,e,t,n,i){var a=z(o.width,o.height,e),s=Z(t.width/a.width*(100/r.width),n,i),c={x:s*a.width/2-t.width/2-a.width*s*(r.x/100),y:s*a.height/2-t.height/2-a.height*s*(r.y/100)};return{crop:c,zoom:s}}function tt(r,o,e){var t=Ye(o);return e.height>e.width?e.height/(r.height*t):e.width/(r.width*t)}function ot(r,o,e,t,n,i){e===void 0&&(e=0);var a=z(o.naturalWidth,o.naturalHeight,e),s=Z(tt(r,o,t),n,i),c=t.height>t.width?t.height/r.height:t.width/r.width,h={x:((a.width-r.width)/2-r.x)*c,y:((a.height-r.height)/2-r.y)*c};return{crop:h,zoom:s}}function ae(r,o){return{x:(o.x+r.x)/2,y:(o.y+r.y)/2}}function rt(r){return r*Math.PI/180}function z(r,o,e){var t=rt(e);return{width:Math.abs(Math.cos(t)*r)+Math.abs(Math.sin(t)*o),height:Math.abs(Math.sin(t)*r)+Math.abs(Math.cos(t)*o)}}function Z(r,o,e){return Math.min(Math.max(r,o),e)}function N(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];return r.filter(function(e){return typeof e=="string"&&e.length>0}).join(" ").trim()}var nt=`.reactEasyCrop_Container {
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
`,it=1,at=3,st=function(r){Ze(o,r);function o(){var e=r!==null&&r.apply(this,arguments)||this;return e.imageRef=S.createRef(),e.videoRef=S.createRef(),e.containerRef=null,e.styleRef=null,e.containerRect=null,e.mediaSize={width:0,height:0,naturalWidth:0,naturalHeight:0},e.dragStartPosition={x:0,y:0},e.dragStartCrop={x:0,y:0},e.gestureZoomStart=0,e.gestureRotationStart=0,e.isTouching=!1,e.lastPinchDistance=0,e.lastPinchRotation=0,e.rafDragTimeout=null,e.rafPinchTimeout=null,e.wheelTimer=null,e.currentDoc=typeof document<"u"?document:null,e.currentWindow=typeof window<"u"?window:null,e.resizeObserver=null,e.state={cropSize:null,hasWheelJustStarted:!1},e.initResizeObserver=function(){if(!(typeof window.ResizeObserver>"u"||!e.containerRef)){var t=!0;e.resizeObserver=new window.ResizeObserver(function(n){if(t){t=!1;return}e.computeSizes()}),e.resizeObserver.observe(e.containerRef)}},e.preventZoomSafari=function(t){return t.preventDefault()},e.cleanEvents=function(){e.currentDoc&&(e.currentDoc.removeEventListener("mousemove",e.onMouseMove),e.currentDoc.removeEventListener("mouseup",e.onDragStopped),e.currentDoc.removeEventListener("touchmove",e.onTouchMove),e.currentDoc.removeEventListener("touchend",e.onDragStopped),e.currentDoc.removeEventListener("gesturemove",e.onGestureMove),e.currentDoc.removeEventListener("gestureend",e.onGestureEnd))},e.clearScrollEvent=function(){e.containerRef&&e.containerRef.removeEventListener("wheel",e.onWheel),e.wheelTimer&&clearTimeout(e.wheelTimer)},e.onMediaLoad=function(){var t=e.computeSizes();t&&(e.emitCropData(),e.setInitialCrop(t)),e.props.onMediaLoaded&&e.props.onMediaLoaded(e.mediaSize)},e.setInitialCrop=function(t){if(e.props.initialCroppedAreaPercentages){var n=et(e.props.initialCroppedAreaPercentages,e.mediaSize,e.props.rotation,t,e.props.minZoom,e.props.maxZoom),i=n.crop,a=n.zoom;e.props.onCropChange(i),e.props.onZoomChange&&e.props.onZoomChange(a)}else if(e.props.initialCroppedAreaPixels){var s=ot(e.props.initialCroppedAreaPixels,e.mediaSize,e.props.rotation,t,e.props.minZoom,e.props.maxZoom),i=s.crop,a=s.zoom;e.props.onCropChange(i),e.props.onZoomChange&&e.props.onZoomChange(a)}},e.computeSizes=function(){var t,n,i,a,s,c,h=e.imageRef.current||e.videoRef.current;if(h&&e.containerRef){e.containerRect=e.containerRef.getBoundingClientRect();var u=e.containerRect.width/e.containerRect.height,l=((t=e.imageRef.current)===null||t===void 0?void 0:t.naturalWidth)||((n=e.videoRef.current)===null||n===void 0?void 0:n.videoWidth)||0,v=((i=e.imageRef.current)===null||i===void 0?void 0:i.naturalHeight)||((a=e.videoRef.current)===null||a===void 0?void 0:a.videoHeight)||0,w=h.offsetWidth<l||h.offsetHeight<v,p=l/v,f=void 0;if(w)switch(e.props.objectFit){default:case"contain":f=u>p?{width:e.containerRect.height*p,height:e.containerRect.height}:{width:e.containerRect.width,height:e.containerRect.width/p};break;case"horizontal-cover":f={width:e.containerRect.width,height:e.containerRect.width/p};break;case"vertical-cover":f={width:e.containerRect.height*p,height:e.containerRect.height};break;case"auto-cover":f=l>v?{width:e.containerRect.width,height:e.containerRect.width/p}:{width:e.containerRect.height*p,height:e.containerRect.height};break}else f={width:h.offsetWidth,height:h.offsetHeight};e.mediaSize=m(m({},f),{naturalWidth:l,naturalHeight:v}),e.props.setMediaSize&&e.props.setMediaSize(e.mediaSize);var C=e.props.cropSize?e.props.cropSize:qe(e.mediaSize.width,e.mediaSize.height,e.containerRect.width,e.containerRect.height,e.props.aspect,e.props.rotation);return(((s=e.state.cropSize)===null||s===void 0?void 0:s.height)!==C.height||((c=e.state.cropSize)===null||c===void 0?void 0:c.width)!==C.width)&&e.props.onCropSizeChange&&e.props.onCropSizeChange(C),e.setState({cropSize:C},e.recomputeCropPosition),e.props.setCropSize&&e.props.setCropSize(C),C}},e.onMouseDown=function(t){e.currentDoc&&(t.preventDefault(),e.currentDoc.addEventListener("mousemove",e.onMouseMove),e.currentDoc.addEventListener("mouseup",e.onDragStopped),e.onDragStart(o.getMousePoint(t)))},e.onMouseMove=function(t){return e.onDrag(o.getMousePoint(t))},e.onTouchStart=function(t){e.currentDoc&&(e.isTouching=!0,!(e.props.onTouchRequest&&!e.props.onTouchRequest(t))&&(e.currentDoc.addEventListener("touchmove",e.onTouchMove,{passive:!1}),e.currentDoc.addEventListener("touchend",e.onDragStopped),t.touches.length===2?e.onPinchStart(t):t.touches.length===1&&e.onDragStart(o.getTouchPoint(t.touches[0]))))},e.onTouchMove=function(t){t.preventDefault(),t.touches.length===2?e.onPinchMove(t):t.touches.length===1&&e.onDrag(o.getTouchPoint(t.touches[0]))},e.onGestureStart=function(t){e.currentDoc&&(t.preventDefault(),e.currentDoc.addEventListener("gesturechange",e.onGestureMove),e.currentDoc.addEventListener("gestureend",e.onGestureEnd),e.gestureZoomStart=e.props.zoom,e.gestureRotationStart=e.props.rotation)},e.onGestureMove=function(t){if(t.preventDefault(),!e.isTouching){var n=o.getMousePoint(t),i=e.gestureZoomStart-1+t.scale;if(e.setNewZoom(i,n,{shouldUpdatePosition:!0}),e.props.onRotationChange){var a=e.gestureRotationStart+t.rotation;e.props.onRotationChange(a)}}},e.onGestureEnd=function(t){e.cleanEvents()},e.onDragStart=function(t){var n,i,a=t.x,s=t.y;e.dragStartPosition={x:a,y:s},e.dragStartCrop=m({},e.props.crop),(i=(n=e.props).onInteractionStart)===null||i===void 0||i.call(n)},e.onDrag=function(t){var n=t.x,i=t.y;e.currentWindow&&(e.rafDragTimeout&&e.currentWindow.cancelAnimationFrame(e.rafDragTimeout),e.rafDragTimeout=e.currentWindow.requestAnimationFrame(function(){if(e.state.cropSize&&!(n===void 0||i===void 0)){var a=n-e.dragStartPosition.x,s=i-e.dragStartPosition.y,c={x:e.dragStartCrop.x+a,y:e.dragStartCrop.y+s},h=e.props.restrictPosition?I(c,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):c;e.props.onCropChange(h)}}))},e.onDragStopped=function(){var t,n;e.isTouching=!1,e.cleanEvents(),e.emitCropData(),(n=(t=e.props).onInteractionEnd)===null||n===void 0||n.call(t)},e.onWheel=function(t){if(e.currentWindow&&!(e.props.onWheelRequest&&!e.props.onWheelRequest(t))){t.preventDefault();var n=o.getMousePoint(t),i=$e(t).pixelY,a=e.props.zoom-i*e.props.zoomSpeed/200;e.setNewZoom(a,n,{shouldUpdatePosition:!0}),e.state.hasWheelJustStarted||e.setState({hasWheelJustStarted:!0},function(){var s,c;return(c=(s=e.props).onInteractionStart)===null||c===void 0?void 0:c.call(s)}),e.wheelTimer&&clearTimeout(e.wheelTimer),e.wheelTimer=e.currentWindow.setTimeout(function(){return e.setState({hasWheelJustStarted:!1},function(){var s,c;return(c=(s=e.props).onInteractionEnd)===null||c===void 0?void 0:c.call(s)})},250)}},e.getPointOnContainer=function(t){var n=t.x,i=t.y;if(!e.containerRect)throw new Error("The Cropper is not mounted");return{x:e.containerRect.width/2-(n-e.containerRect.left),y:e.containerRect.height/2-(i-e.containerRect.top)}},e.getPointOnMedia=function(t){var n=t.x,i=t.y,a=e.props,s=a.crop,c=a.zoom;return{x:(n+s.x)/c,y:(i+s.y)/c}},e.setNewZoom=function(t,n,i){var a=i===void 0?{}:i,s=a.shouldUpdatePosition,c=s===void 0?!0:s;if(!(!e.state.cropSize||!e.props.onZoomChange)){var h=Z(t,e.props.minZoom,e.props.maxZoom);if(c){var u=e.getPointOnContainer(n),l=e.getPointOnMedia(u),v={x:l.x*h-u.x,y:l.y*h-u.y},w=e.props.restrictPosition?I(v,e.mediaSize,e.state.cropSize,h,e.props.rotation):v;e.props.onCropChange(w)}e.props.onZoomChange(h)}},e.getCropData=function(){if(!e.state.cropSize)return null;var t=e.props.restrictPosition?I(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;return Je(t,e.mediaSize,e.state.cropSize,e.getAspect(),e.props.zoom,e.props.rotation,e.props.restrictPosition)},e.emitCropData=function(){var t=e.getCropData();if(t){var n=t.croppedAreaPercentages,i=t.croppedAreaPixels;e.props.onCropComplete&&e.props.onCropComplete(n,i),e.props.onCropAreaChange&&e.props.onCropAreaChange(n,i)}},e.emitCropAreaChange=function(){var t=e.getCropData();if(t){var n=t.croppedAreaPercentages,i=t.croppedAreaPixels;e.props.onCropAreaChange&&e.props.onCropAreaChange(n,i)}},e.recomputeCropPosition=function(){if(e.state.cropSize){var t=e.props.restrictPosition?I(e.props.crop,e.mediaSize,e.state.cropSize,e.props.zoom,e.props.rotation):e.props.crop;e.props.onCropChange(t),e.emitCropData()}},e}return o.prototype.componentDidMount=function(){!this.currentDoc||!this.currentWindow||(this.containerRef&&(this.containerRef.ownerDocument&&(this.currentDoc=this.containerRef.ownerDocument),this.currentDoc.defaultView&&(this.currentWindow=this.currentDoc.defaultView),this.initResizeObserver(),typeof window.ResizeObserver>"u"&&this.currentWindow.addEventListener("resize",this.computeSizes),this.props.zoomWithScroll&&this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}),this.containerRef.addEventListener("gesturestart",this.onGestureStart)),this.props.disableAutomaticStylesInjection||(this.styleRef=this.currentDoc.createElement("style"),this.styleRef.setAttribute("type","text/css"),this.props.nonce&&this.styleRef.setAttribute("nonce",this.props.nonce),this.styleRef.innerHTML=nt,this.currentDoc.head.appendChild(this.styleRef)),this.imageRef.current&&this.imageRef.current.complete&&this.onMediaLoad(),this.props.setImageRef&&this.props.setImageRef(this.imageRef),this.props.setVideoRef&&this.props.setVideoRef(this.videoRef))},o.prototype.componentWillUnmount=function(){var e,t;!this.currentDoc||!this.currentWindow||(typeof window.ResizeObserver>"u"&&this.currentWindow.removeEventListener("resize",this.computeSizes),(e=this.resizeObserver)===null||e===void 0||e.disconnect(),this.containerRef&&this.containerRef.removeEventListener("gesturestart",this.preventZoomSafari),this.styleRef&&((t=this.styleRef.parentNode)===null||t===void 0||t.removeChild(this.styleRef)),this.cleanEvents(),this.props.zoomWithScroll&&this.clearScrollEvent())},o.prototype.componentDidUpdate=function(e){var t,n,i,a,s,c,h,u,l;e.rotation!==this.props.rotation?(this.computeSizes(),this.recomputeCropPosition()):e.aspect!==this.props.aspect?this.computeSizes():e.zoom!==this.props.zoom?this.recomputeCropPosition():((t=e.cropSize)===null||t===void 0?void 0:t.height)!==((n=this.props.cropSize)===null||n===void 0?void 0:n.height)||((i=e.cropSize)===null||i===void 0?void 0:i.width)!==((a=this.props.cropSize)===null||a===void 0?void 0:a.width)?this.computeSizes():(((s=e.crop)===null||s===void 0?void 0:s.x)!==((c=this.props.crop)===null||c===void 0?void 0:c.x)||((h=e.crop)===null||h===void 0?void 0:h.y)!==((u=this.props.crop)===null||u===void 0?void 0:u.y))&&this.emitCropAreaChange(),e.zoomWithScroll!==this.props.zoomWithScroll&&this.containerRef&&(this.props.zoomWithScroll?this.containerRef.addEventListener("wheel",this.onWheel,{passive:!1}):this.clearScrollEvent()),e.video!==this.props.video&&((l=this.videoRef.current)===null||l===void 0||l.load())},o.prototype.getAspect=function(){var e=this.props,t=e.cropSize,n=e.aspect;return t?t.width/t.height:n},o.prototype.onPinchStart=function(e){var t=o.getTouchPoint(e.touches[0]),n=o.getTouchPoint(e.touches[1]);this.lastPinchDistance=ne(t,n),this.lastPinchRotation=ie(t,n),this.onDragStart(ae(t,n))},o.prototype.onPinchMove=function(e){var t=this;if(!(!this.currentDoc||!this.currentWindow)){var n=o.getTouchPoint(e.touches[0]),i=o.getTouchPoint(e.touches[1]),a=ae(n,i);this.onDrag(a),this.rafPinchTimeout&&this.currentWindow.cancelAnimationFrame(this.rafPinchTimeout),this.rafPinchTimeout=this.currentWindow.requestAnimationFrame(function(){var s=ne(n,i),c=t.props.zoom*(s/t.lastPinchDistance);t.setNewZoom(c,a,{shouldUpdatePosition:!1}),t.lastPinchDistance=s;var h=ie(n,i),u=t.props.rotation+(h-t.lastPinchRotation);t.props.onRotationChange&&t.props.onRotationChange(u),t.lastPinchRotation=h})}},o.prototype.render=function(){var e=this,t=this.props,n=t.image,i=t.video,a=t.mediaProps,s=t.transform,c=t.crop,h=c.x,u=c.y,l=t.rotation,v=t.zoom,w=t.cropShape,p=t.showGrid,f=t.style,C=f.containerStyle,E=f.cropAreaStyle,d=f.mediaStyle,_=t.classes,P=_.containerClassName,M=_.cropAreaClassName,K=_.mediaClassName,R=t.objectFit;return S.createElement("div",{onMouseDown:this.onMouseDown,onTouchStart:this.onTouchStart,ref:function(ye){return e.containerRef=ye},"data-testid":"container",style:C,className:N("reactEasyCrop_Container",P)},n?S.createElement("img",m({alt:"",className:N("reactEasyCrop_Image",R==="contain"&&"reactEasyCrop_Contain",R==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",R==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",R==="auto-cover"&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),K)},a,{src:n,ref:this.imageRef,style:m(m({},d),{transform:s||"translate(".concat(h,"px, ").concat(u,"px) rotate(").concat(l,"deg) scale(").concat(v,")")}),onLoad:this.onMediaLoad})):i&&S.createElement("video",m({autoPlay:!0,loop:!0,muted:!0,className:N("reactEasyCrop_Video",R==="contain"&&"reactEasyCrop_Contain",R==="horizontal-cover"&&"reactEasyCrop_Cover_Horizontal",R==="vertical-cover"&&"reactEasyCrop_Cover_Vertical",R==="auto-cover"&&(this.mediaSize.naturalWidth>this.mediaSize.naturalHeight?"reactEasyCrop_Cover_Horizontal":"reactEasyCrop_Cover_Vertical"),K)},a,{ref:this.videoRef,onLoadedMetadata:this.onMediaLoad,style:m(m({},d),{transform:s||"translate(".concat(h,"px, ").concat(u,"px) rotate(").concat(l,"deg) scale(").concat(v,")")}),controls:!1}),(Array.isArray(i)?i:[{src:i}]).map(function(F){return S.createElement("source",m({key:F.src},F))})),this.state.cropSize&&S.createElement("div",{style:m(m({},E),{width:this.state.cropSize.width,height:this.state.cropSize.height}),"data-testid":"cropper",className:N("reactEasyCrop_CropArea",w==="round"&&"reactEasyCrop_CropAreaRound",p&&"reactEasyCrop_CropAreaGrid",M)}))},o.defaultProps={zoom:1,rotation:0,aspect:4/3,maxZoom:at,minZoom:it,cropShape:"rect",objectFit:"contain",showGrid:!0,style:{},classes:{},mediaProps:{},zoomSpeed:1,restrictPosition:!0,zoomWithScroll:!0},o.getMousePoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},o.getTouchPoint=function(e){return{x:Number(e.clientX),y:Number(e.clientY)}},o}(S.Component);const ct=[{name:"1 : 1",value:1/1},{name:"5 : 4",value:5/4},{name:"4 : 3",value:4/3},{name:"3 : 2",value:3/2},{name:"5 : 3",value:5/3},{name:"16 : 9",value:16/9},{name:"2 : 1",value:2/1}],ht=({image:r,onCropDone:o,onCropCancel:e,load:t,onImageSelected:n})=>{const[i,a]=x.useState({x:0,y:0}),[s,c]=x.useState(1),[h,u]=x.useState(null),[l,v]=x.useState(4/3),w=x.useRef(null),p=d=>{if(d.target.files&&d.target.files.length>0){const _=new FileReader;_.readAsDataURL(d.target.files[0]),_.onload=function(P){n(_.result)}}},f=()=>{var d;(d=w.current)==null||d.click()},C=(d,_)=>{u(_)},E=d=>{v(d)};return D("div",{className:"cropper",children:[g(st,{image:r,aspect:l,crop:i,zoom:s,onCropChange:a,onZoomChange:c,onCropComplete:C,style:{containerStyle:{width:"100%",height:"80%",backgroundColor:"#fff"}}}),D("div",{className:"action-btns",children:[g("ul",{className:"spec_list",children:ct.map(d=>g("li",{className:"spec_list_item",children:g(A,{title:d.name,size:"medium",color:l===d.value?"success":"inherit",variant:l===d.value?"contained":"text",onClick:()=>E(d.value)})},d.name))}),D("div",{className:"action-btns-bot",children:[D("div",{className:"bot_item",children:[g("input",{type:"file",accept:"image/*",ref:w,onChange:p,style:{display:"none"}}),g(A,{icon:g(pe,{}),title:"Open file",onClick:f,size:"large",variant:"outlined",color:"inherit"})]}),D("div",{className:"bot_item",children:[g(A,{size:"large",title:"Cancel",color:"error",variant:"text",onClick:e}),g(A,{size:"large",title:"Crop & Save",color:"success",load:t,onClick:()=>{o(h)}})]})]})]})]})};function ut({setOpen:r,onChange:o,original_url:e}){const[t,n]=x.useState(e||""),[i,a]=x.useState("choose-img"),[s,c]=x.useState(""),h=p=>{n(p),a("crop-img")},{handle:u,result:l}=xe();return g("div",{className:"crop_img_container",children:g(ht,{image:t,onCropDone:async p=>{const f=document.createElement("canvas");f.width=p.width,f.height=p.height;const C=f.getContext("2d");let E=new Image;E.src=t,E.onload=function(){C==null||C.drawImage(E,p.x,p.y,p.width,p.height,0,0,p.width,p.height);const M=f.toDataURL("image/jpeg");c(M),a("img-cropped")};const{file:d,url:_}=await Pe(t,p);let P=new FormData;P.append("file",d),u({handleFn:()=>Re.uploadImage(P),callback:M=>{r&&r(!1),o&&o(M)}})},onCropCancel:()=>{r&&r(!1)},onImageSelected:h,load:l.load})})}const ft=r=>{const{setImage:o,image:e}=r,[t,n]=x.useState(!1);return D(Se,{children:[g(Ee,{onClick:()=>n(!0),style:{backgroundColor:"var(--kt-white)"},children:g(le,{})}),g(be,{open:t,onClose:()=>n(!1),children:g("div",{className:"dia-upload",children:g(ut,{setOpen:n,onChange:a=>{var s,c;o({media_id:(s=a==null?void 0:a.data)==null?void 0:s.id,original_url:(c=a==null?void 0:a.data)==null?void 0:c.original_url})},original_url:e.original_url??""})})})]})};export{ft as U};
