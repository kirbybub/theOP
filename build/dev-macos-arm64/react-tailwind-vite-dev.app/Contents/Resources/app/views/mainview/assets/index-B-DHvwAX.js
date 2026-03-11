var Vv=Object.defineProperty;var Hv=(s,e,t)=>e in s?Vv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Ml=(s,e,t)=>Hv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var Bc={exports:{}},Ko={},zc={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function Gv(){if(im)return Mt;im=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function g(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,C={};function _(U,Y,Ee){this.props=U,this.context=Y,this.refs=C,this.updater=Ee||S}_.prototype.isReactComponent={},_.prototype.setState=function(U,Y){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Y,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function y(){}y.prototype=_.prototype;function R(U,Y,Ee){this.props=U,this.context=Y,this.refs=C,this.updater=Ee||S}var L=R.prototype=new y;L.constructor=R,M(L,_.prototype),L.isPureReactComponent=!0;var b=Array.isArray,k=Object.prototype.hasOwnProperty,O={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(U,Y,Ee){var Re,Ze={},Q=null,me=null;if(Y!=null)for(Re in Y.ref!==void 0&&(me=Y.ref),Y.key!==void 0&&(Q=""+Y.key),Y)k.call(Y,Re)&&!N.hasOwnProperty(Re)&&(Ze[Re]=Y[Re]);var pe=arguments.length-2;if(pe===1)Ze.children=Ee;else if(1<pe){for(var Fe=Array(pe),He=0;He<pe;He++)Fe[He]=arguments[He+2];Ze.children=Fe}if(U&&U.defaultProps)for(Re in pe=U.defaultProps,pe)Ze[Re]===void 0&&(Ze[Re]=pe[Re]);return{$$typeof:s,type:U,key:Q,ref:me,props:Ze,_owner:O.current}}function P(U,Y){return{$$typeof:s,type:U.type,key:Y,ref:U.ref,props:U.props,_owner:U._owner}}function Z(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function F(U){var Y={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ee){return Y[Ee]})}var $=/\/+/g;function K(U,Y){return typeof U=="object"&&U!==null&&U.key!=null?F(""+U.key):Y.toString(36)}function ae(U,Y,Ee,Re,Ze){var Q=typeof U;(Q==="undefined"||Q==="boolean")&&(U=null);var me=!1;if(U===null)me=!0;else switch(Q){case"string":case"number":me=!0;break;case"object":switch(U.$$typeof){case s:case e:me=!0}}if(me)return me=U,Ze=Ze(me),U=Re===""?"."+K(me,0):Re,b(Ze)?(Ee="",U!=null&&(Ee=U.replace($,"$&/")+"/"),ae(Ze,Y,Ee,"",function(He){return He})):Ze!=null&&(Z(Ze)&&(Ze=P(Ze,Ee+(!Ze.key||me&&me.key===Ze.key?"":(""+Ze.key).replace($,"$&/")+"/")+U)),Y.push(Ze)),1;if(me=0,Re=Re===""?".":Re+":",b(U))for(var pe=0;pe<U.length;pe++){Q=U[pe];var Fe=Re+K(Q,pe);me+=ae(Q,Y,Ee,Fe,Ze)}else if(Fe=g(U),typeof Fe=="function")for(U=Fe.call(U),pe=0;!(Q=U.next()).done;)Q=Q.value,Fe=Re+K(Q,pe++),me+=ae(Q,Y,Ee,Fe,Ze);else if(Q==="object")throw Y=String(U),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.");return me}function q(U,Y,Ee){if(U==null)return U;var Re=[],Ze=0;return ae(U,Re,"","",function(Q){return Y.call(Ee,Q,Ze++)}),Re}function ie(U){if(U._status===-1){var Y=U._result;Y=Y(),Y.then(function(Ee){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ee)},function(Ee){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ee)}),U._status===-1&&(U._status=0,U._result=Y)}if(U._status===1)return U._result.default;throw U._result}var W={current:null},J={transition:null},oe={ReactCurrentDispatcher:W,ReactCurrentBatchConfig:J,ReactCurrentOwner:O};function ce(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:q,forEach:function(U,Y,Ee){q(U,function(){Y.apply(this,arguments)},Ee)},count:function(U){var Y=0;return q(U,function(){Y++}),Y},toArray:function(U){return q(U,function(Y){return Y})||[]},only:function(U){if(!Z(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},Mt.Component=_,Mt.Fragment=t,Mt.Profiler=o,Mt.PureComponent=R,Mt.StrictMode=r,Mt.Suspense=h,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,Mt.act=ce,Mt.cloneElement=function(U,Y,Ee){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Re=M({},U.props),Ze=U.key,Q=U.ref,me=U._owner;if(Y!=null){if(Y.ref!==void 0&&(Q=Y.ref,me=O.current),Y.key!==void 0&&(Ze=""+Y.key),U.type&&U.type.defaultProps)var pe=U.type.defaultProps;for(Fe in Y)k.call(Y,Fe)&&!N.hasOwnProperty(Fe)&&(Re[Fe]=Y[Fe]===void 0&&pe!==void 0?pe[Fe]:Y[Fe])}var Fe=arguments.length-2;if(Fe===1)Re.children=Ee;else if(1<Fe){pe=Array(Fe);for(var He=0;He<Fe;He++)pe[He]=arguments[He+2];Re.children=pe}return{$$typeof:s,type:U.type,key:Ze,ref:Q,props:Re,_owner:me}},Mt.createContext=function(U){return U={$$typeof:c,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},Mt.createElement=T,Mt.createFactory=function(U){var Y=T.bind(null,U);return Y.type=U,Y},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(U){return{$$typeof:f,render:U}},Mt.isValidElement=Z,Mt.lazy=function(U){return{$$typeof:v,_payload:{_status:-1,_result:U},_init:ie}},Mt.memo=function(U,Y){return{$$typeof:p,type:U,compare:Y===void 0?null:Y}},Mt.startTransition=function(U){var Y=J.transition;J.transition={};try{U()}finally{J.transition=Y}},Mt.unstable_act=ce,Mt.useCallback=function(U,Y){return W.current.useCallback(U,Y)},Mt.useContext=function(U){return W.current.useContext(U)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(U){return W.current.useDeferredValue(U)},Mt.useEffect=function(U,Y){return W.current.useEffect(U,Y)},Mt.useId=function(){return W.current.useId()},Mt.useImperativeHandle=function(U,Y,Ee){return W.current.useImperativeHandle(U,Y,Ee)},Mt.useInsertionEffect=function(U,Y){return W.current.useInsertionEffect(U,Y)},Mt.useLayoutEffect=function(U,Y){return W.current.useLayoutEffect(U,Y)},Mt.useMemo=function(U,Y){return W.current.useMemo(U,Y)},Mt.useReducer=function(U,Y,Ee){return W.current.useReducer(U,Y,Ee)},Mt.useRef=function(U){return W.current.useRef(U)},Mt.useState=function(U){return W.current.useState(U)},Mt.useSyncExternalStore=function(U,Y,Ee){return W.current.useSyncExternalStore(U,Y,Ee)},Mt.useTransition=function(){return W.current.useTransition()},Mt.version="18.3.1",Mt}var rm;function yd(){return rm||(rm=1,zc.exports=Gv()),zc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function Wv(){if(sm)return Ko;sm=1;var s=yd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var v,x={},g=null,S=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(x[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)x[v]===void 0&&(x[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:S,props:x,_owner:o.current}}return Ko.Fragment=t,Ko.jsx=c,Ko.jsxs=c,Ko}var om;function Xv(){return om||(om=1,Bc.exports=Wv()),Bc.exports}var At=Xv(),Pe=yd(),El={},Vc={exports:{}},qn={},Hc={exports:{}},Gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function qv(){return am||(am=1,(function(s){function e(J,oe){var ce=J.length;J.push(oe);e:for(;0<ce;){var U=ce-1>>>1,Y=J[U];if(0<o(Y,oe))J[U]=oe,J[ce]=Y,ce=U;else break e}}function t(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var oe=J[0],ce=J.pop();if(ce!==oe){J[0]=ce;e:for(var U=0,Y=J.length,Ee=Y>>>1;U<Ee;){var Re=2*(U+1)-1,Ze=J[Re],Q=Re+1,me=J[Q];if(0>o(Ze,ce))Q<Y&&0>o(me,Ze)?(J[U]=me,J[Q]=ce,U=Q):(J[U]=Ze,J[Re]=ce,U=Re);else if(Q<Y&&0>o(me,ce))J[U]=me,J[Q]=ce,U=Q;else break e}}return oe}function o(J,oe){var ce=J.sortIndex-oe.sortIndex;return ce!==0?ce:J.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],v=1,x=null,g=3,S=!1,M=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(J){for(var oe=t(p);oe!==null;){if(oe.callback===null)r(p);else if(oe.startTime<=J)r(p),oe.sortIndex=oe.expirationTime,e(h,oe);else break;oe=t(p)}}function b(J){if(C=!1,L(J),!M)if(t(h)!==null)M=!0,ie(k);else{var oe=t(p);oe!==null&&W(b,oe.startTime-J)}}function k(J,oe){M=!1,C&&(C=!1,y(T),T=-1),S=!0;var ce=g;try{for(L(oe),x=t(h);x!==null&&(!(x.expirationTime>oe)||J&&!F());){var U=x.callback;if(typeof U=="function"){x.callback=null,g=x.priorityLevel;var Y=U(x.expirationTime<=oe);oe=s.unstable_now(),typeof Y=="function"?x.callback=Y:x===t(h)&&r(h),L(oe)}else r(h);x=t(h)}if(x!==null)var Ee=!0;else{var Re=t(p);Re!==null&&W(b,Re.startTime-oe),Ee=!1}return Ee}finally{x=null,g=ce,S=!1}}var O=!1,N=null,T=-1,P=5,Z=-1;function F(){return!(s.unstable_now()-Z<P)}function $(){if(N!==null){var J=s.unstable_now();Z=J;var oe=!0;try{oe=N(!0,J)}finally{oe?K():(O=!1,N=null)}}else O=!1}var K;if(typeof R=="function")K=function(){R($)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,q=ae.port2;ae.port1.onmessage=$,K=function(){q.postMessage(null)}}else K=function(){_($,0)};function ie(J){N=J,O||(O=!0,K())}function W(J,oe){T=_(function(){J(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,ie(k))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(J){switch(g){case 1:case 2:case 3:var oe=3;break;default:oe=g}var ce=g;g=oe;try{return J()}finally{g=ce}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,oe){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ce=g;g=J;try{return oe()}finally{g=ce}},s.unstable_scheduleCallback=function(J,oe,ce){var U=s.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?U+ce:U):ce=U,J){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=ce+Y,J={id:v++,callback:oe,priorityLevel:J,startTime:ce,expirationTime:Y,sortIndex:-1},ce>U?(J.sortIndex=ce,e(p,J),t(h)===null&&J===t(p)&&(C?(y(T),T=-1):C=!0,W(b,ce-U))):(J.sortIndex=Y,e(h,J),M||S||(M=!0,ie(k))),J},s.unstable_shouldYield=F,s.unstable_wrapCallback=function(J){var oe=g;return function(){var ce=g;g=oe;try{return J.apply(this,arguments)}finally{g=ce}}}})(Gc)),Gc}var lm;function Yv(){return lm||(lm=1,Hc.exports=qv()),Hc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function jv(){if(um)return qn;um=1;var s=yd(),e=Yv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function g(n){return h.call(x,n)?!0:h.call(v,n)?!1:p.test(n)?x[n]=!0:(v[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,u,d,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){_[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];_[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){_[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){_[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){_[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){_[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){_[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){_[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){_[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,R);_[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,R);_[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,R);_[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){_[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),_.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){_[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,u){var d=_.hasOwnProperty(i)?_[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,u)&&(a=null),u||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var b=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),O=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),F=Symbol.for("react.context"),$=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),ie=Symbol.for("react.lazy"),W=Symbol.for("react.offscreen"),J=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ce=Object.assign,U;function Y(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ee=!1;function Re(n,i){if(!n||Ee)return"";Ee=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ue){var u=ue}Reflect.construct(n,[],i)}else{try{i.call()}catch(ue){u=ue}n.call(i.prototype)}else{try{throw Error()}catch(ue){u=ue}n()}}catch(ue){if(ue&&u&&typeof ue.stack=="string"){for(var d=ue.stack.split(`
`),m=u.stack.split(`
`),w=d.length-1,I=m.length-1;1<=w&&0<=I&&d[w]!==m[I];)I--;for(;1<=w&&0<=I;w--,I--)if(d[w]!==m[I]){if(w!==1||I!==1)do if(w--,I--,0>I||d[w]!==m[I]){var z=`
`+d[w].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=w&&0<=I);break}}}finally{Ee=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?Y(n):""}function Ze(n){switch(n.tag){case 5:return Y(n.type);case 16:return Y("Lazy");case 13:return Y("Suspense");case 19:return Y("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function Q(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case O:return"Portal";case P:return"Profiler";case T:return"StrictMode";case K:return"Suspense";case ae:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case F:return(n.displayName||"Context")+".Consumer";case Z:return(n._context.displayName||"Context")+".Provider";case $:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case q:return i=n.displayName||null,i!==null?i:Q(n.type)||"Memo";case ie:i=n._payload,n=n._init;try{return Q(n(i))}catch{}}return null}function me(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Q(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function He(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){u=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function it(n){n._valueTracker||(n._valueTracker=He(n))}function bt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Fe(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function gt(n,i){var a=i.checked;return ce({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Ct(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function Dt(n,i){pt(n,i);var a=pe(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Bt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Bt(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function B(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Bt(n,i,a){(i!=="number"||ht(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var yt=Array.isArray;function St(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Ye(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ce({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(yt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:pe(a)}}function E(n,i){var a=pe(i.value),u=pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function G(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function he(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?he(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var fe,Oe=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(fe=fe||document.createElement("div"),fe.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=fe.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Te(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Le={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=["Webkit","ms","Moz","O"];Object.keys(Le).forEach(function(n){We.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Le[i]=Le[n]})});function xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Le.hasOwnProperty(n)&&Le[n]?(""+i).trim():i+"px"}function we(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=xe(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var ze=ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(n,i){if(i){if(ze[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ft=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ce=null,ye=null,be=null;function Se(n){if(n=Uo(n)){if(typeof Ce!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Oa(i),Ce(n.stateNode,n.type,i))}}function de(n){ye?be?be.push(n):be=[n]:ye=n}function Xe(){if(ye){var n=ye,i=be;if(be=ye=null,Se(n),i)for(n=0;n<i.length;n++)Se(i[n])}}function at(n,i){return n(i)}function Ut(){}var Tt=!1;function bn(n,i,a){if(Tt)return n(i,a);Tt=!0;try{return at(n,i,a)}finally{Tt=!1,(ye!==null||be!==null)&&(Ut(),Xe())}}function te(n,i){var a=n.stateNode;if(a===null)return null;var u=Oa(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var je=!1;if(f)try{var lt={};Object.defineProperty(lt,"passive",{get:function(){je=!0}}),window.addEventListener("test",lt,lt),window.removeEventListener("test",lt,lt)}catch{je=!1}function mt(n,i,a,u,d,m,w,I,z){var ue=Array.prototype.slice.call(arguments,3);try{i.apply(a,ue)}catch(_e){this.onError(_e)}}var Wt=!1,Pn=null,Jt=!1,kn=null,mi={onError:function(n){Wt=!0,Pn=n}};function jn(n,i,a,u,d,m,w,I,z){Wt=!1,Pn=null,mt.apply(mi,arguments)}function ii(n,i,a,u,d,m,w,I,z){if(jn.apply(this,arguments),Wt){if(Wt){var ue=Pn;Wt=!1,Pn=null}else throw Error(t(198));Jt||(Jt=!0,kn=ue)}}function Ln(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function gi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function qi(n){if(Ln(n)!==n)throw Error(t(188))}function hr(n){var i=n.alternate;if(!i){if(i=Ln(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return qi(d),n;if(m===u)return qi(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=m;else{for(var w=!1,I=d.child;I;){if(I===a){w=!0,a=d,u=m;break}if(I===u){w=!0,u=d,a=m;break}I=I.sibling}if(!w){for(I=m.child;I;){if(I===a){w=!0,a=m,u=d;break}if(I===u){w=!0,u=m,a=d;break}I=I.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Xr(n){return n=hr(n),n!==null?qr(n):null}function qr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=qr(n);if(i!==null)return i;n=n.sibling}return null}var Yr=e.unstable_scheduleCallback,pr=e.unstable_cancelCallback,ys=e.unstable_shouldYield,Ss=e.unstable_requestPaint,A=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,le=e.unstable_ImmediatePriority,re=e.unstable_UserBlockingPriority,ne=e.unstable_NormalPriority,Ie=e.unstable_LowPriority,Ve=e.unstable_IdlePriority,De=null,ke=null;function et(n){if(ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(De,n,void 0,(n.current.flags&128)===128)}catch{}}var rt=Math.clz32?Math.clz32:kt,vt=Math.log,tt=Math.LN2;function kt(n){return n>>>=0,n===0?32:31-(vt(n)/tt|0)|0}var Ht=64,Vt=4194304;function Rt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function tn(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var I=w&~d;I!==0?u=Rt(I):(m&=w,m!==0&&(u=Rt(m)))}else w=a&~d,w!==0?u=Rt(w):m!==0&&(u=Rt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-rt(i),d=1<<a,u|=n[a],i&=~d;return u}function Je(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dn(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-rt(m),I=1<<w,z=d[w];z===-1?((I&a)===0||(I&u)!==0)&&(d[w]=Je(I,i)):z<=i&&(n.expiredLanes|=I),m&=~I}}function wt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Bn(){var n=Ht;return Ht<<=1,(Ht&4194240)===0&&(Ht=64),n}function zn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function $n(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-rt(i),n[i]=a}function mr(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-rt(a),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~m}}function Ft(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-rt(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var ut=0;function vi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var nn,ri,Yi,_o,Bd,cu=!1,Ma=[],gr=null,vr=null,_r=null,xo=new Map,yo=new Map,xr=[],u0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zd(n,i){switch(n){case"focusin":case"focusout":gr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":_r=null;break;case"pointerover":case"pointerout":xo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(i.pointerId)}}function So(n,i,a,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Uo(i),i!==null&&ri(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function c0(n,i,a,u,d){switch(i){case"focusin":return gr=So(gr,n,i,a,u,d),!0;case"dragenter":return vr=So(vr,n,i,a,u,d),!0;case"mouseover":return _r=So(_r,n,i,a,u,d),!0;case"pointerover":var m=d.pointerId;return xo.set(m,So(xo.get(m)||null,n,i,a,u,d)),!0;case"gotpointercapture":return m=d.pointerId,yo.set(m,So(yo.get(m)||null,n,i,a,u,d)),!0}return!1}function Vd(n){var i=jr(n.target);if(i!==null){var a=Ln(i);if(a!==null){if(i=a.tag,i===13){if(i=gi(a),i!==null){n.blockedOn=i,Bd(n.priority,function(){Yi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ea(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=du(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);ft=u,a.target.dispatchEvent(u),ft=null}else return i=Uo(a),i!==null&&ri(i),n.blockedOn=a,!1;i.shift()}return!0}function Hd(n,i,a){Ea(n)&&a.delete(i)}function f0(){cu=!1,gr!==null&&Ea(gr)&&(gr=null),vr!==null&&Ea(vr)&&(vr=null),_r!==null&&Ea(_r)&&(_r=null),xo.forEach(Hd),yo.forEach(Hd)}function Mo(n,i){n.blockedOn===i&&(n.blockedOn=null,cu||(cu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,f0)))}function Eo(n){function i(d){return Mo(d,n)}if(0<Ma.length){Mo(Ma[0],n);for(var a=1;a<Ma.length;a++){var u=Ma[a];u.blockedOn===n&&(u.blockedOn=null)}}for(gr!==null&&Mo(gr,n),vr!==null&&Mo(vr,n),_r!==null&&Mo(_r,n),xo.forEach(i),yo.forEach(i),a=0;a<xr.length;a++)u=xr[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<xr.length&&(a=xr[0],a.blockedOn===null);)Vd(a),a.blockedOn===null&&xr.shift()}var Ms=b.ReactCurrentBatchConfig,Ta=!0;function d0(n,i,a,u){var d=ut,m=Ms.transition;Ms.transition=null;try{ut=1,fu(n,i,a,u)}finally{ut=d,Ms.transition=m}}function h0(n,i,a,u){var d=ut,m=Ms.transition;Ms.transition=null;try{ut=4,fu(n,i,a,u)}finally{ut=d,Ms.transition=m}}function fu(n,i,a,u){if(Ta){var d=du(n,i,a,u);if(d===null)bu(n,i,u,wa,a),zd(n,u);else if(c0(d,n,i,a,u))u.stopPropagation();else if(zd(n,u),i&4&&-1<u0.indexOf(n)){for(;d!==null;){var m=Uo(d);if(m!==null&&nn(m),m=du(n,i,a,u),m===null&&bu(n,i,u,wa,a),m===d)break;d=m}d!==null&&u.stopPropagation()}else bu(n,i,u,null,a)}}var wa=null;function du(n,i,a,u){if(wa=null,n=V(u),n=jr(n),n!==null)if(i=Ln(n),i===null)n=null;else if(a=i.tag,a===13){if(n=gi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return wa=n,null}function Gd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case le:return 1;case re:return 4;case ne:case Ie:return 16;case Ve:return 536870912;default:return 16}default:return 16}}var yr=null,hu=null,Aa=null;function Wd(){if(Aa)return Aa;var n,i=hu,a=i.length,u,d="value"in yr?yr.value:yr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var w=a-n;for(u=1;u<=w&&i[a-u]===d[m-u];u++);return Aa=d.slice(n,1<u?1-u:void 0)}function Ca(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ra(){return!0}function Xd(){return!1}function Kn(n){function i(a,u,d,m,w){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ra:Xd,this.isPropagationStopped=Xd,this}return ce(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ra)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ra)},persist:function(){},isPersistent:Ra}),i}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pu=Kn(Es),To=ce({},Es,{view:0,detail:0}),p0=Kn(To),mu,gu,wo,ba=ce({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_u,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wo&&(wo&&n.type==="mousemove"?(mu=n.screenX-wo.screenX,gu=n.screenY-wo.screenY):gu=mu=0,wo=n),mu)},movementY:function(n){return"movementY"in n?n.movementY:gu}}),qd=Kn(ba),m0=ce({},ba,{dataTransfer:0}),g0=Kn(m0),v0=ce({},To,{relatedTarget:0}),vu=Kn(v0),_0=ce({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),x0=Kn(_0),y0=ce({},Es,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),S0=Kn(y0),M0=ce({},Es,{data:0}),Yd=Kn(M0),E0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},T0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},w0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function A0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=w0[n])?!!i[n]:!1}function _u(){return A0}var C0=ce({},To,{key:function(n){if(n.key){var i=E0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ca(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?T0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_u,charCode:function(n){return n.type==="keypress"?Ca(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ca(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),R0=Kn(C0),b0=ce({},ba,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=Kn(b0),P0=ce({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_u}),L0=Kn(P0),D0=ce({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),N0=Kn(D0),I0=ce({},ba,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),U0=Kn(I0),F0=[9,13,27,32],xu=f&&"CompositionEvent"in window,Ao=null;f&&"documentMode"in document&&(Ao=document.documentMode);var O0=f&&"TextEvent"in window&&!Ao,$d=f&&(!xu||Ao&&8<Ao&&11>=Ao),Kd=" ",Zd=!1;function Jd(n,i){switch(n){case"keyup":return F0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ts=!1;function k0(n,i){switch(n){case"compositionend":return Qd(i);case"keypress":return i.which!==32?null:(Zd=!0,Kd);case"textInput":return n=i.data,n===Kd&&Zd?null:n;default:return null}}function B0(n,i){if(Ts)return n==="compositionend"||!xu&&Jd(n,i)?(n=Wd(),Aa=hu=yr=null,Ts=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $d&&i.locale!=="ko"?null:i.data;default:return null}}var z0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!z0[n.type]:i==="textarea"}function th(n,i,a,u){de(u),i=Ia(i,"onChange"),0<i.length&&(a=new pu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var Co=null,Ro=null;function V0(n){xh(n,0)}function Pa(n){var i=bs(n);if(bt(i))return n}function H0(n,i){if(n==="change")return i}var nh=!1;if(f){var yu;if(f){var Su="oninput"in document;if(!Su){var ih=document.createElement("div");ih.setAttribute("oninput","return;"),Su=typeof ih.oninput=="function"}yu=Su}else yu=!1;nh=yu&&(!document.documentMode||9<document.documentMode)}function rh(){Co&&(Co.detachEvent("onpropertychange",sh),Ro=Co=null)}function sh(n){if(n.propertyName==="value"&&Pa(Ro)){var i=[];th(i,Ro,n,V(n)),bn(V0,i)}}function G0(n,i,a){n==="focusin"?(rh(),Co=i,Ro=a,Co.attachEvent("onpropertychange",sh)):n==="focusout"&&rh()}function W0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Pa(Ro)}function X0(n,i){if(n==="click")return Pa(i)}function q0(n,i){if(n==="input"||n==="change")return Pa(i)}function Y0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var _i=typeof Object.is=="function"?Object.is:Y0;function bo(n,i){if(_i(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!_i(n[d],i[d]))return!1}return!0}function oh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ah(n,i){var a=oh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=oh(a)}}function lh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?lh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function uh(){for(var n=window,i=ht();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ht(n.document)}return i}function Mu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function j0(n){var i=uh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&lh(a.ownerDocument.documentElement,a)){if(u!==null&&Mu(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=ah(a,m);var w=ah(a,u);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var $0=f&&"documentMode"in document&&11>=document.documentMode,ws=null,Eu=null,Po=null,Tu=!1;function ch(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Tu||ws==null||ws!==ht(u)||(u=ws,"selectionStart"in u&&Mu(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Po&&bo(Po,u)||(Po=u,u=Ia(Eu,"onSelect"),0<u.length&&(i=new pu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=ws)))}function La(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var As={animationend:La("Animation","AnimationEnd"),animationiteration:La("Animation","AnimationIteration"),animationstart:La("Animation","AnimationStart"),transitionend:La("Transition","TransitionEnd")},wu={},fh={};f&&(fh=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function Da(n){if(wu[n])return wu[n];if(!As[n])return n;var i=As[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in fh)return wu[n]=i[a];return n}var dh=Da("animationend"),hh=Da("animationiteration"),ph=Da("animationstart"),mh=Da("transitionend"),gh=new Map,vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,i){gh.set(n,i),l(i,[n])}for(var Au=0;Au<vh.length;Au++){var Cu=vh[Au],K0=Cu.toLowerCase(),Z0=Cu[0].toUpperCase()+Cu.slice(1);Sr(K0,"on"+Z0)}Sr(dh,"onAnimationEnd"),Sr(hh,"onAnimationIteration"),Sr(ph,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(mh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),J0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Lo));function _h(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,ii(u,i,void 0,n),n.currentTarget=null}function xh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var w=u.length-1;0<=w;w--){var I=u[w],z=I.instance,ue=I.currentTarget;if(I=I.listener,z!==m&&d.isPropagationStopped())break e;_h(d,I,ue),m=z}else for(w=0;w<u.length;w++){if(I=u[w],z=I.instance,ue=I.currentTarget,I=I.listener,z!==m&&d.isPropagationStopped())break e;_h(d,I,ue),m=z}}}if(Jt)throw n=kn,Jt=!1,kn=null,n}function Xt(n,i){var a=i[Uu];a===void 0&&(a=i[Uu]=new Set);var u=n+"__bubble";a.has(u)||(yh(i,n,2,!1),a.add(u))}function Ru(n,i,a){var u=0;i&&(u|=4),yh(a,n,u,i)}var Na="_reactListening"+Math.random().toString(36).slice(2);function Do(n){if(!n[Na]){n[Na]=!0,r.forEach(function(a){a!=="selectionchange"&&(J0.has(a)||Ru(a,!1,n),Ru(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Na]||(i[Na]=!0,Ru("selectionchange",!1,i))}}function yh(n,i,a,u){switch(Gd(i)){case 1:var d=d0;break;case 4:d=h0;break;default:d=fu}a=d.bind(null,i,a,n),d=void 0,!je||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function bu(n,i,a,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(w===4)for(w=u.return;w!==null;){var z=w.tag;if((z===3||z===4)&&(z=w.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;w=w.return}for(;I!==null;){if(w=jr(I),w===null)return;if(z=w.tag,z===5||z===6){u=m=w;continue e}I=I.parentNode}}u=u.return}bn(function(){var ue=m,_e=V(a),Me=[];e:{var ve=gh.get(n);if(ve!==void 0){var Be=pu,$e=n;switch(n){case"keypress":if(Ca(a)===0)break e;case"keydown":case"keyup":Be=R0;break;case"focusin":$e="focus",Be=vu;break;case"focusout":$e="blur",Be=vu;break;case"beforeblur":case"afterblur":Be=vu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=g0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=L0;break;case dh:case hh:case ph:Be=x0;break;case mh:Be=N0;break;case"scroll":Be=p0;break;case"wheel":Be=U0;break;case"copy":case"cut":case"paste":Be=S0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=jd}var Ke=(i&4)!==0,rn=!Ke&&n==="scroll",ee=Ke?ve!==null?ve+"Capture":null:ve;Ke=[];for(var H=ue,se;H!==null;){se=H;var Ae=se.stateNode;if(se.tag===5&&Ae!==null&&(se=Ae,ee!==null&&(Ae=te(H,ee),Ae!=null&&Ke.push(No(H,Ae,se)))),rn)break;H=H.return}0<Ke.length&&(ve=new Be(ve,$e,null,a,_e),Me.push({event:ve,listeners:Ke}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",ve&&a!==ft&&($e=a.relatedTarget||a.fromElement)&&(jr($e)||$e[ji]))break e;if((Be||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,Be?($e=a.relatedTarget||a.toElement,Be=ue,$e=$e?jr($e):null,$e!==null&&(rn=Ln($e),$e!==rn||$e.tag!==5&&$e.tag!==6)&&($e=null)):(Be=null,$e=ue),Be!==$e)){if(Ke=qd,Ae="onMouseLeave",ee="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ke=jd,Ae="onPointerLeave",ee="onPointerEnter",H="pointer"),rn=Be==null?ve:bs(Be),se=$e==null?ve:bs($e),ve=new Ke(Ae,H+"leave",Be,a,_e),ve.target=rn,ve.relatedTarget=se,Ae=null,jr(_e)===ue&&(Ke=new Ke(ee,H+"enter",$e,a,_e),Ke.target=se,Ke.relatedTarget=rn,Ae=Ke),rn=Ae,Be&&$e)t:{for(Ke=Be,ee=$e,H=0,se=Ke;se;se=Cs(se))H++;for(se=0,Ae=ee;Ae;Ae=Cs(Ae))se++;for(;0<H-se;)Ke=Cs(Ke),H--;for(;0<se-H;)ee=Cs(ee),se--;for(;H--;){if(Ke===ee||ee!==null&&Ke===ee.alternate)break t;Ke=Cs(Ke),ee=Cs(ee)}Ke=null}else Ke=null;Be!==null&&Sh(Me,ve,Be,Ke,!1),$e!==null&&rn!==null&&Sh(Me,rn,$e,Ke,!0)}}e:{if(ve=ue?bs(ue):window,Be=ve.nodeName&&ve.nodeName.toLowerCase(),Be==="select"||Be==="input"&&ve.type==="file")var Qe=H0;else if(eh(ve))if(nh)Qe=q0;else{Qe=W0;var st=G0}else(Be=ve.nodeName)&&Be.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(Qe=X0);if(Qe&&(Qe=Qe(n,ue))){th(Me,Qe,a,_e);break e}st&&st(n,ve,ue),n==="focusout"&&(st=ve._wrapperState)&&st.controlled&&ve.type==="number"&&Bt(ve,"number",ve.value)}switch(st=ue?bs(ue):window,n){case"focusin":(eh(st)||st.contentEditable==="true")&&(ws=st,Eu=ue,Po=null);break;case"focusout":Po=Eu=ws=null;break;case"mousedown":Tu=!0;break;case"contextmenu":case"mouseup":case"dragend":Tu=!1,ch(Me,a,_e);break;case"selectionchange":if($0)break;case"keydown":case"keyup":ch(Me,a,_e)}var ot;if(xu)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Ts?Jd(n,a)&&(ct="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ct="onCompositionStart");ct&&($d&&a.locale!=="ko"&&(Ts||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Ts&&(ot=Wd()):(yr=_e,hu="value"in yr?yr.value:yr.textContent,Ts=!0)),st=Ia(ue,ct),0<st.length&&(ct=new Yd(ct,n,null,a,_e),Me.push({event:ct,listeners:st}),ot?ct.data=ot:(ot=Qd(a),ot!==null&&(ct.data=ot)))),(ot=O0?k0(n,a):B0(n,a))&&(ue=Ia(ue,"onBeforeInput"),0<ue.length&&(_e=new Yd("onBeforeInput","beforeinput",null,a,_e),Me.push({event:_e,listeners:ue}),_e.data=ot))}xh(Me,i)})}function No(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Ia(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=te(n,a),m!=null&&u.unshift(No(n,m,d)),m=te(n,i),m!=null&&u.push(No(n,m,d))),n=n.return}return u}function Cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Sh(n,i,a,u,d){for(var m=i._reactName,w=[];a!==null&&a!==u;){var I=a,z=I.alternate,ue=I.stateNode;if(z!==null&&z===u)break;I.tag===5&&ue!==null&&(I=ue,d?(z=te(a,m),z!=null&&w.unshift(No(a,z,I))):d||(z=te(a,m),z!=null&&w.push(No(a,z,I)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var Q0=/\r\n?/g,ev=/\u0000|\uFFFD/g;function Mh(n){return(typeof n=="string"?n:""+n).replace(Q0,`
`).replace(ev,"")}function Ua(n,i,a){if(i=Mh(i),Mh(n)!==i&&a)throw Error(t(425))}function Fa(){}var Pu=null,Lu=null;function Du(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Nu=typeof setTimeout=="function"?setTimeout:void 0,tv=typeof clearTimeout=="function"?clearTimeout:void 0,Eh=typeof Promise=="function"?Promise:void 0,nv=typeof queueMicrotask=="function"?queueMicrotask:typeof Eh<"u"?function(n){return Eh.resolve(null).then(n).catch(iv)}:Nu;function iv(n){setTimeout(function(){throw n})}function Iu(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),Eo(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);Eo(i)}function Mr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Th(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),bi="__reactFiber$"+Rs,Io="__reactProps$"+Rs,ji="__reactContainer$"+Rs,Uu="__reactEvents$"+Rs,rv="__reactListeners$"+Rs,sv="__reactHandles$"+Rs;function jr(n){var i=n[bi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[ji]||a[bi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Th(n);n!==null;){if(a=n[bi])return a;n=Th(n)}return i}n=a,a=n.parentNode}return null}function Uo(n){return n=n[bi]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function bs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Oa(n){return n[Io]||null}var Fu=[],Ps=-1;function Er(n){return{current:n}}function qt(n){0>Ps||(n.current=Fu[Ps],Fu[Ps]=null,Ps--)}function Gt(n,i){Ps++,Fu[Ps]=n.current,n.current=i}var Tr={},yn=Er(Tr),Vn=Er(!1),$r=Tr;function Ls(n,i){var a=n.type.contextTypes;if(!a)return Tr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Hn(n){return n=n.childContextTypes,n!=null}function ka(){qt(Vn),qt(yn)}function wh(n,i,a){if(yn.current!==Tr)throw Error(t(168));Gt(yn,i),Gt(Vn,a)}function Ah(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,me(n)||"Unknown",d));return ce({},a,u)}function Ba(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Tr,$r=yn.current,Gt(yn,n),Gt(Vn,Vn.current),!0}function Ch(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Ah(n,i,$r),u.__reactInternalMemoizedMergedChildContext=n,qt(Vn),qt(yn),Gt(yn,n)):qt(Vn),Gt(Vn,a)}var $i=null,za=!1,Ou=!1;function Rh(n){$i===null?$i=[n]:$i.push(n)}function ov(n){za=!0,Rh(n)}function wr(){if(!Ou&&$i!==null){Ou=!0;var n=0,i=ut;try{var a=$i;for(ut=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}$i=null,za=!1}catch(d){throw $i!==null&&($i=$i.slice(n+1)),Yr(le,wr),d}finally{ut=i,Ou=!1}}return null}var Ds=[],Ns=0,Va=null,Ha=0,si=[],oi=0,Kr=null,Ki=1,Zi="";function Zr(n,i){Ds[Ns++]=Ha,Ds[Ns++]=Va,Va=n,Ha=i}function bh(n,i,a){si[oi++]=Ki,si[oi++]=Zi,si[oi++]=Kr,Kr=n;var u=Ki;n=Zi;var d=32-rt(u)-1;u&=~(1<<d),a+=1;var m=32-rt(i)+d;if(30<m){var w=d-d%5;m=(u&(1<<w)-1).toString(32),u>>=w,d-=w,Ki=1<<32-rt(i)+d|a<<d|u,Zi=m+n}else Ki=1<<m|a<<d|u,Zi=n}function ku(n){n.return!==null&&(Zr(n,1),bh(n,1,0))}function Bu(n){for(;n===Va;)Va=Ds[--Ns],Ds[Ns]=null,Ha=Ds[--Ns],Ds[Ns]=null;for(;n===Kr;)Kr=si[--oi],si[oi]=null,Zi=si[--oi],si[oi]=null,Ki=si[--oi],si[oi]=null}var Zn=null,Jn=null,Yt=!1,xi=null;function Ph(n,i){var a=ci(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Lh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Zn=n,Jn=Mr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Zn=n,Jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Kr!==null?{id:Ki,overflow:Zi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ci(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Zn=n,Jn=null,!0):!1;default:return!1}}function zu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Vu(n){if(Yt){var i=Jn;if(i){var a=i;if(!Lh(n,i)){if(zu(n))throw Error(t(418));i=Mr(a.nextSibling);var u=Zn;i&&Lh(n,i)?Ph(u,a):(n.flags=n.flags&-4097|2,Yt=!1,Zn=n)}}else{if(zu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,Zn=n}}}function Dh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Zn=n}function Ga(n){if(n!==Zn)return!1;if(!Yt)return Dh(n),Yt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Du(n.type,n.memoizedProps)),i&&(i=Jn)){if(zu(n))throw Nh(),Error(t(418));for(;i;)Ph(n,i),i=Mr(i.nextSibling)}if(Dh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Jn=Mr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Jn=null}}else Jn=Zn?Mr(n.stateNode.nextSibling):null;return!0}function Nh(){for(var n=Jn;n;)n=Mr(n.nextSibling)}function Is(){Jn=Zn=null,Yt=!1}function Hu(n){xi===null?xi=[n]:xi.push(n)}var av=b.ReactCurrentBatchConfig;function Fo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var I=d.refs;w===null?delete I[m]:I[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wa(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ih(n){var i=n._init;return i(n._payload)}function Uh(n){function i(ee,H){if(n){var se=ee.deletions;se===null?(ee.deletions=[H],ee.flags|=16):se.push(H)}}function a(ee,H){if(!n)return null;for(;H!==null;)i(ee,H),H=H.sibling;return null}function u(ee,H){for(ee=new Map;H!==null;)H.key!==null?ee.set(H.key,H):ee.set(H.index,H),H=H.sibling;return ee}function d(ee,H){return ee=Nr(ee,H),ee.index=0,ee.sibling=null,ee}function m(ee,H,se){return ee.index=se,n?(se=ee.alternate,se!==null?(se=se.index,se<H?(ee.flags|=2,H):se):(ee.flags|=2,H)):(ee.flags|=1048576,H)}function w(ee){return n&&ee.alternate===null&&(ee.flags|=2),ee}function I(ee,H,se,Ae){return H===null||H.tag!==6?(H=Nc(se,ee.mode,Ae),H.return=ee,H):(H=d(H,se),H.return=ee,H)}function z(ee,H,se,Ae){var Qe=se.type;return Qe===N?_e(ee,H,se.props.children,Ae,se.key):H!==null&&(H.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ie&&Ih(Qe)===H.type)?(Ae=d(H,se.props),Ae.ref=Fo(ee,H,se),Ae.return=ee,Ae):(Ae=pl(se.type,se.key,se.props,null,ee.mode,Ae),Ae.ref=Fo(ee,H,se),Ae.return=ee,Ae)}function ue(ee,H,se,Ae){return H===null||H.tag!==4||H.stateNode.containerInfo!==se.containerInfo||H.stateNode.implementation!==se.implementation?(H=Ic(se,ee.mode,Ae),H.return=ee,H):(H=d(H,se.children||[]),H.return=ee,H)}function _e(ee,H,se,Ae,Qe){return H===null||H.tag!==7?(H=ss(se,ee.mode,Ae,Qe),H.return=ee,H):(H=d(H,se),H.return=ee,H)}function Me(ee,H,se){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Nc(""+H,ee.mode,se),H.return=ee,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case k:return se=pl(H.type,H.key,H.props,null,ee.mode,se),se.ref=Fo(ee,null,H),se.return=ee,se;case O:return H=Ic(H,ee.mode,se),H.return=ee,H;case ie:var Ae=H._init;return Me(ee,Ae(H._payload),se)}if(yt(H)||oe(H))return H=ss(H,ee.mode,se,null),H.return=ee,H;Wa(ee,H)}return null}function ve(ee,H,se,Ae){var Qe=H!==null?H.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return Qe!==null?null:I(ee,H,""+se,Ae);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case k:return se.key===Qe?z(ee,H,se,Ae):null;case O:return se.key===Qe?ue(ee,H,se,Ae):null;case ie:return Qe=se._init,ve(ee,H,Qe(se._payload),Ae)}if(yt(se)||oe(se))return Qe!==null?null:_e(ee,H,se,Ae,null);Wa(ee,se)}return null}function Be(ee,H,se,Ae,Qe){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ee=ee.get(se)||null,I(H,ee,""+Ae,Qe);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case k:return ee=ee.get(Ae.key===null?se:Ae.key)||null,z(H,ee,Ae,Qe);case O:return ee=ee.get(Ae.key===null?se:Ae.key)||null,ue(H,ee,Ae,Qe);case ie:var st=Ae._init;return Be(ee,H,se,st(Ae._payload),Qe)}if(yt(Ae)||oe(Ae))return ee=ee.get(se)||null,_e(H,ee,Ae,Qe,null);Wa(H,Ae)}return null}function $e(ee,H,se,Ae){for(var Qe=null,st=null,ot=H,ct=H=0,hn=null;ot!==null&&ct<se.length;ct++){ot.index>ct?(hn=ot,ot=null):hn=ot.sibling;var Nt=ve(ee,ot,se[ct],Ae);if(Nt===null){ot===null&&(ot=hn);break}n&&ot&&Nt.alternate===null&&i(ee,ot),H=m(Nt,H,ct),st===null?Qe=Nt:st.sibling=Nt,st=Nt,ot=hn}if(ct===se.length)return a(ee,ot),Yt&&Zr(ee,ct),Qe;if(ot===null){for(;ct<se.length;ct++)ot=Me(ee,se[ct],Ae),ot!==null&&(H=m(ot,H,ct),st===null?Qe=ot:st.sibling=ot,st=ot);return Yt&&Zr(ee,ct),Qe}for(ot=u(ee,ot);ct<se.length;ct++)hn=Be(ot,ee,ct,se[ct],Ae),hn!==null&&(n&&hn.alternate!==null&&ot.delete(hn.key===null?ct:hn.key),H=m(hn,H,ct),st===null?Qe=hn:st.sibling=hn,st=hn);return n&&ot.forEach(function(Ir){return i(ee,Ir)}),Yt&&Zr(ee,ct),Qe}function Ke(ee,H,se,Ae){var Qe=oe(se);if(typeof Qe!="function")throw Error(t(150));if(se=Qe.call(se),se==null)throw Error(t(151));for(var st=Qe=null,ot=H,ct=H=0,hn=null,Nt=se.next();ot!==null&&!Nt.done;ct++,Nt=se.next()){ot.index>ct?(hn=ot,ot=null):hn=ot.sibling;var Ir=ve(ee,ot,Nt.value,Ae);if(Ir===null){ot===null&&(ot=hn);break}n&&ot&&Ir.alternate===null&&i(ee,ot),H=m(Ir,H,ct),st===null?Qe=Ir:st.sibling=Ir,st=Ir,ot=hn}if(Nt.done)return a(ee,ot),Yt&&Zr(ee,ct),Qe;if(ot===null){for(;!Nt.done;ct++,Nt=se.next())Nt=Me(ee,Nt.value,Ae),Nt!==null&&(H=m(Nt,H,ct),st===null?Qe=Nt:st.sibling=Nt,st=Nt);return Yt&&Zr(ee,ct),Qe}for(ot=u(ee,ot);!Nt.done;ct++,Nt=se.next())Nt=Be(ot,ee,ct,Nt.value,Ae),Nt!==null&&(n&&Nt.alternate!==null&&ot.delete(Nt.key===null?ct:Nt.key),H=m(Nt,H,ct),st===null?Qe=Nt:st.sibling=Nt,st=Nt);return n&&ot.forEach(function(zv){return i(ee,zv)}),Yt&&Zr(ee,ct),Qe}function rn(ee,H,se,Ae){if(typeof se=="object"&&se!==null&&se.type===N&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case k:e:{for(var Qe=se.key,st=H;st!==null;){if(st.key===Qe){if(Qe=se.type,Qe===N){if(st.tag===7){a(ee,st.sibling),H=d(st,se.props.children),H.return=ee,ee=H;break e}}else if(st.elementType===Qe||typeof Qe=="object"&&Qe!==null&&Qe.$$typeof===ie&&Ih(Qe)===st.type){a(ee,st.sibling),H=d(st,se.props),H.ref=Fo(ee,st,se),H.return=ee,ee=H;break e}a(ee,st);break}else i(ee,st);st=st.sibling}se.type===N?(H=ss(se.props.children,ee.mode,Ae,se.key),H.return=ee,ee=H):(Ae=pl(se.type,se.key,se.props,null,ee.mode,Ae),Ae.ref=Fo(ee,H,se),Ae.return=ee,ee=Ae)}return w(ee);case O:e:{for(st=se.key;H!==null;){if(H.key===st)if(H.tag===4&&H.stateNode.containerInfo===se.containerInfo&&H.stateNode.implementation===se.implementation){a(ee,H.sibling),H=d(H,se.children||[]),H.return=ee,ee=H;break e}else{a(ee,H);break}else i(ee,H);H=H.sibling}H=Ic(se,ee.mode,Ae),H.return=ee,ee=H}return w(ee);case ie:return st=se._init,rn(ee,H,st(se._payload),Ae)}if(yt(se))return $e(ee,H,se,Ae);if(oe(se))return Ke(ee,H,se,Ae);Wa(ee,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,H!==null&&H.tag===6?(a(ee,H.sibling),H=d(H,se),H.return=ee,ee=H):(a(ee,H),H=Nc(se,ee.mode,Ae),H.return=ee,ee=H),w(ee)):a(ee,H)}return rn}var Us=Uh(!0),Fh=Uh(!1),Xa=Er(null),qa=null,Fs=null,Gu=null;function Wu(){Gu=Fs=qa=null}function Xu(n){var i=Xa.current;qt(Xa),n._currentValue=i}function qu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function Os(n,i){qa=n,Gu=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gn=!0),n.firstContext=null)}function ai(n){var i=n._currentValue;if(Gu!==n)if(n={context:n,memoizedValue:i,next:null},Fs===null){if(qa===null)throw Error(t(308));Fs=n,qa.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return i}var Jr=null;function Yu(n){Jr===null?Jr=[n]:Jr.push(n)}function Oh(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,Yu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Ji(n,u)}function Ji(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ar=!1;function ju(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function kh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Qi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Cr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Pt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Ji(n,a)}return d=u.interleaved,d===null?(i.next=i,Yu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Ji(n,a)}function Ya(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Ft(n,a)}}function Bh(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ja(n,i,a,u){var d=n.updateQueue;Ar=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var z=I,ue=z.next;z.next=null,w===null?m=ue:w.next=ue,w=z;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==w&&(I===null?_e.firstBaseUpdate=ue:I.next=ue,_e.lastBaseUpdate=z))}if(m!==null){var Me=d.baseState;w=0,_e=ue=z=null,I=m;do{var ve=I.lane,Be=I.eventTime;if((u&ve)===ve){_e!==null&&(_e=_e.next={eventTime:Be,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var $e=n,Ke=I;switch(ve=i,Be=a,Ke.tag){case 1:if($e=Ke.payload,typeof $e=="function"){Me=$e.call(Be,Me,ve);break e}Me=$e;break e;case 3:$e.flags=$e.flags&-65537|128;case 0:if($e=Ke.payload,ve=typeof $e=="function"?$e.call(Be,Me,ve):$e,ve==null)break e;Me=ce({},Me,ve);break e;case 2:Ar=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ve=d.effects,ve===null?d.effects=[I]:ve.push(I))}else Be={eventTime:Be,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ue=_e=Be,z=Me):_e=_e.next=Be,w|=ve;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,d.lastBaseUpdate=ve,d.shared.pending=null}}while(!0);if(_e===null&&(z=Me),d.baseState=z,d.firstBaseUpdate=ue,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);ts|=w,n.lanes=w,n.memoizedState=Me}}function zh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Oo={},Pi=Er(Oo),ko=Er(Oo),Bo=Er(Oo);function Qr(n){if(n===Oo)throw Error(t(174));return n}function $u(n,i){switch(Gt(Bo,i),Gt(ko,n),Gt(Pi,Oo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ge(i,n)}qt(Pi),Gt(Pi,i)}function ks(){qt(Pi),qt(ko),qt(Bo)}function Vh(n){Qr(Bo.current);var i=Qr(Pi.current),a=ge(i,n.type);i!==a&&(Gt(ko,n),Gt(Pi,a))}function Ku(n){ko.current===n&&(qt(Pi),qt(ko))}var jt=Er(0);function $a(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Zu=[];function Ju(){for(var n=0;n<Zu.length;n++)Zu[n]._workInProgressVersionPrimary=null;Zu.length=0}var Ka=b.ReactCurrentDispatcher,Qu=b.ReactCurrentBatchConfig,es=0,$t=null,an=null,fn=null,Za=!1,zo=!1,Vo=0,lv=0;function Sn(){throw Error(t(321))}function ec(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!_i(n[a],i[a]))return!1;return!0}function tc(n,i,a,u,d,m){if(es=m,$t=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ka.current=n===null||n.memoizedState===null?dv:hv,n=a(u,d),zo){m=0;do{if(zo=!1,Vo=0,25<=m)throw Error(t(301));m+=1,fn=an=null,i.updateQueue=null,Ka.current=pv,n=a(u,d)}while(zo)}if(Ka.current=el,i=an!==null&&an.next!==null,es=0,fn=an=$t=null,Za=!1,i)throw Error(t(300));return n}function nc(){var n=Vo!==0;return Vo=0,n}function Li(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?$t.memoizedState=fn=n:fn=fn.next=n,fn}function li(){if(an===null){var n=$t.alternate;n=n!==null?n.memoizedState:null}else n=an.next;var i=fn===null?$t.memoizedState:fn.next;if(i!==null)fn=i,an=n;else{if(n===null)throw Error(t(310));an=n,n={memoizedState:an.memoizedState,baseState:an.baseState,baseQueue:an.baseQueue,queue:an.queue,next:null},fn===null?$t.memoizedState=fn=n:fn=fn.next=n}return fn}function Ho(n,i){return typeof i=="function"?i(n):i}function ic(n){var i=li(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=an,d=u.baseQueue,m=a.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}u.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,u=u.baseState;var I=w=null,z=null,ue=m;do{var _e=ue.lane;if((es&_e)===_e)z!==null&&(z=z.next={lane:0,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null}),u=ue.hasEagerState?ue.eagerState:n(u,ue.action);else{var Me={lane:_e,action:ue.action,hasEagerState:ue.hasEagerState,eagerState:ue.eagerState,next:null};z===null?(I=z=Me,w=u):z=z.next=Me,$t.lanes|=_e,ts|=_e}ue=ue.next}while(ue!==null&&ue!==m);z===null?w=u:z.next=I,_i(u,i.memoizedState)||(Gn=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=z,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do m=d.lane,$t.lanes|=m,ts|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function rc(n){var i=li(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do m=n(m,w.action),w=w.next;while(w!==d);_i(m,i.memoizedState)||(Gn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function Hh(){}function Gh(n,i){var a=$t,u=li(),d=i(),m=!_i(u.memoizedState,d);if(m&&(u.memoizedState=d,Gn=!0),u=u.queue,sc(qh.bind(null,a,u,n),[n]),u.getSnapshot!==i||m||fn!==null&&fn.memoizedState.tag&1){if(a.flags|=2048,Go(9,Xh.bind(null,a,u,d,i),void 0,null),dn===null)throw Error(t(349));(es&30)!==0||Wh(a,i,d)}return d}function Wh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Xh(n,i,a,u){i.value=a,i.getSnapshot=u,Yh(i)&&jh(n)}function qh(n,i,a){return a(function(){Yh(i)&&jh(n)})}function Yh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!_i(n,a)}catch{return!0}}function jh(n){var i=Ji(n,1);i!==null&&Ei(i,n,1,-1)}function $h(n){var i=Li();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:n},i.queue=n,n=n.dispatch=fv.bind(null,$t,n),[i.memoizedState,n]}function Go(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=$t.updateQueue,i===null?(i={lastEffect:null,stores:null},$t.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Kh(){return li().memoizedState}function Ja(n,i,a,u){var d=Li();$t.flags|=n,d.memoizedState=Go(1|i,a,void 0,u===void 0?null:u)}function Qa(n,i,a,u){var d=li();u=u===void 0?null:u;var m=void 0;if(an!==null){var w=an.memoizedState;if(m=w.destroy,u!==null&&ec(u,w.deps)){d.memoizedState=Go(i,a,m,u);return}}$t.flags|=n,d.memoizedState=Go(1|i,a,m,u)}function Zh(n,i){return Ja(8390656,8,n,i)}function sc(n,i){return Qa(2048,8,n,i)}function Jh(n,i){return Qa(4,2,n,i)}function Qh(n,i){return Qa(4,4,n,i)}function ep(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function tp(n,i,a){return a=a!=null?a.concat([n]):null,Qa(4,4,ep.bind(null,i,n),a)}function oc(){}function np(n,i){var a=li();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&ec(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function ip(n,i){var a=li();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&ec(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function rp(n,i,a){return(es&21)===0?(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=a):(_i(a,i)||(a=Bn(),$t.lanes|=a,ts|=a,n.baseState=!0),i)}function uv(n,i){var a=ut;ut=a!==0&&4>a?a:4,n(!0);var u=Qu.transition;Qu.transition={};try{n(!1),i()}finally{ut=a,Qu.transition=u}}function sp(){return li().memoizedState}function cv(n,i,a){var u=Lr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},op(n))ap(i,a);else if(a=Oh(n,i,a,u),a!==null){var d=In();Ei(a,n,u,d),lp(a,i,u)}}function fv(n,i,a){var u=Lr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(op(n))ap(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,I=m(w,a);if(d.hasEagerState=!0,d.eagerState=I,_i(I,w)){var z=i.interleaved;z===null?(d.next=d,Yu(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}a=Oh(n,i,d,u),a!==null&&(d=In(),Ei(a,n,u,d),lp(a,i,u))}}function op(n){var i=n.alternate;return n===$t||i!==null&&i===$t}function ap(n,i){zo=Za=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function lp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,Ft(n,a)}}var el={readContext:ai,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},dv={readContext:ai,useCallback:function(n,i){return Li().memoizedState=[n,i===void 0?null:i],n},useContext:ai,useEffect:Zh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Ja(4194308,4,ep.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Ja(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ja(4,2,n,i)},useMemo:function(n,i){var a=Li();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=Li();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=cv.bind(null,$t,n),[u.memoizedState,n]},useRef:function(n){var i=Li();return n={current:n},i.memoizedState=n},useState:$h,useDebugValue:oc,useDeferredValue:function(n){return Li().memoizedState=n},useTransition:function(){var n=$h(!1),i=n[0];return n=uv.bind(null,n[1]),Li().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=$t,d=Li();if(Yt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),dn===null)throw Error(t(349));(es&30)!==0||Wh(u,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Zh(qh.bind(null,u,m,n),[n]),u.flags|=2048,Go(9,Xh.bind(null,u,m,a,i),void 0,null),a},useId:function(){var n=Li(),i=dn.identifierPrefix;if(Yt){var a=Zi,u=Ki;a=(u&~(1<<32-rt(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Vo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=lv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},hv={readContext:ai,useCallback:np,useContext:ai,useEffect:sc,useImperativeHandle:tp,useInsertionEffect:Jh,useLayoutEffect:Qh,useMemo:ip,useReducer:ic,useRef:Kh,useState:function(){return ic(Ho)},useDebugValue:oc,useDeferredValue:function(n){var i=li();return rp(i,an.memoizedState,n)},useTransition:function(){var n=ic(Ho)[0],i=li().memoizedState;return[n,i]},useMutableSource:Hh,useSyncExternalStore:Gh,useId:sp,unstable_isNewReconciler:!1},pv={readContext:ai,useCallback:np,useContext:ai,useEffect:sc,useImperativeHandle:tp,useInsertionEffect:Jh,useLayoutEffect:Qh,useMemo:ip,useReducer:rc,useRef:Kh,useState:function(){return rc(Ho)},useDebugValue:oc,useDeferredValue:function(n){var i=li();return an===null?i.memoizedState=n:rp(i,an.memoizedState,n)},useTransition:function(){var n=rc(Ho)[0],i=li().memoizedState;return[n,i]},useMutableSource:Hh,useSyncExternalStore:Gh,useId:sp,unstable_isNewReconciler:!1};function yi(n,i){if(n&&n.defaultProps){i=ce({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function ac(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:ce({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var tl={isMounted:function(n){return(n=n._reactInternals)?Ln(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=In(),d=Lr(n),m=Qi(u,d);m.payload=i,a!=null&&(m.callback=a),i=Cr(n,m,d),i!==null&&(Ei(i,n,d,u),Ya(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=In(),d=Lr(n),m=Qi(u,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Cr(n,m,d),i!==null&&(Ei(i,n,d,u),Ya(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=In(),u=Lr(n),d=Qi(a,u);d.tag=2,i!=null&&(d.callback=i),i=Cr(n,d,u),i!==null&&(Ei(i,n,u,a),Ya(i,n,u))}};function up(n,i,a,u,d,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,w):i.prototype&&i.prototype.isPureReactComponent?!bo(a,u)||!bo(d,m):!0}function cp(n,i,a){var u=!1,d=Tr,m=i.contextType;return typeof m=="object"&&m!==null?m=ai(m):(d=Hn(i)?$r:yn.current,u=i.contextTypes,m=(u=u!=null)?Ls(n,d):Tr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=tl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function fp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&tl.enqueueReplaceState(i,i.state,null)}function lc(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},ju(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ai(m):(m=Hn(i)?$r:yn.current,d.context=Ls(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(ac(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&tl.enqueueReplaceState(d,d.state,null),ja(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Bs(n,i){try{var a="",u=i;do a+=Ze(u),u=u.return;while(u);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function uc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function cc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var mv=typeof WeakMap=="function"?WeakMap:Map;function dp(n,i,a){a=Qi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){ll||(ll=!0,wc=u),cc(n,i)},a}function hp(n,i,a){a=Qi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){cc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){cc(n,i),typeof u!="function"&&(br===null?br=new Set([this]):br.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function pp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new mv;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=bv.bind(null,n,i,a),i.then(n,n))}function mp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function gp(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Qi(-1,1),i.tag=2,Cr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var gv=b.ReactCurrentOwner,Gn=!1;function Nn(n,i,a,u){i.child=n===null?Fh(i,null,a,u):Us(i,n.child,a,u)}function vp(n,i,a,u,d){a=a.render;var m=i.ref;return Os(i,d),u=tc(n,i,a,u,m,d),a=nc(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,er(n,i,d)):(Yt&&a&&ku(i),i.flags|=1,Nn(n,i,u,d),i.child)}function _p(n,i,a,u,d){if(n===null){var m=a.type;return typeof m=="function"&&!Dc(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,xp(n,i,m,u,d)):(n=pl(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:bo,a(w,u)&&n.ref===i.ref)return er(n,i,d)}return i.flags|=1,n=Nr(m,u),n.ref=i.ref,n.return=i,i.child=n}function xp(n,i,a,u,d){if(n!==null){var m=n.memoizedProps;if(bo(m,u)&&n.ref===i.ref)if(Gn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Gn=!0);else return i.lanes=n.lanes,er(n,i,d)}return fc(n,i,a,u,d)}function yp(n,i,a){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Vs,Qn),Qn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Gt(Vs,Qn),Qn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,Gt(Vs,Qn),Qn|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,Gt(Vs,Qn),Qn|=u;return Nn(n,i,d,a),i.child}function Sp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function fc(n,i,a,u,d){var m=Hn(a)?$r:yn.current;return m=Ls(i,m),Os(i,d),a=tc(n,i,a,u,m,d),u=nc(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,er(n,i,d)):(Yt&&u&&ku(i),i.flags|=1,Nn(n,i,a,d),i.child)}function Mp(n,i,a,u,d){if(Hn(a)){var m=!0;Ba(i)}else m=!1;if(Os(i,d),i.stateNode===null)il(n,i),cp(i,a,u),lc(i,a,u,d),u=!0;else if(n===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var z=w.context,ue=a.contextType;typeof ue=="object"&&ue!==null?ue=ai(ue):(ue=Hn(a)?$r:yn.current,ue=Ls(i,ue));var _e=a.getDerivedStateFromProps,Me=typeof _e=="function"||typeof w.getSnapshotBeforeUpdate=="function";Me||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==u||z!==ue)&&fp(i,w,u,ue),Ar=!1;var ve=i.memoizedState;w.state=ve,ja(i,u,w,d),z=i.memoizedState,I!==u||ve!==z||Vn.current||Ar?(typeof _e=="function"&&(ac(i,a,_e,u),z=i.memoizedState),(I=Ar||up(i,a,I,u,ve,z,ue))?(Me||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=z),w.props=u,w.state=z,w.context=ue,u=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,kh(n,i),I=i.memoizedProps,ue=i.type===i.elementType?I:yi(i.type,I),w.props=ue,Me=i.pendingProps,ve=w.context,z=a.contextType,typeof z=="object"&&z!==null?z=ai(z):(z=Hn(a)?$r:yn.current,z=Ls(i,z));var Be=a.getDerivedStateFromProps;(_e=typeof Be=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Me||ve!==z)&&fp(i,w,u,z),Ar=!1,ve=i.memoizedState,w.state=ve,ja(i,u,w,d);var $e=i.memoizedState;I!==Me||ve!==$e||Vn.current||Ar?(typeof Be=="function"&&(ac(i,a,Be,u),$e=i.memoizedState),(ue=Ar||up(i,a,ue,u,ve,$e,z)||!1)?(_e||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,$e,z),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,$e,z)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=$e),w.props=u,w.state=$e,w.context=z,u=ue):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),u=!1)}return dc(n,i,a,u,m,d)}function dc(n,i,a,u,d,m){Sp(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return d&&Ch(i,a,!1),er(n,i,m);u=i.stateNode,gv.current=i;var I=w&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=Us(i,n.child,null,m),i.child=Us(i,null,I,m)):Nn(n,i,I,m),i.memoizedState=u.state,d&&Ch(i,a,!0),i.child}function Ep(n){var i=n.stateNode;i.pendingContext?wh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&wh(n,i.context,!1),$u(n,i.containerInfo)}function Tp(n,i,a,u,d){return Is(),Hu(d),i.flags|=256,Nn(n,i,a,u),i.child}var hc={dehydrated:null,treeContext:null,retryLane:0};function pc(n){return{baseLanes:n,cachePool:null,transitions:null}}function wp(n,i,a){var u=i.pendingProps,d=jt.current,m=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Gt(jt,d&1),n===null)return Vu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,n=u.fallback,m?(u=i.mode,m=i.child,w={mode:"hidden",children:w},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=ml(w,u,0,null),n=ss(n,u,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=pc(a),i.memoizedState=hc,n):mc(i,w));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return vv(n,i,w,u,I,d,a);if(m){m=u.fallback,w=i.mode,d=n.child,I=d.sibling;var z={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=z,i.deletions=null):(u=Nr(d,z),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=Nr(I,m):(m=ss(m,w,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,w=n.child.memoizedState,w=w===null?pc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,i.memoizedState=hc,u}return m=n.child,n=m.sibling,u=Nr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function mc(n,i){return i=ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function nl(n,i,a,u){return u!==null&&Hu(u),Us(i,n.child,null,a),n=mc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function vv(n,i,a,u,d,m,w){if(a)return i.flags&256?(i.flags&=-257,u=uc(Error(t(422))),nl(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=ml({mode:"visible",children:u.children},d,0,null),m=ss(m,d,w,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Us(i,n.child,null,w),i.child.memoizedState=pc(w),i.memoizedState=hc,m);if((i.mode&1)===0)return nl(n,i,w,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,m=Error(t(419)),u=uc(m,u,void 0),nl(n,i,w,u)}if(I=(w&n.childLanes)!==0,Gn||I){if(u=dn,u!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|w))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Ji(n,d),Ei(u,n,d,-1))}return Lc(),u=uc(Error(t(421))),nl(n,i,w,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Pv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Jn=Mr(d.nextSibling),Zn=i,Yt=!0,xi=null,n!==null&&(si[oi++]=Ki,si[oi++]=Zi,si[oi++]=Kr,Ki=n.id,Zi=n.overflow,Kr=i),i=mc(i,u.children),i.flags|=4096,i)}function Ap(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),qu(n.return,i,a)}function gc(n,i,a,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=d)}function Cp(n,i,a){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Nn(n,i,u.children,a),u=jt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ap(n,a,i);else if(n.tag===19)Ap(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Gt(jt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&$a(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),gc(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&$a(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}gc(i,!0,a,null,m);break;case"together":gc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function il(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function er(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ts|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Nr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Nr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function _v(n,i,a){switch(i.tag){case 3:Ep(i),Is();break;case 5:Vh(i);break;case 1:Hn(i.type)&&Ba(i);break;case 4:$u(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;Gt(Xa,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Gt(jt,jt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?wp(n,i,a):(Gt(jt,jt.current&1),n=er(n,i,a),n!==null?n.sibling:null);Gt(jt,jt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Cp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Gt(jt,jt.current),u)break;return null;case 22:case 23:return i.lanes=0,yp(n,i,a)}return er(n,i,a)}var Rp,vc,bp,Pp;Rp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},vc=function(){},bp=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Qr(Pi.current);var m=null;switch(a){case"input":d=gt(n,d),u=gt(n,u),m=[];break;case"select":d=ce({},d,{value:void 0}),u=ce({},u,{value:void 0}),m=[];break;case"textarea":d=Ye(n,d),u=Ye(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Fa)}Ge(a,u);var w;a=null;for(ue in d)if(!u.hasOwnProperty(ue)&&d.hasOwnProperty(ue)&&d[ue]!=null)if(ue==="style"){var I=d[ue];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ue!=="dangerouslySetInnerHTML"&&ue!=="children"&&ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&ue!=="autoFocus"&&(o.hasOwnProperty(ue)?m||(m=[]):(m=m||[]).push(ue,null));for(ue in u){var z=u[ue];if(I=d!=null?d[ue]:void 0,u.hasOwnProperty(ue)&&z!==I&&(z!=null||I!=null))if(ue==="style")if(I){for(w in I)!I.hasOwnProperty(w)||z&&z.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in z)z.hasOwnProperty(w)&&I[w]!==z[w]&&(a||(a={}),a[w]=z[w])}else a||(m||(m=[]),m.push(ue,a)),a=z;else ue==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,I=I?I.__html:void 0,z!=null&&I!==z&&(m=m||[]).push(ue,z)):ue==="children"?typeof z!="string"&&typeof z!="number"||(m=m||[]).push(ue,""+z):ue!=="suppressContentEditableWarning"&&ue!=="suppressHydrationWarning"&&(o.hasOwnProperty(ue)?(z!=null&&ue==="onScroll"&&Xt("scroll",n),m||I===z||(m=[])):(m=m||[]).push(ue,z))}a&&(m=m||[]).push("style",a);var ue=m;(i.updateQueue=ue)&&(i.flags|=4)}},Pp=function(n,i,a,u){a!==u&&(i.flags|=4)};function Wo(n,i){if(!Yt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function xv(n,i,a){var u=i.pendingProps;switch(Bu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(i),null;case 1:return Hn(i.type)&&ka(),Mn(i),null;case 3:return u=i.stateNode,ks(),qt(Vn),qt(yn),Ju(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ga(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xi!==null&&(Rc(xi),xi=null))),vc(n,i),Mn(i),null;case 5:Ku(i);var d=Qr(Bo.current);if(a=i.type,n!==null&&i.stateNode!=null)bp(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Mn(i),null}if(n=Qr(Pi.current),Ga(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[bi]=i,u[Io]=m,n=(i.mode&1)!==0,a){case"dialog":Xt("cancel",u),Xt("close",u);break;case"iframe":case"object":case"embed":Xt("load",u);break;case"video":case"audio":for(d=0;d<Lo.length;d++)Xt(Lo[d],u);break;case"source":Xt("error",u);break;case"img":case"image":case"link":Xt("error",u),Xt("load",u);break;case"details":Xt("toggle",u);break;case"input":Ct(u,m),Xt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Xt("invalid",u);break;case"textarea":D(u,m),Xt("invalid",u)}Ge(a,m),d=null;for(var w in m)if(m.hasOwnProperty(w)){var I=m[w];w==="children"?typeof I=="string"?u.textContent!==I&&(m.suppressHydrationWarning!==!0&&Ua(u.textContent,I,n),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&Ua(u.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Xt("scroll",u)}switch(a){case"input":it(u),B(u,m,!0);break;case"textarea":it(u),G(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Fa)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=he(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(a,{is:u.is}):(n=w.createElement(a),a==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,a),n[bi]=i,n[Io]=u,Rp(n,i,!1,!1),i.stateNode=n;e:{switch(w=Ne(a,u),a){case"dialog":Xt("cancel",n),Xt("close",n),d=u;break;case"iframe":case"object":case"embed":Xt("load",n),d=u;break;case"video":case"audio":for(d=0;d<Lo.length;d++)Xt(Lo[d],n);d=u;break;case"source":Xt("error",n),d=u;break;case"img":case"image":case"link":Xt("error",n),Xt("load",n),d=u;break;case"details":Xt("toggle",n),d=u;break;case"input":Ct(n,u),d=gt(n,u),Xt("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=ce({},u,{value:void 0}),Xt("invalid",n);break;case"textarea":D(n,u),d=Ye(n,u),Xt("invalid",n);break;default:d=u}Ge(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var z=I[m];m==="style"?we(n,z):m==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Oe(n,z)):m==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&Te(n,z):typeof z=="number"&&Te(n,""+z):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?z!=null&&m==="onScroll"&&Xt("scroll",n):z!=null&&L(n,m,z,w))}switch(a){case"input":it(n),B(n,u,!1);break;case"textarea":it(n),G(n);break;case"option":u.value!=null&&n.setAttribute("value",""+pe(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?St(n,!!u.multiple,m,!1):u.defaultValue!=null&&St(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Fa)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mn(i),null;case 6:if(n&&i.stateNode!=null)Pp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Qr(Bo.current),Qr(Pi.current),Ga(i)){if(u=i.stateNode,a=i.memoizedProps,u[bi]=i,(m=u.nodeValue!==a)&&(n=Zn,n!==null))switch(n.tag){case 3:Ua(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ua(u.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[bi]=i,i.stateNode=u}return Mn(i),null;case 13:if(qt(jt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&Jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Nh(),Is(),i.flags|=98560,m=!1;else if(m=Ga(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[bi]=i}else Is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),m=!1}else xi!==null&&(Rc(xi),xi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(jt.current&1)!==0?ln===0&&(ln=3):Lc())),i.updateQueue!==null&&(i.flags|=4),Mn(i),null);case 4:return ks(),vc(n,i),n===null&&Do(i.stateNode.containerInfo),Mn(i),null;case 10:return Xu(i.type._context),Mn(i),null;case 17:return Hn(i.type)&&ka(),Mn(i),null;case 19:if(qt(jt),m=i.memoizedState,m===null)return Mn(i),null;if(u=(i.flags&128)!==0,w=m.rendering,w===null)if(u)Wo(m,!1);else{if(ln!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=$a(n),w!==null){for(i.flags|=128,Wo(m,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,n=u,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Gt(jt,jt.current&1|2),i.child}n=n.sibling}m.tail!==null&&A()>Hs&&(i.flags|=128,u=!0,Wo(m,!1),i.lanes=4194304)}else{if(!u)if(n=$a(w),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Wo(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Yt)return Mn(i),null}else 2*A()-m.renderingStartTime>Hs&&a!==1073741824&&(i.flags|=128,u=!0,Wo(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=A(),i.sibling=null,a=jt.current,Gt(jt,u?a&1|2:a&1),i):(Mn(i),null);case 22:case 23:return Pc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Qn&1073741824)!==0&&(Mn(i),i.subtreeFlags&6&&(i.flags|=8192)):Mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function yv(n,i){switch(Bu(i),i.tag){case 1:return Hn(i.type)&&ka(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ks(),qt(Vn),qt(yn),Ju(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Ku(i),null;case 13:if(qt(jt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Is()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return qt(jt),null;case 4:return ks(),null;case 10:return Xu(i.type._context),null;case 22:case 23:return Pc(),null;case 24:return null;default:return null}}var rl=!1,En=!1,Sv=typeof WeakSet=="function"?WeakSet:Set,qe=null;function zs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Qt(n,i,u)}else a.current=null}function _c(n,i,a){try{a()}catch(u){Qt(n,i,u)}}var Lp=!1;function Mv(n,i){if(Pu=Ta,n=uh(),Mu(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,I=-1,z=-1,ue=0,_e=0,Me=n,ve=null;t:for(;;){for(var Be;Me!==a||d!==0&&Me.nodeType!==3||(I=w+d),Me!==m||u!==0&&Me.nodeType!==3||(z=w+u),Me.nodeType===3&&(w+=Me.nodeValue.length),(Be=Me.firstChild)!==null;)ve=Me,Me=Be;for(;;){if(Me===n)break t;if(ve===a&&++ue===d&&(I=w),ve===m&&++_e===u&&(z=w),(Be=Me.nextSibling)!==null)break;Me=ve,ve=Me.parentNode}Me=Be}a=I===-1||z===-1?null:{start:I,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Lu={focusedElem:n,selectionRange:a},Ta=!1,qe=i;qe!==null;)if(i=qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,qe=n;else for(;qe!==null;){i=qe;try{var $e=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if($e!==null){var Ke=$e.memoizedProps,rn=$e.memoizedState,ee=i.stateNode,H=ee.getSnapshotBeforeUpdate(i.elementType===i.type?Ke:yi(i.type,Ke),rn);ee.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var se=i.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){Qt(i,i.return,Ae)}if(n=i.sibling,n!==null){n.return=i.return,qe=n;break}qe=i.return}return $e=Lp,Lp=!1,$e}function Xo(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&_c(i,a,m)}d=d.next}while(d!==u)}}function sl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function xc(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Dp(n){var i=n.alternate;i!==null&&(n.alternate=null,Dp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[bi],delete i[Io],delete i[Uu],delete i[rv],delete i[sv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Np(n){return n.tag===5||n.tag===3||n.tag===4}function Ip(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Np(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function yc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Fa));else if(u!==4&&(n=n.child,n!==null))for(yc(n,i,a),n=n.sibling;n!==null;)yc(n,i,a),n=n.sibling}function Sc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Sc(n,i,a),n=n.sibling;n!==null;)Sc(n,i,a),n=n.sibling}var vn=null,Si=!1;function Rr(n,i,a){for(a=a.child;a!==null;)Up(n,i,a),a=a.sibling}function Up(n,i,a){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(De,a)}catch{}switch(a.tag){case 5:En||zs(a,i);case 6:var u=vn,d=Si;vn=null,Rr(n,i,a),vn=u,Si=d,vn!==null&&(Si?(n=vn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):vn.removeChild(a.stateNode));break;case 18:vn!==null&&(Si?(n=vn,a=a.stateNode,n.nodeType===8?Iu(n.parentNode,a):n.nodeType===1&&Iu(n,a),Eo(n)):Iu(vn,a.stateNode));break;case 4:u=vn,d=Si,vn=a.stateNode.containerInfo,Si=!0,Rr(n,i,a),vn=u,Si=d;break;case 0:case 11:case 14:case 15:if(!En&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&_c(a,i,w),d=d.next}while(d!==u)}Rr(n,i,a);break;case 1:if(!En&&(zs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(I){Qt(a,i,I)}Rr(n,i,a);break;case 21:Rr(n,i,a);break;case 22:a.mode&1?(En=(u=En)||a.memoizedState!==null,Rr(n,i,a),En=u):Rr(n,i,a);break;default:Rr(n,i,a)}}function Fp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Sv),i.forEach(function(u){var d=Lv.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function Mi(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var m=n,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:vn=I.stateNode,Si=!1;break e;case 3:vn=I.stateNode.containerInfo,Si=!0;break e;case 4:vn=I.stateNode.containerInfo,Si=!0;break e}I=I.return}if(vn===null)throw Error(t(160));Up(m,w,d),vn=null,Si=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(ue){Qt(d,i,ue)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Op(i,n),i=i.sibling}function Op(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mi(i,n),Di(n),u&4){try{Xo(3,n,n.return),sl(3,n)}catch(Ke){Qt(n,n.return,Ke)}try{Xo(5,n,n.return)}catch(Ke){Qt(n,n.return,Ke)}}break;case 1:Mi(i,n),Di(n),u&512&&a!==null&&zs(a,a.return);break;case 5:if(Mi(i,n),Di(n),u&512&&a!==null&&zs(a,a.return),n.flags&32){var d=n.stateNode;try{Te(d,"")}catch(Ke){Qt(n,n.return,Ke)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,I=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&pt(d,m),Ne(I,w);var ue=Ne(I,m);for(w=0;w<z.length;w+=2){var _e=z[w],Me=z[w+1];_e==="style"?we(d,Me):_e==="dangerouslySetInnerHTML"?Oe(d,Me):_e==="children"?Te(d,Me):L(d,_e,Me,ue)}switch(I){case"input":Dt(d,m);break;case"textarea":E(d,m);break;case"select":var ve=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Be=m.value;Be!=null?St(d,!!m.multiple,Be,!1):ve!==!!m.multiple&&(m.defaultValue!=null?St(d,!!m.multiple,m.defaultValue,!0):St(d,!!m.multiple,m.multiple?[]:"",!1))}d[Io]=m}catch(Ke){Qt(n,n.return,Ke)}}break;case 6:if(Mi(i,n),Di(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ke){Qt(n,n.return,Ke)}}break;case 3:if(Mi(i,n),Di(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{Eo(i.containerInfo)}catch(Ke){Qt(n,n.return,Ke)}break;case 4:Mi(i,n),Di(n);break;case 13:Mi(i,n),Di(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Tc=A())),u&4&&Fp(n);break;case 22:if(_e=a!==null&&a.memoizedState!==null,n.mode&1?(En=(ue=En)||_e,Mi(i,n),En=ue):Mi(i,n),Di(n),u&8192){if(ue=n.memoizedState!==null,(n.stateNode.isHidden=ue)&&!_e&&(n.mode&1)!==0)for(qe=n,_e=n.child;_e!==null;){for(Me=qe=_e;qe!==null;){switch(ve=qe,Be=ve.child,ve.tag){case 0:case 11:case 14:case 15:Xo(4,ve,ve.return);break;case 1:zs(ve,ve.return);var $e=ve.stateNode;if(typeof $e.componentWillUnmount=="function"){u=ve,a=ve.return;try{i=u,$e.props=i.memoizedProps,$e.state=i.memoizedState,$e.componentWillUnmount()}catch(Ke){Qt(u,a,Ke)}}break;case 5:zs(ve,ve.return);break;case 22:if(ve.memoizedState!==null){zp(Me);continue}}Be!==null?(Be.return=ve,qe=Be):zp(Me)}_e=_e.sibling}e:for(_e=null,Me=n;;){if(Me.tag===5){if(_e===null){_e=Me;try{d=Me.stateNode,ue?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Me.stateNode,z=Me.memoizedProps.style,w=z!=null&&z.hasOwnProperty("display")?z.display:null,I.style.display=xe("display",w))}catch(Ke){Qt(n,n.return,Ke)}}}else if(Me.tag===6){if(_e===null)try{Me.stateNode.nodeValue=ue?"":Me.memoizedProps}catch(Ke){Qt(n,n.return,Ke)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;_e===Me&&(_e=null),Me=Me.return}_e===Me&&(_e=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:Mi(i,n),Di(n),u&4&&Fp(n);break;case 21:break;default:Mi(i,n),Di(n)}}function Di(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Np(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Te(d,""),u.flags&=-33);var m=Ip(n);Sc(n,m,d);break;case 3:case 4:var w=u.stateNode.containerInfo,I=Ip(n);yc(n,I,w);break;default:throw Error(t(161))}}catch(z){Qt(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ev(n,i,a){qe=n,kp(n)}function kp(n,i,a){for(var u=(n.mode&1)!==0;qe!==null;){var d=qe,m=d.child;if(d.tag===22&&u){var w=d.memoizedState!==null||rl;if(!w){var I=d.alternate,z=I!==null&&I.memoizedState!==null||En;I=rl;var ue=En;if(rl=w,(En=z)&&!ue)for(qe=d;qe!==null;)w=qe,z=w.child,w.tag===22&&w.memoizedState!==null?Vp(d):z!==null?(z.return=w,qe=z):Vp(d);for(;m!==null;)qe=m,kp(m),m=m.sibling;qe=d,rl=I,En=ue}Bp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,qe=m):Bp(n)}}function Bp(n){for(;qe!==null;){var i=qe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:En||sl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!En)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:yi(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&zh(i,m,u);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}zh(i,w,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ue=i.alternate;if(ue!==null){var _e=ue.memoizedState;if(_e!==null){var Me=_e.dehydrated;Me!==null&&Eo(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}En||i.flags&512&&xc(i)}catch(ve){Qt(i,i.return,ve)}}if(i===n){qe=null;break}if(a=i.sibling,a!==null){a.return=i.return,qe=a;break}qe=i.return}}function zp(n){for(;qe!==null;){var i=qe;if(i===n){qe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,qe=a;break}qe=i.return}}function Vp(n){for(;qe!==null;){var i=qe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{sl(4,i)}catch(z){Qt(i,a,z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(z){Qt(i,d,z)}}var m=i.return;try{xc(i)}catch(z){Qt(i,m,z)}break;case 5:var w=i.return;try{xc(i)}catch(z){Qt(i,w,z)}}}catch(z){Qt(i,i.return,z)}if(i===n){qe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,qe=I;break}qe=i.return}}var Tv=Math.ceil,ol=b.ReactCurrentDispatcher,Mc=b.ReactCurrentOwner,ui=b.ReactCurrentBatchConfig,Pt=0,dn=null,sn=null,_n=0,Qn=0,Vs=Er(0),ln=0,qo=null,ts=0,al=0,Ec=0,Yo=null,Wn=null,Tc=0,Hs=1/0,tr=null,ll=!1,wc=null,br=null,ul=!1,Pr=null,cl=0,jo=0,Ac=null,fl=-1,dl=0;function In(){return(Pt&6)!==0?A():fl!==-1?fl:fl=A()}function Lr(n){return(n.mode&1)===0?1:(Pt&2)!==0&&_n!==0?_n&-_n:av.transition!==null?(dl===0&&(dl=Bn()),dl):(n=ut,n!==0||(n=window.event,n=n===void 0?16:Gd(n.type)),n)}function Ei(n,i,a,u){if(50<jo)throw jo=0,Ac=null,Error(t(185));$n(n,a,u),((Pt&2)===0||n!==dn)&&(n===dn&&((Pt&2)===0&&(al|=a),ln===4&&Dr(n,_n)),Xn(n,u),a===1&&Pt===0&&(i.mode&1)===0&&(Hs=A()+500,za&&wr()))}function Xn(n,i){var a=n.callbackNode;Dn(n,i);var u=tn(n,n===dn?_n:0);if(u===0)a!==null&&pr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&pr(a),i===1)n.tag===0?ov(Gp.bind(null,n)):Rh(Gp.bind(null,n)),nv(function(){(Pt&6)===0&&wr()}),a=null;else{switch(vi(u)){case 1:a=le;break;case 4:a=re;break;case 16:a=ne;break;case 536870912:a=Ve;break;default:a=ne}a=Zp(a,Hp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Hp(n,i){if(fl=-1,dl=0,(Pt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Gs()&&n.callbackNode!==a)return null;var u=tn(n,n===dn?_n:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=hl(n,u);else{i=u;var d=Pt;Pt|=2;var m=Xp();(dn!==n||_n!==i)&&(tr=null,Hs=A()+500,is(n,i));do try{Cv();break}catch(I){Wp(n,I)}while(!0);Wu(),ol.current=m,Pt=d,sn!==null?i=0:(dn=null,_n=0,i=ln)}if(i!==0){if(i===2&&(d=wt(n),d!==0&&(u=d,i=Cc(n,d))),i===1)throw a=qo,is(n,0),Dr(n,u),Xn(n,A()),a;if(i===6)Dr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!wv(d)&&(i=hl(n,u),i===2&&(m=wt(n),m!==0&&(u=m,i=Cc(n,m))),i===1))throw a=qo,is(n,0),Dr(n,u),Xn(n,A()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:rs(n,Wn,tr);break;case 3:if(Dr(n,u),(u&130023424)===u&&(i=Tc+500-A(),10<i)){if(tn(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){In(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Nu(rs.bind(null,n,Wn,tr),i);break}rs(n,Wn,tr);break;case 4:if(Dr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var w=31-rt(u);m=1<<w,w=i[w],w>d&&(d=w),u&=~m}if(u=d,u=A()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Tv(u/1960))-u,10<u){n.timeoutHandle=Nu(rs.bind(null,n,Wn,tr),u);break}rs(n,Wn,tr);break;case 5:rs(n,Wn,tr);break;default:throw Error(t(329))}}}return Xn(n,A()),n.callbackNode===a?Hp.bind(null,n):null}function Cc(n,i){var a=Yo;return n.current.memoizedState.isDehydrated&&(is(n,i).flags|=256),n=hl(n,i),n!==2&&(i=Wn,Wn=a,i!==null&&Rc(i)),n}function Rc(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function wv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],m=d.getSnapshot;d=d.value;try{if(!_i(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Dr(n,i){for(i&=~Ec,i&=~al,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-rt(i),u=1<<a;n[a]=-1,i&=~u}}function Gp(n){if((Pt&6)!==0)throw Error(t(327));Gs();var i=tn(n,0);if((i&1)===0)return Xn(n,A()),null;var a=hl(n,i);if(n.tag!==0&&a===2){var u=wt(n);u!==0&&(i=u,a=Cc(n,u))}if(a===1)throw a=qo,is(n,0),Dr(n,i),Xn(n,A()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,rs(n,Wn,tr),Xn(n,A()),null}function bc(n,i){var a=Pt;Pt|=1;try{return n(i)}finally{Pt=a,Pt===0&&(Hs=A()+500,za&&wr())}}function ns(n){Pr!==null&&Pr.tag===0&&(Pt&6)===0&&Gs();var i=Pt;Pt|=1;var a=ui.transition,u=ut;try{if(ui.transition=null,ut=1,n)return n()}finally{ut=u,ui.transition=a,Pt=i,(Pt&6)===0&&wr()}}function Pc(){Qn=Vs.current,qt(Vs)}function is(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,tv(a)),sn!==null)for(a=sn.return;a!==null;){var u=a;switch(Bu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&ka();break;case 3:ks(),qt(Vn),qt(yn),Ju();break;case 5:Ku(u);break;case 4:ks();break;case 13:qt(jt);break;case 19:qt(jt);break;case 10:Xu(u.type._context);break;case 22:case 23:Pc()}a=a.return}if(dn=n,sn=n=Nr(n.current,null),_n=Qn=i,ln=0,qo=null,Ec=al=ts=0,Wn=Yo=null,Jr!==null){for(i=0;i<Jr.length;i++)if(a=Jr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,m=a.pending;if(m!==null){var w=m.next;m.next=d,u.next=w}a.pending=u}Jr=null}return n}function Wp(n,i){do{var a=sn;try{if(Wu(),Ka.current=el,Za){for(var u=$t.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}Za=!1}if(es=0,fn=an=$t=null,zo=!1,Vo=0,Mc.current=null,a===null||a.return===null){ln=1,qo=i,sn=null;break}e:{var m=n,w=a.return,I=a,z=i;if(i=_n,I.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ue=z,_e=I,Me=_e.tag;if((_e.mode&1)===0&&(Me===0||Me===11||Me===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Be=mp(w);if(Be!==null){Be.flags&=-257,gp(Be,w,I,m,i),Be.mode&1&&pp(m,ue,i),i=Be,z=ue;var $e=i.updateQueue;if($e===null){var Ke=new Set;Ke.add(z),i.updateQueue=Ke}else $e.add(z);break e}else{if((i&1)===0){pp(m,ue,i),Lc();break e}z=Error(t(426))}}else if(Yt&&I.mode&1){var rn=mp(w);if(rn!==null){(rn.flags&65536)===0&&(rn.flags|=256),gp(rn,w,I,m,i),Hu(Bs(z,I));break e}}m=z=Bs(z,I),ln!==4&&(ln=2),Yo===null?Yo=[m]:Yo.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ee=dp(m,z,i);Bh(m,ee);break e;case 1:I=z;var H=m.type,se=m.stateNode;if((m.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(br===null||!br.has(se)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ae=hp(m,I,i);Bh(m,Ae);break e}}m=m.return}while(m!==null)}Yp(a)}catch(Qe){i=Qe,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function Xp(){var n=ol.current;return ol.current=el,n===null?el:n}function Lc(){(ln===0||ln===3||ln===2)&&(ln=4),dn===null||(ts&268435455)===0&&(al&268435455)===0||Dr(dn,_n)}function hl(n,i){var a=Pt;Pt|=2;var u=Xp();(dn!==n||_n!==i)&&(tr=null,is(n,i));do try{Av();break}catch(d){Wp(n,d)}while(!0);if(Wu(),Pt=a,ol.current=u,sn!==null)throw Error(t(261));return dn=null,_n=0,ln}function Av(){for(;sn!==null;)qp(sn)}function Cv(){for(;sn!==null&&!ys();)qp(sn)}function qp(n){var i=Kp(n.alternate,n,Qn);n.memoizedProps=n.pendingProps,i===null?Yp(n):sn=i,Mc.current=null}function Yp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=xv(a,i,Qn),a!==null){sn=a;return}}else{if(a=yv(a,i),a!==null){a.flags&=32767,sn=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{ln=6,sn=null;return}}if(i=i.sibling,i!==null){sn=i;return}sn=i=n}while(i!==null);ln===0&&(ln=5)}function rs(n,i,a){var u=ut,d=ui.transition;try{ui.transition=null,ut=1,Rv(n,i,a,u)}finally{ui.transition=d,ut=u}return null}function Rv(n,i,a,u){do Gs();while(Pr!==null);if((Pt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(mr(n,m),n===dn&&(sn=dn=null,_n=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ul||(ul=!0,Zp(ne,function(){return Gs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ui.transition,ui.transition=null;var w=ut;ut=1;var I=Pt;Pt|=4,Mc.current=null,Mv(n,a),Op(a,n),j0(Lu),Ta=!!Pu,Lu=Pu=null,n.current=a,Ev(a),Ss(),Pt=I,ut=w,ui.transition=m}else n.current=a;if(ul&&(ul=!1,Pr=n,cl=d),m=n.pendingLanes,m===0&&(br=null),et(a.stateNode),Xn(n,A()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(ll)throw ll=!1,n=wc,wc=null,n;return(cl&1)!==0&&n.tag!==0&&Gs(),m=n.pendingLanes,(m&1)!==0?n===Ac?jo++:(jo=0,Ac=n):jo=0,wr(),null}function Gs(){if(Pr!==null){var n=vi(cl),i=ui.transition,a=ut;try{if(ui.transition=null,ut=16>n?16:n,Pr===null)var u=!1;else{if(n=Pr,Pr=null,cl=0,(Pt&6)!==0)throw Error(t(331));var d=Pt;for(Pt|=4,qe=n.current;qe!==null;){var m=qe,w=m.child;if((qe.flags&16)!==0){var I=m.deletions;if(I!==null){for(var z=0;z<I.length;z++){var ue=I[z];for(qe=ue;qe!==null;){var _e=qe;switch(_e.tag){case 0:case 11:case 15:Xo(8,_e,m)}var Me=_e.child;if(Me!==null)Me.return=_e,qe=Me;else for(;qe!==null;){_e=qe;var ve=_e.sibling,Be=_e.return;if(Dp(_e),_e===ue){qe=null;break}if(ve!==null){ve.return=Be,qe=ve;break}qe=Be}}}var $e=m.alternate;if($e!==null){var Ke=$e.child;if(Ke!==null){$e.child=null;do{var rn=Ke.sibling;Ke.sibling=null,Ke=rn}while(Ke!==null)}}qe=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,qe=w;else e:for(;qe!==null;){if(m=qe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Xo(9,m,m.return)}var ee=m.sibling;if(ee!==null){ee.return=m.return,qe=ee;break e}qe=m.return}}var H=n.current;for(qe=H;qe!==null;){w=qe;var se=w.child;if((w.subtreeFlags&2064)!==0&&se!==null)se.return=w,qe=se;else e:for(w=H;qe!==null;){if(I=qe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:sl(9,I)}}catch(Qe){Qt(I,I.return,Qe)}if(I===w){qe=null;break e}var Ae=I.sibling;if(Ae!==null){Ae.return=I.return,qe=Ae;break e}qe=I.return}}if(Pt=d,wr(),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(De,n)}catch{}u=!0}return u}finally{ut=a,ui.transition=i}}return!1}function jp(n,i,a){i=Bs(a,i),i=dp(n,i,1),n=Cr(n,i,1),i=In(),n!==null&&($n(n,1,i),Xn(n,i))}function Qt(n,i,a){if(n.tag===3)jp(n,n,a);else for(;i!==null;){if(i.tag===3){jp(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(br===null||!br.has(u))){n=Bs(a,n),n=hp(i,n,1),i=Cr(i,n,1),n=In(),i!==null&&($n(i,1,n),Xn(i,n));break}}i=i.return}}function bv(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=In(),n.pingedLanes|=n.suspendedLanes&a,dn===n&&(_n&a)===a&&(ln===4||ln===3&&(_n&130023424)===_n&&500>A()-Tc?is(n,0):Ec|=a),Xn(n,i)}function $p(n,i){i===0&&((n.mode&1)===0?i=1:(i=Vt,Vt<<=1,(Vt&130023424)===0&&(Vt=4194304)));var a=In();n=Ji(n,i),n!==null&&($n(n,i,a),Xn(n,a))}function Pv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),$p(n,a)}function Lv(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),$p(n,a)}var Kp;Kp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Vn.current)Gn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Gn=!1,_v(n,i,a);Gn=(n.flags&131072)!==0}else Gn=!1,Yt&&(i.flags&1048576)!==0&&bh(i,Ha,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;il(n,i),n=i.pendingProps;var d=Ls(i,yn.current);Os(i,a),d=tc(null,i,u,n,d,a);var m=nc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Hn(u)?(m=!0,Ba(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,ju(i),d.updater=tl,i.stateNode=d,d._reactInternals=i,lc(i,u,n,a),i=dc(null,i,u,!0,m,a)):(i.tag=0,Yt&&m&&ku(i),Nn(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(il(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Nv(u),n=yi(u,n),d){case 0:i=fc(null,i,u,n,a);break e;case 1:i=Mp(null,i,u,n,a);break e;case 11:i=vp(null,i,u,n,a);break e;case 14:i=_p(null,i,u,yi(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:yi(u,d),fc(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:yi(u,d),Mp(n,i,u,d,a);case 3:e:{if(Ep(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,kh(n,i),ja(i,u,null,a);var w=i.memoizedState;if(u=w.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Bs(Error(t(423)),i),i=Tp(n,i,u,a,d);break e}else if(u!==d){d=Bs(Error(t(424)),i),i=Tp(n,i,u,a,d);break e}else for(Jn=Mr(i.stateNode.containerInfo.firstChild),Zn=i,Yt=!0,xi=null,a=Fh(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Is(),u===d){i=er(n,i,a);break e}Nn(n,i,u,a)}i=i.child}return i;case 5:return Vh(i),n===null&&Vu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,w=d.children,Du(u,d)?w=null:m!==null&&Du(u,m)&&(i.flags|=32),Sp(n,i),Nn(n,i,w,a),i.child;case 6:return n===null&&Vu(i),null;case 13:return wp(n,i,a);case 4:return $u(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Us(i,null,u,a):Nn(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:yi(u,d),vp(n,i,u,d,a);case 7:return Nn(n,i,i.pendingProps,a),i.child;case 8:return Nn(n,i,i.pendingProps.children,a),i.child;case 12:return Nn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,w=d.value,Gt(Xa,u._currentValue),u._currentValue=w,m!==null)if(_i(m.value,w)){if(m.children===d.children&&!Vn.current){i=er(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){w=m.child;for(var z=I.firstContext;z!==null;){if(z.context===u){if(m.tag===1){z=Qi(-1,a&-a),z.tag=2;var ue=m.updateQueue;if(ue!==null){ue=ue.shared;var _e=ue.pending;_e===null?z.next=z:(z.next=_e.next,_e.next=z),ue.pending=z}}m.lanes|=a,z=m.alternate,z!==null&&(z.lanes|=a),qu(m.return,a,i),I.lanes|=a;break}z=z.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),qu(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Nn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,Os(i,a),d=ai(d),u=u(d),i.flags|=1,Nn(n,i,u,a),i.child;case 14:return u=i.type,d=yi(u,i.pendingProps),d=yi(u.type,d),_p(n,i,u,d,a);case 15:return xp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:yi(u,d),il(n,i),i.tag=1,Hn(u)?(n=!0,Ba(i)):n=!1,Os(i,a),cp(i,u,d),lc(i,u,d,a),dc(null,i,u,!0,n,a);case 19:return Cp(n,i,a);case 22:return yp(n,i,a)}throw Error(t(156,i.tag))};function Zp(n,i){return Yr(n,i)}function Dv(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ci(n,i,a,u){return new Dv(n,i,a,u)}function Dc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Nv(n){if(typeof n=="function")return Dc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$)return 11;if(n===q)return 14}return 2}function Nr(n,i){var a=n.alternate;return a===null?(a=ci(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function pl(n,i,a,u,d,m){var w=2;if(u=n,typeof n=="function")Dc(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case N:return ss(a.children,d,m,i);case T:w=8,d|=8;break;case P:return n=ci(12,a,i,d|2),n.elementType=P,n.lanes=m,n;case K:return n=ci(13,a,i,d),n.elementType=K,n.lanes=m,n;case ae:return n=ci(19,a,i,d),n.elementType=ae,n.lanes=m,n;case W:return ml(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Z:w=10;break e;case F:w=9;break e;case $:w=11;break e;case q:w=14;break e;case ie:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ci(w,a,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function ss(n,i,a,u){return n=ci(7,n,u,i),n.lanes=a,n}function ml(n,i,a,u){return n=ci(22,n,u,i),n.elementType=W,n.lanes=a,n.stateNode={isHidden:!1},n}function Nc(n,i,a){return n=ci(6,n,null,i),n.lanes=a,n}function Ic(n,i,a){return i=ci(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Iv(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zn(0),this.expirationTimes=zn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Uc(n,i,a,u,d,m,w,I,z){return n=new Iv(n,i,a,I,z),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ci(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},ju(m),n}function Uv(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Jp(n){if(!n)return Tr;n=n._reactInternals;e:{if(Ln(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Hn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Hn(a))return Ah(n,a,i)}return i}function Qp(n,i,a,u,d,m,w,I,z){return n=Uc(a,u,!0,n,d,m,w,I,z),n.context=Jp(null),a=n.current,u=In(),d=Lr(a),m=Qi(u,d),m.callback=i??null,Cr(a,m,d),n.current.lanes=d,$n(n,d,u),Xn(n,u),n}function gl(n,i,a,u){var d=i.current,m=In(),w=Lr(d);return a=Jp(a),i.context===null?i.context=a:i.pendingContext=a,i=Qi(m,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Cr(d,i,w),n!==null&&(Ei(n,d,w,m),Ya(n,d,w)),w}function vl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function em(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Fc(n,i){em(n,i),(n=n.alternate)&&em(n,i)}function Fv(){return null}var tm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Oc(n){this._internalRoot=n}_l.prototype.render=Oc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));gl(n,i,null,null)},_l.prototype.unmount=Oc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;ns(function(){gl(null,n,null,null)}),i[ji]=null}};function _l(n){this._internalRoot=n}_l.prototype.unstable_scheduleHydration=function(n){if(n){var i=_o();n={blockedOn:null,target:n,priority:i};for(var a=0;a<xr.length&&i!==0&&i<xr[a].priority;a++);xr.splice(a,0,n),a===0&&Vd(n)}};function kc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function nm(){}function Ov(n,i,a,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ue=vl(w);m.call(ue)}}var w=Qp(i,u,n,0,null,!1,!1,"",nm);return n._reactRootContainer=w,n[ji]=w.current,Do(n.nodeType===8?n.parentNode:n),ns(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var ue=vl(z);I.call(ue)}}var z=Uc(n,0,!1,null,null,!1,!1,"",nm);return n._reactRootContainer=z,n[ji]=z.current,Do(n.nodeType===8?n.parentNode:n),ns(function(){gl(i,z,a,u)}),z}function yl(n,i,a,u,d){var m=a._reactRootContainer;if(m){var w=m;if(typeof d=="function"){var I=d;d=function(){var z=vl(w);I.call(z)}}gl(i,w,n,d)}else w=Ov(a,i,n,d,u);return vl(w)}nn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Rt(i.pendingLanes);a!==0&&(Ft(i,a|1),Xn(i,A()),(Pt&6)===0&&(Hs=A()+500,wr()))}break;case 13:ns(function(){var u=Ji(n,1);if(u!==null){var d=In();Ei(u,n,1,d)}}),Fc(n,1)}},ri=function(n){if(n.tag===13){var i=Ji(n,134217728);if(i!==null){var a=In();Ei(i,n,134217728,a)}Fc(n,134217728)}},Yi=function(n){if(n.tag===13){var i=Lr(n),a=Ji(n,i);if(a!==null){var u=In();Ei(a,n,i,u)}Fc(n,i)}},_o=function(){return ut},Bd=function(n,i){var a=ut;try{return ut=n,i()}finally{ut=a}},Ce=function(n,i,a){switch(i){case"input":if(Dt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=Oa(u);if(!d)throw Error(t(90));bt(u),Dt(u,d)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&St(n,!!a.multiple,i,!1)}},at=bc,Ut=ns;var kv={usingClientEntryPoint:!1,Events:[Uo,bs,Oa,de,Xe,bc]},$o={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bv={bundleType:$o.bundleType,version:$o.version,rendererPackageName:$o.rendererPackageName,rendererConfig:$o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Xr(n),n===null?null:n.stateNode},findFiberByHostInstance:$o.findFiberByHostInstance||Fv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sl.isDisabled&&Sl.supportsFiber)try{De=Sl.inject(Bv),ke=Sl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kv,qn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!kc(i))throw Error(t(200));return Uv(n,i,null,a)},qn.createRoot=function(n,i){if(!kc(n))throw Error(t(299));var a=!1,u="",d=tm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Uc(n,1,!1,null,null,a,!1,u,d),n[ji]=i.current,Do(n.nodeType===8?n.parentNode:n),new Oc(i)},qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Xr(i),n=n===null?null:n.stateNode,n},qn.flushSync=function(n){return ns(n)},qn.hydrate=function(n,i,a){if(!xl(i))throw Error(t(200));return yl(null,n,i,!0,a)},qn.hydrateRoot=function(n,i,a){if(!kc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,m="",w=tm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Qp(i,null,n,1,a??null,d,!1,m,w),n[ji]=i.current,Do(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new _l(i)},qn.render=function(n,i,a){if(!xl(i))throw Error(t(200));return yl(null,n,i,!1,a)},qn.unmountComponentAtNode=function(n){if(!xl(n))throw Error(t(40));return n._reactRootContainer?(ns(function(){yl(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1},qn.unstable_batchedUpdates=bc,qn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!xl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return yl(n,i,a,!1,u)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var cm;function $v(){if(cm)return Vc.exports;cm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Vc.exports=jv(),Vc.exports}var fm;function Kv(){if(fm)return El;fm=1;var s=$v();return El.createRoot=s.createRoot,El.hydrateRoot=s.hydrateRoot,El}var Zv=Kv();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sd="183",Jv=0,dm=1,Qv=2,Zl=1,e_=2,ia=3,Wr=0,Yn=1,Fi=2,ur=0,oo=1,hm=2,pm=3,mm=4,t_=5,hs=100,n_=101,i_=102,r_=103,s_=104,o_=200,a_=201,l_=202,u_=203,Cf=204,Rf=205,c_=206,f_=207,d_=208,h_=209,p_=210,m_=211,g_=212,v_=213,__=214,bf=0,Pf=1,Lf=2,lo=3,Df=4,Nf=5,If=6,Uf=7,_g=0,x_=1,y_=2,Bi=0,xg=1,yg=2,Sg=3,Mg=4,Eg=5,Tg=6,wg=7,Ag=300,vs=301,uo=302,Wc=303,Xc=304,ou=306,Ff=1e3,lr=1001,Of=1002,xn=1003,S_=1004,Tl=1005,Cn=1006,qc=1007,ms=1008,ni=1009,Cg=1010,Rg=1011,fa=1012,Md=1013,Hi=1014,Oi=1015,fr=1016,Ed=1017,Td=1018,da=1020,bg=35902,Pg=35899,Lg=1021,Dg=1022,Ri=1023,dr=1026,gs=1027,Ng=1028,wd=1029,co=1030,Ad=1031,Cd=1033,Jl=33776,Ql=33777,eu=33778,tu=33779,kf=35840,Bf=35841,zf=35842,Vf=35843,Hf=36196,Gf=37492,Wf=37496,Xf=37488,qf=37489,Yf=37490,jf=37491,$f=37808,Kf=37809,Zf=37810,Jf=37811,Qf=37812,ed=37813,td=37814,nd=37815,id=37816,rd=37817,sd=37818,od=37819,ad=37820,ld=37821,ud=36492,cd=36494,fd=36495,dd=36283,hd=36284,pd=36285,md=36286,M_=3200,Ig=0,E_=1,Hr="",di="srgb",fo="srgb-linear",iu="linear",zt="srgb",Ws=7680,gm=519,T_=512,w_=513,A_=514,Rd=515,C_=516,R_=517,bd=518,b_=519,vm=35044,_m="300 es",ki=2e3,ha=2001;function P_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ru(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function L_(){const s=ru("canvas");return s.style.display="block",s}const xm={};function ym(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ug(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function dt(...s){s=Ug(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function It(...s){s=Ug(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function su(...s){const e=s.join(" ");e in xm||(xm[e]=!0,dt(...s))}function D_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const N_={[bf]:Pf,[Lf]:If,[Df]:Uf,[lo]:Nf,[Pf]:bf,[If]:Lf,[Uf]:Df,[Nf]:lo};class mo{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const Tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sm=1234567;const oa=Math.PI/180,pa=180/Math.PI;function xs(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Tn[s&255]+Tn[s>>8&255]+Tn[s>>16&255]+Tn[s>>24&255]+"-"+Tn[e&255]+Tn[e>>8&255]+"-"+Tn[e>>16&15|64]+Tn[e>>24&255]+"-"+Tn[t&63|128]+Tn[t>>8&255]+"-"+Tn[t>>16&255]+Tn[t>>24&255]+Tn[r&255]+Tn[r>>8&255]+Tn[r>>16&255]+Tn[r>>24&255]).toLowerCase()}function Et(s,e,t){return Math.max(e,Math.min(t,s))}function Pd(s,e){return(s%e+e)%e}function I_(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function U_(s,e,t){return s!==e?(t-s)/(e-s):0}function aa(s,e,t){return(1-t)*s+t*e}function F_(s,e,t,r){return aa(s,e,1-Math.exp(-t*r))}function O_(s,e=1){return e-Math.abs(Pd(s,e*2)-e)}function k_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function B_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function z_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function V_(s,e){return s+Math.random()*(e-s)}function H_(s){return s*(.5-Math.random())}function G_(s){s!==void 0&&(Sm=s);let e=Sm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function W_(s){return s*oa}function X_(s){return s*pa}function q_(s){return(s&s-1)===0&&s!==0}function Y_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function j_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function $_(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+r)/2),v=c((e+r)/2),x=l((e-r)/2),g=c((e-r)/2),S=l((r-e)/2),M=c((r-e)/2);switch(o){case"XYX":s.set(f*v,h*x,h*g,f*p);break;case"YZY":s.set(h*g,f*v,h*x,f*p);break;case"ZXZ":s.set(h*x,h*g,f*v,f*p);break;case"XZX":s.set(f*v,h*M,h*S,f*p);break;case"YXY":s.set(h*S,f*v,h*M,f*p);break;case"ZYZ":s.set(h*M,h*S,f*v,f*p);break;default:dt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function ro(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const K_={DEG2RAD:oa,RAD2DEG:pa,generateUUID:xs,clamp:Et,euclideanModulo:Pd,mapLinear:I_,inverseLerp:U_,lerp:aa,damp:F_,pingpong:O_,smoothstep:k_,smootherstep:B_,randInt:z_,randFloat:V_,randFloatSpread:H_,seededRandom:G_,degToRad:W_,radToDeg:X_,isPowerOfTwo:q_,ceilPowerOfTwo:Y_,floorPowerOfTwo:j_,setQuaternionFromProperEuler:$_,normalize:Un,denormalize:ro};class nt{constructor(e=0,t=0){nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class go{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let h=r[o+0],p=r[o+1],v=r[o+2],x=r[o+3],g=l[c+0],S=l[c+1],M=l[c+2],C=l[c+3];if(x!==C||h!==g||p!==S||v!==M){let _=h*g+p*S+v*M+x*C;_<0&&(g=-g,S=-S,M=-M,C=-C,_=-_);let y=1-f;if(_<.9995){const R=Math.acos(_),L=Math.sin(R);y=Math.sin(y*R)/L,f=Math.sin(f*R)/L,h=h*y+g*f,p=p*y+S*f,v=v*y+M*f,x=x*y+C*f}else{h=h*y+g*f,p=p*y+S*f,v=v*y+M*f,x=x*y+C*f;const R=1/Math.sqrt(h*h+p*p+v*v+x*x);h*=R,p*=R,v*=R,x*=R}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],h=r[o+1],p=r[o+2],v=r[o+3],x=l[c],g=l[c+1],S=l[c+2],M=l[c+3];return e[t]=f*M+v*x+h*S-p*g,e[t+1]=h*M+v*g+p*x-f*S,e[t+2]=p*M+v*S+f*g-h*x,e[t+3]=v*M-f*x-h*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(o/2),x=f(l/2),g=h(r/2),S=h(o/2),M=h(l/2);switch(c){case"XYZ":this._x=g*v*x+p*S*M,this._y=p*S*x-g*v*M,this._z=p*v*M+g*S*x,this._w=p*v*x-g*S*M;break;case"YXZ":this._x=g*v*x+p*S*M,this._y=p*S*x-g*v*M,this._z=p*v*M-g*S*x,this._w=p*v*x+g*S*M;break;case"ZXY":this._x=g*v*x-p*S*M,this._y=p*S*x+g*v*M,this._z=p*v*M+g*S*x,this._w=p*v*x-g*S*M;break;case"ZYX":this._x=g*v*x-p*S*M,this._y=p*S*x+g*v*M,this._z=p*v*M-g*S*x,this._w=p*v*x+g*S*M;break;case"YZX":this._x=g*v*x+p*S*M,this._y=p*S*x+g*v*M,this._z=p*v*M-g*S*x,this._w=p*v*x-g*S*M;break;case"XZY":this._x=g*v*x-p*S*M,this._y=p*S*x-g*v*M,this._z=p*v*M+g*S*x,this._w=p*v*x+g*S*M;break;default:dt("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],v=t[6],x=t[10],g=r+f+x;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-h)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(r>f&&r>x){const S=2*Math.sqrt(1+r-f-x);this._w=(v-h)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>x){const S=2*Math.sqrt(1+f-r-x);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+x-r-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+c*f+o*p-l*h,this._y=o*v+c*h+l*f-r*p,this._z=l*v+c*p+r*h-o*f,this._w=c*v-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,r=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*r),v=2*(f*t-l*o),x=2*(l*r-c*t);return this.x=t+h*p+c*x-f*v,this.y=r+h*v+f*p-l*x,this.z=o+h*x+l*v-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-r*h,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yc.copy(this).projectOnVector(e),this.sub(Yc)}reflect(e){return this.sub(Yc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yc=new j,Mm=new go;class _t{constructor(e,t,r,o,l,c,f,h,p){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p)}set(e,t,r,o,l,c,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=c,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],v=r[4],x=r[7],g=r[2],S=r[5],M=r[8],C=o[0],_=o[3],y=o[6],R=o[1],L=o[4],b=o[7],k=o[2],O=o[5],N=o[8];return l[0]=c*C+f*R+h*k,l[3]=c*_+f*L+h*O,l[6]=c*y+f*b+h*N,l[1]=p*C+v*R+x*k,l[4]=p*_+v*L+x*O,l[7]=p*y+v*b+x*N,l[2]=g*C+S*R+M*k,l[5]=g*_+S*L+M*O,l[8]=g*y+S*b+M*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*c*v-t*f*p-r*l*v+r*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],x=v*c-f*p,g=f*h-v*l,S=p*l-c*h,M=t*x+r*g+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/M;return e[0]=x*C,e[1]=(o*p-v*r)*C,e[2]=(f*r-o*c)*C,e[3]=g*C,e[4]=(v*t-o*h)*C,e[5]=(o*l-f*t)*C,e[6]=S*C,e[7]=(r*h-p*t)*C,e[8]=(c*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(jc.makeScale(e,t)),this}rotate(e){return this.premultiply(jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jc=new _t,Em=new _t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tm=new _t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Z_(){const s={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===zt&&(o.r=cr(o.r),o.g=cr(o.g),o.b=cr(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===zt&&(o.r=ao(o.r),o.g=ao(o.g),o.b=ao(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Hr?iu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return su("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return su("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[fo]:{primaries:e,whitePoint:r,transfer:iu,toXYZ:Em,fromXYZ:Tm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:di},outputColorSpaceConfig:{drawingBufferColorSpace:di}},[di]:{primaries:e,whitePoint:r,transfer:zt,toXYZ:Em,fromXYZ:Tm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:di}}}),s}const Lt=Z_();function cr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ao(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Xs;class J_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Xs===void 0&&(Xs=ru("canvas")),Xs.width=e.width,Xs.height=e.height;const o=Xs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Xs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ru("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=cr(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(cr(t[r]/255)*255):t[r]=cr(t[r]);return{data:t,width:e.width,height:e.height}}else return dt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Q_=0;class Ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=xs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push($c(o[c].image)):l.push($c(o[c]))}else l=$c(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function $c(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?J_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(dt("Texture: Unable to serialize Texture."),{})}let ex=0;const Kc=new j;class On extends mo{constructor(e=On.DEFAULT_IMAGE,t=On.DEFAULT_MAPPING,r=lr,o=lr,l=Cn,c=ms,f=Ri,h=ni,p=On.DEFAULT_ANISOTROPY,v=Hr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=xs(),this.name="",this.source=new Ld(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kc).x}get height(){return this.source.getSize(Kc).y}get depth(){return this.source.getSize(Kc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){dt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){dt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ag)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ff:e.x=e.x-Math.floor(e.x);break;case lr:e.x=e.x<0?0:1;break;case Of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ff:e.y=e.y-Math.floor(e.y);break;case lr:e.y=e.y<0?0:1;break;case Of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=Ag;On.DEFAULT_ANISOTROPY=1;class en{constructor(e=0,t=0,r=0,o=1){en.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],v=h[4],x=h[8],g=h[1],S=h[5],M=h[9],C=h[2],_=h[6],y=h[10];if(Math.abs(v-g)<.01&&Math.abs(x-C)<.01&&Math.abs(M-_)<.01){if(Math.abs(v+g)<.1&&Math.abs(x+C)<.1&&Math.abs(M+_)<.1&&Math.abs(p+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,b=(S+1)/2,k=(y+1)/2,O=(v+g)/4,N=(x+C)/4,T=(M+_)/4;return L>b&&L>k?L<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(L),o=O/r,l=N/r):b>k?b<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),r=O/o,l=T/o):k<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(k),r=N/l,o=T/l),this.set(r,o,l,t),this}let R=Math.sqrt((_-M)*(_-M)+(x-C)*(x-C)+(g-v)*(g-v));return Math.abs(R)<.001&&(R=1),this.x=(_-M)/R,this.y=(x-C)/R,this.z=(g-v)/R,this.w=Math.acos((p+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tx extends mo{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new On(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Ld(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends tx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Fg extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nx extends On{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=xn,this.minFilter=xn,this.wrapR=lr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zt{constructor(e,t,r,o,l,c,f,h,p,v,x,g,S,M,C,_){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p,v,x,g,S,M,C,_)}set(e,t,r,o,l,c,f,h,p,v,x,g,S,M,C,_){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=l,y[5]=c,y[9]=f,y[13]=h,y[2]=p,y[6]=v,y[10]=x,y[14]=g,y[3]=S,y[7]=M,y[11]=C,y[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/qs.setFromMatrixColumn(e,0).length(),l=1/qs.setFromMatrixColumn(e,1).length(),c=1/qs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const g=c*v,S=c*x,M=f*v,C=f*x;t[0]=h*v,t[4]=-h*x,t[8]=p,t[1]=S+M*p,t[5]=g-C*p,t[9]=-f*h,t[2]=C-g*p,t[6]=M+S*p,t[10]=c*h}else if(e.order==="YXZ"){const g=h*v,S=h*x,M=p*v,C=p*x;t[0]=g+C*f,t[4]=M*f-S,t[8]=c*p,t[1]=c*x,t[5]=c*v,t[9]=-f,t[2]=S*f-M,t[6]=C+g*f,t[10]=c*h}else if(e.order==="ZXY"){const g=h*v,S=h*x,M=p*v,C=p*x;t[0]=g-C*f,t[4]=-c*x,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*v,t[9]=C-g*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const g=c*v,S=c*x,M=f*v,C=f*x;t[0]=h*v,t[4]=M*p-S,t[8]=g*p+C,t[1]=h*x,t[5]=C*p+g,t[9]=S*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const g=c*h,S=c*p,M=f*h,C=f*p;t[0]=h*v,t[4]=C-g*x,t[8]=M*x+S,t[1]=x,t[5]=c*v,t[9]=-f*v,t[2]=-p*v,t[6]=S*x+M,t[10]=g-C*x}else if(e.order==="XZY"){const g=c*h,S=c*p,M=f*h,C=f*p;t[0]=h*v,t[4]=-x,t[8]=p*v,t[1]=g*x+C,t[5]=c*v,t[9]=S*x-M,t[2]=M*x-S,t[6]=f*v,t[10]=C*x+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ix,e,rx)}lookAt(e,t,r){const o=this.elements;return ei.subVectors(e,t),ei.lengthSq()===0&&(ei.z=1),ei.normalize(),Ur.crossVectors(r,ei),Ur.lengthSq()===0&&(Math.abs(r.z)===1?ei.x+=1e-4:ei.z+=1e-4,ei.normalize(),Ur.crossVectors(r,ei)),Ur.normalize(),wl.crossVectors(ei,Ur),o[0]=Ur.x,o[4]=wl.x,o[8]=ei.x,o[1]=Ur.y,o[5]=wl.y,o[9]=ei.y,o[2]=Ur.z,o[6]=wl.z,o[10]=ei.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],v=r[1],x=r[5],g=r[9],S=r[13],M=r[2],C=r[6],_=r[10],y=r[14],R=r[3],L=r[7],b=r[11],k=r[15],O=o[0],N=o[4],T=o[8],P=o[12],Z=o[1],F=o[5],$=o[9],K=o[13],ae=o[2],q=o[6],ie=o[10],W=o[14],J=o[3],oe=o[7],ce=o[11],U=o[15];return l[0]=c*O+f*Z+h*ae+p*J,l[4]=c*N+f*F+h*q+p*oe,l[8]=c*T+f*$+h*ie+p*ce,l[12]=c*P+f*K+h*W+p*U,l[1]=v*O+x*Z+g*ae+S*J,l[5]=v*N+x*F+g*q+S*oe,l[9]=v*T+x*$+g*ie+S*ce,l[13]=v*P+x*K+g*W+S*U,l[2]=M*O+C*Z+_*ae+y*J,l[6]=M*N+C*F+_*q+y*oe,l[10]=M*T+C*$+_*ie+y*ce,l[14]=M*P+C*K+_*W+y*U,l[3]=R*O+L*Z+b*ae+k*J,l[7]=R*N+L*F+b*q+k*oe,l[11]=R*T+L*$+b*ie+k*ce,l[15]=R*P+L*K+b*W+k*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],v=e[2],x=e[6],g=e[10],S=e[14],M=e[3],C=e[7],_=e[11],y=e[15],R=h*S-p*g,L=f*S-p*x,b=f*g-h*x,k=c*S-p*v,O=c*g-h*v,N=c*x-f*v;return t*(C*R-_*L+y*b)-r*(M*R-_*k+y*O)+o*(M*L-C*k+y*N)-l*(M*b-C*O+_*N)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],x=e[9],g=e[10],S=e[11],M=e[12],C=e[13],_=e[14],y=e[15],R=t*f-r*c,L=t*h-o*c,b=t*p-l*c,k=r*h-o*f,O=r*p-l*f,N=o*p-l*h,T=v*C-x*M,P=v*_-g*M,Z=v*y-S*M,F=x*_-g*C,$=x*y-S*C,K=g*y-S*_,ae=R*K-L*$+b*F+k*Z-O*P+N*T;if(ae===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/ae;return e[0]=(f*K-h*$+p*F)*q,e[1]=(o*$-r*K-l*F)*q,e[2]=(C*N-_*O+y*k)*q,e[3]=(g*O-x*N-S*k)*q,e[4]=(h*Z-c*K-p*P)*q,e[5]=(t*K-o*Z+l*P)*q,e[6]=(_*b-M*N-y*L)*q,e[7]=(v*N-g*b+S*L)*q,e[8]=(c*$-f*Z+p*T)*q,e[9]=(r*Z-t*$-l*T)*q,e[10]=(M*O-C*b+y*R)*q,e[11]=(x*b-v*O-S*R)*q,e[12]=(f*P-c*F-h*T)*q,e[13]=(t*F-r*P+o*T)*q,e[14]=(C*L-M*k-_*R)*q,e[15]=(v*k-x*L+g*R)*q,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,v=l*f;return this.set(p*c+r,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+r,v*h-o*c,0,p*h-o*f,v*h+o*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,v=c+c,x=f+f,g=l*p,S=l*v,M=l*x,C=c*v,_=c*x,y=f*x,R=h*p,L=h*v,b=h*x,k=r.x,O=r.y,N=r.z;return o[0]=(1-(C+y))*k,o[1]=(S+b)*k,o[2]=(M-L)*k,o[3]=0,o[4]=(S-b)*O,o[5]=(1-(g+y))*O,o[6]=(_+R)*O,o[7]=0,o[8]=(M+L)*N,o[9]=(_-R)*N,o[10]=(1-(g+C))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=qs.set(o[0],o[1],o[2]).length();const f=qs.set(o[4],o[5],o[6]).length(),h=qs.set(o[8],o[9],o[10]).length();l<0&&(c=-c),Ti.copy(this);const p=1/c,v=1/f,x=1/h;return Ti.elements[0]*=p,Ti.elements[1]*=p,Ti.elements[2]*=p,Ti.elements[4]*=v,Ti.elements[5]*=v,Ti.elements[6]*=v,Ti.elements[8]*=x,Ti.elements[9]*=x,Ti.elements[10]*=x,t.setFromRotationMatrix(Ti),r.x=c,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,c,f=ki,h=!1){const p=this.elements,v=2*l/(t-e),x=2*l/(r-o),g=(t+e)/(t-e),S=(r+o)/(r-o);let M,C;if(h)M=l/(c-l),C=c*l/(c-l);else if(f===ki)M=-(c+l)/(c-l),C=-2*c*l/(c-l);else if(f===ha)M=-c/(c-l),C=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=x,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=ki,h=!1){const p=this.elements,v=2/(t-e),x=2/(r-o),g=-(t+e)/(t-e),S=-(r+o)/(r-o);let M,C;if(h)M=1/(c-l),C=c/(c-l);else if(f===ki)M=-2/(c-l),C=-(c+l)/(c-l);else if(f===ha)M=-1/(c-l),C=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=x,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=M,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const qs=new j,Ti=new Zt,ix=new j(0,0,0),rx=new j(1,1,1),Ur=new j,wl=new j,ei=new j,wm=new Zt,Am=new go;class Gi{constructor(e=0,t=0,r=0,o=Gi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],v=o[9],x=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-x,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(Et(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-Et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:dt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Gi.DEFAULT_ORDER="XYZ";class Og{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sx=0;const Cm=new j,Ys=new go,nr=new Zt,Al=new j,Zo=new j,ox=new j,ax=new go,Rm=new j(1,0,0),bm=new j(0,1,0),Pm=new j(0,0,1),Lm={type:"added"},lx={type:"removed"},js={type:"childadded",child:null},Zc={type:"childremoved",child:null};class Rn extends mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new j,t=new Gi,r=new go,o=new j(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Zt},normalMatrix:{value:new _t}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Og,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(Rm,e)}rotateY(e){return this.rotateOnAxis(bm,e)}rotateZ(e){return this.rotateOnAxis(Pm,e)}translateOnAxis(e,t){return Cm.copy(e).applyQuaternion(this.quaternion),this.position.add(Cm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rm,e)}translateY(e){return this.translateOnAxis(bm,e)}translateZ(e){return this.translateOnAxis(Pm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Al.copy(e):Al.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Zo,Al,this.up):nr.lookAt(Al,Zo,this.up),this.quaternion.setFromRotationMatrix(nr),o&&(nr.extractRotation(o.matrixWorld),Ys.setFromRotationMatrix(nr),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lm),js.child=e,this.dispatchEvent(js),js.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lx),Zc.child=e,this.dispatchEvent(Zc),Zc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lm),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,e,ox),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zo,ax,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const x=h[p];l(e.shapes,x)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),v=c(e.images),x=c(e.shapes),g=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),x.length>0&&(r.shapes=x),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Rn.DEFAULT_UP=new j(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class so extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ux={type:"move"};class Jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new so,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new so,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new so,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const C of e.hand.values()){const _=t.getJointPose(C,r),y=this._getHandJoint(p,C);_!==null&&(y.matrix.fromArray(_.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=_.radius),y.visible=_!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],g=v.position.distanceTo(x.position),S=.02,M=.005;p.inputState.pinching&&g>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(ux)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new so;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},Cl={h:0,s:0,l:0};function Qc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ot{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=di){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Lt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Lt.workingColorSpace){if(e=Pd(e,1),t=Et(t,0,1),r=Et(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Qc(c,l,e+1/3),this.g=Qc(c,l,e),this.b=Qc(c,l,e-1/3)}return Lt.colorSpaceToWorking(this,o),this}setStyle(e,t=di){function r(l){l!==void 0&&parseFloat(l)<1&&dt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:dt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);dt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=di){const r=kg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):dt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=di){return Lt.workingToColorSpace(wn.copy(this),e),Math.round(Et(wn.r*255,0,255))*65536+Math.round(Et(wn.g*255,0,255))*256+Math.round(Et(wn.b*255,0,255))}getHexString(e=di){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(wn.copy(this),t);const r=wn.r,o=wn.g,l=wn.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const v=(f+c)/2;if(f===c)h=0,p=0;else{const x=c-f;switch(p=v<=.5?x/(c+f):x/(2-c-f),c){case r:h=(o-l)/x+(o<l?6:0);break;case o:h=(l-r)/x+2;break;case l:h=(r-o)/x+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(wn.copy(this),t),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=di){Lt.workingToColorSpace(wn.copy(this),e);const t=wn.r,r=wn.g,o=wn.b;return e!==di?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(Cl);const r=aa(Fr.h,Cl.h,t),o=aa(Fr.s,Cl.s,t),l=aa(Fr.l,Cl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new Ot;Ot.NAMES=kg;class cx extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gi,this.environmentIntensity=1,this.environmentRotation=new Gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wi=new j,ir=new j,ef=new j,rr=new j,$s=new j,Ks=new j,Dm=new j,tf=new j,nf=new j,rf=new j,sf=new en,of=new en,af=new en;class Ci{constructor(e=new j,t=new j,r=new j){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),wi.subVectors(e,t),o.cross(wi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){wi.subVectors(o,t),ir.subVectors(r,t),ef.subVectors(e,t);const c=wi.dot(wi),f=wi.dot(ir),h=wi.dot(ef),p=ir.dot(ir),v=ir.dot(ef),x=c*p-f*f;if(x===0)return l.set(0,0,0),null;const g=1/x,S=(p*h-f*v)*g,M=(c*v-f*h)*g;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,r,o,l,c,f,h){return this.getBarycoord(e,t,r,o,rr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,rr.x),h.addScaledVector(c,rr.y),h.addScaledVector(f,rr.z),h)}static getInterpolatedAttribute(e,t,r,o,l,c){return sf.setScalar(0),of.setScalar(0),af.setScalar(0),sf.fromBufferAttribute(e,t),of.fromBufferAttribute(e,r),af.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(sf,l.x),c.addScaledVector(of,l.y),c.addScaledVector(af,l.z),c}static isFrontFacing(e,t,r,o){return wi.subVectors(r,t),ir.subVectors(e,t),wi.cross(ir).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),wi.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ci.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;$s.subVectors(o,r),Ks.subVectors(l,r),tf.subVectors(e,r);const h=$s.dot(tf),p=Ks.dot(tf);if(h<=0&&p<=0)return t.copy(r);nf.subVectors(e,o);const v=$s.dot(nf),x=Ks.dot(nf);if(v>=0&&x<=v)return t.copy(o);const g=h*x-v*p;if(g<=0&&h>=0&&v<=0)return c=h/(h-v),t.copy(r).addScaledVector($s,c);rf.subVectors(e,l);const S=$s.dot(rf),M=Ks.dot(rf);if(M>=0&&S<=M)return t.copy(l);const C=S*p-h*M;if(C<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(r).addScaledVector(Ks,f);const _=v*M-S*x;if(_<=0&&x-v>=0&&S-M>=0)return Dm.subVectors(l,o),f=(x-v)/(x-v+(S-M)),t.copy(o).addScaledVector(Dm,f);const y=1/(_+C+g);return c=C*y,f=g*y,t.copy(r).addScaledVector($s,c).addScaledVector(Ks,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class xa{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,Ai):Ai.fromBufferAttribute(l,c),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Rl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Rl.copy(r.boundingBox)),Rl.applyMatrix4(e.matrixWorld),this.union(Rl)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),bl.subVectors(this.max,Jo),Zs.subVectors(e.a,Jo),Js.subVectors(e.b,Jo),Qs.subVectors(e.c,Jo),Or.subVectors(Js,Zs),kr.subVectors(Qs,Js),os.subVectors(Zs,Qs);let t=[0,-Or.z,Or.y,0,-kr.z,kr.y,0,-os.z,os.y,Or.z,0,-Or.x,kr.z,0,-kr.x,os.z,0,-os.x,-Or.y,Or.x,0,-kr.y,kr.x,0,-os.y,os.x,0];return!lf(t,Zs,Js,Qs,bl)||(t=[1,0,0,0,1,0,0,0,1],!lf(t,Zs,Js,Qs,bl))?!1:(Pl.crossVectors(Or,kr),t=[Pl.x,Pl.y,Pl.z],lf(t,Zs,Js,Qs,bl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sr=[new j,new j,new j,new j,new j,new j,new j,new j],Ai=new j,Rl=new xa,Zs=new j,Js=new j,Qs=new j,Or=new j,kr=new j,os=new j,Jo=new j,bl=new j,Pl=new j,as=new j;function lf(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){as.fromArray(s,l);const f=o.x*Math.abs(as.x)+o.y*Math.abs(as.y)+o.z*Math.abs(as.z),h=e.dot(as),p=t.dot(as),v=r.dot(as);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const on=new j,Ll=new nt;let fx=0;class Vi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=vm,this.updateRanges=[],this.gpuType=Oi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ll.fromBufferAttribute(this,t),Ll.applyMatrix3(e),this.setXY(t,Ll.x,Ll.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix3(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=ro(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ro(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ro(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ro(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ro(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array),l=Un(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vm&&(e.usage=this.usage),e}}class Bg extends Vi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class zg extends Vi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class gn extends Vi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const dx=new xa,Qo=new j,uf=new j;class Dd{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):dx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Qo.subVectors(e,this.center);const t=Qo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Qo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Qo.copy(e.center).add(uf)),this.expandByPoint(Qo.copy(e.center).sub(uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let hx=0;const fi=new Zt,cf=new Rn,eo=new j,ti=new xa,ea=new xa,pn=new j;class pi extends mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P_(e)?zg:Bg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new _t().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,r){return fi.makeTranslation(e,t,r),this.applyMatrix4(fi),this}scale(e,t,r){return fi.makeScale(e,t,r),this.applyMatrix4(fi),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(eo).negate(),this.translate(eo.x,eo.y,eo.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new gn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&dt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xa);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ti.setFromBufferAttribute(l),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,ti.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,ti.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(ti.min),this.boundingBox.expandByPoint(ti.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const r=this.boundingSphere.center;if(ti.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];ea.setFromBufferAttribute(f),this.morphTargetsRelative?(pn.addVectors(ti.min,ea.min),ti.expandByPoint(pn),pn.addVectors(ti.max,ea.max),ti.expandByPoint(pn)):(ti.expandByPoint(ea.min),ti.expandByPoint(ea.max))}ti.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)pn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(pn));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)pn.fromBufferAttribute(f,p),h&&(eo.fromBufferAttribute(e,p),pn.add(eo)),o=Math.max(o,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let T=0;T<r.count;T++)f[T]=new j,h[T]=new j;const p=new j,v=new j,x=new j,g=new nt,S=new nt,M=new nt,C=new j,_=new j;function y(T,P,Z){p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,P),x.fromBufferAttribute(r,Z),g.fromBufferAttribute(l,T),S.fromBufferAttribute(l,P),M.fromBufferAttribute(l,Z),v.sub(p),x.sub(p),S.sub(g),M.sub(g);const F=1/(S.x*M.y-M.x*S.y);isFinite(F)&&(C.copy(v).multiplyScalar(M.y).addScaledVector(x,-S.y).multiplyScalar(F),_.copy(x).multiplyScalar(S.x).addScaledVector(v,-M.x).multiplyScalar(F),f[T].add(C),f[P].add(C),f[Z].add(C),h[T].add(_),h[P].add(_),h[Z].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,P=R.length;T<P;++T){const Z=R[T],F=Z.start,$=Z.count;for(let K=F,ae=F+$;K<ae;K+=3)y(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const L=new j,b=new j,k=new j,O=new j;function N(T){k.fromBufferAttribute(o,T),O.copy(k);const P=f[T];L.copy(P),L.sub(k.multiplyScalar(k.dot(P))).normalize(),b.crossVectors(O,P);const F=b.dot(h[T])<0?-1:1;c.setXYZW(T,L.x,L.y,L.z,F)}for(let T=0,P=R.length;T<P;++T){const Z=R[T],F=Z.start,$=Z.count;for(let K=F,ae=F+$;K<ae;K+=3)N(e.getX(K+0)),N(e.getX(K+1)),N(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Vi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new j,l=new j,c=new j,f=new j,h=new j,p=new j,v=new j,x=new j;if(e)for(let g=0,S=e.count;g<S;g+=3){const M=e.getX(g+0),C=e.getX(g+1),_=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,C),c.fromBufferAttribute(t,_),v.subVectors(c,l),x.subVectors(o,l),v.cross(x),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,C),p.fromBufferAttribute(r,_),f.add(v),h.add(v),p.add(v),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(_,p.x,p.y,p.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),v.subVectors(c,l),x.subVectors(o,l),v.cross(x),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,x=f.normalized,g=new p.constructor(h.length*v);let S=0,M=0;for(let C=0,_=h.length;C<_;C++){f.isInterleavedBufferAttribute?S=h[C]*f.data.stride+f.offset:S=h[C]*v;for(let y=0;y<v;y++)g[M++]=p[S++]}return new Vi(g,v,x)}if(this.index===null)return dt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,x=p.length;v<x;v++){const g=p[v],S=e(g,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let x=0,g=p.length;x<g;x++){const S=p[x];v.push(S.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],x=l[p];for(let g=0,S=x.length;g<S;g++)v.push(x[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,v=c.length;p<v;p++){const x=c[p];this.addGroup(x.start,x.count,x.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let px=0;class ya extends mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:px++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=oo,this.side=Wr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cf,this.blendDst=Rf,this.blendEquation=hs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ot(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){dt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){dt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(r.blending=this.blending),this.side!==Wr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cf&&(r.blendSrc=this.blendSrc),this.blendDst!==Rf&&(r.blendDst=this.blendDst),this.blendEquation!==hs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const or=new j,ff=new j,Dl=new j,Br=new j,df=new j,Nl=new j,hf=new j;class mx{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,or)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=or.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(or.copy(this.origin).addScaledVector(this.direction,t),or.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ff.copy(e).add(t).multiplyScalar(.5),Dl.copy(t).sub(e).normalize(),Br.copy(this.origin).sub(ff);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Dl),f=Br.dot(this.direction),h=-Br.dot(Dl),p=Br.lengthSq(),v=Math.abs(1-c*c);let x,g,S,M;if(v>0)if(x=c*h-f,g=c*f-h,M=l*v,x>=0)if(g>=-M)if(g<=M){const C=1/v;x*=C,g*=C,S=x*(x+c*g+2*f)+g*(c*x+g+2*h)+p}else g=l,x=Math.max(0,-(c*g+f)),S=-x*x+g*(g+2*h)+p;else g=-l,x=Math.max(0,-(c*g+f)),S=-x*x+g*(g+2*h)+p;else g<=-M?(x=Math.max(0,-(-c*l+f)),g=x>0?-l:Math.min(Math.max(-l,-h),l),S=-x*x+g*(g+2*h)+p):g<=M?(x=0,g=Math.min(Math.max(-l,-h),l),S=g*(g+2*h)+p):(x=Math.max(0,-(c*l+f)),g=x>0?l:Math.min(Math.max(-l,-h),l),S=-x*x+g*(g+2*h)+p);else g=c>0?-l:l,x=Math.max(0,-(c*g+f)),S=-x*x+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(ff).addScaledVector(Dl,g),S}intersectSphere(e,t){or.subVectors(e.center,this.origin);const r=or.dot(this.direction),o=or.dot(or)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,h;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,c=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,c=(e.min.y-g.y)*v),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),x>=0?(f=(e.min.z-g.z)*x,h=(e.max.z-g.z)*x):(f=(e.max.z-g.z)*x,h=(e.min.z-g.z)*x),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,or)!==null}intersectTriangle(e,t,r,o,l){df.subVectors(t,e),Nl.subVectors(r,e),hf.crossVectors(df,Nl);let c=this.direction.dot(hf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Br.subVectors(this.origin,e);const h=f*this.direction.dot(Nl.crossVectors(Br,Nl));if(h<0)return null;const p=f*this.direction.dot(df.cross(Br));if(p<0||h+p>c)return null;const v=-f*Br.dot(hf);return v<0?null:this.at(v/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Vg extends ya{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ot(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.combine=_g,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nm=new Zt,ls=new mx,Il=new Dd,Im=new j,Ul=new j,Fl=new j,Ol=new j,pf=new j,kl=new j,Um=new j,Bl=new j;class mn extends Rn{constructor(e=new pi,t=new Vg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){kl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],x=l[h];v!==0&&(pf.fromBufferAttribute(x,e),c?kl.addScaledVector(pf,v):kl.addScaledVector(pf.sub(t),v))}t.add(kl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Il.copy(r.boundingSphere),Il.applyMatrix4(l),ls.copy(e.ray).recast(e.near),!(Il.containsPoint(ls.origin)===!1&&(ls.intersectSphere(Il,Im)===null||ls.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Nm.copy(l).invert(),ls.copy(e.ray).applyMatrix4(Nm),!(r.boundingBox!==null&&ls.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ls)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,C=g.length;M<C;M++){const _=g[M],y=c[_.materialIndex],R=Math.max(_.start,S.start),L=Math.min(f.count,Math.min(_.start+_.count,S.start+S.count));for(let b=R,k=L;b<k;b+=3){const O=f.getX(b),N=f.getX(b+1),T=f.getX(b+2);o=zl(this,y,e,r,p,v,x,O,N,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),C=Math.min(f.count,S.start+S.count);for(let _=M,y=C;_<y;_+=3){const R=f.getX(_),L=f.getX(_+1),b=f.getX(_+2);o=zl(this,c,e,r,p,v,x,R,L,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,C=g.length;M<C;M++){const _=g[M],y=c[_.materialIndex],R=Math.max(_.start,S.start),L=Math.min(h.count,Math.min(_.start+_.count,S.start+S.count));for(let b=R,k=L;b<k;b+=3){const O=b,N=b+1,T=b+2;o=zl(this,y,e,r,p,v,x,O,N,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),C=Math.min(h.count,S.start+S.count);for(let _=M,y=C;_<y;_+=3){const R=_,L=_+1,b=_+2;o=zl(this,c,e,r,p,v,x,R,L,b),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function gx(s,e,t,r,o,l,c,f){let h;if(e.side===Yn?h=r.intersectTriangle(c,l,o,!0,f):h=r.intersectTriangle(o,l,c,e.side===Wr,f),h===null)return null;Bl.copy(f),Bl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Bl);return p<t.near||p>t.far?null:{distance:p,point:Bl.clone(),object:s}}function zl(s,e,t,r,o,l,c,f,h,p){s.getVertexPosition(f,Ul),s.getVertexPosition(h,Fl),s.getVertexPosition(p,Ol);const v=gx(s,e,t,r,Ul,Fl,Ol,Um);if(v){const x=new j;Ci.getBarycoord(Um,Ul,Fl,Ol,x),o&&(v.uv=Ci.getInterpolatedAttribute(o,f,h,p,x,new nt)),l&&(v.uv1=Ci.getInterpolatedAttribute(l,f,h,p,x,new nt)),c&&(v.normal=Ci.getInterpolatedAttribute(c,f,h,p,x,new j),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new j,materialIndex:0};Ci.getNormal(Ul,Fl,Ol,g.normal),v.face=g,v.barycoord=x}return v}class vx extends On{constructor(e=null,t=1,r=1,o,l,c,f,h,p=xn,v=xn,x,g){super(null,c,f,h,p,v,o,l,x,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mf=new j,_x=new j,xx=new _t;class ds{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=mf.subVectors(r,t).cross(_x.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(mf),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||xx.getNormalMatrix(e),o=this.coplanarPoint(mf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const us=new Dd,yx=new nt(.5,.5),Vl=new j;class Nd{constructor(e=new ds,t=new ds,r=new ds,o=new ds,l=new ds,c=new ds){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=ki,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],v=l[4],x=l[5],g=l[6],S=l[7],M=l[8],C=l[9],_=l[10],y=l[11],R=l[12],L=l[13],b=l[14],k=l[15];if(o[0].setComponents(p-c,S-v,y-M,k-R).normalize(),o[1].setComponents(p+c,S+v,y+M,k+R).normalize(),o[2].setComponents(p+f,S+x,y+C,k+L).normalize(),o[3].setComponents(p-f,S-x,y-C,k-L).normalize(),r)o[4].setComponents(h,g,_,b).normalize(),o[5].setComponents(p-h,S-g,y-_,k-b).normalize();else if(o[4].setComponents(p-h,S-g,y-_,k-b).normalize(),t===ki)o[5].setComponents(p+h,S+g,y+_,k+b).normalize();else if(t===ha)o[5].setComponents(h,g,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),us.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),us.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(us)}intersectsSprite(e){us.center.set(0,0,0);const t=yx.distanceTo(e.center);return us.radius=.7071067811865476+t,us.applyMatrix4(e.matrixWorld),this.intersectsSphere(us)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Vl.x=o.normal.x>0?e.max.x:e.min.x,Vl.y=o.normal.y>0?e.max.y:e.min.y,Vl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Vl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Hg extends On{constructor(e=[],t=vs,r,o,l,c,f,h,p,v){super(e,t,r,o,l,c,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ma extends On{constructor(e,t,r=Hi,o,l,c,f=xn,h=xn,p,v=dr,x=1){if(v!==dr&&v!==gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:x};super(g,o,l,c,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ld(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Sx extends ma{constructor(e,t=Hi,r=vs,o,l,c=xn,f=xn,h,p=dr){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,r,o,l,c,f,h,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Gg extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Sa extends pi{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],v=[],x=[];let g=0,S=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new gn(p,3)),this.setAttribute("normal",new gn(v,3)),this.setAttribute("uv",new gn(x,2));function M(C,_,y,R,L,b,k,O,N,T,P){const Z=b/N,F=k/T,$=b/2,K=k/2,ae=O/2,q=N+1,ie=T+1;let W=0,J=0;const oe=new j;for(let ce=0;ce<ie;ce++){const U=ce*F-K;for(let Y=0;Y<q;Y++){const Ee=Y*Z-$;oe[C]=Ee*R,oe[_]=U*L,oe[y]=ae,p.push(oe.x,oe.y,oe.z),oe[C]=0,oe[_]=0,oe[y]=O>0?1:-1,v.push(oe.x,oe.y,oe.z),x.push(Y/N),x.push(1-ce/T),W+=1}}for(let ce=0;ce<T;ce++)for(let U=0;U<N;U++){const Y=g+U+q*ce,Ee=g+U+q*(ce+1),Re=g+(U+1)+q*(ce+1),Ze=g+(U+1)+q*ce;h.push(Y,Ee,Ze),h.push(Ee,Re,Ze),J+=6}f.addGroup(S,J,P),S+=J,g+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Id extends pi{constructor(e=1,t=1,r=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:o,heightSegments:l},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const c=[],f=[],h=[],p=[],v=t/2,x=Math.PI/2*e,g=t,S=2*x+g,M=r*2+l,C=o+1,_=new j,y=new j;for(let R=0;R<=M;R++){let L=0,b=0,k=0,O=0;if(R<=r){const P=R/r,Z=P*Math.PI/2;b=-v-e*Math.cos(Z),k=e*Math.sin(Z),O=-e*Math.cos(Z),L=P*x}else if(R<=r+l){const P=(R-r)/l;b=-v+P*t,k=e,O=0,L=x+P*g}else{const P=(R-r-l)/r,Z=P*Math.PI/2;b=v+e*Math.sin(Z),k=e*Math.cos(Z),O=e*Math.sin(Z),L=x+g+P*x}const N=Math.max(0,Math.min(1,L/S));let T=0;R===0?T=.5/o:R===M&&(T=-.5/o);for(let P=0;P<=o;P++){const Z=P/o,F=Z*Math.PI*2,$=Math.sin(F),K=Math.cos(F);y.x=-k*K,y.y=b,y.z=k*$,f.push(y.x,y.y,y.z),_.set(-k*K,O,k*$),_.normalize(),h.push(_.x,_.y,_.z),p.push(Z+T,N)}if(R>0){const P=(R-1)*C;for(let Z=0;Z<o;Z++){const F=P+Z,$=P+Z+1,K=R*C+Z,ae=R*C+Z+1;c.push(F,$,K),c.push($,ae,K)}}}this.setIndex(c),this.setAttribute("position",new gn(f,3)),this.setAttribute("normal",new gn(h,3)),this.setAttribute("uv",new gn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Id(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Xi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){dt("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-c,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===c)return o/(l-1);const v=r[o],g=r[o+1]-v,S=(c-v)/g;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),h=t||(c.isVector2?new nt:new j);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new j,o=[],l=[],c=[],f=new j,h=new Zt;for(let S=0;S<=e;S++){const M=S/e;o[S]=this.getTangentAt(M,new j)}l[0]=new j,c[0]=new j;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),x=Math.abs(o[0].y),g=Math.abs(o[0].z);v<=p&&(p=v,r.set(1,0,0)),x<=p&&(p=x,r.set(0,1,0)),g<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),f.crossVectors(o[S-1],o[S]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(Et(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(f,M))}c[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(Et(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(o[M],S*M)),c[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ud extends Xi{constructor(e=0,t=0,r=1,o=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new nt){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),x=Math.sin(this.aRotation),g=h-this.aX,S=p-this.aY;h=g*v-S*x+this.aX,p=g*x+S*v+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Mx extends Ud{constructor(e,t,r,o,l,c){super(e,t,r,r,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Fd(){let s=0,e=0,t=0,r=0;function o(l,c,f,h){s=l,e=f,t=-3*l+3*c-2*f-h,r=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,p){o(c,f,p*(f-l),p*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,p,v,x){let g=(c-l)/p-(f-l)/(p+v)+(f-c)/v,S=(f-c)/v-(h-c)/(v+x)+(h-f)/x;g*=v,S*=v,o(c,f,g,S)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const Hl=new j,gf=new Fd,vf=new Fd,_f=new Fd;class Ex extends Xi{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new j){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,v;this.closed||f>0?p=o[(f-1)%l]:(Hl.subVectors(o[0],o[1]).add(o[0]),p=Hl);const x=o[f%l],g=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(Hl.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Hl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(x),S),C=Math.pow(x.distanceToSquared(g),S),_=Math.pow(g.distanceToSquared(v),S);C<1e-4&&(C=1),M<1e-4&&(M=C),_<1e-4&&(_=C),gf.initNonuniformCatmullRom(p.x,x.x,g.x,v.x,M,C,_),vf.initNonuniformCatmullRom(p.y,x.y,g.y,v.y,M,C,_),_f.initNonuniformCatmullRom(p.z,x.z,g.z,v.z,M,C,_)}else this.curveType==="catmullrom"&&(gf.initCatmullRom(p.x,x.x,g.x,v.x,this.tension),vf.initCatmullRom(p.y,x.y,g.y,v.y,this.tension),_f.initCatmullRom(p.z,x.z,g.z,v.z,this.tension));return r.set(gf.calc(h),vf.calc(h),_f.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new j().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fm(s,e,t,r,o){const l=(r-e)*.5,c=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+c)*h+(-3*t+3*r-2*l-c)*f+l*s+t}function Tx(s,e){const t=1-s;return t*t*e}function wx(s,e){return 2*(1-s)*s*e}function Ax(s,e){return s*s*e}function la(s,e,t,r){return Tx(s,e)+wx(s,t)+Ax(s,r)}function Cx(s,e){const t=1-s;return t*t*t*e}function Rx(s,e){const t=1-s;return 3*t*t*s*e}function bx(s,e){return 3*(1-s)*s*s*e}function Px(s,e){return s*s*s*e}function ua(s,e,t,r,o){return Cx(s,e)+Rx(s,t)+bx(s,r)+Px(s,o)}class Wg extends Xi{constructor(e=new nt,t=new nt,r=new nt,o=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new nt){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(ua(e,o.x,l.x,c.x,f.x),ua(e,o.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Lx extends Xi{constructor(e=new j,t=new j,r=new j,o=new j){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new j){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(ua(e,o.x,l.x,c.x,f.x),ua(e,o.y,l.y,c.y,f.y),ua(e,o.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Xg extends Xi{constructor(e=new nt,t=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new nt){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new nt){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dx extends Xi{constructor(e=new j,t=new j){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new j){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class qg extends Xi{constructor(e=new nt,t=new nt,r=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new nt){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(la(e,o.x,l.x,c.x),la(e,o.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Nx extends Xi{constructor(e=new j,t=new j,r=new j){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new j){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(la(e,o.x,l.x,c.x),la(e,o.y,l.y,c.y),la(e,o.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yg extends Xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new nt){const r=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),f=l-c,h=o[c===0?c:c-1],p=o[c],v=o[c>o.length-2?o.length-1:c+1],x=o[c>o.length-3?o.length-1:c+2];return r.set(Fm(f,h.x,p.x,v.x,x.x),Fm(f,h.y,p.y,v.y,x.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new nt().fromArray(o))}return this}}var Om=Object.freeze({__proto__:null,ArcCurve:Mx,CatmullRomCurve3:Ex,CubicBezierCurve:Wg,CubicBezierCurve3:Lx,EllipseCurve:Ud,LineCurve:Xg,LineCurve3:Dx,QuadraticBezierCurve:qg,QuadraticBezierCurve3:Nx,SplineCurve:Yg});class Ix extends Xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Om[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const c=o[l]-r,f=this.curves[l],h=f.getLength(),p=h===0?0:1-c/h;return f.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const c=l[o],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(f);for(let p=0;p<h.length;p++){const v=h[p];r&&r.equals(v)||(t.push(v),r=v)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Om[o.type]().fromJSON(o))}return this}}class km extends Ix{constructor(e){super(),this.type="Path",this.currentPoint=new nt,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new Xg(this.currentPoint.clone(),new nt(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new qg(this.currentPoint.clone(),new nt(e,t),new nt(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,c){const f=new Wg(this.currentPoint.clone(),new nt(e,t),new nt(r,o),new nt(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new Yg(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,c){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,r,o,l,c),this}absarc(e,t,r,o,l,c){return this.absellipse(e,t,r,r,o,l,c),this}ellipse(e,t,r,o,l,c,f,h){const p=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+p,t+v,r,o,l,c,f,h),this}absellipse(e,t,r,o,l,c,f,h){const p=new Ud(e,t,r,o,l,c,f,h);if(this.curves.length>0){const x=p.getPoint(0);x.equals(this.currentPoint)||this.lineTo(x.x,x.y)}this.curves.push(p);const v=p.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class jg extends km{constructor(e){super(e),this.uuid=xs(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new km().fromJSON(o))}return this}}function Ux(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=$g(s,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,h,p;if(r&&(l=zx(s,e,l,t)),s.length>80*t){f=s[0],h=s[1];let v=f,x=h;for(let g=t;g<o;g+=t){const S=s[g],M=s[g+1];S<f&&(f=S),M<h&&(h=M),S>v&&(v=S),M>x&&(x=M)}p=Math.max(v-f,x-h),p=p!==0?32767/p:0}return ga(l,c,t,f,h,p,0),c}function $g(s,e,t,r,o){let l;if(o===Zx(s,e,t,r)>0)for(let c=e;c<t;c+=r)l=Bm(c/r|0,s[c],s[c+1],l);else for(let c=t-r;c>=e;c-=r)l=Bm(c/r|0,s[c],s[c+1],l);return l&&ho(l,l.next)&&(_a(l),l=l.next),l}function _s(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(ho(t,t.next)||Kt(t.prev,t,t.next)===0)){if(_a(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function ga(s,e,t,r,o,l,c){if(!s)return;!c&&l&&Xx(s,r,o,l);let f=s;for(;s.prev!==s.next;){const h=s.prev,p=s.next;if(l?Ox(s,r,o,l):Fx(s)){e.push(h.i,s.i,p.i),_a(s),s=p.next,f=p.next;continue}if(s=p,s===f){c?c===1?(s=kx(_s(s),e),ga(s,e,t,r,o,l,2)):c===2&&Bx(s,e,t,r,o,l):ga(_s(s),e,t,r,o,l,1);break}}}function Fx(s){const e=s.prev,t=s,r=s.next;if(Kt(e,t,r)>=0)return!1;const o=e.x,l=t.x,c=r.x,f=e.y,h=t.y,p=r.y,v=Math.min(o,l,c),x=Math.min(f,h,p),g=Math.max(o,l,c),S=Math.max(f,h,p);let M=r.next;for(;M!==e;){if(M.x>=v&&M.x<=g&&M.y>=x&&M.y<=S&&ra(o,f,l,h,c,p,M.x,M.y)&&Kt(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function Ox(s,e,t,r){const o=s.prev,l=s,c=s.next;if(Kt(o,l,c)>=0)return!1;const f=o.x,h=l.x,p=c.x,v=o.y,x=l.y,g=c.y,S=Math.min(f,h,p),M=Math.min(v,x,g),C=Math.max(f,h,p),_=Math.max(v,x,g),y=gd(S,M,e,t,r),R=gd(C,_,e,t,r);let L=s.prevZ,b=s.nextZ;for(;L&&L.z>=y&&b&&b.z<=R;){if(L.x>=S&&L.x<=C&&L.y>=M&&L.y<=_&&L!==o&&L!==c&&ra(f,v,h,x,p,g,L.x,L.y)&&Kt(L.prev,L,L.next)>=0||(L=L.prevZ,b.x>=S&&b.x<=C&&b.y>=M&&b.y<=_&&b!==o&&b!==c&&ra(f,v,h,x,p,g,b.x,b.y)&&Kt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;L&&L.z>=y;){if(L.x>=S&&L.x<=C&&L.y>=M&&L.y<=_&&L!==o&&L!==c&&ra(f,v,h,x,p,g,L.x,L.y)&&Kt(L.prev,L,L.next)>=0)return!1;L=L.prevZ}for(;b&&b.z<=R;){if(b.x>=S&&b.x<=C&&b.y>=M&&b.y<=_&&b!==o&&b!==c&&ra(f,v,h,x,p,g,b.x,b.y)&&Kt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function kx(s,e){let t=s;do{const r=t.prev,o=t.next.next;!ho(r,o)&&Zg(r,t,t.next,o)&&va(r,o)&&va(o,r)&&(e.push(r.i,t.i,o.i),_a(t),_a(t.next),t=s=o),t=t.next}while(t!==s);return _s(t)}function Bx(s,e,t,r,o,l){let c=s;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&jx(c,f)){let h=Jg(c,f);c=_s(c,c.next),h=_s(h,h.next),ga(c,e,t,r,o,l,0),ga(h,e,t,r,o,l,0);return}f=f.next}c=c.next}while(c!==s)}function zx(s,e,t,r){const o=[];for(let l=0,c=e.length;l<c;l++){const f=e[l]*r,h=l<c-1?e[l+1]*r:s.length,p=$g(s,f,h,r,!1);p===p.next&&(p.steiner=!0),o.push(Yx(p))}o.sort(Vx);for(let l=0;l<o.length;l++)t=Hx(o[l],t);return t}function Vx(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=r-o}return t}function Hx(s,e){const t=Gx(s,e);if(!t)return e;const r=Jg(t,s);return _s(r,r.next),_s(t,t.next)}function Gx(s,e){let t=e;const r=s.x,o=s.y;let l=-1/0,c;if(ho(s,t))return t;do{if(ho(s,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const x=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(x<=r&&x>l&&(l=x,c=t.x<t.next.x?t:t.next,x===r))return c}t=t.next}while(t!==e);if(!c)return null;const f=c,h=c.x,p=c.y;let v=1/0;t=c;do{if(r>=t.x&&t.x>=h&&r!==t.x&&Kg(o<p?r:l,o,h,p,o<p?l:r,o,t.x,t.y)){const x=Math.abs(o-t.y)/(r-t.x);va(t,s)&&(x<v||x===v&&(t.x>c.x||t.x===c.x&&Wx(c,t)))&&(c=t,v=x)}t=t.next}while(t!==f);return c}function Wx(s,e){return Kt(s.prev,s,e.prev)<0&&Kt(e.next,s,s.next)<0}function Xx(s,e,t,r){let o=s;do o.z===0&&(o.z=gd(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,qx(o)}function qx(s){let e,t=1;do{let r=s,o;s=null;let l=null;for(e=0;r;){e++;let c=r,f=0;for(let p=0;p<t&&(f++,c=c.nextZ,!!c);p++);let h=t;for(;f>0||h>0&&c;)f!==0&&(h===0||!c||r.z<=c.z)?(o=r,r=r.nextZ,f--):(o=c,c=c.nextZ,h--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;r=c}l.nextZ=null,t*=2}while(e>1);return s}function gd(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Yx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Kg(s,e,t,r,o,l,c,f){return(o-c)*(e-f)>=(s-c)*(l-f)&&(s-c)*(r-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(o-c)*(r-f)}function ra(s,e,t,r,o,l,c,f){return!(s===c&&e===f)&&Kg(s,e,t,r,o,l,c,f)}function jx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!$x(s,e)&&(va(s,e)&&va(e,s)&&Kx(s,e)&&(Kt(s.prev,s,e.prev)||Kt(s,e.prev,e))||ho(s,e)&&Kt(s.prev,s,s.next)>0&&Kt(e.prev,e,e.next)>0)}function Kt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function ho(s,e){return s.x===e.x&&s.y===e.y}function Zg(s,e,t,r){const o=Wl(Kt(s,e,t)),l=Wl(Kt(s,e,r)),c=Wl(Kt(t,r,s)),f=Wl(Kt(t,r,e));return!!(o!==l&&c!==f||o===0&&Gl(s,t,e)||l===0&&Gl(s,r,e)||c===0&&Gl(t,s,r)||f===0&&Gl(t,e,r))}function Gl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Wl(s){return s>0?1:s<0?-1:0}function $x(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Zg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function va(s,e){return Kt(s.prev,s,s.next)<0?Kt(s,e,s.next)>=0&&Kt(s,s.prev,e)>=0:Kt(s,e,s.prev)<0||Kt(s,s.next,e)<0}function Kx(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function Jg(s,e){const t=vd(s.i,s.x,s.y),r=vd(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function Bm(s,e,t,r){const o=vd(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function _a(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vd(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zx(s,e,t,r){let o=0;for(let l=e,c=t-r;l<t;l+=r)o+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return o}class Jx{static triangulate(e,t,r=2){return Ux(e,t,r)}}class ca{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return ca.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];zm(e),Vm(r,e);let c=e.length;t.forEach(zm);for(let h=0;h<t.length;h++)o.push(c),c+=t[h].length,Vm(r,t[h]);const f=Jx.triangulate(r,o);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function zm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Vm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class au extends pi{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,v=h+1,x=e/f,g=t/h,S=[],M=[],C=[],_=[];for(let y=0;y<v;y++){const R=y*g-c;for(let L=0;L<p;L++){const b=L*x-l;M.push(b,-R,0),C.push(0,0,1),_.push(L/f),_.push(1-y/h)}}for(let y=0;y<h;y++)for(let R=0;R<f;R++){const L=R+p*y,b=R+p*(y+1),k=R+1+p*(y+1),O=R+1+p*y;S.push(L,b,O),S.push(b,k,O)}this.setIndex(S),this.setAttribute("position",new gn(M,3)),this.setAttribute("normal",new gn(C,3)),this.setAttribute("uv",new gn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new au(e.width,e.height,e.widthSegments,e.heightSegments)}}class Od extends pi{constructor(e=new jg([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],o=[],l=[],c=[];let f=0,h=0;if(Array.isArray(e)===!1)p(e);else for(let v=0;v<e.length;v++)p(e[v]),this.addGroup(f,h,v),f+=h,h=0;this.setIndex(r),this.setAttribute("position",new gn(o,3)),this.setAttribute("normal",new gn(l,3)),this.setAttribute("uv",new gn(c,2));function p(v){const x=o.length/3,g=v.extractPoints(t);let S=g.shape;const M=g.holes;ca.isClockWise(S)===!1&&(S=S.reverse());for(let _=0,y=M.length;_<y;_++){const R=M[_];ca.isClockWise(R)===!0&&(M[_]=R.reverse())}const C=ca.triangulateShape(S,M);for(let _=0,y=M.length;_<y;_++){const R=M[_];S=S.concat(R)}for(let _=0,y=S.length;_<y;_++){const R=S[_];o.push(R.x,R.y,0),l.push(0,0,1),c.push(R.x,R.y)}for(let _=0,y=C.length;_<y;_++){const R=C[_],L=R[0]+x,b=R[1]+x,k=R[2]+x;r.push(L,b,k),h+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Qx(t,e)}static fromJSON(e,t){const r=[];for(let o=0,l=e.shapes.length;o<l;o++){const c=t[e.shapes[o]];r.push(c)}return new Od(r,e.curveSegments)}}function Qx(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,r=s.length;t<r;t++){const o=s[t];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e}class ar extends pi{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+f,Math.PI);let p=0;const v=[],x=new j,g=new j,S=[],M=[],C=[],_=[];for(let y=0;y<=r;y++){const R=[],L=y/r;let b=0;y===0&&c===0?b=.5/t:y===r&&h===Math.PI&&(b=-.5/t);for(let k=0;k<=t;k++){const O=k/t;x.x=-e*Math.cos(o+O*l)*Math.sin(c+L*f),x.y=e*Math.cos(c+L*f),x.z=e*Math.sin(o+O*l)*Math.sin(c+L*f),M.push(x.x,x.y,x.z),g.copy(x).normalize(),C.push(g.x,g.y,g.z),_.push(O+b,1-L),R.push(p++)}v.push(R)}for(let y=0;y<r;y++)for(let R=0;R<t;R++){const L=v[y][R+1],b=v[y][R],k=v[y+1][R],O=v[y+1][R+1];(y!==0||c>0)&&S.push(L,b,O),(y!==r-1||h<Math.PI)&&S.push(b,k,O)}this.setIndex(S),this.setAttribute("position",new gn(M,3)),this.setAttribute("normal",new gn(C,3)),this.setAttribute("uv",new gn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function po(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(dt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Fn(s){const e={};for(let t=0;t<s.length;t++){const r=po(s[t]);for(const o in r)e[o]=r[o]}return e}function ey(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Qg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const ty={clone:po,merge:Fn};var ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wi extends ya{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ny,this.fragmentShader=iy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=ey(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class ry extends Wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zr extends ya{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ot(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ot(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ig,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class sy extends ya{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=M_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oy extends ya{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class e0 extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ot(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const xf=new Zt,Hm=new j,Gm=new j;class ay{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.mapType=ni,this.map=null,this.mapPass=null,this.matrix=new Zt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nd,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hm),Gm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gm),t.updateMatrixWorld(),xf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ha||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(xf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Xl=new j,ql=new go,Ni=new j;class t0 extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xl,ql,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,ql,Ni.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Xl,ql,Ni),Ni.x===1&&Ni.y===1&&Ni.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xl,ql,Ni.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Vr=new j,Wm=new nt,Xm=new nt;class hi extends t0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return pa*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Vr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z),Vr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Vr.x,Vr.y).multiplyScalar(-e/Vr.z)}getViewSize(e,t){return this.getViewBounds(e,Wm,Xm),t.subVectors(Xm,Wm)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(oa*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*r/p,o*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class kd extends t0{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ly extends ay{constructor(){super(new kd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class qm extends e0{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new ly}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class uy extends e0{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const to=-90,no=1;class cy extends Rn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new hi(to,no,e,t);o.layers=this.layers,this.add(o);const l=new hi(to,no,e,t);l.layers=this.layers,this.add(l);const c=new hi(to,no,e,t);c.layers=this.layers,this.add(c);const f=new hi(to,no,e,t);f.layers=this.layers,this.add(f);const h=new hi(to,no,e,t);h.layers=this.layers,this.add(h);const p=new hi(to,no,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===ki)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===ha)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,v]=this.children,x=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,g,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class fy extends hi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Ym(s,e,t,r){const o=dy(r);switch(t){case Lg:return s*e;case Ng:return s*e/o.components*o.byteLength;case wd:return s*e/o.components*o.byteLength;case co:return s*e*2/o.components*o.byteLength;case Ad:return s*e*2/o.components*o.byteLength;case Dg:return s*e*3/o.components*o.byteLength;case Ri:return s*e*4/o.components*o.byteLength;case Cd:return s*e*4/o.components*o.byteLength;case Jl:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case eu:case tu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Bf:case Vf:return Math.max(s,16)*Math.max(e,8)/4;case kf:case zf:return Math.max(s,8)*Math.max(e,8)/2;case Hf:case Gf:case Xf:case qf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wf:case Yf:case jf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ed:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case td:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case id:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case rd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case sd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case od:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ad:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ld:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ud:case cd:case fd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case dd:case hd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case pd:case md:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function dy(s){switch(s){case ni:case Cg:return{byteLength:1,components:1};case fa:case Rg:case fr:return{byteLength:2,components:1};case Ed:case Td:return{byteLength:2,components:4};case Hi:case Md:case Oi:return{byteLength:4,components:1};case bg:case Pg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sd}}));typeof window<"u"&&(window.__THREE__?dt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function n0(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function hy(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,x=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,v),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:x}}function r(f,h,p){const v=h.array,x=h.updateRanges;if(s.bindBuffer(p,f),x.length===0)s.bufferSubData(p,0,v);else{x.sort((S,M)=>S.start-M.start);let g=0;for(let S=1;S<x.length;S++){const M=x[g],C=x[S];C.start<=M.start+M.count+1?M.count=Math.max(M.count,C.start+C.count-M.start):(++g,x[g]=C)}x.length=g+1;for(let S=0,M=x.length;S<M;S++){const C=x[S];s.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var py=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,my=`#ifdef USE_ALPHAHASH
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
#endif`,gy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_y=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yy=`#ifdef USE_AOMAP
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
#endif`,Sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,My=`#ifdef USE_BATCHING
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
#endif`,Ey=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ty=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ay=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ry=`#ifdef USE_BUMPMAP
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
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Py=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Oy=`#define PI 3.141592653589793
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
} // validated`,ky=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,By=`vec3 transformedNormal = objectNormal;
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
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qy=`#ifdef USE_ENVMAP
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
#endif`,Yy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jy=`#ifdef USE_ENVMAP
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
#endif`,$y=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ky=`#ifdef USE_ENVMAP
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
#endif`,Zy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,eS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tS=`#ifdef USE_GRADIENTMAP
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
}`,nS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sS=`uniform bool receiveShadow;
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
#endif`,oS=`#ifdef USE_ENVMAP
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
#endif`,aS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fS=`PhysicalMaterial material;
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
#endif`,dS=`uniform sampler2D dfgLUT;
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
}`,hS=`
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
#endif`,pS=`#if defined( RE_IndirectDiffuse )
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
#endif`,mS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,MS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ES=`#if defined( USE_POINTS_UV )
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
#endif`,TS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,AS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,CS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bS=`#ifdef USE_MORPHTARGETS
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
#endif`,PS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,DS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,NS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,US=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,FS=`#ifdef USE_NORMALMAP
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
#endif`,OS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,BS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,VS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,HS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,GS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,WS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,YS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,jS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,JS=`float getShadowMask() {
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
}`,QS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,eM=`#ifdef USE_SKINNING
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
#endif`,tM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nM=`#ifdef USE_SKINNING
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
#endif`,iM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,oM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,aM=`#ifdef USE_TRANSMISSION
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
#endif`,lM=`#ifdef USE_TRANSMISSION
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pM=`uniform sampler2D t2D;
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
}`,mM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_M=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xM=`#include <common>
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
}`,yM=`#if DEPTH_PACKING == 3200
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
}`,SM=`#define DISTANCE
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
}`,MM=`#define DISTANCE
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
}`,EM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,TM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wM=`uniform float scale;
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
}`,AM=`uniform vec3 diffuse;
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
}`,CM=`#include <common>
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
}`,RM=`uniform vec3 diffuse;
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
}`,bM=`#define LAMBERT
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
}`,PM=`#define LAMBERT
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
}`,LM=`#define MATCAP
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
}`,DM=`#define MATCAP
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
}`,NM=`#define NORMAL
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
}`,IM=`#define NORMAL
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
}`,UM=`#define PHONG
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
}`,FM=`#define PHONG
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
}`,OM=`#define STANDARD
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
}`,kM=`#define STANDARD
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
}`,BM=`#define TOON
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
}`,zM=`#define TOON
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
}`,VM=`uniform float size;
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
}`,HM=`uniform vec3 diffuse;
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
}`,GM=`#include <common>
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
}`,WM=`uniform vec3 color;
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
}`,XM=`uniform float rotation;
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
}`,qM=`uniform vec3 diffuse;
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
}`,xt={alphahash_fragment:py,alphahash_pars_fragment:my,alphamap_fragment:gy,alphamap_pars_fragment:vy,alphatest_fragment:_y,alphatest_pars_fragment:xy,aomap_fragment:yy,aomap_pars_fragment:Sy,batching_pars_vertex:My,batching_vertex:Ey,begin_vertex:Ty,beginnormal_vertex:wy,bsdfs:Ay,iridescence_fragment:Cy,bumpmap_pars_fragment:Ry,clipping_planes_fragment:by,clipping_planes_pars_fragment:Py,clipping_planes_pars_vertex:Ly,clipping_planes_vertex:Dy,color_fragment:Ny,color_pars_fragment:Iy,color_pars_vertex:Uy,color_vertex:Fy,common:Oy,cube_uv_reflection_fragment:ky,defaultnormal_vertex:By,displacementmap_pars_vertex:zy,displacementmap_vertex:Vy,emissivemap_fragment:Hy,emissivemap_pars_fragment:Gy,colorspace_fragment:Wy,colorspace_pars_fragment:Xy,envmap_fragment:qy,envmap_common_pars_fragment:Yy,envmap_pars_fragment:jy,envmap_pars_vertex:$y,envmap_physical_pars_fragment:oS,envmap_vertex:Ky,fog_vertex:Zy,fog_pars_vertex:Jy,fog_fragment:Qy,fog_pars_fragment:eS,gradientmap_pars_fragment:tS,lightmap_pars_fragment:nS,lights_lambert_fragment:iS,lights_lambert_pars_fragment:rS,lights_pars_begin:sS,lights_toon_fragment:aS,lights_toon_pars_fragment:lS,lights_phong_fragment:uS,lights_phong_pars_fragment:cS,lights_physical_fragment:fS,lights_physical_pars_fragment:dS,lights_fragment_begin:hS,lights_fragment_maps:pS,lights_fragment_end:mS,logdepthbuf_fragment:gS,logdepthbuf_pars_fragment:vS,logdepthbuf_pars_vertex:_S,logdepthbuf_vertex:xS,map_fragment:yS,map_pars_fragment:SS,map_particle_fragment:MS,map_particle_pars_fragment:ES,metalnessmap_fragment:TS,metalnessmap_pars_fragment:wS,morphinstance_vertex:AS,morphcolor_vertex:CS,morphnormal_vertex:RS,morphtarget_pars_vertex:bS,morphtarget_vertex:PS,normal_fragment_begin:LS,normal_fragment_maps:DS,normal_pars_fragment:NS,normal_pars_vertex:IS,normal_vertex:US,normalmap_pars_fragment:FS,clearcoat_normal_fragment_begin:OS,clearcoat_normal_fragment_maps:kS,clearcoat_pars_fragment:BS,iridescence_pars_fragment:zS,opaque_fragment:VS,packing:HS,premultiplied_alpha_fragment:GS,project_vertex:WS,dithering_fragment:XS,dithering_pars_fragment:qS,roughnessmap_fragment:YS,roughnessmap_pars_fragment:jS,shadowmap_pars_fragment:$S,shadowmap_pars_vertex:KS,shadowmap_vertex:ZS,shadowmask_pars_fragment:JS,skinbase_vertex:QS,skinning_pars_vertex:eM,skinning_vertex:tM,skinnormal_vertex:nM,specularmap_fragment:iM,specularmap_pars_fragment:rM,tonemapping_fragment:sM,tonemapping_pars_fragment:oM,transmission_fragment:aM,transmission_pars_fragment:lM,uv_pars_fragment:uM,uv_pars_vertex:cM,uv_vertex:fM,worldpos_vertex:dM,background_vert:hM,background_frag:pM,backgroundCube_vert:mM,backgroundCube_frag:gM,cube_vert:vM,cube_frag:_M,depth_vert:xM,depth_frag:yM,distance_vert:SM,distance_frag:MM,equirect_vert:EM,equirect_frag:TM,linedashed_vert:wM,linedashed_frag:AM,meshbasic_vert:CM,meshbasic_frag:RM,meshlambert_vert:bM,meshlambert_frag:PM,meshmatcap_vert:LM,meshmatcap_frag:DM,meshnormal_vert:NM,meshnormal_frag:IM,meshphong_vert:UM,meshphong_frag:FM,meshphysical_vert:OM,meshphysical_frag:kM,meshtoon_vert:BM,meshtoon_frag:zM,points_vert:VM,points_frag:HM,shadow_vert:GM,shadow_frag:WM,sprite_vert:XM,sprite_frag:qM},Ue={common:{diffuse:{value:new Ot(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ot(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ot(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Ot(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},Ui={basic:{uniforms:Fn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:xt.meshbasic_vert,fragmentShader:xt.meshbasic_frag},lambert:{uniforms:Fn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ot(0)},envMapIntensity:{value:1}}]),vertexShader:xt.meshlambert_vert,fragmentShader:xt.meshlambert_frag},phong:{uniforms:Fn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new Ot(0)},specular:{value:new Ot(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:xt.meshphong_vert,fragmentShader:xt.meshphong_frag},standard:{uniforms:Fn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new Ot(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag},toon:{uniforms:Fn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new Ot(0)}}]),vertexShader:xt.meshtoon_vert,fragmentShader:xt.meshtoon_frag},matcap:{uniforms:Fn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:xt.meshmatcap_vert,fragmentShader:xt.meshmatcap_frag},points:{uniforms:Fn([Ue.points,Ue.fog]),vertexShader:xt.points_vert,fragmentShader:xt.points_frag},dashed:{uniforms:Fn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:xt.linedashed_vert,fragmentShader:xt.linedashed_frag},depth:{uniforms:Fn([Ue.common,Ue.displacementmap]),vertexShader:xt.depth_vert,fragmentShader:xt.depth_frag},normal:{uniforms:Fn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:xt.meshnormal_vert,fragmentShader:xt.meshnormal_frag},sprite:{uniforms:Fn([Ue.sprite,Ue.fog]),vertexShader:xt.sprite_vert,fragmentShader:xt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:xt.background_vert,fragmentShader:xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:xt.backgroundCube_vert,fragmentShader:xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:xt.cube_vert,fragmentShader:xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:xt.equirect_vert,fragmentShader:xt.equirect_frag},distance:{uniforms:Fn([Ue.common,Ue.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:xt.distance_vert,fragmentShader:xt.distance_frag},shadow:{uniforms:Fn([Ue.lights,Ue.fog,{color:{value:new Ot(0)},opacity:{value:1}}]),vertexShader:xt.shadow_vert,fragmentShader:xt.shadow_frag}};Ui.physical={uniforms:Fn([Ui.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Ot(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Ot(0)},specularColor:{value:new Ot(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:xt.meshphysical_vert,fragmentShader:xt.meshphysical_frag};const Yl={r:0,b:0,g:0},cs=new Gi,YM=new Zt;function jM(s,e,t,r,o,l){const c=new Ot(0);let f=o===!0?0:1,h,p,v=null,x=0,g=null;function S(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){const b=R.backgroundBlurriness>0;L=e.get(L,b)}return L}function M(R){let L=!1;const b=S(R);b===null?_(c,f):b&&b.isColor&&(_(b,1),L=!0);const k=s.xr.getEnvironmentBlendMode();k==="additive"?t.buffers.color.setClear(0,0,0,1,l):k==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||L)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(R,L){const b=S(L);b&&(b.isCubeTexture||b.mapping===ou)?(p===void 0&&(p=new mn(new Sa(1,1,1),new Wi({name:"BackgroundCubeMaterial",uniforms:po(Ui.backgroundCube.uniforms),vertexShader:Ui.backgroundCube.vertexShader,fragmentShader:Ui.backgroundCube.fragmentShader,side:Yn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(k,O,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),cs.copy(L.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),p.material.uniforms.envMap.value=b,p.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(YM.makeRotationFromEuler(cs)),p.material.toneMapped=Lt.getTransfer(b.colorSpace)!==zt,(v!==b||x!==b.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=b,x=b.version,g=s.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new mn(new au(2,2),new Wi({name:"BackgroundMaterial",uniforms:po(Ui.background.uniforms),vertexShader:Ui.background.vertexShader,fragmentShader:Ui.background.fragmentShader,side:Wr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,h.material.toneMapped=Lt.getTransfer(b.colorSpace)!==zt,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(v!==b||x!==b.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=b,x=b.version,g=s.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function _(R,L){R.getRGB(Yl,Qg(s)),t.buffers.color.setClear(Yl.r,Yl.g,Yl.b,L,l)}function y(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,L=1){c.set(R),f=L,_(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,_(c,f)},render:M,addToRenderList:C,dispose:y}}function $M(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,c=!1;function f(F,$,K,ae,q){let ie=!1;const W=x(F,ae,K,$);l!==W&&(l=W,p(l.object)),ie=S(F,ae,K,q),ie&&M(F,ae,K,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(ie||c)&&(c=!1,b(F,$,K,ae),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function h(){return s.createVertexArray()}function p(F){return s.bindVertexArray(F)}function v(F){return s.deleteVertexArray(F)}function x(F,$,K,ae){const q=ae.wireframe===!0;let ie=r[$.id];ie===void 0&&(ie={},r[$.id]=ie);const W=F.isInstancedMesh===!0?F.id:0;let J=ie[W];J===void 0&&(J={},ie[W]=J);let oe=J[K.id];oe===void 0&&(oe={},J[K.id]=oe);let ce=oe[q];return ce===void 0&&(ce=g(h()),oe[q]=ce),ce}function g(F){const $=[],K=[],ae=[];for(let q=0;q<t;q++)$[q]=0,K[q]=0,ae[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:K,attributeDivisors:ae,object:F,attributes:{},index:null}}function S(F,$,K,ae){const q=l.attributes,ie=$.attributes;let W=0;const J=K.getAttributes();for(const oe in J)if(J[oe].location>=0){const U=q[oe];let Y=ie[oe];if(Y===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(Y=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(Y=F.instanceColor)),U===void 0||U.attribute!==Y||Y&&U.data!==Y.data)return!0;W++}return l.attributesNum!==W||l.index!==ae}function M(F,$,K,ae){const q={},ie=$.attributes;let W=0;const J=K.getAttributes();for(const oe in J)if(J[oe].location>=0){let U=ie[oe];U===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(U=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(U=F.instanceColor));const Y={};Y.attribute=U,U&&U.data&&(Y.data=U.data),q[oe]=Y,W++}l.attributes=q,l.attributesNum=W,l.index=ae}function C(){const F=l.newAttributes;for(let $=0,K=F.length;$<K;$++)F[$]=0}function _(F){y(F,0)}function y(F,$){const K=l.newAttributes,ae=l.enabledAttributes,q=l.attributeDivisors;K[F]=1,ae[F]===0&&(s.enableVertexAttribArray(F),ae[F]=1),q[F]!==$&&(s.vertexAttribDivisor(F,$),q[F]=$)}function R(){const F=l.newAttributes,$=l.enabledAttributes;for(let K=0,ae=$.length;K<ae;K++)$[K]!==F[K]&&(s.disableVertexAttribArray(K),$[K]=0)}function L(F,$,K,ae,q,ie,W){W===!0?s.vertexAttribIPointer(F,$,K,q,ie):s.vertexAttribPointer(F,$,K,ae,q,ie)}function b(F,$,K,ae){C();const q=ae.attributes,ie=K.getAttributes(),W=$.defaultAttributeValues;for(const J in ie){const oe=ie[J];if(oe.location>=0){let ce=q[J];if(ce===void 0&&(J==="instanceMatrix"&&F.instanceMatrix&&(ce=F.instanceMatrix),J==="instanceColor"&&F.instanceColor&&(ce=F.instanceColor)),ce!==void 0){const U=ce.normalized,Y=ce.itemSize,Ee=e.get(ce);if(Ee===void 0)continue;const Re=Ee.buffer,Ze=Ee.type,Q=Ee.bytesPerElement,me=Ze===s.INT||Ze===s.UNSIGNED_INT||ce.gpuType===Md;if(ce.isInterleavedBufferAttribute){const pe=ce.data,Fe=pe.stride,He=ce.offset;if(pe.isInstancedInterleavedBuffer){for(let it=0;it<oe.locationSize;it++)y(oe.location+it,pe.meshPerAttribute);F.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let it=0;it<oe.locationSize;it++)_(oe.location+it);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let it=0;it<oe.locationSize;it++)L(oe.location+it,Y/oe.locationSize,Ze,U,Fe*Q,(He+Y/oe.locationSize*it)*Q,me)}else{if(ce.isInstancedBufferAttribute){for(let pe=0;pe<oe.locationSize;pe++)y(oe.location+pe,ce.meshPerAttribute);F.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let pe=0;pe<oe.locationSize;pe++)_(oe.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let pe=0;pe<oe.locationSize;pe++)L(oe.location+pe,Y/oe.locationSize,Ze,U,Y*Q,Y/oe.locationSize*pe*Q,me)}}else if(W!==void 0){const U=W[J];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(oe.location,U);break;case 3:s.vertexAttrib3fv(oe.location,U);break;case 4:s.vertexAttrib4fv(oe.location,U);break;default:s.vertexAttrib1fv(oe.location,U)}}}}R()}function k(){P();for(const F in r){const $=r[F];for(const K in $){const ae=$[K];for(const q in ae){const ie=ae[q];for(const W in ie)v(ie[W].object),delete ie[W];delete ae[q]}}delete r[F]}}function O(F){if(r[F.id]===void 0)return;const $=r[F.id];for(const K in $){const ae=$[K];for(const q in ae){const ie=ae[q];for(const W in ie)v(ie[W].object),delete ie[W];delete ae[q]}}delete r[F.id]}function N(F){for(const $ in r){const K=r[$];for(const ae in K){const q=K[ae];if(q[F.id]===void 0)continue;const ie=q[F.id];for(const W in ie)v(ie[W].object),delete ie[W];delete q[F.id]}}}function T(F){for(const $ in r){const K=r[$],ae=F.isInstancedMesh===!0?F.id:0,q=K[ae];if(q!==void 0){for(const ie in q){const W=q[ie];for(const J in W)v(W[J].object),delete W[J];delete q[ie]}delete K[ae],Object.keys(K).length===0&&delete r[$]}}}function P(){Z(),c=!0,l!==o&&(l=o,p(l.object))}function Z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:P,resetDefaultState:Z,dispose:k,releaseStatesOfGeometry:O,releaseStatesOfObject:T,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:_,disableUnusedAttributes:R}}function KM(s,e,t){let r;function o(p){r=p}function l(p,v){s.drawArrays(r,p,v),t.update(v,r,1)}function c(p,v,x){x!==0&&(s.drawArraysInstanced(r,p,v,x),t.update(v,r,x))}function f(p,v,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,x);let S=0;for(let M=0;M<x;M++)S+=v[M];t.update(S,r,1)}function h(p,v,x,g){if(x===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)c(p[M],v[M],g[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,v,0,g,0,x);let M=0;for(let C=0;C<x;C++)M+=v[C]*g[C];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function ZM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(N){return!(N!==Ri&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const T=N===fr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==ni&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Oi&&!T)}function h(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(dt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=s.getParameter(s.MAX_SAMPLES),O=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:C,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:b,maxSamples:k,samples:O}}function JM(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new ds,f=new _t,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(x,g){const S=x.length!==0||g||r!==0||o;return o=g,r=x.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,g){t=v(x,g,0)},this.setState=function(x,g,S){const M=x.clippingPlanes,C=x.clipIntersection,_=x.clipShadows,y=s.get(x);if(!o||M===null||M.length===0||l&&!_)l?v(null):p();else{const R=l?0:r,L=R*4;let b=y.clippingState||null;h.value=b,b=v(M,g,L,S);for(let k=0;k!==L;++k)b[k]=t[k];y.clippingState=b,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(x,g,S,M){const C=x!==null?x.length:0;let _=null;if(C!==0){if(_=h.value,M!==!0||_===null){const y=S+C*4,R=g.matrixWorldInverse;f.getNormalMatrix(R),(_===null||_.length<y)&&(_=new Float32Array(y));for(let L=0,b=S;L!==C;++L,b+=4)c.copy(x[L]).applyMatrix4(R,f),c.normal.toArray(_,b),_[b+3]=c.constant}h.value=_,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,_}}const Gr=4,jm=[.125,.215,.35,.446,.526,.582],ps=20,QM=256,ta=new kd,$m=new Ot;let yf=null,Sf=0,Mf=0,Ef=!1;const eE=new j;class Km{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=eE}=l;yf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yf,Sf,Mf),this._renderer.xr.enabled=Ef,e.scissorTest=!1,io(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===vs||e.mapping===uo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:fr,format:Ri,colorSpace:fo,depthBuffer:!1},o=Zm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zm(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=tE(l)),this._blurMaterial=iE(l,e,t),this._ggxMaterial=nE(l,e,t)}return o}_compileMaterial(e){const t=new mn(new pi,e);this._renderer.compile(t,ta)}_sceneToCubeUV(e,t,r,o,l){const h=new hi(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,g=x.autoClear,S=x.toneMapping;x.getClearColor($m),x.toneMapping=Bi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new mn(new Sa,new Vg({name:"PMREM.Background",side:Yn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,_=C.material;let y=!1;const R=e.background;R?R.isColor&&(_.color.copy(R),e.background=null,y=!0):(_.color.copy($m),y=!0);for(let L=0;L<6;L++){const b=L%3;b===0?(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[L],l.y,l.z)):b===1?(h.up.set(0,0,p[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[L],l.z)):(h.up.set(0,p[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[L]));const k=this._cubeSize;io(o,b*k,L>2?k:0,k,k),x.setRenderTarget(o),y&&x.render(C,h),x.render(e,h)}x.toneMapping=S,x.autoClear=g,e.background=R}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===vs||e.mapping===uo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jm());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;io(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,ta)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),g=0+p*1.25,S=x*g,{_lodMax:M}=this,C=this._sizeLods[r],_=3*C*(r>M-Gr?r-M+Gr:0),y=4*(this._cubeSize-C);h.envMap.value=e.texture,h.roughness.value=S,h.mipInt.value=M-t,io(l,_,y,3*C,2*C),o.setRenderTarget(l),o.render(f,ta),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=M-r,io(e,_,y,3*C,2*C),o.setRenderTarget(e),o.render(f,ta)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&It("blur direction must be either latitudinal or longitudinal!");const v=3,x=this._lodMeshes[o];x.material=p;const g=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ps-1),C=l/M,_=isFinite(l)?1+Math.floor(v*C):ps;_>ps&&dt(`sigmaRadians, ${l}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${ps}`);const y=[];let R=0;for(let N=0;N<ps;++N){const T=N/C,P=Math.exp(-T*T/2);y.push(P),N===0?R+=P:N<_&&(R+=2*P)}for(let N=0;N<y.length;N++)y[N]=y[N]/R;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=y,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:L}=this;g.dTheta.value=M,g.mipInt.value=L-r;const b=this._sizeLods[o],k=3*b*(o>L-Gr?o-L+Gr:0),O=4*(this._cubeSize-b);io(t,k,O,3*b,2*b),h.setRenderTarget(t),h.render(x,ta)}}function tE(s){const e=[],t=[],r=[];let o=s;const l=s-Gr+1+jm.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let h=1/f;c>s-Gr?h=jm[c-s+Gr-1]:c===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,x=1+p,g=[v,v,x,v,x,x,v,v,x,x,v,x],S=6,M=6,C=3,_=2,y=1,R=new Float32Array(C*M*S),L=new Float32Array(_*M*S),b=new Float32Array(y*M*S);for(let O=0;O<S;O++){const N=O%3*2/3-1,T=O>2?0:-1,P=[N,T,0,N+2/3,T,0,N+2/3,T+1,0,N,T,0,N+2/3,T+1,0,N,T+1,0];R.set(P,C*M*O),L.set(g,_*M*O);const Z=[O,O,O,O,O,O];b.set(Z,y*M*O)}const k=new pi;k.setAttribute("position",new Vi(R,C)),k.setAttribute("uv",new Vi(L,_)),k.setAttribute("faceIndex",new Vi(b,y)),r.push(new mn(k,null)),o>Gr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Zm(s,e,t){const r=new zi(s,e,t);return r.texture.mapping=ou,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function io(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function nE(s,e,t){return new Wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:QM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lu(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function iE(s,e,t){const r=new Float32Array(ps),o=new j(0,1,0);return new Wi({name:"SphericalGaussianBlur",defines:{n:ps,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lu(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Jm(){return new Wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lu(),fragmentShader:`

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
		`,blending:ur,depthTest:!1,depthWrite:!1})}function Qm(){return new Wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ur,depthTest:!1,depthWrite:!1})}function lu(){return`

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
	`}class i0 extends zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Hg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Sa(5,5,5),l=new Wi({name:"CubemapFromEquirect",uniforms:po(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Yn,blending:ur});l.uniforms.tEquirect.value=t;const c=new mn(o,l),f=t.minFilter;return t.minFilter===ms&&(t.minFilter=Cn),new cy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function rE(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?c(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===Wc||S===Xc)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const C=new i0(M.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",p),f(C.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const S=g.mapping,M=S===Wc||S===Xc,C=S===vs||S===uo;if(M||C){let _=t.get(g);const y=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new Km(s)),_=M?r.fromEquirectangular(g,_):r.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),_.texture;if(_!==void 0)return _.texture;{const R=g.image;return M&&R&&R.height>0||C&&R&&h(R)?(r===null&&(r=new Km(s)),_=M?r.fromEquirectangular(g):r.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,t.set(g,_),g.addEventListener("dispose",v),_.texture):null}}}return g}function f(g,S){return S===Wc?g.mapping=vs:S===Xc&&(g.mapping=uo),g}function h(g){let S=0;const M=6;for(let C=0;C<M;C++)g[C]!==void 0&&S++;return S===M}function p(g){const S=g.target;S.removeEventListener("dispose",p);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function x(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:x}}function sE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&su("WebGLRenderer: "+r+" extension not supported."),o}}}function oE(s,e,t,r){const o={},l=new WeakMap;function c(x){const g=x.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(x,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function h(x){const g=x.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function p(x){const g=[],S=x.index,M=x.attributes.position;let C=0;if(M===void 0)return;if(S!==null){const R=S.array;C=S.version;for(let L=0,b=R.length;L<b;L+=3){const k=R[L+0],O=R[L+1],N=R[L+2];g.push(k,O,O,N,N,k)}}else{const R=M.array;C=M.version;for(let L=0,b=R.length/3-1;L<b;L+=3){const k=L+0,O=L+1,N=L+2;g.push(k,O,O,N,N,k)}}const _=new(M.count>=65535?zg:Bg)(g,1);_.version=C;const y=l.get(x);y&&e.remove(y),l.set(x,_)}function v(x){const g=l.get(x);if(g){const S=x.index;S!==null&&g.version<S.version&&p(x)}else p(x);return l.get(x)}return{get:f,update:h,getWireframeAttribute:v}}function aE(s,e,t){let r;function o(g){r=g}let l,c;function f(g){l=g.type,c=g.bytesPerElement}function h(g,S){s.drawElements(r,S,l,g*c),t.update(S,r,1)}function p(g,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,g*c,M),t.update(S,r,M))}function v(g,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,g,0,M);let _=0;for(let y=0;y<M;y++)_+=S[y];t.update(_,r,1)}function x(g,S,M,C){if(M===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let y=0;y<g.length;y++)p(g[y]/c,S[y],C[y]);else{_.multiDrawElementsInstancedWEBGL(r,S,0,l,g,0,C,0,M);let y=0;for(let R=0;R<M;R++)y+=S[R]*C[R];t.update(y,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=x}function lE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:It("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function uE(s,e,t){const r=new WeakMap,o=new en;function l(c,f,h){const p=c.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,x=v!==void 0?v.length:0;let g=r.get(f);if(g===void 0||g.count!==x){let Z=function(){T.dispose(),r.delete(f),f.removeEventListener("dispose",Z)};var S=Z;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let b=0;M===!0&&(b=1),C===!0&&(b=2),_===!0&&(b=3);let k=f.attributes.position.count*b,O=1;k>e.maxTextureSize&&(O=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const N=new Float32Array(k*O*4*x),T=new Fg(N,k,O,x);T.type=Oi,T.needsUpdate=!0;const P=b*4;for(let F=0;F<x;F++){const $=y[F],K=R[F],ae=L[F],q=k*O*4*F;for(let ie=0;ie<$.count;ie++){const W=ie*P;M===!0&&(o.fromBufferAttribute($,ie),N[q+W+0]=o.x,N[q+W+1]=o.y,N[q+W+2]=o.z,N[q+W+3]=0),C===!0&&(o.fromBufferAttribute(K,ie),N[q+W+4]=o.x,N[q+W+5]=o.y,N[q+W+6]=o.z,N[q+W+7]=0),_===!0&&(o.fromBufferAttribute(ae,ie),N[q+W+8]=o.x,N[q+W+9]=o.y,N[q+W+10]=o.z,N[q+W+11]=ae.itemSize===4?o.w:1)}}g={count:x,texture:T,size:new nt(k,O)},r.set(f,g),f.addEventListener("dispose",Z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let _=0;_<p.length;_++)M+=p[_];const C=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",C),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function cE(s,e,t,r,o){let l=new WeakMap;function c(p){const v=o.render.frame,x=p.geometry,g=e.get(p,x);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==v&&(S.update(),l.set(S,v))}return g}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:c,dispose:f}}const fE={[xg]:"LINEAR_TONE_MAPPING",[yg]:"REINHARD_TONE_MAPPING",[Sg]:"CINEON_TONE_MAPPING",[Mg]:"ACES_FILMIC_TONE_MAPPING",[Tg]:"AGX_TONE_MAPPING",[wg]:"NEUTRAL_TONE_MAPPING",[Eg]:"CUSTOM_TONE_MAPPING"};function dE(s,e,t,r,o){const l=new zi(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),c=new zi(e,t,{type:fr,depthBuffer:!1,stencilBuffer:!1}),f=new pi;f.setAttribute("position",new gn([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new gn([0,2,0,0,2,0],2));const h=new ry({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new mn(f,h),v=new kd(-1,1,1,-1,0,1);let x=null,g=null,S=!1,M,C=null,_=[],y=!1;this.setSize=function(R,L){l.setSize(R,L),c.setSize(R,L);for(let b=0;b<_.length;b++){const k=_[b];k.setSize&&k.setSize(R,L)}},this.setEffects=function(R){_=R,y=_.length>0&&_[0].isRenderPass===!0;const L=l.width,b=l.height;for(let k=0;k<_.length;k++){const O=_[k];O.setSize&&O.setSize(L,b)}},this.begin=function(R,L){if(S||R.toneMapping===Bi&&_.length===0)return!1;if(C=L,L!==null){const b=L.width,k=L.height;(l.width!==b||l.height!==k)&&this.setSize(b,k)}return y===!1&&R.setRenderTarget(l),M=R.toneMapping,R.toneMapping=Bi,!0},this.hasRenderPass=function(){return y},this.end=function(R,L){R.toneMapping=M,S=!0;let b=l,k=c;for(let O=0;O<_.length;O++){const N=_[O];if(N.enabled!==!1&&(N.render(R,k,b,L),N.needsSwap!==!1)){const T=b;b=k,k=T}}if(x!==R.outputColorSpace||g!==R.toneMapping){x=R.outputColorSpace,g=R.toneMapping,h.defines={},Lt.getTransfer(x)===zt&&(h.defines.SRGB_TRANSFER="");const O=fE[g];O&&(h.defines[O]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,R.setRenderTarget(C),R.render(p,v),C=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),h.dispose()}}const r0=new On,_d=new ma(1,1),s0=new Fg,o0=new nx,a0=new Hg,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),rg=new Float32Array(4);function vo(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=eg[o];if(l===void 0&&(l=new Float32Array(o),eg[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function un(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function cn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function uu(s,e){let t=tg[e];t===void 0&&(t=new Int32Array(e),tg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function hE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function pE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2fv(this.addr,e),cn(t,e)}}function mE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(un(t,e))return;s.uniform3fv(this.addr,e),cn(t,e)}}function gE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4fv(this.addr,e),cn(t,e)}}function vE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(un(t,r))return;rg.set(r),s.uniformMatrix2fv(this.addr,!1,rg),cn(t,r)}}function _E(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(un(t,r))return;ig.set(r),s.uniformMatrix3fv(this.addr,!1,ig),cn(t,r)}}function xE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(un(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(un(t,r))return;ng.set(r),s.uniformMatrix4fv(this.addr,!1,ng),cn(t,r)}}function yE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function SE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2iv(this.addr,e),cn(t,e)}}function ME(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3iv(this.addr,e),cn(t,e)}}function EE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4iv(this.addr,e),cn(t,e)}}function TE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function wE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(un(t,e))return;s.uniform2uiv(this.addr,e),cn(t,e)}}function AE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(un(t,e))return;s.uniform3uiv(this.addr,e),cn(t,e)}}function CE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(un(t,e))return;s.uniform4uiv(this.addr,e),cn(t,e)}}function RE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(_d.compareFunction=t.isReversedDepthBuffer()?bd:Rd,l=_d):l=r0,t.setTexture2D(e||l,o)}function bE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||o0,o)}function PE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||a0,o)}function LE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||s0,o)}function DE(s){switch(s){case 5126:return hE;case 35664:return pE;case 35665:return mE;case 35666:return gE;case 35674:return vE;case 35675:return _E;case 35676:return xE;case 5124:case 35670:return yE;case 35667:case 35671:return SE;case 35668:case 35672:return ME;case 35669:case 35673:return EE;case 5125:return TE;case 36294:return wE;case 36295:return AE;case 36296:return CE;case 35678:case 36198:case 36298:case 36306:case 35682:return RE;case 35679:case 36299:case 36307:return bE;case 35680:case 36300:case 36308:case 36293:return PE;case 36289:case 36303:case 36311:case 36292:return LE}}function NE(s,e){s.uniform1fv(this.addr,e)}function IE(s,e){const t=vo(e,this.size,2);s.uniform2fv(this.addr,t)}function UE(s,e){const t=vo(e,this.size,3);s.uniform3fv(this.addr,t)}function FE(s,e){const t=vo(e,this.size,4);s.uniform4fv(this.addr,t)}function OE(s,e){const t=vo(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kE(s,e){const t=vo(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function BE(s,e){const t=vo(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zE(s,e){s.uniform1iv(this.addr,e)}function VE(s,e){s.uniform2iv(this.addr,e)}function HE(s,e){s.uniform3iv(this.addr,e)}function GE(s,e){s.uniform4iv(this.addr,e)}function WE(s,e){s.uniform1uiv(this.addr,e)}function XE(s,e){s.uniform2uiv(this.addr,e)}function qE(s,e){s.uniform3uiv(this.addr,e)}function YE(s,e){s.uniform4uiv(this.addr,e)}function jE(s,e,t){const r=this.cache,o=e.length,l=uu(t,o);un(r,l)||(s.uniform1iv(this.addr,l),cn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=_d:c=r0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function $E(s,e,t){const r=this.cache,o=e.length,l=uu(t,o);un(r,l)||(s.uniform1iv(this.addr,l),cn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||o0,l[c])}function KE(s,e,t){const r=this.cache,o=e.length,l=uu(t,o);un(r,l)||(s.uniform1iv(this.addr,l),cn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||a0,l[c])}function ZE(s,e,t){const r=this.cache,o=e.length,l=uu(t,o);un(r,l)||(s.uniform1iv(this.addr,l),cn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||s0,l[c])}function JE(s){switch(s){case 5126:return NE;case 35664:return IE;case 35665:return UE;case 35666:return FE;case 35674:return OE;case 35675:return kE;case 35676:return BE;case 5124:case 35670:return zE;case 35667:case 35671:return VE;case 35668:case 35672:return HE;case 35669:case 35673:return GE;case 5125:return WE;case 36294:return XE;case 36295:return qE;case 36296:return YE;case 35678:case 36198:case 36298:case 36306:case 35682:return jE;case 35679:case 36299:case 36307:return $E;case 35680:case 36300:case 36308:case 36293:return KE;case 36289:case 36303:case 36311:case 36292:return ZE}}class QE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=DE(t.type)}}class e1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=JE(t.type)}}class t1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Tf=/(\w+)(\])?(\[|\.)?/g;function sg(s,e){s.seq.push(e),s.map[e.id]=e}function n1(s,e,t){const r=s.name,o=r.length;for(Tf.lastIndex=0;;){const l=Tf.exec(r),c=Tf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){sg(t,p===void 0?new QE(f,s,e):new e1(f,s,e));break}else{let x=t.map[f];x===void 0&&(x=new t1(f),sg(t,x)),t=x}}}class nu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);n1(f,h,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function og(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const i1=37297;let r1=0;function s1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const ag=new _t;function o1(s){Lt._getMatrix(ag,Lt.workingColorSpace,s);const e=`mat3( ${ag.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(s)){case iu:return[e,"LinearTransferOETF"];case zt:return[e,"sRGBTransferOETF"];default:return dt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function lg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+s1(s.getShaderSource(e),f)}else return l}function a1(s,e){const t=o1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const l1={[xg]:"Linear",[yg]:"Reinhard",[Sg]:"Cineon",[Mg]:"ACESFilmic",[Tg]:"AgX",[wg]:"Neutral",[Eg]:"Custom"};function u1(s,e){const t=l1[e];return t===void 0?(dt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jl=new j;function c1(){Lt.getLuminanceCoefficients(jl);const s=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function d1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function h1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function sa(s){return s!==""}function ug(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(s){return s.replace(p1,g1)}const m1=new Map;function g1(s,e){let t=xt[e];if(t===void 0){const r=m1.get(e);if(r!==void 0)t=xt[r],dt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return xd(t)}const v1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(s){return s.replace(v1,_1)}function _1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function dg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const x1={[Zl]:"SHADOWMAP_TYPE_PCF",[ia]:"SHADOWMAP_TYPE_VSM"};function y1(s){return x1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const S1={[vs]:"ENVMAP_TYPE_CUBE",[uo]:"ENVMAP_TYPE_CUBE",[ou]:"ENVMAP_TYPE_CUBE_UV"};function M1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":S1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const E1={[uo]:"ENVMAP_MODE_REFRACTION"};function T1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":E1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const w1={[_g]:"ENVMAP_BLENDING_MULTIPLY",[x_]:"ENVMAP_BLENDING_MIX",[y_]:"ENVMAP_BLENDING_ADD"};function A1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":w1[s.combine]||"ENVMAP_BLENDING_NONE"}function C1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function R1(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=y1(t),p=M1(t),v=T1(t),x=A1(t),g=C1(t),S=f1(t),M=d1(l),C=o.createProgram();let _,y,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(sa).join(`
`),_.length>0&&(_+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(sa).join(`
`),y.length>0&&(y+=`
`)):(_=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),y=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Bi?"#define TONE_MAPPING":"",t.toneMapping!==Bi?xt.tonemapping_pars_fragment:"",t.toneMapping!==Bi?u1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",xt.colorspace_pars_fragment,a1("linearToOutputTexel",t.outputColorSpace),c1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),c=xd(c),c=ug(c,t),c=cg(c,t),f=xd(f),f=ug(f,t),f=cg(f,t),c=fg(c),f=fg(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,y=["#define varying in",t.glslVersion===_m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const L=R+_+c,b=R+y+f,k=og(o,o.VERTEX_SHADER,L),O=og(o,o.FRAGMENT_SHADER,b);o.attachShader(C,k),o.attachShader(C,O),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function N(F){if(s.debug.checkShaderErrors){const $=o.getProgramInfoLog(C)||"",K=o.getShaderInfoLog(k)||"",ae=o.getShaderInfoLog(O)||"",q=$.trim(),ie=K.trim(),W=ae.trim();let J=!0,oe=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,k,O);else{const ce=lg(o,k,"vertex"),U=lg(o,O,"fragment");It("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+q+`
`+ce+`
`+U)}else q!==""?dt("WebGLProgram: Program Info Log:",q):(ie===""||W==="")&&(oe=!1);oe&&(F.diagnostics={runnable:J,programLog:q,vertexShader:{log:ie,prefix:_},fragmentShader:{log:W,prefix:y}})}o.deleteShader(k),o.deleteShader(O),T=new nu(o,C),P=h1(o,C)}let T;this.getUniforms=function(){return T===void 0&&N(this),T};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=o.getProgramParameter(C,i1)),Z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=O,this}let b1=0;class P1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new L1(e),t.set(e,r)),r}}class L1{constructor(e){this.id=b1++,this.code=e,this.usedTimes=0}}function D1(s,e,t,r,o,l){const c=new Og,f=new P1,h=new Set,p=[],v=new Map,x=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return h.add(T),T===0?"uv":`uv${T}`}function C(T,P,Z,F,$){const K=F.fog,ae=$.geometry,q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?F.environment:null,ie=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,W=e.get(T.envMap||q,ie),J=W&&W.mapping===ou?W.image.height:null,oe=S[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&dt("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const ce=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,U=ce!==void 0?ce.length:0;let Y=0;ae.morphAttributes.position!==void 0&&(Y=1),ae.morphAttributes.normal!==void 0&&(Y=2),ae.morphAttributes.color!==void 0&&(Y=3);let Ee,Re,Ze,Q;if(oe){const Tt=Ui[oe];Ee=Tt.vertexShader,Re=Tt.fragmentShader}else Ee=T.vertexShader,Re=T.fragmentShader,f.update(T),Ze=f.getVertexShaderID(T),Q=f.getFragmentShaderID(T);const me=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Fe=$.isInstancedMesh===!0,He=$.isBatchedMesh===!0,it=!!T.map,bt=!!T.matcap,ht=!!W,gt=!!T.aoMap,Ct=!!T.lightMap,pt=!!T.bumpMap,Dt=!!T.normalMap,B=!!T.displacementMap,Bt=!!T.emissiveMap,yt=!!T.metalnessMap,St=!!T.roughnessMap,Ye=T.anisotropy>0,D=T.clearcoat>0,E=T.dispersion>0,G=T.iridescence>0,he=T.sheen>0,ge=T.transmission>0,fe=Ye&&!!T.anisotropyMap,Oe=D&&!!T.clearcoatMap,Te=D&&!!T.clearcoatNormalMap,Le=D&&!!T.clearcoatRoughnessMap,We=G&&!!T.iridescenceMap,xe=G&&!!T.iridescenceThicknessMap,we=he&&!!T.sheenColorMap,ze=he&&!!T.sheenRoughnessMap,Ge=!!T.specularMap,Ne=!!T.specularColorMap,ft=!!T.specularIntensityMap,V=ge&&!!T.transmissionMap,Ce=ge&&!!T.thicknessMap,ye=!!T.gradientMap,be=!!T.alphaMap,Se=T.alphaTest>0,de=!!T.alphaHash,Xe=!!T.extensions;let at=Bi;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(at=s.toneMapping);const Ut={shaderID:oe,shaderType:T.type,shaderName:T.name,vertexShader:Ee,fragmentShader:Re,defines:T.defines,customVertexShaderID:Ze,customFragmentShaderID:Q,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:He,batchingColor:He&&$._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&$.instanceColor!==null,instancingMorph:Fe&&$.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:fo,alphaToCoverage:!!T.alphaToCoverage,map:it,matcap:bt,envMap:ht,envMapMode:ht&&W.mapping,envMapCubeUVHeight:J,aoMap:gt,lightMap:Ct,bumpMap:pt,normalMap:Dt,displacementMap:B,emissiveMap:Bt,normalMapObjectSpace:Dt&&T.normalMapType===E_,normalMapTangentSpace:Dt&&T.normalMapType===Ig,metalnessMap:yt,roughnessMap:St,anisotropy:Ye,anisotropyMap:fe,clearcoat:D,clearcoatMap:Oe,clearcoatNormalMap:Te,clearcoatRoughnessMap:Le,dispersion:E,iridescence:G,iridescenceMap:We,iridescenceThicknessMap:xe,sheen:he,sheenColorMap:we,sheenRoughnessMap:ze,specularMap:Ge,specularColorMap:Ne,specularIntensityMap:ft,transmission:ge,transmissionMap:V,thicknessMap:Ce,gradientMap:ye,opaque:T.transparent===!1&&T.blending===oo&&T.alphaToCoverage===!1,alphaMap:be,alphaTest:Se,alphaHash:de,combine:T.combine,mapUv:it&&M(T.map.channel),aoMapUv:gt&&M(T.aoMap.channel),lightMapUv:Ct&&M(T.lightMap.channel),bumpMapUv:pt&&M(T.bumpMap.channel),normalMapUv:Dt&&M(T.normalMap.channel),displacementMapUv:B&&M(T.displacementMap.channel),emissiveMapUv:Bt&&M(T.emissiveMap.channel),metalnessMapUv:yt&&M(T.metalnessMap.channel),roughnessMapUv:St&&M(T.roughnessMap.channel),anisotropyMapUv:fe&&M(T.anisotropyMap.channel),clearcoatMapUv:Oe&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Le&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:we&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:ze&&M(T.sheenRoughnessMap.channel),specularMapUv:Ge&&M(T.specularMap.channel),specularColorMapUv:Ne&&M(T.specularColorMap.channel),specularIntensityMapUv:ft&&M(T.specularIntensityMap.channel),transmissionMapUv:V&&M(T.transmissionMap.channel),thicknessMapUv:Ce&&M(T.thicknessMap.channel),alphaMapUv:be&&M(T.alphaMap.channel),vertexTangents:!!ae.attributes.tangent&&(Dt||Ye),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,pointsUvs:$.isPoints===!0&&!!ae.attributes.uv&&(it||be),fog:!!K,useFog:T.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ae.attributes.normal===void 0&&Dt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:pe,skinning:$.isSkinnedMesh===!0,morphTargets:ae.morphAttributes.position!==void 0,morphNormals:ae.morphAttributes.normal!==void 0,morphColors:ae.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Y,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Z.length>0,shadowMapType:s.shadowMap.type,toneMapping:at,decodeVideoTexture:it&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===zt,decodeVideoTextureEmissive:Bt&&T.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(T.emissiveMap.colorSpace)===zt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Fi,flipSided:T.side===Yn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Xe&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xe&&T.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ut.vertexUv1s=h.has(1),Ut.vertexUv2s=h.has(2),Ut.vertexUv3s=h.has(3),h.clear(),Ut}function _(T){const P=[];if(T.shaderID?P.push(T.shaderID):(P.push(T.customVertexShaderID),P.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Z in T.defines)P.push(Z),P.push(T.defines[Z]);return T.isRawShaderMaterial===!1&&(y(P,T),R(P,T),P.push(s.outputColorSpace)),P.push(T.customProgramCacheKey),P.join()}function y(T,P){T.push(P.precision),T.push(P.outputColorSpace),T.push(P.envMapMode),T.push(P.envMapCubeUVHeight),T.push(P.mapUv),T.push(P.alphaMapUv),T.push(P.lightMapUv),T.push(P.aoMapUv),T.push(P.bumpMapUv),T.push(P.normalMapUv),T.push(P.displacementMapUv),T.push(P.emissiveMapUv),T.push(P.metalnessMapUv),T.push(P.roughnessMapUv),T.push(P.anisotropyMapUv),T.push(P.clearcoatMapUv),T.push(P.clearcoatNormalMapUv),T.push(P.clearcoatRoughnessMapUv),T.push(P.iridescenceMapUv),T.push(P.iridescenceThicknessMapUv),T.push(P.sheenColorMapUv),T.push(P.sheenRoughnessMapUv),T.push(P.specularMapUv),T.push(P.specularColorMapUv),T.push(P.specularIntensityMapUv),T.push(P.transmissionMapUv),T.push(P.thicknessMapUv),T.push(P.combine),T.push(P.fogExp2),T.push(P.sizeAttenuation),T.push(P.morphTargetsCount),T.push(P.morphAttributeCount),T.push(P.numDirLights),T.push(P.numPointLights),T.push(P.numSpotLights),T.push(P.numSpotLightMaps),T.push(P.numHemiLights),T.push(P.numRectAreaLights),T.push(P.numDirLightShadows),T.push(P.numPointLightShadows),T.push(P.numSpotLightShadows),T.push(P.numSpotLightShadowsWithMaps),T.push(P.numLightProbes),T.push(P.shadowMapType),T.push(P.toneMapping),T.push(P.numClippingPlanes),T.push(P.numClipIntersection),T.push(P.depthPacking)}function R(T,P){c.disableAll(),P.instancing&&c.enable(0),P.instancingColor&&c.enable(1),P.instancingMorph&&c.enable(2),P.matcap&&c.enable(3),P.envMap&&c.enable(4),P.normalMapObjectSpace&&c.enable(5),P.normalMapTangentSpace&&c.enable(6),P.clearcoat&&c.enable(7),P.iridescence&&c.enable(8),P.alphaTest&&c.enable(9),P.vertexColors&&c.enable(10),P.vertexAlphas&&c.enable(11),P.vertexUv1s&&c.enable(12),P.vertexUv2s&&c.enable(13),P.vertexUv3s&&c.enable(14),P.vertexTangents&&c.enable(15),P.anisotropy&&c.enable(16),P.alphaHash&&c.enable(17),P.batching&&c.enable(18),P.dispersion&&c.enable(19),P.batchingColor&&c.enable(20),P.gradientMap&&c.enable(21),T.push(c.mask),c.disableAll(),P.fog&&c.enable(0),P.useFog&&c.enable(1),P.flatShading&&c.enable(2),P.logarithmicDepthBuffer&&c.enable(3),P.reversedDepthBuffer&&c.enable(4),P.skinning&&c.enable(5),P.morphTargets&&c.enable(6),P.morphNormals&&c.enable(7),P.morphColors&&c.enable(8),P.premultipliedAlpha&&c.enable(9),P.shadowMapEnabled&&c.enable(10),P.doubleSided&&c.enable(11),P.flipSided&&c.enable(12),P.useDepthPacking&&c.enable(13),P.dithering&&c.enable(14),P.transmission&&c.enable(15),P.sheen&&c.enable(16),P.opaque&&c.enable(17),P.pointsUvs&&c.enable(18),P.decodeVideoTexture&&c.enable(19),P.decodeVideoTextureEmissive&&c.enable(20),P.alphaToCoverage&&c.enable(21),T.push(c.mask)}function L(T){const P=S[T.type];let Z;if(P){const F=Ui[P];Z=ty.clone(F.uniforms)}else Z=T.uniforms;return Z}function b(T,P){let Z=v.get(P);return Z!==void 0?++Z.usedTimes:(Z=new R1(s,P,T,o),p.push(Z),v.set(P,Z)),Z}function k(T){if(--T.usedTimes===0){const P=p.indexOf(T);p[P]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function O(T){f.remove(T)}function N(){f.dispose()}return{getParameters:C,getProgramCacheKey:_,getUniforms:L,acquireProgram:b,releaseProgram:k,releaseShaderCache:O,programs:p,dispose:N}}function N1(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function I1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function hg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,M,C,_,y){let R=s[e];return R===void 0?(R={id:g.id,object:g,geometry:S,material:M,materialVariant:c(g),groupOrder:C,renderOrder:g.renderOrder,z:_,group:y},s[e]=R):(R.id=g.id,R.object=g,R.geometry=S,R.material=M,R.materialVariant=c(g),R.groupOrder=C,R.renderOrder=g.renderOrder,R.z=_,R.group=y),e++,R}function h(g,S,M,C,_,y){const R=f(g,S,M,C,_,y);M.transmission>0?r.push(R):M.transparent===!0?o.push(R):t.push(R)}function p(g,S,M,C,_,y){const R=f(g,S,M,C,_,y);M.transmission>0?r.unshift(R):M.transparent===!0?o.unshift(R):t.unshift(R)}function v(g,S){t.length>1&&t.sort(g||I1),r.length>1&&r.sort(S||hg),o.length>1&&o.sort(S||hg)}function x(){for(let g=e,S=s.length;g<S;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:x,sort:v}}function U1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new pg,s.set(r,[c])):o>=l.length?(c=new pg,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function F1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Ot};break;case"SpotLight":t={position:new j,direction:new j,color:new Ot,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Ot,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Ot,groundColor:new Ot};break;case"RectAreaLight":t={color:new Ot,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=t,t}}}function O1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let k1=0;function B1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function z1(s){const e=new F1,t=O1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new j);const o=new j,l=new Zt,c=new Zt;function f(p){let v=0,x=0,g=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,M=0,C=0,_=0,y=0,R=0,L=0,b=0,k=0,O=0,N=0;p.sort(B1);for(let P=0,Z=p.length;P<Z;P++){const F=p[P],$=F.color,K=F.intensity,ae=F.distance;let q=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===co?q=F.shadow.map.texture:q=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)v+=$.r*K,x+=$.g*K,g+=$.b*K;else if(F.isLightProbe){for(let ie=0;ie<9;ie++)r.probe[ie].addScaledVector(F.sh.coefficients[ie],K);N++}else if(F.isDirectionalLight){const ie=e.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const W=F.shadow,J=t.get(F);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,r.directionalShadow[S]=J,r.directionalShadowMap[S]=q,r.directionalShadowMatrix[S]=F.shadow.matrix,R++}r.directional[S]=ie,S++}else if(F.isSpotLight){const ie=e.get(F);ie.position.setFromMatrixPosition(F.matrixWorld),ie.color.copy($).multiplyScalar(K),ie.distance=ae,ie.coneCos=Math.cos(F.angle),ie.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),ie.decay=F.decay,r.spot[C]=ie;const W=F.shadow;if(F.map&&(r.spotLightMap[k]=F.map,k++,W.updateMatrices(F),F.castShadow&&O++),r.spotLightMatrix[C]=W.matrix,F.castShadow){const J=t.get(F);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,r.spotShadow[C]=J,r.spotShadowMap[C]=q,b++}C++}else if(F.isRectAreaLight){const ie=e.get(F);ie.color.copy($).multiplyScalar(K),ie.halfWidth.set(F.width*.5,0,0),ie.halfHeight.set(0,F.height*.5,0),r.rectArea[_]=ie,_++}else if(F.isPointLight){const ie=e.get(F);if(ie.color.copy(F.color).multiplyScalar(F.intensity),ie.distance=F.distance,ie.decay=F.decay,F.castShadow){const W=F.shadow,J=t.get(F);J.shadowIntensity=W.intensity,J.shadowBias=W.bias,J.shadowNormalBias=W.normalBias,J.shadowRadius=W.radius,J.shadowMapSize=W.mapSize,J.shadowCameraNear=W.camera.near,J.shadowCameraFar=W.camera.far,r.pointShadow[M]=J,r.pointShadowMap[M]=q,r.pointShadowMatrix[M]=F.shadow.matrix,L++}r.point[M]=ie,M++}else if(F.isHemisphereLight){const ie=e.get(F);ie.skyColor.copy(F.color).multiplyScalar(K),ie.groundColor.copy(F.groundColor).multiplyScalar(K),r.hemi[y]=ie,y++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=x,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==S||T.pointLength!==M||T.spotLength!==C||T.rectAreaLength!==_||T.hemiLength!==y||T.numDirectionalShadows!==R||T.numPointShadows!==L||T.numSpotShadows!==b||T.numSpotMaps!==k||T.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=C,r.rectArea.length=_,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=b,r.spotShadowMap.length=b,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=b+k-O,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=N,T.directionalLength=S,T.pointLength=M,T.spotLength=C,T.rectAreaLength=_,T.hemiLength=y,T.numDirectionalShadows=R,T.numPointShadows=L,T.numSpotShadows=b,T.numSpotMaps=k,T.numLightProbes=N,r.version=k1++)}function h(p,v){let x=0,g=0,S=0,M=0,C=0;const _=v.matrixWorldInverse;for(let y=0,R=p.length;y<R;y++){const L=p[y];if(L.isDirectionalLight){const b=r.directional[x];b.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(_),x++}else if(L.isSpotLight){const b=r.spot[S];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(_),b.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),b.direction.sub(o),b.direction.transformDirection(_),S++}else if(L.isRectAreaLight){const b=r.rectArea[M];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(_),c.identity(),l.copy(L.matrixWorld),l.premultiply(_),c.extractRotation(l),b.halfWidth.set(L.width*.5,0,0),b.halfHeight.set(0,L.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),M++}else if(L.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(L.matrixWorld),b.position.applyMatrix4(_),g++}else if(L.isHemisphereLight){const b=r.hemi[C];b.direction.setFromMatrixPosition(L.matrixWorld),b.direction.transformDirection(_),C++}}}return{setup:f,setupView:h,state:r}}function mg(s){const e=new z1(s),t=[],r=[];function o(v){p.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function c(v){r.push(v)}function f(){e.setup(t)}function h(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function V1(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new mg(s),e.set(o,[f])):l>=c.length?(f=new mg(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,G1=`uniform sampler2D shadow_pass;
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
}`,W1=[new j(1,0,0),new j(-1,0,0),new j(0,1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1)],X1=[new j(0,-1,0),new j(0,-1,0),new j(0,0,1),new j(0,0,-1),new j(0,-1,0),new j(0,-1,0)],gg=new Zt,na=new j,wf=new j;function q1(s,e,t){let r=new Nd;const o=new nt,l=new nt,c=new en,f=new sy,h=new oy,p={},v=t.maxTextureSize,x={[Wr]:Yn,[Yn]:Wr,[Fi]:Fi},g=new Wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:H1,fragmentShader:G1}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const M=new pi;M.setAttribute("position",new Vi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new mn(M,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zl;let y=this.type;this.render=function(O,N,T){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||O.length===0)return;this.type===e_&&(dt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Zl);const P=s.getRenderTarget(),Z=s.getActiveCubeFace(),F=s.getActiveMipmapLevel(),$=s.state;$.setBlending(ur),$.buffers.depth.getReversed()===!0?$.buffers.color.setClear(0,0,0,0):$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);const K=y!==this.type;K&&N.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(q=>q.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,q=O.length;ae<q;ae++){const ie=O[ae],W=ie.shadow;if(W===void 0){dt("WebGLShadowMap:",ie,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;o.copy(W.mapSize);const J=W.getFrameExtents();o.multiply(J),l.copy(W.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/J.x),o.x=l.x*J.x,W.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/J.y),o.y=l.y*J.y,W.mapSize.y=l.y));const oe=s.state.buffers.depth.getReversed();if(W.camera._reversedDepth=oe,W.map===null||K===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===ia){if(ie.isPointLight){dt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new zi(o.x,o.y,{format:co,type:fr,minFilter:Cn,magFilter:Cn,generateMipmaps:!1}),W.map.texture.name=ie.name+".shadowMap",W.map.depthTexture=new ma(o.x,o.y,Oi),W.map.depthTexture.name=ie.name+".shadowMapDepth",W.map.depthTexture.format=dr,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=xn,W.map.depthTexture.magFilter=xn}else ie.isPointLight?(W.map=new i0(o.x),W.map.depthTexture=new Sx(o.x,Hi)):(W.map=new zi(o.x,o.y),W.map.depthTexture=new ma(o.x,o.y,Hi)),W.map.depthTexture.name=ie.name+".shadowMap",W.map.depthTexture.format=dr,this.type===Zl?(W.map.depthTexture.compareFunction=oe?bd:Rd,W.map.depthTexture.minFilter=Cn,W.map.depthTexture.magFilter=Cn):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=xn,W.map.depthTexture.magFilter=xn);W.camera.updateProjectionMatrix()}const ce=W.map.isWebGLCubeRenderTarget?6:1;for(let U=0;U<ce;U++){if(W.map.isWebGLCubeRenderTarget)s.setRenderTarget(W.map,U),s.clear();else{U===0&&(s.setRenderTarget(W.map),s.clear());const Y=W.getViewport(U);c.set(l.x*Y.x,l.y*Y.y,l.x*Y.z,l.y*Y.w),$.viewport(c)}if(ie.isPointLight){const Y=W.camera,Ee=W.matrix,Re=ie.distance||Y.far;Re!==Y.far&&(Y.far=Re,Y.updateProjectionMatrix()),na.setFromMatrixPosition(ie.matrixWorld),Y.position.copy(na),wf.copy(Y.position),wf.add(W1[U]),Y.up.copy(X1[U]),Y.lookAt(wf),Y.updateMatrixWorld(),Ee.makeTranslation(-na.x,-na.y,-na.z),gg.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),W._frustum.setFromProjectionMatrix(gg,Y.coordinateSystem,Y.reversedDepth)}else W.updateMatrices(ie);r=W.getFrustum(),b(N,T,W.camera,ie,this.type)}W.isPointLightShadow!==!0&&this.type===ia&&R(W,T),W.needsUpdate=!1}y=this.type,_.needsUpdate=!1,s.setRenderTarget(P,Z,F)};function R(O,N){const T=e.update(C);g.defines.VSM_SAMPLES!==O.blurSamples&&(g.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new zi(o.x,o.y,{format:co,type:fr})),g.uniforms.shadow_pass.value=O.map.depthTexture,g.uniforms.resolution.value=O.mapSize,g.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(N,null,T,g,C,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(N,null,T,S,C,null)}function L(O,N,T,P){let Z=null;const F=T.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(F!==void 0)Z=F;else if(Z=T.isPointLight===!0?h:f,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const $=Z.uuid,K=N.uuid;let ae=p[$];ae===void 0&&(ae={},p[$]=ae);let q=ae[K];q===void 0&&(q=Z.clone(),ae[K]=q,N.addEventListener("dispose",k)),Z=q}if(Z.visible=N.visible,Z.wireframe=N.wireframe,P===ia?Z.side=N.shadowSide!==null?N.shadowSide:N.side:Z.side=N.shadowSide!==null?N.shadowSide:x[N.side],Z.alphaMap=N.alphaMap,Z.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,Z.map=N.map,Z.clipShadows=N.clipShadows,Z.clippingPlanes=N.clippingPlanes,Z.clipIntersection=N.clipIntersection,Z.displacementMap=N.displacementMap,Z.displacementScale=N.displacementScale,Z.displacementBias=N.displacementBias,Z.wireframeLinewidth=N.wireframeLinewidth,Z.linewidth=N.linewidth,T.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const $=s.properties.get(Z);$.light=T}return Z}function b(O,N,T,P,Z){if(O.visible===!1)return;if(O.layers.test(N.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&Z===ia)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,O.matrixWorld);const K=e.update(O),ae=O.material;if(Array.isArray(ae)){const q=K.groups;for(let ie=0,W=q.length;ie<W;ie++){const J=q[ie],oe=ae[J.materialIndex];if(oe&&oe.visible){const ce=L(O,oe,P,Z);O.onBeforeShadow(s,O,N,T,K,ce,J),s.renderBufferDirect(T,null,K,ce,O,J),O.onAfterShadow(s,O,N,T,K,ce,J)}}}else if(ae.visible){const q=L(O,ae,P,Z);O.onBeforeShadow(s,O,N,T,K,q,null),s.renderBufferDirect(T,null,K,q,O,null),O.onAfterShadow(s,O,N,T,K,q,null)}}const $=O.children;for(let K=0,ae=$.length;K<ae;K++)b($[K],N,T,P,Z)}function k(O){O.target.removeEventListener("dispose",k);for(const T in p){const P=p[T],Z=O.target.uuid;Z in P&&(P[Z].dispose(),delete P[Z])}}}function Y1(s,e){function t(){let V=!1;const Ce=new en;let ye=null;const be=new en(0,0,0,0);return{setMask:function(Se){ye!==Se&&!V&&(s.colorMask(Se,Se,Se,Se),ye=Se)},setLocked:function(Se){V=Se},setClear:function(Se,de,Xe,at,Ut){Ut===!0&&(Se*=at,de*=at,Xe*=at),Ce.set(Se,de,Xe,at),be.equals(Ce)===!1&&(s.clearColor(Se,de,Xe,at),be.copy(Ce))},reset:function(){V=!1,ye=null,be.set(-1,0,0,0)}}}function r(){let V=!1,Ce=!1,ye=null,be=null,Se=null;return{setReversed:function(de){if(Ce!==de){const Xe=e.get("EXT_clip_control");de?Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.ZERO_TO_ONE_EXT):Xe.clipControlEXT(Xe.LOWER_LEFT_EXT,Xe.NEGATIVE_ONE_TO_ONE_EXT),Ce=de;const at=Se;Se=null,this.setClear(at)}},getReversed:function(){return Ce},setTest:function(de){de?me(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(de){ye!==de&&!V&&(s.depthMask(de),ye=de)},setFunc:function(de){if(Ce&&(de=N_[de]),be!==de){switch(de){case bf:s.depthFunc(s.NEVER);break;case Pf:s.depthFunc(s.ALWAYS);break;case Lf:s.depthFunc(s.LESS);break;case lo:s.depthFunc(s.LEQUAL);break;case Df:s.depthFunc(s.EQUAL);break;case Nf:s.depthFunc(s.GEQUAL);break;case If:s.depthFunc(s.GREATER);break;case Uf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=de}},setLocked:function(de){V=de},setClear:function(de){Se!==de&&(Se=de,Ce&&(de=1-de),s.clearDepth(de))},reset:function(){V=!1,ye=null,be=null,Se=null,Ce=!1}}}function o(){let V=!1,Ce=null,ye=null,be=null,Se=null,de=null,Xe=null,at=null,Ut=null;return{setTest:function(Tt){V||(Tt?me(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(Tt){Ce!==Tt&&!V&&(s.stencilMask(Tt),Ce=Tt)},setFunc:function(Tt,bn,te){(ye!==Tt||be!==bn||Se!==te)&&(s.stencilFunc(Tt,bn,te),ye=Tt,be=bn,Se=te)},setOp:function(Tt,bn,te){(de!==Tt||Xe!==bn||at!==te)&&(s.stencilOp(Tt,bn,te),de=Tt,Xe=bn,at=te)},setLocked:function(Tt){V=Tt},setClear:function(Tt){Ut!==Tt&&(s.clearStencil(Tt),Ut=Tt)},reset:function(){V=!1,Ce=null,ye=null,be=null,Se=null,de=null,Xe=null,at=null,Ut=null}}}const l=new t,c=new r,f=new o,h=new WeakMap,p=new WeakMap;let v={},x={},g=new WeakMap,S=[],M=null,C=!1,_=null,y=null,R=null,L=null,b=null,k=null,O=null,N=new Ot(0,0,0),T=0,P=!1,Z=null,F=null,$=null,K=null,ae=null;const q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,W=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(J)[1]),ie=W>=1):J.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),ie=W>=2);let oe=null,ce={};const U=s.getParameter(s.SCISSOR_BOX),Y=s.getParameter(s.VIEWPORT),Ee=new en().fromArray(U),Re=new en().fromArray(Y);function Ze(V,Ce,ye,be){const Se=new Uint8Array(4),de=s.createTexture();s.bindTexture(V,de),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Xe=0;Xe<ye;Xe++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(Ce,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,Se):s.texImage2D(Ce+Xe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Se);return de}const Q={};Q[s.TEXTURE_2D]=Ze(s.TEXTURE_2D,s.TEXTURE_2D,1),Q[s.TEXTURE_CUBE_MAP]=Ze(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[s.TEXTURE_2D_ARRAY]=Ze(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Q[s.TEXTURE_3D]=Ze(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),me(s.DEPTH_TEST),c.setFunc(lo),pt(!1),Dt(dm),me(s.CULL_FACE),gt(ur);function me(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function pe(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function Fe(V,Ce){return x[V]!==Ce?(s.bindFramebuffer(V,Ce),x[V]=Ce,V===s.DRAW_FRAMEBUFFER&&(x[s.FRAMEBUFFER]=Ce),V===s.FRAMEBUFFER&&(x[s.DRAW_FRAMEBUFFER]=Ce),!0):!1}function He(V,Ce){let ye=S,be=!1;if(V){ye=g.get(Ce),ye===void 0&&(ye=[],g.set(Ce,ye));const Se=V.textures;if(ye.length!==Se.length||ye[0]!==s.COLOR_ATTACHMENT0){for(let de=0,Xe=Se.length;de<Xe;de++)ye[de]=s.COLOR_ATTACHMENT0+de;ye.length=Se.length,be=!0}}else ye[0]!==s.BACK&&(ye[0]=s.BACK,be=!0);be&&s.drawBuffers(ye)}function it(V){return M!==V?(s.useProgram(V),M=V,!0):!1}const bt={[hs]:s.FUNC_ADD,[n_]:s.FUNC_SUBTRACT,[i_]:s.FUNC_REVERSE_SUBTRACT};bt[r_]=s.MIN,bt[s_]=s.MAX;const ht={[o_]:s.ZERO,[a_]:s.ONE,[l_]:s.SRC_COLOR,[Cf]:s.SRC_ALPHA,[p_]:s.SRC_ALPHA_SATURATE,[d_]:s.DST_COLOR,[c_]:s.DST_ALPHA,[u_]:s.ONE_MINUS_SRC_COLOR,[Rf]:s.ONE_MINUS_SRC_ALPHA,[h_]:s.ONE_MINUS_DST_COLOR,[f_]:s.ONE_MINUS_DST_ALPHA,[m_]:s.CONSTANT_COLOR,[g_]:s.ONE_MINUS_CONSTANT_COLOR,[v_]:s.CONSTANT_ALPHA,[__]:s.ONE_MINUS_CONSTANT_ALPHA};function gt(V,Ce,ye,be,Se,de,Xe,at,Ut,Tt){if(V===ur){C===!0&&(pe(s.BLEND),C=!1);return}if(C===!1&&(me(s.BLEND),C=!0),V!==t_){if(V!==_||Tt!==P){if((y!==hs||b!==hs)&&(s.blendEquation(s.FUNC_ADD),y=hs,b=hs),Tt)switch(V){case oo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hm:s.blendFunc(s.ONE,s.ONE);break;case pm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:It("WebGLState: Invalid blending: ",V);break}else switch(V){case oo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case pm:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mm:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",V);break}R=null,L=null,k=null,O=null,N.set(0,0,0),T=0,_=V,P=Tt}return}Se=Se||Ce,de=de||ye,Xe=Xe||be,(Ce!==y||Se!==b)&&(s.blendEquationSeparate(bt[Ce],bt[Se]),y=Ce,b=Se),(ye!==R||be!==L||de!==k||Xe!==O)&&(s.blendFuncSeparate(ht[ye],ht[be],ht[de],ht[Xe]),R=ye,L=be,k=de,O=Xe),(at.equals(N)===!1||Ut!==T)&&(s.blendColor(at.r,at.g,at.b,Ut),N.copy(at),T=Ut),_=V,P=!1}function Ct(V,Ce){V.side===Fi?pe(s.CULL_FACE):me(s.CULL_FACE);let ye=V.side===Yn;Ce&&(ye=!ye),pt(ye),V.blending===oo&&V.transparent===!1?gt(ur):gt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const be=V.stencilWrite;f.setTest(be),be&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Bt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function pt(V){Z!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),Z=V)}function Dt(V){V!==Jv?(me(s.CULL_FACE),V!==F&&(V===dm?s.cullFace(s.BACK):V===Qv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),F=V}function B(V){V!==$&&(ie&&s.lineWidth(V),$=V)}function Bt(V,Ce,ye){V?(me(s.POLYGON_OFFSET_FILL),(K!==Ce||ae!==ye)&&(K=Ce,ae=ye,c.getReversed()&&(Ce=-Ce),s.polygonOffset(Ce,ye))):pe(s.POLYGON_OFFSET_FILL)}function yt(V){V?me(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function St(V){V===void 0&&(V=s.TEXTURE0+q-1),oe!==V&&(s.activeTexture(V),oe=V)}function Ye(V,Ce,ye){ye===void 0&&(oe===null?ye=s.TEXTURE0+q-1:ye=oe);let be=ce[ye];be===void 0&&(be={type:void 0,texture:void 0},ce[ye]=be),(be.type!==V||be.texture!==Ce)&&(oe!==ye&&(s.activeTexture(ye),oe=ye),s.bindTexture(V,Ce||Q[V]),be.type=V,be.texture=Ce)}function D(){const V=ce[oe];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(V){It("WebGLState:",V)}}function G(){try{s.compressedTexImage3D(...arguments)}catch(V){It("WebGLState:",V)}}function he(){try{s.texSubImage2D(...arguments)}catch(V){It("WebGLState:",V)}}function ge(){try{s.texSubImage3D(...arguments)}catch(V){It("WebGLState:",V)}}function fe(){try{s.compressedTexSubImage2D(...arguments)}catch(V){It("WebGLState:",V)}}function Oe(){try{s.compressedTexSubImage3D(...arguments)}catch(V){It("WebGLState:",V)}}function Te(){try{s.texStorage2D(...arguments)}catch(V){It("WebGLState:",V)}}function Le(){try{s.texStorage3D(...arguments)}catch(V){It("WebGLState:",V)}}function We(){try{s.texImage2D(...arguments)}catch(V){It("WebGLState:",V)}}function xe(){try{s.texImage3D(...arguments)}catch(V){It("WebGLState:",V)}}function we(V){Ee.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ee.copy(V))}function ze(V){Re.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Re.copy(V))}function Ge(V,Ce){let ye=p.get(Ce);ye===void 0&&(ye=new WeakMap,p.set(Ce,ye));let be=ye.get(V);be===void 0&&(be=s.getUniformBlockIndex(Ce,V.name),ye.set(V,be))}function Ne(V,Ce){const be=p.get(Ce).get(V);h.get(Ce)!==be&&(s.uniformBlockBinding(Ce,be,V.__bindingPointIndex),h.set(Ce,be))}function ft(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},oe=null,ce={},x={},g=new WeakMap,S=[],M=null,C=!1,_=null,y=null,R=null,L=null,b=null,k=null,O=null,N=new Ot(0,0,0),T=0,P=!1,Z=null,F=null,$=null,K=null,ae=null,Ee.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:me,disable:pe,bindFramebuffer:Fe,drawBuffers:He,useProgram:it,setBlending:gt,setMaterial:Ct,setFlipSided:pt,setCullFace:Dt,setLineWidth:B,setPolygonOffset:Bt,setScissorTest:yt,activeTexture:St,bindTexture:Ye,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:G,texImage2D:We,texImage3D:xe,updateUBOMapping:Ge,uniformBlockBinding:Ne,texStorage2D:Te,texStorage3D:Le,texSubImage2D:he,texSubImage3D:ge,compressedTexSubImage2D:fe,compressedTexSubImage3D:Oe,scissor:we,viewport:ze,reset:ft}}function j1(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new nt,v=new WeakMap;let x;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,E){return S?new OffscreenCanvas(D,E):ru("canvas")}function C(D,E,G){let he=1;const ge=Ye(D);if((ge.width>G||ge.height>G)&&(he=G/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const fe=Math.floor(he*ge.width),Oe=Math.floor(he*ge.height);x===void 0&&(x=M(fe,Oe));const Te=E?M(fe,Oe):x;return Te.width=fe,Te.height=Oe,Te.getContext("2d").drawImage(D,0,0,fe,Oe),dt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+Oe+")."),Te}else return"data"in D&&dt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),D;return D}function _(D){return D.generateMipmaps}function y(D){s.generateMipmap(D)}function R(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function L(D,E,G,he,ge=!1){if(D!==null){if(s[D]!==void 0)return s[D];dt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let fe=E;if(E===s.RED&&(G===s.FLOAT&&(fe=s.R32F),G===s.HALF_FLOAT&&(fe=s.R16F),G===s.UNSIGNED_BYTE&&(fe=s.R8)),E===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.R8UI),G===s.UNSIGNED_SHORT&&(fe=s.R16UI),G===s.UNSIGNED_INT&&(fe=s.R32UI),G===s.BYTE&&(fe=s.R8I),G===s.SHORT&&(fe=s.R16I),G===s.INT&&(fe=s.R32I)),E===s.RG&&(G===s.FLOAT&&(fe=s.RG32F),G===s.HALF_FLOAT&&(fe=s.RG16F),G===s.UNSIGNED_BYTE&&(fe=s.RG8)),E===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.RG8UI),G===s.UNSIGNED_SHORT&&(fe=s.RG16UI),G===s.UNSIGNED_INT&&(fe=s.RG32UI),G===s.BYTE&&(fe=s.RG8I),G===s.SHORT&&(fe=s.RG16I),G===s.INT&&(fe=s.RG32I)),E===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),G===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),G===s.UNSIGNED_INT&&(fe=s.RGB32UI),G===s.BYTE&&(fe=s.RGB8I),G===s.SHORT&&(fe=s.RGB16I),G===s.INT&&(fe=s.RGB32I)),E===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),G===s.UNSIGNED_INT&&(fe=s.RGBA32UI),G===s.BYTE&&(fe=s.RGBA8I),G===s.SHORT&&(fe=s.RGBA16I),G===s.INT&&(fe=s.RGBA32I)),E===s.RGB&&(G===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),E===s.RGBA){const Oe=ge?iu:Lt.getTransfer(he);G===s.FLOAT&&(fe=s.RGBA32F),G===s.HALF_FLOAT&&(fe=s.RGBA16F),G===s.UNSIGNED_BYTE&&(fe=Oe===zt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function b(D,E){let G;return D?E===null||E===Hi||E===da?G=s.DEPTH24_STENCIL8:E===Oi?G=s.DEPTH32F_STENCIL8:E===fa&&(G=s.DEPTH24_STENCIL8,dt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Hi||E===da?G=s.DEPTH_COMPONENT24:E===Oi?G=s.DEPTH_COMPONENT32F:E===fa&&(G=s.DEPTH_COMPONENT16),G}function k(D,E){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==xn&&D.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function O(D){const E=D.target;E.removeEventListener("dispose",O),T(E),E.isVideoTexture&&v.delete(E)}function N(D){const E=D.target;E.removeEventListener("dispose",N),Z(E)}function T(D){const E=r.get(D);if(E.__webglInit===void 0)return;const G=D.source,he=g.get(G);if(he){const ge=he[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(D),Object.keys(he).length===0&&g.delete(G)}r.remove(D)}function P(D){const E=r.get(D);s.deleteTexture(E.__webglTexture);const G=D.source,he=g.get(G);delete he[E.__cacheKey],c.memory.textures--}function Z(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(E.__webglFramebuffer[he]))for(let ge=0;ge<E.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(E.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(E.__webglFramebuffer[he]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[he])}else{if(Array.isArray(E.__webglFramebuffer))for(let he=0;he<E.__webglFramebuffer.length;he++)s.deleteFramebuffer(E.__webglFramebuffer[he]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let he=0;he<E.__webglColorRenderbuffer.length;he++)E.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[he]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const G=D.textures;for(let he=0,ge=G.length;he<ge;he++){const fe=r.get(G[he]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),c.memory.textures--),r.remove(G[he])}r.remove(D)}let F=0;function $(){F=0}function K(){const D=F;return D>=o.maxTextures&&dt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),F+=1,D}function ae(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function q(D,E){const G=r.get(D);if(D.isVideoTexture&&yt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&G.__version!==D.version){const he=D.image;if(he===null)dt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)dt("WebGLRenderer: Texture marked for update but image is incomplete");else{Q(G,D,E);return}}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+E)}function ie(D,E){const G=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){Q(G,D,E);return}else D.isExternalTexture&&(G.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+E)}function W(D,E){const G=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&G.__version!==D.version){Q(G,D,E);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+E)}function J(D,E){const G=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&G.__version!==D.version){me(G,D,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+E)}const oe={[Ff]:s.REPEAT,[lr]:s.CLAMP_TO_EDGE,[Of]:s.MIRRORED_REPEAT},ce={[xn]:s.NEAREST,[S_]:s.NEAREST_MIPMAP_NEAREST,[Tl]:s.NEAREST_MIPMAP_LINEAR,[Cn]:s.LINEAR,[qc]:s.LINEAR_MIPMAP_NEAREST,[ms]:s.LINEAR_MIPMAP_LINEAR},U={[T_]:s.NEVER,[b_]:s.ALWAYS,[w_]:s.LESS,[Rd]:s.LEQUAL,[A_]:s.EQUAL,[bd]:s.GEQUAL,[C_]:s.GREATER,[R_]:s.NOTEQUAL};function Y(D,E){if(E.type===Oi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===qc||E.magFilter===Tl||E.magFilter===ms||E.minFilter===Cn||E.minFilter===qc||E.minFilter===Tl||E.minFilter===ms)&&dt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,oe[E.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,oe[E.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,oe[E.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ce[E.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ce[E.minFilter]),E.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===xn||E.minFilter!==Tl&&E.minFilter!==ms||E.type===Oi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ee(D,E){let G=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",O));const he=E.source;let ge=g.get(he);ge===void 0&&(ge={},g.set(he,ge));const fe=ae(E);if(fe!==D.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,G=!0),ge[fe].usedTimes++;const Oe=ge[D.__cacheKey];Oe!==void 0&&(ge[D.__cacheKey].usedTimes--,Oe.usedTimes===0&&P(E)),D.__cacheKey=fe,D.__webglTexture=ge[fe].texture}return G}function Re(D,E,G){return Math.floor(Math.floor(D/G)/E)}function Ze(D,E,G,he){const fe=D.updateRanges;if(fe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,G,he,E.data);else{fe.sort((xe,we)=>xe.start-we.start);let Oe=0;for(let xe=1;xe<fe.length;xe++){const we=fe[Oe],ze=fe[xe],Ge=we.start+we.count,Ne=Re(ze.start,E.width,4),ft=Re(we.start,E.width,4);ze.start<=Ge+1&&Ne===ft&&Re(ze.start+ze.count-1,E.width,4)===Ne?we.count=Math.max(we.count,ze.start+ze.count-we.start):(++Oe,fe[Oe]=ze)}fe.length=Oe+1;const Te=s.getParameter(s.UNPACK_ROW_LENGTH),Le=s.getParameter(s.UNPACK_SKIP_PIXELS),We=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let xe=0,we=fe.length;xe<we;xe++){const ze=fe[xe],Ge=Math.floor(ze.start/4),Ne=Math.ceil(ze.count/4),ft=Ge%E.width,V=Math.floor(Ge/E.width),Ce=Ne,ye=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ft),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,ft,V,Ce,ye,G,he,E.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,Le),s.pixelStorei(s.UNPACK_SKIP_ROWS,We)}}function Q(D,E,G){let he=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(he=s.TEXTURE_3D);const ge=Ee(D,E),fe=E.source;t.bindTexture(he,D.__webglTexture,s.TEXTURE0+G);const Oe=r.get(fe);if(fe.version!==Oe.__version||ge===!0){t.activeTexture(s.TEXTURE0+G);const Te=Lt.getPrimaries(Lt.workingColorSpace),Le=E.colorSpace===Hr?null:Lt.getPrimaries(E.colorSpace),We=E.colorSpace===Hr||Te===Le?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let xe=C(E.image,!1,o.maxTextureSize);xe=St(E,xe);const we=l.convert(E.format,E.colorSpace),ze=l.convert(E.type);let Ge=L(E.internalFormat,we,ze,E.colorSpace,E.isVideoTexture);Y(he,E);let Ne;const ft=E.mipmaps,V=E.isVideoTexture!==!0,Ce=Oe.__version===void 0||ge===!0,ye=fe.dataReady,be=k(E,xe);if(E.isDepthTexture)Ge=b(E.format===gs,E.type),Ce&&(V?t.texStorage2D(s.TEXTURE_2D,1,Ge,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,Ge,xe.width,xe.height,0,we,ze,null));else if(E.isDataTexture)if(ft.length>0){V&&Ce&&t.texStorage2D(s.TEXTURE_2D,be,Ge,ft[0].width,ft[0].height);for(let Se=0,de=ft.length;Se<de;Se++)Ne=ft[Se],V?ye&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,we,ze,Ne.data):t.texImage2D(s.TEXTURE_2D,Se,Ge,Ne.width,Ne.height,0,we,ze,Ne.data);E.generateMipmaps=!1}else V?(Ce&&t.texStorage2D(s.TEXTURE_2D,be,Ge,xe.width,xe.height),ye&&Ze(E,xe,we,ze)):t.texImage2D(s.TEXTURE_2D,0,Ge,xe.width,xe.height,0,we,ze,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Ge,ft[0].width,ft[0].height,xe.depth);for(let Se=0,de=ft.length;Se<de;Se++)if(Ne=ft[Se],E.format!==Ri)if(we!==null)if(V){if(ye)if(E.layerUpdates.size>0){const Xe=Ym(Ne.width,Ne.height,E.format,E.type);for(const at of E.layerUpdates){const Ut=Ne.data.subarray(at*Xe/Ne.data.BYTES_PER_ELEMENT,(at+1)*Xe/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,at,Ne.width,Ne.height,1,we,Ut)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ne.width,Ne.height,xe.depth,we,Ne.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Se,Ge,Ne.width,Ne.height,xe.depth,0,Ne.data,0,0);else dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?ye&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Se,0,0,0,Ne.width,Ne.height,xe.depth,we,ze,Ne.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Se,Ge,Ne.width,Ne.height,xe.depth,0,we,ze,Ne.data)}else{V&&Ce&&t.texStorage2D(s.TEXTURE_2D,be,Ge,ft[0].width,ft[0].height);for(let Se=0,de=ft.length;Se<de;Se++)Ne=ft[Se],E.format!==Ri?we!==null?V?ye&&t.compressedTexSubImage2D(s.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,we,Ne.data):t.compressedTexImage2D(s.TEXTURE_2D,Se,Ge,Ne.width,Ne.height,0,Ne.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?ye&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,Ne.width,Ne.height,we,ze,Ne.data):t.texImage2D(s.TEXTURE_2D,Se,Ge,Ne.width,Ne.height,0,we,ze,Ne.data)}else if(E.isDataArrayTexture)if(V){if(Ce&&t.texStorage3D(s.TEXTURE_2D_ARRAY,be,Ge,xe.width,xe.height,xe.depth),ye)if(E.layerUpdates.size>0){const Se=Ym(xe.width,xe.height,E.format,E.type);for(const de of E.layerUpdates){const Xe=xe.data.subarray(de*Se/xe.data.BYTES_PER_ELEMENT,(de+1)*Se/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,de,xe.width,xe.height,1,we,ze,Xe)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,we,ze,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ge,xe.width,xe.height,xe.depth,0,we,ze,xe.data);else if(E.isData3DTexture)V?(Ce&&t.texStorage3D(s.TEXTURE_3D,be,Ge,xe.width,xe.height,xe.depth),ye&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,we,ze,xe.data)):t.texImage3D(s.TEXTURE_3D,0,Ge,xe.width,xe.height,xe.depth,0,we,ze,xe.data);else if(E.isFramebufferTexture){if(Ce)if(V)t.texStorage2D(s.TEXTURE_2D,be,Ge,xe.width,xe.height);else{let Se=xe.width,de=xe.height;for(let Xe=0;Xe<be;Xe++)t.texImage2D(s.TEXTURE_2D,Xe,Ge,Se,de,0,we,ze,null),Se>>=1,de>>=1}}else if(ft.length>0){if(V&&Ce){const Se=Ye(ft[0]);t.texStorage2D(s.TEXTURE_2D,be,Ge,Se.width,Se.height)}for(let Se=0,de=ft.length;Se<de;Se++)Ne=ft[Se],V?ye&&t.texSubImage2D(s.TEXTURE_2D,Se,0,0,we,ze,Ne):t.texImage2D(s.TEXTURE_2D,Se,Ge,we,ze,Ne);E.generateMipmaps=!1}else if(V){if(Ce){const Se=Ye(xe);t.texStorage2D(s.TEXTURE_2D,be,Ge,Se.width,Se.height)}ye&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,we,ze,xe)}else t.texImage2D(s.TEXTURE_2D,0,Ge,we,ze,xe);_(E)&&y(he),Oe.__version=fe.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function me(D,E,G){if(E.image.length!==6)return;const he=Ee(D,E),ge=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+G);const fe=r.get(ge);if(ge.version!==fe.__version||he===!0){t.activeTexture(s.TEXTURE0+G);const Oe=Lt.getPrimaries(Lt.workingColorSpace),Te=E.colorSpace===Hr?null:Lt.getPrimaries(E.colorSpace),Le=E.colorSpace===Hr||Oe===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);const We=E.isCompressedTexture||E.image[0].isCompressedTexture,xe=E.image[0]&&E.image[0].isDataTexture,we=[];for(let de=0;de<6;de++)!We&&!xe?we[de]=C(E.image[de],!0,o.maxCubemapSize):we[de]=xe?E.image[de].image:E.image[de],we[de]=St(E,we[de]);const ze=we[0],Ge=l.convert(E.format,E.colorSpace),Ne=l.convert(E.type),ft=L(E.internalFormat,Ge,Ne,E.colorSpace),V=E.isVideoTexture!==!0,Ce=fe.__version===void 0||he===!0,ye=ge.dataReady;let be=k(E,ze);Y(s.TEXTURE_CUBE_MAP,E);let Se;if(We){V&&Ce&&t.texStorage2D(s.TEXTURE_CUBE_MAP,be,ft,ze.width,ze.height);for(let de=0;de<6;de++){Se=we[de].mipmaps;for(let Xe=0;Xe<Se.length;Xe++){const at=Se[Xe];E.format!==Ri?Ge!==null?V?ye&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe,0,0,at.width,at.height,Ge,at.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe,ft,at.width,at.height,0,at.data):dt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe,0,0,at.width,at.height,Ge,Ne,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe,ft,at.width,at.height,0,Ge,Ne,at.data)}}}else{if(Se=E.mipmaps,V&&Ce){Se.length>0&&be++;const de=Ye(we[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,be,ft,de.width,de.height)}for(let de=0;de<6;de++)if(xe){V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,we[de].width,we[de].height,Ge,Ne,we[de].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,we[de].width,we[de].height,0,Ge,Ne,we[de].data);for(let Xe=0;Xe<Se.length;Xe++){const Ut=Se[Xe].image[de].image;V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe+1,0,0,Ut.width,Ut.height,Ge,Ne,Ut.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe+1,ft,Ut.width,Ut.height,0,Ge,Ne,Ut.data)}}else{V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Ge,Ne,we[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ft,Ge,Ne,we[de]);for(let Xe=0;Xe<Se.length;Xe++){const at=Se[Xe];V?ye&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe+1,0,0,Ge,Ne,at.image[de]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+de,Xe+1,ft,Ge,Ne,at.image[de])}}}_(E)&&y(s.TEXTURE_CUBE_MAP),fe.__version=ge.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function pe(D,E,G,he,ge,fe){const Oe=l.convert(G.format,G.colorSpace),Te=l.convert(G.type),Le=L(G.internalFormat,Oe,Te,G.colorSpace),We=r.get(E),xe=r.get(G);if(xe.__renderTarget=E,!We.__hasExternalTextures){const we=Math.max(1,E.width>>fe),ze=Math.max(1,E.height>>fe);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,fe,Le,we,ze,E.depth,0,Oe,Te,null):t.texImage2D(ge,fe,Le,we,ze,0,Oe,Te,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Bt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,xe.__webglTexture,0,B(E)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,xe.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(D,E,G){if(s.bindRenderbuffer(s.RENDERBUFFER,D),E.depthBuffer){const he=E.depthTexture,ge=he&&he.isDepthTexture?he.type:null,fe=b(E.stencilBuffer,ge),Oe=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Bt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(E),fe,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(E),fe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,fe,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Oe,s.RENDERBUFFER,D)}else{const he=E.textures;for(let ge=0;ge<he.length;ge++){const fe=he[ge],Oe=l.convert(fe.format,fe.colorSpace),Te=l.convert(fe.type),Le=L(fe.internalFormat,Oe,Te,fe.colorSpace);Bt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,B(E),Le,E.width,E.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,B(E),Le,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Le,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function He(D,E,G){const he=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ge=r.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",O)),ge.__webglTexture===void 0){ge.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ge.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E.depthTexture);const We=l.convert(E.depthTexture.format),xe=l.convert(E.depthTexture.type);let we;E.depthTexture.format===dr?we=s.DEPTH_COMPONENT24:E.depthTexture.format===gs&&(we=s.DEPTH24_STENCIL8);for(let ze=0;ze<6;ze++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ze,0,we,E.width,E.height,0,We,xe,null)}}else q(E.depthTexture,0);const fe=ge.__webglTexture,Oe=B(E),Te=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,Le=E.depthTexture.format===gs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===dr)Bt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Le,Te,fe,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,Le,Te,fe,0);else if(E.depthTexture.format===gs)Bt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Le,Te,fe,0,Oe):s.framebufferTexture2D(s.FRAMEBUFFER,Le,Te,fe,0);else throw new Error("Unknown depthTexture format")}function it(D){const E=r.get(D),G=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),he){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=he}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(G)for(let he=0;he<6;he++)He(E.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?He(E.__webglFramebuffer[0],D,0):He(E.__webglFramebuffer,D,0)}else if(G){E.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[he]),E.__webglDepthbuffer[he]===void 0)E.__webglDepthbuffer[he]=s.createRenderbuffer(),Fe(E.__webglDepthbuffer[he],D,!1);else{const ge=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,fe)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Fe(E.__webglDepthbuffer,D,!1);else{const ge=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,fe)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function bt(D,E,G){const he=r.get(D);E!==void 0&&pe(he.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&it(D)}function ht(D){const E=D.texture,G=r.get(D),he=r.get(E);D.addEventListener("dispose",N);const ge=D.textures,fe=D.isWebGLCubeRenderTarget===!0,Oe=ge.length>1;if(Oe||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=E.version,c.memory.textures++),fe){G.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer[Te]=[];for(let Le=0;Le<E.mipmaps.length;Le++)G.__webglFramebuffer[Te][Le]=s.createFramebuffer()}else G.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){G.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)G.__webglFramebuffer[Te]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Oe)for(let Te=0,Le=ge.length;Te<Le;Te++){const We=r.get(ge[Te]);We.__webglTexture===void 0&&(We.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&Bt(D)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Te=0;Te<ge.length;Te++){const Le=ge[Te];G.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[Te]);const We=l.convert(Le.format,Le.colorSpace),xe=l.convert(Le.type),we=L(Le.internalFormat,We,xe,Le.colorSpace,D.isXRRenderTarget===!0),ze=B(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,ze,we,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,G.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(G.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),Y(s.TEXTURE_CUBE_MAP,E);for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0)for(let Le=0;Le<E.mipmaps.length;Le++)pe(G.__webglFramebuffer[Te][Le],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,Le);else pe(G.__webglFramebuffer[Te],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);_(E)&&y(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let Te=0,Le=ge.length;Te<Le;Te++){const We=ge[Te],xe=r.get(We);let we=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(we,xe.__webglTexture),Y(we,We),pe(G.__webglFramebuffer,D,We,s.COLOR_ATTACHMENT0+Te,we,0),_(We)&&y(we)}t.unbindTexture()}else{let Te=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,he.__webglTexture),Y(Te,E),E.mipmaps&&E.mipmaps.length>0)for(let Le=0;Le<E.mipmaps.length;Le++)pe(G.__webglFramebuffer[Le],D,E,s.COLOR_ATTACHMENT0,Te,Le);else pe(G.__webglFramebuffer,D,E,s.COLOR_ATTACHMENT0,Te,0);_(E)&&y(Te),t.unbindTexture()}D.depthBuffer&&it(D)}function gt(D){const E=D.textures;for(let G=0,he=E.length;G<he;G++){const ge=E[G];if(_(ge)){const fe=R(D),Oe=r.get(ge).__webglTexture;t.bindTexture(fe,Oe),y(fe),t.unbindTexture()}}}const Ct=[],pt=[];function Dt(D){if(D.samples>0){if(Bt(D)===!1){const E=D.textures,G=D.width,he=D.height;let ge=s.COLOR_BUFFER_BIT;const fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Oe=r.get(D),Te=E.length>1;if(Te)for(let We=0;We<E.length;We++)t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const Le=D.texture.mipmaps;Le&&Le.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let We=0;We<E.length;We++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[We]);const xe=r.get(E[We]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xe,0)}s.blitFramebuffer(0,0,G,he,0,0,G,he,ge,s.NEAREST),h===!0&&(Ct.length=0,pt.length=0,Ct.push(s.COLOR_ATTACHMENT0+We),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ct.push(fe),pt.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,pt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ct))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let We=0;We<E.length;We++){t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.RENDERBUFFER,Oe.__webglColorRenderbuffer[We]);const xe=r.get(E[We]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Oe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+We,s.TEXTURE_2D,xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const E=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function B(D){return Math.min(o.maxSamples,D.samples)}function Bt(D){const E=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function yt(D){const E=c.render.frame;v.get(D)!==E&&(v.set(D,E),D.update())}function St(D,E){const G=D.colorSpace,he=D.format,ge=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||G!==fo&&G!==Hr&&(Lt.getTransfer(G)===zt?(he!==Ri||ge!==ni)&&dt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",G)),E}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=K,this.resetTextureUnits=$,this.setTexture2D=q,this.setTexture2DArray=ie,this.setTexture3D=W,this.setTextureCube=J,this.rebindTextures=bt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=it,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function $1(s,e){function t(r,o=Hr){let l;const c=Lt.getTransfer(o);if(r===ni)return s.UNSIGNED_BYTE;if(r===Ed)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Td)return s.UNSIGNED_SHORT_5_5_5_1;if(r===bg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Pg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Cg)return s.BYTE;if(r===Rg)return s.SHORT;if(r===fa)return s.UNSIGNED_SHORT;if(r===Md)return s.INT;if(r===Hi)return s.UNSIGNED_INT;if(r===Oi)return s.FLOAT;if(r===fr)return s.HALF_FLOAT;if(r===Lg)return s.ALPHA;if(r===Dg)return s.RGB;if(r===Ri)return s.RGBA;if(r===dr)return s.DEPTH_COMPONENT;if(r===gs)return s.DEPTH_STENCIL;if(r===Ng)return s.RED;if(r===wd)return s.RED_INTEGER;if(r===co)return s.RG;if(r===Ad)return s.RG_INTEGER;if(r===Cd)return s.RGBA_INTEGER;if(r===Jl||r===Ql||r===eu||r===tu)if(c===zt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Jl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===eu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===tu)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Jl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===eu)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===tu)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===kf||r===Bf||r===zf||r===Vf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===kf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hf||r===Gf||r===Wf||r===Xf||r===qf||r===Yf||r===jf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Hf||r===Gf)return c===zt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Wf)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Xf)return l.COMPRESSED_R11_EAC;if(r===qf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Yf)return l.COMPRESSED_RG11_EAC;if(r===jf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===$f||r===Kf||r===Zf||r===Jf||r===Qf||r===ed||r===td||r===nd||r===id||r===rd||r===sd||r===od||r===ad||r===ld)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===$f)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Kf)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Zf)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jf)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qf)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ed)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===td)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===id)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sd)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===od)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ad)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ld)return c===zt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ud||r===cd||r===fd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===ud)return c===zt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===fd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dd||r===hd||r===pd||r===md)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===dd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===hd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===md)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===da?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const K1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z1=`
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

}`;class J1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Gg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Wi({vertexShader:K1,fragmentShader:Z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new mn(new au(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q1 extends mo{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,v=null,x=null,g=null,S=null,M=null;const C=typeof XRWebGLBinding<"u",_=new J1,y={},R=t.getContextAttributes();let L=null,b=null;const k=[],O=[],N=new nt;let T=null;const P=new hi;P.viewport=new en;const Z=new hi;Z.viewport=new en;const F=[P,Z],$=new fy;let K=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let me=k[Q];return me===void 0&&(me=new Jc,k[Q]=me),me.getTargetRaySpace()},this.getControllerGrip=function(Q){let me=k[Q];return me===void 0&&(me=new Jc,k[Q]=me),me.getGripSpace()},this.getHand=function(Q){let me=k[Q];return me===void 0&&(me=new Jc,k[Q]=me),me.getHandSpace()};function q(Q){const me=O.indexOf(Q.inputSource);if(me===-1)return;const pe=k[me];pe!==void 0&&(pe.update(Q.inputSource,Q.frame,p||c),pe.dispatchEvent({type:Q.type,data:Q.inputSource}))}function ie(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",ie),o.removeEventListener("inputsourceschange",W);for(let Q=0;Q<k.length;Q++){const me=O[Q];me!==null&&(O[Q]=null,k[Q].disconnect(me))}K=null,ae=null,_.reset();for(const Q in y)delete y[Q];e.setRenderTarget(L),S=null,g=null,x=null,o=null,b=null,Ze.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){l=Q,r.isPresenting===!0&&dt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){f=Q,r.isPresenting===!0&&dt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(Q){p=Q},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(Q){if(o=Q,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",ie),o.addEventListener("inputsourceschange",W),R.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(N),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Fe=null,He=null;R.depth&&(He=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=R.stencil?gs:dr,Fe=R.stencil?da:Hi);const it={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:l};x=this.getBinding(),g=x.createProjectionLayer(it),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),b=new zi(g.textureWidth,g.textureHeight,{format:Ri,type:ni,depthTexture:new ma(g.textureWidth,g.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const pe={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new zi(S.framebufferWidth,S.framebufferHeight,{format:Ri,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),Ze.setContext(o),Ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W(Q){for(let me=0;me<Q.removed.length;me++){const pe=Q.removed[me],Fe=O.indexOf(pe);Fe>=0&&(O[Fe]=null,k[Fe].disconnect(pe))}for(let me=0;me<Q.added.length;me++){const pe=Q.added[me];let Fe=O.indexOf(pe);if(Fe===-1){for(let it=0;it<k.length;it++)if(it>=O.length){O.push(pe),Fe=it;break}else if(O[it]===null){O[it]=pe,Fe=it;break}if(Fe===-1)break}const He=k[Fe];He&&He.connect(pe)}}const J=new j,oe=new j;function ce(Q,me,pe){J.setFromMatrixPosition(me.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);const Fe=J.distanceTo(oe),He=me.projectionMatrix.elements,it=pe.projectionMatrix.elements,bt=He[14]/(He[10]-1),ht=He[14]/(He[10]+1),gt=(He[9]+1)/He[5],Ct=(He[9]-1)/He[5],pt=(He[8]-1)/He[0],Dt=(it[8]+1)/it[0],B=bt*pt,Bt=bt*Dt,yt=Fe/(-pt+Dt),St=yt*-pt;if(me.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(St),Q.translateZ(yt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),He[10]===-1)Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse);else{const Ye=bt+yt,D=ht+yt,E=B-St,G=Bt+(Fe-St),he=gt*ht/D*Ye,ge=Ct*ht/D*Ye;Q.projectionMatrix.makePerspective(E,G,he,ge,Ye,D),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function U(Q,me){me===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(me.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(o===null)return;let me=Q.near,pe=Q.far;_.texture!==null&&(_.depthNear>0&&(me=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),$.near=Z.near=P.near=me,$.far=Z.far=P.far=pe,(K!==$.near||ae!==$.far)&&(o.updateRenderState({depthNear:$.near,depthFar:$.far}),K=$.near,ae=$.far),$.layers.mask=Q.layers.mask|6,P.layers.mask=$.layers.mask&-5,Z.layers.mask=$.layers.mask&-3;const Fe=Q.parent,He=$.cameras;U($,Fe);for(let it=0;it<He.length;it++)U(He[it],Fe);He.length===2?ce($,P,Z):$.projectionMatrix.copy(P.projectionMatrix),Y(Q,$,Fe)};function Y(Q,me,pe){pe===null?Q.matrix.copy(me.matrixWorld):(Q.matrix.copy(pe.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(me.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(me.projectionMatrix),Q.projectionMatrixInverse.copy(me.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=pa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return $},this.getFoveation=function(){if(!(g===null&&S===null))return h},this.setFoveation=function(Q){h=Q,g!==null&&(g.fixedFoveation=Q),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh($)},this.getCameraTexture=function(Q){return y[Q]};let Ee=null;function Re(Q,me){if(v=me.getViewerPose(p||c),M=me,v!==null){const pe=v.views;S!==null&&(e.setRenderTargetFramebuffer(b,S.framebuffer),e.setRenderTarget(b));let Fe=!1;pe.length!==$.cameras.length&&($.cameras.length=0,Fe=!0);for(let ht=0;ht<pe.length;ht++){const gt=pe[ht];let Ct=null;if(S!==null)Ct=S.getViewport(gt);else{const Dt=x.getViewSubImage(g,gt);Ct=Dt.viewport,ht===0&&(e.setRenderTargetTextures(b,Dt.colorTexture,Dt.depthStencilTexture),e.setRenderTarget(b))}let pt=F[ht];pt===void 0&&(pt=new hi,pt.layers.enable(ht),pt.viewport=new en,F[ht]=pt),pt.matrix.fromArray(gt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(gt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),ht===0&&($.matrix.copy(pt.matrix),$.matrix.decompose($.position,$.quaternion,$.scale)),Fe===!0&&$.cameras.push(pt)}const He=o.enabledFeatures;if(He&&He.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){x=r.getBinding();const ht=x.getDepthInformation(pe[0]);ht&&ht.isValid&&ht.texture&&_.init(ht,o.renderState)}if(He&&He.includes("camera-access")&&C){e.state.unbindTexture(),x=r.getBinding();for(let ht=0;ht<pe.length;ht++){const gt=pe[ht].camera;if(gt){let Ct=y[gt];Ct||(Ct=new Gg,y[gt]=Ct);const pt=x.getCameraImage(gt);Ct.sourceTexture=pt}}}}for(let pe=0;pe<k.length;pe++){const Fe=O[pe],He=k[pe];Fe!==null&&He!==void 0&&He.update(Fe,me,p||c)}Ee&&Ee(Q,me),me.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:me}),M=null}const Ze=new n0;Ze.setAnimationLoop(Re),this.setAnimationLoop=function(Q){Ee=Q},this.dispose=function(){}}}const fs=new Gi,eT=new Zt;function tT(s,e){function t(_,y){_.matrixAutoUpdate===!0&&_.updateMatrix(),y.value.copy(_.matrix)}function r(_,y){y.color.getRGB(_.fogColor.value,Qg(s)),y.isFog?(_.fogNear.value=y.near,_.fogFar.value=y.far):y.isFogExp2&&(_.fogDensity.value=y.density)}function o(_,y,R,L,b){y.isMeshBasicMaterial?l(_,y):y.isMeshLambertMaterial?(l(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(l(_,y),x(_,y)):y.isMeshPhongMaterial?(l(_,y),v(_,y),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(l(_,y),g(_,y),y.isMeshPhysicalMaterial&&S(_,y,b)):y.isMeshMatcapMaterial?(l(_,y),M(_,y)):y.isMeshDepthMaterial?l(_,y):y.isMeshDistanceMaterial?(l(_,y),C(_,y)):y.isMeshNormalMaterial?l(_,y):y.isLineBasicMaterial?(c(_,y),y.isLineDashedMaterial&&f(_,y)):y.isPointsMaterial?h(_,y,R,L):y.isSpriteMaterial?p(_,y):y.isShadowMaterial?(_.color.value.copy(y.color),_.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function l(_,y){_.opacity.value=y.opacity,y.color&&_.diffuse.value.copy(y.color),y.emissive&&_.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.bumpMap&&(_.bumpMap.value=y.bumpMap,t(y.bumpMap,_.bumpMapTransform),_.bumpScale.value=y.bumpScale,y.side===Yn&&(_.bumpScale.value*=-1)),y.normalMap&&(_.normalMap.value=y.normalMap,t(y.normalMap,_.normalMapTransform),_.normalScale.value.copy(y.normalScale),y.side===Yn&&_.normalScale.value.negate()),y.displacementMap&&(_.displacementMap.value=y.displacementMap,t(y.displacementMap,_.displacementMapTransform),_.displacementScale.value=y.displacementScale,_.displacementBias.value=y.displacementBias),y.emissiveMap&&(_.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,_.emissiveMapTransform)),y.specularMap&&(_.specularMap.value=y.specularMap,t(y.specularMap,_.specularMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest);const R=e.get(y),L=R.envMap,b=R.envMapRotation;L&&(_.envMap.value=L,fs.copy(b),fs.x*=-1,fs.y*=-1,fs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),_.envMapRotation.value.setFromMatrix4(eT.makeRotationFromEuler(fs)),_.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=y.reflectivity,_.ior.value=y.ior,_.refractionRatio.value=y.refractionRatio),y.lightMap&&(_.lightMap.value=y.lightMap,_.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,_.lightMapTransform)),y.aoMap&&(_.aoMap.value=y.aoMap,_.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,_.aoMapTransform))}function c(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform))}function f(_,y){_.dashSize.value=y.dashSize,_.totalSize.value=y.dashSize+y.gapSize,_.scale.value=y.scale}function h(_,y,R,L){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.size.value=y.size*R,_.scale.value=L*.5,y.map&&(_.map.value=y.map,t(y.map,_.uvTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function p(_,y){_.diffuse.value.copy(y.color),_.opacity.value=y.opacity,_.rotation.value=y.rotation,y.map&&(_.map.value=y.map,t(y.map,_.mapTransform)),y.alphaMap&&(_.alphaMap.value=y.alphaMap,t(y.alphaMap,_.alphaMapTransform)),y.alphaTest>0&&(_.alphaTest.value=y.alphaTest)}function v(_,y){_.specular.value.copy(y.specular),_.shininess.value=Math.max(y.shininess,1e-4)}function x(_,y){y.gradientMap&&(_.gradientMap.value=y.gradientMap)}function g(_,y){_.metalness.value=y.metalness,y.metalnessMap&&(_.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,_.metalnessMapTransform)),_.roughness.value=y.roughness,y.roughnessMap&&(_.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,_.roughnessMapTransform)),y.envMap&&(_.envMapIntensity.value=y.envMapIntensity)}function S(_,y,R){_.ior.value=y.ior,y.sheen>0&&(_.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),_.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(_.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,_.sheenColorMapTransform)),y.sheenRoughnessMap&&(_.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,_.sheenRoughnessMapTransform))),y.clearcoat>0&&(_.clearcoat.value=y.clearcoat,_.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(_.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,_.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(_.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Yn&&_.clearcoatNormalScale.value.negate())),y.dispersion>0&&(_.dispersion.value=y.dispersion),y.iridescence>0&&(_.iridescence.value=y.iridescence,_.iridescenceIOR.value=y.iridescenceIOR,_.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(_.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,_.iridescenceMapTransform)),y.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),y.transmission>0&&(_.transmission.value=y.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),y.transmissionMap&&(_.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,_.transmissionMapTransform)),_.thickness.value=y.thickness,y.thicknessMap&&(_.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=y.attenuationDistance,_.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(_.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(_.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=y.specularIntensity,_.specularColor.value.copy(y.specularColor),y.specularColorMap&&(_.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,_.specularColorMapTransform)),y.specularIntensityMap&&(_.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,_.specularIntensityMapTransform))}function M(_,y){y.matcap&&(_.matcap.value=y.matcap)}function C(_,y){const R=e.get(y).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function nT(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,L){const b=L.program;r.uniformBlockBinding(R,b)}function p(R,L){let b=o[R.id];b===void 0&&(M(R),b=v(R),o[R.id]=b,R.addEventListener("dispose",_));const k=L.program;r.updateUBOMapping(R,k);const O=e.render.frame;l[R.id]!==O&&(g(R),l[R.id]=O)}function v(R){const L=x();R.__bindingPointIndex=L;const b=s.createBuffer(),k=R.__size,O=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,k,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,b),b}function x(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const L=o[R.id],b=R.uniforms,k=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let O=0,N=b.length;O<N;O++){const T=Array.isArray(b[O])?b[O]:[b[O]];for(let P=0,Z=T.length;P<Z;P++){const F=T[P];if(S(F,O,P,k)===!0){const $=F.__offset,K=Array.isArray(F.value)?F.value:[F.value];let ae=0;for(let q=0;q<K.length;q++){const ie=K[q],W=C(ie);typeof ie=="number"||typeof ie=="boolean"?(F.__data[0]=ie,s.bufferSubData(s.UNIFORM_BUFFER,$+ae,F.__data)):ie.isMatrix3?(F.__data[0]=ie.elements[0],F.__data[1]=ie.elements[1],F.__data[2]=ie.elements[2],F.__data[3]=0,F.__data[4]=ie.elements[3],F.__data[5]=ie.elements[4],F.__data[6]=ie.elements[5],F.__data[7]=0,F.__data[8]=ie.elements[6],F.__data[9]=ie.elements[7],F.__data[10]=ie.elements[8],F.__data[11]=0):(ie.toArray(F.__data,ae),ae+=W.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,$,F.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(R,L,b,k){const O=R.value,N=L+"_"+b;if(k[N]===void 0)return typeof O=="number"||typeof O=="boolean"?k[N]=O:k[N]=O.clone(),!0;{const T=k[N];if(typeof O=="number"||typeof O=="boolean"){if(T!==O)return k[N]=O,!0}else if(T.equals(O)===!1)return T.copy(O),!0}return!1}function M(R){const L=R.uniforms;let b=0;const k=16;for(let N=0,T=L.length;N<T;N++){const P=Array.isArray(L[N])?L[N]:[L[N]];for(let Z=0,F=P.length;Z<F;Z++){const $=P[Z],K=Array.isArray($.value)?$.value:[$.value];for(let ae=0,q=K.length;ae<q;ae++){const ie=K[ae],W=C(ie),J=b%k,oe=J%W.boundary,ce=J+oe;b+=oe,ce!==0&&k-ce<W.storage&&(b+=k-ce),$.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=W.storage}}}const O=b%k;return O>0&&(b+=k-O),R.__size=b,R.__cache={},this}function C(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?dt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):dt("WebGLRenderer: Unsupported uniform value type.",R),L}function _(R){const L=R.target;L.removeEventListener("dispose",_);const b=c.indexOf(L.__bindingPointIndex);c.splice(b,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function y(){for(const R in o)s.deleteBuffer(o[R]);c=[],o={},l={}}return{bind:h,update:p,dispose:y}}const iT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ii=null;function rT(){return Ii===null&&(Ii=new vx(iT,16,16,co,fr),Ii.name="DFG_LUT",Ii.minFilter=Cn,Ii.magFilter=Cn,Ii.wrapS=lr,Ii.wrapT=lr,Ii.generateMipmaps=!1,Ii.needsUpdate=!0),Ii}class sT{constructor(e={}){const{canvas:t=L_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:g=!1,outputBufferType:S=ni}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const C=S,_=new Set([Cd,Ad,wd]),y=new Set([ni,Hi,fa,da,Ed,Td]),R=new Uint32Array(4),L=new Int32Array(4);let b=null,k=null;const O=[],N=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Bi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let Z=!1;this._outputColorSpace=di;let F=0,$=0,K=null,ae=-1,q=null;const ie=new en,W=new en;let J=null;const oe=new Ot(0);let ce=0,U=t.width,Y=t.height,Ee=1,Re=null,Ze=null;const Q=new en(0,0,U,Y),me=new en(0,0,U,Y);let pe=!1;const Fe=new Nd;let He=!1,it=!1;const bt=new Zt,ht=new j,gt=new en,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Dt(){return K===null?Ee:1}let B=r;function Bt(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sd}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Ut,!1),B===null){const X="webgl2";if(B=Bt(X,A),B===null)throw Bt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw It("WebGLRenderer: "+A.message),A}let yt,St,Ye,D,E,G,he,ge,fe,Oe,Te,Le,We,xe,we,ze,Ge,Ne,ft,V,Ce,ye,be;function Se(){yt=new sE(B),yt.init(),Ce=new $1(B,yt),St=new ZM(B,yt,e,Ce),Ye=new Y1(B,yt),St.reversedDepthBuffer&&g&&Ye.buffers.depth.setReversed(!0),D=new lE(B),E=new N1,G=new j1(B,yt,Ye,E,St,Ce,D),he=new rE(P),ge=new hy(B),ye=new $M(B,ge),fe=new oE(B,ge,D,ye),Oe=new cE(B,fe,ge,ye,D),Ne=new uE(B,St,G),we=new JM(E),Te=new D1(P,he,yt,St,ye,we),Le=new tT(P,E),We=new U1,xe=new V1(yt),Ge=new jM(P,he,Ye,Oe,M,h),ze=new q1(P,Oe,St),be=new nT(B,D,St,Ye),ft=new KM(B,yt,D),V=new aE(B,yt,D),D.programs=Te.programs,P.capabilities=St,P.extensions=yt,P.properties=E,P.renderLists=We,P.shadowMap=ze,P.state=Ye,P.info=D}Se(),C!==ni&&(T=new dE(C,t.width,t.height,o,l));const de=new Q1(P,B);this.xr=de,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const A=yt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=yt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(A){A!==void 0&&(Ee=A,this.setSize(U,Y,!1))},this.getSize=function(A){return A.set(U,Y)},this.setSize=function(A,X,le=!0){if(de.isPresenting){dt("WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,Y=X,t.width=Math.floor(A*Ee),t.height=Math.floor(X*Ee),le===!0&&(t.style.width=A+"px",t.style.height=X+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(U*Ee,Y*Ee).floor()},this.setDrawingBufferSize=function(A,X,le){U=A,Y=X,Ee=le,t.width=Math.floor(A*le),t.height=Math.floor(X*le),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(C===ni){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(ie)},this.getViewport=function(A){return A.copy(Q)},this.setViewport=function(A,X,le,re){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,X,le,re),Ye.viewport(ie.copy(Q).multiplyScalar(Ee).round())},this.getScissor=function(A){return A.copy(me)},this.setScissor=function(A,X,le,re){A.isVector4?me.set(A.x,A.y,A.z,A.w):me.set(A,X,le,re),Ye.scissor(W.copy(me).multiplyScalar(Ee).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(A){Ye.setScissorTest(pe=A)},this.setOpaqueSort=function(A){Re=A},this.setTransparentSort=function(A){Ze=A},this.getClearColor=function(A){return A.copy(Ge.getClearColor())},this.setClearColor=function(){Ge.setClearColor(...arguments)},this.getClearAlpha=function(){return Ge.getClearAlpha()},this.setClearAlpha=function(){Ge.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,le=!0){let re=0;if(A){let ne=!1;if(K!==null){const Ie=K.texture.format;ne=_.has(Ie)}if(ne){const Ie=K.texture.type,Ve=y.has(Ie),De=Ge.getClearColor(),ke=Ge.getClearAlpha(),et=De.r,rt=De.g,vt=De.b;Ve?(R[0]=et,R[1]=rt,R[2]=vt,R[3]=ke,B.clearBufferuiv(B.COLOR,0,R)):(L[0]=et,L[1]=rt,L[2]=vt,L[3]=ke,B.clearBufferiv(B.COLOR,0,L))}else re|=B.COLOR_BUFFER_BIT}X&&(re|=B.DEPTH_BUFFER_BIT),le&&(re|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&B.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Ut,!1),Ge.dispose(),We.dispose(),xe.dispose(),E.dispose(),he.dispose(),Oe.dispose(),ye.dispose(),be.dispose(),Te.dispose(),de.dispose(),de.removeEventListener("sessionstart",Wt),de.removeEventListener("sessionend",Pn),Jt.stop()};function Xe(A){A.preventDefault(),ym("WebGLRenderer: Context Lost."),Z=!0}function at(){ym("WebGLRenderer: Context Restored."),Z=!1;const A=D.autoReset,X=ze.enabled,le=ze.autoUpdate,re=ze.needsUpdate,ne=ze.type;Se(),D.autoReset=A,ze.enabled=X,ze.autoUpdate=le,ze.needsUpdate=re,ze.type=ne}function Ut(A){It("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Tt(A){const X=A.target;X.removeEventListener("dispose",Tt),bn(X)}function bn(A){te(A),E.remove(A)}function te(A){const X=E.get(A).programs;X!==void 0&&(X.forEach(function(le){Te.releaseProgram(le)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,le,re,ne,Ie){X===null&&(X=Ct);const Ve=ne.isMesh&&ne.matrixWorld.determinant()<0,De=Xr(A,X,le,re,ne);Ye.setMaterial(re,Ve);let ke=le.index,et=1;if(re.wireframe===!0){if(ke=fe.getWireframeAttribute(le),ke===void 0)return;et=2}const rt=le.drawRange,vt=le.attributes.position;let tt=rt.start*et,kt=(rt.start+rt.count)*et;Ie!==null&&(tt=Math.max(tt,Ie.start*et),kt=Math.min(kt,(Ie.start+Ie.count)*et)),ke!==null?(tt=Math.max(tt,0),kt=Math.min(kt,ke.count)):vt!=null&&(tt=Math.max(tt,0),kt=Math.min(kt,vt.count));const Ht=kt-tt;if(Ht<0||Ht===1/0)return;ye.setup(ne,re,De,le,ke);let Vt,Rt=ft;if(ke!==null&&(Vt=ge.get(ke),Rt=V,Rt.setIndex(Vt)),ne.isMesh)re.wireframe===!0?(Ye.setLineWidth(re.wireframeLinewidth*Dt()),Rt.setMode(B.LINES)):Rt.setMode(B.TRIANGLES);else if(ne.isLine){let tn=re.linewidth;tn===void 0&&(tn=1),Ye.setLineWidth(tn*Dt()),ne.isLineSegments?Rt.setMode(B.LINES):ne.isLineLoop?Rt.setMode(B.LINE_LOOP):Rt.setMode(B.LINE_STRIP)}else ne.isPoints?Rt.setMode(B.POINTS):ne.isSprite&&Rt.setMode(B.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)su("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Rt.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const tn=ne._multiDrawStarts,Je=ne._multiDrawCounts,Dn=ne._multiDrawCount,wt=ke?ge.get(ke).bytesPerElement:1,Bn=E.get(re).currentProgram.getUniforms();for(let zn=0;zn<Dn;zn++)Bn.setValue(B,"_gl_DrawID",zn),Rt.render(tn[zn]/wt,Je[zn])}else if(ne.isInstancedMesh)Rt.renderInstances(tt,Ht,ne.count);else if(le.isInstancedBufferGeometry){const tn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Je=Math.min(le.instanceCount,tn);Rt.renderInstances(tt,Ht,Je)}else Rt.render(tt,Ht)};function je(A,X,le){A.transparent===!0&&A.side===Fi&&A.forceSinglePass===!1?(A.side=Yn,A.needsUpdate=!0,gi(A,X,le),A.side=Wr,A.needsUpdate=!0,gi(A,X,le),A.side=Fi):gi(A,X,le)}this.compile=function(A,X,le=null){le===null&&(le=A),k=xe.get(le),k.init(X),N.push(k),le.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(k.pushLight(ne),ne.castShadow&&k.pushShadow(ne))}),A!==le&&A.traverseVisible(function(ne){ne.isLight&&ne.layers.test(X.layers)&&(k.pushLight(ne),ne.castShadow&&k.pushShadow(ne))}),k.setupLights();const re=new Set;return A.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ie=ne.material;if(Ie)if(Array.isArray(Ie))for(let Ve=0;Ve<Ie.length;Ve++){const De=Ie[Ve];je(De,le,ne),re.add(De)}else je(Ie,le,ne),re.add(Ie)}),k=N.pop(),re},this.compileAsync=function(A,X,le=null){const re=this.compile(A,X,le);return new Promise(ne=>{function Ie(){if(re.forEach(function(Ve){E.get(Ve).currentProgram.isReady()&&re.delete(Ve)}),re.size===0){ne(A);return}setTimeout(Ie,10)}yt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let lt=null;function mt(A){lt&&lt(A)}function Wt(){Jt.stop()}function Pn(){Jt.start()}const Jt=new n0;Jt.setAnimationLoop(mt),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(A){lt=A,de.setAnimationLoop(A),A===null?Jt.stop():Jt.start()},de.addEventListener("sessionstart",Wt),de.addEventListener("sessionend",Pn),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;const le=de.enabled===!0&&de.isPresenting===!0,re=T!==null&&(K===null||le)&&T.begin(P,K);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(X),X=de.getCamera()),A.isScene===!0&&A.onBeforeRender(P,A,X,K),k=xe.get(A,N.length),k.init(X),N.push(k),bt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Fe.setFromProjectionMatrix(bt,ki,X.reversedDepth),it=this.localClippingEnabled,He=we.init(this.clippingPlanes,it),b=We.get(A,O.length),b.init(),O.push(b),de.enabled===!0&&de.isPresenting===!0){const Ve=P.xr.getDepthSensingMesh();Ve!==null&&kn(Ve,X,-1/0,P.sortObjects)}kn(A,X,0,P.sortObjects),b.finish(),P.sortObjects===!0&&b.sort(Re,Ze),pt=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,pt&&Ge.addToRenderList(b,A),this.info.render.frame++,He===!0&&we.beginShadows();const ne=k.state.shadowsArray;if(ze.render(ne,A,X),He===!0&&we.endShadows(),this.info.autoReset===!0&&this.info.reset(),(re&&T.hasRenderPass())===!1){const Ve=b.opaque,De=b.transmissive;if(k.setupLights(),X.isArrayCamera){const ke=X.cameras;if(De.length>0)for(let et=0,rt=ke.length;et<rt;et++){const vt=ke[et];jn(Ve,De,A,vt)}pt&&Ge.render(A);for(let et=0,rt=ke.length;et<rt;et++){const vt=ke[et];mi(b,A,vt,vt.viewport)}}else De.length>0&&jn(Ve,De,A,X),pt&&Ge.render(A),mi(b,A,X)}K!==null&&$===0&&(G.updateMultisampleRenderTarget(K),G.updateRenderTargetMipmap(K)),re&&T.end(P),A.isScene===!0&&A.onAfterRender(P,A,X),ye.resetDefaultState(),ae=-1,q=null,N.pop(),N.length>0?(k=N[N.length-1],He===!0&&we.setGlobalState(P.clippingPlanes,k.state.camera)):k=null,O.pop(),O.length>0?b=O[O.length-1]:b=null};function kn(A,X,le,re){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)le=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)k.pushLight(A),A.castShadow&&k.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Fe.intersectsSprite(A)){re&&gt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(bt);const Ve=Oe.update(A),De=A.material;De.visible&&b.push(A,Ve,De,le,gt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Fe.intersectsObject(A))){const Ve=Oe.update(A),De=A.material;if(re&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),gt.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),gt.copy(Ve.boundingSphere.center)),gt.applyMatrix4(A.matrixWorld).applyMatrix4(bt)),Array.isArray(De)){const ke=Ve.groups;for(let et=0,rt=ke.length;et<rt;et++){const vt=ke[et],tt=De[vt.materialIndex];tt&&tt.visible&&b.push(A,Ve,tt,le,gt.z,vt)}}else De.visible&&b.push(A,Ve,De,le,gt.z,null)}}const Ie=A.children;for(let Ve=0,De=Ie.length;Ve<De;Ve++)kn(Ie[Ve],X,le,re)}function mi(A,X,le,re){const{opaque:ne,transmissive:Ie,transparent:Ve}=A;k.setupLightsView(le),He===!0&&we.setGlobalState(P.clippingPlanes,le),re&&Ye.viewport(ie.copy(re)),ne.length>0&&ii(ne,X,le),Ie.length>0&&ii(Ie,X,le),Ve.length>0&&ii(Ve,X,le),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function jn(A,X,le,re){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[re.id]===void 0){const tt=yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[re.id]=new zi(1,1,{generateMipmaps:!0,type:tt?fr:ni,minFilter:ms,samples:St.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Ie=k.state.transmissionRenderTarget[re.id],Ve=re.viewport||ie;Ie.setSize(Ve.z*P.transmissionResolutionScale,Ve.w*P.transmissionResolutionScale);const De=P.getRenderTarget(),ke=P.getActiveCubeFace(),et=P.getActiveMipmapLevel();P.setRenderTarget(Ie),P.getClearColor(oe),ce=P.getClearAlpha(),ce<1&&P.setClearColor(16777215,.5),P.clear(),pt&&Ge.render(le);const rt=P.toneMapping;P.toneMapping=Bi;const vt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),k.setupLightsView(re),He===!0&&we.setGlobalState(P.clippingPlanes,re),ii(A,le,re),G.updateMultisampleRenderTarget(Ie),G.updateRenderTargetMipmap(Ie),yt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let kt=0,Ht=X.length;kt<Ht;kt++){const Vt=X[kt],{object:Rt,geometry:tn,material:Je,group:Dn}=Vt;if(Je.side===Fi&&Rt.layers.test(re.layers)){const wt=Je.side;Je.side=Yn,Je.needsUpdate=!0,Ln(Rt,le,re,tn,Je,Dn),Je.side=wt,Je.needsUpdate=!0,tt=!0}}tt===!0&&(G.updateMultisampleRenderTarget(Ie),G.updateRenderTargetMipmap(Ie))}P.setRenderTarget(De,ke,et),P.setClearColor(oe,ce),vt!==void 0&&(re.viewport=vt),P.toneMapping=rt}function ii(A,X,le){const re=X.isScene===!0?X.overrideMaterial:null;for(let ne=0,Ie=A.length;ne<Ie;ne++){const Ve=A[ne],{object:De,geometry:ke,group:et}=Ve;let rt=Ve.material;rt.allowOverride===!0&&re!==null&&(rt=re),De.layers.test(le.layers)&&Ln(De,X,le,ke,rt,et)}}function Ln(A,X,le,re,ne,Ie){A.onBeforeRender(P,X,le,re,ne,Ie),A.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ne.onBeforeRender(P,X,le,re,A,Ie),ne.transparent===!0&&ne.side===Fi&&ne.forceSinglePass===!1?(ne.side=Yn,ne.needsUpdate=!0,P.renderBufferDirect(le,X,re,ne,A,Ie),ne.side=Wr,ne.needsUpdate=!0,P.renderBufferDirect(le,X,re,ne,A,Ie),ne.side=Fi):P.renderBufferDirect(le,X,re,ne,A,Ie),A.onAfterRender(P,X,le,re,ne,Ie)}function gi(A,X,le){X.isScene!==!0&&(X=Ct);const re=E.get(A),ne=k.state.lights,Ie=k.state.shadowsArray,Ve=ne.state.version,De=Te.getParameters(A,ne.state,Ie,X,le),ke=Te.getProgramCacheKey(De);let et=re.programs;re.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,re.fog=X.fog;const rt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;re.envMap=he.get(A.envMap||re.environment,rt),re.envMapRotation=re.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,et===void 0&&(A.addEventListener("dispose",Tt),et=new Map,re.programs=et);let vt=et.get(ke);if(vt!==void 0){if(re.currentProgram===vt&&re.lightsStateVersion===Ve)return hr(A,De),vt}else De.uniforms=Te.getUniforms(A),A.onBeforeCompile(De,P),vt=Te.acquireProgram(De,ke),et.set(ke,vt),re.uniforms=De.uniforms;const tt=re.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(tt.clippingPlanes=we.uniform),hr(A,De),re.needsLights=Yr(A),re.lightsStateVersion=Ve,re.needsLights&&(tt.ambientLightColor.value=ne.state.ambient,tt.lightProbe.value=ne.state.probe,tt.directionalLights.value=ne.state.directional,tt.directionalLightShadows.value=ne.state.directionalShadow,tt.spotLights.value=ne.state.spot,tt.spotLightShadows.value=ne.state.spotShadow,tt.rectAreaLights.value=ne.state.rectArea,tt.ltc_1.value=ne.state.rectAreaLTC1,tt.ltc_2.value=ne.state.rectAreaLTC2,tt.pointLights.value=ne.state.point,tt.pointLightShadows.value=ne.state.pointShadow,tt.hemisphereLights.value=ne.state.hemi,tt.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,tt.spotLightMatrix.value=ne.state.spotLightMatrix,tt.spotLightMap.value=ne.state.spotLightMap,tt.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.currentProgram=vt,re.uniformsList=null,vt}function qi(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=nu.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function hr(A,X){const le=E.get(A);le.outputColorSpace=X.outputColorSpace,le.batching=X.batching,le.batchingColor=X.batchingColor,le.instancing=X.instancing,le.instancingColor=X.instancingColor,le.instancingMorph=X.instancingMorph,le.skinning=X.skinning,le.morphTargets=X.morphTargets,le.morphNormals=X.morphNormals,le.morphColors=X.morphColors,le.morphTargetsCount=X.morphTargetsCount,le.numClippingPlanes=X.numClippingPlanes,le.numIntersection=X.numClipIntersection,le.vertexAlphas=X.vertexAlphas,le.vertexTangents=X.vertexTangents,le.toneMapping=X.toneMapping}function Xr(A,X,le,re,ne){X.isScene!==!0&&(X=Ct),G.resetTextureUnits();const Ie=X.fog,Ve=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?X.environment:null,De=K===null?P.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:fo,ke=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,et=he.get(re.envMap||Ve,ke),rt=re.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,vt=!!le.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),tt=!!le.morphAttributes.position,kt=!!le.morphAttributes.normal,Ht=!!le.morphAttributes.color;let Vt=Bi;re.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Vt=P.toneMapping);const Rt=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,tn=Rt!==void 0?Rt.length:0,Je=E.get(re),Dn=k.state.lights;if(He===!0&&(it===!0||A!==q)){const nn=A===q&&re.id===ae;we.setState(re,A,nn)}let wt=!1;re.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Dn.state.version||Je.outputColorSpace!==De||ne.isBatchedMesh&&Je.batching===!1||!ne.isBatchedMesh&&Je.batching===!0||ne.isBatchedMesh&&Je.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&Je.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&Je.instancing===!1||!ne.isInstancedMesh&&Je.instancing===!0||ne.isSkinnedMesh&&Je.skinning===!1||!ne.isSkinnedMesh&&Je.skinning===!0||ne.isInstancedMesh&&Je.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&Je.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&Je.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&Je.instancingMorph===!1&&ne.morphTexture!==null||Je.envMap!==et||re.fog===!0&&Je.fog!==Ie||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==we.numPlanes||Je.numIntersection!==we.numIntersection)||Je.vertexAlphas!==rt||Je.vertexTangents!==vt||Je.morphTargets!==tt||Je.morphNormals!==kt||Je.morphColors!==Ht||Je.toneMapping!==Vt||Je.morphTargetsCount!==tn)&&(wt=!0):(wt=!0,Je.__version=re.version);let Bn=Je.currentProgram;wt===!0&&(Bn=gi(re,X,ne));let zn=!1,$n=!1,mr=!1;const Ft=Bn.getUniforms(),ut=Je.uniforms;if(Ye.useProgram(Bn.program)&&(zn=!0,$n=!0,mr=!0),re.id!==ae&&(ae=re.id,$n=!0),zn||q!==A){Ye.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ft.setValue(B,"projectionMatrix",A.projectionMatrix),Ft.setValue(B,"viewMatrix",A.matrixWorldInverse);const ri=Ft.map.cameraPosition;ri!==void 0&&ri.setValue(B,ht.setFromMatrixPosition(A.matrixWorld)),St.logarithmicDepthBuffer&&Ft.setValue(B,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Ft.setValue(B,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,$n=!0,mr=!0)}if(Je.needsLights&&(Dn.state.directionalShadowMap.length>0&&Ft.setValue(B,"directionalShadowMap",Dn.state.directionalShadowMap,G),Dn.state.spotShadowMap.length>0&&Ft.setValue(B,"spotShadowMap",Dn.state.spotShadowMap,G),Dn.state.pointShadowMap.length>0&&Ft.setValue(B,"pointShadowMap",Dn.state.pointShadowMap,G)),ne.isSkinnedMesh){Ft.setOptional(B,ne,"bindMatrix"),Ft.setOptional(B,ne,"bindMatrixInverse");const nn=ne.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),Ft.setValue(B,"boneTexture",nn.boneTexture,G))}ne.isBatchedMesh&&(Ft.setOptional(B,ne,"batchingTexture"),Ft.setValue(B,"batchingTexture",ne._matricesTexture,G),Ft.setOptional(B,ne,"batchingIdTexture"),Ft.setValue(B,"batchingIdTexture",ne._indirectTexture,G),Ft.setOptional(B,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Ft.setValue(B,"batchingColorTexture",ne._colorsTexture,G));const vi=le.morphAttributes;if((vi.position!==void 0||vi.normal!==void 0||vi.color!==void 0)&&Ne.update(ne,le,Bn),($n||Je.receiveShadow!==ne.receiveShadow)&&(Je.receiveShadow=ne.receiveShadow,Ft.setValue(B,"receiveShadow",ne.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&X.environment!==null&&(ut.envMapIntensity.value=X.environmentIntensity),ut.dfgLUT!==void 0&&(ut.dfgLUT.value=rT()),$n&&(Ft.setValue(B,"toneMappingExposure",P.toneMappingExposure),Je.needsLights&&qr(ut,mr),Ie&&re.fog===!0&&Le.refreshFogUniforms(ut,Ie),Le.refreshMaterialUniforms(ut,re,Ee,Y,k.state.transmissionRenderTarget[A.id]),nu.upload(B,qi(Je),ut,G)),re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(nu.upload(B,qi(Je),ut,G),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Ft.setValue(B,"center",ne.center),Ft.setValue(B,"modelViewMatrix",ne.modelViewMatrix),Ft.setValue(B,"normalMatrix",ne.normalMatrix),Ft.setValue(B,"modelMatrix",ne.matrixWorld),re.isShaderMaterial||re.isRawShaderMaterial){const nn=re.uniformsGroups;for(let ri=0,Yi=nn.length;ri<Yi;ri++){const _o=nn[ri];be.update(_o,Bn),be.bind(_o,Bn)}}return Bn}function qr(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Yr(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return K},this.setRenderTargetTextures=function(A,X,le){const re=E.get(A);re.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=X,E.get(A.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:le,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const le=E.get(A);le.__webglFramebuffer=X,le.__useDefaultFramebuffer=X===void 0};const pr=B.createFramebuffer();this.setRenderTarget=function(A,X=0,le=0){K=A,F=X,$=le;let re=null,ne=!1,Ie=!1;if(A){const De=E.get(A);if(De.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(B.FRAMEBUFFER,De.__webglFramebuffer),ie.copy(A.viewport),W.copy(A.scissor),J=A.scissorTest,Ye.viewport(ie),Ye.scissor(W),Ye.setScissorTest(J),ae=-1;return}else if(De.__webglFramebuffer===void 0)G.setupRenderTarget(A);else if(De.__hasExternalTextures)G.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const rt=A.depthTexture;if(De.__boundDepthTexture!==rt){if(rt!==null&&E.has(rt)&&(A.width!==rt.image.width||A.height!==rt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");G.setupDepthRenderbuffer(A)}}const ke=A.texture;(ke.isData3DTexture||ke.isDataArrayTexture||ke.isCompressedArrayTexture)&&(Ie=!0);const et=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(et[X])?re=et[X][le]:re=et[X],ne=!0):A.samples>0&&G.useMultisampledRTT(A)===!1?re=E.get(A).__webglMultisampledFramebuffer:Array.isArray(et)?re=et[le]:re=et,ie.copy(A.viewport),W.copy(A.scissor),J=A.scissorTest}else ie.copy(Q).multiplyScalar(Ee).floor(),W.copy(me).multiplyScalar(Ee).floor(),J=pe;if(le!==0&&(re=pr),Ye.bindFramebuffer(B.FRAMEBUFFER,re)&&Ye.drawBuffers(A,re),Ye.viewport(ie),Ye.scissor(W),Ye.setScissorTest(J),ne){const De=E.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,De.__webglTexture,le)}else if(Ie){const De=X;for(let ke=0;ke<A.textures.length;ke++){const et=E.get(A.textures[ke]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ke,et.__webglTexture,le,De)}}else if(A!==null&&le!==0){const De=E.get(A.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,De.__webglTexture,le)}ae=-1},this.readRenderTargetPixels=function(A,X,le,re,ne,Ie,Ve,De=0){if(!(A&&A.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ke=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(ke=ke[Ve]),ke){Ye.bindFramebuffer(B.FRAMEBUFFER,ke);try{const et=A.textures[De],rt=et.format,vt=et.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+De),!St.textureFormatReadable(rt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!St.textureTypeReadable(vt)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-re&&le>=0&&le<=A.height-ne&&B.readPixels(X,le,re,ne,Ce.convert(rt),Ce.convert(vt),Ie)}finally{const et=K!==null?E.get(K).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(A,X,le,re,ne,Ie,Ve,De=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ke=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(ke=ke[Ve]),ke)if(X>=0&&X<=A.width-re&&le>=0&&le<=A.height-ne){Ye.bindFramebuffer(B.FRAMEBUFFER,ke);const et=A.textures[De],rt=et.format,vt=et.type;if(A.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+De),!St.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!St.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,tt),B.bufferData(B.PIXEL_PACK_BUFFER,Ie.byteLength,B.STREAM_READ),B.readPixels(X,le,re,ne,Ce.convert(rt),Ce.convert(vt),0);const kt=K!==null?E.get(K).__webglFramebuffer:null;Ye.bindFramebuffer(B.FRAMEBUFFER,kt);const Ht=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await D_(B,Ht,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,tt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ie),B.deleteBuffer(tt),B.deleteSync(Ht),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,le=0){const re=Math.pow(2,-le),ne=Math.floor(A.image.width*re),Ie=Math.floor(A.image.height*re),Ve=X!==null?X.x:0,De=X!==null?X.y:0;G.setTexture2D(A,0),B.copyTexSubImage2D(B.TEXTURE_2D,le,0,0,Ve,De,ne,Ie),Ye.unbindTexture()};const ys=B.createFramebuffer(),Ss=B.createFramebuffer();this.copyTextureToTexture=function(A,X,le=null,re=null,ne=0,Ie=0){let Ve,De,ke,et,rt,vt,tt,kt,Ht;const Vt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(le!==null)Ve=le.max.x-le.min.x,De=le.max.y-le.min.y,ke=le.isBox3?le.max.z-le.min.z:1,et=le.min.x,rt=le.min.y,vt=le.isBox3?le.min.z:0;else{const ut=Math.pow(2,-ne);Ve=Math.floor(Vt.width*ut),De=Math.floor(Vt.height*ut),A.isDataArrayTexture?ke=Vt.depth:A.isData3DTexture?ke=Math.floor(Vt.depth*ut):ke=1,et=0,rt=0,vt=0}re!==null?(tt=re.x,kt=re.y,Ht=re.z):(tt=0,kt=0,Ht=0);const Rt=Ce.convert(X.format),tn=Ce.convert(X.type);let Je;X.isData3DTexture?(G.setTexture3D(X,0),Je=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(G.setTexture2DArray(X,0),Je=B.TEXTURE_2D_ARRAY):(G.setTexture2D(X,0),Je=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const Dn=B.getParameter(B.UNPACK_ROW_LENGTH),wt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),Bn=B.getParameter(B.UNPACK_SKIP_PIXELS),zn=B.getParameter(B.UNPACK_SKIP_ROWS),$n=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Vt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Vt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,et),B.pixelStorei(B.UNPACK_SKIP_ROWS,rt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,vt);const mr=A.isDataArrayTexture||A.isData3DTexture,Ft=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const ut=E.get(A),vi=E.get(X),nn=E.get(ut.__renderTarget),ri=E.get(vi.__renderTarget);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,nn.__webglFramebuffer),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let Yi=0;Yi<ke;Yi++)mr&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,E.get(A).__webglTexture,ne,vt+Yi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,E.get(X).__webglTexture,Ie,Ht+Yi)),B.blitFramebuffer(et,rt,Ve,De,tt,kt,Ve,De,B.DEPTH_BUFFER_BIT,B.NEAREST);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(ne!==0||A.isRenderTargetTexture||E.has(A)){const ut=E.get(A),vi=E.get(X);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,ys),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,Ss);for(let nn=0;nn<ke;nn++)mr?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ut.__webglTexture,ne,vt+nn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,ut.__webglTexture,ne),Ft?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vi.__webglTexture,Ie,Ht+nn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,vi.__webglTexture,Ie),ne!==0?B.blitFramebuffer(et,rt,Ve,De,tt,kt,Ve,De,B.COLOR_BUFFER_BIT,B.NEAREST):Ft?B.copyTexSubImage3D(Je,Ie,tt,kt,Ht+nn,et,rt,Ve,De):B.copyTexSubImage2D(Je,Ie,tt,kt,et,rt,Ve,De);Ye.bindFramebuffer(B.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else Ft?A.isDataTexture||A.isData3DTexture?B.texSubImage3D(Je,Ie,tt,kt,Ht,Ve,De,ke,Rt,tn,Vt.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Je,Ie,tt,kt,Ht,Ve,De,ke,Rt,Vt.data):B.texSubImage3D(Je,Ie,tt,kt,Ht,Ve,De,ke,Rt,tn,Vt):A.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ie,tt,kt,Ve,De,Rt,tn,Vt.data):A.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ie,tt,kt,Vt.width,Vt.height,Rt,Vt.data):B.texSubImage2D(B.TEXTURE_2D,Ie,tt,kt,Ve,De,Rt,tn,Vt);B.pixelStorei(B.UNPACK_ROW_LENGTH,Dn),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,wt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Bn),B.pixelStorei(B.UNPACK_SKIP_ROWS,zn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,$n),Ie===0&&X.generateMipmaps&&B.generateMipmap(Je),Ye.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&G.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?G.setTextureCube(A,0):A.isData3DTexture?G.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?G.setTexture2DArray(A,0):G.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){F=0,$=0,K=null,Ye.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}const oT=1e10,aT=1e3;function $l(s,e){const t=s.map(r=>`"${r}"`).join(", ");return new Error(`This RPC instance cannot ${e} because the transport did not provide one or more of these methods: ${t}`)}function lT(s={}){let e={},t={},r;function o(N){var T;t.unregisterHandler&&t.unregisterHandler(),t=N,(T=t.registerHandler)==null||T.call(t,k)}function l(N){if(typeof N=="function"){r=N;return}r=(T,P)=>{const Z=N[T];if(Z)return Z(P);const F=N._;if(!F)throw new Error(`The requested method has no handler: ${String(T)}`);return F(T,P)}}const{maxRequestTime:c=aT}=s;s.transport&&o(s.transport),s.requestHandler&&l(s.requestHandler),s._debugHooks&&(e=s._debugHooks);let f=0;function h(){return f<=oT?++f:f=0}const p=new Map,v=new Map;function x(N,...T){const P=T[0];return new Promise((Z,F)=>{var ae;if(!t.send)throw $l(["send"],"make requests");const $=h(),K={type:"request",id:$,method:N,params:P};p.set($,{resolve:Z,reject:F}),c!==1/0&&v.set($,setTimeout(()=>{v.delete($),F(new Error("RPC request timed out."))},c)),(ae=e.onSend)==null||ae.call(e,K),t.send(K)})}const g=new Proxy(x,{get:(N,T,P)=>T in N?Reflect.get(N,T,P):Z=>x(T,Z)}),S=g;function M(N,...T){var F;const P=T[0];if(!t.send)throw $l(["send"],"send messages");const Z={type:"message",id:N,payload:P};(F=e.onSend)==null||F.call(e,Z),t.send(Z)}const C=new Proxy(M,{get:(N,T,P)=>T in N?Reflect.get(N,T,P):Z=>M(T,Z)}),_=C,y=new Map,R=new Set;function L(N,T){if(!t.registerHandler)throw $l(["registerHandler"],"register message listeners");if(N==="*"){R.add(T);return}y.has(N)||y.set(N,new Set),y.get(N).add(T)}function b(N,T){var P,Z;if(N==="*"){R.delete(T);return}(P=y.get(N))==null||P.delete(T),((Z=y.get(N))==null?void 0:Z.size)===0&&y.delete(N)}async function k(N){var T,P;if((T=e.onReceive)==null||T.call(e,N),!("type"in N))throw new Error("Message does not contain a type.");if(N.type==="request"){if(!t.send||!r)throw $l(["send","requestHandler"],"handle requests");const{id:Z,method:F,params:$}=N;let K;try{K={type:"response",id:Z,success:!0,payload:await r(F,$)}}catch(ae){if(!(ae instanceof Error))throw ae;K={type:"response",id:Z,success:!1,error:ae.message}}(P=e.onSend)==null||P.call(e,K),t.send(K);return}if(N.type==="response"){const Z=v.get(N.id);Z!=null&&clearTimeout(Z);const{resolve:F,reject:$}=p.get(N.id)??{};N.success?F==null||F(N.payload):$==null||$(new Error(N.error));return}if(N.type==="message"){for(const F of R)F(N.id,N.payload);const Z=y.get(N.id);if(!Z)return;for(const F of Z)F(N.payload);return}throw new Error(`Unexpected RPC message type: ${N.type}`)}return{setTransport:o,setRequestHandler:l,request:g,requestProxy:S,send:C,sendProxy:_,addMessageListener:L,removeMessageListener:b,proxy:{send:_,request:S}}}function uT(s,e){const t={maxRequestTime:e.maxRequestTime,requestHandler:{...e.handlers.requests,...e.extraRequestHandlers},transport:{registerHandler:()=>{}}},r=lT(t),o=e.handlers.messages;return o&&r.addMessageListener("*",((l,c)=>{const f=o["*"];f&&f(l,c);const h=o[l];h&&h(c)})),r}const cT=window.__electrobunWebviewId,fT=window.__electrobunRpcSocketPort;class l0{constructor(e){this.rpc=e.rpc,this.init()}init(){this.initSocketToBun(),window.__electrobun.receiveMessageFromBun=this.receiveMessageFromBun.bind(this),this.rpc&&this.rpc.setTransport(this.createTransport())}initSocketToBun(){const e=new WebSocket(`ws://localhost:${fT}/socket?webviewId=${cT}`);this.bunSocket=e,e.addEventListener("open",()=>{}),e.addEventListener("message",async t=>{var o;const r=t.data;if(typeof r=="string")try{const l=JSON.parse(r),c=await window.__electrobun_decrypt(l.encryptedData,l.iv,l.tag);(o=this.rpcHandler)==null||o.call(this,JSON.parse(c))}catch(l){console.error("Error parsing bun message:",l)}else r instanceof Blob||console.error("UNKNOWN DATA TYPE RECEIVED:",t.data)}),e.addEventListener("error",t=>{console.error("Socket error:",t)}),e.addEventListener("close",t=>{})}createTransport(){const e=this;return{send(t){try{const r=JSON.stringify(t);e.bunBridge(r)}catch(r){console.error("bun: failed to serialize message to webview",r)}},registerHandler(t){e.rpcHandler=t}}}async bunBridge(e){var t,r;if(((t=this.bunSocket)==null?void 0:t.readyState)===WebSocket.OPEN)try{const{encryptedData:o,iv:l,tag:c}=await window.__electrobun_encrypt(e),h=JSON.stringify({encryptedData:o,iv:l,tag:c});this.bunSocket.send(h);return}catch(o){console.error("Error sending message to bun via socket:",o)}(r=window.__electrobunBunBridge)==null||r.postMessage(e)}receiveMessageFromBun(e){this.rpcHandler&&this.rpcHandler(e)}static defineRPC(e){return uT("webview",{...e,extraRequestHandlers:{evaluateJavascriptWithResponse:({script:t})=>new Promise(r=>{try{const l=new Function(t)();l instanceof Promise?l.then(c=>{r(c)}).catch(c=>{console.error("bun: async script execution failed",c),r(String(c))}):r(l)}catch(o){console.error("bun: failed to eval script",o),r(String(o))}})}})}}function dT(s){for(const e of s)if(e.type==="HIGHLIGHT_BOX")return e;return null}const vg=16e3,hT="What's on your mind?";function pT(s,e,t){const r=vT(s,e,t),o=new Uint8Array(r.length*2);for(let l=0;l<r.length;l+=1){const c=Math.max(-1,Math.min(1,r[l])),f=c<0?c*32768:c*32767,h=Math.round(f);o[l*2]=h&255,o[l*2+1]=h>>8&255}return _T(o)}function mT(s){const e=xT(s),t=Math.floor(e.length/2),r=new Float32Array(t);for(let o=0;o<t;o+=1){const l=e[o*2];let f=e[o*2+1]<<8|l;f>=32768&&(f-=65536),r[o]=f/32768}return r}class gT{constructor(e){Ml(this,"currentTime",0);this.audioContext=e}playChunk(e,t){const r=this.audioContext.createBuffer(1,e.length,t);r.getChannelData(0).set(e);const o=this.audioContext.createBufferSource();o.buffer=r,o.connect(this.audioContext.destination);const l=Math.max(this.audioContext.currentTime+.02,this.currentTime);o.start(l),this.currentTime=l+r.duration}reset(){this.currentTime=this.audioContext.currentTime}}function vT(s,e,t){if(e===t)return s;const r=e/t,o=Math.max(1,Math.round(s.length/r)),l=new Float32Array(o);for(let c=0;c<o;c+=1){const f=c*r,h=Math.floor(f),p=Math.min(s.length-1,h+1),v=f-h,x=s[h]??0,g=s[p]??x;l[c]=x+(g-x)*v}return l}function _T(s){let e="";for(const t of s)e+=String.fromCharCode(t);return btoa(e)}function xT(s){const e=atob(s),t=new Uint8Array(e.length);for(let r=0;r<e.length;r+=1)t[r]=e.charCodeAt(r);return t}const An=l0.defineRPC({handlers:{}});new l0({rpc:An});function yT(){const t=new so,r=new ar(.65,32,32),o=new zr({color:4251856,roughness:.55,emissive:6356976,emissiveIntensity:.15});t.add(new mn(r,o));const l=new ar(.13,16,16),c=new zr({color:2142368,roughness:1,transparent:!0,opacity:.4});for(const C of[-1,1]){const _=new mn(l,c);_.position.set(C*.35,-.05,.48),_.scale.set(1,.7,.3),t.add(_)}const f=new zr({color:16777215,roughness:.1}),h=new zr({color:1710638,roughness:.05}),p=new zr({color:16777215,emissive:16777215});for(const C of[-1,1]){const _=new mn(new ar(.14,16,16),f);_.position.set(C*.18,.12,.55),_.scale.set(.8,1.2,.8),t.add(_);const y=new mn(new ar(.13,16,16),h);y.position.set(C*.18,.1,.58),y.scale.set(.85,1.15,.8),t.add(y);const R=new mn(new ar(.04,8,8),p);R.position.set(C*.18+.04,.16,.65),t.add(R);const L=new mn(new ar(.02,6,6),p);L.position.set(C*.18-.02,.06,.65),t.add(L)}const v=new jg;v.moveTo(-.06,0),v.quadraticCurveTo(0,-.05,.06,0);const x=new mn(new Od(v,12),new zr({color:2134160,roughness:.5,side:Fi}));x.position.set(0,-.08,.64),t.add(x);const g=new zr({color:2134176,roughness:.5,emissive:2138288,emissiveIntensity:.1});for(const C of[-1,1]){const _=new mn(new ar(.18,16,16),g);_.position.set(C*.25,-.62,.12),_.scale.set(1.1,.55,1.4),t.add(_)}const S=new zr({color:4251856,roughness:.55,emissive:6356976,emissiveIntensity:.15}),M=[];for(const C of[-1,1]){const _=new so;_.position.set(C*.58,-.05,.1),_.rotation.z=C*.25;const y=new mn(new Id(.09,.25,8,12),S);y.position.set(0,-.2,0),_.add(y),t.add(_),M.push(_)}return{root:t,arms:M}}const Af=220;class Kl{constructor(e=400,t=18){Ml(this,"value",0);Ml(this,"velocity",0);this.stiffness=e,this.damping=t}update(e,t,r=1/0){const o=-this.stiffness*(this.value-e),l=-this.damping*this.velocity;this.velocity+=(o+l)*t,this.value+=this.velocity*t,this.value=Math.max(-r,Math.min(r,this.value))}}function ST(s){if(!s)return null;for(const e of s.actions)if(e.type==="POINT")return e;return null}function MT(s){const e=["Samantha","Victoria","Karen","Tessa","Fiona","Moira","Allison","Ava","Susan"];for(const t of e){const r=s.find(o=>o.name.includes(t));if(r)return r}return s.find(t=>t.lang.toLowerCase().startsWith("en"))??null}function ET(){const s=Pe.useRef(null),e=Pe.useRef({x:0,y:0}),t=Pe.useRef(!1),r=Pe.useRef(null),o=Pe.useRef(null),l=Pe.useRef(null),c=Pe.useRef(null),f=Pe.useRef(null),h=Pe.useRef(null),p=Pe.useRef(null),v=Pe.useRef(null),x=Pe.useRef(null),g=Pe.useRef(0),S=Pe.useRef(!1),M=Pe.useRef(null),C=Pe.useRef(null),_=Pe.useRef(!1),y=Pe.useRef(!1),R=Pe.useRef(!1),L=Pe.useRef(null),[b,k]=Pe.useState(!1),[O,N]=Pe.useState(!1),[T,P]=Pe.useState(null),[Z,F]=Pe.useState(null),[,$]=Pe.useState(null),[K,ae]=Pe.useState(""),[q,ie]=Pe.useState(null),[W,J]=Pe.useState(null),[oe,ce]=Pe.useState(!1),[U,Y]=Pe.useState(null),[Ee,Re]=Pe.useState("idle"),[Ze,Q]=Pe.useState(null),[,me]=Pe.useState("unknown"),[,pe]=Pe.useState(!1),[Fe,He]=Pe.useState(!1),[it,bt]=Pe.useState(!1),[ht,gt]=Pe.useState(!1),[,Ct]=Pe.useState(0),[,pt]=Pe.useState(0),[,Dt]=Pe.useState(""),[B,Bt]=Pe.useState(null),[yt,St]=Pe.useState(""),[Ye,D]=Pe.useState(""),[E,G]=Pe.useState(""),he=Pe.useMemo(()=>ST(q),[q]);Pe.useEffect(()=>{t.current=b},[b]),Pe.useEffect(()=>{R.current=Fe},[Fe]);const ge=Pe.useCallback(()=>{const te=r.current;te&&te.focus({preventScroll:!0})},[]),fe=Pe.useCallback(()=>{var te,je,lt;if((te=p.current)==null||te.disconnect(),(je=h.current)==null||je.disconnect(),(lt=v.current)==null||lt.disconnect(),p.current=null,h.current=null,v.current=null,f.current){for(const mt of f.current.getTracks())mt.stop();f.current=null}x.current==="browser"&&(x.current=null)},[]);Pe.useEffect(()=>{if(!b)return;let te=!1;return(async()=>{try{await An.request.requestFocus()}catch{}!te&&t.current&&requestAnimationFrame(()=>ge())})(),()=>{te=!0}},[b,ge]);const Oe=Pe.useCallback(async()=>{var te;L.current&&(L.current(),L.current=null),M.current&&(window.clearTimeout(M.current),M.current=null),C.current&&(window.clearTimeout(C.current),C.current=null),o.current&&o.current.readyState===WebSocket.OPEN&&o.current.send(JSON.stringify({type:"session.close"}));try{await An.request.clearHighlightOverlay()}catch{}try{await An.request.stopNativeMic()}catch(je){console.error("[voice] failed to stop native mic",je)}fe(),y.current=!0,(te=o.current)==null||te.close(),o.current=null,x.current=null,g.current=0,S.current=!1,pe(!1),He(!1),bt(!1),_.current=!1,gt(!1)},[fe]);Pe.useEffect(()=>{const te=je=>{je.key==="Escape"&&b&&(k(!1),Oe())};return window.addEventListener("keydown",te),()=>window.removeEventListener("keydown",te)},[b,Oe]);const Te=Pe.useCallback(async()=>{if(!l.current){const te=new AudioContext;l.current=te,c.current=new gT(te),console.log("[voice] audio context initialized",{sampleRate:te.sampleRate})}return l.current.state==="suspended"&&await l.current.resume(),l.current},[]),Le=Pe.useCallback(()=>{M.current&&(window.clearTimeout(M.current),M.current=null)},[]),We=Pe.useCallback(()=>{C.current&&(window.clearTimeout(C.current),C.current=null)},[]),xe=Pe.useCallback(async()=>{if(M.current=null,!(!_.current||g.current>0)&&(console.warn("[voice] no audio chunks detected after recording start",{captureMode:x.current}),_.current=!1,bt(!1),gt(!1),Re("ready"),Q("I couldn't hear your microphone. Check permissions/input and try again."),x.current==="native"))try{await An.request.stopNativeMic()}catch(te){console.error("[voice] failed to stop native mic after no-audio timeout",te)}},[]),we=Pe.useCallback(()=>{Le(),M.current=window.setTimeout(()=>{xe()},2500)},[Le,xe]),ze=Pe.useCallback(te=>{S.current||console.log("[voice] first assistant response",{kind:te}),S.current=!0,We()},[We]),Ge=Pe.useCallback(()=>{We(),C.current=window.setTimeout(()=>{S.current||(console.warn("[voice] no assistant response received after audio end"),Re("ready"),Q("No response from the live session. Try asking again."))},7e3)},[We]),Ne=Pe.useCallback(te=>{x.current=te,_.current=!0,g.current=0,S.current=!1,Le(),We(),bt(!1),gt(!0),Q(null),Re("recording"),Dt(`recording:${te}`),console.log("[voice] mic ready",{captureMode:te}),we()},[we,Le,We]),ft=Pe.useCallback(async()=>{var Pn;if(p.current&&f.current)return;if(!((Pn=navigator.mediaDevices)!=null&&Pn.getUserMedia))throw new Error("browser-unavailable");const te=await Te(),je=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),lt=te.createMediaStreamSource(je),mt=te.createScriptProcessor(2048,1,1),Wt=te.createGain();Wt.gain.value=0,mt.onaudioprocess=Jt=>{if(!_.current||x.current!=="browser")return;const kn=o.current;if(!kn||kn.readyState!==WebSocket.OPEN)return;const mi=Jt.inputBuffer.getChannelData(0);if(mi.length===0)return;const jn=g.current+1;g.current=jn,jn===1?(console.log("[voice] first audio chunk",{captureMode:"browser"}),Le()):jn%25===0&&console.log("[voice] audio chunk count",{count:jn,captureMode:"browser"});const ii={type:"audio.chunk",pcm16Base64:pT(new Float32Array(mi),te.sampleRate,vg),sampleRate:vg};kn.send(JSON.stringify(ii)),Ct(Ln=>Ln+1)},lt.connect(mt),mt.connect(Wt),Wt.connect(te.destination),f.current=je,h.current=lt,p.current=mt,v.current=Wt,console.log("[voice] captureMode=browser")},[Le,Te]);Pe.useEffect(()=>()=>{var te;Oe(),fe(),(te=l.current)==null||te.close().catch(()=>{})},[Oe,fe]),Pe.useEffect(()=>{const te=lt=>{switch(console.log("[voice] native mic status",lt),Dt(lt.message?`${lt.state}: ${lt.message}`:lt.state),lt.state){case"starting":me("prompt");return;case"ready":me("granted"),x.current==="native"&&Ne("native");return;case"permission_denied":me("denied"),bt(!1),Re("error"),Q(lt.message??"Microphone access was denied.");return;case"stopped":return;case"error":bt(!1),Re("error"),Q(lt.message??"Native microphone capture failed.");return}},je=lt=>{if(!_.current||x.current!=="native")return;const mt=o.current;if(!mt||mt.readyState!==WebSocket.OPEN)return;const Wt=g.current+1;g.current=Wt,Wt===1?(console.log("[voice] first audio chunk",{captureMode:"native"}),Le()):Wt%25===0&&console.log("[voice] audio chunk count",{count:Wt,captureMode:"native"});const Pn={type:"audio.chunk",pcm16Base64:lt.pcm16Base64,sampleRate:lt.sampleRate};mt.send(JSON.stringify(Pn)),Ct(Jt=>Jt+1)};return An.addMessageListener("nativeMicStatus",te),An.addMessageListener("nativeMicChunk",je),()=>{An.removeMessageListener("nativeMicStatus",te),An.removeMessageListener("nativeMicChunk",je)}},[Ne,Le]);const V=Pe.useCallback(()=>new Promise(te=>{if(!("speechSynthesis"in window)){te();return}window.speechSynthesis.cancel();const je=new SpeechSynthesisUtterance(hT),lt=window.speechSynthesis.getVoices(),mt=MT(lt);mt&&(je.voice=mt),je.rate=1.16,je.pitch=1.55,je.volume=.95,console.log("[voice] greeting voice",{name:(mt==null?void 0:mt.name)??"system-default",lang:(mt==null?void 0:mt.lang)??"unknown",rate:je.rate,pitch:je.pitch});const Wt=()=>{je.onend=null,je.onerror=null,L.current=null,te()};je.onend=Wt,je.onerror=Wt,L.current=()=>{window.speechSynthesis.cancel(),Wt()},window.speechSynthesis.speak(je)}),[]),Ce=Pe.useCallback(()=>{var te;Q(null),pe(!1),He(!1),bt(!1),Ct(0),pt(0),Dt(""),St(""),D(""),G(""),g.current=0,S.current=!1,Le(),We(),B&&Bt(null),(te=c.current)==null||te.reset()},[B,Le,We]),ye=Pe.useCallback(async te=>{try{await An.request.showHighlightOverlay({action:te})}catch(je){console.error("[overlay] failed to show highlight",je)}},[]),be=Pe.useCallback(async()=>{try{await An.request.clearHighlightOverlay()}catch{}},[]),Se=Pe.useCallback(async te=>{var je;switch(te.type){case"session.ready":He(!0),Re("ready"),Dt(te.sessionId??"session-ready"),await V();return;case"session.error":Re("error"),Q(te.message),Dt(te.message);return;case"transcript.partial":te.role==="user"?St(te.text):(ze("text"),D(te.text));return;case"transcript.final":te.role==="user"?St(te.text):(ze("text"),D(te.text));return;case"response.text":ze("text"),G(lt=>lt?lt.includes(te.text)?lt:`${lt} ${te.text}`.trim():te.text);return;case"response.audio.chunk":{await Te(),ze("audio");const lt=mT(te.pcm16Base64);(je=c.current)==null||je.playChunk(lt,te.sampleRate),pt(mt=>mt+1),Re("speaking");return}case"response.done":We(),console.log("[voice] turn complete",{captureMode:x.current,sawAssistantResponse:S.current,audioChunksSent:g.current}),S.current||Q("No response from the live session. Try asking again."),bt(!1),gt(!1),Re("ready");return;case"highlight.show":te.message&&G(te.message),await ye(te.action);return;case"highlight.clear":await be();return;case"debug.status":Dt(te.detail?`${te.status}: ${te.detail}`:te.status),te.status==="thinking"&&Re("thinking");return}},[be,We,Te,ze,ye,V]),de=Pe.useCallback(async te=>{if(!te.liveWebSocketUrl){Re("error"),Q("THEOP_AGENT_URL is not configured for voice sessions."),console.error("[voice] missing live websocket url");return}Re("connecting"),Q(null),Ce(),y.current=!1,console.log("[voice] starting voice turn",{threadId:te.threadId,screenshotId:te.screenshotId,liveWebSocketUrl:te.liveWebSocketUrl});const je=new WebSocket(te.liveWebSocketUrl);o.current=je,je.addEventListener("open",()=>{console.log("[voice] websocket open"),pe(!0);const lt={type:"session.start",threadId:te.threadId,inputMode:"voice",screenshot:{screenshotId:te.screenshotId,mimeType:te.modelMimeType,bytesBase64:te.modelImageBase64,capturedAt:te.capturedAt},displayContext:te.displayContext,appContext:te.appContext};je.send(JSON.stringify(lt))}),je.addEventListener("message",lt=>{try{const mt=JSON.parse(lt.data);console.log("[voice] websocket message",mt.type),Se(mt)}catch(mt){console.error("[voice] websocket message parse failed",mt,lt.data),Re("error"),Q(mt instanceof Error?mt.message:"Voice response parsing failed.")}}),je.addEventListener("close",()=>{console.log("[voice] websocket closed"),Le(),We();const lt=!R.current;pe(!1),He(!1),bt(!1),gt(!1),y.current||(lt?(Re("error"),Q("The Live voice session closed before it became ready.")):Re(mt=>mt==="error"?mt:"idle"))}),je.addEventListener("error",()=>{console.error("[voice] websocket error"),Le(),We(),bt(!1),Re("error"),Q("The Live voice session could not connect.")})},[Le,We,Se,Ce]),Xe=Pe.useCallback(async()=>{if(!(O||Ee==="connecting"||Ee==="recording"||Ee==="thinking")){await Oe(),N(!0),Re("capturing"),Y(null),ie(null),J(null),Bt(null),k(!0);try{const te=await An.request.startVoiceTurn();if(console.log("[voice] startVoiceTurn result",te),!te.ok){Y({reason:te.reason,message:te.message}),P(null),F(null),$(null),Re("error");return}P(te.imagePath),F(te.previewDataUrl),$(te.capturedAt),Y(null),await de(te)}catch(te){P(null),F(null),$(null),Y({reason:"capture_failed",message:te instanceof Error?te.message:"Something went wrong while starting the voice turn."}),Re("error")}finally{N(!1)}}},[Oe,de,O,Ee]),at=Pe.useCallback(async()=>{if(!Fe||!o.current||o.current.readyState!==WebSocket.OPEN){console.warn("[voice] startRecording ignored: live session not ready");return}if(ht||it){console.warn("[voice] startRecording ignored: already recording or starting");return}console.log("[voice] recording requested"),be(),L.current&&L.current(),Q(null),bt(!0),St(""),D(""),G(""),g.current=0,S.current=!1,Le(),We();try{await ft(),me("granted"),Ne("browser");return}catch(je){console.warn("[voice] browser mic unavailable, falling back to native helper",je),fe()}x.current="native",console.log("[voice] captureMode=native");const te=await An.request.startNativeMic();console.log("[voice] startNativeMic result",te),te.ok||(bt(!1),x.current=null,_.current=!1,gt(!1),Re("error"),Q(te.message??"Native microphone capture could not start."))},[Ne,be,Le,We,ft,ht,it,Fe,fe]),Ut=Pe.useCallback(()=>{if(!_.current){console.warn("[voice] stopRecording ignored: not recording");return}console.log("[voice] stop sent",{captureMode:x.current,audioChunksSent:g.current}),Le(),_.current=!1,gt(!1),Re("thinking"),o.current&&o.current.readyState===WebSocket.OPEN&&o.current.send(JSON.stringify({type:"audio.end"})),Ge(),x.current==="native"&&An.request.stopNativeMic().catch(te=>{console.error("[voice] stopNativeMic failed",te)})},[Ge,Le]),Tt=Pe.useCallback(async()=>{if(T)try{await An.request.openCapturedImage({imagePath:T})}catch{}},[T]),bn=Pe.useCallback(async()=>{const te=K.trim();if(!(!te||oe)){ce(!0),J(null);try{const je=await An.request.askAssistant({questionText:te,inputMode:"text"});Bt(je.debug),je.ok?(ie(je.response),J(null),ae("")):(ie(null),J(je.message))}catch(je){ie(null),Bt(null),J(je instanceof Error?je.message:"The assistant request failed unexpectedly.")}finally{ce(!1)}}},[oe,K]);return Pe.useEffect(()=>{if(!q){be();return}const te=dT(q.actions);if(te){ye(te);return}be()},[q,be,ye]),Pe.useEffect(()=>{const te=s.current;if(!te)return;const je=new cx,lt=new hi(45,te.clientWidth/te.clientHeight,.1,100);lt.position.set(0,0,3.2);const mt=new sT({antialias:!0,alpha:!0});mt.setPixelRatio(window.devicePixelRatio),mt.setSize(te.clientWidth,te.clientHeight),mt.setClearColor(0,0),te.appendChild(mt.domElement),je.add(new uy(16774392,.9));const Wt=new qm(16777215,1);Wt.position.set(3,5,4),je.add(Wt);const Pn=new qm(16765152,.4);Pn.position.set(-3,2,2),je.add(Pn);const{root:Jt,arms:kn}=yT();je.add(Jt);const mi=new Kl(500,22),jn=new Kl(500,22),ii=new Kl(400,25),Ln=new Kl(200,16);let gi=!1,qi=0,hr=0;const Xr=A=>{te.contains(A.target)&&(gi=!0,qi=A.screenX,hr=A.screenY)},qr=A=>{gi&&(e.current.x=A.screenX-qi,e.current.y=A.screenY-hr,qi=A.screenX,hr=A.screenY)},Yr=()=>{gi=!1};window.addEventListener("mousedown",Xr),window.addEventListener("mousemove",qr),window.addEventListener("mouseup",Yr);let pr=0,ys=0;function Ss(){ys=requestAnimationFrame(Ss);const A=1/60;pr+=A;const X=e.current.x;e.current.x*=.5,e.current.y*=.5,ii.update(0,A,.25),ii.velocity+=X*-.8,Jt.rotation.z=ii.value+Math.sin(pr*.8)*.02;const le=K_.clamp(X*.04,-.3,.3);Jt.rotation.y+=(le-Jt.rotation.y)*.1,mi.update(0,A,.3),mi.velocity+=X*1.5,jn.update(0,A,.3),jn.velocity+=X*1.5;const re=t.current?1.2:0;Ln.update(re,A),kn[0].rotation.z=mi.value,kn[1].rotation.z=jn.value+Ln.value,Jt.position.y=.35+Math.sin(pr*1.5)*.04,mt.render(je,lt)}return Ss(),()=>{cancelAnimationFrame(ys),window.removeEventListener("mousedown",Xr),window.removeEventListener("mousemove",qr),window.removeEventListener("mouseup",Yr),te.removeChild(mt.domElement),mt.dispose()}},[]),At.jsx("div",{style:{position:"fixed",inset:0,display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:At.jsxs("div",{style:{flex:1,position:"relative"},children:[At.jsx("div",{ref:s,style:{position:"absolute",left:0,right:0,bottom:0,height:Af}}),At.jsx("div",{className:"electrobun-webkit-app-region-drag",style:{position:"absolute",left:0,right:0,bottom:0,height:Af,zIndex:10,cursor:"pointer"},onMouseDown:te=>{te.target.style.cursor="grabbing",te.target.dataset.downX=String(te.screenX),te.target.dataset.downY=String(te.screenY)},onMouseUp:te=>{te.target.style.cursor="pointer";const je=Number(te.target.dataset.downX??0),lt=Number(te.target.dataset.downY??0);Math.hypot(te.screenX-je,te.screenY-lt)<5&&!O&&Xe()},onMouseLeave:te=>{te.target.style.cursor="pointer"}}),b&&At.jsxs("div",{style:{position:"absolute",left:0,right:0,bottom:Af,zIndex:20,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"10px 14px 4px",gap:6},children:[At.jsx("div",{style:{background:"white",borderRadius:16,padding:"10px 14px",boxShadow:"0 2px 12px rgba(0,0,0,0.12)",fontSize:13,color:"#1a1a2e",lineHeight:1.4},children:(U==null?void 0:U.reason)==="permission_denied"?At.jsx(At.Fragment,{children:"Allow screen recording for this app in macOS System Settings > Privacy & Security > Screen & System Audio Recording, then click me again."}):U?At.jsxs(At.Fragment,{children:["I couldn't grab the screen: ",U.message]}):Ze?At.jsxs(At.Fragment,{children:["Voice error: ",Ze]}):At.jsxs(At.Fragment,{children:[Ee==="capturing"&&"Capturing your screen...",Ee==="connecting"&&"Connecting voice session...",it&&"Opening your microphone...",Ee==="ready"&&!it&&"What's on your mind? Click Start talking.",Ee==="recording"&&"Listening... click Send voice when you're done.",Ee==="thinking"&&"Thinking...",Ee==="speaking"&&"Speaking...",Ee==="completed"&&"Voice turn complete.",Ee==="idle"&&"Click me to start a voice turn."]})}),Z&&!U&&At.jsxs("div",{role:"button",tabIndex:0,onClick:()=>{Tt()},onKeyDown:te=>{(te.key==="Enter"||te.key===" ")&&(te.preventDefault(),Tt())},style:{background:"rgba(255,255,255,0.92)",borderRadius:16,padding:8,boxShadow:"0 2px 12px rgba(0,0,0,0.1)",cursor:"pointer"},children:[At.jsx("img",{src:Z,alt:"Screenshot preview",style:{display:"block",width:"100%",maxHeight:120,objectFit:"cover",borderRadius:10}}),At.jsx("div",{style:{marginTop:6,fontSize:11,color:"#5a5a6f",textAlign:"center"},children:"Click to open full screenshot"})]}),At.jsx("div",{style:{background:"rgba(255,255,255,0.95)",borderRadius:16,padding:"12px 12px",boxShadow:"0 2px 12px rgba(0,0,0,0.1)",color:"#1a1a2e"},children:At.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"stretch",gap:8},children:[At.jsx("button",{type:"button",onClick:()=>{if(ht){Ut();return}at()},disabled:!Fe||it||Ee==="thinking"||Ee==="speaking",style:{border:"none",borderRadius:14,padding:"12px 14px",background:ht?"#0d1b2a":"#40e0d0",color:ht?"#d7f4ff":"#0b2230",fontSize:13,fontWeight:700,cursor:Fe?"pointer":"wait"},children:it?"Starting mic...":ht?"Send voice":"Start talking"}),At.jsxs("div",{style:{fontSize:12,color:"#4b5572",minHeight:18},children:["You: ",yt||"Waiting for your voice..."]}),At.jsxs("div",{style:{fontSize:12,color:"#27324a",minHeight:18},children:["Assistant: ",Ye||E||"No spoken answer yet."]})]})}),(q||W)&&At.jsxs("div",{style:{background:"rgba(255,255,255,0.95)",borderRadius:16,padding:"10px 12px",boxShadow:"0 2px 12px rgba(0,0,0,0.1)",color:"#1a1a2e"},children:[At.jsx("div",{style:{fontSize:13,lineHeight:1.45,marginBottom:q!=null&&q.steps.length||q!=null&&q.followUpQuestion?8:0},children:W??(q==null?void 0:q.summary)}),q!=null&&q.steps.length?At.jsx("ol",{style:{margin:0,paddingLeft:18,fontSize:12,lineHeight:1.45},children:q.steps.map((te,je)=>At.jsx("li",{children:te},`${je}-${te}`))}):null,q!=null&&q.followUpQuestion?At.jsxs("div",{style:{marginTop:8,fontSize:12,color:"#4b5572"},children:["Follow-up: ",q.followUpQuestion]}):null,he?At.jsxs("div",{style:{marginTop:8,fontSize:11,color:"#4b5572"},children:["Pointing at ",he.label," with ",Math.round(he.confidence*100),"% confidence at (",Math.round(he.x),", ",Math.round(he.y),")."]}):null]}),At.jsxs("div",{style:{display:"flex",gap:6},children:[At.jsx("input",{ref:r,autoFocus:!0,type:"text",placeholder:"Typed fallback...",value:K,style:{flex:1,padding:"8px 12px",borderRadius:12,border:"1px solid #e0e0e0",fontSize:13,outline:"none",background:"white",color:"#1a1a2e"},onChange:te=>ae(te.target.value),onFocus:te=>{te.target.style.borderColor="#40e0d0"},onBlur:te=>{te.target.style.borderColor="#e0e0e0"},onKeyDown:te=>{te.key==="Enter"&&(te.preventDefault(),bn())}}),At.jsx("button",{type:"button",onClick:()=>{bn()},disabled:oe,style:{width:36,height:36,borderRadius:12,border:"none",background:"#40e0d0",color:"white",fontSize:16,cursor:oe?"wait":"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,opacity:oe?.75:1},children:oe?"…":"↑"})]})]})]})})}function TT(){const[s,e]=Pe.useState(null);return Pe.useEffect(()=>(window.__theopOverlaySetState=t=>{e(t)},window.__theopOverlayPendingState!==void 0&&e(window.__theopOverlayPendingState),()=>{delete window.__theopOverlaySetState}),[]),At.jsx("div",{style:{position:"fixed",inset:0,pointerEvents:"none",overflow:"hidden"},children:s?At.jsx("div",{style:{position:"absolute",left:s.x,top:s.y,width:s.width,height:s.height,borderRadius:18,border:"3px solid rgba(64, 224, 208, 0.96)",boxShadow:"0 0 0 2px rgba(10, 15, 24, 0.22), 0 0 28px rgba(64, 224, 208, 0.55), inset 0 0 18px rgba(64, 224, 208, 0.16)",background:"rgba(64, 224, 208, 0.08)",backdropFilter:"blur(1px)"},children:At.jsxs("div",{style:{position:"absolute",left:0,top:-36,padding:"8px 12px",borderRadius:999,background:"rgba(7, 18, 24, 0.9)",color:"#d6ffff",fontSize:14,fontWeight:700,letterSpacing:.2,whiteSpace:"nowrap",boxShadow:"0 10px 24px rgba(0,0,0,0.18)"},children:[s.label," · ",Math.round(s.confidence*100),"%"]})}):null})}const wT=new URLSearchParams(window.location.search).get("mode"),AT=wT==="overlay"?TT:ET;Zv.createRoot(document.getElementById("root")).render(At.jsx(Pe.StrictMode,{children:At.jsx(AT,{})}));
