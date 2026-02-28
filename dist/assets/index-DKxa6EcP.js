var Fv=Object.defineProperty;var Ov=(s,e,t)=>e in s?Fv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Uc=(s,e,t)=>Ov(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var Fc={exports:{}},Oo={},Oc={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function Bv(){if(em)return pt;em=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,R={};function x(U,q,Ae){this.props=U,this.context=q,this.refs=R,this.updater=Ae||y}x.prototype.isReactComponent={},x.prototype.setState=function(U,q){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,q,"setState")},x.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function _(){}_.prototype=x.prototype;function C(U,q,Ae){this.props=U,this.context=q,this.refs=R,this.updater=Ae||y}var b=C.prototype=new _;b.constructor=C,M(b,x.prototype),b.isPureReactComponent=!0;var P=Array.isArray,F=Object.prototype.hasOwnProperty,I={current:null},B={key:!0,ref:!0,__self:!0,__source:!0};function w(U,q,Ae){var We,Ke={},ie=null,pe=null;if(q!=null)for(We in q.ref!==void 0&&(pe=q.ref),q.key!==void 0&&(ie=""+q.key),q)F.call(q,We)&&!B.hasOwnProperty(We)&&(Ke[We]=q[We]);var he=arguments.length-2;if(he===1)Ke.children=Ae;else if(1<he){for(var Ue=Array(he),Ve=0;Ve<he;Ve++)Ue[Ve]=arguments[Ve+2];Ke.children=Ue}if(U&&U.defaultProps)for(We in he=U.defaultProps,he)Ke[We]===void 0&&(Ke[We]=he[We]);return{$$typeof:s,type:U,key:ie,ref:pe,props:Ke,_owner:I.current}}function L(U,q){return{$$typeof:s,type:U.type,key:q,ref:U.ref,props:U.props,_owner:U._owner}}function ae(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function O(U){var q={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ae){return q[Ae]})}var J=/\/+/g;function Z(U,q){return typeof U=="object"&&U!==null&&U.key!=null?O(""+U.key):q.toString(36)}function le(U,q,Ae,We,Ke){var ie=typeof U;(ie==="undefined"||ie==="boolean")&&(U=null);var pe=!1;if(U===null)pe=!0;else switch(ie){case"string":case"number":pe=!0;break;case"object":switch(U.$$typeof){case s:case e:pe=!0}}if(pe)return pe=U,Ke=Ke(pe),U=We===""?"."+Z(pe,0):We,P(Ke)?(Ae="",U!=null&&(Ae=U.replace(J,"$&/")+"/"),le(Ke,q,Ae,"",function(Ve){return Ve})):Ke!=null&&(ae(Ke)&&(Ke=L(Ke,Ae+(!Ke.key||pe&&pe.key===Ke.key?"":(""+Ke.key).replace(J,"$&/")+"/")+U)),q.push(Ke)),1;if(pe=0,We=We===""?".":We+":",P(U))for(var he=0;he<U.length;he++){ie=U[he];var Ue=We+Z(ie,he);pe+=le(ie,q,Ae,Ue,Ke)}else if(Ue=g(U),typeof Ue=="function")for(U=Ue.call(U),he=0;!(ie=U.next()).done;)ie=ie.value,Ue=We+Z(ie,he++),pe+=le(ie,q,Ae,Ue,Ke);else if(ie==="object")throw q=String(U),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.");return pe}function Q(U,q,Ae){if(U==null)return U;var We=[],Ke=0;return le(U,We,"","",function(ie){return q.call(Ae,ie,Ke++)}),We}function ne(U){if(U._status===-1){var q=U._result;q=q(),q.then(function(Ae){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ae)},function(Ae){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ae)}),U._status===-1&&(U._status=0,U._result=q)}if(U._status===1)return U._result.default;throw U._result}var W={current:null},K={transition:null},oe={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:K,ReactCurrentOwner:I};function ue(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:Q,forEach:function(U,q,Ae){Q(U,function(){q.apply(this,arguments)},Ae)},count:function(U){var q=0;return Q(U,function(){q++}),q},toArray:function(U){return Q(U,function(q){return q})||[]},only:function(U){if(!ae(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},pt.Component=x,pt.Fragment=t,pt.Profiler=a,pt.PureComponent=C,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,pt.act=ue,pt.cloneElement=function(U,q,Ae){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var We=M({},U.props),Ke=U.key,ie=U.ref,pe=U._owner;if(q!=null){if(q.ref!==void 0&&(ie=q.ref,pe=I.current),q.key!==void 0&&(Ke=""+q.key),U.type&&U.type.defaultProps)var he=U.type.defaultProps;for(Ue in q)F.call(q,Ue)&&!B.hasOwnProperty(Ue)&&(We[Ue]=q[Ue]===void 0&&he!==void 0?he[Ue]:q[Ue])}var Ue=arguments.length-2;if(Ue===1)We.children=Ae;else if(1<Ue){he=Array(Ue);for(var Ve=0;Ve<Ue;Ve++)he[Ve]=arguments[Ve+2];We.children=he}return{$$typeof:s,type:U.type,key:Ke,ref:ie,props:We,_owner:pe}},pt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},pt.createElement=w,pt.createFactory=function(U){var q=w.bind(null,U);return q.type=U,q},pt.createRef=function(){return{current:null}},pt.forwardRef=function(U){return{$$typeof:f,render:U}},pt.isValidElement=ae,pt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:ne}},pt.memo=function(U,q){return{$$typeof:p,type:U,compare:q===void 0?null:q}},pt.startTransition=function(U){var q=K.transition;K.transition={};try{U()}finally{K.transition=q}},pt.unstable_act=ue,pt.useCallback=function(U,q){return W.current.useCallback(U,q)},pt.useContext=function(U){return W.current.useContext(U)},pt.useDebugValue=function(){},pt.useDeferredValue=function(U){return W.current.useDeferredValue(U)},pt.useEffect=function(U,q){return W.current.useEffect(U,q)},pt.useId=function(){return W.current.useId()},pt.useImperativeHandle=function(U,q,Ae){return W.current.useImperativeHandle(U,q,Ae)},pt.useInsertionEffect=function(U,q){return W.current.useInsertionEffect(U,q)},pt.useLayoutEffect=function(U,q){return W.current.useLayoutEffect(U,q)},pt.useMemo=function(U,q){return W.current.useMemo(U,q)},pt.useReducer=function(U,q,Ae){return W.current.useReducer(U,q,Ae)},pt.useRef=function(U){return W.current.useRef(U)},pt.useState=function(U){return W.current.useState(U)},pt.useSyncExternalStore=function(U,q,Ae){return W.current.useSyncExternalStore(U,q,Ae)},pt.useTransition=function(){return W.current.useTransition()},pt.version="18.3.1",pt}var tm;function vd(){return tm||(tm=1,Oc.exports=Bv()),Oc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nm;function kv(){if(nm)return Oo;nm=1;var s=vd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var v,S={},g=null,y=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(y=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(S[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)S[v]===void 0&&(S[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:y,props:S,_owner:a.current}}return Oo.Fragment=t,Oo.jsx=c,Oo.jsxs=c,Oo}var im;function zv(){return im||(im=1,Fc.exports=kv()),Fc.exports}var qo=zv(),Gl=vd(),vl={},Bc={exports:{}},In={},kc={exports:{}},zc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function Vv(){return rm||(rm=1,(function(s){function e(K,oe){var ue=K.length;K.push(oe);e:for(;0<ue;){var U=ue-1>>>1,q=K[U];if(0<a(q,oe))K[U]=oe,K[ue]=q,ue=U;else break e}}function t(K){return K.length===0?null:K[0]}function r(K){if(K.length===0)return null;var oe=K[0],ue=K.pop();if(ue!==oe){K[0]=ue;e:for(var U=0,q=K.length,Ae=q>>>1;U<Ae;){var We=2*(U+1)-1,Ke=K[We],ie=We+1,pe=K[ie];if(0>a(Ke,ue))ie<q&&0>a(pe,Ke)?(K[U]=pe,K[ie]=ue,U=ie):(K[U]=Ke,K[We]=ue,U=We);else if(ie<q&&0>a(pe,ue))K[U]=pe,K[ie]=ue,U=ie;else break e}}return oe}function a(K,oe){var ue=K.sortIndex-oe.sortIndex;return ue!==0?ue:K.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],v=1,S=null,g=3,y=!1,M=!1,R=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(K){for(var oe=t(p);oe!==null;){if(oe.callback===null)r(p);else if(oe.startTime<=K)r(p),oe.sortIndex=oe.expirationTime,e(h,oe);else break;oe=t(p)}}function P(K){if(R=!1,b(K),!M)if(t(h)!==null)M=!0,ne(F);else{var oe=t(p);oe!==null&&W(P,oe.startTime-K)}}function F(K,oe){M=!1,R&&(R=!1,_(w),w=-1),y=!0;var ue=g;try{for(b(oe),S=t(h);S!==null&&(!(S.expirationTime>oe)||K&&!O());){var U=S.callback;if(typeof U=="function"){S.callback=null,g=S.priorityLevel;var q=U(S.expirationTime<=oe);oe=s.unstable_now(),typeof q=="function"?S.callback=q:S===t(h)&&r(h),b(oe)}else r(h);S=t(h)}if(S!==null)var Ae=!0;else{var We=t(p);We!==null&&W(P,We.startTime-oe),Ae=!1}return Ae}finally{S=null,g=ue,y=!1}}var I=!1,B=null,w=-1,L=5,ae=-1;function O(){return!(s.unstable_now()-ae<L)}function J(){if(B!==null){var K=s.unstable_now();ae=K;var oe=!0;try{oe=B(!0,K)}finally{oe?Z():(I=!1,B=null)}}else I=!1}var Z;if(typeof C=="function")Z=function(){C(J)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,Q=le.port2;le.port1.onmessage=J,Z=function(){Q.postMessage(null)}}else Z=function(){x(J,0)};function ne(K){B=K,I||(I=!0,Z())}function W(K,oe){w=x(function(){K(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(K){K.callback=null},s.unstable_continueExecution=function(){M||y||(M=!0,ne(F))},s.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<K?Math.floor(1e3/K):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(K){switch(g){case 1:case 2:case 3:var oe=3;break;default:oe=g}var ue=g;g=oe;try{return K()}finally{g=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(K,oe){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var ue=g;g=K;try{return oe()}finally{g=ue}},s.unstable_scheduleCallback=function(K,oe,ue){var U=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?U+ue:U):ue=U,K){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=ue+q,K={id:v++,callback:oe,priorityLevel:K,startTime:ue,expirationTime:q,sortIndex:-1},ue>U?(K.sortIndex=ue,e(p,K),t(h)===null&&K===t(p)&&(R?(_(w),w=-1):R=!0,W(P,ue-U))):(K.sortIndex=q,e(h,K),M||y||(M=!0,ne(F))),K},s.unstable_shouldYield=O,s.unstable_wrapCallback=function(K){var oe=g;return function(){var ue=g;g=oe;try{return K.apply(this,arguments)}finally{g=ue}}}})(zc)),zc}var sm;function Hv(){return sm||(sm=1,kc.exports=Vv()),kc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var om;function Gv(){if(om)return In;om=1;var s=vd(),e=Hv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function g(n){return h.call(S,n)?!0:h.call(v,n)?!1:p.test(n)?S[n]=!0:(v[n]=!0,!1)}function y(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,u){if(i===null||typeof i>"u"||y(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function R(n,i,o,u,d,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new R(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,C);x[i]=new R(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,C);x[i]=new R(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,C);x[i]=new R(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,o,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,d,u)&&(o=null),u||d===null?g(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,u=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F=Symbol.for("react.element"),I=Symbol.for("react.portal"),B=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),ae=Symbol.for("react.provider"),O=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),le=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),K=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=K&&n[K]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,U;function q(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ae=!1;function We(n,i){if(!n||Ae)return"";Ae=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(re){var u=re}Reflect.construct(n,[],i)}else{try{i.call()}catch(re){u=re}n.call(i.prototype)}else{try{throw Error()}catch(re){u=re}n()}}catch(re){if(re&&u&&typeof re.stack=="string"){for(var d=re.stack.split(`
`),m=u.stack.split(`
`),T=d.length-1,N=m.length-1;1<=T&&0<=N&&d[T]!==m[N];)N--;for(;1<=T&&0<=N;T--,N--)if(d[T]!==m[N]){if(T!==1||N!==1)do if(T--,N--,0>N||d[T]!==m[N]){var k=`
`+d[T].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=T&&0<=N);break}}}finally{Ae=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?q(n):""}function Ke(n){switch(n.tag){case 5:return q(n.type);case 16:return q("Lazy");case 13:return q("Suspense");case 19:return q("SuspenseList");case 0:case 2:case 15:return n=We(n.type,!1),n;case 11:return n=We(n.type.render,!1),n;case 1:return n=We(n.type,!0),n;default:return""}}function ie(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case B:return"Fragment";case I:return"Portal";case L:return"Profiler";case w:return"StrictMode";case Z:return"Suspense";case le:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case O:return(n.displayName||"Context")+".Consumer";case ae:return(n._context.displayName||"Context")+".Provider";case J:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Q:return i=n.displayName||null,i!==null?i:ie(n.type)||"Memo";case ne:i=n._payload,n=n._init;try{return ie(n(i))}catch{}}return null}function pe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ie(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function he(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(n){var i=Ue(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(T){u=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(T){u=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function nt(n){n._valueTracker||(n._valueTracker=Ve(n))}function Yt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ue(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xt(n,i){var o=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function Rt(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=he(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function Ut(n,i){ut(n,i);var o=he(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Bt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Bt(n,i.type,he(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function z(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Bt(n,i,o){(i!=="number"||ht(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var gt=Array.isArray;function St(n,i,o,u){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+he(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function He(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(gt(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:he(o)}}function E(n,i){var o=he(i.value),u=he(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function G(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ce,Oe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Te(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var qe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},it=["Webkit","ms","Moz","O"];Object.keys(qe).forEach(function(n){it.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),qe[i]=qe[n]})});function xe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||qe.hasOwnProperty(n)&&qe[n]?(""+i).trim():i+"px"}function Ee(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,d=xe(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,d):n[o]=d}}var Ge=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Be(n,i){if(i){if(Ge[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function be(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var we=null,ye=null,Le=null;function Se(n){if(n=Mo(n)){if(typeof we!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Da(i),we(n.stateNode,n.type,i))}}function fe(n){ye?Le?Le.push(n):Le=[n]:ye=n}function ke(){if(ye){var n=ye,i=Le;if(Le=ye=null,Se(n),i)for(n=0;n<i.length;n++)Se(i[n])}}function rt(n,i){return n(i)}function bt(){}var yt=!1;function Wn(n,i,o){if(yt)return n(i,o);yt=!0;try{return rt(n,i,o)}finally{yt=!1,(ye!==null||Le!==null)&&(bt(),ke())}}function Sn(n,i){var o=n.stateNode;if(o===null)return null;var u=Da(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var os=!1;if(f)try{var Ni={};Object.defineProperty(Ni,"passive",{get:function(){os=!0}}),window.addEventListener("test",Ni,Ni),window.removeEventListener("test",Ni,Ni)}catch{os=!1}function iu(n,i,o,u,d,m,T,N,k){var re=Array.prototype.slice.call(arguments,3);try{i.apply(o,re)}catch(ve){this.onError(ve)}}var er=!1,Lr=null,Xn=!1,Dr=null,ca={onError:function(n){er=!0,Lr=n}};function fa(n,i,o,u,d,m,T,N,k){er=!1,Lr=null,iu.apply(ca,arguments)}function as(n,i,o,u,d,m,T,N,k){if(fa.apply(this,arguments),er){if(er){var re=Lr;er=!1,Lr=null}else throw Error(t(198));Xn||(Xn=!0,Dr=re)}}function mi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Nr(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function io(n){if(mi(n)!==n)throw Error(t(188))}function da(n){var i=n.alternate;if(!i){if(i=mi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return io(d),n;if(m===u)return io(d),i;m=m.sibling}throw Error(t(188))}if(o.return!==u.return)o=d,u=m;else{for(var T=!1,N=d.child;N;){if(N===o){T=!0,o=d,u=m;break}if(N===u){T=!0,u=d,o=m;break}N=N.sibling}if(!T){for(N=m.child;N;){if(N===o){T=!0,o=m,u=d;break}if(N===u){T=!0,u=m,o=d;break}N=N.sibling}if(!T)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ha(n){return n=da(n),n!==null?pa(n):null}function pa(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=pa(n);if(i!==null)return i;n=n.sibling}return null}var ma=e.unstable_scheduleCallback,ga=e.unstable_cancelCallback,ru=e.unstable_shouldYield,su=e.unstable_requestPaint,A=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,se=e.unstable_ImmediatePriority,te=e.unstable_UserBlockingPriority,$=e.unstable_NormalPriority,Re=e.unstable_LowPriority,Ie=e.unstable_IdlePriority,Ce=null,De=null;function Ze(n){if(De&&typeof De.onCommitFiberRoot=="function")try{De.onCommitFiberRoot(Ce,n,void 0,(n.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Pt,ct=Math.log,$e=Math.LN2;function Pt(n){return n>>>=0,n===0?32:31-(ct(n)/$e|0)|0}var Nt=64,Dt=4194304;function _t(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qt(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,T=o&268435455;if(T!==0){var N=T&~d;N!==0?u=_t(N):(m&=T,m!==0&&(u=_t(m)))}else T=o&~d,T!==0?u=_t(T):m!==0&&(u=_t(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-Qe(i),d=1<<o,u|=n[o],i&=~d;return u}function Ye(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function yn(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-Qe(m),N=1<<T,k=d[T];k===-1?((N&o)===0||(N&u)!==0)&&(d[T]=Ye(N,i)):k<=i&&(n.expiredLanes|=N),m&=~N}}function vt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Cn(){var n=Nt;return Nt<<=1,(Nt&4194240)===0&&(Nt=64),n}function Rn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function Fn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Qe(i),n[i]=o}function tr(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-Qe(o),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,o&=~m}}function At(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-Qe(o),d=1<<u;d&i|n[u]&i&&(n[u]|=i),o&=~d}}var st=0;function ii(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var jt,Yn,Ii,ro,Fd,ou=!1,va=[],nr=null,ir=null,rr=null,so=new Map,oo=new Map,sr=[],r0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Od(n,i){switch(n){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(n,i,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Mo(i),i!==null&&Yn(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function s0(n,i,o,u,d){switch(i){case"focusin":return nr=ao(nr,n,i,o,u,d),!0;case"dragenter":return ir=ao(ir,n,i,o,u,d),!0;case"mouseover":return rr=ao(rr,n,i,o,u,d),!0;case"pointerover":var m=d.pointerId;return so.set(m,ao(so.get(m)||null,n,i,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,oo.set(m,ao(oo.get(m)||null,n,i,o,u,d)),!0}return!1}function Bd(n){var i=Ir(n.target);if(i!==null){var o=mi(i);if(o!==null){if(i=o.tag,i===13){if(i=Nr(o),i!==null){n.blockedOn=i,Fd(n.priority,function(){Ii(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function _a(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=lu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);lt=u,o.target.dispatchEvent(u),lt=null}else return i=Mo(o),i!==null&&Yn(i),n.blockedOn=o,!1;i.shift()}return!0}function kd(n,i,o){_a(n)&&o.delete(i)}function o0(){ou=!1,nr!==null&&_a(nr)&&(nr=null),ir!==null&&_a(ir)&&(ir=null),rr!==null&&_a(rr)&&(rr=null),so.forEach(kd),oo.forEach(kd)}function lo(n,i){n.blockedOn===i&&(n.blockedOn=null,ou||(ou=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,o0)))}function uo(n){function i(d){return lo(d,n)}if(0<va.length){lo(va[0],n);for(var o=1;o<va.length;o++){var u=va[o];u.blockedOn===n&&(u.blockedOn=null)}}for(nr!==null&&lo(nr,n),ir!==null&&lo(ir,n),rr!==null&&lo(rr,n),so.forEach(i),oo.forEach(i),o=0;o<sr.length;o++)u=sr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<sr.length&&(o=sr[0],o.blockedOn===null);)Bd(o),o.blockedOn===null&&sr.shift()}var ls=P.ReactCurrentBatchConfig,xa=!0;function a0(n,i,o,u){var d=st,m=ls.transition;ls.transition=null;try{st=1,au(n,i,o,u)}finally{st=d,ls.transition=m}}function l0(n,i,o,u){var d=st,m=ls.transition;ls.transition=null;try{st=4,au(n,i,o,u)}finally{st=d,ls.transition=m}}function au(n,i,o,u){if(xa){var d=lu(n,i,o,u);if(d===null)wu(n,i,u,Sa,o),Od(n,u);else if(s0(d,n,i,o,u))u.stopPropagation();else if(Od(n,u),i&4&&-1<r0.indexOf(n)){for(;d!==null;){var m=Mo(d);if(m!==null&&jt(m),m=lu(n,i,o,u),m===null&&wu(n,i,u,Sa,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else wu(n,i,u,null,o)}}var Sa=null;function lu(n,i,o,u){if(Sa=null,n=V(u),n=Ir(n),n!==null)if(i=mi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Nr(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Sa=n,null}function zd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case se:return 1;case te:return 4;case $:case Re:return 16;case Ie:return 536870912;default:return 16}default:return 16}}var or=null,uu=null,ya=null;function Vd(){if(ya)return ya;var n,i=uu,o=i.length,u,d="value"in or?or.value:or.textContent,m=d.length;for(n=0;n<o&&i[n]===d[n];n++);var T=o-n;for(u=1;u<=T&&i[o-u]===d[m-u];u++);return ya=d.slice(n,1<u?1-u:void 0)}function Ma(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ea(){return!0}function Hd(){return!1}function On(n){function i(o,u,d,m,T){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(o=n[N],this[N]=o?o(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ea:Hd,this.isPropagationStopped=Hd,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Ea)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Ea)},persist:function(){},isPersistent:Ea}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cu=On(us),co=ue({},us,{view:0,detail:0}),u0=On(co),fu,du,fo,Ta=ue({},co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fo&&(fo&&n.type==="mousemove"?(fu=n.screenX-fo.screenX,du=n.screenY-fo.screenY):du=fu=0,fo=n),fu)},movementY:function(n){return"movementY"in n?n.movementY:du}}),Gd=On(Ta),c0=ue({},Ta,{dataTransfer:0}),f0=On(c0),d0=ue({},co,{relatedTarget:0}),hu=On(d0),h0=ue({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),p0=On(h0),m0=ue({},us,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),g0=On(m0),v0=ue({},us,{data:0}),Wd=On(v0),_0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},x0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},S0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function y0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=S0[n])?!!i[n]:!1}function pu(){return y0}var M0=ue({},co,{key:function(n){if(n.key){var i=_0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ma(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?x0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pu,charCode:function(n){return n.type==="keypress"?Ma(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ma(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),E0=On(M0),T0=ue({},Ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xd=On(T0),w0=ue({},co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pu}),A0=On(w0),C0=ue({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),R0=On(C0),P0=ue({},Ta,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),b0=On(P0),L0=[9,13,27,32],mu=f&&"CompositionEvent"in window,ho=null;f&&"documentMode"in document&&(ho=document.documentMode);var D0=f&&"TextEvent"in window&&!ho,Yd=f&&(!mu||ho&&8<ho&&11>=ho),qd=" ",jd=!1;function Zd(n,i){switch(n){case"keyup":return L0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var cs=!1;function N0(n,i){switch(n){case"compositionend":return Kd(i);case"keypress":return i.which!==32?null:(jd=!0,qd);case"textInput":return n=i.data,n===qd&&jd?null:n;default:return null}}function I0(n,i){if(cs)return n==="compositionend"||!mu&&Zd(n,i)?(n=Vd(),ya=uu=or=null,cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Yd&&i.locale!=="ko"?null:i.data;default:return null}}var U0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $d(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!U0[n.type]:i==="textarea"}function Jd(n,i,o,u){fe(u),i=Pa(i,"onChange"),0<i.length&&(o=new cu("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var po=null,mo=null;function F0(n){gh(n,0)}function wa(n){var i=ms(n);if(Yt(i))return n}function O0(n,i){if(n==="change")return i}var Qd=!1;if(f){var gu;if(f){var vu="oninput"in document;if(!vu){var eh=document.createElement("div");eh.setAttribute("oninput","return;"),vu=typeof eh.oninput=="function"}gu=vu}else gu=!1;Qd=gu&&(!document.documentMode||9<document.documentMode)}function th(){po&&(po.detachEvent("onpropertychange",nh),mo=po=null)}function nh(n){if(n.propertyName==="value"&&wa(mo)){var i=[];Jd(i,mo,n,V(n)),Wn(F0,i)}}function B0(n,i,o){n==="focusin"?(th(),po=i,mo=o,po.attachEvent("onpropertychange",nh)):n==="focusout"&&th()}function k0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wa(mo)}function z0(n,i){if(n==="click")return wa(i)}function V0(n,i){if(n==="input"||n==="change")return wa(i)}function H0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ri=typeof Object.is=="function"?Object.is:H0;function go(n,i){if(ri(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!h.call(i,d)||!ri(n[d],i[d]))return!1}return!0}function ih(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function rh(n,i){var o=ih(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=ih(o)}}function sh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?sh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function oh(){for(var n=window,i=ht();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=ht(n.document)}return i}function _u(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function G0(n){var i=oh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&sh(o.ownerDocument.documentElement,o)){if(u!==null&&_u(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=rh(o,m);var T=rh(o,u);d&&T&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var W0=f&&"documentMode"in document&&11>=document.documentMode,fs=null,xu=null,vo=null,Su=!1;function ah(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Su||fs==null||fs!==ht(u)||(u=fs,"selectionStart"in u&&_u(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),vo&&go(vo,u)||(vo=u,u=Pa(xu,"onSelect"),0<u.length&&(i=new cu("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=fs)))}function Aa(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ds={animationend:Aa("Animation","AnimationEnd"),animationiteration:Aa("Animation","AnimationIteration"),animationstart:Aa("Animation","AnimationStart"),transitionend:Aa("Transition","TransitionEnd")},yu={},lh={};f&&(lh=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function Ca(n){if(yu[n])return yu[n];if(!ds[n])return n;var i=ds[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in lh)return yu[n]=i[o];return n}var uh=Ca("animationend"),ch=Ca("animationiteration"),fh=Ca("animationstart"),dh=Ca("transitionend"),hh=new Map,ph="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(n,i){hh.set(n,i),l(i,[n])}for(var Mu=0;Mu<ph.length;Mu++){var Eu=ph[Mu],X0=Eu.toLowerCase(),Y0=Eu[0].toUpperCase()+Eu.slice(1);ar(X0,"on"+Y0)}ar(uh,"onAnimationEnd"),ar(ch,"onAnimationIteration"),ar(fh,"onAnimationStart"),ar("dblclick","onDoubleClick"),ar("focusin","onFocus"),ar("focusout","onBlur"),ar(dh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),q0=new Set("cancel close invalid load scroll toggle".split(" ").concat(_o));function mh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,as(u,i,void 0,n),n.currentTarget=null}function gh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var T=u.length-1;0<=T;T--){var N=u[T],k=N.instance,re=N.currentTarget;if(N=N.listener,k!==m&&d.isPropagationStopped())break e;mh(d,N,re),m=k}else for(T=0;T<u.length;T++){if(N=u[T],k=N.instance,re=N.currentTarget,N=N.listener,k!==m&&d.isPropagationStopped())break e;mh(d,N,re),m=k}}}if(Xn)throw n=Dr,Xn=!1,Dr=null,n}function Ft(n,i){var o=i[Lu];o===void 0&&(o=i[Lu]=new Set);var u=n+"__bubble";o.has(u)||(vh(i,n,2,!1),o.add(u))}function Tu(n,i,o){var u=0;i&&(u|=4),vh(o,n,u,i)}var Ra="_reactListening"+Math.random().toString(36).slice(2);function xo(n){if(!n[Ra]){n[Ra]=!0,r.forEach(function(o){o!=="selectionchange"&&(q0.has(o)||Tu(o,!1,n),Tu(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Ra]||(i[Ra]=!0,Tu("selectionchange",!1,i))}}function vh(n,i,o,u){switch(zd(i)){case 1:var d=a0;break;case 4:d=l0;break;default:d=au}o=d.bind(null,i,o,n),d=void 0,!os||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function wu(n,i,o,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var T=u.tag;if(T===3||T===4){var N=u.stateNode.containerInfo;if(N===d||N.nodeType===8&&N.parentNode===d)break;if(T===4)for(T=u.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;T=T.return}for(;N!==null;){if(T=Ir(N),T===null)return;if(k=T.tag,k===5||k===6){u=m=T;continue e}N=N.parentNode}}u=u.return}Wn(function(){var re=m,ve=V(o),_e=[];e:{var ge=hh.get(n);if(ge!==void 0){var Ne=cu,ze=n;switch(n){case"keypress":if(Ma(o)===0)break e;case"keydown":case"keyup":Ne=E0;break;case"focusin":ze="focus",Ne=hu;break;case"focusout":ze="blur",Ne=hu;break;case"beforeblur":case"afterblur":Ne=hu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ne=Gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ne=f0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ne=A0;break;case uh:case ch:case fh:Ne=p0;break;case dh:Ne=R0;break;case"scroll":Ne=u0;break;case"wheel":Ne=b0;break;case"copy":case"cut":case"paste":Ne=g0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ne=Xd}var Xe=(i&4)!==0,Zt=!Xe&&n==="scroll",j=Xe?ge!==null?ge+"Capture":null:ge;Xe=[];for(var H=re,ee;H!==null;){ee=H;var Me=ee.stateNode;if(ee.tag===5&&Me!==null&&(ee=Me,j!==null&&(Me=Sn(H,j),Me!=null&&Xe.push(So(H,Me,ee)))),Zt)break;H=H.return}0<Xe.length&&(ge=new Ne(ge,ze,null,o,ve),_e.push({event:ge,listeners:Xe}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Ne=n==="mouseout"||n==="pointerout",ge&&o!==lt&&(ze=o.relatedTarget||o.fromElement)&&(Ir(ze)||ze[Ui]))break e;if((Ne||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ne?(ze=o.relatedTarget||o.toElement,Ne=re,ze=ze?Ir(ze):null,ze!==null&&(Zt=mi(ze),ze!==Zt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(Ne=null,ze=re),Ne!==ze)){if(Xe=Gd,Me="onMouseLeave",j="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Xe=Xd,Me="onPointerLeave",j="onPointerEnter",H="pointer"),Zt=Ne==null?ge:ms(Ne),ee=ze==null?ge:ms(ze),ge=new Xe(Me,H+"leave",Ne,o,ve),ge.target=Zt,ge.relatedTarget=ee,Me=null,Ir(ve)===re&&(Xe=new Xe(j,H+"enter",ze,o,ve),Xe.target=ee,Xe.relatedTarget=Zt,Me=Xe),Zt=Me,Ne&&ze)t:{for(Xe=Ne,j=ze,H=0,ee=Xe;ee;ee=hs(ee))H++;for(ee=0,Me=j;Me;Me=hs(Me))ee++;for(;0<H-ee;)Xe=hs(Xe),H--;for(;0<ee-H;)j=hs(j),ee--;for(;H--;){if(Xe===j||j!==null&&Xe===j.alternate)break t;Xe=hs(Xe),j=hs(j)}Xe=null}else Xe=null;Ne!==null&&_h(_e,ge,Ne,Xe,!1),ze!==null&&Zt!==null&&_h(_e,Zt,ze,Xe,!0)}}e:{if(ge=re?ms(re):window,Ne=ge.nodeName&&ge.nodeName.toLowerCase(),Ne==="select"||Ne==="input"&&ge.type==="file")var je=O0;else if($d(ge))if(Qd)je=V0;else{je=k0;var et=B0}else(Ne=ge.nodeName)&&Ne.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=z0);if(je&&(je=je(n,re))){Jd(_e,je,o,ve);break e}et&&et(n,ge,re),n==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&Bt(ge,"number",ge.value)}switch(et=re?ms(re):window,n){case"focusin":($d(et)||et.contentEditable==="true")&&(fs=et,xu=re,vo=null);break;case"focusout":vo=xu=fs=null;break;case"mousedown":Su=!0;break;case"contextmenu":case"mouseup":case"dragend":Su=!1,ah(_e,o,ve);break;case"selectionchange":if(W0)break;case"keydown":case"keyup":ah(_e,o,ve)}var tt;if(mu)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else cs?Zd(n,o)&&(ot="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ot="onCompositionStart");ot&&(Yd&&o.locale!=="ko"&&(cs||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&cs&&(tt=Vd()):(or=ve,uu="value"in or?or.value:or.textContent,cs=!0)),et=Pa(re,ot),0<et.length&&(ot=new Wd(ot,n,null,o,ve),_e.push({event:ot,listeners:et}),tt?ot.data=tt:(tt=Kd(o),tt!==null&&(ot.data=tt)))),(tt=D0?N0(n,o):I0(n,o))&&(re=Pa(re,"onBeforeInput"),0<re.length&&(ve=new Wd("onBeforeInput","beforeinput",null,o,ve),_e.push({event:ve,listeners:re}),ve.data=tt))}gh(_e,i)})}function So(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Pa(n,i){for(var o=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Sn(n,o),m!=null&&u.unshift(So(n,m,d)),m=Sn(n,i),m!=null&&u.push(So(n,m,d))),n=n.return}return u}function hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function _h(n,i,o,u,d){for(var m=i._reactName,T=[];o!==null&&o!==u;){var N=o,k=N.alternate,re=N.stateNode;if(k!==null&&k===u)break;N.tag===5&&re!==null&&(N=re,d?(k=Sn(o,m),k!=null&&T.unshift(So(o,k,N))):d||(k=Sn(o,m),k!=null&&T.push(So(o,k,N)))),o=o.return}T.length!==0&&n.push({event:i,listeners:T})}var j0=/\r\n?/g,Z0=/\u0000|\uFFFD/g;function xh(n){return(typeof n=="string"?n:""+n).replace(j0,`
`).replace(Z0,"")}function ba(n,i,o){if(i=xh(i),xh(n)!==i&&o)throw Error(t(425))}function La(){}var Au=null,Cu=null;function Ru(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Pu=typeof setTimeout=="function"?setTimeout:void 0,K0=typeof clearTimeout=="function"?clearTimeout:void 0,Sh=typeof Promise=="function"?Promise:void 0,$0=typeof queueMicrotask=="function"?queueMicrotask:typeof Sh<"u"?function(n){return Sh.resolve(null).then(n).catch(J0)}:Pu;function J0(n){setTimeout(function(){throw n})}function bu(n,i){var o=i,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(u===0){n.removeChild(d),uo(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=d}while(o);uo(i)}function lr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function yh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ps=Math.random().toString(36).slice(2),gi="__reactFiber$"+ps,yo="__reactProps$"+ps,Ui="__reactContainer$"+ps,Lu="__reactEvents$"+ps,Q0="__reactListeners$"+ps,ev="__reactHandles$"+ps;function Ir(n){var i=n[gi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ui]||o[gi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=yh(n);n!==null;){if(o=n[gi])return o;n=yh(n)}return i}n=o,o=n.parentNode}return null}function Mo(n){return n=n[gi]||n[Ui],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Da(n){return n[yo]||null}var Du=[],gs=-1;function ur(n){return{current:n}}function Ot(n){0>gs||(n.current=Du[gs],Du[gs]=null,gs--)}function It(n,i){gs++,Du[gs]=n.current,n.current=i}var cr={},dn=ur(cr),Pn=ur(!1),Ur=cr;function vs(n,i){var o=n.type.contextTypes;if(!o)return cr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in o)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function bn(n){return n=n.childContextTypes,n!=null}function Na(){Ot(Pn),Ot(dn)}function Mh(n,i,o){if(dn.current!==cr)throw Error(t(168));It(dn,i),It(Pn,o)}function Eh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,pe(n)||"Unknown",d));return ue({},o,u)}function Ia(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||cr,Ur=dn.current,It(dn,n),It(Pn,Pn.current),!0}function Th(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Eh(n,i,Ur),u.__reactInternalMemoizedMergedChildContext=n,Ot(Pn),Ot(dn),It(dn,n)):Ot(Pn),It(Pn,o)}var Fi=null,Ua=!1,Nu=!1;function wh(n){Fi===null?Fi=[n]:Fi.push(n)}function tv(n){Ua=!0,wh(n)}function fr(){if(!Nu&&Fi!==null){Nu=!0;var n=0,i=st;try{var o=Fi;for(st=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Fi=null,Ua=!1}catch(d){throw Fi!==null&&(Fi=Fi.slice(n+1)),ma(se,fr),d}finally{st=i,Nu=!1}}return null}var _s=[],xs=0,Fa=null,Oa=0,qn=[],jn=0,Fr=null,Oi=1,Bi="";function Or(n,i){_s[xs++]=Oa,_s[xs++]=Fa,Fa=n,Oa=i}function Ah(n,i,o){qn[jn++]=Oi,qn[jn++]=Bi,qn[jn++]=Fr,Fr=n;var u=Oi;n=Bi;var d=32-Qe(u)-1;u&=~(1<<d),o+=1;var m=32-Qe(i)+d;if(30<m){var T=d-d%5;m=(u&(1<<T)-1).toString(32),u>>=T,d-=T,Oi=1<<32-Qe(i)+d|o<<d|u,Bi=m+n}else Oi=1<<m|o<<d|u,Bi=n}function Iu(n){n.return!==null&&(Or(n,1),Ah(n,1,0))}function Uu(n){for(;n===Fa;)Fa=_s[--xs],_s[xs]=null,Oa=_s[--xs],_s[xs]=null;for(;n===Fr;)Fr=qn[--jn],qn[jn]=null,Bi=qn[--jn],qn[jn]=null,Oi=qn[--jn],qn[jn]=null}var Bn=null,kn=null,kt=!1,si=null;function Ch(n,i){var o=Jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Rh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Bn=n,kn=lr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Bn=n,kn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Fr!==null?{id:Oi,overflow:Bi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Jn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Bn=n,kn=null,!0):!1;default:return!1}}function Fu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ou(n){if(kt){var i=kn;if(i){var o=i;if(!Rh(n,i)){if(Fu(n))throw Error(t(418));i=lr(o.nextSibling);var u=Bn;i&&Rh(n,i)?Ch(u,o):(n.flags=n.flags&-4097|2,kt=!1,Bn=n)}}else{if(Fu(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,Bn=n}}}function Ph(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Bn=n}function Ba(n){if(n!==Bn)return!1;if(!kt)return Ph(n),kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Ru(n.type,n.memoizedProps)),i&&(i=kn)){if(Fu(n))throw bh(),Error(t(418));for(;i;)Ch(n,i),i=lr(i.nextSibling)}if(Ph(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){kn=lr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}kn=null}}else kn=Bn?lr(n.stateNode.nextSibling):null;return!0}function bh(){for(var n=kn;n;)n=lr(n.nextSibling)}function Ss(){kn=Bn=null,kt=!1}function Bu(n){si===null?si=[n]:si.push(n)}var nv=P.ReactCurrentBatchConfig;function Eo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var N=d.refs;T===null?delete N[m]:N[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function ka(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Lh(n){var i=n._init;return i(n._payload)}function Dh(n){function i(j,H){if(n){var ee=j.deletions;ee===null?(j.deletions=[H],j.flags|=16):ee.push(H)}}function o(j,H){if(!n)return null;for(;H!==null;)i(j,H),H=H.sibling;return null}function u(j,H){for(j=new Map;H!==null;)H.key!==null?j.set(H.key,H):j.set(H.index,H),H=H.sibling;return j}function d(j,H){return j=xr(j,H),j.index=0,j.sibling=null,j}function m(j,H,ee){return j.index=ee,n?(ee=j.alternate,ee!==null?(ee=ee.index,ee<H?(j.flags|=2,H):ee):(j.flags|=2,H)):(j.flags|=1048576,H)}function T(j){return n&&j.alternate===null&&(j.flags|=2),j}function N(j,H,ee,Me){return H===null||H.tag!==6?(H=Pc(ee,j.mode,Me),H.return=j,H):(H=d(H,ee),H.return=j,H)}function k(j,H,ee,Me){var je=ee.type;return je===B?ve(j,H,ee.props.children,Me,ee.key):H!==null&&(H.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ne&&Lh(je)===H.type)?(Me=d(H,ee.props),Me.ref=Eo(j,H,ee),Me.return=j,Me):(Me=ul(ee.type,ee.key,ee.props,null,j.mode,Me),Me.ref=Eo(j,H,ee),Me.return=j,Me)}function re(j,H,ee,Me){return H===null||H.tag!==4||H.stateNode.containerInfo!==ee.containerInfo||H.stateNode.implementation!==ee.implementation?(H=bc(ee,j.mode,Me),H.return=j,H):(H=d(H,ee.children||[]),H.return=j,H)}function ve(j,H,ee,Me,je){return H===null||H.tag!==7?(H=Xr(ee,j.mode,Me,je),H.return=j,H):(H=d(H,ee),H.return=j,H)}function _e(j,H,ee){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Pc(""+H,j.mode,ee),H.return=j,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case F:return ee=ul(H.type,H.key,H.props,null,j.mode,ee),ee.ref=Eo(j,null,H),ee.return=j,ee;case I:return H=bc(H,j.mode,ee),H.return=j,H;case ne:var Me=H._init;return _e(j,Me(H._payload),ee)}if(gt(H)||oe(H))return H=Xr(H,j.mode,ee,null),H.return=j,H;ka(j,H)}return null}function ge(j,H,ee,Me){var je=H!==null?H.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return je!==null?null:N(j,H,""+ee,Me);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case F:return ee.key===je?k(j,H,ee,Me):null;case I:return ee.key===je?re(j,H,ee,Me):null;case ne:return je=ee._init,ge(j,H,je(ee._payload),Me)}if(gt(ee)||oe(ee))return je!==null?null:ve(j,H,ee,Me,null);ka(j,ee)}return null}function Ne(j,H,ee,Me,je){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return j=j.get(ee)||null,N(H,j,""+Me,je);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case F:return j=j.get(Me.key===null?ee:Me.key)||null,k(H,j,Me,je);case I:return j=j.get(Me.key===null?ee:Me.key)||null,re(H,j,Me,je);case ne:var et=Me._init;return Ne(j,H,ee,et(Me._payload),je)}if(gt(Me)||oe(Me))return j=j.get(ee)||null,ve(H,j,Me,je,null);ka(H,Me)}return null}function ze(j,H,ee,Me){for(var je=null,et=null,tt=H,ot=H=0,sn=null;tt!==null&&ot<ee.length;ot++){tt.index>ot?(sn=tt,tt=null):sn=tt.sibling;var Tt=ge(j,tt,ee[ot],Me);if(Tt===null){tt===null&&(tt=sn);break}n&&tt&&Tt.alternate===null&&i(j,tt),H=m(Tt,H,ot),et===null?je=Tt:et.sibling=Tt,et=Tt,tt=sn}if(ot===ee.length)return o(j,tt),kt&&Or(j,ot),je;if(tt===null){for(;ot<ee.length;ot++)tt=_e(j,ee[ot],Me),tt!==null&&(H=m(tt,H,ot),et===null?je=tt:et.sibling=tt,et=tt);return kt&&Or(j,ot),je}for(tt=u(j,tt);ot<ee.length;ot++)sn=Ne(tt,j,ot,ee[ot],Me),sn!==null&&(n&&sn.alternate!==null&&tt.delete(sn.key===null?ot:sn.key),H=m(sn,H,ot),et===null?je=sn:et.sibling=sn,et=sn);return n&&tt.forEach(function(Sr){return i(j,Sr)}),kt&&Or(j,ot),je}function Xe(j,H,ee,Me){var je=oe(ee);if(typeof je!="function")throw Error(t(150));if(ee=je.call(ee),ee==null)throw Error(t(151));for(var et=je=null,tt=H,ot=H=0,sn=null,Tt=ee.next();tt!==null&&!Tt.done;ot++,Tt=ee.next()){tt.index>ot?(sn=tt,tt=null):sn=tt.sibling;var Sr=ge(j,tt,Tt.value,Me);if(Sr===null){tt===null&&(tt=sn);break}n&&tt&&Sr.alternate===null&&i(j,tt),H=m(Sr,H,ot),et===null?je=Sr:et.sibling=Sr,et=Sr,tt=sn}if(Tt.done)return o(j,tt),kt&&Or(j,ot),je;if(tt===null){for(;!Tt.done;ot++,Tt=ee.next())Tt=_e(j,Tt.value,Me),Tt!==null&&(H=m(Tt,H,ot),et===null?je=Tt:et.sibling=Tt,et=Tt);return kt&&Or(j,ot),je}for(tt=u(j,tt);!Tt.done;ot++,Tt=ee.next())Tt=Ne(tt,j,ot,Tt.value,Me),Tt!==null&&(n&&Tt.alternate!==null&&tt.delete(Tt.key===null?ot:Tt.key),H=m(Tt,H,ot),et===null?je=Tt:et.sibling=Tt,et=Tt);return n&&tt.forEach(function(Uv){return i(j,Uv)}),kt&&Or(j,ot),je}function Zt(j,H,ee,Me){if(typeof ee=="object"&&ee!==null&&ee.type===B&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case F:e:{for(var je=ee.key,et=H;et!==null;){if(et.key===je){if(je=ee.type,je===B){if(et.tag===7){o(j,et.sibling),H=d(et,ee.props.children),H.return=j,j=H;break e}}else if(et.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===ne&&Lh(je)===et.type){o(j,et.sibling),H=d(et,ee.props),H.ref=Eo(j,et,ee),H.return=j,j=H;break e}o(j,et);break}else i(j,et);et=et.sibling}ee.type===B?(H=Xr(ee.props.children,j.mode,Me,ee.key),H.return=j,j=H):(Me=ul(ee.type,ee.key,ee.props,null,j.mode,Me),Me.ref=Eo(j,H,ee),Me.return=j,j=Me)}return T(j);case I:e:{for(et=ee.key;H!==null;){if(H.key===et)if(H.tag===4&&H.stateNode.containerInfo===ee.containerInfo&&H.stateNode.implementation===ee.implementation){o(j,H.sibling),H=d(H,ee.children||[]),H.return=j,j=H;break e}else{o(j,H);break}else i(j,H);H=H.sibling}H=bc(ee,j.mode,Me),H.return=j,j=H}return T(j);case ne:return et=ee._init,Zt(j,H,et(ee._payload),Me)}if(gt(ee))return ze(j,H,ee,Me);if(oe(ee))return Xe(j,H,ee,Me);ka(j,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,H!==null&&H.tag===6?(o(j,H.sibling),H=d(H,ee),H.return=j,j=H):(o(j,H),H=Pc(ee,j.mode,Me),H.return=j,j=H),T(j)):o(j,H)}return Zt}var ys=Dh(!0),Nh=Dh(!1),za=ur(null),Va=null,Ms=null,ku=null;function zu(){ku=Ms=Va=null}function Vu(n){var i=za.current;Ot(za),n._currentValue=i}function Hu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Es(n,i){Va=n,ku=Ms=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Ln=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(ku!==n)if(n={context:n,memoizedValue:i,next:null},Ms===null){if(Va===null)throw Error(t(308));Ms=n,Va.dependencies={lanes:0,firstContext:n}}else Ms=Ms.next=n;return i}var Br=null;function Gu(n){Br===null?Br=[n]:Br.push(n)}function Ih(n,i,o,u){var d=i.interleaved;return d===null?(o.next=o,Gu(i)):(o.next=d.next,d.next=o),i.interleaved=o,ki(n,u)}function ki(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var dr=!1;function Wu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Uh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function zi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function hr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Mt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,ki(n,o)}return d=u.interleaved,d===null?(i.next=i,Gu(u)):(i.next=d.next,d.next=i),u.interleaved=i,ki(n,o)}function Ha(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,At(n,o)}}function Fh(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var T={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?d=m=T:m=m.next=T,o=o.next}while(o!==null);m===null?d=m=i:m=m.next=i}else d=m=i;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ga(n,i,o,u){var d=n.updateQueue;dr=!1;var m=d.firstBaseUpdate,T=d.lastBaseUpdate,N=d.shared.pending;if(N!==null){d.shared.pending=null;var k=N,re=k.next;k.next=null,T===null?m=re:T.next=re,T=k;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,N=ve.lastBaseUpdate,N!==T&&(N===null?ve.firstBaseUpdate=re:N.next=re,ve.lastBaseUpdate=k))}if(m!==null){var _e=d.baseState;T=0,ve=re=k=null,N=m;do{var ge=N.lane,Ne=N.eventTime;if((u&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ne,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var ze=n,Xe=N;switch(ge=i,Ne=o,Xe.tag){case 1:if(ze=Xe.payload,typeof ze=="function"){_e=ze.call(Ne,_e,ge);break e}_e=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Xe.payload,ge=typeof ze=="function"?ze.call(Ne,_e,ge):ze,ge==null)break e;_e=ue({},_e,ge);break e;case 2:dr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[N]:ge.push(N))}else Ne={eventTime:Ne,lane:ge,tag:N.tag,payload:N.payload,callback:N.callback,next:null},ve===null?(re=ve=Ne,k=_e):ve=ve.next=Ne,T|=ge;if(N=N.next,N===null){if(N=d.shared.pending,N===null)break;ge=N,N=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ve===null&&(k=_e),d.baseState=k,d.firstBaseUpdate=re,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do T|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Vr|=T,n.lanes=T,n.memoizedState=_e}}function Oh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=o,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var To={},vi=ur(To),wo=ur(To),Ao=ur(To);function kr(n){if(n===To)throw Error(t(174));return n}function Xu(n,i){switch(It(Ao,i),It(wo,n),It(vi,To),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}Ot(vi),It(vi,i)}function Ts(){Ot(vi),Ot(wo),Ot(Ao)}function Bh(n){kr(Ao.current);var i=kr(vi.current),o=me(i,n.type);i!==o&&(It(wo,n),It(vi,o))}function Yu(n){wo.current===n&&(Ot(vi),Ot(wo))}var zt=ur(0);function Wa(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var qu=[];function ju(){for(var n=0;n<qu.length;n++)qu[n]._workInProgressVersionPrimary=null;qu.length=0}var Xa=P.ReactCurrentDispatcher,Zu=P.ReactCurrentBatchConfig,zr=0,Vt=null,Jt=null,nn=null,Ya=!1,Co=!1,Ro=0,iv=0;function hn(){throw Error(t(321))}function Ku(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ri(n[o],i[o]))return!1;return!0}function $u(n,i,o,u,d,m){if(zr=m,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Xa.current=n===null||n.memoizedState===null?av:lv,n=o(u,d),Co){m=0;do{if(Co=!1,Ro=0,25<=m)throw Error(t(301));m+=1,nn=Jt=null,i.updateQueue=null,Xa.current=uv,n=o(u,d)}while(Co)}if(Xa.current=Za,i=Jt!==null&&Jt.next!==null,zr=0,nn=Jt=Vt=null,Ya=!1,i)throw Error(t(300));return n}function Ju(){var n=Ro!==0;return Ro=0,n}function _i(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return nn===null?Vt.memoizedState=nn=n:nn=nn.next=n,nn}function Kn(){if(Jt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Jt.next;var i=nn===null?Vt.memoizedState:nn.next;if(i!==null)nn=i,Jt=n;else{if(n===null)throw Error(t(310));Jt=n,n={memoizedState:Jt.memoizedState,baseState:Jt.baseState,baseQueue:Jt.baseQueue,queue:Jt.queue,next:null},nn===null?Vt.memoizedState=nn=n:nn=nn.next=n}return nn}function Po(n,i){return typeof i=="function"?i(n):i}function Qu(n){var i=Kn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=Jt,d=u.baseQueue,m=o.pending;if(m!==null){if(d!==null){var T=d.next;d.next=m.next,m.next=T}u.baseQueue=d=m,o.pending=null}if(d!==null){m=d.next,u=u.baseState;var N=T=null,k=null,re=m;do{var ve=re.lane;if((zr&ve)===ve)k!==null&&(k=k.next={lane:0,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null}),u=re.hasEagerState?re.eagerState:n(u,re.action);else{var _e={lane:ve,action:re.action,hasEagerState:re.hasEagerState,eagerState:re.eagerState,next:null};k===null?(N=k=_e,T=u):k=k.next=_e,Vt.lanes|=ve,Vr|=ve}re=re.next}while(re!==null&&re!==m);k===null?T=u:k.next=N,ri(u,i.memoizedState)||(Ln=!0),i.memoizedState=u,i.baseState=T,i.baseQueue=k,o.lastRenderedState=u}if(n=o.interleaved,n!==null){d=n;do m=d.lane,Vt.lanes|=m,Vr|=m,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function ec(n){var i=Kn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=i.memoizedState;if(d!==null){o.pending=null;var T=d=d.next;do m=n(m,T.action),T=T.next;while(T!==d);ri(m,i.memoizedState)||(Ln=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,u]}function kh(){}function zh(n,i){var o=Vt,u=Kn(),d=i(),m=!ri(u.memoizedState,d);if(m&&(u.memoizedState=d,Ln=!0),u=u.queue,tc(Gh.bind(null,o,u,n),[n]),u.getSnapshot!==i||m||nn!==null&&nn.memoizedState.tag&1){if(o.flags|=2048,bo(9,Hh.bind(null,o,u,d,i),void 0,null),rn===null)throw Error(t(349));(zr&30)!==0||Vh(o,i,d)}return d}function Vh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function Hh(n,i,o,u){i.value=o,i.getSnapshot=u,Wh(i)&&Xh(n)}function Gh(n,i,o){return o(function(){Wh(i)&&Xh(n)})}function Wh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ri(n,o)}catch{return!0}}function Xh(n){var i=ki(n,1);i!==null&&ui(i,n,1,-1)}function Yh(n){var i=_i();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},i.queue=n,n=n.dispatch=ov.bind(null,Vt,n),[i.memoizedState,n]}function bo(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function qh(){return Kn().memoizedState}function qa(n,i,o,u){var d=_i();Vt.flags|=n,d.memoizedState=bo(1|i,o,void 0,u===void 0?null:u)}function ja(n,i,o,u){var d=Kn();u=u===void 0?null:u;var m=void 0;if(Jt!==null){var T=Jt.memoizedState;if(m=T.destroy,u!==null&&Ku(u,T.deps)){d.memoizedState=bo(i,o,m,u);return}}Vt.flags|=n,d.memoizedState=bo(1|i,o,m,u)}function jh(n,i){return qa(8390656,8,n,i)}function tc(n,i){return ja(2048,8,n,i)}function Zh(n,i){return ja(4,2,n,i)}function Kh(n,i){return ja(4,4,n,i)}function $h(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Jh(n,i,o){return o=o!=null?o.concat([n]):null,ja(4,4,$h.bind(null,i,n),o)}function nc(){}function Qh(n,i){var o=Kn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Ku(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function ep(n,i){var o=Kn();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Ku(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function tp(n,i,o){return(zr&21)===0?(n.baseState&&(n.baseState=!1,Ln=!0),n.memoizedState=o):(ri(o,i)||(o=Cn(),Vt.lanes|=o,Vr|=o,n.baseState=!0),i)}function rv(n,i){var o=st;st=o!==0&&4>o?o:4,n(!0);var u=Zu.transition;Zu.transition={};try{n(!1),i()}finally{st=o,Zu.transition=u}}function np(){return Kn().memoizedState}function sv(n,i,o){var u=vr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},ip(n))rp(i,o);else if(o=Ih(n,i,o,u),o!==null){var d=En();ui(o,n,u,d),sp(o,i,u)}}function ov(n,i,o){var u=vr(n),d={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(ip(n))rp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,N=m(T,o);if(d.hasEagerState=!0,d.eagerState=N,ri(N,T)){var k=i.interleaved;k===null?(d.next=d,Gu(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}o=Ih(n,i,d,u),o!==null&&(d=En(),ui(o,n,u,d),sp(o,i,u))}}function ip(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function rp(n,i){Co=Ya=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function sp(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,At(n,o)}}var Za={readContext:Zn,useCallback:hn,useContext:hn,useEffect:hn,useImperativeHandle:hn,useInsertionEffect:hn,useLayoutEffect:hn,useMemo:hn,useReducer:hn,useRef:hn,useState:hn,useDebugValue:hn,useDeferredValue:hn,useTransition:hn,useMutableSource:hn,useSyncExternalStore:hn,useId:hn,unstable_isNewReconciler:!1},av={readContext:Zn,useCallback:function(n,i){return _i().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:jh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,qa(4194308,4,$h.bind(null,i,n),o)},useLayoutEffect:function(n,i){return qa(4194308,4,n,i)},useInsertionEffect:function(n,i){return qa(4,2,n,i)},useMemo:function(n,i){var o=_i();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=_i();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=sv.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=_i();return n={current:n},i.memoizedState=n},useState:Yh,useDebugValue:nc,useDeferredValue:function(n){return _i().memoizedState=n},useTransition:function(){var n=Yh(!1),i=n[0];return n=rv.bind(null,n[1]),_i().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=Vt,d=_i();if(kt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),rn===null)throw Error(t(349));(zr&30)!==0||Vh(u,i,o)}d.memoizedState=o;var m={value:o,getSnapshot:i};return d.queue=m,jh(Gh.bind(null,u,m,n),[n]),u.flags|=2048,bo(9,Hh.bind(null,u,m,o,i),void 0,null),o},useId:function(){var n=_i(),i=rn.identifierPrefix;if(kt){var o=Bi,u=Oi;o=(u&~(1<<32-Qe(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ro++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=iv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},lv={readContext:Zn,useCallback:Qh,useContext:Zn,useEffect:tc,useImperativeHandle:Jh,useInsertionEffect:Zh,useLayoutEffect:Kh,useMemo:ep,useReducer:Qu,useRef:qh,useState:function(){return Qu(Po)},useDebugValue:nc,useDeferredValue:function(n){var i=Kn();return tp(i,Jt.memoizedState,n)},useTransition:function(){var n=Qu(Po)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:kh,useSyncExternalStore:zh,useId:np,unstable_isNewReconciler:!1},uv={readContext:Zn,useCallback:Qh,useContext:Zn,useEffect:tc,useImperativeHandle:Jh,useInsertionEffect:Zh,useLayoutEffect:Kh,useMemo:ep,useReducer:ec,useRef:qh,useState:function(){return ec(Po)},useDebugValue:nc,useDeferredValue:function(n){var i=Kn();return Jt===null?i.memoizedState=n:tp(i,Jt.memoizedState,n)},useTransition:function(){var n=ec(Po)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:kh,useSyncExternalStore:zh,useId:np,unstable_isNewReconciler:!1};function oi(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function ic(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:ue({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Ka={isMounted:function(n){return(n=n._reactInternals)?mi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=En(),d=vr(n),m=zi(u,d);m.payload=i,o!=null&&(m.callback=o),i=hr(n,m,d),i!==null&&(ui(i,n,d,u),Ha(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=En(),d=vr(n),m=zi(u,d);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=hr(n,m,d),i!==null&&(ui(i,n,d,u),Ha(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=En(),u=vr(n),d=zi(o,u);d.tag=2,i!=null&&(d.callback=i),i=hr(n,d,u),i!==null&&(ui(i,n,u,o),Ha(i,n,u))}};function op(n,i,o,u,d,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,T):i.prototype&&i.prototype.isPureReactComponent?!go(o,u)||!go(d,m):!0}function ap(n,i,o){var u=!1,d=cr,m=i.contextType;return typeof m=="object"&&m!==null?m=Zn(m):(d=bn(i)?Ur:dn.current,u=i.contextTypes,m=(u=u!=null)?vs(n,d):cr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ka,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function lp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&Ka.enqueueReplaceState(i,i.state,null)}function rc(n,i,o,u){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},Wu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Zn(m):(m=bn(i)?Ur:dn.current,d.context=vs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ic(n,i,m,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ka.enqueueReplaceState(d,d.state,null),Ga(n,o,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ws(n,i){try{var o="",u=i;do o+=Ke(u),u=u.return;while(u);var d=o}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function sc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function oc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var cv=typeof WeakMap=="function"?WeakMap:Map;function up(n,i,o){o=zi(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){il||(il=!0,yc=u),oc(n,i)},o}function cp(n,i,o){o=zi(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;o.payload=function(){return u(d)},o.callback=function(){oc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){oc(n,i),typeof u!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),o}function fp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new cv;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(o)||(d.add(o),n=Tv.bind(null,n,i,o),i.then(n,n))}function dp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function hp(n,i,o,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=zi(-1,1),i.tag=2,hr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var fv=P.ReactCurrentOwner,Ln=!1;function Mn(n,i,o,u){i.child=n===null?Nh(i,null,o,u):ys(i,n.child,o,u)}function pp(n,i,o,u,d){o=o.render;var m=i.ref;return Es(i,d),u=$u(n,i,o,u,m,d),o=Ju(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Vi(n,i,d)):(kt&&o&&Iu(i),i.flags|=1,Mn(n,i,u,d),i.child)}function mp(n,i,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Rc(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,gp(n,i,m,u,d)):(n=ul(o.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var T=m.memoizedProps;if(o=o.compare,o=o!==null?o:go,o(T,u)&&n.ref===i.ref)return Vi(n,i,d)}return i.flags|=1,n=xr(m,u),n.ref=i.ref,n.return=i,i.child=n}function gp(n,i,o,u,d){if(n!==null){var m=n.memoizedProps;if(go(m,u)&&n.ref===i.ref)if(Ln=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Ln=!0);else return i.lanes=n.lanes,Vi(n,i,d)}return ac(n,i,o,u,d)}function vp(n,i,o){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Cs,zn),zn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Cs,zn),zn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:o,It(Cs,zn),zn|=u}else m!==null?(u=m.baseLanes|o,i.memoizedState=null):u=o,It(Cs,zn),zn|=u;return Mn(n,i,d,o),i.child}function _p(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function ac(n,i,o,u,d){var m=bn(o)?Ur:dn.current;return m=vs(i,m),Es(i,d),o=$u(n,i,o,u,m,d),u=Ju(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Vi(n,i,d)):(kt&&u&&Iu(i),i.flags|=1,Mn(n,i,o,d),i.child)}function xp(n,i,o,u,d){if(bn(o)){var m=!0;Ia(i)}else m=!1;if(Es(i,d),i.stateNode===null)Ja(n,i),ap(i,o,u),rc(i,o,u,d),u=!0;else if(n===null){var T=i.stateNode,N=i.memoizedProps;T.props=N;var k=T.context,re=o.contextType;typeof re=="object"&&re!==null?re=Zn(re):(re=bn(o)?Ur:dn.current,re=vs(i,re));var ve=o.getDerivedStateFromProps,_e=typeof ve=="function"||typeof T.getSnapshotBeforeUpdate=="function";_e||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==u||k!==re)&&lp(i,T,u,re),dr=!1;var ge=i.memoizedState;T.state=ge,Ga(i,u,T,d),k=i.memoizedState,N!==u||ge!==k||Pn.current||dr?(typeof ve=="function"&&(ic(i,o,ve,u),k=i.memoizedState),(N=dr||op(i,o,N,u,ge,k,re))?(_e||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),T.props=u,T.state=k,T.context=re,u=N):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{T=i.stateNode,Uh(n,i),N=i.memoizedProps,re=i.type===i.elementType?N:oi(i.type,N),T.props=re,_e=i.pendingProps,ge=T.context,k=o.contextType,typeof k=="object"&&k!==null?k=Zn(k):(k=bn(o)?Ur:dn.current,k=vs(i,k));var Ne=o.getDerivedStateFromProps;(ve=typeof Ne=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==_e||ge!==k)&&lp(i,T,u,k),dr=!1,ge=i.memoizedState,T.state=ge,Ga(i,u,T,d);var ze=i.memoizedState;N!==_e||ge!==ze||Pn.current||dr?(typeof Ne=="function"&&(ic(i,o,Ne,u),ze=i.memoizedState),(re=dr||op(i,o,re,u,ge,ze,k)||!1)?(ve||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(u,ze,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(u,ze,k)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ze),T.props=u,T.state=ze,T.context=k,u=re):(typeof T.componentDidUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return lc(n,i,o,u,m,d)}function lc(n,i,o,u,d,m){_p(n,i);var T=(i.flags&128)!==0;if(!u&&!T)return d&&Th(i,o,!1),Vi(n,i,m);u=i.stateNode,fv.current=i;var N=T&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&T?(i.child=ys(i,n.child,null,m),i.child=ys(i,null,N,m)):Mn(n,i,N,m),i.memoizedState=u.state,d&&Th(i,o,!0),i.child}function Sp(n){var i=n.stateNode;i.pendingContext?Mh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Mh(n,i.context,!1),Xu(n,i.containerInfo)}function yp(n,i,o,u,d){return Ss(),Bu(d),i.flags|=256,Mn(n,i,o,u),i.child}var uc={dehydrated:null,treeContext:null,retryLane:0};function cc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Mp(n,i,o){var u=i.pendingProps,d=zt.current,m=!1,T=(i.flags&128)!==0,N;if((N=T)||(N=n!==null&&n.memoizedState===null?!1:(d&2)!==0),N?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),It(zt,d&1),n===null)return Ou(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(T=u.children,n=u.fallback,m?(u=i.mode,m=i.child,T={mode:"hidden",children:T},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=T):m=cl(T,u,0,null),n=Xr(n,u,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=cc(o),i.memoizedState=uc,n):fc(i,T));if(d=n.memoizedState,d!==null&&(N=d.dehydrated,N!==null))return dv(n,i,T,u,N,d,o);if(m){m=u.fallback,T=i.mode,d=n.child,N=d.sibling;var k={mode:"hidden",children:u.children};return(T&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=xr(d,k),u.subtreeFlags=d.subtreeFlags&14680064),N!==null?m=xr(N,m):(m=Xr(m,T,o,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,T=n.child.memoizedState,T=T===null?cc(o):{baseLanes:T.baseLanes|o,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~o,i.memoizedState=uc,u}return m=n.child,n=m.sibling,u=xr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function fc(n,i){return i=cl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function $a(n,i,o,u){return u!==null&&Bu(u),ys(i,n.child,null,o),n=fc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function dv(n,i,o,u,d,m,T){if(o)return i.flags&256?(i.flags&=-257,u=sc(Error(t(422))),$a(n,i,T,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=cl({mode:"visible",children:u.children},d,0,null),m=Xr(m,d,T,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&ys(i,n.child,null,T),i.child.memoizedState=cc(T),i.memoizedState=uc,m);if((i.mode&1)===0)return $a(n,i,T,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var N=u.dgst;return u=N,m=Error(t(419)),u=sc(m,u,void 0),$a(n,i,T,u)}if(N=(T&n.childLanes)!==0,Ln||N){if(u=rn,u!==null){switch(T&-T){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|T))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,ki(n,d),ui(u,n,d,-1))}return Cc(),u=sc(Error(t(421))),$a(n,i,T,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=wv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,kn=lr(d.nextSibling),Bn=i,kt=!0,si=null,n!==null&&(qn[jn++]=Oi,qn[jn++]=Bi,qn[jn++]=Fr,Oi=n.id,Bi=n.overflow,Fr=i),i=fc(i,u.children),i.flags|=4096,i)}function Ep(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Hu(n.return,i,o)}function dc(n,i,o,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=d)}function Tp(n,i,o){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Mn(n,i,u.children,o),u=zt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ep(n,o,i);else if(n.tag===19)Ep(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(It(zt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&Wa(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),dc(i,!1,d,o,m);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Wa(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}dc(i,!0,o,null,m);break;case"together":dc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ja(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Vi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Vr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=xr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=xr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function hv(n,i,o){switch(i.tag){case 3:Sp(i),Ss();break;case 5:Bh(i);break;case 1:bn(i.type)&&Ia(i);break;case 4:Xu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;It(za,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(zt,zt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Mp(n,i,o):(It(zt,zt.current&1),n=Vi(n,i,o),n!==null?n.sibling:null);It(zt,zt.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Tp(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),It(zt,zt.current),u)break;return null;case 22:case 23:return i.lanes=0,vp(n,i,o)}return Vi(n,i,o)}var wp,hc,Ap,Cp;wp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},hc=function(){},Ap=function(n,i,o,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,kr(vi.current);var m=null;switch(o){case"input":d=xt(n,d),u=xt(n,u),m=[];break;case"select":d=ue({},d,{value:void 0}),u=ue({},u,{value:void 0}),m=[];break;case"textarea":d=He(n,d),u=He(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=La)}Be(o,u);var T;o=null;for(re in d)if(!u.hasOwnProperty(re)&&d.hasOwnProperty(re)&&d[re]!=null)if(re==="style"){var N=d[re];for(T in N)N.hasOwnProperty(T)&&(o||(o={}),o[T]="")}else re!=="dangerouslySetInnerHTML"&&re!=="children"&&re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&re!=="autoFocus"&&(a.hasOwnProperty(re)?m||(m=[]):(m=m||[]).push(re,null));for(re in u){var k=u[re];if(N=d!=null?d[re]:void 0,u.hasOwnProperty(re)&&k!==N&&(k!=null||N!=null))if(re==="style")if(N){for(T in N)!N.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(o||(o={}),o[T]="");for(T in k)k.hasOwnProperty(T)&&N[T]!==k[T]&&(o||(o={}),o[T]=k[T])}else o||(m||(m=[]),m.push(re,o)),o=k;else re==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,N=N?N.__html:void 0,k!=null&&N!==k&&(m=m||[]).push(re,k)):re==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(re,""+k):re!=="suppressContentEditableWarning"&&re!=="suppressHydrationWarning"&&(a.hasOwnProperty(re)?(k!=null&&re==="onScroll"&&Ft("scroll",n),m||N===k||(m=[])):(m=m||[]).push(re,k))}o&&(m=m||[]).push("style",o);var re=m;(i.updateQueue=re)&&(i.flags|=4)}},Cp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Lo(n,i){if(!kt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function pn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function pv(n,i,o){var u=i.pendingProps;switch(Uu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pn(i),null;case 1:return bn(i.type)&&Na(),pn(i),null;case 3:return u=i.stateNode,Ts(),Ot(Pn),Ot(dn),ju(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ba(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,si!==null&&(Tc(si),si=null))),hc(n,i),pn(i),null;case 5:Yu(i);var d=kr(Ao.current);if(o=i.type,n!==null&&i.stateNode!=null)Ap(n,i,o,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return pn(i),null}if(n=kr(vi.current),Ba(i)){u=i.stateNode,o=i.type;var m=i.memoizedProps;switch(u[gi]=i,u[yo]=m,n=(i.mode&1)!==0,o){case"dialog":Ft("cancel",u),Ft("close",u);break;case"iframe":case"object":case"embed":Ft("load",u);break;case"video":case"audio":for(d=0;d<_o.length;d++)Ft(_o[d],u);break;case"source":Ft("error",u);break;case"img":case"image":case"link":Ft("error",u),Ft("load",u);break;case"details":Ft("toggle",u);break;case"input":Rt(u,m),Ft("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ft("invalid",u);break;case"textarea":D(u,m),Ft("invalid",u)}Be(o,m),d=null;for(var T in m)if(m.hasOwnProperty(T)){var N=m[T];T==="children"?typeof N=="string"?u.textContent!==N&&(m.suppressHydrationWarning!==!0&&ba(u.textContent,N,n),d=["children",N]):typeof N=="number"&&u.textContent!==""+N&&(m.suppressHydrationWarning!==!0&&ba(u.textContent,N,n),d=["children",""+N]):a.hasOwnProperty(T)&&N!=null&&T==="onScroll"&&Ft("scroll",u)}switch(o){case"input":nt(u),z(u,m,!0);break;case"textarea":nt(u),G(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=La)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{T=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=T.createElement(o,{is:u.is}):(n=T.createElement(o),o==="select"&&(T=n,u.multiple?T.multiple=!0:u.size&&(T.size=u.size))):n=T.createElementNS(n,o),n[gi]=i,n[yo]=u,wp(n,i,!1,!1),i.stateNode=n;e:{switch(T=be(o,u),o){case"dialog":Ft("cancel",n),Ft("close",n),d=u;break;case"iframe":case"object":case"embed":Ft("load",n),d=u;break;case"video":case"audio":for(d=0;d<_o.length;d++)Ft(_o[d],n);d=u;break;case"source":Ft("error",n),d=u;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),d=u;break;case"details":Ft("toggle",n),d=u;break;case"input":Rt(n,u),d=xt(n,u),Ft("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=ue({},u,{value:void 0}),Ft("invalid",n);break;case"textarea":D(n,u),d=He(n,u),Ft("invalid",n);break;default:d=u}Be(o,d),N=d;for(m in N)if(N.hasOwnProperty(m)){var k=N[m];m==="style"?Ee(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Oe(n,k)):m==="children"?typeof k=="string"?(o!=="textarea"||k!=="")&&Te(n,k):typeof k=="number"&&Te(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Ft("scroll",n):k!=null&&b(n,m,k,T))}switch(o){case"input":nt(n),z(n,u,!1);break;case"textarea":nt(n),G(n);break;case"option":u.value!=null&&n.setAttribute("value",""+he(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?St(n,!!u.multiple,m,!1):u.defaultValue!=null&&St(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=La)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return pn(i),null;case 6:if(n&&i.stateNode!=null)Cp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=kr(Ao.current),kr(vi.current),Ba(i)){if(u=i.stateNode,o=i.memoizedProps,u[gi]=i,(m=u.nodeValue!==o)&&(n=Bn,n!==null))switch(n.tag){case 3:ba(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ba(u.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[gi]=i,i.stateNode=u}return pn(i),null;case 13:if(Ot(zt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&kn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)bh(),Ss(),i.flags|=98560,m=!1;else if(m=Ba(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[gi]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;pn(i),m=!1}else si!==null&&(Tc(si),si=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(zt.current&1)!==0?Qt===0&&(Qt=3):Cc())),i.updateQueue!==null&&(i.flags|=4),pn(i),null);case 4:return Ts(),hc(n,i),n===null&&xo(i.stateNode.containerInfo),pn(i),null;case 10:return Vu(i.type._context),pn(i),null;case 17:return bn(i.type)&&Na(),pn(i),null;case 19:if(Ot(zt),m=i.memoizedState,m===null)return pn(i),null;if(u=(i.flags&128)!==0,T=m.rendering,T===null)if(u)Lo(m,!1);else{if(Qt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(T=Wa(n),T!==null){for(i.flags|=128,Lo(m,!1),u=T.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)m=o,n=u,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return It(zt,zt.current&1|2),i.child}n=n.sibling}m.tail!==null&&A()>Rs&&(i.flags|=128,u=!0,Lo(m,!1),i.lanes=4194304)}else{if(!u)if(n=Wa(T),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Lo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!kt)return pn(i),null}else 2*A()-m.renderingStartTime>Rs&&o!==1073741824&&(i.flags|=128,u=!0,Lo(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(o=m.last,o!==null?o.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=A(),i.sibling=null,o=zt.current,It(zt,u?o&1|2:o&1),i):(pn(i),null);case 22:case 23:return Ac(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(zn&1073741824)!==0&&(pn(i),i.subtreeFlags&6&&(i.flags|=8192)):pn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function mv(n,i){switch(Uu(i),i.tag){case 1:return bn(i.type)&&Na(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ts(),Ot(Pn),Ot(dn),ju(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Yu(i),null;case 13:if(Ot(zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ss()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(zt),null;case 4:return Ts(),null;case 10:return Vu(i.type._context),null;case 22:case 23:return Ac(),null;case 24:return null;default:return null}}var Qa=!1,mn=!1,gv=typeof WeakSet=="function"?WeakSet:Set,Fe=null;function As(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){Wt(n,i,u)}else o.current=null}function pc(n,i,o){try{o()}catch(u){Wt(n,i,u)}}var Rp=!1;function vv(n,i){if(Au=xa,n=oh(),_u(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var T=0,N=-1,k=-1,re=0,ve=0,_e=n,ge=null;t:for(;;){for(var Ne;_e!==o||d!==0&&_e.nodeType!==3||(N=T+d),_e!==m||u!==0&&_e.nodeType!==3||(k=T+u),_e.nodeType===3&&(T+=_e.nodeValue.length),(Ne=_e.firstChild)!==null;)ge=_e,_e=Ne;for(;;){if(_e===n)break t;if(ge===o&&++re===d&&(N=T),ge===m&&++ve===u&&(k=T),(Ne=_e.nextSibling)!==null)break;_e=ge,ge=_e.parentNode}_e=Ne}o=N===-1||k===-1?null:{start:N,end:k}}else o=null}o=o||{start:0,end:0}}else o=null;for(Cu={focusedElem:n,selectionRange:o},xa=!1,Fe=i;Fe!==null;)if(i=Fe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Fe=n;else for(;Fe!==null;){i=Fe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Xe=ze.memoizedProps,Zt=ze.memoizedState,j=i.stateNode,H=j.getSnapshotBeforeUpdate(i.elementType===i.type?Xe:oi(i.type,Xe),Zt);j.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){Wt(i,i.return,Me)}if(n=i.sibling,n!==null){n.return=i.return,Fe=n;break}Fe=i.return}return ze=Rp,Rp=!1,ze}function Do(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&pc(i,o,m)}d=d.next}while(d!==u)}}function el(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function mc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function Pp(n){var i=n.alternate;i!==null&&(n.alternate=null,Pp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[gi],delete i[yo],delete i[Lu],delete i[Q0],delete i[ev])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function bp(n){return n.tag===5||n.tag===3||n.tag===4}function Lp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function gc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=La));else if(u!==4&&(n=n.child,n!==null))for(gc(n,i,o),n=n.sibling;n!==null;)gc(n,i,o),n=n.sibling}function vc(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(vc(n,i,o),n=n.sibling;n!==null;)vc(n,i,o),n=n.sibling}var un=null,ai=!1;function pr(n,i,o){for(o=o.child;o!==null;)Dp(n,i,o),o=o.sibling}function Dp(n,i,o){if(De&&typeof De.onCommitFiberUnmount=="function")try{De.onCommitFiberUnmount(Ce,o)}catch{}switch(o.tag){case 5:mn||As(o,i);case 6:var u=un,d=ai;un=null,pr(n,i,o),un=u,ai=d,un!==null&&(ai?(n=un,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):un.removeChild(o.stateNode));break;case 18:un!==null&&(ai?(n=un,o=o.stateNode,n.nodeType===8?bu(n.parentNode,o):n.nodeType===1&&bu(n,o),uo(n)):bu(un,o.stateNode));break;case 4:u=un,d=ai,un=o.stateNode.containerInfo,ai=!0,pr(n,i,o),un=u,ai=d;break;case 0:case 11:case 14:case 15:if(!mn&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,T=m.destroy;m=m.tag,T!==void 0&&((m&2)!==0||(m&4)!==0)&&pc(o,i,T),d=d.next}while(d!==u)}pr(n,i,o);break;case 1:if(!mn&&(As(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(N){Wt(o,i,N)}pr(n,i,o);break;case 21:pr(n,i,o);break;case 22:o.mode&1?(mn=(u=mn)||o.memoizedState!==null,pr(n,i,o),mn=u):pr(n,i,o);break;default:pr(n,i,o)}}function Np(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new gv),i.forEach(function(u){var d=Av.bind(null,n,u);o.has(u)||(o.add(u),u.then(d,d))})}}function li(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u];try{var m=n,T=i,N=T;e:for(;N!==null;){switch(N.tag){case 5:un=N.stateNode,ai=!1;break e;case 3:un=N.stateNode.containerInfo,ai=!0;break e;case 4:un=N.stateNode.containerInfo,ai=!0;break e}N=N.return}if(un===null)throw Error(t(160));Dp(m,T,d),un=null,ai=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(re){Wt(d,i,re)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Ip(i,n),i=i.sibling}function Ip(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(li(i,n),xi(n),u&4){try{Do(3,n,n.return),el(3,n)}catch(Xe){Wt(n,n.return,Xe)}try{Do(5,n,n.return)}catch(Xe){Wt(n,n.return,Xe)}}break;case 1:li(i,n),xi(n),u&512&&o!==null&&As(o,o.return);break;case 5:if(li(i,n),xi(n),u&512&&o!==null&&As(o,o.return),n.flags&32){var d=n.stateNode;try{Te(d,"")}catch(Xe){Wt(n,n.return,Xe)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,T=o!==null?o.memoizedProps:m,N=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{N==="input"&&m.type==="radio"&&m.name!=null&&ut(d,m),be(N,T);var re=be(N,m);for(T=0;T<k.length;T+=2){var ve=k[T],_e=k[T+1];ve==="style"?Ee(d,_e):ve==="dangerouslySetInnerHTML"?Oe(d,_e):ve==="children"?Te(d,_e):b(d,ve,_e,re)}switch(N){case"input":Ut(d,m);break;case"textarea":E(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ne=m.value;Ne!=null?St(d,!!m.multiple,Ne,!1):ge!==!!m.multiple&&(m.defaultValue!=null?St(d,!!m.multiple,m.defaultValue,!0):St(d,!!m.multiple,m.multiple?[]:"",!1))}d[yo]=m}catch(Xe){Wt(n,n.return,Xe)}}break;case 6:if(li(i,n),xi(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Xe){Wt(n,n.return,Xe)}}break;case 3:if(li(i,n),xi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{uo(i.containerInfo)}catch(Xe){Wt(n,n.return,Xe)}break;case 4:li(i,n),xi(n);break;case 13:li(i,n),xi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Sc=A())),u&4&&Np(n);break;case 22:if(ve=o!==null&&o.memoizedState!==null,n.mode&1?(mn=(re=mn)||ve,li(i,n),mn=re):li(i,n),xi(n),u&8192){if(re=n.memoizedState!==null,(n.stateNode.isHidden=re)&&!ve&&(n.mode&1)!==0)for(Fe=n,ve=n.child;ve!==null;){for(_e=Fe=ve;Fe!==null;){switch(ge=Fe,Ne=ge.child,ge.tag){case 0:case 11:case 14:case 15:Do(4,ge,ge.return);break;case 1:As(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){u=ge,o=ge.return;try{i=u,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Xe){Wt(u,o,Xe)}}break;case 5:As(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Op(_e);continue}}Ne!==null?(Ne.return=ge,Fe=Ne):Op(_e)}ve=ve.sibling}e:for(ve=null,_e=n;;){if(_e.tag===5){if(ve===null){ve=_e;try{d=_e.stateNode,re?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(N=_e.stateNode,k=_e.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,N.style.display=xe("display",T))}catch(Xe){Wt(n,n.return,Xe)}}}else if(_e.tag===6){if(ve===null)try{_e.stateNode.nodeValue=re?"":_e.memoizedProps}catch(Xe){Wt(n,n.return,Xe)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===n)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===n)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===n)break e;ve===_e&&(ve=null),_e=_e.return}ve===_e&&(ve=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:li(i,n),xi(n),u&4&&Np(n);break;case 21:break;default:li(i,n),xi(n)}}function xi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(bp(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Te(d,""),u.flags&=-33);var m=Lp(n);vc(n,m,d);break;case 3:case 4:var T=u.stateNode.containerInfo,N=Lp(n);gc(n,N,T);break;default:throw Error(t(161))}}catch(k){Wt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function _v(n,i,o){Fe=n,Up(n)}function Up(n,i,o){for(var u=(n.mode&1)!==0;Fe!==null;){var d=Fe,m=d.child;if(d.tag===22&&u){var T=d.memoizedState!==null||Qa;if(!T){var N=d.alternate,k=N!==null&&N.memoizedState!==null||mn;N=Qa;var re=mn;if(Qa=T,(mn=k)&&!re)for(Fe=d;Fe!==null;)T=Fe,k=T.child,T.tag===22&&T.memoizedState!==null?Bp(d):k!==null?(k.return=T,Fe=k):Bp(d);for(;m!==null;)Fe=m,Up(m),m=m.sibling;Fe=d,Qa=N,mn=re}Fp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Fe=m):Fp(n)}}function Fp(n){for(;Fe!==null;){var i=Fe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:mn||el(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!mn)if(o===null)u.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:oi(i.type,o.memoizedProps);u.componentDidUpdate(d,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Oh(i,m,u);break;case 3:var T=i.updateQueue;if(T!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}Oh(i,T,o)}break;case 5:var N=i.stateNode;if(o===null&&i.flags&4){o=N;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&o.focus();break;case"img":k.src&&(o.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var re=i.alternate;if(re!==null){var ve=re.memoizedState;if(ve!==null){var _e=ve.dehydrated;_e!==null&&uo(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}mn||i.flags&512&&mc(i)}catch(ge){Wt(i,i.return,ge)}}if(i===n){Fe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Op(n){for(;Fe!==null;){var i=Fe;if(i===n){Fe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Fe=o;break}Fe=i.return}}function Bp(n){for(;Fe!==null;){var i=Fe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{el(4,i)}catch(k){Wt(i,o,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){Wt(i,d,k)}}var m=i.return;try{mc(i)}catch(k){Wt(i,m,k)}break;case 5:var T=i.return;try{mc(i)}catch(k){Wt(i,T,k)}}}catch(k){Wt(i,i.return,k)}if(i===n){Fe=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Fe=N;break}Fe=i.return}}var xv=Math.ceil,tl=P.ReactCurrentDispatcher,_c=P.ReactCurrentOwner,$n=P.ReactCurrentBatchConfig,Mt=0,rn=null,Kt=null,cn=0,zn=0,Cs=ur(0),Qt=0,No=null,Vr=0,nl=0,xc=0,Io=null,Dn=null,Sc=0,Rs=1/0,Hi=null,il=!1,yc=null,mr=null,rl=!1,gr=null,sl=0,Uo=0,Mc=null,ol=-1,al=0;function En(){return(Mt&6)!==0?A():ol!==-1?ol:ol=A()}function vr(n){return(n.mode&1)===0?1:(Mt&2)!==0&&cn!==0?cn&-cn:nv.transition!==null?(al===0&&(al=Cn()),al):(n=st,n!==0||(n=window.event,n=n===void 0?16:zd(n.type)),n)}function ui(n,i,o,u){if(50<Uo)throw Uo=0,Mc=null,Error(t(185));Fn(n,o,u),((Mt&2)===0||n!==rn)&&(n===rn&&((Mt&2)===0&&(nl|=o),Qt===4&&_r(n,cn)),Nn(n,u),o===1&&Mt===0&&(i.mode&1)===0&&(Rs=A()+500,Ua&&fr()))}function Nn(n,i){var o=n.callbackNode;yn(n,i);var u=qt(n,n===rn?cn:0);if(u===0)o!==null&&ga(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&ga(o),i===1)n.tag===0?tv(zp.bind(null,n)):wh(zp.bind(null,n)),$0(function(){(Mt&6)===0&&fr()}),o=null;else{switch(ii(u)){case 1:o=se;break;case 4:o=te;break;case 16:o=$;break;case 536870912:o=Ie;break;default:o=$}o=jp(o,kp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function kp(n,i){if(ol=-1,al=0,(Mt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ps()&&n.callbackNode!==o)return null;var u=qt(n,n===rn?cn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ll(n,u);else{i=u;var d=Mt;Mt|=2;var m=Hp();(rn!==n||cn!==i)&&(Hi=null,Rs=A()+500,Gr(n,i));do try{Mv();break}catch(N){Vp(n,N)}while(!0);zu(),tl.current=m,Mt=d,Kt!==null?i=0:(rn=null,cn=0,i=Qt)}if(i!==0){if(i===2&&(d=vt(n),d!==0&&(u=d,i=Ec(n,d))),i===1)throw o=No,Gr(n,0),_r(n,u),Nn(n,A()),o;if(i===6)_r(n,u);else{if(d=n.current.alternate,(u&30)===0&&!Sv(d)&&(i=ll(n,u),i===2&&(m=vt(n),m!==0&&(u=m,i=Ec(n,m))),i===1))throw o=No,Gr(n,0),_r(n,u),Nn(n,A()),o;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Wr(n,Dn,Hi);break;case 3:if(_r(n,u),(u&130023424)===u&&(i=Sc+500-A(),10<i)){if(qt(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){En(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Pu(Wr.bind(null,n,Dn,Hi),i);break}Wr(n,Dn,Hi);break;case 4:if(_r(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var T=31-Qe(u);m=1<<T,T=i[T],T>d&&(d=T),u&=~m}if(u=d,u=A()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*xv(u/1960))-u,10<u){n.timeoutHandle=Pu(Wr.bind(null,n,Dn,Hi),u);break}Wr(n,Dn,Hi);break;case 5:Wr(n,Dn,Hi);break;default:throw Error(t(329))}}}return Nn(n,A()),n.callbackNode===o?kp.bind(null,n):null}function Ec(n,i){var o=Io;return n.current.memoizedState.isDehydrated&&(Gr(n,i).flags|=256),n=ll(n,i),n!==2&&(i=Dn,Dn=o,i!==null&&Tc(i)),n}function Tc(n){Dn===null?Dn=n:Dn.push.apply(Dn,n)}function Sv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!ri(m(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _r(n,i){for(i&=~xc,i&=~nl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-Qe(i),u=1<<o;n[o]=-1,i&=~u}}function zp(n){if((Mt&6)!==0)throw Error(t(327));Ps();var i=qt(n,0);if((i&1)===0)return Nn(n,A()),null;var o=ll(n,i);if(n.tag!==0&&o===2){var u=vt(n);u!==0&&(i=u,o=Ec(n,u))}if(o===1)throw o=No,Gr(n,0),_r(n,i),Nn(n,A()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Wr(n,Dn,Hi),Nn(n,A()),null}function wc(n,i){var o=Mt;Mt|=1;try{return n(i)}finally{Mt=o,Mt===0&&(Rs=A()+500,Ua&&fr())}}function Hr(n){gr!==null&&gr.tag===0&&(Mt&6)===0&&Ps();var i=Mt;Mt|=1;var o=$n.transition,u=st;try{if($n.transition=null,st=1,n)return n()}finally{st=u,$n.transition=o,Mt=i,(Mt&6)===0&&fr()}}function Ac(){zn=Cs.current,Ot(Cs)}function Gr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,K0(o)),Kt!==null)for(o=Kt.return;o!==null;){var u=o;switch(Uu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Na();break;case 3:Ts(),Ot(Pn),Ot(dn),ju();break;case 5:Yu(u);break;case 4:Ts();break;case 13:Ot(zt);break;case 19:Ot(zt);break;case 10:Vu(u.type._context);break;case 22:case 23:Ac()}o=o.return}if(rn=n,Kt=n=xr(n.current,null),cn=zn=i,Qt=0,No=null,xc=nl=Vr=0,Dn=Io=null,Br!==null){for(i=0;i<Br.length;i++)if(o=Br[i],u=o.interleaved,u!==null){o.interleaved=null;var d=u.next,m=o.pending;if(m!==null){var T=m.next;m.next=d,u.next=T}o.pending=u}Br=null}return n}function Vp(n,i){do{var o=Kt;try{if(zu(),Xa.current=Za,Ya){for(var u=Vt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Ya=!1}if(zr=0,nn=Jt=Vt=null,Co=!1,Ro=0,_c.current=null,o===null||o.return===null){Qt=1,No=i,Kt=null;break}e:{var m=n,T=o.return,N=o,k=i;if(i=cn,N.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var re=k,ve=N,_e=ve.tag;if((ve.mode&1)===0&&(_e===0||_e===11||_e===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ne=dp(T);if(Ne!==null){Ne.flags&=-257,hp(Ne,T,N,m,i),Ne.mode&1&&fp(m,re,i),i=Ne,k=re;var ze=i.updateQueue;if(ze===null){var Xe=new Set;Xe.add(k),i.updateQueue=Xe}else ze.add(k);break e}else{if((i&1)===0){fp(m,re,i),Cc();break e}k=Error(t(426))}}else if(kt&&N.mode&1){var Zt=dp(T);if(Zt!==null){(Zt.flags&65536)===0&&(Zt.flags|=256),hp(Zt,T,N,m,i),Bu(ws(k,N));break e}}m=k=ws(k,N),Qt!==4&&(Qt=2),Io===null?Io=[m]:Io.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var j=up(m,k,i);Fh(m,j);break e;case 1:N=k;var H=m.type,ee=m.stateNode;if((m.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(mr===null||!mr.has(ee)))){m.flags|=65536,i&=-i,m.lanes|=i;var Me=cp(m,N,i);Fh(m,Me);break e}}m=m.return}while(m!==null)}Wp(o)}catch(je){i=je,Kt===o&&o!==null&&(Kt=o=o.return);continue}break}while(!0)}function Hp(){var n=tl.current;return tl.current=Za,n===null?Za:n}function Cc(){(Qt===0||Qt===3||Qt===2)&&(Qt=4),rn===null||(Vr&268435455)===0&&(nl&268435455)===0||_r(rn,cn)}function ll(n,i){var o=Mt;Mt|=2;var u=Hp();(rn!==n||cn!==i)&&(Hi=null,Gr(n,i));do try{yv();break}catch(d){Vp(n,d)}while(!0);if(zu(),Mt=o,tl.current=u,Kt!==null)throw Error(t(261));return rn=null,cn=0,Qt}function yv(){for(;Kt!==null;)Gp(Kt)}function Mv(){for(;Kt!==null&&!ru();)Gp(Kt)}function Gp(n){var i=qp(n.alternate,n,zn);n.memoizedProps=n.pendingProps,i===null?Wp(n):Kt=i,_c.current=null}function Wp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=pv(o,i,zn),o!==null){Kt=o;return}}else{if(o=mv(o,i),o!==null){o.flags&=32767,Kt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Qt=6,Kt=null;return}}if(i=i.sibling,i!==null){Kt=i;return}Kt=i=n}while(i!==null);Qt===0&&(Qt=5)}function Wr(n,i,o){var u=st,d=$n.transition;try{$n.transition=null,st=1,Ev(n,i,o,u)}finally{$n.transition=d,st=u}return null}function Ev(n,i,o,u){do Ps();while(gr!==null);if((Mt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(tr(n,m),n===rn&&(Kt=rn=null,cn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||rl||(rl=!0,jp($,function(){return Ps(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=$n.transition,$n.transition=null;var T=st;st=1;var N=Mt;Mt|=4,_c.current=null,vv(n,o),Ip(o,n),G0(Cu),xa=!!Au,Cu=Au=null,n.current=o,_v(o),su(),Mt=N,st=T,$n.transition=m}else n.current=o;if(rl&&(rl=!1,gr=n,sl=d),m=n.pendingLanes,m===0&&(mr=null),Ze(o.stateNode),Nn(n,A()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],u(d.value,{componentStack:d.stack,digest:d.digest});if(il)throw il=!1,n=yc,yc=null,n;return(sl&1)!==0&&n.tag!==0&&Ps(),m=n.pendingLanes,(m&1)!==0?n===Mc?Uo++:(Uo=0,Mc=n):Uo=0,fr(),null}function Ps(){if(gr!==null){var n=ii(sl),i=$n.transition,o=st;try{if($n.transition=null,st=16>n?16:n,gr===null)var u=!1;else{if(n=gr,gr=null,sl=0,(Mt&6)!==0)throw Error(t(331));var d=Mt;for(Mt|=4,Fe=n.current;Fe!==null;){var m=Fe,T=m.child;if((Fe.flags&16)!==0){var N=m.deletions;if(N!==null){for(var k=0;k<N.length;k++){var re=N[k];for(Fe=re;Fe!==null;){var ve=Fe;switch(ve.tag){case 0:case 11:case 15:Do(8,ve,m)}var _e=ve.child;if(_e!==null)_e.return=ve,Fe=_e;else for(;Fe!==null;){ve=Fe;var ge=ve.sibling,Ne=ve.return;if(Pp(ve),ve===re){Fe=null;break}if(ge!==null){ge.return=Ne,Fe=ge;break}Fe=Ne}}}var ze=m.alternate;if(ze!==null){var Xe=ze.child;if(Xe!==null){ze.child=null;do{var Zt=Xe.sibling;Xe.sibling=null,Xe=Zt}while(Xe!==null)}}Fe=m}}if((m.subtreeFlags&2064)!==0&&T!==null)T.return=m,Fe=T;else e:for(;Fe!==null;){if(m=Fe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Do(9,m,m.return)}var j=m.sibling;if(j!==null){j.return=m.return,Fe=j;break e}Fe=m.return}}var H=n.current;for(Fe=H;Fe!==null;){T=Fe;var ee=T.child;if((T.subtreeFlags&2064)!==0&&ee!==null)ee.return=T,Fe=ee;else e:for(T=H;Fe!==null;){if(N=Fe,(N.flags&2048)!==0)try{switch(N.tag){case 0:case 11:case 15:el(9,N)}}catch(je){Wt(N,N.return,je)}if(N===T){Fe=null;break e}var Me=N.sibling;if(Me!==null){Me.return=N.return,Fe=Me;break e}Fe=N.return}}if(Mt=d,fr(),De&&typeof De.onPostCommitFiberRoot=="function")try{De.onPostCommitFiberRoot(Ce,n)}catch{}u=!0}return u}finally{st=o,$n.transition=i}}return!1}function Xp(n,i,o){i=ws(o,i),i=up(n,i,1),n=hr(n,i,1),i=En(),n!==null&&(Fn(n,1,i),Nn(n,i))}function Wt(n,i,o){if(n.tag===3)Xp(n,n,o);else for(;i!==null;){if(i.tag===3){Xp(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(mr===null||!mr.has(u))){n=ws(o,n),n=cp(i,n,1),i=hr(i,n,1),n=En(),i!==null&&(Fn(i,1,n),Nn(i,n));break}}i=i.return}}function Tv(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=En(),n.pingedLanes|=n.suspendedLanes&o,rn===n&&(cn&o)===o&&(Qt===4||Qt===3&&(cn&130023424)===cn&&500>A()-Sc?Gr(n,0):xc|=o),Nn(n,i)}function Yp(n,i){i===0&&((n.mode&1)===0?i=1:(i=Dt,Dt<<=1,(Dt&130023424)===0&&(Dt=4194304)));var o=En();n=ki(n,i),n!==null&&(Fn(n,i,o),Nn(n,o))}function wv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Yp(n,o)}function Av(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Yp(n,o)}var qp;qp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Pn.current)Ln=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Ln=!1,hv(n,i,o);Ln=(n.flags&131072)!==0}else Ln=!1,kt&&(i.flags&1048576)!==0&&Ah(i,Oa,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Ja(n,i),n=i.pendingProps;var d=vs(i,dn.current);Es(i,o),d=$u(null,i,u,n,d,o);var m=Ju();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,bn(u)?(m=!0,Ia(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Wu(i),d.updater=Ka,i.stateNode=d,d._reactInternals=i,rc(i,u,n,o),i=lc(null,i,u,!0,m,o)):(i.tag=0,kt&&m&&Iu(i),Mn(null,i,d,o),i=i.child),i;case 16:u=i.elementType;e:{switch(Ja(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Rv(u),n=oi(u,n),d){case 0:i=ac(null,i,u,n,o);break e;case 1:i=xp(null,i,u,n,o);break e;case 11:i=pp(null,i,u,n,o);break e;case 14:i=mp(null,i,u,oi(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:oi(u,d),ac(n,i,u,d,o);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:oi(u,d),xp(n,i,u,d,o);case 3:e:{if(Sp(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Uh(n,i),Ga(i,u,null,o);var T=i.memoizedState;if(u=T.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=ws(Error(t(423)),i),i=yp(n,i,u,o,d);break e}else if(u!==d){d=ws(Error(t(424)),i),i=yp(n,i,u,o,d);break e}else for(kn=lr(i.stateNode.containerInfo.firstChild),Bn=i,kt=!0,si=null,o=Nh(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ss(),u===d){i=Vi(n,i,o);break e}Mn(n,i,u,o)}i=i.child}return i;case 5:return Bh(i),n===null&&Ou(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,T=d.children,Ru(u,d)?T=null:m!==null&&Ru(u,m)&&(i.flags|=32),_p(n,i),Mn(n,i,T,o),i.child;case 6:return n===null&&Ou(i),null;case 13:return Mp(n,i,o);case 4:return Xu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=ys(i,null,u,o):Mn(n,i,u,o),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:oi(u,d),pp(n,i,u,d,o);case 7:return Mn(n,i,i.pendingProps,o),i.child;case 8:return Mn(n,i,i.pendingProps.children,o),i.child;case 12:return Mn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,T=d.value,It(za,u._currentValue),u._currentValue=T,m!==null)if(ri(m.value,T)){if(m.children===d.children&&!Pn.current){i=Vi(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var N=m.dependencies;if(N!==null){T=m.child;for(var k=N.firstContext;k!==null;){if(k.context===u){if(m.tag===1){k=zi(-1,o&-o),k.tag=2;var re=m.updateQueue;if(re!==null){re=re.shared;var ve=re.pending;ve===null?k.next=k:(k.next=ve.next,ve.next=k),re.pending=k}}m.lanes|=o,k=m.alternate,k!==null&&(k.lanes|=o),Hu(m.return,o,i),N.lanes|=o;break}k=k.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=o,N=T.alternate,N!==null&&(N.lanes|=o),Hu(T,o,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}Mn(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Es(i,o),d=Zn(d),u=u(d),i.flags|=1,Mn(n,i,u,o),i.child;case 14:return u=i.type,d=oi(u,i.pendingProps),d=oi(u.type,d),mp(n,i,u,d,o);case 15:return gp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:oi(u,d),Ja(n,i),i.tag=1,bn(u)?(n=!0,Ia(i)):n=!1,Es(i,o),ap(i,u,d),rc(i,u,d,o),lc(null,i,u,!0,n,o);case 19:return Tp(n,i,o);case 22:return vp(n,i,o)}throw Error(t(156,i.tag))};function jp(n,i){return ma(n,i)}function Cv(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,o,u){return new Cv(n,i,o,u)}function Rc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Rv(n){if(typeof n=="function")return Rc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===Q)return 14}return 2}function xr(n,i){var o=n.alternate;return o===null?(o=Jn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function ul(n,i,o,u,d,m){var T=2;if(u=n,typeof n=="function")Rc(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case B:return Xr(o.children,d,m,i);case w:T=8,d|=8;break;case L:return n=Jn(12,o,i,d|2),n.elementType=L,n.lanes=m,n;case Z:return n=Jn(13,o,i,d),n.elementType=Z,n.lanes=m,n;case le:return n=Jn(19,o,i,d),n.elementType=le,n.lanes=m,n;case W:return cl(o,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ae:T=10;break e;case O:T=9;break e;case J:T=11;break e;case Q:T=14;break e;case ne:T=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(T,o,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function Xr(n,i,o,u){return n=Jn(7,n,u,i),n.lanes=o,n}function cl(n,i,o,u){return n=Jn(22,n,u,i),n.elementType=W,n.lanes=o,n.stateNode={isHidden:!1},n}function Pc(n,i,o){return n=Jn(6,n,null,i),n.lanes=o,n}function bc(n,i,o){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Pv(n,i,o,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rn(0),this.expirationTimes=Rn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Lc(n,i,o,u,d,m,T,N,k){return n=new Pv(n,i,o,N,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Jn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Wu(m),n}function bv(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Zp(n){if(!n)return cr;n=n._reactInternals;e:{if(mi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(bn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(bn(o))return Eh(n,o,i)}return i}function Kp(n,i,o,u,d,m,T,N,k){return n=Lc(o,u,!0,n,d,m,T,N,k),n.context=Zp(null),o=n.current,u=En(),d=vr(o),m=zi(u,d),m.callback=i??null,hr(o,m,d),n.current.lanes=d,Fn(n,d,u),Nn(n,u),n}function fl(n,i,o,u){var d=i.current,m=En(),T=vr(d);return o=Zp(o),i.context===null?i.context=o:i.pendingContext=o,i=zi(m,T),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=hr(d,i,T),n!==null&&(ui(n,d,T,m),Ha(n,d,T)),T}function dl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function $p(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function Dc(n,i){$p(n,i),(n=n.alternate)&&$p(n,i)}function Lv(){return null}var Jp=typeof reportError=="function"?reportError:function(n){console.error(n)};function Nc(n){this._internalRoot=n}hl.prototype.render=Nc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));fl(n,i,null,null)},hl.prototype.unmount=Nc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Hr(function(){fl(null,n,null,null)}),i[Ui]=null}};function hl(n){this._internalRoot=n}hl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ro();n={blockedOn:null,target:n,priority:i};for(var o=0;o<sr.length&&i!==0&&i<sr[o].priority;o++);sr.splice(o,0,n),o===0&&Bd(n)}};function Ic(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Qp(){}function Dv(n,i,o,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var re=dl(T);m.call(re)}}var T=Kp(i,u,n,0,null,!1,!1,"",Qp);return n._reactRootContainer=T,n[Ui]=T.current,xo(n.nodeType===8?n.parentNode:n),Hr(),T}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var N=u;u=function(){var re=dl(k);N.call(re)}}var k=Lc(n,0,!1,null,null,!1,!1,"",Qp);return n._reactRootContainer=k,n[Ui]=k.current,xo(n.nodeType===8?n.parentNode:n),Hr(function(){fl(i,k,o,u)}),k}function ml(n,i,o,u,d){var m=o._reactRootContainer;if(m){var T=m;if(typeof d=="function"){var N=d;d=function(){var k=dl(T);N.call(k)}}fl(i,T,n,d)}else T=Dv(o,i,n,d,u);return dl(T)}jt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=_t(i.pendingLanes);o!==0&&(At(i,o|1),Nn(i,A()),(Mt&6)===0&&(Rs=A()+500,fr()))}break;case 13:Hr(function(){var u=ki(n,1);if(u!==null){var d=En();ui(u,n,1,d)}}),Dc(n,1)}},Yn=function(n){if(n.tag===13){var i=ki(n,134217728);if(i!==null){var o=En();ui(i,n,134217728,o)}Dc(n,134217728)}},Ii=function(n){if(n.tag===13){var i=vr(n),o=ki(n,i);if(o!==null){var u=En();ui(o,n,i,u)}Dc(n,i)}},ro=function(){return st},Fd=function(n,i){var o=st;try{return st=n,i()}finally{st=o}},we=function(n,i,o){switch(i){case"input":if(Ut(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var d=Da(u);if(!d)throw Error(t(90));Yt(u),Ut(u,d)}}}break;case"textarea":E(n,o);break;case"select":i=o.value,i!=null&&St(n,!!o.multiple,i,!1)}},rt=wc,bt=Hr;var Nv={usingClientEntryPoint:!1,Events:[Mo,ms,Da,fe,ke,wc]},Fo={findFiberByHostInstance:Ir,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Iv={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ha(n),n===null?null:n.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||Lv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gl.isDisabled&&gl.supportsFiber)try{Ce=gl.inject(Iv),De=gl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nv,In.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ic(i))throw Error(t(200));return bv(n,i,null,o)},In.createRoot=function(n,i){if(!Ic(n))throw Error(t(299));var o=!1,u="",d=Jp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Lc(n,1,!1,null,null,o,!1,u,d),n[Ui]=i.current,xo(n.nodeType===8?n.parentNode:n),new Nc(i)},In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ha(i),n=n===null?null:n.stateNode,n},In.flushSync=function(n){return Hr(n)},In.hydrate=function(n,i,o){if(!pl(i))throw Error(t(200));return ml(null,n,i,!0,o)},In.hydrateRoot=function(n,i,o){if(!Ic(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,d=!1,m="",T=Jp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(T=o.onRecoverableError)),i=Kp(i,null,n,1,o??null,d,!1,m,T),n[Ui]=i.current,xo(n),u)for(n=0;n<u.length;n++)o=u[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new hl(i)},In.render=function(n,i,o){if(!pl(i))throw Error(t(200));return ml(null,n,i,!1,o)},In.unmountComponentAtNode=function(n){if(!pl(n))throw Error(t(40));return n._reactRootContainer?(Hr(function(){ml(null,null,n,!1,function(){n._reactRootContainer=null,n[Ui]=null})}),!0):!1},In.unstable_batchedUpdates=wc,In.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!pl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ml(n,i,o,!1,u)},In.version="18.3.1-next-f1338f8080-20240426",In}var am;function Wv(){if(am)return Bc.exports;am=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Bc.exports=Gv(),Bc.exports}var lm;function Xv(){if(lm)return vl;lm=1;var s=Wv();return vl.createRoot=s.createRoot,vl.hydrateRoot=s.hydrateRoot,vl}var Yv=Xv();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _d="183",qv=0,um=1,jv=2,Wl=1,Zv=2,Wo=3,br=0,Un=1,Ei=2,Ki=0,Ys=1,cm=2,fm=3,dm=4,Kv=5,Qr=100,$v=101,Jv=102,Qv=103,e_=104,t_=200,n_=201,i_=202,r_=203,Tf=204,wf=205,s_=206,o_=207,a_=208,l_=209,u_=210,c_=211,f_=212,d_=213,h_=214,Af=0,Cf=1,Rf=2,js=3,Pf=4,bf=5,Lf=6,Df=7,pg=0,p_=1,m_=2,Ai=0,mg=1,gg=2,vg=3,_g=4,xg=5,Sg=6,yg=7,Mg=300,is=301,Zs=302,Vc=303,Hc=304,Ql=306,Nf=1e3,Zi=1001,If=1002,fn=1003,g_=1004,_l=1005,_n=1006,Gc=1007,ts=1008,Gn=1009,Eg=1010,Tg=1011,Qo=1012,xd=1013,Pi=1014,Ti=1015,Ji=1016,Sd=1017,yd=1018,ea=1020,wg=35902,Ag=35899,Cg=1021,Rg=1022,pi=1023,Qi=1026,ns=1027,Pg=1028,Md=1029,Ks=1030,Ed=1031,Td=1033,Xl=33776,Yl=33777,ql=33778,jl=33779,Uf=35840,Ff=35841,Of=35842,Bf=35843,kf=36196,zf=37492,Vf=37496,Hf=37488,Gf=37489,Wf=37490,Xf=37491,Yf=37808,qf=37809,jf=37810,Zf=37811,Kf=37812,$f=37813,Jf=37814,Qf=37815,ed=37816,td=37817,nd=37818,id=37819,rd=37820,sd=37821,od=36492,ad=36494,ld=36495,ud=36283,cd=36284,fd=36285,dd=36286,v_=3200,bg=0,__=1,Rr="",ei="srgb",$s="srgb-linear",Kl="linear",Lt="srgb",bs=7680,hm=519,x_=512,S_=513,y_=514,wd=515,M_=516,E_=517,Ad=518,T_=519,pm=35044,mm="300 es",wi=2e3,ta=2001;function w_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function $l(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function A_(){const s=$l("canvas");return s.style.display="block",s}const gm={};function vm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Lg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function at(...s){s=Lg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function wt(...s){s=Lg(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function Jl(...s){const e=s.join(" ");e in gm||(gm[e]=!0,at(...s))}function C_(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const R_={[Af]:Cf,[Rf]:Lf,[Pf]:Df,[js]:bf,[Cf]:Af,[Lf]:Rf,[Df]:Pf,[bf]:js};class eo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,c=a.length;l<c;l++)a[l].call(this,e);e.target=null}}}const gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _m=1234567;const jo=Math.PI/180,na=180/Math.PI;function ss(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(gn[s&255]+gn[s>>8&255]+gn[s>>16&255]+gn[s>>24&255]+"-"+gn[e&255]+gn[e>>8&255]+"-"+gn[e>>16&15|64]+gn[e>>24&255]+"-"+gn[t&63|128]+gn[t>>8&255]+"-"+gn[t>>16&255]+gn[t>>24&255]+gn[r&255]+gn[r>>8&255]+gn[r>>16&255]+gn[r>>24&255]).toLowerCase()}function mt(s,e,t){return Math.max(e,Math.min(t,s))}function Cd(s,e){return(s%e+e)%e}function P_(s,e,t,r,a){return r+(s-e)*(a-r)/(t-e)}function b_(s,e,t){return s!==e?(t-s)/(e-s):0}function Zo(s,e,t){return(1-t)*s+t*e}function L_(s,e,t,r){return Zo(s,e,1-Math.exp(-t*r))}function D_(s,e=1){return e-Math.abs(Cd(s,e*2)-e)}function N_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function I_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function U_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function F_(s,e){return s+Math.random()*(e-s)}function O_(s){return s*(.5-Math.random())}function B_(s){s!==void 0&&(_m=s);let e=_m+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function k_(s){return s*jo}function z_(s){return s*na}function V_(s){return(s&s-1)===0&&s!==0}function H_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function G_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function W_(s,e,t,r,a){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+r)/2),v=c((e+r)/2),S=l((e-r)/2),g=c((e-r)/2),y=l((r-e)/2),M=c((r-e)/2);switch(a){case"XYX":s.set(f*v,h*S,h*g,f*p);break;case"YZY":s.set(h*g,f*v,h*S,f*p);break;case"ZXZ":s.set(h*S,h*g,f*v,f*p);break;case"XZX":s.set(f*v,h*M,h*y,f*p);break;case"YXY":s.set(h*y,f*v,h*M,f*p);break;case"ZYZ":s.set(h*M,h*y,f*v,f*p);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+a)}}function Ws(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Tn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const X_={DEG2RAD:jo,RAD2DEG:na,generateUUID:ss,clamp:mt,euclideanModulo:Cd,mapLinear:P_,inverseLerp:b_,lerp:Zo,damp:L_,pingpong:D_,smoothstep:N_,smootherstep:I_,randInt:U_,randFloat:F_,randFloatSpread:O_,seededRandom:B_,degToRad:k_,radToDeg:z_,isPowerOfTwo:V_,ceilPowerOfTwo:H_,floorPowerOfTwo:G_,setQuaternionFromProperEuler:W_,normalize:Tn,denormalize:Ws};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*a+e.x,this.y=l*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class to{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,c,f){let h=r[a+0],p=r[a+1],v=r[a+2],S=r[a+3],g=l[c+0],y=l[c+1],M=l[c+2],R=l[c+3];if(S!==R||h!==g||p!==y||v!==M){let x=h*g+p*y+v*M+S*R;x<0&&(g=-g,y=-y,M=-M,R=-R,x=-x);let _=1-f;if(x<.9995){const C=Math.acos(x),b=Math.sin(C);_=Math.sin(_*C)/b,f=Math.sin(f*C)/b,h=h*_+g*f,p=p*_+y*f,v=v*_+M*f,S=S*_+R*f}else{h=h*_+g*f,p=p*_+y*f,v=v*_+M*f,S=S*_+R*f;const C=1/Math.sqrt(h*h+p*p+v*v+S*S);h*=C,p*=C,v*=C,S*=C}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,a,l,c){const f=r[a],h=r[a+1],p=r[a+2],v=r[a+3],S=l[c],g=l[c+1],y=l[c+2],M=l[c+3];return e[t]=f*M+v*S+h*y-p*g,e[t+1]=h*M+v*g+p*S-f*y,e[t+2]=p*M+v*y+f*g-h*S,e[t+3]=v*M-f*S-h*g-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(a/2),S=f(l/2),g=h(r/2),y=h(a/2),M=h(l/2);switch(c){case"XYZ":this._x=g*v*S+p*y*M,this._y=p*y*S-g*v*M,this._z=p*v*M+g*y*S,this._w=p*v*S-g*y*M;break;case"YXZ":this._x=g*v*S+p*y*M,this._y=p*y*S-g*v*M,this._z=p*v*M-g*y*S,this._w=p*v*S+g*y*M;break;case"ZXY":this._x=g*v*S-p*y*M,this._y=p*y*S+g*v*M,this._z=p*v*M+g*y*S,this._w=p*v*S-g*y*M;break;case"ZYX":this._x=g*v*S-p*y*M,this._y=p*y*S+g*v*M,this._z=p*v*M-g*y*S,this._w=p*v*S+g*y*M;break;case"YZX":this._x=g*v*S+p*y*M,this._y=p*y*S+g*v*M,this._z=p*v*M-g*y*S,this._w=p*v*S-g*y*M;break;case"XZY":this._x=g*v*S-p*y*M,this._y=p*y*S-g*v*M,this._z=p*v*M+g*y*S,this._w=p*v*S+g*y*M;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],v=t[6],S=t[10],g=r+f+S;if(g>0){const y=.5/Math.sqrt(g+1);this._w=.25/y,this._x=(v-h)*y,this._y=(l-p)*y,this._z=(c-a)*y}else if(r>f&&r>S){const y=2*Math.sqrt(1+r-f-S);this._w=(v-h)/y,this._x=.25*y,this._y=(a+c)/y,this._z=(l+p)/y}else if(f>S){const y=2*Math.sqrt(1+f-r-S);this._w=(l-p)/y,this._x=(a+c)/y,this._y=.25*y,this._z=(h+v)/y}else{const y=2*Math.sqrt(1+S-r-f);this._w=(c-a)/y,this._x=(l+p)/y,this._y=(h+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+c*f+a*p-l*h,this._y=a*v+c*h+l*f-r*p,this._z=l*v+c*p+r*h-a*f,this._w=c*v-r*f-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,a=-a,l=-l,c=-c,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+a*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*a-f*r),v=2*(f*t-l*a),S=2*(l*r-c*t);return this.x=t+h*p+c*S-f*v,this.y=r+h*v+f*p-l*S,this.z=a+h*S+l*v-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*c-r*h,this.z=r*f-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Wc.copy(this).projectOnVector(e),this.sub(Wc)}reflect(e){return this.sub(Wc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wc=new Y,xm=new to;class ft{constructor(e,t,r,a,l,c,f,h,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p)}set(e,t,r,a,l,c,f,h,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=c,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],v=r[4],S=r[7],g=r[2],y=r[5],M=r[8],R=a[0],x=a[3],_=a[6],C=a[1],b=a[4],P=a[7],F=a[2],I=a[5],B=a[8];return l[0]=c*R+f*C+h*F,l[3]=c*x+f*b+h*I,l[6]=c*_+f*P+h*B,l[1]=p*R+v*C+S*F,l[4]=p*x+v*b+S*I,l[7]=p*_+v*P+S*B,l[2]=g*R+y*C+M*F,l[5]=g*x+y*b+M*I,l[8]=g*_+y*P+M*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*c*v-t*f*p-r*l*v+r*f*h+a*l*p-a*c*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=v*c-f*p,g=f*h-v*l,y=p*l-c*h,M=t*S+r*g+a*y;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/M;return e[0]=S*R,e[1]=(a*p-v*r)*R,e[2]=(f*r-a*c)*R,e[3]=g*R,e[4]=(v*t-a*h)*R,e[5]=(a*l-f*t)*R,e[6]=y*R,e[7]=(r*h-p*t)*R,e[8]=(c*t-r*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-a*p,a*h,-a*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(Xc.makeScale(e,t)),this}rotate(e){return this.premultiply(Xc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Xc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xc=new ft,Sm=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ym=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Y_(){const s={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(a,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Lt&&(a.r=$i(a.r),a.g=$i(a.g),a.b=$i(a.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Lt&&(a.r=qs(a.r),a.g=qs(a.g),a.b=qs(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Rr?Kl:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,c){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return Jl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return Jl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[$s]:{primaries:e,whitePoint:r,transfer:Kl,toXYZ:Sm,fromXYZ:ym,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:Sm,fromXYZ:ym,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),s}const Et=Y_();function $i(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qs(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class q_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ls===void 0&&(Ls=$l("canvas")),Ls.width=e.width,Ls.height=e.height;const a=Ls.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ls}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=$l("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let c=0;c<l.length;c++)l[c]=$i(l[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor($i(t[r]/255)*255):t[r]=$i(t[r]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let j_=0;class Rd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:j_++}),this.uuid=ss(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let c=0,f=a.length;c<f;c++)a[c].isDataTexture?l.push(Yc(a[c].image)):l.push(Yc(a[c]))}else l=Yc(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Yc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?q_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let Z_=0;const qc=new Y;class An extends eo{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,r=Zi,a=Zi,l=_n,c=ts,f=pi,h=Gn,p=An.DEFAULT_ANISOTROPY,v=Rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=ss(),this.name="",this.source=new Rd(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qc).x}get height(){return this.source.getSize(qc).y}get depth(){return this.source.getSize(qc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nf:e.x=e.x-Math.floor(e.x);break;case Zi:e.x=e.x<0?0:1;break;case If:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nf:e.y=e.y-Math.floor(e.y);break;case Zi:e.y=e.y<0?0:1;break;case If:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Mg;An.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,r=0,a=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],v=h[4],S=h[8],g=h[1],y=h[5],M=h[9],R=h[2],x=h[6],_=h[10];if(Math.abs(v-g)<.01&&Math.abs(S-R)<.01&&Math.abs(M-x)<.01){if(Math.abs(v+g)<.1&&Math.abs(S+R)<.1&&Math.abs(M+x)<.1&&Math.abs(p+y+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,P=(y+1)/2,F=(_+1)/2,I=(v+g)/4,B=(S+R)/4,w=(M+x)/4;return b>P&&b>F?b<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(b),a=I/r,l=B/r):P>F?P<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(P),r=I/a,l=w/a):F<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(F),r=B/l,a=w/l),this.set(r,a,l,t),this}let C=Math.sqrt((x-M)*(x-M)+(S-R)*(S-R)+(g-v)*(g-v));return Math.abs(C)<.001&&(C=1),this.x=(x-M)/C,this.y=(S-R)/C,this.z=(g-v)/C,this.w=Math.acos((p+y+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class K_ extends eo{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},l=new An(a),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:_n,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Rd(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ci extends K_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Dg extends An{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=fn,this.minFilter=fn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $_ extends An{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=fn,this.minFilter=fn,this.wrapR=Zi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gt{constructor(e,t,r,a,l,c,f,h,p,v,S,g,y,M,R,x){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,c,f,h,p,v,S,g,y,M,R,x)}set(e,t,r,a,l,c,f,h,p,v,S,g,y,M,R,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=a,_[1]=l,_[5]=c,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=S,_[14]=g,_[3]=y,_[7]=M,_[11]=R,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,a=1/Ds.setFromMatrixColumn(e,0).length(),l=1/Ds.setFromMatrixColumn(e,1).length(),c=1/Ds.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(a),p=Math.sin(a),v=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=c*v,y=c*S,M=f*v,R=f*S;t[0]=h*v,t[4]=-h*S,t[8]=p,t[1]=y+M*p,t[5]=g-R*p,t[9]=-f*h,t[2]=R-g*p,t[6]=M+y*p,t[10]=c*h}else if(e.order==="YXZ"){const g=h*v,y=h*S,M=p*v,R=p*S;t[0]=g+R*f,t[4]=M*f-y,t[8]=c*p,t[1]=c*S,t[5]=c*v,t[9]=-f,t[2]=y*f-M,t[6]=R+g*f,t[10]=c*h}else if(e.order==="ZXY"){const g=h*v,y=h*S,M=p*v,R=p*S;t[0]=g-R*f,t[4]=-c*S,t[8]=M+y*f,t[1]=y+M*f,t[5]=c*v,t[9]=R-g*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const g=c*v,y=c*S,M=f*v,R=f*S;t[0]=h*v,t[4]=M*p-y,t[8]=g*p+R,t[1]=h*S,t[5]=R*p+g,t[9]=y*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const g=c*h,y=c*p,M=f*h,R=f*p;t[0]=h*v,t[4]=R-g*S,t[8]=M*S+y,t[1]=S,t[5]=c*v,t[9]=-f*v,t[2]=-p*v,t[6]=y*S+M,t[10]=g-R*S}else if(e.order==="XZY"){const g=c*h,y=c*p,M=f*h,R=f*p;t[0]=h*v,t[4]=-S,t[8]=p*v,t[1]=g*S+R,t[5]=c*v,t[9]=y*S-M,t[2]=M*S-y,t[6]=f*v,t[10]=R*S+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J_,e,Q_)}lookAt(e,t,r){const a=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),yr.crossVectors(r,Vn),yr.lengthSq()===0&&(Math.abs(r.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),yr.crossVectors(r,Vn)),yr.normalize(),xl.crossVectors(Vn,yr),a[0]=yr.x,a[4]=xl.x,a[8]=Vn.x,a[1]=yr.y,a[5]=xl.y,a[9]=Vn.y,a[2]=yr.z,a[6]=xl.z,a[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],v=r[1],S=r[5],g=r[9],y=r[13],M=r[2],R=r[6],x=r[10],_=r[14],C=r[3],b=r[7],P=r[11],F=r[15],I=a[0],B=a[4],w=a[8],L=a[12],ae=a[1],O=a[5],J=a[9],Z=a[13],le=a[2],Q=a[6],ne=a[10],W=a[14],K=a[3],oe=a[7],ue=a[11],U=a[15];return l[0]=c*I+f*ae+h*le+p*K,l[4]=c*B+f*O+h*Q+p*oe,l[8]=c*w+f*J+h*ne+p*ue,l[12]=c*L+f*Z+h*W+p*U,l[1]=v*I+S*ae+g*le+y*K,l[5]=v*B+S*O+g*Q+y*oe,l[9]=v*w+S*J+g*ne+y*ue,l[13]=v*L+S*Z+g*W+y*U,l[2]=M*I+R*ae+x*le+_*K,l[6]=M*B+R*O+x*Q+_*oe,l[10]=M*w+R*J+x*ne+_*ue,l[14]=M*L+R*Z+x*W+_*U,l[3]=C*I+b*ae+P*le+F*K,l[7]=C*B+b*O+P*Q+F*oe,l[11]=C*w+b*J+P*ne+F*ue,l[15]=C*L+b*Z+P*W+F*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],v=e[2],S=e[6],g=e[10],y=e[14],M=e[3],R=e[7],x=e[11],_=e[15],C=h*y-p*g,b=f*y-p*S,P=f*g-h*S,F=c*y-p*v,I=c*g-h*v,B=c*S-f*v;return t*(R*C-x*b+_*P)-r*(M*C-x*F+_*I)+a*(M*b-R*F+_*B)-l*(M*P-R*I+x*B)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],S=e[9],g=e[10],y=e[11],M=e[12],R=e[13],x=e[14],_=e[15],C=t*f-r*c,b=t*h-a*c,P=t*p-l*c,F=r*h-a*f,I=r*p-l*f,B=a*p-l*h,w=v*R-S*M,L=v*x-g*M,ae=v*_-y*M,O=S*x-g*R,J=S*_-y*R,Z=g*_-y*x,le=C*Z-b*J+P*O+F*ae-I*L+B*w;if(le===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/le;return e[0]=(f*Z-h*J+p*O)*Q,e[1]=(a*J-r*Z-l*O)*Q,e[2]=(R*B-x*I+_*F)*Q,e[3]=(g*I-S*B-y*F)*Q,e[4]=(h*ae-c*Z-p*L)*Q,e[5]=(t*Z-a*ae+l*L)*Q,e[6]=(x*P-M*B-_*b)*Q,e[7]=(v*B-g*P+y*b)*Q,e[8]=(c*J-f*ae+p*w)*Q,e[9]=(r*ae-t*J-l*w)*Q,e[10]=(M*I-R*P+_*C)*Q,e[11]=(S*P-v*I-y*C)*Q,e[12]=(f*L-c*O-h*w)*Q,e[13]=(t*O-r*L+a*w)*Q,e[14]=(R*b-M*F-x*C)*Q,e[15]=(v*F-S*b+g*C)*Q,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,v=l*f;return this.set(p*c+r,p*f-a*h,p*h+a*f,0,p*f+a*h,v*f+r,v*h-a*c,0,p*h-a*f,v*h+a*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,c){return this.set(1,r,l,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,v=c+c,S=f+f,g=l*p,y=l*v,M=l*S,R=c*v,x=c*S,_=f*S,C=h*p,b=h*v,P=h*S,F=r.x,I=r.y,B=r.z;return a[0]=(1-(R+_))*F,a[1]=(y+P)*F,a[2]=(M-b)*F,a[3]=0,a[4]=(y-P)*I,a[5]=(1-(g+_))*I,a[6]=(x+C)*I,a[7]=0,a[8]=(M+b)*B,a[9]=(x-C)*B,a[10]=(1-(g+R))*B,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=Ds.set(a[0],a[1],a[2]).length();const f=Ds.set(a[4],a[5],a[6]).length(),h=Ds.set(a[8],a[9],a[10]).length();l<0&&(c=-c),ci.copy(this);const p=1/c,v=1/f,S=1/h;return ci.elements[0]*=p,ci.elements[1]*=p,ci.elements[2]*=p,ci.elements[4]*=v,ci.elements[5]*=v,ci.elements[6]*=v,ci.elements[8]*=S,ci.elements[9]*=S,ci.elements[10]*=S,t.setFromRotationMatrix(ci),r.x=c,r.y=f,r.z=h,this}makePerspective(e,t,r,a,l,c,f=wi,h=!1){const p=this.elements,v=2*l/(t-e),S=2*l/(r-a),g=(t+e)/(t-e),y=(r+a)/(r-a);let M,R;if(h)M=l/(c-l),R=c*l/(c-l);else if(f===wi)M=-(c+l)/(c-l),R=-2*c*l/(c-l);else if(f===ta)M=-c/(c-l),R=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=S,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,a,l,c,f=wi,h=!1){const p=this.elements,v=2/(t-e),S=2/(r-a),g=-(t+e)/(t-e),y=-(r+a)/(r-a);let M,R;if(h)M=1/(c-l),R=c/(c-l);else if(f===wi)M=-2/(c-l),R=-(c+l)/(c-l);else if(f===ta)M=-1/(c-l),R=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=S,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=M,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ds=new Y,ci=new Gt,J_=new Y(0,0,0),Q_=new Y(1,1,1),yr=new Y,xl=new Y,Vn=new Y,Mm=new Gt,Em=new to;class bi{constructor(e=0,t=0,r=0,a=bi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],c=a[4],f=a[8],h=a[1],p=a[5],v=a[9],S=a[2],g=a[6],y=a[10];switch(t){case"XYZ":this._y=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-mt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,y),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,y),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Mm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Em.setFromEuler(this),this.setFromQuaternion(Em,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bi.DEFAULT_ORDER="XYZ";class Ng{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ex=0;const Tm=new Y,Ns=new to,Gi=new Gt,Sl=new Y,Bo=new Y,tx=new Y,nx=new to,wm=new Y(1,0,0),Am=new Y(0,1,0),Cm=new Y(0,0,1),Rm={type:"added"},ix={type:"removed"},Is={type:"childadded",child:null},jc={type:"childremoved",child:null};class xn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new Y,t=new bi,r=new to,a=new Y(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ft}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ng,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(wm,e)}rotateY(e){return this.rotateOnAxis(Am,e)}rotateZ(e){return this.rotateOnAxis(Cm,e)}translateOnAxis(e,t){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wm,e)}translateY(e){return this.translateOnAxis(Am,e)}translateZ(e){return this.translateOnAxis(Cm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Sl.copy(e):Sl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(Bo,Sl,this.up):Gi.lookAt(Sl,Bo,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rm),Is.child=e,this.dispatchEvent(Is),Is.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ix),jc.child=e,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rm),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,tx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,nx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*a,l[13]+=r-l[1]*t-l[5]*r-l[9]*a,l[14]+=a-l[2]*t-l[6]*r-l[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,c=a.length;l<c;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),this.static!==!1&&(a.static=this.static),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const S=h[p];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),v=c(e.images),S=c(e.shapes),g=c(e.skeletons),y=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),y.length>0&&(r.animations=y),M.length>0&&(r.nodes=M)}return r.object=a,r;function c(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}xn.DEFAULT_UP=new Y(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Xs extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rx={type:"move"};class Zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const R of e.hand.values()){const x=t.getJointPose(R,r),_=this._getHandJoint(p,R);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],g=v.position.distanceTo(S.position),y=.02,M=.005;p.inputState.pinching&&g>y+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=y-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(rx)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Xs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mr={h:0,s:0,l:0},yl={h:0,s:0,l:0};function Kc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=Et.workingColorSpace){return this.r=e,this.g=t,this.b=r,Et.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=Et.workingColorSpace){if(e=Cd(e,1),t=mt(t,0,1),r=mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Kc(c,l,e+1/3),this.g=Kc(c,l,e),this.b=Kc(c,l,e-1/3)}return Et.colorSpaceToWorking(this,a),this}setStyle(e,t=ei){function r(l){l!==void 0&&parseFloat(l)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=a[1],f=a[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const r=Ig[e.toLowerCase()];return r!==void 0?this.setHex(r,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}copyLinearToSRGB(e){return this.r=qs(e.r),this.g=qs(e.g),this.b=qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Et.workingToColorSpace(vn.copy(this),e),Math.round(mt(vn.r*255,0,255))*65536+Math.round(mt(vn.g*255,0,255))*256+Math.round(mt(vn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(vn.copy(this),t);const r=vn.r,a=vn.g,l=vn.b,c=Math.max(r,a,l),f=Math.min(r,a,l);let h,p;const v=(f+c)/2;if(f===c)h=0,p=0;else{const S=c-f;switch(p=v<=.5?S/(c+f):S/(2-c-f),c){case r:h=(a-l)/S+(a<l?6:0);break;case a:h=(l-r)/S+2;break;case l:h=(r-a)/S+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=ei){Et.workingToColorSpace(vn.copy(this),e);const t=vn.r,r=vn.g,a=vn.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Mr),this.setHSL(Mr.h+e,Mr.s+t,Mr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Mr),e.getHSL(yl);const r=Zo(Mr.h,yl.h,t),a=Zo(Mr.s,yl.s,t),l=Zo(Mr.l,yl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Ct;Ct.NAMES=Ig;class sx extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const fi=new Y,Wi=new Y,$c=new Y,Xi=new Y,Us=new Y,Fs=new Y,Pm=new Y,Jc=new Y,Qc=new Y,ef=new Y,tf=new Xt,nf=new Xt,rf=new Xt;class hi{constructor(e=new Y,t=new Y,r=new Y){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),fi.subVectors(e,t),a.cross(fi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){fi.subVectors(a,t),Wi.subVectors(r,t),$c.subVectors(e,t);const c=fi.dot(fi),f=fi.dot(Wi),h=fi.dot($c),p=Wi.dot(Wi),v=Wi.dot($c),S=c*p-f*f;if(S===0)return l.set(0,0,0),null;const g=1/S,y=(p*h-f*v)*g,M=(c*v-f*h)*g;return l.set(1-y-M,M,y)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Xi)===null?!1:Xi.x>=0&&Xi.y>=0&&Xi.x+Xi.y<=1}static getInterpolation(e,t,r,a,l,c,f,h){return this.getBarycoord(e,t,r,a,Xi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Xi.x),h.addScaledVector(c,Xi.y),h.addScaledVector(f,Xi.z),h)}static getInterpolatedAttribute(e,t,r,a,l,c){return tf.setScalar(0),nf.setScalar(0),rf.setScalar(0),tf.fromBufferAttribute(e,t),nf.fromBufferAttribute(e,r),rf.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(tf,l.x),c.addScaledVector(nf,l.y),c.addScaledVector(rf,l.z),c}static isFrontFacing(e,t,r,a){return fi.subVectors(r,t),Wi.subVectors(e,t),fi.cross(Wi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return fi.subVectors(this.c,this.b),Wi.subVectors(this.a,this.b),fi.cross(Wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return hi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return hi.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let c,f;Us.subVectors(a,r),Fs.subVectors(l,r),Jc.subVectors(e,r);const h=Us.dot(Jc),p=Fs.dot(Jc);if(h<=0&&p<=0)return t.copy(r);Qc.subVectors(e,a);const v=Us.dot(Qc),S=Fs.dot(Qc);if(v>=0&&S<=v)return t.copy(a);const g=h*S-v*p;if(g<=0&&h>=0&&v<=0)return c=h/(h-v),t.copy(r).addScaledVector(Us,c);ef.subVectors(e,l);const y=Us.dot(ef),M=Fs.dot(ef);if(M>=0&&y<=M)return t.copy(l);const R=y*p-h*M;if(R<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(r).addScaledVector(Fs,f);const x=v*M-y*S;if(x<=0&&S-v>=0&&y-M>=0)return Pm.subVectors(l,a),f=(S-v)/(S-v+(y-M)),t.copy(a).addScaledVector(Pm,f);const _=1/(x+R+g);return c=R*_,f=g*_,t.copy(r).addScaledVector(Us,c).addScaledVector(Fs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class aa{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,di):di.fromBufferAttribute(l,c),di.applyMatrix4(e.matrixWorld),this.expandByPoint(di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ml.copy(r.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}const a=e.children;for(let l=0,c=a.length;l<c;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,di),di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),El.subVectors(this.max,ko),Os.subVectors(e.a,ko),Bs.subVectors(e.b,ko),ks.subVectors(e.c,ko),Er.subVectors(Bs,Os),Tr.subVectors(ks,Bs),Yr.subVectors(Os,ks);let t=[0,-Er.z,Er.y,0,-Tr.z,Tr.y,0,-Yr.z,Yr.y,Er.z,0,-Er.x,Tr.z,0,-Tr.x,Yr.z,0,-Yr.x,-Er.y,Er.x,0,-Tr.y,Tr.x,0,-Yr.y,Yr.x,0];return!sf(t,Os,Bs,ks,El)||(t=[1,0,0,0,1,0,0,0,1],!sf(t,Os,Bs,ks,El))?!1:(Tl.crossVectors(Er,Tr),t=[Tl.x,Tl.y,Tl.z],sf(t,Os,Bs,ks,El))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Yi=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],di=new Y,Ml=new aa,Os=new Y,Bs=new Y,ks=new Y,Er=new Y,Tr=new Y,Yr=new Y,ko=new Y,El=new Y,Tl=new Y,qr=new Y;function sf(s,e,t,r,a){for(let l=0,c=s.length-3;l<=c;l+=3){qr.fromArray(s,l);const f=a.x*Math.abs(qr.x)+a.y*Math.abs(qr.y)+a.z*Math.abs(qr.z),h=e.dot(qr),p=t.dot(qr),v=r.dot(qr);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const $t=new Y,wl=new Je;let ox=0;class Ri{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ox++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=pm,this.updateRanges=[],this.gpuType=Ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)wl.fromBufferAttribute(this,t),wl.applyMatrix3(e),this.setXY(t,wl.x,wl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ws(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Tn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Tn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),r=Tn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),r=Tn(r,this.array),a=Tn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=Tn(t,this.array),r=Tn(r,this.array),a=Tn(a,this.array),l=Tn(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==pm&&(e.usage=this.usage),e}}class Ug extends Ri{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Fg extends Ri{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class ln extends Ri{constructor(e,t,r){super(new Float32Array(e),t,r)}}const ax=new aa,zo=new Y,of=new Y;class Pd{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):ax.setFromPoints(e).getCenter(r);let a=0;for(let l=0,c=e.length;l<c;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;zo.subVectors(e,this.center);const t=zo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(zo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(of.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(zo.copy(e.center).add(of)),this.expandByPoint(zo.copy(e.center).sub(of))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let lx=0;const Qn=new Gt,af=new xn,zs=new Y,Hn=new aa,Vo=new aa,on=new Y;class ni extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(w_(e)?Fg:Ug)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Qn.makeRotationFromQuaternion(e),this.applyMatrix4(Qn),this}rotateX(e){return Qn.makeRotationX(e),this.applyMatrix4(Qn),this}rotateY(e){return Qn.makeRotationY(e),this.applyMatrix4(Qn),this}rotateZ(e){return Qn.makeRotationZ(e),this.applyMatrix4(Qn),this}translate(e,t,r){return Qn.makeTranslation(e,t,r),this.applyMatrix4(Qn),this}scale(e,t,r){return Qn.makeScale(e,t,r),this.applyMatrix4(Qn),this}lookAt(e){return af.lookAt(e),af.updateMatrix(),this.applyMatrix4(af.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ln(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Hn.setFromBufferAttribute(l),this.morphTargetsRelative?(on.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(on),on.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(on)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Vo.setFromBufferAttribute(f),this.morphTargetsRelative?(on.addVectors(Hn.min,Vo.min),Hn.expandByPoint(on),on.addVectors(Hn.max,Vo.max),Hn.expandByPoint(on)):(Hn.expandByPoint(Vo.min),Hn.expandByPoint(Vo.max))}Hn.getCenter(r);let a=0;for(let l=0,c=e.count;l<c;l++)on.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(on));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)on.fromBufferAttribute(f,p),h&&(zs.fromBufferAttribute(e,p),on.add(zs)),a=Math.max(a,r.distanceToSquared(on))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ri(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let w=0;w<r.count;w++)f[w]=new Y,h[w]=new Y;const p=new Y,v=new Y,S=new Y,g=new Je,y=new Je,M=new Je,R=new Y,x=new Y;function _(w,L,ae){p.fromBufferAttribute(r,w),v.fromBufferAttribute(r,L),S.fromBufferAttribute(r,ae),g.fromBufferAttribute(l,w),y.fromBufferAttribute(l,L),M.fromBufferAttribute(l,ae),v.sub(p),S.sub(p),y.sub(g),M.sub(g);const O=1/(y.x*M.y-M.x*y.y);isFinite(O)&&(R.copy(v).multiplyScalar(M.y).addScaledVector(S,-y.y).multiplyScalar(O),x.copy(S).multiplyScalar(y.x).addScaledVector(v,-M.x).multiplyScalar(O),f[w].add(R),f[L].add(R),f[ae].add(R),h[w].add(x),h[L].add(x),h[ae].add(x))}let C=this.groups;C.length===0&&(C=[{start:0,count:e.count}]);for(let w=0,L=C.length;w<L;++w){const ae=C[w],O=ae.start,J=ae.count;for(let Z=O,le=O+J;Z<le;Z+=3)_(e.getX(Z+0),e.getX(Z+1),e.getX(Z+2))}const b=new Y,P=new Y,F=new Y,I=new Y;function B(w){F.fromBufferAttribute(a,w),I.copy(F);const L=f[w];b.copy(L),b.sub(F.multiplyScalar(F.dot(L))).normalize(),P.crossVectors(I,L);const O=P.dot(h[w])<0?-1:1;c.setXYZW(w,b.x,b.y,b.z,O)}for(let w=0,L=C.length;w<L;++w){const ae=C[w],O=ae.start,J=ae.count;for(let Z=O,le=O+J;Z<le;Z+=3)B(e.getX(Z+0)),B(e.getX(Z+1)),B(e.getX(Z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ri(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,y=r.count;g<y;g++)r.setXYZ(g,0,0,0);const a=new Y,l=new Y,c=new Y,f=new Y,h=new Y,p=new Y,v=new Y,S=new Y;if(e)for(let g=0,y=e.count;g<y;g+=3){const M=e.getX(g+0),R=e.getX(g+1),x=e.getX(g+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,R),c.fromBufferAttribute(t,x),v.subVectors(c,l),S.subVectors(a,l),v.cross(S),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,R),p.fromBufferAttribute(r,x),f.add(v),h.add(v),p.add(v),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,y=t.count;g<y;g+=3)a.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),v.subVectors(c,l),S.subVectors(a,l),v.cross(S),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)on.fromBufferAttribute(e,t),on.normalize(),e.setXYZ(t,on.x,on.y,on.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,S=f.normalized,g=new p.constructor(h.length*v);let y=0,M=0;for(let R=0,x=h.length;R<x;R++){f.isInterleavedBufferAttribute?y=h[R]*f.data.stride+f.offset:y=h[R]*v;for(let _=0;_<v;_++)g[M++]=p[y++]}return new Ri(g,v,S)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,r=this.index.array,a=this.attributes;for(const f in a){const h=a[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,S=p.length;v<S;v++){const g=p[v],y=e(g,r);h.push(y)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let S=0,g=p.length;S<g;S++){const y=p[S];v.push(y.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],S=l[p];for(let g=0,y=S.length;g<y;g++)v.push(S[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,v=c.length;p<v;p++){const S=c[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ux=0;class la extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=ss(),this.name="",this.type="Material",this.blending=Ys,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tf,this.blendDst=wf,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(r.blending=this.blending),this.side!==br&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Tf&&(r.blendSrc=this.blendSrc),this.blendDst!==wf&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==hm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=a(e.textures),c=a(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qi=new Y,lf=new Y,Al=new Y,wr=new Y,uf=new Y,Cl=new Y,cf=new Y;class cx{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qi.copy(this.origin).addScaledVector(this.direction,t),qi.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){lf.copy(e).add(t).multiplyScalar(.5),Al.copy(t).sub(e).normalize(),wr.copy(this.origin).sub(lf);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Al),f=wr.dot(this.direction),h=-wr.dot(Al),p=wr.lengthSq(),v=Math.abs(1-c*c);let S,g,y,M;if(v>0)if(S=c*h-f,g=c*f-h,M=l*v,S>=0)if(g>=-M)if(g<=M){const R=1/v;S*=R,g*=R,y=S*(S+c*g+2*f)+g*(c*S+g+2*h)+p}else g=l,S=Math.max(0,-(c*g+f)),y=-S*S+g*(g+2*h)+p;else g=-l,S=Math.max(0,-(c*g+f)),y=-S*S+g*(g+2*h)+p;else g<=-M?(S=Math.max(0,-(-c*l+f)),g=S>0?-l:Math.min(Math.max(-l,-h),l),y=-S*S+g*(g+2*h)+p):g<=M?(S=0,g=Math.min(Math.max(-l,-h),l),y=g*(g+2*h)+p):(S=Math.max(0,-(c*l+f)),g=S>0?l:Math.min(Math.max(-l,-h),l),y=-S*S+g*(g+2*h)+p);else g=c>0?-l:l,S=Math.max(0,-(c*g+f)),y=-S*S+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),a&&a.copy(lf).addScaledVector(Al,g),y}intersectSphere(e,t){qi.subVectors(e.center,this.origin);const r=qi.dot(this.direction),a=qi.dot(qi)-r*r,l=e.radius*e.radius;if(a>l)return null;const c=Math.sqrt(l-a),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,c,f,h;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,a=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,a=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,c=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,c=(e.min.y-g.y)*v),r>c||l>a||((l>r||isNaN(r))&&(r=l),(c<a||isNaN(a))&&(a=c),S>=0?(f=(e.min.z-g.z)*S,h=(e.max.z-g.z)*S):(f=(e.max.z-g.z)*S,h=(e.min.z-g.z)*S),r>h||f>a)||((f>r||r!==r)&&(r=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,qi)!==null}intersectTriangle(e,t,r,a,l){uf.subVectors(t,e),Cl.subVectors(r,e),cf.crossVectors(uf,Cl);let c=this.direction.dot(cf),f;if(c>0){if(a)return null;f=1}else if(c<0)f=-1,c=-c;else return null;wr.subVectors(this.origin,e);const h=f*this.direction.dot(Cl.crossVectors(wr,Cl));if(h<0)return null;const p=f*this.direction.dot(uf.cross(wr));if(p<0||h+p>c)return null;const v=-f*wr.dot(cf);return v<0?null:this.at(v/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Og extends la{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=pg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bm=new Gt,jr=new cx,Rl=new Pd,Lm=new Y,Pl=new Y,bl=new Y,Ll=new Y,ff=new Y,Dl=new Y,Dm=new Y,Nl=new Y;class an extends xn{constructor(e=new ni,t=new Og){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=a.length;l<c;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Dl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],S=l[h];v!==0&&(ff.fromBufferAttribute(S,e),c?Dl.addScaledVector(ff,v):Dl.addScaledVector(ff.sub(t),v))}t.add(Dl)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Rl.copy(r.boundingSphere),Rl.applyMatrix4(l),jr.copy(e.ray).recast(e.near),!(Rl.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Rl,Lm)===null||jr.origin.distanceToSquared(Lm)>(e.far-e.near)**2))&&(bm.copy(l).invert(),jr.copy(e.ray).applyMatrix4(bm),!(r.boundingBox!==null&&jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,S=l.attributes.normal,g=l.groups,y=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,R=g.length;M<R;M++){const x=g[M],_=c[x.materialIndex],C=Math.max(x.start,y.start),b=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let P=C,F=b;P<F;P+=3){const I=f.getX(P),B=f.getX(P+1),w=f.getX(P+2);a=Il(this,_,e,r,p,v,S,I,B,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),R=Math.min(f.count,y.start+y.count);for(let x=M,_=R;x<_;x+=3){const C=f.getX(x),b=f.getX(x+1),P=f.getX(x+2);a=Il(this,c,e,r,p,v,S,C,b,P),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,R=g.length;M<R;M++){const x=g[M],_=c[x.materialIndex],C=Math.max(x.start,y.start),b=Math.min(h.count,Math.min(x.start+x.count,y.start+y.count));for(let P=C,F=b;P<F;P+=3){const I=P,B=P+1,w=P+2;a=Il(this,_,e,r,p,v,S,I,B,w),a&&(a.faceIndex=Math.floor(P/3),a.face.materialIndex=x.materialIndex,t.push(a))}}else{const M=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let x=M,_=R;x<_;x+=3){const C=x,b=x+1,P=x+2;a=Il(this,c,e,r,p,v,S,C,b,P),a&&(a.faceIndex=Math.floor(x/3),t.push(a))}}}}function fx(s,e,t,r,a,l,c,f){let h;if(e.side===Un?h=r.intersectTriangle(c,l,a,!0,f):h=r.intersectTriangle(a,l,c,e.side===br,f),h===null)return null;Nl.copy(f),Nl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Nl);return p<t.near||p>t.far?null:{distance:p,point:Nl.clone(),object:s}}function Il(s,e,t,r,a,l,c,f,h,p){s.getVertexPosition(f,Pl),s.getVertexPosition(h,bl),s.getVertexPosition(p,Ll);const v=fx(s,e,t,r,Pl,bl,Ll,Dm);if(v){const S=new Y;hi.getBarycoord(Dm,Pl,bl,Ll,S),a&&(v.uv=hi.getInterpolatedAttribute(a,f,h,p,S,new Je)),l&&(v.uv1=hi.getInterpolatedAttribute(l,f,h,p,S,new Je)),c&&(v.normal=hi.getInterpolatedAttribute(c,f,h,p,S,new Y),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new Y,materialIndex:0};hi.getNormal(Pl,bl,Ll,g.normal),v.face=g,v.barycoord=S}return v}class dx extends An{constructor(e=null,t=1,r=1,a,l,c,f,h,p=fn,v=fn,S,g){super(null,c,f,h,p,v,a,l,S,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const df=new Y,hx=new Y,px=new ft;class Jr{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=df.subVectors(r,t).cross(hx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(df),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||px.getNormalMatrix(e),a=this.coplanarPoint(df).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new Pd,mx=new Je(.5,.5),Ul=new Y;class bd{constructor(e=new Jr,t=new Jr,r=new Jr,a=new Jr,l=new Jr,c=new Jr){this.planes=[e,t,r,a,l,c]}set(e,t,r,a,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(a),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=wi,r=!1){const a=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],v=l[4],S=l[5],g=l[6],y=l[7],M=l[8],R=l[9],x=l[10],_=l[11],C=l[12],b=l[13],P=l[14],F=l[15];if(a[0].setComponents(p-c,y-v,_-M,F-C).normalize(),a[1].setComponents(p+c,y+v,_+M,F+C).normalize(),a[2].setComponents(p+f,y+S,_+R,F+b).normalize(),a[3].setComponents(p-f,y-S,_-R,F-b).normalize(),r)a[4].setComponents(h,g,x,P).normalize(),a[5].setComponents(p-h,y-g,_-x,F-P).normalize();else if(a[4].setComponents(p-h,y-g,_-x,F-P).normalize(),t===wi)a[5].setComponents(p+h,y+g,_+x,F+P).normalize();else if(t===ta)a[5].setComponents(h,g,x,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const t=mx.distanceTo(e.center);return Zr.radius=.7071067811865476+t,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Ul.x=a.normal.x>0?e.max.x:e.min.x,Ul.y=a.normal.y>0?e.max.y:e.min.y,Ul.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Bg extends An{constructor(e=[],t=is,r,a,l,c,f,h,p,v){super(e,t,r,a,l,c,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ia extends An{constructor(e,t,r=Pi,a,l,c,f=fn,h=fn,p,v=Qi,S=1){if(v!==Qi&&v!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:S};super(g,a,l,c,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class gx extends ia{constructor(e,t=Pi,r=is,a,l,c=fn,f=fn,h,p=Qi){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,t,r,a,l,c,f,h,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kg extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ua extends ni{constructor(e=1,t=1,r=1,a=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:c};const f=this;a=Math.floor(a),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],v=[],S=[];let g=0,y=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,a,c,2),M("x","z","y",1,-1,e,r,-t,a,c,3),M("x","y","z",1,-1,e,t,r,a,l,4),M("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new ln(p,3)),this.setAttribute("normal",new ln(v,3)),this.setAttribute("uv",new ln(S,2));function M(R,x,_,C,b,P,F,I,B,w,L){const ae=P/B,O=F/w,J=P/2,Z=F/2,le=I/2,Q=B+1,ne=w+1;let W=0,K=0;const oe=new Y;for(let ue=0;ue<ne;ue++){const U=ue*O-Z;for(let q=0;q<Q;q++){const Ae=q*ae-J;oe[R]=Ae*C,oe[x]=U*b,oe[_]=le,p.push(oe.x,oe.y,oe.z),oe[R]=0,oe[x]=0,oe[_]=I>0?1:-1,v.push(oe.x,oe.y,oe.z),S.push(q/B),S.push(1-ue/w),W+=1}}for(let ue=0;ue<w;ue++)for(let U=0;U<B;U++){const q=g+U+Q*ue,Ae=g+U+Q*(ue+1),We=g+(U+1)+Q*(ue+1),Ke=g+(U+1)+Q*ue;h.push(q,Ae,Ke),h.push(Ae,We,Ke),K+=6}f.addGroup(y,K,L),y+=K,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ld extends ni{constructor(e=1,t=1,r=4,a=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:a,heightSegments:l},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),a=Math.max(3,Math.floor(a)),l=Math.max(1,Math.floor(l));const c=[],f=[],h=[],p=[],v=t/2,S=Math.PI/2*e,g=t,y=2*S+g,M=r*2+l,R=a+1,x=new Y,_=new Y;for(let C=0;C<=M;C++){let b=0,P=0,F=0,I=0;if(C<=r){const L=C/r,ae=L*Math.PI/2;P=-v-e*Math.cos(ae),F=e*Math.sin(ae),I=-e*Math.cos(ae),b=L*S}else if(C<=r+l){const L=(C-r)/l;P=-v+L*t,F=e,I=0,b=S+L*g}else{const L=(C-r-l)/r,ae=L*Math.PI/2;P=v+e*Math.sin(ae),F=e*Math.cos(ae),I=e*Math.sin(ae),b=S+g+L*S}const B=Math.max(0,Math.min(1,b/y));let w=0;C===0?w=.5/a:C===M&&(w=-.5/a);for(let L=0;L<=a;L++){const ae=L/a,O=ae*Math.PI*2,J=Math.sin(O),Z=Math.cos(O);_.x=-F*Z,_.y=P,_.z=F*J,f.push(_.x,_.y,_.z),x.set(-F*Z,I,F*J),x.normalize(),h.push(x.x,x.y,x.z),p.push(ae+w,B)}if(C>0){const L=(C-1)*R;for(let ae=0;ae<a;ae++){const O=L+ae,J=L+ae+1,Z=C*R+ae,le=C*R+ae+1;c.push(O,J,Z),c.push(J,le,Z)}}}this.setIndex(c),this.setAttribute("position",new ln(f,3)),this.setAttribute("normal",new ln(h,3)),this.setAttribute("uv",new ln(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ld(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Di{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,a=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(a),t.push(l),a=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let a=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(a=Math.floor(f+(h-f)/2),p=r[a]-c,p<0)f=a+1;else if(p>0)h=a-1;else{h=a;break}if(a=h,r[a]===c)return a/(l-1);const v=r[a],g=r[a+1]-v,y=(c-v)/g;return(a+y)/(l-1)}getTangent(e,t){let a=e-1e-4,l=e+1e-4;a<0&&(a=0),l>1&&(l=1);const c=this.getPoint(a),f=this.getPoint(l),h=t||(c.isVector2?new Je:new Y);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new Y,a=[],l=[],c=[],f=new Y,h=new Gt;for(let y=0;y<=e;y++){const M=y/e;a[y]=this.getTangentAt(M,new Y)}l[0]=new Y,c[0]=new Y;let p=Number.MAX_VALUE;const v=Math.abs(a[0].x),S=Math.abs(a[0].y),g=Math.abs(a[0].z);v<=p&&(p=v,r.set(1,0,0)),S<=p&&(p=S,r.set(0,1,0)),g<=p&&r.set(0,0,1),f.crossVectors(a[0],r).normalize(),l[0].crossVectors(a[0],f),c[0].crossVectors(a[0],l[0]);for(let y=1;y<=e;y++){if(l[y]=l[y-1].clone(),c[y]=c[y-1].clone(),f.crossVectors(a[y-1],a[y]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(mt(a[y-1].dot(a[y]),-1,1));l[y].applyMatrix4(h.makeRotationAxis(f,M))}c[y].crossVectors(a[y],l[y])}if(t===!0){let y=Math.acos(mt(l[0].dot(l[e]),-1,1));y/=e,a[0].dot(f.crossVectors(l[0],l[e]))>0&&(y=-y);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(a[M],y*M)),c[M].crossVectors(a[M],l[M])}return{tangents:a,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Dd extends Di{constructor(e=0,t=0,r=1,a=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=a,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Je){const r=t,a=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=a;for(;l>a;)l-=a;l<Number.EPSILON&&(c?l=0:l=a),this.aClockwise===!0&&!c&&(l===a?l=-a:l=l-a);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),S=Math.sin(this.aRotation),g=h-this.aX,y=p-this.aY;h=g*v-y*S+this.aX,p=g*S+y*v+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class vx extends Dd{constructor(e,t,r,a,l,c){super(e,t,r,r,a,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Nd(){let s=0,e=0,t=0,r=0;function a(l,c,f,h){s=l,e=f,t=-3*l+3*c-2*f-h,r=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,p){a(c,f,p*(f-l),p*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,p,v,S){let g=(c-l)/p-(f-l)/(p+v)+(f-c)/v,y=(f-c)/v-(h-c)/(v+S)+(h-f)/S;g*=v,y*=v,a(c,f,g,y)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const Fl=new Y,hf=new Nd,pf=new Nd,mf=new Nd;class _x extends Di{constructor(e=[],t=!1,r="centripetal",a=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=a}getPoint(e,t=new Y){const r=t,a=this.points,l=a.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,v;this.closed||f>0?p=a[(f-1)%l]:(Fl.subVectors(a[0],a[1]).add(a[0]),p=Fl);const S=a[f%l],g=a[(f+1)%l];if(this.closed||f+2<l?v=a[(f+2)%l]:(Fl.subVectors(a[l-1],a[l-2]).add(a[l-1]),v=Fl),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(S),y),R=Math.pow(S.distanceToSquared(g),y),x=Math.pow(g.distanceToSquared(v),y);R<1e-4&&(R=1),M<1e-4&&(M=R),x<1e-4&&(x=R),hf.initNonuniformCatmullRom(p.x,S.x,g.x,v.x,M,R,x),pf.initNonuniformCatmullRom(p.y,S.y,g.y,v.y,M,R,x),mf.initNonuniformCatmullRom(p.z,S.z,g.z,v.z,M,R,x)}else this.curveType==="catmullrom"&&(hf.initCatmullRom(p.x,S.x,g.x,v.x,this.tension),pf.initCatmullRom(p.y,S.y,g.y,v.y,this.tension),mf.initCatmullRom(p.z,S.z,g.z,v.z,this.tension));return r.set(hf.calc(h),pf.calc(h),mf.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Y().fromArray(a))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Nm(s,e,t,r,a){const l=(r-e)*.5,c=(a-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+c)*h+(-3*t+3*r-2*l-c)*f+l*s+t}function xx(s,e){const t=1-s;return t*t*e}function Sx(s,e){return 2*(1-s)*s*e}function yx(s,e){return s*s*e}function Ko(s,e,t,r){return xx(s,e)+Sx(s,t)+yx(s,r)}function Mx(s,e){const t=1-s;return t*t*t*e}function Ex(s,e){const t=1-s;return 3*t*t*s*e}function Tx(s,e){return 3*(1-s)*s*s*e}function wx(s,e){return s*s*s*e}function $o(s,e,t,r,a){return Mx(s,e)+Ex(s,t)+Tx(s,r)+wx(s,a)}class zg extends Di{constructor(e=new Je,t=new Je,r=new Je,a=new Je){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Je){const r=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set($o(e,a.x,l.x,c.x,f.x),$o(e,a.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ax extends Di{constructor(e=new Y,t=new Y,r=new Y,a=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=a}getPoint(e,t=new Y){const r=t,a=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set($o(e,a.x,l.x,c.x,f.x),$o(e,a.y,l.y,c.y,f.y),$o(e,a.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Vg extends Di{constructor(e=new Je,t=new Je){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Je){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Je){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Cx extends Di{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Hg extends Di{constructor(e=new Je,t=new Je,r=new Je){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Je){const r=t,a=this.v0,l=this.v1,c=this.v2;return r.set(Ko(e,a.x,l.x,c.x),Ko(e,a.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Rx extends Di{constructor(e=new Y,t=new Y,r=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Y){const r=t,a=this.v0,l=this.v1,c=this.v2;return r.set(Ko(e,a.x,l.x,c.x),Ko(e,a.y,l.y,c.y),Ko(e,a.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Gg extends Di{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Je){const r=t,a=this.points,l=(a.length-1)*e,c=Math.floor(l),f=l-c,h=a[c===0?c:c-1],p=a[c],v=a[c>a.length-2?a.length-1:c+1],S=a[c>a.length-3?a.length-1:c+2];return r.set(Nm(f,h.x,p.x,v.x,S.x),Nm(f,h.y,p.y,v.y,S.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const a=this.points[t];e.points.push(a.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const a=e.points[t];this.points.push(new Je().fromArray(a))}return this}}var Im=Object.freeze({__proto__:null,ArcCurve:vx,CatmullRomCurve3:_x,CubicBezierCurve:zg,CubicBezierCurve3:Ax,EllipseCurve:Dd,LineCurve:Vg,LineCurve3:Cx,QuadraticBezierCurve:Hg,QuadraticBezierCurve3:Rx,SplineCurve:Gg});class Px extends Di{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Im[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),a=this.getCurveLengths();let l=0;for(;l<a.length;){if(a[l]>=r){const c=a[l]-r,f=this.curves[l],h=f.getLength(),p=h===0?0:1-c/h;return f.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,a=this.curves.length;r<a;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let a=0,l=this.curves;a<l.length;a++){const c=l[a],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(f);for(let p=0;p<h.length;p++){const v=h[p];r&&r.equals(v)||(t.push(v),r=v)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const a=e.curves[t];this.curves.push(a.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const a=this.curves[t];e.curves.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const a=e.curves[t];this.curves.push(new Im[a.type]().fromJSON(a))}return this}}class Um extends Px{constructor(e){super(),this.type="Path",this.currentPoint=new Je,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new Vg(this.currentPoint.clone(),new Je(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,a){const l=new Hg(this.currentPoint.clone(),new Je(e,t),new Je(r,a));return this.curves.push(l),this.currentPoint.set(r,a),this}bezierCurveTo(e,t,r,a,l,c){const f=new zg(this.currentPoint.clone(),new Je(e,t),new Je(r,a),new Je(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new Gg(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,a,l,c){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,r,a,l,c),this}absarc(e,t,r,a,l,c){return this.absellipse(e,t,r,r,a,l,c),this}ellipse(e,t,r,a,l,c,f,h){const p=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+p,t+v,r,a,l,c,f,h),this}absellipse(e,t,r,a,l,c,f,h){const p=new Dd(e,t,r,a,l,c,f,h);if(this.curves.length>0){const S=p.getPoint(0);S.equals(this.currentPoint)||this.lineTo(S.x,S.y)}this.curves.push(p);const v=p.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Wg extends Um{constructor(e){super(e),this.uuid=ss(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,a=this.holes.length;r<a;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const a=e.holes[t];this.holes.push(a.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const a=this.holes[t];e.holes.push(a.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const a=e.holes[t];this.holes.push(new Um().fromJSON(a))}return this}}function bx(s,e,t=2){const r=e&&e.length,a=r?e[0]*t:s.length;let l=Xg(s,0,a,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,h,p;if(r&&(l=Ux(s,e,l,t)),s.length>80*t){f=s[0],h=s[1];let v=f,S=h;for(let g=t;g<a;g+=t){const y=s[g],M=s[g+1];y<f&&(f=y),M<h&&(h=M),y>v&&(v=y),M>S&&(S=M)}p=Math.max(v-f,S-h),p=p!==0?32767/p:0}return ra(l,c,t,f,h,p,0),c}function Xg(s,e,t,r,a){let l;if(a===Yx(s,e,t,r)>0)for(let c=e;c<t;c+=r)l=Fm(c/r|0,s[c],s[c+1],l);else for(let c=t-r;c>=e;c-=r)l=Fm(c/r|0,s[c],s[c+1],l);return l&&Js(l,l.next)&&(oa(l),l=l.next),l}function rs(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(Js(t,t.next)||Ht(t.prev,t,t.next)===0)){if(oa(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function ra(s,e,t,r,a,l,c){if(!s)return;!c&&l&&zx(s,r,a,l);let f=s;for(;s.prev!==s.next;){const h=s.prev,p=s.next;if(l?Dx(s,r,a,l):Lx(s)){e.push(h.i,s.i,p.i),oa(s),s=p.next,f=p.next;continue}if(s=p,s===f){c?c===1?(s=Nx(rs(s),e),ra(s,e,t,r,a,l,2)):c===2&&Ix(s,e,t,r,a,l):ra(rs(s),e,t,r,a,l,1);break}}}function Lx(s){const e=s.prev,t=s,r=s.next;if(Ht(e,t,r)>=0)return!1;const a=e.x,l=t.x,c=r.x,f=e.y,h=t.y,p=r.y,v=Math.min(a,l,c),S=Math.min(f,h,p),g=Math.max(a,l,c),y=Math.max(f,h,p);let M=r.next;for(;M!==e;){if(M.x>=v&&M.x<=g&&M.y>=S&&M.y<=y&&Xo(a,f,l,h,c,p,M.x,M.y)&&Ht(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function Dx(s,e,t,r){const a=s.prev,l=s,c=s.next;if(Ht(a,l,c)>=0)return!1;const f=a.x,h=l.x,p=c.x,v=a.y,S=l.y,g=c.y,y=Math.min(f,h,p),M=Math.min(v,S,g),R=Math.max(f,h,p),x=Math.max(v,S,g),_=hd(y,M,e,t,r),C=hd(R,x,e,t,r);let b=s.prevZ,P=s.nextZ;for(;b&&b.z>=_&&P&&P.z<=C;){if(b.x>=y&&b.x<=R&&b.y>=M&&b.y<=x&&b!==a&&b!==c&&Xo(f,v,h,S,p,g,b.x,b.y)&&Ht(b.prev,b,b.next)>=0||(b=b.prevZ,P.x>=y&&P.x<=R&&P.y>=M&&P.y<=x&&P!==a&&P!==c&&Xo(f,v,h,S,p,g,P.x,P.y)&&Ht(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;b&&b.z>=_;){if(b.x>=y&&b.x<=R&&b.y>=M&&b.y<=x&&b!==a&&b!==c&&Xo(f,v,h,S,p,g,b.x,b.y)&&Ht(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;P&&P.z<=C;){if(P.x>=y&&P.x<=R&&P.y>=M&&P.y<=x&&P!==a&&P!==c&&Xo(f,v,h,S,p,g,P.x,P.y)&&Ht(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function Nx(s,e){let t=s;do{const r=t.prev,a=t.next.next;!Js(r,a)&&qg(r,t,t.next,a)&&sa(r,a)&&sa(a,r)&&(e.push(r.i,t.i,a.i),oa(t),oa(t.next),t=s=a),t=t.next}while(t!==s);return rs(t)}function Ix(s,e,t,r,a,l){let c=s;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&Gx(c,f)){let h=jg(c,f);c=rs(c,c.next),h=rs(h,h.next),ra(c,e,t,r,a,l,0),ra(h,e,t,r,a,l,0);return}f=f.next}c=c.next}while(c!==s)}function Ux(s,e,t,r){const a=[];for(let l=0,c=e.length;l<c;l++){const f=e[l]*r,h=l<c-1?e[l+1]*r:s.length,p=Xg(s,f,h,r,!1);p===p.next&&(p.steiner=!0),a.push(Hx(p))}a.sort(Fx);for(let l=0;l<a.length;l++)t=Ox(a[l],t);return t}function Fx(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),a=(e.next.y-e.y)/(e.next.x-e.x);t=r-a}return t}function Ox(s,e){const t=Bx(s,e);if(!t)return e;const r=jg(t,s);return rs(r,r.next),rs(t,t.next)}function Bx(s,e){let t=e;const r=s.x,a=s.y;let l=-1/0,c;if(Js(s,t))return t;do{if(Js(s,t.next))return t.next;if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const S=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(S<=r&&S>l&&(l=S,c=t.x<t.next.x?t:t.next,S===r))return c}t=t.next}while(t!==e);if(!c)return null;const f=c,h=c.x,p=c.y;let v=1/0;t=c;do{if(r>=t.x&&t.x>=h&&r!==t.x&&Yg(a<p?r:l,a,h,p,a<p?l:r,a,t.x,t.y)){const S=Math.abs(a-t.y)/(r-t.x);sa(t,s)&&(S<v||S===v&&(t.x>c.x||t.x===c.x&&kx(c,t)))&&(c=t,v=S)}t=t.next}while(t!==f);return c}function kx(s,e){return Ht(s.prev,s,e.prev)<0&&Ht(e.next,s,s.next)<0}function zx(s,e,t,r){let a=s;do a.z===0&&(a.z=hd(a.x,a.y,e,t,r)),a.prevZ=a.prev,a.nextZ=a.next,a=a.next;while(a!==s);a.prevZ.nextZ=null,a.prevZ=null,Vx(a)}function Vx(s){let e,t=1;do{let r=s,a;s=null;let l=null;for(e=0;r;){e++;let c=r,f=0;for(let p=0;p<t&&(f++,c=c.nextZ,!!c);p++);let h=t;for(;f>0||h>0&&c;)f!==0&&(h===0||!c||r.z<=c.z)?(a=r,r=r.nextZ,f--):(a=c,c=c.nextZ,h--),l?l.nextZ=a:s=a,a.prevZ=l,l=a;r=c}l.nextZ=null,t*=2}while(e>1);return s}function hd(s,e,t,r,a){return s=(s-t)*a|0,e=(e-r)*a|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Hx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Yg(s,e,t,r,a,l,c,f){return(a-c)*(e-f)>=(s-c)*(l-f)&&(s-c)*(r-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(a-c)*(r-f)}function Xo(s,e,t,r,a,l,c,f){return!(s===c&&e===f)&&Yg(s,e,t,r,a,l,c,f)}function Gx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Wx(s,e)&&(sa(s,e)&&sa(e,s)&&Xx(s,e)&&(Ht(s.prev,s,e.prev)||Ht(s,e.prev,e))||Js(s,e)&&Ht(s.prev,s,s.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Js(s,e){return s.x===e.x&&s.y===e.y}function qg(s,e,t,r){const a=Bl(Ht(s,e,t)),l=Bl(Ht(s,e,r)),c=Bl(Ht(t,r,s)),f=Bl(Ht(t,r,e));return!!(a!==l&&c!==f||a===0&&Ol(s,t,e)||l===0&&Ol(s,r,e)||c===0&&Ol(t,s,r)||f===0&&Ol(t,e,r))}function Ol(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Bl(s){return s>0?1:s<0?-1:0}function Wx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&qg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function sa(s,e){return Ht(s.prev,s,s.next)<0?Ht(s,e,s.next)>=0&&Ht(s,s.prev,e)>=0:Ht(s,e,s.prev)<0||Ht(s,s.next,e)<0}function Xx(s,e){let t=s,r=!1;const a=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&a<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function jg(s,e){const t=pd(s.i,s.x,s.y),r=pd(e.i,e.x,e.y),a=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=a,a.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Fm(s,e,t,r){const a=pd(s,e,t);return r?(a.next=r.next,a.prev=r,r.next.prev=a,r.next=a):(a.prev=a,a.next=a),a}function oa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function pd(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Yx(s,e,t,r){let a=0;for(let l=e,c=t-r;l<t;l+=r)a+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return a}class qx{static triangulate(e,t,r=2){return bx(e,t,r)}}class Jo{static area(e){const t=e.length;let r=0;for(let a=t-1,l=0;l<t;a=l++)r+=e[a].x*e[l].y-e[l].x*e[a].y;return r*.5}static isClockWise(e){return Jo.area(e)<0}static triangulateShape(e,t){const r=[],a=[],l=[];Om(e),Bm(r,e);let c=e.length;t.forEach(Om);for(let h=0;h<t.length;h++)a.push(c),c+=t[h].length,Bm(r,t[h]);const f=qx.triangulate(r,a);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function Om(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Bm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class eu extends ni{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(a),p=f+1,v=h+1,S=e/f,g=t/h,y=[],M=[],R=[],x=[];for(let _=0;_<v;_++){const C=_*g-c;for(let b=0;b<p;b++){const P=b*S-l;M.push(P,-C,0),R.push(0,0,1),x.push(b/f),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let C=0;C<f;C++){const b=C+p*_,P=C+p*(_+1),F=C+1+p*(_+1),I=C+1+p*_;y.push(b,P,I),y.push(P,F,I)}this.setIndex(y),this.setAttribute("position",new ln(M,3)),this.setAttribute("normal",new ln(R,3)),this.setAttribute("uv",new ln(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Id extends ni{constructor(e=new Wg([new Je(0,.5),new Je(-.5,-.5),new Je(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],a=[],l=[],c=[];let f=0,h=0;if(Array.isArray(e)===!1)p(e);else for(let v=0;v<e.length;v++)p(e[v]),this.addGroup(f,h,v),f+=h,h=0;this.setIndex(r),this.setAttribute("position",new ln(a,3)),this.setAttribute("normal",new ln(l,3)),this.setAttribute("uv",new ln(c,2));function p(v){const S=a.length/3,g=v.extractPoints(t);let y=g.shape;const M=g.holes;Jo.isClockWise(y)===!1&&(y=y.reverse());for(let x=0,_=M.length;x<_;x++){const C=M[x];Jo.isClockWise(C)===!0&&(M[x]=C.reverse())}const R=Jo.triangulateShape(y,M);for(let x=0,_=M.length;x<_;x++){const C=M[x];y=y.concat(C)}for(let x=0,_=y.length;x<_;x++){const C=y[x];a.push(C.x,C.y,0),l.push(0,0,1),c.push(C.x,C.y)}for(let x=0,_=R.length;x<_;x++){const C=R[x],b=C[0]+S,P=C[1]+S,F=C[2]+S;r.push(b,P,F),h+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return jx(t,e)}static fromJSON(e,t){const r=[];for(let a=0,l=e.shapes.length;a<l;a++){const c=t[e.shapes[a]];r.push(c)}return new Id(r,e.curveSegments)}}function jx(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,r=s.length;t<r;t++){const a=s[t];e.shapes.push(a.uuid)}else e.shapes.push(s.uuid);return e}class ji extends ni{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+f,Math.PI);let p=0;const v=[],S=new Y,g=new Y,y=[],M=[],R=[],x=[];for(let _=0;_<=r;_++){const C=[],b=_/r;let P=0;_===0&&c===0?P=.5/t:_===r&&h===Math.PI&&(P=-.5/t);for(let F=0;F<=t;F++){const I=F/t;S.x=-e*Math.cos(a+I*l)*Math.sin(c+b*f),S.y=e*Math.cos(c+b*f),S.z=e*Math.sin(a+I*l)*Math.sin(c+b*f),M.push(S.x,S.y,S.z),g.copy(S).normalize(),R.push(g.x,g.y,g.z),x.push(I+P,1-b),C.push(p++)}v.push(C)}for(let _=0;_<r;_++)for(let C=0;C<t;C++){const b=v[_][C+1],P=v[_][C],F=v[_+1][C],I=v[_+1][C+1];(_!==0||c>0)&&y.push(b,P,I),(_!==r-1||h<Math.PI)&&y.push(P,F,I)}this.setIndex(y),this.setAttribute("position",new ln(M,3)),this.setAttribute("normal",new ln(R,3)),this.setAttribute("uv",new ln(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Qs(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function wn(s){const e={};for(let t=0;t<s.length;t++){const r=Qs(s[t]);for(const a in r)e[a]=r[a]}return e}function Zx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Zg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const Kx={clone:Qs,merge:wn};var $x=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Li extends la{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$x,this.fragmentShader=Jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=Zx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Qx extends Li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ar extends la{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bg,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class eS extends la{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=v_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tS extends la{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Kg extends xn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const gf=new Gt,km=new Y,zm=new Y;class nS{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Gn,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bd,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;km.setFromMatrixPosition(e.matrixWorld),t.position.copy(km),zm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(zm),t.updateMatrixWorld(),gf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ta||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(gf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const kl=new Y,zl=new to,Si=new Y;class $g extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kl,zl,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,zl,Si.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(kl,zl,Si),Si.x===1&&Si.y===1&&Si.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kl,zl,Si.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new Y,Vm=new Je,Hm=new Je;class ti extends $g{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=na*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return na*2*Math.atan(Math.tan(jo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,t){return this.getViewBounds(e,Vm,Hm),t.subVectors(Hm,Vm)}setViewOffset(e,t,r,a,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jo*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*a/h,t-=c.offsetY*r/p,a*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ud extends $g{constructor(e=-1,t=1,r=1,a=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class iS extends nS{constructor(){super(new Ud(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gm extends Kg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new iS}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class rS extends Kg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Vs=-90,Hs=1;class sS extends xn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new ti(Vs,Hs,e,t);a.layers=this.layers,this.add(a);const l=new ti(Vs,Hs,e,t);l.layers=this.layers,this.add(l);const c=new ti(Vs,Hs,e,t);c.layers=this.layers,this.add(c);const f=new ti(Vs,Hs,e,t);f.layers=this.layers,this.add(f);const h=new ti(Vs,Hs,e,t);h.layers=this.layers,this.add(h);const p=new ti(Vs,Hs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===wi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ta)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,v]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,a),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(S,g,y),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class oS extends ti{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Wm(s,e,t,r){const a=aS(r);switch(t){case Cg:return s*e;case Pg:return s*e/a.components*a.byteLength;case Md:return s*e/a.components*a.byteLength;case Ks:return s*e*2/a.components*a.byteLength;case Ed:return s*e*2/a.components*a.byteLength;case Rg:return s*e*3/a.components*a.byteLength;case pi:return s*e*4/a.components*a.byteLength;case Td:return s*e*4/a.components*a.byteLength;case Xl:case Yl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ql:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ff:case Bf:return Math.max(s,16)*Math.max(e,8)/4;case Uf:case Of:return Math.max(s,8)*Math.max(e,8)/2;case kf:case zf:case Hf:case Gf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vf:case Wf:case Xf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case qf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case jf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Zf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Kf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case $f:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Qf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ed:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case td:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case nd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case id:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case rd:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case sd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case od:case ad:case ld:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ud:case cd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case fd:case dd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function aS(s){switch(s){case Gn:case Eg:return{byteLength:1,components:1};case Qo:case Tg:case Ji:return{byteLength:2,components:1};case Sd:case yd:return{byteLength:2,components:4};case Pi:case xd:case Ti:return{byteLength:4,components:1};case wg:case Ag:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_d}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_d);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Jg(){let s=null,e=!1,t=null,r=null;function a(l,c){t(l,c),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function lS(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,S=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,v),f.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,p){const v=h.array,S=h.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,v);else{S.sort((y,M)=>y.start-M.start);let g=0;for(let y=1;y<S.length;y++){const M=S[g],R=S[y];R.start<=M.start+M.count+1?M.count=Math.max(M.count,R.start+R.count-M.start):(++g,S[g]=R)}S.length=g+1;for(let y=0,M=S.length;y<M;y++){const R=S[y];s.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:a,remove:l,update:c}}var uS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cS=`#ifdef USE_ALPHAHASH
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
#endif`,fS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mS=`#ifdef USE_AOMAP
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
#endif`,gS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vS=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_S=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,SS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MS=`#ifdef USE_IRIDESCENCE
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
#endif`,ES=`#ifdef USE_BUMPMAP
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
#endif`,TS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,CS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,RS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,PS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,bS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,LS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,DS=`#define PI 3.141592653589793
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
} // validated`,NS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,IS=`vec3 transformedNormal = objectNormal;
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
#endif`,US=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,FS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,OS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kS="gl_FragColor = linearToOutputTexel( gl_FragColor );",zS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,VS=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,HS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,GS=`#ifdef USE_ENVMAP
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
#endif`,WS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,XS=`#ifdef USE_ENVMAP
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
#endif`,YS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,KS=`#ifdef USE_GRADIENTMAP
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
}`,$S=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,QS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ey=`uniform bool receiveShadow;
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
#endif`,ty=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,ny=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ry=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,ay=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ly=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,uy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,py=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,my=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_y=`#if defined( USE_POINTS_UV )
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
#endif`,xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Sy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,My=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ey=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ty=`#ifdef USE_MORPHTARGETS
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
#endif`,wy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Py=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ly=`#ifdef USE_NORMALMAP
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
#endif`,Dy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ny=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Iy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Uy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Oy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,By=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ky=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Hy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qy=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,jy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Zy=`#ifdef USE_SKINNING
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
#endif`,Ky=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,Jy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tM=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nM=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iM=`#ifdef USE_TRANSMISSION
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
#endif`,rM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,oM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,aM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,uM=`uniform sampler2D t2D;
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
}`,cM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pM=`#include <common>
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
}`,mM=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,gM=`#define DISTANCE
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
}`,vM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,_M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SM=`uniform float scale;
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
}`,yM=`uniform vec3 diffuse;
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
}`,MM=`#include <common>
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
}`,EM=`uniform vec3 diffuse;
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
}`,TM=`#define LAMBERT
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
}`,wM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,AM=`#define MATCAP
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
}`,CM=`#define MATCAP
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
}`,RM=`#define NORMAL
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
}`,PM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bM=`#define PHONG
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
}`,LM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,DM=`#define STANDARD
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
}`,NM=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,IM=`#define TOON
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
}`,UM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,FM=`uniform float size;
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
}`,OM=`uniform vec3 diffuse;
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
}`,BM=`#include <common>
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
}`,kM=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,zM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,VM=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:uS,alphahash_pars_fragment:cS,alphamap_fragment:fS,alphamap_pars_fragment:dS,alphatest_fragment:hS,alphatest_pars_fragment:pS,aomap_fragment:mS,aomap_pars_fragment:gS,batching_pars_vertex:vS,batching_vertex:_S,begin_vertex:xS,beginnormal_vertex:SS,bsdfs:yS,iridescence_fragment:MS,bumpmap_pars_fragment:ES,clipping_planes_fragment:TS,clipping_planes_pars_fragment:wS,clipping_planes_pars_vertex:AS,clipping_planes_vertex:CS,color_fragment:RS,color_pars_fragment:PS,color_pars_vertex:bS,color_vertex:LS,common:DS,cube_uv_reflection_fragment:NS,defaultnormal_vertex:IS,displacementmap_pars_vertex:US,displacementmap_vertex:FS,emissivemap_fragment:OS,emissivemap_pars_fragment:BS,colorspace_fragment:kS,colorspace_pars_fragment:zS,envmap_fragment:VS,envmap_common_pars_fragment:HS,envmap_pars_fragment:GS,envmap_pars_vertex:WS,envmap_physical_pars_fragment:ty,envmap_vertex:XS,fog_vertex:YS,fog_pars_vertex:qS,fog_fragment:jS,fog_pars_fragment:ZS,gradientmap_pars_fragment:KS,lightmap_pars_fragment:$S,lights_lambert_fragment:JS,lights_lambert_pars_fragment:QS,lights_pars_begin:ey,lights_toon_fragment:ny,lights_toon_pars_fragment:iy,lights_phong_fragment:ry,lights_phong_pars_fragment:sy,lights_physical_fragment:oy,lights_physical_pars_fragment:ay,lights_fragment_begin:ly,lights_fragment_maps:uy,lights_fragment_end:cy,logdepthbuf_fragment:fy,logdepthbuf_pars_fragment:dy,logdepthbuf_pars_vertex:hy,logdepthbuf_vertex:py,map_fragment:my,map_pars_fragment:gy,map_particle_fragment:vy,map_particle_pars_fragment:_y,metalnessmap_fragment:xy,metalnessmap_pars_fragment:Sy,morphinstance_vertex:yy,morphcolor_vertex:My,morphnormal_vertex:Ey,morphtarget_pars_vertex:Ty,morphtarget_vertex:wy,normal_fragment_begin:Ay,normal_fragment_maps:Cy,normal_pars_fragment:Ry,normal_pars_vertex:Py,normal_vertex:by,normalmap_pars_fragment:Ly,clearcoat_normal_fragment_begin:Dy,clearcoat_normal_fragment_maps:Ny,clearcoat_pars_fragment:Iy,iridescence_pars_fragment:Uy,opaque_fragment:Fy,packing:Oy,premultiplied_alpha_fragment:By,project_vertex:ky,dithering_fragment:zy,dithering_pars_fragment:Vy,roughnessmap_fragment:Hy,roughnessmap_pars_fragment:Gy,shadowmap_pars_fragment:Wy,shadowmap_pars_vertex:Xy,shadowmap_vertex:Yy,shadowmask_pars_fragment:qy,skinbase_vertex:jy,skinning_pars_vertex:Zy,skinning_vertex:Ky,skinnormal_vertex:$y,specularmap_fragment:Jy,specularmap_pars_fragment:Qy,tonemapping_fragment:eM,tonemapping_pars_fragment:tM,transmission_fragment:nM,transmission_pars_fragment:iM,uv_pars_fragment:rM,uv_pars_vertex:sM,uv_vertex:oM,worldpos_vertex:aM,background_vert:lM,background_frag:uM,backgroundCube_vert:cM,backgroundCube_frag:fM,cube_vert:dM,cube_frag:hM,depth_vert:pM,depth_frag:mM,distance_vert:gM,distance_frag:vM,equirect_vert:_M,equirect_frag:xM,linedashed_vert:SM,linedashed_frag:yM,meshbasic_vert:MM,meshbasic_frag:EM,meshlambert_vert:TM,meshlambert_frag:wM,meshmatcap_vert:AM,meshmatcap_frag:CM,meshnormal_vert:RM,meshnormal_frag:PM,meshphong_vert:bM,meshphong_frag:LM,meshphysical_vert:DM,meshphysical_frag:NM,meshtoon_vert:IM,meshtoon_frag:UM,points_vert:FM,points_frag:OM,shadow_vert:BM,shadow_frag:kM,sprite_vert:zM,sprite_frag:VM},Pe={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Mi={basic:{uniforms:wn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:wn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:wn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:wn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:wn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Ct(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:wn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:wn([Pe.points,Pe.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:wn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:wn([Pe.common,Pe.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:wn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:wn([Pe.sprite,Pe.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:wn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:wn([Pe.lights,Pe.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Mi.physical={uniforms:wn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Vl={r:0,b:0,g:0},Kr=new bi,HM=new Gt;function GM(s,e,t,r,a,l){const c=new Ct(0);let f=a===!0?0:1,h,p,v=null,S=0,g=null;function y(C){let b=C.isScene===!0?C.background:null;if(b&&b.isTexture){const P=C.backgroundBlurriness>0;b=e.get(b,P)}return b}function M(C){let b=!1;const P=y(C);P===null?x(c,f):P&&P.isColor&&(x(P,1),b=!0);const F=s.xr.getEnvironmentBlendMode();F==="additive"?t.buffers.color.setClear(0,0,0,1,l):F==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function R(C,b){const P=y(b);P&&(P.isCubeTexture||P.mapping===Ql)?(p===void 0&&(p=new an(new ua(1,1,1),new Li({name:"BackgroundCubeMaterial",uniforms:Qs(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Un,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(F,I,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Kr.copy(b.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),p.material.uniforms.envMap.value=P,p.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(HM.makeRotationFromEuler(Kr)),p.material.toneMapped=Et.getTransfer(P.colorSpace)!==Lt,(v!==P||S!==P.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=P,S=P.version,g=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new an(new eu(2,2),new Li({name:"BackgroundMaterial",uniforms:Qs(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=Et.getTransfer(P.colorSpace)!==Lt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||S!==P.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=P,S=P.version,g=s.toneMapping),h.layers.enableAll(),C.unshift(h,h.geometry,h.material,0,0,null))}function x(C,b){C.getRGB(Vl,Zg(s)),t.buffers.color.setClear(Vl.r,Vl.g,Vl.b,b,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(C,b=1){c.set(C),f=b,x(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(C){f=C,x(c,f)},render:M,addToRenderList:R,dispose:_}}function WM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=g(null);let l=a,c=!1;function f(O,J,Z,le,Q){let ne=!1;const W=S(O,le,Z,J);l!==W&&(l=W,p(l.object)),ne=y(O,le,Z,Q),ne&&M(O,le,Z,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(ne||c)&&(c=!1,P(O,J,Z,le),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function h(){return s.createVertexArray()}function p(O){return s.bindVertexArray(O)}function v(O){return s.deleteVertexArray(O)}function S(O,J,Z,le){const Q=le.wireframe===!0;let ne=r[J.id];ne===void 0&&(ne={},r[J.id]=ne);const W=O.isInstancedMesh===!0?O.id:0;let K=ne[W];K===void 0&&(K={},ne[W]=K);let oe=K[Z.id];oe===void 0&&(oe={},K[Z.id]=oe);let ue=oe[Q];return ue===void 0&&(ue=g(h()),oe[Q]=ue),ue}function g(O){const J=[],Z=[],le=[];for(let Q=0;Q<t;Q++)J[Q]=0,Z[Q]=0,le[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:Z,attributeDivisors:le,object:O,attributes:{},index:null}}function y(O,J,Z,le){const Q=l.attributes,ne=J.attributes;let W=0;const K=Z.getAttributes();for(const oe in K)if(K[oe].location>=0){const U=Q[oe];let q=ne[oe];if(q===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(q=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(q=O.instanceColor)),U===void 0||U.attribute!==q||q&&U.data!==q.data)return!0;W++}return l.attributesNum!==W||l.index!==le}function M(O,J,Z,le){const Q={},ne=J.attributes;let W=0;const K=Z.getAttributes();for(const oe in K)if(K[oe].location>=0){let U=ne[oe];U===void 0&&(oe==="instanceMatrix"&&O.instanceMatrix&&(U=O.instanceMatrix),oe==="instanceColor"&&O.instanceColor&&(U=O.instanceColor));const q={};q.attribute=U,U&&U.data&&(q.data=U.data),Q[oe]=q,W++}l.attributes=Q,l.attributesNum=W,l.index=le}function R(){const O=l.newAttributes;for(let J=0,Z=O.length;J<Z;J++)O[J]=0}function x(O){_(O,0)}function _(O,J){const Z=l.newAttributes,le=l.enabledAttributes,Q=l.attributeDivisors;Z[O]=1,le[O]===0&&(s.enableVertexAttribArray(O),le[O]=1),Q[O]!==J&&(s.vertexAttribDivisor(O,J),Q[O]=J)}function C(){const O=l.newAttributes,J=l.enabledAttributes;for(let Z=0,le=J.length;Z<le;Z++)J[Z]!==O[Z]&&(s.disableVertexAttribArray(Z),J[Z]=0)}function b(O,J,Z,le,Q,ne,W){W===!0?s.vertexAttribIPointer(O,J,Z,Q,ne):s.vertexAttribPointer(O,J,Z,le,Q,ne)}function P(O,J,Z,le){R();const Q=le.attributes,ne=Z.getAttributes(),W=J.defaultAttributeValues;for(const K in ne){const oe=ne[K];if(oe.location>=0){let ue=Q[K];if(ue===void 0&&(K==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),K==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor)),ue!==void 0){const U=ue.normalized,q=ue.itemSize,Ae=e.get(ue);if(Ae===void 0)continue;const We=Ae.buffer,Ke=Ae.type,ie=Ae.bytesPerElement,pe=Ke===s.INT||Ke===s.UNSIGNED_INT||ue.gpuType===xd;if(ue.isInterleavedBufferAttribute){const he=ue.data,Ue=he.stride,Ve=ue.offset;if(he.isInstancedInterleavedBuffer){for(let nt=0;nt<oe.locationSize;nt++)_(oe.location+nt,he.meshPerAttribute);O.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let nt=0;nt<oe.locationSize;nt++)x(oe.location+nt);s.bindBuffer(s.ARRAY_BUFFER,We);for(let nt=0;nt<oe.locationSize;nt++)b(oe.location+nt,q/oe.locationSize,Ke,U,Ue*ie,(Ve+q/oe.locationSize*nt)*ie,pe)}else{if(ue.isInstancedBufferAttribute){for(let he=0;he<oe.locationSize;he++)_(oe.location+he,ue.meshPerAttribute);O.isInstancedMesh!==!0&&le._maxInstanceCount===void 0&&(le._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let he=0;he<oe.locationSize;he++)x(oe.location+he);s.bindBuffer(s.ARRAY_BUFFER,We);for(let he=0;he<oe.locationSize;he++)b(oe.location+he,q/oe.locationSize,Ke,U,q*ie,q/oe.locationSize*he*ie,pe)}}else if(W!==void 0){const U=W[K];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(oe.location,U);break;case 3:s.vertexAttrib3fv(oe.location,U);break;case 4:s.vertexAttrib4fv(oe.location,U);break;default:s.vertexAttrib1fv(oe.location,U)}}}}C()}function F(){L();for(const O in r){const J=r[O];for(const Z in J){const le=J[Z];for(const Q in le){const ne=le[Q];for(const W in ne)v(ne[W].object),delete ne[W];delete le[Q]}}delete r[O]}}function I(O){if(r[O.id]===void 0)return;const J=r[O.id];for(const Z in J){const le=J[Z];for(const Q in le){const ne=le[Q];for(const W in ne)v(ne[W].object),delete ne[W];delete le[Q]}}delete r[O.id]}function B(O){for(const J in r){const Z=r[J];for(const le in Z){const Q=Z[le];if(Q[O.id]===void 0)continue;const ne=Q[O.id];for(const W in ne)v(ne[W].object),delete ne[W];delete Q[O.id]}}}function w(O){for(const J in r){const Z=r[J],le=O.isInstancedMesh===!0?O.id:0,Q=Z[le];if(Q!==void 0){for(const ne in Q){const W=Q[ne];for(const K in W)v(W[K].object),delete W[K];delete Q[ne]}delete Z[le],Object.keys(Z).length===0&&delete r[J]}}}function L(){ae(),c=!0,l!==a&&(l=a,p(l.object))}function ae(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:L,resetDefaultState:ae,dispose:F,releaseStatesOfGeometry:I,releaseStatesOfObject:w,releaseStatesOfProgram:B,initAttributes:R,enableAttribute:x,disableUnusedAttributes:C}}function XM(s,e,t){let r;function a(p){r=p}function l(p,v){s.drawArrays(r,p,v),t.update(v,r,1)}function c(p,v,S){S!==0&&(s.drawArraysInstanced(r,p,v,S),t.update(v,r,S))}function f(p,v,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,S);let y=0;for(let M=0;M<S;M++)y+=v[M];t.update(y,r,1)}function h(p,v,S,g){if(S===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let M=0;M<p.length;M++)c(p[M],v[M],g[M]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,v,0,g,0,S);let M=0;for(let R=0;R<S;R++)M+=v[R]*g[R];t.update(M,r,1)}}this.setMode=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function YM(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(B){return!(B!==pi&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(B){const w=B===Ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==Gn&&r.convert(B)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==Ti&&!w)}function h(B){if(B==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(at("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),F=s.getParameter(s.MAX_SAMPLES),I=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:y,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:C,maxVaryings:b,maxFragmentUniforms:P,maxSamples:F,samples:I}}function qM(s){const e=this;let t=null,r=0,a=!1,l=!1;const c=new Jr,f=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const y=S.length!==0||g||r!==0||a;return a=g,r=S.length,y},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){t=v(S,g,0)},this.setState=function(S,g,y){const M=S.clippingPlanes,R=S.clipIntersection,x=S.clipShadows,_=s.get(S);if(!a||M===null||M.length===0||l&&!x)l?v(null):p();else{const C=l?0:r,b=C*4;let P=_.clippingState||null;h.value=P,P=v(M,g,b,y);for(let F=0;F!==b;++F)P[F]=t[F];_.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=C}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,g,y,M){const R=S!==null?S.length:0;let x=null;if(R!==0){if(x=h.value,M!==!0||x===null){const _=y+R*4,C=g.matrixWorldInverse;f.getNormalMatrix(C),(x===null||x.length<_)&&(x=new Float32Array(_));for(let b=0,P=y;b!==R;++b,P+=4)c.copy(S[b]).applyMatrix4(C,f),c.normal.toArray(x,P),x[P+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,x}}const Pr=4,Xm=[.125,.215,.35,.446,.526,.582],es=20,jM=256,Ho=new Ud,Ym=new Ct;let vf=null,_f=0,xf=0,Sf=!1;const ZM=new Y;class qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,l={}){const{size:c=256,position:f=ZM}=l;vf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,a,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(vf,_f,xf),this._renderer.xr.enabled=Sf,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vf=this._renderer.getRenderTarget(),_f=this._renderer.getActiveCubeFace(),xf=this._renderer.getActiveMipmapLevel(),Sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Ji,format:pi,colorSpace:$s,depthBuffer:!1},a=jm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=KM(l)),this._blurMaterial=JM(l,e,t),this._ggxMaterial=$M(l,e,t)}return a}_compileMaterial(e){const t=new an(new ni,e);this._renderer.compile(t,Ho)}_sceneToCubeUV(e,t,r,a,l){const h=new ti(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,y=S.toneMapping;S.getClearColor(Ym),S.toneMapping=Ai,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(a),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new an(new ua,new Og({name:"PMREM.Background",side:Un,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,x=R.material;let _=!1;const C=e.background;C?C.isColor&&(x.color.copy(C),e.background=null,_=!0):(x.color.copy(Ym),_=!0);for(let b=0;b<6;b++){const P=b%3;P===0?(h.up.set(0,p[b],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[b],l.y,l.z)):P===1?(h.up.set(0,0,p[b]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[b],l.z)):(h.up.set(0,p[b],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[b]));const F=this._cubeSize;Gs(a,P*F,b>2?F:0,F,F),S.setRenderTarget(a),_&&S.render(R,h),S.render(e,h)}S.toneMapping=y,S.autoClear=g,e.background=C}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===is||e.mapping===Zs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zm());const l=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Gs(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,Ho)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let l=1;l<a;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-v*v),g=0+p*1.25,y=S*g,{_lodMax:M}=this,R=this._sizeLods[r],x=3*R*(r>M-Pr?r-M+Pr:0),_=4*(this._cubeSize-R);h.envMap.value=e.texture,h.roughness.value=y,h.mipInt.value=M-t,Gs(l,x,_,3*R,2*R),a.setRenderTarget(l),a.render(f,Ho),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=M-r,Gs(e,x,_,3*R,2*R),a.setRenderTarget(e),a.render(f,Ho)}_blur(e,t,r,a,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,a,"latitudinal",l),this._halfBlur(c,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const v=3,S=this._lodMeshes[a];S.material=p;const g=p.uniforms,y=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*y):2*Math.PI/(2*es-1),R=l/M,x=isFinite(l)?1+Math.floor(v*R):es;x>es&&at(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${es}`);const _=[];let C=0;for(let B=0;B<es;++B){const w=B/R,L=Math.exp(-w*w/2);_.push(L),B===0?C+=L:B<x&&(C+=2*L)}for(let B=0;B<_.length;B++)_[B]=_[B]/C;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=_,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:b}=this;g.dTheta.value=M,g.mipInt.value=b-r;const P=this._sizeLods[a],F=3*P*(a>b-Pr?a-b+Pr:0),I=4*(this._cubeSize-P);Gs(t,F,I,3*P,2*P),h.setRenderTarget(t),h.render(S,Ho)}}function KM(s){const e=[],t=[],r=[];let a=s;const l=s-Pr+1+Xm.length;for(let c=0;c<l;c++){const f=Math.pow(2,a);e.push(f);let h=1/f;c>s-Pr?h=Xm[c-s+Pr-1]:c===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,S=1+p,g=[v,v,S,v,S,S,v,v,S,S,v,S],y=6,M=6,R=3,x=2,_=1,C=new Float32Array(R*M*y),b=new Float32Array(x*M*y),P=new Float32Array(_*M*y);for(let I=0;I<y;I++){const B=I%3*2/3-1,w=I>2?0:-1,L=[B,w,0,B+2/3,w,0,B+2/3,w+1,0,B,w,0,B+2/3,w+1,0,B,w+1,0];C.set(L,R*M*I),b.set(g,x*M*I);const ae=[I,I,I,I,I,I];P.set(ae,_*M*I)}const F=new ni;F.setAttribute("position",new Ri(C,R)),F.setAttribute("uv",new Ri(b,x)),F.setAttribute("faceIndex",new Ri(P,_)),r.push(new an(F,null)),a>Pr&&a--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function jm(s,e,t){const r=new Ci(s,e,t);return r.texture.mapping=Ql,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Gs(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function $M(s,e,t){return new Li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:tu(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function JM(s,e,t){const r=new Float32Array(es),a=new Y(0,1,0);return new Li({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Zm(){return new Li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tu(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Km(){return new Li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function tu(){return`

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
	`}class Qg extends Ci{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Bg(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new ua(5,5,5),l=new Li({name:"CubemapFromEquirect",uniforms:Qs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Un,blending:Ki});l.uniforms.tEquirect.value=t;const c=new an(a,l),f=t.minFilter;return t.minFilter===ts&&(t.minFilter=_n),new sS(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(l)}}function QM(s){let e=new WeakMap,t=new WeakMap,r=null;function a(g,y=!1){return g==null?null:y?c(g):l(g)}function l(g){if(g&&g.isTexture){const y=g.mapping;if(y===Vc||y===Hc)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const R=new Qg(M.height);return R.fromEquirectangularTexture(s,g),e.set(g,R),g.addEventListener("dispose",p),f(R.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const y=g.mapping,M=y===Vc||y===Hc,R=y===is||y===Zs;if(M||R){let x=t.get(g);const _=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new qm(s)),x=M?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const C=g.image;return M&&C&&C.height>0||R&&C&&h(C)?(r===null&&(r=new qm(s)),x=M?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",v),x.texture):null}}}return g}function f(g,y){return y===Vc?g.mapping=is:y===Hc&&(g.mapping=Zs),g}function h(g){let y=0;const M=6;for(let R=0;R<M;R++)g[R]!==void 0&&y++;return y===M}function p(g){const y=g.target;y.removeEventListener("dispose",p);const M=e.get(y);M!==void 0&&(e.delete(y),M.dispose())}function v(g){const y=g.target;y.removeEventListener("dispose",v);const M=t.get(y);M!==void 0&&(t.delete(y),M.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:S}}function eE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=s.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Jl("WebGLRenderer: "+r+" extension not supported."),a}}}function tE(s,e,t,r){const a={},l=new WeakMap;function c(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete a[g.id];const y=l.get(g);y&&(e.remove(y),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(S,g){return a[g.id]===!0||(g.addEventListener("dispose",c),a[g.id]=!0,t.memory.geometries++),g}function h(S){const g=S.attributes;for(const y in g)e.update(g[y],s.ARRAY_BUFFER)}function p(S){const g=[],y=S.index,M=S.attributes.position;let R=0;if(M===void 0)return;if(y!==null){const C=y.array;R=y.version;for(let b=0,P=C.length;b<P;b+=3){const F=C[b+0],I=C[b+1],B=C[b+2];g.push(F,I,I,B,B,F)}}else{const C=M.array;R=M.version;for(let b=0,P=C.length/3-1;b<P;b+=3){const F=b+0,I=b+1,B=b+2;g.push(F,I,I,B,B,F)}}const x=new(M.count>=65535?Fg:Ug)(g,1);x.version=R;const _=l.get(S);_&&e.remove(_),l.set(S,x)}function v(S){const g=l.get(S);if(g){const y=S.index;y!==null&&g.version<y.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:v}}function nE(s,e,t){let r;function a(g){r=g}let l,c;function f(g){l=g.type,c=g.bytesPerElement}function h(g,y){s.drawElements(r,y,l,g*c),t.update(y,r,1)}function p(g,y,M){M!==0&&(s.drawElementsInstanced(r,y,l,g*c,M),t.update(y,r,M))}function v(g,y,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,l,g,0,M);let x=0;for(let _=0;_<M;_++)x+=y[_];t.update(x,r,1)}function S(g,y,M,R){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<g.length;_++)p(g[_]/c,y[_],R[_]);else{x.multiDrawElementsInstancedWEBGL(r,y,0,l,g,0,R,0,M);let _=0;for(let C=0;C<M;C++)_+=y[C]*R[C];t.update(_,r,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=S}function iE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:wt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function rE(s,e,t){const r=new WeakMap,a=new Xt;function l(c,f,h){const p=c.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let g=r.get(f);if(g===void 0||g.count!==S){let ae=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",ae)};var y=ae;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,R=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],C=f.morphAttributes.normal||[],b=f.morphAttributes.color||[];let P=0;M===!0&&(P=1),R===!0&&(P=2),x===!0&&(P=3);let F=f.attributes.position.count*P,I=1;F>e.maxTextureSize&&(I=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const B=new Float32Array(F*I*4*S),w=new Dg(B,F,I,S);w.type=Ti,w.needsUpdate=!0;const L=P*4;for(let O=0;O<S;O++){const J=_[O],Z=C[O],le=b[O],Q=F*I*4*O;for(let ne=0;ne<J.count;ne++){const W=ne*L;M===!0&&(a.fromBufferAttribute(J,ne),B[Q+W+0]=a.x,B[Q+W+1]=a.y,B[Q+W+2]=a.z,B[Q+W+3]=0),R===!0&&(a.fromBufferAttribute(Z,ne),B[Q+W+4]=a.x,B[Q+W+5]=a.y,B[Q+W+6]=a.z,B[Q+W+7]=0),x===!0&&(a.fromBufferAttribute(le,ne),B[Q+W+8]=a.x,B[Q+W+9]=a.y,B[Q+W+10]=a.z,B[Q+W+11]=le.itemSize===4?a.w:1)}}g={count:S,texture:w,size:new Je(F,I)},r.set(f,g),f.addEventListener("dispose",ae)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let x=0;x<p.length;x++)M+=p[x];const R=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",R),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function sE(s,e,t,r,a){let l=new WeakMap;function c(p){const v=a.render.frame,S=p.geometry,g=e.get(p,S);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==v&&(y.update(),l.set(y,v))}return g}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:c,dispose:f}}const oE={[mg]:"LINEAR_TONE_MAPPING",[gg]:"REINHARD_TONE_MAPPING",[vg]:"CINEON_TONE_MAPPING",[_g]:"ACES_FILMIC_TONE_MAPPING",[Sg]:"AGX_TONE_MAPPING",[yg]:"NEUTRAL_TONE_MAPPING",[xg]:"CUSTOM_TONE_MAPPING"};function aE(s,e,t,r,a){const l=new Ci(e,t,{type:s,depthBuffer:r,stencilBuffer:a}),c=new Ci(e,t,{type:Ji,depthBuffer:!1,stencilBuffer:!1}),f=new ni;f.setAttribute("position",new ln([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new ln([0,2,0,0,2,0],2));const h=new Qx({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new an(f,h),v=new Ud(-1,1,1,-1,0,1);let S=null,g=null,y=!1,M,R=null,x=[],_=!1;this.setSize=function(C,b){l.setSize(C,b),c.setSize(C,b);for(let P=0;P<x.length;P++){const F=x[P];F.setSize&&F.setSize(C,b)}},this.setEffects=function(C){x=C,_=x.length>0&&x[0].isRenderPass===!0;const b=l.width,P=l.height;for(let F=0;F<x.length;F++){const I=x[F];I.setSize&&I.setSize(b,P)}},this.begin=function(C,b){if(y||C.toneMapping===Ai&&x.length===0)return!1;if(R=b,b!==null){const P=b.width,F=b.height;(l.width!==P||l.height!==F)&&this.setSize(P,F)}return _===!1&&C.setRenderTarget(l),M=C.toneMapping,C.toneMapping=Ai,!0},this.hasRenderPass=function(){return _},this.end=function(C,b){C.toneMapping=M,y=!0;let P=l,F=c;for(let I=0;I<x.length;I++){const B=x[I];if(B.enabled!==!1&&(B.render(C,F,P,b),B.needsSwap!==!1)){const w=P;P=F,F=w}}if(S!==C.outputColorSpace||g!==C.toneMapping){S=C.outputColorSpace,g=C.toneMapping,h.defines={},Et.getTransfer(S)===Lt&&(h.defines.SRGB_TRANSFER="");const I=oE[g];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(R),C.render(p,v),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),h.dispose()}}const e0=new An,md=new ia(1,1),t0=new Dg,n0=new $_,i0=new Bg,$m=[],Jm=[],Qm=new Float32Array(16),eg=new Float32Array(9),tg=new Float32Array(4);function no(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=$m[a];if(l===void 0&&(l=new Float32Array(a),$m[a]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function nu(s,e){let t=Jm[e];t===void 0&&(t=new Int32Array(e),Jm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function lE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function uE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function cE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function fE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function dE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;tg.set(r),s.uniformMatrix2fv(this.addr,!1,tg),tn(t,r)}}function hE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;eg.set(r),s.uniformMatrix3fv(this.addr,!1,eg),tn(t,r)}}function pE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Qm.set(r),s.uniformMatrix4fv(this.addr,!1,Qm),tn(t,r)}}function mE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function gE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function vE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function _E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function xE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function SE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function yE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function ME(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function EE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(md.compareFunction=t.isReversedDepthBuffer()?Ad:wd,l=md):l=e0,t.setTexture2D(e||l,a)}function TE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||n0,a)}function wE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||i0,a)}function AE(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||t0,a)}function CE(s){switch(s){case 5126:return lE;case 35664:return uE;case 35665:return cE;case 35666:return fE;case 35674:return dE;case 35675:return hE;case 35676:return pE;case 5124:case 35670:return mE;case 35667:case 35671:return gE;case 35668:case 35672:return vE;case 35669:case 35673:return _E;case 5125:return xE;case 36294:return SE;case 36295:return yE;case 36296:return ME;case 35678:case 36198:case 36298:case 36306:case 35682:return EE;case 35679:case 36299:case 36307:return TE;case 35680:case 36300:case 36308:case 36293:return wE;case 36289:case 36303:case 36311:case 36292:return AE}}function RE(s,e){s.uniform1fv(this.addr,e)}function PE(s,e){const t=no(e,this.size,2);s.uniform2fv(this.addr,t)}function bE(s,e){const t=no(e,this.size,3);s.uniform3fv(this.addr,t)}function LE(s,e){const t=no(e,this.size,4);s.uniform4fv(this.addr,t)}function DE(s,e){const t=no(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function NE(s,e){const t=no(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function IE(s,e){const t=no(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function UE(s,e){s.uniform1iv(this.addr,e)}function FE(s,e){s.uniform2iv(this.addr,e)}function OE(s,e){s.uniform3iv(this.addr,e)}function BE(s,e){s.uniform4iv(this.addr,e)}function kE(s,e){s.uniform1uiv(this.addr,e)}function zE(s,e){s.uniform2uiv(this.addr,e)}function VE(s,e){s.uniform3uiv(this.addr,e)}function HE(s,e){s.uniform4uiv(this.addr,e)}function GE(s,e,t){const r=this.cache,a=e.length,l=nu(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=md:c=e0;for(let f=0;f!==a;++f)t.setTexture2D(e[f]||c,l[f])}function WE(s,e,t){const r=this.cache,a=e.length,l=nu(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||n0,l[c])}function XE(s,e,t){const r=this.cache,a=e.length,l=nu(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||i0,l[c])}function YE(s,e,t){const r=this.cache,a=e.length,l=nu(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||t0,l[c])}function qE(s){switch(s){case 5126:return RE;case 35664:return PE;case 35665:return bE;case 35666:return LE;case 35674:return DE;case 35675:return NE;case 35676:return IE;case 5124:case 35670:return UE;case 35667:case 35671:return FE;case 35668:case 35672:return OE;case 35669:case 35673:return BE;case 5125:return kE;case 36294:return zE;case 36295:return VE;case 36296:return HE;case 35678:case 36198:case 36298:case 36306:case 35682:return GE;case 35679:case 36299:case 36307:return WE;case 35680:case 36300:case 36308:case 36293:return XE;case 36289:case 36303:case 36311:case 36292:return YE}}class jE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=CE(t.type)}}class ZE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qE(t.type)}}class KE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,c=a.length;l!==c;++l){const f=a[l];f.setValue(e,t[f.id],r)}}}const yf=/(\w+)(\])?(\[|\.)?/g;function ng(s,e){s.seq.push(e),s.map[e.id]=e}function $E(s,e,t){const r=s.name,a=r.length;for(yf.lastIndex=0;;){const l=yf.exec(r),c=yf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===a){ng(t,p===void 0?new jE(f,s,e):new ZE(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new KE(f),ng(t,S)),t=S}}}class Zl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);$E(f,h,this)}const a=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):l.push(c);a.length>0&&(this.seq=a.concat(l))}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function ig(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const JE=37297;let QE=0;function e1(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=a;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const rg=new ft;function t1(s){Et._getMatrix(rg,Et.workingColorSpace,s);const e=`mat3( ${rg.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case Kl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function sg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+e1(s.getShaderSource(e),f)}else return l}function n1(s,e){const t=t1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const i1={[mg]:"Linear",[gg]:"Reinhard",[vg]:"Cineon",[_g]:"ACESFilmic",[Sg]:"AgX",[yg]:"Neutral",[xg]:"Custom"};function r1(s,e){const t=i1[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Hl=new Y;function s1(){Et.getLuminanceCoefficients(Hl);const s=Hl.x.toFixed(4),e=Hl.y.toFixed(4),t=Hl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yo).join(`
`)}function a1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function l1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function Yo(s){return s!==""}function og(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ag(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const u1=/^[ \t]*#include +<([\w\d./]+)>/gm;function gd(s){return s.replace(u1,f1)}const c1=new Map;function f1(s,e){let t=dt[e];if(t===void 0){const r=c1.get(e);if(r!==void 0)t=dt[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return gd(t)}const d1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lg(s){return s.replace(d1,h1)}function h1(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function ug(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const p1={[Wl]:"SHADOWMAP_TYPE_PCF",[Wo]:"SHADOWMAP_TYPE_VSM"};function m1(s){return p1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const g1={[is]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[Ql]:"ENVMAP_TYPE_CUBE_UV"};function v1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":g1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const _1={[Zs]:"ENVMAP_MODE_REFRACTION"};function x1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":_1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const S1={[pg]:"ENVMAP_BLENDING_MULTIPLY",[p_]:"ENVMAP_BLENDING_MIX",[m_]:"ENVMAP_BLENDING_ADD"};function y1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":S1[s.combine]||"ENVMAP_BLENDING_NONE"}function M1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function E1(s,e,t,r){const a=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=m1(t),p=v1(t),v=x1(t),S=y1(t),g=M1(t),y=o1(t),M=a1(l),R=a.createProgram();let x,_,C=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Yo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Yo).join(`
`),_.length>0&&(_+=`
`)):(x=[ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yo).join(`
`),_=[ug(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ai?r1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,n1("linearToOutputTexel",t.outputColorSpace),s1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yo).join(`
`)),c=gd(c),c=og(c,t),c=ag(c,t),f=gd(f),f=og(f,t),f=ag(f,t),c=lg(c),f=lg(f),t.isRawShaderMaterial!==!0&&(C=`#version 300 es
`,x=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===mm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=C+x+c,P=C+_+f,F=ig(a,a.VERTEX_SHADER,b),I=ig(a,a.FRAGMENT_SHADER,P);a.attachShader(R,F),a.attachShader(R,I),t.index0AttributeName!==void 0?a.bindAttribLocation(R,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(R,0,"position"),a.linkProgram(R);function B(O){if(s.debug.checkShaderErrors){const J=a.getProgramInfoLog(R)||"",Z=a.getShaderInfoLog(F)||"",le=a.getShaderInfoLog(I)||"",Q=J.trim(),ne=Z.trim(),W=le.trim();let K=!0,oe=!0;if(a.getProgramParameter(R,a.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,R,F,I);else{const ue=sg(a,F,"vertex"),U=sg(a,I,"fragment");wt("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(R,a.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+Q+`
`+ue+`
`+U)}else Q!==""?at("WebGLProgram: Program Info Log:",Q):(ne===""||W==="")&&(oe=!1);oe&&(O.diagnostics={runnable:K,programLog:Q,vertexShader:{log:ne,prefix:x},fragmentShader:{log:W,prefix:_}})}a.deleteShader(F),a.deleteShader(I),w=new Zl(a,R),L=l1(a,R)}let w;this.getUniforms=function(){return w===void 0&&B(this),w};let L;this.getAttributes=function(){return L===void 0&&B(this),L};let ae=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ae===!1&&(ae=a.getProgramParameter(R,JE)),ae},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=QE++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=I,this}let T1=0;class w1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(a)===!1&&(c.add(a),a.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new A1(e),t.set(e,r)),r}}class A1{constructor(e){this.id=T1++,this.code=e,this.usedTimes=0}}function C1(s,e,t,r,a,l){const c=new Ng,f=new w1,h=new Set,p=[],v=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(w){return h.add(w),w===0?"uv":`uv${w}`}function R(w,L,ae,O,J){const Z=O.fog,le=J.geometry,Q=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?O.environment:null,ne=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,W=e.get(w.envMap||Q,ne),K=W&&W.mapping===Ql?W.image.height:null,oe=y[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&at("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const ue=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,U=ue!==void 0?ue.length:0;let q=0;le.morphAttributes.position!==void 0&&(q=1),le.morphAttributes.normal!==void 0&&(q=2),le.morphAttributes.color!==void 0&&(q=3);let Ae,We,Ke,ie;if(oe){const yt=Mi[oe];Ae=yt.vertexShader,We=yt.fragmentShader}else Ae=w.vertexShader,We=w.fragmentShader,f.update(w),Ke=f.getVertexShaderID(w),ie=f.getFragmentShaderID(w);const pe=s.getRenderTarget(),he=s.state.buffers.depth.getReversed(),Ue=J.isInstancedMesh===!0,Ve=J.isBatchedMesh===!0,nt=!!w.map,Yt=!!w.matcap,ht=!!W,xt=!!w.aoMap,Rt=!!w.lightMap,ut=!!w.bumpMap,Ut=!!w.normalMap,z=!!w.displacementMap,Bt=!!w.emissiveMap,gt=!!w.metalnessMap,St=!!w.roughnessMap,He=w.anisotropy>0,D=w.clearcoat>0,E=w.dispersion>0,G=w.iridescence>0,de=w.sheen>0,me=w.transmission>0,ce=He&&!!w.anisotropyMap,Oe=D&&!!w.clearcoatMap,Te=D&&!!w.clearcoatNormalMap,qe=D&&!!w.clearcoatRoughnessMap,it=G&&!!w.iridescenceMap,xe=G&&!!w.iridescenceThicknessMap,Ee=de&&!!w.sheenColorMap,Ge=de&&!!w.sheenRoughnessMap,Be=!!w.specularMap,be=!!w.specularColorMap,lt=!!w.specularIntensityMap,V=me&&!!w.transmissionMap,we=me&&!!w.thicknessMap,ye=!!w.gradientMap,Le=!!w.alphaMap,Se=w.alphaTest>0,fe=!!w.alphaHash,ke=!!w.extensions;let rt=Ai;w.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(rt=s.toneMapping);const bt={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:Ae,fragmentShader:We,defines:w.defines,customVertexShaderID:Ke,customFragmentShaderID:ie,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:Ve,batchingColor:Ve&&J._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&J.instanceColor!==null,instancingMorph:Ue&&J.morphTexture!==null,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:$s,alphaToCoverage:!!w.alphaToCoverage,map:nt,matcap:Yt,envMap:ht,envMapMode:ht&&W.mapping,envMapCubeUVHeight:K,aoMap:xt,lightMap:Rt,bumpMap:ut,normalMap:Ut,displacementMap:z,emissiveMap:Bt,normalMapObjectSpace:Ut&&w.normalMapType===__,normalMapTangentSpace:Ut&&w.normalMapType===bg,metalnessMap:gt,roughnessMap:St,anisotropy:He,anisotropyMap:ce,clearcoat:D,clearcoatMap:Oe,clearcoatNormalMap:Te,clearcoatRoughnessMap:qe,dispersion:E,iridescence:G,iridescenceMap:it,iridescenceThicknessMap:xe,sheen:de,sheenColorMap:Ee,sheenRoughnessMap:Ge,specularMap:Be,specularColorMap:be,specularIntensityMap:lt,transmission:me,transmissionMap:V,thicknessMap:we,gradientMap:ye,opaque:w.transparent===!1&&w.blending===Ys&&w.alphaToCoverage===!1,alphaMap:Le,alphaTest:Se,alphaHash:fe,combine:w.combine,mapUv:nt&&M(w.map.channel),aoMapUv:xt&&M(w.aoMap.channel),lightMapUv:Rt&&M(w.lightMap.channel),bumpMapUv:ut&&M(w.bumpMap.channel),normalMapUv:Ut&&M(w.normalMap.channel),displacementMapUv:z&&M(w.displacementMap.channel),emissiveMapUv:Bt&&M(w.emissiveMap.channel),metalnessMapUv:gt&&M(w.metalnessMap.channel),roughnessMapUv:St&&M(w.roughnessMap.channel),anisotropyMapUv:ce&&M(w.anisotropyMap.channel),clearcoatMapUv:Oe&&M(w.clearcoatMap.channel),clearcoatNormalMapUv:Te&&M(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:qe&&M(w.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&M(w.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&M(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&M(w.sheenColorMap.channel),sheenRoughnessMapUv:Ge&&M(w.sheenRoughnessMap.channel),specularMapUv:Be&&M(w.specularMap.channel),specularColorMapUv:be&&M(w.specularColorMap.channel),specularIntensityMapUv:lt&&M(w.specularIntensityMap.channel),transmissionMapUv:V&&M(w.transmissionMap.channel),thicknessMapUv:we&&M(w.thicknessMap.channel),alphaMapUv:Le&&M(w.alphaMap.channel),vertexTangents:!!le.attributes.tangent&&(Ut||He),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!le.attributes.uv&&(nt||Le),fog:!!Z,useFog:w.fog===!0,fogExp2:!!Z&&Z.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||le.attributes.normal===void 0&&Ut===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:he,skinning:J.isSkinnedMesh===!0,morphTargets:le.morphAttributes.position!==void 0,morphNormals:le.morphAttributes.normal!==void 0,morphColors:le.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:q,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&ae.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:nt&&w.map.isVideoTexture===!0&&Et.getTransfer(w.map.colorSpace)===Lt,decodeVideoTextureEmissive:Bt&&w.emissiveMap.isVideoTexture===!0&&Et.getTransfer(w.emissiveMap.colorSpace)===Lt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Ei,flipSided:w.side===Un,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ke&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ke&&w.extensions.multiDraw===!0||Ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return bt.vertexUv1s=h.has(1),bt.vertexUv2s=h.has(2),bt.vertexUv3s=h.has(3),h.clear(),bt}function x(w){const L=[];if(w.shaderID?L.push(w.shaderID):(L.push(w.customVertexShaderID),L.push(w.customFragmentShaderID)),w.defines!==void 0)for(const ae in w.defines)L.push(ae),L.push(w.defines[ae]);return w.isRawShaderMaterial===!1&&(_(L,w),C(L,w),L.push(s.outputColorSpace)),L.push(w.customProgramCacheKey),L.join()}function _(w,L){w.push(L.precision),w.push(L.outputColorSpace),w.push(L.envMapMode),w.push(L.envMapCubeUVHeight),w.push(L.mapUv),w.push(L.alphaMapUv),w.push(L.lightMapUv),w.push(L.aoMapUv),w.push(L.bumpMapUv),w.push(L.normalMapUv),w.push(L.displacementMapUv),w.push(L.emissiveMapUv),w.push(L.metalnessMapUv),w.push(L.roughnessMapUv),w.push(L.anisotropyMapUv),w.push(L.clearcoatMapUv),w.push(L.clearcoatNormalMapUv),w.push(L.clearcoatRoughnessMapUv),w.push(L.iridescenceMapUv),w.push(L.iridescenceThicknessMapUv),w.push(L.sheenColorMapUv),w.push(L.sheenRoughnessMapUv),w.push(L.specularMapUv),w.push(L.specularColorMapUv),w.push(L.specularIntensityMapUv),w.push(L.transmissionMapUv),w.push(L.thicknessMapUv),w.push(L.combine),w.push(L.fogExp2),w.push(L.sizeAttenuation),w.push(L.morphTargetsCount),w.push(L.morphAttributeCount),w.push(L.numDirLights),w.push(L.numPointLights),w.push(L.numSpotLights),w.push(L.numSpotLightMaps),w.push(L.numHemiLights),w.push(L.numRectAreaLights),w.push(L.numDirLightShadows),w.push(L.numPointLightShadows),w.push(L.numSpotLightShadows),w.push(L.numSpotLightShadowsWithMaps),w.push(L.numLightProbes),w.push(L.shadowMapType),w.push(L.toneMapping),w.push(L.numClippingPlanes),w.push(L.numClipIntersection),w.push(L.depthPacking)}function C(w,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),w.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),w.push(c.mask)}function b(w){const L=y[w.type];let ae;if(L){const O=Mi[L];ae=Kx.clone(O.uniforms)}else ae=w.uniforms;return ae}function P(w,L){let ae=v.get(L);return ae!==void 0?++ae.usedTimes:(ae=new E1(s,L,w,a),p.push(ae),v.set(L,ae)),ae}function F(w){if(--w.usedTimes===0){const L=p.indexOf(w);p[L]=p[p.length-1],p.pop(),v.delete(w.cacheKey),w.destroy()}}function I(w){f.remove(w)}function B(){f.dispose()}return{getParameters:R,getProgramCacheKey:x,getUniforms:b,acquireProgram:P,releaseProgram:F,releaseShaderCache:I,programs:p,dispose:B}}function R1(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function a(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function P1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function cg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function fg(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function c(g){let y=0;return g.isInstancedMesh&&(y+=2),g.isSkinnedMesh&&(y+=1),y}function f(g,y,M,R,x,_){let C=s[e];return C===void 0?(C={id:g.id,object:g,geometry:y,material:M,materialVariant:c(g),groupOrder:R,renderOrder:g.renderOrder,z:x,group:_},s[e]=C):(C.id=g.id,C.object=g,C.geometry=y,C.material=M,C.materialVariant=c(g),C.groupOrder=R,C.renderOrder=g.renderOrder,C.z=x,C.group=_),e++,C}function h(g,y,M,R,x,_){const C=f(g,y,M,R,x,_);M.transmission>0?r.push(C):M.transparent===!0?a.push(C):t.push(C)}function p(g,y,M,R,x,_){const C=f(g,y,M,R,x,_);M.transmission>0?r.unshift(C):M.transparent===!0?a.unshift(C):t.unshift(C)}function v(g,y){t.length>1&&t.sort(g||P1),r.length>1&&r.sort(y||cg),a.length>1&&a.sort(y||cg)}function S(){for(let g=e,y=s.length;g<y;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:h,unshift:p,finish:S,sort:v}}function b1(){let s=new WeakMap;function e(r,a){const l=s.get(r);let c;return l===void 0?(c=new fg,s.set(r,[c])):a>=l.length?(c=new fg,l.push(c)):c=l[a],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function L1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Ct};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function D1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let N1=0;function I1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function U1(s){const e=new L1,t=D1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Y);const a=new Y,l=new Gt,c=new Gt;function f(p){let v=0,S=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let y=0,M=0,R=0,x=0,_=0,C=0,b=0,P=0,F=0,I=0,B=0;p.sort(I1);for(let L=0,ae=p.length;L<ae;L++){const O=p[L],J=O.color,Z=O.intensity,le=O.distance;let Q=null;if(O.shadow&&O.shadow.map&&(O.shadow.map.texture.format===Ks?Q=O.shadow.map.texture:Q=O.shadow.map.depthTexture||O.shadow.map.texture),O.isAmbientLight)v+=J.r*Z,S+=J.g*Z,g+=J.b*Z;else if(O.isLightProbe){for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(O.sh.coefficients[ne],Z);B++}else if(O.isDirectionalLight){const ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),O.castShadow){const W=O.shadow,K=t.get(O);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,r.directionalShadow[y]=K,r.directionalShadowMap[y]=Q,r.directionalShadowMatrix[y]=O.shadow.matrix,C++}r.directional[y]=ne,y++}else if(O.isSpotLight){const ne=e.get(O);ne.position.setFromMatrixPosition(O.matrixWorld),ne.color.copy(J).multiplyScalar(Z),ne.distance=le,ne.coneCos=Math.cos(O.angle),ne.penumbraCos=Math.cos(O.angle*(1-O.penumbra)),ne.decay=O.decay,r.spot[R]=ne;const W=O.shadow;if(O.map&&(r.spotLightMap[F]=O.map,F++,W.updateMatrices(O),O.castShadow&&I++),r.spotLightMatrix[R]=W.matrix,O.castShadow){const K=t.get(O);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,r.spotShadow[R]=K,r.spotShadowMap[R]=Q,P++}R++}else if(O.isRectAreaLight){const ne=e.get(O);ne.color.copy(J).multiplyScalar(Z),ne.halfWidth.set(O.width*.5,0,0),ne.halfHeight.set(0,O.height*.5,0),r.rectArea[x]=ne,x++}else if(O.isPointLight){const ne=e.get(O);if(ne.color.copy(O.color).multiplyScalar(O.intensity),ne.distance=O.distance,ne.decay=O.decay,O.castShadow){const W=O.shadow,K=t.get(O);K.shadowIntensity=W.intensity,K.shadowBias=W.bias,K.shadowNormalBias=W.normalBias,K.shadowRadius=W.radius,K.shadowMapSize=W.mapSize,K.shadowCameraNear=W.camera.near,K.shadowCameraFar=W.camera.far,r.pointShadow[M]=K,r.pointShadowMap[M]=Q,r.pointShadowMatrix[M]=O.shadow.matrix,b++}r.point[M]=ne,M++}else if(O.isHemisphereLight){const ne=e.get(O);ne.skyColor.copy(O.color).multiplyScalar(Z),ne.groundColor.copy(O.groundColor).multiplyScalar(Z),r.hemi[_]=ne,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==y||w.pointLength!==M||w.spotLength!==R||w.rectAreaLength!==x||w.hemiLength!==_||w.numDirectionalShadows!==C||w.numPointShadows!==b||w.numSpotShadows!==P||w.numSpotMaps!==F||w.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=x,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=P+F-I,r.spotLightMap.length=F,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=B,w.directionalLength=y,w.pointLength=M,w.spotLength=R,w.rectAreaLength=x,w.hemiLength=_,w.numDirectionalShadows=C,w.numPointShadows=b,w.numSpotShadows=P,w.numSpotMaps=F,w.numLightProbes=B,r.version=N1++)}function h(p,v){let S=0,g=0,y=0,M=0,R=0;const x=v.matrixWorldInverse;for(let _=0,C=p.length;_<C;_++){const b=p[_];if(b.isDirectionalLight){const P=r.directional[S];P.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(x),S++}else if(b.isSpotLight){const P=r.spot[y];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(b.matrixWorld),a.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(a),P.direction.transformDirection(x),y++}else if(b.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),c.identity(),l.copy(b.matrixWorld),l.premultiply(x),c.extractRotation(l),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),M++}else if(b.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(x),g++}else if(b.isHemisphereLight){const P=r.hemi[R];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(x),R++}}}return{setup:f,setupView:h,state:r}}function dg(s){const e=new U1(s),t=[],r=[];function a(v){p.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function c(v){r.push(v)}function f(){e.setup(t)}function h(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function F1(s){let e=new WeakMap;function t(a,l=0){const c=e.get(a);let f;return c===void 0?(f=new dg(s),e.set(a,[f])):l>=c.length?(f=new dg(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const O1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,k1=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],z1=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],hg=new Gt,Go=new Y,Mf=new Y;function V1(s,e,t){let r=new bd;const a=new Je,l=new Je,c=new Xt,f=new eS,h=new tS,p={},v=t.maxTextureSize,S={[br]:Un,[Un]:br,[Ei]:Ei},g=new Li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:O1,fragmentShader:B1}),y=g.clone();y.defines.HORIZONTAL_PASS=1;const M=new ni;M.setAttribute("position",new Ri(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new an(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let _=this.type;this.render=function(I,B,w){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||I.length===0)return;this.type===Zv&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wl);const L=s.getRenderTarget(),ae=s.getActiveCubeFace(),O=s.getActiveMipmapLevel(),J=s.state;J.setBlending(Ki),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const Z=_!==this.type;Z&&B.traverse(function(le){le.material&&(Array.isArray(le.material)?le.material.forEach(Q=>Q.needsUpdate=!0):le.material.needsUpdate=!0)});for(let le=0,Q=I.length;le<Q;le++){const ne=I[le],W=ne.shadow;if(W===void 0){at("WebGLShadowMap:",ne,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;a.copy(W.mapSize);const K=W.getFrameExtents();a.multiply(K),l.copy(W.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/K.x),a.x=l.x*K.x,W.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/K.y),a.y=l.y*K.y,W.mapSize.y=l.y));const oe=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=oe,W.map===null||Z===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===Wo){if(ne.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new Ci(a.x,a.y,{format:Ks,type:Ji,minFilter:_n,magFilter:_n,generateMipmaps:!1}),W.map.texture.name=ne.name+".shadowMap",W.map.depthTexture=new ia(a.x,a.y,Ti),W.map.depthTexture.name=ne.name+".shadowMapDepth",W.map.depthTexture.format=Qi,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=fn,W.map.depthTexture.magFilter=fn}else ne.isPointLight?(W.map=new Qg(a.x),W.map.depthTexture=new gx(a.x,Pi)):(W.map=new Ci(a.x,a.y),W.map.depthTexture=new ia(a.x,a.y,Pi)),W.map.depthTexture.name=ne.name+".shadowMap",W.map.depthTexture.format=Qi,this.type===Wl?(W.map.depthTexture.compareFunction=oe?Ad:wd,W.map.depthTexture.minFilter=_n,W.map.depthTexture.magFilter=_n):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=fn,W.map.depthTexture.magFilter=fn);W.camera.updateProjectionMatrix()}const ue=W.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ue;U++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,U),s.clear();else{U===0&&(s.setRenderTarget(W.map),s.clear());const q=W.getViewport(U);c.set(l.x*q.x,l.y*q.y,l.x*q.z,l.y*q.w),J.viewport(c)}if(ne.isPointLight){const q=W.camera,Ae=W.matrix,We=ne.distance||q.far;We!==q.far&&(q.far=We,q.updateProjectionMatrix()),Go.setFromMatrixPosition(ne.matrixWorld),q.position.copy(Go),Mf.copy(q.position),Mf.add(k1[U]),q.up.copy(z1[U]),q.lookAt(Mf),q.updateMatrixWorld(),Ae.makeTranslation(-Go.x,-Go.y,-Go.z),hg.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),W._frustum.setFromProjectionMatrix(hg,q.coordinateSystem,q.reversedDepth)}else W.updateMatrices(ne);r=W.getFrustum(),P(B,w,W.camera,ne,this.type)}W.isPointLightShadow!==!0&&this.type===Wo&&C(W,w),W.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(L,ae,O)};function C(I,B){const w=e.update(R);g.defines.VSM_SAMPLES!==I.blurSamples&&(g.defines.VSM_SAMPLES=I.blurSamples,y.defines.VSM_SAMPLES=I.blurSamples,g.needsUpdate=!0,y.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Ci(a.x,a.y,{format:Ks,type:Ji})),g.uniforms.shadow_pass.value=I.map.depthTexture,g.uniforms.resolution.value=I.mapSize,g.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(B,null,w,g,R,null),y.uniforms.shadow_pass.value=I.mapPass.texture,y.uniforms.resolution.value=I.mapSize,y.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(B,null,w,y,R,null)}function b(I,B,w,L){let ae=null;const O=w.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(O!==void 0)ae=O;else if(ae=w.isPointLight===!0?h:f,s.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const J=ae.uuid,Z=B.uuid;let le=p[J];le===void 0&&(le={},p[J]=le);let Q=le[Z];Q===void 0&&(Q=ae.clone(),le[Z]=Q,B.addEventListener("dispose",F)),ae=Q}if(ae.visible=B.visible,ae.wireframe=B.wireframe,L===Wo?ae.side=B.shadowSide!==null?B.shadowSide:B.side:ae.side=B.shadowSide!==null?B.shadowSide:S[B.side],ae.alphaMap=B.alphaMap,ae.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,ae.map=B.map,ae.clipShadows=B.clipShadows,ae.clippingPlanes=B.clippingPlanes,ae.clipIntersection=B.clipIntersection,ae.displacementMap=B.displacementMap,ae.displacementScale=B.displacementScale,ae.displacementBias=B.displacementBias,ae.wireframeLinewidth=B.wireframeLinewidth,ae.linewidth=B.linewidth,w.isPointLight===!0&&ae.isMeshDistanceMaterial===!0){const J=s.properties.get(ae);J.light=w}return ae}function P(I,B,w,L,ae){if(I.visible===!1)return;if(I.layers.test(B.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&ae===Wo)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,I.matrixWorld);const Z=e.update(I),le=I.material;if(Array.isArray(le)){const Q=Z.groups;for(let ne=0,W=Q.length;ne<W;ne++){const K=Q[ne],oe=le[K.materialIndex];if(oe&&oe.visible){const ue=b(I,oe,L,ae);I.onBeforeShadow(s,I,B,w,Z,ue,K),s.renderBufferDirect(w,null,Z,ue,I,K),I.onAfterShadow(s,I,B,w,Z,ue,K)}}}else if(le.visible){const Q=b(I,le,L,ae);I.onBeforeShadow(s,I,B,w,Z,Q,null),s.renderBufferDirect(w,null,Z,Q,I,null),I.onAfterShadow(s,I,B,w,Z,Q,null)}}const J=I.children;for(let Z=0,le=J.length;Z<le;Z++)P(J[Z],B,w,L,ae)}function F(I){I.target.removeEventListener("dispose",F);for(const w in p){const L=p[w],ae=I.target.uuid;ae in L&&(L[ae].dispose(),delete L[ae])}}}function H1(s,e){function t(){let V=!1;const we=new Xt;let ye=null;const Le=new Xt(0,0,0,0);return{setMask:function(Se){ye!==Se&&!V&&(s.colorMask(Se,Se,Se,Se),ye=Se)},setLocked:function(Se){V=Se},setClear:function(Se,fe,ke,rt,bt){bt===!0&&(Se*=rt,fe*=rt,ke*=rt),we.set(Se,fe,ke,rt),Le.equals(we)===!1&&(s.clearColor(Se,fe,ke,rt),Le.copy(we))},reset:function(){V=!1,ye=null,Le.set(-1,0,0,0)}}}function r(){let V=!1,we=!1,ye=null,Le=null,Se=null;return{setReversed:function(fe){if(we!==fe){const ke=e.get("EXT_clip_control");fe?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),we=fe;const rt=Se;Se=null,this.setClear(rt)}},getReversed:function(){return we},setTest:function(fe){fe?pe(s.DEPTH_TEST):he(s.DEPTH_TEST)},setMask:function(fe){ye!==fe&&!V&&(s.depthMask(fe),ye=fe)},setFunc:function(fe){if(we&&(fe=R_[fe]),Le!==fe){switch(fe){case Af:s.depthFunc(s.NEVER);break;case Cf:s.depthFunc(s.ALWAYS);break;case Rf:s.depthFunc(s.LESS);break;case js:s.depthFunc(s.LEQUAL);break;case Pf:s.depthFunc(s.EQUAL);break;case bf:s.depthFunc(s.GEQUAL);break;case Lf:s.depthFunc(s.GREATER);break;case Df:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Le=fe}},setLocked:function(fe){V=fe},setClear:function(fe){Se!==fe&&(Se=fe,we&&(fe=1-fe),s.clearDepth(fe))},reset:function(){V=!1,ye=null,Le=null,Se=null,we=!1}}}function a(){let V=!1,we=null,ye=null,Le=null,Se=null,fe=null,ke=null,rt=null,bt=null;return{setTest:function(yt){V||(yt?pe(s.STENCIL_TEST):he(s.STENCIL_TEST))},setMask:function(yt){we!==yt&&!V&&(s.stencilMask(yt),we=yt)},setFunc:function(yt,Wn,Sn){(ye!==yt||Le!==Wn||Se!==Sn)&&(s.stencilFunc(yt,Wn,Sn),ye=yt,Le=Wn,Se=Sn)},setOp:function(yt,Wn,Sn){(fe!==yt||ke!==Wn||rt!==Sn)&&(s.stencilOp(yt,Wn,Sn),fe=yt,ke=Wn,rt=Sn)},setLocked:function(yt){V=yt},setClear:function(yt){bt!==yt&&(s.clearStencil(yt),bt=yt)},reset:function(){V=!1,we=null,ye=null,Le=null,Se=null,fe=null,ke=null,rt=null,bt=null}}}const l=new t,c=new r,f=new a,h=new WeakMap,p=new WeakMap;let v={},S={},g=new WeakMap,y=[],M=null,R=!1,x=null,_=null,C=null,b=null,P=null,F=null,I=null,B=new Ct(0,0,0),w=0,L=!1,ae=null,O=null,J=null,Z=null,le=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,W=0;const K=s.getParameter(s.VERSION);K.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(K)[1]),ne=W>=1):K.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),ne=W>=2);let oe=null,ue={};const U=s.getParameter(s.SCISSOR_BOX),q=s.getParameter(s.VIEWPORT),Ae=new Xt().fromArray(U),We=new Xt().fromArray(q);function Ke(V,we,ye,Le){const Se=new Uint8Array(4),fe=s.createTexture();s.bindTexture(V,fe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ke=0;ke<ye;ke++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,Le,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(we+ke,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return fe}const ie={};ie[s.TEXTURE_2D]=Ke(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=Ke(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=Ke(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=Ke(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),pe(s.DEPTH_TEST),c.setFunc(js),ut(!1),Ut(um),pe(s.CULL_FACE),xt(Ki);function pe(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function he(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function Ue(V,we){return S[V]!==we?(s.bindFramebuffer(V,we),S[V]=we,V===s.DRAW_FRAMEBUFFER&&(S[s.FRAMEBUFFER]=we),V===s.FRAMEBUFFER&&(S[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Ve(V,we){let ye=y,Le=!1;if(V){ye=g.get(we),ye===void 0&&(ye=[],g.set(we,ye));const Se=V.textures;if(ye.length!==Se.length||ye[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,ke=Se.length;fe<ke;fe++)ye[fe]=s.COLOR_ATTACHMENT0+fe;ye.length=Se.length,Le=!0}}else ye[0]!==s.BACK&&(ye[0]=s.BACK,Le=!0);Le&&s.drawBuffers(ye)}function nt(V){return M!==V?(s.useProgram(V),M=V,!0):!1}const Yt={[Qr]:s.FUNC_ADD,[$v]:s.FUNC_SUBTRACT,[Jv]:s.FUNC_REVERSE_SUBTRACT};Yt[Qv]=s.MIN,Yt[e_]=s.MAX;const ht={[t_]:s.ZERO,[n_]:s.ONE,[i_]:s.SRC_COLOR,[Tf]:s.SRC_ALPHA,[u_]:s.SRC_ALPHA_SATURATE,[a_]:s.DST_COLOR,[s_]:s.DST_ALPHA,[r_]:s.ONE_MINUS_SRC_COLOR,[wf]:s.ONE_MINUS_SRC_ALPHA,[l_]:s.ONE_MINUS_DST_COLOR,[o_]:s.ONE_MINUS_DST_ALPHA,[c_]:s.CONSTANT_COLOR,[f_]:s.ONE_MINUS_CONSTANT_COLOR,[d_]:s.CONSTANT_ALPHA,[h_]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(V,we,ye,Le,Se,fe,ke,rt,bt,yt){if(V===Ki){R===!0&&(he(s.BLEND),R=!1);return}if(R===!1&&(pe(s.BLEND),R=!0),V!==Kv){if(V!==x||yt!==L){if((_!==Qr||P!==Qr)&&(s.blendEquation(s.FUNC_ADD),_=Qr,P=Qr),yt)switch(V){case Ys:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cm:s.blendFunc(s.ONE,s.ONE);break;case fm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case dm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:wt("WebGLState: Invalid blending: ",V);break}else switch(V){case Ys:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case fm:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dm:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",V);break}C=null,b=null,F=null,I=null,B.set(0,0,0),w=0,x=V,L=yt}return}Se=Se||we,fe=fe||ye,ke=ke||Le,(we!==_||Se!==P)&&(s.blendEquationSeparate(Yt[we],Yt[Se]),_=we,P=Se),(ye!==C||Le!==b||fe!==F||ke!==I)&&(s.blendFuncSeparate(ht[ye],ht[Le],ht[fe],ht[ke]),C=ye,b=Le,F=fe,I=ke),(rt.equals(B)===!1||bt!==w)&&(s.blendColor(rt.r,rt.g,rt.b,bt),B.copy(rt),w=bt),x=V,L=!1}function Rt(V,we){V.side===Ei?he(s.CULL_FACE):pe(s.CULL_FACE);let ye=V.side===Un;we&&(ye=!ye),ut(ye),V.blending===Ys&&V.transparent===!1?xt(Ki):xt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const Le=V.stencilWrite;f.setTest(Le),Le&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Bt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):he(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(V){ae!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),ae=V)}function Ut(V){V!==qv?(pe(s.CULL_FACE),V!==O&&(V===um?s.cullFace(s.BACK):V===jv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):he(s.CULL_FACE),O=V}function z(V){V!==J&&(ne&&s.lineWidth(V),J=V)}function Bt(V,we,ye){V?(pe(s.POLYGON_OFFSET_FILL),(Z!==we||le!==ye)&&(Z=we,le=ye,c.getReversed()&&(we=-we),s.polygonOffset(we,ye))):he(s.POLYGON_OFFSET_FILL)}function gt(V){V?pe(s.SCISSOR_TEST):he(s.SCISSOR_TEST)}function St(V){V===void 0&&(V=s.TEXTURE0+Q-1),oe!==V&&(s.activeTexture(V),oe=V)}function He(V,we,ye){ye===void 0&&(oe===null?ye=s.TEXTURE0+Q-1:ye=oe);let Le=ue[ye];Le===void 0&&(Le={type:void 0,texture:void 0},ue[ye]=Le),(Le.type!==V||Le.texture!==we)&&(oe!==ye&&(s.activeTexture(ye),oe=ye),s.bindTexture(V,we||ie[V]),Le.type=V,Le.texture=we)}function D(){const V=ue[oe];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function de(){try{s.texSubImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function me(){try{s.texSubImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function Oe(){try{s.compressedTexSubImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function Te(){try{s.texStorage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function qe(){try{s.texStorage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function it(){try{s.texImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function xe(){try{s.texImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function Ee(V){Ae.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ae.copy(V))}function Ge(V){We.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),We.copy(V))}function Be(V,we){let ye=p.get(we);ye===void 0&&(ye=new WeakMap,p.set(we,ye));let Le=ye.get(V);Le===void 0&&(Le=s.getUniformBlockIndex(we,V.name),ye.set(V,Le))}function be(V,we){const Le=p.get(we).get(V);h.get(we)!==Le&&(s.uniformBlockBinding(we,Le,V.__bindingPointIndex),h.set(we,Le))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},oe=null,ue={},S={},g=new WeakMap,y=[],M=null,R=!1,x=null,_=null,C=null,b=null,P=null,F=null,I=null,B=new Ct(0,0,0),w=0,L=!1,ae=null,O=null,J=null,Z=null,le=null,Ae.set(0,0,s.canvas.width,s.canvas.height),We.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:pe,disable:he,bindFramebuffer:Ue,drawBuffers:Ve,useProgram:nt,setBlending:xt,setMaterial:Rt,setFlipSided:ut,setCullFace:Ut,setLineWidth:z,setPolygonOffset:Bt,setScissorTest:gt,activeTexture:St,bindTexture:He,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:it,texImage3D:xe,updateUBOMapping:Be,uniformBlockBinding:be,texStorage2D:Te,texStorage3D:qe,texSubImage2D:de,texSubImage3D:me,compressedTexSubImage2D:ce,compressedTexSubImage3D:Oe,scissor:Ee,viewport:Ge,reset:lt}}function G1(s,e,t,r,a,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Je,v=new WeakMap;let S;const g=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,E){return y?new OffscreenCanvas(D,E):$l("canvas")}function R(D,E,G){let de=1;const me=He(D);if((me.width>G||me.height>G)&&(de=G/Math.max(me.width,me.height)),de<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(de*me.width),Oe=Math.floor(de*me.height);S===void 0&&(S=M(ce,Oe));const Te=E?M(ce,Oe):S;return Te.width=ce,Te.height=Oe,Te.getContext("2d").drawImage(D,0,0,ce,Oe),at("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ce+"x"+Oe+")."),Te}else return"data"in D&&at("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),D;return D}function x(D){return D.generateMipmaps}function _(D){s.generateMipmap(D)}function C(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(D,E,G,de,me=!1){if(D!==null){if(s[D]!==void 0)return s[D];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=E;if(E===s.RED&&(G===s.FLOAT&&(ce=s.R32F),G===s.HALF_FLOAT&&(ce=s.R16F),G===s.UNSIGNED_BYTE&&(ce=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(ce=s.R8UI),G===s.UNSIGNED_SHORT&&(ce=s.R16UI),G===s.UNSIGNED_INT&&(ce=s.R32UI),G===s.BYTE&&(ce=s.R8I),G===s.SHORT&&(ce=s.R16I),G===s.INT&&(ce=s.R32I)),E===s.RG&&(G===s.FLOAT&&(ce=s.RG32F),G===s.HALF_FLOAT&&(ce=s.RG16F),G===s.UNSIGNED_BYTE&&(ce=s.RG8)),E===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(ce=s.RG8UI),G===s.UNSIGNED_SHORT&&(ce=s.RG16UI),G===s.UNSIGNED_INT&&(ce=s.RG32UI),G===s.BYTE&&(ce=s.RG8I),G===s.SHORT&&(ce=s.RG16I),G===s.INT&&(ce=s.RG32I)),E===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),G===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),G===s.UNSIGNED_INT&&(ce=s.RGB32UI),G===s.BYTE&&(ce=s.RGB8I),G===s.SHORT&&(ce=s.RGB16I),G===s.INT&&(ce=s.RGB32I)),E===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),G===s.UNSIGNED_INT&&(ce=s.RGBA32UI),G===s.BYTE&&(ce=s.RGBA8I),G===s.SHORT&&(ce=s.RGBA16I),G===s.INT&&(ce=s.RGBA32I)),E===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),E===s.RGBA){const Oe=me?Kl:Et.getTransfer(de);G===s.FLOAT&&(ce=s.RGBA32F),G===s.HALF_FLOAT&&(ce=s.RGBA16F),G===s.UNSIGNED_BYTE&&(ce=Oe===Lt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(D,E){let G;return D?E===null||E===Pi||E===ea?G=s.DEPTH24_STENCIL8:E===Ti?G=s.DEPTH32F_STENCIL8:E===Qo&&(G=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Pi||E===ea?G=s.DEPTH_COMPONENT24:E===Ti?G=s.DEPTH_COMPONENT32F:E===Qo&&(G=s.DEPTH_COMPONENT16),G}function F(D,E){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==fn&&D.minFilter!==_n?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function I(D){const E=D.target;E.removeEventListener("dispose",I),w(E),E.isVideoTexture&&v.delete(E)}function B(D){const E=D.target;E.removeEventListener("dispose",B),ae(E)}function w(D){const E=r.get(D);if(E.__webglInit===void 0)return;const G=D.source,de=g.get(G);if(de){const me=de[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&L(D),Object.keys(de).length===0&&g.delete(G)}r.remove(D)}function L(D){const E=r.get(D);s.deleteTexture(E.__webglTexture);const G=D.source,de=g.get(G);delete de[E.__cacheKey],c.memory.textures--}function ae(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(E.__webglFramebuffer[de]))for(let me=0;me<E.__webglFramebuffer[de].length;me++)s.deleteFramebuffer(E.__webglFramebuffer[de][me]);else s.deleteFramebuffer(E.__webglFramebuffer[de]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[de])}else{if(Array.isArray(E.__webglFramebuffer))for(let de=0;de<E.__webglFramebuffer.length;de++)s.deleteFramebuffer(E.__webglFramebuffer[de]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let de=0;de<E.__webglColorRenderbuffer.length;de++)E.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[de]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=D.textures;for(let de=0,me=G.length;de<me;de++){const ce=r.get(G[de]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),c.memory.textures--),r.remove(G[de])}r.remove(D)}let O=0;function J(){O=0}function Z(){const D=O;return D>=a.maxTextures&&at("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+a.maxTextures),O+=1,D}function le(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function Q(D,E){const G=r.get(D);if(D.isVideoTexture&&gt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){const de=D.image;if(de===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(G,D,E);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function ne(D,E){const G=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){ie(G,D,E);return}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function W(D,E){const G=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){ie(G,D,E);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function K(D,E){const G=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&G.__version!==D.version){pe(G,D,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const oe={[Nf]:s.REPEAT,[Zi]:s.CLAMP_TO_EDGE,[If]:s.MIRRORED_REPEAT},ue={[fn]:s.NEAREST,[g_]:s.NEAREST_MIPMAP_NEAREST,[_l]:s.NEAREST_MIPMAP_LINEAR,[_n]:s.LINEAR,[Gc]:s.LINEAR_MIPMAP_NEAREST,[ts]:s.LINEAR_MIPMAP_LINEAR},U={[x_]:s.NEVER,[T_]:s.ALWAYS,[S_]:s.LESS,[wd]:s.LEQUAL,[y_]:s.EQUAL,[Ad]:s.GEQUAL,[M_]:s.GREATER,[E_]:s.NOTEQUAL};function q(D,E){if(E.type===Ti&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===_n||E.magFilter===Gc||E.magFilter===_l||E.magFilter===ts||E.minFilter===_n||E.minFilter===Gc||E.minFilter===_l||E.minFilter===ts)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,oe[E.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,oe[E.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,oe[E.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ue[E.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ue[E.minFilter]),E.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===fn||E.minFilter!==_l&&E.minFilter!==ts||E.type===Ti&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ae(D,E){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",I));const de=E.source;let me=g.get(de);me===void 0&&(me={},g.set(de,me));const ce=le(E);if(ce!==D.__cacheKey){me[ce]===void 0&&(me[ce]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,G=!0),me[ce].usedTimes++;const Oe=me[D.__cacheKey];Oe!==void 0&&(me[D.__cacheKey].usedTimes--,Oe.usedTimes===0&&L(E)),D.__cacheKey=ce,D.__webglTexture=me[ce].texture}return G}function We(D,E,G){return Math.floor(Math.floor(D/G)/E)}function Ke(D,E,G,de){const ce=D.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,G,de,E.data);else{ce.sort((xe,Ee)=>xe.start-Ee.start);let Oe=0;for(let xe=1;xe<ce.length;xe++){const Ee=ce[Oe],Ge=ce[xe],Be=Ee.start+Ee.count,be=We(Ge.start,E.width,4),lt=We(Ee.start,E.width,4);Ge.start<=Be+1&&be===lt&&We(Ge.start+Ge.count-1,E.width,4)===be?Ee.count=Math.max(Ee.count,Ge.start+Ge.count-Ee.start):(++Oe,ce[Oe]=Ge)}ce.length=Oe+1;const Te=s.getParameter(s.UNPACK_ROW_LENGTH),qe=s.getParameter(s.UNPACK_SKIP_PIXELS),it=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let xe=0,Ee=ce.length;xe<Ee;xe++){const Ge=ce[xe],Be=Math.floor(Ge.start/4),be=Math.ceil(Ge.count/4),lt=Be%E.width,V=Math.floor(Be/E.width),we=be,ye=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,lt,V,we,ye,G,de,E.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,qe),s.pixelStorei(s.UNPACK_SKIP_ROWS,it)}}function ie(D,E,G){let de=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=s.TEXTURE_3D);const me=Ae(D,E),ce=E.source;t.bindTexture(de,D.__webglTexture,s.TEXTURE0+G);const Oe=r.get(ce);if(ce.version!==Oe.__version||me===!0){t.activeTexture(s.TEXTURE0+G);const Te=Et.getPrimaries(Et.workingColorSpace),qe=E.colorSpace===Rr?null:Et.getPrimaries(E.colorSpace),it=E.colorSpace===Rr||Te===qe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let xe=R(E.image,!1,a.maxTextureSize);xe=St(E,xe);const Ee=l.convert(E.format,E.colorSpace),Ge=l.convert(E.type);let Be=b(E.internalFormat,Ee,Ge,E.colorSpace,E.isVideoTexture);q(de,E);let be;const lt=E.mipmaps,V=E.isVideoTexture!==!0,we=Oe.__version===void 0||me===!0,ye=ce.dataReady,Le=F(E,xe);if(E.isDepthTexture)Be=P(E.format===ns,E.type),we&&(V?t.texStorage2D(s.TEXTURE_2D,1,Be,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,Be,xe.width,xe.height,0,Ee,Ge,null));else if(E.isDataTexture)if(lt.length>0){V&&we&&t.texStorage2D(s.TEXTURE_2D,Le,Be,lt[0].width,lt[0].height);for(let Se=0,fe=lt.length;Se<fe;Se++)be=lt[Se],V?ye&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,be.width,be.height,Ee,Ge,be.data):t.texImage2D(s.TEXTURE_2D,Se,Be,be.width,be.height,0,Ee,Ge,be.data);E.generateMipmaps=!1}else V?(we&&t.texStorage2D(s.TEXTURE_2D,Le,Be,xe.width,xe.height),ye&&Ke(E,xe,Ee,Ge)):t.texImage2D(s.TEXTURE_2D,0,Be,xe.width,xe.height,0,Ee,Ge,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Be,lt[0].width,lt[0].height,xe.depth);for(let Se=0,fe=lt.length;Se<fe;Se++)if(be=lt[Se],E.format!==pi)if(Ee!==null)if(V){if(ye)if(E.layerUpdates.size>0){const ke=Wm(be.width,be.height,E.format,E.type);for(const rt of E.layerUpdates){const bt=be.data.subarray(rt*ke/be.data.BYTES_PER_ELEMENT,(rt+1)*ke/be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,rt,be.width,be.height,1,Ee,bt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,be.width,be.height,xe.depth,Ee,be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,Be,be.width,be.height,xe.depth,0,be.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?ye&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,be.width,be.height,xe.depth,Ee,Ge,be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,Be,be.width,be.height,xe.depth,0,Ee,Ge,be.data)}else{V&&we&&t.texStorage2D(s.TEXTURE_2D,Le,Be,lt[0].width,lt[0].height);for(let Se=0,fe=lt.length;Se<fe;Se++)be=lt[Se],E.format!==pi?Ee!==null?V?ye&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,be.width,be.height,Ee,be.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,Be,be.width,be.height,0,be.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ye&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,be.width,be.height,Ee,Ge,be.data):t.texImage2D(s.TEXTURE_2D,Se,Be,be.width,be.height,0,Ee,Ge,be.data)}else if(E.isDataArrayTexture)if(V){if(we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Le,Be,xe.width,xe.height,xe.depth),ye)if(E.layerUpdates.size>0){const Se=Wm(xe.width,xe.height,E.format,E.type);for(const fe of E.layerUpdates){const ke=xe.data.subarray(fe*Se/xe.data.BYTES_PER_ELEMENT,(fe+1)*Se/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,xe.width,xe.height,1,Ee,Ge,ke)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ee,Ge,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Be,xe.width,xe.height,xe.depth,0,Ee,Ge,xe.data);else if(E.isData3DTexture)V?(we&&t.texStorage3D(s.TEXTURE_3D,Le,Be,xe.width,xe.height,xe.depth),ye&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ee,Ge,xe.data)):t.texImage3D(s.TEXTURE_3D,0,Be,xe.width,xe.height,xe.depth,0,Ee,Ge,xe.data);else if(E.isFramebufferTexture){if(we)if(V)t.texStorage2D(s.TEXTURE_2D,Le,Be,xe.width,xe.height);else{let Se=xe.width,fe=xe.height;for(let ke=0;ke<Le;ke++)t.texImage2D(s.TEXTURE_2D,ke,Be,Se,fe,0,Ee,Ge,null),Se>>=1,fe>>=1}}else if(lt.length>0){if(V&&we){const Se=He(lt[0]);t.texStorage2D(s.TEXTURE_2D,Le,Be,Se.width,Se.height)}for(let Se=0,fe=lt.length;Se<fe;Se++)be=lt[Se],V?ye&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ee,Ge,be):t.texImage2D(s.TEXTURE_2D,Se,Be,Ee,Ge,be);E.generateMipmaps=!1}else if(V){if(we){const Se=He(xe);t.texStorage2D(s.TEXTURE_2D,Le,Be,Se.width,Se.height)}ye&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Ge,xe)}else t.texImage2D(s.TEXTURE_2D,0,Be,Ee,Ge,xe);x(E)&&_(de),Oe.__version=ce.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function pe(D,E,G){if(E.image.length!==6)return;const de=Ae(D,E),me=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+G);const ce=r.get(me);if(me.version!==ce.__version||de===!0){t.activeTexture(s.TEXTURE0+G);const Oe=Et.getPrimaries(Et.workingColorSpace),Te=E.colorSpace===Rr?null:Et.getPrimaries(E.colorSpace),qe=E.colorSpace===Rr||Oe===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);const it=E.isCompressedTexture||E.image[0].isCompressedTexture,xe=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let fe=0;fe<6;fe++)!it&&!xe?Ee[fe]=R(E.image[fe],!0,a.maxCubemapSize):Ee[fe]=xe?E.image[fe].image:E.image[fe],Ee[fe]=St(E,Ee[fe]);const Ge=Ee[0],Be=l.convert(E.format,E.colorSpace),be=l.convert(E.type),lt=b(E.internalFormat,Be,be,E.colorSpace),V=E.isVideoTexture!==!0,we=ce.__version===void 0||de===!0,ye=me.dataReady;let Le=F(E,Ge);q(s.TEXTURE_CUBE_MAP,E);let Se;if(it){V&&we&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,lt,Ge.width,Ge.height);for(let fe=0;fe<6;fe++){Se=Ee[fe].mipmaps;for(let ke=0;ke<Se.length;ke++){const rt=Se[ke];E.format!==pi?Be!==null?V?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,0,0,rt.width,rt.height,Be,rt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,lt,rt.width,rt.height,0,rt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,0,0,rt.width,rt.height,Be,be,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,lt,rt.width,rt.height,0,Be,be,rt.data)}}}else{if(Se=E.mipmaps,V&&we){Se.length>0&&Le++;const fe=He(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Le,lt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(xe){V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ee[fe].width,Ee[fe].height,Be,be,Ee[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,lt,Ee[fe].width,Ee[fe].height,0,Be,be,Ee[fe].data);for(let ke=0;ke<Se.length;ke++){const bt=Se[ke].image[fe].image;V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,0,0,bt.width,bt.height,Be,be,bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,lt,bt.width,bt.height,0,Be,be,bt.data)}}else{V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Be,be,Ee[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,lt,Be,be,Ee[fe]);for(let ke=0;ke<Se.length;ke++){const rt=Se[ke];V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,0,0,Be,be,rt.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,lt,Be,be,rt.image[fe])}}}x(E)&&_(s.TEXTURE_CUBE_MAP),ce.__version=me.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function he(D,E,G,de,me,ce){const Oe=l.convert(G.format,G.colorSpace),Te=l.convert(G.type),qe=b(G.internalFormat,Oe,Te,G.colorSpace),it=r.get(E),xe=r.get(G);if(xe.__renderTarget=E,!it.__hasExternalTextures){const Ee=Math.max(1,E.width>>ce),Ge=Math.max(1,E.height>>ce);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,ce,qe,Ee,Ge,E.depth,0,Oe,Te,null):t.texImage2D(me,ce,qe,Ee,Ge,0,Oe,Te,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Bt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,me,xe.__webglTexture,0,z(E)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,me,xe.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ue(D,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,D),E.depthBuffer){const de=E.depthTexture,me=de&&de.isDepthTexture?de.type:null,ce=P(E.stencilBuffer,me),Oe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Bt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(E),ce,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(E),ce,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ce,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,D)}else{const de=E.textures;for(let me=0;me<de.length;me++){const ce=de[me],Oe=l.convert(ce.format,ce.colorSpace),Te=l.convert(ce.type),qe=b(ce.internalFormat,Oe,Te,ce.colorSpace);Bt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(E),qe,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(E),qe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,qe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ve(D,E,G){const de=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),q(s.TEXTURE_CUBE_MAP,E.depthTexture);const it=l.convert(E.depthTexture.format),xe=l.convert(E.depthTexture.type);let Ee;E.depthTexture.format===Qi?Ee=s.DEPTH_COMPONENT24:E.depthTexture.format===ns&&(Ee=s.DEPTH24_STENCIL8);for(let Ge=0;Ge<6;Ge++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ge,0,Ee,E.width,E.height,0,it,xe,null)}}else Q(E.depthTexture,0);const ce=me.__webglTexture,Oe=z(E),Te=de?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,qe=E.depthTexture.format===ns?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===Qi)Bt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,qe,Te,ce,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,qe,Te,ce,0);else if(E.depthTexture.format===ns)Bt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,qe,Te,ce,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,qe,Te,ce,0);else throw new Error("Unknown depthTexture format")}function nt(D){const E=r.get(D),G=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const de=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),de){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,de.removeEventListener("dispose",me)};de.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=de}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let de=0;de<6;de++)Ve(E.__webglFramebuffer[de],D,de);else{const de=D.texture.mipmaps;de&&de.length>0?Ve(E.__webglFramebuffer[0],D,0):Ve(E.__webglFramebuffer,D,0)}else if(G){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]===void 0)E.__webglDepthbuffer[de]=s.createRenderbuffer(),Ue(E.__webglDepthbuffer[de],D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ce)}}else{const de=D.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Ue(E.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ce)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(D,E,G){const de=r.get(D);E!==void 0&&he(de.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&nt(D)}function ht(D){const E=D.texture,G=r.get(D),de=r.get(E);D.addEventListener("dispose",B);const me=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Oe=me.length>1;if(Oe||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=E.version,c.memory.textures++),ce){G.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Te]=[];for(let qe=0;qe<E.mipmaps.length;qe++)G.__webglFramebuffer[Te][qe]=s.createFramebuffer()}else G.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)G.__webglFramebuffer[Te]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let Te=0,qe=me.length;Te<qe;Te++){const it=r.get(me[Te]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&Bt(D)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){const qe=me[Te];G.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[Te]);const it=l.convert(qe.format,qe.colorSpace),xe=l.convert(qe.type),Ee=b(qe.internalFormat,it,xe,qe.colorSpace,D.isXRRenderTarget===!0),Ge=z(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ge,Ee,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,G.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ue(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),q(s.TEXTURE_CUBE_MAP,E);for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)he(G.__webglFramebuffer[Te][qe],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,qe);else he(G.__webglFramebuffer[Te],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);x(E)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let Te=0,qe=me.length;Te<qe;Te++){const it=me[Te],xe=r.get(it);let Ee=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ee,xe.__webglTexture),q(Ee,it),he(G.__webglFramebuffer,D,it,s.COLOR_ATTACHMENT0+Te,Ee,0),x(it)&&_(Ee)}t.unbindTexture()}else{let Te=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,de.__webglTexture),q(Te,E),E.mipmaps&&E.mipmaps.length>0)for(let qe=0;qe<E.mipmaps.length;qe++)he(G.__webglFramebuffer[qe],D,E,s.COLOR_ATTACHMENT0,Te,qe);else he(G.__webglFramebuffer,D,E,s.COLOR_ATTACHMENT0,Te,0);x(E)&&_(Te),t.unbindTexture()}D.depthBuffer&&nt(D)}function xt(D){const E=D.textures;for(let G=0,de=E.length;G<de;G++){const me=E[G];if(x(me)){const ce=C(D),Oe=r.get(me).__webglTexture;t.bindTexture(ce,Oe),_(ce),t.unbindTexture()}}}const Rt=[],ut=[];function Ut(D){if(D.samples>0){if(Bt(D)===!1){const E=D.textures,G=D.width,de=D.height;let me=s.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=r.get(D),Te=E.length>1;if(Te)for(let it=0;it<E.length;it++)t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const qe=D.texture.mipmaps;qe&&qe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let it=0;it<E.length;it++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[it]);const xe=r.get(E[it]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xe,0)}s.blitFramebuffer(0,0,G,de,0,0,G,de,me,s.NEAREST),h===!0&&(Rt.length=0,ut.length=0,Rt.push(s.COLOR_ATTACHMENT0+it),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Rt.push(ce),ut.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let it=0;it<E.length;it++){t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[it]);const xe=r.get(E[it]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const E=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function z(D){return Math.min(a.maxSamples,D.samples)}function Bt(D){const E=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(D){const E=c.render.frame;v.get(D)!==E&&(v.set(D,E),D.update())}function St(D,E){const G=D.colorSpace,de=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==$s&&G!==Rr&&(Et.getTransfer(G)===Lt?(de!==pi||me!==Gn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",G)),E}function He(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=Z,this.resetTextureUnits=J,this.setTexture2D=Q,this.setTexture2DArray=ne,this.setTexture3D=W,this.setTextureCube=K,this.rebindTextures=Yt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function W1(s,e){function t(r,a=Rr){let l;const c=Et.getTransfer(a);if(r===Gn)return s.UNSIGNED_BYTE;if(r===Sd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===yd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===wg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ag)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Eg)return s.BYTE;if(r===Tg)return s.SHORT;if(r===Qo)return s.UNSIGNED_SHORT;if(r===xd)return s.INT;if(r===Pi)return s.UNSIGNED_INT;if(r===Ti)return s.FLOAT;if(r===Ji)return s.HALF_FLOAT;if(r===Cg)return s.ALPHA;if(r===Rg)return s.RGB;if(r===pi)return s.RGBA;if(r===Qi)return s.DEPTH_COMPONENT;if(r===ns)return s.DEPTH_STENCIL;if(r===Pg)return s.RED;if(r===Md)return s.RED_INTEGER;if(r===Ks)return s.RG;if(r===Ed)return s.RG_INTEGER;if(r===Td)return s.RGBA_INTEGER;if(r===Xl||r===Yl||r===ql||r===jl)if(c===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Xl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Xl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Uf||r===Ff||r===Of||r===Bf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Uf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ff)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Of)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Bf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===kf||r===zf||r===Vf||r===Hf||r===Gf||r===Wf||r===Xf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===kf||r===zf)return c===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Vf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Hf)return l.COMPRESSED_R11_EAC;if(r===Gf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Wf)return l.COMPRESSED_RG11_EAC;if(r===Xf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Yf||r===qf||r===jf||r===Zf||r===Kf||r===$f||r===Jf||r===Qf||r===ed||r===td||r===nd||r===id||r===rd||r===sd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Yf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Zf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Kf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===$f)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===ed)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===td)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===nd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===id)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===rd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===sd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===od||r===ad||r===ld)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===od)return c===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ad)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===ld)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ud||r===cd||r===fd||r===dd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ud)return l.COMPRESSED_RED_RGTC1_EXT;if(r===cd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===fd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===dd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ea?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const X1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Y1=`
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

}`;class q1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new kg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Li({vertexShader:X1,fragmentShader:Y1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new an(new eu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class j1 extends eo{constructor(e,t){super();const r=this;let a=null,l=1,c=null,f="local-floor",h=1,p=null,v=null,S=null,g=null,y=null,M=null;const R=typeof XRWebGLBinding<"u",x=new q1,_={},C=t.getContextAttributes();let b=null,P=null;const F=[],I=[],B=new Je;let w=null;const L=new ti;L.viewport=new Xt;const ae=new ti;ae.viewport=new Xt;const O=[L,ae],J=new oS;let Z=null,le=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let pe=F[ie];return pe===void 0&&(pe=new Zc,F[ie]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ie){let pe=F[ie];return pe===void 0&&(pe=new Zc,F[ie]=pe),pe.getGripSpace()},this.getHand=function(ie){let pe=F[ie];return pe===void 0&&(pe=new Zc,F[ie]=pe),pe.getHandSpace()};function Q(ie){const pe=I.indexOf(ie.inputSource);if(pe===-1)return;const he=F[pe];he!==void 0&&(he.update(ie.inputSource,ie.frame,p||c),he.dispatchEvent({type:ie.type,data:ie.inputSource}))}function ne(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",ne),a.removeEventListener("inputsourceschange",W);for(let ie=0;ie<F.length;ie++){const pe=I[ie];pe!==null&&(I[ie]=null,F[ie].disconnect(pe))}Z=null,le=null,x.reset();for(const ie in _)delete _[ie];e.setRenderTarget(b),y=null,g=null,S=null,a=null,P=null,Ke.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){l=ie,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){f=ie,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(ie){p=ie},this.getBaseLayer=function(){return g!==null?g:y},this.getBinding=function(){return S===null&&R&&(S=new XRWebGLBinding(a,t)),S},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(ie){if(a=ie,a!==null){if(b=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",ne),a.addEventListener("inputsourceschange",W),C.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(B),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ue=null,Ve=null;C.depth&&(Ve=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=C.stencil?ns:Qi,Ue=C.stencil?ea:Pi);const nt={colorFormat:t.RGBA8,depthFormat:Ve,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(nt),a.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Ci(g.textureWidth,g.textureHeight,{format:pi,type:Gn,depthTexture:new ia(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const he={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:l};y=new XRWebGLLayer(a,t,he),a.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),P=new Ci(y.framebufferWidth,y.framebufferHeight,{format:pi,type:Gn,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await a.requestReferenceSpace(f),Ke.setContext(a),Ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function W(ie){for(let pe=0;pe<ie.removed.length;pe++){const he=ie.removed[pe],Ue=I.indexOf(he);Ue>=0&&(I[Ue]=null,F[Ue].disconnect(he))}for(let pe=0;pe<ie.added.length;pe++){const he=ie.added[pe];let Ue=I.indexOf(he);if(Ue===-1){for(let nt=0;nt<F.length;nt++)if(nt>=I.length){I.push(he),Ue=nt;break}else if(I[nt]===null){I[nt]=he,Ue=nt;break}if(Ue===-1)break}const Ve=F[Ue];Ve&&Ve.connect(he)}}const K=new Y,oe=new Y;function ue(ie,pe,he){K.setFromMatrixPosition(pe.matrixWorld),oe.setFromMatrixPosition(he.matrixWorld);const Ue=K.distanceTo(oe),Ve=pe.projectionMatrix.elements,nt=he.projectionMatrix.elements,Yt=Ve[14]/(Ve[10]-1),ht=Ve[14]/(Ve[10]+1),xt=(Ve[9]+1)/Ve[5],Rt=(Ve[9]-1)/Ve[5],ut=(Ve[8]-1)/Ve[0],Ut=(nt[8]+1)/nt[0],z=Yt*ut,Bt=Yt*Ut,gt=Ue/(-ut+Ut),St=gt*-ut;if(pe.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(St),ie.translateZ(gt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ve[10]===-1)ie.projectionMatrix.copy(pe.projectionMatrix),ie.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const He=Yt+gt,D=ht+gt,E=z-St,G=Bt+(Ue-St),de=xt*ht/D*He,me=Rt*ht/D*He;ie.projectionMatrix.makePerspective(E,G,de,me,He,D),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function U(ie,pe){pe===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(pe.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(a===null)return;let pe=ie.near,he=ie.far;x.texture!==null&&(x.depthNear>0&&(pe=x.depthNear),x.depthFar>0&&(he=x.depthFar)),J.near=ae.near=L.near=pe,J.far=ae.far=L.far=he,(Z!==J.near||le!==J.far)&&(a.updateRenderState({depthNear:J.near,depthFar:J.far}),Z=J.near,le=J.far),J.layers.mask=ie.layers.mask|6,L.layers.mask=J.layers.mask&-5,ae.layers.mask=J.layers.mask&-3;const Ue=ie.parent,Ve=J.cameras;U(J,Ue);for(let nt=0;nt<Ve.length;nt++)U(Ve[nt],Ue);Ve.length===2?ue(J,L,ae):J.projectionMatrix.copy(L.projectionMatrix),q(ie,J,Ue)};function q(ie,pe,he){he===null?ie.matrix.copy(pe.matrixWorld):(ie.matrix.copy(he.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(pe.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(pe.projectionMatrix),ie.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=na*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(g===null&&y===null))return h},this.setFoveation=function(ie){h=ie,g!==null&&(g.fixedFoveation=ie),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ie)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(J)},this.getCameraTexture=function(ie){return _[ie]};let Ae=null;function We(ie,pe){if(v=pe.getViewerPose(p||c),M=pe,v!==null){const he=v.views;y!==null&&(e.setRenderTargetFramebuffer(P,y.framebuffer),e.setRenderTarget(P));let Ue=!1;he.length!==J.cameras.length&&(J.cameras.length=0,Ue=!0);for(let ht=0;ht<he.length;ht++){const xt=he[ht];let Rt=null;if(y!==null)Rt=y.getViewport(xt);else{const Ut=S.getViewSubImage(g,xt);Rt=Ut.viewport,ht===0&&(e.setRenderTargetTextures(P,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(P))}let ut=O[ht];ut===void 0&&(ut=new ti,ut.layers.enable(ht),ut.viewport=new Xt,O[ht]=ut),ut.matrix.fromArray(xt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(xt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),ht===0&&(J.matrix.copy(ut.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ue===!0&&J.cameras.push(ut)}const Ve=a.enabledFeatures;if(Ve&&Ve.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&R){S=r.getBinding();const ht=S.getDepthInformation(he[0]);ht&&ht.isValid&&ht.texture&&x.init(ht,a.renderState)}if(Ve&&Ve.includes("camera-access")&&R){e.state.unbindTexture(),S=r.getBinding();for(let ht=0;ht<he.length;ht++){const xt=he[ht].camera;if(xt){let Rt=_[xt];Rt||(Rt=new kg,_[xt]=Rt);const ut=S.getCameraImage(xt);Rt.sourceTexture=ut}}}}for(let he=0;he<F.length;he++){const Ue=I[he],Ve=F[he];Ue!==null&&Ve!==void 0&&Ve.update(Ue,pe,p||c)}Ae&&Ae(ie,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),M=null}const Ke=new Jg;Ke.setAnimationLoop(We),this.setAnimationLoop=function(ie){Ae=ie},this.dispose=function(){}}}const $r=new bi,Z1=new Gt;function K1(s,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,Zg(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function a(x,_,C,b,P){_.isMeshBasicMaterial?l(x,_):_.isMeshLambertMaterial?(l(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(x,_),S(x,_)):_.isMeshPhongMaterial?(l(x,_),v(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(x,_),g(x,_),_.isMeshPhysicalMaterial&&y(x,_,P)):_.isMeshMatcapMaterial?(l(x,_),M(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),R(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&f(x,_)):_.isPointsMaterial?h(x,_,C,b):_.isSpriteMaterial?p(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===Un&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===Un&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const C=e.get(_),b=C.envMap,P=C.envMapRotation;b&&(x.envMap.value=b,$r.copy(P),$r.x*=-1,$r.y*=-1,$r.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),x.envMapRotation.value.setFromMatrix4(Z1.makeRotationFromEuler($r)),x.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function f(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,C,b){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*C,x.scale.value=b*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function v(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function S(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function y(x,_,C){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Un&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,_){_.matcap&&(x.matcap.value=_.matcap)}function R(x,_){const C=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function $1(s,e,t,r){let a={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(C,b){const P=b.program;r.uniformBlockBinding(C,P)}function p(C,b){let P=a[C.id];P===void 0&&(M(C),P=v(C),a[C.id]=P,C.addEventListener("dispose",x));const F=b.program;r.updateUBOMapping(C,F);const I=e.render.frame;l[C.id]!==I&&(g(C),l[C.id]=I)}function v(C){const b=S();C.__bindingPointIndex=b;const P=s.createBuffer(),F=C.__size,I=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,F,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,P),P}function S(){for(let C=0;C<f;C++)if(c.indexOf(C)===-1)return c.push(C),C;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(C){const b=a[C.id],P=C.uniforms,F=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let I=0,B=P.length;I<B;I++){const w=Array.isArray(P[I])?P[I]:[P[I]];for(let L=0,ae=w.length;L<ae;L++){const O=w[L];if(y(O,I,L,F)===!0){const J=O.__offset,Z=Array.isArray(O.value)?O.value:[O.value];let le=0;for(let Q=0;Q<Z.length;Q++){const ne=Z[Q],W=R(ne);typeof ne=="number"||typeof ne=="boolean"?(O.__data[0]=ne,s.bufferSubData(s.UNIFORM_BUFFER,J+le,O.__data)):ne.isMatrix3?(O.__data[0]=ne.elements[0],O.__data[1]=ne.elements[1],O.__data[2]=ne.elements[2],O.__data[3]=0,O.__data[4]=ne.elements[3],O.__data[5]=ne.elements[4],O.__data[6]=ne.elements[5],O.__data[7]=0,O.__data[8]=ne.elements[6],O.__data[9]=ne.elements[7],O.__data[10]=ne.elements[8],O.__data[11]=0):(ne.toArray(O.__data,le),le+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,J,O.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(C,b,P,F){const I=C.value,B=b+"_"+P;if(F[B]===void 0)return typeof I=="number"||typeof I=="boolean"?F[B]=I:F[B]=I.clone(),!0;{const w=F[B];if(typeof I=="number"||typeof I=="boolean"){if(w!==I)return F[B]=I,!0}else if(w.equals(I)===!1)return w.copy(I),!0}return!1}function M(C){const b=C.uniforms;let P=0;const F=16;for(let B=0,w=b.length;B<w;B++){const L=Array.isArray(b[B])?b[B]:[b[B]];for(let ae=0,O=L.length;ae<O;ae++){const J=L[ae],Z=Array.isArray(J.value)?J.value:[J.value];for(let le=0,Q=Z.length;le<Q;le++){const ne=Z[le],W=R(ne),K=P%F,oe=K%W.boundary,ue=K+oe;P+=oe,ue!==0&&F-ue<W.storage&&(P+=F-ue),J.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),J.__offset=P,P+=W.storage}}}const I=P%F;return I>0&&(P+=F-I),C.__size=P,C.__cache={},this}function R(C){const b={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(b.boundary=4,b.storage=4):C.isVector2?(b.boundary=8,b.storage=8):C.isVector3||C.isColor?(b.boundary=16,b.storage=12):C.isVector4?(b.boundary=16,b.storage=16):C.isMatrix3?(b.boundary=48,b.storage=48):C.isMatrix4?(b.boundary=64,b.storage=64):C.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",C),b}function x(C){const b=C.target;b.removeEventListener("dispose",x);const P=c.indexOf(b.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(a[b.id]),delete a[b.id],delete l[b.id]}function _(){for(const C in a)s.deleteBuffer(a[C]);c=[],a={},l={}}return{bind:h,update:p,dispose:_}}const J1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yi=null;function Q1(){return yi===null&&(yi=new dx(J1,16,16,Ks,Ji),yi.name="DFG_LUT",yi.minFilter=_n,yi.magFilter=_n,yi.wrapS=Zi,yi.wrapT=Zi,yi.generateMipmaps=!1,yi.needsUpdate=!0),yi}class eT{constructor(e={}){const{canvas:t=A_(),context:r=null,depth:a=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:y=Gn}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const R=y,x=new Set([Td,Ed,Md]),_=new Set([Gn,Pi,Qo,ea,Sd,yd]),C=new Uint32Array(4),b=new Int32Array(4);let P=null,F=null;const I=[],B=[];let w=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ai,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let ae=!1;this._outputColorSpace=ei;let O=0,J=0,Z=null,le=-1,Q=null;const ne=new Xt,W=new Xt;let K=null;const oe=new Ct(0);let ue=0,U=t.width,q=t.height,Ae=1,We=null,Ke=null;const ie=new Xt(0,0,U,q),pe=new Xt(0,0,U,q);let he=!1;const Ue=new bd;let Ve=!1,nt=!1;const Yt=new Gt,ht=new Y,xt=new Xt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Ut(){return Z===null?Ae:1}let z=r;function Bt(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${_d}`),t.addEventListener("webglcontextlost",ke,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",bt,!1),z===null){const X="webgl2";if(z=Bt(X,A),z===null)throw Bt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw wt("WebGLRenderer: "+A.message),A}let gt,St,He,D,E,G,de,me,ce,Oe,Te,qe,it,xe,Ee,Ge,Be,be,lt,V,we,ye,Le;function Se(){gt=new eE(z),gt.init(),we=new W1(z,gt),St=new YM(z,gt,e,we),He=new H1(z,gt),St.reversedDepthBuffer&&g&&He.buffers.depth.setReversed(!0),D=new iE(z),E=new R1,G=new G1(z,gt,He,E,St,we,D),de=new QM(L),me=new lS(z),ye=new WM(z,me),ce=new tE(z,me,D,ye),Oe=new sE(z,ce,me,ye,D),be=new rE(z,St,G),Ee=new qM(E),Te=new C1(L,de,gt,St,ye,Ee),qe=new K1(L,E),it=new b1,xe=new F1(gt),Be=new GM(L,de,He,Oe,M,h),Ge=new V1(L,Oe,St),Le=new $1(z,D,St,He),lt=new XM(z,gt,D),V=new nE(z,gt,D),D.programs=Te.programs,L.capabilities=St,L.extensions=gt,L.properties=E,L.renderLists=it,L.shadowMap=Ge,L.state=He,L.info=D}Se(),R!==Gn&&(w=new aE(R,t.width,t.height,a,l));const fe=new j1(L,z);this.xr=fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(A){A!==void 0&&(Ae=A,this.setSize(U,q,!1))},this.getSize=function(A){return A.set(U,q)},this.setSize=function(A,X,se=!0){if(fe.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,q=X,t.width=Math.floor(A*Ae),t.height=Math.floor(X*Ae),se===!0&&(t.style.width=A+"px",t.style.height=X+"px"),w!==null&&w.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(U*Ae,q*Ae).floor()},this.setDrawingBufferSize=function(A,X,se){U=A,q=X,Ae=se,t.width=Math.floor(A*se),t.height=Math.floor(X*se),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(R===Gn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}w.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ne)},this.getViewport=function(A){return A.copy(ie)},this.setViewport=function(A,X,se,te){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,X,se,te),He.viewport(ne.copy(ie).multiplyScalar(Ae).round())},this.getScissor=function(A){return A.copy(pe)},this.setScissor=function(A,X,se,te){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,X,se,te),He.scissor(W.copy(pe).multiplyScalar(Ae).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(A){He.setScissorTest(he=A)},this.setOpaqueSort=function(A){We=A},this.setTransparentSort=function(A){Ke=A},this.getClearColor=function(A){return A.copy(Be.getClearColor())},this.setClearColor=function(){Be.setClearColor(...arguments)},this.getClearAlpha=function(){return Be.getClearAlpha()},this.setClearAlpha=function(){Be.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,se=!0){let te=0;if(A){let $=!1;if(Z!==null){const Re=Z.texture.format;$=x.has(Re)}if($){const Re=Z.texture.type,Ie=_.has(Re),Ce=Be.getClearColor(),De=Be.getClearAlpha(),Ze=Ce.r,Qe=Ce.g,ct=Ce.b;Ie?(C[0]=Ze,C[1]=Qe,C[2]=ct,C[3]=De,z.clearBufferuiv(z.COLOR,0,C)):(b[0]=Ze,b[1]=Qe,b[2]=ct,b[3]=De,z.clearBufferiv(z.COLOR,0,b))}else te|=z.COLOR_BUFFER_BIT}X&&(te|=z.DEPTH_BUFFER_BIT),se&&(te|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&z.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ke,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),Be.dispose(),it.dispose(),xe.dispose(),E.dispose(),de.dispose(),Oe.dispose(),ye.dispose(),Le.dispose(),Te.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",er),fe.removeEventListener("sessionend",Lr),Xn.stop()};function ke(A){A.preventDefault(),vm("WebGLRenderer: Context Lost."),ae=!0}function rt(){vm("WebGLRenderer: Context Restored."),ae=!1;const A=D.autoReset,X=Ge.enabled,se=Ge.autoUpdate,te=Ge.needsUpdate,$=Ge.type;Se(),D.autoReset=A,Ge.enabled=X,Ge.autoUpdate=se,Ge.needsUpdate=te,Ge.type=$}function bt(A){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function yt(A){const X=A.target;X.removeEventListener("dispose",yt),Wn(X)}function Wn(A){Sn(A),E.remove(A)}function Sn(A){const X=E.get(A).programs;X!==void 0&&(X.forEach(function(se){Te.releaseProgram(se)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,se,te,$,Re){X===null&&(X=Rt);const Ie=$.isMesh&&$.matrixWorld.determinant()<0,Ce=ha(A,X,se,te,$);He.setMaterial(te,Ie);let De=se.index,Ze=1;if(te.wireframe===!0){if(De=ce.getWireframeAttribute(se),De===void 0)return;Ze=2}const Qe=se.drawRange,ct=se.attributes.position;let $e=Qe.start*Ze,Pt=(Qe.start+Qe.count)*Ze;Re!==null&&($e=Math.max($e,Re.start*Ze),Pt=Math.min(Pt,(Re.start+Re.count)*Ze)),De!==null?($e=Math.max($e,0),Pt=Math.min(Pt,De.count)):ct!=null&&($e=Math.max($e,0),Pt=Math.min(Pt,ct.count));const Nt=Pt-$e;if(Nt<0||Nt===1/0)return;ye.setup($,te,Ce,se,De);let Dt,_t=lt;if(De!==null&&(Dt=me.get(De),_t=V,_t.setIndex(Dt)),$.isMesh)te.wireframe===!0?(He.setLineWidth(te.wireframeLinewidth*Ut()),_t.setMode(z.LINES)):_t.setMode(z.TRIANGLES);else if($.isLine){let qt=te.linewidth;qt===void 0&&(qt=1),He.setLineWidth(qt*Ut()),$.isLineSegments?_t.setMode(z.LINES):$.isLineLoop?_t.setMode(z.LINE_LOOP):_t.setMode(z.LINE_STRIP)}else $.isPoints?_t.setMode(z.POINTS):$.isSprite&&_t.setMode(z.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)Jl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))_t.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const qt=$._multiDrawStarts,Ye=$._multiDrawCounts,yn=$._multiDrawCount,vt=De?me.get(De).bytesPerElement:1,Cn=E.get(te).currentProgram.getUniforms();for(let Rn=0;Rn<yn;Rn++)Cn.setValue(z,"_gl_DrawID",Rn),_t.render(qt[Rn]/vt,Ye[Rn])}else if($.isInstancedMesh)_t.renderInstances($e,Nt,$.count);else if(se.isInstancedBufferGeometry){const qt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ye=Math.min(se.instanceCount,qt);_t.renderInstances($e,Nt,Ye)}else _t.render($e,Nt)};function os(A,X,se){A.transparent===!0&&A.side===Ei&&A.forceSinglePass===!1?(A.side=Un,A.needsUpdate=!0,Nr(A,X,se),A.side=br,A.needsUpdate=!0,Nr(A,X,se),A.side=Ei):Nr(A,X,se)}this.compile=function(A,X,se=null){se===null&&(se=A),F=xe.get(se),F.init(X),B.push(F),se.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(F.pushLight($),$.castShadow&&F.pushShadow($))}),A!==se&&A.traverseVisible(function($){$.isLight&&$.layers.test(X.layers)&&(F.pushLight($),$.castShadow&&F.pushShadow($))}),F.setupLights();const te=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Re=$.material;if(Re)if(Array.isArray(Re))for(let Ie=0;Ie<Re.length;Ie++){const Ce=Re[Ie];os(Ce,se,$),te.add(Ce)}else os(Re,se,$),te.add(Re)}),F=B.pop(),te},this.compileAsync=function(A,X,se=null){const te=this.compile(A,X,se);return new Promise($=>{function Re(){if(te.forEach(function(Ie){E.get(Ie).currentProgram.isReady()&&te.delete(Ie)}),te.size===0){$(A);return}setTimeout(Re,10)}gt.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let Ni=null;function iu(A){Ni&&Ni(A)}function er(){Xn.stop()}function Lr(){Xn.start()}const Xn=new Jg;Xn.setAnimationLoop(iu),typeof self<"u"&&Xn.setContext(self),this.setAnimationLoop=function(A){Ni=A,fe.setAnimationLoop(A),A===null?Xn.stop():Xn.start()},fe.addEventListener("sessionstart",er),fe.addEventListener("sessionend",Lr),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(ae===!0)return;const se=fe.enabled===!0&&fe.isPresenting===!0,te=w!==null&&(Z===null||se)&&w.begin(L,Z);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(w===null||w.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(X),X=fe.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,X,Z),F=xe.get(A,B.length),F.init(X),B.push(F),Yt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Ue.setFromProjectionMatrix(Yt,wi,X.reversedDepth),nt=this.localClippingEnabled,Ve=Ee.init(this.clippingPlanes,nt),P=it.get(A,I.length),P.init(),I.push(P),fe.enabled===!0&&fe.isPresenting===!0){const Ie=L.xr.getDepthSensingMesh();Ie!==null&&Dr(Ie,X,-1/0,L.sortObjects)}Dr(A,X,0,L.sortObjects),P.finish(),L.sortObjects===!0&&P.sort(We,Ke),ut=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ut&&Be.addToRenderList(P,A),this.info.render.frame++,Ve===!0&&Ee.beginShadows();const $=F.state.shadowsArray;if(Ge.render($,A,X),Ve===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&w.hasRenderPass())===!1){const Ie=P.opaque,Ce=P.transmissive;if(F.setupLights(),X.isArrayCamera){const De=X.cameras;if(Ce.length>0)for(let Ze=0,Qe=De.length;Ze<Qe;Ze++){const ct=De[Ze];fa(Ie,Ce,A,ct)}ut&&Be.render(A);for(let Ze=0,Qe=De.length;Ze<Qe;Ze++){const ct=De[Ze];ca(P,A,ct,ct.viewport)}}else Ce.length>0&&fa(Ie,Ce,A,X),ut&&Be.render(A),ca(P,A,X)}Z!==null&&J===0&&(G.updateMultisampleRenderTarget(Z),G.updateRenderTargetMipmap(Z)),te&&w.end(L),A.isScene===!0&&A.onAfterRender(L,A,X),ye.resetDefaultState(),le=-1,Q=null,B.pop(),B.length>0?(F=B[B.length-1],Ve===!0&&Ee.setGlobalState(L.clippingPlanes,F.state.camera)):F=null,I.pop(),I.length>0?P=I[I.length-1]:P=null};function Dr(A,X,se,te){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)F.pushLight(A),A.castShadow&&F.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ue.intersectsSprite(A)){te&&xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Yt);const Ie=Oe.update(A),Ce=A.material;Ce.visible&&P.push(A,Ie,Ce,se,xt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ue.intersectsObject(A))){const Ie=Oe.update(A),Ce=A.material;if(te&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),xt.copy(A.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),xt.copy(Ie.boundingSphere.center)),xt.applyMatrix4(A.matrixWorld).applyMatrix4(Yt)),Array.isArray(Ce)){const De=Ie.groups;for(let Ze=0,Qe=De.length;Ze<Qe;Ze++){const ct=De[Ze],$e=Ce[ct.materialIndex];$e&&$e.visible&&P.push(A,Ie,$e,se,xt.z,ct)}}else Ce.visible&&P.push(A,Ie,Ce,se,xt.z,null)}}const Re=A.children;for(let Ie=0,Ce=Re.length;Ie<Ce;Ie++)Dr(Re[Ie],X,se,te)}function ca(A,X,se,te){const{opaque:$,transmissive:Re,transparent:Ie}=A;F.setupLightsView(se),Ve===!0&&Ee.setGlobalState(L.clippingPlanes,se),te&&He.viewport(ne.copy(te)),$.length>0&&as($,X,se),Re.length>0&&as(Re,X,se),Ie.length>0&&as(Ie,X,se),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function fa(A,X,se,te){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[te.id]===void 0){const $e=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[te.id]=new Ci(1,1,{generateMipmaps:!0,type:$e?Ji:Gn,minFilter:ts,samples:St.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Re=F.state.transmissionRenderTarget[te.id],Ie=te.viewport||ne;Re.setSize(Ie.z*L.transmissionResolutionScale,Ie.w*L.transmissionResolutionScale);const Ce=L.getRenderTarget(),De=L.getActiveCubeFace(),Ze=L.getActiveMipmapLevel();L.setRenderTarget(Re),L.getClearColor(oe),ue=L.getClearAlpha(),ue<1&&L.setClearColor(16777215,.5),L.clear(),ut&&Be.render(se);const Qe=L.toneMapping;L.toneMapping=Ai;const ct=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),F.setupLightsView(te),Ve===!0&&Ee.setGlobalState(L.clippingPlanes,te),as(A,se,te),G.updateMultisampleRenderTarget(Re),G.updateRenderTargetMipmap(Re),gt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let Pt=0,Nt=X.length;Pt<Nt;Pt++){const Dt=X[Pt],{object:_t,geometry:qt,material:Ye,group:yn}=Dt;if(Ye.side===Ei&&_t.layers.test(te.layers)){const vt=Ye.side;Ye.side=Un,Ye.needsUpdate=!0,mi(_t,se,te,qt,Ye,yn),Ye.side=vt,Ye.needsUpdate=!0,$e=!0}}$e===!0&&(G.updateMultisampleRenderTarget(Re),G.updateRenderTargetMipmap(Re))}L.setRenderTarget(Ce,De,Ze),L.setClearColor(oe,ue),ct!==void 0&&(te.viewport=ct),L.toneMapping=Qe}function as(A,X,se){const te=X.isScene===!0?X.overrideMaterial:null;for(let $=0,Re=A.length;$<Re;$++){const Ie=A[$],{object:Ce,geometry:De,group:Ze}=Ie;let Qe=Ie.material;Qe.allowOverride===!0&&te!==null&&(Qe=te),Ce.layers.test(se.layers)&&mi(Ce,X,se,De,Qe,Ze)}}function mi(A,X,se,te,$,Re){A.onBeforeRender(L,X,se,te,$,Re),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(L,X,se,te,A,Re),$.transparent===!0&&$.side===Ei&&$.forceSinglePass===!1?($.side=Un,$.needsUpdate=!0,L.renderBufferDirect(se,X,te,$,A,Re),$.side=br,$.needsUpdate=!0,L.renderBufferDirect(se,X,te,$,A,Re),$.side=Ei):L.renderBufferDirect(se,X,te,$,A,Re),A.onAfterRender(L,X,se,te,$,Re)}function Nr(A,X,se){X.isScene!==!0&&(X=Rt);const te=E.get(A),$=F.state.lights,Re=F.state.shadowsArray,Ie=$.state.version,Ce=Te.getParameters(A,$.state,Re,X,se),De=Te.getProgramCacheKey(Ce);let Ze=te.programs;te.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,te.fog=X.fog;const Qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;te.envMap=de.get(A.envMap||te.environment,Qe),te.envMapRotation=te.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",yt),Ze=new Map,te.programs=Ze);let ct=Ze.get(De);if(ct!==void 0){if(te.currentProgram===ct&&te.lightsStateVersion===Ie)return da(A,Ce),ct}else Ce.uniforms=Te.getUniforms(A),A.onBeforeCompile(Ce,L),ct=Te.acquireProgram(Ce,De),Ze.set(De,ct),te.uniforms=Ce.uniforms;const $e=te.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=Ee.uniform),da(A,Ce),te.needsLights=ma(A),te.lightsStateVersion=Ie,te.needsLights&&($e.ambientLightColor.value=$.state.ambient,$e.lightProbe.value=$.state.probe,$e.directionalLights.value=$.state.directional,$e.directionalLightShadows.value=$.state.directionalShadow,$e.spotLights.value=$.state.spot,$e.spotLightShadows.value=$.state.spotShadow,$e.rectAreaLights.value=$.state.rectArea,$e.ltc_1.value=$.state.rectAreaLTC1,$e.ltc_2.value=$.state.rectAreaLTC2,$e.pointLights.value=$.state.point,$e.pointLightShadows.value=$.state.pointShadow,$e.hemisphereLights.value=$.state.hemi,$e.directionalShadowMatrix.value=$.state.directionalShadowMatrix,$e.spotLightMatrix.value=$.state.spotLightMatrix,$e.spotLightMap.value=$.state.spotLightMap,$e.pointShadowMatrix.value=$.state.pointShadowMatrix),te.currentProgram=ct,te.uniformsList=null,ct}function io(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Zl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function da(A,X){const se=E.get(A);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function ha(A,X,se,te,$){X.isScene!==!0&&(X=Rt),G.resetTextureUnits();const Re=X.fog,Ie=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?X.environment:null,Ce=Z===null?L.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:$s,De=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ze=de.get(te.envMap||Ie,De),Qe=te.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ct=!!se.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),$e=!!se.morphAttributes.position,Pt=!!se.morphAttributes.normal,Nt=!!se.morphAttributes.color;let Dt=Ai;te.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Dt=L.toneMapping);const _t=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,qt=_t!==void 0?_t.length:0,Ye=E.get(te),yn=F.state.lights;if(Ve===!0&&(nt===!0||A!==Q)){const jt=A===Q&&te.id===le;Ee.setState(te,A,jt)}let vt=!1;te.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==yn.state.version||Ye.outputColorSpace!==Ce||$.isBatchedMesh&&Ye.batching===!1||!$.isBatchedMesh&&Ye.batching===!0||$.isBatchedMesh&&Ye.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Ye.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Ye.instancing===!1||!$.isInstancedMesh&&Ye.instancing===!0||$.isSkinnedMesh&&Ye.skinning===!1||!$.isSkinnedMesh&&Ye.skinning===!0||$.isInstancedMesh&&Ye.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ye.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ye.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ye.instancingMorph===!1&&$.morphTexture!==null||Ye.envMap!==Ze||te.fog===!0&&Ye.fog!==Re||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Ee.numPlanes||Ye.numIntersection!==Ee.numIntersection)||Ye.vertexAlphas!==Qe||Ye.vertexTangents!==ct||Ye.morphTargets!==$e||Ye.morphNormals!==Pt||Ye.morphColors!==Nt||Ye.toneMapping!==Dt||Ye.morphTargetsCount!==qt)&&(vt=!0):(vt=!0,Ye.__version=te.version);let Cn=Ye.currentProgram;vt===!0&&(Cn=Nr(te,X,$));let Rn=!1,Fn=!1,tr=!1;const At=Cn.getUniforms(),st=Ye.uniforms;if(He.useProgram(Cn.program)&&(Rn=!0,Fn=!0,tr=!0),te.id!==le&&(le=te.id,Fn=!0),Rn||Q!==A){He.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),At.setValue(z,"projectionMatrix",A.projectionMatrix),At.setValue(z,"viewMatrix",A.matrixWorldInverse);const Yn=At.map.cameraPosition;Yn!==void 0&&Yn.setValue(z,ht.setFromMatrixPosition(A.matrixWorld)),St.logarithmicDepthBuffer&&At.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&At.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,Fn=!0,tr=!0)}if(Ye.needsLights&&(yn.state.directionalShadowMap.length>0&&At.setValue(z,"directionalShadowMap",yn.state.directionalShadowMap,G),yn.state.spotShadowMap.length>0&&At.setValue(z,"spotShadowMap",yn.state.spotShadowMap,G),yn.state.pointShadowMap.length>0&&At.setValue(z,"pointShadowMap",yn.state.pointShadowMap,G)),$.isSkinnedMesh){At.setOptional(z,$,"bindMatrix"),At.setOptional(z,$,"bindMatrixInverse");const jt=$.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),At.setValue(z,"boneTexture",jt.boneTexture,G))}$.isBatchedMesh&&(At.setOptional(z,$,"batchingTexture"),At.setValue(z,"batchingTexture",$._matricesTexture,G),At.setOptional(z,$,"batchingIdTexture"),At.setValue(z,"batchingIdTexture",$._indirectTexture,G),At.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&At.setValue(z,"batchingColorTexture",$._colorsTexture,G));const ii=se.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&be.update($,se,Cn),(Fn||Ye.receiveShadow!==$.receiveShadow)&&(Ye.receiveShadow=$.receiveShadow,At.setValue(z,"receiveShadow",$.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&X.environment!==null&&(st.envMapIntensity.value=X.environmentIntensity),st.dfgLUT!==void 0&&(st.dfgLUT.value=Q1()),Fn&&(At.setValue(z,"toneMappingExposure",L.toneMappingExposure),Ye.needsLights&&pa(st,tr),Re&&te.fog===!0&&qe.refreshFogUniforms(st,Re),qe.refreshMaterialUniforms(st,te,Ae,q,F.state.transmissionRenderTarget[A.id]),Zl.upload(z,io(Ye),st,G)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Zl.upload(z,io(Ye),st,G),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&At.setValue(z,"center",$.center),At.setValue(z,"modelViewMatrix",$.modelViewMatrix),At.setValue(z,"normalMatrix",$.normalMatrix),At.setValue(z,"modelMatrix",$.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){const jt=te.uniformsGroups;for(let Yn=0,Ii=jt.length;Yn<Ii;Yn++){const ro=jt[Yn];Le.update(ro,Cn),Le.bind(ro,Cn)}}return Cn}function pa(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ma(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(A,X,se){const te=E.get(A);te.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=X,E.get(A.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:se,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const se=E.get(A);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0};const ga=z.createFramebuffer();this.setRenderTarget=function(A,X=0,se=0){Z=A,O=X,J=se;let te=null,$=!1,Re=!1;if(A){const Ce=E.get(A);if(Ce.__useDefaultFramebuffer!==void 0){He.bindFramebuffer(z.FRAMEBUFFER,Ce.__webglFramebuffer),ne.copy(A.viewport),W.copy(A.scissor),K=A.scissorTest,He.viewport(ne),He.scissor(W),He.setScissorTest(K),le=-1;return}else if(Ce.__webglFramebuffer===void 0)G.setupRenderTarget(A);else if(Ce.__hasExternalTextures)G.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qe=A.depthTexture;if(Ce.__boundDepthTexture!==Qe){if(Qe!==null&&E.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(A)}}const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Re=!0);const Ze=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?te=Ze[X][se]:te=Ze[X],$=!0):A.samples>0&&G.useMultisampledRTT(A)===!1?te=E.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?te=Ze[se]:te=Ze,ne.copy(A.viewport),W.copy(A.scissor),K=A.scissorTest}else ne.copy(ie).multiplyScalar(Ae).floor(),W.copy(pe).multiplyScalar(Ae).floor(),K=he;if(se!==0&&(te=ga),He.bindFramebuffer(z.FRAMEBUFFER,te)&&He.drawBuffers(A,te),He.viewport(ne),He.scissor(W),He.setScissorTest(K),$){const Ce=E.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,se)}else if(Re){const Ce=X;for(let De=0;De<A.textures.length;De++){const Ze=E.get(A.textures[De]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+De,Ze.__webglTexture,se,Ce)}}else if(A!==null&&se!==0){const Ce=E.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ce.__webglTexture,se)}le=-1},this.readRenderTargetPixels=function(A,X,se,te,$,Re,Ie,Ce=0){if(!(A&&A.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De){He.bindFramebuffer(z.FRAMEBUFFER,De);try{const Ze=A.textures[Ce],Qe=Ze.format,ct=Ze.type;if(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),!St.textureFormatReadable(Qe)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(ct)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-te&&se>=0&&se<=A.height-$&&z.readPixels(X,se,te,$,we.convert(Qe),we.convert(ct),Re)}finally{const Ze=Z!==null?E.get(Z).__webglFramebuffer:null;He.bindFramebuffer(z.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,X,se,te,$,Re,Ie,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ie!==void 0&&(De=De[Ie]),De)if(X>=0&&X<=A.width-te&&se>=0&&se<=A.height-$){He.bindFramebuffer(z.FRAMEBUFFER,De);const Ze=A.textures[Ce],Qe=Ze.format,ct=Ze.type;if(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),!St.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,$e),z.bufferData(z.PIXEL_PACK_BUFFER,Re.byteLength,z.STREAM_READ),z.readPixels(X,se,te,$,we.convert(Qe),we.convert(ct),0);const Pt=Z!==null?E.get(Z).__webglFramebuffer:null;He.bindFramebuffer(z.FRAMEBUFFER,Pt);const Nt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await C_(z,Nt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,$e),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Re),z.deleteBuffer($e),z.deleteSync(Nt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,se=0){const te=Math.pow(2,-se),$=Math.floor(A.image.width*te),Re=Math.floor(A.image.height*te),Ie=X!==null?X.x:0,Ce=X!==null?X.y:0;G.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,se,0,0,Ie,Ce,$,Re),He.unbindTexture()};const ru=z.createFramebuffer(),su=z.createFramebuffer();this.copyTextureToTexture=function(A,X,se=null,te=null,$=0,Re=0){let Ie,Ce,De,Ze,Qe,ct,$e,Pt,Nt;const Dt=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(se!==null)Ie=se.max.x-se.min.x,Ce=se.max.y-se.min.y,De=se.isBox3?se.max.z-se.min.z:1,Ze=se.min.x,Qe=se.min.y,ct=se.isBox3?se.min.z:0;else{const st=Math.pow(2,-$);Ie=Math.floor(Dt.width*st),Ce=Math.floor(Dt.height*st),A.isDataArrayTexture?De=Dt.depth:A.isData3DTexture?De=Math.floor(Dt.depth*st):De=1,Ze=0,Qe=0,ct=0}te!==null?($e=te.x,Pt=te.y,Nt=te.z):($e=0,Pt=0,Nt=0);const _t=we.convert(X.format),qt=we.convert(X.type);let Ye;X.isData3DTexture?(G.setTexture3D(X,0),Ye=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(G.setTexture2DArray(X,0),Ye=z.TEXTURE_2D_ARRAY):(G.setTexture2D(X,0),Ye=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const yn=z.getParameter(z.UNPACK_ROW_LENGTH),vt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Cn=z.getParameter(z.UNPACK_SKIP_PIXELS),Rn=z.getParameter(z.UNPACK_SKIP_ROWS),Fn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Dt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ze),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ct);const tr=A.isDataArrayTexture||A.isData3DTexture,At=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const st=E.get(A),ii=E.get(X),jt=E.get(st.__renderTarget),Yn=E.get(ii.__renderTarget);He.bindFramebuffer(z.READ_FRAMEBUFFER,jt.__webglFramebuffer),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,Yn.__webglFramebuffer);for(let Ii=0;Ii<De;Ii++)tr&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(A).__webglTexture,$,ct+Ii),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(X).__webglTexture,Re,Nt+Ii)),z.blitFramebuffer(Ze,Qe,Ie,Ce,$e,Pt,Ie,Ce,z.DEPTH_BUFFER_BIT,z.NEAREST);He.bindFramebuffer(z.READ_FRAMEBUFFER,null),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||E.has(A)){const st=E.get(A),ii=E.get(X);He.bindFramebuffer(z.READ_FRAMEBUFFER,ru),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,su);for(let jt=0;jt<De;jt++)tr?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,st.__webglTexture,$,ct+jt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,st.__webglTexture,$),At?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,ii.__webglTexture,Re,Nt+jt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,ii.__webglTexture,Re),$!==0?z.blitFramebuffer(Ze,Qe,Ie,Ce,$e,Pt,Ie,Ce,z.COLOR_BUFFER_BIT,z.NEAREST):At?z.copyTexSubImage3D(Ye,Re,$e,Pt,Nt+jt,Ze,Qe,Ie,Ce):z.copyTexSubImage2D(Ye,Re,$e,Pt,Ze,Qe,Ie,Ce);He.bindFramebuffer(z.READ_FRAMEBUFFER,null),He.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(Ye,Re,$e,Pt,Nt,Ie,Ce,De,_t,qt,Dt.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(Ye,Re,$e,Pt,Nt,Ie,Ce,De,_t,Dt.data):z.texSubImage3D(Ye,Re,$e,Pt,Nt,Ie,Ce,De,_t,qt,Dt):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Re,$e,Pt,Ie,Ce,_t,qt,Dt.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Re,$e,Pt,Dt.width,Dt.height,_t,Dt.data):z.texSubImage2D(z.TEXTURE_2D,Re,$e,Pt,Ie,Ce,_t,qt,Dt);z.pixelStorei(z.UNPACK_ROW_LENGTH,yn),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,vt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Cn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Rn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Fn),Re===0&&X.generateMipmaps&&z.generateMipmap(Ye),He.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&G.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?G.setTextureCube(A,0):A.isData3DTexture?G.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?G.setTexture2DArray(A,0):G.setTexture2D(A,0),He.unbindTexture()},this.resetState=function(){O=0,J=0,Z=null,He.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}function tT(){const t=new Xs,r=new ji(.65,32,32),a=new Ar({color:4251856,roughness:.55,emissive:6356976,emissiveIntensity:.15}),l=new an(r,a);t.add(l);const c=new ji(.13,16,16),f=new Ar({color:2142368,roughness:1,transparent:!0,opacity:.4});for(const x of[-1,1]){const _=new an(c,f);_.position.set(x*.35,-.05,.48),_.scale.set(1,.7,.3),t.add(_)}const h=new Ar({color:16777215,roughness:.1}),p=new Ar({color:1710638,roughness:.05}),v=new Ar({color:16777215,emissive:16777215});for(const x of[-1,1]){const _=new an(new ji(.14,16,16),h);_.position.set(x*.18,.12,.55),_.scale.set(.8,1.2,.8),t.add(_);const C=new an(new ji(.13,16,16),p);C.position.set(x*.18,.1,.58),C.scale.set(.85,1.15,.8),t.add(C);const b=new an(new ji(.04,8,8),v);b.position.set(x*.18+.04,.16,.65),t.add(b);const P=new an(new ji(.02,6,6),v);P.position.set(x*.18-.02,.06,.65),t.add(P)}const S=new Wg;S.moveTo(-.06,0),S.quadraticCurveTo(0,-.05,.06,0);const g=new an(new Id(S,12),new Ar({color:2134160,roughness:.5,side:Ei}));g.position.set(0,-.08,.64),t.add(g);const y=new Ar({color:2134176,roughness:.5,emissive:2138288,emissiveIntensity:.1});for(const x of[-1,1]){const _=new an(new ji(.18,16,16),y);_.position.set(x*.25,-.62,.12),_.scale.set(1.1,.55,1.4),t.add(_)}const M=new Ar({color:4251856,roughness:.55,emissive:6356976,emissiveIntensity:.15}),R=[];for(const x of[-1,1]){const _=new Xs;_.position.set(x*.58,-.05,.1),_.rotation.z=x*.25;const C=new an(new Ld(.09,.25,8,12),M);C.position.set(0,-.2,0),_.add(C),t.add(_),R.push(_)}return{root:t,arms:R}}class Ef{constructor(e=400,t=18){Uc(this,"value",0);Uc(this,"velocity",0);this.stiffness=e,this.damping=t}update(e,t,r=1/0){const a=-this.stiffness*(this.value-e),l=-this.damping*this.velocity;this.velocity+=(a+l)*t,this.value+=this.velocity*t,this.value=Math.max(-r,Math.min(r,this.value))}}function nT(){const s=Gl.useRef(null),e=Gl.useRef({x:0,y:0});return Gl.useEffect(()=>{const t=s.current;if(!t)return;const r=new sx,a=new ti(45,t.clientWidth/t.clientHeight,.1,100);a.position.set(0,0,3.2);const l=new eT({antialias:!0,alpha:!0});l.setPixelRatio(window.devicePixelRatio),l.setSize(t.clientWidth,t.clientHeight),l.setClearColor(0,0),t.appendChild(l.domElement),r.add(new rS(16774392,.9));const c=new Gm(16777215,1);c.position.set(3,5,4),r.add(c);const f=new Gm(16765152,.4);f.position.set(-3,2,2),r.add(f);const{root:h,arms:p}=tT();r.add(h);const v=new Ef(500,22),S=new Ef(500,22),g=new Ef(400,25);let y=!1,M=0,R=0;const x=I=>{y=!0,M=I.screenX,R=I.screenY},_=I=>{y&&(e.current.x=I.screenX-M,e.current.y=I.screenY-R,M=I.screenX,R=I.screenY)},C=()=>{y=!1};window.addEventListener("mousedown",x),window.addEventListener("mousemove",_),window.addEventListener("mouseup",C);let b=0,P;function F(){P=requestAnimationFrame(F);const I=1/60;b+=I;const B=e.current.x;e.current.x*=.5,e.current.y*=.5,g.update(0,I,.25),g.velocity+=B*-.8,h.rotation.z=g.value+Math.sin(b*.8)*.02;const w=X_.clamp(B*.04,-.3,.3);h.rotation.y+=(w-h.rotation.y)*.1,v.update(0,I,.3),v.velocity+=B*1.5,S.update(0,I,.3),S.velocity+=B*1.5,p[0].rotation.z=v.value,p[1].rotation.z=S.value,h.position.y=Math.sin(b*1.5)*.04,l.render(r,a)}return F(),()=>{cancelAnimationFrame(P),window.removeEventListener("mousedown",x),window.removeEventListener("mousemove",_),window.removeEventListener("mouseup",C),t.removeChild(l.domElement),l.dispose()}},[]),qo.jsxs("div",{style:{position:"fixed",inset:0},children:[qo.jsx("div",{ref:s,style:{position:"absolute",inset:0}}),qo.jsx("div",{className:"electrobun-webkit-app-region-drag",style:{position:"absolute",inset:0,zIndex:10,cursor:"pointer"},onMouseDown:t=>{t.target.style.cursor="grabbing"},onMouseUp:t=>{t.target.style.cursor="pointer"},onMouseLeave:t=>{t.target.style.cursor="pointer"}})]})}Yv.createRoot(document.getElementById("root")).render(qo.jsx(Gl.StrictMode,{children:qo.jsx(nT,{})}));
