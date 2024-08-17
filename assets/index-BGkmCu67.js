(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function qs(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var X0={exports:{}},ac={},q0={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys=Symbol.for("react.element"),YS=Symbol.for("react.portal"),KS=Symbol.for("react.fragment"),ZS=Symbol.for("react.strict_mode"),QS=Symbol.for("react.profiler"),JS=Symbol.for("react.provider"),eM=Symbol.for("react.context"),tM=Symbol.for("react.forward_ref"),nM=Symbol.for("react.suspense"),iM=Symbol.for("react.memo"),rM=Symbol.for("react.lazy"),Om=Symbol.iterator;function oM(t){return t===null||typeof t!="object"?null:(t=Om&&t[Om]||t["@@iterator"],typeof t=="function"?t:null)}var Y0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K0=Object.assign,Z0={};function Ta(t,e,n){this.props=t,this.context=e,this.refs=Z0,this.updater=n||Y0}Ta.prototype.isReactComponent={};Ta.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ta.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Q0(){}Q0.prototype=Ta.prototype;function np(t,e,n){this.props=t,this.context=e,this.refs=Z0,this.updater=n||Y0}var ip=np.prototype=new Q0;ip.constructor=np;K0(ip,Ta.prototype);ip.isPureReactComponent=!0;var Nm=Array.isArray,J0=Object.prototype.hasOwnProperty,rp={current:null},e_={key:!0,ref:!0,__self:!0,__source:!0};function t_(t,e,n){var i,r={},o=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(o=""+e.key),e)J0.call(e,i)&&!e_.hasOwnProperty(i)&&(r[i]=e[i]);var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in s=t.defaultProps,s)r[i]===void 0&&(r[i]=s[i]);return{$$typeof:Ys,type:t,key:o,ref:a,props:r,_owner:rp.current}}function aM(t,e){return{$$typeof:Ys,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function op(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ys}function sM(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Um=/\/+/g;function Bc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?sM(""+t.key):e.toString(36)}function nu(t,e,n,i,r){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ys:case YS:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Bc(a,0):i,Nm(r)?(n="",t!=null&&(n=t.replace(Um,"$&/")+"/"),nu(r,e,n,"",function(u){return u})):r!=null&&(op(r)&&(r=aM(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Um,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Nm(t))for(var s=0;s<t.length;s++){o=t[s];var l=i+Bc(o,s);a+=nu(o,e,n,l,r)}else if(l=oM(t),typeof l=="function")for(t=l.call(t),s=0;!(o=t.next()).done;)o=o.value,l=i+Bc(o,s++),a+=nu(o,e,n,l,r);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function ol(t,e,n){if(t==null)return t;var i=[],r=0;return nu(t,i,"","",function(o){return e.call(n,o,r++)}),i}function lM(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},iu={transition:null},uM={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:iu,ReactCurrentOwner:rp};function n_(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:ol,forEach:function(t,e,n){ol(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ol(t,function(){e++}),e},toArray:function(t){return ol(t,function(e){return e})||[]},only:function(t){if(!op(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Ta;$e.Fragment=KS;$e.Profiler=QS;$e.PureComponent=np;$e.StrictMode=ZS;$e.Suspense=nM;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uM;$e.act=n_;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=K0({},t.props),r=t.key,o=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,a=rp.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var s=t.type.defaultProps;for(l in e)J0.call(e,l)&&!e_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&s!==void 0?s[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}return{$$typeof:Ys,type:t.type,key:r,ref:o,props:i,_owner:a}};$e.createContext=function(t){return t={$$typeof:eM,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:JS,_context:t},t.Consumer=t};$e.createElement=t_;$e.createFactory=function(t){var e=t_.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:tM,render:t}};$e.isValidElement=op;$e.lazy=function(t){return{$$typeof:rM,_payload:{_status:-1,_result:t},_init:lM}};$e.memo=function(t,e){return{$$typeof:iM,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=iu.transition;iu.transition={};try{t()}finally{iu.transition=e}};$e.unstable_act=n_;$e.useCallback=function(t,e){return ln.current.useCallback(t,e)};$e.useContext=function(t){return ln.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};$e.useEffect=function(t,e){return ln.current.useEffect(t,e)};$e.useId=function(){return ln.current.useId()};$e.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return ln.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};$e.useRef=function(t){return ln.current.useRef(t)};$e.useState=function(t){return ln.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return ln.current.useTransition()};$e.version="18.3.1";q0.exports=$e;var kt=q0.exports;const cM=qs(kt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fM=kt,dM=Symbol.for("react.element"),hM=Symbol.for("react.fragment"),pM=Object.prototype.hasOwnProperty,mM=fM.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gM={key:!0,ref:!0,__self:!0,__source:!0};function i_(t,e,n){var i,r={},o=null,a=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)pM.call(e,i)&&!gM.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:dM,type:t,key:o,ref:a,props:r,_owner:mM.current}}ac.Fragment=hM;ac.jsx=i_;ac.jsxs=i_;X0.exports=ac;var dn=X0.exports,ad={},r_={exports:{}},Rn={},o_={exports:{}},a_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,ie){var W=F.length;F.push(ie);e:for(;0<W;){var Q=W-1>>>1,oe=F[Q];if(0<r(oe,ie))F[Q]=ie,F[W]=oe,W=Q;else break e}}function n(F){return F.length===0?null:F[0]}function i(F){if(F.length===0)return null;var ie=F[0],W=F.pop();if(W!==ie){F[0]=W;e:for(var Q=0,oe=F.length,we=oe>>>1;Q<we;){var B=2*(Q+1)-1,j=F[B],te=B+1,U=F[te];if(0>r(j,W))te<oe&&0>r(U,j)?(F[Q]=U,F[te]=W,Q=te):(F[Q]=j,F[B]=W,Q=B);else if(te<oe&&0>r(U,W))F[Q]=U,F[te]=W,Q=te;else break e}}return ie}function r(F,ie){var W=F.sortIndex-ie.sortIndex;return W!==0?W:F.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var a=Date,s=a.now();t.unstable_now=function(){return a.now()-s}}var l=[],u=[],c=1,d=null,h=3,p=!1,g=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(F){for(var ie=n(u);ie!==null;){if(ie.callback===null)i(u);else if(ie.startTime<=F)i(u),ie.sortIndex=ie.expirationTime,e(l,ie);else break;ie=n(u)}}function x(F){if(v=!1,_(F),!g)if(n(l)!==null)g=!0,k(S);else{var ie=n(u);ie!==null&&J(x,ie.startTime-F)}}function S(F,ie){g=!1,v&&(v=!1,f(C),C=-1),p=!0;var W=h;try{for(_(ie),d=n(l);d!==null&&(!(d.expirationTime>ie)||F&&!P());){var Q=d.callback;if(typeof Q=="function"){d.callback=null,h=d.priorityLevel;var oe=Q(d.expirationTime<=ie);ie=t.unstable_now(),typeof oe=="function"?d.callback=oe:d===n(l)&&i(l),_(ie)}else i(l);d=n(l)}if(d!==null)var we=!0;else{var B=n(u);B!==null&&J(x,B.startTime-ie),we=!1}return we}finally{d=null,h=W,p=!1}}var M=!1,b=null,C=-1,T=5,w=-1;function P(){return!(t.unstable_now()-w<T)}function z(){if(b!==null){var F=t.unstable_now();w=F;var ie=!0;try{ie=b(!0,F)}finally{ie?G():(M=!1,b=null)}}else M=!1}var G;if(typeof y=="function")G=function(){y(z)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,I=N.port2;N.port1.onmessage=z,G=function(){I.postMessage(null)}}else G=function(){m(z,0)};function k(F){b=F,M||(M=!0,G())}function J(F,ie){C=m(function(){F(t.unstable_now())},ie)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,k(S))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(F){switch(h){case 1:case 2:case 3:var ie=3;break;default:ie=h}var W=h;h=ie;try{return F()}finally{h=W}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,ie){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=h;h=F;try{return ie()}finally{h=W}},t.unstable_scheduleCallback=function(F,ie,W){var Q=t.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?Q+W:Q):W=Q,F){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=W+oe,F={id:c++,callback:ie,priorityLevel:F,startTime:W,expirationTime:oe,sortIndex:-1},W>Q?(F.sortIndex=W,e(u,F),n(l)===null&&F===n(u)&&(v?(f(C),C=-1):v=!0,J(x,W-Q))):(F.sortIndex=oe,e(l,F),g||p||(g=!0,k(S))),F},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(F){var ie=h;return function(){var W=h;h=ie;try{return F.apply(this,arguments)}finally{h=W}}}})(a_);o_.exports=a_;var vM=o_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _M=kt,Cn=vM;function ue(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s_=new Set,bs={};function ho(t,e){ha(t,e),ha(t+"Capture",e)}function ha(t,e){for(bs[t]=e,t=0;t<e.length;t++)s_.add(e[t])}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sd=Object.prototype.hasOwnProperty,yM=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,km={},Fm={};function xM(t){return sd.call(Fm,t)?!0:sd.call(km,t)?!1:yM.test(t)?Fm[t]=!0:(km[t]=!0,!1)}function SM(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function MM(t,e,n,i){if(e===null||typeof e>"u"||SM(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(t,e,n,i,r,o,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=a}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){$t[t]=new un(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];$t[e]=new un(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){$t[t]=new un(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){$t[t]=new un(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){$t[t]=new un(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){$t[t]=new un(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){$t[t]=new un(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){$t[t]=new un(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){$t[t]=new un(t,5,!1,t.toLowerCase(),null,!1,!1)});var ap=/[\-:]([a-z])/g;function sp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ap,sp);$t[e]=new un(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ap,sp);$t[e]=new un(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ap,sp);$t[e]=new un(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){$t[t]=new un(t,1,!1,t.toLowerCase(),null,!1,!1)});$t.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){$t[t]=new un(t,1,!1,t.toLowerCase(),null,!0,!0)});function lp(t,e,n,i){var r=$t.hasOwnProperty(e)?$t[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(MM(e,n,r,i)&&(n=null),i||r===null?xM(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Zi=_M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,al=Symbol.for("react.element"),Vo=Symbol.for("react.portal"),Go=Symbol.for("react.fragment"),up=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),l_=Symbol.for("react.provider"),u_=Symbol.for("react.context"),cp=Symbol.for("react.forward_ref"),ud=Symbol.for("react.suspense"),cd=Symbol.for("react.suspense_list"),fp=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),c_=Symbol.for("react.offscreen"),zm=Symbol.iterator;function Oa(t){return t===null||typeof t!="object"?null:(t=zm&&t[zm]||t["@@iterator"],typeof t=="function"?t:null)}var _t=Object.assign,Hc;function is(t){if(Hc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Hc=e&&e[1]||""}return`
`+Hc+t}var Vc=!1;function Gc(t,e){if(!t||Vc)return"";Vc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),o=i.stack.split(`
`),a=r.length-1,s=o.length-1;1<=a&&0<=s&&r[a]!==o[s];)s--;for(;1<=a&&0<=s;a--,s--)if(r[a]!==o[s]){if(a!==1||s!==1)do if(a--,s--,0>s||r[a]!==o[s]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=s);break}}}finally{Vc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?is(t):""}function wM(t){switch(t.tag){case 5:return is(t.type);case 16:return is("Lazy");case 13:return is("Suspense");case 19:return is("SuspenseList");case 0:case 2:case 15:return t=Gc(t.type,!1),t;case 11:return t=Gc(t.type.render,!1),t;case 1:return t=Gc(t.type,!0),t;default:return""}}function fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Go:return"Fragment";case Vo:return"Portal";case ld:return"Profiler";case up:return"StrictMode";case ud:return"Suspense";case cd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case u_:return(t.displayName||"Context")+".Consumer";case l_:return(t._context.displayName||"Context")+".Provider";case cp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fp:return e=t.displayName||null,e!==null?e:fd(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return fd(t(e))}catch{}}return null}function EM(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fd(e);case 8:return e===up?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function f_(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function bM(t){var e=f_(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,o.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function sl(t){t._valueTracker||(t._valueTracker=bM(t))}function d_(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=f_(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Mu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dd(t,e){var n=e.checked;return _t({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bm(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function h_(t,e){e=e.checked,e!=null&&lp(t,"checked",e,!1)}function hd(t,e){h_(t,e);var n=Tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pd(t,e.type,n):e.hasOwnProperty("defaultValue")&&pd(t,e.type,Tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Hm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pd(t,e,n){(e!=="number"||Mu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var rs=Array.isArray;function ia(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function md(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ue(91));return _t({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ue(92));if(rs(n)){if(1<n.length)throw Error(ue(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Tr(n)}}function p_(t,e){var n=Tr(e.value),i=Tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Gm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function m_(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?m_(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ll,g_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ll=ll||document.createElement("div"),ll.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ll.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ts(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ds={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},TM=["Webkit","ms","Moz","O"];Object.keys(ds).forEach(function(t){TM.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ds[e]=ds[t]})});function v_(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ds.hasOwnProperty(t)&&ds[t]?(""+e).trim():e+"px"}function __(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=v_(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var AM=_t({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vd(t,e){if(e){if(AM[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ue(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ue(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ue(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ue(62))}}function _d(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yd=null;function dp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xd=null,ra=null,oa=null;function Wm(t){if(t=Qs(t)){if(typeof xd!="function")throw Error(ue(280));var e=t.stateNode;e&&(e=fc(e),xd(t.stateNode,t.type,e))}}function y_(t){ra?oa?oa.push(t):oa=[t]:ra=t}function x_(){if(ra){var t=ra,e=oa;if(oa=ra=null,Wm(t),e)for(t=0;t<e.length;t++)Wm(e[t])}}function S_(t,e){return t(e)}function M_(){}var Wc=!1;function w_(t,e,n){if(Wc)return t(e,n);Wc=!0;try{return S_(t,e,n)}finally{Wc=!1,(ra!==null||oa!==null)&&(M_(),x_())}}function As(t,e){var n=t.stateNode;if(n===null)return null;var i=fc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ue(231,e,typeof n));return n}var Sd=!1;if($i)try{var Na={};Object.defineProperty(Na,"passive",{get:function(){Sd=!0}}),window.addEventListener("test",Na,Na),window.removeEventListener("test",Na,Na)}catch{Sd=!1}function CM(t,e,n,i,r,o,a,s,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var hs=!1,wu=null,Eu=!1,Md=null,RM={onError:function(t){hs=!0,wu=t}};function PM(t,e,n,i,r,o,a,s,l){hs=!1,wu=null,CM.apply(RM,arguments)}function LM(t,e,n,i,r,o,a,s,l){if(PM.apply(this,arguments),hs){if(hs){var u=wu;hs=!1,wu=null}else throw Error(ue(198));Eu||(Eu=!0,Md=u)}}function po(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function E_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jm(t){if(po(t)!==t)throw Error(ue(188))}function DM(t){var e=t.alternate;if(!e){if(e=po(t),e===null)throw Error(ue(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var o=r.alternate;if(o===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===o.child){for(o=r.child;o;){if(o===n)return jm(r),t;if(o===i)return jm(r),e;o=o.sibling}throw Error(ue(188))}if(n.return!==i.return)n=r,i=o;else{for(var a=!1,s=r.child;s;){if(s===n){a=!0,n=r,i=o;break}if(s===i){a=!0,i=r,n=o;break}s=s.sibling}if(!a){for(s=o.child;s;){if(s===n){a=!0,n=o,i=r;break}if(s===i){a=!0,i=o,n=r;break}s=s.sibling}if(!a)throw Error(ue(189))}}if(n.alternate!==i)throw Error(ue(190))}if(n.tag!==3)throw Error(ue(188));return n.stateNode.current===n?t:e}function b_(t){return t=DM(t),t!==null?T_(t):null}function T_(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=T_(t);if(e!==null)return e;t=t.sibling}return null}var A_=Cn.unstable_scheduleCallback,$m=Cn.unstable_cancelCallback,IM=Cn.unstable_shouldYield,OM=Cn.unstable_requestPaint,wt=Cn.unstable_now,NM=Cn.unstable_getCurrentPriorityLevel,hp=Cn.unstable_ImmediatePriority,C_=Cn.unstable_UserBlockingPriority,bu=Cn.unstable_NormalPriority,UM=Cn.unstable_LowPriority,R_=Cn.unstable_IdlePriority,sc=null,vi=null;function kM(t){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(sc,t,void 0,(t.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:BM,FM=Math.log,zM=Math.LN2;function BM(t){return t>>>=0,t===0?32:31-(FM(t)/zM|0)|0}var ul=64,cl=4194304;function os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tu(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,o=t.pingedLanes,a=n&268435455;if(a!==0){var s=a&~r;s!==0?i=os(s):(o&=a,o!==0&&(i=os(o)))}else a=n&~r,a!==0?i=os(a):o!==0&&(i=os(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,o=e&-e,r>=o||r===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-ai(e),r=1<<n,i|=t[n],e&=~r;return i}function HM(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VM(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-ai(o),s=1<<a,l=r[a];l===-1?(!(s&n)||s&i)&&(r[a]=HM(s,e)):l<=e&&(t.expiredLanes|=s),o&=~s}}function wd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function P_(){var t=ul;return ul<<=1,!(ul&4194240)&&(ul=64),t}function jc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ks(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ai(e),t[e]=n}function GM(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-ai(n),o=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~o}}function pp(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-ai(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function L_(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var D_,mp,I_,O_,N_,Ed=!1,fl=[],vr=null,_r=null,yr=null,Cs=new Map,Rs=new Map,dr=[],WM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xm(t,e){switch(t){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Cs.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rs.delete(e.pointerId)}}function Ua(t,e,n,i,r,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[r]},e!==null&&(e=Qs(e),e!==null&&mp(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function jM(t,e,n,i,r){switch(e){case"focusin":return vr=Ua(vr,t,e,n,i,r),!0;case"dragenter":return _r=Ua(_r,t,e,n,i,r),!0;case"mouseover":return yr=Ua(yr,t,e,n,i,r),!0;case"pointerover":var o=r.pointerId;return Cs.set(o,Ua(Cs.get(o)||null,t,e,n,i,r)),!0;case"gotpointercapture":return o=r.pointerId,Rs.set(o,Ua(Rs.get(o)||null,t,e,n,i,r)),!0}return!1}function U_(t){var e=Kr(t.target);if(e!==null){var n=po(e);if(n!==null){if(e=n.tag,e===13){if(e=E_(n),e!==null){t.blockedOn=e,N_(t.priority,function(){I_(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ru(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=bd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);yd=i,n.target.dispatchEvent(i),yd=null}else return e=Qs(n),e!==null&&mp(e),t.blockedOn=n,!1;e.shift()}return!0}function qm(t,e,n){ru(t)&&n.delete(e)}function $M(){Ed=!1,vr!==null&&ru(vr)&&(vr=null),_r!==null&&ru(_r)&&(_r=null),yr!==null&&ru(yr)&&(yr=null),Cs.forEach(qm),Rs.forEach(qm)}function ka(t,e){t.blockedOn===e&&(t.blockedOn=null,Ed||(Ed=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,$M)))}function Ps(t){function e(r){return ka(r,t)}if(0<fl.length){ka(fl[0],t);for(var n=1;n<fl.length;n++){var i=fl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(vr!==null&&ka(vr,t),_r!==null&&ka(_r,t),yr!==null&&ka(yr,t),Cs.forEach(e),Rs.forEach(e),n=0;n<dr.length;n++)i=dr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<dr.length&&(n=dr[0],n.blockedOn===null);)U_(n),n.blockedOn===null&&dr.shift()}var aa=Zi.ReactCurrentBatchConfig,Au=!0;function XM(t,e,n,i){var r=ot,o=aa.transition;aa.transition=null;try{ot=1,gp(t,e,n,i)}finally{ot=r,aa.transition=o}}function qM(t,e,n,i){var r=ot,o=aa.transition;aa.transition=null;try{ot=4,gp(t,e,n,i)}finally{ot=r,aa.transition=o}}function gp(t,e,n,i){if(Au){var r=bd(t,e,n,i);if(r===null)tf(t,e,i,Cu,n),Xm(t,i);else if(jM(r,t,e,n,i))i.stopPropagation();else if(Xm(t,i),e&4&&-1<WM.indexOf(t)){for(;r!==null;){var o=Qs(r);if(o!==null&&D_(o),o=bd(t,e,n,i),o===null&&tf(t,e,i,Cu,n),o===r)break;r=o}r!==null&&i.stopPropagation()}else tf(t,e,i,null,n)}}var Cu=null;function bd(t,e,n,i){if(Cu=null,t=dp(i),t=Kr(t),t!==null)if(e=po(t),e===null)t=null;else if(n=e.tag,n===13){if(t=E_(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Cu=t,null}function k_(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(NM()){case hp:return 1;case C_:return 4;case bu:case UM:return 16;case R_:return 536870912;default:return 16}default:return 16}}var mr=null,vp=null,ou=null;function F_(){if(ou)return ou;var t,e=vp,n=e.length,i,r="value"in mr?mr.value:mr.textContent,o=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[o-i];i++);return ou=r.slice(t,1<i?1-i:void 0)}function au(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function dl(){return!0}function Ym(){return!1}function Pn(t){function e(n,i,r,o,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var s in t)t.hasOwnProperty(s)&&(n=t[s],this[s]=n?n(o):o[s]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?dl:Ym,this.isPropagationStopped=Ym,this}return _t(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),e}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_p=Pn(Aa),Zs=_t({},Aa,{view:0,detail:0}),YM=Pn(Zs),$c,Xc,Fa,lc=_t({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fa&&(Fa&&t.type==="mousemove"?($c=t.screenX-Fa.screenX,Xc=t.screenY-Fa.screenY):Xc=$c=0,Fa=t),$c)},movementY:function(t){return"movementY"in t?t.movementY:Xc}}),Km=Pn(lc),KM=_t({},lc,{dataTransfer:0}),ZM=Pn(KM),QM=_t({},Zs,{relatedTarget:0}),qc=Pn(QM),JM=_t({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),e1=Pn(JM),t1=_t({},Aa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n1=Pn(t1),i1=_t({},Aa,{data:0}),Zm=Pn(i1),r1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function s1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=a1[t])?!!e[t]:!1}function yp(){return s1}var l1=_t({},Zs,{key:function(t){if(t.key){var e=r1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=au(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?o1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yp,charCode:function(t){return t.type==="keypress"?au(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?au(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),u1=Pn(l1),c1=_t({},lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qm=Pn(c1),f1=_t({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yp}),d1=Pn(f1),h1=_t({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),p1=Pn(h1),m1=_t({},lc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),g1=Pn(m1),v1=[9,13,27,32],xp=$i&&"CompositionEvent"in window,ps=null;$i&&"documentMode"in document&&(ps=document.documentMode);var _1=$i&&"TextEvent"in window&&!ps,z_=$i&&(!xp||ps&&8<ps&&11>=ps),Jm=" ",eg=!1;function B_(t,e){switch(t){case"keyup":return v1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function H_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Wo=!1;function y1(t,e){switch(t){case"compositionend":return H_(e);case"keypress":return e.which!==32?null:(eg=!0,Jm);case"textInput":return t=e.data,t===Jm&&eg?null:t;default:return null}}function x1(t,e){if(Wo)return t==="compositionend"||!xp&&B_(t,e)?(t=F_(),ou=vp=mr=null,Wo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return z_&&e.locale!=="ko"?null:e.data;default:return null}}var S1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!S1[t.type]:e==="textarea"}function V_(t,e,n,i){y_(i),e=Ru(e,"onChange"),0<e.length&&(n=new _p("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ms=null,Ls=null;function M1(t){J_(t,0)}function uc(t){var e=Xo(t);if(d_(e))return t}function w1(t,e){if(t==="change")return e}var G_=!1;if($i){var Yc;if($i){var Kc="oninput"in document;if(!Kc){var ng=document.createElement("div");ng.setAttribute("oninput","return;"),Kc=typeof ng.oninput=="function"}Yc=Kc}else Yc=!1;G_=Yc&&(!document.documentMode||9<document.documentMode)}function ig(){ms&&(ms.detachEvent("onpropertychange",W_),Ls=ms=null)}function W_(t){if(t.propertyName==="value"&&uc(Ls)){var e=[];V_(e,Ls,t,dp(t)),w_(M1,e)}}function E1(t,e,n){t==="focusin"?(ig(),ms=e,Ls=n,ms.attachEvent("onpropertychange",W_)):t==="focusout"&&ig()}function b1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uc(Ls)}function T1(t,e){if(t==="click")return uc(e)}function A1(t,e){if(t==="input"||t==="change")return uc(e)}function C1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var li=typeof Object.is=="function"?Object.is:C1;function Ds(t,e){if(li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!sd.call(e,r)||!li(t[r],e[r]))return!1}return!0}function rg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function og(t,e){var n=rg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rg(n)}}function j_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?j_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function $_(){for(var t=window,e=Mu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Mu(t.document)}return e}function Sp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function R1(t){var e=$_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&j_(n.ownerDocument.documentElement,n)){if(i!==null&&Sp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,o=Math.min(i.start,r);i=i.end===void 0?o:Math.min(i.end,r),!t.extend&&o>i&&(r=i,i=o,o=r),r=og(n,o);var a=og(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var P1=$i&&"documentMode"in document&&11>=document.documentMode,jo=null,Td=null,gs=null,Ad=!1;function ag(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ad||jo==null||jo!==Mu(i)||(i=jo,"selectionStart"in i&&Sp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),gs&&Ds(gs,i)||(gs=i,i=Ru(Td,"onSelect"),0<i.length&&(e=new _p("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=jo)))}function hl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var $o={animationend:hl("Animation","AnimationEnd"),animationiteration:hl("Animation","AnimationIteration"),animationstart:hl("Animation","AnimationStart"),transitionend:hl("Transition","TransitionEnd")},Zc={},X_={};$i&&(X_=document.createElement("div").style,"AnimationEvent"in window||(delete $o.animationend.animation,delete $o.animationiteration.animation,delete $o.animationstart.animation),"TransitionEvent"in window||delete $o.transitionend.transition);function cc(t){if(Zc[t])return Zc[t];if(!$o[t])return t;var e=$o[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in X_)return Zc[t]=e[n];return t}var q_=cc("animationend"),Y_=cc("animationiteration"),K_=cc("animationstart"),Z_=cc("transitionend"),Q_=new Map,sg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Pr(t,e){Q_.set(t,e),ho(e,[t])}for(var Qc=0;Qc<sg.length;Qc++){var Jc=sg[Qc],L1=Jc.toLowerCase(),D1=Jc[0].toUpperCase()+Jc.slice(1);Pr(L1,"on"+D1)}Pr(q_,"onAnimationEnd");Pr(Y_,"onAnimationIteration");Pr(K_,"onAnimationStart");Pr("dblclick","onDoubleClick");Pr("focusin","onFocus");Pr("focusout","onBlur");Pr(Z_,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);ha("onPointerLeave",["pointerout","pointerover"]);ho("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ho("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ho("onBeforeInput",["compositionend","keypress","textInput","paste"]);ho("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ho("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ho("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var as="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I1=new Set("cancel close invalid load scroll toggle".split(" ").concat(as));function lg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,LM(i,e,void 0,t),t.currentTarget=null}function J_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var a=i.length-1;0<=a;a--){var s=i[a],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==o&&r.isPropagationStopped())break e;lg(r,s,u),o=l}else for(a=0;a<i.length;a++){if(s=i[a],l=s.instance,u=s.currentTarget,s=s.listener,l!==o&&r.isPropagationStopped())break e;lg(r,s,u),o=l}}}if(Eu)throw t=Md,Eu=!1,Md=null,t}function ut(t,e){var n=e[Dd];n===void 0&&(n=e[Dd]=new Set);var i=t+"__bubble";n.has(i)||(ey(e,t,2,!1),n.add(i))}function ef(t,e,n){var i=0;e&&(i|=4),ey(n,t,i,e)}var pl="_reactListening"+Math.random().toString(36).slice(2);function Is(t){if(!t[pl]){t[pl]=!0,s_.forEach(function(n){n!=="selectionchange"&&(I1.has(n)||ef(n,!1,t),ef(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pl]||(e[pl]=!0,ef("selectionchange",!1,e))}}function ey(t,e,n,i){switch(k_(e)){case 1:var r=XM;break;case 4:r=qM;break;default:r=gp}n=r.bind(null,e,n,t),r=void 0,!Sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function tf(t,e,n,i,r){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var s=i.stateNode.containerInfo;if(s===r||s.nodeType===8&&s.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;s!==null;){if(a=Kr(s),a===null)return;if(l=a.tag,l===5||l===6){i=o=a;continue e}s=s.parentNode}}i=i.return}w_(function(){var u=o,c=dp(n),d=[];e:{var h=Q_.get(t);if(h!==void 0){var p=_p,g=t;switch(t){case"keypress":if(au(n)===0)break e;case"keydown":case"keyup":p=u1;break;case"focusin":g="focus",p=qc;break;case"focusout":g="blur",p=qc;break;case"beforeblur":case"afterblur":p=qc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ZM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=d1;break;case q_:case Y_:case K_:p=e1;break;case Z_:p=p1;break;case"scroll":p=YM;break;case"wheel":p=g1;break;case"copy":case"cut":case"paste":p=n1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Qm}var v=(e&4)!==0,m=!v&&t==="scroll",f=v?h!==null?h+"Capture":null:h;v=[];for(var y=u,_;y!==null;){_=y;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,f!==null&&(x=As(y,f),x!=null&&v.push(Os(y,x,_)))),m)break;y=y.return}0<v.length&&(h=new p(h,g,null,n,c),d.push({event:h,listeners:v}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==yd&&(g=n.relatedTarget||n.fromElement)&&(Kr(g)||g[Xi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?Kr(g):null,g!==null&&(m=po(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(v=Km,x="onMouseLeave",f="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(v=Qm,x="onPointerLeave",f="onPointerEnter",y="pointer"),m=p==null?h:Xo(p),_=g==null?h:Xo(g),h=new v(x,y+"leave",p,n,c),h.target=m,h.relatedTarget=_,x=null,Kr(c)===u&&(v=new v(f,y+"enter",g,n,c),v.target=_,v.relatedTarget=m,x=v),m=x,p&&g)t:{for(v=p,f=g,y=0,_=v;_;_=_o(_))y++;for(_=0,x=f;x;x=_o(x))_++;for(;0<y-_;)v=_o(v),y--;for(;0<_-y;)f=_o(f),_--;for(;y--;){if(v===f||f!==null&&v===f.alternate)break t;v=_o(v),f=_o(f)}v=null}else v=null;p!==null&&ug(d,h,p,v,!1),g!==null&&m!==null&&ug(d,m,g,v,!0)}}e:{if(h=u?Xo(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=w1;else if(tg(h))if(G_)S=A1;else{S=b1;var M=E1}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=T1);if(S&&(S=S(t,u))){V_(d,S,n,c);break e}M&&M(t,h,u),t==="focusout"&&(M=h._wrapperState)&&M.controlled&&h.type==="number"&&pd(h,"number",h.value)}switch(M=u?Xo(u):window,t){case"focusin":(tg(M)||M.contentEditable==="true")&&(jo=M,Td=u,gs=null);break;case"focusout":gs=Td=jo=null;break;case"mousedown":Ad=!0;break;case"contextmenu":case"mouseup":case"dragend":Ad=!1,ag(d,n,c);break;case"selectionchange":if(P1)break;case"keydown":case"keyup":ag(d,n,c)}var b;if(xp)e:{switch(t){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else Wo?B_(t,n)&&(C="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(z_&&n.locale!=="ko"&&(Wo||C!=="onCompositionStart"?C==="onCompositionEnd"&&Wo&&(b=F_()):(mr=c,vp="value"in mr?mr.value:mr.textContent,Wo=!0)),M=Ru(u,C),0<M.length&&(C=new Zm(C,t,null,n,c),d.push({event:C,listeners:M}),b?C.data=b:(b=H_(n),b!==null&&(C.data=b)))),(b=_1?y1(t,n):x1(t,n))&&(u=Ru(u,"onBeforeInput"),0<u.length&&(c=new Zm("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}J_(d,e)})}function Os(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ru(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,o=r.stateNode;r.tag===5&&o!==null&&(r=o,o=As(t,n),o!=null&&i.unshift(Os(t,o,r)),o=As(t,e),o!=null&&i.push(Os(t,o,r))),t=t.return}return i}function _o(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ug(t,e,n,i,r){for(var o=e._reactName,a=[];n!==null&&n!==i;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===i)break;s.tag===5&&u!==null&&(s=u,r?(l=As(n,o),l!=null&&a.unshift(Os(n,l,s))):r||(l=As(n,o),l!=null&&a.push(Os(n,l,s)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var O1=/\r\n?/g,N1=/\u0000|\uFFFD/g;function cg(t){return(typeof t=="string"?t:""+t).replace(O1,`
`).replace(N1,"")}function ml(t,e,n){if(e=cg(e),cg(t)!==e&&n)throw Error(ue(425))}function Pu(){}var Cd=null,Rd=null;function Pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ld=typeof setTimeout=="function"?setTimeout:void 0,U1=typeof clearTimeout=="function"?clearTimeout:void 0,fg=typeof Promise=="function"?Promise:void 0,k1=typeof queueMicrotask=="function"?queueMicrotask:typeof fg<"u"?function(t){return fg.resolve(null).then(t).catch(F1)}:Ld;function F1(t){setTimeout(function(){throw t})}function nf(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ps(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ps(e)}function xr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function dg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ca=Math.random().toString(36).slice(2),mi="__reactFiber$"+Ca,Ns="__reactProps$"+Ca,Xi="__reactContainer$"+Ca,Dd="__reactEvents$"+Ca,z1="__reactListeners$"+Ca,B1="__reactHandles$"+Ca;function Kr(t){var e=t[mi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Xi]||n[mi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=dg(t);t!==null;){if(n=t[mi])return n;t=dg(t)}return e}t=n,n=t.parentNode}return null}function Qs(t){return t=t[mi]||t[Xi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Xo(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ue(33))}function fc(t){return t[Ns]||null}var Id=[],qo=-1;function Lr(t){return{current:t}}function ft(t){0>qo||(t.current=Id[qo],Id[qo]=null,qo--)}function lt(t,e){qo++,Id[qo]=t.current,t.current=e}var Ar={},Qt=Lr(Ar),pn=Lr(!1),ro=Ar;function pa(t,e){var n=t.type.contextTypes;if(!n)return Ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},o;for(o in n)r[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function mn(t){return t=t.childContextTypes,t!=null}function Lu(){ft(pn),ft(Qt)}function hg(t,e,n){if(Qt.current!==Ar)throw Error(ue(168));lt(Qt,e),lt(pn,n)}function ty(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ue(108,EM(t)||"Unknown",r));return _t({},n,i)}function Du(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ar,ro=Qt.current,lt(Qt,t),lt(pn,pn.current),!0}function pg(t,e,n){var i=t.stateNode;if(!i)throw Error(ue(169));n?(t=ty(t,e,ro),i.__reactInternalMemoizedMergedChildContext=t,ft(pn),ft(Qt),lt(Qt,t)):ft(pn),lt(pn,n)}var Ii=null,dc=!1,rf=!1;function ny(t){Ii===null?Ii=[t]:Ii.push(t)}function H1(t){dc=!0,ny(t)}function Dr(){if(!rf&&Ii!==null){rf=!0;var t=0,e=ot;try{var n=Ii;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ii=null,dc=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(t+1)),A_(hp,Dr),r}finally{ot=e,rf=!1}}return null}var Yo=[],Ko=0,Iu=null,Ou=0,Nn=[],Un=0,oo=null,ki=1,Fi="";function Wr(t,e){Yo[Ko++]=Ou,Yo[Ko++]=Iu,Iu=t,Ou=e}function iy(t,e,n){Nn[Un++]=ki,Nn[Un++]=Fi,Nn[Un++]=oo,oo=t;var i=ki;t=Fi;var r=32-ai(i)-1;i&=~(1<<r),n+=1;var o=32-ai(e)+r;if(30<o){var a=r-r%5;o=(i&(1<<a)-1).toString(32),i>>=a,r-=a,ki=1<<32-ai(e)+r|n<<r|i,Fi=o+t}else ki=1<<o|n<<r|i,Fi=t}function Mp(t){t.return!==null&&(Wr(t,1),iy(t,1,0))}function wp(t){for(;t===Iu;)Iu=Yo[--Ko],Yo[Ko]=null,Ou=Yo[--Ko],Yo[Ko]=null;for(;t===oo;)oo=Nn[--Un],Nn[Un]=null,Fi=Nn[--Un],Nn[Un]=null,ki=Nn[--Un],Nn[Un]=null}var An=null,Tn=null,mt=!1,ei=null;function ry(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function mg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,Tn=xr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=oo!==null?{id:ki,overflow:Fi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,Tn=null,!0):!1;default:return!1}}function Od(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nd(t){if(mt){var e=Tn;if(e){var n=e;if(!mg(t,e)){if(Od(t))throw Error(ue(418));e=xr(n.nextSibling);var i=An;e&&mg(t,e)?ry(i,n):(t.flags=t.flags&-4097|2,mt=!1,An=t)}}else{if(Od(t))throw Error(ue(418));t.flags=t.flags&-4097|2,mt=!1,An=t}}}function gg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function gl(t){if(t!==An)return!1;if(!mt)return gg(t),mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pd(t.type,t.memoizedProps)),e&&(e=Tn)){if(Od(t))throw oy(),Error(ue(418));for(;e;)ry(t,e),e=xr(e.nextSibling)}if(gg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ue(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=xr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=An?xr(t.stateNode.nextSibling):null;return!0}function oy(){for(var t=Tn;t;)t=xr(t.nextSibling)}function ma(){Tn=An=null,mt=!1}function Ep(t){ei===null?ei=[t]:ei.push(t)}var V1=Zi.ReactCurrentBatchConfig;function za(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ue(309));var i=n.stateNode}if(!i)throw Error(ue(147,t));var r=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(a){var s=r.refs;a===null?delete s[o]:s[o]=a},e._stringRef=o,e)}if(typeof t!="string")throw Error(ue(284));if(!n._owner)throw Error(ue(290,t))}return t}function vl(t,e){throw t=Object.prototype.toString.call(e),Error(ue(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vg(t){var e=t._init;return e(t._payload)}function ay(t){function e(f,y){if(t){var _=f.deletions;_===null?(f.deletions=[y],f.flags|=16):_.push(y)}}function n(f,y){if(!t)return null;for(;y!==null;)e(f,y),y=y.sibling;return null}function i(f,y){for(f=new Map;y!==null;)y.key!==null?f.set(y.key,y):f.set(y.index,y),y=y.sibling;return f}function r(f,y){return f=Er(f,y),f.index=0,f.sibling=null,f}function o(f,y,_){return f.index=_,t?(_=f.alternate,_!==null?(_=_.index,_<y?(f.flags|=2,y):_):(f.flags|=2,y)):(f.flags|=1048576,y)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function s(f,y,_,x){return y===null||y.tag!==6?(y=ff(_,f.mode,x),y.return=f,y):(y=r(y,_),y.return=f,y)}function l(f,y,_,x){var S=_.type;return S===Go?c(f,y,_.props.children,x,_.key):y!==null&&(y.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===cr&&vg(S)===y.type)?(x=r(y,_.props),x.ref=za(f,y,_),x.return=f,x):(x=hu(_.type,_.key,_.props,null,f.mode,x),x.ref=za(f,y,_),x.return=f,x)}function u(f,y,_,x){return y===null||y.tag!==4||y.stateNode.containerInfo!==_.containerInfo||y.stateNode.implementation!==_.implementation?(y=df(_,f.mode,x),y.return=f,y):(y=r(y,_.children||[]),y.return=f,y)}function c(f,y,_,x,S){return y===null||y.tag!==7?(y=no(_,f.mode,x,S),y.return=f,y):(y=r(y,_),y.return=f,y)}function d(f,y,_){if(typeof y=="string"&&y!==""||typeof y=="number")return y=ff(""+y,f.mode,_),y.return=f,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case al:return _=hu(y.type,y.key,y.props,null,f.mode,_),_.ref=za(f,null,y),_.return=f,_;case Vo:return y=df(y,f.mode,_),y.return=f,y;case cr:var x=y._init;return d(f,x(y._payload),_)}if(rs(y)||Oa(y))return y=no(y,f.mode,_,null),y.return=f,y;vl(f,y)}return null}function h(f,y,_,x){var S=y!==null?y.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return S!==null?null:s(f,y,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case al:return _.key===S?l(f,y,_,x):null;case Vo:return _.key===S?u(f,y,_,x):null;case cr:return S=_._init,h(f,y,S(_._payload),x)}if(rs(_)||Oa(_))return S!==null?null:c(f,y,_,x,null);vl(f,_)}return null}function p(f,y,_,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(_)||null,s(y,f,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case al:return f=f.get(x.key===null?_:x.key)||null,l(y,f,x,S);case Vo:return f=f.get(x.key===null?_:x.key)||null,u(y,f,x,S);case cr:var M=x._init;return p(f,y,_,M(x._payload),S)}if(rs(x)||Oa(x))return f=f.get(_)||null,c(y,f,x,S,null);vl(y,x)}return null}function g(f,y,_,x){for(var S=null,M=null,b=y,C=y=0,T=null;b!==null&&C<_.length;C++){b.index>C?(T=b,b=null):T=b.sibling;var w=h(f,b,_[C],x);if(w===null){b===null&&(b=T);break}t&&b&&w.alternate===null&&e(f,b),y=o(w,y,C),M===null?S=w:M.sibling=w,M=w,b=T}if(C===_.length)return n(f,b),mt&&Wr(f,C),S;if(b===null){for(;C<_.length;C++)b=d(f,_[C],x),b!==null&&(y=o(b,y,C),M===null?S=b:M.sibling=b,M=b);return mt&&Wr(f,C),S}for(b=i(f,b);C<_.length;C++)T=p(b,f,C,_[C],x),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?C:T.key),y=o(T,y,C),M===null?S=T:M.sibling=T,M=T);return t&&b.forEach(function(P){return e(f,P)}),mt&&Wr(f,C),S}function v(f,y,_,x){var S=Oa(_);if(typeof S!="function")throw Error(ue(150));if(_=S.call(_),_==null)throw Error(ue(151));for(var M=S=null,b=y,C=y=0,T=null,w=_.next();b!==null&&!w.done;C++,w=_.next()){b.index>C?(T=b,b=null):T=b.sibling;var P=h(f,b,w.value,x);if(P===null){b===null&&(b=T);break}t&&b&&P.alternate===null&&e(f,b),y=o(P,y,C),M===null?S=P:M.sibling=P,M=P,b=T}if(w.done)return n(f,b),mt&&Wr(f,C),S;if(b===null){for(;!w.done;C++,w=_.next())w=d(f,w.value,x),w!==null&&(y=o(w,y,C),M===null?S=w:M.sibling=w,M=w);return mt&&Wr(f,C),S}for(b=i(f,b);!w.done;C++,w=_.next())w=p(b,f,C,w.value,x),w!==null&&(t&&w.alternate!==null&&b.delete(w.key===null?C:w.key),y=o(w,y,C),M===null?S=w:M.sibling=w,M=w);return t&&b.forEach(function(z){return e(f,z)}),mt&&Wr(f,C),S}function m(f,y,_,x){if(typeof _=="object"&&_!==null&&_.type===Go&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case al:e:{for(var S=_.key,M=y;M!==null;){if(M.key===S){if(S=_.type,S===Go){if(M.tag===7){n(f,M.sibling),y=r(M,_.props.children),y.return=f,f=y;break e}}else if(M.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===cr&&vg(S)===M.type){n(f,M.sibling),y=r(M,_.props),y.ref=za(f,M,_),y.return=f,f=y;break e}n(f,M);break}else e(f,M);M=M.sibling}_.type===Go?(y=no(_.props.children,f.mode,x,_.key),y.return=f,f=y):(x=hu(_.type,_.key,_.props,null,f.mode,x),x.ref=za(f,y,_),x.return=f,f=x)}return a(f);case Vo:e:{for(M=_.key;y!==null;){if(y.key===M)if(y.tag===4&&y.stateNode.containerInfo===_.containerInfo&&y.stateNode.implementation===_.implementation){n(f,y.sibling),y=r(y,_.children||[]),y.return=f,f=y;break e}else{n(f,y);break}else e(f,y);y=y.sibling}y=df(_,f.mode,x),y.return=f,f=y}return a(f);case cr:return M=_._init,m(f,y,M(_._payload),x)}if(rs(_))return g(f,y,_,x);if(Oa(_))return v(f,y,_,x);vl(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,y!==null&&y.tag===6?(n(f,y.sibling),y=r(y,_),y.return=f,f=y):(n(f,y),y=ff(_,f.mode,x),y.return=f,f=y),a(f)):n(f,y)}return m}var ga=ay(!0),sy=ay(!1),Nu=Lr(null),Uu=null,Zo=null,bp=null;function Tp(){bp=Zo=Uu=null}function Ap(t){var e=Nu.current;ft(Nu),t._currentValue=e}function Ud(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function sa(t,e){Uu=t,bp=Zo=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function Gn(t){var e=t._currentValue;if(bp!==t)if(t={context:t,memoizedValue:e,next:null},Zo===null){if(Uu===null)throw Error(ue(308));Zo=t,Uu.dependencies={lanes:0,firstContext:t}}else Zo=Zo.next=t;return e}var Zr=null;function Cp(t){Zr===null?Zr=[t]:Zr.push(t)}function ly(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Cp(e)):(n.next=r.next,r.next=n),e.interleaved=n,qi(t,i)}function qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fr=!1;function Rp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uy(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Sr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,qi(t,n)}return r=i.interleaved,r===null?(e.next=e,Cp(i)):(e.next=r.next,r.next=e),i.interleaved=e,qi(t,n)}function su(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pp(t,n)}}function _g(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?r=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?r=o=e:o=o.next=e}else r=o=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ku(t,e,n,i){var r=t.updateQueue;fr=!1;var o=r.firstBaseUpdate,a=r.lastBaseUpdate,s=r.shared.pending;if(s!==null){r.shared.pending=null;var l=s,u=l.next;l.next=null,a===null?o=u:a.next=u,a=l;var c=t.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==a&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(o!==null){var d=r.baseState;a=0,c=u=l=null,s=o;do{var h=s.lane,p=s.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var g=t,v=s;switch(h=e,p=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){d=g.call(p,d,h);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,h=typeof g=="function"?g.call(p,d,h):g,h==null)break e;d=_t({},d,h);break e;case 2:fr=!0}}s.callback!==null&&s.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[s]:h.push(s))}else p={eventTime:p,lane:h,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,a|=h;if(s=s.next,s===null){if(s=r.shared.pending,s===null)break;h=s,s=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else o===null&&(r.shared.lanes=0);so|=a,t.lanes=a,t.memoizedState=d}}function yg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ue(191,r));r.call(i)}}}var Js={},_i=Lr(Js),Us=Lr(Js),ks=Lr(Js);function Qr(t){if(t===Js)throw Error(ue(174));return t}function Pp(t,e){switch(lt(ks,e),lt(Us,t),lt(_i,Js),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gd(e,t)}ft(_i),lt(_i,e)}function va(){ft(_i),ft(Us),ft(ks)}function cy(t){Qr(ks.current);var e=Qr(_i.current),n=gd(e,t.type);e!==n&&(lt(Us,t),lt(_i,n))}function Lp(t){Us.current===t&&(ft(_i),ft(Us))}var gt=Lr(0);function Fu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var of=[];function Dp(){for(var t=0;t<of.length;t++)of[t]._workInProgressVersionPrimary=null;of.length=0}var lu=Zi.ReactCurrentDispatcher,af=Zi.ReactCurrentBatchConfig,ao=0,vt=null,Pt=null,Ft=null,zu=!1,vs=!1,Fs=0,G1=0;function Xt(){throw Error(ue(321))}function Ip(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!li(t[n],e[n]))return!1;return!0}function Op(t,e,n,i,r,o){if(ao=o,vt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,lu.current=t===null||t.memoizedState===null?X1:q1,t=n(i,r),vs){o=0;do{if(vs=!1,Fs=0,25<=o)throw Error(ue(301));o+=1,Ft=Pt=null,e.updateQueue=null,lu.current=Y1,t=n(i,r)}while(vs)}if(lu.current=Bu,e=Pt!==null&&Pt.next!==null,ao=0,Ft=Pt=vt=null,zu=!1,e)throw Error(ue(300));return t}function Np(){var t=Fs!==0;return Fs=0,t}function di(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ft===null?vt.memoizedState=Ft=t:Ft=Ft.next=t,Ft}function Wn(){if(Pt===null){var t=vt.alternate;t=t!==null?t.memoizedState:null}else t=Pt.next;var e=Ft===null?vt.memoizedState:Ft.next;if(e!==null)Ft=e,Pt=t;else{if(t===null)throw Error(ue(310));Pt=t,t={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},Ft===null?vt.memoizedState=Ft=t:Ft=Ft.next=t}return Ft}function zs(t,e){return typeof e=="function"?e(t):e}function sf(t){var e=Wn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=Pt,r=i.baseQueue,o=n.pending;if(o!==null){if(r!==null){var a=r.next;r.next=o.next,o.next=a}i.baseQueue=r=o,n.pending=null}if(r!==null){o=r.next,i=i.baseState;var s=a=null,l=null,u=o;do{var c=u.lane;if((ao&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,a=i):l=l.next=d,vt.lanes|=c,so|=c}u=u.next}while(u!==null&&u!==o);l===null?a=i:l.next=s,li(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do o=r.lane,vt.lanes|=o,so|=o,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function lf(t){var e=Wn(),n=e.queue;if(n===null)throw Error(ue(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,o=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do o=t(o,a.action),a=a.next;while(a!==r);li(o,e.memoizedState)||(hn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function fy(){}function dy(t,e){var n=vt,i=Wn(),r=e(),o=!li(i.memoizedState,r);if(o&&(i.memoizedState=r,hn=!0),i=i.queue,Up(my.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||Ft!==null&&Ft.memoizedState.tag&1){if(n.flags|=2048,Bs(9,py.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(ue(349));ao&30||hy(n,e,r)}return r}function hy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function py(t,e,n,i){e.value=n,e.getSnapshot=i,gy(e)&&vy(t)}function my(t,e,n){return n(function(){gy(e)&&vy(t)})}function gy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!li(t,n)}catch{return!0}}function vy(t){var e=qi(t,1);e!==null&&si(e,t,1,-1)}function xg(t){var e=di();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:zs,lastRenderedState:t},e.queue=t,t=t.dispatch=$1.bind(null,vt,t),[e.memoizedState,t]}function Bs(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=vt.updateQueue,e===null?(e={lastEffect:null,stores:null},vt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function _y(){return Wn().memoizedState}function uu(t,e,n,i){var r=di();vt.flags|=t,r.memoizedState=Bs(1|e,n,void 0,i===void 0?null:i)}function hc(t,e,n,i){var r=Wn();i=i===void 0?null:i;var o=void 0;if(Pt!==null){var a=Pt.memoizedState;if(o=a.destroy,i!==null&&Ip(i,a.deps)){r.memoizedState=Bs(e,n,o,i);return}}vt.flags|=t,r.memoizedState=Bs(1|e,n,o,i)}function Sg(t,e){return uu(8390656,8,t,e)}function Up(t,e){return hc(2048,8,t,e)}function yy(t,e){return hc(4,2,t,e)}function xy(t,e){return hc(4,4,t,e)}function Sy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function My(t,e,n){return n=n!=null?n.concat([t]):null,hc(4,4,Sy.bind(null,e,t),n)}function kp(){}function wy(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ip(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Ey(t,e){var n=Wn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Ip(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function by(t,e,n){return ao&21?(li(n,e)||(n=P_(),vt.lanes|=n,so|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function W1(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=af.transition;af.transition={};try{t(!1),e()}finally{ot=n,af.transition=i}}function Ty(){return Wn().memoizedState}function j1(t,e,n){var i=wr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Ay(t))Cy(e,n);else if(n=ly(t,e,n,i),n!==null){var r=on();si(n,t,i,r),Ry(n,e,i)}}function $1(t,e,n){var i=wr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ay(t))Cy(e,r);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,s=o(a,n);if(r.hasEagerState=!0,r.eagerState=s,li(s,a)){var l=e.interleaved;l===null?(r.next=r,Cp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=ly(t,e,r,i),n!==null&&(r=on(),si(n,t,i,r),Ry(n,e,i))}}function Ay(t){var e=t.alternate;return t===vt||e!==null&&e===vt}function Cy(t,e){vs=zu=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ry(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pp(t,n)}}var Bu={readContext:Gn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},X1={readContext:Gn,useCallback:function(t,e){return di().memoizedState=[t,e===void 0?null:e],t},useContext:Gn,useEffect:Sg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,uu(4194308,4,Sy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return uu(4194308,4,t,e)},useInsertionEffect:function(t,e){return uu(4,2,t,e)},useMemo:function(t,e){var n=di();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=di();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=j1.bind(null,vt,t),[i.memoizedState,t]},useRef:function(t){var e=di();return t={current:t},e.memoizedState=t},useState:xg,useDebugValue:kp,useDeferredValue:function(t){return di().memoizedState=t},useTransition:function(){var t=xg(!1),e=t[0];return t=W1.bind(null,t[1]),di().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=vt,r=di();if(mt){if(n===void 0)throw Error(ue(407));n=n()}else{if(n=e(),Bt===null)throw Error(ue(349));ao&30||hy(i,e,n)}r.memoizedState=n;var o={value:n,getSnapshot:e};return r.queue=o,Sg(my.bind(null,i,o,t),[t]),i.flags|=2048,Bs(9,py.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=di(),e=Bt.identifierPrefix;if(mt){var n=Fi,i=ki;n=(i&~(1<<32-ai(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Fs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=G1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},q1={readContext:Gn,useCallback:wy,useContext:Gn,useEffect:Up,useImperativeHandle:My,useInsertionEffect:yy,useLayoutEffect:xy,useMemo:Ey,useReducer:sf,useRef:_y,useState:function(){return sf(zs)},useDebugValue:kp,useDeferredValue:function(t){var e=Wn();return by(e,Pt.memoizedState,t)},useTransition:function(){var t=sf(zs)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:fy,useSyncExternalStore:dy,useId:Ty,unstable_isNewReconciler:!1},Y1={readContext:Gn,useCallback:wy,useContext:Gn,useEffect:Up,useImperativeHandle:My,useInsertionEffect:yy,useLayoutEffect:xy,useMemo:Ey,useReducer:lf,useRef:_y,useState:function(){return lf(zs)},useDebugValue:kp,useDeferredValue:function(t){var e=Wn();return Pt===null?e.memoizedState=t:by(e,Pt.memoizedState,t)},useTransition:function(){var t=lf(zs)[0],e=Wn().memoizedState;return[t,e]},useMutableSource:fy,useSyncExternalStore:dy,useId:Ty,unstable_isNewReconciler:!1};function Zn(t,e){if(t&&t.defaultProps){e=_t({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function kd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:_t({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var pc={isMounted:function(t){return(t=t._reactInternals)?po(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=wr(t),o=Vi(i,r);o.payload=e,n!=null&&(o.callback=n),e=Sr(t,o,r),e!==null&&(si(e,t,r,i),su(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=wr(t),o=Vi(i,r);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Sr(t,o,r),e!==null&&(si(e,t,r,i),su(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=wr(t),r=Vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Sr(t,r,i),e!==null&&(si(e,t,i,n),su(e,t,i))}};function Mg(t,e,n,i,r,o,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,a):e.prototype&&e.prototype.isPureReactComponent?!Ds(n,i)||!Ds(r,o):!0}function Py(t,e,n){var i=!1,r=Ar,o=e.contextType;return typeof o=="object"&&o!==null?o=Gn(o):(r=mn(e)?ro:Qt.current,i=e.contextTypes,o=(i=i!=null)?pa(t,r):Ar),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=pc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=o),e}function wg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&pc.enqueueReplaceState(e,e.state,null)}function Fd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Rp(t);var o=e.contextType;typeof o=="object"&&o!==null?r.context=Gn(o):(o=mn(e)?ro:Qt.current,r.context=pa(t,o)),r.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(kd(t,e,o,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&pc.enqueueReplaceState(r,r.state,null),ku(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _a(t,e){try{var n="",i=e;do n+=wM(i),i=i.return;while(i);var r=n}catch(o){r=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:r,digest:null}}function uf(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function zd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var K1=typeof WeakMap=="function"?WeakMap:Map;function Ly(t,e,n){n=Vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Vu||(Vu=!0,Yd=i),zd(t,e)},n}function Dy(t,e,n){n=Vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){zd(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){zd(t,e),typeof i!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Eg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new K1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=cw.bind(null,t,e,n),e.then(t,t))}function bg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Tg(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Vi(-1,1),e.tag=2,Sr(n,e,1))),n.lanes|=1),t)}var Z1=Zi.ReactCurrentOwner,hn=!1;function nn(t,e,n,i){e.child=t===null?sy(e,null,n,i):ga(e,t.child,n,i)}function Ag(t,e,n,i,r){n=n.render;var o=e.ref;return sa(e,r),i=Op(t,e,n,i,o,r),n=Np(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(mt&&n&&Mp(e),e.flags|=1,nn(t,e,i,r),e.child)}function Cg(t,e,n,i,r){if(t===null){var o=n.type;return typeof o=="function"&&!jp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Iy(t,e,o,i,r)):(t=hu(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&r)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ds,n(a,i)&&t.ref===e.ref)return Yi(t,e,r)}return e.flags|=1,t=Er(o,i),t.ref=e.ref,t.return=e,e.child=t}function Iy(t,e,n,i,r){if(t!==null){var o=t.memoizedProps;if(Ds(o,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=o,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,Yi(t,e,r)}return Bd(t,e,n,i,r)}function Oy(t,e,n){var i=e.pendingProps,r=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(Jo,bn),bn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(Jo,bn),bn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,lt(Jo,bn),bn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,lt(Jo,bn),bn|=i;return nn(t,e,r,n),e.child}function Ny(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Bd(t,e,n,i,r){var o=mn(n)?ro:Qt.current;return o=pa(e,o),sa(e,r),n=Op(t,e,n,i,o,r),i=Np(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Yi(t,e,r)):(mt&&i&&Mp(e),e.flags|=1,nn(t,e,n,r),e.child)}function Rg(t,e,n,i,r){if(mn(n)){var o=!0;Du(e)}else o=!1;if(sa(e,r),e.stateNode===null)cu(t,e),Py(e,n,i),Fd(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,s=e.memoizedProps;a.props=s;var l=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=Gn(u):(u=mn(n)?ro:Qt.current,u=pa(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==i||l!==u)&&wg(e,a,i,u),fr=!1;var h=e.memoizedState;a.state=h,ku(e,i,a,r),l=e.memoizedState,s!==i||h!==l||pn.current||fr?(typeof c=="function"&&(kd(e,n,c,i),l=e.memoizedState),(s=fr||Mg(e,n,s,i,h,l,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=u,i=s):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,uy(t,e),s=e.memoizedProps,u=e.type===e.elementType?s:Zn(e.type,s),a.props=u,d=e.pendingProps,h=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Gn(l):(l=mn(n)?ro:Qt.current,l=pa(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||h!==l)&&wg(e,a,i,l),fr=!1,h=e.memoizedState,a.state=h,ku(e,i,a,r);var g=e.memoizedState;s!==d||h!==g||pn.current||fr?(typeof p=="function"&&(kd(e,n,p,i),g=e.memoizedState),(u=fr||Mg(e,n,u,i,h,g,l)||!1)?(c||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,g,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,g,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),a.props=i,a.state=g,a.context=l,i=u):(typeof a.componentDidUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Hd(t,e,n,i,o,r)}function Hd(t,e,n,i,r,o){Ny(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&pg(e,n,!1),Yi(t,e,o);i=e.stateNode,Z1.current=e;var s=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=ga(e,t.child,null,o),e.child=ga(e,null,s,o)):nn(t,e,s,o),e.memoizedState=i.state,r&&pg(e,n,!0),e.child}function Uy(t){var e=t.stateNode;e.pendingContext?hg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&hg(t,e.context,!1),Pp(t,e.containerInfo)}function Pg(t,e,n,i,r){return ma(),Ep(r),e.flags|=256,nn(t,e,n,i),e.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function Gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function ky(t,e,n){var i=e.pendingProps,r=gt.current,o=!1,a=(e.flags&128)!==0,s;if((s=a)||(s=t!==null&&t.memoizedState===null?!1:(r&2)!==0),s?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(gt,r&1),t===null)return Nd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,o?(i=e.mode,o=e.child,a={mode:"hidden",children:a},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=vc(a,i,0,null),t=no(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=Gd(n),e.memoizedState=Vd,t):Fp(e,a));if(r=t.memoizedState,r!==null&&(s=r.dehydrated,s!==null))return Q1(t,e,a,i,s,r,n);if(o){o=i.fallback,a=e.mode,r=t.child,s=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Er(r,l),i.subtreeFlags=r.subtreeFlags&14680064),s!==null?o=Er(s,o):(o=no(o,a,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,a=t.child.memoizedState,a=a===null?Gd(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=t.childLanes&~n,e.memoizedState=Vd,i}return o=t.child,t=o.sibling,i=Er(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Fp(t,e){return e=vc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function _l(t,e,n,i){return i!==null&&Ep(i),ga(e,t.child,null,n),t=Fp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Q1(t,e,n,i,r,o,a){if(n)return e.flags&256?(e.flags&=-257,i=uf(Error(ue(422))),_l(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,r=e.mode,i=vc({mode:"visible",children:i.children},r,0,null),o=no(o,r,a,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&ga(e,t.child,null,a),e.child.memoizedState=Gd(a),e.memoizedState=Vd,o);if(!(e.mode&1))return _l(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var s=i.dgst;return i=s,o=Error(ue(419)),i=uf(o,i,void 0),_l(t,e,a,i)}if(s=(a&t.childLanes)!==0,hn||s){if(i=Bt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==o.retryLane&&(o.retryLane=r,qi(t,r),si(i,t,r,-1))}return Wp(),i=uf(Error(ue(421))),_l(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=fw.bind(null,t),r._reactRetry=e,null):(t=o.treeContext,Tn=xr(r.nextSibling),An=e,mt=!0,ei=null,t!==null&&(Nn[Un++]=ki,Nn[Un++]=Fi,Nn[Un++]=oo,ki=t.id,Fi=t.overflow,oo=e),e=Fp(e,i.children),e.flags|=4096,e)}function Lg(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ud(t.return,e,n)}function cf(t,e,n,i,r){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=r)}function Fy(t,e,n){var i=e.pendingProps,r=i.revealOrder,o=i.tail;if(nn(t,e,i.children,n),i=gt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Lg(t,n,e);else if(t.tag===19)Lg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(gt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),cf(e,!1,r,n,o);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}cf(e,!0,n,null,o);break;case"together":cf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Yi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),so|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ue(153));if(e.child!==null){for(t=e.child,n=Er(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Er(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function J1(t,e,n){switch(e.tag){case 3:Uy(e),ma();break;case 5:cy(e);break;case 1:mn(e.type)&&Du(e);break;case 4:Pp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Nu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(gt,gt.current&1),e.flags|=128,null):n&e.child.childLanes?ky(t,e,n):(lt(gt,gt.current&1),t=Yi(t,e,n),t!==null?t.sibling:null);lt(gt,gt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Fy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(gt,gt.current),i)break;return null;case 22:case 23:return e.lanes=0,Oy(t,e,n)}return Yi(t,e,n)}var zy,Wd,By,Hy;zy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wd=function(){};By=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Qr(_i.current);var o=null;switch(n){case"input":r=dd(t,r),i=dd(t,i),o=[];break;case"select":r=_t({},r,{value:void 0}),i=_t({},i,{value:void 0}),o=[];break;case"textarea":r=md(t,r),i=md(t,i),o=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Pu)}vd(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var s=r[u];for(a in s)s.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(bs.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in i){var l=i[u];if(s=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&s[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(bs.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ut("scroll",t),o||s===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};Hy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ba(t,e){if(!mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function ew(t,e,n){var i=e.pendingProps;switch(wp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return mn(e.type)&&Lu(),qt(e),null;case 3:return i=e.stateNode,va(),ft(pn),ft(Qt),Dp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(gl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ei!==null&&(Qd(ei),ei=null))),Wd(t,e),qt(e),null;case 5:Lp(e);var r=Qr(ks.current);if(n=e.type,t!==null&&e.stateNode!=null)By(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ue(166));return qt(e),null}if(t=Qr(_i.current),gl(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[mi]=e,i[Ns]=o,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<as.length;r++)ut(as[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Bm(i,o),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},ut("invalid",i);break;case"textarea":Vm(i,o),ut("invalid",i)}vd(n,o),r=null;for(var a in o)if(o.hasOwnProperty(a)){var s=o[a];a==="children"?typeof s=="string"?i.textContent!==s&&(o.suppressHydrationWarning!==!0&&ml(i.textContent,s,t),r=["children",s]):typeof s=="number"&&i.textContent!==""+s&&(o.suppressHydrationWarning!==!0&&ml(i.textContent,s,t),r=["children",""+s]):bs.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":sl(i),Hm(i,o,!0);break;case"textarea":sl(i),Gm(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Pu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=m_(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[mi]=e,t[Ns]=i,zy(t,e,!1,!1),e.stateNode=t;e:{switch(a=_d(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<as.length;r++)ut(as[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Bm(t,i),r=dd(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=_t({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Vm(t,i),r=md(t,i),ut("invalid",t);break;default:r=i}vd(n,r),s=r;for(o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="style"?__(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&g_(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ts(t,l):typeof l=="number"&&Ts(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(bs.hasOwnProperty(o)?l!=null&&o==="onScroll"&&ut("scroll",t):l!=null&&lp(t,o,l,a))}switch(n){case"input":sl(t),Hm(t,i,!1);break;case"textarea":sl(t),Gm(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Tr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?ia(t,!!i.multiple,o,!1):i.defaultValue!=null&&ia(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Pu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)Hy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ue(166));if(n=Qr(ks.current),Qr(_i.current),gl(e)){if(i=e.stateNode,n=e.memoizedProps,i[mi]=e,(o=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:ml(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ml(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return qt(e),null;case 13:if(ft(gt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(mt&&Tn!==null&&e.mode&1&&!(e.flags&128))oy(),ma(),e.flags|=98560,o=!1;else if(o=gl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ue(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ue(317));o[mi]=e}else ma(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),o=!1}else ei!==null&&(Qd(ei),ei=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||gt.current&1?Dt===0&&(Dt=3):Wp())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return va(),Wd(t,e),t===null&&Is(e.stateNode.containerInfo),qt(e),null;case 10:return Ap(e.type._context),qt(e),null;case 17:return mn(e.type)&&Lu(),qt(e),null;case 19:if(ft(gt),o=e.memoizedState,o===null)return qt(e),null;if(i=(e.flags&128)!==0,a=o.rendering,a===null)if(i)Ba(o,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Fu(t),a!==null){for(e.flags|=128,Ba(o,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,t=a.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(gt,gt.current&1|2),e.child}t=t.sibling}o.tail!==null&&wt()>ya&&(e.flags|=128,i=!0,Ba(o,!1),e.lanes=4194304)}else{if(!i)if(t=Fu(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ba(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!mt)return qt(e),null}else 2*wt()-o.renderingStartTime>ya&&n!==1073741824&&(e.flags|=128,i=!0,Ba(o,!1),e.lanes=4194304);o.isBackwards?(a.sibling=e.child,e.child=a):(n=o.last,n!==null?n.sibling=a:e.child=a,o.last=a)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=wt(),e.sibling=null,n=gt.current,lt(gt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Gp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?bn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ue(156,e.tag))}function tw(t,e){switch(wp(e),e.tag){case 1:return mn(e.type)&&Lu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return va(),ft(pn),ft(Qt),Dp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Lp(e),null;case 13:if(ft(gt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ue(340));ma()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(gt),null;case 4:return va(),null;case 10:return Ap(e.type._context),null;case 22:case 23:return Gp(),null;case 24:return null;default:return null}}var yl=!1,Zt=!1,nw=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Qo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function jd(t,e,n){try{n()}catch(i){St(t,e,i)}}var Dg=!1;function iw(t,e){if(Cd=Au,t=$_(),Sp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,s=-1,l=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var p;d!==n||r!==0&&d.nodeType!==3||(s=a+r),d!==o||i!==0&&d.nodeType!==3||(l=a+i),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===t)break t;if(h===n&&++u===r&&(s=a),h===o&&++c===i&&(l=a),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rd={focusedElem:t,selectionRange:n},Au=!1,xe=e;xe!==null;)if(e=xe,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,xe=t;else for(;xe!==null;){e=xe;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,m=g.memoizedState,f=e.stateNode,y=f.getSnapshotBeforeUpdate(e.elementType===e.type?v:Zn(e.type,v),m);f.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(x){St(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,xe=t;break}xe=e.return}return g=Dg,Dg=!1,g}function _s(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var o=r.destroy;r.destroy=void 0,o!==void 0&&jd(e,n,o)}r=r.next}while(r!==i)}}function mc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function $d(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vy(t){var e=t.alternate;e!==null&&(t.alternate=null,Vy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[mi],delete e[Ns],delete e[Dd],delete e[z1],delete e[B1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Gy(t){return t.tag===5||t.tag===3||t.tag===4}function Ig(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Gy(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Xd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pu));else if(i!==4&&(t=t.child,t!==null))for(Xd(t,e,n),t=t.sibling;t!==null;)Xd(t,e,n),t=t.sibling}function qd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qd(t,e,n),t=t.sibling;t!==null;)qd(t,e,n),t=t.sibling}var Wt=null,Qn=!1;function tr(t,e,n){for(n=n.child;n!==null;)Wy(t,e,n),n=n.sibling}function Wy(t,e,n){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(sc,n)}catch{}switch(n.tag){case 5:Zt||Qo(n,e);case 6:var i=Wt,r=Qn;Wt=null,tr(t,e,n),Wt=i,Qn=r,Wt!==null&&(Qn?(t=Wt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Wt.removeChild(n.stateNode));break;case 18:Wt!==null&&(Qn?(t=Wt,n=n.stateNode,t.nodeType===8?nf(t.parentNode,n):t.nodeType===1&&nf(t,n),Ps(t)):nf(Wt,n.stateNode));break;case 4:i=Wt,r=Qn,Wt=n.stateNode.containerInfo,Qn=!0,tr(t,e,n),Wt=i,Qn=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var o=r,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&jd(n,e,a),r=r.next}while(r!==i)}tr(t,e,n);break;case 1:if(!Zt&&(Qo(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(s){St(n,e,s)}tr(t,e,n);break;case 21:tr(t,e,n);break;case 22:n.mode&1?(Zt=(i=Zt)||n.memoizedState!==null,tr(t,e,n),Zt=i):tr(t,e,n);break;default:tr(t,e,n)}}function Og(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new nw),e.forEach(function(i){var r=dw.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var o=t,a=e,s=a;e:for(;s!==null;){switch(s.tag){case 5:Wt=s.stateNode,Qn=!1;break e;case 3:Wt=s.stateNode.containerInfo,Qn=!0;break e;case 4:Wt=s.stateNode.containerInfo,Qn=!0;break e}s=s.return}if(Wt===null)throw Error(ue(160));Wy(o,a,r),Wt=null,Qn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){St(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)jy(e,t),e=e.sibling}function jy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),fi(t),i&4){try{_s(3,t,t.return),mc(3,t)}catch(v){St(t,t.return,v)}try{_s(5,t,t.return)}catch(v){St(t,t.return,v)}}break;case 1:$n(e,t),fi(t),i&512&&n!==null&&Qo(n,n.return);break;case 5:if($n(e,t),fi(t),i&512&&n!==null&&Qo(n,n.return),t.flags&32){var r=t.stateNode;try{Ts(r,"")}catch(v){St(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var o=t.memoizedProps,a=n!==null?n.memoizedProps:o,s=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{s==="input"&&o.type==="radio"&&o.name!=null&&h_(r,o),_d(s,a);var u=_d(s,o);for(a=0;a<l.length;a+=2){var c=l[a],d=l[a+1];c==="style"?__(r,d):c==="dangerouslySetInnerHTML"?g_(r,d):c==="children"?Ts(r,d):lp(r,c,d,u)}switch(s){case"input":hd(r,o);break;case"textarea":p_(r,o);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!o.multiple;var p=o.value;p!=null?ia(r,!!o.multiple,p,!1):h!==!!o.multiple&&(o.defaultValue!=null?ia(r,!!o.multiple,o.defaultValue,!0):ia(r,!!o.multiple,o.multiple?[]:"",!1))}r[Ns]=o}catch(v){St(t,t.return,v)}}break;case 6:if($n(e,t),fi(t),i&4){if(t.stateNode===null)throw Error(ue(162));r=t.stateNode,o=t.memoizedProps;try{r.nodeValue=o}catch(v){St(t,t.return,v)}}break;case 3:if($n(e,t),fi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ps(e.containerInfo)}catch(v){St(t,t.return,v)}break;case 4:$n(e,t),fi(t);break;case 13:$n(e,t),fi(t),r=t.child,r.flags&8192&&(o=r.memoizedState!==null,r.stateNode.isHidden=o,!o||r.alternate!==null&&r.alternate.memoizedState!==null||(Hp=wt())),i&4&&Og(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Zt=(u=Zt)||c,$n(e,t),Zt=u):$n(e,t),fi(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(xe=t,c=t.child;c!==null;){for(d=xe=c;xe!==null;){switch(h=xe,p=h.child,h.tag){case 0:case 11:case 14:case 15:_s(4,h,h.return);break;case 1:Qo(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){St(i,n,v)}}break;case 5:Qo(h,h.return);break;case 22:if(h.memoizedState!==null){Ug(d);continue}}p!==null?(p.return=h,xe=p):Ug(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(o=r.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(s=d.stateNode,l=d.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=v_("display",a))}catch(v){St(t,t.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){St(t,t.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:$n(e,t),fi(t),i&4&&Og(t);break;case 21:break;default:$n(e,t),fi(t)}}function fi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Gy(n)){var i=n;break e}n=n.return}throw Error(ue(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ts(r,""),i.flags&=-33);var o=Ig(t);qd(t,o,r);break;case 3:case 4:var a=i.stateNode.containerInfo,s=Ig(t);Xd(t,s,a);break;default:throw Error(ue(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function rw(t,e,n){xe=t,$y(t)}function $y(t,e,n){for(var i=(t.mode&1)!==0;xe!==null;){var r=xe,o=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||yl;if(!a){var s=r.alternate,l=s!==null&&s.memoizedState!==null||Zt;s=yl;var u=Zt;if(yl=a,(Zt=l)&&!u)for(xe=r;xe!==null;)a=xe,l=a.child,a.tag===22&&a.memoizedState!==null?kg(r):l!==null?(l.return=a,xe=l):kg(r);for(;o!==null;)xe=o,$y(o),o=o.sibling;xe=r,yl=s,Zt=u}Ng(t)}else r.subtreeFlags&8772&&o!==null?(o.return=r,xe=o):Ng(t)}}function Ng(t){for(;xe!==null;){var e=xe;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||mc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&yg(e,o,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}yg(e,a,n)}break;case 5:var s=e.stateNode;if(n===null&&e.flags&4){n=s;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ps(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Zt||e.flags&512&&$d(e)}catch(h){St(e,e.return,h)}}if(e===t){xe=null;break}if(n=e.sibling,n!==null){n.return=e.return,xe=n;break}xe=e.return}}function Ug(t){for(;xe!==null;){var e=xe;if(e===t){xe=null;break}var n=e.sibling;if(n!==null){n.return=e.return,xe=n;break}xe=e.return}}function kg(t){for(;xe!==null;){var e=xe;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{mc(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var o=e.return;try{$d(e)}catch(l){St(e,o,l)}break;case 5:var a=e.return;try{$d(e)}catch(l){St(e,a,l)}}}catch(l){St(e,e.return,l)}if(e===t){xe=null;break}var s=e.sibling;if(s!==null){s.return=e.return,xe=s;break}xe=e.return}}var ow=Math.ceil,Hu=Zi.ReactCurrentDispatcher,zp=Zi.ReactCurrentOwner,Hn=Zi.ReactCurrentBatchConfig,Ke=0,Bt=null,At=null,jt=0,bn=0,Jo=Lr(0),Dt=0,Hs=null,so=0,gc=0,Bp=0,ys=null,fn=null,Hp=0,ya=1/0,Di=null,Vu=!1,Yd=null,Mr=null,xl=!1,gr=null,Gu=0,xs=0,Kd=null,fu=-1,du=0;function on(){return Ke&6?wt():fu!==-1?fu:fu=wt()}function wr(t){return t.mode&1?Ke&2&&jt!==0?jt&-jt:V1.transition!==null?(du===0&&(du=P_()),du):(t=ot,t!==0||(t=window.event,t=t===void 0?16:k_(t.type)),t):1}function si(t,e,n,i){if(50<xs)throw xs=0,Kd=null,Error(ue(185));Ks(t,n,i),(!(Ke&2)||t!==Bt)&&(t===Bt&&(!(Ke&2)&&(gc|=n),Dt===4&&hr(t,jt)),gn(t,i),n===1&&Ke===0&&!(e.mode&1)&&(ya=wt()+500,dc&&Dr()))}function gn(t,e){var n=t.callbackNode;VM(t,e);var i=Tu(t,t===Bt?jt:0);if(i===0)n!==null&&$m(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&$m(n),e===1)t.tag===0?H1(Fg.bind(null,t)):ny(Fg.bind(null,t)),k1(function(){!(Ke&6)&&Dr()}),n=null;else{switch(L_(i)){case 1:n=hp;break;case 4:n=C_;break;case 16:n=bu;break;case 536870912:n=R_;break;default:n=bu}n=ex(n,Xy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Xy(t,e){if(fu=-1,du=0,Ke&6)throw Error(ue(327));var n=t.callbackNode;if(la()&&t.callbackNode!==n)return null;var i=Tu(t,t===Bt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Wu(t,i);else{e=i;var r=Ke;Ke|=2;var o=Yy();(Bt!==t||jt!==e)&&(Di=null,ya=wt()+500,to(t,e));do try{lw();break}catch(s){qy(t,s)}while(!0);Tp(),Hu.current=o,Ke=r,At!==null?e=0:(Bt=null,jt=0,e=Dt)}if(e!==0){if(e===2&&(r=wd(t),r!==0&&(i=r,e=Zd(t,r))),e===1)throw n=Hs,to(t,0),hr(t,i),gn(t,wt()),n;if(e===6)hr(t,i);else{if(r=t.current.alternate,!(i&30)&&!aw(r)&&(e=Wu(t,i),e===2&&(o=wd(t),o!==0&&(i=o,e=Zd(t,o))),e===1))throw n=Hs,to(t,0),hr(t,i),gn(t,wt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ue(345));case 2:jr(t,fn,Di);break;case 3:if(hr(t,i),(i&130023424)===i&&(e=Hp+500-wt(),10<e)){if(Tu(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Ld(jr.bind(null,t,fn,Di),e);break}jr(t,fn,Di);break;case 4:if(hr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-ai(i);o=1<<a,a=e[a],a>r&&(r=a),i&=~o}if(i=r,i=wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ow(i/1960))-i,10<i){t.timeoutHandle=Ld(jr.bind(null,t,fn,Di),i);break}jr(t,fn,Di);break;case 5:jr(t,fn,Di);break;default:throw Error(ue(329))}}}return gn(t,wt()),t.callbackNode===n?Xy.bind(null,t):null}function Zd(t,e){var n=ys;return t.current.memoizedState.isDehydrated&&(to(t,e).flags|=256),t=Wu(t,e),t!==2&&(e=fn,fn=n,e!==null&&Qd(e)),t}function Qd(t){fn===null?fn=t:fn.push.apply(fn,t)}function aw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],o=r.getSnapshot;r=r.value;try{if(!li(o(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(t,e){for(e&=~Bp,e&=~gc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ai(e),i=1<<n;t[n]=-1,e&=~i}}function Fg(t){if(Ke&6)throw Error(ue(327));la();var e=Tu(t,0);if(!(e&1))return gn(t,wt()),null;var n=Wu(t,e);if(t.tag!==0&&n===2){var i=wd(t);i!==0&&(e=i,n=Zd(t,i))}if(n===1)throw n=Hs,to(t,0),hr(t,e),gn(t,wt()),n;if(n===6)throw Error(ue(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,jr(t,fn,Di),gn(t,wt()),null}function Vp(t,e){var n=Ke;Ke|=1;try{return t(e)}finally{Ke=n,Ke===0&&(ya=wt()+500,dc&&Dr())}}function lo(t){gr!==null&&gr.tag===0&&!(Ke&6)&&la();var e=Ke;Ke|=1;var n=Hn.transition,i=ot;try{if(Hn.transition=null,ot=1,t)return t()}finally{ot=i,Hn.transition=n,Ke=e,!(Ke&6)&&Dr()}}function Gp(){bn=Jo.current,ft(Jo)}function to(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,U1(n)),At!==null)for(n=At.return;n!==null;){var i=n;switch(wp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Lu();break;case 3:va(),ft(pn),ft(Qt),Dp();break;case 5:Lp(i);break;case 4:va();break;case 13:ft(gt);break;case 19:ft(gt);break;case 10:Ap(i.type._context);break;case 22:case 23:Gp()}n=n.return}if(Bt=t,At=t=Er(t.current,null),jt=bn=e,Dt=0,Hs=null,Bp=gc=so=0,fn=ys=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,o=n.pending;if(o!==null){var a=o.next;o.next=r,i.next=a}n.pending=i}Zr=null}return t}function qy(t,e){do{var n=At;try{if(Tp(),lu.current=Bu,zu){for(var i=vt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}zu=!1}if(ao=0,Ft=Pt=vt=null,vs=!1,Fs=0,zp.current=null,n===null||n.return===null){Dt=1,Hs=e,At=null;break}e:{var o=t,a=n.return,s=n,l=e;if(e=jt,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=bg(a);if(p!==null){p.flags&=-257,Tg(p,a,s,o,e),p.mode&1&&Eg(o,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){Eg(o,u,e),Wp();break e}l=Error(ue(426))}}else if(mt&&s.mode&1){var m=bg(a);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Tg(m,a,s,o,e),Ep(_a(l,s));break e}}o=l=_a(l,s),Dt!==4&&(Dt=2),ys===null?ys=[o]:ys.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var f=Ly(o,l,e);_g(o,f);break e;case 1:s=l;var y=o.type,_=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Mr===null||!Mr.has(_)))){o.flags|=65536,e&=-e,o.lanes|=e;var x=Dy(o,s,e);_g(o,x);break e}}o=o.return}while(o!==null)}Zy(n)}catch(S){e=S,At===n&&n!==null&&(At=n=n.return);continue}break}while(!0)}function Yy(){var t=Hu.current;return Hu.current=Bu,t===null?Bu:t}function Wp(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),Bt===null||!(so&268435455)&&!(gc&268435455)||hr(Bt,jt)}function Wu(t,e){var n=Ke;Ke|=2;var i=Yy();(Bt!==t||jt!==e)&&(Di=null,to(t,e));do try{sw();break}catch(r){qy(t,r)}while(!0);if(Tp(),Ke=n,Hu.current=i,At!==null)throw Error(ue(261));return Bt=null,jt=0,Dt}function sw(){for(;At!==null;)Ky(At)}function lw(){for(;At!==null&&!IM();)Ky(At)}function Ky(t){var e=Jy(t.alternate,t,bn);t.memoizedProps=t.pendingProps,e===null?Zy(t):At=e,zp.current=null}function Zy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=tw(n,e),n!==null){n.flags&=32767,At=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,At=null;return}}else if(n=ew(n,e,bn),n!==null){At=n;return}if(e=e.sibling,e!==null){At=e;return}At=e=t}while(e!==null);Dt===0&&(Dt=5)}function jr(t,e,n){var i=ot,r=Hn.transition;try{Hn.transition=null,ot=1,uw(t,e,n,i)}finally{Hn.transition=r,ot=i}return null}function uw(t,e,n,i){do la();while(gr!==null);if(Ke&6)throw Error(ue(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ue(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(GM(t,o),t===Bt&&(At=Bt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||xl||(xl=!0,ex(bu,function(){return la(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=Hn.transition,Hn.transition=null;var a=ot;ot=1;var s=Ke;Ke|=4,zp.current=null,iw(t,n),jy(n,t),R1(Rd),Au=!!Cd,Rd=Cd=null,t.current=n,rw(n),OM(),Ke=s,ot=a,Hn.transition=o}else t.current=n;if(xl&&(xl=!1,gr=t,Gu=r),o=t.pendingLanes,o===0&&(Mr=null),kM(n.stateNode),gn(t,wt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Vu)throw Vu=!1,t=Yd,Yd=null,t;return Gu&1&&t.tag!==0&&la(),o=t.pendingLanes,o&1?t===Kd?xs++:(xs=0,Kd=t):xs=0,Dr(),null}function la(){if(gr!==null){var t=L_(Gu),e=Hn.transition,n=ot;try{if(Hn.transition=null,ot=16>t?16:t,gr===null)var i=!1;else{if(t=gr,gr=null,Gu=0,Ke&6)throw Error(ue(331));var r=Ke;for(Ke|=4,xe=t.current;xe!==null;){var o=xe,a=o.child;if(xe.flags&16){var s=o.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(xe=u;xe!==null;){var c=xe;switch(c.tag){case 0:case 11:case 15:_s(8,c,o)}var d=c.child;if(d!==null)d.return=c,xe=d;else for(;xe!==null;){c=xe;var h=c.sibling,p=c.return;if(Vy(c),c===u){xe=null;break}if(h!==null){h.return=p,xe=h;break}xe=p}}}var g=o.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}xe=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,xe=a;else e:for(;xe!==null;){if(o=xe,o.flags&2048)switch(o.tag){case 0:case 11:case 15:_s(9,o,o.return)}var f=o.sibling;if(f!==null){f.return=o.return,xe=f;break e}xe=o.return}}var y=t.current;for(xe=y;xe!==null;){a=xe;var _=a.child;if(a.subtreeFlags&2064&&_!==null)_.return=a,xe=_;else e:for(a=y;xe!==null;){if(s=xe,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:mc(9,s)}}catch(S){St(s,s.return,S)}if(s===a){xe=null;break e}var x=s.sibling;if(x!==null){x.return=s.return,xe=x;break e}xe=s.return}}if(Ke=r,Dr(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(sc,t)}catch{}i=!0}return i}finally{ot=n,Hn.transition=e}}return!1}function zg(t,e,n){e=_a(n,e),e=Ly(t,e,1),t=Sr(t,e,1),e=on(),t!==null&&(Ks(t,1,e),gn(t,e))}function St(t,e,n){if(t.tag===3)zg(t,t,n);else for(;e!==null;){if(e.tag===3){zg(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Mr===null||!Mr.has(i))){t=_a(n,t),t=Dy(e,t,1),e=Sr(e,t,1),t=on(),e!==null&&(Ks(e,1,t),gn(e,t));break}}e=e.return}}function cw(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(jt&n)===n&&(Dt===4||Dt===3&&(jt&130023424)===jt&&500>wt()-Hp?to(t,0):Bp|=n),gn(t,e)}function Qy(t,e){e===0&&(t.mode&1?(e=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):e=1);var n=on();t=qi(t,e),t!==null&&(Ks(t,e,n),gn(t,n))}function fw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Qy(t,n)}function dw(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ue(314))}i!==null&&i.delete(e),Qy(t,n)}var Jy;Jy=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||pn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,J1(t,e,n);hn=!!(t.flags&131072)}else hn=!1,mt&&e.flags&1048576&&iy(e,Ou,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cu(t,e),t=e.pendingProps;var r=pa(e,Qt.current);sa(e,n),r=Op(null,e,i,t,r,n);var o=Np();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(o=!0,Du(e)):o=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rp(e),r.updater=pc,e.stateNode=r,r._reactInternals=e,Fd(e,i,t,n),e=Hd(null,e,i,!0,o,n)):(e.tag=0,mt&&o&&Mp(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cu(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=pw(i),t=Zn(i,t),r){case 0:e=Bd(null,e,i,t,n);break e;case 1:e=Rg(null,e,i,t,n);break e;case 11:e=Ag(null,e,i,t,n);break e;case 14:e=Cg(null,e,i,Zn(i.type,t),n);break e}throw Error(ue(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Bd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Rg(t,e,i,r,n);case 3:e:{if(Uy(e),t===null)throw Error(ue(387));i=e.pendingProps,o=e.memoizedState,r=o.element,uy(t,e),ku(e,i,null,n);var a=e.memoizedState;if(i=a.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){r=_a(Error(ue(423)),e),e=Pg(t,e,i,n,r);break e}else if(i!==r){r=_a(Error(ue(424)),e),e=Pg(t,e,i,n,r);break e}else for(Tn=xr(e.stateNode.containerInfo.firstChild),An=e,mt=!0,ei=null,n=sy(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ma(),i===r){e=Yi(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return cy(e),t===null&&Nd(e),i=e.type,r=e.pendingProps,o=t!==null?t.memoizedProps:null,a=r.children,Pd(i,r)?a=null:o!==null&&Pd(i,o)&&(e.flags|=32),Ny(t,e),nn(t,e,a,n),e.child;case 6:return t===null&&Nd(e),null;case 13:return ky(t,e,n);case 4:return Pp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=ga(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),Ag(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,o=e.memoizedProps,a=r.value,lt(Nu,i._currentValue),i._currentValue=a,o!==null)if(li(o.value,a)){if(o.children===r.children&&!pn.current){e=Yi(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var s=o.dependencies;if(s!==null){a=o.child;for(var l=s.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=Vi(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ud(o.return,n,e),s.lanes|=n;break}l=l.next}}else if(o.tag===10)a=o.type===e.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(ue(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Ud(a,n,e),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===e){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,sa(e,n),r=Gn(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Zn(i,e.pendingProps),r=Zn(i.type,r),Cg(t,e,i,r,n);case 15:return Iy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Zn(i,r),cu(t,e),e.tag=1,mn(i)?(t=!0,Du(e)):t=!1,sa(e,n),Py(e,i,r),Fd(e,i,r,n),Hd(null,e,i,!0,t,n);case 19:return Fy(t,e,n);case 22:return Oy(t,e,n)}throw Error(ue(156,e.tag))};function ex(t,e){return A_(t,e)}function hw(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new hw(t,e,n,i)}function jp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function pw(t){if(typeof t=="function")return jp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cp)return 11;if(t===fp)return 14}return 2}function Er(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hu(t,e,n,i,r,o){var a=2;if(i=t,typeof t=="function")jp(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case Go:return no(n.children,r,o,e);case up:a=8,r|=8;break;case ld:return t=Fn(12,n,e,r|2),t.elementType=ld,t.lanes=o,t;case ud:return t=Fn(13,n,e,r),t.elementType=ud,t.lanes=o,t;case cd:return t=Fn(19,n,e,r),t.elementType=cd,t.lanes=o,t;case c_:return vc(n,r,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case l_:a=10;break e;case u_:a=9;break e;case cp:a=11;break e;case fp:a=14;break e;case cr:a=16,i=null;break e}throw Error(ue(130,t==null?t:typeof t,""))}return e=Fn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=o,e}function no(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function vc(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=c_,t.lanes=n,t.stateNode={isHidden:!1},t}function ff(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function df(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function mw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jc(0),this.expirationTimes=jc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function $p(t,e,n,i,r,o,a,s,l){return t=new mw(t,e,n,s,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Fn(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rp(o),t}function gw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vo,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function tx(t){if(!t)return Ar;t=t._reactInternals;e:{if(po(t)!==t||t.tag!==1)throw Error(ue(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ue(171))}if(t.tag===1){var n=t.type;if(mn(n))return ty(t,n,e)}return e}function nx(t,e,n,i,r,o,a,s,l){return t=$p(n,i,!0,t,r,o,a,s,l),t.context=tx(null),n=t.current,i=on(),r=wr(n),o=Vi(i,r),o.callback=e??null,Sr(n,o,r),t.current.lanes=r,Ks(t,r,i),gn(t,i),t}function _c(t,e,n,i){var r=e.current,o=on(),a=wr(r);return n=tx(n),e.context===null?e.context=n:e.pendingContext=n,e=Vi(o,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Sr(r,e,a),t!==null&&(si(t,r,a,o),su(t,r,a)),a}function ju(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Bg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xp(t,e){Bg(t,e),(t=t.alternate)&&Bg(t,e)}function vw(){return null}var ix=typeof reportError=="function"?reportError:function(t){console.error(t)};function qp(t){this._internalRoot=t}yc.prototype.render=qp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ue(409));_c(t,e,null,null)};yc.prototype.unmount=qp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;lo(function(){_c(null,t,null,null)}),e[Xi]=null}};function yc(t){this._internalRoot=t}yc.prototype.unstable_scheduleHydration=function(t){if(t){var e=O_();t={blockedOn:null,target:t,priority:e};for(var n=0;n<dr.length&&e!==0&&e<dr[n].priority;n++);dr.splice(n,0,t),n===0&&U_(t)}};function Yp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Hg(){}function _w(t,e,n,i,r){if(r){if(typeof i=="function"){var o=i;i=function(){var u=ju(a);o.call(u)}}var a=nx(e,i,t,0,null,!1,!1,"",Hg);return t._reactRootContainer=a,t[Xi]=a.current,Is(t.nodeType===8?t.parentNode:t),lo(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var s=i;i=function(){var u=ju(l);s.call(u)}}var l=$p(t,0,!1,null,null,!1,!1,"",Hg);return t._reactRootContainer=l,t[Xi]=l.current,Is(t.nodeType===8?t.parentNode:t),lo(function(){_c(e,l,n,i)}),l}function Sc(t,e,n,i,r){var o=n._reactRootContainer;if(o){var a=o;if(typeof r=="function"){var s=r;r=function(){var l=ju(a);s.call(l)}}_c(e,a,t,r)}else a=_w(n,e,t,r,i);return ju(a)}D_=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=os(e.pendingLanes);n!==0&&(pp(e,n|1),gn(e,wt()),!(Ke&6)&&(ya=wt()+500,Dr()))}break;case 13:lo(function(){var i=qi(t,1);if(i!==null){var r=on();si(i,t,1,r)}}),Xp(t,1)}};mp=function(t){if(t.tag===13){var e=qi(t,134217728);if(e!==null){var n=on();si(e,t,134217728,n)}Xp(t,134217728)}};I_=function(t){if(t.tag===13){var e=wr(t),n=qi(t,e);if(n!==null){var i=on();si(n,t,e,i)}Xp(t,e)}};O_=function(){return ot};N_=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};xd=function(t,e,n){switch(e){case"input":if(hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=fc(i);if(!r)throw Error(ue(90));d_(i),hd(i,r)}}}break;case"textarea":p_(t,n);break;case"select":e=n.value,e!=null&&ia(t,!!n.multiple,e,!1)}};S_=Vp;M_=lo;var yw={usingClientEntryPoint:!1,Events:[Qs,Xo,fc,y_,x_,Vp]},Ha={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},xw={bundleType:Ha.bundleType,version:Ha.version,rendererPackageName:Ha.rendererPackageName,rendererConfig:Ha.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Zi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b_(t),t===null?null:t.stateNode},findFiberByHostInstance:Ha.findFiberByHostInstance||vw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{sc=Sl.inject(xw),vi=Sl}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yw;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yp(e))throw Error(ue(200));return gw(t,e,null,n)};Rn.createRoot=function(t,e){if(!Yp(t))throw Error(ue(299));var n=!1,i="",r=ix;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=$p(t,1,!1,null,null,n,!1,i,r),t[Xi]=e.current,Is(t.nodeType===8?t.parentNode:t),new qp(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ue(188)):(t=Object.keys(t).join(","),Error(ue(268,t)));return t=b_(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return lo(t)};Rn.hydrate=function(t,e,n){if(!xc(e))throw Error(ue(200));return Sc(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!Yp(t))throw Error(ue(405));var i=n!=null&&n.hydratedSources||null,r=!1,o="",a=ix;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=nx(e,null,t,1,n??null,r,!1,o,a),t[Xi]=e.current,Is(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yc(e)};Rn.render=function(t,e,n){if(!xc(e))throw Error(ue(200));return Sc(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!xc(t))throw Error(ue(40));return t._reactRootContainer?(lo(function(){Sc(null,null,t,!1,function(){t._reactRootContainer=null,t[Xi]=null})}),!0):!1};Rn.unstable_batchedUpdates=Vp;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!xc(n))throw Error(ue(200));if(t==null||t._reactInternals===void 0)throw Error(ue(38));return Sc(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function rx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(rx)}catch(t){console.error(t)}}rx(),r_.exports=Rn;var Sw=r_.exports,Vg=Sw;ad.createRoot=Vg.createRoot,ad.hydrateRoot=Vg.hydrateRoot;function Mw(){return dn.jsxs("div",{id:"profile-container",children:[dn.jsxs("h1",{children:["I'm ",dn.jsx("span",{className:"text-tone",children:"Rohb,"})]}),dn.jsxs("p",{children:["A ",dn.jsx("span",{children:"Computer Engineering "}),"Student"]})]})}const ww=[{id:1,path:"/icons/c.png",name:"C"},{id:2,path:"/icons/cpp.png",name:"C++"},{id:3,path:"/icons/css3.png",name:"CSS"},{id:4,path:"/icons/git.png",name:"Git"},{id:6,path:"/icons/html5.png",name:"HTML"},{id:7,path:"/icons/java.png",name:"Java"},{id:8,path:"/icons/javascript.png",name:"Javascript"},{id:9,path:"/icons/python.png",name:"Python"},{id:10,path:"/icons/react.png",name:"React/React Native"}],Gg={skills:ww};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="167",hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},yo={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ew=0,Wg=1,bw=2,ox=1,Tw=2,Li=3,Cr=0,an=1,Ui=2,Gi=0,ua=1,jg=2,$g=3,Xg=4,Aw=5,qr=100,Cw=101,Rw=102,Pw=103,Lw=104,Dw=200,Iw=201,Ow=202,Nw=203,Jd=204,eh=205,Uw=206,kw=207,Fw=208,zw=209,Bw=210,Hw=211,Vw=212,Gw=213,Ww=214,jw=0,$w=1,Xw=2,$u=3,qw=4,Yw=5,Kw=6,Zw=7,Kp=0,Qw=1,Jw=2,br=0,eE=1,tE=2,nE=3,iE=4,rE=5,oE=6,aE=7,ax=300,xa=301,Sa=302,th=303,nh=304,wc=306,ih=1e3,Jr=1001,rh=1002,zn=1003,sE=1004,Ml=1005,ti=1006,hf=1007,eo=1008,Ki=1009,sx=1010,lx=1011,Vs=1012,Zp=1013,uo=1014,zi=1015,Ra=1016,Qp=1017,Jp=1018,Ma=1020,ux=35902,cx=1021,fx=1022,ri=1023,dx=1024,hx=1025,ca=1026,wa=1027,px=1028,em=1029,mx=1030,tm=1031,nm=1033,pu=33776,mu=33777,gu=33778,vu=33779,oh=35840,ah=35841,sh=35842,lh=35843,uh=36196,ch=37492,fh=37496,dh=37808,hh=37809,ph=37810,mh=37811,gh=37812,vh=37813,_h=37814,yh=37815,xh=37816,Sh=37817,Mh=37818,wh=37819,Eh=37820,bh=37821,_u=36492,Th=36494,Ah=36495,gx=36283,Ch=36284,Rh=36285,Ph=36286,lE=3200,uE=3201,vx=0,cE=1,pr="",On="srgb",Ir="srgb-linear",im="display-p3",Ec="display-p3-linear",Xu="linear",ct="srgb",qu="rec709",Yu="p3",xo=7680,qg=519,fE=512,dE=513,hE=514,_x=515,pE=516,mE=517,gE=518,vE=519,Lh=35044,Yg="300 es",Bi=2e3,Ku=2001;class ci{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(n);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Kg=1234567;const Ss=Math.PI/180,Gs=180/Math.PI;function Wi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function zt(t,e,n){return Math.max(e,Math.min(n,t))}function rm(t,e){return(t%e+e)%e}function _E(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function yE(t,e,n){return t!==e?(n-t)/(e-t):0}function Ms(t,e,n){return(1-n)*t+n*e}function xE(t,e,n,i){return Ms(t,e,1-Math.exp(-n*i))}function SE(t,e=1){return e-Math.abs(rm(t,e*2)-e)}function ME(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function wE(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function EE(t,e){return t+Math.floor(Math.random()*(e-t+1))}function bE(t,e){return t+Math.random()*(e-t)}function TE(t){return t*(.5-Math.random())}function AE(t){t!==void 0&&(Kg=t);let e=Kg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function CE(t){return t*Ss}function RE(t){return t*Gs}function PE(t){return(t&t-1)===0&&t!==0}function LE(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function DE(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function IE(t,e,n,i,r){const o=Math.cos,a=Math.sin,s=o(n/2),l=a(n/2),u=o((e+i)/2),c=a((e+i)/2),d=o((e-i)/2),h=a((e-i)/2),p=o((i-e)/2),g=a((i-e)/2);switch(r){case"XYX":t.set(s*c,l*d,l*h,s*u);break;case"YZY":t.set(l*h,s*c,l*d,s*u);break;case"ZXZ":t.set(l*d,l*h,s*c,s*u);break;case"XZX":t.set(s*c,l*g,l*p,s*u);break;case"YXY":t.set(l*p,s*c,l*g,s*u);break;case"ZYZ":t.set(l*g,l*p,s*c,s*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ni(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function rt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Dh={DEG2RAD:Ss,RAD2DEG:Gs,generateUUID:Wi,clamp:zt,euclideanModulo:rm,mapLinear:_E,inverseLerp:yE,lerp:Ms,damp:xE,pingpong:SE,smoothstep:ME,smootherstep:wE,randInt:EE,randFloat:bE,randFloatSpread:TE,seededRandom:AE,degToRad:CE,radToDeg:RE,isPowerOfTwo:PE,ceilPowerOfTwo:LE,floorPowerOfTwo:DE,setQuaternionFromProperEuler:IE,normalize:rt,denormalize:ni};class fe{constructor(e=0,n=0){fe.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,o,a,s,l,u){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,s,l,u)}set(e,n,i,r,o,a,s,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=s,c[3]=n,c[4]=o,c[5]=l,c[6]=i,c[7]=a,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],s=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],g=i[8],v=r[0],m=r[3],f=r[6],y=r[1],_=r[4],x=r[7],S=r[2],M=r[5],b=r[8];return o[0]=a*v+s*y+l*S,o[3]=a*m+s*_+l*M,o[6]=a*f+s*x+l*b,o[1]=u*v+c*y+d*S,o[4]=u*m+c*_+d*M,o[7]=u*f+c*x+d*b,o[2]=h*v+p*y+g*S,o[5]=h*m+p*_+g*M,o[8]=h*f+p*x+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8];return n*a*c-n*s*u-i*o*c+i*s*l+r*o*u-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],d=c*a-s*u,h=s*l-c*o,p=u*o-a*l,g=n*d+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=d*v,e[1]=(r*u-c*i)*v,e[2]=(s*i-r*a)*v,e[3]=h*v,e[4]=(c*n-r*l)*v,e[5]=(r*o-s*n)*v,e[6]=p*v,e[7]=(i*l-u*n)*v,e[8]=(a*n-i*o)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,o,a,s){const l=Math.cos(o),u=Math.sin(o);return this.set(i*l,i*u,-i*(l*a+u*s)+a+e,-r*u,r*l,-r*(-u*a+l*s)+s+n,0,0,1),this}scale(e,n){return this.premultiply(pf.makeScale(e,n)),this}rotate(e){return this.premultiply(pf.makeRotation(-e)),this}translate(e,n){return this.premultiply(pf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pf=new We;function yx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ws(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function OE(){const t=Ws("canvas");return t.style.display="block",t}const Zg={};function fa(t){t in Zg||(Zg[t]=!0,console.warn(t))}function NE(t,e,n){return new Promise(function(i,r){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}const Qg=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Jg=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Va={[Ir]:{transfer:Xu,primaries:qu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[On]:{transfer:ct,primaries:qu,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Ec]:{transfer:Xu,primaries:Yu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Jg),fromReference:t=>t.applyMatrix3(Qg)},[im]:{transfer:ct,primaries:Yu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Jg),fromReference:t=>t.applyMatrix3(Qg).convertLinearToSRGB()}},UE=new Set([Ir,Ec]),nt={enabled:!0,_workingColorSpace:Ir,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!UE.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Va[e].toReference,r=Va[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Va[t].primaries},getTransfer:function(t){return t===pr?Xu:Va[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Va[e].luminanceCoefficients)}};function da(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function mf(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let So;class kE{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{So===void 0&&(So=Ws("canvas")),So.width=e.width,So.height=e.height;const i=So.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=So}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ws("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=da(o[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(da(n[i]/255)*255):n[i]=da(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FE=0;class xx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(gf(r[a].image)):o.push(gf(r[a]))}else o=gf(r);i.url=o}return n||(e.images[this.uuid]=i),i}}function gf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?kE.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zE=0;class sn extends ci{constructor(e=sn.DEFAULT_IMAGE,n=sn.DEFAULT_MAPPING,i=Jr,r=Jr,o=ti,a=eo,s=ri,l=Ki,u=sn.DEFAULT_ANISOTROPY,c=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zE++}),this.uuid=Wi(),this.name="",this.source=new xx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=u,this.format=s,this.internalFormat=null,this.type=l,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ax)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ih:e.x=e.x-Math.floor(e.x);break;case Jr:e.x=e.x<0?0:1;break;case rh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ih:e.y=e.y-Math.floor(e.y);break;case Jr:e.y=e.y<0?0:1;break;case rh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=ax;sn.DEFAULT_ANISOTROPY=1;class Lt{constructor(e=0,n=0,i=0,r=1){Lt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,o;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,x=(p+1)/2,S=(f+1)/2,M=(c+h)/4,b=(d+v)/4,C=(g+m)/4;return _>x&&_>S?_<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(_),r=M/i,o=b/i):x>S?x<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(x),i=M/r,o=C/r):S<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(S),i=b/o,r=C/o),this.set(i,r,o,n),this}let y=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(h-c)*(h-c));return Math.abs(y)<.001&&(y=1),this.x=(m-g)/y,this.y=(d-v)/y,this.z=(h-c)/y,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class BE extends ci{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Lt(0,0,e,n),this.scissorTest=!1,this.viewport=new Lt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new sn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let s=0;s<a;s++)this.textures[s]=o.clone(),this.textures[s].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,o=this.textures.length;r<o;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new xx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Rr extends BE{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Sx extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class HE extends sn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=zn,this.minFilter=zn,this.wrapR=Jr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ui{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,o,a,s){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=o[a+0],p=o[a+1],g=o[a+2],v=o[a+3];if(s===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d;return}if(s===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=v;return}if(d!==v||l!==h||u!==p||c!==g){let m=1-s;const f=l*h+u*p+c*g+d*v,y=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){const S=Math.sqrt(_),M=Math.atan2(S,f*y);m=Math.sin(m*M)/S,s=Math.sin(s*M)/S}const x=s*y;if(l=l*m+h*x,u=u*m+p*x,c=c*m+g*x,d=d*m+v*x,m===1-s){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,r,o,a){const s=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=o[a],h=o[a+1],p=o[a+2],g=o[a+3];return e[n]=s*g+c*d+l*p-u*h,e[n+1]=l*g+c*h+u*d-s*p,e[n+2]=u*g+c*p+s*h-l*d,e[n+3]=c*g-s*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,u=s(i/2),c=s(r/2),d=s(o/2),h=l(i/2),p=l(r/2),g=l(o/2);switch(a){case"XYZ":this._x=h*c*d+u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d-h*p*g;break;case"YXZ":this._x=h*c*d+u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d+h*p*g;break;case"ZXY":this._x=h*c*d-u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d-h*p*g;break;case"ZYX":this._x=h*c*d-u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d+h*p*g;break;case"YZX":this._x=h*c*d+u*p*g,this._y=u*p*d+h*c*g,this._z=u*c*g-h*p*d,this._w=u*c*d-h*p*g;break;case"XZY":this._x=h*c*d-u*p*g,this._y=u*p*d-h*c*g,this._z=u*c*g+h*p*d,this._w=u*c*d+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],o=n[8],a=n[1],s=n[5],l=n[9],u=n[2],c=n[6],d=n[10],h=i+s+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(o-u)*p,this._z=(a-r)*p}else if(i>s&&i>d){const p=2*Math.sqrt(1+i-s-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(o+u)/p}else if(s>d){const p=2*Math.sqrt(1+s-i-d);this._w=(o-u)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-s);this._w=(a-r)/p,this._x=(o+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,o=e._z,a=e._w,s=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+a*s+r*u-o*l,this._y=r*c+a*l+o*s-i*u,this._z=o*c+a*u+i*l-r*s,this._w=a*c-i*s-r*l-o*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const p=1-n;return this._w=p*a+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*o+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,s),d=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=a*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=o*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ev.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ev.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*r,this.y=o[1]*n+o[4]*i+o[7]*r,this.z=o[2]*n+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*n+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*n+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*n+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,l=e.w,u=2*(a*r-s*i),c=2*(s*n-o*r),d=2*(o*i-a*n);return this.x=n+l*u+a*d-s*c,this.y=i+l*c+s*u-o*d,this.z=r+l*d+o*c-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r,this.y=o[1]*n+o[5]*i+o[9]*r,this.z=o[2]*n+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,o=e.z,a=n.x,s=n.y,l=n.z;return this.x=r*l-o*s,this.y=o*a-i*l,this.z=i*s-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vf.copy(this).projectOnVector(e),this.sub(vf)}reflect(e){return this.sub(vf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vf=new O,ev=new ui;class mo{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Xn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Xn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Xn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,Xn):Xn.fromBufferAttribute(o,a),Xn.applyMatrix4(e.matrixWorld),this.expandByPoint(Xn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),wl.copy(i.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Xn),Xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ga),El.subVectors(this.max,Ga),Mo.subVectors(e.a,Ga),wo.subVectors(e.b,Ga),Eo.subVectors(e.c,Ga),nr.subVectors(wo,Mo),ir.subVectors(Eo,wo),Fr.subVectors(Mo,Eo);let n=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Fr.z,Fr.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Fr.z,0,-Fr.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Fr.y,Fr.x,0];return!_f(n,Mo,wo,Eo,El)||(n=[1,0,0,0,1,0,0,0,1],!_f(n,Mo,wo,Eo,El))?!1:(bl.crossVectors(nr,ir),n=[bl.x,bl.y,bl.z],_f(n,Mo,wo,Eo,El))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const wi=[new O,new O,new O,new O,new O,new O,new O,new O],Xn=new O,wl=new mo,Mo=new O,wo=new O,Eo=new O,nr=new O,ir=new O,Fr=new O,Ga=new O,El=new O,bl=new O,zr=new O;function _f(t,e,n,i,r){for(let o=0,a=t.length-3;o<=a;o+=3){zr.fromArray(t,o);const s=r.x*Math.abs(zr.x)+r.y*Math.abs(zr.y)+r.z*Math.abs(zr.z),l=e.dot(zr),u=n.dot(zr),c=i.dot(zr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>s)return!1}return!0}const VE=new mo,Wa=new O,yf=new O;class bc{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):VE.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const n=Wa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Wa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(yf)),this.expandByPoint(Wa.copy(e.center).sub(yf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ei=new O,xf=new O,Tl=new O,rr=new O,Sf=new O,Al=new O,Mf=new O;class Tc{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ei)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Ei.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ei.copy(this.origin).addScaledVector(this.direction,n),Ei.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xf.copy(e).add(n).multiplyScalar(.5),Tl.copy(n).sub(e).normalize(),rr.copy(this.origin).sub(xf);const o=e.distanceTo(n)*.5,a=-this.direction.dot(Tl),s=rr.dot(this.direction),l=-rr.dot(Tl),u=rr.lengthSq(),c=Math.abs(1-a*a);let d,h,p,g;if(c>0)if(d=a*l-s,h=a*s-l,g=o*c,d>=0)if(h>=-g)if(h<=g){const v=1/c;d*=v,h*=v,p=d*(d+a*h+2*s)+h*(a*d+h+2*l)+u}else h=o,d=Math.max(0,-(a*h+s)),p=-d*d+h*(h+2*l)+u;else h=-o,d=Math.max(0,-(a*h+s)),p=-d*d+h*(h+2*l)+u;else h<=-g?(d=Math.max(0,-(-a*o+s)),h=d>0?-o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+u):h<=g?(d=0,h=Math.min(Math.max(-o,-l),o),p=h*(h+2*l)+u):(d=Math.max(0,-(a*o+s)),h=d>0?o:Math.min(Math.max(-o,-l),o),p=-d*d+h*(h+2*l)+u);else h=a>0?-o:o,d=Math.max(0,-(a*h+s)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(xf).addScaledVector(Tl,h),p}intersectSphere(e,n){Ei.subVectors(e.center,this.origin);const i=Ei.dot(this.direction),r=Ei.dot(Ei)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=i-a,l=i+a;return l<0?null:s<0?this.at(l,n):this.at(s,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,o,a,s,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(o=(e.min.y-h.y)*c,a=(e.max.y-h.y)*c):(o=(e.max.y-h.y)*c,a=(e.min.y-h.y)*c),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),d>=0?(s=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(s=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Ei)!==null}intersectTriangle(e,n,i,r,o){Sf.subVectors(n,e),Al.subVectors(i,e),Mf.crossVectors(Sf,Al);let a=this.direction.dot(Mf),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;rr.subVectors(this.origin,e);const l=s*this.direction.dot(Al.crossVectors(rr,Al));if(l<0)return null;const u=s*this.direction.dot(Sf.cross(rr));if(u<0||l+u>a)return null;const c=-s*rr.dot(Mf);return c<0?null:this.at(c/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,n,i,r,o,a,s,l,u,c,d,h,p,g,v,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,o,a,s,l,u,c,d,h,p,g,v,m)}set(e,n,i,r,o,a,s,l,u,c,d,h,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=o,f[5]=a,f[9]=s,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/bo.setFromMatrixColumn(e,0).length(),o=1/bo.setFromMatrixColumn(e,1).length(),a=1/bo.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(o),d=Math.sin(o);if(e.order==="XYZ"){const h=a*c,p=a*d,g=s*c,v=s*d;n[0]=l*c,n[4]=-l*d,n[8]=u,n[1]=p+g*u,n[5]=h-v*u,n[9]=-s*l,n[2]=v-h*u,n[6]=g+p*u,n[10]=a*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,g=u*c,v=u*d;n[0]=h+v*s,n[4]=g*s-p,n[8]=a*u,n[1]=a*d,n[5]=a*c,n[9]=-s,n[2]=p*s-g,n[6]=v+h*s,n[10]=a*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,g=u*c,v=u*d;n[0]=h-v*s,n[4]=-a*d,n[8]=g+p*s,n[1]=p+g*s,n[5]=a*c,n[9]=v-h*s,n[2]=-a*u,n[6]=s,n[10]=a*l}else if(e.order==="ZYX"){const h=a*c,p=a*d,g=s*c,v=s*d;n[0]=l*c,n[4]=g*u-p,n[8]=h*u+v,n[1]=l*d,n[5]=v*u+h,n[9]=p*u-g,n[2]=-u,n[6]=s*l,n[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*u,g=s*l,v=s*u;n[0]=l*c,n[4]=v-h*d,n[8]=g*d+p,n[1]=d,n[5]=a*c,n[9]=-s*c,n[2]=-u*c,n[6]=p*d+g,n[10]=h-v*d}else if(e.order==="XZY"){const h=a*l,p=a*u,g=s*l,v=s*u;n[0]=l*c,n[4]=-d,n[8]=u*c,n[1]=h*d+v,n[5]=a*c,n[9]=p*d-g,n[2]=g*d-p,n[6]=s*c,n[10]=v*d+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(GE,e,WE)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),or.crossVectors(i,Mn),or.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),or.crossVectors(i,Mn)),or.normalize(),Cl.crossVectors(Mn,or),r[0]=or.x,r[4]=Cl.x,r[8]=Mn.x,r[1]=or.y,r[5]=Cl.y,r[9]=Mn.y,r[2]=or.z,r[6]=Cl.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,o=this.elements,a=i[0],s=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],g=i[2],v=i[6],m=i[10],f=i[14],y=i[3],_=i[7],x=i[11],S=i[15],M=r[0],b=r[4],C=r[8],T=r[12],w=r[1],P=r[5],z=r[9],G=r[13],N=r[2],I=r[6],k=r[10],J=r[14],F=r[3],ie=r[7],W=r[11],Q=r[15];return o[0]=a*M+s*w+l*N+u*F,o[4]=a*b+s*P+l*I+u*ie,o[8]=a*C+s*z+l*k+u*W,o[12]=a*T+s*G+l*J+u*Q,o[1]=c*M+d*w+h*N+p*F,o[5]=c*b+d*P+h*I+p*ie,o[9]=c*C+d*z+h*k+p*W,o[13]=c*T+d*G+h*J+p*Q,o[2]=g*M+v*w+m*N+f*F,o[6]=g*b+v*P+m*I+f*ie,o[10]=g*C+v*z+m*k+f*W,o[14]=g*T+v*G+m*J+f*Q,o[3]=y*M+_*w+x*N+S*F,o[7]=y*b+_*P+x*I+S*ie,o[11]=y*C+_*z+x*k+S*W,o[15]=y*T+_*G+x*J+S*Q,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+o*l*d-r*u*d-o*s*h+i*u*h+r*s*p-i*l*p)+v*(+n*l*p-n*u*h+o*a*h-r*a*p+r*u*c-o*l*c)+m*(+n*u*d-n*s*p-o*a*d+i*a*p+o*s*c-i*u*c)+f*(-r*s*c-n*l*d+n*s*h+r*a*d-i*a*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],y=d*m*u-v*h*u+v*l*p-s*m*p-d*l*f+s*h*f,_=g*h*u-c*m*u-g*l*p+a*m*p+c*l*f-a*h*f,x=c*v*u-g*d*u+g*s*p-a*v*p-c*s*f+a*d*f,S=g*d*l-c*v*l-g*s*h+a*v*h+c*s*m-a*d*m,M=n*y+i*_+r*x+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=y*b,e[1]=(v*h*o-d*m*o-v*r*p+i*m*p+d*r*f-i*h*f)*b,e[2]=(s*m*o-v*l*o+v*r*u-i*m*u-s*r*f+i*l*f)*b,e[3]=(d*l*o-s*h*o-d*r*u+i*h*u+s*r*p-i*l*p)*b,e[4]=_*b,e[5]=(c*m*o-g*h*o+g*r*p-n*m*p-c*r*f+n*h*f)*b,e[6]=(g*l*o-a*m*o-g*r*u+n*m*u+a*r*f-n*l*f)*b,e[7]=(a*h*o-c*l*o+c*r*u-n*h*u-a*r*p+n*l*p)*b,e[8]=x*b,e[9]=(g*d*o-c*v*o-g*i*p+n*v*p+c*i*f-n*d*f)*b,e[10]=(a*v*o-g*s*o+g*i*u-n*v*u-a*i*f+n*s*f)*b,e[11]=(c*s*o-a*d*o-c*i*u+n*d*u+a*i*p-n*s*p)*b,e[12]=S*b,e[13]=(c*v*r-g*d*r+g*i*h-n*v*h-c*i*m+n*d*m)*b,e[14]=(g*s*r-a*v*r-g*i*l+n*v*l+a*i*m-n*s*m)*b,e[15]=(a*d*r-c*s*r+c*i*l-n*d*l-a*i*h+n*s*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,o=e.z;return n[0]*=i,n[4]*=r,n[8]*=o,n[1]*=i,n[5]*=r,n[9]*=o,n[2]*=i,n[6]*=r,n[10]*=o,n[3]*=i,n[7]*=r,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),o=1-i,a=e.x,s=e.y,l=e.z,u=o*a,c=o*s;return this.set(u*a+i,u*s-r*l,u*l+r*s,0,u*s+r*l,c*s+i,c*l-r*a,0,u*l-r*s,c*l+r*a,o*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,o=n._x,a=n._y,s=n._z,l=n._w,u=o+o,c=a+a,d=s+s,h=o*u,p=o*c,g=o*d,v=a*c,m=a*d,f=s*d,y=l*u,_=l*c,x=l*d,S=i.x,M=i.y,b=i.z;return r[0]=(1-(v+f))*S,r[1]=(p+x)*S,r[2]=(g-_)*S,r[3]=0,r[4]=(p-x)*M,r[5]=(1-(h+f))*M,r[6]=(m+y)*M,r[7]=0,r[8]=(g+_)*b,r[9]=(m-y)*b,r[10]=(1-(h+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let o=bo.set(r[0],r[1],r[2]).length();const a=bo.set(r[4],r[5],r[6]).length(),s=bo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],qn.copy(this);const u=1/o,c=1/a,d=1/s;return qn.elements[0]*=u,qn.elements[1]*=u,qn.elements[2]*=u,qn.elements[4]*=c,qn.elements[5]*=c,qn.elements[6]*=c,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,n.setFromRotationMatrix(qn),i.x=o,i.y=a,i.z=s,this}makePerspective(e,n,i,r,o,a,s=Bi){const l=this.elements,u=2*o/(n-e),c=2*o/(i-r),d=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(s===Bi)p=-(a+o)/(a-o),g=-2*a*o/(a-o);else if(s===Ku)p=-a/(a-o),g=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,o,a,s=Bi){const l=this.elements,u=1/(n-e),c=1/(i-r),d=1/(a-o),h=(n+e)*u,p=(i+r)*c;let g,v;if(s===Bi)g=(a+o)*d,v=-2*d;else if(s===Ku)g=o*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const bo=new O,qn=new st,GE=new O(0,0,0),WE=new O(1,1,1),or=new O,Cl=new O,Mn=new O,tv=new st,nv=new ui;class yi{constructor(e=0,n=0,i=0,r=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(zt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(s,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,o),this._z=0);break;case"ZXY":this._x=Math.asin(zt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-zt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,o)):(this._x=0,this._y=Math.atan2(s,p));break;case"XZY":this._z=Math.asin(-zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tv,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return nv.setFromEuler(this),this.setFromQuaternion(nv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class om{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jE=0;const iv=new O,To=new ui,bi=new st,Rl=new O,ja=new O,$E=new O,XE=new ui,rv=new O(1,0,0),ov=new O(0,1,0),av=new O(0,0,1),sv={type:"added"},qE={type:"removed"},Ao={type:"childadded",child:null},wf={type:"childremoved",child:null};class Ht extends ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new O,n=new yi,i=new ui,r=new O(1,1,1);function o(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new st},normalMatrix:{value:new We}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new om,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return To.setFromAxisAngle(e,n),this.quaternion.multiply(To),this}rotateOnWorldAxis(e,n){return To.setFromAxisAngle(e,n),this.quaternion.premultiply(To),this}rotateX(e){return this.rotateOnAxis(rv,e)}rotateY(e){return this.rotateOnAxis(ov,e)}rotateZ(e){return this.rotateOnAxis(av,e)}translateOnAxis(e,n){return iv.copy(e).applyQuaternion(this.quaternion),this.position.add(iv.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(rv,e)}translateY(e){return this.translateOnAxis(ov,e)}translateZ(e){return this.translateOnAxis(av,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Rl.copy(e):Rl.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ja.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(ja,Rl,this.up):bi.lookAt(Rl,ja,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),To.setFromRotationMatrix(bi),this.quaternion.premultiply(To.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sv),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(qE),wf.child=e,this.dispatchEvent(wf),wf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sv),Ao.child=e,this.dispatchEvent(Ao),Ao.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,e,$E),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ja,XE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(s=>({boxInitialized:s.boxInitialized,boxMin:s.box.min.toArray(),boxMax:s.box.max.toArray(),sphereInitialized:s.sphereInitialized,sphereRadius:s.sphere.radius,sphereCenter:s.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];o(e.shapes,d)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,u=this.material.length;l<u;l++)s.push(o(e.materials,this.material[l]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(o(e.animations,l))}}if(n){const s=a(e.geometries),l=a(e.materials),u=a(e.textures),c=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(s){const l=[];for(const u in s){const c=s[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Ht.DEFAULT_UP=new O(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Yn=new O,Ti=new O,Ef=new O,Ai=new O,Co=new O,Ro=new O,lv=new O,bf=new O,Tf=new O,Af=new O;class ii{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Yn.subVectors(e,n),r.cross(Yn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,n,i,r,o){Yn.subVectors(r,n),Ti.subVectors(i,n),Ef.subVectors(e,n);const a=Yn.dot(Yn),s=Yn.dot(Ti),l=Yn.dot(Ef),u=Ti.dot(Ti),c=Ti.dot(Ef),d=a*u-s*s;if(d===0)return o.set(0,0,0),null;const h=1/d,p=(u*l-s*c)*h,g=(a*c-s*l)*h;return o.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ai)===null?!1:Ai.x>=0&&Ai.y>=0&&Ai.x+Ai.y<=1}static getInterpolation(e,n,i,r,o,a,s,l){return this.getBarycoord(e,n,i,r,Ai)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(o,Ai.x),l.addScaledVector(a,Ai.y),l.addScaledVector(s,Ai.z),l)}static isFrontFacing(e,n,i,r){return Yn.subVectors(i,n),Ti.subVectors(e,n),Yn.cross(Ti).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),Yn.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ii.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ii.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,o){return ii.getInterpolation(e,this.a,this.b,this.c,n,i,r,o)}containsPoint(e){return ii.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ii.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,o=this.c;let a,s;Co.subVectors(r,i),Ro.subVectors(o,i),bf.subVectors(e,i);const l=Co.dot(bf),u=Ro.dot(bf);if(l<=0&&u<=0)return n.copy(i);Tf.subVectors(e,r);const c=Co.dot(Tf),d=Ro.dot(Tf);if(c>=0&&d<=c)return n.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return a=l/(l-c),n.copy(i).addScaledVector(Co,a);Af.subVectors(e,o);const p=Co.dot(Af),g=Ro.dot(Af);if(g>=0&&p<=g)return n.copy(o);const v=p*u-l*g;if(v<=0&&u>=0&&g<=0)return s=u/(u-g),n.copy(i).addScaledVector(Ro,s);const m=c*g-p*d;if(m<=0&&d-c>=0&&p-g>=0)return lv.subVectors(o,r),s=(d-c)/(d-c+(p-g)),n.copy(r).addScaledVector(lv,s);const f=1/(m+v+h);return a=v*f,s=h*f,n.copy(i).addScaledVector(Co,a).addScaledVector(Ro,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Pl={h:0,s:0,l:0};function Cf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=nt.workingColorSpace){return this.r=e,this.g=n,this.b=i,nt.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=nt.workingColorSpace){if(e=rm(e,1),n=zt(n,0,1),i=zt(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,a=2*i-o;this.r=Cf(a,o,e+1/3),this.g=Cf(a,o,e),this.b=Cf(a,o,e-1/3)}return nt.toWorkingColorSpace(this,r),this}setStyle(e,n=On){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=On){const i=Mx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=da(e.r),this.g=da(e.g),this.b=da(e.b),this}copyLinearToSRGB(e){return this.r=mf(e.r),this.g=mf(e.g),this.b=mf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return nt.fromWorkingColorSpace(Kt.copy(this),e),Math.round(zt(Kt.r*255,0,255))*65536+Math.round(zt(Kt.g*255,0,255))*256+Math.round(zt(Kt.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=nt.workingColorSpace){nt.fromWorkingColorSpace(Kt.copy(this),n);const i=Kt.r,r=Kt.g,o=Kt.b,a=Math.max(i,r,o),s=Math.min(i,r,o);let l,u;const c=(s+a)/2;if(s===a)l=0,u=0;else{const d=a-s;switch(u=c<=.5?d/(a+s):d/(2-a-s),a){case i:l=(r-o)/d+(r<o?6:0);break;case r:l=(o-i)/d+2;break;case o:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=nt.workingColorSpace){return nt.fromWorkingColorSpace(Kt.copy(this),n),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=On){nt.fromWorkingColorSpace(Kt.copy(this),e);const n=Kt.r,i=Kt.g,r=Kt.b;return e!==On?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+n,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ar),e.getHSL(Pl);const i=Ms(ar.h,Pl.h,n),r=Ms(ar.s,Pl.s,n),o=Ms(ar.l,Pl.l,n);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*r,this.g=o[1]*n+o[4]*i+o[7]*r,this.b=o[2]*n+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new qe;qe.NAMES=Mx;let YE=0;class go extends ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=ua,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jd,this.blendDst=eh,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=$u,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xo,this.stencilZFail=xo,this.stencilZPass=xo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ua&&(i.blending=this.blending),this.side!==Cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Jd&&(i.blendSrc=this.blendSrc),this.blendDst!==eh&&(i.blendDst=this.blendDst),this.blendEquation!==qr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$u&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==xo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==xo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(n){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}onBeforeRender(){console.warn("Material: onBeforeRender() has been removed.")}}class am extends go{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new O,Ll=new fe;class Vn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Lh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return fa("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ll.fromBufferAttribute(this,n),Ll.applyMatrix3(e),this.setXY(n,Ll.x,Ll.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix3(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyMatrix4(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.applyNormalMatrix(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Tt.fromBufferAttribute(this,n),Tt.transformDirection(e),this.setXYZ(n,Tt.x,Tt.y,Tt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ni(n,this.array)),n}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ni(n,this.array)),n}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ni(n,this.array)),n}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ni(n,this.array)),n}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e*=this.itemSize,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),o=rt(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lh&&(e.usage=this.usage),e}}class wx extends Vn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Ex extends Vn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class It extends Vn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let KE=0;const In=new st,Rf=new Ht,Po=new O,wn=new mo,$a=new mo,Ut=new O;class _n extends ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yx(e)?Ex:wx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new We().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,n,i){return In.makeTranslation(e,n,i),this.applyMatrix4(In),this}scale(e,n,i){return In.makeScale(e,n,i),this.applyMatrix4(In),this}lookAt(e){return Rf.lookAt(e),Rf.updateMatrix(),this.applyMatrix4(Rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Po).negate(),this.translate(Po.x,Po.y,Po.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new It(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const o=n[i];wn.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),n)for(let o=0,a=n.length;o<a;o++){const s=n[o];$a.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(wn.min,$a.min),wn.expandByPoint(Ut),Ut.addVectors(wn.max,$a.max),wn.expandByPoint(Ut)):(wn.expandByPoint($a.min),wn.expandByPoint($a.max))}wn.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)Ut.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let o=0,a=n.length;o<a;o++){const s=n[o],l=this.morphTargetsRelative;for(let u=0,c=s.count;u<c;u++)Ut.fromBufferAttribute(s,u),l&&(Po.fromBufferAttribute(e,u),Ut.add(Po)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),s=[],l=[];for(let C=0;C<i.count;C++)s[C]=new O,l[C]=new O;const u=new O,c=new O,d=new O,h=new fe,p=new fe,g=new fe,v=new O,m=new O;function f(C,T,w){u.fromBufferAttribute(i,C),c.fromBufferAttribute(i,T),d.fromBufferAttribute(i,w),h.fromBufferAttribute(o,C),p.fromBufferAttribute(o,T),g.fromBufferAttribute(o,w),c.sub(u),d.sub(u),p.sub(h),g.sub(h);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(v.copy(c).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(P),s[C].add(v),s[T].add(v),s[w].add(v),l[C].add(m),l[T].add(m),l[w].add(m))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,T=y.length;C<T;++C){const w=y[C],P=w.start,z=w.count;for(let G=P,N=P+z;G<N;G+=3)f(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const _=new O,x=new O,S=new O,M=new O;function b(C){S.fromBufferAttribute(r,C),M.copy(S);const T=s[C];_.copy(T),_.sub(S.multiplyScalar(S.dot(T))).normalize(),x.crossVectors(M,T);const P=x.dot(l[C])<0?-1:1;a.setXYZW(C,_.x,_.y,_.z,P)}for(let C=0,T=y.length;C<T;++C){const w=y[C],P=w.start,z=w.count;for(let G=P,N=P+z;G<N;G+=3)b(e.getX(G+0)),b(e.getX(G+1)),b(e.getX(G+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Vn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new O,o=new O,a=new O,s=new O,l=new O,u=new O,c=new O,d=new O;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),v=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),o.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),c.subVectors(a,o),d.subVectors(r,o),c.cross(d),s.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),u.fromBufferAttribute(i,m),s.add(c),l.add(c),u.add(c),i.setXYZ(g,s.x,s.y,s.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),o.fromBufferAttribute(n,h+1),a.fromBufferAttribute(n,h+2),c.subVectors(a,o),d.subVectors(r,o),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(s,l){const u=s.array,c=s.itemSize,d=s.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){s.isInterleavedBufferAttribute?p=l[v]*s.data.stride+s.offset:p=l[v]*c;for(let f=0;f<c;f++)h[g++]=u[p++]}return new Vn(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _n,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],u=e(l,i);n.setAttribute(s,u)}const o=this.morphAttributes;for(const s in o){const l=[],u=o[s];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[s]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const u=a[s];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const o=e.morphAttributes;for(const u in o){const c=[],d=o[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,c=a.length;u<c;u++){const d=a[u];this.addGroup(d.start,d.count,d.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const uv=new st,Br=new Tc,Dl=new bc,cv=new O,Lo=new O,Do=new O,Io=new O,Pf=new O,Il=new O,Ol=new fe,Nl=new fe,Ul=new fe,fv=new O,dv=new O,hv=new O,kl=new O,Fl=new O;class Bn extends Ht{constructor(e=new _n,n=new am){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){Il.set(0,0,0);for(let l=0,u=o.length;l<u;l++){const c=s[l],d=o[l];c!==0&&(Pf.fromBufferAttribute(d,e),a?Il.addScaledVector(Pf,c):Il.addScaledVector(Pf.sub(n),c))}n.add(Il)}return n}raycast(e,n){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Dl.copy(i.boundingSphere),Dl.applyMatrix4(o),Br.copy(e.ray).recast(e.near),!(Dl.containsPoint(Br.origin)===!1&&(Br.intersectSphere(Dl,cv)===null||Br.origin.distanceToSquared(cv)>(e.far-e.near)**2))&&(uv.copy(o).invert(),Br.copy(e.ray).applyMatrix4(uv),!(i.boundingBox!==null&&Br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Br)))}_computeIntersections(e,n,i){let r;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,u=o.attributes.uv,c=o.attributes.uv1,d=o.attributes.normal,h=o.groups,p=o.drawRange;if(s!==null)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(s.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,S=_;x<S;x+=3){const M=s.getX(x),b=s.getX(x+1),C=s.getX(x+2);r=zl(this,f,e,i,u,c,d,M,b,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(s.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const y=s.getX(m),_=s.getX(m+1),x=s.getX(m+2);r=zl(this,a,e,i,u,c,d,y,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=h.length;g<v;g++){const m=h[g],f=a[m.materialIndex],y=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=y,S=_;x<S;x+=3){const M=x,b=x+1,C=x+2;r=zl(this,f,e,i,u,c,d,M,b,C),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const y=m,_=m+1,x=m+2;r=zl(this,a,e,i,u,c,d,y,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function ZE(t,e,n,i,r,o,a,s){let l;if(e.side===an?l=i.intersectTriangle(a,o,r,!0,s):l=i.intersectTriangle(r,o,a,e.side===Cr,s),l===null)return null;Fl.copy(s),Fl.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Fl);return u<n.near||u>n.far?null:{distance:u,point:Fl.clone(),object:t}}function zl(t,e,n,i,r,o,a,s,l,u){t.getVertexPosition(s,Lo),t.getVertexPosition(l,Do),t.getVertexPosition(u,Io);const c=ZE(t,e,n,i,Lo,Do,Io,kl);if(c){r&&(Ol.fromBufferAttribute(r,s),Nl.fromBufferAttribute(r,l),Ul.fromBufferAttribute(r,u),c.uv=ii.getInterpolation(kl,Lo,Do,Io,Ol,Nl,Ul,new fe)),o&&(Ol.fromBufferAttribute(o,s),Nl.fromBufferAttribute(o,l),Ul.fromBufferAttribute(o,u),c.uv1=ii.getInterpolation(kl,Lo,Do,Io,Ol,Nl,Ul,new fe)),a&&(fv.fromBufferAttribute(a,s),dv.fromBufferAttribute(a,l),hv.fromBufferAttribute(a,u),c.normal=ii.getInterpolation(kl,Lo,Do,Io,fv,dv,hv,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a:s,b:l,c:u,normal:new O,materialIndex:0};ii.getNormal(Lo,Do,Io,d.normal),c.face=d}return c}class el extends _n{constructor(e=1,n=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const l=[],u=[],c=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,a,o,0),g("z","y","x",1,-1,i,n,-e,a,o,1),g("x","z","y",1,1,e,i,n,r,a,2),g("x","z","y",1,-1,e,i,-n,r,a,3),g("x","y","z",1,-1,e,n,i,r,o,4),g("x","y","z",-1,-1,e,n,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new It(u,3)),this.setAttribute("normal",new It(c,3)),this.setAttribute("uv",new It(d,2));function g(v,m,f,y,_,x,S,M,b,C,T){const w=x/b,P=S/C,z=x/2,G=S/2,N=M/2,I=b+1,k=C+1;let J=0,F=0;const ie=new O;for(let W=0;W<k;W++){const Q=W*P-G;for(let oe=0;oe<I;oe++){const we=oe*w-z;ie[v]=we*y,ie[m]=Q*_,ie[f]=N,u.push(ie.x,ie.y,ie.z),ie[v]=0,ie[m]=0,ie[f]=M>0?1:-1,c.push(ie.x,ie.y,ie.z),d.push(oe/b),d.push(1-W/C),J+=1}}for(let W=0;W<C;W++)for(let Q=0;Q<b;Q++){const oe=h+Q+I*W,we=h+Q+I*(W+1),B=h+(Q+1)+I*(W+1),j=h+(Q+1)+I*W;l.push(oe,we,j),l.push(we,B,j),F+=6}s.addGroup(p,F,T),p+=F,h+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ea(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=Ea(t[n]);for(const r in i)e[r]=i[r]}return e}function QE(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function bx(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const Tx={clone:Ea,merge:tn};var JE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends go{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=JE,this.fragmentShader=eb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=QE(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Ax extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Bi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const sr=new O,pv=new fe,mv=new fe;class kn extends Ax{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Gs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(sr.x,sr.y).multiplyScalar(-e/sr.z),sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(sr.x,sr.y).multiplyScalar(-e/sr.z)}getViewSize(e,n){return this.getViewBounds(e,pv,mv),n.subVectors(mv,pv)}setViewOffset(e,n,i,r,o,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ss*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;o+=a.offsetX*r/l,n-=a.offsetY*i/u,r*=a.width/l,i*=a.height/u}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Oo=-90,No=1;class tb extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new kn(Oo,No,e,n);r.layers=this.layers,this.add(r);const o=new kn(Oo,No,e,n);o.layers=this.layers,this.add(o);const a=new kn(Oo,No,e,n);a.layers=this.layers,this.add(a);const s=new kn(Oo,No,e,n);s.layers=this.layers,this.add(s);const l=new kn(Oo,No,e,n);l.layers=this.layers,this.add(l);const u=new kn(Oo,No,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,o,a,s,l]=n;for(const u of n)this.remove(u);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ku)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,l,u,c]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,o),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,s),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(d,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Cx extends sn{constructor(e,n,i,r,o,a,s,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:xa,super(e,n,i,r,o,a,s,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class nb extends Rr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Cx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ti}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new el(5,5,5),o=new xi({name:"CubemapFromEquirect",uniforms:Ea(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:an,blending:Gi});o.uniforms.tEquirect.value=n;const a=new Bn(r,o),s=n.minFilter;return n.minFilter===eo&&(n.minFilter=ti),new tb(1,10,this).update(e,a),n.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(o)}}const Lf=new O,ib=new O,rb=new We;class Oi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Lf.subVectors(i,n).cross(ib.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Lf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||rb.getNormalMatrix(e),r=this.coplanarPoint(Lf).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hr=new bc,Bl=new O;class sm{constructor(e=new Oi,n=new Oi,i=new Oi,r=new Oi,o=new Oi,a=new Oi){this.planes=[e,n,i,r,o,a]}set(e,n,i,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(n),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Bi){const i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],g=r[9],v=r[10],m=r[11],f=r[12],y=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-o,h-u,m-p,x-f).normalize(),i[1].setComponents(l+o,h+u,m+p,x+f).normalize(),i[2].setComponents(l+a,h+c,m+g,x+y).normalize(),i[3].setComponents(l-a,h-c,m-g,x-y).normalize(),i[4].setComponents(l-s,h-d,m-v,x-_).normalize(),n===Bi)i[5].setComponents(l+s,h+d,m+v,x+_).normalize();else if(n===Ku)i[5].setComponents(s,d,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hr)}intersectsSprite(e){return Hr.center.set(0,0,0),Hr.radius=.7071067811865476,Hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Bl.x=r.normal.x>0?e.max.x:e.min.x,Bl.y=r.normal.y>0?e.max.y:e.min.y,Bl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Bl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rx(){let t=null,e=!1,n=null,i=null;function r(o,a){n(o,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function ob(t){const e=new WeakMap;function n(s,l){const u=s.array,c=s.usage,d=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),s.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)s.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:s.version,size:d}}function i(s,l,u){const c=l.array,d=l._updateRange,h=l.updateRanges;if(t.bindBuffer(u,s),d.count===-1&&h.length===0&&t.bufferSubData(u,0,c),h.length!==0){for(let p=0,g=h.length;p<g;p++){const v=h[p];t.bufferSubData(u,v.start*c.BYTES_PER_ELEMENT,c,v.start,v.count)}l.clearUpdateRanges()}d.count!==-1&&(t.bufferSubData(u,d.offset*c.BYTES_PER_ELEMENT,c,d.offset,d.count),d.count=-1),l.onUploadCallback()}function r(s){return s.isInterleavedBufferAttribute&&(s=s.data),e.get(s)}function o(s){s.isInterleavedBufferAttribute&&(s=s.data);const l=e.get(s);l&&(t.deleteBuffer(l.buffer),e.delete(s))}function a(s,l){if(s.isInterleavedBufferAttribute&&(s=s.data),s.isGLBufferAttribute){const c=e.get(s);(!c||c.version<s.version)&&e.set(s,{buffer:s.buffer,type:s.type,bytesPerElement:s.elementSize,version:s.version});return}const u=e.get(s);if(u===void 0)e.set(s,n(s,l));else if(u.version<s.version){if(u.size!==s.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,s,l),u.version=s.version}}return{get:r,remove:o,update:a}}class Ac extends _n{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const o=e/2,a=n/2,s=Math.floor(i),l=Math.floor(r),u=s+1,c=l+1,d=e/s,h=n/l,p=[],g=[],v=[],m=[];for(let f=0;f<c;f++){const y=f*h-a;for(let _=0;_<u;_++){const x=_*d-o;g.push(x,-y,0),v.push(0,0,1),m.push(_/s),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<s;y++){const _=y+u*f,x=y+u*(f+1),S=y+1+u*(f+1),M=y+1+u*f;p.push(_,x,M),p.push(x,S,M)}this.setIndex(p),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ac(e.width,e.height,e.widthSegments,e.heightSegments)}}var ab=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ub=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,db=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,mb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_b=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Sb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cb=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Rb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Lb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ob=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ub="gl_FragColor = linearToOutputTexel( gl_FragColor );",kb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Fb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Gb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$b=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Jb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,iT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,sT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,uT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_T=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ST=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,MT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ET=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,TT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,CT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,RT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,PT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,LT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,DT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,IT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,NT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,UT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,FT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,BT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,HT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,VT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,GT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,WT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$T=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,XT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,YT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ZT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,QT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,JT=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,eA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,tA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,rA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_A=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,EA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,TA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,AA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,PA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,FA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:ab,alphahash_pars_fragment:sb,alphamap_fragment:lb,alphamap_pars_fragment:ub,alphatest_fragment:cb,alphatest_pars_fragment:fb,aomap_fragment:db,aomap_pars_fragment:hb,batching_pars_vertex:pb,batching_vertex:mb,begin_vertex:gb,beginnormal_vertex:vb,bsdfs:_b,iridescence_fragment:yb,bumpmap_pars_fragment:xb,clipping_planes_fragment:Sb,clipping_planes_pars_fragment:Mb,clipping_planes_pars_vertex:wb,clipping_planes_vertex:Eb,color_fragment:bb,color_pars_fragment:Tb,color_pars_vertex:Ab,color_vertex:Cb,common:Rb,cube_uv_reflection_fragment:Pb,defaultnormal_vertex:Lb,displacementmap_pars_vertex:Db,displacementmap_vertex:Ib,emissivemap_fragment:Ob,emissivemap_pars_fragment:Nb,colorspace_fragment:Ub,colorspace_pars_fragment:kb,envmap_fragment:Fb,envmap_common_pars_fragment:zb,envmap_pars_fragment:Bb,envmap_pars_vertex:Hb,envmap_physical_pars_fragment:Qb,envmap_vertex:Vb,fog_vertex:Gb,fog_pars_vertex:Wb,fog_fragment:jb,fog_pars_fragment:$b,gradientmap_pars_fragment:Xb,lightmap_pars_fragment:qb,lights_lambert_fragment:Yb,lights_lambert_pars_fragment:Kb,lights_pars_begin:Zb,lights_toon_fragment:Jb,lights_toon_pars_fragment:eT,lights_phong_fragment:tT,lights_phong_pars_fragment:nT,lights_physical_fragment:iT,lights_physical_pars_fragment:rT,lights_fragment_begin:oT,lights_fragment_maps:aT,lights_fragment_end:sT,logdepthbuf_fragment:lT,logdepthbuf_pars_fragment:uT,logdepthbuf_pars_vertex:cT,logdepthbuf_vertex:fT,map_fragment:dT,map_pars_fragment:hT,map_particle_fragment:pT,map_particle_pars_fragment:mT,metalnessmap_fragment:gT,metalnessmap_pars_fragment:vT,morphinstance_vertex:_T,morphcolor_vertex:yT,morphnormal_vertex:xT,morphtarget_pars_vertex:ST,morphtarget_vertex:MT,normal_fragment_begin:wT,normal_fragment_maps:ET,normal_pars_fragment:bT,normal_pars_vertex:TT,normal_vertex:AT,normalmap_pars_fragment:CT,clearcoat_normal_fragment_begin:RT,clearcoat_normal_fragment_maps:PT,clearcoat_pars_fragment:LT,iridescence_pars_fragment:DT,opaque_fragment:IT,packing:OT,premultiplied_alpha_fragment:NT,project_vertex:UT,dithering_fragment:kT,dithering_pars_fragment:FT,roughnessmap_fragment:zT,roughnessmap_pars_fragment:BT,shadowmap_pars_fragment:HT,shadowmap_pars_vertex:VT,shadowmap_vertex:GT,shadowmask_pars_fragment:WT,skinbase_vertex:jT,skinning_pars_vertex:$T,skinning_vertex:XT,skinnormal_vertex:qT,specularmap_fragment:YT,specularmap_pars_fragment:KT,tonemapping_fragment:ZT,tonemapping_pars_fragment:QT,transmission_fragment:JT,transmission_pars_fragment:eA,uv_pars_fragment:tA,uv_pars_vertex:nA,uv_vertex:iA,worldpos_vertex:rA,background_vert:oA,background_frag:aA,backgroundCube_vert:sA,backgroundCube_frag:lA,cube_vert:uA,cube_frag:cA,depth_vert:fA,depth_frag:dA,distanceRGBA_vert:hA,distanceRGBA_frag:pA,equirect_vert:mA,equirect_frag:gA,linedashed_vert:vA,linedashed_frag:_A,meshbasic_vert:yA,meshbasic_frag:xA,meshlambert_vert:SA,meshlambert_frag:MA,meshmatcap_vert:wA,meshmatcap_frag:EA,meshnormal_vert:bA,meshnormal_frag:TA,meshphong_vert:AA,meshphong_frag:CA,meshphysical_vert:RA,meshphysical_frag:PA,meshtoon_vert:LA,meshtoon_frag:DA,points_vert:IA,points_frag:OA,shadow_vert:NA,shadow_frag:UA,sprite_vert:kA,sprite_frag:FA},me={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},pi={basic:{uniforms:tn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:tn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:tn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:tn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:tn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new qe(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:tn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:tn([me.points,me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:tn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:tn([me.common,me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:tn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:tn([me.sprite,me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:tn([me.common,me.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:tn([me.lights,me.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};pi.physical={uniforms:tn([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Hl={r:0,b:0,g:0},Vr=new yi,zA=new st;function BA(t,e,n,i,r,o,a){const s=new qe(0);let l=o===!0?0:1,u,c,d=null,h=0,p=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?n:e).get(_)),_}function v(y){let _=!1;const x=g(y);x===null?f(s,l):x&&x.isColor&&(f(x,1),_=!0);const S=t.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(y,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===wc)?(c===void 0&&(c=new Bn(new el(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Ea(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:an,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(S,M,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Vr.copy(_.backgroundRotation),Vr.x*=-1,Vr.y*=-1,Vr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Vr.y*=-1,Vr.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(zA.makeRotationFromEuler(Vr)),c.material.toneMapped=nt.getTransfer(x.colorSpace)!==ct,(d!==x||h!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=t.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Bn(new Ac(2,2),new xi({name:"BackgroundMaterial",uniforms:Ea(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=nt.getTransfer(x.colorSpace)!==ct,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=t.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function f(y,_){y.getRGB(Hl,bx(t)),i.buffers.color.setClear(Hl.r,Hl.g,Hl.b,_,a)}return{getClearColor:function(){return s},setClearColor:function(y,_=1){s.set(y),l=_,f(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(s,l)},render:v,addToRenderList:m}}function HA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let o=r,a=!1;function s(w,P,z,G,N){let I=!1;const k=d(G,z,P);o!==k&&(o=k,u(o.object)),I=p(w,G,z,N),I&&g(w,G,z,N),N!==null&&e.update(N,t.ELEMENT_ARRAY_BUFFER),(I||a)&&(a=!1,x(w,P,z,G),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return t.createVertexArray()}function u(w){return t.bindVertexArray(w)}function c(w){return t.deleteVertexArray(w)}function d(w,P,z){const G=z.wireframe===!0;let N=i[w.id];N===void 0&&(N={},i[w.id]=N);let I=N[P.id];I===void 0&&(I={},N[P.id]=I);let k=I[G];return k===void 0&&(k=h(l()),I[G]=k),k}function h(w){const P=[],z=[],G=[];for(let N=0;N<n;N++)P[N]=0,z[N]=0,G[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:G,object:w,attributes:{},index:null}}function p(w,P,z,G){const N=o.attributes,I=P.attributes;let k=0;const J=z.getAttributes();for(const F in J)if(J[F].location>=0){const W=N[F];let Q=I[F];if(Q===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor)),W===void 0||W.attribute!==Q||Q&&W.data!==Q.data)return!0;k++}return o.attributesNum!==k||o.index!==G}function g(w,P,z,G){const N={},I=P.attributes;let k=0;const J=z.getAttributes();for(const F in J)if(J[F].location>=0){let W=I[F];W===void 0&&(F==="instanceMatrix"&&w.instanceMatrix&&(W=w.instanceMatrix),F==="instanceColor"&&w.instanceColor&&(W=w.instanceColor));const Q={};Q.attribute=W,W&&W.data&&(Q.data=W.data),N[F]=Q,k++}o.attributes=N,o.attributesNum=k,o.index=G}function v(){const w=o.newAttributes;for(let P=0,z=w.length;P<z;P++)w[P]=0}function m(w){f(w,0)}function f(w,P){const z=o.newAttributes,G=o.enabledAttributes,N=o.attributeDivisors;z[w]=1,G[w]===0&&(t.enableVertexAttribArray(w),G[w]=1),N[w]!==P&&(t.vertexAttribDivisor(w,P),N[w]=P)}function y(){const w=o.newAttributes,P=o.enabledAttributes;for(let z=0,G=P.length;z<G;z++)P[z]!==w[z]&&(t.disableVertexAttribArray(z),P[z]=0)}function _(w,P,z,G,N,I,k){k===!0?t.vertexAttribIPointer(w,P,z,N,I):t.vertexAttribPointer(w,P,z,G,N,I)}function x(w,P,z,G){v();const N=G.attributes,I=z.getAttributes(),k=P.defaultAttributeValues;for(const J in I){const F=I[J];if(F.location>=0){let ie=N[J];if(ie===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(ie=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(ie=w.instanceColor)),ie!==void 0){const W=ie.normalized,Q=ie.itemSize,oe=e.get(ie);if(oe===void 0)continue;const we=oe.buffer,B=oe.type,j=oe.bytesPerElement,te=B===t.INT||B===t.UNSIGNED_INT||ie.gpuType===Zp;if(ie.isInterleavedBufferAttribute){const U=ie.data,ne=U.stride,he=ie.offset;if(U.isInstancedInterleavedBuffer){for(let ge=0;ge<F.locationSize;ge++)f(F.location+ge,U.meshPerAttribute);w.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=U.meshPerAttribute*U.count)}else for(let ge=0;ge<F.locationSize;ge++)m(F.location+ge);t.bindBuffer(t.ARRAY_BUFFER,we);for(let ge=0;ge<F.locationSize;ge++)_(F.location+ge,Q/F.locationSize,B,W,ne*j,(he+Q/F.locationSize*ge)*j,te)}else{if(ie.isInstancedBufferAttribute){for(let U=0;U<F.locationSize;U++)f(F.location+U,ie.meshPerAttribute);w.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let U=0;U<F.locationSize;U++)m(F.location+U);t.bindBuffer(t.ARRAY_BUFFER,we);for(let U=0;U<F.locationSize;U++)_(F.location+U,Q/F.locationSize,B,W,Q*j,Q/F.locationSize*U*j,te)}}else if(k!==void 0){const W=k[J];if(W!==void 0)switch(W.length){case 2:t.vertexAttrib2fv(F.location,W);break;case 3:t.vertexAttrib3fv(F.location,W);break;case 4:t.vertexAttrib4fv(F.location,W);break;default:t.vertexAttrib1fv(F.location,W)}}}}y()}function S(){C();for(const w in i){const P=i[w];for(const z in P){const G=P[z];for(const N in G)c(G[N].object),delete G[N];delete P[z]}delete i[w]}}function M(w){if(i[w.id]===void 0)return;const P=i[w.id];for(const z in P){const G=P[z];for(const N in G)c(G[N].object),delete G[N];delete P[z]}delete i[w.id]}function b(w){for(const P in i){const z=i[P];if(z[w.id]===void 0)continue;const G=z[w.id];for(const N in G)c(G[N].object),delete G[N];delete z[w.id]}}function C(){T(),a=!0,o!==r&&(o=r,u(o.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:s,reset:C,resetDefaultState:T,dispose:S,releaseStatesOfGeometry:M,releaseStatesOfProgram:b,initAttributes:v,enableAttribute:m,disableUnusedAttributes:y}}function VA(t,e,n){let i;function r(u){i=u}function o(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function a(u,c,d){d!==0&&(t.drawArraysInstanced(i,u,c,d),n.update(c,i,d))}function s(u,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,d);let p=0;for(let g=0;g<d;g++)p+=c[g];n.update(p,i,1)}function l(u,c,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)a(u[g],c[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,d);let g=0;for(let v=0;v<d;v++)g+=c[v];for(let v=0;v<h.length;v++)n.update(g,i,h[v])}}this.setMode=r,this.render=o,this.renderInstances=a,this.renderMultiDraw=s,this.renderMultiDrawInstances=l}function GA(t,e,n,i){let r;function o(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(M){return!(M!==ri&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function s(M){const b=M===Ra&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(M!==Ki&&i.convert(M)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&M!==zi&&!b)}function l(M){if(M==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_TEXTURE_SIZE),v=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),f=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),y=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=p>0,S=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:s,precision:u,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:f,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:x,maxSamples:S}}function WA(t){const e=this;let n=null,i=0,r=!1,o=!1;const a=new Oi,s=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){o=!0,c(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(d,h){n=c(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,f=t.get(d);if(!r||g===null||g.length===0||o&&!m)o?c(null):u();else{const y=o?0:i,_=y*4;let x=f.clippingState||null;l.value=x,x=c(g,h,_,p);for(let S=0;S!==_;++S)x[S]=n[S];f.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,g){const v=d!==null?d.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,y=h.matrixWorldInverse;s.getNormalMatrix(y),(m===null||m.length<f)&&(m=new Float32Array(f));for(let _=0,x=p;_!==v;++_,x+=4)a.copy(d[_]).applyMatrix4(y,s),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function jA(t){let e=new WeakMap;function n(a,s){return s===th?a.mapping=xa:s===nh&&(a.mapping=Sa),a}function i(a){if(a&&a.isTexture){const s=a.mapping;if(s===th||s===nh)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new nb(l.height);return u.fromEquirectangularTexture(t,a),e.set(a,u),a.addEventListener("dispose",r),n(u.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class lm extends Ax{constructor(e=-1,n=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,s=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=u*this.view.offsetX,a=o+u*this.view.width,s-=c*this.view.offsetY,l=s-c*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ea=4,gv=[.125,.215,.35,.446,.526,.582],Yr=20,Df=new lm,vv=new qe;let If=null,Of=0,Nf=0,Uf=!1;const $r=(1+Math.sqrt(5))/2,Uo=1/$r,_v=[new O(-$r,Uo,0),new O($r,Uo,0),new O(-Uo,0,$r),new O(Uo,0,$r),new O(0,$r,-Uo),new O(0,$r,Uo),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class yv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){If=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(If,Of,Nf),this._renderer.xr.enabled=Uf,e.scissorTest=!1,Vl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xa||e.mapping===Sa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),If=this._renderer.getRenderTarget(),Of=this._renderer.getActiveCubeFace(),Nf=this._renderer.getActiveMipmapLevel(),Uf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:Ra,format:ri,colorSpace:Ir,depthBuffer:!1},r=xv(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xv(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$A(o)),this._blurMaterial=XA(o,e,n)}return r}_compileMaterial(e){const n=new Bn(this._lodPlanes[0],e);this._renderer.compile(n,Df)}_sceneToCubeUV(e,n,i,r){const s=new kn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(vv),c.toneMapping=br,c.autoClear=!1;const p=new am({name:"PMREM.Background",side:an,depthWrite:!1,depthTest:!1}),g=new Bn(new el,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(vv),v=!0);for(let f=0;f<6;f++){const y=f%3;y===0?(s.up.set(0,l[f],0),s.lookAt(u[f],0,0)):y===1?(s.up.set(0,0,l[f]),s.lookAt(0,u[f],0)):(s.up.set(0,l[f],0),s.lookAt(0,0,u[f]));const _=this._cubeSize;Vl(r,y*_,f>2?_:0,_,_),c.setRenderTarget(r),v&&c.render(g,s),c.render(e,s)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===xa||e.mapping===Sa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sv());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Bn(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;Vl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Df)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let o=1;o<r;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),s=_v[(r-o-1)%_v.length];this._blur(e,o-1,o,a,s)}n.autoClear=i}_blur(e,n,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,n,i,r,o,a,s){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Bn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*Yr-1),v=o/g,m=isFinite(o)?1+Math.floor(c*v):Yr;m>Yr&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yr}`);const f=[];let y=0;for(let b=0;b<Yr;++b){const C=b/v,T=Math.exp(-C*C/2);f.push(T),b===0?y+=T:b<m&&(y+=2*T)}for(let b=0;b<f.length;b++)f[b]=f[b]/y;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",s&&(h.poleAxis.value=s);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const x=this._sizeLods[r],S=3*x*(r>_-ea?r-_+ea:0),M=4*(this._cubeSize-x);Vl(n,S,M,3*x,2*x),l.setRenderTarget(n),l.render(d,Df)}}function $A(t){const e=[],n=[],i=[];let r=t;const o=t-ea+1+gv.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);n.push(s);let l=1/s;a>t-ea?l=gv[a-t+ea-1]:a===0&&(l=0),i.push(l);const u=1/(s-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,g=6,v=3,m=2,f=1,y=new Float32Array(v*g*p),_=new Float32Array(m*g*p),x=new Float32Array(f*g*p);for(let M=0;M<p;M++){const b=M%3*2/3-1,C=M>2?0:-1,T=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];y.set(T,v*g*M),_.set(h,m*g*M);const w=[M,M,M,M,M,M];x.set(w,f*g*M)}const S=new _n;S.setAttribute("position",new Vn(y,v)),S.setAttribute("uv",new Vn(_,m)),S.setAttribute("faceIndex",new Vn(x,f)),e.push(S),r>ea&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function xv(t,e,n){const i=new Rr(t,e,n);return i.texture.mapping=wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Vl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function XA(t,e,n){const i=new Float32Array(Yr),r=new O(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:Yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Sv(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Mv(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:um(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function um(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qA(t){let e=new WeakMap,n=null;function i(s){if(s&&s.isTexture){const l=s.mapping,u=l===th||l===nh,c=l===xa||l===Sa;if(u||c){let d=e.get(s);const h=d!==void 0?d.texture.pmremVersion:0;if(s.isRenderTargetTexture&&s.pmremVersion!==h)return n===null&&(n=new yv(t)),d=u?n.fromEquirectangular(s,d):n.fromCubemap(s,d),d.texture.pmremVersion=s.pmremVersion,e.set(s,d),d.texture;if(d!==void 0)return d.texture;{const p=s.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new yv(t)),d=u?n.fromEquirectangular(s):n.fromCubemap(s),d.texture.pmremVersion=s.pmremVersion,e.set(s,d),s.addEventListener("dispose",o),d.texture):null}}}return s}function r(s){let l=0;const u=6;for(let c=0;c<u;c++)s[c]!==void 0&&l++;return l===u}function o(s){const l=s.target;l.removeEventListener("dispose",o);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function YA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&fa("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function KA(t,e,n,i){const r={},o=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const v=h.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}h.removeEventListener("dispose",a),delete r[h.id];const p=o.get(h);p&&(e.remove(p),o.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function s(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,n.memory.geometries++),h}function l(d){const h=d.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=d.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],t.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,g=d.attributes.position;let v=0;if(p!==null){const y=p.array;v=p.version;for(let _=0,x=y.length;_<x;_+=3){const S=y[_+0],M=y[_+1],b=y[_+2];h.push(S,M,M,b,b,S)}}else if(g!==void 0){const y=g.array;v=g.version;for(let _=0,x=y.length/3-1;_<x;_+=3){const S=_+0,M=_+1,b=_+2;h.push(S,M,M,b,b,S)}}else return;const m=new(yx(h)?Ex:wx)(h,1);m.version=v;const f=o.get(d);f&&e.remove(f),o.set(d,m)}function c(d){const h=o.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return o.get(d)}return{get:s,update:l,getWireframeAttribute:c}}function ZA(t,e,n){let i;function r(h){i=h}let o,a;function s(h){o=h.type,a=h.bytesPerElement}function l(h,p){t.drawElements(i,p,o,h*a),n.update(p,i,1)}function u(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,o,h*a,g),n.update(p,i,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,o,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];n.update(m,i,1)}function d(h,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)u(h[f]/a,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,o,h,0,v,0,g);let f=0;for(let y=0;y<g;y++)f+=p[y];for(let y=0;y<v.length;y++)n.update(f,i,v[y])}}this.setMode=r,this.setIndex=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=d}function QA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=s*(o/3);break;case t.LINES:n.lines+=s*(o/2);break;case t.LINE_STRIP:n.lines+=s*(o-1);break;case t.LINE_LOOP:n.lines+=s*o;break;case t.POINTS:n.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function JA(t,e,n){const i=new WeakMap,r=new Lt;function o(a,s,l){const u=a.morphTargetInfluences,c=s.morphAttributes.position||s.morphAttributes.normal||s.morphAttributes.color,d=c!==void 0?c.length:0;let h=i.get(s);if(h===void 0||h.count!==d){let w=function(){C.dispose(),i.delete(s),s.removeEventListener("dispose",w)};var p=w;h!==void 0&&h.texture.dispose();const g=s.morphAttributes.position!==void 0,v=s.morphAttributes.normal!==void 0,m=s.morphAttributes.color!==void 0,f=s.morphAttributes.position||[],y=s.morphAttributes.normal||[],_=s.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let S=s.attributes.position.count*x,M=1;S>e.maxTextureSize&&(M=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const b=new Float32Array(S*M*4*d),C=new Sx(b,S,M,d);C.type=zi,C.needsUpdate=!0;const T=x*4;for(let P=0;P<d;P++){const z=f[P],G=y[P],N=_[P],I=S*M*4*P;for(let k=0;k<z.count;k++){const J=k*T;g===!0&&(r.fromBufferAttribute(z,k),b[I+J+0]=r.x,b[I+J+1]=r.y,b[I+J+2]=r.z,b[I+J+3]=0),v===!0&&(r.fromBufferAttribute(G,k),b[I+J+4]=r.x,b[I+J+5]=r.y,b[I+J+6]=r.z,b[I+J+7]=0),m===!0&&(r.fromBufferAttribute(N,k),b[I+J+8]=r.x,b[I+J+9]=r.y,b[I+J+10]=r.z,b[I+J+11]=N.itemSize===4?r.w:1)}}h={count:d,texture:C,size:new fe(S,M)},i.set(s,h),s.addEventListener("dispose",w)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const v=s.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:o}}function eC(t,e,n,i){let r=new WeakMap;function o(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);if(r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return d}function a(){r=new WeakMap}function s(l){const u=l.target;u.removeEventListener("dispose",s),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:o,dispose:a}}class Px extends sn{constructor(e,n,i,r,o,a,s,l,u,c=ca){if(c!==ca&&c!==wa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===ca&&(i=uo),i===void 0&&c===wa&&(i=Ma),super(null,r,o,a,s,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=s!==void 0?s:zn,this.minFilter=l!==void 0?l:zn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Lx=new sn,wv=new Px(1,1),Dx=new Sx,Ix=new HE,Ox=new Cx,Ev=[],bv=[],Tv=new Float32Array(16),Av=new Float32Array(9),Cv=new Float32Array(4);function Pa(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let o=Ev[r];if(o===void 0&&(o=new Float32Array(r),Ev[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=n,t[a].toArray(o,s)}return o}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Nt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Cc(t,e){let n=bv[e];n===void 0&&(n=new Int32Array(e),bv[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function tC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function nC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),Nt(n,e)}}function iC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),Nt(n,e)}}function rC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),Nt(n,e)}}function oC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Nt(n,e)}else{if(Ot(n,i))return;Cv.set(i),t.uniformMatrix2fv(this.addr,!1,Cv),Nt(n,i)}}function aC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Nt(n,e)}else{if(Ot(n,i))return;Av.set(i),t.uniformMatrix3fv(this.addr,!1,Av),Nt(n,i)}}function sC(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Nt(n,e)}else{if(Ot(n,i))return;Tv.set(i),t.uniformMatrix4fv(this.addr,!1,Tv),Nt(n,i)}}function lC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function uC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),Nt(n,e)}}function cC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),Nt(n,e)}}function fC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),Nt(n,e)}}function dC(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function hC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),Nt(n,e)}}function pC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),Nt(n,e)}}function mC(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),Nt(n,e)}}function gC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let o;this.type===t.SAMPLER_2D_SHADOW?(wv.compareFunction=_x,o=wv):o=Lx,n.setTexture2D(e||o,r)}function vC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Ix,r)}function _C(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ox,r)}function yC(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Dx,r)}function xC(t){switch(t){case 5126:return tC;case 35664:return nC;case 35665:return iC;case 35666:return rC;case 35674:return oC;case 35675:return aC;case 35676:return sC;case 5124:case 35670:return lC;case 35667:case 35671:return uC;case 35668:case 35672:return cC;case 35669:case 35673:return fC;case 5125:return dC;case 36294:return hC;case 36295:return pC;case 36296:return mC;case 35678:case 36198:case 36298:case 36306:case 35682:return gC;case 35679:case 36299:case 36307:return vC;case 35680:case 36300:case 36308:case 36293:return _C;case 36289:case 36303:case 36311:case 36292:return yC}}function SC(t,e){t.uniform1fv(this.addr,e)}function MC(t,e){const n=Pa(e,this.size,2);t.uniform2fv(this.addr,n)}function wC(t,e){const n=Pa(e,this.size,3);t.uniform3fv(this.addr,n)}function EC(t,e){const n=Pa(e,this.size,4);t.uniform4fv(this.addr,n)}function bC(t,e){const n=Pa(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function TC(t,e){const n=Pa(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function AC(t,e){const n=Pa(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function CC(t,e){t.uniform1iv(this.addr,e)}function RC(t,e){t.uniform2iv(this.addr,e)}function PC(t,e){t.uniform3iv(this.addr,e)}function LC(t,e){t.uniform4iv(this.addr,e)}function DC(t,e){t.uniform1uiv(this.addr,e)}function IC(t,e){t.uniform2uiv(this.addr,e)}function OC(t,e){t.uniform3uiv(this.addr,e)}function NC(t,e){t.uniform4uiv(this.addr,e)}function UC(t,e,n){const i=this.cache,r=e.length,o=Cc(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Nt(i,o));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Lx,o[a])}function kC(t,e,n){const i=this.cache,r=e.length,o=Cc(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Nt(i,o));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Ix,o[a])}function FC(t,e,n){const i=this.cache,r=e.length,o=Cc(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Nt(i,o));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Ox,o[a])}function zC(t,e,n){const i=this.cache,r=e.length,o=Cc(n,r);Ot(i,o)||(t.uniform1iv(this.addr,o),Nt(i,o));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Dx,o[a])}function BC(t){switch(t){case 5126:return SC;case 35664:return MC;case 35665:return wC;case 35666:return EC;case 35674:return bC;case 35675:return TC;case 35676:return AC;case 5124:case 35670:return CC;case 35667:case 35671:return RC;case 35668:case 35672:return PC;case 35669:case 35673:return LC;case 5125:return DC;case 36294:return IC;case 36295:return OC;case 36296:return NC;case 35678:case 36198:case 36298:case 36306:case 35682:return UC;case 35679:case 36299:case 36307:return kC;case 35680:case 36300:case 36308:case 36293:return FC;case 36289:case 36303:case 36311:case 36292:return zC}}class HC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=xC(n.type)}}class VC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=BC(n.type)}}class GC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,n[s.id],i)}}}const kf=/(\w+)(\])?(\[|\.)?/g;function Rv(t,e){t.seq.push(e),t.map[e.id]=e}function WC(t,e,n){const i=t.name,r=i.length;for(kf.lastIndex=0;;){const o=kf.exec(i),a=kf.lastIndex;let s=o[1];const l=o[2]==="]",u=o[3];if(l&&(s=s|0),u===void 0||u==="["&&a+2===r){Rv(n,u===void 0?new HC(s,t,e):new VC(s,t,e));break}else{let d=n.map[s];d===void 0&&(d=new GC(s),Rv(n,d)),n=d}}}class yu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(n,r),a=e.getUniformLocation(n,o.name);WC(o,a,this)}}setValue(e,n,i,r){const o=this.map[n];o!==void 0&&o.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let o=0,a=n.length;o!==a;++o){const s=n[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Pv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const jC=37297;let $C=0;function XC(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${n[a]}`)}return i.join(`
`)}function qC(t){const e=nt.getPrimaries(nt.workingColorSpace),n=nt.getPrimaries(t);let i;switch(e===n?i="":e===Yu&&n===qu?i="LinearDisplayP3ToLinearSRGB":e===qu&&n===Yu&&(i="LinearSRGBToLinearDisplayP3"),t){case Ir:case Ec:return[i,"LinearTransferOETF"];case On:case im:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Lv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+r+`

`+XC(t.getShaderSource(e),a)}else return r}function YC(t,e){const n=qC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function KC(t,e){let n;switch(e){case eE:n="Linear";break;case tE:n="Reinhard";break;case nE:n="OptimizedCineon";break;case iE:n="ACESFilmic";break;case oE:n="AgX";break;case aE:n="Neutral";break;case rE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Gl=new O;function ZC(){nt.getLuminanceCoefficients(Gl);const t=Gl.x.toFixed(4),e=Gl.y.toFixed(4),n=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ss).join(`
`)}function JC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function eR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=t.getActiveAttrib(e,r),a=o.name;let s=1;o.type===t.FLOAT_MAT2&&(s=2),o.type===t.FLOAT_MAT3&&(s=3),o.type===t.FLOAT_MAT4&&(s=4),n[a]={type:o.type,location:t.getAttribLocation(e,a),locationSize:s}}return n}function ss(t){return t!==""}function Dv(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Iv(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ih(t){return t.replace(tR,iR)}const nR=new Map;function iR(t,e){let n=Ge[e];if(n===void 0){const i=nR.get(e);if(i!==void 0)n=Ge[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ih(n)}const rR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ov(t){return t.replace(rR,oR)}function oR(t,e,n,i){let r="";for(let o=parseInt(e);o<parseInt(n);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function Nv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ox?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Tw?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Li&&(e="SHADOWMAP_TYPE_VSM"),e}function sR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case xa:case Sa:e="ENVMAP_TYPE_CUBE";break;case wc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Sa:e="ENVMAP_MODE_REFRACTION";break}return e}function uR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Kp:e="ENVMAP_BLENDING_MULTIPLY";break;case Qw:e="ENVMAP_BLENDING_MIX";break;case Jw:e="ENVMAP_BLENDING_ADD";break}return e}function cR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function fR(t,e,n,i){const r=t.getContext(),o=n.defines;let a=n.vertexShader,s=n.fragmentShader;const l=aR(n),u=sR(n),c=lR(n),d=uR(n),h=cR(n),p=QC(n),g=JC(o),v=r.createProgram();let m,f,y=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ss).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ss).join(`
`),f.length>0&&(f+=`
`)):(m=[Nv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ss).join(`
`),f=[Nv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==br?"#define TONE_MAPPING":"",n.toneMapping!==br?Ge.tonemapping_pars_fragment:"",n.toneMapping!==br?KC("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,YC("linearToOutputTexel",n.outputColorSpace),ZC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ss).join(`
`)),a=Ih(a),a=Dv(a,n),a=Iv(a,n),s=Ih(s),s=Dv(s,n),s=Iv(s,n),a=Ov(a),s=Ov(s),n.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Yg?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const _=y+m+a,x=y+f+s,S=Pv(r,r.VERTEX_SHADER,_),M=Pv(r,r.FRAGMENT_SHADER,x);r.attachShader(v,S),r.attachShader(v,M),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function b(P){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(v).trim(),G=r.getShaderInfoLog(S).trim(),N=r.getShaderInfoLog(M).trim();let I=!0,k=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(I=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,S,M);else{const J=Lv(r,S,"vertex"),F=Lv(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+J+`
`+F)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(G===""||N==="")&&(k=!1);k&&(P.diagnostics={runnable:I,programLog:z,vertexShader:{log:G,prefix:m},fragmentShader:{log:N,prefix:f}})}r.deleteShader(S),r.deleteShader(M),C=new yu(r,v),T=eR(r,v)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let T;this.getAttributes=function(){return T===void 0&&b(this),T};let w=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=r.getProgramParameter(v,jC)),w},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=$C++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=S,this.fragmentShader=M,this}let dR=0;class hR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new pR(e),n.set(e,i)),i}}class pR{constructor(e){this.id=dR++,this.code=e,this.usedTimes=0}}function mR(t,e,n,i,r,o,a){const s=new om,l=new hR,u=new Set,c=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,w,P,z,G){const N=z.fog,I=G.geometry,k=T.isMeshStandardMaterial?z.environment:null,J=(T.isMeshStandardMaterial?n:e).get(T.envMap||k),F=J&&J.mapping===wc?J.image.height:null,ie=g[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const W=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Q=W!==void 0?W.length:0;let oe=0;I.morphAttributes.position!==void 0&&(oe=1),I.morphAttributes.normal!==void 0&&(oe=2),I.morphAttributes.color!==void 0&&(oe=3);let we,B,j,te;if(ie){const Ye=pi[ie];we=Ye.vertexShader,B=Ye.fragmentShader}else we=T.vertexShader,B=T.fragmentShader,l.update(T),j=l.getVertexShaderID(T),te=l.getFragmentShaderID(T);const U=t.getRenderTarget(),ne=G.isInstancedMesh===!0,he=G.isBatchedMesh===!0,ge=!!T.map,Ae=!!T.matcap,D=!!J,it=!!T.aoMap,Ue=!!T.lightMap,je=!!T.bumpMap,Se=!!T.normalMap,Ze=!!T.displacementMap,De=!!T.emissiveMap,He=!!T.metalnessMap,L=!!T.roughnessMap,A=T.anisotropy>0,Z=T.clearcoat>0,ae=T.dispersion>0,le=T.iridescence>0,re=T.sheen>0,Pe=T.transmission>0,pe=A&&!!T.anisotropyMap,_e=Z&&!!T.clearcoatMap,Ve=Z&&!!T.clearcoatNormalMap,ce=Z&&!!T.clearcoatRoughnessMap,ye=le&&!!T.iridescenceMap,Xe=le&&!!T.iridescenceThicknessMap,Oe=re&&!!T.sheenColorMap,Me=re&&!!T.sheenRoughnessMap,ke=!!T.specularMap,Be=!!T.specularColorMap,dt=!!T.specularIntensityMap,E=Pe&&!!T.transmissionMap,X=Pe&&!!T.thicknessMap,q=!!T.gradientMap,ee=!!T.alphaMap,se=T.alphaTest>0,Ce=!!T.alphaHash,Fe=!!T.extensions;let Mt=br;T.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Mt=t.toneMapping);const Ct={shaderID:ie,shaderType:T.type,shaderName:T.name,vertexShader:we,fragmentShader:B,defines:T.defines,customVertexShaderID:j,customFragmentShaderID:te,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:he,batchingColor:he&&G._colorsTexture!==null,instancing:ne,instancingColor:ne&&G.instanceColor!==null,instancingMorph:ne&&G.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:U===null?t.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Ir,alphaToCoverage:!!T.alphaToCoverage,map:ge,matcap:Ae,envMap:D,envMapMode:D&&J.mapping,envMapCubeUVHeight:F,aoMap:it,lightMap:Ue,bumpMap:je,normalMap:Se,displacementMap:h&&Ze,emissiveMap:De,normalMapObjectSpace:Se&&T.normalMapType===cE,normalMapTangentSpace:Se&&T.normalMapType===vx,metalnessMap:He,roughnessMap:L,anisotropy:A,anisotropyMap:pe,clearcoat:Z,clearcoatMap:_e,clearcoatNormalMap:Ve,clearcoatRoughnessMap:ce,dispersion:ae,iridescence:le,iridescenceMap:ye,iridescenceThicknessMap:Xe,sheen:re,sheenColorMap:Oe,sheenRoughnessMap:Me,specularMap:ke,specularColorMap:Be,specularIntensityMap:dt,transmission:Pe,transmissionMap:E,thicknessMap:X,gradientMap:q,opaque:T.transparent===!1&&T.blending===ua&&T.alphaToCoverage===!1,alphaMap:ee,alphaTest:se,alphaHash:Ce,combine:T.combine,mapUv:ge&&v(T.map.channel),aoMapUv:it&&v(T.aoMap.channel),lightMapUv:Ue&&v(T.lightMap.channel),bumpMapUv:je&&v(T.bumpMap.channel),normalMapUv:Se&&v(T.normalMap.channel),displacementMapUv:Ze&&v(T.displacementMap.channel),emissiveMapUv:De&&v(T.emissiveMap.channel),metalnessMapUv:He&&v(T.metalnessMap.channel),roughnessMapUv:L&&v(T.roughnessMap.channel),anisotropyMapUv:pe&&v(T.anisotropyMap.channel),clearcoatMapUv:_e&&v(T.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&v(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&v(T.iridescenceMap.channel),iridescenceThicknessMapUv:Xe&&v(T.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&v(T.sheenColorMap.channel),sheenRoughnessMapUv:Me&&v(T.sheenRoughnessMap.channel),specularMapUv:ke&&v(T.specularMap.channel),specularColorMapUv:Be&&v(T.specularColorMap.channel),specularIntensityMapUv:dt&&v(T.specularIntensityMap.channel),transmissionMapUv:E&&v(T.transmissionMap.channel),thicknessMapUv:X&&v(T.thicknessMap.channel),alphaMapUv:ee&&v(T.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(Se||A),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!I.attributes.uv&&(ge||ee),fog:!!N,useFog:T.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:G.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:oe,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:Mt,decodeVideoTexture:ge&&T.map.isVideoTexture===!0&&nt.getTransfer(T.map.colorSpace)===ct,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ui,flipSided:T.side===an,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Fe&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Fe&&T.extensions.multiDraw===!0||he)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ct.vertexUv1s=u.has(1),Ct.vertexUv2s=u.has(2),Ct.vertexUv3s=u.has(3),u.clear(),Ct}function f(T){const w=[];if(T.shaderID?w.push(T.shaderID):(w.push(T.customVertexShaderID),w.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)w.push(P),w.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(y(w,T),_(w,T),w.push(t.outputColorSpace)),w.push(T.customProgramCacheKey),w.join()}function y(T,w){T.push(w.precision),T.push(w.outputColorSpace),T.push(w.envMapMode),T.push(w.envMapCubeUVHeight),T.push(w.mapUv),T.push(w.alphaMapUv),T.push(w.lightMapUv),T.push(w.aoMapUv),T.push(w.bumpMapUv),T.push(w.normalMapUv),T.push(w.displacementMapUv),T.push(w.emissiveMapUv),T.push(w.metalnessMapUv),T.push(w.roughnessMapUv),T.push(w.anisotropyMapUv),T.push(w.clearcoatMapUv),T.push(w.clearcoatNormalMapUv),T.push(w.clearcoatRoughnessMapUv),T.push(w.iridescenceMapUv),T.push(w.iridescenceThicknessMapUv),T.push(w.sheenColorMapUv),T.push(w.sheenRoughnessMapUv),T.push(w.specularMapUv),T.push(w.specularColorMapUv),T.push(w.specularIntensityMapUv),T.push(w.transmissionMapUv),T.push(w.thicknessMapUv),T.push(w.combine),T.push(w.fogExp2),T.push(w.sizeAttenuation),T.push(w.morphTargetsCount),T.push(w.morphAttributeCount),T.push(w.numDirLights),T.push(w.numPointLights),T.push(w.numSpotLights),T.push(w.numSpotLightMaps),T.push(w.numHemiLights),T.push(w.numRectAreaLights),T.push(w.numDirLightShadows),T.push(w.numPointLightShadows),T.push(w.numSpotLightShadows),T.push(w.numSpotLightShadowsWithMaps),T.push(w.numLightProbes),T.push(w.shadowMapType),T.push(w.toneMapping),T.push(w.numClippingPlanes),T.push(w.numClipIntersection),T.push(w.depthPacking)}function _(T,w){s.disableAll(),w.supportsVertexTextures&&s.enable(0),w.instancing&&s.enable(1),w.instancingColor&&s.enable(2),w.instancingMorph&&s.enable(3),w.matcap&&s.enable(4),w.envMap&&s.enable(5),w.normalMapObjectSpace&&s.enable(6),w.normalMapTangentSpace&&s.enable(7),w.clearcoat&&s.enable(8),w.iridescence&&s.enable(9),w.alphaTest&&s.enable(10),w.vertexColors&&s.enable(11),w.vertexAlphas&&s.enable(12),w.vertexUv1s&&s.enable(13),w.vertexUv2s&&s.enable(14),w.vertexUv3s&&s.enable(15),w.vertexTangents&&s.enable(16),w.anisotropy&&s.enable(17),w.alphaHash&&s.enable(18),w.batching&&s.enable(19),w.dispersion&&s.enable(20),w.batchingColor&&s.enable(21),T.push(s.mask),s.disableAll(),w.fog&&s.enable(0),w.useFog&&s.enable(1),w.flatShading&&s.enable(2),w.logarithmicDepthBuffer&&s.enable(3),w.skinning&&s.enable(4),w.morphTargets&&s.enable(5),w.morphNormals&&s.enable(6),w.morphColors&&s.enable(7),w.premultipliedAlpha&&s.enable(8),w.shadowMapEnabled&&s.enable(9),w.doubleSided&&s.enable(10),w.flipSided&&s.enable(11),w.useDepthPacking&&s.enable(12),w.dithering&&s.enable(13),w.transmission&&s.enable(14),w.sheen&&s.enable(15),w.opaque&&s.enable(16),w.pointsUvs&&s.enable(17),w.decodeVideoTexture&&s.enable(18),w.alphaToCoverage&&s.enable(19),T.push(s.mask)}function x(T){const w=g[T.type];let P;if(w){const z=pi[w];P=Tx.clone(z.uniforms)}else P=T.uniforms;return P}function S(T,w){let P;for(let z=0,G=c.length;z<G;z++){const N=c[z];if(N.cacheKey===w){P=N,++P.usedTimes;break}}return P===void 0&&(P=new fR(t,w,T,o),c.push(P)),P}function M(T){if(--T.usedTimes===0){const w=c.indexOf(T);c[w]=c[c.length-1],c.pop(),T.destroy()}}function b(T){l.remove(T)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:S,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:C}}function gR(){let t=new WeakMap;function e(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function n(o){t.delete(o)}function i(o,a,s){t.get(o)[a]=s}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function vR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Uv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function kv(){const t=[];let e=0;const n=[],i=[],r=[];function o(){e=0,n.length=0,i.length=0,r.length=0}function a(d,h,p,g,v,m){let f=t[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},t[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=m),e++,f}function s(d,h,p,g,v,m){const f=a(d,h,p,g,v,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(d,h,p,g,v,m){const f=a(d,h,p,g,v,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(d,h){n.length>1&&n.sort(d||vR),i.length>1&&i.sort(h||Uv),r.length>1&&r.sort(h||Uv)}function c(){for(let d=e,h=t.length;d<h;d++){const p=t[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:o,push:s,unshift:l,finish:c,sort:u}}function _R(){let t=new WeakMap;function e(i,r){const o=t.get(i);let a;return o===void 0?(a=new kv,t.set(i,[a])):r>=o.length?(a=new kv,o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function yR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new qe};break;case"SpotLight":n={position:new O,direction:new O,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function xR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let SR=0;function MR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function wR(t){const e=new yR,n=xR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,o=new st,a=new st;function s(u){let c=0,d=0,h=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,y=0,_=0,x=0,S=0,M=0,b=0;u.sort(MR);for(let T=0,w=u.length;T<w;T++){const P=u[T],z=P.color,G=P.intensity,N=P.distance,I=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=z.r*G,d+=z.g*G,h+=z.b*G;else if(P.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(P.sh.coefficients[k],G);b++}else if(P.isDirectionalLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const J=P.shadow,F=n.get(P);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.directionalShadow[p]=F,i.directionalShadowMap[p]=I,i.directionalShadowMatrix[p]=P.shadow.matrix,y++}i.directional[p]=k,p++}else if(P.isSpotLight){const k=e.get(P);k.position.setFromMatrixPosition(P.matrixWorld),k.color.copy(z).multiplyScalar(G),k.distance=N,k.coneCos=Math.cos(P.angle),k.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),k.decay=P.decay,i.spot[v]=k;const J=P.shadow;if(P.map&&(i.spotLightMap[S]=P.map,S++,J.updateMatrices(P),P.castShadow&&M++),i.spotLightMatrix[v]=J.matrix,P.castShadow){const F=n.get(P);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,i.spotShadow[v]=F,i.spotShadowMap[v]=I,x++}v++}else if(P.isRectAreaLight){const k=e.get(P);k.color.copy(z).multiplyScalar(G),k.halfWidth.set(P.width*.5,0,0),k.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=k,m++}else if(P.isPointLight){const k=e.get(P);if(k.color.copy(P.color).multiplyScalar(P.intensity),k.distance=P.distance,k.decay=P.decay,P.castShadow){const J=P.shadow,F=n.get(P);F.shadowIntensity=J.intensity,F.shadowBias=J.bias,F.shadowNormalBias=J.normalBias,F.shadowRadius=J.radius,F.shadowMapSize=J.mapSize,F.shadowCameraNear=J.camera.near,F.shadowCameraFar=J.camera.far,i.pointShadow[g]=F,i.pointShadowMap[g]=I,i.pointShadowMatrix[g]=P.shadow.matrix,_++}i.point[g]=k,g++}else if(P.isHemisphereLight){const k=e.get(P);k.skyColor.copy(P.color).multiplyScalar(G),k.groundColor.copy(P.groundColor).multiplyScalar(G),i.hemi[f]=k,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=d,i.ambient[2]=h;const C=i.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==y||C.numPointShadows!==_||C.numSpotShadows!==x||C.numSpotMaps!==S||C.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=m,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+S-M,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=M,i.numLightProbes=b,C.directionalLength=p,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=y,C.numPointShadows=_,C.numSpotShadows=x,C.numSpotMaps=S,C.numLightProbes=b,i.version=SR++)}function l(u,c){let d=0,h=0,p=0,g=0,v=0;const m=c.matrixWorldInverse;for(let f=0,y=u.length;f<y;f++){const _=u[f];if(_.isDirectionalLight){const x=i.directional[d];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),d++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),a.identity(),o.copy(_.matrixWorld),o.premultiply(m),a.extractRotation(o),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const x=i.hemi[v];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:s,setupView:l,state:i}}function Fv(t){const e=new wR(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function o(c){n.push(c)}function a(c){i.push(c)}function s(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:s,setupLightsView:l,pushLight:o,pushShadow:a}}function ER(t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let s;return a===void 0?(s=new Fv(t),e.set(r,[s])):o>=a.length?(s=new Fv(t),a.push(s)):s=a[o],s}function i(){e=new WeakMap}return{get:n,dispose:i}}class bR extends go{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class TR extends go{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const AR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function RR(t,e,n){let i=new sm;const r=new fe,o=new fe,a=new Lt,s=new bR({depthPacking:uE}),l=new TR,u={},c=n.maxTextureSize,d={[Cr]:an,[an]:Cr,[Ui]:Ui},h=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:AR,fragmentShader:CR}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new _n;g.setAttribute("position",new Vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ox;let f=this.type;this.render=function(M,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||M.length===0)return;const T=t.getRenderTarget(),w=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Gi),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=f!==Li&&this.type===Li,N=f===Li&&this.type!==Li;for(let I=0,k=M.length;I<k;I++){const J=M[I],F=J.shadow;if(F===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;r.copy(F.mapSize);const ie=F.getFrameExtents();if(r.multiply(ie),o.copy(F.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(o.x=Math.floor(c/ie.x),r.x=o.x*ie.x,F.mapSize.x=o.x),r.y>c&&(o.y=Math.floor(c/ie.y),r.y=o.y*ie.y,F.mapSize.y=o.y)),F.map===null||G===!0||N===!0){const Q=this.type!==Li?{minFilter:zn,magFilter:zn}:{};F.map!==null&&F.map.dispose(),F.map=new Rr(r.x,r.y,Q),F.map.texture.name=J.name+".shadowMap",F.camera.updateProjectionMatrix()}t.setRenderTarget(F.map),t.clear();const W=F.getViewportCount();for(let Q=0;Q<W;Q++){const oe=F.getViewport(Q);a.set(o.x*oe.x,o.y*oe.y,o.x*oe.z,o.y*oe.w),z.viewport(a),F.updateMatrices(J,Q),i=F.getFrustum(),x(b,C,F.camera,J,this.type)}F.isPointLightShadow!==!0&&this.type===Li&&y(F,C),F.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(T,w,P)};function y(M,b){const C=e.update(v);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,p.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new Rr(r.x,r.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,t.setRenderTarget(M.mapPass),t.clear(),t.renderBufferDirect(b,null,C,h,v,null),p.uniforms.shadow_pass.value=M.mapPass.texture,p.uniforms.resolution.value=M.mapSize,p.uniforms.radius.value=M.radius,t.setRenderTarget(M.map),t.clear(),t.renderBufferDirect(b,null,C,p,v,null)}function _(M,b,C,T){let w=null;const P=C.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)w=P;else if(w=C.isPointLight===!0?l:s,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=w.uuid,G=b.uuid;let N=u[z];N===void 0&&(N={},u[z]=N);let I=N[G];I===void 0&&(I=w.clone(),N[G]=I,b.addEventListener("dispose",S)),w=I}if(w.visible=b.visible,w.wireframe=b.wireframe,T===Li?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:d[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const z=t.properties.get(w);z.light=C}return w}function x(M,b,C,T,w){if(M.visible===!1)return;if(M.layers.test(b.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&w===Li)&&(!M.frustumCulled||i.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,M.matrixWorld);const G=e.update(M),N=M.material;if(Array.isArray(N)){const I=G.groups;for(let k=0,J=I.length;k<J;k++){const F=I[k],ie=N[F.materialIndex];if(ie&&ie.visible){const W=_(M,ie,T,w);M.onBeforeShadow(t,M,b,C,G,W,F),t.renderBufferDirect(C,null,G,W,M,F),M.onAfterShadow(t,M,b,C,G,W,F)}}}else if(N.visible){const I=_(M,N,T,w);M.onBeforeShadow(t,M,b,C,G,I,null),t.renderBufferDirect(C,null,G,I,M,null),M.onAfterShadow(t,M,b,C,G,I,null)}}const z=M.children;for(let G=0,N=z.length;G<N;G++)x(z[G],b,C,T,w)}function S(M){M.target.removeEventListener("dispose",S);for(const C in u){const T=u[C],w=M.target.uuid;w in T&&(T[w].dispose(),delete T[w])}}}function PR(t){function e(){let E=!1;const X=new Lt;let q=null;const ee=new Lt(0,0,0,0);return{setMask:function(se){q!==se&&!E&&(t.colorMask(se,se,se,se),q=se)},setLocked:function(se){E=se},setClear:function(se,Ce,Fe,Mt,Ct){Ct===!0&&(se*=Mt,Ce*=Mt,Fe*=Mt),X.set(se,Ce,Fe,Mt),ee.equals(X)===!1&&(t.clearColor(se,Ce,Fe,Mt),ee.copy(X))},reset:function(){E=!1,q=null,ee.set(-1,0,0,0)}}}function n(){let E=!1,X=null,q=null,ee=null;return{setTest:function(se){se?te(t.DEPTH_TEST):U(t.DEPTH_TEST)},setMask:function(se){X!==se&&!E&&(t.depthMask(se),X=se)},setFunc:function(se){if(q!==se){switch(se){case jw:t.depthFunc(t.NEVER);break;case $w:t.depthFunc(t.ALWAYS);break;case Xw:t.depthFunc(t.LESS);break;case $u:t.depthFunc(t.LEQUAL);break;case qw:t.depthFunc(t.EQUAL);break;case Yw:t.depthFunc(t.GEQUAL);break;case Kw:t.depthFunc(t.GREATER);break;case Zw:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}q=se}},setLocked:function(se){E=se},setClear:function(se){ee!==se&&(t.clearDepth(se),ee=se)},reset:function(){E=!1,X=null,q=null,ee=null}}}function i(){let E=!1,X=null,q=null,ee=null,se=null,Ce=null,Fe=null,Mt=null,Ct=null;return{setTest:function(Ye){E||(Ye?te(t.STENCIL_TEST):U(t.STENCIL_TEST))},setMask:function(Ye){X!==Ye&&!E&&(t.stencilMask(Ye),X=Ye)},setFunc:function(Ye,Rt,Et){(q!==Ye||ee!==Rt||se!==Et)&&(t.stencilFunc(Ye,Rt,Et),q=Ye,ee=Rt,se=Et)},setOp:function(Ye,Rt,Et){(Ce!==Ye||Fe!==Rt||Mt!==Et)&&(t.stencilOp(Ye,Rt,Et),Ce=Ye,Fe=Rt,Mt=Et)},setLocked:function(Ye){E=Ye},setClear:function(Ye){Ct!==Ye&&(t.clearStencil(Ye),Ct=Ye)},reset:function(){E=!1,X=null,q=null,ee=null,se=null,Ce=null,Fe=null,Mt=null,Ct=null}}}const r=new e,o=new n,a=new i,s=new WeakMap,l=new WeakMap;let u={},c={},d=new WeakMap,h=[],p=null,g=!1,v=null,m=null,f=null,y=null,_=null,x=null,S=null,M=new qe(0,0,0),b=0,C=!1,T=null,w=null,P=null,z=null,G=null;const N=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,k=0;const J=t.getParameter(t.VERSION);J.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(J)[1]),I=k>=1):J.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),I=k>=2);let F=null,ie={};const W=t.getParameter(t.SCISSOR_BOX),Q=t.getParameter(t.VIEWPORT),oe=new Lt().fromArray(W),we=new Lt().fromArray(Q);function B(E,X,q,ee){const se=new Uint8Array(4),Ce=t.createTexture();t.bindTexture(E,Ce),t.texParameteri(E,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(E,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<q;Fe++)E===t.TEXTURE_3D||E===t.TEXTURE_2D_ARRAY?t.texImage3D(X,0,t.RGBA,1,1,ee,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(X+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return Ce}const j={};j[t.TEXTURE_2D]=B(t.TEXTURE_2D,t.TEXTURE_2D,1),j[t.TEXTURE_CUBE_MAP]=B(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[t.TEXTURE_2D_ARRAY]=B(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),j[t.TEXTURE_3D]=B(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),te(t.DEPTH_TEST),o.setFunc($u),je(!1),Se(Wg),te(t.CULL_FACE),it(Gi);function te(E){u[E]!==!0&&(t.enable(E),u[E]=!0)}function U(E){u[E]!==!1&&(t.disable(E),u[E]=!1)}function ne(E,X){return c[E]!==X?(t.bindFramebuffer(E,X),c[E]=X,E===t.DRAW_FRAMEBUFFER&&(c[t.FRAMEBUFFER]=X),E===t.FRAMEBUFFER&&(c[t.DRAW_FRAMEBUFFER]=X),!0):!1}function he(E,X){let q=h,ee=!1;if(E){q=d.get(X),q===void 0&&(q=[],d.set(X,q));const se=E.textures;if(q.length!==se.length||q[0]!==t.COLOR_ATTACHMENT0){for(let Ce=0,Fe=se.length;Ce<Fe;Ce++)q[Ce]=t.COLOR_ATTACHMENT0+Ce;q.length=se.length,ee=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,ee=!0);ee&&t.drawBuffers(q)}function ge(E){return p!==E?(t.useProgram(E),p=E,!0):!1}const Ae={[qr]:t.FUNC_ADD,[Cw]:t.FUNC_SUBTRACT,[Rw]:t.FUNC_REVERSE_SUBTRACT};Ae[Pw]=t.MIN,Ae[Lw]=t.MAX;const D={[Dw]:t.ZERO,[Iw]:t.ONE,[Ow]:t.SRC_COLOR,[Jd]:t.SRC_ALPHA,[Bw]:t.SRC_ALPHA_SATURATE,[Fw]:t.DST_COLOR,[Uw]:t.DST_ALPHA,[Nw]:t.ONE_MINUS_SRC_COLOR,[eh]:t.ONE_MINUS_SRC_ALPHA,[zw]:t.ONE_MINUS_DST_COLOR,[kw]:t.ONE_MINUS_DST_ALPHA,[Hw]:t.CONSTANT_COLOR,[Vw]:t.ONE_MINUS_CONSTANT_COLOR,[Gw]:t.CONSTANT_ALPHA,[Ww]:t.ONE_MINUS_CONSTANT_ALPHA};function it(E,X,q,ee,se,Ce,Fe,Mt,Ct,Ye){if(E===Gi){g===!0&&(U(t.BLEND),g=!1);return}if(g===!1&&(te(t.BLEND),g=!0),E!==Aw){if(E!==v||Ye!==C){if((m!==qr||_!==qr)&&(t.blendEquation(t.FUNC_ADD),m=qr,_=qr),Ye)switch(E){case ua:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jg:t.blendFunc(t.ONE,t.ONE);break;case $g:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xg:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case ua:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case jg:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case $g:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Xg:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}f=null,y=null,x=null,S=null,M.set(0,0,0),b=0,v=E,C=Ye}return}se=se||X,Ce=Ce||q,Fe=Fe||ee,(X!==m||se!==_)&&(t.blendEquationSeparate(Ae[X],Ae[se]),m=X,_=se),(q!==f||ee!==y||Ce!==x||Fe!==S)&&(t.blendFuncSeparate(D[q],D[ee],D[Ce],D[Fe]),f=q,y=ee,x=Ce,S=Fe),(Mt.equals(M)===!1||Ct!==b)&&(t.blendColor(Mt.r,Mt.g,Mt.b,Ct),M.copy(Mt),b=Ct),v=E,C=!1}function Ue(E,X){E.side===Ui?U(t.CULL_FACE):te(t.CULL_FACE);let q=E.side===an;X&&(q=!q),je(q),E.blending===ua&&E.transparent===!1?it(Gi):it(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),o.setFunc(E.depthFunc),o.setTest(E.depthTest),o.setMask(E.depthWrite),r.setMask(E.colorWrite);const ee=E.stencilWrite;a.setTest(ee),ee&&(a.setMask(E.stencilWriteMask),a.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),a.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),De(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?te(t.SAMPLE_ALPHA_TO_COVERAGE):U(t.SAMPLE_ALPHA_TO_COVERAGE)}function je(E){T!==E&&(E?t.frontFace(t.CW):t.frontFace(t.CCW),T=E)}function Se(E){E!==Ew?(te(t.CULL_FACE),E!==w&&(E===Wg?t.cullFace(t.BACK):E===bw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):U(t.CULL_FACE),w=E}function Ze(E){E!==P&&(I&&t.lineWidth(E),P=E)}function De(E,X,q){E?(te(t.POLYGON_OFFSET_FILL),(z!==X||G!==q)&&(t.polygonOffset(X,q),z=X,G=q)):U(t.POLYGON_OFFSET_FILL)}function He(E){E?te(t.SCISSOR_TEST):U(t.SCISSOR_TEST)}function L(E){E===void 0&&(E=t.TEXTURE0+N-1),F!==E&&(t.activeTexture(E),F=E)}function A(E,X,q){q===void 0&&(F===null?q=t.TEXTURE0+N-1:q=F);let ee=ie[q];ee===void 0&&(ee={type:void 0,texture:void 0},ie[q]=ee),(ee.type!==E||ee.texture!==X)&&(F!==q&&(t.activeTexture(q),F=q),t.bindTexture(E,X||j[E]),ee.type=E,ee.texture=X)}function Z(){const E=ie[F];E!==void 0&&E.type!==void 0&&(t.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function ae(){try{t.compressedTexImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function le(){try{t.compressedTexImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function re(){try{t.texSubImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Pe(){try{t.texSubImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function _e(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Ve(){try{t.texStorage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ce(){try{t.texStorage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Xe(){try{t.texImage3D.apply(t,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function Oe(E){oe.equals(E)===!1&&(t.scissor(E.x,E.y,E.z,E.w),oe.copy(E))}function Me(E){we.equals(E)===!1&&(t.viewport(E.x,E.y,E.z,E.w),we.copy(E))}function ke(E,X){let q=l.get(X);q===void 0&&(q=new WeakMap,l.set(X,q));let ee=q.get(E);ee===void 0&&(ee=t.getUniformBlockIndex(X,E.name),q.set(E,ee))}function Be(E,X){const ee=l.get(X).get(E);s.get(X)!==ee&&(t.uniformBlockBinding(X,ee,E.__bindingPointIndex),s.set(X,ee))}function dt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},F=null,ie={},c={},d=new WeakMap,h=[],p=null,g=!1,v=null,m=null,f=null,y=null,_=null,x=null,S=null,M=new qe(0,0,0),b=0,C=!1,T=null,w=null,P=null,z=null,G=null,oe.set(0,0,t.canvas.width,t.canvas.height),we.set(0,0,t.canvas.width,t.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:te,disable:U,bindFramebuffer:ne,drawBuffers:he,useProgram:ge,setBlending:it,setMaterial:Ue,setFlipSided:je,setCullFace:Se,setLineWidth:Ze,setPolygonOffset:De,setScissorTest:He,activeTexture:L,bindTexture:A,unbindTexture:Z,compressedTexImage2D:ae,compressedTexImage3D:le,texImage2D:ye,texImage3D:Xe,updateUBOMapping:ke,uniformBlockBinding:Be,texStorage2D:Ve,texStorage3D:ce,texSubImage2D:re,texSubImage3D:Pe,compressedTexSubImage2D:pe,compressedTexSubImage3D:_e,scissor:Oe,viewport:Me,reset:dt}}function zv(t,e,n,i){const r=LR(i);switch(n){case cx:return t*e;case dx:return t*e;case hx:return t*e*2;case px:return t*e/r.components*r.byteLength;case em:return t*e/r.components*r.byteLength;case mx:return t*e*2/r.components*r.byteLength;case tm:return t*e*2/r.components*r.byteLength;case fx:return t*e*3/r.components*r.byteLength;case ri:return t*e*4/r.components*r.byteLength;case nm:return t*e*4/r.components*r.byteLength;case pu:case mu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gu:case vu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ah:case lh:return Math.max(t,16)*Math.max(e,8)/4;case oh:case sh:return Math.max(t,8)*Math.max(e,8)/2;case uh:case ch:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case ph:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case mh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case gh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case _h:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case yh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Sh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Mh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Eh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case bh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case _u:case Th:case Ah:return Math.ceil(t/4)*Math.ceil(e/4)*16;case gx:case Ch:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Rh:case Ph:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function LR(t){switch(t){case Ki:case sx:return{byteLength:1,components:1};case Vs:case lx:case Ra:return{byteLength:2,components:1};case Qp:case Jp:return{byteLength:2,components:4};case uo:case Zp:case zi:return{byteLength:4,components:1};case ux:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function DR(t,e,n,i,r,o,a){const s=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new fe,c=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,A){return p?new OffscreenCanvas(L,A):Ws("canvas")}function v(L,A,Z){let ae=1;const le=He(L);if((le.width>Z||le.height>Z)&&(ae=Z/Math.max(le.width,le.height)),ae<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const re=Math.floor(ae*le.width),Pe=Math.floor(ae*le.height);d===void 0&&(d=g(re,Pe));const pe=A?g(re,Pe):d;return pe.width=re,pe.height=Pe,pe.getContext("2d").drawImage(L,0,0,re,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+re+"x"+Pe+")."),pe}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),L;return L}function m(L){return L.generateMipmaps&&L.minFilter!==zn&&L.minFilter!==ti}function f(L){t.generateMipmap(L)}function y(L,A,Z,ae,le=!1){if(L!==null){if(t[L]!==void 0)return t[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let re=A;if(A===t.RED&&(Z===t.FLOAT&&(re=t.R32F),Z===t.HALF_FLOAT&&(re=t.R16F),Z===t.UNSIGNED_BYTE&&(re=t.R8)),A===t.RED_INTEGER&&(Z===t.UNSIGNED_BYTE&&(re=t.R8UI),Z===t.UNSIGNED_SHORT&&(re=t.R16UI),Z===t.UNSIGNED_INT&&(re=t.R32UI),Z===t.BYTE&&(re=t.R8I),Z===t.SHORT&&(re=t.R16I),Z===t.INT&&(re=t.R32I)),A===t.RG&&(Z===t.FLOAT&&(re=t.RG32F),Z===t.HALF_FLOAT&&(re=t.RG16F),Z===t.UNSIGNED_BYTE&&(re=t.RG8)),A===t.RG_INTEGER&&(Z===t.UNSIGNED_BYTE&&(re=t.RG8UI),Z===t.UNSIGNED_SHORT&&(re=t.RG16UI),Z===t.UNSIGNED_INT&&(re=t.RG32UI),Z===t.BYTE&&(re=t.RG8I),Z===t.SHORT&&(re=t.RG16I),Z===t.INT&&(re=t.RG32I)),A===t.RGB&&Z===t.UNSIGNED_INT_5_9_9_9_REV&&(re=t.RGB9_E5),A===t.RGBA){const Pe=le?Xu:nt.getTransfer(ae);Z===t.FLOAT&&(re=t.RGBA32F),Z===t.HALF_FLOAT&&(re=t.RGBA16F),Z===t.UNSIGNED_BYTE&&(re=Pe===ct?t.SRGB8_ALPHA8:t.RGBA8),Z===t.UNSIGNED_SHORT_4_4_4_4&&(re=t.RGBA4),Z===t.UNSIGNED_SHORT_5_5_5_1&&(re=t.RGB5_A1)}return(re===t.R16F||re===t.R32F||re===t.RG16F||re===t.RG32F||re===t.RGBA16F||re===t.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function _(L,A){let Z;return L?A===null||A===uo||A===Ma?Z=t.DEPTH24_STENCIL8:A===zi?Z=t.DEPTH32F_STENCIL8:A===Vs&&(Z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===uo||A===Ma?Z=t.DEPTH_COMPONENT24:A===zi?Z=t.DEPTH_COMPONENT32F:A===Vs&&(Z=t.DEPTH_COMPONENT16),Z}function x(L,A){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==zn&&L.minFilter!==ti?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function S(L){const A=L.target;A.removeEventListener("dispose",S),b(A),A.isVideoTexture&&c.delete(A)}function M(L){const A=L.target;A.removeEventListener("dispose",M),T(A)}function b(L){const A=i.get(L);if(A.__webglInit===void 0)return;const Z=L.source,ae=h.get(Z);if(ae){const le=ae[A.__cacheKey];le.usedTimes--,le.usedTimes===0&&C(L),Object.keys(ae).length===0&&h.delete(Z)}i.remove(L)}function C(L){const A=i.get(L);t.deleteTexture(A.__webglTexture);const Z=L.source,ae=h.get(Z);delete ae[A.__cacheKey],a.memory.textures--}function T(L){const A=i.get(L);if(L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let ae=0;ae<6;ae++){if(Array.isArray(A.__webglFramebuffer[ae]))for(let le=0;le<A.__webglFramebuffer[ae].length;le++)t.deleteFramebuffer(A.__webglFramebuffer[ae][le]);else t.deleteFramebuffer(A.__webglFramebuffer[ae]);A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer[ae])}else{if(Array.isArray(A.__webglFramebuffer))for(let ae=0;ae<A.__webglFramebuffer.length;ae++)t.deleteFramebuffer(A.__webglFramebuffer[ae]);else t.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&t.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&t.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let ae=0;ae<A.__webglColorRenderbuffer.length;ae++)A.__webglColorRenderbuffer[ae]&&t.deleteRenderbuffer(A.__webglColorRenderbuffer[ae]);A.__webglDepthRenderbuffer&&t.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=L.textures;for(let ae=0,le=Z.length;ae<le;ae++){const re=i.get(Z[ae]);re.__webglTexture&&(t.deleteTexture(re.__webglTexture),a.memory.textures--),i.remove(Z[ae])}i.remove(L)}let w=0;function P(){w=0}function z(){const L=w;return L>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+r.maxTextures),w+=1,L}function G(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function N(L,A){const Z=i.get(L);if(L.isVideoTexture&&Ze(L),L.isRenderTargetTexture===!1&&L.version>0&&Z.__version!==L.version){const ae=L.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(Z,L,A);return}}n.bindTexture(t.TEXTURE_2D,Z.__webglTexture,t.TEXTURE0+A)}function I(L,A){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){we(Z,L,A);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Z.__webglTexture,t.TEXTURE0+A)}function k(L,A){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){we(Z,L,A);return}n.bindTexture(t.TEXTURE_3D,Z.__webglTexture,t.TEXTURE0+A)}function J(L,A){const Z=i.get(L);if(L.version>0&&Z.__version!==L.version){B(Z,L,A);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture,t.TEXTURE0+A)}const F={[ih]:t.REPEAT,[Jr]:t.CLAMP_TO_EDGE,[rh]:t.MIRRORED_REPEAT},ie={[zn]:t.NEAREST,[sE]:t.NEAREST_MIPMAP_NEAREST,[Ml]:t.NEAREST_MIPMAP_LINEAR,[ti]:t.LINEAR,[hf]:t.LINEAR_MIPMAP_NEAREST,[eo]:t.LINEAR_MIPMAP_LINEAR},W={[fE]:t.NEVER,[vE]:t.ALWAYS,[dE]:t.LESS,[_x]:t.LEQUAL,[hE]:t.EQUAL,[gE]:t.GEQUAL,[pE]:t.GREATER,[mE]:t.NOTEQUAL};function Q(L,A){if(A.type===zi&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===ti||A.magFilter===hf||A.magFilter===Ml||A.magFilter===eo||A.minFilter===ti||A.minFilter===hf||A.minFilter===Ml||A.minFilter===eo)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(L,t.TEXTURE_WRAP_S,F[A.wrapS]),t.texParameteri(L,t.TEXTURE_WRAP_T,F[A.wrapT]),(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)&&t.texParameteri(L,t.TEXTURE_WRAP_R,F[A.wrapR]),t.texParameteri(L,t.TEXTURE_MAG_FILTER,ie[A.magFilter]),t.texParameteri(L,t.TEXTURE_MIN_FILTER,ie[A.minFilter]),A.compareFunction&&(t.texParameteri(L,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(L,t.TEXTURE_COMPARE_FUNC,W[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===zn||A.minFilter!==Ml&&A.minFilter!==eo||A.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||i.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(L,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,r.getMaxAnisotropy())),i.get(A).__currentAnisotropy=A.anisotropy}}}function oe(L,A){let Z=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",S));const ae=A.source;let le=h.get(ae);le===void 0&&(le={},h.set(ae,le));const re=G(A);if(re!==L.__cacheKey){le[re]===void 0&&(le[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),le[re].usedTimes++;const Pe=le[L.__cacheKey];Pe!==void 0&&(le[L.__cacheKey].usedTimes--,Pe.usedTimes===0&&C(A)),L.__cacheKey=re,L.__webglTexture=le[re].texture}return Z}function we(L,A,Z){let ae=t.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(ae=t.TEXTURE_2D_ARRAY),A.isData3DTexture&&(ae=t.TEXTURE_3D);const le=oe(L,A),re=A.source;n.bindTexture(ae,L.__webglTexture,t.TEXTURE0+Z);const Pe=i.get(re);if(re.version!==Pe.__version||le===!0){n.activeTexture(t.TEXTURE0+Z);const pe=nt.getPrimaries(nt.workingColorSpace),_e=A.colorSpace===pr?null:nt.getPrimaries(A.colorSpace),Ve=A.colorSpace===pr||pe===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let ce=v(A.image,!1,r.maxTextureSize);ce=De(A,ce);const ye=o.convert(A.format,A.colorSpace),Xe=o.convert(A.type);let Oe=y(A.internalFormat,ye,Xe,A.colorSpace,A.isVideoTexture);Q(ae,A);let Me;const ke=A.mipmaps,Be=A.isVideoTexture!==!0,dt=Pe.__version===void 0||le===!0,E=re.dataReady,X=x(A,ce);if(A.isDepthTexture)Oe=_(A.format===wa,A.type),dt&&(Be?n.texStorage2D(t.TEXTURE_2D,1,Oe,ce.width,ce.height):n.texImage2D(t.TEXTURE_2D,0,Oe,ce.width,ce.height,0,ye,Xe,null));else if(A.isDataTexture)if(ke.length>0){Be&&dt&&n.texStorage2D(t.TEXTURE_2D,X,Oe,ke[0].width,ke[0].height);for(let q=0,ee=ke.length;q<ee;q++)Me=ke[q],Be?E&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Me.width,Me.height,ye,Xe,Me.data):n.texImage2D(t.TEXTURE_2D,q,Oe,Me.width,Me.height,0,ye,Xe,Me.data);A.generateMipmaps=!1}else Be?(dt&&n.texStorage2D(t.TEXTURE_2D,X,Oe,ce.width,ce.height),E&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce.width,ce.height,ye,Xe,ce.data)):n.texImage2D(t.TEXTURE_2D,0,Oe,ce.width,ce.height,0,ye,Xe,ce.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Be&&dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,X,Oe,ke[0].width,ke[0].height,ce.depth);for(let q=0,ee=ke.length;q<ee;q++)if(Me=ke[q],A.format!==ri)if(ye!==null)if(Be){if(E)if(A.layerUpdates.size>0){const se=zv(Me.width,Me.height,A.format,A.type);for(const Ce of A.layerUpdates){const Fe=Me.data.subarray(Ce*se/Me.data.BYTES_PER_ELEMENT,(Ce+1)*se/Me.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,Ce,Me.width,Me.height,1,ye,Fe,0,0)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,ce.depth,ye,Me.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,q,Oe,Me.width,Me.height,ce.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?E&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,q,0,0,0,Me.width,Me.height,ce.depth,ye,Xe,Me.data):n.texImage3D(t.TEXTURE_2D_ARRAY,q,Oe,Me.width,Me.height,ce.depth,0,ye,Xe,Me.data)}else{Be&&dt&&n.texStorage2D(t.TEXTURE_2D,X,Oe,ke[0].width,ke[0].height);for(let q=0,ee=ke.length;q<ee;q++)Me=ke[q],A.format!==ri?ye!==null?Be?E&&n.compressedTexSubImage2D(t.TEXTURE_2D,q,0,0,Me.width,Me.height,ye,Me.data):n.compressedTexImage2D(t.TEXTURE_2D,q,Oe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?E&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,Me.width,Me.height,ye,Xe,Me.data):n.texImage2D(t.TEXTURE_2D,q,Oe,Me.width,Me.height,0,ye,Xe,Me.data)}else if(A.isDataArrayTexture)if(Be){if(dt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,X,Oe,ce.width,ce.height,ce.depth),E)if(A.layerUpdates.size>0){const q=zv(ce.width,ce.height,A.format,A.type);for(const ee of A.layerUpdates){const se=ce.data.subarray(ee*q/ce.data.BYTES_PER_ELEMENT,(ee+1)*q/ce.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,ee,ce.width,ce.height,1,ye,Xe,se)}A.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,ye,Xe,ce.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Oe,ce.width,ce.height,ce.depth,0,ye,Xe,ce.data);else if(A.isData3DTexture)Be?(dt&&n.texStorage3D(t.TEXTURE_3D,X,Oe,ce.width,ce.height,ce.depth),E&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,ye,Xe,ce.data)):n.texImage3D(t.TEXTURE_3D,0,Oe,ce.width,ce.height,ce.depth,0,ye,Xe,ce.data);else if(A.isFramebufferTexture){if(dt)if(Be)n.texStorage2D(t.TEXTURE_2D,X,Oe,ce.width,ce.height);else{let q=ce.width,ee=ce.height;for(let se=0;se<X;se++)n.texImage2D(t.TEXTURE_2D,se,Oe,q,ee,0,ye,Xe,null),q>>=1,ee>>=1}}else if(ke.length>0){if(Be&&dt){const q=He(ke[0]);n.texStorage2D(t.TEXTURE_2D,X,Oe,q.width,q.height)}for(let q=0,ee=ke.length;q<ee;q++)Me=ke[q],Be?E&&n.texSubImage2D(t.TEXTURE_2D,q,0,0,ye,Xe,Me):n.texImage2D(t.TEXTURE_2D,q,Oe,ye,Xe,Me);A.generateMipmaps=!1}else if(Be){if(dt){const q=He(ce);n.texStorage2D(t.TEXTURE_2D,X,Oe,q.width,q.height)}E&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,Xe,ce)}else n.texImage2D(t.TEXTURE_2D,0,Oe,ye,Xe,ce);m(A)&&f(ae),Pe.__version=re.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function B(L,A,Z){if(A.image.length!==6)return;const ae=oe(L,A),le=A.source;n.bindTexture(t.TEXTURE_CUBE_MAP,L.__webglTexture,t.TEXTURE0+Z);const re=i.get(le);if(le.version!==re.__version||ae===!0){n.activeTexture(t.TEXTURE0+Z);const Pe=nt.getPrimaries(nt.workingColorSpace),pe=A.colorSpace===pr?null:nt.getPrimaries(A.colorSpace),_e=A.colorSpace===pr||Pe===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,A.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,A.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ve=A.isCompressedTexture||A.image[0].isCompressedTexture,ce=A.image[0]&&A.image[0].isDataTexture,ye=[];for(let ee=0;ee<6;ee++)!Ve&&!ce?ye[ee]=v(A.image[ee],!0,r.maxCubemapSize):ye[ee]=ce?A.image[ee].image:A.image[ee],ye[ee]=De(A,ye[ee]);const Xe=ye[0],Oe=o.convert(A.format,A.colorSpace),Me=o.convert(A.type),ke=y(A.internalFormat,Oe,Me,A.colorSpace),Be=A.isVideoTexture!==!0,dt=re.__version===void 0||ae===!0,E=le.dataReady;let X=x(A,Xe);Q(t.TEXTURE_CUBE_MAP,A);let q;if(Ve){Be&&dt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,X,ke,Xe.width,Xe.height);for(let ee=0;ee<6;ee++){q=ye[ee].mipmaps;for(let se=0;se<q.length;se++){const Ce=q[se];A.format!==ri?Oe!==null?Be?E&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se,0,0,Ce.width,Ce.height,Oe,Ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se,ke,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se,0,0,Ce.width,Ce.height,Oe,Me,Ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se,ke,Ce.width,Ce.height,0,Oe,Me,Ce.data)}}}else{if(q=A.mipmaps,Be&&dt){q.length>0&&X++;const ee=He(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,X,ke,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(ce){Be?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,ye[ee].width,ye[ee].height,Oe,Me,ye[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ke,ye[ee].width,ye[ee].height,0,Oe,Me,ye[ee].data);for(let se=0;se<q.length;se++){const Fe=q[se].image[ee].image;Be?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se+1,0,0,Fe.width,Fe.height,Oe,Me,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se+1,ke,Fe.width,Fe.height,0,Oe,Me,Fe.data)}}else{Be?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Oe,Me,ye[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,ke,Oe,Me,ye[ee]);for(let se=0;se<q.length;se++){const Ce=q[se];Be?E&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se+1,0,0,Oe,Me,Ce.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,se+1,ke,Oe,Me,Ce.image[ee])}}}m(A)&&f(t.TEXTURE_CUBE_MAP),re.__version=le.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function j(L,A,Z,ae,le,re){const Pe=o.convert(Z.format,Z.colorSpace),pe=o.convert(Z.type),_e=y(Z.internalFormat,Pe,pe,Z.colorSpace);if(!i.get(A).__hasExternalTextures){const ce=Math.max(1,A.width>>re),ye=Math.max(1,A.height>>re);le===t.TEXTURE_3D||le===t.TEXTURE_2D_ARRAY?n.texImage3D(le,re,_e,ce,ye,A.depth,0,Pe,pe,null):n.texImage2D(le,re,_e,ce,ye,0,Pe,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,L),Se(A)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ae,le,i.get(Z).__webglTexture,0,je(A)):(le===t.TEXTURE_2D||le>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ae,le,i.get(Z).__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function te(L,A,Z){if(t.bindRenderbuffer(t.RENDERBUFFER,L),A.depthBuffer){const ae=A.depthTexture,le=ae&&ae.isDepthTexture?ae.type:null,re=_(A.stencilBuffer,le),Pe=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=je(A);Se(A)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,re,A.width,A.height):Z?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,re,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,re,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Pe,t.RENDERBUFFER,L)}else{const ae=A.textures;for(let le=0;le<ae.length;le++){const re=ae[le],Pe=o.convert(re.format,re.colorSpace),pe=o.convert(re.type),_e=y(re.internalFormat,Pe,pe,re.colorSpace),Ve=je(A);Z&&Se(A)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,_e,A.width,A.height):Se(A)?s.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ve,_e,A.width,A.height):t.renderbufferStorage(t.RENDERBUFFER,_e,A.width,A.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function U(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),N(A.depthTexture,0);const ae=i.get(A.depthTexture).__webglTexture,le=je(A);if(A.depthTexture.format===ca)Se(A)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ae,0);else if(A.depthTexture.format===wa)Se(A)?s.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0,le):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function ne(L){const A=i.get(L),Z=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");U(A.__webglFramebuffer,L)}else if(Z){A.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer[ae]),A.__webglDepthbuffer[ae]=t.createRenderbuffer(),te(A.__webglDepthbuffer[ae],L,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer=t.createRenderbuffer(),te(A.__webglDepthbuffer,L,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(L,A,Z){const ae=i.get(L);A!==void 0&&j(ae.__webglFramebuffer,L,L.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Z!==void 0&&ne(L)}function ge(L){const A=L.texture,Z=i.get(L),ae=i.get(A);L.addEventListener("dispose",M);const le=L.textures,re=L.isWebGLCubeRenderTarget===!0,Pe=le.length>1;if(Pe||(ae.__webglTexture===void 0&&(ae.__webglTexture=t.createTexture()),ae.__version=A.version,a.memory.textures++),re){Z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[pe]=[];for(let _e=0;_e<A.mipmaps.length;_e++)Z.__webglFramebuffer[pe][_e]=t.createFramebuffer()}else Z.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pe=0;pe<A.mipmaps.length;pe++)Z.__webglFramebuffer[pe]=t.createFramebuffer()}else Z.__webglFramebuffer=t.createFramebuffer();if(Pe)for(let pe=0,_e=le.length;pe<_e;pe++){const Ve=i.get(le[pe]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=t.createTexture(),a.memory.textures++)}if(L.samples>0&&Se(L)===!1){Z.__webglMultisampledFramebuffer=t.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pe=0;pe<le.length;pe++){const _e=le[pe];Z.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Z.__webglColorRenderbuffer[pe]);const Ve=o.convert(_e.format,_e.colorSpace),ce=o.convert(_e.type),ye=y(_e.internalFormat,Ve,ce,_e.colorSpace,L.isXRRenderTarget===!0),Xe=je(L);t.renderbufferStorageMultisample(t.RENDERBUFFER,Xe,ye,L.width,L.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Z.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),L.depthBuffer&&(Z.__webglDepthRenderbuffer=t.createRenderbuffer(),te(Z.__webglDepthRenderbuffer,L,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,ae.__webglTexture),Q(t.TEXTURE_CUBE_MAP,A);for(let pe=0;pe<6;pe++)if(A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)j(Z.__webglFramebuffer[pe][_e],L,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else j(Z.__webglFramebuffer[pe],L,A,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);m(A)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Pe){for(let pe=0,_e=le.length;pe<_e;pe++){const Ve=le[pe],ce=i.get(Ve);n.bindTexture(t.TEXTURE_2D,ce.__webglTexture),Q(t.TEXTURE_2D,Ve),j(Z.__webglFramebuffer,L,Ve,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),m(Ve)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pe=L.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,ae.__webglTexture),Q(pe,A),A.mipmaps&&A.mipmaps.length>0)for(let _e=0;_e<A.mipmaps.length;_e++)j(Z.__webglFramebuffer[_e],L,A,t.COLOR_ATTACHMENT0,pe,_e);else j(Z.__webglFramebuffer,L,A,t.COLOR_ATTACHMENT0,pe,0);m(A)&&f(pe),n.unbindTexture()}L.depthBuffer&&ne(L)}function Ae(L){const A=L.textures;for(let Z=0,ae=A.length;Z<ae;Z++){const le=A[Z];if(m(le)){const re=L.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Pe=i.get(le).__webglTexture;n.bindTexture(re,Pe),f(re),n.unbindTexture()}}}const D=[],it=[];function Ue(L){if(L.samples>0){if(Se(L)===!1){const A=L.textures,Z=L.width,ae=L.height;let le=t.COLOR_BUFFER_BIT;const re=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Pe=i.get(L),pe=A.length>1;if(pe)for(let _e=0;_e<A.length;_e++)n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let _e=0;_e<A.length;_e++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(le|=t.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(le|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[_e]);const Ve=i.get(A[_e]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Ve,0)}t.blitFramebuffer(0,0,Z,ae,0,0,Z,ae,le,t.NEAREST),l===!0&&(D.length=0,it.length=0,D.push(t.COLOR_ATTACHMENT0+_e),L.depthBuffer&&L.resolveDepthBuffer===!1&&(D.push(re),it.push(re),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,it)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let _e=0;_e<A.length;_e++){n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.RENDERBUFFER,Pe.__webglColorRenderbuffer[_e]);const Ve=i.get(A[_e]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Pe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+_e,t.TEXTURE_2D,Ve,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){const A=L.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[A])}}}function je(L){return Math.min(r.maxSamples,L.samples)}function Se(L){const A=i.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ze(L){const A=a.render.frame;c.get(L)!==A&&(c.set(L,A),L.update())}function De(L,A){const Z=L.colorSpace,ae=L.format,le=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Z!==Ir&&Z!==pr&&(nt.getTransfer(Z)===ct?(ae!==ri||le!==Ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function He(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(u.width=L.naturalWidth||L.width,u.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(u.width=L.displayWidth,u.height=L.displayHeight):(u.width=L.width,u.height=L.height),u}this.allocateTextureUnit=z,this.resetTextureUnits=P,this.setTexture2D=N,this.setTexture2DArray=I,this.setTexture3D=k,this.setTextureCube=J,this.rebindTextures=he,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=Ae,this.updateMultisampleRenderTarget=Ue,this.setupDepthRenderbuffer=ne,this.setupFrameBufferTexture=j,this.useMultisampledRTT=Se}function IR(t,e){function n(i,r=pr){let o;const a=nt.getTransfer(r);if(i===Ki)return t.UNSIGNED_BYTE;if(i===Qp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ux)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===sx)return t.BYTE;if(i===lx)return t.SHORT;if(i===Vs)return t.UNSIGNED_SHORT;if(i===Zp)return t.INT;if(i===uo)return t.UNSIGNED_INT;if(i===zi)return t.FLOAT;if(i===Ra)return t.HALF_FLOAT;if(i===cx)return t.ALPHA;if(i===fx)return t.RGB;if(i===ri)return t.RGBA;if(i===dx)return t.LUMINANCE;if(i===hx)return t.LUMINANCE_ALPHA;if(i===ca)return t.DEPTH_COMPONENT;if(i===wa)return t.DEPTH_STENCIL;if(i===px)return t.RED;if(i===em)return t.RED_INTEGER;if(i===mx)return t.RG;if(i===tm)return t.RG_INTEGER;if(i===nm)return t.RGBA_INTEGER;if(i===pu||i===mu||i===gu||i===vu)if(a===ct)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===pu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===mu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===vu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===pu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===mu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===vu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===oh||i===ah||i===sh||i===lh)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===oh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ah)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===sh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===lh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===uh||i===ch||i===fh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===uh||i===ch)return a===ct?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===fh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===dh||i===hh||i===ph||i===mh||i===gh||i===vh||i===_h||i===yh||i===xh||i===Sh||i===Mh||i===wh||i===Eh||i===bh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===dh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===hh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===ph)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===mh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===gh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===vh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===_h)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===yh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===xh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Sh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Mh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===wh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Eh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===bh)return a===ct?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===_u||i===Th||i===Ah)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===_u)return a===ct?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Th)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ah)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===gx||i===Ch||i===Rh||i===Ph)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===_u)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Ch)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Rh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ph)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ma?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class OR extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}let ta=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}};const NR={type:"move"};class Ff{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,o=null,a=null;const s=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),f=this._getHandJoint(u,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(NR)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=o!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ta;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const UR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new sn,o=e.properties.get(r);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new xi({vertexShader:UR,fragmentShader:kR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Bn(new Ac(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class zR extends ci{constructor(e,n){super();const i=this;let r=null,o=1,a=null,s="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,g=null;const v=new FR,m=n.getContextAttributes();let f=null,y=null;const _=[],x=[],S=new fe;let M=null;const b=new kn;b.layers.enable(1),b.viewport=new Lt;const C=new kn;C.layers.enable(2),C.viewport=new Lt;const T=[b,C],w=new OR;w.layers.enable(1),w.layers.enable(2);let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=_[B];return j===void 0&&(j=new Ff,_[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=_[B];return j===void 0&&(j=new Ff,_[B]=j),j.getGripSpace()},this.getHand=function(B){let j=_[B];return j===void 0&&(j=new Ff,_[B]=j),j.getHandSpace()};function G(B){const j=x.indexOf(B.inputSource);if(j===-1)return;const te=_[j];te!==void 0&&(te.update(B.inputSource,B.frame,u||a),te.dispatchEvent({type:B.type,data:B.inputSource}))}function N(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",N),r.removeEventListener("inputsourceschange",I);for(let B=0;B<_.length;B++){const j=x[B];j!==null&&(x[B]=null,_[B].disconnect(j))}P=null,z=null,v.reset(),e.setRenderTarget(f),p=null,h=null,d=null,r=null,y=null,we.stop(),i.isPresenting=!1,e.setPixelRatio(M),e.setSize(S.width,S.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){o=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){s=B,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(B){u=B},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(B){if(r=B,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",N),r.addEventListener("inputsourceschange",I),m.xrCompatible!==!0&&await n.makeXRCompatible(),M=e.getPixelRatio(),e.getSize(S),r.renderState.layers===void 0){const j={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(r,n,j),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Rr(p.framebufferWidth,p.framebufferHeight,{format:ri,type:Ki,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let j=null,te=null,U=null;m.depth&&(U=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,j=m.stencil?wa:ca,te=m.stencil?Ma:uo);const ne={colorFormat:n.RGBA8,depthFormat:U,scaleFactor:o};d=new XRWebGLBinding(r,n),h=d.createProjectionLayer(ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),y=new Rr(h.textureWidth,h.textureHeight,{format:ri,type:Ki,depthTexture:new Px(h.textureWidth,h.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(s),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function I(B){for(let j=0;j<B.removed.length;j++){const te=B.removed[j],U=x.indexOf(te);U>=0&&(x[U]=null,_[U].disconnect(te))}for(let j=0;j<B.added.length;j++){const te=B.added[j];let U=x.indexOf(te);if(U===-1){for(let he=0;he<_.length;he++)if(he>=x.length){x.push(te),U=he;break}else if(x[he]===null){x[he]=te,U=he;break}if(U===-1)break}const ne=_[U];ne&&ne.connect(te)}}const k=new O,J=new O;function F(B,j,te){k.setFromMatrixPosition(j.matrixWorld),J.setFromMatrixPosition(te.matrixWorld);const U=k.distanceTo(J),ne=j.projectionMatrix.elements,he=te.projectionMatrix.elements,ge=ne[14]/(ne[10]-1),Ae=ne[14]/(ne[10]+1),D=(ne[9]+1)/ne[5],it=(ne[9]-1)/ne[5],Ue=(ne[8]-1)/ne[0],je=(he[8]+1)/he[0],Se=ge*Ue,Ze=ge*je,De=U/(-Ue+je),He=De*-Ue;j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(He),B.translateZ(De),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();const L=ge+De,A=Ae+De,Z=Se-He,ae=Ze+(U-He),le=D*Ae/A*L,re=it*Ae/A*L;B.projectionMatrix.makePerspective(Z,ae,le,re,L,A),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function ie(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(r===null)return;v.texture!==null&&(B.near=v.depthNear,B.far=v.depthFar),w.near=C.near=b.near=B.near,w.far=C.far=b.far=B.far,(P!==w.near||z!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),P=w.near,z=w.far,b.near=P,b.far=z,C.near=P,C.far=z,b.updateProjectionMatrix(),C.updateProjectionMatrix(),B.updateProjectionMatrix());const j=B.parent,te=w.cameras;ie(w,j);for(let U=0;U<te.length;U++)ie(te[U],j);te.length===2?F(w,b,C):w.projectionMatrix.copy(b.projectionMatrix),W(B,w,j)};function W(B,j,te){te===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(te.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Gs*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(B){l=B,h!==null&&(h.fixedFoveation=B),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=B)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(w)};let Q=null;function oe(B,j){if(c=j.getViewerPose(u||a),g=j,c!==null){const te=c.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let U=!1;te.length!==w.cameras.length&&(w.cameras.length=0,U=!0);for(let he=0;he<te.length;he++){const ge=te[he];let Ae=null;if(p!==null)Ae=p.getViewport(ge);else{const it=d.getViewSubImage(h,ge);Ae=it.viewport,he===0&&(e.setRenderTargetTextures(y,it.colorTexture,h.ignoreDepthValues?void 0:it.depthStencilTexture),e.setRenderTarget(y))}let D=T[he];D===void 0&&(D=new kn,D.layers.enable(he),D.viewport=new Lt,T[he]=D),D.matrix.fromArray(ge.transform.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale),D.projectionMatrix.fromArray(ge.projectionMatrix),D.projectionMatrixInverse.copy(D.projectionMatrix).invert(),D.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),he===0&&(w.matrix.copy(D.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),U===!0&&w.cameras.push(D)}const ne=r.enabledFeatures;if(ne&&ne.includes("depth-sensing")){const he=d.getDepthInformation(te[0]);he&&he.isValid&&he.texture&&v.init(e,he,r.renderState)}}for(let te=0;te<_.length;te++){const U=x[te],ne=_[te];U!==null&&ne!==void 0&&ne.update(U,j,u||a)}Q&&Q(B,j),j.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:j}),g=null}const we=new Rx;we.setAnimationLoop(oe),this.setAnimationLoop=function(B){Q=B},this.dispose=function(){}}}const Gr=new yi,BR=new st;function HR(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,bx(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,y,_,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?o(m,f):f.isMeshToonMaterial?(o(m,f),d(m,f)):f.isMeshPhongMaterial?(o(m,f),c(m,f)):f.isMeshStandardMaterial?(o(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(o(m,f),g(m,f)):f.isMeshDepthMaterial?o(m,f):f.isMeshDistanceMaterial?(o(m,f),v(m,f)):f.isMeshNormalMaterial?o(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&s(m,f)):f.isPointsMaterial?l(m,f,y,_):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function o(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===an&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===an&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const y=e.get(f),_=y.envMap,x=y.envMapRotation;_&&(m.envMap.value=_,Gr.copy(x),Gr.x*=-1,Gr.y*=-1,Gr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Gr.y*=-1,Gr.z*=-1),m.envMapRotation.value.setFromMatrix4(BR.makeRotationFromEuler(Gr)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function s(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,y,_){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*y,m.scale.value=_*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,y){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===an&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const y=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VR(t,e,n,i){let r={},o={},a=[];const s=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){const x=_.program;i.uniformBlockBinding(y,x)}function u(y,_){let x=r[y.id];x===void 0&&(g(y),x=c(y),r[y.id]=x,y.addEventListener("dispose",m));const S=_.program;i.updateUBOMapping(y,S);const M=e.render.frame;o[y.id]!==M&&(h(y),o[y.id]=M)}function c(y){const _=d();y.__bindingPointIndex=_;const x=t.createBuffer(),S=y.__size,M=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,S,M),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,x),x}function d(){for(let y=0;y<s;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const _=r[y.id],x=y.uniforms,S=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let M=0,b=x.length;M<b;M++){const C=Array.isArray(x[M])?x[M]:[x[M]];for(let T=0,w=C.length;T<w;T++){const P=C[T];if(p(P,M,T,S)===!0){const z=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let N=0;for(let I=0;I<G.length;I++){const k=G[I],J=v(k);typeof k=="number"||typeof k=="boolean"?(P.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,z+N,P.__data)):k.isMatrix3?(P.__data[0]=k.elements[0],P.__data[1]=k.elements[1],P.__data[2]=k.elements[2],P.__data[3]=0,P.__data[4]=k.elements[3],P.__data[5]=k.elements[4],P.__data[6]=k.elements[5],P.__data[7]=0,P.__data[8]=k.elements[6],P.__data[9]=k.elements[7],P.__data[10]=k.elements[8],P.__data[11]=0):(k.toArray(P.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(y,_,x,S){const M=y.value,b=_+"_"+x;if(S[b]===void 0)return typeof M=="number"||typeof M=="boolean"?S[b]=M:S[b]=M.clone(),!0;{const C=S[b];if(typeof M=="number"||typeof M=="boolean"){if(C!==M)return S[b]=M,!0}else if(C.equals(M)===!1)return C.copy(M),!0}return!1}function g(y){const _=y.uniforms;let x=0;const S=16;for(let b=0,C=_.length;b<C;b++){const T=Array.isArray(_[b])?_[b]:[_[b]];for(let w=0,P=T.length;w<P;w++){const z=T[w],G=Array.isArray(z.value)?z.value:[z.value];for(let N=0,I=G.length;N<I;N++){const k=G[N],J=v(k),F=x%S,ie=F%J.boundary,W=F+ie;x+=ie,W!==0&&S-W<J.storage&&(x+=S-W),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=J.storage}}}const M=x%S;return M>0&&(x+=S-M),y.__size=x,y.__cache={},this}function v(y){const _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function m(y){const _=y.target;_.removeEventListener("dispose",m);const x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete o[_.id]}function f(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},o={}}return{bind:l,update:u,dispose:f}}class GR{constructor(e={}){const{canvas:n=OE(),context:i=null,depth:r=!0,stencil:o=!1,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],y=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=On,this.toneMapping=br,this.toneMappingExposure=1;const _=this;let x=!1,S=0,M=0,b=null,C=-1,T=null;const w=new Lt,P=new Lt;let z=null;const G=new qe(0);let N=0,I=n.width,k=n.height,J=1,F=null,ie=null;const W=new Lt(0,0,I,k),Q=new Lt(0,0,I,k);let oe=!1;const we=new sm;let B=!1,j=!1;const te=new st,U=new O,ne=new Lt,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ge=!1;function Ae(){return b===null?J:1}let D=i;function it(R,V){return n.getContext(R,V)}try{const R={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Mc}`),n.addEventListener("webglcontextlost",q,!1),n.addEventListener("webglcontextrestored",ee,!1),n.addEventListener("webglcontextcreationerror",se,!1),D===null){const V="webgl2";if(D=it(V,R),D===null)throw it(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let Ue,je,Se,Ze,De,He,L,A,Z,ae,le,re,Pe,pe,_e,Ve,ce,ye,Xe,Oe,Me,ke,Be,dt;function E(){Ue=new YA(D),Ue.init(),ke=new IR(D,Ue),je=new GA(D,Ue,e,ke),Se=new PR(D),Ze=new QA(D),De=new gR,He=new DR(D,Ue,Se,De,je,ke,Ze),L=new jA(_),A=new qA(_),Z=new ob(D),Be=new HA(D,Z),ae=new KA(D,Z,Ze,Be),le=new eC(D,ae,Z,Ze),Xe=new JA(D,je,He),Ve=new WA(De),re=new mR(_,L,A,Ue,je,Be,Ve),Pe=new HR(_,De),pe=new _R,_e=new ER(Ue),ye=new BA(_,L,A,Se,le,h,l),ce=new RR(_,le,je),dt=new VR(D,Ze,je,Se),Oe=new VA(D,Ue,Ze),Me=new ZA(D,Ue,Ze),Ze.programs=re.programs,_.capabilities=je,_.extensions=Ue,_.properties=De,_.renderLists=pe,_.shadowMap=ce,_.state=Se,_.info=Ze}E();const X=new zR(_,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const R=Ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(R){R!==void 0&&(J=R,this.setSize(I,k,!1))},this.getSize=function(R){return R.set(I,k)},this.setSize=function(R,V,Y=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=R,k=V,n.width=Math.floor(R*J),n.height=Math.floor(V*J),Y===!0&&(n.style.width=R+"px",n.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(I*J,k*J).floor()},this.setDrawingBufferSize=function(R,V,Y){I=R,k=V,J=Y,n.width=Math.floor(R*Y),n.height=Math.floor(V*Y),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(w)},this.getViewport=function(R){return R.copy(W)},this.setViewport=function(R,V,Y,K){R.isVector4?W.set(R.x,R.y,R.z,R.w):W.set(R,V,Y,K),Se.viewport(w.copy(W).multiplyScalar(J).round())},this.getScissor=function(R){return R.copy(Q)},this.setScissor=function(R,V,Y,K){R.isVector4?Q.set(R.x,R.y,R.z,R.w):Q.set(R,V,Y,K),Se.scissor(P.copy(Q).multiplyScalar(J).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(R){Se.setScissorTest(oe=R)},this.setOpaqueSort=function(R){F=R},this.setTransparentSort=function(R){ie=R},this.getClearColor=function(R){return R.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(R=!0,V=!0,Y=!0){let K=0;if(R){let $=!1;if(b!==null){const de=b.texture.format;$=de===nm||de===tm||de===em}if($){const de=b.texture.type,ve=de===Ki||de===uo||de===Vs||de===Ma||de===Qp||de===Jp,Ee=ye.getClearColor(),be=ye.getClearAlpha(),Ne=Ee.r,ze=Ee.g,Le=Ee.b;ve?(p[0]=Ne,p[1]=ze,p[2]=Le,p[3]=be,D.clearBufferuiv(D.COLOR,0,p)):(g[0]=Ne,g[1]=ze,g[2]=Le,g[3]=be,D.clearBufferiv(D.COLOR,0,g))}else K|=D.COLOR_BUFFER_BIT}V&&(K|=D.DEPTH_BUFFER_BIT),Y&&(K|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",q,!1),n.removeEventListener("webglcontextrestored",ee,!1),n.removeEventListener("webglcontextcreationerror",se,!1),pe.dispose(),_e.dispose(),De.dispose(),L.dispose(),A.dispose(),le.dispose(),Be.dispose(),dt.dispose(),re.dispose(),X.dispose(),X.removeEventListener("sessionstart",Et),X.removeEventListener("sessionend",Ji),Vt.stop()};function q(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ee(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const R=Ze.autoReset,V=ce.enabled,Y=ce.autoUpdate,K=ce.needsUpdate,$=ce.type;E(),Ze.autoReset=R,ce.enabled=V,ce.autoUpdate=Y,ce.needsUpdate=K,ce.type=$}function se(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ce(R){const V=R.target;V.removeEventListener("dispose",Ce),Fe(V)}function Fe(R){Mt(R),De.remove(R)}function Mt(R){const V=De.get(R).programs;V!==void 0&&(V.forEach(function(Y){re.releaseProgram(Y)}),R.isShaderMaterial&&re.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,Y,K,$,de){V===null&&(V=he);const ve=$.isMesh&&$.matrixWorld.determinant()<0,Ee=jS(R,V,Y,K,$);Se.setMaterial(K,ve);let be=Y.index,Ne=1;if(K.wireframe===!0){if(be=ae.getWireframeAttribute(Y),be===void 0)return;Ne=2}const ze=Y.drawRange,Le=Y.attributes.position;let Je=ze.start*Ne,yt=(ze.start+ze.count)*Ne;de!==null&&(Je=Math.max(Je,de.start*Ne),yt=Math.min(yt,(de.start+de.count)*Ne)),be!==null?(Je=Math.max(Je,0),yt=Math.min(yt,be.count)):Le!=null&&(Je=Math.max(Je,0),yt=Math.min(yt,Le.count));const xt=yt-Je;if(xt<0||xt===1/0)return;Be.setup($,K,Ee,Y,be);let xn,et=Oe;if(be!==null&&(xn=Z.get(be),et=Me,et.setIndex(xn)),$.isMesh)K.wireframe===!0?(Se.setLineWidth(K.wireframeLinewidth*Ae()),et.setMode(D.LINES)):et.setMode(D.TRIANGLES);else if($.isLine){let Re=K.linewidth;Re===void 0&&(Re=1),Se.setLineWidth(Re*Ae()),$.isLineSegments?et.setMode(D.LINES):$.isLineLoop?et.setMode(D.LINE_LOOP):et.setMode(D.LINE_STRIP)}else $.isPoints?et.setMode(D.POINTS):$.isSprite&&et.setMode(D.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)et.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Ue.get("WEBGL_multi_draw"))et.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Re=$._multiDrawStarts,Gt=$._multiDrawCounts,tt=$._multiDrawCount,jn=be?Z.get(be).bytesPerElement:1,vo=De.get(K).currentProgram.getUniforms();for(let Sn=0;Sn<tt;Sn++)vo.setValue(D,"_gl_DrawID",Sn),et.render(Re[Sn]/jn,Gt[Sn])}else if($.isInstancedMesh)et.renderInstances(Je,xt,$.count);else if(Y.isInstancedBufferGeometry){const Re=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,Gt=Math.min(Y.instanceCount,Re);et.renderInstances(Je,xt,Gt)}else et.render(Je,xt)};function Ct(R,V,Y){R.transparent===!0&&R.side===Ui&&R.forceSinglePass===!1?(R.side=an,R.needsUpdate=!0,rl(R,V,Y),R.side=Cr,R.needsUpdate=!0,rl(R,V,Y),R.side=Ui):rl(R,V,Y)}this.compile=function(R,V,Y=null){Y===null&&(Y=R),m=_e.get(Y),m.init(V),y.push(m),Y.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),R!==Y&&R.traverseVisible(function($){$.isLight&&$.layers.test(V.layers)&&(m.pushLight($),$.castShadow&&m.pushShadow($))}),m.setupLights();const K=new Set;return R.traverse(function($){const de=$.material;if(de)if(Array.isArray(de))for(let ve=0;ve<de.length;ve++){const Ee=de[ve];Ct(Ee,Y,$),K.add(Ee)}else Ct(de,Y,$),K.add(de)}),y.pop(),m=null,K},this.compileAsync=function(R,V,Y=null){const K=this.compile(R,V,Y);return new Promise($=>{function de(){if(K.forEach(function(ve){De.get(ve).currentProgram.isReady()&&K.delete(ve)}),K.size===0){$(R);return}setTimeout(de,10)}Ue.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Ye=null;function Rt(R){Ye&&Ye(R)}function Et(){Vt.stop()}function Ji(){Vt.start()}const Vt=new Rx;Vt.setAnimationLoop(Rt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(R){Ye=R,X.setAnimationLoop(R),R===null?Vt.stop():Vt.start()},X.addEventListener("sessionstart",Et),X.addEventListener("sessionend",Ji),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(V),V=X.getCamera()),R.isScene===!0&&R.onBeforeRender(_,R,V,b),m=_e.get(R,y.length),m.init(V),y.push(m),te.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),we.setFromProjectionMatrix(te),j=this.localClippingEnabled,B=Ve.init(this.clippingPlanes,j),v=pe.get(R,f.length),v.init(),f.push(v),X.enabled===!0&&X.isPresenting===!0){const de=_.xr.getDepthSensingMesh();de!==null&&Mi(de,V,-1/0,_.sortObjects)}Mi(R,V,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(F,ie),ge=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,ge&&ye.addToRenderList(v,R),this.info.render.frame++,B===!0&&Ve.beginShadows();const Y=m.state.shadowsArray;ce.render(Y,R,V),B===!0&&Ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=v.opaque,$=v.transmissive;if(m.setupLights(),V.isArrayCamera){const de=V.cameras;if($.length>0)for(let ve=0,Ee=de.length;ve<Ee;ve++){const be=de[ve];Ia(K,$,R,be)}ge&&ye.render(R);for(let ve=0,Ee=de.length;ve<Ee;ve++){const be=de[ve];kr(v,R,be,be.viewport)}}else $.length>0&&Ia(K,$,R,V),ge&&ye.render(R),kr(v,R,V);b!==null&&(He.updateMultisampleRenderTarget(b),He.updateRenderTargetMipmap(b)),R.isScene===!0&&R.onAfterRender(_,R,V),Be.resetDefaultState(),C=-1,T=null,y.pop(),y.length>0?(m=y[y.length-1],B===!0&&Ve.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Mi(R,V,Y,K){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)Y=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||we.intersectsSprite(R)){K&&ne.setFromMatrixPosition(R.matrixWorld).applyMatrix4(te);const ve=le.update(R),Ee=R.material;Ee.visible&&v.push(R,ve,Ee,Y,ne.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||we.intersectsObject(R))){const ve=le.update(R),Ee=R.material;if(K&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ne.copy(R.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),ne.copy(ve.boundingSphere.center)),ne.applyMatrix4(R.matrixWorld).applyMatrix4(te)),Array.isArray(Ee)){const be=ve.groups;for(let Ne=0,ze=be.length;Ne<ze;Ne++){const Le=be[Ne],Je=Ee[Le.materialIndex];Je&&Je.visible&&v.push(R,ve,Je,Y,ne.z,Le)}}else Ee.visible&&v.push(R,ve,Ee,Y,ne.z,null)}}const de=R.children;for(let ve=0,Ee=de.length;ve<Ee;ve++)Mi(de[ve],V,Y,K)}function kr(R,V,Y,K){const $=R.opaque,de=R.transmissive,ve=R.transparent;m.setupLightsView(Y),B===!0&&Ve.setGlobalState(_.clippingPlanes,Y),K&&Se.viewport(w.copy(K)),$.length>0&&il($,V,Y),de.length>0&&il(de,V,Y),ve.length>0&&il(ve,V,Y),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Ia(R,V,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[K.id]===void 0&&(m.state.transmissionRenderTarget[K.id]=new Rr(1,1,{generateMipmaps:!0,type:Ue.has("EXT_color_buffer_half_float")||Ue.has("EXT_color_buffer_float")?Ra:Ki,minFilter:eo,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace}));const de=m.state.transmissionRenderTarget[K.id],ve=K.viewport||w;de.setSize(ve.z,ve.w);const Ee=_.getRenderTarget();_.setRenderTarget(de),_.getClearColor(G),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear(),ge&&ye.render(Y);const be=_.toneMapping;_.toneMapping=br;const Ne=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),m.setupLightsView(K),B===!0&&Ve.setGlobalState(_.clippingPlanes,K),il(R,Y,K),He.updateMultisampleRenderTarget(de),He.updateRenderTargetMipmap(de),Ue.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let Le=0,Je=V.length;Le<Je;Le++){const yt=V[Le],xt=yt.object,xn=yt.geometry,et=yt.material,Re=yt.group;if(et.side===Ui&&xt.layers.test(K.layers)){const Gt=et.side;et.side=an,et.needsUpdate=!0,Pm(xt,Y,K,xn,et,Re),et.side=Gt,et.needsUpdate=!0,ze=!0}}ze===!0&&(He.updateMultisampleRenderTarget(de),He.updateRenderTargetMipmap(de))}_.setRenderTarget(Ee),_.setClearColor(G,N),Ne!==void 0&&(K.viewport=Ne),_.toneMapping=be}function il(R,V,Y){const K=V.isScene===!0?V.overrideMaterial:null;for(let $=0,de=R.length;$<de;$++){const ve=R[$],Ee=ve.object,be=ve.geometry,Ne=K===null?ve.material:K,ze=ve.group;Ee.layers.test(Y.layers)&&Pm(Ee,V,Y,be,Ne,ze)}}function Pm(R,V,Y,K,$,de){R.onBeforeRender(_,V,Y,K,$,de),R.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),$.transparent===!0&&$.side===Ui&&$.forceSinglePass===!1?($.side=an,$.needsUpdate=!0,_.renderBufferDirect(Y,V,K,$,R,de),$.side=Cr,$.needsUpdate=!0,_.renderBufferDirect(Y,V,K,$,R,de),$.side=Ui):_.renderBufferDirect(Y,V,K,$,R,de),R.onAfterRender(_,V,Y,K,$,de)}function rl(R,V,Y){V.isScene!==!0&&(V=he);const K=De.get(R),$=m.state.lights,de=m.state.shadowsArray,ve=$.state.version,Ee=re.getParameters(R,$.state,de,V,Y),be=re.getProgramCacheKey(Ee);let Ne=K.programs;K.environment=R.isMeshStandardMaterial?V.environment:null,K.fog=V.fog,K.envMap=(R.isMeshStandardMaterial?A:L).get(R.envMap||K.environment),K.envMapRotation=K.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Ne===void 0&&(R.addEventListener("dispose",Ce),Ne=new Map,K.programs=Ne);let ze=Ne.get(be);if(ze!==void 0){if(K.currentProgram===ze&&K.lightsStateVersion===ve)return Dm(R,Ee),ze}else Ee.uniforms=re.getUniforms(R),R.onBeforeCompile(Ee,_),ze=re.acquireProgram(Ee,be),Ne.set(be,ze),K.uniforms=Ee.uniforms;const Le=K.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Le.clippingPlanes=Ve.uniform),Dm(R,Ee),K.needsLights=XS(R),K.lightsStateVersion=ve,K.needsLights&&(Le.ambientLightColor.value=$.state.ambient,Le.lightProbe.value=$.state.probe,Le.directionalLights.value=$.state.directional,Le.directionalLightShadows.value=$.state.directionalShadow,Le.spotLights.value=$.state.spot,Le.spotLightShadows.value=$.state.spotShadow,Le.rectAreaLights.value=$.state.rectArea,Le.ltc_1.value=$.state.rectAreaLTC1,Le.ltc_2.value=$.state.rectAreaLTC2,Le.pointLights.value=$.state.point,Le.pointLightShadows.value=$.state.pointShadow,Le.hemisphereLights.value=$.state.hemi,Le.directionalShadowMap.value=$.state.directionalShadowMap,Le.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Le.spotShadowMap.value=$.state.spotShadowMap,Le.spotLightMatrix.value=$.state.spotLightMatrix,Le.spotLightMap.value=$.state.spotLightMap,Le.pointShadowMap.value=$.state.pointShadowMap,Le.pointShadowMatrix.value=$.state.pointShadowMatrix),K.currentProgram=ze,K.uniformsList=null,ze}function Lm(R){if(R.uniformsList===null){const V=R.currentProgram.getUniforms();R.uniformsList=yu.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function Dm(R,V){const Y=De.get(R);Y.outputColorSpace=V.outputColorSpace,Y.batching=V.batching,Y.batchingColor=V.batchingColor,Y.instancing=V.instancing,Y.instancingColor=V.instancingColor,Y.instancingMorph=V.instancingMorph,Y.skinning=V.skinning,Y.morphTargets=V.morphTargets,Y.morphNormals=V.morphNormals,Y.morphColors=V.morphColors,Y.morphTargetsCount=V.morphTargetsCount,Y.numClippingPlanes=V.numClippingPlanes,Y.numIntersection=V.numClipIntersection,Y.vertexAlphas=V.vertexAlphas,Y.vertexTangents=V.vertexTangents,Y.toneMapping=V.toneMapping}function jS(R,V,Y,K,$){V.isScene!==!0&&(V=he),He.resetTextureUnits();const de=V.fog,ve=K.isMeshStandardMaterial?V.environment:null,Ee=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Ir,be=(K.isMeshStandardMaterial?A:L).get(K.envMap||ve),Ne=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,ze=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Le=!!Y.morphAttributes.position,Je=!!Y.morphAttributes.normal,yt=!!Y.morphAttributes.color;let xt=br;K.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(xt=_.toneMapping);const xn=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,et=xn!==void 0?xn.length:0,Re=De.get(K),Gt=m.state.lights;if(B===!0&&(j===!0||R!==T)){const Dn=R===T&&K.id===C;Ve.setState(K,R,Dn)}let tt=!1;K.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Gt.state.version||Re.outputColorSpace!==Ee||$.isBatchedMesh&&Re.batching===!1||!$.isBatchedMesh&&Re.batching===!0||$.isBatchedMesh&&Re.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Re.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Re.instancing===!1||!$.isInstancedMesh&&Re.instancing===!0||$.isSkinnedMesh&&Re.skinning===!1||!$.isSkinnedMesh&&Re.skinning===!0||$.isInstancedMesh&&Re.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Re.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Re.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Re.instancingMorph===!1&&$.morphTexture!==null||Re.envMap!==be||K.fog===!0&&Re.fog!==de||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==Ve.numPlanes||Re.numIntersection!==Ve.numIntersection)||Re.vertexAlphas!==Ne||Re.vertexTangents!==ze||Re.morphTargets!==Le||Re.morphNormals!==Je||Re.morphColors!==yt||Re.toneMapping!==xt||Re.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Re.__version=K.version);let jn=Re.currentProgram;tt===!0&&(jn=rl(K,V,$));let vo=!1,Sn=!1,kc=!1;const bt=jn.getUniforms(),er=Re.uniforms;if(Se.useProgram(jn.program)&&(vo=!0,Sn=!0,kc=!0),K.id!==C&&(C=K.id,Sn=!0),vo||T!==R){bt.setValue(D,"projectionMatrix",R.projectionMatrix),bt.setValue(D,"viewMatrix",R.matrixWorldInverse);const Dn=bt.map.cameraPosition;Dn!==void 0&&Dn.setValue(D,U.setFromMatrixPosition(R.matrixWorld)),je.logarithmicDepthBuffer&&bt.setValue(D,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&bt.setValue(D,"isOrthographic",R.isOrthographicCamera===!0),T!==R&&(T=R,Sn=!0,kc=!0)}if($.isSkinnedMesh){bt.setOptional(D,$,"bindMatrix"),bt.setOptional(D,$,"bindMatrixInverse");const Dn=$.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),bt.setValue(D,"boneTexture",Dn.boneTexture,He))}$.isBatchedMesh&&(bt.setOptional(D,$,"batchingTexture"),bt.setValue(D,"batchingTexture",$._matricesTexture,He),bt.setOptional(D,$,"batchingIdTexture"),bt.setValue(D,"batchingIdTexture",$._indirectTexture,He),bt.setOptional(D,$,"batchingColorTexture"),$._colorsTexture!==null&&bt.setValue(D,"batchingColorTexture",$._colorsTexture,He));const Fc=Y.morphAttributes;if((Fc.position!==void 0||Fc.normal!==void 0||Fc.color!==void 0)&&Xe.update($,Y,jn),(Sn||Re.receiveShadow!==$.receiveShadow)&&(Re.receiveShadow=$.receiveShadow,bt.setValue(D,"receiveShadow",$.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(er.envMap.value=be,er.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&V.environment!==null&&(er.envMapIntensity.value=V.environmentIntensity),Sn&&(bt.setValue(D,"toneMappingExposure",_.toneMappingExposure),Re.needsLights&&$S(er,kc),de&&K.fog===!0&&Pe.refreshFogUniforms(er,de),Pe.refreshMaterialUniforms(er,K,J,k,m.state.transmissionRenderTarget[R.id]),yu.upload(D,Lm(Re),er,He)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(yu.upload(D,Lm(Re),er,He),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&bt.setValue(D,"center",$.center),bt.setValue(D,"modelViewMatrix",$.modelViewMatrix),bt.setValue(D,"normalMatrix",$.normalMatrix),bt.setValue(D,"modelMatrix",$.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Dn=K.uniformsGroups;for(let zc=0,qS=Dn.length;zc<qS;zc++){const Im=Dn[zc];dt.update(Im,jn),dt.bind(Im,jn)}}return jn}function $S(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function XS(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(R,V,Y){De.get(R.texture).__webglTexture=V,De.get(R.depthTexture).__webglTexture=Y;const K=De.get(R);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||Ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){const Y=De.get(R);Y.__webglFramebuffer=V,Y.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,Y=0){b=R,S=V,M=Y;let K=!0,$=null,de=!1,ve=!1;if(R){const be=De.get(R);be.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(D.FRAMEBUFFER,null),K=!1):be.__webglFramebuffer===void 0?He.setupRenderTarget(R):be.__hasExternalTextures&&He.rebindTextures(R,De.get(R.texture).__webglTexture,De.get(R.depthTexture).__webglTexture);const Ne=R.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(ve=!0);const ze=De.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ze[V])?$=ze[V][Y]:$=ze[V],de=!0):R.samples>0&&He.useMultisampledRTT(R)===!1?$=De.get(R).__webglMultisampledFramebuffer:Array.isArray(ze)?$=ze[Y]:$=ze,w.copy(R.viewport),P.copy(R.scissor),z=R.scissorTest}else w.copy(W).multiplyScalar(J).floor(),P.copy(Q).multiplyScalar(J).floor(),z=oe;if(Se.bindFramebuffer(D.FRAMEBUFFER,$)&&K&&Se.drawBuffers(R,$),Se.viewport(w),Se.scissor(P),Se.setScissorTest(z),de){const be=De.get(R.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+V,be.__webglTexture,Y)}else if(ve){const be=De.get(R.texture),Ne=V||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,be.__webglTexture,Y||0,Ne)}C=-1},this.readRenderTargetPixels=function(R,V,Y,K,$,de,ve){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=De.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){Se.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const be=R.texture,Ne=be.format,ze=be.type;if(!je.textureFormatReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-K&&Y>=0&&Y<=R.height-$&&D.readPixels(V,Y,K,$,ke.convert(Ne),ke.convert(ze),de)}finally{const be=b!==null?De.get(b).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(R,V,Y,K,$,de,ve){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=De.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ve!==void 0&&(Ee=Ee[ve]),Ee){Se.bindFramebuffer(D.FRAMEBUFFER,Ee);try{const be=R.texture,Ne=be.format,ze=be.type;if(!je.textureFormatReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-K&&Y>=0&&Y<=R.height-$){const Le=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(V,Y,K,$,ke.convert(Ne),ke.convert(ze),0),D.flush();const Je=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await NE(D,Je,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de)}finally{D.deleteBuffer(Le),D.deleteSync(Je)}return de}}finally{const be=b!==null?De.get(b).__webglFramebuffer:null;Se.bindFramebuffer(D.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(R,V=null,Y=0){R.isTexture!==!0&&(fa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);const K=Math.pow(2,-Y),$=Math.floor(R.image.width*K),de=Math.floor(R.image.height*K),ve=V!==null?V.x:0,Ee=V!==null?V.y:0;He.setTexture2D(R,0),D.copyTexSubImage2D(D.TEXTURE_2D,Y,0,0,ve,Ee,$,de),Se.unbindTexture()},this.copyTextureToTexture=function(R,V,Y=null,K=null,$=0){R.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,R=arguments[1],V=arguments[2],$=arguments[3]||0,Y=null);let de,ve,Ee,be,Ne,ze;Y!==null?(de=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,Ee=Y.min.x,be=Y.min.y):(de=R.image.width,ve=R.image.height,Ee=0,be=0),K!==null?(Ne=K.x,ze=K.y):(Ne=0,ze=0);const Le=ke.convert(V.format),Je=ke.convert(V.type);He.setTexture2D(V,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const yt=D.getParameter(D.UNPACK_ROW_LENGTH),xt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),xn=D.getParameter(D.UNPACK_SKIP_PIXELS),et=D.getParameter(D.UNPACK_SKIP_ROWS),Re=D.getParameter(D.UNPACK_SKIP_IMAGES),Gt=R.isCompressedTexture?R.mipmaps[$]:R.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Gt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Gt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ee),D.pixelStorei(D.UNPACK_SKIP_ROWS,be),R.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,$,Ne,ze,de,ve,Le,Je,Gt.data):R.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,$,Ne,ze,Gt.width,Gt.height,Le,Gt.data):D.texSubImage2D(D.TEXTURE_2D,$,Ne,ze,de,ve,Le,Je,Gt),D.pixelStorei(D.UNPACK_ROW_LENGTH,yt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xn),D.pixelStorei(D.UNPACK_SKIP_ROWS,et),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Re),$===0&&V.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(R,V,Y=null,K=null,$=0){R.isTexture!==!0&&(fa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,R=arguments[2],V=arguments[3],$=arguments[4]||0);let de,ve,Ee,be,Ne,ze,Le,Je,yt;const xt=R.isCompressedTexture?R.mipmaps[$]:R.image;Y!==null?(de=Y.max.x-Y.min.x,ve=Y.max.y-Y.min.y,Ee=Y.max.z-Y.min.z,be=Y.min.x,Ne=Y.min.y,ze=Y.min.z):(de=xt.width,ve=xt.height,Ee=xt.depth,be=0,Ne=0,ze=0),K!==null?(Le=K.x,Je=K.y,yt=K.z):(Le=0,Je=0,yt=0);const xn=ke.convert(V.format),et=ke.convert(V.type);let Re;if(V.isData3DTexture)He.setTexture3D(V,0),Re=D.TEXTURE_3D;else if(V.isDataArrayTexture||V.isCompressedArrayTexture)He.setTexture2DArray(V,0),Re=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,V.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,V.unpackAlignment);const Gt=D.getParameter(D.UNPACK_ROW_LENGTH),tt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),jn=D.getParameter(D.UNPACK_SKIP_PIXELS),vo=D.getParameter(D.UNPACK_SKIP_ROWS),Sn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,xt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,xt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ne),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze),R.isDataTexture||R.isData3DTexture?D.texSubImage3D(Re,$,Le,Je,yt,de,ve,Ee,xn,et,xt.data):V.isCompressedArrayTexture?D.compressedTexSubImage3D(Re,$,Le,Je,yt,de,ve,Ee,xn,xt.data):D.texSubImage3D(Re,$,Le,Je,yt,de,ve,Ee,xn,et,xt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Gt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,tt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,jn),D.pixelStorei(D.UNPACK_SKIP_ROWS,vo),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Sn),$===0&&V.generateMipmaps&&D.generateMipmap(Re),Se.unbindTexture()},this.initRenderTarget=function(R){De.get(R).__webglFramebuffer===void 0&&He.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?He.setTextureCube(R,0):R.isData3DTexture?He.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?He.setTexture2DArray(R,0):He.setTexture2D(R,0),Se.unbindTexture()},this.resetState=function(){S=0,M=0,b=null,Se.reset(),Be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===im?"display-p3":"srgb",n.unpackColorSpace=nt.workingColorSpace===Ec?"display-p3":"srgb"}}class WR extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class jR{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Lh,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Wi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return fa("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,o=this.stride;r<o;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const en=new O;class Zu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyMatrix4(e),this.setXYZ(n,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.applyNormalMatrix(e),this.setXYZ(n,en.x,en.y,en.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)en.fromBufferAttribute(this,n),en.transformDirection(e),this.setXYZ(n,en.x,en.y,en.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=ni(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=rt(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=rt(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=ni(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=ni(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=ni(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=ni(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,o){return e=e*this.data.stride+this.offset,this.normalized&&(n=rt(n,this.array),i=rt(i,this.array),r=rt(r,this.array),o=rt(o,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=o,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return new Vn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)n.push(this.data.array[r+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Nx extends go{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ko;const Xa=new O,Fo=new O,zo=new O,Bo=new fe,qa=new fe,Ux=new st,Wl=new O,Ya=new O,jl=new O,Bv=new fe,zf=new fe,Hv=new fe;class $R extends Ht{constructor(e=new Nx){if(super(),this.isSprite=!0,this.type="Sprite",ko===void 0){ko=new _n;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jR(n,5);ko.setIndex([0,1,2,0,2,3]),ko.setAttribute("position",new Zu(i,3,0,!1)),ko.setAttribute("uv",new Zu(i,2,3,!1))}this.geometry=ko,this.material=e,this.center=new fe(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fo.setFromMatrixScale(this.matrixWorld),Ux.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),zo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fo.multiplyScalar(-zo.z);const i=this.material.rotation;let r,o;i!==0&&(o=Math.cos(i),r=Math.sin(i));const a=this.center;$l(Wl.set(-.5,-.5,0),zo,a,Fo,r,o),$l(Ya.set(.5,-.5,0),zo,a,Fo,r,o),$l(jl.set(.5,.5,0),zo,a,Fo,r,o),Bv.set(0,0),zf.set(1,0),Hv.set(1,1);let s=e.ray.intersectTriangle(Wl,Ya,jl,!1,Xa);if(s===null&&($l(Ya.set(-.5,.5,0),zo,a,Fo,r,o),zf.set(0,1),s=e.ray.intersectTriangle(Wl,jl,Ya,!1,Xa),s===null))return;const l=e.ray.origin.distanceTo(Xa);l<e.near||l>e.far||n.push({distance:l,point:Xa.clone(),uv:ii.getInterpolation(Xa,Wl,Ya,jl,Bv,zf,Hv,new fe),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function $l(t,e,n,i,r,o){Bo.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(qa.x=o*Bo.x-r*Bo.y,qa.y=r*Bo.x+o*Bo.y):qa.copy(Bo),t.copy(e),t.x+=qa.x,t.y+=qa.y,t.applyMatrix4(Ux)}class kx extends go{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qu=new O,Ju=new O,Vv=new st,Ka=new Tc,Xl=new bc,Bf=new O,Gv=new O;class XR extends Ht{constructor(e=new _n,n=new kx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,o=n.count;r<o;r++)Qu.fromBufferAttribute(n,r-1),Ju.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Qu.distanceTo(Ju);e.setAttribute("lineDistance",new It(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xl.copy(i.boundingSphere),Xl.applyMatrix4(r),Xl.radius+=o,e.ray.intersectsSphere(Xl)===!1)return;Vv.copy(r).invert(),Ka.copy(e.ray).applyMatrix4(Vv);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=u){const f=c.getX(v),y=c.getX(v+1),_=ql(this,e,Ka,l,f,y);_&&n.push(_)}if(this.isLineLoop){const v=c.getX(g-1),m=c.getX(p),f=ql(this,e,Ka,l,v,m);f&&n.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=p,m=g-1;v<m;v+=u){const f=ql(this,e,Ka,l,v,v+1);f&&n.push(f)}if(this.isLineLoop){const v=ql(this,e,Ka,l,g-1,p);v&&n.push(v)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function ql(t,e,n,i,r,o){const a=t.geometry.attributes.position;if(Qu.fromBufferAttribute(a,r),Ju.fromBufferAttribute(a,o),n.distanceSqToSegment(Qu,Ju,Bf,Gv)>i)return;Bf.applyMatrix4(t.matrixWorld);const l=e.ray.origin.distanceTo(Bf);if(!(l<e.near||l>e.far))return{distance:l,point:Gv.clone().applyMatrix4(t.matrixWorld),index:r,face:null,faceIndex:null,object:t}}class Qi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),o=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),o+=i.distanceTo(r),n.push(o),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const o=i.length;let a;n?a=n:a=e*i[o-1];let s=0,l=o-1,u;for(;s<=l;)if(r=Math.floor(s+(l-s)/2),u=i[r]-a,u<0)s=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(o-1);const c=i[r],h=i[r+1]-c,p=(a-c)/h;return(r+p)/(o-1)}getTangent(e,n){let r=e-1e-4,o=e+1e-4;r<0&&(r=0),o>1&&(o=1);const a=this.getPoint(r),s=this.getPoint(o),l=n||(a.isVector2?new fe:new O);return l.copy(s).sub(a).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new O,r=[],o=[],a=[],s=new O,l=new st;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new O)}o[0]=new O,a[0]=new O;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),d<=u&&(u=d,i.set(0,1,0)),h<=u&&i.set(0,0,1),s.crossVectors(r[0],i).normalize(),o[0].crossVectors(r[0],s),a[0].crossVectors(r[0],o[0]);for(let p=1;p<=e;p++){if(o[p]=o[p-1].clone(),a[p]=a[p-1].clone(),s.crossVectors(r[p-1],r[p]),s.length()>Number.EPSILON){s.normalize();const g=Math.acos(zt(r[p-1].dot(r[p]),-1,1));o[p].applyMatrix4(l.makeRotationAxis(s,g))}a[p].crossVectors(r[p],o[p])}if(n===!0){let p=Math.acos(zt(o[0].dot(o[e]),-1,1));p/=e,r[0].dot(s.crossVectors(o[0],o[e]))>0&&(p=-p);for(let g=1;g<=e;g++)o[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],o[g])}return{tangents:r,normals:o,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Fx extends Qi{constructor(e=0,n=0,i=1,r=1,o=0,a=Math.PI*2,s=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=o,this.aEndAngle=a,this.aClockwise=s,this.aRotation=l}getPoint(e,n=new fe){const i=n,r=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const a=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=r;for(;o>r;)o-=r;o<Number.EPSILON&&(a?o=0:o=r),this.aClockwise===!0&&!a&&(o===r?o=-r:o=o-r);const s=this.aStartAngle+e*o;let l=this.aX+this.xRadius*Math.cos(s),u=this.aY+this.yRadius*Math.sin(s);if(this.aRotation!==0){const c=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=u-this.aY;l=h*c-p*d+this.aX,u=h*d+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class qR extends Fx{constructor(e,n,i,r,o,a){super(e,n,i,i,r,o,a),this.isArcCurve=!0,this.type="ArcCurve"}}function cm(){let t=0,e=0,n=0,i=0;function r(o,a,s,l){t=o,e=s,n=-3*o+3*a-2*s-l,i=2*o-2*a+s+l}return{initCatmullRom:function(o,a,s,l,u){r(a,s,u*(s-o),u*(l-a))},initNonuniformCatmullRom:function(o,a,s,l,u,c,d){let h=(a-o)/u-(s-o)/(u+c)+(s-a)/c,p=(s-a)/c-(l-a)/(c+d)+(l-s)/d;h*=c,p*=c,r(a,s,h,p)},calc:function(o){const a=o*o,s=a*o;return t+e*o+n*a+i*s}}}const Yl=new O,Hf=new cm,Vf=new cm,Gf=new cm;class YR extends Qi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new O){const i=n,r=this.points,o=r.length,a=(o-(this.closed?0:1))*e;let s=Math.floor(a),l=a-s;this.closed?s+=s>0?0:(Math.floor(Math.abs(s)/o)+1)*o:l===0&&s===o-1&&(s=o-2,l=1);let u,c;this.closed||s>0?u=r[(s-1)%o]:(Yl.subVectors(r[0],r[1]).add(r[0]),u=Yl);const d=r[s%o],h=r[(s+1)%o];if(this.closed||s+2<o?c=r[(s+2)%o]:(Yl.subVectors(r[o-1],r[o-2]).add(r[o-1]),c=Yl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(d),p),v=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(c),p);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),Hf.initNonuniformCatmullRom(u.x,d.x,h.x,c.x,g,v,m),Vf.initNonuniformCatmullRom(u.y,d.y,h.y,c.y,g,v,m),Gf.initNonuniformCatmullRom(u.z,d.z,h.z,c.z,g,v,m)}else this.curveType==="catmullrom"&&(Hf.initCatmullRom(u.x,d.x,h.x,c.x,this.tension),Vf.initCatmullRom(u.y,d.y,h.y,c.y,this.tension),Gf.initCatmullRom(u.z,d.z,h.z,c.z,this.tension));return i.set(Hf.calc(l),Vf.calc(l),Gf.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new O().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Wv(t,e,n,i,r){const o=(i-e)*.5,a=(r-n)*.5,s=t*t,l=t*s;return(2*n-2*i+o+a)*l+(-3*n+3*i-2*o-a)*s+o*t+n}function KR(t,e){const n=1-t;return n*n*e}function ZR(t,e){return 2*(1-t)*t*e}function QR(t,e){return t*t*e}function ws(t,e,n,i){return KR(t,e)+ZR(t,n)+QR(t,i)}function JR(t,e){const n=1-t;return n*n*n*e}function eP(t,e){const n=1-t;return 3*n*n*t*e}function tP(t,e){return 3*(1-t)*t*t*e}function nP(t,e){return t*t*t*e}function Es(t,e,n,i,r){return JR(t,e)+eP(t,n)+tP(t,i)+nP(t,r)}class iP extends Qi{constructor(e=new fe,n=new fe,i=new fe,r=new fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new fe){const i=n,r=this.v0,o=this.v1,a=this.v2,s=this.v3;return i.set(Es(e,r.x,o.x,a.x,s.x),Es(e,r.y,o.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class zx extends Qi{constructor(e=new O,n=new O,i=new O,r=new O){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new O){const i=n,r=this.v0,o=this.v1,a=this.v2,s=this.v3;return i.set(Es(e,r.x,o.x,a.x,s.x),Es(e,r.y,o.y,a.y,s.y),Es(e,r.z,o.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class rP extends Qi{constructor(e=new fe,n=new fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new fe){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new fe){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class oP extends Qi{constructor(e=new O,n=new O){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new O){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new O){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class aP extends Qi{constructor(e=new fe,n=new fe,i=new fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new fe){const i=n,r=this.v0,o=this.v1,a=this.v2;return i.set(ws(e,r.x,o.x,a.x),ws(e,r.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fm extends Qi{constructor(e=new O,n=new O,i=new O){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new O){const i=n,r=this.v0,o=this.v1,a=this.v2;return i.set(ws(e,r.x,o.x,a.x),ws(e,r.y,o.y,a.y),ws(e,r.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class sP extends Qi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new fe){const i=n,r=this.points,o=(r.length-1)*e,a=Math.floor(o),s=o-a,l=r[a===0?a:a-1],u=r[a],c=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return i.set(Wv(s,l.x,u.x,c.x,d.x),Wv(s,l.y,u.y,c.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new fe().fromArray(r))}return this}}var lP=Object.freeze({__proto__:null,ArcCurve:qR,CatmullRomCurve3:YR,CubicBezierCurve:iP,CubicBezierCurve3:zx,EllipseCurve:Fx,LineCurve:rP,LineCurve3:oP,QuadraticBezierCurve:aP,QuadraticBezierCurve3:fm,SplineCurve:sP});class Rc extends _n{constructor(e=1,n=1,i=1,r=32,o=1,a=!1,s=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:o,openEnded:a,thetaStart:s,thetaLength:l};const u=this;r=Math.floor(r),o=Math.floor(o);const c=[],d=[],h=[],p=[];let g=0;const v=[],m=i/2;let f=0;y(),a===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(c),this.setAttribute("position",new It(d,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2));function y(){const x=new O,S=new O;let M=0;const b=(n-e)/i;for(let C=0;C<=o;C++){const T=[],w=C/o,P=w*(n-e)+e;for(let z=0;z<=r;z++){const G=z/r,N=G*l+s,I=Math.sin(N),k=Math.cos(N);S.x=P*I,S.y=-w*i+m,S.z=P*k,d.push(S.x,S.y,S.z),x.set(I,b,k).normalize(),h.push(x.x,x.y,x.z),p.push(G,1-w),T.push(g++)}v.push(T)}for(let C=0;C<r;C++)for(let T=0;T<o;T++){const w=v[T][C],P=v[T+1][C],z=v[T+1][C+1],G=v[T][C+1];c.push(w,P,G),c.push(P,z,G),M+=6}u.addGroup(f,M,0),f+=M}function _(x){const S=g,M=new fe,b=new O;let C=0;const T=x===!0?e:n,w=x===!0?1:-1;for(let z=1;z<=r;z++)d.push(0,m*w,0),h.push(0,w,0),p.push(.5,.5),g++;const P=g;for(let z=0;z<=r;z++){const N=z/r*l+s,I=Math.cos(N),k=Math.sin(N);b.x=T*k,b.y=m*w,b.z=T*I,d.push(b.x,b.y,b.z),h.push(0,w,0),M.x=I*.5+.5,M.y=k*.5*w+.5,p.push(M.x,M.y),g++}for(let z=0;z<r;z++){const G=S+z,N=P+z;x===!0?c.push(N,N+1,G):c.push(N+1,N,G),C+=3}u.addGroup(f,C,x===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rc(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class dm extends Rc{constructor(e=1,n=1,i=32,r=1,o=!1,a=0,s=Math.PI*2){super(0,e,n,i,r,o,a,s),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:s}}static fromJSON(e){return new dm(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Pc extends _n{constructor(e=1,n=32,i=16,r=0,o=Math.PI*2,a=0,s=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:o,thetaStart:a,thetaLength:s},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+s,Math.PI);let u=0;const c=[],d=new O,h=new O,p=[],g=[],v=[],m=[];for(let f=0;f<=i;f++){const y=[],_=f/i;let x=0;f===0&&a===0?x=.5/n:f===i&&l===Math.PI&&(x=-.5/n);for(let S=0;S<=n;S++){const M=S/n;d.x=-e*Math.cos(r+M*o)*Math.sin(a+_*s),d.y=e*Math.cos(a+_*s),d.z=e*Math.sin(r+M*o)*Math.sin(a+_*s),g.push(d.x,d.y,d.z),h.copy(d).normalize(),v.push(h.x,h.y,h.z),m.push(M+x,1-_),y.push(u++)}c.push(y)}for(let f=0;f<i;f++)for(let y=0;y<n;y++){const _=c[f][y+1],x=c[f][y],S=c[f+1][y],M=c[f+1][y+1];(f!==0||a>0)&&p.push(_,x,M),(f!==i-1||l<Math.PI)&&p.push(x,S,M)}this.setIndex(p),this.setAttribute("position",new It(g,3)),this.setAttribute("normal",new It(v,3)),this.setAttribute("uv",new It(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class hm extends _n{constructor(e=new fm(new O(-1,-1,0),new O(-1,1,0),new O(1,1,0)),n=64,i=1,r=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:o};const a=e.computeFrenetFrames(n,o);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const s=new O,l=new O,u=new fe;let c=new O;const d=[],h=[],p=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new It(d,3)),this.setAttribute("normal",new It(h,3)),this.setAttribute("uv",new It(p,2));function v(){for(let _=0;_<n;_++)m(_);m(o===!1?n:0),y(),f()}function m(_){c=e.getPointAt(_/n,c);const x=a.normals[_],S=a.binormals[_];for(let M=0;M<=r;M++){const b=M/r*Math.PI*2,C=Math.sin(b),T=-Math.cos(b);l.x=T*x.x+C*S.x,l.y=T*x.y+C*S.y,l.z=T*x.z+C*S.z,l.normalize(),h.push(l.x,l.y,l.z),s.x=c.x+i*l.x,s.y=c.y+i*l.y,s.z=c.z+i*l.z,d.push(s.x,s.y,s.z)}}function f(){for(let _=1;_<=n;_++)for(let x=1;x<=r;x++){const S=(r+1)*(_-1)+(x-1),M=(r+1)*_+(x-1),b=(r+1)*_+x,C=(r+1)*(_-1)+x;g.push(S,M,C),g.push(M,b,C)}}function y(){for(let _=0;_<=n;_++)for(let x=0;x<=r;x++)u.x=_/n,u.y=x/r,p.push(u.x,u.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new hm(new lP[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class uP extends go{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=vx,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=Kp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const jv={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class cP{constructor(e,n,i){const r=this;let o=!1,a=0,s=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){s++,o===!1&&r.onStart!==void 0&&r.onStart(c,a,s),o=!0},this.itemEnd=function(c){a++,r.onProgress!==void 0&&r.onProgress(c,a,s),a===s&&(o=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,d){return u.push(c,d),this},this.removeHandler=function(c){const d=u.indexOf(c);return d!==-1&&u.splice(d,2),this},this.getHandler=function(c){for(let d=0,h=u.length;d<h;d+=2){const p=u[d],g=u[d+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const fP=new cP;class pm{constructor(e){this.manager=e!==void 0?e:fP,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,o){i.load(e,r,n,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}pm.DEFAULT_MATERIAL_NAME="__DEFAULT";class dP extends pm{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=this,a=jv.get(e);if(a!==void 0)return o.manager.itemStart(e),setTimeout(function(){n&&n(a),o.manager.itemEnd(e)},0),a;const s=Ws("img");function l(){c(),jv.add(e,this),n&&n(this),o.manager.itemEnd(e)}function u(d){c(),r&&r(d),o.manager.itemError(e),o.manager.itemEnd(e)}function c(){s.removeEventListener("load",l,!1),s.removeEventListener("error",u,!1)}return s.addEventListener("load",l,!1),s.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(s.crossOrigin=this.crossOrigin),o.manager.itemStart(e),s.src=e,s}}class Bx extends pm{constructor(e){super(e)}load(e,n,i,r){const o=new sn,a=new dP(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(s){o.image=s,o.needsUpdate=!0,n!==void 0&&n(o)},i,r),o}}class Hx extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Wf=new st,$v=new O,Xv=new O;class hP{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sm,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;$v.setFromMatrixPosition(e.matrixWorld),n.position.copy($v),Xv.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Xv),n.updateMatrixWorld(),Wf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Wf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pP extends hP{constructor(){super(new lm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class mP extends Hx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new pP}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class gP extends Hx{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}class Vx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=qv(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=qv();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function qv(){return(typeof performance>"u"?Date:performance).now()}const Yv=new st;class Gx{constructor(e,n,i=0,r=1/0){this.ray=new Tc(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new om,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return Yv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yv),this}intersectObject(e,n=!0,i=[]){return Oh(e,this,i,n),i.sort(Kv),i}intersectObjects(e,n=!0,i=[]){for(let r=0,o=e.length;r<o;r++)Oh(e[r],this,i,n);return i.sort(Kv),i}}function Kv(t,e){return t.distance-e.distance}function Oh(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const o=t.children;for(let a=0,s=o.length;a<s;a++)Oh(o[a],e,n,!0)}}class Nh{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(zt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);function vP(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;l=!1}else for(;!(l=(i=o.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(c){u=!0,r=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw r}}return s}}function _P(t,e,n){return e=TP(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Zv(t,e){return SP(t)||vP(t,e)||Wx(t,e)||EP()}function yP(t){return xP(t)||MP(t)||Wx(t)||wP()}function xP(t){if(Array.isArray(t))return Uh(t)}function SP(t){if(Array.isArray(t))return t}function MP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Wx(t,e){if(t){if(typeof t=="string")return Uh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Uh(t,e)}}function Uh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function wP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function EP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function bP(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function TP(t){var e=bP(t,"string");return typeof e=="symbol"?e:String(e)}var AP=function(e,n){var i=new Set(n);return Object.assign.apply(Object,[{}].concat(yP(Object.entries(e).filter(function(r){var o=Zv(r,1),a=o[0];return!i.has(a)}).map(function(r){var o=Zv(r,2),a=o[0],s=o[1];return _P({},a,s)}))))};/*! fromentries. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var CP=function(e){return[...e].reduce((n,[i,r])=>(n[i]=r,n),{})};const Qv=qs(CP);function RP(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e!==0)for(;!(l=(i=o.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(c){u=!0,r=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw r}}return s}}function kh(t){"@babel/helpers - typeof";return kh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},kh(t)}function jx(t,e){return LP(t)||RP(t,e)||$x(t,e)||OP()}function Jv(t){return PP(t)||DP(t)||$x(t)||IP()}function PP(t){if(Array.isArray(t))return Fh(t)}function LP(t){if(Array.isArray(t))return t}function DP(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $x(t,e){if(t){if(typeof t=="string")return Fh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fh(t,e)}}function Fh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function IP(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function OP(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function NP(t,e){var n=kh(e)==="object"?e:{wrapperElementType:e,methodNames:(arguments.length<=2?void 0:arguments[2])||void 0,initPropNames:(arguments.length<=3?void 0:arguments[3])||void 0},i=n.wrapperElementType,r=i===void 0?"div":i,o=n.nodeMapper,a=o===void 0?function(d){return d}:o,s=n.methodNames,l=s===void 0?[]:s,u=n.initPropNames,c=u===void 0?[]:u;return kt.forwardRef(function(d,h){var p=kt.useRef(),g=kt.useState({}),v=jx(g,2),m=v[0],f=v[1];kt.useEffect(function(){return f(d)});var y=kt.useMemo(function(){var S=Qv(c.filter(function(M){return d.hasOwnProperty(M)}).map(function(M){return[M,d[M]]}));return t(S)},[]);e0(function(){y(a(p.current))},kt.useLayoutEffect),e0(function(){return y._destructor instanceof Function?y._destructor:void 0});var _=kt.useCallback(function(S){for(var M=arguments.length,b=new Array(M>1?M-1:0),C=1;C<M;C++)b[C-1]=arguments[C];return y[S]instanceof Function?y[S].apply(y,b):void 0},[y]),x=AP(d,[].concat(Jv(l),Jv(c)));return Object.keys(x).filter(function(S){return m[S]!==d[S]}).forEach(function(S){return _(S,d[S])}),kt.useImperativeHandle(h,function(){return Qv(l.map(function(S){return[S,function(){for(var M=arguments.length,b=new Array(M),C=0;C<M;C++)b[C]=arguments[C];return _.apply(void 0,[S].concat(b))}]}))}),cM.createElement(r,{ref:p})})}function e0(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:kt.useEffect,n=kt.useRef(),i=kt.useRef(!1),r=kt.useRef(!1),o=kt.useState(0),a=jx(o,2);a[0];var s=a[1];i.current&&(r.current=!0),e(function(){return i.current||(n.current=t(),i.current=!0),s(function(l){return l+1}),function(){r.current&&n.current&&n.current()}},[])}const Ho=new Oi,lr=new Gx,Ci=new fe,t0=new O,jf=new fe,Kl=new fe,Zl=new O,$f=new O,n0=new st,i0=new O,r0=new O;class UP extends ci{constructor(e,n,i){super(),i.style.touchAction="none";let r=null,o=null;const a=[];this.mode="translate",this.rotateSpeed=1;const s=this;function l(){i.addEventListener("pointermove",g),i.addEventListener("pointerdown",v),i.addEventListener("pointerup",m),i.addEventListener("pointerleave",m)}function u(){i.removeEventListener("pointermove",g),i.removeEventListener("pointerdown",v),i.removeEventListener("pointerup",m),i.removeEventListener("pointerleave",m),i.style.cursor=""}function c(){u()}function d(){return e}function h(_){e=_}function p(){return lr}function g(_){if(s.enabled!==!1){if(f(_),lr.setFromCamera(Ci,n),r)s.mode==="translate"?lr.ray.intersectPlane(Ho,Zl)&&r.position.copy(Zl.sub(t0).applyMatrix4(n0)):s.mode==="rotate"&&(jf.subVectors(Ci,Kl).multiplyScalar(s.rotateSpeed),r.rotateOnWorldAxis(i0,jf.x),r.rotateOnWorldAxis(r0.normalize(),-jf.y)),s.dispatchEvent({type:"drag",object:r}),Kl.copy(Ci);else if(_.pointerType==="mouse"||_.pointerType==="pen")if(a.length=0,lr.setFromCamera(Ci,n),lr.intersectObjects(e,s.recursive,a),a.length>0){const x=a[0].object;Ho.setFromNormalAndCoplanarPoint(n.getWorldDirection(Ho.normal),$f.setFromMatrixPosition(x.matrixWorld)),o!==x&&o!==null&&(s.dispatchEvent({type:"hoveroff",object:o}),i.style.cursor="auto",o=null),o!==x&&(s.dispatchEvent({type:"hoveron",object:x}),i.style.cursor="pointer",o=x)}else o!==null&&(s.dispatchEvent({type:"hoveroff",object:o}),i.style.cursor="auto",o=null);Kl.copy(Ci)}}function v(_){s.enabled!==!1&&(f(_),a.length=0,lr.setFromCamera(Ci,n),lr.intersectObjects(e,s.recursive,a),a.length>0&&(s.transformGroup===!0?r=y(a[0].object):r=a[0].object,Ho.setFromNormalAndCoplanarPoint(n.getWorldDirection(Ho.normal),$f.setFromMatrixPosition(r.matrixWorld)),lr.ray.intersectPlane(Ho,Zl)&&(s.mode==="translate"?(n0.copy(r.parent.matrixWorld).invert(),t0.copy(Zl).sub($f.setFromMatrixPosition(r.matrixWorld))):s.mode==="rotate"&&(i0.set(0,1,0).applyQuaternion(n.quaternion).normalize(),r0.set(1,0,0).applyQuaternion(n.quaternion).normalize())),i.style.cursor="move",s.dispatchEvent({type:"dragstart",object:r})),Kl.copy(Ci))}function m(){s.enabled!==!1&&(r&&(s.dispatchEvent({type:"dragend",object:r}),r=null),i.style.cursor=o?"pointer":"auto")}function f(_){const x=i.getBoundingClientRect();Ci.x=(_.clientX-x.left)/x.width*2-1,Ci.y=-(_.clientY-x.top)/x.height*2+1}function y(_,x=null){return _.isGroup&&(x=_),_.parent===null?x:y(_.parent,x)}l(),this.enabled=!0,this.recursive=!0,this.transformGroup=!1,this.activate=l,this.deactivate=u,this.dispose=c,this.getObjects=d,this.getRaycaster=p,this.setObjects=h}}function kP(t,e,n){var i,r=1;t==null&&(t=0),e==null&&(e=0),n==null&&(n=0);function o(){var a,s=i.length,l,u=0,c=0,d=0;for(a=0;a<s;++a)l=i[a],u+=l.x||0,c+=l.y||0,d+=l.z||0;for(u=(u/s-t)*r,c=(c/s-e)*r,d=(d/s-n)*r,a=0;a<s;++a)l=i[a],u&&(l.x-=u),c&&(l.y-=c),d&&(l.z-=d)}return o.initialize=function(a){i=a},o.x=function(a){return arguments.length?(t=+a,o):t},o.y=function(a){return arguments.length?(e=+a,o):e},o.z=function(a){return arguments.length?(n=+a,o):n},o.strength=function(a){return arguments.length?(r=+a,o):r},o}function FP(t){const e=+this._x.call(null,t);return Xx(this.cover(e),e,t)}function Xx(t,e,n){if(isNaN(e))return t;var i,r=t._root,o={data:n},a=t._x0,s=t._x1,l,u,c,d,h;if(!r)return t._root=o,t;for(;r.length;)if((c=e>=(l=(a+s)/2))?a=l:s=l,i=r,!(r=r[d=+c]))return i[d]=o,t;if(u=+t._x.call(null,r.data),e===u)return o.next=r,i?i[d]=o:t._root=o,t;do i=i?i[d]=new Array(2):t._root=new Array(2),(c=e>=(l=(a+s)/2))?a=l:s=l;while((d=+c)==(h=+(u>=l)));return i[h]=r,i[d]=o,t}function zP(t){Array.isArray(t)||(t=Array.from(t));const e=t.length,n=new Float64Array(e);let i=1/0,r=-1/0;for(let o=0,a;o<e;++o)isNaN(a=+this._x.call(null,t[o]))||(n[o]=a,a<i&&(i=a),a>r&&(r=a));if(i>r)return this;this.cover(i).cover(r);for(let o=0;o<e;++o)Xx(this,n[o],t[o]);return this}function BP(t){if(isNaN(t=+t))return this;var e=this._x0,n=this._x1;if(isNaN(e))n=(e=Math.floor(t))+1;else{for(var i=n-e||1,r=this._root,o,a;e>t||t>=n;)switch(a=+(t<e),o=new Array(2),o[a]=r,r=o,i*=2,a){case 0:n=e+i;break;case 1:e=n-i;break}this._root&&this._root.length&&(this._root=r)}return this._x0=e,this._x1=n,this}function HP(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function VP(t){return arguments.length?this.cover(+t[0][0]).cover(+t[1][0]):isNaN(this._x0)?void 0:[[this._x0],[this._x1]]}function ji(t,e,n){this.node=t,this.x0=e,this.x1=n}function GP(t,e){var n,i=this._x0,r,o,a=this._x1,s=[],l=this._root,u,c;for(l&&s.push(new ji(l,i,a)),e==null?e=1/0:(i=t-e,a=t+e);u=s.pop();)if(!(!(l=u.node)||(r=u.x0)>a||(o=u.x1)<i))if(l.length){var d=(r+o)/2;s.push(new ji(l[1],d,o),new ji(l[0],r,d)),(c=+(t>=d))&&(u=s[s.length-1],s[s.length-1]=s[s.length-1-c],s[s.length-1-c]=u)}else{var h=Math.abs(t-+this._x.call(null,l.data));h<e&&(e=h,i=t-h,a=t+h,n=l.data)}return n}function WP(t){if(isNaN(l=+this._x.call(null,t)))return this;var e,n=this._root,i,r,o,a=this._x0,s=this._x1,l,u,c,d,h;if(!n)return this;if(n.length)for(;;){if((c=l>=(u=(a+s)/2))?a=u:s=u,e=n,!(n=n[d=+c]))return this;if(!n.length)break;e[d+1&1]&&(i=e,h=d)}for(;n.data!==t;)if(r=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,r?(o?r.next=o:delete r.next,this):e?(o?e[d]=o:delete e[d],(n=e[0]||e[1])&&n===(e[1]||e[0])&&!n.length&&(i?i[h]=n:this._root=n),this):(this._root=o,this)}function jP(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function $P(){return this._root}function XP(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function qP(t){var e=[],n,i=this._root,r,o,a;for(i&&e.push(new ji(i,this._x0,this._x1));n=e.pop();)if(!t(i=n.node,o=n.x0,a=n.x1)&&i.length){var s=(o+a)/2;(r=i[1])&&e.push(new ji(r,s,a)),(r=i[0])&&e.push(new ji(r,o,s))}return this}function YP(t){var e=[],n=[],i;for(this._root&&e.push(new ji(this._root,this._x0,this._x1));i=e.pop();){var r=i.node;if(r.length){var o,a=i.x0,s=i.x1,l=(a+s)/2;(o=r[0])&&e.push(new ji(o,a,l)),(o=r[1])&&e.push(new ji(o,l,s))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.x1);return this}function KP(t){return t[0]}function ZP(t){return arguments.length?(this._x=t,this):this._x}function qx(t,e){var n=new mm(e??KP,NaN,NaN);return t==null?n:n.addAll(t)}function mm(t,e,n){this._x=t,this._x0=e,this._x1=n,this._root=void 0}function o0(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var yn=qx.prototype=mm.prototype;yn.copy=function(){var t=new mm(this._x,this._x0,this._x1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=o0(e),t;for(n=[{source:e,target:t._root=new Array(2)}];e=n.pop();)for(var r=0;r<2;++r)(i=e.source[r])&&(i.length?n.push({source:i,target:e.target[r]=new Array(2)}):e.target[r]=o0(i));return t};yn.add=FP;yn.addAll=zP;yn.cover=BP;yn.data=HP;yn.extent=VP;yn.find=GP;yn.remove=WP;yn.removeAll=jP;yn.root=$P;yn.size=XP;yn.visit=qP;yn.visitAfter=YP;yn.x=ZP;function QP(t){const e=+this._x.call(null,t),n=+this._y.call(null,t);return Yx(this.cover(e,n),e,n,t)}function Yx(t,e,n,i){if(isNaN(e)||isNaN(n))return t;var r,o=t._root,a={data:i},s=t._x0,l=t._y0,u=t._x1,c=t._y1,d,h,p,g,v,m,f,y;if(!o)return t._root=a,t;for(;o.length;)if((v=e>=(d=(s+u)/2))?s=d:u=d,(m=n>=(h=(l+c)/2))?l=h:c=h,r=o,!(o=o[f=m<<1|v]))return r[f]=a,t;if(p=+t._x.call(null,o.data),g=+t._y.call(null,o.data),e===p&&n===g)return a.next=o,r?r[f]=a:t._root=a,t;do r=r?r[f]=new Array(4):t._root=new Array(4),(v=e>=(d=(s+u)/2))?s=d:u=d,(m=n>=(h=(l+c)/2))?l=h:c=h;while((f=m<<1|v)===(y=(g>=h)<<1|p>=d));return r[y]=o,r[f]=a,t}function JP(t){var e,n,i=t.length,r,o,a=new Array(i),s=new Array(i),l=1/0,u=1/0,c=-1/0,d=-1/0;for(n=0;n<i;++n)isNaN(r=+this._x.call(null,e=t[n]))||isNaN(o=+this._y.call(null,e))||(a[n]=r,s[n]=o,r<l&&(l=r),r>c&&(c=r),o<u&&(u=o),o>d&&(d=o));if(l>c||u>d)return this;for(this.cover(l,u).cover(c,d),n=0;n<i;++n)Yx(this,a[n],s[n],t[n]);return this}function e2(t,e){if(isNaN(t=+t)||isNaN(e=+e))return this;var n=this._x0,i=this._y0,r=this._x1,o=this._y1;if(isNaN(n))r=(n=Math.floor(t))+1,o=(i=Math.floor(e))+1;else{for(var a=r-n||1,s=this._root,l,u;n>t||t>=r||i>e||e>=o;)switch(u=(e<i)<<1|t<n,l=new Array(4),l[u]=s,s=l,a*=2,u){case 0:r=n+a,o=i+a;break;case 1:n=r-a,o=i+a;break;case 2:r=n+a,i=o-a;break;case 3:n=r-a,i=o-a;break}this._root&&this._root.length&&(this._root=s)}return this._x0=n,this._y0=i,this._x1=r,this._y1=o,this}function t2(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function n2(t){return arguments.length?this.cover(+t[0][0],+t[0][1]).cover(+t[1][0],+t[1][1]):isNaN(this._x0)?void 0:[[this._x0,this._y0],[this._x1,this._y1]]}function rn(t,e,n,i,r){this.node=t,this.x0=e,this.y0=n,this.x1=i,this.y1=r}function i2(t,e,n){var i,r=this._x0,o=this._y0,a,s,l,u,c=this._x1,d=this._y1,h=[],p=this._root,g,v;for(p&&h.push(new rn(p,r,o,c,d)),n==null?n=1/0:(r=t-n,o=e-n,c=t+n,d=e+n,n*=n);g=h.pop();)if(!(!(p=g.node)||(a=g.x0)>c||(s=g.y0)>d||(l=g.x1)<r||(u=g.y1)<o))if(p.length){var m=(a+l)/2,f=(s+u)/2;h.push(new rn(p[3],m,f,l,u),new rn(p[2],a,f,m,u),new rn(p[1],m,s,l,f),new rn(p[0],a,s,m,f)),(v=(e>=f)<<1|t>=m)&&(g=h[h.length-1],h[h.length-1]=h[h.length-1-v],h[h.length-1-v]=g)}else{var y=t-+this._x.call(null,p.data),_=e-+this._y.call(null,p.data),x=y*y+_*_;if(x<n){var S=Math.sqrt(n=x);r=t-S,o=e-S,c=t+S,d=e+S,i=p.data}}return i}function r2(t){if(isNaN(c=+this._x.call(null,t))||isNaN(d=+this._y.call(null,t)))return this;var e,n=this._root,i,r,o,a=this._x0,s=this._y0,l=this._x1,u=this._y1,c,d,h,p,g,v,m,f;if(!n)return this;if(n.length)for(;;){if((g=c>=(h=(a+l)/2))?a=h:l=h,(v=d>=(p=(s+u)/2))?s=p:u=p,e=n,!(n=n[m=v<<1|g]))return this;if(!n.length)break;(e[m+1&3]||e[m+2&3]||e[m+3&3])&&(i=e,f=m)}for(;n.data!==t;)if(r=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,r?(o?r.next=o:delete r.next,this):e?(o?e[m]=o:delete e[m],(n=e[0]||e[1]||e[2]||e[3])&&n===(e[3]||e[2]||e[1]||e[0])&&!n.length&&(i?i[f]=n:this._root=n),this):(this._root=o,this)}function o2(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function a2(){return this._root}function s2(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function l2(t){var e=[],n,i=this._root,r,o,a,s,l;for(i&&e.push(new rn(i,this._x0,this._y0,this._x1,this._y1));n=e.pop();)if(!t(i=n.node,o=n.x0,a=n.y0,s=n.x1,l=n.y1)&&i.length){var u=(o+s)/2,c=(a+l)/2;(r=i[3])&&e.push(new rn(r,u,c,s,l)),(r=i[2])&&e.push(new rn(r,o,c,u,l)),(r=i[1])&&e.push(new rn(r,u,a,s,c)),(r=i[0])&&e.push(new rn(r,o,a,u,c))}return this}function u2(t){var e=[],n=[],i;for(this._root&&e.push(new rn(this._root,this._x0,this._y0,this._x1,this._y1));i=e.pop();){var r=i.node;if(r.length){var o,a=i.x0,s=i.y0,l=i.x1,u=i.y1,c=(a+l)/2,d=(s+u)/2;(o=r[0])&&e.push(new rn(o,a,s,c,d)),(o=r[1])&&e.push(new rn(o,c,s,l,d)),(o=r[2])&&e.push(new rn(o,a,d,c,u)),(o=r[3])&&e.push(new rn(o,c,d,l,u))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.y0,i.x1,i.y1);return this}function c2(t){return t[0]}function f2(t){return arguments.length?(this._x=t,this):this._x}function d2(t){return t[1]}function h2(t){return arguments.length?(this._y=t,this):this._y}function Kx(t,e,n){var i=new gm(e??c2,n??d2,NaN,NaN,NaN,NaN);return t==null?i:i.addAll(t)}function gm(t,e,n,i,r,o){this._x=t,this._y=e,this._x0=n,this._y0=i,this._x1=r,this._y1=o,this._root=void 0}function a0(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var cn=Kx.prototype=gm.prototype;cn.copy=function(){var t=new gm(this._x,this._y,this._x0,this._y0,this._x1,this._y1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=a0(e),t;for(n=[{source:e,target:t._root=new Array(4)}];e=n.pop();)for(var r=0;r<4;++r)(i=e.source[r])&&(i.length?n.push({source:i,target:e.target[r]=new Array(4)}):e.target[r]=a0(i));return t};cn.add=QP;cn.addAll=JP;cn.cover=e2;cn.data=t2;cn.extent=n2;cn.find=i2;cn.remove=r2;cn.removeAll=o2;cn.root=a2;cn.size=s2;cn.visit=l2;cn.visitAfter=u2;cn.x=f2;cn.y=h2;function p2(t){const e=+this._x.call(null,t),n=+this._y.call(null,t),i=+this._z.call(null,t);return Zx(this.cover(e,n,i),e,n,i,t)}function Zx(t,e,n,i,r){if(isNaN(e)||isNaN(n)||isNaN(i))return t;var o,a=t._root,s={data:r},l=t._x0,u=t._y0,c=t._z0,d=t._x1,h=t._y1,p=t._z1,g,v,m,f,y,_,x,S,M,b,C;if(!a)return t._root=s,t;for(;a.length;)if((x=e>=(g=(l+d)/2))?l=g:d=g,(S=n>=(v=(u+h)/2))?u=v:h=v,(M=i>=(m=(c+p)/2))?c=m:p=m,o=a,!(a=a[b=M<<2|S<<1|x]))return o[b]=s,t;if(f=+t._x.call(null,a.data),y=+t._y.call(null,a.data),_=+t._z.call(null,a.data),e===f&&n===y&&i===_)return s.next=a,o?o[b]=s:t._root=s,t;do o=o?o[b]=new Array(8):t._root=new Array(8),(x=e>=(g=(l+d)/2))?l=g:d=g,(S=n>=(v=(u+h)/2))?u=v:h=v,(M=i>=(m=(c+p)/2))?c=m:p=m;while((b=M<<2|S<<1|x)===(C=(_>=m)<<2|(y>=v)<<1|f>=g));return o[C]=a,o[b]=s,t}function m2(t){Array.isArray(t)||(t=Array.from(t));const e=t.length,n=new Float64Array(e),i=new Float64Array(e),r=new Float64Array(e);let o=1/0,a=1/0,s=1/0,l=-1/0,u=-1/0,c=-1/0;for(let d=0,h,p,g,v;d<e;++d)isNaN(p=+this._x.call(null,h=t[d]))||isNaN(g=+this._y.call(null,h))||isNaN(v=+this._z.call(null,h))||(n[d]=p,i[d]=g,r[d]=v,p<o&&(o=p),p>l&&(l=p),g<a&&(a=g),g>u&&(u=g),v<s&&(s=v),v>c&&(c=v));if(o>l||a>u||s>c)return this;this.cover(o,a,s).cover(l,u,c);for(let d=0;d<e;++d)Zx(this,n[d],i[d],r[d],t[d]);return this}function g2(t,e,n){if(isNaN(t=+t)||isNaN(e=+e)||isNaN(n=+n))return this;var i=this._x0,r=this._y0,o=this._z0,a=this._x1,s=this._y1,l=this._z1;if(isNaN(i))a=(i=Math.floor(t))+1,s=(r=Math.floor(e))+1,l=(o=Math.floor(n))+1;else{for(var u=a-i||1,c=this._root,d,h;i>t||t>=a||r>e||e>=s||o>n||n>=l;)switch(h=(n<o)<<2|(e<r)<<1|t<i,d=new Array(8),d[h]=c,c=d,u*=2,h){case 0:a=i+u,s=r+u,l=o+u;break;case 1:i=a-u,s=r+u,l=o+u;break;case 2:a=i+u,r=s-u,l=o+u;break;case 3:i=a-u,r=s-u,l=o+u;break;case 4:a=i+u,s=r+u,o=l-u;break;case 5:i=a-u,s=r+u,o=l-u;break;case 6:a=i+u,r=s-u,o=l-u;break;case 7:i=a-u,r=s-u,o=l-u;break}this._root&&this._root.length&&(this._root=c)}return this._x0=i,this._y0=r,this._z0=o,this._x1=a,this._y1=s,this._z1=l,this}function v2(){var t=[];return this.visit(function(e){if(!e.length)do t.push(e.data);while(e=e.next)}),t}function _2(t){return arguments.length?this.cover(+t[0][0],+t[0][1],+t[0][2]).cover(+t[1][0],+t[1][1],+t[1][2]):isNaN(this._x0)?void 0:[[this._x0,this._y0,this._z0],[this._x1,this._y1,this._z1]]}function at(t,e,n,i,r,o,a){this.node=t,this.x0=e,this.y0=n,this.z0=i,this.x1=r,this.y1=o,this.z1=a}function y2(t,e,n,i){var r,o=this._x0,a=this._y0,s=this._z0,l,u,c,d,h,p,g=this._x1,v=this._y1,m=this._z1,f=[],y=this._root,_,x;for(y&&f.push(new at(y,o,a,s,g,v,m)),i==null?i=1/0:(o=t-i,a=e-i,s=n-i,g=t+i,v=e+i,m=n+i,i*=i);_=f.pop();)if(!(!(y=_.node)||(l=_.x0)>g||(u=_.y0)>v||(c=_.z0)>m||(d=_.x1)<o||(h=_.y1)<a||(p=_.z1)<s))if(y.length){var S=(l+d)/2,M=(u+h)/2,b=(c+p)/2;f.push(new at(y[7],S,M,b,d,h,p),new at(y[6],l,M,b,S,h,p),new at(y[5],S,u,b,d,M,p),new at(y[4],l,u,b,S,M,p),new at(y[3],S,M,c,d,h,b),new at(y[2],l,M,c,S,h,b),new at(y[1],S,u,c,d,M,b),new at(y[0],l,u,c,S,M,b)),(x=(n>=b)<<2|(e>=M)<<1|t>=S)&&(_=f[f.length-1],f[f.length-1]=f[f.length-1-x],f[f.length-1-x]=_)}else{var C=t-+this._x.call(null,y.data),T=e-+this._y.call(null,y.data),w=n-+this._z.call(null,y.data),P=C*C+T*T+w*w;if(P<i){var z=Math.sqrt(i=P);o=t-z,a=e-z,s=n-z,g=t+z,v=e+z,m=n+z,r=y.data}}return r}function x2(t){if(isNaN(h=+this._x.call(null,t))||isNaN(p=+this._y.call(null,t))||isNaN(g=+this._z.call(null,t)))return this;var e,n=this._root,i,r,o,a=this._x0,s=this._y0,l=this._z0,u=this._x1,c=this._y1,d=this._z1,h,p,g,v,m,f,y,_,x,S,M;if(!n)return this;if(n.length)for(;;){if((y=h>=(v=(a+u)/2))?a=v:u=v,(_=p>=(m=(s+c)/2))?s=m:c=m,(x=g>=(f=(l+d)/2))?l=f:d=f,e=n,!(n=n[S=x<<2|_<<1|y]))return this;if(!n.length)break;(e[S+1&7]||e[S+2&7]||e[S+3&7]||e[S+4&7]||e[S+5&7]||e[S+6&7]||e[S+7&7])&&(i=e,M=S)}for(;n.data!==t;)if(r=n,!(n=n.next))return this;return(o=n.next)&&delete n.next,r?(o?r.next=o:delete r.next,this):e?(o?e[S]=o:delete e[S],(n=e[0]||e[1]||e[2]||e[3]||e[4]||e[5]||e[6]||e[7])&&n===(e[7]||e[6]||e[5]||e[4]||e[3]||e[2]||e[1]||e[0])&&!n.length&&(i?i[M]=n:this._root=n),this):(this._root=o,this)}function S2(t){for(var e=0,n=t.length;e<n;++e)this.remove(t[e]);return this}function M2(){return this._root}function w2(){var t=0;return this.visit(function(e){if(!e.length)do++t;while(e=e.next)}),t}function E2(t){var e=[],n,i=this._root,r,o,a,s,l,u,c;for(i&&e.push(new at(i,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));n=e.pop();)if(!t(i=n.node,o=n.x0,a=n.y0,s=n.z0,l=n.x1,u=n.y1,c=n.z1)&&i.length){var d=(o+l)/2,h=(a+u)/2,p=(s+c)/2;(r=i[7])&&e.push(new at(r,d,h,p,l,u,c)),(r=i[6])&&e.push(new at(r,o,h,p,d,u,c)),(r=i[5])&&e.push(new at(r,d,a,p,l,h,c)),(r=i[4])&&e.push(new at(r,o,a,p,d,h,c)),(r=i[3])&&e.push(new at(r,d,h,s,l,u,p)),(r=i[2])&&e.push(new at(r,o,h,s,d,u,p)),(r=i[1])&&e.push(new at(r,d,a,s,l,h,p)),(r=i[0])&&e.push(new at(r,o,a,s,d,h,p))}return this}function b2(t){var e=[],n=[],i;for(this._root&&e.push(new at(this._root,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1));i=e.pop();){var r=i.node;if(r.length){var o,a=i.x0,s=i.y0,l=i.z0,u=i.x1,c=i.y1,d=i.z1,h=(a+u)/2,p=(s+c)/2,g=(l+d)/2;(o=r[0])&&e.push(new at(o,a,s,l,h,p,g)),(o=r[1])&&e.push(new at(o,h,s,l,u,p,g)),(o=r[2])&&e.push(new at(o,a,p,l,h,c,g)),(o=r[3])&&e.push(new at(o,h,p,l,u,c,g)),(o=r[4])&&e.push(new at(o,a,s,g,h,p,d)),(o=r[5])&&e.push(new at(o,h,s,g,u,p,d)),(o=r[6])&&e.push(new at(o,a,p,g,h,c,d)),(o=r[7])&&e.push(new at(o,h,p,g,u,c,d))}n.push(i)}for(;i=n.pop();)t(i.node,i.x0,i.y0,i.z0,i.x1,i.y1,i.z1);return this}function T2(t){return t[0]}function A2(t){return arguments.length?(this._x=t,this):this._x}function C2(t){return t[1]}function R2(t){return arguments.length?(this._y=t,this):this._y}function P2(t){return t[2]}function L2(t){return arguments.length?(this._z=t,this):this._z}function Qx(t,e,n,i){var r=new vm(e??T2,n??C2,i??P2,NaN,NaN,NaN,NaN,NaN,NaN);return t==null?r:r.addAll(t)}function vm(t,e,n,i,r,o,a,s,l){this._x=t,this._y=e,this._z=n,this._x0=i,this._y0=r,this._z0=o,this._x1=a,this._y1=s,this._z1=l,this._root=void 0}function s0(t){for(var e={data:t.data},n=e;t=t.next;)n=n.next={data:t.data};return e}var Jt=Qx.prototype=vm.prototype;Jt.copy=function(){var t=new vm(this._x,this._y,this._z,this._x0,this._y0,this._z0,this._x1,this._y1,this._z1),e=this._root,n,i;if(!e)return t;if(!e.length)return t._root=s0(e),t;for(n=[{source:e,target:t._root=new Array(8)}];e=n.pop();)for(var r=0;r<8;++r)(i=e.source[r])&&(i.length?n.push({source:i,target:e.target[r]=new Array(8)}):e.target[r]=s0(i));return t};Jt.add=p2;Jt.addAll=m2;Jt.cover=g2;Jt.data=v2;Jt.extent=_2;Jt.find=y2;Jt.remove=x2;Jt.removeAll=S2;Jt.root=M2;Jt.size=w2;Jt.visit=E2;Jt.visitAfter=b2;Jt.x=A2;Jt.y=R2;Jt.z=L2;function Hi(t){return function(){return t}}function Ni(t){return(t()-.5)*1e-6}function D2(t){return t.index}function l0(t,e){var n=t.get(e);if(!n)throw new Error("node not found: "+e);return n}function I2(t){var e=D2,n=h,i,r=Hi(30),o,a,s,l,u,c,d=1;t==null&&(t=[]);function h(f){return 1/Math.min(l[f.source.index],l[f.target.index])}function p(f){for(var y=0,_=t.length;y<d;++y)for(var x=0,S,M,b,C=0,T=0,w=0,P,z;x<_;++x)S=t[x],M=S.source,b=S.target,C=b.x+b.vx-M.x-M.vx||Ni(c),s>1&&(T=b.y+b.vy-M.y-M.vy||Ni(c)),s>2&&(w=b.z+b.vz-M.z-M.vz||Ni(c)),P=Math.sqrt(C*C+T*T+w*w),P=(P-o[x])/P*f*i[x],C*=P,T*=P,w*=P,b.vx-=C*(z=u[x]),s>1&&(b.vy-=T*z),s>2&&(b.vz-=w*z),M.vx+=C*(z=1-z),s>1&&(M.vy+=T*z),s>2&&(M.vz+=w*z)}function g(){if(a){var f,y=a.length,_=t.length,x=new Map(a.map((M,b)=>[e(M,b,a),M])),S;for(f=0,l=new Array(y);f<_;++f)S=t[f],S.index=f,typeof S.source!="object"&&(S.source=l0(x,S.source)),typeof S.target!="object"&&(S.target=l0(x,S.target)),l[S.source.index]=(l[S.source.index]||0)+1,l[S.target.index]=(l[S.target.index]||0)+1;for(f=0,u=new Array(_);f<_;++f)S=t[f],u[f]=l[S.source.index]/(l[S.source.index]+l[S.target.index]);i=new Array(_),v(),o=new Array(_),m()}}function v(){if(a)for(var f=0,y=t.length;f<y;++f)i[f]=+n(t[f],f,t)}function m(){if(a)for(var f=0,y=t.length;f<y;++f)o[f]=+r(t[f],f,t)}return p.initialize=function(f,...y){a=f,c=y.find(_=>typeof _=="function")||Math.random,s=y.find(_=>[1,2,3].includes(_))||2,g()},p.links=function(f){return arguments.length?(t=f,g(),p):t},p.id=function(f){return arguments.length?(e=f,p):e},p.iterations=function(f){return arguments.length?(d=+f,p):d},p.strength=function(f){return arguments.length?(n=typeof f=="function"?f:Hi(+f),v(),p):n},p.distance=function(f){return arguments.length?(r=typeof f=="function"?f:Hi(+f),m(),p):r},p}var O2={value:()=>{}};function Jx(){for(var t=0,e=arguments.length,n={},i;t<e;++t){if(!(i=arguments[t]+"")||i in n||/[\s.]/.test(i))throw new Error("illegal type: "+i);n[i]=[]}return new xu(n)}function xu(t){this._=t}function N2(t,e){return t.trim().split(/^|\s+/).map(function(n){var i="",r=n.indexOf(".");if(r>=0&&(i=n.slice(r+1),n=n.slice(0,r)),n&&!e.hasOwnProperty(n))throw new Error("unknown type: "+n);return{type:n,name:i}})}xu.prototype=Jx.prototype={constructor:xu,on:function(t,e){var n=this._,i=N2(t+"",n),r,o=-1,a=i.length;if(arguments.length<2){for(;++o<a;)if((r=(t=i[o]).type)&&(r=U2(n[r],t.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<a;)if(r=(t=i[o]).type)n[r]=u0(n[r],t.name,e);else if(e==null)for(r in n)n[r]=u0(n[r],t.name,null);return this},copy:function(){var t={},e=this._;for(var n in e)t[n]=e[n].slice();return new xu(t)},call:function(t,e){if((r=arguments.length-2)>0)for(var n=new Array(r),i=0,r,o;i<r;++i)n[i]=arguments[i+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(o=this._[t],i=0,r=o.length;i<r;++i)o[i].value.apply(e,n)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var i=this._[t],r=0,o=i.length;r<o;++r)i[r].value.apply(e,n)}};function U2(t,e){for(var n=0,i=t.length,r;n<i;++n)if((r=t[n]).name===e)return r.value}function u0(t,e,n){for(var i=0,r=t.length;i<r;++i)if(t[i].name===e){t[i]=O2,t=t.slice(0,i).concat(t.slice(i+1));break}return n!=null&&t.push({name:e,value:n}),t}var ba=0,ls=0,Za=0,eS=1e3,ec,us,tc=0,co=0,Lc=0,js=typeof performance=="object"&&performance.now?performance:Date,tS=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};function nS(){return co||(tS(k2),co=js.now()+Lc)}function k2(){co=0}function zh(){this._call=this._time=this._next=null}zh.prototype=iS.prototype={constructor:zh,restart:function(t,e,n){if(typeof t!="function")throw new TypeError("callback is not a function");n=(n==null?nS():+n)+(e==null?0:+e),!this._next&&us!==this&&(us?us._next=this:ec=this,us=this),this._call=t,this._time=n,Bh()},stop:function(){this._call&&(this._call=null,this._time=1/0,Bh())}};function iS(t,e,n){var i=new zh;return i.restart(t,e,n),i}function F2(){nS(),++ba;for(var t=ec,e;t;)(e=co-t._time)>=0&&t._call.call(void 0,e),t=t._next;--ba}function c0(){co=(tc=js.now())+Lc,ba=ls=0;try{F2()}finally{ba=0,B2(),co=0}}function z2(){var t=js.now(),e=t-tc;e>eS&&(Lc-=e,tc=t)}function B2(){for(var t,e=ec,n,i=1/0;e;)e._call?(i>e._time&&(i=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:ec=n);us=t,Bh(i)}function Bh(t){if(!ba){ls&&(ls=clearTimeout(ls));var e=t-co;e>24?(t<1/0&&(ls=setTimeout(c0,t-js.now()-Lc)),Za&&(Za=clearInterval(Za))):(Za||(tc=js.now(),Za=setInterval(z2,eS)),ba=1,tS(c0))}}const H2=1664525,V2=1013904223,f0=4294967296;function G2(){let t=1;return()=>(t=(H2*t+V2)%f0)/f0}var d0=3;function Xf(t){return t.x}function h0(t){return t.y}function W2(t){return t.z}var j2=10,$2=Math.PI*(3-Math.sqrt(5)),X2=Math.PI*20/(9+Math.sqrt(221));function q2(t,e){e=e||2;var n=Math.min(d0,Math.max(1,Math.round(e))),i,r=1,o=.001,a=1-Math.pow(o,1/300),s=0,l=.6,u=new Map,c=iS(p),d=Jx("tick","end"),h=G2();t==null&&(t=[]);function p(){g(),d.call("tick",i),r<o&&(c.stop(),d.call("end",i))}function g(f){var y,_=t.length,x;f===void 0&&(f=1);for(var S=0;S<f;++S)for(r+=(s-r)*a,u.forEach(function(M){M(r)}),y=0;y<_;++y)x=t[y],x.fx==null?x.x+=x.vx*=l:(x.x=x.fx,x.vx=0),n>1&&(x.fy==null?x.y+=x.vy*=l:(x.y=x.fy,x.vy=0)),n>2&&(x.fz==null?x.z+=x.vz*=l:(x.z=x.fz,x.vz=0));return i}function v(){for(var f=0,y=t.length,_;f<y;++f){if(_=t[f],_.index=f,_.fx!=null&&(_.x=_.fx),_.fy!=null&&(_.y=_.fy),_.fz!=null&&(_.z=_.fz),isNaN(_.x)||n>1&&isNaN(_.y)||n>2&&isNaN(_.z)){var x=j2*(n>2?Math.cbrt(.5+f):n>1?Math.sqrt(.5+f):f),S=f*$2,M=f*X2;n===1?_.x=x:n===2?(_.x=x*Math.cos(S),_.y=x*Math.sin(S)):(_.x=x*Math.sin(S)*Math.cos(M),_.y=x*Math.cos(S),_.z=x*Math.sin(S)*Math.sin(M))}(isNaN(_.vx)||n>1&&isNaN(_.vy)||n>2&&isNaN(_.vz))&&(_.vx=0,n>1&&(_.vy=0),n>2&&(_.vz=0))}}function m(f){return f.initialize&&f.initialize(t,h,n),f}return v(),i={tick:g,restart:function(){return c.restart(p),i},stop:function(){return c.stop(),i},numDimensions:function(f){return arguments.length?(n=Math.min(d0,Math.max(1,Math.round(f))),u.forEach(m),i):n},nodes:function(f){return arguments.length?(t=f,v(),u.forEach(m),i):t},alpha:function(f){return arguments.length?(r=+f,i):r},alphaMin:function(f){return arguments.length?(o=+f,i):o},alphaDecay:function(f){return arguments.length?(a=+f,i):+a},alphaTarget:function(f){return arguments.length?(s=+f,i):s},velocityDecay:function(f){return arguments.length?(l=1-f,i):1-l},randomSource:function(f){return arguments.length?(h=f,u.forEach(m),i):h},force:function(f,y){return arguments.length>1?(y==null?u.delete(f):u.set(f,m(y)),i):u.get(f)},find:function(){var f=Array.prototype.slice.call(arguments),y=f.shift()||0,_=(n>1?f.shift():null)||0,x=(n>2?f.shift():null)||0,S=f.shift()||1/0,M=0,b=t.length,C,T,w,P,z,G;for(S*=S,M=0;M<b;++M)z=t[M],C=y-z.x,T=_-(z.y||0),w=x-(z.z||0),P=C*C+T*T+w*w,P<S&&(G=z,S=P);return G},on:function(f,y){return arguments.length>1?(d.on(f,y),i):d.on(f)}}}function Y2(){var t,e,n,i,r,o=Hi(-30),a,s=1,l=1/0,u=.81;function c(g){var v,m=t.length,f=(e===1?qx(t,Xf):e===2?Kx(t,Xf,h0):e===3?Qx(t,Xf,h0,W2):null).visitAfter(h);for(r=g,v=0;v<m;++v)n=t[v],f.visit(p)}function d(){if(t){var g,v=t.length,m;for(a=new Array(v),g=0;g<v;++g)m=t[g],a[m.index]=+o(m,g,t)}}function h(g){var v=0,m,f,y=0,_,x,S,M,b=g.length;if(b){for(_=x=S=M=0;M<b;++M)(m=g[M])&&(f=Math.abs(m.value))&&(v+=m.value,y+=f,_+=f*(m.x||0),x+=f*(m.y||0),S+=f*(m.z||0));v*=Math.sqrt(4/b),g.x=_/y,e>1&&(g.y=x/y),e>2&&(g.z=S/y)}else{m=g,m.x=m.data.x,e>1&&(m.y=m.data.y),e>2&&(m.z=m.data.z);do v+=a[m.data.index];while(m=m.next)}g.value=v}function p(g,v,m,f,y){if(!g.value)return!0;var _=[m,f,y][e-1],x=g.x-n.x,S=e>1?g.y-n.y:0,M=e>2?g.z-n.z:0,b=_-v,C=x*x+S*S+M*M;if(b*b/u<C)return C<l&&(x===0&&(x=Ni(i),C+=x*x),e>1&&S===0&&(S=Ni(i),C+=S*S),e>2&&M===0&&(M=Ni(i),C+=M*M),C<s&&(C=Math.sqrt(s*C)),n.vx+=x*g.value*r/C,e>1&&(n.vy+=S*g.value*r/C),e>2&&(n.vz+=M*g.value*r/C)),!0;if(g.length||C>=l)return;(g.data!==n||g.next)&&(x===0&&(x=Ni(i),C+=x*x),e>1&&S===0&&(S=Ni(i),C+=S*S),e>2&&M===0&&(M=Ni(i),C+=M*M),C<s&&(C=Math.sqrt(s*C)));do g.data!==n&&(b=a[g.data.index]*r/C,n.vx+=x*b,e>1&&(n.vy+=S*b),e>2&&(n.vz+=M*b));while(g=g.next)}return c.initialize=function(g,...v){t=g,i=v.find(m=>typeof m=="function")||Math.random,e=v.find(m=>[1,2,3].includes(m))||2,d()},c.strength=function(g){return arguments.length?(o=typeof g=="function"?g:Hi(+g),d(),c):o},c.distanceMin=function(g){return arguments.length?(s=g*g,c):Math.sqrt(s)},c.distanceMax=function(g){return arguments.length?(l=g*g,c):Math.sqrt(l)},c.theta=function(g){return arguments.length?(u=g*g,c):Math.sqrt(u)},c}function K2(t,e,n,i){var r,o,a=Hi(.1),s,l;typeof t!="function"&&(t=Hi(+t)),e==null&&(e=0),n==null&&(n=0),i==null&&(i=0);function u(d){for(var h=0,p=r.length;h<p;++h){var g=r[h],v=g.x-e||1e-6,m=(g.y||0)-n||1e-6,f=(g.z||0)-i||1e-6,y=Math.sqrt(v*v+m*m+f*f),_=(l[h]-y)*s[h]*d/y;g.vx+=v*_,o>1&&(g.vy+=m*_),o>2&&(g.vz+=f*_)}}function c(){if(r){var d,h=r.length;for(s=new Array(h),l=new Array(h),d=0;d<h;++d)l[d]=+t(r[d],d,r),s[d]=isNaN(l[d])?0:+a(r[d],d,r)}}return u.initialize=function(d,...h){r=d,o=h.find(p=>[1,2,3].includes(p))||2,c()},u.strength=function(d){return arguments.length?(a=typeof d=="function"?d:Hi(+d),c(),u):a},u.radius=function(d){return arguments.length?(t=typeof d=="function"?d:Hi(+d),c(),u):t},u.x=function(d){return arguments.length?(e=+d,u):e},u.y=function(d){return arguments.length?(n=+d,u):n},u.z=function(d){return arguments.length?(i=+d,u):i},u}var _m=function(e){Q2(e);var n=Z2(e);return e.on=n.on,e.off=n.off,e.fire=n.fire,e};function Z2(t){var e=Object.create(null);return{on:function(n,i,r){if(typeof i!="function")throw new Error("callback is expected to be a function");var o=e[n];return o||(o=e[n]=[]),o.push({callback:i,ctx:r}),t},off:function(n,i){var r=typeof n>"u";if(r)return e=Object.create(null),t;if(e[n]){var o=typeof i!="function";if(o)delete e[n];else for(var a=e[n],s=0;s<a.length;++s)a[s].callback===i&&a.splice(s,1)}return t},fire:function(n){var i=e[n];if(!i)return t;var r;arguments.length>1&&(r=Array.prototype.splice.call(arguments,1));for(var o=0;o<i.length;++o){var a=i[o];a.callback.apply(a.ctx,r)}return t}}}function Q2(t){if(!t)throw new Error("Eventify cannot use falsy object as events subject");for(var e=["on","fire","off"],n=0;n<e.length;++n)if(t.hasOwnProperty(e[n]))throw new Error("Subject cannot be eventified, since it already has property '"+e[n]+"'")}var J2=tL,eL=_m;function tL(t){if(t=t||{},"uniqueLinkId"in t&&(console.warn("ngraph.graph: Starting from version 0.14 `uniqueLinkId` is deprecated.\nUse `multigraph` option instead\n",`
`,`Note: there is also change in default behavior: From now on each graph
is considered to be not a multigraph by default (each edge is unique).`),t.multigraph=t.uniqueLinkId),t.multigraph===void 0&&(t.multigraph=!1),typeof Map!="function")throw new Error("ngraph.graph requires `Map` to be defined. Please polyfill it before using ngraph");var e=new Map,n=new Map,i={},r=0,o=t.multigraph?x:_,a=[],s=k,l=k,u=k,c=k,d={version:20,addNode:v,addLink:y,removeLink:C,removeNode:f,getNode:m,getNodeCount:S,getLinkCount:M,getEdgeCount:M,getLinksCount:M,getNodesCount:S,getLinks:b,forEachNode:ie,forEachLinkedNode:G,forEachLink:z,beginUpdate:u,endUpdate:c,clear:P,hasLink:w,hasNode:m,getLink:w};return eL(d),h(),d;function h(){var W=d.on;d.on=Q;function Q(){return d.beginUpdate=u=J,d.endUpdate=c=F,s=p,l=g,d.on=W,W.apply(d,arguments)}}function p(W,Q){a.push({link:W,changeType:Q})}function g(W,Q){a.push({node:W,changeType:Q})}function v(W,Q){if(W===void 0)throw new Error("Invalid node identifier");u();var oe=m(W);return oe?(oe.data=Q,l(oe,"update")):(oe=new nL(W,Q),l(oe,"add")),e.set(W,oe),c(),oe}function m(W){return e.get(W)}function f(W){var Q=m(W);if(!Q)return!1;u();var oe=Q.links;return oe&&(oe.forEach(T),Q.links=null),e.delete(W),l(Q,"remove"),c(),!0}function y(W,Q,oe){u();var we=m(W)||v(W),B=m(Q)||v(Q),j=o(W,Q,oe),te=n.has(j.id);return n.set(j.id,j),p0(we,j),W!==Q&&p0(B,j),s(j,te?"update":"add"),c(),j}function _(W,Q,oe){var we=Ql(W,Q),B=n.get(we);return B?(B.data=oe,B):new m0(W,Q,oe,we)}function x(W,Q,oe){var we=Ql(W,Q),B=i.hasOwnProperty(we);if(B||w(W,Q)){B||(i[we]=0);var j="@"+ ++i[we];we=Ql(W+j,Q+j)}return new m0(W,Q,oe,we)}function S(){return e.size}function M(){return n.size}function b(W){var Q=m(W);return Q?Q.links:null}function C(W,Q){return Q!==void 0&&(W=w(W,Q)),T(W)}function T(W){if(!W||!n.get(W.id))return!1;u(),n.delete(W.id);var Q=m(W.fromId),oe=m(W.toId);return Q&&Q.links.delete(W),oe&&oe.links.delete(W),s(W,"remove"),c(),!0}function w(W,Q){if(!(W===void 0||Q===void 0))return n.get(Ql(W,Q))}function P(){u(),ie(function(W){f(W.id)}),c()}function z(W){if(typeof W=="function")for(var Q=n.values(),oe=Q.next();!oe.done;){if(W(oe.value))return!0;oe=Q.next()}}function G(W,Q,oe){var we=m(W);if(we&&we.links&&typeof Q=="function")return oe?I(we.links,W,Q):N(we.links,W,Q)}function N(W,Q,oe){for(var we,B=W.values(),j=B.next();!j.done;){var te=j.value,U=te.fromId===Q?te.toId:te.fromId;if(we=oe(e.get(U),te),we)return!0;j=B.next()}}function I(W,Q,oe){for(var we,B=W.values(),j=B.next();!j.done;){var te=j.value;if(te.fromId===Q&&(we=oe(e.get(te.toId),te),we))return!0;j=B.next()}}function k(){}function J(){r+=1}function F(){r-=1,r===0&&a.length>0&&(d.fire("changed",a),a.length=0)}function ie(W){if(typeof W!="function")throw new Error("Function is expected to iterate over graph nodes. You passed "+W);for(var Q=e.values(),oe=Q.next();!oe.done;){if(W(oe.value))return!0;oe=Q.next()}}}function nL(t,e){this.id=t,this.links=null,this.data=e}function p0(t,e){t.links?t.links.add(e):t.links=new Set([e])}function m0(t,e,n,i){this.fromId=t,this.toId=e,this.data=n,this.id=i}function Ql(t,e){return t.toString()+"👉 "+e.toString()}const iL=qs(J2);var ym={exports:{}},tl={exports:{}},rS=function(e){return e===0?"x":e===1?"y":e===2?"z":"c"+(e+1)};const rL=rS;var La=function(e){return n;function n(i,r){let o=r&&r.indent||0,a=r&&r.join!==void 0?r.join:`
`,s=Array(o+1).join(" "),l=[];for(let u=0;u<e;++u){let c=rL(u),d=u===0?"":s;l.push(d+i.replace(/{var}/g,c))}return l.join(a)}};const oS=La;tl.exports=oL;tl.exports.generateCreateBodyFunctionBody=aS;tl.exports.getVectorCode=lS;tl.exports.getBodyCode=sS;function oL(t,e){let n=aS(t,e),{Body:i}=new Function(n)();return i}function aS(t,e){return`
${lS(t,e)}
${sS(t)}
return {Body: Body, Vector: Vector};
`}function sS(t){let e=oS(t),n=e("{var}",{join:", "});return`
function Body(${n}) {
  this.isPinned = false;
  this.pos = new Vector(${n});
  this.force = new Vector();
  this.velocity = new Vector();
  this.mass = 1;

  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.reset = function() {
  this.force.reset();
  this.springCount = 0;
  this.springLength = 0;
}

Body.prototype.setPosition = function (${n}) {
  ${e("this.pos.{var} = {var} || 0;",{indent:2})}
};`}function lS(t,e){let n=oS(t),i="";return e&&(i=`${n(`
   var v{var};
Object.defineProperty(this, '{var}', {
  set: function(v) { 
    if (!Number.isFinite(v)) throw new Error('Cannot set non-numbers to {var}');
    v{var} = v; 
  },
  get: function() { return v{var}; }
});`)}`),`function Vector(${n("{var}",{join:", "})}) {
  ${i}
    if (typeof arguments[0] === 'object') {
      // could be another vector
      let v = arguments[0];
      ${n('if (!Number.isFinite(v.{var})) throw new Error("Expected value is not a finite number at Vector constructor ({var})");',{indent:4})}
      ${n("this.{var} = v.{var};",{indent:4})}
    } else {
      ${n('this.{var} = typeof {var} === "number" ? {var} : 0;',{indent:4})}
    }
  }
  
  Vector.prototype.reset = function () {
    ${n("this.{var} = ",{join:""})}0;
  };`}var aL=tl.exports,Or={exports:{}};const xm=La,ur=rS;Or.exports=sL;Or.exports.generateQuadTreeFunctionBody=uS;Or.exports.getInsertStackCode=pS;Or.exports.getQuadNodeCode=hS;Or.exports.isSamePosition=cS;Or.exports.getChildBodyCode=dS;Or.exports.setChildBodyCode=fS;function sL(t){let e=uS(t);return new Function(e)()}function uS(t){let e=xm(t),n=Math.pow(2,t);return`
${pS()}
${hS(t)}
${cS(t)}
${dS(t)}
${fS(t)}

function createQuadTree(options, random) {
  options = options || {};
  options.gravity = typeof options.gravity === 'number' ? options.gravity : -1;
  options.theta = typeof options.theta === 'number' ? options.theta : 0.8;

  var gravity = options.gravity;
  var updateQueue = [];
  var insertStack = new InsertStack();
  var theta = options.theta;

  var nodesCache = [];
  var currentInCache = 0;
  var root = newNode();

  return {
    insertBodies: insertBodies,

    /**
     * Gets root node if it is present
     */
    getRoot: function() {
      return root;
    },

    updateBodyForce: update,

    options: function(newOptions) {
      if (newOptions) {
        if (typeof newOptions.gravity === 'number') {
          gravity = newOptions.gravity;
        }
        if (typeof newOptions.theta === 'number') {
          theta = newOptions.theta;
        }

        return this;
      }

      return {
        gravity: gravity,
        theta: theta
      };
    }
  };

  function newNode() {
    // To avoid pressure on GC we reuse nodes.
    var node = nodesCache[currentInCache];
    if (node) {
${a("      node.")}
      node.body = null;
      node.mass = ${e("node.mass_{var} = ",{join:""})}0;
      ${e("node.min_{var} = node.max_{var} = ",{join:""})}0;
    } else {
      node = new QuadNode();
      nodesCache[currentInCache] = node;
    }

    ++currentInCache;
    return node;
  }

  function update(sourceBody) {
    var queue = updateQueue;
    var v;
    ${e("var d{var};",{indent:4})}
    var r; 
    ${e("var f{var} = 0;",{indent:4})}
    var queueLength = 1;
    var shiftIdx = 0;
    var pushIdx = 1;

    queue[0] = root;

    while (queueLength) {
      var node = queue[shiftIdx];
      var body = node.body;

      queueLength -= 1;
      shiftIdx += 1;
      var differentBody = (body !== sourceBody);
      if (body && differentBody) {
        // If the current node is a leaf node (and it is not source body),
        // calculate the force exerted by the current node on body, and add this
        // amount to body's net force.
        ${e("d{var} = body.pos.{var} - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Poor man's protection against zero distance.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }

        // This is standard gravitation force calculation but we divide
        // by r^3 to save two operations when normalizing force vector.
        v = gravity * body.mass * sourceBody.mass / (r * r * r);
        ${e("f{var} += v * d{var};",{indent:8})}
      } else if (differentBody) {
        // Otherwise, calculate the ratio s / r,  where s is the width of the region
        // represented by the internal node, and r is the distance between the body
        // and the node's center-of-mass
        ${e("d{var} = node.mass_{var} / node.mass - sourceBody.pos.{var};",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

        if (r === 0) {
          // Sorry about code duplication. I don't want to create many functions
          // right away. Just want to see performance first.
          ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:10})}
          r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
        }
        // If s / r < θ, treat this internal node as a single body, and calculate the
        // force it exerts on sourceBody, and add this amount to sourceBody's net force.
        if ((node.max_${ur(0)} - node.min_${ur(0)}) / r < theta) {
          // in the if statement above we consider node's width only
          // because the region was made into square during tree creation.
          // Thus there is no difference between using width or height.
          v = gravity * node.mass * sourceBody.mass / (r * r * r);
          ${e("f{var} += v * d{var};",{indent:10})}
        } else {
          // Otherwise, run the procedure recursively on each of the current node's children.

          // I intentionally unfolded this loop, to save several CPU cycles.
${o()}
        }
      }
    }

    ${e("sourceBody.force.{var} += f{var};",{indent:4})}
  }

  function insertBodies(bodies) {
    ${e("var {var}min = Number.MAX_VALUE;",{indent:4})}
    ${e("var {var}max = Number.MIN_VALUE;",{indent:4})}
    var i = bodies.length;

    // To reduce quad tree depth we are looking for exact bounding box of all particles.
    while (i--) {
      var pos = bodies[i].pos;
      ${e("if (pos.{var} < {var}min) {var}min = pos.{var};",{indent:6})}
      ${e("if (pos.{var} > {var}max) {var}max = pos.{var};",{indent:6})}
    }

    // Makes the bounds square.
    var maxSideLength = -Infinity;
    ${e("if ({var}max - {var}min > maxSideLength) maxSideLength = {var}max - {var}min ;",{indent:4})}

    currentInCache = 0;
    root = newNode();
    ${e("root.min_{var} = {var}min;",{indent:4})}
    ${e("root.max_{var} = {var}min + maxSideLength;",{indent:4})}

    i = bodies.length - 1;
    if (i >= 0) {
      root.body = bodies[i];
    }
    while (i--) {
      insert(bodies[i], root);
    }
  }

  function insert(newBody) {
    insertStack.reset();
    insertStack.push(root, newBody);

    while (!insertStack.isEmpty()) {
      var stackItem = insertStack.pop();
      var node = stackItem.node;
      var body = stackItem.body;

      if (!node.body) {
        // This is internal node. Update the total mass of the node and center-of-mass.
        ${e("var {var} = body.pos.{var};",{indent:8})}
        node.mass += body.mass;
        ${e("node.mass_{var} += body.mass * {var};",{indent:8})}

        // Recursively insert the body in the appropriate quadrant.
        // But first find the appropriate quadrant.
        var quadIdx = 0; // Assume we are in the 0's quad.
        ${e("var min_{var} = node.min_{var};",{indent:8})}
        ${e("var max_{var} = (min_{var} + node.max_{var}) / 2;",{indent:8})}

${r(8)}

        var child = getChild(node, quadIdx);

        if (!child) {
          // The node is internal but this quadrant is not taken. Add
          // subnode to it.
          child = newNode();
          ${e("child.min_{var} = min_{var};",{indent:10})}
          ${e("child.max_{var} = max_{var};",{indent:10})}
          child.body = body;

          setChild(node, quadIdx, child);
        } else {
          // continue searching in this quadrant.
          insertStack.push(child, body);
        }
      } else {
        // We are trying to add to the leaf node.
        // We have to convert current leaf into internal node
        // and continue adding two nodes.
        var oldBody = node.body;
        node.body = null; // internal nodes do not cary bodies

        if (isSamePosition(oldBody.pos, body.pos)) {
          // Prevent infinite subdivision by bumping one node
          // anywhere in this quadrant
          var retriesCount = 3;
          do {
            var offset = random.nextDouble();
            ${e("var d{var} = (node.max_{var} - node.min_{var}) * offset;",{indent:12})}

            ${e("oldBody.pos.{var} = node.min_{var} + d{var};",{indent:12})}
            retriesCount -= 1;
            // Make sure we don't bump it out of the box. If we do, next iteration should fix it
          } while (retriesCount > 0 && isSamePosition(oldBody.pos, body.pos));

          if (retriesCount === 0 && isSamePosition(oldBody.pos, body.pos)) {
            // This is very bad, we ran out of precision.
            // if we do not return from the method we'll get into
            // infinite loop here. So we sacrifice correctness of layout, and keep the app running
            // Next layout iteration should get larger bounding box in the first step and fix this
            return;
          }
        }
        // Next iteration should subdivide node further.
        insertStack.push(node, oldBody);
        insertStack.push(node, body);
      }
    }
  }
}
return createQuadTree;

`;function r(s){let l=[],u=Array(s+1).join(" ");for(let c=0;c<t;++c)l.push(u+`if (${ur(c)} > max_${ur(c)}) {`),l.push(u+`  quadIdx = quadIdx + ${Math.pow(2,c)};`),l.push(u+`  min_${ur(c)} = max_${ur(c)};`),l.push(u+`  max_${ur(c)} = node.max_${ur(c)};`),l.push(u+"}");return l.join(`
`)}function o(){let s=Array(11).join(" "),l=[];for(let u=0;u<n;++u)l.push(s+`if (node.quad${u}) {`),l.push(s+`  queue[pushIdx] = node.quad${u};`),l.push(s+"  queueLength += 1;"),l.push(s+"  pushIdx += 1;"),l.push(s+"}");return l.join(`
`)}function a(s){let l=[];for(let u=0;u<n;++u)l.push(`${s}quad${u} = null;`);return l.join(`
`)}}function cS(t){let e=xm(t);return`
  function isSamePosition(point1, point2) {
    ${e("var d{var} = Math.abs(point1.{var} - point2.{var});",{indent:2})}
  
    return ${e("d{var} < 1e-8",{join:" && "})};
  }  
`}function fS(t){var e=Math.pow(2,t);return`
function setChild(node, idx, child) {
  ${n()}
}`;function n(){let i=[];for(let r=0;r<e;++r){let o=r===0?"  ":"  else ";i.push(`${o}if (idx === ${r}) node.quad${r} = child;`)}return i.join(`
`)}}function dS(t){return`function getChild(node, idx) {
${e()}
  return null;
}`;function e(){let n=[],i=Math.pow(2,t);for(let r=0;r<i;++r)n.push(`  if (idx === ${r}) return node.quad${r};`);return n.join(`
`)}}function hS(t){let e=xm(t),n=Math.pow(2,t);var i=`
function QuadNode() {
  // body stored inside this node. In quad tree only leaf nodes (by construction)
  // contain bodies:
  this.body = null;

  // Child nodes are stored in quads. Each quad is presented by number:
  // 0 | 1
  // -----
  // 2 | 3
${r("  this.")}

  // Total mass of current node
  this.mass = 0;

  // Center of mass coordinates
  ${e("this.mass_{var} = 0;",{indent:2})}

  // bounding box coordinates
  ${e("this.min_{var} = 0;",{indent:2})}
  ${e("this.max_{var} = 0;",{indent:2})}
}
`;return i;function r(o){let a=[];for(let s=0;s<n;++s)a.push(`${o}quad${s} = null;`);return a.join(`
`)}}function pS(){return`
/**
 * Our implementation of QuadTree is non-recursive to avoid GC hit
 * This data structure represent stack of elements
 * which we are trying to insert into quad tree.
 */
function InsertStack () {
    this.stack = [];
    this.popIdx = 0;
}

InsertStack.prototype = {
    isEmpty: function() {
        return this.popIdx === 0;
    },
    push: function (node, body) {
        var item = this.stack[this.popIdx];
        if (!item) {
            // we are trying to avoid memory pressure: create new element
            // only when absolutely necessary
            this.stack[this.popIdx] = new InsertStackElement(node, body);
        } else {
            item.node = node;
            item.body = body;
        }
        ++this.popIdx;
    },
    pop: function () {
        if (this.popIdx > 0) {
            return this.stack[--this.popIdx];
        }
    },
    reset: function () {
        this.popIdx = 0;
    }
};

function InsertStackElement(node, body) {
    this.node = node; // QuadTree node
    this.body = body; // physical body which needs to be inserted to node
}
`}var lL=Or.exports,Sm={exports:{}};Sm.exports=cL;Sm.exports.generateFunctionBody=mS;const uL=La;function cL(t){let e=mS(t);return new Function("bodies","settings","random",e)}function mS(t){let e=uL(t);return`
  var boundingBox = {
    ${e("min_{var}: 0, max_{var}: 0,",{indent:4})}
  };

  return {
    box: boundingBox,

    update: updateBoundingBox,

    reset: resetBoundingBox,

    getBestNewPosition: function (neighbors) {
      var ${e("base_{var} = 0",{join:", "})};

      if (neighbors.length) {
        for (var i = 0; i < neighbors.length; ++i) {
          let neighborPos = neighbors[i].pos;
          ${e("base_{var} += neighborPos.{var};",{indent:10})}
        }

        ${e("base_{var} /= neighbors.length;",{indent:8})}
      } else {
        ${e("base_{var} = (boundingBox.min_{var} + boundingBox.max_{var}) / 2;",{indent:8})}
      }

      var springLength = settings.springLength;
      return {
        ${e("{var}: base_{var} + (random.nextDouble() - 0.5) * springLength,",{indent:8})}
      };
    }
  };

  function updateBoundingBox() {
    var i = bodies.length;
    if (i === 0) return; // No bodies - no borders.

    ${e("var max_{var} = -Infinity;",{indent:4})}
    ${e("var min_{var} = Infinity;",{indent:4})}

    while(i--) {
      // this is O(n), it could be done faster with quadtree, if we check the root node bounds
      var bodyPos = bodies[i].pos;
      ${e("if (bodyPos.{var} < min_{var}) min_{var} = bodyPos.{var};",{indent:6})}
      ${e("if (bodyPos.{var} > max_{var}) max_{var} = bodyPos.{var};",{indent:6})}
    }

    ${e("boundingBox.min_{var} = min_{var};",{indent:4})}
    ${e("boundingBox.max_{var} = max_{var};",{indent:4})}
  }

  function resetBoundingBox() {
    ${e("boundingBox.min_{var} = boundingBox.max_{var} = 0;",{indent:4})}
  }
`}var fL=Sm.exports,Mm={exports:{}};const dL=La;Mm.exports=hL;Mm.exports.generateCreateDragForceFunctionBody=gS;function hL(t){let e=gS(t);return new Function("options",e)}function gS(t){return`
  if (!Number.isFinite(options.dragCoefficient)) throw new Error('dragCoefficient is not a finite number');

  return {
    update: function(body) {
      ${dL(t)("body.force.{var} -= options.dragCoefficient * body.velocity.{var};",{indent:6})}
    }
  };
`}var pL=Mm.exports,wm={exports:{}};const mL=La;wm.exports=gL;wm.exports.generateCreateSpringForceFunctionBody=vS;function gL(t){let e=vS(t);return new Function("options","random",e)}function vS(t){let e=mL(t);return`
  if (!Number.isFinite(options.springCoefficient)) throw new Error('Spring coefficient is not a number');
  if (!Number.isFinite(options.springLength)) throw new Error('Spring length is not a number');

  return {
    /**
     * Updates forces acting on a spring
     */
    update: function (spring) {
      var body1 = spring.from;
      var body2 = spring.to;
      var length = spring.length < 0 ? options.springLength : spring.length;
      ${e("var d{var} = body2.pos.{var} - body1.pos.{var};",{indent:6})}
      var r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});

      if (r === 0) {
        ${e("d{var} = (random.nextDouble() - 0.5) / 50;",{indent:8})}
        r = Math.sqrt(${e("d{var} * d{var}",{join:" + "})});
      }

      var d = r - length;
      var coefficient = ((spring.coefficient > 0) ? spring.coefficient : options.springCoefficient) * d / r;

      ${e("body1.force.{var} += coefficient * d{var}",{indent:6})};
      body1.springCount += 1;
      body1.springLength += r;

      ${e("body2.force.{var} -= coefficient * d{var}",{indent:6})};
      body2.springCount += 1;
      body2.springLength += r;
    }
  };
`}var vL=wm.exports,Em={exports:{}};const _L=La;Em.exports=yL;Em.exports.generateIntegratorFunctionBody=_S;function yL(t){let e=_S(t);return new Function("bodies","timeStep","adaptiveTimeStepWeight",e)}function _S(t){let e=_L(t);return`
  var length = bodies.length;
  if (length === 0) return 0;

  ${e("var d{var} = 0, t{var} = 0;",{indent:2})}

  for (var i = 0; i < length; ++i) {
    var body = bodies[i];
    if (body.isPinned) continue;

    if (adaptiveTimeStepWeight && body.springCount) {
      timeStep = (adaptiveTimeStepWeight * body.springLength/body.springCount);
    }

    var coeff = timeStep / body.mass;

    ${e("body.velocity.{var} += coeff * body.force.{var};",{indent:4})}
    ${e("var v{var} = body.velocity.{var};",{indent:4})}
    var v = Math.sqrt(${e("v{var} * v{var}",{join:" + "})});

    if (v > 1) {
      // We normalize it so that we move within timeStep range. 
      // for the case when v <= 1 - we let velocity to fade out.
      ${e("body.velocity.{var} = v{var} / v;",{indent:6})}
    }

    ${e("d{var} = timeStep * body.velocity.{var};",{indent:4})}

    ${e("body.pos.{var} += d{var};",{indent:4})}

    ${e("t{var} += Math.abs(d{var});",{indent:4})}
  }

  return (${e("t{var} * t{var}",{join:" + "})})/length;
`}var xL=Em.exports,qf,g0;function SL(){if(g0)return qf;g0=1,qf=t;function t(e,n,i,r){this.from=e,this.to=n,this.length=i,this.coefficient=r}return qf}var Yf,v0;function ML(){if(v0)return Yf;v0=1,Yf=t;function t(e,n){var i;if(e||(e={}),n){for(i in n)if(n.hasOwnProperty(i)){var r=e.hasOwnProperty(i),o=typeof n[i],a=!r||typeof e[i]!==o;a?e[i]=n[i]:o==="object"&&(e[i]=t(e[i],n[i]))}}return e}return Yf}var Qa={exports:{}},_0;function wL(){if(_0)return Qa.exports;_0=1,Qa.exports=t,Qa.exports.random=t,Qa.exports.randomIterator=s;function t(l){var u=typeof l=="number"?l:+new Date;return new e(u)}function e(l){this.seed=l}e.prototype.next=a,e.prototype.nextDouble=o,e.prototype.uniform=o,e.prototype.gaussian=n;function n(){var l,u,c;do u=this.nextDouble()*2-1,c=this.nextDouble()*2-1,l=u*u+c*c;while(l>=1||l===0);return u*Math.sqrt(-2*Math.log(l)/l)}e.prototype.levy=i;function i(){var l=1.5,u=Math.pow(r(1+l)*Math.sin(Math.PI*l/2)/(r((1+l)/2)*l*Math.pow(2,(l-1)/2)),1/l);return this.gaussian()*u/Math.pow(Math.abs(this.gaussian()),1/l)}function r(l){return Math.sqrt(2*Math.PI/l)*Math.pow(1/Math.E*(l+1/(12*l-1/(10*l))),l)}function o(){var l=this.seed;return l=l+2127912214+(l<<12)&4294967295,l=(l^3345072700^l>>>19)&4294967295,l=l+374761393+(l<<5)&4294967295,l=(l+3550635116^l<<9)&4294967295,l=l+4251993797+(l<<3)&4294967295,l=(l^3042594569^l>>>16)&4294967295,this.seed=l,(l&268435455)/268435456}function a(l){return Math.floor(this.nextDouble()*l)}function s(l,u){var c=u||t();if(typeof c.next!="function")throw new Error("customRandom does not match expected API: next() function is missing");return{forEach:h,shuffle:d};function d(){var p,g,v;for(p=l.length-1;p>0;--p)g=c.next(p+1),v=l[g],l[g]=l[p],l[p]=v;return l}function h(p){var g,v,m;for(g=l.length-1;g>0;--g)v=c.next(g+1),m=l[v],l[v]=l[g],l[g]=m,p(m);l.length&&p(l[0])}}return Qa.exports}var yS=PL,EL=aL,bL=lL,TL=fL,AL=pL,CL=vL,RL=xL,y0={};function PL(t){var e=SL(),n=ML(),i=_m;if(t){if(t.springCoeff!==void 0)throw new Error("springCoeff was renamed to springCoefficient");if(t.dragCoeff!==void 0)throw new Error("dragCoeff was renamed to dragCoefficient")}t=n(t,{springLength:10,springCoefficient:.8,gravity:-12,theta:.8,dragCoefficient:.9,timeStep:.5,adaptiveTimeStepWeight:0,dimensions:2,debug:!1});var r=y0[t.dimensions];if(!r){var o=t.dimensions;r={Body:EL(o,t.debug),createQuadTree:bL(o),createBounds:TL(o),createDragForce:AL(o),createSpringForce:CL(o),integrate:RL(o)},y0[o]=r}var a=r.Body,s=r.createQuadTree,l=r.createBounds,u=r.createDragForce,c=r.createSpringForce,d=r.integrate,h=I=>new a(I),p=wL().random(42),g=[],v=[],m=s(t,p),f=l(g,t,p),y=c(t,p),_=u(t),x=0,S=[],M=new Map,b=0;w("nbody",G),w("spring",N);var C={bodies:g,quadTree:m,springs:v,settings:t,addForce:w,removeForce:P,getForces:z,step:function(){for(var I=0;I<S.length;++I)S[I](b);var k=d(g,t.timeStep,t.adaptiveTimeStepWeight);return b+=1,k},addBody:function(I){if(!I)throw new Error("Body is required");return g.push(I),I},addBodyAt:function(I){if(!I)throw new Error("Body position is required");var k=h(I);return g.push(k),k},removeBody:function(I){if(I){var k=g.indexOf(I);if(!(k<0))return g.splice(k,1),g.length===0&&f.reset(),!0}},addSpring:function(I,k,J,F){if(!I||!k)throw new Error("Cannot add null spring to force simulator");typeof J!="number"&&(J=-1);var ie=new e(I,k,J,F>=0?F:-1);return v.push(ie),ie},getTotalMovement:function(){return x},removeSpring:function(I){if(I){var k=v.indexOf(I);if(k>-1)return v.splice(k,1),!0}},getBestNewBodyPosition:function(I){return f.getBestNewPosition(I)},getBBox:T,getBoundingBox:T,invalidateBBox:function(){console.warn("invalidateBBox() is deprecated, bounds always recomputed on `getBBox()` call")},gravity:function(I){return I!==void 0?(t.gravity=I,m.options({gravity:I}),this):t.gravity},theta:function(I){return I!==void 0?(t.theta=I,m.options({theta:I}),this):t.theta},random:p};return LL(t,C),i(C),C;function T(){return f.update(),f.box}function w(I,k){if(M.has(I))throw new Error("Force "+I+" is already added");M.set(I,k),S.push(k)}function P(I){var k=S.indexOf(M.get(I));k<0||(S.splice(k,1),M.delete(I))}function z(){return M}function G(){if(g.length!==0){m.insertBodies(g);for(var I=g.length;I--;){var k=g[I];k.isPinned||(k.reset(),m.updateBodyForce(k),_.update(k))}}}function N(){for(var I=v.length;I--;)y.update(v[I])}}function LL(t,e){for(var n in t)DL(t,e,n)}function DL(t,e,n){if(t.hasOwnProperty(n)&&typeof e[n]!="function"){var i=Number.isFinite(t[n]);i?e[n]=function(r){if(r!==void 0){if(!Number.isFinite(r))throw new Error("Value of "+n+" should be a valid number.");return t[n]=r,e}return t[n]}:e[n]=function(r){return r!==void 0?(t[n]=r,e):t[n]}}}ym.exports=OL;ym.exports.simulator=yS;var IL=_m;function OL(t,e){if(!t)throw new Error("Graph structure cannot be undefined");var n=e&&e.createSimulator||yS,i=n(e);if(Array.isArray(e))throw new Error("Physics settings is expected to be an object");var r=t.version>19?G:z;e&&typeof e.nodeMass=="function"&&(r=e.nodeMass);var o=new Map,a={},s=0,l=i.settings.springTransform||NL;_(),m();var u=!1,c={step:function(){if(s===0)return d(!0),!0;var N=i.step();c.lastMove=N,c.fire("step");var I=N/s,k=I<=.01;return d(k),k},getNodePosition:function(N){return P(N).pos},setNodePosition:function(N){var I=P(N);I.setPosition.apply(I,Array.prototype.slice.call(arguments,1))},getLinkPosition:function(N){var I=a[N];if(I)return{from:I.from.pos,to:I.to.pos}},getGraphRect:function(){return i.getBBox()},forEachBody:h,pinNode:function(N,I){var k=P(N.id);k.isPinned=!!I},isNodePinned:function(N){return P(N.id).isPinned},dispose:function(){t.off("changed",y),c.fire("disposed")},getBody:v,getSpring:g,getForceVectorLength:p,simulator:i,graph:t,lastMove:0};return IL(c),c;function d(N){u!==N&&(u=N,f(N))}function h(N){o.forEach(N)}function p(){var N=0,I=0;return h(function(k){N+=Math.abs(k.force.x),I+=Math.abs(k.force.y)}),Math.sqrt(N*N+I*I)}function g(N,I){var k;if(I===void 0)typeof N!="object"?k=N:k=N.id;else{var J=t.hasLink(N,I);if(!J)return;k=J.id}return a[k]}function v(N){return o.get(N)}function m(){t.on("changed",y)}function f(N){c.fire("stable",N)}function y(N){for(var I=0;I<N.length;++I){var k=N[I];k.changeType==="add"?(k.node&&x(k.node.id),k.link&&M(k.link)):k.changeType==="remove"&&(k.node&&S(k.node),k.link&&b(k.link))}s=t.getNodesCount()}function _(){s=0,t.forEachNode(function(N){x(N.id),s+=1}),t.forEachLink(M)}function x(N){var I=o.get(N);if(!I){var k=t.getNode(N);if(!k)throw new Error("initBody() was called with unknown node id");var J=k.position;if(!J){var F=C(k);J=i.getBestNewBodyPosition(F)}I=i.addBodyAt(J),I.id=N,o.set(N,I),T(N),w(k)&&(I.isPinned=!0)}}function S(N){var I=N.id,k=o.get(I);k&&(o.delete(I),i.removeBody(k))}function M(N){T(N.fromId),T(N.toId);var I=o.get(N.fromId),k=o.get(N.toId),J=i.addSpring(I,k,N.length);l(N,J),a[N.id]=J}function b(N){var I=a[N.id];if(I){var k=t.getNode(N.fromId),J=t.getNode(N.toId);k&&T(k.id),J&&T(J.id),delete a[N.id],i.removeSpring(I)}}function C(N){var I=[];if(!N.links)return I;for(var k=Math.min(N.links.length,2),J=0;J<k;++J){var F=N.links[J],ie=F.fromId!==N.id?o.get(F.fromId):o.get(F.toId);ie&&ie.pos&&I.push(ie)}return I}function T(N){var I=o.get(N);if(I.mass=r(N),Number.isNaN(I.mass))throw new Error("Node mass should be a number")}function w(N){return N&&(N.isPinned||N.data&&N.data.isPinned)}function P(N){var I=o.get(N);return I||(x(N),I=o.get(N)),I}function z(N){var I=t.getLinks(N);return I?1+I.length/3:1}function G(N){var I=t.getLinks(N);return I?1+I.size/3:1}}function NL(){}var UL=ym.exports;const kL=qs(UL);function Hh(t){var e=typeof t;return t!=null&&(e=="object"||e=="function")}var FL=typeof global=="object"&&global&&global.Object===Object&&global,zL=typeof self=="object"&&self&&self.Object===Object&&self,xS=FL||zL||Function("return this")(),Kf=function(){return xS.Date.now()},BL=/\s/;function HL(t){for(var e=t.length;e--&&BL.test(t.charAt(e)););return e}var VL=/^\s+/;function GL(t){return t&&t.slice(0,HL(t)+1).replace(VL,"")}var nc=xS.Symbol,SS=Object.prototype,WL=SS.hasOwnProperty,jL=SS.toString,Ja=nc?nc.toStringTag:void 0;function $L(t){var e=WL.call(t,Ja),n=t[Ja];try{t[Ja]=void 0;var i=!0}catch{}var r=jL.call(t);return i&&(e?t[Ja]=n:delete t[Ja]),r}var XL=Object.prototype,qL=XL.toString;function YL(t){return qL.call(t)}var KL="[object Null]",ZL="[object Undefined]",x0=nc?nc.toStringTag:void 0;function QL(t){return t==null?t===void 0?ZL:KL:x0&&x0 in Object(t)?$L(t):YL(t)}function JL(t){return t!=null&&typeof t=="object"}var eD="[object Symbol]";function tD(t){return typeof t=="symbol"||JL(t)&&QL(t)==eD}var S0=NaN,nD=/^[-+]0x[0-9a-f]+$/i,iD=/^0b[01]+$/i,rD=/^0o[0-7]+$/i,oD=parseInt;function M0(t){if(typeof t=="number")return t;if(tD(t))return S0;if(Hh(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=Hh(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=GL(t);var n=iD.test(t);return n||rD.test(t)?oD(t.slice(2),n?2:8):nD.test(t)?S0:+t}var aD="Expected a function",sD=Math.max,lD=Math.min;function uD(t,e,n){var i,r,o,a,s,l,u=0,c=!1,d=!1,h=!0;if(typeof t!="function")throw new TypeError(aD);e=M0(e)||0,Hh(n)&&(c=!!n.leading,d="maxWait"in n,o=d?sD(M0(n.maxWait)||0,e):o,h="trailing"in n?!!n.trailing:h);function p(M){var b=i,C=r;return i=r=void 0,u=M,a=t.apply(C,b),a}function g(M){return u=M,s=setTimeout(f,e),c?p(M):a}function v(M){var b=M-l,C=M-u,T=e-b;return d?lD(T,o-C):T}function m(M){var b=M-l,C=M-u;return l===void 0||b>=e||b<0||d&&C>=o}function f(){var M=Kf();if(m(M))return y(M);s=setTimeout(f,v(M))}function y(M){return s=void 0,h&&i?p(M):(i=r=void 0,a)}function _(){s!==void 0&&clearTimeout(s),u=0,i=l=r=s=void 0}function x(){return s===void 0?a:y(Kf())}function S(){var M=Kf(),b=m(M);if(i=arguments,r=this,l=M,b){if(s===void 0)return g(l);if(d)return clearTimeout(s),s=setTimeout(f,e),p(l)}return s===void 0&&(s=setTimeout(f,e)),a}return S.cancel=_,S.flush=x,S}function cD(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e!==0)for(;!(l=(i=o.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(c){u=!0,r=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw r}}return s}}function fD(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function dD(t,e,n){return Object.defineProperty(t,"prototype",{writable:!1}),t}function hD(t,e){return pD(t)||cD(t,e)||mD(t,e)||gD()}function pD(t){if(Array.isArray(t))return t}function mD(t,e){if(t){if(typeof t=="string")return w0(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w0(t,e)}}function w0(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function gD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var vD=dD(function t(e,n){var i=n.default,r=i===void 0?null:i,o=n.triggerUpdate,a=o===void 0?!0:o,s=n.onChange,l=s===void 0?function(u,c){}:s;fD(this,t),this.name=e,this.defaultVal=r,this.triggerUpdate=a,this.onChange=l});function bm(t){var e=t.stateInit,n=e===void 0?function(){return{}}:e,i=t.props,r=i===void 0?{}:i,o=t.methods,a=o===void 0?{}:o,s=t.aliases,l=s===void 0?{}:s,u=t.init,c=u===void 0?function(){}:u,d=t.update,h=d===void 0?function(){}:d,p=Object.keys(r).map(function(g){return new vD(g,r[g])});return function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=Object.assign({},n instanceof Function?n(g):n,{initialised:!1}),m={};function f(x){return y(x,g),_(),f}var y=function(S,M){c.call(f,S,v,M),v.initialised=!0},_=uD(function(){v.initialised&&(h.call(f,v,m),m={})},1);return p.forEach(function(x){f[x.name]=S(x);function S(M){var b=M.name,C=M.triggerUpdate,T=C===void 0?!1:C,w=M.onChange,P=w===void 0?function(N,I){}:w,z=M.defaultVal,G=z===void 0?null:z;return function(N){var I=v[b];if(!arguments.length)return I;var k=N===void 0?G:N;return v[b]=k,P.call(f,k,v,I),!m.hasOwnProperty(b)&&(m[b]=I),T&&_(),f}}}),Object.keys(a).forEach(function(x){f[x]=function(){for(var S,M=arguments.length,b=new Array(M),C=0;C<M;C++)b[C]=arguments[C];return(S=a[x]).call.apply(S,[f,v].concat(b))}}),Object.entries(l).forEach(function(x){var S=hD(x,2),M=S[0],b=S[1];return f[M]=f[b]}),f.resetProps=function(){return p.forEach(function(x){f[x.name](x.defaultVal)}),f},f.resetProps(),v._rerender=_,f}}var Qe=function(t){return typeof t=="function"?t:typeof t=="string"?function(e){return e[t]}:function(e){return t}};class E0 extends Map{constructor(e,n=xD){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:n}}),e!=null)for(const[i,r]of e)this.set(i,r)}get(e){return super.get(b0(this,e))}has(e){return super.has(b0(this,e))}set(e,n){return super.set(_D(this,e),n)}delete(e){return super.delete(yD(this,e))}}function b0({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):n}function _D({_intern:t,_key:e},n){const i=e(n);return t.has(i)?t.get(i):(t.set(i,n),n)}function yD({_intern:t,_key:e},n){const i=e(n);return t.has(i)&&(n=t.get(i),t.delete(i)),n}function xD(t){return t!==null&&typeof t=="object"?t.valueOf():t}function SD(t,e){let n;if(e===void 0)for(const i of t)i!=null&&(n<i||n===void 0&&i>=i)&&(n=i);else{let i=-1;for(let r of t)(r=e(r,++i,t))!=null&&(n<r||n===void 0&&r>=r)&&(n=r)}return n}function MD(t,e){let n;if(e===void 0)for(const i of t)i!=null&&(n>i||n===void 0&&i>=i)&&(n=i);else{let i=-1;for(let r of t)(r=e(r,++i,t))!=null&&(n>r||n===void 0&&r>=r)&&(n=r)}return n}function Vh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function wD(t){if(Array.isArray(t))return t}function ED(t){if(Array.isArray(t))return Vh(t)}function bD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function TD(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e!==0)for(;!(l=(i=o.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(c){u=!0,r=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw r}}return s}}function AD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function CD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function RD(t,e){if(t==null)return{};var n,i,r=PD(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)n=o[i],e.includes(n)||{}.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function PD(t,e){if(t==null)return{};var n={};for(var i in t)if({}.hasOwnProperty.call(t,i)){if(e.includes(i))continue;n[i]=t[i]}return n}function LD(t,e){return wD(t)||TD(t,e)||MS(t,e)||AD()}function DD(t){return ED(t)||bD(t)||MS(t)||CD()}function ID(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function OD(t){var e=ID(t,"string");return typeof e=="symbol"?e:e+""}function MS(t,e){if(t){if(typeof t=="string")return Vh(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Vh(t,e):void 0}}var T0=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,r=(e instanceof Array?e.length?e:[void 0]:[e]).map(function(s){return{keyAccessor:s,isProp:!(s instanceof Function)}}),o=t.reduce(function(s,l){var u=s,c=l;return r.forEach(function(d,h){var p=d.keyAccessor,g=d.isProp,v;if(g){var m=c,f=m[p],y=RD(m,[p].map(OD));v=f,c=y}else v=p(c,h);h+1<r.length?(u.hasOwnProperty(v)||(u[v]={}),u=u[v]):n?(u.hasOwnProperty(v)||(u[v]=[]),u[v].push(c)):u[v]=c}),s},{});n instanceof Function&&function s(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;u===r.length?Object.keys(l).forEach(function(c){return l[c]=n(l[c])}):Object.values(l).forEach(function(c){return s(c,u+1)})}(o);var a=o;return i&&(a=[],function s(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];u.length===r.length?a.push({keys:u,vals:l}):Object.entries(l).forEach(function(c){var d=LD(c,2),h=d[0],p=d[1];return s(p,[].concat(DD(u),[h]))})}(o),e instanceof Array&&e.length===0&&a.length===1&&(a[0].keys=[])),a};function ND(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e!==0)for(;!(l=(i=o.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(c){u=!0,r=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw r}}return s}}function A0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function UD(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?A0(Object(n),!0).forEach(function(i){wS(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function wS(t,e,n){return e=jD(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function kD(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function FD(t,e){if(t==null)return{};var n=kD(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function ES(t,e){return BD(t)||ND(t,e)||bS(t,e)||GD()}function ic(t){return zD(t)||HD(t)||bS(t)||VD()}function zD(t){if(Array.isArray(t))return Gh(t)}function BD(t){if(Array.isArray(t))return t}function HD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function bS(t,e){if(t){if(typeof t=="string")return Gh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gh(t,e)}}function Gh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function VD(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function GD(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function WD(t,e){if(typeof t!="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function jD(t){var e=WD(t,"string");return typeof e=="symbol"?e:String(e)}var $D=["createObj","updateObj","exitObj","objBindAttr","dataBindAttr"];function XD(t,e,n){var i={enter:[],update:[],exit:[]};if(n){var a=T0(t,n,!1),s=T0(e,n,!1),l=Object.assign({},a,s);Object.entries(l).forEach(function(u){var c=ES(u,2),d=c[0],h=c[1],p=a.hasOwnProperty(d)?s.hasOwnProperty(d)?"update":"exit":"enter";i[p].push(p==="update"?[a[d],s[d]]:h)})}else{var r=new Set(t),o=new Set(e);new Set([].concat(ic(r),ic(o))).forEach(function(u){var c=r.has(u)?o.has(u)?"update":"exit":"enter";i[c].push(c==="update"?[u,u]:u)})}return i}function qD(t,e,n){var i=n.objBindAttr,r=i===void 0?"__obj":i,o=n.dataBindAttr,a=o===void 0?"__data":o,s=n.idAccessor,l=n.purge,u=l===void 0?!1:l,c=function(m){return m.hasOwnProperty(a)},d=e.filter(function(v){return!c(v)}),h=e.filter(c).map(function(v){return v[a]}),p=t,g=u?{enter:p,exit:h,update:[]}:XD(h,p,s);return g.update=g.update.map(function(v){var m=ES(v,2),f=m[0],y=m[1];return f!==y&&(y[r]=f[r],y[r][a]=y),y}),g.exit=g.exit.concat(d.map(function(v){return wS({},r,v)})),g}function YD(t,e,n,i,r){var o=r.createObj,a=o===void 0?function(C){return{}}:o,s=r.updateObj,l=s===void 0?function(C,T){}:s,u=r.exitObj,c=u===void 0?function(C){}:u,d=r.objBindAttr,h=d===void 0?"__obj":d,p=r.dataBindAttr,g=p===void 0?"__data":p,v=FD(r,$D),m=qD(t,e,UD({objBindAttr:h,dataBindAttr:g},v)),f=m.enter,y=m.update,_=m.exit;_.forEach(function(C){var T=C[h];delete C[h],c(T),i(T)});var x=M(f),S=[].concat(ic(f),ic(y));b(S),x.forEach(n);function M(C){var T=[];return C.forEach(function(w){var P=a(w);P&&(P[g]=w,w[h]=P,T.push(P))}),T}function b(C){C.forEach(function(T){var w=T[h];w&&(w[g]=T,l(w,T))})}}function KD(t,e){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(e).domain(t);break}return this}const C0=Symbol("implicit");function TS(){var t=new E0,e=[],n=[],i=C0;function r(o){let a=t.get(o);if(a===void 0){if(i!==C0)return i;t.set(o,a=e.push(o)-1)}return n[a%n.length]}return r.domain=function(o){if(!arguments.length)return e.slice();e=[],t=new E0;for(const a of o)t.has(a)||t.set(a,e.push(a)-1);return r},r.range=function(o){return arguments.length?(n=Array.from(o),r):n.slice()},r.unknown=function(o){return arguments.length?(i=o,r):i},r.copy=function(){return TS(e,n).unknown(i)},KD.apply(r,arguments),r}function ZD(t){for(var e=t.length/6|0,n=new Array(e),i=0;i<e;)n[i]="#"+t.slice(i*6,++i*6);return n}const QD=ZD("a6cee31f78b4b2df8a33a02cfb9a99e31a1cfdbf6fff7f00cab2d66a3d9affff99b15928");function rc(t){"@babel/helpers - typeof";return rc=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},rc(t)}var JD=/^\s+/,e3=/\s+$/;function Te(t,e){if(t=t||"",e=e||{},t instanceof Te)return t;if(!(this instanceof Te))return new Te(t,e);var n=t3(t);this._originalInput=t,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=e.format||n.format,this._gradientType=e.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}Te.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3},getLuminance:function(){var e=this.toRgb(),n,i,r,o,a,s;return n=e.r/255,i=e.g/255,r=e.b/255,n<=.03928?o=n/12.92:o=Math.pow((n+.055)/1.055,2.4),i<=.03928?a=i/12.92:a=Math.pow((i+.055)/1.055,2.4),r<=.03928?s=r/12.92:s=Math.pow((r+.055)/1.055,2.4),.2126*o+.7152*a+.0722*s},setAlpha:function(e){return this._a=AS(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=P0(this._r,this._g,this._b);return{h:e.h*360,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=P0(this._r,this._g,this._b),n=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.v*100);return this._a==1?"hsv("+n+", "+i+"%, "+r+"%)":"hsva("+n+", "+i+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=R0(this._r,this._g,this._b);return{h:e.h*360,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=R0(this._r,this._g,this._b),n=Math.round(e.h*360),i=Math.round(e.s*100),r=Math.round(e.l*100);return this._a==1?"hsl("+n+", "+i+"%, "+r+"%)":"hsla("+n+", "+i+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return L0(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return o3(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(pt(this._r,255)*100)+"%",g:Math.round(pt(this._g,255)*100)+"%",b:Math.round(pt(this._b,255)*100)+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(pt(this._r,255)*100)+"%, "+Math.round(pt(this._g,255)*100)+"%, "+Math.round(pt(this._b,255)*100)+"%)":"rgba("+Math.round(pt(this._r,255)*100)+"%, "+Math.round(pt(this._g,255)*100)+"%, "+Math.round(pt(this._b,255)*100)+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":this._a<1?!1:v3[L0(this._r,this._g,this._b,!0)]||!1},toFilter:function(e){var n="#"+D0(this._r,this._g,this._b,this._a),i=n,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=Te(e);i="#"+D0(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+n+",endColorstr="+i+")"},toString:function(e){var n=!!e;e=e||this._format;var i=!1,r=this._a<1&&this._a>=0,o=!n&&r&&(e==="hex"||e==="hex6"||e==="hex3"||e==="hex4"||e==="hex8"||e==="name");return o?e==="name"&&this._a===0?this.toName():this.toRgbString():(e==="rgb"&&(i=this.toRgbString()),e==="prgb"&&(i=this.toPercentageRgbString()),(e==="hex"||e==="hex6")&&(i=this.toHexString()),e==="hex3"&&(i=this.toHexString(!0)),e==="hex4"&&(i=this.toHex8String(!0)),e==="hex8"&&(i=this.toHex8String()),e==="name"&&(i=this.toName()),e==="hsl"&&(i=this.toHslString()),e==="hsv"&&(i=this.toHsvString()),i||this.toHexString())},clone:function(){return Te(this.toString())},_applyModification:function(e,n){var i=e.apply(null,[this].concat([].slice.call(n)));return this._r=i._r,this._g=i._g,this._b=i._b,this.setAlpha(i._a),this},lighten:function(){return this._applyModification(u3,arguments)},brighten:function(){return this._applyModification(c3,arguments)},darken:function(){return this._applyModification(f3,arguments)},desaturate:function(){return this._applyModification(a3,arguments)},saturate:function(){return this._applyModification(s3,arguments)},greyscale:function(){return this._applyModification(l3,arguments)},spin:function(){return this._applyModification(d3,arguments)},_applyCombination:function(e,n){return e.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(m3,arguments)},complement:function(){return this._applyCombination(h3,arguments)},monochromatic:function(){return this._applyCombination(g3,arguments)},splitcomplement:function(){return this._applyCombination(p3,arguments)},triad:function(){return this._applyCombination(I0,[3])},tetrad:function(){return this._applyCombination(I0,[4])}};Te.fromRatio=function(t,e){if(rc(t)=="object"){var n={};for(var i in t)t.hasOwnProperty(i)&&(i==="a"?n[i]=t[i]:n[i]=cs(t[i]));t=n}return Te(t,e)};function t3(t){var e={r:0,g:0,b:0},n=1,i=null,r=null,o=null,a=!1,s=!1;return typeof t=="string"&&(t=S3(t)),rc(t)=="object"&&(Ri(t.r)&&Ri(t.g)&&Ri(t.b)?(e=n3(t.r,t.g,t.b),a=!0,s=String(t.r).substr(-1)==="%"?"prgb":"rgb"):Ri(t.h)&&Ri(t.s)&&Ri(t.v)?(i=cs(t.s),r=cs(t.v),e=r3(t.h,i,r),a=!0,s="hsv"):Ri(t.h)&&Ri(t.s)&&Ri(t.l)&&(i=cs(t.s),o=cs(t.l),e=i3(t.h,i,o),a=!0,s="hsl"),t.hasOwnProperty("a")&&(n=t.a)),n=AS(n),{ok:a,format:t.format||s,r:Math.min(255,Math.max(e.r,0)),g:Math.min(255,Math.max(e.g,0)),b:Math.min(255,Math.max(e.b,0)),a:n}}function n3(t,e,n){return{r:pt(t,255)*255,g:pt(e,255)*255,b:pt(n,255)*255}}function R0(t,e,n){t=pt(t,255),e=pt(e,255),n=pt(n,255);var i=Math.max(t,e,n),r=Math.min(t,e,n),o,a,s=(i+r)/2;if(i==r)o=a=0;else{var l=i-r;switch(a=s>.5?l/(2-i-r):l/(i+r),i){case t:o=(e-n)/l+(e<n?6:0);break;case e:o=(n-t)/l+2;break;case n:o=(t-e)/l+4;break}o/=6}return{h:o,s:a,l:s}}function i3(t,e,n){var i,r,o;t=pt(t,360),e=pt(e,100),n=pt(n,100);function a(u,c,d){return d<0&&(d+=1),d>1&&(d-=1),d<1/6?u+(c-u)*6*d:d<1/2?c:d<2/3?u+(c-u)*(2/3-d)*6:u}if(e===0)i=r=o=n;else{var s=n<.5?n*(1+e):n+e-n*e,l=2*n-s;i=a(l,s,t+1/3),r=a(l,s,t),o=a(l,s,t-1/3)}return{r:i*255,g:r*255,b:o*255}}function P0(t,e,n){t=pt(t,255),e=pt(e,255),n=pt(n,255);var i=Math.max(t,e,n),r=Math.min(t,e,n),o,a,s=i,l=i-r;if(a=i===0?0:l/i,i==r)o=0;else{switch(i){case t:o=(e-n)/l+(e<n?6:0);break;case e:o=(n-t)/l+2;break;case n:o=(t-e)/l+4;break}o/=6}return{h:o,s:a,v:s}}function r3(t,e,n){t=pt(t,360)*6,e=pt(e,100),n=pt(n,100);var i=Math.floor(t),r=t-i,o=n*(1-e),a=n*(1-r*e),s=n*(1-(1-r)*e),l=i%6,u=[n,a,o,o,s,n][l],c=[s,n,n,a,o,o][l],d=[o,o,s,n,n,a][l];return{r:u*255,g:c*255,b:d*255}}function L0(t,e,n,i){var r=[oi(Math.round(t).toString(16)),oi(Math.round(e).toString(16)),oi(Math.round(n).toString(16))];return i&&r[0].charAt(0)==r[0].charAt(1)&&r[1].charAt(0)==r[1].charAt(1)&&r[2].charAt(0)==r[2].charAt(1)?r[0].charAt(0)+r[1].charAt(0)+r[2].charAt(0):r.join("")}function o3(t,e,n,i,r){var o=[oi(Math.round(t).toString(16)),oi(Math.round(e).toString(16)),oi(Math.round(n).toString(16)),oi(CS(i))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}function D0(t,e,n,i){var r=[oi(CS(i)),oi(Math.round(t).toString(16)),oi(Math.round(e).toString(16)),oi(Math.round(n).toString(16))];return r.join("")}Te.equals=function(t,e){return!t||!e?!1:Te(t).toRgbString()==Te(e).toRgbString()};Te.random=function(){return Te.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})};function a3(t,e){e=e===0?0:e||10;var n=Te(t).toHsl();return n.s-=e/100,n.s=Dc(n.s),Te(n)}function s3(t,e){e=e===0?0:e||10;var n=Te(t).toHsl();return n.s+=e/100,n.s=Dc(n.s),Te(n)}function l3(t){return Te(t).desaturate(100)}function u3(t,e){e=e===0?0:e||10;var n=Te(t).toHsl();return n.l+=e/100,n.l=Dc(n.l),Te(n)}function c3(t,e){e=e===0?0:e||10;var n=Te(t).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(e/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(e/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(e/100)))),Te(n)}function f3(t,e){e=e===0?0:e||10;var n=Te(t).toHsl();return n.l-=e/100,n.l=Dc(n.l),Te(n)}function d3(t,e){var n=Te(t).toHsl(),i=(n.h+e)%360;return n.h=i<0?360+i:i,Te(n)}function h3(t){var e=Te(t).toHsl();return e.h=(e.h+180)%360,Te(e)}function I0(t,e){if(isNaN(e)||e<=0)throw new Error("Argument to polyad must be a positive number");for(var n=Te(t).toHsl(),i=[Te(t)],r=360/e,o=1;o<e;o++)i.push(Te({h:(n.h+o*r)%360,s:n.s,l:n.l}));return i}function p3(t){var e=Te(t).toHsl(),n=e.h;return[Te(t),Te({h:(n+72)%360,s:e.s,l:e.l}),Te({h:(n+216)%360,s:e.s,l:e.l})]}function m3(t,e,n){e=e||6,n=n||30;var i=Te(t).toHsl(),r=360/n,o=[Te(t)];for(i.h=(i.h-(r*e>>1)+720)%360;--e;)i.h=(i.h+r)%360,o.push(Te(i));return o}function g3(t,e){e=e||6;for(var n=Te(t).toHsv(),i=n.h,r=n.s,o=n.v,a=[],s=1/e;e--;)a.push(Te({h:i,s:r,v:o})),o=(o+s)%1;return a}Te.mix=function(t,e,n){n=n===0?0:n||50;var i=Te(t).toRgb(),r=Te(e).toRgb(),o=n/100,a={r:(r.r-i.r)*o+i.r,g:(r.g-i.g)*o+i.g,b:(r.b-i.b)*o+i.b,a:(r.a-i.a)*o+i.a};return Te(a)};Te.readability=function(t,e){var n=Te(t),i=Te(e);return(Math.max(n.getLuminance(),i.getLuminance())+.05)/(Math.min(n.getLuminance(),i.getLuminance())+.05)};Te.isReadable=function(t,e,n){var i=Te.readability(t,e),r,o;switch(o=!1,r=M3(n),r.level+r.size){case"AAsmall":case"AAAlarge":o=i>=4.5;break;case"AAlarge":o=i>=3;break;case"AAAsmall":o=i>=7;break}return o};Te.mostReadable=function(t,e,n){var i=null,r=0,o,a,s,l;n=n||{},a=n.includeFallbackColors,s=n.level,l=n.size;for(var u=0;u<e.length;u++)o=Te.readability(t,e[u]),o>r&&(r=o,i=Te(e[u]));return Te.isReadable(t,i,{level:s,size:l})||!a?i:(n.includeFallbackColors=!1,Te.mostReadable(t,["#fff","#000"],n))};var Wh=Te.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},v3=Te.hexNames=_3(Wh);function _3(t){var e={};for(var n in t)t.hasOwnProperty(n)&&(e[t[n]]=n);return e}function AS(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function pt(t,e){y3(t)&&(t="100%");var n=x3(t);return t=Math.min(e,Math.max(0,parseFloat(t))),n&&(t=parseInt(t*e,10)/100),Math.abs(t-e)<1e-6?1:t%e/parseFloat(e)}function Dc(t){return Math.min(1,Math.max(0,t))}function En(t){return parseInt(t,16)}function y3(t){return typeof t=="string"&&t.indexOf(".")!=-1&&parseFloat(t)===1}function x3(t){return typeof t=="string"&&t.indexOf("%")!=-1}function oi(t){return t.length==1?"0"+t:""+t}function cs(t){return t<=1&&(t=t*100+"%"),t}function CS(t){return Math.round(parseFloat(t)*255).toString(16)}function O0(t){return En(t)/255}var Kn=function(){var t="[-\\+]?\\d+%?",e="[-\\+]?\\d*\\.\\d+%?",n="(?:"+e+")|(?:"+t+")",i="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?",r="[\\s|\\(]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")[,|\\s]+("+n+")\\s*\\)?";return{CSS_UNIT:new RegExp(n),rgb:new RegExp("rgb"+i),rgba:new RegExp("rgba"+r),hsl:new RegExp("hsl"+i),hsla:new RegExp("hsla"+r),hsv:new RegExp("hsv"+i),hsva:new RegExp("hsva"+r),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/}}();function Ri(t){return!!Kn.CSS_UNIT.exec(t)}function S3(t){t=t.replace(JD,"").replace(e3,"").toLowerCase();var e=!1;if(Wh[t])t=Wh[t],e=!0;else if(t=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};var n;return(n=Kn.rgb.exec(t))?{r:n[1],g:n[2],b:n[3]}:(n=Kn.rgba.exec(t))?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=Kn.hsl.exec(t))?{h:n[1],s:n[2],l:n[3]}:(n=Kn.hsla.exec(t))?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=Kn.hsv.exec(t))?{h:n[1],s:n[2],v:n[3]}:(n=Kn.hsva.exec(t))?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=Kn.hex8.exec(t))?{r:En(n[1]),g:En(n[2]),b:En(n[3]),a:O0(n[4]),format:e?"name":"hex8"}:(n=Kn.hex6.exec(t))?{r:En(n[1]),g:En(n[2]),b:En(n[3]),format:e?"name":"hex"}:(n=Kn.hex4.exec(t))?{r:En(n[1]+""+n[1]),g:En(n[2]+""+n[2]),b:En(n[3]+""+n[3]),a:O0(n[4]+""+n[4]),format:e?"name":"hex8"}:(n=Kn.hex3.exec(t))?{r:En(n[1]+""+n[1]),g:En(n[2]+""+n[2]),b:En(n[3]+""+n[3]),format:e?"name":"hex"}:!1}function M3(t){var e,n;return t=t||{level:"AA",size:"small"},e=(t.level||"AA").toUpperCase(),n=(t.size||"small").toLowerCase(),e!=="AA"&&e!=="AAA"&&(e="AA"),n!=="small"&&n!=="large"&&(n="small"),{level:e,size:n}}function w3(t,e,n){return e=oc(e),I3(t,Tm()?Reflect.construct(e,n||[],oc(t).constructor):e.apply(t,n))}function E3(t,e,n){if(Tm())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var r=new(t.bind.apply(t,i));return r}function Tm(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(Tm=function(){return!!t})()}function b3(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e!==0)for(;!(l=(i=o.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(c){u=!0,r=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw r}}return s}}function N0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function RS(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?N0(Object(n),!0).forEach(function(i){Am(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function T3(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function A3(t){var e=T3(t,"string");return typeof e=="symbol"?e:String(e)}function jh(t){"@babel/helpers - typeof";return jh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},jh(t)}function C3(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function R3(t,e,n){return Object.defineProperty(t,"prototype",{writable:!1}),t}function Am(t,e,n){return e=A3(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function P3(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&$h(t,e)}function oc(t){return oc=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},oc(t)}function $h(t,e){return $h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},$h(t,e)}function L3(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function D3(t,e){if(t==null)return{};var n=L3(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function PS(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function I3(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return PS(t)}function U0(t,e){return N3(t)||b3(t,e)||LS(t,e)||F3()}function Jn(t){return O3(t)||U3(t)||LS(t)||k3()}function O3(t){if(Array.isArray(t))return Xh(t)}function N3(t){if(Array.isArray(t))return t}function U3(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function LS(t,e){if(t){if(typeof t=="string")return Xh(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xh(t,e)}}function Xh(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function k3(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function F3(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var z3=function t(e){e instanceof Array?e.forEach(t):(e.map&&e.map.dispose(),e.dispose())},B3=function t(e){e.geometry&&e.geometry.dispose(),e.material&&z3(e.material),e.texture&&e.texture.dispose(),e.children&&e.children.forEach(t)},qh=function(e){for(;e.children.length;){var n=e.children[0];e.remove(n),B3(n)}},H3=["objFilter"];function es(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=n.objFilter,r=i===void 0?function(){return!0}:i,o=D3(n,H3);return YD(t,e.children.filter(r),function(a){return e.add(a)},function(a){e.remove(a),qh(a)},RS({objBindAttr:"__threeObj"},o))}var ts=function(e){return isNaN(e)?parseInt(Te(e).toHex(),16):e},Zf=function(e){return isNaN(e)?Te(e).getAlpha():1},V3=TS(QD);function k0(t,e,n){!e||typeof n!="string"||t.filter(function(i){return!i[n]}).forEach(function(i){i[n]=V3(e(i))})}function G3(t,e){var n=t.nodes,i=t.links,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=r.nodeFilter,a=o===void 0?function(){return!0}:o,s=r.onLoopError,l=s===void 0?function(p){throw"Invalid DAG structure! Found cycle in node path: ".concat(p.join(" -> "),".")}:s,u={};n.forEach(function(p){return u[e(p)]={data:p,out:[],depth:-1,skip:!a(p)}}),i.forEach(function(p){var g=p.source,v=p.target,m=x(g),f=x(v);if(!u.hasOwnProperty(m))throw"Missing source node with id: ".concat(m);if(!u.hasOwnProperty(f))throw"Missing target node with id: ".concat(f);var y=u[m],_=u[f];y.out.push(_);function x(S){return jh(S)==="object"?e(S):S}});var c=[];h(Object.values(u));var d=Object.assign.apply(Object,[{}].concat(Jn(Object.entries(u).filter(function(p){var g=U0(p,2),v=g[1];return!v.skip}).map(function(p){var g=U0(p,2),v=g[0],m=g[1];return Am({},v,m.depth)}))));return d;function h(p){for(var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,m=function(){var x=p[f];if(g.indexOf(x)!==-1){var S=[].concat(Jn(g.slice(g.indexOf(x))),[x]).map(function(M){return e(M.data)});return c.some(function(M){return M.length===S.length&&M.every(function(b,C){return b===S[C]})})||(c.push(S),l(S)),1}v>x.depth&&(x.depth=v,h(x.out,[].concat(Jn(g),[x]),v+(x.skip?0:1)))},f=0,y=p.length;f<y;f++)m()}}var Ie=window.THREE?window.THREE:{Group:ta,Mesh:Bn,MeshLambertMaterial:uP,Color:qe,BufferGeometry:_n,BufferAttribute:Vn,Matrix4:st,Vector3:O,SphereGeometry:Pc,CylinderGeometry:Rc,TubeGeometry:hm,ConeGeometry:dm,Line:XR,LineBasicMaterial:kx,QuadraticBezierCurve3:fm,CubicBezierCurve3:zx,Box3:mo},F0={graph:iL,forcelayout:kL},W3=2,z0=new Ie.BufferGeometry().setAttribute?"setAttribute":"addAttribute",Jl=new Ie.BufferGeometry().applyMatrix4?"applyMatrix4":"applyMatrix",j3=bm({props:{jsonUrl:{onChange:function(e,n){var i=this;e&&!n.fetchingJson&&(n.fetchingJson=!0,n.onLoading(),fetch(e).then(function(r){return r.json()}).then(function(r){n.fetchingJson=!1,n.onFinishLoading(r),i.graphData(r)}))},triggerUpdate:!1},graphData:{default:{nodes:[],links:[]},onChange:function(e,n){n.engineRunning=!1}},numDimensions:{default:3,onChange:function(e,n){var i=n.d3ForceLayout.force("charge");i&&i.strength(e>2?-60:-30),e<3&&r(n.graphData.nodes,"z"),e<2&&r(n.graphData.nodes,"y");function r(o,a){o.forEach(function(s){delete s[a],delete s["v".concat(a)]})}}},dagMode:{onChange:function(e,n){!e&&n.forceEngine==="d3"&&(n.graphData.nodes||[]).forEach(function(i){return i.fx=i.fy=i.fz=void 0})}},dagLevelDistance:{},dagNodeFilter:{default:function(e){return!0}},onDagError:{triggerUpdate:!1},nodeRelSize:{default:4},nodeId:{default:"id"},nodeVal:{default:"val"},nodeResolution:{default:8},nodeColor:{default:"color"},nodeAutoColorBy:{},nodeOpacity:{default:.75},nodeVisibility:{default:!0},nodeThreeObject:{},nodeThreeObjectExtend:{default:!1},nodePositionUpdate:{triggerUpdate:!1},linkSource:{default:"source"},linkTarget:{default:"target"},linkVisibility:{default:!0},linkColor:{default:"color"},linkAutoColorBy:{},linkOpacity:{default:.2},linkWidth:{},linkResolution:{default:6},linkCurvature:{default:0,triggerUpdate:!1},linkCurveRotation:{default:0,triggerUpdate:!1},linkMaterial:{},linkThreeObject:{},linkThreeObjectExtend:{default:!1},linkPositionUpdate:{triggerUpdate:!1},linkDirectionalArrowLength:{default:0},linkDirectionalArrowColor:{},linkDirectionalArrowRelPos:{default:.5,triggerUpdate:!1},linkDirectionalArrowResolution:{default:8},linkDirectionalParticles:{default:0},linkDirectionalParticleSpeed:{default:.01,triggerUpdate:!1},linkDirectionalParticleWidth:{default:.5},linkDirectionalParticleColor:{},linkDirectionalParticleResolution:{default:4},forceEngine:{default:"d3"},d3AlphaMin:{default:0},d3AlphaDecay:{default:.0228,triggerUpdate:!1,onChange:function(e,n){n.d3ForceLayout.alphaDecay(e)}},d3AlphaTarget:{default:0,triggerUpdate:!1,onChange:function(e,n){n.d3ForceLayout.alphaTarget(e)}},d3VelocityDecay:{default:.4,triggerUpdate:!1,onChange:function(e,n){n.d3ForceLayout.velocityDecay(e)}},ngraphPhysics:{default:{timeStep:20,gravity:-1.2,theta:.8,springLength:30,springCoefficient:8e-4,dragCoefficient:.02}},warmupTicks:{default:0,triggerUpdate:!1},cooldownTicks:{default:1/0,triggerUpdate:!1},cooldownTime:{default:15e3,triggerUpdate:!1},onLoading:{default:function(){},triggerUpdate:!1},onFinishLoading:{default:function(){},triggerUpdate:!1},onUpdate:{default:function(){},triggerUpdate:!1},onFinishUpdate:{default:function(){},triggerUpdate:!1},onEngineTick:{default:function(){},triggerUpdate:!1},onEngineStop:{default:function(){},triggerUpdate:!1}},methods:{refresh:function(e){return e._flushObjects=!0,e._rerender(),this},d3Force:function(e,n,i){return i===void 0?e.d3ForceLayout.force(n):(e.d3ForceLayout.force(n,i),this)},d3ReheatSimulation:function(e){return e.d3ForceLayout.alpha(1),this.resetCountdown(),this},resetCountdown:function(e){return e.cntTicks=0,e.startTickTime=new Date,e.engineRunning=!0,this},tickFrame:function(e){var n=e.forceEngine!=="ngraph";return e.engineRunning&&i(),r(),o(),this;function i(){++e.cntTicks>e.cooldownTicks||new Date-e.startTickTime>e.cooldownTime||n&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin?(e.engineRunning=!1,e.onEngineStop()):(e.layout[n?"tick":"step"](),e.onEngineTick());var a=Qe(e.nodeThreeObjectExtend);e.graphData.nodes.forEach(function(h){var p=h.__threeObj;if(p){var g=n?h:e.layout.getNodePosition(h[e.nodeId]),v=a(h);(!e.nodePositionUpdate||!e.nodePositionUpdate(v?p.children[0]:p,{x:g.x,y:g.y,z:g.z},h)||v)&&(p.position.x=g.x,p.position.y=g.y||0,p.position.z=g.z||0)}});var s=Qe(e.linkWidth),l=Qe(e.linkCurvature),u=Qe(e.linkCurveRotation),c=Qe(e.linkThreeObjectExtend);e.graphData.links.forEach(function(h){var p=h.__lineObj;if(p){var g=n?h:e.layout.getLinkPosition(e.layout.graph.getLink(h.source,h.target).id),v=g[n?"source":"from"],m=g[n?"target":"to"];if(!(!v||!m||!v.hasOwnProperty("x")||!m.hasOwnProperty("x"))){d(h);var f=c(h);if(!(e.linkPositionUpdate&&e.linkPositionUpdate(f?p.children[1]:p,{start:{x:v.x,y:v.y,z:v.z},end:{x:m.x,y:m.y,z:m.z}},h)&&!f)){var y=30,_=h.__curve,x=p.children.length?p.children[0]:p;if(x.type==="Line"){if(_)x.geometry.setFromPoints(_.getPoints(y));else{var S=x.geometry.getAttribute("position");(!S||!S.array||S.array.length!==6)&&x.geometry[z0]("position",S=new Ie.BufferAttribute(new Float32Array(2*3),3)),S.array[0]=v.x,S.array[1]=v.y||0,S.array[2]=v.z||0,S.array[3]=m.x,S.array[4]=m.y||0,S.array[5]=m.z||0,S.needsUpdate=!0}x.geometry.computeBoundingSphere()}else if(x.type==="Mesh")if(_){x.geometry.type.match(/^Tube(Buffer)?Geometry$/)||(x.position.set(0,0,0),x.rotation.set(0,0,0),x.scale.set(1,1,1));var z=Math.ceil(s(h)*10)/10,G=z/2,N=new Ie.TubeGeometry(_,y,G,e.linkResolution,!1);x.geometry.dispose(),x.geometry=N}else{if(!x.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)){var M=Math.ceil(s(h)*10)/10,b=M/2,C=new Ie.CylinderGeometry(b,b,1,e.linkResolution,1,!1);C[Jl](new Ie.Matrix4().makeTranslation(0,1/2,0)),C[Jl](new Ie.Matrix4().makeRotationX(Math.PI/2)),x.geometry.dispose(),x.geometry=C}var T=new Ie.Vector3(v.x,v.y||0,v.z||0),w=new Ie.Vector3(m.x,m.y||0,m.z||0),P=T.distanceTo(w);x.position.x=T.x,x.position.y=T.y,x.position.z=T.z,x.scale.z=P,x.parent.localToWorld(w),x.lookAt(w)}}}}});function d(h){var p=n?h:e.layout.getLinkPosition(e.layout.graph.getLink(h.source,h.target).id),g=p[n?"source":"from"],v=p[n?"target":"to"];if(!(!g||!v||!g.hasOwnProperty("x")||!v.hasOwnProperty("x"))){var m=l(h);if(!m)h.__curve=null;else{var f=new Ie.Vector3(g.x,g.y||0,g.z||0),y=new Ie.Vector3(v.x,v.y||0,v.z||0),_=f.distanceTo(y),x,S=u(h);if(_>0){var M=v.x-g.x,b=v.y-g.y||0,C=new Ie.Vector3().subVectors(y,f),T=C.clone().multiplyScalar(m).cross(M!==0||b!==0?new Ie.Vector3(0,0,1):new Ie.Vector3(0,1,0)).applyAxisAngle(C.normalize(),S).add(new Ie.Vector3().addVectors(f,y).divideScalar(2));x=new Ie.QuadraticBezierCurve3(f,T,y)}else{var w=m*70,P=-S,z=P+Math.PI/2;x=new Ie.CubicBezierCurve3(f,new Ie.Vector3(w*Math.cos(z),w*Math.sin(z),0).add(f),new Ie.Vector3(w*Math.cos(P),w*Math.sin(P),0).add(f),y)}h.__curve=x}}}}function r(){var a=Qe(e.linkDirectionalArrowRelPos),s=Qe(e.linkDirectionalArrowLength),l=Qe(e.nodeVal);e.graphData.links.forEach(function(u){var c=u.__arrowObj;if(c){var d=n?u:e.layout.getLinkPosition(e.layout.graph.getLink(u.source,u.target).id),h=d[n?"source":"from"],p=d[n?"target":"to"];if(!(!h||!p||!h.hasOwnProperty("x")||!p.hasOwnProperty("x"))){var g=Math.cbrt(Math.max(0,l(h)||1))*e.nodeRelSize,v=Math.cbrt(Math.max(0,l(p)||1))*e.nodeRelSize,m=s(u),f=a(u),y=u.__curve?function(C){return u.__curve.getPoint(C)}:function(C){var T=function(P,z,G,N){return z[P]+(G[P]-z[P])*N||0};return{x:T("x",h,p,C),y:T("y",h,p,C),z:T("z",h,p,C)}},_=u.__curve?u.__curve.getLength():Math.sqrt(["x","y","z"].map(function(C){return Math.pow((p[C]||0)-(h[C]||0),2)}).reduce(function(C,T){return C+T},0)),x=g+m+(_-g-v-m)*f,S=y(x/_),M=y((x-m)/_);["x","y","z"].forEach(function(C){return c.position[C]=M[C]});var b=E3(Ie.Vector3,Jn(["x","y","z"].map(function(C){return S[C]})));c.parent.localToWorld(b),c.lookAt(b)}}})}function o(){var a=Qe(e.linkDirectionalParticleSpeed);e.graphData.links.forEach(function(s){var l=s.__photonsObj&&s.__photonsObj.children,u=s.__singleHopPhotonsObj&&s.__singleHopPhotonsObj.children;if(!((!u||!u.length)&&(!l||!l.length))){var c=n?s:e.layout.getLinkPosition(e.layout.graph.getLink(s.source,s.target).id),d=c[n?"source":"from"],h=c[n?"target":"to"];if(!(!d||!h||!d.hasOwnProperty("x")||!h.hasOwnProperty("x"))){var p=a(s),g=s.__curve?function(m){return s.__curve.getPoint(m)}:function(m){var f=function(_,x,S,M){return x[_]+(S[_]-x[_])*M||0};return{x:f("x",d,h,m),y:f("y",d,h,m),z:f("z",d,h,m)}},v=[].concat(Jn(l||[]),Jn(u||[]));v.forEach(function(m,f){var y=m.parent.__linkThreeObjType==="singleHopPhotons";if(m.hasOwnProperty("__progressRatio")||(m.__progressRatio=y?0:f/l.length),m.__progressRatio+=p,m.__progressRatio>=1)if(!y)m.__progressRatio=m.__progressRatio%1;else{m.parent.remove(m),qh(m);return}var _=m.__progressRatio,x=g(_);["x","y","z"].forEach(function(S){return m.position[S]=x[S]})})}}})}},emitParticle:function(e,n){if(n&&e.graphData.links.includes(n)){if(!n.__singleHopPhotonsObj){var i=new Ie.Group;i.__linkThreeObjType="singleHopPhotons",n.__singleHopPhotonsObj=i,e.graphScene.add(i)}var r=Qe(e.linkDirectionalParticleWidth),o=Math.ceil(r(n)*10)/10/2,a=e.linkDirectionalParticleResolution,s=new Ie.SphereGeometry(o,a,a),l=Qe(e.linkColor),u=Qe(e.linkDirectionalParticleColor),c=u(n)||l(n)||"#f0f0f0",d=new Ie.Color(ts(c)),h=e.linkOpacity*3,p=new Ie.MeshLambertMaterial({color:d,transparent:!0,opacity:h});n.__singleHopPhotonsObj.add(new Ie.Mesh(s,p))}return this},getGraphBbox:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0};if(!e.initialised)return null;var i=function r(o){var a=[];if(o.geometry){o.geometry.computeBoundingBox();var s=new Ie.Box3;s.copy(o.geometry.boundingBox).applyMatrix4(o.matrixWorld),a.push(s)}return a.concat.apply(a,Jn((o.children||[]).filter(function(l){return!l.hasOwnProperty("__graphObjType")||l.__graphObjType==="node"&&n(l.__data)}).map(r)))}(e.graphScene);return i.length?Object.assign.apply(Object,Jn(["x","y","z"].map(function(r){return Am({},r,[MD(i,function(o){return o.min[r]}),SD(i,function(o){return o.max[r]})])}))):null}},stateInit:function(){return{d3ForceLayout:q2().force("link",I2()).force("charge",Y2()).force("center",kP()).force("dagRadial",null).stop(),engineRunning:!1}},init:function(e,n){n.graphScene=e},update:function(e,n){var i=function(j){return j.some(function(te){return n.hasOwnProperty(te)})};if(e.engineRunning=!1,e.onUpdate(),e.nodeAutoColorBy!==null&&i(["nodeAutoColorBy","graphData","nodeColor"])&&k0(e.graphData.nodes,Qe(e.nodeAutoColorBy),e.nodeColor),e.linkAutoColorBy!==null&&i(["linkAutoColorBy","graphData","linkColor"])&&k0(e.graphData.links,Qe(e.linkAutoColorBy),e.linkColor),e._flushObjects||i(["graphData","nodeThreeObject","nodeThreeObjectExtend","nodeVal","nodeColor","nodeVisibility","nodeRelSize","nodeResolution","nodeOpacity"])){var r=Qe(e.nodeThreeObject),o=Qe(e.nodeThreeObjectExtend),a=Qe(e.nodeVal),s=Qe(e.nodeColor),l=Qe(e.nodeVisibility),u={},c={};es(e.graphData.nodes.filter(l),e.graphScene,{purge:e._flushObjects||i(["nodeThreeObject","nodeThreeObjectExtend"]),objFilter:function(j){return j.__graphObjType==="node"},createObj:function(j){var te=r(j),U=o(j);te&&e.nodeThreeObject===te&&(te=te.clone());var ne;return te&&!U?ne=te:(ne=new Ie.Mesh,ne.__graphDefaultObj=!0,te&&U&&ne.add(te)),ne.__graphObjType="node",ne},updateObj:function(j,te){if(j.__graphDefaultObj){var U=a(te)||1,ne=Math.cbrt(U)*e.nodeRelSize,he=e.nodeResolution;(!j.geometry.type.match(/^Sphere(Buffer)?Geometry$/)||j.geometry.parameters.radius!==ne||j.geometry.parameters.widthSegments!==he)&&(u.hasOwnProperty(U)||(u[U]=new Ie.SphereGeometry(ne,he,he)),j.geometry.dispose(),j.geometry=u[U]);var ge=s(te),Ae=new Ie.Color(ts(ge||"#ffffaa")),D=e.nodeOpacity*Zf(ge);(j.material.type!=="MeshLambertMaterial"||!j.material.color.equals(Ae)||j.material.opacity!==D)&&(c.hasOwnProperty(ge)||(c[ge]=new Ie.MeshLambertMaterial({color:Ae,transparent:!0,opacity:D})),j.material.dispose(),j.material=c[ge])}}})}if(e._flushObjects||i(["graphData","linkThreeObject","linkThreeObjectExtend","linkMaterial","linkColor","linkWidth","linkVisibility","linkResolution","linkOpacity","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution"])){var d=Qe(e.linkThreeObject),h=Qe(e.linkThreeObjectExtend),p=Qe(e.linkMaterial),g=Qe(e.linkVisibility),v=Qe(e.linkColor),m=Qe(e.linkWidth),f={},y={},_={},x=e.graphData.links.filter(g);if(es(x,e.graphScene,{objBindAttr:"__lineObj",purge:e._flushObjects||i(["linkThreeObject","linkThreeObjectExtend","linkWidth"]),objFilter:function(j){return j.__graphObjType==="link"},exitObj:function(j){var te=j.__data&&j.__data.__singleHopPhotonsObj;te&&(te.parent.remove(te),qh(te),delete j.__data.__singleHopPhotonsObj)},createObj:function(j){var te=d(j),U=h(j);te&&e.linkThreeObject===te&&(te=te.clone());var ne;if(!te||U){var he=!!m(j);if(he)ne=new Ie.Mesh;else{var ge=new Ie.BufferGeometry;ge[z0]("position",new Ie.BufferAttribute(new Float32Array(2*3),3)),ne=new Ie.Line(ge)}}var Ae;return te?U?(Ae=new Ie.Group,Ae.__graphDefaultObj=!0,Ae.add(ne),Ae.add(te)):Ae=te:(Ae=ne,Ae.__graphDefaultObj=!0),Ae.renderOrder=10,Ae.__graphObjType="link",Ae},updateObj:function(j,te){if(j.__graphDefaultObj){var U=j.children.length?j.children[0]:j,ne=Math.ceil(m(te)*10)/10,he=!!ne;if(he){var ge=ne/2,Ae=e.linkResolution;if(!U.geometry.type.match(/^Cylinder(Buffer)?Geometry$/)||U.geometry.parameters.radiusTop!==ge||U.geometry.parameters.radialSegments!==Ae){if(!f.hasOwnProperty(ne)){var D=new Ie.CylinderGeometry(ge,ge,1,Ae,1,!1);D[Jl](new Ie.Matrix4().makeTranslation(0,1/2,0)),D[Jl](new Ie.Matrix4().makeRotationX(Math.PI/2)),f[ne]=D}U.geometry.dispose(),U.geometry=f[ne]}}var it=p(te);if(it)U.material=it;else{var Ue=v(te),je=new Ie.Color(ts(Ue||"#f0f0f0")),Se=e.linkOpacity*Zf(Ue),Ze=he?"MeshLambertMaterial":"LineBasicMaterial";if(U.material.type!==Ze||!U.material.color.equals(je)||U.material.opacity!==Se){var De=he?y:_;De.hasOwnProperty(Ue)||(De[Ue]=new Ie[Ze]({color:je,transparent:Se<1,opacity:Se,depthWrite:Se>=1})),U.material.dispose(),U.material=De[Ue]}}}}}),e.linkDirectionalArrowLength||n.hasOwnProperty("linkDirectionalArrowLength")){var S=Qe(e.linkDirectionalArrowLength),M=Qe(e.linkDirectionalArrowColor);es(x.filter(S),e.graphScene,{objBindAttr:"__arrowObj",objFilter:function(j){return j.__linkThreeObjType==="arrow"},createObj:function(){var j=new Ie.Mesh(void 0,new Ie.MeshLambertMaterial({transparent:!0}));return j.__linkThreeObjType="arrow",j},updateObj:function(j,te){var U=S(te),ne=e.linkDirectionalArrowResolution;if(!j.geometry.type.match(/^Cone(Buffer)?Geometry$/)||j.geometry.parameters.height!==U||j.geometry.parameters.radialSegments!==ne){var he=new Ie.ConeGeometry(U*.25,U,ne);he.translate(0,U/2,0),he.rotateX(Math.PI/2),j.geometry.dispose(),j.geometry=he}var ge=M(te)||v(te)||"#f0f0f0";j.material.color=new Ie.Color(ts(ge)),j.material.opacity=e.linkOpacity*3*Zf(ge)}})}if(e.linkDirectionalParticles||n.hasOwnProperty("linkDirectionalParticles")){var b=Qe(e.linkDirectionalParticles),C=Qe(e.linkDirectionalParticleWidth),T=Qe(e.linkDirectionalParticleColor),w={},P={};es(x.filter(b),e.graphScene,{objBindAttr:"__photonsObj",objFilter:function(j){return j.__linkThreeObjType==="photons"},createObj:function(){var j=new Ie.Group;return j.__linkThreeObjType="photons",j},updateObj:function(j,te){var U=Math.round(Math.abs(b(te))),ne=!!j.children.length&&j.children[0],he=Math.ceil(C(te)*10)/10/2,ge=e.linkDirectionalParticleResolution,Ae;ne&&ne.geometry.parameters.radius===he&&ne.geometry.parameters.widthSegments===ge?Ae=ne.geometry:(P.hasOwnProperty(he)||(P[he]=new Ie.SphereGeometry(he,ge,ge)),Ae=P[he],ne&&ne.geometry.dispose());var D=T(te)||v(te)||"#f0f0f0",it=new Ie.Color(ts(D)),Ue=e.linkOpacity*3,je;ne&&ne.material.color.equals(it)&&ne.material.opacity===Ue?je=ne.material:(w.hasOwnProperty(D)||(w[D]=new Ie.MeshLambertMaterial({color:it,transparent:!0,opacity:Ue})),je=w[D],ne&&ne.material.dispose()),es(Jn(new Array(U)).map(function(Se,Ze){return{idx:Ze}}),j,{idAccessor:function(Ze){return Ze.idx},createObj:function(){return new Ie.Mesh(Ae,je)},updateObj:function(Ze){Ze.geometry=Ae,Ze.material=je}})}})}}if(e._flushObjects=!1,i(["graphData","nodeId","linkSource","linkTarget","numDimensions","forceEngine","dagMode","dagNodeFilter","dagLevelDistance"])){e.engineRunning=!1,e.graphData.links.forEach(function(B){B.source=B[e.linkSource],B.target=B[e.linkTarget]});var z=e.forceEngine!=="ngraph",G;if(z){(G=e.d3ForceLayout).stop().alpha(1).numDimensions(e.numDimensions).nodes(e.graphData.nodes);var N=e.d3ForceLayout.force("link");N&&N.id(function(B){return B[e.nodeId]}).links(e.graphData.links);var I=e.dagMode&&G3(e.graphData,function(B){return B[e.nodeId]},{nodeFilter:e.dagNodeFilter,onLoopError:e.onDagError||void 0}),k=Math.max.apply(Math,Jn(Object.values(I||[]))),J=e.dagLevelDistance||e.graphData.nodes.length/(k||1)*W3*(["radialin","radialout"].indexOf(e.dagMode)!==-1?.7:1);if(e.dagMode){var F=function(j,te){return function(U){return j?(I[U[e.nodeId]]-k/2)*J*(te?-1:1):void 0}},ie=F(["lr","rl"].indexOf(e.dagMode)!==-1,e.dagMode==="rl"),W=F(["td","bu"].indexOf(e.dagMode)!==-1,e.dagMode==="td"),Q=F(["zin","zout"].indexOf(e.dagMode)!==-1,e.dagMode==="zout");e.graphData.nodes.filter(e.dagNodeFilter).forEach(function(B){B.fx=ie(B),B.fy=W(B),B.fz=Q(B)})}e.d3ForceLayout.force("dagRadial",["radialin","radialout"].indexOf(e.dagMode)!==-1?K2(function(B){var j=I[B[e.nodeId]]||-1;return(e.dagMode==="radialin"?k-j:j)*J}).strength(function(B){return e.dagNodeFilter(B)?1:0}):null)}else{var oe=F0.graph();e.graphData.nodes.forEach(function(B){oe.addNode(B[e.nodeId])}),e.graphData.links.forEach(function(B){oe.addLink(B.source,B.target)}),G=F0.forcelayout(oe,RS({dimensions:e.numDimensions},e.ngraphPhysics)),G.graph=oe}for(var we=0;we<e.warmupTicks&&!(z&&e.d3AlphaMin>0&&e.d3ForceLayout.alpha()<e.d3AlphaMin);we++)G[z?"tick":"step"]();e.layout=G,this.resetCountdown()}e.engineRunning=!0,e.onFinishUpdate()}});function $3(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Object,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,i=function(r){P3(o,r);function o(){var a;C3(this,o);for(var s=arguments.length,l=new Array(s),u=0;u<s;u++)l[u]=arguments[u];return a=w3(this,o,[].concat(l)),a.__kapsuleInstance=t().apply(void 0,[].concat(Jn(n?[PS(a)]:[]),l)),a}return R3(o)}(e);return Object.keys(t()).forEach(function(r){return i.prototype[r]=function(){var o,a=(o=this.__kapsuleInstance)[r].apply(o,arguments);return a===this.__kapsuleInstance?this:a}}),i}var X3=window.THREE?window.THREE:{Group:ta},DS=$3(j3,X3.Group,!0);const Qf={type:"change"},Jf={type:"start"},ed={type:"end"};class q3 extends ci{constructor(e,n){super();const i=this,r={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:hi.ROTATE,MIDDLE:hi.DOLLY,RIGHT:hi.PAN},this.target=new O;const o=1e-6,a=new O;let s=1,l=r.NONE,u=r.NONE,c=0,d=0,h=0;const p=new O,g=new fe,v=new fe,m=new O,f=new fe,y=new fe,_=new fe,x=new fe,S=[],M={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const U=i.domElement.getBoundingClientRect(),ne=i.domElement.ownerDocument.documentElement;i.screen.left=U.left+window.pageXOffset-ne.clientLeft,i.screen.top=U.top+window.pageYOffset-ne.clientTop,i.screen.width=U.width,i.screen.height=U.height};const b=function(){const U=new fe;return function(he,ge){return U.set((he-i.screen.left)/i.screen.width,(ge-i.screen.top)/i.screen.height),U}}(),C=function(){const U=new fe;return function(he,ge){return U.set((he-i.screen.width*.5-i.screen.left)/(i.screen.width*.5),(i.screen.height+2*(i.screen.top-ge))/i.screen.width),U}}();this.rotateCamera=function(){const U=new O,ne=new ui,he=new O,ge=new O,Ae=new O,D=new O;return function(){D.set(v.x-g.x,v.y-g.y,0);let Ue=D.length();Ue?(p.copy(i.object.position).sub(i.target),he.copy(p).normalize(),ge.copy(i.object.up).normalize(),Ae.crossVectors(ge,he).normalize(),ge.setLength(v.y-g.y),Ae.setLength(v.x-g.x),D.copy(ge.add(Ae)),U.crossVectors(D,p).normalize(),Ue*=i.rotateSpeed,ne.setFromAxisAngle(U,Ue),p.applyQuaternion(ne),i.object.up.applyQuaternion(ne),m.copy(U),h=Ue):!i.staticMoving&&h&&(h*=Math.sqrt(1-i.dynamicDampingFactor),p.copy(i.object.position).sub(i.target),ne.setFromAxisAngle(m,h),p.applyQuaternion(ne),i.object.up.applyQuaternion(ne)),g.copy(v)}}(),this.zoomCamera=function(){let U;l===r.TOUCH_ZOOM_PAN?(U=c/d,c=d,i.object.isPerspectiveCamera?p.multiplyScalar(U):i.object.isOrthographicCamera?(i.object.zoom=Dh.clamp(i.object.zoom/U,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(U=1+(y.y-f.y)*i.zoomSpeed,U!==1&&U>0&&(i.object.isPerspectiveCamera?p.multiplyScalar(U):i.object.isOrthographicCamera?(i.object.zoom=Dh.clamp(i.object.zoom/U,i.minZoom,i.maxZoom),s!==i.object.zoom&&i.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),i.staticMoving?f.copy(y):f.y+=(y.y-f.y)*this.dynamicDampingFactor)},this.panCamera=function(){const U=new fe,ne=new O,he=new O;return function(){if(U.copy(x).sub(_),U.lengthSq()){if(i.object.isOrthographicCamera){const Ae=(i.object.right-i.object.left)/i.object.zoom/i.domElement.clientWidth,D=(i.object.top-i.object.bottom)/i.object.zoom/i.domElement.clientWidth;U.x*=Ae,U.y*=D}U.multiplyScalar(p.length()*i.panSpeed),he.copy(p).cross(i.object.up).setLength(U.x),he.add(ne.copy(i.object.up).setLength(U.y)),i.object.position.add(he),i.target.add(he),i.staticMoving?_.copy(x):_.add(U.subVectors(x,_).multiplyScalar(i.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!i.noZoom||!i.noPan)&&(p.lengthSq()>i.maxDistance*i.maxDistance&&(i.object.position.addVectors(i.target,p.setLength(i.maxDistance)),f.copy(y)),p.lengthSq()<i.minDistance*i.minDistance&&(i.object.position.addVectors(i.target,p.setLength(i.minDistance)),f.copy(y)))},this.update=function(){p.subVectors(i.object.position,i.target),i.noRotate||i.rotateCamera(),i.noZoom||i.zoomCamera(),i.noPan||i.panCamera(),i.object.position.addVectors(i.target,p),i.object.isPerspectiveCamera?(i.checkDistances(),i.object.lookAt(i.target),a.distanceToSquared(i.object.position)>o&&(i.dispatchEvent(Qf),a.copy(i.object.position))):i.object.isOrthographicCamera?(i.object.lookAt(i.target),(a.distanceToSquared(i.object.position)>o||s!==i.object.zoom)&&(i.dispatchEvent(Qf),a.copy(i.object.position),s=i.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){l=r.NONE,u=r.NONE,i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.up.copy(i.up0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),p.subVectors(i.object.position,i.target),i.object.lookAt(i.target),i.dispatchEvent(Qf),a.copy(i.object.position),s=i.object.zoom};function T(U){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(U.pointerId),i.domElement.addEventListener("pointermove",w),i.domElement.addEventListener("pointerup",P)),we(U),U.pointerType==="touch"?ie(U):I(U))}function w(U){i.enabled!==!1&&(U.pointerType==="touch"?W(U):k(U))}function P(U){i.enabled!==!1&&(U.pointerType==="touch"?Q(U):J(),B(U),S.length===0&&(i.domElement.releasePointerCapture(U.pointerId),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",P)))}function z(U){B(U)}function G(U){i.enabled!==!1&&(window.removeEventListener("keydown",G),u===r.NONE&&(U.code===i.keys[r.ROTATE]&&!i.noRotate?u=r.ROTATE:U.code===i.keys[r.ZOOM]&&!i.noZoom?u=r.ZOOM:U.code===i.keys[r.PAN]&&!i.noPan&&(u=r.PAN)))}function N(){i.enabled!==!1&&(u=r.NONE,window.addEventListener("keydown",G))}function I(U){if(l===r.NONE)switch(U.button){case i.mouseButtons.LEFT:l=r.ROTATE;break;case i.mouseButtons.MIDDLE:l=r.ZOOM;break;case i.mouseButtons.RIGHT:l=r.PAN;break}const ne=u!==r.NONE?u:l;ne===r.ROTATE&&!i.noRotate?(v.copy(C(U.pageX,U.pageY)),g.copy(v)):ne===r.ZOOM&&!i.noZoom?(f.copy(b(U.pageX,U.pageY)),y.copy(f)):ne===r.PAN&&!i.noPan&&(_.copy(b(U.pageX,U.pageY)),x.copy(_)),i.dispatchEvent(Jf)}function k(U){const ne=u!==r.NONE?u:l;ne===r.ROTATE&&!i.noRotate?(g.copy(v),v.copy(C(U.pageX,U.pageY))):ne===r.ZOOM&&!i.noZoom?y.copy(b(U.pageX,U.pageY)):ne===r.PAN&&!i.noPan&&x.copy(b(U.pageX,U.pageY))}function J(){l=r.NONE,i.dispatchEvent(ed)}function F(U){if(i.enabled!==!1&&i.noZoom!==!0){switch(U.preventDefault(),U.deltaMode){case 2:f.y-=U.deltaY*.025;break;case 1:f.y-=U.deltaY*.01;break;default:f.y-=U.deltaY*25e-5;break}i.dispatchEvent(Jf),i.dispatchEvent(ed)}}function ie(U){switch(j(U),S.length){case 1:l=r.TOUCH_ROTATE,v.copy(C(S[0].pageX,S[0].pageY)),g.copy(v);break;default:l=r.TOUCH_ZOOM_PAN;const ne=S[0].pageX-S[1].pageX,he=S[0].pageY-S[1].pageY;d=c=Math.sqrt(ne*ne+he*he);const ge=(S[0].pageX+S[1].pageX)/2,Ae=(S[0].pageY+S[1].pageY)/2;_.copy(b(ge,Ae)),x.copy(_);break}i.dispatchEvent(Jf)}function W(U){switch(j(U),S.length){case 1:g.copy(v),v.copy(C(U.pageX,U.pageY));break;default:const ne=te(U),he=U.pageX-ne.x,ge=U.pageY-ne.y;d=Math.sqrt(he*he+ge*ge);const Ae=(U.pageX+ne.x)/2,D=(U.pageY+ne.y)/2;x.copy(b(Ae,D));break}}function Q(U){switch(S.length){case 0:l=r.NONE;break;case 1:l=r.TOUCH_ROTATE,v.copy(C(U.pageX,U.pageY)),g.copy(v);break;case 2:l=r.TOUCH_ZOOM_PAN;for(let ne=0;ne<S.length;ne++)if(S[ne].pointerId!==U.pointerId){const he=M[S[ne].pointerId];v.copy(C(he.x,he.y)),g.copy(v);break}break}i.dispatchEvent(ed)}function oe(U){i.enabled!==!1&&U.preventDefault()}function we(U){S.push(U)}function B(U){delete M[U.pointerId];for(let ne=0;ne<S.length;ne++)if(S[ne].pointerId==U.pointerId){S.splice(ne,1);return}}function j(U){let ne=M[U.pointerId];ne===void 0&&(ne=new fe,M[U.pointerId]=ne),ne.set(U.pageX,U.pageY)}function te(U){const ne=U.pointerId===S[0].pointerId?S[1]:S[0];return M[ne.pointerId]}this.dispose=function(){i.domElement.removeEventListener("contextmenu",oe),i.domElement.removeEventListener("pointerdown",T),i.domElement.removeEventListener("pointercancel",z),i.domElement.removeEventListener("wheel",F),i.domElement.removeEventListener("pointermove",w),i.domElement.removeEventListener("pointerup",P),window.removeEventListener("keydown",G),window.removeEventListener("keyup",N)},this.domElement.addEventListener("contextmenu",oe),this.domElement.addEventListener("pointerdown",T),this.domElement.addEventListener("pointercancel",z),this.domElement.addEventListener("wheel",F,{passive:!1}),window.addEventListener("keydown",G),window.addEventListener("keyup",N),this.handleResize(),this.update()}}const B0={type:"change"},td={type:"start"},H0={type:"end"},eu=new Tc,V0=new Oi,Y3=Math.cos(70*Dh.DEG2RAD);class K3 extends ci{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:hi.ROTATE,MIDDLE:hi.DOLLY,RIGHT:hi.PAN},this.touches={ONE:yo.ROTATE,TWO:yo.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(E){E.addEventListener("keydown",_e),this._domElementKeyEvents=E},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",_e),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(B0),i.update(),o=r.NONE},this.update=function(){const E=new O,X=new ui().setFromUnitVectors(e.up,new O(0,1,0)),q=X.clone().invert(),ee=new O,se=new ui,Ce=new O,Fe=2*Math.PI;return function(Ct=null){const Ye=i.object.position;E.copy(Ye).sub(i.target),E.applyQuaternion(X),s.setFromVector3(E),i.autoRotate&&o===r.NONE&&z(w(Ct)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Rt=i.minAzimuthAngle,Et=i.maxAzimuthAngle;isFinite(Rt)&&isFinite(Et)&&(Rt<-Math.PI?Rt+=Fe:Rt>Math.PI&&(Rt-=Fe),Et<-Math.PI?Et+=Fe:Et>Math.PI&&(Et-=Fe),Rt<=Et?s.theta=Math.max(Rt,Math.min(Et,s.theta)):s.theta=s.theta>(Rt+Et)/2?Math.max(Rt,s.theta):Math.min(Et,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ji=!1;if(i.zoomToCursor&&M||i.object.isOrthographicCamera)s.radius=W(s.radius);else{const Vt=s.radius;s.radius=W(s.radius*u),Ji=Vt!=s.radius}if(E.setFromSpherical(s),E.applyQuaternion(q),Ye.copy(i.target).add(E),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),i.zoomToCursor&&M){let Vt=null;if(i.object.isPerspectiveCamera){const Mi=E.length();Vt=W(Mi*u);const kr=Mi-Vt;i.object.position.addScaledVector(x,kr),i.object.updateMatrixWorld(),Ji=!!kr}else if(i.object.isOrthographicCamera){const Mi=new O(S.x,S.y,0);Mi.unproject(i.object);const kr=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Ji=kr!==i.object.zoom;const Ia=new O(S.x,S.y,0);Ia.unproject(i.object),i.object.position.sub(Ia).add(Mi),i.object.updateMatrixWorld(),Vt=E.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;Vt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(Vt).add(i.object.position):(eu.origin.copy(i.object.position),eu.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(eu.direction))<Y3?e.lookAt(i.target):(V0.setFromNormalAndCoplanarPoint(i.object.up,i.target),eu.intersectPlane(V0,i.target))))}else if(i.object.isOrthographicCamera){const Vt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),Vt!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ji=!0)}return u=1,M=!1,Ji||ee.distanceToSquared(i.object.position)>a||8*(1-se.dot(i.object.quaternion))>a||Ce.distanceToSquared(i.target)>a?(i.dispatchEvent(B0),ee.copy(i.object.position),se.copy(i.object.quaternion),Ce.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",ye),i.domElement.removeEventListener("pointerdown",He),i.domElement.removeEventListener("pointercancel",A),i.domElement.removeEventListener("wheel",le),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",A),i.domElement.getRootNode().removeEventListener("keydown",Pe,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",_e),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const a=1e-6,s=new Nh,l=new Nh;let u=1;const c=new O,d=new fe,h=new fe,p=new fe,g=new fe,v=new fe,m=new fe,f=new fe,y=new fe,_=new fe,x=new O,S=new fe;let M=!1;const b=[],C={};let T=!1;function w(E){return E!==null?2*Math.PI/60*i.autoRotateSpeed*E:2*Math.PI/60/60*i.autoRotateSpeed}function P(E){const X=Math.abs(E*.01);return Math.pow(.95,i.zoomSpeed*X)}function z(E){l.theta-=E}function G(E){l.phi-=E}const N=function(){const E=new O;return function(q,ee){E.setFromMatrixColumn(ee,0),E.multiplyScalar(-q),c.add(E)}}(),I=function(){const E=new O;return function(q,ee){i.screenSpacePanning===!0?E.setFromMatrixColumn(ee,1):(E.setFromMatrixColumn(ee,0),E.crossVectors(i.object.up,E)),E.multiplyScalar(q),c.add(E)}}(),k=function(){const E=new O;return function(q,ee){const se=i.domElement;if(i.object.isPerspectiveCamera){const Ce=i.object.position;E.copy(Ce).sub(i.target);let Fe=E.length();Fe*=Math.tan(i.object.fov/2*Math.PI/180),N(2*q*Fe/se.clientHeight,i.object.matrix),I(2*ee*Fe/se.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(N(q*(i.object.right-i.object.left)/i.object.zoom/se.clientWidth,i.object.matrix),I(ee*(i.object.top-i.object.bottom)/i.object.zoom/se.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function J(E){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(E){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=E:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(E,X){if(!i.zoomToCursor)return;M=!0;const q=i.domElement.getBoundingClientRect(),ee=E-q.left,se=X-q.top,Ce=q.width,Fe=q.height;S.x=ee/Ce*2-1,S.y=-(se/Fe)*2+1,x.set(S.x,S.y,1).unproject(i.object).sub(i.object.position).normalize()}function W(E){return Math.max(i.minDistance,Math.min(i.maxDistance,E))}function Q(E){d.set(E.clientX,E.clientY)}function oe(E){ie(E.clientX,E.clientX),f.set(E.clientX,E.clientY)}function we(E){g.set(E.clientX,E.clientY)}function B(E){h.set(E.clientX,E.clientY),p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const X=i.domElement;z(2*Math.PI*p.x/X.clientHeight),G(2*Math.PI*p.y/X.clientHeight),d.copy(h),i.update()}function j(E){y.set(E.clientX,E.clientY),_.subVectors(y,f),_.y>0?J(P(_.y)):_.y<0&&F(P(_.y)),f.copy(y),i.update()}function te(E){v.set(E.clientX,E.clientY),m.subVectors(v,g).multiplyScalar(i.panSpeed),k(m.x,m.y),g.copy(v),i.update()}function U(E){ie(E.clientX,E.clientY),E.deltaY<0?F(P(E.deltaY)):E.deltaY>0&&J(P(E.deltaY)),i.update()}function ne(E){let X=!1;switch(E.code){case i.keys.UP:E.ctrlKey||E.metaKey||E.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),X=!0;break;case i.keys.BOTTOM:E.ctrlKey||E.metaKey||E.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),X=!0;break;case i.keys.LEFT:E.ctrlKey||E.metaKey||E.shiftKey?z(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),X=!0;break;case i.keys.RIGHT:E.ctrlKey||E.metaKey||E.shiftKey?z(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),X=!0;break}X&&(E.preventDefault(),i.update())}function he(E){if(b.length===1)d.set(E.pageX,E.pageY);else{const X=Be(E),q=.5*(E.pageX+X.x),ee=.5*(E.pageY+X.y);d.set(q,ee)}}function ge(E){if(b.length===1)g.set(E.pageX,E.pageY);else{const X=Be(E),q=.5*(E.pageX+X.x),ee=.5*(E.pageY+X.y);g.set(q,ee)}}function Ae(E){const X=Be(E),q=E.pageX-X.x,ee=E.pageY-X.y,se=Math.sqrt(q*q+ee*ee);f.set(0,se)}function D(E){i.enableZoom&&Ae(E),i.enablePan&&ge(E)}function it(E){i.enableZoom&&Ae(E),i.enableRotate&&he(E)}function Ue(E){if(b.length==1)h.set(E.pageX,E.pageY);else{const q=Be(E),ee=.5*(E.pageX+q.x),se=.5*(E.pageY+q.y);h.set(ee,se)}p.subVectors(h,d).multiplyScalar(i.rotateSpeed);const X=i.domElement;z(2*Math.PI*p.x/X.clientHeight),G(2*Math.PI*p.y/X.clientHeight),d.copy(h)}function je(E){if(b.length===1)v.set(E.pageX,E.pageY);else{const X=Be(E),q=.5*(E.pageX+X.x),ee=.5*(E.pageY+X.y);v.set(q,ee)}m.subVectors(v,g).multiplyScalar(i.panSpeed),k(m.x,m.y),g.copy(v)}function Se(E){const X=Be(E),q=E.pageX-X.x,ee=E.pageY-X.y,se=Math.sqrt(q*q+ee*ee);y.set(0,se),_.set(0,Math.pow(y.y/f.y,i.zoomSpeed)),J(_.y),f.copy(y);const Ce=(E.pageX+X.x)*.5,Fe=(E.pageY+X.y)*.5;ie(Ce,Fe)}function Ze(E){i.enableZoom&&Se(E),i.enablePan&&je(E)}function De(E){i.enableZoom&&Se(E),i.enableRotate&&Ue(E)}function He(E){i.enabled!==!1&&(b.length===0&&(i.domElement.setPointerCapture(E.pointerId),i.domElement.addEventListener("pointermove",L),i.domElement.addEventListener("pointerup",A)),!Me(E)&&(Xe(E),E.pointerType==="touch"?Ve(E):Z(E)))}function L(E){i.enabled!==!1&&(E.pointerType==="touch"?ce(E):ae(E))}function A(E){switch(Oe(E),b.length){case 0:i.domElement.releasePointerCapture(E.pointerId),i.domElement.removeEventListener("pointermove",L),i.domElement.removeEventListener("pointerup",A),i.dispatchEvent(H0),o=r.NONE;break;case 1:const X=b[0],q=C[X];Ve({pointerId:X,pageX:q.x,pageY:q.y});break}}function Z(E){let X;switch(E.button){case 0:X=i.mouseButtons.LEFT;break;case 1:X=i.mouseButtons.MIDDLE;break;case 2:X=i.mouseButtons.RIGHT;break;default:X=-1}switch(X){case hi.DOLLY:if(i.enableZoom===!1)return;oe(E),o=r.DOLLY;break;case hi.ROTATE:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enablePan===!1)return;we(E),o=r.PAN}else{if(i.enableRotate===!1)return;Q(E),o=r.ROTATE}break;case hi.PAN:if(E.ctrlKey||E.metaKey||E.shiftKey){if(i.enableRotate===!1)return;Q(E),o=r.ROTATE}else{if(i.enablePan===!1)return;we(E),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(td)}function ae(E){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;B(E);break;case r.DOLLY:if(i.enableZoom===!1)return;j(E);break;case r.PAN:if(i.enablePan===!1)return;te(E);break}}function le(E){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(E.preventDefault(),i.dispatchEvent(td),U(re(E)),i.dispatchEvent(H0))}function re(E){const X=E.deltaMode,q={clientX:E.clientX,clientY:E.clientY,deltaY:E.deltaY};switch(X){case 1:q.deltaY*=16;break;case 2:q.deltaY*=100;break}return E.ctrlKey&&!T&&(q.deltaY*=10),q}function Pe(E){E.key==="Control"&&(T=!0,i.domElement.getRootNode().addEventListener("keyup",pe,{passive:!0,capture:!0}))}function pe(E){E.key==="Control"&&(T=!1,i.domElement.getRootNode().removeEventListener("keyup",pe,{passive:!0,capture:!0}))}function _e(E){i.enabled===!1||i.enablePan===!1||ne(E)}function Ve(E){switch(ke(E),b.length){case 1:switch(i.touches.ONE){case yo.ROTATE:if(i.enableRotate===!1)return;he(E),o=r.TOUCH_ROTATE;break;case yo.PAN:if(i.enablePan===!1)return;ge(E),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case yo.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;D(E),o=r.TOUCH_DOLLY_PAN;break;case yo.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;it(E),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(td)}function ce(E){switch(ke(E),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ue(E),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;je(E),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ze(E),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;De(E),i.update();break;default:o=r.NONE}}function ye(E){i.enabled!==!1&&E.preventDefault()}function Xe(E){b.push(E.pointerId)}function Oe(E){delete C[E.pointerId];for(let X=0;X<b.length;X++)if(b[X]==E.pointerId){b.splice(X,1);return}}function Me(E){for(let X=0;X<b.length;X++)if(b[X]==E.pointerId)return!0;return!1}function ke(E){let X=C[E.pointerId];X===void 0&&(X=new fe,C[E.pointerId]=X),X.set(E.pageX,E.pageY)}function Be(E){const X=E.pointerId===b[0]?b[1]:b[0];return C[X]}i.domElement.addEventListener("contextmenu",ye),i.domElement.addEventListener("pointerdown",He),i.domElement.addEventListener("pointercancel",A),i.domElement.addEventListener("wheel",le,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",Pe,{passive:!0,capture:!0}),this.update()}}const Z3={type:"change"};class Q3 extends ci{constructor(e,n){super(),this.object=e,this.domElement=n,this.enabled=!0,this.movementSpeed=1,this.rollSpeed=.005,this.dragToLook=!1,this.autoForward=!1;const i=this,r=1e-6,o=new ui,a=new O;this.tmpQuaternion=new ui,this.status=0,this.moveState={up:0,down:0,left:0,right:0,forward:0,back:0,pitchUp:0,pitchDown:0,yawLeft:0,yawRight:0,rollLeft:0,rollRight:0},this.moveVector=new O(0,0,0),this.rotationVector=new O(0,0,0),this.keydown=function(g){if(!(g.altKey||this.enabled===!1)){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=.1;break;case"KeyW":this.moveState.forward=1;break;case"KeyS":this.moveState.back=1;break;case"KeyA":this.moveState.left=1;break;case"KeyD":this.moveState.right=1;break;case"KeyR":this.moveState.up=1;break;case"KeyF":this.moveState.down=1;break;case"ArrowUp":this.moveState.pitchUp=1;break;case"ArrowDown":this.moveState.pitchDown=1;break;case"ArrowLeft":this.moveState.yawLeft=1;break;case"ArrowRight":this.moveState.yawRight=1;break;case"KeyQ":this.moveState.rollLeft=1;break;case"KeyE":this.moveState.rollRight=1;break}this.updateMovementVector(),this.updateRotationVector()}},this.keyup=function(g){if(this.enabled!==!1){switch(g.code){case"ShiftLeft":case"ShiftRight":this.movementSpeedMultiplier=1;break;case"KeyW":this.moveState.forward=0;break;case"KeyS":this.moveState.back=0;break;case"KeyA":this.moveState.left=0;break;case"KeyD":this.moveState.right=0;break;case"KeyR":this.moveState.up=0;break;case"KeyF":this.moveState.down=0;break;case"ArrowUp":this.moveState.pitchUp=0;break;case"ArrowDown":this.moveState.pitchDown=0;break;case"ArrowLeft":this.moveState.yawLeft=0;break;case"ArrowRight":this.moveState.yawRight=0;break;case"KeyQ":this.moveState.rollLeft=0;break;case"KeyE":this.moveState.rollRight=0;break}this.updateMovementVector(),this.updateRotationVector()}},this.pointerdown=function(g){if(this.enabled!==!1)if(this.dragToLook)this.status++;else{switch(g.button){case 0:this.moveState.forward=1;break;case 2:this.moveState.back=1;break}this.updateMovementVector()}},this.pointermove=function(g){if(this.enabled!==!1&&(!this.dragToLook||this.status>0)){const v=this.getContainerDimensions(),m=v.size[0]/2,f=v.size[1]/2;this.moveState.yawLeft=-(g.pageX-v.offset[0]-m)/m,this.moveState.pitchDown=(g.pageY-v.offset[1]-f)/f,this.updateRotationVector()}},this.pointerup=function(g){if(this.enabled!==!1){if(this.dragToLook)this.status--,this.moveState.yawLeft=this.moveState.pitchDown=0;else{switch(g.button){case 0:this.moveState.forward=0;break;case 2:this.moveState.back=0;break}this.updateMovementVector()}this.updateRotationVector()}},this.pointercancel=function(){this.enabled!==!1&&(this.dragToLook?(this.status=0,this.moveState.yawLeft=this.moveState.pitchDown=0):(this.moveState.forward=0,this.moveState.back=0,this.updateMovementVector()),this.updateRotationVector())},this.contextMenu=function(g){this.enabled!==!1&&g.preventDefault()},this.update=function(g){if(this.enabled===!1)return;const v=g*i.movementSpeed,m=g*i.rollSpeed;i.object.translateX(i.moveVector.x*v),i.object.translateY(i.moveVector.y*v),i.object.translateZ(i.moveVector.z*v),i.tmpQuaternion.set(i.rotationVector.x*m,i.rotationVector.y*m,i.rotationVector.z*m,1).normalize(),i.object.quaternion.multiply(i.tmpQuaternion),(a.distanceToSquared(i.object.position)>r||8*(1-o.dot(i.object.quaternion))>r)&&(i.dispatchEvent(Z3),o.copy(i.object.quaternion),a.copy(i.object.position))},this.updateMovementVector=function(){const g=this.moveState.forward||this.autoForward&&!this.moveState.back?1:0;this.moveVector.x=-this.moveState.left+this.moveState.right,this.moveVector.y=-this.moveState.down+this.moveState.up,this.moveVector.z=-g+this.moveState.back},this.updateRotationVector=function(){this.rotationVector.x=-this.moveState.pitchDown+this.moveState.pitchUp,this.rotationVector.y=-this.moveState.yawRight+this.moveState.yawLeft,this.rotationVector.z=-this.moveState.rollRight+this.moveState.rollLeft},this.getContainerDimensions=function(){return this.domElement!=document?{size:[this.domElement.offsetWidth,this.domElement.offsetHeight],offset:[this.domElement.offsetLeft,this.domElement.offsetTop]}:{size:[window.innerWidth,window.innerHeight],offset:[0,0]}},this.dispose=function(){this.domElement.removeEventListener("contextmenu",s),this.domElement.removeEventListener("pointerdown",u),this.domElement.removeEventListener("pointermove",l),this.domElement.removeEventListener("pointerup",c),this.domElement.removeEventListener("pointercancel",d),window.removeEventListener("keydown",h),window.removeEventListener("keyup",p)};const s=this.contextMenu.bind(this),l=this.pointermove.bind(this),u=this.pointerdown.bind(this),c=this.pointerup.bind(this),d=this.pointercancel.bind(this),h=this.keydown.bind(this),p=this.keyup.bind(this);this.domElement.addEventListener("contextmenu",s),this.domElement.addEventListener("pointerdown",u),this.domElement.addEventListener("pointermove",l),this.domElement.addEventListener("pointerup",c),this.domElement.addEventListener("pointercancel",d),window.addEventListener("keydown",h),window.addEventListener("keyup",p),this.updateMovementVector(),this.updateRotationVector()}}const J3={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ic{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const eI=new lm(-1,1,1,-1,0,1);class tI extends _n{constructor(){super(),this.setAttribute("position",new It([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new It([0,2,0,0,2,0],2))}}const nI=new tI;class iI{constructor(e){this._mesh=new Bn(nI,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,eI)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class rI extends Ic{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof xi?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Tx.clone(e.uniforms),this.material=new xi({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new iI(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class G0 extends Ic{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,s;this.inverse?(a=0,s=1):(a=1,s=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),o.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),o.buffers.stencil.setClear(s),o.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(r.EQUAL,1,4294967295),o.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),o.buffers.stencil.setLocked(!0)}}class oI extends Ic{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class aI{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new fe);this._width=i.width,this._height=i.height,n=new Rr(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ra}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rI(J3),this.copyPass.material.blending=Gi,this.clock=new Vx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,o=this.passes.length;r<o;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const s=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(s.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(s.EQUAL,1,4294967295)}this.swapBuffers()}G0!==void 0&&(a instanceof G0?i=!0:a instanceof oI&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class sI extends Ic{constructor(e,n,i=null,r=null,o=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new qe}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(o=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}function vn(){return vn=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)({}).hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},vn.apply(null,arguments)}function lI(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function $s(t,e){return $s=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,i){return n.__proto__=i,n},$s(t,e)}function uI(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,$s(t,e)}function Yh(t){return Yh=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},Yh(t)}function cI(t){try{return Function.toString.call(t).indexOf("[native code]")!==-1}catch{return typeof t=="function"}}function IS(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(IS=function(){return!!t})()}function fI(t,e,n){if(IS())return Reflect.construct.apply(null,arguments);var i=[null];i.push.apply(i,e);var r=new(t.bind.apply(t,i));return n&&$s(r,n.prototype),r}function Kh(t){var e=typeof Map=="function"?new Map:void 0;return Kh=function(i){if(i===null||!cI(i))return i;if(typeof i!="function")throw new TypeError("Super expression must either be null or a function");if(e!==void 0){if(e.has(i))return e.get(i);e.set(i,r)}function r(){return fI(i,arguments,Yh(this).constructor)}return r.prototype=Object.create(i.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),$s(r,i)},Kh(t)}var gi=function(t){uI(e,t);function e(n){var i;return i=t.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+n+" for more information.")||this,lI(i)}return e}(Kh(Error));function nd(t){return Math.round(t*255)}function dI(t,e,n){return nd(t)+","+nd(e)+","+nd(n)}function Xs(t,e,n,i){if(i===void 0&&(i=dI),e===0)return i(n,n,n);var r=(t%360+360)%360/60,o=(1-Math.abs(2*n-1))*e,a=o*(1-Math.abs(r%2-1)),s=0,l=0,u=0;r>=0&&r<1?(s=o,l=a):r>=1&&r<2?(s=a,l=o):r>=2&&r<3?(l=o,u=a):r>=3&&r<4?(l=a,u=o):r>=4&&r<5?(s=a,u=o):r>=5&&r<6&&(s=o,u=a);var c=n-o/2,d=s+c,h=l+c,p=u+c;return i(d,h,p)}var W0={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};function hI(t){if(typeof t!="string")return t;var e=t.toLowerCase();return W0[e]?"#"+W0[e]:t}var pI=/^#[a-fA-F0-9]{6}$/,mI=/^#[a-fA-F0-9]{8}$/,gI=/^#[a-fA-F0-9]{3}$/,vI=/^#[a-fA-F0-9]{4}$/,id=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,_I=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,yI=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,xI=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function fo(t){if(typeof t!="string")throw new gi(3);var e=hI(t);if(e.match(pI))return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16)};if(e.match(mI)){var n=parseFloat((parseInt(""+e[7]+e[8],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[2],16),green:parseInt(""+e[3]+e[4],16),blue:parseInt(""+e[5]+e[6],16),alpha:n}}if(e.match(gI))return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16)};if(e.match(vI)){var i=parseFloat((parseInt(""+e[4]+e[4],16)/255).toFixed(2));return{red:parseInt(""+e[1]+e[1],16),green:parseInt(""+e[2]+e[2],16),blue:parseInt(""+e[3]+e[3],16),alpha:i}}var r=id.exec(e);if(r)return{red:parseInt(""+r[1],10),green:parseInt(""+r[2],10),blue:parseInt(""+r[3],10)};var o=_I.exec(e.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var a=yI.exec(e);if(a){var s=parseInt(""+a[1],10),l=parseInt(""+a[2],10)/100,u=parseInt(""+a[3],10)/100,c="rgb("+Xs(s,l,u)+")",d=id.exec(c);if(!d)throw new gi(4,e,c);return{red:parseInt(""+d[1],10),green:parseInt(""+d[2],10),blue:parseInt(""+d[3],10)}}var h=xI.exec(e.substring(0,50));if(h){var p=parseInt(""+h[1],10),g=parseInt(""+h[2],10)/100,v=parseInt(""+h[3],10)/100,m="rgb("+Xs(p,g,v)+")",f=id.exec(m);if(!f)throw new gi(4,e,m);return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+h[4])>1?parseFloat(""+h[4])/100:parseFloat(""+h[4])}}throw new gi(5)}function SI(t){var e=t.red/255,n=t.green/255,i=t.blue/255,r=Math.max(e,n,i),o=Math.min(e,n,i),a=(r+o)/2;if(r===o)return t.alpha!==void 0?{hue:0,saturation:0,lightness:a,alpha:t.alpha}:{hue:0,saturation:0,lightness:a};var s,l=r-o,u=a>.5?l/(2-r-o):l/(r+o);switch(r){case e:s=(n-i)/l+(n<i?6:0);break;case n:s=(i-e)/l+2;break;default:s=(e-n)/l+4;break}return s*=60,t.alpha!==void 0?{hue:s,saturation:u,lightness:a,alpha:t.alpha}:{hue:s,saturation:u,lightness:a}}function Nr(t){return SI(fo(t))}var MI=function(e){return e.length===7&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e},Zh=MI;function Xr(t){var e=t.toString(16);return e.length===1?"0"+e:e}function rd(t){return Xr(Math.round(t*255))}function wI(t,e,n){return Zh("#"+rd(t)+rd(e)+rd(n))}function Qh(t,e,n){return Xs(t,e,n,wI)}function EI(t,e,n){if(typeof t=="number"&&typeof e=="number"&&typeof n=="number")return Qh(t,e,n);if(typeof t=="object"&&e===void 0&&n===void 0)return Qh(t.hue,t.saturation,t.lightness);throw new gi(1)}function bI(t,e,n,i){if(typeof t=="number"&&typeof e=="number"&&typeof n=="number"&&typeof i=="number")return"rgba("+Xs(t,e,n)+","+i+")";if(typeof t=="object"&&e===void 0&&n===void 0&&i===void 0)return t.alpha>=1?Qh(t.hue,t.saturation,t.lightness):"rgba("+Xs(t.hue,t.saturation,t.lightness)+","+t.alpha+")";throw new gi(2)}function OS(t,e,n){if(typeof t=="number"&&typeof e=="number"&&typeof n=="number")return Zh("#"+Xr(t)+Xr(e)+Xr(n));if(typeof t=="object"&&e===void 0&&n===void 0)return Zh("#"+Xr(t.red)+Xr(t.green)+Xr(t.blue));throw new gi(6)}function Oc(t,e,n,i){if(typeof t=="string"&&typeof e=="number"){var r=fo(t);return"rgba("+r.red+","+r.green+","+r.blue+","+e+")"}else{if(typeof t=="number"&&typeof e=="number"&&typeof n=="number"&&typeof i=="number")return"rgba("+t+","+e+","+n+","+i+")";if(typeof t=="object"&&e===void 0&&n===void 0&&i===void 0)return t.alpha>=1?OS(t.red,t.green,t.blue):"rgba("+t.red+","+t.green+","+t.blue+","+t.alpha+")"}throw new gi(7)}var TI=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},AI=function(e){return typeof e.red=="number"&&typeof e.green=="number"&&typeof e.blue=="number"&&typeof e.alpha=="number"},CI=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&(typeof e.alpha!="number"||typeof e.alpha>"u")},RI=function(e){return typeof e.hue=="number"&&typeof e.saturation=="number"&&typeof e.lightness=="number"&&typeof e.alpha=="number"};function Ur(t){if(typeof t!="object")throw new gi(8);if(AI(t))return Oc(t);if(TI(t))return OS(t);if(RI(t))return bI(t);if(CI(t))return EI(t);throw new gi(8)}function NS(t,e,n){return function(){var r=n.concat(Array.prototype.slice.call(arguments));return r.length>=e?t.apply(this,r):NS(t,e,r)}}function Ln(t){return NS(t,t.length,[])}function PI(t,e){if(e==="transparent")return e;var n=Nr(e);return Ur(vn({},n,{hue:n.hue+parseFloat(t)}))}Ln(PI);function Da(t,e,n){return Math.max(t,Math.min(e,n))}function LI(t,e){if(e==="transparent")return e;var n=Nr(e);return Ur(vn({},n,{lightness:Da(0,1,n.lightness-parseFloat(t))}))}Ln(LI);function DI(t,e){if(e==="transparent")return e;var n=Nr(e);return Ur(vn({},n,{saturation:Da(0,1,n.saturation-parseFloat(t))}))}Ln(DI);function II(t,e){if(e==="transparent")return e;var n=Nr(e);return Ur(vn({},n,{lightness:Da(0,1,n.lightness+parseFloat(t))}))}Ln(II);function OI(t,e,n){if(e==="transparent")return n;if(n==="transparent")return e;if(t===0)return n;var i=fo(e),r=vn({},i,{alpha:typeof i.alpha=="number"?i.alpha:1}),o=fo(n),a=vn({},o,{alpha:typeof o.alpha=="number"?o.alpha:1}),s=r.alpha-a.alpha,l=parseFloat(t)*2-1,u=l*s===-1?l:l+s,c=1+l*s,d=(u/c+1)/2,h=1-d,p={red:Math.floor(r.red*d+a.red*h),green:Math.floor(r.green*d+a.green*h),blue:Math.floor(r.blue*d+a.blue*h),alpha:r.alpha*parseFloat(t)+a.alpha*(1-parseFloat(t))};return Oc(p)}var NI=Ln(OI),US=NI;function UI(t,e){if(e==="transparent")return e;var n=fo(e),i=typeof n.alpha=="number"?n.alpha:1,r=vn({},n,{alpha:Da(0,1,(i*100+parseFloat(t)*100)/100)});return Oc(r)}var kI=Ln(UI),FI=kI;function zI(t,e){if(e==="transparent")return e;var n=Nr(e);return Ur(vn({},n,{saturation:Da(0,1,n.saturation+parseFloat(t))}))}Ln(zI);function BI(t,e){return e==="transparent"?e:Ur(vn({},Nr(e),{hue:parseFloat(t)}))}Ln(BI);function HI(t,e){return e==="transparent"?e:Ur(vn({},Nr(e),{lightness:parseFloat(t)}))}Ln(HI);function VI(t,e){return e==="transparent"?e:Ur(vn({},Nr(e),{saturation:parseFloat(t)}))}Ln(VI);function GI(t,e){return e==="transparent"?e:US(parseFloat(t),"rgb(0, 0, 0)",e)}Ln(GI);function WI(t,e){return e==="transparent"?e:US(parseFloat(t),"rgb(255, 255, 255)",e)}Ln(WI);function jI(t,e){if(e==="transparent")return e;var n=fo(e),i=typeof n.alpha=="number"?n.alpha:1,r=vn({},n,{alpha:Da(0,1,+(i*100-parseFloat(t)*100).toFixed(2)/100)});return Oc(r)}Ln(jI);var io=Object.freeze({Linear:Object.freeze({None:function(t){return t},In:function(t){return t},Out:function(t){return t},InOut:function(t){return t}}),Quadratic:Object.freeze({In:function(t){return t*t},Out:function(t){return t*(2-t)},InOut:function(t){return(t*=2)<1?.5*t*t:-.5*(--t*(t-2)-1)}}),Cubic:Object.freeze({In:function(t){return t*t*t},Out:function(t){return--t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t:.5*((t-=2)*t*t+2)}}),Quartic:Object.freeze({In:function(t){return t*t*t*t},Out:function(t){return 1- --t*t*t*t},InOut:function(t){return(t*=2)<1?.5*t*t*t*t:-.5*((t-=2)*t*t*t-2)}}),Quintic:Object.freeze({In:function(t){return t*t*t*t*t},Out:function(t){return--t*t*t*t*t+1},InOut:function(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}}),Sinusoidal:Object.freeze({In:function(t){return 1-Math.sin((1-t)*Math.PI/2)},Out:function(t){return Math.sin(t*Math.PI/2)},InOut:function(t){return .5*(1-Math.sin(Math.PI*(.5-t)))}}),Exponential:Object.freeze({In:function(t){return t===0?0:Math.pow(1024,t-1)},Out:function(t){return t===1?1:1-Math.pow(2,-10*t)},InOut:function(t){return t===0?0:t===1?1:(t*=2)<1?.5*Math.pow(1024,t-1):.5*(-Math.pow(2,-10*(t-1))+2)}}),Circular:Object.freeze({In:function(t){return 1-Math.sqrt(1-t*t)},Out:function(t){return Math.sqrt(1- --t*t)},InOut:function(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}}),Elastic:Object.freeze({In:function(t){return t===0?0:t===1?1:-Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI)},Out:function(t){return t===0?0:t===1?1:Math.pow(2,-10*t)*Math.sin((t-.1)*5*Math.PI)+1},InOut:function(t){return t===0?0:t===1?1:(t*=2,t<1?-.5*Math.pow(2,10*(t-1))*Math.sin((t-1.1)*5*Math.PI):.5*Math.pow(2,-10*(t-1))*Math.sin((t-1.1)*5*Math.PI)+1)}}),Back:Object.freeze({In:function(t){var e=1.70158;return t===1?1:t*t*((e+1)*t-e)},Out:function(t){var e=1.70158;return t===0?0:--t*t*((e+1)*t+e)+1},InOut:function(t){var e=2.5949095;return(t*=2)<1?.5*(t*t*((e+1)*t-e)):.5*((t-=2)*t*((e+1)*t+e)+2)}}),Bounce:Object.freeze({In:function(t){return 1-io.Bounce.Out(1-t)},Out:function(t){return t<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375},InOut:function(t){return t<.5?io.Bounce.In(t*2)*.5:io.Bounce.Out(t*2-1)*.5+.5}}),generatePow:function(t){return t===void 0&&(t=4),t=t<Number.EPSILON?Number.EPSILON:t,t=t>1e4?1e4:t,{In:function(e){return Math.pow(e,t)},Out:function(e){return 1-Math.pow(1-e,t)},InOut:function(e){return e<.5?Math.pow(e*2,t)/2:(1-Math.pow(2-e*2,t))/2+.5}}}}),fs=function(){return performance.now()},$I=function(){function t(){this._tweens={},this._tweensAddedDuringUpdate={}}return t.prototype.getAll=function(){var e=this;return Object.keys(this._tweens).map(function(n){return e._tweens[n]})},t.prototype.removeAll=function(){this._tweens={}},t.prototype.add=function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},t.prototype.remove=function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},t.prototype.update=function(e,n){e===void 0&&(e=fs()),n===void 0&&(n=!1);var i=Object.keys(this._tweens);if(i.length===0)return!1;for(;i.length>0;){this._tweensAddedDuringUpdate={};for(var r=0;r<i.length;r++){var o=this._tweens[i[r]],a=!n;o&&o.update(e,a)===!1&&!n&&delete this._tweens[i[r]]}i=Object.keys(this._tweensAddedDuringUpdate)}return!0},t}(),na={Linear:function(t,e){var n=t.length-1,i=n*e,r=Math.floor(i),o=na.Utils.Linear;return e<0?o(t[0],t[1],i):e>1?o(t[n],t[n-1],n-i):o(t[r],t[r+1>n?n:r+1],i-r)},Bezier:function(t,e){for(var n=0,i=t.length-1,r=Math.pow,o=na.Utils.Bernstein,a=0;a<=i;a++)n+=r(1-e,i-a)*r(e,a)*t[a]*o(i,a);return n},CatmullRom:function(t,e){var n=t.length-1,i=n*e,r=Math.floor(i),o=na.Utils.CatmullRom;return t[0]===t[n]?(e<0&&(r=Math.floor(i=n*(1+e))),o(t[(r-1+n)%n],t[r],t[(r+1)%n],t[(r+2)%n],i-r)):e<0?t[0]-(o(t[0],t[0],t[1],t[1],-i)-t[0]):e>1?t[n]-(o(t[n],t[n],t[n-1],t[n-1],i-n)-t[n]):o(t[r?r-1:0],t[r],t[n<r+1?n:r+1],t[n<r+2?n:r+2],i-r)},Utils:{Linear:function(t,e,n){return(e-t)*n+t},Bernstein:function(t,e){var n=na.Utils.Factorial;return n(t)/n(e)/n(t-e)},Factorial:function(){var t=[1];return function(e){var n=1;if(t[e])return t[e];for(var i=e;i>1;i--)n*=i;return t[e]=n,n}}(),CatmullRom:function(t,e,n,i,r){var o=(n-t)*.5,a=(i-e)*.5,s=r*r,l=r*s;return(2*e-2*n+o+a)*l+(-3*e+3*n-2*o-a)*s+o*r+e}}},XI=function(){function t(){}return t.nextId=function(){return t._nextId++},t._nextId=0,t}(),Jh=new $I,j0=function(){function t(e,n){n===void 0&&(n=Jh),this._object=e,this._group=n,this._isPaused=!1,this._pauseStart=0,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._isDynamic=!1,this._initialRepeat=0,this._repeat=0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=0,this._easingFunction=io.Linear.None,this._interpolationFunction=na.Linear,this._chainedTweens=[],this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._id=XI.nextId(),this._isChainStopped=!1,this._propertiesAreSetUp=!1,this._goToEnd=!1}return t.prototype.getId=function(){return this._id},t.prototype.isPlaying=function(){return this._isPlaying},t.prototype.isPaused=function(){return this._isPaused},t.prototype.getDuration=function(){return this._duration},t.prototype.to=function(e,n){if(n===void 0&&(n=1e3),this._isPlaying)throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");return this._valuesEnd=e,this._propertiesAreSetUp=!1,this._duration=n<0?0:n,this},t.prototype.duration=function(e){return e===void 0&&(e=1e3),this._duration=e<0?0:e,this},t.prototype.dynamic=function(e){return e===void 0&&(e=!1),this._isDynamic=e,this},t.prototype.start=function(e,n){if(e===void 0&&(e=fs()),n===void 0&&(n=!1),this._isPlaying)return this;if(this._group&&this._group.add(this),this._repeat=this._initialRepeat,this._reversed){this._reversed=!1;for(var i in this._valuesStartRepeat)this._swapEndStartRepeatValues(i),this._valuesStart[i]=this._valuesStartRepeat[i]}if(this._isPlaying=!0,this._isPaused=!1,this._onStartCallbackFired=!1,this._onEveryStartCallbackFired=!1,this._isChainStopped=!1,this._startTime=e,this._startTime+=this._delayTime,!this._propertiesAreSetUp||n){if(this._propertiesAreSetUp=!0,!this._isDynamic){var r={};for(var o in this._valuesEnd)r[o]=this._valuesEnd[o];this._valuesEnd=r}this._setupProperties(this._object,this._valuesStart,this._valuesEnd,this._valuesStartRepeat,n)}return this},t.prototype.startFromCurrentValues=function(e){return this.start(e,!0)},t.prototype._setupProperties=function(e,n,i,r,o){for(var a in i){var s=e[a],l=Array.isArray(s),u=l?"array":typeof s,c=!l&&Array.isArray(i[a]);if(!(u==="undefined"||u==="function")){if(c){var d=i[a];if(d.length===0)continue;for(var h=[s],p=0,g=d.length;p<g;p+=1){var v=this._handleRelativeValue(s,d[p]);if(isNaN(v)){c=!1,console.warn("Found invalid interpolation list. Skipping.");break}h.push(v)}c&&(i[a]=h)}if((u==="object"||l)&&s&&!c){n[a]=l?[]:{};var m=s;for(var f in m)n[a][f]=m[f];r[a]=l?[]:{};var d=i[a];if(!this._isDynamic){var y={};for(var f in d)y[f]=d[f];i[a]=d=y}this._setupProperties(m,n[a],d,r[a],o)}else(typeof n[a]>"u"||o)&&(n[a]=s),l||(n[a]*=1),c?r[a]=i[a].slice().reverse():r[a]=n[a]||0}}},t.prototype.stop=function(){return this._isChainStopped||(this._isChainStopped=!0,this.stopChainedTweens()),this._isPlaying?(this._group&&this._group.remove(this),this._isPlaying=!1,this._isPaused=!1,this._onStopCallback&&this._onStopCallback(this._object),this):this},t.prototype.end=function(){return this._goToEnd=!0,this.update(1/0),this},t.prototype.pause=function(e){return e===void 0&&(e=fs()),this._isPaused||!this._isPlaying?this:(this._isPaused=!0,this._pauseStart=e,this._group&&this._group.remove(this),this)},t.prototype.resume=function(e){return e===void 0&&(e=fs()),!this._isPaused||!this._isPlaying?this:(this._isPaused=!1,this._startTime+=e-this._pauseStart,this._pauseStart=0,this._group&&this._group.add(this),this)},t.prototype.stopChainedTweens=function(){for(var e=0,n=this._chainedTweens.length;e<n;e++)this._chainedTweens[e].stop();return this},t.prototype.group=function(e){return e===void 0&&(e=Jh),this._group=e,this},t.prototype.delay=function(e){return e===void 0&&(e=0),this._delayTime=e,this},t.prototype.repeat=function(e){return e===void 0&&(e=0),this._initialRepeat=e,this._repeat=e,this},t.prototype.repeatDelay=function(e){return this._repeatDelayTime=e,this},t.prototype.yoyo=function(e){return e===void 0&&(e=!1),this._yoyo=e,this},t.prototype.easing=function(e){return e===void 0&&(e=io.Linear.None),this._easingFunction=e,this},t.prototype.interpolation=function(e){return e===void 0&&(e=na.Linear),this._interpolationFunction=e,this},t.prototype.chain=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];return this._chainedTweens=e,this},t.prototype.onStart=function(e){return this._onStartCallback=e,this},t.prototype.onEveryStart=function(e){return this._onEveryStartCallback=e,this},t.prototype.onUpdate=function(e){return this._onUpdateCallback=e,this},t.prototype.onRepeat=function(e){return this._onRepeatCallback=e,this},t.prototype.onComplete=function(e){return this._onCompleteCallback=e,this},t.prototype.onStop=function(e){return this._onStopCallback=e,this},t.prototype.update=function(e,n){var i=this,r;if(e===void 0&&(e=fs()),n===void 0&&(n=!0),this._isPaused)return!0;var o,a=this._startTime+this._duration;if(!this._goToEnd&&!this._isPlaying){if(e>a)return!1;n&&this.start(e,!0)}if(this._goToEnd=!1,e<this._startTime)return!0;this._onStartCallbackFired===!1&&(this._onStartCallback&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),this._onEveryStartCallbackFired===!1&&(this._onEveryStartCallback&&this._onEveryStartCallback(this._object),this._onEveryStartCallbackFired=!0);var s=e-this._startTime,l=this._duration+((r=this._repeatDelayTime)!==null&&r!==void 0?r:this._delayTime),u=this._duration+this._repeat*l,c=function(){if(i._duration===0||s>u)return 1;var m=Math.trunc(s/l),f=s-m*l,y=Math.min(f/i._duration,1);return y===0&&s===i._duration?1:y},d=c(),h=this._easingFunction(d);if(this._updateProperties(this._object,this._valuesStart,this._valuesEnd,h),this._onUpdateCallback&&this._onUpdateCallback(this._object,d),this._duration===0||s>=this._duration)if(this._repeat>0){var p=Math.min(Math.trunc((s-this._duration)/l)+1,this._repeat);isFinite(this._repeat)&&(this._repeat-=p);for(o in this._valuesStartRepeat)!this._yoyo&&typeof this._valuesEnd[o]=="string"&&(this._valuesStartRepeat[o]=this._valuesStartRepeat[o]+parseFloat(this._valuesEnd[o])),this._yoyo&&this._swapEndStartRepeatValues(o),this._valuesStart[o]=this._valuesStartRepeat[o];return this._yoyo&&(this._reversed=!this._reversed),this._startTime+=l*p,this._onRepeatCallback&&this._onRepeatCallback(this._object),this._onEveryStartCallbackFired=!1,!0}else{this._onCompleteCallback&&this._onCompleteCallback(this._object);for(var g=0,v=this._chainedTweens.length;g<v;g++)this._chainedTweens[g].start(this._startTime+this._duration,!1);return this._isPlaying=!1,!1}return!0},t.prototype._updateProperties=function(e,n,i,r){for(var o in i)if(n[o]!==void 0){var a=n[o]||0,s=i[o],l=Array.isArray(e[o]),u=Array.isArray(s),c=!l&&u;c?e[o]=this._interpolationFunction(s,r):typeof s=="object"&&s?this._updateProperties(e[o],a,s,r):(s=this._handleRelativeValue(a,s),typeof s=="number"&&(e[o]=a+(s-a)*r))}},t.prototype._handleRelativeValue=function(e,n){return typeof n!="string"?n:n.charAt(0)==="+"||n.charAt(0)==="-"?e+parseFloat(n):parseFloat(n)},t.prototype._swapEndStartRepeatValues=function(e){var n=this._valuesStartRepeat[e],i=this._valuesEnd[e];typeof i=="string"?this._valuesStartRepeat[e]=this._valuesStartRepeat[e]+parseFloat(i):this._valuesStartRepeat[e]=this._valuesEnd[e],this._valuesEnd[e]=n},t}(),Si=Jh;Si.getAll.bind(Si);Si.removeAll.bind(Si);Si.add.bind(Si);Si.remove.bind(Si);var qI=Si.update.bind(Si);function YI(t,e){if(e={},e.insertAt,!(typeof document>"u")){var n=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",n.appendChild(i),i.styleSheet?i.styleSheet.cssText=t:i.appendChild(document.createTextNode(t))}}var KI=`.scene-nav-info {
  bottom: 5px;
  width: 100%;
  text-align: center;
  color: slategrey;
  opacity: 0.7;
  font-size: 10px;
}

.scene-tooltip {
  top: 0;
  color: lavender;
  font-size: 15px;
}

.scene-nav-info, .scene-tooltip {
  position: absolute;
  font-family: sans-serif;
  pointer-events: none;
  user-select: none;
}

.scene-container canvas:focus {
  outline: none;
}`;YI(KI);function ZI(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,o,a,s=[],l=!0,u=!1;try{if(o=(n=n.call(t)).next,e!==0)for(;!(l=(i=o.call(n)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(c){u=!0,r=c}finally{try{if(!l&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(u)throw r}}return s}}function QI(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}function JI(t){var e=QI(t,"string");return typeof e=="symbol"?e:e+""}function eO(t,e,n){return e=JI(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function tO(t,e){return iO(t)||ZI(t,e)||kS(t,e)||aO()}function ns(t){return nO(t)||rO(t)||kS(t)||oO()}function nO(t){if(Array.isArray(t))return ep(t)}function iO(t){if(Array.isArray(t))return t}function rO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function kS(t,e){if(t){if(typeof t=="string")return ep(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ep(t,e)}}function ep(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function oO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function aO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ht=window.THREE?window.THREE:{WebGLRenderer:GR,Scene:WR,PerspectiveCamera:kn,Raycaster:Gx,SRGBColorSpace:On,TextureLoader:Bx,Vector2:fe,Vector3:O,Box3:mo,Color:qe,Mesh:Bn,SphereGeometry:Pc,MeshBasicMaterial:am,BackSide:an,EventDispatcher:ci,MOUSE:hi,Quaternion:ui,Spherical:Nh,Clock:Vx},FS=bm({props:{width:{default:window.innerWidth,onChange:function(e,n,i){isNaN(e)&&(n.width=i)}},height:{default:window.innerHeight,onChange:function(e,n,i){isNaN(e)&&(n.height=i)}},backgroundColor:{default:"#000011"},backgroundImageUrl:{},onBackgroundImageLoaded:{},showNavInfo:{default:!0},skyRadius:{default:5e4},objects:{default:[]},lights:{default:[]},enablePointerInteraction:{default:!0,onChange:function(e,n){n.hoverObj=null,n.toolTipElem&&(n.toolTipElem.innerHTML="")},triggerUpdate:!1},lineHoverPrecision:{default:1,triggerUpdate:!1},hoverOrderComparator:{default:function(){return-1},triggerUpdate:!1},hoverFilter:{default:function(){return!0},triggerUpdate:!1},tooltipContent:{triggerUpdate:!1},hoverDuringDrag:{default:!1,triggerUpdate:!1},clickAfterDrag:{default:!1,triggerUpdate:!1},onHover:{default:function(){},triggerUpdate:!1},onClick:{default:function(){},triggerUpdate:!1},onRightClick:{triggerUpdate:!1}},methods:{tick:function(e){if(e.initialised){if(e.controls.update&&e.controls.update(Math.min(1,e.clock.getDelta())),e.postProcessingComposer?e.postProcessingComposer.render():e.renderer.render(e.scene,e.camera),e.extraRenderers.forEach(function(o){return o.render(e.scene,e.camera)}),e.enablePointerInteraction){var n=null;if(e.hoverDuringDrag||!e.isPointerDragging){var i=this.intersectingObjects(e.pointerPos.x,e.pointerPos.y).filter(function(o){return e.hoverFilter(o.object)}).sort(function(o,a){return e.hoverOrderComparator(o.object,a.object)}),r=i.length?i[0]:null;n=r?r.object:null,e.intersectionPoint=r?r.point:null}n!==e.hoverObj&&(e.onHover(n,e.hoverObj),e.toolTipElem.innerHTML=n&&Qe(e.tooltipContent)(n)||"",e.hoverObj=n)}qI()}return this},getPointerPos:function(e){var n=e.pointerPos,i=n.x,r=n.y;return{x:i,y:r}},cameraPosition:function(e,n,i,r){var o=e.camera;if(n&&e.initialised){var a=n,s=i||{x:0,y:0,z:0};if(!r)c(a),d(s);else{var l=Object.assign({},o.position),u=h();new j0(l).to(a,r).easing(io.Quadratic.Out).onUpdate(c).start(),new j0(u).to(s,r/3).easing(io.Quadratic.Out).onUpdate(d).start()}return this}return Object.assign({},o.position,{lookAt:h()});function c(p){var g=p.x,v=p.y,m=p.z;g!==void 0&&(o.position.x=g),v!==void 0&&(o.position.y=v),m!==void 0&&(o.position.z=m)}function d(p){var g=new ht.Vector3(p.x,p.y,p.z);e.controls.target?e.controls.target=g:o.lookAt(g)}function h(){return Object.assign(new ht.Vector3(0,0,-1e3).applyQuaternion(o.quaternion).add(o.position))}},zoomToFit:function(e){for(var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:10,r=arguments.length,o=new Array(r>3?r-3:0),a=3;a<r;a++)o[a-3]=arguments[a];return this.fitToBbox(this.getBbox.apply(this,o),n,i)},fitToBbox:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:10,o=e.camera;if(n){var a=new ht.Vector3(0,0,0),s=Math.max.apply(Math,ns(Object.entries(n).map(function(p){var g=tO(p,2),v=g[0],m=g[1];return Math.max.apply(Math,ns(m.map(function(f){return Math.abs(a[v]-f)})))})))*2,l=(1-r*2/e.height)*o.fov,u=s/Math.atan(l*Math.PI/180),c=u/o.aspect,d=Math.max(u,c);if(d>0){var h=a.clone().sub(o.position).normalize().multiplyScalar(-d);this.cameraPosition(h,a,i)}}return this},getBbox:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:function(){return!0},i=new ht.Box3(new ht.Vector3(0,0,0),new ht.Vector3(0,0,0)),r=e.objects.filter(n);return r.length?(r.forEach(function(o){return i.expandByObject(o)}),Object.assign.apply(Object,ns(["x","y","z"].map(function(o){return eO({},o,[i.min[o],i.max[o]])})))):null},getScreenCoords:function(e,n,i,r){var o=new ht.Vector3(n,i,r);return o.project(this.camera()),{x:(o.x+1)*e.width/2,y:-(o.y-1)*e.height/2}},getSceneCoords:function(e,n,i){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,o=new ht.Vector2(n/e.width*2-1,-(i/e.height)*2+1),a=new ht.Raycaster;return a.setFromCamera(o,e.camera),Object.assign({},a.ray.at(r,new ht.Vector3))},intersectingObjects:function(e,n,i){var r=new ht.Vector2(n/e.width*2-1,-(i/e.height)*2+1),o=new ht.Raycaster;return o.params.Line.threshold=e.lineHoverPrecision,o.setFromCamera(r,e.camera),o.intersectObjects(e.objects,!0)},renderer:function(e){return e.renderer},scene:function(e){return e.scene},camera:function(e){return e.camera},postProcessingComposer:function(e){return e.postProcessingComposer},controls:function(e){return e.controls},tbControls:function(e){return e.controls}},stateInit:function(){return{scene:new ht.Scene,camera:new ht.PerspectiveCamera,clock:new ht.Clock}},init:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=i.controlType,o=r===void 0?"trackball":r,a=i.rendererConfig,s=a===void 0?{}:a,l=i.extraRenderers,u=l===void 0?[]:l,c=i.waitForLoadComplete,d=c===void 0?!0:c;e.innerHTML="",e.appendChild(n.container=document.createElement("div")),n.container.className="scene-container",n.container.style.position="relative",n.container.appendChild(n.navInfo=document.createElement("div")),n.navInfo.className="scene-nav-info",n.navInfo.textContent={orbit:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",trackball:"Left-click: rotate, Mouse-wheel/middle-click: zoom, Right-click: pan",fly:"WASD: move, R|F: up | down, Q|E: roll, up|down: pitch, left|right: yaw"}[o]||"",n.navInfo.style.display=n.showNavInfo?null:"none",n.toolTipElem=document.createElement("div"),n.toolTipElem.classList.add("scene-tooltip"),n.container.appendChild(n.toolTipElem),n.pointerPos=new ht.Vector2,n.pointerPos.x=-2,n.pointerPos.y=-2,["pointermove","pointerdown"].forEach(function(h){return n.container.addEventListener(h,function(p){if(h==="pointerdown"&&(n.isPointerPressed=!0),!n.isPointerDragging&&p.type==="pointermove"&&(p.pressure>0||n.isPointerPressed)&&(p.pointerType!=="touch"||p.movementX===void 0||[p.movementX,p.movementY].some(function(m){return Math.abs(m)>1}))&&(n.isPointerDragging=!0),n.enablePointerInteraction){var g=v(n.container);n.pointerPos.x=p.pageX-g.left,n.pointerPos.y=p.pageY-g.top,n.toolTipElem.style.top="".concat(n.pointerPos.y,"px"),n.toolTipElem.style.left="".concat(n.pointerPos.x,"px"),n.toolTipElem.style.transform="translate(-".concat(n.pointerPos.x/n.width*100,"%, ").concat(n.height-n.pointerPos.y<100?"calc(-100% - 8px)":"21px",")")}function v(m){var f=m.getBoundingClientRect(),y=window.pageXOffset||document.documentElement.scrollLeft,_=window.pageYOffset||document.documentElement.scrollTop;return{top:f.top+_,left:f.left+y}}},{passive:!0})}),n.container.addEventListener("pointerup",function(h){n.isPointerPressed=!1,!(n.isPointerDragging&&(n.isPointerDragging=!1,!n.clickAfterDrag))&&requestAnimationFrame(function(){h.button===0&&n.onClick(n.hoverObj||null,h,n.intersectionPoint),h.button===2&&n.onRightClick&&n.onRightClick(n.hoverObj||null,h,n.intersectionPoint)})},{passive:!0,capture:!0}),n.container.addEventListener("contextmenu",function(h){n.onRightClick&&h.preventDefault()}),n.renderer=new ht.WebGLRenderer(Object.assign({antialias:!0,alpha:!0},s)),n.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio)),n.container.appendChild(n.renderer.domElement),n.extraRenderers=u,n.extraRenderers.forEach(function(h){h.domElement.style.position="absolute",h.domElement.style.top="0px",h.domElement.style.pointerEvents="none",n.container.appendChild(h.domElement)}),n.postProcessingComposer=new aI(n.renderer),n.postProcessingComposer.addPass(new sI(n.scene,n.camera)),n.controls=new{trackball:q3,orbit:K3,fly:Q3}[o](n.camera,n.renderer.domElement),o==="fly"&&(n.controls.movementSpeed=300,n.controls.rollSpeed=Math.PI/6,n.controls.dragToLook=!0),(o==="trackball"||o==="orbit")&&(n.controls.minDistance=.1,n.controls.maxDistance=n.skyRadius,n.controls.addEventListener("start",function(){n.controlsEngaged=!0}),n.controls.addEventListener("change",function(){n.controlsEngaged&&(n.controlsDragging=!0)}),n.controls.addEventListener("end",function(){n.controlsEngaged=!1,n.controlsDragging=!1})),[n.renderer,n.postProcessingComposer].concat(ns(n.extraRenderers)).forEach(function(h){return h.setSize(n.width,n.height)}),n.camera.aspect=n.width/n.height,n.camera.updateProjectionMatrix(),n.camera.position.z=1e3,n.scene.add(n.skysphere=new ht.Mesh),n.skysphere.visible=!1,n.loadComplete=n.scene.visible=!d,window.scene=n.scene},update:function(e,n){if(e.width&&e.height&&(n.hasOwnProperty("width")||n.hasOwnProperty("height"))&&(e.container.style.width="".concat(e.width,"px"),e.container.style.height="".concat(e.height,"px"),[e.renderer,e.postProcessingComposer].concat(ns(e.extraRenderers)).forEach(function(o){return o.setSize(e.width,e.height)}),e.camera.aspect=e.width/e.height,e.camera.updateProjectionMatrix()),n.hasOwnProperty("skyRadius")&&e.skyRadius&&(e.controls.hasOwnProperty("maxDistance")&&n.skyRadius&&(e.controls.maxDistance=Math.min(e.controls.maxDistance,e.skyRadius)),e.camera.far=e.skyRadius*2.5,e.camera.updateProjectionMatrix(),e.skysphere.geometry=new ht.SphereGeometry(e.skyRadius)),n.hasOwnProperty("backgroundColor")){var i=fo(e.backgroundColor).alpha;i===void 0&&(i=1),e.renderer.setClearColor(new ht.Color(FI(1,e.backgroundColor)),i)}n.hasOwnProperty("backgroundImageUrl")&&(e.backgroundImageUrl?new ht.TextureLoader().load(e.backgroundImageUrl,function(o){o.colorSpace=ht.SRGBColorSpace,e.skysphere.material=new ht.MeshBasicMaterial({map:o,side:ht.BackSide}),e.skysphere.visible=!0,e.onBackgroundImageLoaded&&setTimeout(e.onBackgroundImageLoaded),!e.loadComplete&&r()}):(e.skysphere.visible=!1,e.skysphere.material.map=null,!e.loadComplete&&r())),n.hasOwnProperty("showNavInfo")&&(e.navInfo.style.display=e.showNavInfo?null:"none"),n.hasOwnProperty("lights")&&((n.lights||[]).forEach(function(o){return e.scene.remove(o)}),e.lights.forEach(function(o){return e.scene.add(o)})),n.hasOwnProperty("objects")&&((n.objects||[]).forEach(function(o){return e.scene.remove(o)}),e.objects.forEach(function(o){return e.scene.add(o)}));function r(){e.loadComplete=e.scene.visible=!0}}});function sO(t,e){e===void 0&&(e={});var n=e.insertAt;if(!(typeof document>"u")){var i=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",n==="top"&&i.firstChild?i.insertBefore(r,i.firstChild):i.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}var lO=`.graph-info-msg {
  top: 50%;
  width: 100%;
  text-align: center;
  color: lavender;
  opacity: 0.7;
  font-size: 22px;
  position: absolute;
  font-family: Sans-serif;
}

.scene-container .clickable {
  cursor: pointer;
}

.scene-container .grabbable {
  cursor: move;
  cursor: grab;
  cursor: -moz-grab;
  cursor: -webkit-grab;
}

.scene-container .grabbable:active {
  cursor: grabbing;
  cursor: -moz-grabbing;
  cursor: -webkit-grabbing;
}`;sO(lO);function $0(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function tu(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$0(Object(n),!0).forEach(function(i){nl(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$0(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function uO(t,e){if(typeof t!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function cO(t){var e=uO(t,"string");return typeof e=="symbol"?e:e+""}function nl(t,e,n){return e=cO(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nc(t){return fO(t)||dO(t)||hO(t)||pO()}function fO(t){if(Array.isArray(t))return tp(t)}function dO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function hO(t,e){if(t){if(typeof t=="string")return tp(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tp(t,e)}}function tp(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function pO(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function zS(t,e){var n=new e;return n._destructor&&n._destructor(),{linkProp:function(r){return{default:n[r](),onChange:function(a,s){s[t][r](a)},triggerUpdate:!1}},linkMethod:function(r){return function(o){for(var a=o[t],s=arguments.length,l=new Array(s>1?s-1:0),u=1;u<s;u++)l[u-1]=arguments[u];var c=a[r].apply(a,l);return c===a?this:c}}}}var od=window.THREE?window.THREE:{AmbientLight:gP,DirectionalLight:mP,Vector3:O,REVISION:Mc},mO=170,BS=zS("forceGraph",DS),gO=Object.assign.apply(Object,Nc(["jsonUrl","graphData","numDimensions","dagMode","dagLevelDistance","dagNodeFilter","onDagError","nodeRelSize","nodeId","nodeVal","nodeResolution","nodeColor","nodeAutoColorBy","nodeOpacity","nodeVisibility","nodeThreeObject","nodeThreeObjectExtend","linkSource","linkTarget","linkVisibility","linkColor","linkAutoColorBy","linkOpacity","linkWidth","linkResolution","linkCurvature","linkCurveRotation","linkMaterial","linkThreeObject","linkThreeObjectExtend","linkPositionUpdate","linkDirectionalArrowLength","linkDirectionalArrowColor","linkDirectionalArrowRelPos","linkDirectionalArrowResolution","linkDirectionalParticles","linkDirectionalParticleSpeed","linkDirectionalParticleWidth","linkDirectionalParticleColor","linkDirectionalParticleResolution","forceEngine","d3AlphaDecay","d3VelocityDecay","d3AlphaMin","ngraphPhysics","warmupTicks","cooldownTicks","cooldownTime","onEngineTick","onEngineStop"].map(function(t){return nl({},t,BS.linkProp(t))}))),vO=Object.assign.apply(Object,Nc(["refresh","getGraphBbox","d3Force","d3ReheatSimulation","emitParticle"].map(function(t){return nl({},t,BS.linkMethod(t))}))),Su=zS("renderObjs",FS),_O=Object.assign.apply(Object,Nc(["width","height","backgroundColor","showNavInfo","enablePointerInteraction"].map(function(t){return nl({},t,Su.linkProp(t))}))),yO=Object.assign.apply(Object,Nc(["lights","cameraPosition","postProcessingComposer"].map(function(t){return nl({},t,Su.linkMethod(t))})).concat([{graph2ScreenCoords:Su.linkMethod("getScreenCoords"),screen2GraphCoords:Su.linkMethod("getSceneCoords")}])),xO=bm({props:tu(tu({nodeLabel:{default:"name",triggerUpdate:!1},linkLabel:{default:"name",triggerUpdate:!1},linkHoverPrecision:{default:1,onChange:function(e,n){return n.renderObjs.lineHoverPrecision(e)},triggerUpdate:!1},enableNavigationControls:{default:!0,onChange:function(e,n){var i=n.renderObjs.controls();i&&(i.enabled=e,e&&i.domElement&&i.domElement.dispatchEvent(new PointerEvent("pointerup")))},triggerUpdate:!1},enableNodeDrag:{default:!0,triggerUpdate:!1},onNodeDrag:{default:function(){},triggerUpdate:!1},onNodeDragEnd:{default:function(){},triggerUpdate:!1},onNodeClick:{triggerUpdate:!1},onNodeRightClick:{triggerUpdate:!1},onNodeHover:{triggerUpdate:!1},onLinkClick:{triggerUpdate:!1},onLinkRightClick:{triggerUpdate:!1},onLinkHover:{triggerUpdate:!1},onBackgroundClick:{triggerUpdate:!1},onBackgroundRightClick:{triggerUpdate:!1}},gO),_O),methods:tu(tu({zoomToFit:function(e,n,i){for(var r,o=arguments.length,a=new Array(o>3?o-3:0),s=3;s<o;s++)a[s-3]=arguments[s];return e.renderObjs.fitToBbox((r=e.forceGraph).getGraphBbox.apply(r,a),n,i),this},pauseAnimation:function(e){return e.animationFrameRequestId!==null&&(cancelAnimationFrame(e.animationFrameRequestId),e.animationFrameRequestId=null),this},resumeAnimation:function(e){return e.animationFrameRequestId===null&&this._animationCycle(),this},_animationCycle:function(e){e.enablePointerInteraction&&(this.renderer().domElement.style.cursor=null),e.forceGraph.tickFrame(),e.renderObjs.tick(),e.animationFrameRequestId=requestAnimationFrame(this._animationCycle)},scene:function(e){return e.renderObjs.scene()},camera:function(e){return e.renderObjs.camera()},renderer:function(e){return e.renderObjs.renderer()},controls:function(e){return e.renderObjs.controls()},tbControls:function(e){return e.renderObjs.tbControls()},_destructor:function(){this.pauseAnimation(),this.graphData({nodes:[],links:[]})}},vO),yO),stateInit:function(e){var n=e.controlType,i=e.rendererConfig,r=e.extraRenderers,o=new DS;return{forceGraph:o,renderObjs:FS({controlType:n,rendererConfig:i,extraRenderers:r}).objects([o]).lights([new od.AmbientLight(13421772,Math.PI),new od.DirectionalLight(16777215,.6*Math.PI)])}},init:function(e,n){e.innerHTML="",e.appendChild(n.container=document.createElement("div")),n.container.style.position="relative";var i=document.createElement("div");n.container.appendChild(i),n.renderObjs(i);var r=n.renderObjs.camera(),o=n.renderObjs.renderer(),a=n.renderObjs.controls();a.enabled=!!n.enableNavigationControls,n.lastSetCameraZ=r.position.z;var s;n.container.appendChild(s=document.createElement("div")),s.className="graph-info-msg",s.textContent="",n.forceGraph.onLoading(function(){s.textContent="Loading..."}).onFinishLoading(function(){s.textContent=""}).onUpdate(function(){n.graphData=n.forceGraph.graphData(),r.position.x===0&&r.position.y===0&&r.position.z===n.lastSetCameraZ&&n.graphData.nodes.length&&(r.lookAt(n.forceGraph.position),n.lastSetCameraZ=r.position.z=Math.cbrt(n.graphData.nodes.length)*mO)}).onFinishUpdate(function(){if(n._dragControls){var l=n.graphData.nodes.find(function(c){return c.__initialFixedPos&&!c.__disposeControlsAfterDrag});l?l.__disposeControlsAfterDrag=!0:n._dragControls.dispose(),n._dragControls=void 0}if(n.enableNodeDrag&&n.enablePointerInteraction&&n.forceEngine==="d3"){var u=n._dragControls=new UP(n.graphData.nodes.map(function(c){return c.__threeObj}).filter(function(c){return c}),r,o.domElement);u.addEventListener("dragstart",function(c){a.enabled=!1,c.object.__initialPos=c.object.position.clone(),c.object.__prevPos=c.object.position.clone();var d=Pi(c.object).__data;!d.__initialFixedPos&&(d.__initialFixedPos={fx:d.fx,fy:d.fy,fz:d.fz}),!d.__initialPos&&(d.__initialPos={x:d.x,y:d.y,z:d.z}),["x","y","z"].forEach(function(h){return d["f".concat(h)]=d[h]}),o.domElement.classList.add("grabbable")}),u.addEventListener("drag",function(c){var d=Pi(c.object);if(!c.object.hasOwnProperty("__graphObjType")){var h=c.object.__initialPos,p=c.object.__prevPos,g=c.object.position;d.position.add(g.clone().sub(p)),p.copy(g),g.copy(h)}var v=d.__data,m=d.position,f={x:m.x-v.x,y:m.y-v.y,z:m.z-v.z};["x","y","z"].forEach(function(y){return v["f".concat(y)]=v[y]=m[y]}),n.forceGraph.d3AlphaTarget(.3).resetCountdown(),v.__dragged=!0,n.onNodeDrag(v,f)}),u.addEventListener("dragend",function(c){delete c.object.__initialPos,delete c.object.__prevPos;var d=Pi(c.object).__data;d.__disposeControlsAfterDrag&&(u.dispose(),delete d.__disposeControlsAfterDrag);var h=d.__initialFixedPos,p=d.__initialPos,g={x:p.x-d.x,y:p.y-d.y,z:p.z-d.z};h&&(["x","y","z"].forEach(function(v){var m="f".concat(v);h[m]===void 0&&delete d[m]}),delete d.__initialFixedPos,delete d.__initialPos,d.__dragged&&(delete d.__dragged,n.onNodeDragEnd(d,g))),n.forceGraph.d3AlphaTarget(0).resetCountdown(),n.enableNavigationControls&&(a.enabled=!0,a.domElement&&a.domElement.ownerDocument&&a.domElement.ownerDocument.dispatchEvent(new PointerEvent("pointerup",{pointerType:"touch"}))),o.domElement.classList.remove("grabbable")})}}),od.REVISION<155&&(n.renderObjs.renderer().useLegacyLights=!1),n.renderObjs.hoverOrderComparator(function(l,u){var c=Pi(l);if(!c)return 1;var d=Pi(u);if(!d)return-1;var h=function(g){return g.__graphObjType==="node"};return h(d)-h(c)}).tooltipContent(function(l){var u=Pi(l);return u&&Qe(n["".concat(u.__graphObjType,"Label")])(u.__data)||""}).hoverDuringDrag(!1).onHover(function(l){var u=Pi(l);if(u!==n.hoverObj){var c=n.hoverObj?n.hoverObj.__graphObjType:null,d=n.hoverObj?n.hoverObj.__data:null,h=u?u.__graphObjType:null,p=u?u.__data:null;if(c&&c!==h){var g=n["on".concat(c==="node"?"Node":"Link","Hover")];g&&g(null,d)}if(h){var v=n["on".concat(h==="node"?"Node":"Link","Hover")];v&&v(p,c===h?d:null)}o.domElement.classList[u&&n["on".concat(h==="node"?"Node":"Link","Click")]||!u&&n.onBackgroundClick?"add":"remove"]("clickable"),n.hoverObj=u}}).clickAfterDrag(!1).onClick(function(l,u){var c=Pi(l);if(c){var d=n["on".concat(c.__graphObjType==="node"?"Node":"Link","Click")];d&&d(c.__data,u)}else n.onBackgroundClick&&n.onBackgroundClick(u)}).onRightClick(function(l,u){var c=Pi(l);if(c){var d=n["on".concat(c.__graphObjType==="node"?"Node":"Link","RightClick")];d&&d(c.__data,u)}else n.onBackgroundRightClick&&n.onBackgroundRightClick(u)}),this._animationCycle()}});function Pi(t){for(var e=t;e&&!e.hasOwnProperty("__graphObjType");)e=e.parent;return e}var HS={exports:{}},SO="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",MO=SO,wO=MO;function VS(){}function GS(){}GS.resetWarningCache=VS;var EO=function(){function t(i,r,o,a,s,l){if(l!==wO){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:GS,resetWarningCache:VS};return n.PropTypes=n,n};HS.exports=EO();var bO=HS.exports;const H=qs(bO),Uc={width:H.number,height:H.number,graphData:H.shape({nodes:H.arrayOf(H.object).isRequired,links:H.arrayOf(H.object).isRequired}),backgroundColor:H.string,nodeRelSize:H.number,nodeId:H.string,nodeLabel:H.oneOfType([H.string,H.func]),nodeVal:H.oneOfType([H.number,H.string,H.func]),nodeVisibility:H.oneOfType([H.bool,H.string,H.func]),nodeColor:H.oneOfType([H.string,H.func]),nodeAutoColorBy:H.oneOfType([H.string,H.func]),onNodeHover:H.func,onNodeClick:H.func,linkSource:H.string,linkTarget:H.string,linkLabel:H.oneOfType([H.string,H.func]),linkVisibility:H.oneOfType([H.bool,H.string,H.func]),linkColor:H.oneOfType([H.string,H.func]),linkAutoColorBy:H.oneOfType([H.string,H.func]),linkWidth:H.oneOfType([H.number,H.string,H.func]),linkCurvature:H.oneOfType([H.number,H.string,H.func]),linkDirectionalArrowLength:H.oneOfType([H.number,H.string,H.func]),linkDirectionalArrowColor:H.oneOfType([H.string,H.func]),linkDirectionalArrowRelPos:H.oneOfType([H.number,H.string,H.func]),linkDirectionalParticles:H.oneOfType([H.number,H.string,H.func]),linkDirectionalParticleSpeed:H.oneOfType([H.number,H.string,H.func]),linkDirectionalParticleWidth:H.oneOfType([H.number,H.string,H.func]),linkDirectionalParticleColor:H.oneOfType([H.string,H.func]),onLinkHover:H.func,onLinkClick:H.func,dagMode:H.oneOf(["td","bu","lr","rl","zin","zout","radialin","radialout"]),dagLevelDistance:H.number,dagNodeFilter:H.func,onDagError:H.func,d3AlphaMin:H.number,d3AlphaDecay:H.number,d3VelocityDecay:H.number,warmupTicks:H.number,cooldownTicks:H.number,cooldownTime:H.number,onEngineTick:H.func,onEngineStop:H.func,getGraphBbox:H.func},WS={zoomToFit:H.func,onNodeRightClick:H.func,onNodeDrag:H.func,onNodeDragEnd:H.func,onLinkRightClick:H.func,linkHoverPrecision:H.number,onBackgroundClick:H.func,onBackgroundRightClick:H.func,enablePointerInteraction:H.bool,enableNodeDrag:H.bool},Cm={showNavInfo:H.bool,nodeOpacity:H.number,nodeResolution:H.number,nodeThreeObject:H.oneOfType([H.object,H.string,H.func]),nodeThreeObjectExtend:H.oneOfType([H.bool,H.string,H.func]),linkOpacity:H.number,linkResolution:H.number,linkCurveRotation:H.oneOfType([H.number,H.string,H.func]),linkMaterial:H.oneOfType([H.object,H.string,H.func]),linkThreeObject:H.oneOfType([H.object,H.string,H.func]),linkThreeObjectExtend:H.oneOfType([H.bool,H.string,H.func]),linkPositionUpdate:H.func,linkDirectionalArrowResolution:H.number,linkDirectionalParticleResolution:H.number,forceEngine:H.oneOf(["d3","ngraph"]),ngraphPhysics:H.object,numDimensions:H.oneOf([1,2,3])};Object.assign({},Uc,WS,{linkLineDash:H.oneOfType([H.arrayOf(H.number),H.string,H.func]),nodeCanvasObjectMode:H.oneOfType([H.string,H.func]),nodeCanvasObject:H.func,nodePointerAreaPaint:H.func,linkCanvasObjectMode:H.oneOfType([H.string,H.func]),linkCanvasObject:H.func,linkPointerAreaPaint:H.func,autoPauseRedraw:H.bool,minZoom:H.number,maxZoom:H.number,enableZoomInteraction:H.bool,enablePanInteraction:H.bool,onZoom:H.func,onZoomEnd:H.func,onRenderFramePre:H.func,onRenderFramePost:H.func});const TO=Object.assign({},Uc,WS,Cm,{enableNavigationControls:H.bool,controlType:H.oneOf(["trackball","orbit","fly"]),rendererConfig:H.object,extraRenderers:H.arrayOf(H.shape({render:H.func.isRequired}))});Object.assign({},Uc,Cm,{nodeDesc:H.oneOfType([H.string,H.func]),linkDesc:H.oneOfType([H.string,H.func])});Object.assign({},Uc,Cm,{markerAttrs:H.object,yOffset:H.number,glScale:H.number});const Rm=NP(xO,{methodNames:["emitParticle","d3Force","d3ReheatSimulation","stopAnimation","pauseAnimation","resumeAnimation","cameraPosition","zoomToFit","getGraphBbox","screen2GraphCoords","graph2ScreenCoords","postProcessingComposer","lights","scene","camera","renderer","controls","refresh"],initPropNames:["controlType","rendererConfig","extraRenderers"]});Rm.displayName="ForceGraph3D";Rm.propTypes=TO;const AO={nodes:Gg.skills.map((t,e)=>({id:e,item:t})),links:[...Array(Gg.skills.length).keys()].filter(t=>t).map(t=>({source:t,target:Math.round(Math.random()*(t-1))}))},CO=()=>{const t=kt.useRef(),e=300;return kt.useEffect(()=>{t.current.cameraPosition({z:e});let n=0;setInterval(()=>{t.current.cameraPosition({x:e*Math.sin(n),z:e*Math.cos(n)}),n+=Math.PI/300},10)},[]),dn.jsx(Rm,{enableNavigationControls:!1,ref:t,linkWidth:1,linkColor:"white",linkOpacity:1,showNavInfo:!1,backgroundColor:"rgba(0,0,0,0)",graphData:AO,nodeThreeObject:({item:n})=>{const i=new Bx().load(`${n.path}`);i.colorSpace=On;const r=new Nx({map:i,transparent:!0}),o=new $R(r);return o.scale.set(20,20),o}})};function RO(){return dn.jsxs("div",{id:"skills-container",children:[dn.jsx("h1",{id:"skill-header",children:"Tech Stack"}),dn.jsx(CO,{})]})}function PO(){return dn.jsxs(dn.Fragment,{children:[dn.jsx(Mw,{}),dn.jsx(RO,{})]})}ad.createRoot(document.getElementById("root")).render(dn.jsx(PO,{}));
