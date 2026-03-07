var zv=Object.defineProperty;var Vv=(s,e,t)=>e in s?zv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Bc=(s,e,t)=>Vv(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();var kc={exports:{}},ko={},zc={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var im;function Hv(){if(im)return pt;im=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=y&&O[y]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,b={};function x(O,$,Ae){this.props=O,this.context=$,this.refs=b,this.updater=Ae||S}x.prototype.isReactComponent={},x.prototype.setState=function(O,$){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,$,"setState")},x.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function _(){}_.prototype=x.prototype;function R(O,$,Ae){this.props=O,this.context=$,this.refs=b,this.updater=Ae||S}var C=R.prototype=new _;C.constructor=R,M(C,x.prototype),C.isPureReactComponent=!0;var P=Array.isArray,B=Object.prototype.hasOwnProperty,F={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function T(O,$,Ae){var Re,He={},re=null,he=null;if($!=null)for(Re in $.ref!==void 0&&(he=$.ref),$.key!==void 0&&(re=""+$.key),$)B.call($,Re)&&!N.hasOwnProperty(Re)&&(He[Re]=$[Re]);var pe=arguments.length-2;if(pe===1)He.children=Ae;else if(1<pe){for(var Fe=Array(pe),Ge=0;Ge<pe;Ge++)Fe[Ge]=arguments[Ge+2];He.children=Fe}if(O&&O.defaultProps)for(Re in pe=O.defaultProps,pe)He[Re]===void 0&&(He[Re]=pe[Re]);return{$$typeof:s,type:O,key:re,ref:he,props:He,_owner:F.current}}function L(O,$){return{$$typeof:s,type:O.type,key:$,ref:O.ref,props:O.props,_owner:O._owner}}function Z(O){return typeof O=="object"&&O!==null&&O.$$typeof===s}function U(O){var $={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Ae){return $[Ae]})}var q=/\/+/g;function j(O,$){return typeof O=="object"&&O!==null&&O.key!=null?U(""+O.key):$.toString(36)}function se(O,$,Ae,Re,He){var re=typeof O;(re==="undefined"||re==="boolean")&&(O=null);var he=!1;if(O===null)he=!0;else switch(re){case"string":case"number":he=!0;break;case"object":switch(O.$$typeof){case s:case e:he=!0}}if(he)return he=O,He=He(he),O=Re===""?"."+j(he,0):Re,P(He)?(Ae="",O!=null&&(Ae=O.replace(q,"$&/")+"/"),se(He,$,Ae,"",function(Ge){return Ge})):He!=null&&(Z(He)&&(He=L(He,Ae+(!He.key||he&&he.key===He.key?"":(""+He.key).replace(q,"$&/")+"/")+O)),$.push(He)),1;if(he=0,Re=Re===""?".":Re+":",P(O))for(var pe=0;pe<O.length;pe++){re=O[pe];var Fe=Re+j(re,pe);he+=se(re,$,Ae,Fe,He)}else if(Fe=g(O),typeof Fe=="function")for(O=Fe.call(O),pe=0;!(re=O.next()).done;)re=re.value,Fe=Re+j(re,pe++),he+=se(re,$,Ae,Fe,He);else if(re==="object")throw $=String(O),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.");return he}function Q(O,$,Ae){if(O==null)return O;var Re=[],He=0;return se(O,Re,"","",function(re){return $.call(Ae,re,He++)}),Re}function te(O){if(O._status===-1){var $=O._result;$=$(),$.then(function(Ae){(O._status===0||O._status===-1)&&(O._status=1,O._result=Ae)},function(Ae){(O._status===0||O._status===-1)&&(O._status=2,O._result=Ae)}),O._status===-1&&(O._status=0,O._result=$)}if(O._status===1)return O._result.default;throw O._result}var G={current:null},J={transition:null},oe={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:J,ReactCurrentOwner:F};function ue(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:Q,forEach:function(O,$,Ae){Q(O,function(){$.apply(this,arguments)},Ae)},count:function(O){var $=0;return Q(O,function(){$++}),$},toArray:function(O){return Q(O,function($){return $})||[]},only:function(O){if(!Z(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},pt.Component=x,pt.Fragment=t,pt.Profiler=o,pt.PureComponent=R,pt.StrictMode=r,pt.Suspense=h,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,pt.act=ue,pt.cloneElement=function(O,$,Ae){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Re=M({},O.props),He=O.key,re=O.ref,he=O._owner;if($!=null){if($.ref!==void 0&&(re=$.ref,he=F.current),$.key!==void 0&&(He=""+$.key),O.type&&O.type.defaultProps)var pe=O.type.defaultProps;for(Fe in $)B.call($,Fe)&&!N.hasOwnProperty(Fe)&&(Re[Fe]=$[Fe]===void 0&&pe!==void 0?pe[Fe]:$[Fe])}var Fe=arguments.length-2;if(Fe===1)Re.children=Ae;else if(1<Fe){pe=Array(Fe);for(var Ge=0;Ge<Fe;Ge++)pe[Ge]=arguments[Ge+2];Re.children=pe}return{$$typeof:s,type:O.type,key:He,ref:re,props:Re,_owner:he}},pt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:l,_context:O},O.Consumer=O},pt.createElement=T,pt.createFactory=function(O){var $=T.bind(null,O);return $.type=O,$},pt.createRef=function(){return{current:null}},pt.forwardRef=function(O){return{$$typeof:f,render:O}},pt.isValidElement=Z,pt.lazy=function(O){return{$$typeof:v,_payload:{_status:-1,_result:O},_init:te}},pt.memo=function(O,$){return{$$typeof:p,type:O,compare:$===void 0?null:$}},pt.startTransition=function(O){var $=J.transition;J.transition={};try{O()}finally{J.transition=$}},pt.unstable_act=ue,pt.useCallback=function(O,$){return G.current.useCallback(O,$)},pt.useContext=function(O){return G.current.useContext(O)},pt.useDebugValue=function(){},pt.useDeferredValue=function(O){return G.current.useDeferredValue(O)},pt.useEffect=function(O,$){return G.current.useEffect(O,$)},pt.useId=function(){return G.current.useId()},pt.useImperativeHandle=function(O,$,Ae){return G.current.useImperativeHandle(O,$,Ae)},pt.useInsertionEffect=function(O,$){return G.current.useInsertionEffect(O,$)},pt.useLayoutEffect=function(O,$){return G.current.useLayoutEffect(O,$)},pt.useMemo=function(O,$){return G.current.useMemo(O,$)},pt.useReducer=function(O,$,Ae){return G.current.useReducer(O,$,Ae)},pt.useRef=function(O){return G.current.useRef(O)},pt.useState=function(O){return G.current.useState(O)},pt.useSyncExternalStore=function(O,$,Ae){return G.current.useSyncExternalStore(O,$,Ae)},pt.useTransition=function(){return G.current.useTransition()},pt.version="18.3.1",pt}var rm;function yd(){return rm||(rm=1,zc.exports=Hv()),zc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sm;function Gv(){if(sm)return ko;sm=1;var s=yd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(f,h,p){var v,y={},g=null,S=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(y[v]=h[v]);if(f&&f.defaultProps)for(v in h=f.defaultProps,h)y[v]===void 0&&(y[v]=h[v]);return{$$typeof:e,type:f,key:g,ref:S,props:y,_owner:o.current}}return ko.Fragment=t,ko.jsx=c,ko.jsxs=c,ko}var om;function Wv(){return om||(om=1,kc.exports=Gv()),kc.exports}var Jt=Wv(),xn=yd(),_l={},Vc={exports:{}},Fn={},Hc={exports:{}},Gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function Xv(){return am||(am=1,(function(s){function e(J,oe){var ue=J.length;J.push(oe);e:for(;0<ue;){var O=ue-1>>>1,$=J[O];if(0<o($,oe))J[O]=oe,J[ue]=$,ue=O;else break e}}function t(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var oe=J[0],ue=J.pop();if(ue!==oe){J[0]=ue;e:for(var O=0,$=J.length,Ae=$>>>1;O<Ae;){var Re=2*(O+1)-1,He=J[Re],re=Re+1,he=J[re];if(0>o(He,ue))re<$&&0>o(he,He)?(J[O]=he,J[re]=ue,O=re):(J[O]=He,J[Re]=ue,O=Re);else if(re<$&&0>o(he,ue))J[O]=he,J[re]=ue,O=re;else break e}}return oe}function o(J,oe){var ue=J.sortIndex-oe.sortIndex;return ue!==0?ue:J.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();s.unstable_now=function(){return c.now()-f}}var h=[],p=[],v=1,y=null,g=3,S=!1,M=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(J){for(var oe=t(p);oe!==null;){if(oe.callback===null)r(p);else if(oe.startTime<=J)r(p),oe.sortIndex=oe.expirationTime,e(h,oe);else break;oe=t(p)}}function P(J){if(b=!1,C(J),!M)if(t(h)!==null)M=!0,te(B);else{var oe=t(p);oe!==null&&G(P,oe.startTime-J)}}function B(J,oe){M=!1,b&&(b=!1,_(T),T=-1),S=!0;var ue=g;try{for(C(oe),y=t(h);y!==null&&(!(y.expirationTime>oe)||J&&!U());){var O=y.callback;if(typeof O=="function"){y.callback=null,g=y.priorityLevel;var $=O(y.expirationTime<=oe);oe=s.unstable_now(),typeof $=="function"?y.callback=$:y===t(h)&&r(h),C(oe)}else r(h);y=t(h)}if(y!==null)var Ae=!0;else{var Re=t(p);Re!==null&&G(P,Re.startTime-oe),Ae=!1}return Ae}finally{y=null,g=ue,S=!1}}var F=!1,N=null,T=-1,L=5,Z=-1;function U(){return!(s.unstable_now()-Z<L)}function q(){if(N!==null){var J=s.unstable_now();Z=J;var oe=!0;try{oe=N(!0,J)}finally{oe?j():(F=!1,N=null)}}else F=!1}var j;if(typeof R=="function")j=function(){R(q)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,Q=se.port2;se.port1.onmessage=q,j=function(){Q.postMessage(null)}}else j=function(){x(q,0)};function te(J){N=J,F||(F=!0,j())}function G(J,oe){T=x(function(){J(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(J){J.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,te(B))},s.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<J?Math.floor(1e3/J):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(J){switch(g){case 1:case 2:case 3:var oe=3;break;default:oe=g}var ue=g;g=oe;try{return J()}finally{g=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(J,oe){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ue=g;g=J;try{return oe()}finally{g=ue}},s.unstable_scheduleCallback=function(J,oe,ue){var O=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?O+ue:O):ue=O,J){case 1:var $=-1;break;case 2:$=250;break;case 5:$=1073741823;break;case 4:$=1e4;break;default:$=5e3}return $=ue+$,J={id:v++,callback:oe,priorityLevel:J,startTime:ue,expirationTime:$,sortIndex:-1},ue>O?(J.sortIndex=ue,e(p,J),t(h)===null&&J===t(p)&&(b?(_(T),T=-1):b=!0,G(P,ue-O))):(J.sortIndex=$,e(h,J),M||S||(M=!0,te(B))),J},s.unstable_shouldYield=U,s.unstable_wrapCallback=function(J){var oe=g;return function(){var ue=g;g=oe;try{return J.apply(this,arguments)}finally{g=ue}}}})(Gc)),Gc}var lm;function Yv(){return lm||(lm=1,Hc.exports=Xv()),Hc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function qv(){if(um)return Fn;um=1;var s=yd(),e=Yv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){c(n,i),c(n+"Capture",i)}function c(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function g(n){return h.call(y,n)?!0:h.call(v,n)?!1:p.test(n)?y[n]=!0:(v[n]=!0,!1)}function S(n,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,a,u){if(i===null||typeof i>"u"||S(n,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,a,u,d,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var _=/[\-:]([a-z])/g;function R(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(_,R);x[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(_,R);x[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(_,R);x[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function C(n,i,a,u){var d=x.hasOwnProperty(i)?x[i]:null;(d!==null?d.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,a,d,u)&&(a=null),u||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,u=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,u?n.setAttributeNS(u,i,a):n.setAttribute(i,a))))}var P=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),F=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),Z=Symbol.for("react.provider"),U=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),se=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),G=Symbol.for("react.offscreen"),J=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=J&&n[J]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,O;function $(n){if(O===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);O=i&&i[1]||""}return`
`+O+n}var Ae=!1;function Re(n,i){if(!n||Ae)return"";Ae=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var u=ae}Reflect.construct(n,[],i)}else{try{i.call()}catch(ae){u=ae}n.call(i.prototype)}else{try{throw Error()}catch(ae){u=ae}n()}}catch(ae){if(ae&&u&&typeof ae.stack=="string"){for(var d=ae.stack.split(`
`),m=u.stack.split(`
`),w=d.length-1,I=m.length-1;1<=w&&0<=I&&d[w]!==m[I];)I--;for(;1<=w&&0<=I;w--,I--)if(d[w]!==m[I]){if(w!==1||I!==1)do if(w--,I--,0>I||d[w]!==m[I]){var k=`
`+d[w].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=w&&0<=I);break}}}finally{Ae=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?$(n):""}function He(n){switch(n.tag){case 5:return $(n.type);case 16:return $("Lazy");case 13:return $("Suspense");case 19:return $("SuspenseList");case 0:case 2:case 15:return n=Re(n.type,!1),n;case 11:return n=Re(n.type.render,!1),n;case 1:return n=Re(n.type,!0),n;default:return""}}function re(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case N:return"Fragment";case F:return"Portal";case L:return"Profiler";case T:return"StrictMode";case j:return"Suspense";case se:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case U:return(n.displayName||"Context")+".Consumer";case Z:return(n._context.displayName||"Context")+".Provider";case q:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Q:return i=n.displayName||null,i!==null?i:re(n.type)||"Memo";case te:i=n._payload,n=n._init;try{return re(n(i))}catch{}}return null}function he(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return re(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ge(n){var i=Fe(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(w){u=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(w){u=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function nt(n){n._valueTracker||(n._valueTracker=Ge(n))}function Yt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return n&&(u=Fe(n)?n.checked?"true":"false":n.value),n=u,n!==a?(i.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function xt(n,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Rt(n,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),n._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ut(n,i){i=i.checked,i!=null&&C(n,"checked",i,!1)}function Ut(n,i){ut(n,i);var a=pe(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Bt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Bt(n,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function z(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Bt(n,i,a){(i!=="number"||ht(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var gt=Array.isArray;function yt(n,i,a,u){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&u&&(n[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function We(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function D(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(gt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:pe(a)}}function E(n,i){var a=pe(i.value),u=pe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),u!=null&&(n.defaultValue=""+u)}function W(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ce,Be=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,u,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ce=ce||document.createElement("div"),ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Te(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var je={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},it=["Webkit","ms","Moz","O"];Object.keys(je).forEach(function(n){it.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),je[i]=je[n]})});function xe(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||je.hasOwnProperty(n)&&je[n]?(""+i).trim():i+"px"}function Ee(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,d=xe(a,i[a],u);a==="float"&&(a="cssFloat"),u?n.setProperty(a,d):n[a]=d}}var Xe=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ke(n,i){if(i){if(Xe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Le(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lt=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var we=null,Se=null,De=null;function ye(n){if(n=To(n)){if(typeof we!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Na(i),we(n.stateNode,n.type,i))}}function fe(n){Se?De?De.push(n):De=[n]:Se=n}function ze(){if(Se){var n=Se,i=De;if(De=Se=null,ye(n),i)for(n=0;n<i.length;n++)ye(i[n])}}function rt(n,i){return n(i)}function bt(){}var St=!1;function Yn(n,i,a){if(St)return n(i,a);St=!0;try{return rt(n,i,a)}finally{St=!1,(Se!==null||De!==null)&&(bt(),ze())}}function Mn(n,i){var a=n.stateNode;if(a===null)return null;var u=Na(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var ls=!1;if(f)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){ls=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{ls=!1}function ou(n,i,a,u,d,m,w,I,k){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(a,ae)}catch(ve){this.onError(ve)}}var nr=!1,Nr=null,qn=!1,Ir=null,fa={onError:function(n){nr=!0,Nr=n}};function da(n,i,a,u,d,m,w,I,k){nr=!1,Nr=null,ou.apply(fa,arguments)}function us(n,i,a,u,d,m,w,I,k){if(da.apply(this,arguments),nr){if(nr){var ae=Nr;nr=!1,Nr=null}else throw Error(t(198));qn||(qn=!0,Ir=ae)}}function vi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Ur(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function so(n){if(vi(n)!==n)throw Error(t(188))}function ha(n){var i=n.alternate;if(!i){if(i=vi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,u=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){a=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return so(d),n;if(m===u)return so(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==u.return)a=d,u=m;else{for(var w=!1,I=d.child;I;){if(I===a){w=!0,a=d,u=m;break}if(I===u){w=!0,u=d,a=m;break}I=I.sibling}if(!w){for(I=m.child;I;){if(I===a){w=!0,a=m,u=d;break}if(I===u){w=!0,u=m,a=d;break}I=I.sibling}if(!w)throw Error(t(189))}}if(a.alternate!==u)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function pa(n){return n=ha(n),n!==null?ma(n):null}function ma(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ma(n);if(i!==null)return i;n=n.sibling}return null}var ga=e.unstable_scheduleCallback,va=e.unstable_cancelCallback,au=e.unstable_shouldYield,lu=e.unstable_requestPaint,A=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,le=e.unstable_ImmediatePriority,ie=e.unstable_UserBlockingPriority,ee=e.unstable_NormalPriority,Pe=e.unstable_LowPriority,Ue=e.unstable_IdlePriority,Ce=null,Ne=null;function Ze(n){if(Ne&&typeof Ne.onCommitFiberRoot=="function")try{Ne.onCommitFiberRoot(Ce,n,void 0,(n.current.flags&128)===128)}catch{}}var Qe=Math.clz32?Math.clz32:Pt,ct=Math.log,Ke=Math.LN2;function Pt(n){return n>>>=0,n===0?32:31-(ct(n)/Ke|0)|0}var Nt=64,Dt=4194304;function _t(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function qt(n,i){var a=n.pendingLanes;if(a===0)return 0;var u=0,d=n.suspendedLanes,m=n.pingedLanes,w=a&268435455;if(w!==0){var I=w&~d;I!==0?u=_t(I):(m&=w,m!==0&&(u=_t(m)))}else w=a&~d,w!==0?u=_t(w):m!==0&&(u=_t(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&d)===0&&(d=u&-u,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)a=31-Qe(i),d=1<<a,u|=n[a],i&=~d;return u}function qe(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,i){for(var a=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-Qe(m),I=1<<w,k=d[w];k===-1?((I&a)===0||(I&u)!==0)&&(d[w]=qe(I,i)):k<=i&&(n.expiredLanes|=I),m&=~I}}function vt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Pn(){var n=Nt;return Nt<<=1,(Nt&4194240)===0&&(Nt=64),n}function bn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Bn(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-Qe(i),n[i]=a}function ir(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-Qe(a),m=1<<d;i[d]=0,u[d]=-1,n[d]=-1,a&=~m}}function At(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var u=31-Qe(a),d=1<<u;d&i|n[u]&i&&(n[u]|=i),a&=~d}}var st=0;function si(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var jt,jn,Fi,oo,kd,uu=!1,_a=[],rr=null,sr=null,or=null,ao=new Map,lo=new Map,ar=[],l0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zd(n,i){switch(n){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":ao.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":lo.delete(i.pointerId)}}function uo(n,i,a,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},i!==null&&(i=To(i),i!==null&&jn(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function u0(n,i,a,u,d){switch(i){case"focusin":return rr=uo(rr,n,i,a,u,d),!0;case"dragenter":return sr=uo(sr,n,i,a,u,d),!0;case"mouseover":return or=uo(or,n,i,a,u,d),!0;case"pointerover":var m=d.pointerId;return ao.set(m,uo(ao.get(m)||null,n,i,a,u,d)),!0;case"gotpointercapture":return m=d.pointerId,lo.set(m,uo(lo.get(m)||null,n,i,a,u,d)),!0}return!1}function Vd(n){var i=Fr(n.target);if(i!==null){var a=vi(i);if(a!==null){if(i=a.tag,i===13){if(i=Ur(a),i!==null){n.blockedOn=i,kd(n.priority,function(){Fi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=fu(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var u=new a.constructor(a.type,a);lt=u,a.target.dispatchEvent(u),lt=null}else return i=To(a),i!==null&&jn(i),n.blockedOn=a,!1;i.shift()}return!0}function Hd(n,i,a){xa(n)&&a.delete(i)}function c0(){uu=!1,rr!==null&&xa(rr)&&(rr=null),sr!==null&&xa(sr)&&(sr=null),or!==null&&xa(or)&&(or=null),ao.forEach(Hd),lo.forEach(Hd)}function co(n,i){n.blockedOn===i&&(n.blockedOn=null,uu||(uu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,c0)))}function fo(n){function i(d){return co(d,n)}if(0<_a.length){co(_a[0],n);for(var a=1;a<_a.length;a++){var u=_a[a];u.blockedOn===n&&(u.blockedOn=null)}}for(rr!==null&&co(rr,n),sr!==null&&co(sr,n),or!==null&&co(or,n),ao.forEach(i),lo.forEach(i),a=0;a<ar.length;a++)u=ar[a],u.blockedOn===n&&(u.blockedOn=null);for(;0<ar.length&&(a=ar[0],a.blockedOn===null);)Vd(a),a.blockedOn===null&&ar.shift()}var cs=P.ReactCurrentBatchConfig,ya=!0;function f0(n,i,a,u){var d=st,m=cs.transition;cs.transition=null;try{st=1,cu(n,i,a,u)}finally{st=d,cs.transition=m}}function d0(n,i,a,u){var d=st,m=cs.transition;cs.transition=null;try{st=4,cu(n,i,a,u)}finally{st=d,cs.transition=m}}function cu(n,i,a,u){if(ya){var d=fu(n,i,a,u);if(d===null)Ru(n,i,u,Sa,a),zd(n,u);else if(u0(d,n,i,a,u))u.stopPropagation();else if(zd(n,u),i&4&&-1<l0.indexOf(n)){for(;d!==null;){var m=To(d);if(m!==null&&jt(m),m=fu(n,i,a,u),m===null&&Ru(n,i,u,Sa,a),m===d)break;d=m}d!==null&&u.stopPropagation()}else Ru(n,i,u,null,a)}}var Sa=null;function fu(n,i,a,u){if(Sa=null,n=V(u),n=Fr(n),n!==null)if(i=vi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Ur(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Sa=n,null}function Gd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case le:return 1;case ie:return 4;case ee:case Pe:return 16;case Ue:return 536870912;default:return 16}default:return 16}}var lr=null,du=null,Ma=null;function Wd(){if(Ma)return Ma;var n,i=du,a=i.length,u,d="value"in lr?lr.value:lr.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var w=a-n;for(u=1;u<=w&&i[a-u]===d[m-u];u++);return Ma=d.slice(n,1<u?1-u:void 0)}function Ea(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ta(){return!0}function Xd(){return!1}function kn(n){function i(a,u,d,m,w){this._reactName=a,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(a=n[I],this[I]=a?a(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ta:Xd,this.isPropagationStopped=Xd,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ta)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ta)},persist:function(){},isPersistent:Ta}),i}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hu=kn(fs),ho=ue({},fs,{view:0,detail:0}),h0=kn(ho),pu,mu,po,wa=ue({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==po&&(po&&n.type==="mousemove"?(pu=n.screenX-po.screenX,mu=n.screenY-po.screenY):mu=pu=0,po=n),pu)},movementY:function(n){return"movementY"in n?n.movementY:mu}}),Yd=kn(wa),p0=ue({},wa,{dataTransfer:0}),m0=kn(p0),g0=ue({},ho,{relatedTarget:0}),gu=kn(g0),v0=ue({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),_0=kn(v0),x0=ue({},fs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),y0=kn(x0),S0=ue({},fs,{data:0}),qd=kn(S0),M0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},E0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},T0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=T0[n])?!!i[n]:!1}function vu(){return w0}var A0=ue({},ho,{key:function(n){if(n.key){var i=M0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ea(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?E0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vu,charCode:function(n){return n.type==="keypress"?Ea(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ea(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),C0=kn(A0),R0=ue({},wa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jd=kn(R0),P0=ue({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vu}),b0=kn(P0),L0=ue({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),D0=kn(L0),N0=ue({},wa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),I0=kn(N0),U0=[9,13,27,32],_u=f&&"CompositionEvent"in window,mo=null;f&&"documentMode"in document&&(mo=document.documentMode);var F0=f&&"TextEvent"in window&&!mo,$d=f&&(!_u||mo&&8<mo&&11>=mo),Zd=" ",Kd=!1;function Jd(n,i){switch(n){case"keyup":return U0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qd(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ds=!1;function O0(n,i){switch(n){case"compositionend":return Qd(i);case"keypress":return i.which!==32?null:(Kd=!0,Zd);case"textInput":return n=i.data,n===Zd&&Kd?null:n;default:return null}}function B0(n,i){if(ds)return n==="compositionend"||!_u&&Jd(n,i)?(n=Wd(),Ma=du=lr=null,ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $d&&i.locale!=="ko"?null:i.data;default:return null}}var k0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function eh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!k0[n.type]:i==="textarea"}function th(n,i,a,u){fe(u),i=ba(i,"onChange"),0<i.length&&(a=new hu("onChange","change",null,a,u),n.push({event:a,listeners:i}))}var go=null,vo=null;function z0(n){xh(n,0)}function Aa(n){var i=vs(n);if(Yt(i))return n}function V0(n,i){if(n==="change")return i}var nh=!1;if(f){var xu;if(f){var yu="oninput"in document;if(!yu){var ih=document.createElement("div");ih.setAttribute("oninput","return;"),yu=typeof ih.oninput=="function"}xu=yu}else xu=!1;nh=xu&&(!document.documentMode||9<document.documentMode)}function rh(){go&&(go.detachEvent("onpropertychange",sh),vo=go=null)}function sh(n){if(n.propertyName==="value"&&Aa(vo)){var i=[];th(i,vo,n,V(n)),Yn(z0,i)}}function H0(n,i,a){n==="focusin"?(rh(),go=i,vo=a,go.attachEvent("onpropertychange",sh)):n==="focusout"&&rh()}function G0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Aa(vo)}function W0(n,i){if(n==="click")return Aa(i)}function X0(n,i){if(n==="input"||n==="change")return Aa(i)}function Y0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var oi=typeof Object.is=="function"?Object.is:Y0;function _o(n,i){if(oi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var d=a[u];if(!h.call(i,d)||!oi(n[d],i[d]))return!1}return!0}function oh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ah(n,i){var a=oh(n);n=0;for(var u;a;){if(a.nodeType===3){if(u=n+a.textContent.length,n<=i&&u>=i)return{node:a,offset:i-n};n=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=oh(a)}}function lh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?lh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function uh(){for(var n=window,i=ht();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=ht(n.document)}return i}function Su(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function q0(n){var i=uh(),a=n.focusedElem,u=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&lh(a.ownerDocument.documentElement,a)){if(u!==null&&Su(a)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(u.start,d);u=u.end===void 0?m:Math.min(u.end,d),!n.extend&&m>u&&(d=u,u=m,m=d),d=ah(a,m);var w=ah(a,u);d&&w&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>u?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var j0=f&&"documentMode"in document&&11>=document.documentMode,hs=null,Mu=null,xo=null,Eu=!1;function ch(n,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Eu||hs==null||hs!==ht(u)||(u=hs,"selectionStart"in u&&Su(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),xo&&_o(xo,u)||(xo=u,u=ba(Mu,"onSelect"),0<u.length&&(i=new hu("onSelect","select",null,i,a),n.push({event:i,listeners:u}),i.target=hs)))}function Ca(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var ps={animationend:Ca("Animation","AnimationEnd"),animationiteration:Ca("Animation","AnimationIteration"),animationstart:Ca("Animation","AnimationStart"),transitionend:Ca("Transition","TransitionEnd")},Tu={},fh={};f&&(fh=document.createElement("div").style,"AnimationEvent"in window||(delete ps.animationend.animation,delete ps.animationiteration.animation,delete ps.animationstart.animation),"TransitionEvent"in window||delete ps.transitionend.transition);function Ra(n){if(Tu[n])return Tu[n];if(!ps[n])return n;var i=ps[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in fh)return Tu[n]=i[a];return n}var dh=Ra("animationend"),hh=Ra("animationiteration"),ph=Ra("animationstart"),mh=Ra("transitionend"),gh=new Map,vh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(n,i){gh.set(n,i),l(i,[n])}for(var wu=0;wu<vh.length;wu++){var Au=vh[wu],$0=Au.toLowerCase(),Z0=Au[0].toUpperCase()+Au.slice(1);ur($0,"on"+Z0)}ur(dh,"onAnimationEnd"),ur(hh,"onAnimationIteration"),ur(ph,"onAnimationStart"),ur("dblclick","onDoubleClick"),ur("focusin","onFocus"),ur("focusout","onBlur"),ur(mh,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K0=new Set("cancel close invalid load scroll toggle".split(" ").concat(yo));function _h(n,i,a){var u=n.type||"unknown-event";n.currentTarget=a,us(u,i,void 0,n),n.currentTarget=null}function xh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var u=n[a],d=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var w=u.length-1;0<=w;w--){var I=u[w],k=I.instance,ae=I.currentTarget;if(I=I.listener,k!==m&&d.isPropagationStopped())break e;_h(d,I,ae),m=k}else for(w=0;w<u.length;w++){if(I=u[w],k=I.instance,ae=I.currentTarget,I=I.listener,k!==m&&d.isPropagationStopped())break e;_h(d,I,ae),m=k}}}if(qn)throw n=Ir,qn=!1,Ir=null,n}function Ft(n,i){var a=i[Iu];a===void 0&&(a=i[Iu]=new Set);var u=n+"__bubble";a.has(u)||(yh(i,n,2,!1),a.add(u))}function Cu(n,i,a){var u=0;i&&(u|=4),yh(a,n,u,i)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function So(n){if(!n[Pa]){n[Pa]=!0,r.forEach(function(a){a!=="selectionchange"&&(K0.has(a)||Cu(a,!1,n),Cu(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Pa]||(i[Pa]=!0,Cu("selectionchange",!1,i))}}function yh(n,i,a,u){switch(Gd(i)){case 1:var d=f0;break;case 4:d=d0;break;default:d=cu}a=d.bind(null,i,a,n),d=void 0,!ls||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Ru(n,i,a,u,d){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var w=u.tag;if(w===3||w===4){var I=u.stateNode.containerInfo;if(I===d||I.nodeType===8&&I.parentNode===d)break;if(w===4)for(w=u.return;w!==null;){var k=w.tag;if((k===3||k===4)&&(k=w.stateNode.containerInfo,k===d||k.nodeType===8&&k.parentNode===d))return;w=w.return}for(;I!==null;){if(w=Fr(I),w===null)return;if(k=w.tag,k===5||k===6){u=m=w;continue e}I=I.parentNode}}u=u.return}Yn(function(){var ae=m,ve=V(a),_e=[];e:{var ge=gh.get(n);if(ge!==void 0){var Ie=hu,Ve=n;switch(n){case"keypress":if(Ea(a)===0)break e;case"keydown":case"keyup":Ie=C0;break;case"focusin":Ve="focus",Ie=gu;break;case"focusout":Ve="blur",Ie=gu;break;case"beforeblur":case"afterblur":Ie=gu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ie=Yd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ie=m0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ie=b0;break;case dh:case hh:case ph:Ie=_0;break;case mh:Ie=D0;break;case"scroll":Ie=h0;break;case"wheel":Ie=I0;break;case"copy":case"cut":case"paste":Ie=y0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ie=jd}var Ye=(i&4)!==0,$t=!Ye&&n==="scroll",K=Ye?ge!==null?ge+"Capture":null:ge;Ye=[];for(var H=ae,ne;H!==null;){ne=H;var Me=ne.stateNode;if(ne.tag===5&&Me!==null&&(ne=Me,K!==null&&(Me=Mn(H,K),Me!=null&&Ye.push(Mo(H,Me,ne)))),$t)break;H=H.return}0<Ye.length&&(ge=new Ie(ge,Ve,null,a,ve),_e.push({event:ge,listeners:Ye}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Ie=n==="mouseout"||n==="pointerout",ge&&a!==lt&&(Ve=a.relatedTarget||a.fromElement)&&(Fr(Ve)||Ve[Oi]))break e;if((Ie||ge)&&(ge=ve.window===ve?ve:(ge=ve.ownerDocument)?ge.defaultView||ge.parentWindow:window,Ie?(Ve=a.relatedTarget||a.toElement,Ie=ae,Ve=Ve?Fr(Ve):null,Ve!==null&&($t=vi(Ve),Ve!==$t||Ve.tag!==5&&Ve.tag!==6)&&(Ve=null)):(Ie=null,Ve=ae),Ie!==Ve)){if(Ye=Yd,Me="onMouseLeave",K="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=jd,Me="onPointerLeave",K="onPointerEnter",H="pointer"),$t=Ie==null?ge:vs(Ie),ne=Ve==null?ge:vs(Ve),ge=new Ye(Me,H+"leave",Ie,a,ve),ge.target=$t,ge.relatedTarget=ne,Me=null,Fr(ve)===ae&&(Ye=new Ye(K,H+"enter",Ve,a,ve),Ye.target=ne,Ye.relatedTarget=$t,Me=Ye),$t=Me,Ie&&Ve)t:{for(Ye=Ie,K=Ve,H=0,ne=Ye;ne;ne=ms(ne))H++;for(ne=0,Me=K;Me;Me=ms(Me))ne++;for(;0<H-ne;)Ye=ms(Ye),H--;for(;0<ne-H;)K=ms(K),ne--;for(;H--;){if(Ye===K||K!==null&&Ye===K.alternate)break t;Ye=ms(Ye),K=ms(K)}Ye=null}else Ye=null;Ie!==null&&Sh(_e,ge,Ie,Ye,!1),Ve!==null&&$t!==null&&Sh(_e,$t,Ve,Ye,!0)}}e:{if(ge=ae?vs(ae):window,Ie=ge.nodeName&&ge.nodeName.toLowerCase(),Ie==="select"||Ie==="input"&&ge.type==="file")var $e=V0;else if(eh(ge))if(nh)$e=X0;else{$e=G0;var et=H0}else(Ie=ge.nodeName)&&Ie.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&($e=W0);if($e&&($e=$e(n,ae))){th(_e,$e,a,ve);break e}et&&et(n,ge,ae),n==="focusout"&&(et=ge._wrapperState)&&et.controlled&&ge.type==="number"&&Bt(ge,"number",ge.value)}switch(et=ae?vs(ae):window,n){case"focusin":(eh(et)||et.contentEditable==="true")&&(hs=et,Mu=ae,xo=null);break;case"focusout":xo=Mu=hs=null;break;case"mousedown":Eu=!0;break;case"contextmenu":case"mouseup":case"dragend":Eu=!1,ch(_e,a,ve);break;case"selectionchange":if(j0)break;case"keydown":case"keyup":ch(_e,a,ve)}var tt;if(_u)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else ds?Jd(n,a)&&(ot="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&($d&&a.locale!=="ko"&&(ds||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&ds&&(tt=Wd()):(lr=ve,du="value"in lr?lr.value:lr.textContent,ds=!0)),et=ba(ae,ot),0<et.length&&(ot=new qd(ot,n,null,a,ve),_e.push({event:ot,listeners:et}),tt?ot.data=tt:(tt=Qd(a),tt!==null&&(ot.data=tt)))),(tt=F0?O0(n,a):B0(n,a))&&(ae=ba(ae,"onBeforeInput"),0<ae.length&&(ve=new qd("onBeforeInput","beforeinput",null,a,ve),_e.push({event:ve,listeners:ae}),ve.data=tt))}xh(_e,i)})}function Mo(n,i,a){return{instance:n,listener:i,currentTarget:a}}function ba(n,i){for(var a=i+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=Mn(n,a),m!=null&&u.unshift(Mo(n,m,d)),m=Mn(n,i),m!=null&&u.push(Mo(n,m,d))),n=n.return}return u}function ms(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Sh(n,i,a,u,d){for(var m=i._reactName,w=[];a!==null&&a!==u;){var I=a,k=I.alternate,ae=I.stateNode;if(k!==null&&k===u)break;I.tag===5&&ae!==null&&(I=ae,d?(k=Mn(a,m),k!=null&&w.unshift(Mo(a,k,I))):d||(k=Mn(a,m),k!=null&&w.push(Mo(a,k,I)))),a=a.return}w.length!==0&&n.push({event:i,listeners:w})}var J0=/\r\n?/g,Q0=/\u0000|\uFFFD/g;function Mh(n){return(typeof n=="string"?n:""+n).replace(J0,`
`).replace(Q0,"")}function La(n,i,a){if(i=Mh(i),Mh(n)!==i&&a)throw Error(t(425))}function Da(){}var Pu=null,bu=null;function Lu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Du=typeof setTimeout=="function"?setTimeout:void 0,ev=typeof clearTimeout=="function"?clearTimeout:void 0,Eh=typeof Promise=="function"?Promise:void 0,tv=typeof queueMicrotask=="function"?queueMicrotask:typeof Eh<"u"?function(n){return Eh.resolve(null).then(n).catch(nv)}:Du;function nv(n){setTimeout(function(){throw n})}function Nu(n,i){var a=i,u=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(u===0){n.removeChild(d),fo(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=d}while(a);fo(i)}function cr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Th(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var gs=Math.random().toString(36).slice(2),_i="__reactFiber$"+gs,Eo="__reactProps$"+gs,Oi="__reactContainer$"+gs,Iu="__reactEvents$"+gs,iv="__reactListeners$"+gs,rv="__reactHandles$"+gs;function Fr(n){var i=n[_i];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Oi]||a[_i]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Th(n);n!==null;){if(a=n[_i])return a;n=Th(n)}return i}n=a,a=n.parentNode}return null}function To(n){return n=n[_i]||n[Oi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function vs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Na(n){return n[Eo]||null}var Uu=[],_s=-1;function fr(n){return{current:n}}function Ot(n){0>_s||(n.current=Uu[_s],Uu[_s]=null,_s--)}function It(n,i){_s++,Uu[_s]=n.current,n.current=i}var dr={},hn=fr(dr),Ln=fr(!1),Or=dr;function xs(n,i){var a=n.type.contextTypes;if(!a)return dr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Dn(n){return n=n.childContextTypes,n!=null}function Ia(){Ot(Ln),Ot(hn)}function wh(n,i,a){if(hn.current!==dr)throw Error(t(168));It(hn,i),It(Ln,a)}function Ah(n,i,a){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var d in u)if(!(d in i))throw Error(t(108,he(n)||"Unknown",d));return ue({},a,u)}function Ua(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||dr,Or=hn.current,It(hn,n),It(Ln,Ln.current),!0}function Ch(n,i,a){var u=n.stateNode;if(!u)throw Error(t(169));a?(n=Ah(n,i,Or),u.__reactInternalMemoizedMergedChildContext=n,Ot(Ln),Ot(hn),It(hn,n)):Ot(Ln),It(Ln,a)}var Bi=null,Fa=!1,Fu=!1;function Rh(n){Bi===null?Bi=[n]:Bi.push(n)}function sv(n){Fa=!0,Rh(n)}function hr(){if(!Fu&&Bi!==null){Fu=!0;var n=0,i=st;try{var a=Bi;for(st=1;n<a.length;n++){var u=a[n];do u=u(!0);while(u!==null)}Bi=null,Fa=!1}catch(d){throw Bi!==null&&(Bi=Bi.slice(n+1)),ga(le,hr),d}finally{st=i,Fu=!1}}return null}var ys=[],Ss=0,Oa=null,Ba=0,$n=[],Zn=0,Br=null,ki=1,zi="";function kr(n,i){ys[Ss++]=Ba,ys[Ss++]=Oa,Oa=n,Ba=i}function Ph(n,i,a){$n[Zn++]=ki,$n[Zn++]=zi,$n[Zn++]=Br,Br=n;var u=ki;n=zi;var d=32-Qe(u)-1;u&=~(1<<d),a+=1;var m=32-Qe(i)+d;if(30<m){var w=d-d%5;m=(u&(1<<w)-1).toString(32),u>>=w,d-=w,ki=1<<32-Qe(i)+d|a<<d|u,zi=m+n}else ki=1<<m|a<<d|u,zi=n}function Ou(n){n.return!==null&&(kr(n,1),Ph(n,1,0))}function Bu(n){for(;n===Oa;)Oa=ys[--Ss],ys[Ss]=null,Ba=ys[--Ss],ys[Ss]=null;for(;n===Br;)Br=$n[--Zn],$n[Zn]=null,zi=$n[--Zn],$n[Zn]=null,ki=$n[--Zn],$n[Zn]=null}var zn=null,Vn=null,kt=!1,ai=null;function bh(n,i){var a=ei(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Lh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,zn=n,Vn=cr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,zn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Br!==null?{id:ki,overflow:zi}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=ei(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,zn=n,Vn=null,!0):!1;default:return!1}}function ku(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zu(n){if(kt){var i=Vn;if(i){var a=i;if(!Lh(n,i)){if(ku(n))throw Error(t(418));i=cr(a.nextSibling);var u=zn;i&&Lh(n,i)?bh(u,a):(n.flags=n.flags&-4097|2,kt=!1,zn=n)}}else{if(ku(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,zn=n}}}function Dh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;zn=n}function ka(n){if(n!==zn)return!1;if(!kt)return Dh(n),kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Lu(n.type,n.memoizedProps)),i&&(i=Vn)){if(ku(n))throw Nh(),Error(t(418));for(;i;)bh(n,i),i=cr(i.nextSibling)}if(Dh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Vn=cr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=zn?cr(n.stateNode.nextSibling):null;return!0}function Nh(){for(var n=Vn;n;)n=cr(n.nextSibling)}function Ms(){Vn=zn=null,kt=!1}function Vu(n){ai===null?ai=[n]:ai.push(n)}var ov=P.ReactCurrentBatchConfig;function wo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var u=a.stateNode}if(!u)throw Error(t(147,n));var d=u,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var I=d.refs;w===null?delete I[m]:I[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function za(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Ih(n){var i=n._init;return i(n._payload)}function Uh(n){function i(K,H){if(n){var ne=K.deletions;ne===null?(K.deletions=[H],K.flags|=16):ne.push(H)}}function a(K,H){if(!n)return null;for(;H!==null;)i(K,H),H=H.sibling;return null}function u(K,H){for(K=new Map;H!==null;)H.key!==null?K.set(H.key,H):K.set(H.index,H),H=H.sibling;return K}function d(K,H){return K=Sr(K,H),K.index=0,K.sibling=null,K}function m(K,H,ne){return K.index=ne,n?(ne=K.alternate,ne!==null?(ne=ne.index,ne<H?(K.flags|=2,H):ne):(K.flags|=2,H)):(K.flags|=1048576,H)}function w(K){return n&&K.alternate===null&&(K.flags|=2),K}function I(K,H,ne,Me){return H===null||H.tag!==6?(H=Dc(ne,K.mode,Me),H.return=K,H):(H=d(H,ne),H.return=K,H)}function k(K,H,ne,Me){var $e=ne.type;return $e===N?ve(K,H,ne.props.children,Me,ne.key):H!==null&&(H.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===te&&Ih($e)===H.type)?(Me=d(H,ne.props),Me.ref=wo(K,H,ne),Me.return=K,Me):(Me=cl(ne.type,ne.key,ne.props,null,K.mode,Me),Me.ref=wo(K,H,ne),Me.return=K,Me)}function ae(K,H,ne,Me){return H===null||H.tag!==4||H.stateNode.containerInfo!==ne.containerInfo||H.stateNode.implementation!==ne.implementation?(H=Nc(ne,K.mode,Me),H.return=K,H):(H=d(H,ne.children||[]),H.return=K,H)}function ve(K,H,ne,Me,$e){return H===null||H.tag!==7?(H=qr(ne,K.mode,Me,$e),H.return=K,H):(H=d(H,ne),H.return=K,H)}function _e(K,H,ne){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Dc(""+H,K.mode,ne),H.return=K,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case B:return ne=cl(H.type,H.key,H.props,null,K.mode,ne),ne.ref=wo(K,null,H),ne.return=K,ne;case F:return H=Nc(H,K.mode,ne),H.return=K,H;case te:var Me=H._init;return _e(K,Me(H._payload),ne)}if(gt(H)||oe(H))return H=qr(H,K.mode,ne,null),H.return=K,H;za(K,H)}return null}function ge(K,H,ne,Me){var $e=H!==null?H.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return $e!==null?null:I(K,H,""+ne,Me);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case B:return ne.key===$e?k(K,H,ne,Me):null;case F:return ne.key===$e?ae(K,H,ne,Me):null;case te:return $e=ne._init,ge(K,H,$e(ne._payload),Me)}if(gt(ne)||oe(ne))return $e!==null?null:ve(K,H,ne,Me,null);za(K,ne)}return null}function Ie(K,H,ne,Me,$e){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return K=K.get(ne)||null,I(H,K,""+Me,$e);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case B:return K=K.get(Me.key===null?ne:Me.key)||null,k(H,K,Me,$e);case F:return K=K.get(Me.key===null?ne:Me.key)||null,ae(H,K,Me,$e);case te:var et=Me._init;return Ie(K,H,ne,et(Me._payload),$e)}if(gt(Me)||oe(Me))return K=K.get(ne)||null,ve(H,K,Me,$e,null);za(H,Me)}return null}function Ve(K,H,ne,Me){for(var $e=null,et=null,tt=H,ot=H=0,on=null;tt!==null&&ot<ne.length;ot++){tt.index>ot?(on=tt,tt=null):on=tt.sibling;var Tt=ge(K,tt,ne[ot],Me);if(Tt===null){tt===null&&(tt=on);break}n&&tt&&Tt.alternate===null&&i(K,tt),H=m(Tt,H,ot),et===null?$e=Tt:et.sibling=Tt,et=Tt,tt=on}if(ot===ne.length)return a(K,tt),kt&&kr(K,ot),$e;if(tt===null){for(;ot<ne.length;ot++)tt=_e(K,ne[ot],Me),tt!==null&&(H=m(tt,H,ot),et===null?$e=tt:et.sibling=tt,et=tt);return kt&&kr(K,ot),$e}for(tt=u(K,tt);ot<ne.length;ot++)on=Ie(tt,K,ot,ne[ot],Me),on!==null&&(n&&on.alternate!==null&&tt.delete(on.key===null?ot:on.key),H=m(on,H,ot),et===null?$e=on:et.sibling=on,et=on);return n&&tt.forEach(function(Mr){return i(K,Mr)}),kt&&kr(K,ot),$e}function Ye(K,H,ne,Me){var $e=oe(ne);if(typeof $e!="function")throw Error(t(150));if(ne=$e.call(ne),ne==null)throw Error(t(151));for(var et=$e=null,tt=H,ot=H=0,on=null,Tt=ne.next();tt!==null&&!Tt.done;ot++,Tt=ne.next()){tt.index>ot?(on=tt,tt=null):on=tt.sibling;var Mr=ge(K,tt,Tt.value,Me);if(Mr===null){tt===null&&(tt=on);break}n&&tt&&Mr.alternate===null&&i(K,tt),H=m(Mr,H,ot),et===null?$e=Mr:et.sibling=Mr,et=Mr,tt=on}if(Tt.done)return a(K,tt),kt&&kr(K,ot),$e;if(tt===null){for(;!Tt.done;ot++,Tt=ne.next())Tt=_e(K,Tt.value,Me),Tt!==null&&(H=m(Tt,H,ot),et===null?$e=Tt:et.sibling=Tt,et=Tt);return kt&&kr(K,ot),$e}for(tt=u(K,tt);!Tt.done;ot++,Tt=ne.next())Tt=Ie(tt,K,ot,Tt.value,Me),Tt!==null&&(n&&Tt.alternate!==null&&tt.delete(Tt.key===null?ot:Tt.key),H=m(Tt,H,ot),et===null?$e=Tt:et.sibling=Tt,et=Tt);return n&&tt.forEach(function(kv){return i(K,kv)}),kt&&kr(K,ot),$e}function $t(K,H,ne,Me){if(typeof ne=="object"&&ne!==null&&ne.type===N&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case B:e:{for(var $e=ne.key,et=H;et!==null;){if(et.key===$e){if($e=ne.type,$e===N){if(et.tag===7){a(K,et.sibling),H=d(et,ne.props.children),H.return=K,K=H;break e}}else if(et.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===te&&Ih($e)===et.type){a(K,et.sibling),H=d(et,ne.props),H.ref=wo(K,et,ne),H.return=K,K=H;break e}a(K,et);break}else i(K,et);et=et.sibling}ne.type===N?(H=qr(ne.props.children,K.mode,Me,ne.key),H.return=K,K=H):(Me=cl(ne.type,ne.key,ne.props,null,K.mode,Me),Me.ref=wo(K,H,ne),Me.return=K,K=Me)}return w(K);case F:e:{for(et=ne.key;H!==null;){if(H.key===et)if(H.tag===4&&H.stateNode.containerInfo===ne.containerInfo&&H.stateNode.implementation===ne.implementation){a(K,H.sibling),H=d(H,ne.children||[]),H.return=K,K=H;break e}else{a(K,H);break}else i(K,H);H=H.sibling}H=Nc(ne,K.mode,Me),H.return=K,K=H}return w(K);case te:return et=ne._init,$t(K,H,et(ne._payload),Me)}if(gt(ne))return Ve(K,H,ne,Me);if(oe(ne))return Ye(K,H,ne,Me);za(K,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,H!==null&&H.tag===6?(a(K,H.sibling),H=d(H,ne),H.return=K,K=H):(a(K,H),H=Dc(ne,K.mode,Me),H.return=K,K=H),w(K)):a(K,H)}return $t}var Es=Uh(!0),Fh=Uh(!1),Va=fr(null),Ha=null,Ts=null,Hu=null;function Gu(){Hu=Ts=Ha=null}function Wu(n){var i=Va.current;Ot(Va),n._currentValue=i}function Xu(n,i,a){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===a)break;n=n.return}}function ws(n,i){Ha=n,Hu=Ts=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Nn=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(Hu!==n)if(n={context:n,memoizedValue:i,next:null},Ts===null){if(Ha===null)throw Error(t(308));Ts=n,Ha.dependencies={lanes:0,firstContext:n}}else Ts=Ts.next=n;return i}var zr=null;function Yu(n){zr===null?zr=[n]:zr.push(n)}function Oh(n,i,a,u){var d=i.interleaved;return d===null?(a.next=a,Yu(i)):(a.next=d.next,d.next=a),i.interleaved=a,Vi(n,u)}function Vi(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var pr=!1;function qu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(n,i,a){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Mt&2)!==0){var d=u.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),u.pending=i,Vi(n,a)}return d=u.interleaved,d===null?(i.next=i,Yu(u)):(i.next=d.next,d.next=i),u.interleaved=i,Vi(n,a)}function Ga(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,At(n,a)}}function kh(n,i){var a=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var w={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=w:m=m.next=w,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,effects:u.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Wa(n,i,a,u){var d=n.updateQueue;pr=!1;var m=d.firstBaseUpdate,w=d.lastBaseUpdate,I=d.shared.pending;if(I!==null){d.shared.pending=null;var k=I,ae=k.next;k.next=null,w===null?m=ae:w.next=ae,w=k;var ve=n.alternate;ve!==null&&(ve=ve.updateQueue,I=ve.lastBaseUpdate,I!==w&&(I===null?ve.firstBaseUpdate=ae:I.next=ae,ve.lastBaseUpdate=k))}if(m!==null){var _e=d.baseState;w=0,ve=ae=k=null,I=m;do{var ge=I.lane,Ie=I.eventTime;if((u&ge)===ge){ve!==null&&(ve=ve.next={eventTime:Ie,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ve=n,Ye=I;switch(ge=i,Ie=a,Ye.tag){case 1:if(Ve=Ye.payload,typeof Ve=="function"){_e=Ve.call(Ie,_e,ge);break e}_e=Ve;break e;case 3:Ve.flags=Ve.flags&-65537|128;case 0:if(Ve=Ye.payload,ge=typeof Ve=="function"?Ve.call(Ie,_e,ge):Ve,ge==null)break e;_e=ue({},_e,ge);break e;case 2:pr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[I]:ge.push(I))}else Ie={eventTime:Ie,lane:ge,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ve===null?(ae=ve=Ie,k=_e):ve=ve.next=Ie,w|=ge;if(I=I.next,I===null){if(I=d.shared.pending,I===null)break;ge=I,I=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(ve===null&&(k=_e),d.baseState=k,d.firstBaseUpdate=ae,d.lastBaseUpdate=ve,i=d.shared.interleaved,i!==null){d=i;do w|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);Gr|=w,n.lanes=w,n.memoizedState=_e}}function zh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],d=u.callback;if(d!==null){if(u.callback=null,u=a,typeof d!="function")throw Error(t(191,d));d.call(u)}}}var Ao={},xi=fr(Ao),Co=fr(Ao),Ro=fr(Ao);function Vr(n){if(n===Ao)throw Error(t(174));return n}function ju(n,i){switch(It(Ro,i),It(Co,n),It(xi,Ao),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}Ot(xi),It(xi,i)}function As(){Ot(xi),Ot(Co),Ot(Ro)}function Vh(n){Vr(Ro.current);var i=Vr(xi.current),a=me(i,n.type);i!==a&&(It(Co,n),It(xi,a))}function $u(n){Co.current===n&&(Ot(xi),Ot(Co))}var zt=fr(0);function Xa(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Zu=[];function Ku(){for(var n=0;n<Zu.length;n++)Zu[n]._workInProgressVersionPrimary=null;Zu.length=0}var Ya=P.ReactCurrentDispatcher,Ju=P.ReactCurrentBatchConfig,Hr=0,Vt=null,Qt=null,rn=null,qa=!1,Po=!1,bo=0,av=0;function pn(){throw Error(t(321))}function Qu(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!oi(n[a],i[a]))return!1;return!0}function ec(n,i,a,u,d,m){if(Hr=m,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ya.current=n===null||n.memoizedState===null?fv:dv,n=a(u,d),Po){m=0;do{if(Po=!1,bo=0,25<=m)throw Error(t(301));m+=1,rn=Qt=null,i.updateQueue=null,Ya.current=hv,n=a(u,d)}while(Po)}if(Ya.current=Za,i=Qt!==null&&Qt.next!==null,Hr=0,rn=Qt=Vt=null,qa=!1,i)throw Error(t(300));return n}function tc(){var n=bo!==0;return bo=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?Vt.memoizedState=rn=n:rn=rn.next=n,rn}function Jn(){if(Qt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var i=rn===null?Vt.memoizedState:rn.next;if(i!==null)rn=i,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},rn===null?Vt.memoizedState=rn=n:rn=rn.next=n}return rn}function Lo(n,i){return typeof i=="function"?i(n):i}function nc(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=Qt,d=u.baseQueue,m=a.pending;if(m!==null){if(d!==null){var w=d.next;d.next=m.next,m.next=w}u.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,u=u.baseState;var I=w=null,k=null,ae=m;do{var ve=ae.lane;if((Hr&ve)===ve)k!==null&&(k=k.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),u=ae.hasEagerState?ae.eagerState:n(u,ae.action);else{var _e={lane:ve,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};k===null?(I=k=_e,w=u):k=k.next=_e,Vt.lanes|=ve,Gr|=ve}ae=ae.next}while(ae!==null&&ae!==m);k===null?w=u:k.next=I,oi(u,i.memoizedState)||(Nn=!0),i.memoizedState=u,i.baseState=w,i.baseQueue=k,a.lastRenderedState=u}if(n=a.interleaved,n!==null){d=n;do m=d.lane,Vt.lanes|=m,Gr|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ic(n){var i=Jn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var u=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var w=d=d.next;do m=n(m,w.action),w=w.next;while(w!==d);oi(m,i.memoizedState)||(Nn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function Hh(){}function Gh(n,i){var a=Vt,u=Jn(),d=i(),m=!oi(u.memoizedState,d);if(m&&(u.memoizedState=d,Nn=!0),u=u.queue,rc(Yh.bind(null,a,u,n),[n]),u.getSnapshot!==i||m||rn!==null&&rn.memoizedState.tag&1){if(a.flags|=2048,Do(9,Xh.bind(null,a,u,d,i),void 0,null),sn===null)throw Error(t(349));(Hr&30)!==0||Wh(a,i,d)}return d}function Wh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Xh(n,i,a,u){i.value=a,i.getSnapshot=u,qh(i)&&jh(n)}function Yh(n,i,a){return a(function(){qh(i)&&jh(n)})}function qh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!oi(n,a)}catch{return!0}}function jh(n){var i=Vi(n,1);i!==null&&fi(i,n,1,-1)}function $h(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Lo,lastRenderedState:n},i.queue=n,n=n.dispatch=cv.bind(null,Vt,n),[i.memoizedState,n]}function Do(n,i,a,u){return n={tag:n,create:i,destroy:a,deps:u,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(u=a.next,a.next=n,n.next=u,i.lastEffect=n)),n}function Zh(){return Jn().memoizedState}function ja(n,i,a,u){var d=yi();Vt.flags|=n,d.memoizedState=Do(1|i,a,void 0,u===void 0?null:u)}function $a(n,i,a,u){var d=Jn();u=u===void 0?null:u;var m=void 0;if(Qt!==null){var w=Qt.memoizedState;if(m=w.destroy,u!==null&&Qu(u,w.deps)){d.memoizedState=Do(i,a,m,u);return}}Vt.flags|=n,d.memoizedState=Do(1|i,a,m,u)}function Kh(n,i){return ja(8390656,8,n,i)}function rc(n,i){return $a(2048,8,n,i)}function Jh(n,i){return $a(4,2,n,i)}function Qh(n,i){return $a(4,4,n,i)}function ep(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function tp(n,i,a){return a=a!=null?a.concat([n]):null,$a(4,4,ep.bind(null,i,n),a)}function sc(){}function np(n,i){var a=Jn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Qu(i,u[1])?u[0]:(a.memoizedState=[n,i],n)}function ip(n,i){var a=Jn();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&Qu(i,u[1])?u[0]:(n=n(),a.memoizedState=[n,i],n)}function rp(n,i,a){return(Hr&21)===0?(n.baseState&&(n.baseState=!1,Nn=!0),n.memoizedState=a):(oi(a,i)||(a=Pn(),Vt.lanes|=a,Gr|=a,n.baseState=!0),i)}function lv(n,i){var a=st;st=a!==0&&4>a?a:4,n(!0);var u=Ju.transition;Ju.transition={};try{n(!1),i()}finally{st=a,Ju.transition=u}}function sp(){return Jn().memoizedState}function uv(n,i,a){var u=xr(n);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},op(n))ap(i,a);else if(a=Oh(n,i,a,u),a!==null){var d=wn();fi(a,n,u,d),lp(a,i,u)}}function cv(n,i,a){var u=xr(n),d={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(op(n))ap(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,I=m(w,a);if(d.hasEagerState=!0,d.eagerState=I,oi(I,w)){var k=i.interleaved;k===null?(d.next=d,Yu(i)):(d.next=k.next,k.next=d),i.interleaved=d;return}}catch{}finally{}a=Oh(n,i,d,u),a!==null&&(d=wn(),fi(a,n,u,d),lp(a,i,u))}}function op(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function ap(n,i){Po=qa=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function lp(n,i,a){if((a&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,a|=u,i.lanes=a,At(n,a)}}var Za={readContext:Kn,useCallback:pn,useContext:pn,useEffect:pn,useImperativeHandle:pn,useInsertionEffect:pn,useLayoutEffect:pn,useMemo:pn,useReducer:pn,useRef:pn,useState:pn,useDebugValue:pn,useDeferredValue:pn,useTransition:pn,useMutableSource:pn,useSyncExternalStore:pn,useId:pn,unstable_isNewReconciler:!1},fv={readContext:Kn,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:Kh,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,ja(4194308,4,ep.bind(null,i,n),a)},useLayoutEffect:function(n,i){return ja(4194308,4,n,i)},useInsertionEffect:function(n,i){return ja(4,2,n,i)},useMemo:function(n,i){var a=yi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var u=yi();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=uv.bind(null,Vt,n),[u.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:$h,useDebugValue:sc,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=$h(!1),i=n[0];return n=lv.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var u=Vt,d=yi();if(kt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),sn===null)throw Error(t(349));(Hr&30)!==0||Wh(u,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,Kh(Yh.bind(null,u,m,n),[n]),u.flags|=2048,Do(9,Xh.bind(null,u,m,a,i),void 0,null),a},useId:function(){var n=yi(),i=sn.identifierPrefix;if(kt){var a=zi,u=ki;a=(u&~(1<<32-Qe(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=bo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=av++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},dv={readContext:Kn,useCallback:np,useContext:Kn,useEffect:rc,useImperativeHandle:tp,useInsertionEffect:Jh,useLayoutEffect:Qh,useMemo:ip,useReducer:nc,useRef:Zh,useState:function(){return nc(Lo)},useDebugValue:sc,useDeferredValue:function(n){var i=Jn();return rp(i,Qt.memoizedState,n)},useTransition:function(){var n=nc(Lo)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:Hh,useSyncExternalStore:Gh,useId:sp,unstable_isNewReconciler:!1},hv={readContext:Kn,useCallback:np,useContext:Kn,useEffect:rc,useImperativeHandle:tp,useInsertionEffect:Jh,useLayoutEffect:Qh,useMemo:ip,useReducer:ic,useRef:Zh,useState:function(){return ic(Lo)},useDebugValue:sc,useDeferredValue:function(n){var i=Jn();return Qt===null?i.memoizedState=n:rp(i,Qt.memoizedState,n)},useTransition:function(){var n=ic(Lo)[0],i=Jn().memoizedState;return[n,i]},useMutableSource:Hh,useSyncExternalStore:Gh,useId:sp,unstable_isNewReconciler:!1};function li(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function oc(n,i,a,u){i=n.memoizedState,a=a(u,i),a=a==null?i:ue({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ka={isMounted:function(n){return(n=n._reactInternals)?vi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var u=wn(),d=xr(n),m=Hi(u,d);m.payload=i,a!=null&&(m.callback=a),i=mr(n,m,d),i!==null&&(fi(i,n,d,u),Ga(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var u=wn(),d=xr(n),m=Hi(u,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=mr(n,m,d),i!==null&&(fi(i,n,d,u),Ga(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=wn(),u=xr(n),d=Hi(a,u);d.tag=2,i!=null&&(d.callback=i),i=mr(n,d,u),i!==null&&(fi(i,n,u,a),Ga(i,n,u))}};function up(n,i,a,u,d,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,w):i.prototype&&i.prototype.isPureReactComponent?!_o(a,u)||!_o(d,m):!0}function cp(n,i,a){var u=!1,d=dr,m=i.contextType;return typeof m=="object"&&m!==null?m=Kn(m):(d=Dn(i)?Or:hn.current,u=i.contextTypes,m=(u=u!=null)?xs(n,d):dr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ka,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function fp(n,i,a,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==n&&Ka.enqueueReplaceState(i,i.state,null)}function ac(n,i,a,u){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},qu(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=Kn(m):(m=Dn(i)?Or:hn.current,d.context=xs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(oc(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Ka.enqueueReplaceState(d,d.state,null),Wa(n,a,d,u),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Cs(n,i){try{var a="",u=i;do a+=He(u),u=u.return;while(u);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function lc(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function uc(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var pv=typeof WeakMap=="function"?WeakMap:Map;function dp(n,i,a){a=Hi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){rl||(rl=!0,Tc=u),uc(n,i)},a}function hp(n,i,a){a=Hi(-1,a),a.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var d=i.value;a.payload=function(){return u(d)},a.callback=function(){uc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){uc(n,i),typeof u!="function"&&(vr===null?vr=new Set([this]):vr.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),a}function pp(n,i,a){var u=n.pingCache;if(u===null){u=n.pingCache=new pv;var d=new Set;u.set(i,d)}else d=u.get(i),d===void 0&&(d=new Set,u.set(i,d));d.has(a)||(d.add(a),n=Rv.bind(null,n,i,a),i.then(n,n))}function mp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function gp(n,i,a,u,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Hi(-1,1),i.tag=2,mr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var mv=P.ReactCurrentOwner,Nn=!1;function Tn(n,i,a,u){i.child=n===null?Fh(i,null,a,u):Es(i,n.child,a,u)}function vp(n,i,a,u,d){a=a.render;var m=i.ref;return ws(i,d),u=ec(n,i,a,u,m,d),a=tc(),n!==null&&!Nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Gi(n,i,d)):(kt&&a&&Ou(i),i.flags|=1,Tn(n,i,u,d),i.child)}function _p(n,i,a,u,d){if(n===null){var m=a.type;return typeof m=="function"&&!Lc(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,xp(n,i,m,u,d)):(n=cl(a.type,null,u,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var w=m.memoizedProps;if(a=a.compare,a=a!==null?a:_o,a(w,u)&&n.ref===i.ref)return Gi(n,i,d)}return i.flags|=1,n=Sr(m,u),n.ref=i.ref,n.return=i,i.child=n}function xp(n,i,a,u,d){if(n!==null){var m=n.memoizedProps;if(_o(m,u)&&n.ref===i.ref)if(Nn=!1,i.pendingProps=u=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Nn=!0);else return i.lanes=n.lanes,Gi(n,i,d)}return cc(n,i,a,u,d)}function yp(n,i,a){var u=i.pendingProps,d=u.children,m=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Ps,Hn),Hn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Ps,Hn),Hn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,It(Ps,Hn),Hn|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,It(Ps,Hn),Hn|=u;return Tn(n,i,d,a),i.child}function Sp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function cc(n,i,a,u,d){var m=Dn(a)?Or:hn.current;return m=xs(i,m),ws(i,d),a=ec(n,i,a,u,m,d),u=tc(),n!==null&&!Nn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Gi(n,i,d)):(kt&&u&&Ou(i),i.flags|=1,Tn(n,i,a,d),i.child)}function Mp(n,i,a,u,d){if(Dn(a)){var m=!0;Ua(i)}else m=!1;if(ws(i,d),i.stateNode===null)Qa(n,i),cp(i,a,u),ac(i,a,u,d),u=!0;else if(n===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var k=w.context,ae=a.contextType;typeof ae=="object"&&ae!==null?ae=Kn(ae):(ae=Dn(a)?Or:hn.current,ae=xs(i,ae));var ve=a.getDerivedStateFromProps,_e=typeof ve=="function"||typeof w.getSnapshotBeforeUpdate=="function";_e||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==u||k!==ae)&&fp(i,w,u,ae),pr=!1;var ge=i.memoizedState;w.state=ge,Wa(i,u,w,d),k=i.memoizedState,I!==u||ge!==k||Ln.current||pr?(typeof ve=="function"&&(oc(i,a,ve,u),k=i.memoizedState),(I=pr||up(i,a,I,u,ge,k,ae))?(_e||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=k),w.props=u,w.state=k,w.context=ae,u=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{w=i.stateNode,Bh(n,i),I=i.memoizedProps,ae=i.type===i.elementType?I:li(i.type,I),w.props=ae,_e=i.pendingProps,ge=w.context,k=a.contextType,typeof k=="object"&&k!==null?k=Kn(k):(k=Dn(a)?Or:hn.current,k=xs(i,k));var Ie=a.getDerivedStateFromProps;(ve=typeof Ie=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==_e||ge!==k)&&fp(i,w,u,k),pr=!1,ge=i.memoizedState,w.state=ge,Wa(i,u,w,d);var Ve=i.memoizedState;I!==_e||ge!==Ve||Ln.current||pr?(typeof Ie=="function"&&(oc(i,a,Ie,u),Ve=i.memoizedState),(ae=pr||up(i,a,ae,u,ge,Ve,k)||!1)?(ve||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(u,Ve,k),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(u,Ve,k)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=Ve),w.props=u,w.state=Ve,w.context=k,u=ae):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),u=!1)}return fc(n,i,a,u,m,d)}function fc(n,i,a,u,d,m){Sp(n,i);var w=(i.flags&128)!==0;if(!u&&!w)return d&&Ch(i,a,!1),Gi(n,i,m);u=i.stateNode,mv.current=i;var I=w&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&w?(i.child=Es(i,n.child,null,m),i.child=Es(i,null,I,m)):Tn(n,i,I,m),i.memoizedState=u.state,d&&Ch(i,a,!0),i.child}function Ep(n){var i=n.stateNode;i.pendingContext?wh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&wh(n,i.context,!1),ju(n,i.containerInfo)}function Tp(n,i,a,u,d){return Ms(),Vu(d),i.flags|=256,Tn(n,i,a,u),i.child}var dc={dehydrated:null,treeContext:null,retryLane:0};function hc(n){return{baseLanes:n,cachePool:null,transitions:null}}function wp(n,i,a){var u=i.pendingProps,d=zt.current,m=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(d&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),It(zt,d&1),n===null)return zu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=u.children,n=u.fallback,m?(u=i.mode,m=i.child,w={mode:"hidden",children:w},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=fl(w,u,0,null),n=qr(n,u,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=hc(a),i.memoizedState=dc,n):pc(i,w));if(d=n.memoizedState,d!==null&&(I=d.dehydrated,I!==null))return gv(n,i,w,u,I,d,a);if(m){m=u.fallback,w=i.mode,d=n.child,I=d.sibling;var k={mode:"hidden",children:u.children};return(w&1)===0&&i.child!==d?(u=i.child,u.childLanes=0,u.pendingProps=k,i.deletions=null):(u=Sr(d,k),u.subtreeFlags=d.subtreeFlags&14680064),I!==null?m=Sr(I,m):(m=qr(m,w,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,w=n.child.memoizedState,w=w===null?hc(a):{baseLanes:w.baseLanes|a,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~a,i.memoizedState=dc,u}return m=n.child,n=m.sibling,u=Sr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=u,i.memoizedState=null,u}function pc(n,i){return i=fl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Ja(n,i,a,u){return u!==null&&Vu(u),Es(i,n.child,null,a),n=pc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function gv(n,i,a,u,d,m,w){if(a)return i.flags&256?(i.flags&=-257,u=lc(Error(t(422))),Ja(n,i,w,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=u.fallback,d=i.mode,u=fl({mode:"visible",children:u.children},d,0,null),m=qr(m,d,w,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&Es(i,n.child,null,w),i.child.memoizedState=hc(w),i.memoizedState=dc,m);if((i.mode&1)===0)return Ja(n,i,w,null);if(d.data==="$!"){if(u=d.nextSibling&&d.nextSibling.dataset,u)var I=u.dgst;return u=I,m=Error(t(419)),u=lc(m,u,void 0),Ja(n,i,w,u)}if(I=(w&n.childLanes)!==0,Nn||I){if(u=sn,u!==null){switch(w&-w){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(u.suspendedLanes|w))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,Vi(n,d),fi(u,n,d,-1))}return bc(),u=lc(Error(t(421))),Ja(n,i,w,u)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Pv.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,Vn=cr(d.nextSibling),zn=i,kt=!0,ai=null,n!==null&&($n[Zn++]=ki,$n[Zn++]=zi,$n[Zn++]=Br,ki=n.id,zi=n.overflow,Br=i),i=pc(i,u.children),i.flags|=4096,i)}function Ap(n,i,a){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),Xu(n.return,i,a)}function mc(n,i,a,u,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=d)}function Cp(n,i,a){var u=i.pendingProps,d=u.revealOrder,m=u.tail;if(Tn(n,i,u.children,a),u=zt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ap(n,a,i);else if(n.tag===19)Ap(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(It(zt,u),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&Xa(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),mc(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&Xa(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}mc(i,!0,a,null,m);break;case"together":mc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Qa(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Gi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Gr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Sr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Sr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function vv(n,i,a){switch(i.tag){case 3:Ep(i),Ms();break;case 5:Vh(i);break;case 1:Dn(i.type)&&Ua(i);break;case 4:ju(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,d=i.memoizedProps.value;It(Va,u._currentValue),u._currentValue=d;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(It(zt,zt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?wp(n,i,a):(It(zt,zt.current&1),n=Gi(n,i,a),n!==null?n.sibling:null);It(zt,zt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Cp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),It(zt,zt.current),u)break;return null;case 22:case 23:return i.lanes=0,yp(n,i,a)}return Gi(n,i,a)}var Rp,gc,Pp,bp;Rp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gc=function(){},Pp=function(n,i,a,u){var d=n.memoizedProps;if(d!==u){n=i.stateNode,Vr(xi.current);var m=null;switch(a){case"input":d=xt(n,d),u=xt(n,u),m=[];break;case"select":d=ue({},d,{value:void 0}),u=ue({},u,{value:void 0}),m=[];break;case"textarea":d=We(n,d),u=We(n,u),m=[];break;default:typeof d.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Da)}ke(a,u);var w;a=null;for(ae in d)if(!u.hasOwnProperty(ae)&&d.hasOwnProperty(ae)&&d[ae]!=null)if(ae==="style"){var I=d[ae];for(w in I)I.hasOwnProperty(w)&&(a||(a={}),a[w]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?m||(m=[]):(m=m||[]).push(ae,null));for(ae in u){var k=u[ae];if(I=d!=null?d[ae]:void 0,u.hasOwnProperty(ae)&&k!==I&&(k!=null||I!=null))if(ae==="style")if(I){for(w in I)!I.hasOwnProperty(w)||k&&k.hasOwnProperty(w)||(a||(a={}),a[w]="");for(w in k)k.hasOwnProperty(w)&&I[w]!==k[w]&&(a||(a={}),a[w]=k[w])}else a||(m||(m=[]),m.push(ae,a)),a=k;else ae==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,I=I?I.__html:void 0,k!=null&&I!==k&&(m=m||[]).push(ae,k)):ae==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(ae,""+k):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(k!=null&&ae==="onScroll"&&Ft("scroll",n),m||I===k||(m=[])):(m=m||[]).push(ae,k))}a&&(m=m||[]).push("style",a);var ae=m;(i.updateQueue=ae)&&(i.flags|=4)}},bp=function(n,i,a,u){a!==u&&(i.flags|=4)};function No(n,i){if(!kt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function mn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,u=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags&14680064,u|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=a,i}function _v(n,i,a){var u=i.pendingProps;switch(Bu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return mn(i),null;case 1:return Dn(i.type)&&Ia(),mn(i),null;case 3:return u=i.stateNode,As(),Ot(Ln),Ot(hn),Ku(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(ka(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(Cc(ai),ai=null))),gc(n,i),mn(i),null;case 5:$u(i);var d=Vr(Ro.current);if(a=i.type,n!==null&&i.stateNode!=null)Pp(n,i,a,u,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return mn(i),null}if(n=Vr(xi.current),ka(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[_i]=i,u[Eo]=m,n=(i.mode&1)!==0,a){case"dialog":Ft("cancel",u),Ft("close",u);break;case"iframe":case"object":case"embed":Ft("load",u);break;case"video":case"audio":for(d=0;d<yo.length;d++)Ft(yo[d],u);break;case"source":Ft("error",u);break;case"img":case"image":case"link":Ft("error",u),Ft("load",u);break;case"details":Ft("toggle",u);break;case"input":Rt(u,m),Ft("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Ft("invalid",u);break;case"textarea":D(u,m),Ft("invalid",u)}ke(a,m),d=null;for(var w in m)if(m.hasOwnProperty(w)){var I=m[w];w==="children"?typeof I=="string"?u.textContent!==I&&(m.suppressHydrationWarning!==!0&&La(u.textContent,I,n),d=["children",I]):typeof I=="number"&&u.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&La(u.textContent,I,n),d=["children",""+I]):o.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&Ft("scroll",u)}switch(a){case"input":nt(u),z(u,m,!0);break;case"textarea":nt(u),W(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Da)}u=d,i.updateQueue=u,u!==null&&(i.flags|=4)}else{w=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=w.createElement(a,{is:u.is}):(n=w.createElement(a),a==="select"&&(w=n,u.multiple?w.multiple=!0:u.size&&(w.size=u.size))):n=w.createElementNS(n,a),n[_i]=i,n[Eo]=u,Rp(n,i,!1,!1),i.stateNode=n;e:{switch(w=Le(a,u),a){case"dialog":Ft("cancel",n),Ft("close",n),d=u;break;case"iframe":case"object":case"embed":Ft("load",n),d=u;break;case"video":case"audio":for(d=0;d<yo.length;d++)Ft(yo[d],n);d=u;break;case"source":Ft("error",n),d=u;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),d=u;break;case"details":Ft("toggle",n),d=u;break;case"input":Rt(n,u),d=xt(n,u),Ft("invalid",n);break;case"option":d=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},d=ue({},u,{value:void 0}),Ft("invalid",n);break;case"textarea":D(n,u),d=We(n,u),Ft("invalid",n);break;default:d=u}ke(a,d),I=d;for(m in I)if(I.hasOwnProperty(m)){var k=I[m];m==="style"?Ee(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Be(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&Te(n,k):typeof k=="number"&&Te(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Ft("scroll",n):k!=null&&C(n,m,k,w))}switch(a){case"input":nt(n),z(n,u,!1);break;case"textarea":nt(n),W(n);break;case"option":u.value!=null&&n.setAttribute("value",""+pe(u.value));break;case"select":n.multiple=!!u.multiple,m=u.value,m!=null?yt(n,!!u.multiple,m,!1):u.defaultValue!=null&&yt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Da)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return mn(i),null;case 6:if(n&&i.stateNode!=null)bp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(a=Vr(Ro.current),Vr(xi.current),ka(i)){if(u=i.stateNode,a=i.memoizedProps,u[_i]=i,(m=u.nodeValue!==a)&&(n=zn,n!==null))switch(n.tag){case 3:La(u.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&La(u.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[_i]=i,i.stateNode=u}return mn(i),null;case 13:if(Ot(zt),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&Vn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Nh(),Ms(),i.flags|=98560,m=!1;else if(m=ka(i),u!==null&&u.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[_i]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;mn(i),m=!1}else ai!==null&&(Cc(ai),ai=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(zt.current&1)!==0?en===0&&(en=3):bc())),i.updateQueue!==null&&(i.flags|=4),mn(i),null);case 4:return As(),gc(n,i),n===null&&So(i.stateNode.containerInfo),mn(i),null;case 10:return Wu(i.type._context),mn(i),null;case 17:return Dn(i.type)&&Ia(),mn(i),null;case 19:if(Ot(zt),m=i.memoizedState,m===null)return mn(i),null;if(u=(i.flags&128)!==0,w=m.rendering,w===null)if(u)No(m,!1);else{if(en!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Xa(n),w!==null){for(i.flags|=128,No(m,!1),u=w.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,n=u,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return It(zt,zt.current&1|2),i.child}n=n.sibling}m.tail!==null&&A()>bs&&(i.flags|=128,u=!0,No(m,!1),i.lanes=4194304)}else{if(!u)if(n=Xa(w),n!==null){if(i.flags|=128,u=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),No(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!kt)return mn(i),null}else 2*A()-m.renderingStartTime>bs&&a!==1073741824&&(i.flags|=128,u=!0,No(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(a=m.last,a!==null?a.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=A(),i.sibling=null,a=zt.current,It(zt,u?a&1|2:a&1),i):(mn(i),null);case 22:case 23:return Pc(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Hn&1073741824)!==0&&(mn(i),i.subtreeFlags&6&&(i.flags|=8192)):mn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function xv(n,i){switch(Bu(i),i.tag){case 1:return Dn(i.type)&&Ia(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return As(),Ot(Ln),Ot(hn),Ku(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return $u(i),null;case 13:if(Ot(zt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ms()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(zt),null;case 4:return As(),null;case 10:return Wu(i.type._context),null;case 22:case 23:return Pc(),null;case 24:return null;default:return null}}var el=!1,gn=!1,yv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Rs(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){Wt(n,i,u)}else a.current=null}function vc(n,i,a){try{a()}catch(u){Wt(n,i,u)}}var Lp=!1;function Sv(n,i){if(Pu=ya,n=uh(),Su(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var w=0,I=-1,k=-1,ae=0,ve=0,_e=n,ge=null;t:for(;;){for(var Ie;_e!==a||d!==0&&_e.nodeType!==3||(I=w+d),_e!==m||u!==0&&_e.nodeType!==3||(k=w+u),_e.nodeType===3&&(w+=_e.nodeValue.length),(Ie=_e.firstChild)!==null;)ge=_e,_e=Ie;for(;;){if(_e===n)break t;if(ge===a&&++ae===d&&(I=w),ge===m&&++ve===u&&(k=w),(Ie=_e.nextSibling)!==null)break;_e=ge,ge=_e.parentNode}_e=Ie}a=I===-1||k===-1?null:{start:I,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(bu={focusedElem:n,selectionRange:a},ya=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var Ve=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ve!==null){var Ye=Ve.memoizedProps,$t=Ve.memoizedState,K=i.stateNode,H=K.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:li(i.type,Ye),$t);K.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var ne=i.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){Wt(i,i.return,Me)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return Ve=Lp,Lp=!1,Ve}function Io(n,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var d=u=u.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&vc(i,a,m)}d=d.next}while(d!==u)}}function tl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function _c(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function Dp(n){var i=n.alternate;i!==null&&(n.alternate=null,Dp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[_i],delete i[Eo],delete i[Iu],delete i[iv],delete i[rv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Np(n){return n.tag===5||n.tag===3||n.tag===4}function Ip(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Np(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function xc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Da));else if(u!==4&&(n=n.child,n!==null))for(xc(n,i,a),n=n.sibling;n!==null;)xc(n,i,a),n=n.sibling}function yc(n,i,a){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(yc(n,i,a),n=n.sibling;n!==null;)yc(n,i,a),n=n.sibling}var cn=null,ui=!1;function gr(n,i,a){for(a=a.child;a!==null;)Up(n,i,a),a=a.sibling}function Up(n,i,a){if(Ne&&typeof Ne.onCommitFiberUnmount=="function")try{Ne.onCommitFiberUnmount(Ce,a)}catch{}switch(a.tag){case 5:gn||Rs(a,i);case 6:var u=cn,d=ui;cn=null,gr(n,i,a),cn=u,ui=d,cn!==null&&(ui?(n=cn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):cn.removeChild(a.stateNode));break;case 18:cn!==null&&(ui?(n=cn,a=a.stateNode,n.nodeType===8?Nu(n.parentNode,a):n.nodeType===1&&Nu(n,a),fo(n)):Nu(cn,a.stateNode));break;case 4:u=cn,d=ui,cn=a.stateNode.containerInfo,ui=!0,gr(n,i,a),cn=u,ui=d;break;case 0:case 11:case 14:case 15:if(!gn&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){d=u=u.next;do{var m=d,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&vc(a,i,w),d=d.next}while(d!==u)}gr(n,i,a);break;case 1:if(!gn&&(Rs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(I){Wt(a,i,I)}gr(n,i,a);break;case 21:gr(n,i,a);break;case 22:a.mode&1?(gn=(u=gn)||a.memoizedState!==null,gr(n,i,a),gn=u):gr(n,i,a);break;default:gr(n,i,a)}}function Fp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new yv),i.forEach(function(u){var d=bv.bind(null,n,u);a.has(u)||(a.add(u),u.then(d,d))})}}function ci(n,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var d=a[u];try{var m=n,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:cn=I.stateNode,ui=!1;break e;case 3:cn=I.stateNode.containerInfo,ui=!0;break e;case 4:cn=I.stateNode.containerInfo,ui=!0;break e}I=I.return}if(cn===null)throw Error(t(160));Up(m,w,d),cn=null,ui=!1;var k=d.alternate;k!==null&&(k.return=null),d.return=null}catch(ae){Wt(d,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Op(i,n),i=i.sibling}function Op(n,i){var a=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(i,n),Si(n),u&4){try{Io(3,n,n.return),tl(3,n)}catch(Ye){Wt(n,n.return,Ye)}try{Io(5,n,n.return)}catch(Ye){Wt(n,n.return,Ye)}}break;case 1:ci(i,n),Si(n),u&512&&a!==null&&Rs(a,a.return);break;case 5:if(ci(i,n),Si(n),u&512&&a!==null&&Rs(a,a.return),n.flags&32){var d=n.stateNode;try{Te(d,"")}catch(Ye){Wt(n,n.return,Ye)}}if(u&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,w=a!==null?a.memoizedProps:m,I=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&ut(d,m),Le(I,w);var ae=Le(I,m);for(w=0;w<k.length;w+=2){var ve=k[w],_e=k[w+1];ve==="style"?Ee(d,_e):ve==="dangerouslySetInnerHTML"?Be(d,_e):ve==="children"?Te(d,_e):C(d,ve,_e,ae)}switch(I){case"input":Ut(d,m);break;case"textarea":E(d,m);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Ie=m.value;Ie!=null?yt(d,!!m.multiple,Ie,!1):ge!==!!m.multiple&&(m.defaultValue!=null?yt(d,!!m.multiple,m.defaultValue,!0):yt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Eo]=m}catch(Ye){Wt(n,n.return,Ye)}}break;case 6:if(ci(i,n),Si(n),u&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch(Ye){Wt(n,n.return,Ye)}}break;case 3:if(ci(i,n),Si(n),u&4&&a!==null&&a.memoizedState.isDehydrated)try{fo(i.containerInfo)}catch(Ye){Wt(n,n.return,Ye)}break;case 4:ci(i,n),Si(n);break;case 13:ci(i,n),Si(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Ec=A())),u&4&&Fp(n);break;case 22:if(ve=a!==null&&a.memoizedState!==null,n.mode&1?(gn=(ae=gn)||ve,ci(i,n),gn=ae):ci(i,n),Si(n),u&8192){if(ae=n.memoizedState!==null,(n.stateNode.isHidden=ae)&&!ve&&(n.mode&1)!==0)for(Oe=n,ve=n.child;ve!==null;){for(_e=Oe=ve;Oe!==null;){switch(ge=Oe,Ie=ge.child,ge.tag){case 0:case 11:case 14:case 15:Io(4,ge,ge.return);break;case 1:Rs(ge,ge.return);var Ve=ge.stateNode;if(typeof Ve.componentWillUnmount=="function"){u=ge,a=ge.return;try{i=u,Ve.props=i.memoizedProps,Ve.state=i.memoizedState,Ve.componentWillUnmount()}catch(Ye){Wt(u,a,Ye)}}break;case 5:Rs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){zp(_e);continue}}Ie!==null?(Ie.return=ge,Oe=Ie):zp(_e)}ve=ve.sibling}e:for(ve=null,_e=n;;){if(_e.tag===5){if(ve===null){ve=_e;try{d=_e.stateNode,ae?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=_e.stateNode,k=_e.memoizedProps.style,w=k!=null&&k.hasOwnProperty("display")?k.display:null,I.style.display=xe("display",w))}catch(Ye){Wt(n,n.return,Ye)}}}else if(_e.tag===6){if(ve===null)try{_e.stateNode.nodeValue=ae?"":_e.memoizedProps}catch(Ye){Wt(n,n.return,Ye)}}else if((_e.tag!==22&&_e.tag!==23||_e.memoizedState===null||_e===n)&&_e.child!==null){_e.child.return=_e,_e=_e.child;continue}if(_e===n)break e;for(;_e.sibling===null;){if(_e.return===null||_e.return===n)break e;ve===_e&&(ve=null),_e=_e.return}ve===_e&&(ve=null),_e.sibling.return=_e.return,_e=_e.sibling}}break;case 19:ci(i,n),Si(n),u&4&&Fp(n);break;case 21:break;default:ci(i,n),Si(n)}}function Si(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Np(a)){var u=a;break e}a=a.return}throw Error(t(160))}switch(u.tag){case 5:var d=u.stateNode;u.flags&32&&(Te(d,""),u.flags&=-33);var m=Ip(n);yc(n,m,d);break;case 3:case 4:var w=u.stateNode.containerInfo,I=Ip(n);xc(n,I,w);break;default:throw Error(t(161))}}catch(k){Wt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Mv(n,i,a){Oe=n,Bp(n)}function Bp(n,i,a){for(var u=(n.mode&1)!==0;Oe!==null;){var d=Oe,m=d.child;if(d.tag===22&&u){var w=d.memoizedState!==null||el;if(!w){var I=d.alternate,k=I!==null&&I.memoizedState!==null||gn;I=el;var ae=gn;if(el=w,(gn=k)&&!ae)for(Oe=d;Oe!==null;)w=Oe,k=w.child,w.tag===22&&w.memoizedState!==null?Vp(d):k!==null?(k.return=w,Oe=k):Vp(d);for(;m!==null;)Oe=m,Bp(m),m=m.sibling;Oe=d,el=I,gn=ae}kp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Oe=m):kp(n)}}function kp(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:gn||tl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!gn)if(a===null)u.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:li(i.type,a.memoizedProps);u.componentDidUpdate(d,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&zh(i,m,u);break;case 3:var w=i.updateQueue;if(w!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}zh(i,w,a)}break;case 5:var I=i.stateNode;if(a===null&&i.flags&4){a=I;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var ve=ae.memoizedState;if(ve!==null){var _e=ve.dehydrated;_e!==null&&fo(_e)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}gn||i.flags&512&&_c(i)}catch(ge){Wt(i,i.return,ge)}}if(i===n){Oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function zp(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function Vp(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{tl(4,i)}catch(k){Wt(i,a,k)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var d=i.return;try{u.componentDidMount()}catch(k){Wt(i,d,k)}}var m=i.return;try{_c(i)}catch(k){Wt(i,m,k)}break;case 5:var w=i.return;try{_c(i)}catch(k){Wt(i,w,k)}}}catch(k){Wt(i,i.return,k)}if(i===n){Oe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Oe=I;break}Oe=i.return}}var Ev=Math.ceil,nl=P.ReactCurrentDispatcher,Sc=P.ReactCurrentOwner,Qn=P.ReactCurrentBatchConfig,Mt=0,sn=null,Zt=null,fn=0,Hn=0,Ps=fr(0),en=0,Uo=null,Gr=0,il=0,Mc=0,Fo=null,In=null,Ec=0,bs=1/0,Wi=null,rl=!1,Tc=null,vr=null,sl=!1,_r=null,ol=0,Oo=0,wc=null,al=-1,ll=0;function wn(){return(Mt&6)!==0?A():al!==-1?al:al=A()}function xr(n){return(n.mode&1)===0?1:(Mt&2)!==0&&fn!==0?fn&-fn:ov.transition!==null?(ll===0&&(ll=Pn()),ll):(n=st,n!==0||(n=window.event,n=n===void 0?16:Gd(n.type)),n)}function fi(n,i,a,u){if(50<Oo)throw Oo=0,wc=null,Error(t(185));Bn(n,a,u),((Mt&2)===0||n!==sn)&&(n===sn&&((Mt&2)===0&&(il|=a),en===4&&yr(n,fn)),Un(n,u),a===1&&Mt===0&&(i.mode&1)===0&&(bs=A()+500,Fa&&hr()))}function Un(n,i){var a=n.callbackNode;En(n,i);var u=qt(n,n===sn?fn:0);if(u===0)a!==null&&va(a),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(a!=null&&va(a),i===1)n.tag===0?sv(Gp.bind(null,n)):Rh(Gp.bind(null,n)),tv(function(){(Mt&6)===0&&hr()}),a=null;else{switch(si(u)){case 1:a=le;break;case 4:a=ie;break;case 16:a=ee;break;case 536870912:a=Ue;break;default:a=ee}a=Kp(a,Hp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function Hp(n,i){if(al=-1,ll=0,(Mt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Ls()&&n.callbackNode!==a)return null;var u=qt(n,n===sn?fn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=ul(n,u);else{i=u;var d=Mt;Mt|=2;var m=Xp();(sn!==n||fn!==i)&&(Wi=null,bs=A()+500,Xr(n,i));do try{Av();break}catch(I){Wp(n,I)}while(!0);Gu(),nl.current=m,Mt=d,Zt!==null?i=0:(sn=null,fn=0,i=en)}if(i!==0){if(i===2&&(d=vt(n),d!==0&&(u=d,i=Ac(n,d))),i===1)throw a=Uo,Xr(n,0),yr(n,u),Un(n,A()),a;if(i===6)yr(n,u);else{if(d=n.current.alternate,(u&30)===0&&!Tv(d)&&(i=ul(n,u),i===2&&(m=vt(n),m!==0&&(u=m,i=Ac(n,m))),i===1))throw a=Uo,Xr(n,0),yr(n,u),Un(n,A()),a;switch(n.finishedWork=d,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:Yr(n,In,Wi);break;case 3:if(yr(n,u),(u&130023424)===u&&(i=Ec+500-A(),10<i)){if(qt(n,0)!==0)break;if(d=n.suspendedLanes,(d&u)!==u){wn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Du(Yr.bind(null,n,In,Wi),i);break}Yr(n,In,Wi);break;case 4:if(yr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,d=-1;0<u;){var w=31-Qe(u);m=1<<w,w=i[w],w>d&&(d=w),u&=~m}if(u=d,u=A()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Ev(u/1960))-u,10<u){n.timeoutHandle=Du(Yr.bind(null,n,In,Wi),u);break}Yr(n,In,Wi);break;case 5:Yr(n,In,Wi);break;default:throw Error(t(329))}}}return Un(n,A()),n.callbackNode===a?Hp.bind(null,n):null}function Ac(n,i){var a=Fo;return n.current.memoizedState.isDehydrated&&(Xr(n,i).flags|=256),n=ul(n,i),n!==2&&(i=In,In=a,i!==null&&Cc(i)),n}function Cc(n){In===null?In=n:In.push.apply(In,n)}function Tv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var d=a[u],m=d.getSnapshot;d=d.value;try{if(!oi(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(n,i){for(i&=~Mc,i&=~il,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-Qe(i),u=1<<a;n[a]=-1,i&=~u}}function Gp(n){if((Mt&6)!==0)throw Error(t(327));Ls();var i=qt(n,0);if((i&1)===0)return Un(n,A()),null;var a=ul(n,i);if(n.tag!==0&&a===2){var u=vt(n);u!==0&&(i=u,a=Ac(n,u))}if(a===1)throw a=Uo,Xr(n,0),yr(n,i),Un(n,A()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yr(n,In,Wi),Un(n,A()),null}function Rc(n,i){var a=Mt;Mt|=1;try{return n(i)}finally{Mt=a,Mt===0&&(bs=A()+500,Fa&&hr())}}function Wr(n){_r!==null&&_r.tag===0&&(Mt&6)===0&&Ls();var i=Mt;Mt|=1;var a=Qn.transition,u=st;try{if(Qn.transition=null,st=1,n)return n()}finally{st=u,Qn.transition=a,Mt=i,(Mt&6)===0&&hr()}}function Pc(){Hn=Ps.current,Ot(Ps)}function Xr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,ev(a)),Zt!==null)for(a=Zt.return;a!==null;){var u=a;switch(Bu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Ia();break;case 3:As(),Ot(Ln),Ot(hn),Ku();break;case 5:$u(u);break;case 4:As();break;case 13:Ot(zt);break;case 19:Ot(zt);break;case 10:Wu(u.type._context);break;case 22:case 23:Pc()}a=a.return}if(sn=n,Zt=n=Sr(n.current,null),fn=Hn=i,en=0,Uo=null,Mc=il=Gr=0,In=Fo=null,zr!==null){for(i=0;i<zr.length;i++)if(a=zr[i],u=a.interleaved,u!==null){a.interleaved=null;var d=u.next,m=a.pending;if(m!==null){var w=m.next;m.next=d,u.next=w}a.pending=u}zr=null}return n}function Wp(n,i){do{var a=Zt;try{if(Gu(),Ya.current=Za,qa){for(var u=Vt.memoizedState;u!==null;){var d=u.queue;d!==null&&(d.pending=null),u=u.next}qa=!1}if(Hr=0,rn=Qt=Vt=null,Po=!1,bo=0,Sc.current=null,a===null||a.return===null){en=1,Uo=i,Zt=null;break}e:{var m=n,w=a.return,I=a,k=i;if(i=fn,I.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ae=k,ve=I,_e=ve.tag;if((ve.mode&1)===0&&(_e===0||_e===11||_e===15)){var ge=ve.alternate;ge?(ve.updateQueue=ge.updateQueue,ve.memoizedState=ge.memoizedState,ve.lanes=ge.lanes):(ve.updateQueue=null,ve.memoizedState=null)}var Ie=mp(w);if(Ie!==null){Ie.flags&=-257,gp(Ie,w,I,m,i),Ie.mode&1&&pp(m,ae,i),i=Ie,k=ae;var Ve=i.updateQueue;if(Ve===null){var Ye=new Set;Ye.add(k),i.updateQueue=Ye}else Ve.add(k);break e}else{if((i&1)===0){pp(m,ae,i),bc();break e}k=Error(t(426))}}else if(kt&&I.mode&1){var $t=mp(w);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),gp($t,w,I,m,i),Vu(Cs(k,I));break e}}m=k=Cs(k,I),en!==4&&(en=2),Fo===null?Fo=[m]:Fo.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var K=dp(m,k,i);kh(m,K);break e;case 1:I=k;var H=m.type,ne=m.stateNode;if((m.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(vr===null||!vr.has(ne)))){m.flags|=65536,i&=-i,m.lanes|=i;var Me=hp(m,I,i);kh(m,Me);break e}}m=m.return}while(m!==null)}qp(a)}catch($e){i=$e,Zt===a&&a!==null&&(Zt=a=a.return);continue}break}while(!0)}function Xp(){var n=nl.current;return nl.current=Za,n===null?Za:n}function bc(){(en===0||en===3||en===2)&&(en=4),sn===null||(Gr&268435455)===0&&(il&268435455)===0||yr(sn,fn)}function ul(n,i){var a=Mt;Mt|=2;var u=Xp();(sn!==n||fn!==i)&&(Wi=null,Xr(n,i));do try{wv();break}catch(d){Wp(n,d)}while(!0);if(Gu(),Mt=a,nl.current=u,Zt!==null)throw Error(t(261));return sn=null,fn=0,en}function wv(){for(;Zt!==null;)Yp(Zt)}function Av(){for(;Zt!==null&&!au();)Yp(Zt)}function Yp(n){var i=Zp(n.alternate,n,Hn);n.memoizedProps=n.pendingProps,i===null?qp(n):Zt=i,Sc.current=null}function qp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=_v(a,i,Hn),a!==null){Zt=a;return}}else{if(a=xv(a,i),a!==null){a.flags&=32767,Zt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=n}while(i!==null);en===0&&(en=5)}function Yr(n,i,a){var u=st,d=Qn.transition;try{Qn.transition=null,st=1,Cv(n,i,a,u)}finally{Qn.transition=d,st=u}return null}function Cv(n,i,a,u){do Ls();while(_r!==null);if((Mt&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(ir(n,m),n===sn&&(Zt=sn=null,fn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||sl||(sl=!0,Kp(ee,function(){return Ls(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Qn.transition,Qn.transition=null;var w=st;st=1;var I=Mt;Mt|=4,Sc.current=null,Sv(n,a),Op(a,n),q0(bu),ya=!!Pu,bu=Pu=null,n.current=a,Mv(a),lu(),Mt=I,st=w,Qn.transition=m}else n.current=a;if(sl&&(sl=!1,_r=n,ol=d),m=n.pendingLanes,m===0&&(vr=null),Ze(a.stateNode),Un(n,A()),i!==null)for(u=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],u(d.value,{componentStack:d.stack,digest:d.digest});if(rl)throw rl=!1,n=Tc,Tc=null,n;return(ol&1)!==0&&n.tag!==0&&Ls(),m=n.pendingLanes,(m&1)!==0?n===wc?Oo++:(Oo=0,wc=n):Oo=0,hr(),null}function Ls(){if(_r!==null){var n=si(ol),i=Qn.transition,a=st;try{if(Qn.transition=null,st=16>n?16:n,_r===null)var u=!1;else{if(n=_r,_r=null,ol=0,(Mt&6)!==0)throw Error(t(331));var d=Mt;for(Mt|=4,Oe=n.current;Oe!==null;){var m=Oe,w=m.child;if((Oe.flags&16)!==0){var I=m.deletions;if(I!==null){for(var k=0;k<I.length;k++){var ae=I[k];for(Oe=ae;Oe!==null;){var ve=Oe;switch(ve.tag){case 0:case 11:case 15:Io(8,ve,m)}var _e=ve.child;if(_e!==null)_e.return=ve,Oe=_e;else for(;Oe!==null;){ve=Oe;var ge=ve.sibling,Ie=ve.return;if(Dp(ve),ve===ae){Oe=null;break}if(ge!==null){ge.return=Ie,Oe=ge;break}Oe=Ie}}}var Ve=m.alternate;if(Ve!==null){var Ye=Ve.child;if(Ye!==null){Ve.child=null;do{var $t=Ye.sibling;Ye.sibling=null,Ye=$t}while(Ye!==null)}}Oe=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Oe=w;else e:for(;Oe!==null;){if(m=Oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Io(9,m,m.return)}var K=m.sibling;if(K!==null){K.return=m.return,Oe=K;break e}Oe=m.return}}var H=n.current;for(Oe=H;Oe!==null;){w=Oe;var ne=w.child;if((w.subtreeFlags&2064)!==0&&ne!==null)ne.return=w,Oe=ne;else e:for(w=H;Oe!==null;){if(I=Oe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:tl(9,I)}}catch($e){Wt(I,I.return,$e)}if(I===w){Oe=null;break e}var Me=I.sibling;if(Me!==null){Me.return=I.return,Oe=Me;break e}Oe=I.return}}if(Mt=d,hr(),Ne&&typeof Ne.onPostCommitFiberRoot=="function")try{Ne.onPostCommitFiberRoot(Ce,n)}catch{}u=!0}return u}finally{st=a,Qn.transition=i}}return!1}function jp(n,i,a){i=Cs(a,i),i=dp(n,i,1),n=mr(n,i,1),i=wn(),n!==null&&(Bn(n,1,i),Un(n,i))}function Wt(n,i,a){if(n.tag===3)jp(n,n,a);else for(;i!==null;){if(i.tag===3){jp(i,n,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(vr===null||!vr.has(u))){n=Cs(a,n),n=hp(i,n,1),i=mr(i,n,1),n=wn(),i!==null&&(Bn(i,1,n),Un(i,n));break}}i=i.return}}function Rv(n,i,a){var u=n.pingCache;u!==null&&u.delete(i),i=wn(),n.pingedLanes|=n.suspendedLanes&a,sn===n&&(fn&a)===a&&(en===4||en===3&&(fn&130023424)===fn&&500>A()-Ec?Xr(n,0):Mc|=a),Un(n,i)}function $p(n,i){i===0&&((n.mode&1)===0?i=1:(i=Dt,Dt<<=1,(Dt&130023424)===0&&(Dt=4194304)));var a=wn();n=Vi(n,i),n!==null&&(Bn(n,i,a),Un(n,a))}function Pv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),$p(n,a)}function bv(n,i){var a=0;switch(n.tag){case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),$p(n,a)}var Zp;Zp=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ln.current)Nn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Nn=!1,vv(n,i,a);Nn=(n.flags&131072)!==0}else Nn=!1,kt&&(i.flags&1048576)!==0&&Ph(i,Ba,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Qa(n,i),n=i.pendingProps;var d=xs(i,hn.current);ws(i,a),d=ec(null,i,u,n,d,a);var m=tc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Dn(u)?(m=!0,Ua(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,qu(i),d.updater=Ka,i.stateNode=d,d._reactInternals=i,ac(i,u,n,a),i=fc(null,i,u,!0,m,a)):(i.tag=0,kt&&m&&Ou(i),Tn(null,i,d,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Qa(n,i),n=i.pendingProps,d=u._init,u=d(u._payload),i.type=u,d=i.tag=Dv(u),n=li(u,n),d){case 0:i=cc(null,i,u,n,a);break e;case 1:i=Mp(null,i,u,n,a);break e;case 11:i=vp(null,i,u,n,a);break e;case 14:i=_p(null,i,u,li(u.type,n),a);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:li(u,d),cc(n,i,u,d,a);case 1:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:li(u,d),Mp(n,i,u,d,a);case 3:e:{if(Ep(i),n===null)throw Error(t(387));u=i.pendingProps,m=i.memoizedState,d=m.element,Bh(n,i),Wa(i,u,null,a);var w=i.memoizedState;if(u=w.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Cs(Error(t(423)),i),i=Tp(n,i,u,a,d);break e}else if(u!==d){d=Cs(Error(t(424)),i),i=Tp(n,i,u,a,d);break e}else for(Vn=cr(i.stateNode.containerInfo.firstChild),zn=i,kt=!0,ai=null,a=Fh(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ms(),u===d){i=Gi(n,i,a);break e}Tn(n,i,u,a)}i=i.child}return i;case 5:return Vh(i),n===null&&zu(i),u=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,w=d.children,Lu(u,d)?w=null:m!==null&&Lu(u,m)&&(i.flags|=32),Sp(n,i),Tn(n,i,w,a),i.child;case 6:return n===null&&zu(i),null;case 13:return wp(n,i,a);case 4:return ju(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Es(i,null,u,a):Tn(n,i,u,a),i.child;case 11:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:li(u,d),vp(n,i,u,d,a);case 7:return Tn(n,i,i.pendingProps,a),i.child;case 8:return Tn(n,i,i.pendingProps.children,a),i.child;case 12:return Tn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,d=i.pendingProps,m=i.memoizedProps,w=d.value,It(Va,u._currentValue),u._currentValue=w,m!==null)if(oi(m.value,w)){if(m.children===d.children&&!Ln.current){i=Gi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){w=m.child;for(var k=I.firstContext;k!==null;){if(k.context===u){if(m.tag===1){k=Hi(-1,a&-a),k.tag=2;var ae=m.updateQueue;if(ae!==null){ae=ae.shared;var ve=ae.pending;ve===null?k.next=k:(k.next=ve.next,ve.next=k),ae.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Xu(m.return,a,i),I.lanes|=a;break}k=k.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=a,I=w.alternate,I!==null&&(I.lanes|=a),Xu(w,a,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Tn(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,u=i.pendingProps.children,ws(i,a),d=Kn(d),u=u(d),i.flags|=1,Tn(n,i,u,a),i.child;case 14:return u=i.type,d=li(u,i.pendingProps),d=li(u.type,d),_p(n,i,u,d,a);case 15:return xp(n,i,i.type,i.pendingProps,a);case 17:return u=i.type,d=i.pendingProps,d=i.elementType===u?d:li(u,d),Qa(n,i),i.tag=1,Dn(u)?(n=!0,Ua(i)):n=!1,ws(i,a),cp(i,u,d),ac(i,u,d,a),fc(null,i,u,!0,n,a);case 19:return Cp(n,i,a);case 22:return yp(n,i,a)}throw Error(t(156,i.tag))};function Kp(n,i){return ga(n,i)}function Lv(n,i,a,u){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(n,i,a,u){return new Lv(n,i,a,u)}function Lc(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Dv(n){if(typeof n=="function")return Lc(n)?1:0;if(n!=null){if(n=n.$$typeof,n===q)return 11;if(n===Q)return 14}return 2}function Sr(n,i){var a=n.alternate;return a===null?(a=ei(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function cl(n,i,a,u,d,m){var w=2;if(u=n,typeof n=="function")Lc(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case N:return qr(a.children,d,m,i);case T:w=8,d|=8;break;case L:return n=ei(12,a,i,d|2),n.elementType=L,n.lanes=m,n;case j:return n=ei(13,a,i,d),n.elementType=j,n.lanes=m,n;case se:return n=ei(19,a,i,d),n.elementType=se,n.lanes=m,n;case G:return fl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Z:w=10;break e;case U:w=9;break e;case q:w=11;break e;case Q:w=14;break e;case te:w=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ei(w,a,i,d),i.elementType=n,i.type=u,i.lanes=m,i}function qr(n,i,a,u){return n=ei(7,n,u,i),n.lanes=a,n}function fl(n,i,a,u){return n=ei(22,n,u,i),n.elementType=G,n.lanes=a,n.stateNode={isHidden:!1},n}function Dc(n,i,a){return n=ei(6,n,null,i),n.lanes=a,n}function Nc(n,i,a){return i=ei(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function Nv(n,i,a,u,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bn(0),this.expirationTimes=bn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bn(0),this.identifierPrefix=u,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Ic(n,i,a,u,d,m,w,I,k){return n=new Nv(n,i,a,I,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=ei(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},qu(m),n}function Iv(n,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:F,key:u==null?null:""+u,children:n,containerInfo:i,implementation:a}}function Jp(n){if(!n)return dr;n=n._reactInternals;e:{if(vi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Dn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Dn(a))return Ah(n,a,i)}return i}function Qp(n,i,a,u,d,m,w,I,k){return n=Ic(a,u,!0,n,d,m,w,I,k),n.context=Jp(null),a=n.current,u=wn(),d=xr(a),m=Hi(u,d),m.callback=i??null,mr(a,m,d),n.current.lanes=d,Bn(n,d,u),Un(n,u),n}function dl(n,i,a,u){var d=i.current,m=wn(),w=xr(d);return a=Jp(a),i.context===null?i.context=a:i.pendingContext=a,i=Hi(m,w),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=mr(d,i,w),n!==null&&(fi(n,d,w,m),Ga(n,d,w)),w}function hl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function em(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Uc(n,i){em(n,i),(n=n.alternate)&&em(n,i)}function Uv(){return null}var tm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Fc(n){this._internalRoot=n}pl.prototype.render=Fc.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));dl(n,i,null,null)},pl.prototype.unmount=Fc.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Wr(function(){dl(null,n,null,null)}),i[Oi]=null}};function pl(n){this._internalRoot=n}pl.prototype.unstable_scheduleHydration=function(n){if(n){var i=oo();n={blockedOn:null,target:n,priority:i};for(var a=0;a<ar.length&&i!==0&&i<ar[a].priority;a++);ar.splice(a,0,n),a===0&&Vd(n)}};function Oc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function ml(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function nm(){}function Fv(n,i,a,u,d){if(d){if(typeof u=="function"){var m=u;u=function(){var ae=hl(w);m.call(ae)}}var w=Qp(i,u,n,0,null,!1,!1,"",nm);return n._reactRootContainer=w,n[Oi]=w.current,So(n.nodeType===8?n.parentNode:n),Wr(),w}for(;d=n.lastChild;)n.removeChild(d);if(typeof u=="function"){var I=u;u=function(){var ae=hl(k);I.call(ae)}}var k=Ic(n,0,!1,null,null,!1,!1,"",nm);return n._reactRootContainer=k,n[Oi]=k.current,So(n.nodeType===8?n.parentNode:n),Wr(function(){dl(i,k,a,u)}),k}function gl(n,i,a,u,d){var m=a._reactRootContainer;if(m){var w=m;if(typeof d=="function"){var I=d;d=function(){var k=hl(w);I.call(k)}}dl(i,w,n,d)}else w=Fv(a,i,n,d,u);return hl(w)}jt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=_t(i.pendingLanes);a!==0&&(At(i,a|1),Un(i,A()),(Mt&6)===0&&(bs=A()+500,hr()))}break;case 13:Wr(function(){var u=Vi(n,1);if(u!==null){var d=wn();fi(u,n,1,d)}}),Uc(n,1)}},jn=function(n){if(n.tag===13){var i=Vi(n,134217728);if(i!==null){var a=wn();fi(i,n,134217728,a)}Uc(n,134217728)}},Fi=function(n){if(n.tag===13){var i=xr(n),a=Vi(n,i);if(a!==null){var u=wn();fi(a,n,i,u)}Uc(n,i)}},oo=function(){return st},kd=function(n,i){var a=st;try{return st=n,i()}finally{st=a}},we=function(n,i,a){switch(i){case"input":if(Ut(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==n&&u.form===n.form){var d=Na(u);if(!d)throw Error(t(90));Yt(u),Ut(u,d)}}}break;case"textarea":E(n,a);break;case"select":i=a.value,i!=null&&yt(n,!!a.multiple,i,!1)}},rt=Rc,bt=Wr;var Ov={usingClientEntryPoint:!1,Events:[To,vs,Na,fe,ze,Rc]},Bo={findFiberByHostInstance:Fr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Bv={bundleType:Bo.bundleType,version:Bo.version,rendererPackageName:Bo.rendererPackageName,rendererConfig:Bo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=pa(n),n===null?null:n.stateNode},findFiberByHostInstance:Bo.findFiberByHostInstance||Uv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{Ce=vl.inject(Bv),Ne=vl}catch{}}return Fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ov,Fn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oc(i))throw Error(t(200));return Iv(n,i,null,a)},Fn.createRoot=function(n,i){if(!Oc(n))throw Error(t(299));var a=!1,u="",d=tm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Ic(n,1,!1,null,null,a,!1,u,d),n[Oi]=i.current,So(n.nodeType===8?n.parentNode:n),new Fc(i)},Fn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=pa(i),n=n===null?null:n.stateNode,n},Fn.flushSync=function(n){return Wr(n)},Fn.hydrate=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!0,a)},Fn.hydrateRoot=function(n,i,a){if(!Oc(n))throw Error(t(405));var u=a!=null&&a.hydratedSources||null,d=!1,m="",w=tm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(w=a.onRecoverableError)),i=Qp(i,null,n,1,a??null,d,!1,m,w),n[Oi]=i.current,So(n),u)for(n=0;n<u.length;n++)a=u[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new pl(i)},Fn.render=function(n,i,a){if(!ml(i))throw Error(t(200));return gl(null,n,i,!1,a)},Fn.unmountComponentAtNode=function(n){if(!ml(n))throw Error(t(40));return n._reactRootContainer?(Wr(function(){gl(null,null,n,!1,function(){n._reactRootContainer=null,n[Oi]=null})}),!0):!1},Fn.unstable_batchedUpdates=Rc,Fn.unstable_renderSubtreeIntoContainer=function(n,i,a,u){if(!ml(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return gl(n,i,a,!1,u)},Fn.version="18.3.1-next-f1338f8080-20240426",Fn}var cm;function jv(){if(cm)return Vc.exports;cm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Vc.exports=qv(),Vc.exports}var fm;function $v(){if(fm)return _l;fm=1;var s=jv();return _l.createRoot=s.createRoot,_l.hydrateRoot=s.hydrateRoot,_l}var Zv=$v();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sd="183",Kv=0,dm=1,Jv=2,Yl=1,Qv=2,Yo=3,Dr=0,On=1,wi=2,Ji=0,js=1,hm=2,pm=3,mm=4,e_=5,ts=100,t_=101,n_=102,i_=103,r_=104,s_=200,o_=201,a_=202,l_=203,Cf=204,Rf=205,u_=206,c_=207,f_=208,d_=209,h_=210,p_=211,m_=212,g_=213,v_=214,Pf=0,bf=1,Lf=2,Zs=3,Df=4,Nf=5,If=6,Uf=7,vg=0,__=1,x_=2,Ri=0,_g=1,xg=2,yg=3,Sg=4,Mg=5,Eg=6,Tg=7,wg=300,ss=301,Ks=302,Wc=303,Xc=304,nu=306,Ff=1e3,Ki=1001,Of=1002,dn=1003,y_=1004,xl=1005,yn=1006,Yc=1007,is=1008,Xn=1009,Ag=1010,Cg=1011,ea=1012,Md=1013,Li=1014,Ai=1015,er=1016,Ed=1017,Td=1018,ta=1020,Rg=35902,Pg=35899,bg=1021,Lg=1022,gi=1023,tr=1026,rs=1027,Dg=1028,wd=1029,Js=1030,Ad=1031,Cd=1033,ql=33776,jl=33777,$l=33778,Zl=33779,Bf=35840,kf=35841,zf=35842,Vf=35843,Hf=36196,Gf=37492,Wf=37496,Xf=37488,Yf=37489,qf=37490,jf=37491,$f=37808,Zf=37809,Kf=37810,Jf=37811,Qf=37812,ed=37813,td=37814,nd=37815,id=37816,rd=37817,sd=37818,od=37819,ad=37820,ld=37821,ud=36492,cd=36494,fd=36495,dd=36283,hd=36284,pd=36285,md=36286,S_=3200,Ng=0,M_=1,br="",ni="srgb",Qs="srgb-linear",Ql="linear",Lt="srgb",Ds=7680,gm=519,E_=512,T_=513,w_=514,Rd=515,A_=516,C_=517,Pd=518,R_=519,vm=35044,_m="300 es",Ci=2e3,na=2001;function P_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function eu(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function b_(){const s=eu("canvas");return s.style.display="block",s}const xm={};function ym(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ig(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function at(...s){s=Ig(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function wt(...s){s=Ig(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function tu(...s){const e=s.join(" ");e in xm||(xm[e]=!0,at(...s))}function L_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const D_={[Pf]:bf,[Lf]:If,[Df]:Uf,[Zs]:Nf,[bf]:Pf,[If]:Lf,[Uf]:Df,[Nf]:Zs};class no{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Sm=1234567;const $o=Math.PI/180,ia=180/Math.PI;function as(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[s&255]+vn[s>>8&255]+vn[s>>16&255]+vn[s>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[t&63|128]+vn[t>>8&255]+"-"+vn[t>>16&255]+vn[t>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function mt(s,e,t){return Math.max(e,Math.min(t,s))}function bd(s,e){return(s%e+e)%e}function N_(s,e,t,r,o){return r+(s-e)*(o-r)/(t-e)}function I_(s,e,t){return s!==e?(t-s)/(e-s):0}function Zo(s,e,t){return(1-t)*s+t*e}function U_(s,e,t,r){return Zo(s,e,1-Math.exp(-t*r))}function F_(s,e=1){return e-Math.abs(bd(s,e*2)-e)}function O_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function B_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function k_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function z_(s,e){return s+Math.random()*(e-s)}function V_(s){return s*(.5-Math.random())}function H_(s){s!==void 0&&(Sm=s);let e=Sm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function G_(s){return s*$o}function W_(s){return s*ia}function X_(s){return(s&s-1)===0&&s!==0}function Y_(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function q_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function j_(s,e,t,r,o){const l=Math.cos,c=Math.sin,f=l(t/2),h=c(t/2),p=l((e+r)/2),v=c((e+r)/2),y=l((e-r)/2),g=c((e-r)/2),S=l((r-e)/2),M=c((r-e)/2);switch(o){case"XYX":s.set(f*v,h*y,h*g,f*p);break;case"YZY":s.set(h*g,f*v,h*y,f*p);break;case"ZXZ":s.set(h*y,h*g,f*v,f*p);break;case"XZX":s.set(f*v,h*M,h*S,f*p);break;case"YXY":s.set(h*S,f*v,h*M,f*p);break;case"ZYZ":s.set(h*M,h*S,f*v,f*p);break;default:at("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+o)}}function Ys(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function An(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const $_={DEG2RAD:$o,RAD2DEG:ia,generateUUID:as,clamp:mt,euclideanModulo:bd,mapLinear:N_,inverseLerp:I_,lerp:Zo,damp:U_,pingpong:F_,smoothstep:O_,smootherstep:B_,randInt:k_,randFloat:z_,randFloatSpread:V_,seededRandom:H_,degToRad:G_,radToDeg:W_,isPowerOfTwo:X_,ceilPowerOfTwo:Y_,floorPowerOfTwo:q_,setQuaternionFromProperEuler:j_,normalize:An,denormalize:Ys};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,c=this.y-e.y;return this.x=l*r-c*o+e.x,this.y=l*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class io{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,c,f){let h=r[o+0],p=r[o+1],v=r[o+2],y=r[o+3],g=l[c+0],S=l[c+1],M=l[c+2],b=l[c+3];if(y!==b||h!==g||p!==S||v!==M){let x=h*g+p*S+v*M+y*b;x<0&&(g=-g,S=-S,M=-M,b=-b,x=-x);let _=1-f;if(x<.9995){const R=Math.acos(x),C=Math.sin(R);_=Math.sin(_*R)/C,f=Math.sin(f*R)/C,h=h*_+g*f,p=p*_+S*f,v=v*_+M*f,y=y*_+b*f}else{h=h*_+g*f,p=p*_+S*f,v=v*_+M*f,y=y*_+b*f;const R=1/Math.sqrt(h*h+p*p+v*v+y*y);h*=R,p*=R,v*=R,y*=R}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=y}static multiplyQuaternionsFlat(e,t,r,o,l,c){const f=r[o],h=r[o+1],p=r[o+2],v=r[o+3],y=l[c],g=l[c+1],S=l[c+2],M=l[c+3];return e[t]=f*M+v*y+h*S-p*g,e[t+1]=h*M+v*g+p*y-f*S,e[t+2]=p*M+v*S+f*g-h*y,e[t+3]=v*M-f*y-h*g-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,c=e._order,f=Math.cos,h=Math.sin,p=f(r/2),v=f(o/2),y=f(l/2),g=h(r/2),S=h(o/2),M=h(l/2);switch(c){case"XYZ":this._x=g*v*y+p*S*M,this._y=p*S*y-g*v*M,this._z=p*v*M+g*S*y,this._w=p*v*y-g*S*M;break;case"YXZ":this._x=g*v*y+p*S*M,this._y=p*S*y-g*v*M,this._z=p*v*M-g*S*y,this._w=p*v*y+g*S*M;break;case"ZXY":this._x=g*v*y-p*S*M,this._y=p*S*y+g*v*M,this._z=p*v*M+g*S*y,this._w=p*v*y-g*S*M;break;case"ZYX":this._x=g*v*y-p*S*M,this._y=p*S*y+g*v*M,this._z=p*v*M-g*S*y,this._w=p*v*y+g*S*M;break;case"YZX":this._x=g*v*y+p*S*M,this._y=p*S*y+g*v*M,this._z=p*v*M-g*S*y,this._w=p*v*y-g*S*M;break;case"XZY":this._x=g*v*y-p*S*M,this._y=p*S*y-g*v*M,this._z=p*v*M+g*S*y,this._w=p*v*y+g*S*M;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],c=t[1],f=t[5],h=t[9],p=t[2],v=t[6],y=t[10],g=r+f+y;if(g>0){const S=.5/Math.sqrt(g+1);this._w=.25/S,this._x=(v-h)*S,this._y=(l-p)*S,this._z=(c-o)*S}else if(r>f&&r>y){const S=2*Math.sqrt(1+r-f-y);this._w=(v-h)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+p)/S}else if(f>y){const S=2*Math.sqrt(1+f-r-y);this._w=(l-p)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+y-r-f);this._w=(c-o)/S,this._x=(l+p)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,c=e._w,f=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+c*f+o*p-l*h,this._y=o*v+c*h+l*f-r*p,this._z=l*v+c*p+r*h-o*f,this._w=c*v-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,c=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,c=-c,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);h=Math.sin(h*p)/v,t=Math.sin(t*p)/v,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,c=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*c,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*c,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,c=e.y,f=e.z,h=e.w,p=2*(c*o-f*r),v=2*(f*t-l*o),y=2*(l*r-c*t);return this.x=t+h*p+c*y-f*v,this.y=r+h*v+f*p-l*y,this.z=o+h*y+l*v-c*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,c=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*c-r*h,this.z=r*f-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qc.copy(this).projectOnVector(e),this.sub(qc)}reflect(e){return this.sub(qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(mt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qc=new Y,Mm=new io;class ft{constructor(e,t,r,o,l,c,f,h,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p)}set(e,t,r,o,l,c,f,h,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=f,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=c,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[3],h=r[6],p=r[1],v=r[4],y=r[7],g=r[2],S=r[5],M=r[8],b=o[0],x=o[3],_=o[6],R=o[1],C=o[4],P=o[7],B=o[2],F=o[5],N=o[8];return l[0]=c*b+f*R+h*B,l[3]=c*x+f*C+h*F,l[6]=c*_+f*P+h*N,l[1]=p*b+v*R+y*B,l[4]=p*x+v*C+y*F,l[7]=p*_+v*P+y*N,l[2]=g*b+S*R+M*B,l[5]=g*x+S*C+M*F,l[8]=g*_+S*P+M*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8];return t*c*v-t*f*p-r*l*v+r*f*h+o*l*p-o*c*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],y=v*c-f*p,g=f*h-v*l,S=p*l-c*h,M=t*y+r*g+o*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/M;return e[0]=y*b,e[1]=(o*p-v*r)*b,e[2]=(f*r-o*c)*b,e[3]=g*b,e[4]=(v*t-o*h)*b,e[5]=(o*l-f*t)*b,e[6]=S*b,e[7]=(r*h-p*t)*b,e[8]=(c*t-r*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,c,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*c+p*f)+c+e,-o*p,o*h,-o*(-p*c+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(jc.makeScale(e,t)),this}rotate(e){return this.premultiply(jc.makeRotation(-e)),this}translate(e,t){return this.premultiply(jc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jc=new ft,Em=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tm=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Z_(){const s={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===Lt&&(o.r=Qi(o.r),o.g=Qi(o.g),o.b=Qi(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Lt&&(o.r=$s(o.r),o.g=$s(o.g),o.b=$s(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===br?Ql:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return tu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return tu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Qs]:{primaries:e,whitePoint:r,transfer:Ql,toXYZ:Em,fromXYZ:Tm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ni},outputColorSpaceConfig:{drawingBufferColorSpace:ni}},[ni]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:Em,fromXYZ:Tm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ni}}}),s}const Et=Z_();function Qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function $s(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ns;class K_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ns===void 0&&(Ns=eu("canvas")),Ns.width=e.width,Ns.height=e.height;const o=Ns.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ns}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=eu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Qi(l[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Qi(t[r]/255)*255):t[r]=Qi(t[r]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J_=0;class Ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push($c(o[c].image)):l.push($c(o[c]))}else l=$c(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function $c(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?K_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let Q_=0;const Zc=new Y;class Rn extends no{constructor(e=Rn.DEFAULT_IMAGE,t=Rn.DEFAULT_MAPPING,r=Ki,o=Ki,l=yn,c=is,f=gi,h=Xn,p=Rn.DEFAULT_ANISOTROPY,v=br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=as(),this.name="",this.source=new Ld(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zc).x}get height(){return this.source.getSize(Zc).y}get depth(){return this.source.getSize(Zc).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ff:e.x=e.x-Math.floor(e.x);break;case Ki:e.x=e.x<0?0:1;break;case Of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ff:e.y=e.y-Math.floor(e.y);break;case Ki:e.y=e.y<0?0:1;break;case Of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Rn.DEFAULT_IMAGE=null;Rn.DEFAULT_MAPPING=wg;Rn.DEFAULT_ANISOTROPY=1;class Xt{constructor(e=0,t=0,r=0,o=1){Xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*l,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*l,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*l,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],v=h[4],y=h[8],g=h[1],S=h[5],M=h[9],b=h[2],x=h[6],_=h[10];if(Math.abs(v-g)<.01&&Math.abs(y-b)<.01&&Math.abs(M-x)<.01){if(Math.abs(v+g)<.1&&Math.abs(y+b)<.1&&Math.abs(M+x)<.1&&Math.abs(p+S+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const C=(p+1)/2,P=(S+1)/2,B=(_+1)/2,F=(v+g)/4,N=(y+b)/4,T=(M+x)/4;return C>P&&C>B?C<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(C),o=F/r,l=N/r):P>B?P<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(P),r=F/o,l=T/o):B<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(B),r=N/l,o=T/l),this.set(r,o,l,t),this}let R=Math.sqrt((x-M)*(x-M)+(y-b)*(y-b)+(g-v)*(g-v));return Math.abs(R)<.001&&(R=1),this.x=(x-M)/R,this.y=(y-b)/R,this.z=(g-v)/R,this.w=Math.acos((p+S+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=mt(this.x,e.x,t.x),this.y=mt(this.y,e.y,t.y),this.z=mt(this.z,e.z,t.z),this.w=mt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=mt(this.x,e,t),this.y=mt(this.y,e,t),this.z=mt(this.z,e,t),this.w=mt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(mt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ex extends no{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Xt(0,0,e,t),this.scissorTest=!1,this.viewport=new Xt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Rn(o),c=r.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Ld(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends ex{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ug extends Rn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class tx extends Rn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=dn,this.minFilter=dn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gt{constructor(e,t,r,o,l,c,f,h,p,v,y,g,S,M,b,x){Gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,c,f,h,p,v,y,g,S,M,b,x)}set(e,t,r,o,l,c,f,h,p,v,y,g,S,M,b,x){const _=this.elements;return _[0]=e,_[4]=t,_[8]=r,_[12]=o,_[1]=l,_[5]=c,_[9]=f,_[13]=h,_[2]=p,_[6]=v,_[10]=y,_[14]=g,_[3]=S,_[7]=M,_[11]=b,_[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Gt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Is.setFromMatrixColumn(e,0).length(),l=1/Is.setFromMatrixColumn(e,1).length(),c=1/Is.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,c=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),v=Math.cos(l),y=Math.sin(l);if(e.order==="XYZ"){const g=c*v,S=c*y,M=f*v,b=f*y;t[0]=h*v,t[4]=-h*y,t[8]=p,t[1]=S+M*p,t[5]=g-b*p,t[9]=-f*h,t[2]=b-g*p,t[6]=M+S*p,t[10]=c*h}else if(e.order==="YXZ"){const g=h*v,S=h*y,M=p*v,b=p*y;t[0]=g+b*f,t[4]=M*f-S,t[8]=c*p,t[1]=c*y,t[5]=c*v,t[9]=-f,t[2]=S*f-M,t[6]=b+g*f,t[10]=c*h}else if(e.order==="ZXY"){const g=h*v,S=h*y,M=p*v,b=p*y;t[0]=g-b*f,t[4]=-c*y,t[8]=M+S*f,t[1]=S+M*f,t[5]=c*v,t[9]=b-g*f,t[2]=-c*p,t[6]=f,t[10]=c*h}else if(e.order==="ZYX"){const g=c*v,S=c*y,M=f*v,b=f*y;t[0]=h*v,t[4]=M*p-S,t[8]=g*p+b,t[1]=h*y,t[5]=b*p+g,t[9]=S*p-M,t[2]=-p,t[6]=f*h,t[10]=c*h}else if(e.order==="YZX"){const g=c*h,S=c*p,M=f*h,b=f*p;t[0]=h*v,t[4]=b-g*y,t[8]=M*y+S,t[1]=y,t[5]=c*v,t[9]=-f*v,t[2]=-p*v,t[6]=S*y+M,t[10]=g-b*y}else if(e.order==="XZY"){const g=c*h,S=c*p,M=f*h,b=f*p;t[0]=h*v,t[4]=-y,t[8]=p*v,t[1]=g*y+b,t[5]=c*v,t[9]=S*y-M,t[2]=M*y-S,t[6]=f*v,t[10]=b*y+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nx,e,ix)}lookAt(e,t,r){const o=this.elements;return Gn.subVectors(e,t),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Er.crossVectors(r,Gn),Er.lengthSq()===0&&(Math.abs(r.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Er.crossVectors(r,Gn)),Er.normalize(),yl.crossVectors(Gn,Er),o[0]=Er.x,o[4]=yl.x,o[8]=Gn.x,o[1]=Er.y,o[5]=yl.y,o[9]=Gn.y,o[2]=Er.z,o[6]=yl.z,o[10]=Gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,c=r[0],f=r[4],h=r[8],p=r[12],v=r[1],y=r[5],g=r[9],S=r[13],M=r[2],b=r[6],x=r[10],_=r[14],R=r[3],C=r[7],P=r[11],B=r[15],F=o[0],N=o[4],T=o[8],L=o[12],Z=o[1],U=o[5],q=o[9],j=o[13],se=o[2],Q=o[6],te=o[10],G=o[14],J=o[3],oe=o[7],ue=o[11],O=o[15];return l[0]=c*F+f*Z+h*se+p*J,l[4]=c*N+f*U+h*Q+p*oe,l[8]=c*T+f*q+h*te+p*ue,l[12]=c*L+f*j+h*G+p*O,l[1]=v*F+y*Z+g*se+S*J,l[5]=v*N+y*U+g*Q+S*oe,l[9]=v*T+y*q+g*te+S*ue,l[13]=v*L+y*j+g*G+S*O,l[2]=M*F+b*Z+x*se+_*J,l[6]=M*N+b*U+x*Q+_*oe,l[10]=M*T+b*q+x*te+_*ue,l[14]=M*L+b*j+x*G+_*O,l[3]=R*F+C*Z+P*se+B*J,l[7]=R*N+C*U+P*Q+B*oe,l[11]=R*T+C*q+P*te+B*ue,l[15]=R*L+C*j+P*G+B*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],c=e[1],f=e[5],h=e[9],p=e[13],v=e[2],y=e[6],g=e[10],S=e[14],M=e[3],b=e[7],x=e[11],_=e[15],R=h*S-p*g,C=f*S-p*y,P=f*g-h*y,B=c*S-p*v,F=c*g-h*v,N=c*y-f*v;return t*(b*R-x*C+_*P)-r*(M*R-x*B+_*F)+o*(M*C-b*B+_*N)-l*(M*P-b*F+x*N)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],c=e[4],f=e[5],h=e[6],p=e[7],v=e[8],y=e[9],g=e[10],S=e[11],M=e[12],b=e[13],x=e[14],_=e[15],R=t*f-r*c,C=t*h-o*c,P=t*p-l*c,B=r*h-o*f,F=r*p-l*f,N=o*p-l*h,T=v*b-y*M,L=v*x-g*M,Z=v*_-S*M,U=y*x-g*b,q=y*_-S*b,j=g*_-S*x,se=R*j-C*q+P*U+B*Z-F*L+N*T;if(se===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const Q=1/se;return e[0]=(f*j-h*q+p*U)*Q,e[1]=(o*q-r*j-l*U)*Q,e[2]=(b*N-x*F+_*B)*Q,e[3]=(g*F-y*N-S*B)*Q,e[4]=(h*Z-c*j-p*L)*Q,e[5]=(t*j-o*Z+l*L)*Q,e[6]=(x*P-M*N-_*C)*Q,e[7]=(v*N-g*P+S*C)*Q,e[8]=(c*q-f*Z+p*T)*Q,e[9]=(r*Z-t*q-l*T)*Q,e[10]=(M*F-b*P+_*R)*Q,e[11]=(y*P-v*F-S*R)*Q,e[12]=(f*L-c*U-h*T)*Q,e[13]=(t*U-r*L+o*T)*Q,e[14]=(b*C-M*B-x*R)*Q,e[15]=(v*B-y*C+g*R)*Q,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,c=e.x,f=e.y,h=e.z,p=l*c,v=l*f;return this.set(p*c+r,p*f-o*h,p*h+o*f,0,p*f+o*h,v*f+r,v*h-o*c,0,p*h-o*f,v*h+o*c,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,c){return this.set(1,r,l,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,c=t._y,f=t._z,h=t._w,p=l+l,v=c+c,y=f+f,g=l*p,S=l*v,M=l*y,b=c*v,x=c*y,_=f*y,R=h*p,C=h*v,P=h*y,B=r.x,F=r.y,N=r.z;return o[0]=(1-(b+_))*B,o[1]=(S+P)*B,o[2]=(M-C)*B,o[3]=0,o[4]=(S-P)*F,o[5]=(1-(g+_))*F,o[6]=(x+R)*F,o[7]=0,o[8]=(M+C)*N,o[9]=(x-R)*N,o[10]=(1-(g+b))*N,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinant();if(l===0)return r.set(1,1,1),t.identity(),this;let c=Is.set(o[0],o[1],o[2]).length();const f=Is.set(o[4],o[5],o[6]).length(),h=Is.set(o[8],o[9],o[10]).length();l<0&&(c=-c),di.copy(this);const p=1/c,v=1/f,y=1/h;return di.elements[0]*=p,di.elements[1]*=p,di.elements[2]*=p,di.elements[4]*=v,di.elements[5]*=v,di.elements[6]*=v,di.elements[8]*=y,di.elements[9]*=y,di.elements[10]*=y,t.setFromRotationMatrix(di),r.x=c,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,c,f=Ci,h=!1){const p=this.elements,v=2*l/(t-e),y=2*l/(r-o),g=(t+e)/(t-e),S=(r+o)/(r-o);let M,b;if(h)M=l/(c-l),b=c*l/(c-l);else if(f===Ci)M=-(c+l)/(c-l),b=-2*c*l/(c-l);else if(f===na)M=-c/(c-l),b=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=y,p[9]=S,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,c,f=Ci,h=!1){const p=this.elements,v=2/(t-e),y=2/(r-o),g=-(t+e)/(t-e),S=-(r+o)/(r-o);let M,b;if(h)M=1/(c-l),b=c/(c-l);else if(f===Ci)M=-2/(c-l),b=-(c+l)/(c-l);else if(f===na)M=-1/(c-l),b=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=y,p[9]=0,p[13]=S,p[2]=0,p[6]=0,p[10]=M,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Is=new Y,di=new Gt,nx=new Y(0,0,0),ix=new Y(1,1,1),Er=new Y,yl=new Y,Gn=new Y,wm=new Gt,Am=new io;class Di{constructor(e=0,t=0,r=0,o=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],c=o[4],f=o[8],h=o[1],p=o[5],v=o[9],y=o[2],g=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(mt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-y,l),this._z=0);break;case"ZXY":this._x=Math.asin(mt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-y,S),this._z=Math.atan2(-c,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-mt(y,-1,1)),Math.abs(y)<.9999999?(this._x=Math.atan2(g,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-c,p));break;case"YZX":this._z=Math.asin(mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-y,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-mt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return wm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(wm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Am.setFromEuler(this),this.setFromQuaternion(Am,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class Fg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rx=0;const Cm=new Y,Us=new io,Xi=new Gt,Sl=new Y,zo=new Y,sx=new Y,ox=new io,Rm=new Y(1,0,0),Pm=new Y(0,1,0),bm=new Y(0,0,1),Lm={type:"added"},ax={type:"removed"},Fs={type:"childadded",child:null},Kc={type:"childremoved",child:null};class Sn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rx++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Sn.DEFAULT_UP.clone();const e=new Y,t=new Di,r=new io,o=new Y(1,1,1);function l(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Gt},normalMatrix:{value:new ft}}),this.matrix=new Gt,this.matrixWorld=new Gt,this.matrixAutoUpdate=Sn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(Rm,e)}rotateY(e){return this.rotateOnAxis(Pm,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,t){return Cm.copy(e).applyQuaternion(this.quaternion),this.position.add(Cm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Rm,e)}translateY(e){return this.translateOnAxis(Pm,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Sl.copy(e):Sl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(zo,Sl,this.up):Xi.lookAt(Sl,zo,this.up),this.quaternion.setFromRotationMatrix(Xi),o&&(Xi.extractRotation(o.matrixWorld),Us.setFromRotationMatrix(Xi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(wt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Lm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):wt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ax),Kc.child=e,this.dispatchEvent(Kc),Kc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Lm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,sx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,ox,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const y=h[p];l(e.shapes,y)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=c(e.geometries),h=c(e.materials),p=c(e.textures),v=c(e.images),y=c(e.shapes),g=c(e.skeletons),S=c(e.animations),M=c(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),y.length>0&&(r.shapes=y),g.length>0&&(r.skeletons=g),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(f){const h=[];for(const p in f){const v=f[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Sn.DEFAULT_UP=new Y(0,1,0);Sn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Sn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class qs extends Sn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lx={type:"move"};class Jc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,c=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){c=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,r),_=this._getHandJoint(p,b);x!==null&&(_.matrix.fromArray(x.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=x.radius),_.visible=x!==null}const v=p.joints["index-finger-tip"],y=p.joints["thumb-tip"],g=v.position.distanceTo(y.position),S=.02,M=.005;p.inputState.pinching&&g>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(lx)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new qs;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Ml={h:0,s:0,l:0};function Qc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Ct{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ni){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Et.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Et.workingColorSpace){return this.r=e,this.g=t,this.b=r,Et.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Et.workingColorSpace){if(e=bd(e,1),t=mt(t,0,1),r=mt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,c=2*r-l;this.r=Qc(c,l,e+1/3),this.g=Qc(c,l,e),this.b=Qc(c,l,e-1/3)}return Et.colorSpaceToWorking(this,o),this}setStyle(e,t=ni){function r(l){l!==void 0&&parseFloat(l)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(l,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ni){const r=Og[e.toLowerCase()];return r!==void 0?this.setHex(r,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ni){return Et.workingToColorSpace(_n.copy(this),e),Math.round(mt(_n.r*255,0,255))*65536+Math.round(mt(_n.g*255,0,255))*256+Math.round(mt(_n.b*255,0,255))}getHexString(e=ni){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Et.workingColorSpace){Et.workingToColorSpace(_n.copy(this),t);const r=_n.r,o=_n.g,l=_n.b,c=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const v=(f+c)/2;if(f===c)h=0,p=0;else{const y=c-f;switch(p=v<=.5?y/(c+f):y/(2-c-f),c){case r:h=(o-l)/y+(o<l?6:0);break;case o:h=(l-r)/y+2;break;case l:h=(r-o)/y+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=Et.workingColorSpace){return Et.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ni){Et.workingToColorSpace(_n.copy(this),e);const t=_n.r,r=_n.g,o=_n.b;return e!==ni?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(Ml);const r=Zo(Tr.h,Ml.h,t),o=Zo(Tr.s,Ml.s,t),l=Zo(Tr.l,Ml.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const _n=new Ct;Ct.NAMES=Og;class ux extends Sn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const hi=new Y,Yi=new Y,ef=new Y,qi=new Y,Os=new Y,Bs=new Y,Dm=new Y,tf=new Y,nf=new Y,rf=new Y,sf=new Xt,of=new Xt,af=new Xt;class mi{constructor(e=new Y,t=new Y,r=new Y){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),hi.subVectors(e,t),o.cross(hi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){hi.subVectors(o,t),Yi.subVectors(r,t),ef.subVectors(e,t);const c=hi.dot(hi),f=hi.dot(Yi),h=hi.dot(ef),p=Yi.dot(Yi),v=Yi.dot(ef),y=c*p-f*f;if(y===0)return l.set(0,0,0),null;const g=1/y,S=(p*h-f*v)*g,M=(c*v-f*h)*g;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,qi)===null?!1:qi.x>=0&&qi.y>=0&&qi.x+qi.y<=1}static getInterpolation(e,t,r,o,l,c,f,h){return this.getBarycoord(e,t,r,o,qi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,qi.x),h.addScaledVector(c,qi.y),h.addScaledVector(f,qi.z),h)}static getInterpolatedAttribute(e,t,r,o,l,c){return sf.setScalar(0),of.setScalar(0),af.setScalar(0),sf.fromBufferAttribute(e,t),of.fromBufferAttribute(e,r),af.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(sf,l.x),c.addScaledVector(of,l.y),c.addScaledVector(af,l.z),c}static isFrontFacing(e,t,r,o){return hi.subVectors(r,t),Yi.subVectors(e,t),hi.cross(Yi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return hi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),hi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return mi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let c,f;Os.subVectors(o,r),Bs.subVectors(l,r),tf.subVectors(e,r);const h=Os.dot(tf),p=Bs.dot(tf);if(h<=0&&p<=0)return t.copy(r);nf.subVectors(e,o);const v=Os.dot(nf),y=Bs.dot(nf);if(v>=0&&y<=v)return t.copy(o);const g=h*y-v*p;if(g<=0&&h>=0&&v<=0)return c=h/(h-v),t.copy(r).addScaledVector(Os,c);rf.subVectors(e,l);const S=Os.dot(rf),M=Bs.dot(rf);if(M>=0&&S<=M)return t.copy(l);const b=S*p-h*M;if(b<=0&&p>=0&&M<=0)return f=p/(p-M),t.copy(r).addScaledVector(Bs,f);const x=v*M-S*y;if(x<=0&&y-v>=0&&S-M>=0)return Dm.subVectors(l,o),f=(y-v)/(y-v+(S-M)),t.copy(o).addScaledVector(Dm,f);const _=1/(x+b+g);return c=b*_,f=g*_,t.copy(r).addScaledVector(Os,c).addScaledVector(Bs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class la{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)e.isMesh===!0?e.getVertexPosition(c,pi):pi.fromBufferAttribute(l,c),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),El.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),El.copy(r.boundingBox)),El.applyMatrix4(e.matrixWorld),this.union(El)}const o=e.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),Tl.subVectors(this.max,Vo),ks.subVectors(e.a,Vo),zs.subVectors(e.b,Vo),Vs.subVectors(e.c,Vo),wr.subVectors(zs,ks),Ar.subVectors(Vs,zs),jr.subVectors(ks,Vs);let t=[0,-wr.z,wr.y,0,-Ar.z,Ar.y,0,-jr.z,jr.y,wr.z,0,-wr.x,Ar.z,0,-Ar.x,jr.z,0,-jr.x,-wr.y,wr.x,0,-Ar.y,Ar.x,0,-jr.y,jr.x,0];return!lf(t,ks,zs,Vs,Tl)||(t=[1,0,0,0,1,0,0,0,1],!lf(t,ks,zs,Vs,Tl))?!1:(wl.crossVectors(wr,Ar),t=[wl.x,wl.y,wl.z],lf(t,ks,zs,Vs,Tl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ji),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ji=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],pi=new Y,El=new la,ks=new Y,zs=new Y,Vs=new Y,wr=new Y,Ar=new Y,jr=new Y,Vo=new Y,Tl=new Y,wl=new Y,$r=new Y;function lf(s,e,t,r,o){for(let l=0,c=s.length-3;l<=c;l+=3){$r.fromArray(s,l);const f=o.x*Math.abs($r.x)+o.y*Math.abs($r.y)+o.z*Math.abs($r.z),h=e.dot($r),p=t.dot($r),v=r.dot($r);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>f)return!1}return!0}const Kt=new Y,Al=new Je;let cx=0;class bi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=vm,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ys(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=An(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ys(t,this.array)),t}setX(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ys(t,this.array)),t}setY(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ys(t,this.array)),t}setZ(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ys(t,this.array)),t}setW(e,t){return this.normalized&&(t=An(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array),o=An(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=An(t,this.array),r=An(r,this.array),o=An(o,this.array),l=An(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vm&&(e.usage=this.usage),e}}class Bg extends bi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class kg extends bi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class un extends bi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const fx=new la,Ho=new Y,uf=new Y;class Dd{constructor(e=new Y,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):fx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,c=e.length;l<c;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);const t=Ho.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ho,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(uf)),this.expandByPoint(Ho.copy(e.center).sub(uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let dx=0;const ti=new Gt,cf=new Sn,Hs=new Y,Wn=new la,Go=new la,an=new Y;class ri extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:dx++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P_(e)?kg:Bg)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ft().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,r){return ti.makeTranslation(e,t,r),this.applyMatrix4(ti),this}scale(e,t,r){return ti.makeScale(e,t,r),this.applyMatrix4(ti),this}lookAt(e){return cf.lookAt(e),cf.updateMatrix(),this.applyMatrix4(cf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new un(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new la);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];Wn.setFromBufferAttribute(l),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&wt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){wt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(Wn.setFromBufferAttribute(e),t)for(let l=0,c=t.length;l<c;l++){const f=t[l];Go.setFromBufferAttribute(f),this.morphTargetsRelative?(an.addVectors(Wn.min,Go.min),Wn.expandByPoint(an),an.addVectors(Wn.max,Go.max),Wn.expandByPoint(an)):(Wn.expandByPoint(Go.min),Wn.expandByPoint(Go.max))}Wn.getCenter(r);let o=0;for(let l=0,c=e.count;l<c;l++)an.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(an));if(t)for(let l=0,c=t.length;l<c;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)an.fromBufferAttribute(f,p),h&&(Hs.fromBufferAttribute(e,p),an.add(Hs)),o=Math.max(o,r.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&wt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){wt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),f=[],h=[];for(let T=0;T<r.count;T++)f[T]=new Y,h[T]=new Y;const p=new Y,v=new Y,y=new Y,g=new Je,S=new Je,M=new Je,b=new Y,x=new Y;function _(T,L,Z){p.fromBufferAttribute(r,T),v.fromBufferAttribute(r,L),y.fromBufferAttribute(r,Z),g.fromBufferAttribute(l,T),S.fromBufferAttribute(l,L),M.fromBufferAttribute(l,Z),v.sub(p),y.sub(p),S.sub(g),M.sub(g);const U=1/(S.x*M.y-M.x*S.y);isFinite(U)&&(b.copy(v).multiplyScalar(M.y).addScaledVector(y,-S.y).multiplyScalar(U),x.copy(y).multiplyScalar(S.x).addScaledVector(v,-M.x).multiplyScalar(U),f[T].add(b),f[L].add(b),f[Z].add(b),h[T].add(x),h[L].add(x),h[Z].add(x))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let T=0,L=R.length;T<L;++T){const Z=R[T],U=Z.start,q=Z.count;for(let j=U,se=U+q;j<se;j+=3)_(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const C=new Y,P=new Y,B=new Y,F=new Y;function N(T){B.fromBufferAttribute(o,T),F.copy(B);const L=f[T];C.copy(L),C.sub(B.multiplyScalar(B.dot(L))).normalize(),P.crossVectors(F,L);const U=P.dot(h[T])<0?-1:1;c.setXYZW(T,C.x,C.y,C.z,U)}for(let T=0,L=R.length;T<L;++T){const Z=R[T],U=Z.start,q=Z.count;for(let j=U,se=U+q;j<se;j+=3)N(e.getX(j+0)),N(e.getX(j+1)),N(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new bi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,S=r.count;g<S;g++)r.setXYZ(g,0,0,0);const o=new Y,l=new Y,c=new Y,f=new Y,h=new Y,p=new Y,v=new Y,y=new Y;if(e)for(let g=0,S=e.count;g<S;g+=3){const M=e.getX(g+0),b=e.getX(g+1),x=e.getX(g+2);o.fromBufferAttribute(t,M),l.fromBufferAttribute(t,b),c.fromBufferAttribute(t,x),v.subVectors(c,l),y.subVectors(o,l),v.cross(y),f.fromBufferAttribute(r,M),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,x),f.add(v),h.add(v),p.add(v),r.setXYZ(M,f.x,f.y,f.z),r.setXYZ(b,h.x,h.y,h.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let g=0,S=t.count;g<S;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),v.subVectors(c,l),y.subVectors(o,l),v.cross(y),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(f,h){const p=f.array,v=f.itemSize,y=f.normalized,g=new p.constructor(h.length*v);let S=0,M=0;for(let b=0,x=h.length;b<x;b++){f.isInterleavedBufferAttribute?S=h[b]*f.data.stride+f.offset:S=h[b]*v;for(let _=0;_<v;_++)g[M++]=p[S++]}return new bi(g,v,y)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ri,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let v=0,y=p.length;v<y;v++){const g=p[v],S=e(g,r);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,h=c.length;f<h;f++){const p=c[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let y=0,g=p.length;y<g;y++){const S=p[y];v.push(S.toJSON(e.data))}v.length>0&&(o[h]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],y=l[p];for(let g=0,S=y.length;g<S;g++)v.push(y[g].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let p=0,v=c.length;p<v;p++){const y=c[p];this.addGroup(y.start,y.count,y.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let hx=0;class ua extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=as(),this.name="",this.type="Material",this.blending=js,this.side=Dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cf,this.blendDst=Rf,this.blendEquation=ts,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==js&&(r.blending=this.blending),this.side!==Dr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cf&&(r.blendSrc=this.blendSrc),this.blendDst!==Rf&&(r.blendDst=this.blendDst),this.blendEquation!==ts&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Zs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const c=[];for(const f in l){const h=l[f];delete h.metadata,c.push(h)}return c}if(t){const l=o(e.textures),c=o(e.images);l.length>0&&(r.textures=l),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const $i=new Y,ff=new Y,Cl=new Y,Cr=new Y,df=new Y,Rl=new Y,hf=new Y;class px{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,$i)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=$i.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):($i.copy(this.origin).addScaledVector(this.direction,t),$i.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ff.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),Cr.copy(this.origin).sub(ff);const l=e.distanceTo(t)*.5,c=-this.direction.dot(Cl),f=Cr.dot(this.direction),h=-Cr.dot(Cl),p=Cr.lengthSq(),v=Math.abs(1-c*c);let y,g,S,M;if(v>0)if(y=c*h-f,g=c*f-h,M=l*v,y>=0)if(g>=-M)if(g<=M){const b=1/v;y*=b,g*=b,S=y*(y+c*g+2*f)+g*(c*y+g+2*h)+p}else g=l,y=Math.max(0,-(c*g+f)),S=-y*y+g*(g+2*h)+p;else g=-l,y=Math.max(0,-(c*g+f)),S=-y*y+g*(g+2*h)+p;else g<=-M?(y=Math.max(0,-(-c*l+f)),g=y>0?-l:Math.min(Math.max(-l,-h),l),S=-y*y+g*(g+2*h)+p):g<=M?(y=0,g=Math.min(Math.max(-l,-h),l),S=g*(g+2*h)+p):(y=Math.max(0,-(c*l+f)),g=y>0?l:Math.min(Math.max(-l,-h),l),S=-y*y+g*(g+2*h)+p);else g=c>0?-l:l,y=Math.max(0,-(c*g+f)),S=-y*y+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,y),o&&o.copy(ff).addScaledVector(Cl,g),S}intersectSphere(e,t){$i.subVectors(e.center,this.origin);const r=$i.dot(this.direction),o=$i.dot($i)-r*r,l=e.radius*e.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=r-c,h=r+c;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,c,f,h;const p=1/this.direction.x,v=1/this.direction.y,y=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),v>=0?(l=(e.min.y-g.y)*v,c=(e.max.y-g.y)*v):(l=(e.max.y-g.y)*v,c=(e.min.y-g.y)*v),r>c||l>o||((l>r||isNaN(r))&&(r=l),(c<o||isNaN(o))&&(o=c),y>=0?(f=(e.min.z-g.z)*y,h=(e.max.z-g.z)*y):(f=(e.max.z-g.z)*y,h=(e.min.z-g.z)*y),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,$i)!==null}intersectTriangle(e,t,r,o,l){df.subVectors(t,e),Rl.subVectors(r,e),hf.crossVectors(df,Rl);let c=this.direction.dot(hf),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Cr.subVectors(this.origin,e);const h=f*this.direction.dot(Rl.crossVectors(Cr,Rl));if(h<0)return null;const p=f*this.direction.dot(df.cross(Cr));if(p<0||h+p>c)return null;const v=-f*Cr.dot(hf);return v<0?null:this.at(v/c,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class zg extends ua{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nm=new Gt,Zr=new px,Pl=new Dd,Im=new Y,bl=new Y,Ll=new Y,Dl=new Y,pf=new Y,Nl=new Y,Um=new Y,Il=new Y;class ln extends Sn{constructor(e=new ri,t=new zg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Nl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=f[h],y=l[h];v!==0&&(pf.fromBufferAttribute(y,e),c?Nl.addScaledVector(pf,v):Nl.addScaledVector(pf.sub(t),v))}t.add(Nl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pl.copy(r.boundingSphere),Pl.applyMatrix4(l),Zr.copy(e.ray).recast(e.near),!(Pl.containsPoint(Zr.origin)===!1&&(Zr.intersectSphere(Pl,Im)===null||Zr.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Nm.copy(l).invert(),Zr.copy(e.ray).applyMatrix4(Nm),!(r.boundingBox!==null&&Zr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Zr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,c=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,y=l.attributes.normal,g=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let M=0,b=g.length;M<b;M++){const x=g[M],_=c[x.materialIndex],R=Math.max(x.start,S.start),C=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let P=R,B=C;P<B;P+=3){const F=f.getX(P),N=f.getX(P+1),T=f.getX(P+2);o=Ul(this,_,e,r,p,v,y,F,N,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),b=Math.min(f.count,S.start+S.count);for(let x=M,_=b;x<_;x+=3){const R=f.getX(x),C=f.getX(x+1),P=f.getX(x+2);o=Ul(this,c,e,r,p,v,y,R,C,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(c))for(let M=0,b=g.length;M<b;M++){const x=g[M],_=c[x.materialIndex],R=Math.max(x.start,S.start),C=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let P=R,B=C;P<B;P+=3){const F=P,N=P+1,T=P+2;o=Ul(this,_,e,r,p,v,y,F,N,T),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=x.materialIndex,t.push(o))}}else{const M=Math.max(0,S.start),b=Math.min(h.count,S.start+S.count);for(let x=M,_=b;x<_;x+=3){const R=x,C=x+1,P=x+2;o=Ul(this,c,e,r,p,v,y,R,C,P),o&&(o.faceIndex=Math.floor(x/3),t.push(o))}}}}function mx(s,e,t,r,o,l,c,f){let h;if(e.side===On?h=r.intersectTriangle(c,l,o,!0,f):h=r.intersectTriangle(o,l,c,e.side===Dr,f),h===null)return null;Il.copy(f),Il.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Il);return p<t.near||p>t.far?null:{distance:p,point:Il.clone(),object:s}}function Ul(s,e,t,r,o,l,c,f,h,p){s.getVertexPosition(f,bl),s.getVertexPosition(h,Ll),s.getVertexPosition(p,Dl);const v=mx(s,e,t,r,bl,Ll,Dl,Um);if(v){const y=new Y;mi.getBarycoord(Um,bl,Ll,Dl,y),o&&(v.uv=mi.getInterpolatedAttribute(o,f,h,p,y,new Je)),l&&(v.uv1=mi.getInterpolatedAttribute(l,f,h,p,y,new Je)),c&&(v.normal=mi.getInterpolatedAttribute(c,f,h,p,y,new Y),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new Y,materialIndex:0};mi.getNormal(bl,Ll,Dl,g.normal),v.face=g,v.barycoord=y}return v}class gx extends Rn{constructor(e=null,t=1,r=1,o,l,c,f,h,p=dn,v=dn,y,g){super(null,c,f,h,p,v,o,l,y,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const mf=new Y,vx=new Y,_x=new ft;class es{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=mf.subVectors(r,t).cross(vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(mf),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||_x.getNormalMatrix(e),o=this.coplanarPoint(mf).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Dd,xx=new Je(.5,.5),Fl=new Y;class Nd{constructor(e=new es,t=new es,r=new es,o=new es,l=new es,c=new es){this.planes=[e,t,r,o,l,c]}set(e,t,r,o,l,c){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ci,r=!1){const o=this.planes,l=e.elements,c=l[0],f=l[1],h=l[2],p=l[3],v=l[4],y=l[5],g=l[6],S=l[7],M=l[8],b=l[9],x=l[10],_=l[11],R=l[12],C=l[13],P=l[14],B=l[15];if(o[0].setComponents(p-c,S-v,_-M,B-R).normalize(),o[1].setComponents(p+c,S+v,_+M,B+R).normalize(),o[2].setComponents(p+f,S+y,_+b,B+C).normalize(),o[3].setComponents(p-f,S-y,_-b,B-C).normalize(),r)o[4].setComponents(h,g,x,P).normalize(),o[5].setComponents(p-h,S-g,_-x,B-P).normalize();else if(o[4].setComponents(p-h,S-g,_-x,B-P).normalize(),t===Ci)o[5].setComponents(p+h,S+g,_+x,B+P).normalize();else if(t===na)o[5].setComponents(h,g,x,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){Kr.center.set(0,0,0);const t=xx.distanceTo(e.center);return Kr.radius=.7071067811865476+t,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Fl.x=o.normal.x>0?e.max.x:e.min.x,Fl.y=o.normal.y>0?e.max.y:e.min.y,Fl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vg extends Rn{constructor(e=[],t=ss,r,o,l,c,f,h,p,v){super(e,t,r,o,l,c,f,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ra extends Rn{constructor(e,t,r=Li,o,l,c,f=dn,h=dn,p,v=tr,y=1){if(v!==tr&&v!==rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:y};super(g,o,l,c,f,h,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ld(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class yx extends ra{constructor(e,t=Li,r=ss,o,l,c=dn,f=dn,h,p=tr){const v={width:e,height:e,depth:1},y=[v,v,v,v,v,v];super(e,e,t,r,o,l,c,f,h,p),this.image=y,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hg extends Rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ca extends ri{constructor(e=1,t=1,r=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const h=[],p=[],v=[],y=[];let g=0,S=0;M("z","y","x",-1,-1,r,t,e,c,l,0),M("z","y","x",1,-1,r,t,-e,c,l,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,l,4),M("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new un(p,3)),this.setAttribute("normal",new un(v,3)),this.setAttribute("uv",new un(y,2));function M(b,x,_,R,C,P,B,F,N,T,L){const Z=P/N,U=B/T,q=P/2,j=B/2,se=F/2,Q=N+1,te=T+1;let G=0,J=0;const oe=new Y;for(let ue=0;ue<te;ue++){const O=ue*U-j;for(let $=0;$<Q;$++){const Ae=$*Z-q;oe[b]=Ae*R,oe[x]=O*C,oe[_]=se,p.push(oe.x,oe.y,oe.z),oe[b]=0,oe[x]=0,oe[_]=F>0?1:-1,v.push(oe.x,oe.y,oe.z),y.push($/N),y.push(1-ue/T),G+=1}}for(let ue=0;ue<T;ue++)for(let O=0;O<N;O++){const $=g+O+Q*ue,Ae=g+O+Q*(ue+1),Re=g+(O+1)+Q*(ue+1),He=g+(O+1)+Q*ue;h.push($,Ae,He),h.push(Ae,Re,He),J+=6}f.addGroup(S,J,L),S+=J,g+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ca(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Id extends ri{constructor(e=1,t=1,r=4,o=8,l=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:r,radialSegments:o,heightSegments:l},t=Math.max(0,t),r=Math.max(1,Math.floor(r)),o=Math.max(3,Math.floor(o)),l=Math.max(1,Math.floor(l));const c=[],f=[],h=[],p=[],v=t/2,y=Math.PI/2*e,g=t,S=2*y+g,M=r*2+l,b=o+1,x=new Y,_=new Y;for(let R=0;R<=M;R++){let C=0,P=0,B=0,F=0;if(R<=r){const L=R/r,Z=L*Math.PI/2;P=-v-e*Math.cos(Z),B=e*Math.sin(Z),F=-e*Math.cos(Z),C=L*y}else if(R<=r+l){const L=(R-r)/l;P=-v+L*t,B=e,F=0,C=y+L*g}else{const L=(R-r-l)/r,Z=L*Math.PI/2;P=v+e*Math.sin(Z),B=e*Math.cos(Z),F=e*Math.sin(Z),C=y+g+L*y}const N=Math.max(0,Math.min(1,C/S));let T=0;R===0?T=.5/o:R===M&&(T=-.5/o);for(let L=0;L<=o;L++){const Z=L/o,U=Z*Math.PI*2,q=Math.sin(U),j=Math.cos(U);_.x=-B*j,_.y=P,_.z=B*q,f.push(_.x,_.y,_.z),x.set(-B*j,F,B*q),x.normalize(),h.push(x.x,x.y,x.z),p.push(Z+T,N)}if(R>0){const L=(R-1)*b;for(let Z=0;Z<o;Z++){const U=L+Z,q=L+Z+1,j=R*b+Z,se=R*b+Z+1;c.push(U,q,j),c.push(q,se,j)}}}this.setIndex(c),this.setAttribute("position",new un(f,3)),this.setAttribute("normal",new un(h,3)),this.setAttribute("uv",new un(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Id(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class Ii{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let c=1;c<=e;c++)r=this.getPoint(c/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let c;t?c=t:c=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-c,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===c)return o/(l-1);const v=r[o],g=r[o+1]-v,S=(c-v)/g;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const c=this.getPoint(o),f=this.getPoint(l),h=t||(c.isVector2?new Je:new Y);return h.copy(f).sub(c).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new Y,o=[],l=[],c=[],f=new Y,h=new Gt;for(let S=0;S<=e;S++){const M=S/e;o[S]=this.getTangentAt(M,new Y)}l[0]=new Y,c[0]=new Y;let p=Number.MAX_VALUE;const v=Math.abs(o[0].x),y=Math.abs(o[0].y),g=Math.abs(o[0].z);v<=p&&(p=v,r.set(1,0,0)),y<=p&&(p=y,r.set(0,1,0)),g<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),c[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),c[S]=c[S-1].clone(),f.crossVectors(o[S-1],o[S]),f.length()>Number.EPSILON){f.normalize();const M=Math.acos(mt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(h.makeRotationAxis(f,M))}c[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(mt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(S=-S);for(let M=1;M<=e;M++)l[M].applyMatrix4(h.makeRotationAxis(o[M],S*M)),c[M].crossVectors(o[M],l[M])}return{tangents:o,normals:l,binormals:c}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Ud extends Ii{constructor(e=0,t=0,r=1,o=1,l=0,c=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=c,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new Je){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const c=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(c?l=0:l=o),this.aClockwise===!0&&!c&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const v=Math.cos(this.aRotation),y=Math.sin(this.aRotation),g=h-this.aX,S=p-this.aY;h=g*v-S*y+this.aX,p=g*y+S*v+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Sx extends Ud{constructor(e,t,r,o,l,c){super(e,t,r,r,o,l,c),this.isArcCurve=!0,this.type="ArcCurve"}}function Fd(){let s=0,e=0,t=0,r=0;function o(l,c,f,h){s=l,e=f,t=-3*l+3*c-2*f-h,r=2*l-2*c+f+h}return{initCatmullRom:function(l,c,f,h,p){o(c,f,p*(f-l),p*(h-c))},initNonuniformCatmullRom:function(l,c,f,h,p,v,y){let g=(c-l)/p-(f-l)/(p+v)+(f-c)/v,S=(f-c)/v-(h-c)/(v+y)+(h-f)/y;g*=v,S*=v,o(c,f,g,S)},calc:function(l){const c=l*l,f=c*l;return s+e*l+t*c+r*f}}}const Ol=new Y,gf=new Fd,vf=new Fd,_f=new Fd;class Mx extends Ii{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new Y){const r=t,o=this.points,l=o.length,c=(l-(this.closed?0:1))*e;let f=Math.floor(c),h=c-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,v;this.closed||f>0?p=o[(f-1)%l]:(Ol.subVectors(o[0],o[1]).add(o[0]),p=Ol);const y=o[f%l],g=o[(f+1)%l];if(this.closed||f+2<l?v=o[(f+2)%l]:(Ol.subVectors(o[l-1],o[l-2]).add(o[l-1]),v=Ol),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let M=Math.pow(p.distanceToSquared(y),S),b=Math.pow(y.distanceToSquared(g),S),x=Math.pow(g.distanceToSquared(v),S);b<1e-4&&(b=1),M<1e-4&&(M=b),x<1e-4&&(x=b),gf.initNonuniformCatmullRom(p.x,y.x,g.x,v.x,M,b,x),vf.initNonuniformCatmullRom(p.y,y.y,g.y,v.y,M,b,x),_f.initNonuniformCatmullRom(p.z,y.z,g.z,v.z,M,b,x)}else this.curveType==="catmullrom"&&(gf.initCatmullRom(p.x,y.x,g.x,v.x,this.tension),vf.initCatmullRom(p.y,y.y,g.y,v.y,this.tension),_f.initCatmullRom(p.z,y.z,g.z,v.z,this.tension));return r.set(gf.calc(h),vf.calc(h),_f.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Y().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fm(s,e,t,r,o){const l=(r-e)*.5,c=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+c)*h+(-3*t+3*r-2*l-c)*f+l*s+t}function Ex(s,e){const t=1-s;return t*t*e}function Tx(s,e){return 2*(1-s)*s*e}function wx(s,e){return s*s*e}function Ko(s,e,t,r){return Ex(s,e)+Tx(s,t)+wx(s,r)}function Ax(s,e){const t=1-s;return t*t*t*e}function Cx(s,e){const t=1-s;return 3*t*t*s*e}function Rx(s,e){return 3*(1-s)*s*s*e}function Px(s,e){return s*s*s*e}function Jo(s,e,t,r,o){return Ax(s,e)+Cx(s,t)+Rx(s,r)+Px(s,o)}class Gg extends Ii{constructor(e=new Je,t=new Je,r=new Je,o=new Je){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Je){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(Jo(e,o.x,l.x,c.x,f.x),Jo(e,o.y,l.y,c.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class bx extends Ii{constructor(e=new Y,t=new Y,r=new Y,o=new Y){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Y){const r=t,o=this.v0,l=this.v1,c=this.v2,f=this.v3;return r.set(Jo(e,o.x,l.x,c.x,f.x),Jo(e,o.y,l.y,c.y,f.y),Jo(e,o.z,l.z,c.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Wg extends Ii{constructor(e=new Je,t=new Je){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Je){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Je){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Lx extends Ii{constructor(e=new Y,t=new Y){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Y){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Y){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xg extends Ii{constructor(e=new Je,t=new Je,r=new Je){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Je){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Ko(e,o.x,l.x,c.x),Ko(e,o.y,l.y,c.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Dx extends Ii{constructor(e=new Y,t=new Y,r=new Y){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Y){const r=t,o=this.v0,l=this.v1,c=this.v2;return r.set(Ko(e,o.x,l.x,c.x),Ko(e,o.y,l.y,c.y),Ko(e,o.z,l.z,c.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Yg extends Ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Je){const r=t,o=this.points,l=(o.length-1)*e,c=Math.floor(l),f=l-c,h=o[c===0?c:c-1],p=o[c],v=o[c>o.length-2?o.length-1:c+1],y=o[c>o.length-3?o.length-1:c+2];return r.set(Fm(f,h.x,p.x,v.x,y.x),Fm(f,h.y,p.y,v.y,y.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Je().fromArray(o))}return this}}var Om=Object.freeze({__proto__:null,ArcCurve:Sx,CatmullRomCurve3:Mx,CubicBezierCurve:Gg,CubicBezierCurve3:bx,EllipseCurve:Ud,LineCurve:Wg,LineCurve3:Lx,QuadraticBezierCurve:Xg,QuadraticBezierCurve3:Dx,SplineCurve:Yg});class Nx extends Ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Om[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const c=o[l]-r,f=this.curves[l],h=f.getLength(),p=h===0?0:1-c/h;return f.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const c=l[o],f=c.isEllipseCurve?e*2:c.isLineCurve||c.isLineCurve3?1:c.isSplineCurve?e*c.points.length:e,h=c.getPoints(f);for(let p=0;p<h.length;p++){const v=h[p];r&&r.equals(v)||(t.push(v),r=v)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new Om[o.type]().fromJSON(o))}return this}}class Bm extends Nx{constructor(e){super(),this.type="Path",this.currentPoint=new Je,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new Wg(this.currentPoint.clone(),new Je(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new Xg(this.currentPoint.clone(),new Je(e,t),new Je(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,c){const f=new Gg(this.currentPoint.clone(),new Je(e,t),new Je(r,o),new Je(l,c));return this.curves.push(f),this.currentPoint.set(l,c),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new Yg(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,c){const f=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(e+f,t+h,r,o,l,c),this}absarc(e,t,r,o,l,c){return this.absellipse(e,t,r,r,o,l,c),this}ellipse(e,t,r,o,l,c,f,h){const p=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(e+p,t+v,r,o,l,c,f,h),this}absellipse(e,t,r,o,l,c,f,h){const p=new Ud(e,t,r,o,l,c,f,h);if(this.curves.length>0){const y=p.getPoint(0);y.equals(this.currentPoint)||this.lineTo(y.x,y.y)}this.curves.push(p);const v=p.getPoint(1);return this.currentPoint.copy(v),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class qg extends Bm{constructor(e){super(e),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new Bm().fromJSON(o))}return this}}function Ix(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=jg(s,0,o,t,!0);const c=[];if(!l||l.next===l.prev)return c;let f,h,p;if(r&&(l=kx(s,e,l,t)),s.length>80*t){f=s[0],h=s[1];let v=f,y=h;for(let g=t;g<o;g+=t){const S=s[g],M=s[g+1];S<f&&(f=S),M<h&&(h=M),S>v&&(v=S),M>y&&(y=M)}p=Math.max(v-f,y-h),p=p!==0?32767/p:0}return sa(l,c,t,f,h,p,0),c}function jg(s,e,t,r,o){let l;if(o===Zx(s,e,t,r)>0)for(let c=e;c<t;c+=r)l=km(c/r|0,s[c],s[c+1],l);else for(let c=t-r;c>=e;c-=r)l=km(c/r|0,s[c],s[c+1],l);return l&&eo(l,l.next)&&(aa(l),l=l.next),l}function os(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(eo(t,t.next)||Ht(t.prev,t,t.next)===0)){if(aa(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function sa(s,e,t,r,o,l,c){if(!s)return;!c&&l&&Wx(s,r,o,l);let f=s;for(;s.prev!==s.next;){const h=s.prev,p=s.next;if(l?Fx(s,r,o,l):Ux(s)){e.push(h.i,s.i,p.i),aa(s),s=p.next,f=p.next;continue}if(s=p,s===f){c?c===1?(s=Ox(os(s),e),sa(s,e,t,r,o,l,2)):c===2&&Bx(s,e,t,r,o,l):sa(os(s),e,t,r,o,l,1);break}}}function Ux(s){const e=s.prev,t=s,r=s.next;if(Ht(e,t,r)>=0)return!1;const o=e.x,l=t.x,c=r.x,f=e.y,h=t.y,p=r.y,v=Math.min(o,l,c),y=Math.min(f,h,p),g=Math.max(o,l,c),S=Math.max(f,h,p);let M=r.next;for(;M!==e;){if(M.x>=v&&M.x<=g&&M.y>=y&&M.y<=S&&qo(o,f,l,h,c,p,M.x,M.y)&&Ht(M.prev,M,M.next)>=0)return!1;M=M.next}return!0}function Fx(s,e,t,r){const o=s.prev,l=s,c=s.next;if(Ht(o,l,c)>=0)return!1;const f=o.x,h=l.x,p=c.x,v=o.y,y=l.y,g=c.y,S=Math.min(f,h,p),M=Math.min(v,y,g),b=Math.max(f,h,p),x=Math.max(v,y,g),_=gd(S,M,e,t,r),R=gd(b,x,e,t,r);let C=s.prevZ,P=s.nextZ;for(;C&&C.z>=_&&P&&P.z<=R;){if(C.x>=S&&C.x<=b&&C.y>=M&&C.y<=x&&C!==o&&C!==c&&qo(f,v,h,y,p,g,C.x,C.y)&&Ht(C.prev,C,C.next)>=0||(C=C.prevZ,P.x>=S&&P.x<=b&&P.y>=M&&P.y<=x&&P!==o&&P!==c&&qo(f,v,h,y,p,g,P.x,P.y)&&Ht(P.prev,P,P.next)>=0))return!1;P=P.nextZ}for(;C&&C.z>=_;){if(C.x>=S&&C.x<=b&&C.y>=M&&C.y<=x&&C!==o&&C!==c&&qo(f,v,h,y,p,g,C.x,C.y)&&Ht(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;P&&P.z<=R;){if(P.x>=S&&P.x<=b&&P.y>=M&&P.y<=x&&P!==o&&P!==c&&qo(f,v,h,y,p,g,P.x,P.y)&&Ht(P.prev,P,P.next)>=0)return!1;P=P.nextZ}return!0}function Ox(s,e){let t=s;do{const r=t.prev,o=t.next.next;!eo(r,o)&&Zg(r,t,t.next,o)&&oa(r,o)&&oa(o,r)&&(e.push(r.i,t.i,o.i),aa(t),aa(t.next),t=s=o),t=t.next}while(t!==s);return os(t)}function Bx(s,e,t,r,o,l){let c=s;do{let f=c.next.next;for(;f!==c.prev;){if(c.i!==f.i&&qx(c,f)){let h=Kg(c,f);c=os(c,c.next),h=os(h,h.next),sa(c,e,t,r,o,l,0),sa(h,e,t,r,o,l,0);return}f=f.next}c=c.next}while(c!==s)}function kx(s,e,t,r){const o=[];for(let l=0,c=e.length;l<c;l++){const f=e[l]*r,h=l<c-1?e[l+1]*r:s.length,p=jg(s,f,h,r,!1);p===p.next&&(p.steiner=!0),o.push(Yx(p))}o.sort(zx);for(let l=0;l<o.length;l++)t=Vx(o[l],t);return t}function zx(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){const r=(s.next.y-s.y)/(s.next.x-s.x),o=(e.next.y-e.y)/(e.next.x-e.x);t=r-o}return t}function Vx(s,e){const t=Hx(s,e);if(!t)return e;const r=Kg(t,s);return os(r,r.next),os(t,t.next)}function Hx(s,e){let t=e;const r=s.x,o=s.y;let l=-1/0,c;if(eo(s,t))return t;do{if(eo(s,t.next))return t.next;if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){const y=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(y<=r&&y>l&&(l=y,c=t.x<t.next.x?t:t.next,y===r))return c}t=t.next}while(t!==e);if(!c)return null;const f=c,h=c.x,p=c.y;let v=1/0;t=c;do{if(r>=t.x&&t.x>=h&&r!==t.x&&$g(o<p?r:l,o,h,p,o<p?l:r,o,t.x,t.y)){const y=Math.abs(o-t.y)/(r-t.x);oa(t,s)&&(y<v||y===v&&(t.x>c.x||t.x===c.x&&Gx(c,t)))&&(c=t,v=y)}t=t.next}while(t!==f);return c}function Gx(s,e){return Ht(s.prev,s,e.prev)<0&&Ht(e.next,s,s.next)<0}function Wx(s,e,t,r){let o=s;do o.z===0&&(o.z=gd(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,Xx(o)}function Xx(s){let e,t=1;do{let r=s,o;s=null;let l=null;for(e=0;r;){e++;let c=r,f=0;for(let p=0;p<t&&(f++,c=c.nextZ,!!c);p++);let h=t;for(;f>0||h>0&&c;)f!==0&&(h===0||!c||r.z<=c.z)?(o=r,r=r.nextZ,f--):(o=c,c=c.nextZ,h--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;r=c}l.nextZ=null,t*=2}while(e>1);return s}function gd(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Yx(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function $g(s,e,t,r,o,l,c,f){return(o-c)*(e-f)>=(s-c)*(l-f)&&(s-c)*(r-f)>=(t-c)*(e-f)&&(t-c)*(l-f)>=(o-c)*(r-f)}function qo(s,e,t,r,o,l,c,f){return!(s===c&&e===f)&&$g(s,e,t,r,o,l,c,f)}function qx(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!jx(s,e)&&(oa(s,e)&&oa(e,s)&&$x(s,e)&&(Ht(s.prev,s,e.prev)||Ht(s,e.prev,e))||eo(s,e)&&Ht(s.prev,s,s.next)>0&&Ht(e.prev,e,e.next)>0)}function Ht(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function eo(s,e){return s.x===e.x&&s.y===e.y}function Zg(s,e,t,r){const o=kl(Ht(s,e,t)),l=kl(Ht(s,e,r)),c=kl(Ht(t,r,s)),f=kl(Ht(t,r,e));return!!(o!==l&&c!==f||o===0&&Bl(s,t,e)||l===0&&Bl(s,r,e)||c===0&&Bl(t,s,r)||f===0&&Bl(t,e,r))}function Bl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function kl(s){return s>0?1:s<0?-1:0}function jx(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&Zg(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function oa(s,e){return Ht(s.prev,s,s.next)<0?Ht(s,e,s.next)>=0&&Ht(s,s.prev,e)>=0:Ht(s,e,s.prev)<0||Ht(s,s.next,e)<0}function $x(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function Kg(s,e){const t=vd(s.i,s.x,s.y),r=vd(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function km(s,e,t,r){const o=vd(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function aa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function vd(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Zx(s,e,t,r){let o=0;for(let l=e,c=t-r;l<t;l+=r)o+=(s[c]-s[l])*(s[l+1]+s[c+1]),c=l;return o}class Kx{static triangulate(e,t,r=2){return Ix(e,t,r)}}class Qo{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return Qo.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];zm(e),Vm(r,e);let c=e.length;t.forEach(zm);for(let h=0;h<t.length;h++)o.push(c),c+=t[h].length,Vm(r,t[h]);const f=Kx.triangulate(r,o);for(let h=0;h<f.length;h+=3)l.push(f.slice(h,h+3));return l}}function zm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Vm(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class iu extends ri{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,c=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,v=h+1,y=e/f,g=t/h,S=[],M=[],b=[],x=[];for(let _=0;_<v;_++){const R=_*g-c;for(let C=0;C<p;C++){const P=C*y-l;M.push(P,-R,0),b.push(0,0,1),x.push(C/f),x.push(1-_/h)}}for(let _=0;_<h;_++)for(let R=0;R<f;R++){const C=R+p*_,P=R+p*(_+1),B=R+1+p*(_+1),F=R+1+p*_;S.push(C,P,F),S.push(P,B,F)}this.setIndex(S),this.setAttribute("position",new un(M,3)),this.setAttribute("normal",new un(b,3)),this.setAttribute("uv",new un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new iu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Od extends ri{constructor(e=new qg([new Je(0,.5),new Je(-.5,-.5),new Je(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],o=[],l=[],c=[];let f=0,h=0;if(Array.isArray(e)===!1)p(e);else for(let v=0;v<e.length;v++)p(e[v]),this.addGroup(f,h,v),f+=h,h=0;this.setIndex(r),this.setAttribute("position",new un(o,3)),this.setAttribute("normal",new un(l,3)),this.setAttribute("uv",new un(c,2));function p(v){const y=o.length/3,g=v.extractPoints(t);let S=g.shape;const M=g.holes;Qo.isClockWise(S)===!1&&(S=S.reverse());for(let x=0,_=M.length;x<_;x++){const R=M[x];Qo.isClockWise(R)===!0&&(M[x]=R.reverse())}const b=Qo.triangulateShape(S,M);for(let x=0,_=M.length;x<_;x++){const R=M[x];S=S.concat(R)}for(let x=0,_=S.length;x<_;x++){const R=S[x];o.push(R.x,R.y,0),l.push(0,0,1),c.push(R.x,R.y)}for(let x=0,_=b.length;x<_;x++){const R=b[x],C=R[0]+y,P=R[1]+y,B=R[2]+y;r.push(C,P,B),h+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Jx(t,e)}static fromJSON(e,t){const r=[];for(let o=0,l=e.shapes.length;o<l;o++){const c=t[e.shapes[o]];r.push(c)}return new Od(r,e.curveSegments)}}function Jx(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,r=s.length;t<r;t++){const o=s[t];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e}class Zi extends ri{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,c=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:c,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(c+f,Math.PI);let p=0;const v=[],y=new Y,g=new Y,S=[],M=[],b=[],x=[];for(let _=0;_<=r;_++){const R=[],C=_/r;let P=0;_===0&&c===0?P=.5/t:_===r&&h===Math.PI&&(P=-.5/t);for(let B=0;B<=t;B++){const F=B/t;y.x=-e*Math.cos(o+F*l)*Math.sin(c+C*f),y.y=e*Math.cos(c+C*f),y.z=e*Math.sin(o+F*l)*Math.sin(c+C*f),M.push(y.x,y.y,y.z),g.copy(y).normalize(),b.push(g.x,g.y,g.z),x.push(F+P,1-C),R.push(p++)}v.push(R)}for(let _=0;_<r;_++)for(let R=0;R<t;R++){const C=v[_][R+1],P=v[_][R],B=v[_+1][R],F=v[_+1][R+1];(_!==0||c>0)&&S.push(C,P,F),(_!==r-1||h<Math.PI)&&S.push(P,B,F)}this.setIndex(S),this.setAttribute("position",new un(M,3)),this.setAttribute("normal",new un(b,3)),this.setAttribute("uv",new un(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function to(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const r=to(s[t]);for(const o in r)e[o]=r[o]}return e}function Qx(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Jg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Et.workingColorSpace}const ey={clone:to,merge:Cn};var ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ny=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ni extends ua{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ty,this.fragmentShader=ny,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=to(e.uniforms),this.uniformsGroups=Qx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class iy extends Ni{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Rr extends ua{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ng,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ry extends ua{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=S_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sy extends ua{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Qg extends Sn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const xf=new Gt,Hm=new Y,Gm=new Y;class oy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.mapType=Xn,this.map=null,this.mapPass=null,this.matrix=new Gt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nd,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hm),Gm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gm),t.updateMatrixWorld(),xf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(xf,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===na||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(xf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zl=new Y,Vl=new io,Mi=new Y;class e0 extends Sn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Gt,this.projectionMatrix=new Gt,this.projectionMatrixInverse=new Gt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zl,Vl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Vl,Mi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(zl,Vl,Mi),Mi.x===1&&Mi.y===1&&Mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Vl,Mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Pr=new Y,Wm=new Je,Xm=new Je;class ii extends e0{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ia*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ia*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,Wm,Xm),t.subVectors(Xm,Wm)}setViewOffset(e,t,r,o,l,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($o*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const h=c.fullWidth,p=c.fullHeight;l+=c.offsetX*o/h,t-=c.offsetY*r/p,o*=c.width/h,r*=c.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Bd extends e0{constructor(e=-1,t=1,r=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,c=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,c=l+p*this.view.width,f-=v*this.view.offsetY,h=f-v*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ay extends oy{constructor(){super(new Bd(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ym extends Qg{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Sn.DEFAULT_UP),this.updateMatrix(),this.target=new Sn,this.shadow=new ay}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class ly extends Qg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const Gs=-90,Ws=1;class uy extends Sn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ii(Gs,Ws,e,t);o.layers=this.layers,this.add(o);const l=new ii(Gs,Ws,e,t);l.layers=this.layers,this.add(l);const c=new ii(Gs,Ws,e,t);c.layers=this.layers,this.add(c);const f=new ii(Gs,Ws,e,t);f.layers=this.layers,this.add(f);const h=new ii(Gs,Ws,e,t);h.layers=this.layers,this.add(h);const p=new ii(Gs,Ws,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,c,f,h]=t;for(const p of t)this.remove(p);if(e===Ci)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===na)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,h,p,v]=this.children,y=e.getRenderTarget(),g=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=b,e.setRenderTarget(r,5,o),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(y,g,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class cy extends ii{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function qm(s,e,t,r){const o=fy(r);switch(t){case bg:return s*e;case Dg:return s*e/o.components*o.byteLength;case wd:return s*e/o.components*o.byteLength;case Js:return s*e*2/o.components*o.byteLength;case Ad:return s*e*2/o.components*o.byteLength;case Lg:return s*e*3/o.components*o.byteLength;case gi:return s*e*4/o.components*o.byteLength;case Cd:return s*e*4/o.components*o.byteLength;case ql:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $l:case Zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kf:case Vf:return Math.max(s,16)*Math.max(e,8)/4;case Bf:case zf:return Math.max(s,8)*Math.max(e,8)/2;case Hf:case Gf:case Xf:case Yf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Wf:case qf:case jf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $f:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Kf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Jf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Qf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ed:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case td:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case nd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case id:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case rd:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case sd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case od:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ad:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case ld:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ud:case cd:case fd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case dd:case hd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case pd:case md:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function fy(s){switch(s){case Xn:case Ag:return{byteLength:1,components:1};case ea:case Cg:case er:return{byteLength:2,components:1};case Ed:case Td:return{byteLength:2,components:4};case Li:case Md:case Ai:return{byteLength:4,components:1};case Rg:case Pg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sd}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function t0(){let s=null,e=!1,t=null,r=null;function o(l,c){t(l,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function dy(s){const e=new WeakMap;function t(f,h){const p=f.array,v=f.usage,y=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,v),f.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)S=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:y}}function r(f,h,p){const v=h.array,y=h.updateRanges;if(s.bindBuffer(p,f),y.length===0)s.bufferSubData(p,0,v);else{y.sort((S,M)=>S.start-M.start);let g=0;for(let S=1;S<y.length;S++){const M=y[g],b=y[S];b.start<=M.start+M.count+1?M.count=Math.max(M.count,b.start+b.count-M.start):(++g,y[g]=b)}y.length=g+1;for(let S=0,M=y.length;S<M;S++){const b=y[S];s.bufferSubData(p,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function c(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:c}}var hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
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
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xy=`#ifdef USE_AOMAP
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
#endif`,yy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sy=`#ifdef USE_BATCHING
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
#endif`,My=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ey=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ty=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ay=`#ifdef USE_IRIDESCENCE
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
#endif`,Cy=`#ifdef USE_BUMPMAP
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
#endif`,Ry=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ly=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ny=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Iy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Uy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Fy=`#define PI 3.141592653589793
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
} // validated`,Oy=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ky=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Hy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xy=`#ifdef USE_ENVMAP
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
#endif`,qy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$y=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eS=`#ifdef USE_GRADIENTMAP
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
}`,tS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,rS=`uniform bool receiveShadow;
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
#endif`,sS=`#ifdef USE_ENVMAP
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
#endif`,oS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,aS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,uS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,cS=`PhysicalMaterial material;
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
#endif`,fS=`uniform sampler2D dfgLUT;
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
}`,dS=`
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
#endif`,hS=`#if defined( RE_IndirectDiffuse )
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
#endif`,pS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_S=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,SS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,MS=`#if defined( USE_POINTS_UV )
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
#endif`,ES=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,TS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,wS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,CS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,RS=`#ifdef USE_MORPHTARGETS
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
#endif`,bS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,LS=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,DS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,US=`#ifdef USE_NORMALMAP
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
#endif`,FS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,OS=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,kS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,VS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,HS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,GS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,WS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,XS=`#ifdef DITHERING
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
#endif`,qS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,$S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KS=`float getShadowMask() {
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
}`,JS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,QS=`#ifdef USE_SKINNING
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
#endif`,eM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tM=`#ifdef USE_SKINNING
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
#endif`,nM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,sM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,oM=`#ifdef USE_TRANSMISSION
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
#endif`,aM=`#ifdef USE_TRANSMISSION
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
#endif`,lM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hM=`uniform sampler2D t2D;
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
}`,pM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_M=`#include <common>
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
}`,xM=`#if DEPTH_PACKING == 3200
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
}`,yM=`#define DISTANCE
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
}`,SM=`#define DISTANCE
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
}`,MM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,EM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TM=`uniform float scale;
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
}`,wM=`uniform vec3 diffuse;
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
}`,AM=`#include <common>
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
}`,CM=`uniform vec3 diffuse;
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
}`,RM=`#define LAMBERT
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
}`,bM=`#define MATCAP
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
}`,LM=`#define MATCAP
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
}`,DM=`#define NORMAL
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
}`,NM=`#define NORMAL
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
}`,IM=`#define PHONG
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
}`,UM=`#define PHONG
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
}`,FM=`#define STANDARD
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
}`,OM=`#define STANDARD
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
}`,kM=`#define TOON
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
}`,zM=`uniform float size;
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
}`,VM=`uniform vec3 diffuse;
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
}`,HM=`#include <common>
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
}`,GM=`uniform vec3 color;
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
}`,WM=`uniform float rotation;
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
}`,XM=`uniform vec3 diffuse;
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
}`,dt={alphahash_fragment:hy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:gy,alphatest_fragment:vy,alphatest_pars_fragment:_y,aomap_fragment:xy,aomap_pars_fragment:yy,batching_pars_vertex:Sy,batching_vertex:My,begin_vertex:Ey,beginnormal_vertex:Ty,bsdfs:wy,iridescence_fragment:Ay,bumpmap_pars_fragment:Cy,clipping_planes_fragment:Ry,clipping_planes_pars_fragment:Py,clipping_planes_pars_vertex:by,clipping_planes_vertex:Ly,color_fragment:Dy,color_pars_fragment:Ny,color_pars_vertex:Iy,color_vertex:Uy,common:Fy,cube_uv_reflection_fragment:Oy,defaultnormal_vertex:By,displacementmap_pars_vertex:ky,displacementmap_vertex:zy,emissivemap_fragment:Vy,emissivemap_pars_fragment:Hy,colorspace_fragment:Gy,colorspace_pars_fragment:Wy,envmap_fragment:Xy,envmap_common_pars_fragment:Yy,envmap_pars_fragment:qy,envmap_pars_vertex:jy,envmap_physical_pars_fragment:sS,envmap_vertex:$y,fog_vertex:Zy,fog_pars_vertex:Ky,fog_fragment:Jy,fog_pars_fragment:Qy,gradientmap_pars_fragment:eS,lightmap_pars_fragment:tS,lights_lambert_fragment:nS,lights_lambert_pars_fragment:iS,lights_pars_begin:rS,lights_toon_fragment:oS,lights_toon_pars_fragment:aS,lights_phong_fragment:lS,lights_phong_pars_fragment:uS,lights_physical_fragment:cS,lights_physical_pars_fragment:fS,lights_fragment_begin:dS,lights_fragment_maps:hS,lights_fragment_end:pS,logdepthbuf_fragment:mS,logdepthbuf_pars_fragment:gS,logdepthbuf_pars_vertex:vS,logdepthbuf_vertex:_S,map_fragment:xS,map_pars_fragment:yS,map_particle_fragment:SS,map_particle_pars_fragment:MS,metalnessmap_fragment:ES,metalnessmap_pars_fragment:TS,morphinstance_vertex:wS,morphcolor_vertex:AS,morphnormal_vertex:CS,morphtarget_pars_vertex:RS,morphtarget_vertex:PS,normal_fragment_begin:bS,normal_fragment_maps:LS,normal_pars_fragment:DS,normal_pars_vertex:NS,normal_vertex:IS,normalmap_pars_fragment:US,clearcoat_normal_fragment_begin:FS,clearcoat_normal_fragment_maps:OS,clearcoat_pars_fragment:BS,iridescence_pars_fragment:kS,opaque_fragment:zS,packing:VS,premultiplied_alpha_fragment:HS,project_vertex:GS,dithering_fragment:WS,dithering_pars_fragment:XS,roughnessmap_fragment:YS,roughnessmap_pars_fragment:qS,shadowmap_pars_fragment:jS,shadowmap_pars_vertex:$S,shadowmap_vertex:ZS,shadowmask_pars_fragment:KS,skinbase_vertex:JS,skinning_pars_vertex:QS,skinning_vertex:eM,skinnormal_vertex:tM,specularmap_fragment:nM,specularmap_pars_fragment:iM,tonemapping_fragment:rM,tonemapping_pars_fragment:sM,transmission_fragment:oM,transmission_pars_fragment:aM,uv_pars_fragment:lM,uv_pars_vertex:uM,uv_vertex:cM,worldpos_vertex:fM,background_vert:dM,background_frag:hM,backgroundCube_vert:pM,backgroundCube_frag:mM,cube_vert:gM,cube_frag:vM,depth_vert:_M,depth_frag:xM,distance_vert:yM,distance_frag:SM,equirect_vert:MM,equirect_frag:EM,linedashed_vert:TM,linedashed_frag:wM,meshbasic_vert:AM,meshbasic_frag:CM,meshlambert_vert:RM,meshlambert_frag:PM,meshmatcap_vert:bM,meshmatcap_frag:LM,meshnormal_vert:DM,meshnormal_frag:NM,meshphong_vert:IM,meshphong_frag:UM,meshphysical_vert:FM,meshphysical_frag:OM,meshtoon_vert:BM,meshtoon_frag:kM,points_vert:zM,points_frag:VM,shadow_vert:HM,shadow_frag:GM,sprite_vert:WM,sprite_frag:XM},be={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},Ti={basic:{uniforms:Cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:dt.meshbasic_vert,fragmentShader:dt.meshbasic_frag},lambert:{uniforms:Cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:dt.meshlambert_vert,fragmentShader:dt.meshlambert_frag},phong:{uniforms:Cn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:dt.meshphong_vert,fragmentShader:dt.meshphong_frag},standard:{uniforms:Cn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag},toon:{uniforms:Cn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new Ct(0)}}]),vertexShader:dt.meshtoon_vert,fragmentShader:dt.meshtoon_frag},matcap:{uniforms:Cn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:dt.meshmatcap_vert,fragmentShader:dt.meshmatcap_frag},points:{uniforms:Cn([be.points,be.fog]),vertexShader:dt.points_vert,fragmentShader:dt.points_frag},dashed:{uniforms:Cn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:dt.linedashed_vert,fragmentShader:dt.linedashed_frag},depth:{uniforms:Cn([be.common,be.displacementmap]),vertexShader:dt.depth_vert,fragmentShader:dt.depth_frag},normal:{uniforms:Cn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:dt.meshnormal_vert,fragmentShader:dt.meshnormal_frag},sprite:{uniforms:Cn([be.sprite,be.fog]),vertexShader:dt.sprite_vert,fragmentShader:dt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:dt.background_vert,fragmentShader:dt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:dt.backgroundCube_vert,fragmentShader:dt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:dt.cube_vert,fragmentShader:dt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:dt.equirect_vert,fragmentShader:dt.equirect_frag},distance:{uniforms:Cn([be.common,be.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:dt.distance_vert,fragmentShader:dt.distance_frag},shadow:{uniforms:Cn([be.lights,be.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:dt.shadow_vert,fragmentShader:dt.shadow_frag}};Ti.physical={uniforms:Cn([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:dt.meshphysical_vert,fragmentShader:dt.meshphysical_frag};const Hl={r:0,b:0,g:0},Jr=new Di,YM=new Gt;function qM(s,e,t,r,o,l){const c=new Ct(0);let f=o===!0?0:1,h,p,v=null,y=0,g=null;function S(R){let C=R.isScene===!0?R.background:null;if(C&&C.isTexture){const P=R.backgroundBlurriness>0;C=e.get(C,P)}return C}function M(R){let C=!1;const P=S(R);P===null?x(c,f):P&&P.isColor&&(x(P,1),C=!0);const B=s.xr.getEnvironmentBlendMode();B==="additive"?t.buffers.color.setClear(0,0,0,1,l):B==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||C)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(R,C){const P=S(C);P&&(P.isCubeTexture||P.mapping===nu)?(p===void 0&&(p=new ln(new ca(1,1,1),new Ni({name:"BackgroundCubeMaterial",uniforms:to(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(B,F,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),Jr.copy(C.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),p.material.uniforms.envMap.value=P,p.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,p.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(YM.makeRotationFromEuler(Jr)),p.material.toneMapped=Et.getTransfer(P.colorSpace)!==Lt,(v!==P||y!==P.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=P,y=P.version,g=s.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null)):P&&P.isTexture&&(h===void 0&&(h=new ln(new iu(2,2),new Ni({name:"BackgroundMaterial",uniforms:to(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:Dr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=P,h.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,h.material.toneMapped=Et.getTransfer(P.colorSpace)!==Lt,P.matrixAutoUpdate===!0&&P.updateMatrix(),h.material.uniforms.uvTransform.value.copy(P.matrix),(v!==P||y!==P.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,v=P,y=P.version,g=s.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null))}function x(R,C){R.getRGB(Hl,Jg(s)),t.buffers.color.setClear(Hl.r,Hl.g,Hl.b,C,l)}function _(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return c},setClearColor:function(R,C=1){c.set(R),f=C,x(c,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,x(c,f)},render:M,addToRenderList:b,dispose:_}}function jM(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,c=!1;function f(U,q,j,se,Q){let te=!1;const G=y(U,se,j,q);l!==G&&(l=G,p(l.object)),te=S(U,se,j,Q),te&&M(U,se,j,Q),Q!==null&&e.update(Q,s.ELEMENT_ARRAY_BUFFER),(te||c)&&(c=!1,P(U,q,j,se),Q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(Q).buffer))}function h(){return s.createVertexArray()}function p(U){return s.bindVertexArray(U)}function v(U){return s.deleteVertexArray(U)}function y(U,q,j,se){const Q=se.wireframe===!0;let te=r[q.id];te===void 0&&(te={},r[q.id]=te);const G=U.isInstancedMesh===!0?U.id:0;let J=te[G];J===void 0&&(J={},te[G]=J);let oe=J[j.id];oe===void 0&&(oe={},J[j.id]=oe);let ue=oe[Q];return ue===void 0&&(ue=g(h()),oe[Q]=ue),ue}function g(U){const q=[],j=[],se=[];for(let Q=0;Q<t;Q++)q[Q]=0,j[Q]=0,se[Q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:j,attributeDivisors:se,object:U,attributes:{},index:null}}function S(U,q,j,se){const Q=l.attributes,te=q.attributes;let G=0;const J=j.getAttributes();for(const oe in J)if(J[oe].location>=0){const O=Q[oe];let $=te[oe];if($===void 0&&(oe==="instanceMatrix"&&U.instanceMatrix&&($=U.instanceMatrix),oe==="instanceColor"&&U.instanceColor&&($=U.instanceColor)),O===void 0||O.attribute!==$||$&&O.data!==$.data)return!0;G++}return l.attributesNum!==G||l.index!==se}function M(U,q,j,se){const Q={},te=q.attributes;let G=0;const J=j.getAttributes();for(const oe in J)if(J[oe].location>=0){let O=te[oe];O===void 0&&(oe==="instanceMatrix"&&U.instanceMatrix&&(O=U.instanceMatrix),oe==="instanceColor"&&U.instanceColor&&(O=U.instanceColor));const $={};$.attribute=O,O&&O.data&&($.data=O.data),Q[oe]=$,G++}l.attributes=Q,l.attributesNum=G,l.index=se}function b(){const U=l.newAttributes;for(let q=0,j=U.length;q<j;q++)U[q]=0}function x(U){_(U,0)}function _(U,q){const j=l.newAttributes,se=l.enabledAttributes,Q=l.attributeDivisors;j[U]=1,se[U]===0&&(s.enableVertexAttribArray(U),se[U]=1),Q[U]!==q&&(s.vertexAttribDivisor(U,q),Q[U]=q)}function R(){const U=l.newAttributes,q=l.enabledAttributes;for(let j=0,se=q.length;j<se;j++)q[j]!==U[j]&&(s.disableVertexAttribArray(j),q[j]=0)}function C(U,q,j,se,Q,te,G){G===!0?s.vertexAttribIPointer(U,q,j,Q,te):s.vertexAttribPointer(U,q,j,se,Q,te)}function P(U,q,j,se){b();const Q=se.attributes,te=j.getAttributes(),G=q.defaultAttributeValues;for(const J in te){const oe=te[J];if(oe.location>=0){let ue=Q[J];if(ue===void 0&&(J==="instanceMatrix"&&U.instanceMatrix&&(ue=U.instanceMatrix),J==="instanceColor"&&U.instanceColor&&(ue=U.instanceColor)),ue!==void 0){const O=ue.normalized,$=ue.itemSize,Ae=e.get(ue);if(Ae===void 0)continue;const Re=Ae.buffer,He=Ae.type,re=Ae.bytesPerElement,he=He===s.INT||He===s.UNSIGNED_INT||ue.gpuType===Md;if(ue.isInterleavedBufferAttribute){const pe=ue.data,Fe=pe.stride,Ge=ue.offset;if(pe.isInstancedInterleavedBuffer){for(let nt=0;nt<oe.locationSize;nt++)_(oe.location+nt,pe.meshPerAttribute);U.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let nt=0;nt<oe.locationSize;nt++)x(oe.location+nt);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let nt=0;nt<oe.locationSize;nt++)C(oe.location+nt,$/oe.locationSize,He,O,Fe*re,(Ge+$/oe.locationSize*nt)*re,he)}else{if(ue.isInstancedBufferAttribute){for(let pe=0;pe<oe.locationSize;pe++)_(oe.location+pe,ue.meshPerAttribute);U.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let pe=0;pe<oe.locationSize;pe++)x(oe.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Re);for(let pe=0;pe<oe.locationSize;pe++)C(oe.location+pe,$/oe.locationSize,He,O,$*re,$/oe.locationSize*pe*re,he)}}else if(G!==void 0){const O=G[J];if(O!==void 0)switch(O.length){case 2:s.vertexAttrib2fv(oe.location,O);break;case 3:s.vertexAttrib3fv(oe.location,O);break;case 4:s.vertexAttrib4fv(oe.location,O);break;default:s.vertexAttrib1fv(oe.location,O)}}}}R()}function B(){L();for(const U in r){const q=r[U];for(const j in q){const se=q[j];for(const Q in se){const te=se[Q];for(const G in te)v(te[G].object),delete te[G];delete se[Q]}}delete r[U]}}function F(U){if(r[U.id]===void 0)return;const q=r[U.id];for(const j in q){const se=q[j];for(const Q in se){const te=se[Q];for(const G in te)v(te[G].object),delete te[G];delete se[Q]}}delete r[U.id]}function N(U){for(const q in r){const j=r[q];for(const se in j){const Q=j[se];if(Q[U.id]===void 0)continue;const te=Q[U.id];for(const G in te)v(te[G].object),delete te[G];delete Q[U.id]}}}function T(U){for(const q in r){const j=r[q],se=U.isInstancedMesh===!0?U.id:0,Q=j[se];if(Q!==void 0){for(const te in Q){const G=Q[te];for(const J in G)v(G[J].object),delete G[J];delete Q[te]}delete j[se],Object.keys(j).length===0&&delete r[q]}}}function L(){Z(),c=!0,l!==o&&(l=o,p(l.object))}function Z(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:L,resetDefaultState:Z,dispose:B,releaseStatesOfGeometry:F,releaseStatesOfObject:T,releaseStatesOfProgram:N,initAttributes:b,enableAttribute:x,disableUnusedAttributes:R}}function $M(s,e,t){let r;function o(p){r=p}function l(p,v){s.drawArrays(r,p,v),t.update(v,r,1)}function c(p,v,y){y!==0&&(s.drawArraysInstanced(r,p,v,y),t.update(v,r,y))}function f(p,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,y);let S=0;for(let M=0;M<y;M++)S+=v[M];t.update(S,r,1)}function h(p,v,y,g){if(y===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)c(p[M],v[M],g[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,v,0,g,0,y);let M=0;for(let b=0;b<y;b++)M+=v[b]*g[b];t.update(M,r,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function ZM(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(N){return!(N!==gi&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(N){const T=N===er&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Xn&&r.convert(N)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&N!==Ai&&!T)}function h(N){if(N==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(at("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const y=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),C=s.getParameter(s.MAX_VARYING_VECTORS),P=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),B=s.getParameter(s.MAX_SAMPLES),F=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:c,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:y,reversedDepthBuffer:g,maxTextures:S,maxVertexTextures:M,maxTextureSize:b,maxCubemapSize:x,maxAttributes:_,maxVertexUniforms:R,maxVaryings:C,maxFragmentUniforms:P,maxSamples:B,samples:F}}function KM(s){const e=this;let t=null,r=0,o=!1,l=!1;const c=new es,f=new ft,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(y,g){const S=y.length!==0||g||r!==0||o;return o=g,r=y.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(y,g){t=v(y,g,0)},this.setState=function(y,g,S){const M=y.clippingPlanes,b=y.clipIntersection,x=y.clipShadows,_=s.get(y);if(!o||M===null||M.length===0||l&&!x)l?v(null):p();else{const R=l?0:r,C=R*4;let P=_.clippingState||null;h.value=P,P=v(M,g,C,S);for(let B=0;B!==C;++B)P[B]=t[B];_.clippingState=P,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=R}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(y,g,S,M){const b=y!==null?y.length:0;let x=null;if(b!==0){if(x=h.value,M!==!0||x===null){const _=S+b*4,R=g.matrixWorldInverse;f.getNormalMatrix(R),(x===null||x.length<_)&&(x=new Float32Array(_));for(let C=0,P=S;C!==b;++C,P+=4)c.copy(y[C]).applyMatrix4(R,f),c.normal.toArray(x,P),x[P+3]=c.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}const Lr=4,jm=[.125,.215,.35,.446,.526,.582],ns=20,JM=256,Wo=new Bd,$m=new Ct;let yf=null,Sf=0,Mf=0,Ef=!1;const QM=new Y;class Zm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:c=256,position:f=QM}=l;yf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Qm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(yf,Sf,Mf),this._renderer.xr.enabled=Ef,e.scissorTest=!1,Xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ss||e.mapping===Ks?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yf=this._renderer.getRenderTarget(),Sf=this._renderer.getActiveCubeFace(),Mf=this._renderer.getActiveMipmapLevel(),Ef=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:er,format:gi,colorSpace:Qs,depthBuffer:!1},o=Km(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Km(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=eE(l)),this._blurMaterial=nE(l,e,t),this._ggxMaterial=tE(l,e,t)}return o}_compileMaterial(e){const t=new ln(new ri,e);this._renderer.compile(t,Wo)}_sceneToCubeUV(e,t,r,o,l){const h=new ii(90,1,t,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],y=this._renderer,g=y.autoClear,S=y.toneMapping;y.getClearColor($m),y.toneMapping=Ri,y.autoClear=!1,y.state.buffers.depth.getReversed()&&(y.setRenderTarget(o),y.clearDepth(),y.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ln(new ca,new zg({name:"PMREM.Background",side:On,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,x=b.material;let _=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,_=!0):(x.color.copy($m),_=!0);for(let C=0;C<6;C++){const P=C%3;P===0?(h.up.set(0,p[C],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+v[C],l.y,l.z)):P===1?(h.up.set(0,0,p[C]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+v[C],l.z)):(h.up.set(0,p[C],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+v[C]));const B=this._cubeSize;Xs(o,P*B,C>2?B:0,B,B),y.setRenderTarget(o),_&&y.render(b,h),y.render(e,h)}y.toneMapping=S,y.autoClear=g,e.background=R}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===ss||e.mapping===Ks;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Qm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jm());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Xs(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(c,Wo)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[r];f.material=c;const h=c.uniforms,p=r/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),y=Math.sqrt(p*p-v*v),g=0+p*1.25,S=y*g,{_lodMax:M}=this,b=this._sizeLods[r],x=3*b*(r>M-Lr?r-M+Lr:0),_=4*(this._cubeSize-b);h.envMap.value=e.texture,h.roughness.value=S,h.mipInt.value=M-t,Xs(l,x,_,3*b,2*b),o.setRenderTarget(l),o.render(f,Wo),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=M-r,Xs(e,x,_,3*b,2*b),o.setRenderTarget(e),o.render(f,Wo)}_blur(e,t,r,o,l){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",l),this._halfBlur(c,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,c,f){const h=this._renderer,p=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&wt("blur direction must be either latitudinal or longitudinal!");const v=3,y=this._lodMeshes[o];y.material=p;const g=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ns-1),b=l/M,x=isFinite(l)?1+Math.floor(v*b):ns;x>ns&&at(`sigmaRadians, ${l}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${ns}`);const _=[];let R=0;for(let N=0;N<ns;++N){const T=N/b,L=Math.exp(-T*T/2);_.push(L),N===0?R+=L:N<x&&(R+=2*L)}for(let N=0;N<_.length;N++)_[N]=_[N]/R;g.envMap.value=e.texture,g.samples.value=x,g.weights.value=_,g.latitudinal.value=c==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:C}=this;g.dTheta.value=M,g.mipInt.value=C-r;const P=this._sizeLods[o],B=3*P*(o>C-Lr?o-C+Lr:0),F=4*(this._cubeSize-P);Xs(t,B,F,3*P,2*P),h.setRenderTarget(t),h.render(y,Wo)}}function eE(s){const e=[],t=[],r=[];let o=s;const l=s-Lr+1+jm.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);e.push(f);let h=1/f;c>s-Lr?h=jm[c-s+Lr-1]:c===0&&(h=0),t.push(h);const p=1/(f-2),v=-p,y=1+p,g=[v,v,y,v,y,y,v,v,y,y,v,y],S=6,M=6,b=3,x=2,_=1,R=new Float32Array(b*M*S),C=new Float32Array(x*M*S),P=new Float32Array(_*M*S);for(let F=0;F<S;F++){const N=F%3*2/3-1,T=F>2?0:-1,L=[N,T,0,N+2/3,T,0,N+2/3,T+1,0,N,T,0,N+2/3,T+1,0,N,T+1,0];R.set(L,b*M*F),C.set(g,x*M*F);const Z=[F,F,F,F,F,F];P.set(Z,_*M*F)}const B=new ri;B.setAttribute("position",new bi(R,b)),B.setAttribute("uv",new bi(C,x)),B.setAttribute("faceIndex",new bi(P,_)),r.push(new ln(B,null)),o>Lr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function Km(s,e,t){const r=new Pi(s,e,t);return r.texture.mapping=nu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Xs(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function tE(s,e,t){return new Ni({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:JM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ru(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function nE(s,e,t){const r=new Float32Array(ns),o=new Y(0,1,0);return new Ni({name:"SphericalGaussianBlur",defines:{n:ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:ru(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Jm(){return new Ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ru(),fragmentShader:`

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
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Qm(){return new Ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function ru(){return`

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
	`}class n0 extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Vg(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ca(5,5,5),l=new Ni({name:"CubemapFromEquirect",uniforms:to(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:On,blending:Ji});l.uniforms.tEquirect.value=t;const c=new ln(o,l),f=t.minFilter;return t.minFilter===is&&(t.minFilter=yn),new uy(1,10,this).update(e,c),t.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(l)}}function iE(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,S=!1){return g==null?null:S?c(g):l(g)}function l(g){if(g&&g.isTexture){const S=g.mapping;if(S===Wc||S===Xc)if(e.has(g)){const M=e.get(g).texture;return f(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const b=new n0(M.height);return b.fromEquirectangularTexture(s,g),e.set(g,b),g.addEventListener("dispose",p),f(b.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const S=g.mapping,M=S===Wc||S===Xc,b=S===ss||S===Ks;if(M||b){let x=t.get(g);const _=x!==void 0?x.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==_)return r===null&&(r=new Zm(s)),x=M?r.fromEquirectangular(g,x):r.fromCubemap(g,x),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),x.texture;if(x!==void 0)return x.texture;{const R=g.image;return M&&R&&R.height>0||b&&R&&h(R)?(r===null&&(r=new Zm(s)),x=M?r.fromEquirectangular(g):r.fromCubemap(g),x.texture.pmremVersion=g.pmremVersion,t.set(g,x),g.addEventListener("dispose",v),x.texture):null}}}return g}function f(g,S){return S===Wc?g.mapping=ss:S===Xc&&(g.mapping=Ks),g}function h(g){let S=0;const M=6;for(let b=0;b<M;b++)g[b]!==void 0&&S++;return S===M}function p(g){const S=g.target;S.removeEventListener("dispose",p);const M=e.get(S);M!==void 0&&(e.delete(S),M.dispose())}function v(g){const S=g.target;S.removeEventListener("dispose",v);const M=t.get(S);M!==void 0&&(t.delete(S),M.dispose())}function y(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:y}}function rE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&tu("WebGLRenderer: "+r+" extension not supported."),o}}}function sE(s,e,t,r){const o={},l=new WeakMap;function c(y){const g=y.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete o[g.id];const S=l.get(g);S&&(e.remove(S),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(y,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function h(y){const g=y.attributes;for(const S in g)e.update(g[S],s.ARRAY_BUFFER)}function p(y){const g=[],S=y.index,M=y.attributes.position;let b=0;if(M===void 0)return;if(S!==null){const R=S.array;b=S.version;for(let C=0,P=R.length;C<P;C+=3){const B=R[C+0],F=R[C+1],N=R[C+2];g.push(B,F,F,N,N,B)}}else{const R=M.array;b=M.version;for(let C=0,P=R.length/3-1;C<P;C+=3){const B=C+0,F=C+1,N=C+2;g.push(B,F,F,N,N,B)}}const x=new(M.count>=65535?kg:Bg)(g,1);x.version=b;const _=l.get(y);_&&e.remove(_),l.set(y,x)}function v(y){const g=l.get(y);if(g){const S=y.index;S!==null&&g.version<S.version&&p(y)}else p(y);return l.get(y)}return{get:f,update:h,getWireframeAttribute:v}}function oE(s,e,t){let r;function o(g){r=g}let l,c;function f(g){l=g.type,c=g.bytesPerElement}function h(g,S){s.drawElements(r,S,l,g*c),t.update(S,r,1)}function p(g,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,g*c,M),t.update(S,r,M))}function v(g,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,g,0,M);let x=0;for(let _=0;_<M;_++)x+=S[_];t.update(x,r,1)}function y(g,S,M,b){if(M===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let _=0;_<g.length;_++)p(g[_]/c,S[_],b[_]);else{x.multiDrawElementsInstancedWEBGL(r,S,0,l,g,0,b,0,M);let _=0;for(let R=0;R<M;R++)_+=S[R]*b[R];t.update(_,r,1)}}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=y}function aE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,c,f){switch(t.calls++,c){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:wt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function lE(s,e,t){const r=new WeakMap,o=new Xt;function l(c,f,h){const p=c.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,y=v!==void 0?v.length:0;let g=r.get(f);if(g===void 0||g.count!==y){let Z=function(){T.dispose(),r.delete(f),f.removeEventListener("dispose",Z)};var S=Z;g!==void 0&&g.texture.dispose();const M=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,_=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],C=f.morphAttributes.color||[];let P=0;M===!0&&(P=1),b===!0&&(P=2),x===!0&&(P=3);let B=f.attributes.position.count*P,F=1;B>e.maxTextureSize&&(F=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const N=new Float32Array(B*F*4*y),T=new Ug(N,B,F,y);T.type=Ai,T.needsUpdate=!0;const L=P*4;for(let U=0;U<y;U++){const q=_[U],j=R[U],se=C[U],Q=B*F*4*U;for(let te=0;te<q.count;te++){const G=te*L;M===!0&&(o.fromBufferAttribute(q,te),N[Q+G+0]=o.x,N[Q+G+1]=o.y,N[Q+G+2]=o.z,N[Q+G+3]=0),b===!0&&(o.fromBufferAttribute(j,te),N[Q+G+4]=o.x,N[Q+G+5]=o.y,N[Q+G+6]=o.z,N[Q+G+7]=0),x===!0&&(o.fromBufferAttribute(se,te),N[Q+G+8]=o.x,N[Q+G+9]=o.y,N[Q+G+10]=o.z,N[Q+G+11]=se.itemSize===4?o.w:1)}}g={count:y,texture:T,size:new Je(B,F)},r.set(f,g),f.addEventListener("dispose",Z)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",c.morphTexture,t);else{let M=0;for(let x=0;x<p.length;x++)M+=p[x];const b=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",b),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function uE(s,e,t,r,o){let l=new WeakMap;function c(p){const v=o.render.frame,y=p.geometry,g=e.get(p,y);if(l.get(g)!==v&&(e.update(g),l.set(g,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==v&&(S.update(),l.set(S,v))}return g}function f(){l=new WeakMap}function h(p){const v=p.target;v.removeEventListener("dispose",h),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:c,dispose:f}}const cE={[_g]:"LINEAR_TONE_MAPPING",[xg]:"REINHARD_TONE_MAPPING",[yg]:"CINEON_TONE_MAPPING",[Sg]:"ACES_FILMIC_TONE_MAPPING",[Eg]:"AGX_TONE_MAPPING",[Tg]:"NEUTRAL_TONE_MAPPING",[Mg]:"CUSTOM_TONE_MAPPING"};function fE(s,e,t,r,o){const l=new Pi(e,t,{type:s,depthBuffer:r,stencilBuffer:o}),c=new Pi(e,t,{type:er,depthBuffer:!1,stencilBuffer:!1}),f=new ri;f.setAttribute("position",new un([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new un([0,2,0,0,2,0],2));const h=new iy({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new ln(f,h),v=new Bd(-1,1,1,-1,0,1);let y=null,g=null,S=!1,M,b=null,x=[],_=!1;this.setSize=function(R,C){l.setSize(R,C),c.setSize(R,C);for(let P=0;P<x.length;P++){const B=x[P];B.setSize&&B.setSize(R,C)}},this.setEffects=function(R){x=R,_=x.length>0&&x[0].isRenderPass===!0;const C=l.width,P=l.height;for(let B=0;B<x.length;B++){const F=x[B];F.setSize&&F.setSize(C,P)}},this.begin=function(R,C){if(S||R.toneMapping===Ri&&x.length===0)return!1;if(b=C,C!==null){const P=C.width,B=C.height;(l.width!==P||l.height!==B)&&this.setSize(P,B)}return _===!1&&R.setRenderTarget(l),M=R.toneMapping,R.toneMapping=Ri,!0},this.hasRenderPass=function(){return _},this.end=function(R,C){R.toneMapping=M,S=!0;let P=l,B=c;for(let F=0;F<x.length;F++){const N=x[F];if(N.enabled!==!1&&(N.render(R,B,P,C),N.needsSwap!==!1)){const T=P;P=B,B=T}}if(y!==R.outputColorSpace||g!==R.toneMapping){y=R.outputColorSpace,g=R.toneMapping,h.defines={},Et.getTransfer(y)===Lt&&(h.defines.SRGB_TRANSFER="");const F=cE[g];F&&(h.defines[F]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(b),R.render(p,v),b=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),h.dispose()}}const i0=new Rn,_d=new ra(1,1),r0=new Ug,s0=new tx,o0=new Vg,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),rg=new Float32Array(4);function ro(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=eg[o];if(l===void 0&&(l=new Float32Array(o),eg[o]=l),e!==0){r.toArray(l,0);for(let c=1,f=0;c!==e;++c)f+=t,s[c].toArray(l,f)}return l}function tn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function nn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function su(s,e){let t=tg[e];t===void 0&&(t=new Int32Array(e),tg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function dE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function hE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2fv(this.addr,e),nn(t,e)}}function pE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(tn(t,e))return;s.uniform3fv(this.addr,e),nn(t,e)}}function mE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4fv(this.addr,e),nn(t,e)}}function gE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;rg.set(r),s.uniformMatrix2fv(this.addr,!1,rg),nn(t,r)}}function vE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;ig.set(r),s.uniformMatrix3fv(this.addr,!1,ig),nn(t,r)}}function _E(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(tn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),nn(t,e)}else{if(tn(t,r))return;ng.set(r),s.uniformMatrix4fv(this.addr,!1,ng),nn(t,r)}}function xE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2iv(this.addr,e),nn(t,e)}}function SE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3iv(this.addr,e),nn(t,e)}}function ME(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4iv(this.addr,e),nn(t,e)}}function EE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function TE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(tn(t,e))return;s.uniform2uiv(this.addr,e),nn(t,e)}}function wE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(tn(t,e))return;s.uniform3uiv(this.addr,e),nn(t,e)}}function AE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(tn(t,e))return;s.uniform4uiv(this.addr,e),nn(t,e)}}function CE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(_d.compareFunction=t.isReversedDepthBuffer()?Pd:Rd,l=_d):l=i0,t.setTexture2D(e||l,o)}function RE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||s0,o)}function PE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||o0,o)}function bE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||r0,o)}function LE(s){switch(s){case 5126:return dE;case 35664:return hE;case 35665:return pE;case 35666:return mE;case 35674:return gE;case 35675:return vE;case 35676:return _E;case 5124:case 35670:return xE;case 35667:case 35671:return yE;case 35668:case 35672:return SE;case 35669:case 35673:return ME;case 5125:return EE;case 36294:return TE;case 36295:return wE;case 36296:return AE;case 35678:case 36198:case 36298:case 36306:case 35682:return CE;case 35679:case 36299:case 36307:return RE;case 35680:case 36300:case 36308:case 36293:return PE;case 36289:case 36303:case 36311:case 36292:return bE}}function DE(s,e){s.uniform1fv(this.addr,e)}function NE(s,e){const t=ro(e,this.size,2);s.uniform2fv(this.addr,t)}function IE(s,e){const t=ro(e,this.size,3);s.uniform3fv(this.addr,t)}function UE(s,e){const t=ro(e,this.size,4);s.uniform4fv(this.addr,t)}function FE(s,e){const t=ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function OE(s,e){const t=ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function BE(s,e){const t=ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function kE(s,e){s.uniform1iv(this.addr,e)}function zE(s,e){s.uniform2iv(this.addr,e)}function VE(s,e){s.uniform3iv(this.addr,e)}function HE(s,e){s.uniform4iv(this.addr,e)}function GE(s,e){s.uniform1uiv(this.addr,e)}function WE(s,e){s.uniform2uiv(this.addr,e)}function XE(s,e){s.uniform3uiv(this.addr,e)}function YE(s,e){s.uniform4uiv(this.addr,e)}function qE(s,e,t){const r=this.cache,o=e.length,l=su(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));let c;this.type===s.SAMPLER_2D_SHADOW?c=_d:c=i0;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||c,l[f])}function jE(s,e,t){const r=this.cache,o=e.length,l=su(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||s0,l[c])}function $E(s,e,t){const r=this.cache,o=e.length,l=su(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||o0,l[c])}function ZE(s,e,t){const r=this.cache,o=e.length,l=su(t,o);tn(r,l)||(s.uniform1iv(this.addr,l),nn(r,l));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||r0,l[c])}function KE(s){switch(s){case 5126:return DE;case 35664:return NE;case 35665:return IE;case 35666:return UE;case 35674:return FE;case 35675:return OE;case 35676:return BE;case 5124:case 35670:return kE;case 35667:case 35671:return zE;case 35668:case 35672:return VE;case 35669:case 35673:return HE;case 5125:return GE;case 36294:return WE;case 36295:return XE;case 36296:return YE;case 35678:case 36198:case 36298:case 36306:case 35682:return qE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return $E;case 36289:case 36303:case 36311:case 36292:return ZE}}class JE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=LE(t.type)}}class QE{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=KE(t.type)}}class e1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const Tf=/(\w+)(\])?(\[|\.)?/g;function sg(s,e){s.seq.push(e),s.map[e.id]=e}function t1(s,e,t){const r=s.name,o=r.length;for(Tf.lastIndex=0;;){const l=Tf.exec(r),c=Tf.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&c+2===o){sg(t,p===void 0?new JE(f,s,e):new QE(f,s,e));break}else{let y=t.map[f];y===void 0&&(y=new e1(f),sg(t,y)),t=y}}}class Kl{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const f=e.getActiveUniform(t,c),h=e.getUniformLocation(t,f.name);t1(f,h,this)}const o=[],l=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,c=t.length;l!==c;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function og(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const n1=37297;let i1=0;function r1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let c=o;c<l;c++){const f=c+1;r.push(`${f===e?">":" "} ${f}: ${t[c]}`)}return r.join(`
`)}const ag=new ft;function s1(s){Et._getMatrix(ag,Et.workingColorSpace,s);const e=`mat3( ${ag.elements.map(t=>t.toFixed(4))} )`;switch(Et.getTransfer(s)){case Ql:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function lg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return t.toUpperCase()+`

`+l+`

`+r1(s.getShaderSource(e),f)}else return l}function o1(s,e){const t=s1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const a1={[_g]:"Linear",[xg]:"Reinhard",[yg]:"Cineon",[Sg]:"ACESFilmic",[Eg]:"AgX",[Tg]:"Neutral",[Mg]:"Custom"};function l1(s,e){const t=a1[e];return t===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gl=new Y;function u1(){Et.getLuminanceCoefficients(Gl);const s=Gl.x.toFixed(4),e=Gl.y.toFixed(4),t=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function f1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function d1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),c=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[c]={type:l.type,location:s.getAttribLocation(e,c),locationSize:f}}return t}function jo(s){return s!==""}function ug(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function cg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const h1=/^[ \t]*#include +<([\w\d./]+)>/gm;function xd(s){return s.replace(h1,m1)}const p1=new Map;function m1(s,e){let t=dt[e];if(t===void 0){const r=p1.get(e);if(r!==void 0)t=dt[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return xd(t)}const g1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fg(s){return s.replace(g1,v1)}function v1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function dg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const _1={[Yl]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function x1(s){return _1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const y1={[ss]:"ENVMAP_TYPE_CUBE",[Ks]:"ENVMAP_TYPE_CUBE",[nu]:"ENVMAP_TYPE_CUBE_UV"};function S1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":y1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const M1={[Ks]:"ENVMAP_MODE_REFRACTION"};function E1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":M1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const T1={[vg]:"ENVMAP_BLENDING_MULTIPLY",[__]:"ENVMAP_BLENDING_MIX",[x_]:"ENVMAP_BLENDING_ADD"};function w1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":T1[s.combine]||"ENVMAP_BLENDING_NONE"}function A1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function C1(s,e,t,r){const o=s.getContext(),l=t.defines;let c=t.vertexShader,f=t.fragmentShader;const h=x1(t),p=S1(t),v=E1(t),y=w1(t),g=A1(t),S=c1(t),M=f1(l),b=o.createProgram();let x,_,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(jo).join(`
`),x.length>0&&(x+=`
`),_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(jo).join(`
`),_.length>0&&(_+=`
`)):(x=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),_=[dg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+y:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?dt.tonemapping_pars_fragment:"",t.toneMapping!==Ri?l1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",dt.colorspace_pars_fragment,o1("linearToOutputTexel",t.outputColorSpace),u1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),c=xd(c),c=ug(c,t),c=cg(c,t),f=xd(f),f=ug(f,t),f=cg(f,t),c=fg(c),f=fg(f),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,_=["#define varying in",t.glslVersion===_m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=R+x+c,P=R+_+f,B=og(o,o.VERTEX_SHADER,C),F=og(o,o.FRAGMENT_SHADER,P);o.attachShader(b,B),o.attachShader(b,F),t.index0AttributeName!==void 0?o.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(b,0,"position"),o.linkProgram(b);function N(U){if(s.debug.checkShaderErrors){const q=o.getProgramInfoLog(b)||"",j=o.getShaderInfoLog(B)||"",se=o.getShaderInfoLog(F)||"",Q=q.trim(),te=j.trim(),G=se.trim();let J=!0,oe=!0;if(o.getProgramParameter(b,o.LINK_STATUS)===!1)if(J=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,b,B,F);else{const ue=lg(o,B,"vertex"),O=lg(o,F,"fragment");wt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(b,o.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Q+`
`+ue+`
`+O)}else Q!==""?at("WebGLProgram: Program Info Log:",Q):(te===""||G==="")&&(oe=!1);oe&&(U.diagnostics={runnable:J,programLog:Q,vertexShader:{log:te,prefix:x},fragmentShader:{log:G,prefix:_}})}o.deleteShader(B),o.deleteShader(F),T=new Kl(o,b),L=d1(o,b)}let T;this.getUniforms=function(){return T===void 0&&N(this),T};let L;this.getAttributes=function(){return L===void 0&&N(this),L};let Z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return Z===!1&&(Z=o.getProgramParameter(b,n1)),Z},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i1++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=B,this.fragmentShader=F,this}let R1=0;class P1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new b1(e),t.set(e,r)),r}}class b1{constructor(e){this.id=R1++,this.code=e,this.usedTimes=0}}function L1(s,e,t,r,o,l){const c=new Fg,f=new P1,h=new Set,p=[],v=new Map,y=r.logarithmicDepthBuffer;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(T){return h.add(T),T===0?"uv":`uv${T}`}function b(T,L,Z,U,q){const j=U.fog,se=q.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?U.environment:null,te=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,G=e.get(T.envMap||Q,te),J=G&&G.mapping===nu?G.image.height:null,oe=S[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&at("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const ue=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,O=ue!==void 0?ue.length:0;let $=0;se.morphAttributes.position!==void 0&&($=1),se.morphAttributes.normal!==void 0&&($=2),se.morphAttributes.color!==void 0&&($=3);let Ae,Re,He,re;if(oe){const St=Ti[oe];Ae=St.vertexShader,Re=St.fragmentShader}else Ae=T.vertexShader,Re=T.fragmentShader,f.update(T),He=f.getVertexShaderID(T),re=f.getFragmentShaderID(T);const he=s.getRenderTarget(),pe=s.state.buffers.depth.getReversed(),Fe=q.isInstancedMesh===!0,Ge=q.isBatchedMesh===!0,nt=!!T.map,Yt=!!T.matcap,ht=!!G,xt=!!T.aoMap,Rt=!!T.lightMap,ut=!!T.bumpMap,Ut=!!T.normalMap,z=!!T.displacementMap,Bt=!!T.emissiveMap,gt=!!T.metalnessMap,yt=!!T.roughnessMap,We=T.anisotropy>0,D=T.clearcoat>0,E=T.dispersion>0,W=T.iridescence>0,de=T.sheen>0,me=T.transmission>0,ce=We&&!!T.anisotropyMap,Be=D&&!!T.clearcoatMap,Te=D&&!!T.clearcoatNormalMap,je=D&&!!T.clearcoatRoughnessMap,it=W&&!!T.iridescenceMap,xe=W&&!!T.iridescenceThicknessMap,Ee=de&&!!T.sheenColorMap,Xe=de&&!!T.sheenRoughnessMap,ke=!!T.specularMap,Le=!!T.specularColorMap,lt=!!T.specularIntensityMap,V=me&&!!T.transmissionMap,we=me&&!!T.thicknessMap,Se=!!T.gradientMap,De=!!T.alphaMap,ye=T.alphaTest>0,fe=!!T.alphaHash,ze=!!T.extensions;let rt=Ri;T.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(rt=s.toneMapping);const bt={shaderID:oe,shaderType:T.type,shaderName:T.name,vertexShader:Ae,fragmentShader:Re,defines:T.defines,customVertexShaderID:He,customFragmentShaderID:re,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&q._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&q.instanceColor!==null,instancingMorph:Fe&&q.morphTexture!==null,outputColorSpace:he===null?s.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:Qs,alphaToCoverage:!!T.alphaToCoverage,map:nt,matcap:Yt,envMap:ht,envMapMode:ht&&G.mapping,envMapCubeUVHeight:J,aoMap:xt,lightMap:Rt,bumpMap:ut,normalMap:Ut,displacementMap:z,emissiveMap:Bt,normalMapObjectSpace:Ut&&T.normalMapType===M_,normalMapTangentSpace:Ut&&T.normalMapType===Ng,metalnessMap:gt,roughnessMap:yt,anisotropy:We,anisotropyMap:ce,clearcoat:D,clearcoatMap:Be,clearcoatNormalMap:Te,clearcoatRoughnessMap:je,dispersion:E,iridescence:W,iridescenceMap:it,iridescenceThicknessMap:xe,sheen:de,sheenColorMap:Ee,sheenRoughnessMap:Xe,specularMap:ke,specularColorMap:Le,specularIntensityMap:lt,transmission:me,transmissionMap:V,thicknessMap:we,gradientMap:Se,opaque:T.transparent===!1&&T.blending===js&&T.alphaToCoverage===!1,alphaMap:De,alphaTest:ye,alphaHash:fe,combine:T.combine,mapUv:nt&&M(T.map.channel),aoMapUv:xt&&M(T.aoMap.channel),lightMapUv:Rt&&M(T.lightMap.channel),bumpMapUv:ut&&M(T.bumpMap.channel),normalMapUv:Ut&&M(T.normalMap.channel),displacementMapUv:z&&M(T.displacementMap.channel),emissiveMapUv:Bt&&M(T.emissiveMap.channel),metalnessMapUv:gt&&M(T.metalnessMap.channel),roughnessMapUv:yt&&M(T.roughnessMap.channel),anisotropyMapUv:ce&&M(T.anisotropyMap.channel),clearcoatMapUv:Be&&M(T.clearcoatMap.channel),clearcoatNormalMapUv:Te&&M(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:je&&M(T.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&M(T.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&M(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&M(T.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&M(T.sheenRoughnessMap.channel),specularMapUv:ke&&M(T.specularMap.channel),specularColorMapUv:Le&&M(T.specularColorMap.channel),specularIntensityMapUv:lt&&M(T.specularIntensityMap.channel),transmissionMapUv:V&&M(T.transmissionMap.channel),thicknessMapUv:we&&M(T.thicknessMap.channel),alphaMapUv:De&&M(T.alphaMap.channel),vertexTangents:!!se.attributes.tangent&&(Ut||We),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!se.attributes.uv&&(nt||De),fog:!!j,useFog:T.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||se.attributes.normal===void 0&&Ut===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:y,reversedDepthBuffer:pe,skinning:q.isSkinnedMesh===!0,morphTargets:se.morphAttributes.position!==void 0,morphNormals:se.morphAttributes.normal!==void 0,morphColors:se.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:$,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&Z.length>0,shadowMapType:s.shadowMap.type,toneMapping:rt,decodeVideoTexture:nt&&T.map.isVideoTexture===!0&&Et.getTransfer(T.map.colorSpace)===Lt,decodeVideoTextureEmissive:Bt&&T.emissiveMap.isVideoTexture===!0&&Et.getTransfer(T.emissiveMap.colorSpace)===Lt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===wi,flipSided:T.side===On,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ze&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&T.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return bt.vertexUv1s=h.has(1),bt.vertexUv2s=h.has(2),bt.vertexUv3s=h.has(3),h.clear(),bt}function x(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const Z in T.defines)L.push(Z),L.push(T.defines[Z]);return T.isRawShaderMaterial===!1&&(_(L,T),R(L,T),L.push(s.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function _(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function R(T,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),T.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),T.push(c.mask)}function C(T){const L=S[T.type];let Z;if(L){const U=Ti[L];Z=ey.clone(U.uniforms)}else Z=T.uniforms;return Z}function P(T,L){let Z=v.get(L);return Z!==void 0?++Z.usedTimes:(Z=new C1(s,L,T,o),p.push(Z),v.set(L,Z)),Z}function B(T){if(--T.usedTimes===0){const L=p.indexOf(T);p[L]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function F(T){f.remove(T)}function N(){f.dispose()}return{getParameters:b,getProgramCacheKey:x,getUniforms:C,acquireProgram:P,releaseProgram:B,releaseShaderCache:F,programs:p,dispose:N}}function D1(){let s=new WeakMap;function e(c){return s.has(c)}function t(c){let f=s.get(c);return f===void 0&&(f={},s.set(c,f)),f}function r(c){s.delete(c)}function o(c,f,h){s.get(c)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function N1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function hg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function pg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let S=0;return g.isInstancedMesh&&(S+=2),g.isSkinnedMesh&&(S+=1),S}function f(g,S,M,b,x,_){let R=s[e];return R===void 0?(R={id:g.id,object:g,geometry:S,material:M,materialVariant:c(g),groupOrder:b,renderOrder:g.renderOrder,z:x,group:_},s[e]=R):(R.id=g.id,R.object=g,R.geometry=S,R.material=M,R.materialVariant=c(g),R.groupOrder=b,R.renderOrder=g.renderOrder,R.z=x,R.group=_),e++,R}function h(g,S,M,b,x,_){const R=f(g,S,M,b,x,_);M.transmission>0?r.push(R):M.transparent===!0?o.push(R):t.push(R)}function p(g,S,M,b,x,_){const R=f(g,S,M,b,x,_);M.transmission>0?r.unshift(R):M.transparent===!0?o.unshift(R):t.unshift(R)}function v(g,S){t.length>1&&t.sort(g||N1),r.length>1&&r.sort(S||hg),o.length>1&&o.sort(S||hg)}function y(){for(let g=e,S=s.length;g<S;g++){const M=s[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:y,sort:v}}function I1(){let s=new WeakMap;function e(r,o){const l=s.get(r);let c;return l===void 0?(c=new pg,s.set(r,[c])):o>=l.length?(c=new pg,l.push(c)):c=l[o],c}function t(){s=new WeakMap}return{get:e,dispose:t}}function U1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new Ct};break;case"SpotLight":t={position:new Y,direction:new Y,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[e.id]=t,t}}}function F1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let O1=0;function B1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function k1(s){const e=new U1,t=F1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new Y);const o=new Y,l=new Gt,c=new Gt;function f(p){let v=0,y=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let S=0,M=0,b=0,x=0,_=0,R=0,C=0,P=0,B=0,F=0,N=0;p.sort(B1);for(let L=0,Z=p.length;L<Z;L++){const U=p[L],q=U.color,j=U.intensity,se=U.distance;let Q=null;if(U.shadow&&U.shadow.map&&(U.shadow.map.texture.format===Js?Q=U.shadow.map.texture:Q=U.shadow.map.depthTexture||U.shadow.map.texture),U.isAmbientLight)v+=q.r*j,y+=q.g*j,g+=q.b*j;else if(U.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(U.sh.coefficients[te],j);N++}else if(U.isDirectionalLight){const te=e.get(U);if(te.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const G=U.shadow,J=t.get(U);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,r.directionalShadow[S]=J,r.directionalShadowMap[S]=Q,r.directionalShadowMatrix[S]=U.shadow.matrix,R++}r.directional[S]=te,S++}else if(U.isSpotLight){const te=e.get(U);te.position.setFromMatrixPosition(U.matrixWorld),te.color.copy(q).multiplyScalar(j),te.distance=se,te.coneCos=Math.cos(U.angle),te.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),te.decay=U.decay,r.spot[b]=te;const G=U.shadow;if(U.map&&(r.spotLightMap[B]=U.map,B++,G.updateMatrices(U),U.castShadow&&F++),r.spotLightMatrix[b]=G.matrix,U.castShadow){const J=t.get(U);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,r.spotShadow[b]=J,r.spotShadowMap[b]=Q,P++}b++}else if(U.isRectAreaLight){const te=e.get(U);te.color.copy(q).multiplyScalar(j),te.halfWidth.set(U.width*.5,0,0),te.halfHeight.set(0,U.height*.5,0),r.rectArea[x]=te,x++}else if(U.isPointLight){const te=e.get(U);if(te.color.copy(U.color).multiplyScalar(U.intensity),te.distance=U.distance,te.decay=U.decay,U.castShadow){const G=U.shadow,J=t.get(U);J.shadowIntensity=G.intensity,J.shadowBias=G.bias,J.shadowNormalBias=G.normalBias,J.shadowRadius=G.radius,J.shadowMapSize=G.mapSize,J.shadowCameraNear=G.camera.near,J.shadowCameraFar=G.camera.far,r.pointShadow[M]=J,r.pointShadowMap[M]=Q,r.pointShadowMatrix[M]=U.shadow.matrix,C++}r.point[M]=te,M++}else if(U.isHemisphereLight){const te=e.get(U);te.skyColor.copy(U.color).multiplyScalar(j),te.groundColor.copy(U.groundColor).multiplyScalar(j),r.hemi[_]=te,_++}}x>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=y,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==S||T.pointLength!==M||T.spotLength!==b||T.rectAreaLength!==x||T.hemiLength!==_||T.numDirectionalShadows!==R||T.numPointShadows!==C||T.numSpotShadows!==P||T.numSpotMaps!==B||T.numLightProbes!==N)&&(r.directional.length=S,r.spot.length=b,r.rectArea.length=x,r.point.length=M,r.hemi.length=_,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=P+B-F,r.spotLightMap.length=B,r.numSpotLightShadowsWithMaps=F,r.numLightProbes=N,T.directionalLength=S,T.pointLength=M,T.spotLength=b,T.rectAreaLength=x,T.hemiLength=_,T.numDirectionalShadows=R,T.numPointShadows=C,T.numSpotShadows=P,T.numSpotMaps=B,T.numLightProbes=N,r.version=O1++)}function h(p,v){let y=0,g=0,S=0,M=0,b=0;const x=v.matrixWorldInverse;for(let _=0,R=p.length;_<R;_++){const C=p[_];if(C.isDirectionalLight){const P=r.directional[y];P.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),y++}else if(C.isSpotLight){const P=r.spot[S];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(x),P.direction.setFromMatrixPosition(C.matrixWorld),o.setFromMatrixPosition(C.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(x),S++}else if(C.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(x),c.identity(),l.copy(C.matrixWorld),l.premultiply(x),c.extractRotation(l),P.halfWidth.set(C.width*.5,0,0),P.halfHeight.set(0,C.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),M++}else if(C.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(C.matrixWorld),P.position.applyMatrix4(x),g++}else if(C.isHemisphereLight){const P=r.hemi[b];P.direction.setFromMatrixPosition(C.matrixWorld),P.direction.transformDirection(x),b++}}}return{setup:f,setupView:h,state:r}}function mg(s){const e=new k1(s),t=[],r=[];function o(v){p.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function c(v){r.push(v)}function f(){e.setup(t)}function h(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:c}}function z1(s){let e=new WeakMap;function t(o,l=0){const c=e.get(o);let f;return c===void 0?(f=new mg(s),e.set(o,[f])):l>=c.length?(f=new mg(s),c.push(f)):f=c[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const V1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H1=`uniform sampler2D shadow_pass;
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
}`,G1=[new Y(1,0,0),new Y(-1,0,0),new Y(0,1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1)],W1=[new Y(0,-1,0),new Y(0,-1,0),new Y(0,0,1),new Y(0,0,-1),new Y(0,-1,0),new Y(0,-1,0)],gg=new Gt,Xo=new Y,wf=new Y;function X1(s,e,t){let r=new Nd;const o=new Je,l=new Je,c=new Xt,f=new ry,h=new sy,p={},v=t.maxTextureSize,y={[Dr]:On,[On]:Dr,[wi]:wi},g=new Ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:V1,fragmentShader:H1}),S=g.clone();S.defines.HORIZONTAL_PASS=1;const M=new ri;M.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ln(M,g),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yl;let _=this.type;this.render=function(F,N,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||F.length===0)return;this.type===Qv&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Yl);const L=s.getRenderTarget(),Z=s.getActiveCubeFace(),U=s.getActiveMipmapLevel(),q=s.state;q.setBlending(Ji),q.buffers.depth.getReversed()===!0?q.buffers.color.setClear(0,0,0,0):q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);const j=_!==this.type;j&&N.traverse(function(se){se.material&&(Array.isArray(se.material)?se.material.forEach(Q=>Q.needsUpdate=!0):se.material.needsUpdate=!0)});for(let se=0,Q=F.length;se<Q;se++){const te=F[se],G=te.shadow;if(G===void 0){at("WebGLShadowMap:",te,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;o.copy(G.mapSize);const J=G.getFrameExtents();o.multiply(J),l.copy(G.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/J.x),o.x=l.x*J.x,G.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/J.y),o.y=l.y*J.y,G.mapSize.y=l.y));const oe=s.state.buffers.depth.getReversed();if(G.camera._reversedDepth=oe,G.map===null||j===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Yo){if(te.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Pi(o.x,o.y,{format:Js,type:er,minFilter:yn,magFilter:yn,generateMipmaps:!1}),G.map.texture.name=te.name+".shadowMap",G.map.depthTexture=new ra(o.x,o.y,Ai),G.map.depthTexture.name=te.name+".shadowMapDepth",G.map.depthTexture.format=tr,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=dn,G.map.depthTexture.magFilter=dn}else te.isPointLight?(G.map=new n0(o.x),G.map.depthTexture=new yx(o.x,Li)):(G.map=new Pi(o.x,o.y),G.map.depthTexture=new ra(o.x,o.y,Li)),G.map.depthTexture.name=te.name+".shadowMap",G.map.depthTexture.format=tr,this.type===Yl?(G.map.depthTexture.compareFunction=oe?Pd:Rd,G.map.depthTexture.minFilter=yn,G.map.depthTexture.magFilter=yn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=dn,G.map.depthTexture.magFilter=dn);G.camera.updateProjectionMatrix()}const ue=G.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<ue;O++){if(G.map.isWebGLCubeRenderTarget)s.setRenderTarget(G.map,O),s.clear();else{O===0&&(s.setRenderTarget(G.map),s.clear());const $=G.getViewport(O);c.set(l.x*$.x,l.y*$.y,l.x*$.z,l.y*$.w),q.viewport(c)}if(te.isPointLight){const $=G.camera,Ae=G.matrix,Re=te.distance||$.far;Re!==$.far&&($.far=Re,$.updateProjectionMatrix()),Xo.setFromMatrixPosition(te.matrixWorld),$.position.copy(Xo),wf.copy($.position),wf.add(G1[O]),$.up.copy(W1[O]),$.lookAt(wf),$.updateMatrixWorld(),Ae.makeTranslation(-Xo.x,-Xo.y,-Xo.z),gg.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),G._frustum.setFromProjectionMatrix(gg,$.coordinateSystem,$.reversedDepth)}else G.updateMatrices(te);r=G.getFrustum(),P(N,T,G.camera,te,this.type)}G.isPointLightShadow!==!0&&this.type===Yo&&R(G,T),G.needsUpdate=!1}_=this.type,x.needsUpdate=!1,s.setRenderTarget(L,Z,U)};function R(F,N){const T=e.update(b);g.defines.VSM_SAMPLES!==F.blurSamples&&(g.defines.VSM_SAMPLES=F.blurSamples,S.defines.VSM_SAMPLES=F.blurSamples,g.needsUpdate=!0,S.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Pi(o.x,o.y,{format:Js,type:er})),g.uniforms.shadow_pass.value=F.map.depthTexture,g.uniforms.resolution.value=F.mapSize,g.uniforms.radius.value=F.radius,s.setRenderTarget(F.mapPass),s.clear(),s.renderBufferDirect(N,null,T,g,b,null),S.uniforms.shadow_pass.value=F.mapPass.texture,S.uniforms.resolution.value=F.mapSize,S.uniforms.radius.value=F.radius,s.setRenderTarget(F.map),s.clear(),s.renderBufferDirect(N,null,T,S,b,null)}function C(F,N,T,L){let Z=null;const U=T.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(U!==void 0)Z=U;else if(Z=T.isPointLight===!0?h:f,s.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const q=Z.uuid,j=N.uuid;let se=p[q];se===void 0&&(se={},p[q]=se);let Q=se[j];Q===void 0&&(Q=Z.clone(),se[j]=Q,N.addEventListener("dispose",B)),Z=Q}if(Z.visible=N.visible,Z.wireframe=N.wireframe,L===Yo?Z.side=N.shadowSide!==null?N.shadowSide:N.side:Z.side=N.shadowSide!==null?N.shadowSide:y[N.side],Z.alphaMap=N.alphaMap,Z.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,Z.map=N.map,Z.clipShadows=N.clipShadows,Z.clippingPlanes=N.clippingPlanes,Z.clipIntersection=N.clipIntersection,Z.displacementMap=N.displacementMap,Z.displacementScale=N.displacementScale,Z.displacementBias=N.displacementBias,Z.wireframeLinewidth=N.wireframeLinewidth,Z.linewidth=N.linewidth,T.isPointLight===!0&&Z.isMeshDistanceMaterial===!0){const q=s.properties.get(Z);q.light=T}return Z}function P(F,N,T,L,Z){if(F.visible===!1)return;if(F.layers.test(N.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&Z===Yo)&&(!F.frustumCulled||r.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,F.matrixWorld);const j=e.update(F),se=F.material;if(Array.isArray(se)){const Q=j.groups;for(let te=0,G=Q.length;te<G;te++){const J=Q[te],oe=se[J.materialIndex];if(oe&&oe.visible){const ue=C(F,oe,L,Z);F.onBeforeShadow(s,F,N,T,j,ue,J),s.renderBufferDirect(T,null,j,ue,F,J),F.onAfterShadow(s,F,N,T,j,ue,J)}}}else if(se.visible){const Q=C(F,se,L,Z);F.onBeforeShadow(s,F,N,T,j,Q,null),s.renderBufferDirect(T,null,j,Q,F,null),F.onAfterShadow(s,F,N,T,j,Q,null)}}const q=F.children;for(let j=0,se=q.length;j<se;j++)P(q[j],N,T,L,Z)}function B(F){F.target.removeEventListener("dispose",B);for(const T in p){const L=p[T],Z=F.target.uuid;Z in L&&(L[Z].dispose(),delete L[Z])}}}function Y1(s,e){function t(){let V=!1;const we=new Xt;let Se=null;const De=new Xt(0,0,0,0);return{setMask:function(ye){Se!==ye&&!V&&(s.colorMask(ye,ye,ye,ye),Se=ye)},setLocked:function(ye){V=ye},setClear:function(ye,fe,ze,rt,bt){bt===!0&&(ye*=rt,fe*=rt,ze*=rt),we.set(ye,fe,ze,rt),De.equals(we)===!1&&(s.clearColor(ye,fe,ze,rt),De.copy(we))},reset:function(){V=!1,Se=null,De.set(-1,0,0,0)}}}function r(){let V=!1,we=!1,Se=null,De=null,ye=null;return{setReversed:function(fe){if(we!==fe){const ze=e.get("EXT_clip_control");fe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),we=fe;const rt=ye;ye=null,this.setClear(rt)}},getReversed:function(){return we},setTest:function(fe){fe?he(s.DEPTH_TEST):pe(s.DEPTH_TEST)},setMask:function(fe){Se!==fe&&!V&&(s.depthMask(fe),Se=fe)},setFunc:function(fe){if(we&&(fe=D_[fe]),De!==fe){switch(fe){case Pf:s.depthFunc(s.NEVER);break;case bf:s.depthFunc(s.ALWAYS);break;case Lf:s.depthFunc(s.LESS);break;case Zs:s.depthFunc(s.LEQUAL);break;case Df:s.depthFunc(s.EQUAL);break;case Nf:s.depthFunc(s.GEQUAL);break;case If:s.depthFunc(s.GREATER);break;case Uf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}De=fe}},setLocked:function(fe){V=fe},setClear:function(fe){ye!==fe&&(ye=fe,we&&(fe=1-fe),s.clearDepth(fe))},reset:function(){V=!1,Se=null,De=null,ye=null,we=!1}}}function o(){let V=!1,we=null,Se=null,De=null,ye=null,fe=null,ze=null,rt=null,bt=null;return{setTest:function(St){V||(St?he(s.STENCIL_TEST):pe(s.STENCIL_TEST))},setMask:function(St){we!==St&&!V&&(s.stencilMask(St),we=St)},setFunc:function(St,Yn,Mn){(Se!==St||De!==Yn||ye!==Mn)&&(s.stencilFunc(St,Yn,Mn),Se=St,De=Yn,ye=Mn)},setOp:function(St,Yn,Mn){(fe!==St||ze!==Yn||rt!==Mn)&&(s.stencilOp(St,Yn,Mn),fe=St,ze=Yn,rt=Mn)},setLocked:function(St){V=St},setClear:function(St){bt!==St&&(s.clearStencil(St),bt=St)},reset:function(){V=!1,we=null,Se=null,De=null,ye=null,fe=null,ze=null,rt=null,bt=null}}}const l=new t,c=new r,f=new o,h=new WeakMap,p=new WeakMap;let v={},y={},g=new WeakMap,S=[],M=null,b=!1,x=null,_=null,R=null,C=null,P=null,B=null,F=null,N=new Ct(0,0,0),T=0,L=!1,Z=null,U=null,q=null,j=null,se=null;const Q=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let te=!1,G=0;const J=s.getParameter(s.VERSION);J.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(J)[1]),te=G>=1):J.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),te=G>=2);let oe=null,ue={};const O=s.getParameter(s.SCISSOR_BOX),$=s.getParameter(s.VIEWPORT),Ae=new Xt().fromArray(O),Re=new Xt().fromArray($);function He(V,we,Se,De){const ye=new Uint8Array(4),fe=s.createTexture();s.bindTexture(V,fe),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ze=0;ze<Se;ze++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(we,0,s.RGBA,1,1,De,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(we+ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return fe}const re={};re[s.TEXTURE_2D]=He(s.TEXTURE_2D,s.TEXTURE_2D,1),re[s.TEXTURE_CUBE_MAP]=He(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[s.TEXTURE_2D_ARRAY]=He(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),re[s.TEXTURE_3D]=He(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),he(s.DEPTH_TEST),c.setFunc(Zs),ut(!1),Ut(dm),he(s.CULL_FACE),xt(Ji);function he(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function pe(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function Fe(V,we){return y[V]!==we?(s.bindFramebuffer(V,we),y[V]=we,V===s.DRAW_FRAMEBUFFER&&(y[s.FRAMEBUFFER]=we),V===s.FRAMEBUFFER&&(y[s.DRAW_FRAMEBUFFER]=we),!0):!1}function Ge(V,we){let Se=S,De=!1;if(V){Se=g.get(we),Se===void 0&&(Se=[],g.set(we,Se));const ye=V.textures;if(Se.length!==ye.length||Se[0]!==s.COLOR_ATTACHMENT0){for(let fe=0,ze=ye.length;fe<ze;fe++)Se[fe]=s.COLOR_ATTACHMENT0+fe;Se.length=ye.length,De=!0}}else Se[0]!==s.BACK&&(Se[0]=s.BACK,De=!0);De&&s.drawBuffers(Se)}function nt(V){return M!==V?(s.useProgram(V),M=V,!0):!1}const Yt={[ts]:s.FUNC_ADD,[t_]:s.FUNC_SUBTRACT,[n_]:s.FUNC_REVERSE_SUBTRACT};Yt[i_]=s.MIN,Yt[r_]=s.MAX;const ht={[s_]:s.ZERO,[o_]:s.ONE,[a_]:s.SRC_COLOR,[Cf]:s.SRC_ALPHA,[h_]:s.SRC_ALPHA_SATURATE,[f_]:s.DST_COLOR,[u_]:s.DST_ALPHA,[l_]:s.ONE_MINUS_SRC_COLOR,[Rf]:s.ONE_MINUS_SRC_ALPHA,[d_]:s.ONE_MINUS_DST_COLOR,[c_]:s.ONE_MINUS_DST_ALPHA,[p_]:s.CONSTANT_COLOR,[m_]:s.ONE_MINUS_CONSTANT_COLOR,[g_]:s.CONSTANT_ALPHA,[v_]:s.ONE_MINUS_CONSTANT_ALPHA};function xt(V,we,Se,De,ye,fe,ze,rt,bt,St){if(V===Ji){b===!0&&(pe(s.BLEND),b=!1);return}if(b===!1&&(he(s.BLEND),b=!0),V!==e_){if(V!==x||St!==L){if((_!==ts||P!==ts)&&(s.blendEquation(s.FUNC_ADD),_=ts,P=ts),St)switch(V){case js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hm:s.blendFunc(s.ONE,s.ONE);break;case pm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:wt("WebGLState: Invalid blending: ",V);break}else switch(V){case js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case hm:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case pm:wt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mm:wt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:wt("WebGLState: Invalid blending: ",V);break}R=null,C=null,B=null,F=null,N.set(0,0,0),T=0,x=V,L=St}return}ye=ye||we,fe=fe||Se,ze=ze||De,(we!==_||ye!==P)&&(s.blendEquationSeparate(Yt[we],Yt[ye]),_=we,P=ye),(Se!==R||De!==C||fe!==B||ze!==F)&&(s.blendFuncSeparate(ht[Se],ht[De],ht[fe],ht[ze]),R=Se,C=De,B=fe,F=ze),(rt.equals(N)===!1||bt!==T)&&(s.blendColor(rt.r,rt.g,rt.b,bt),N.copy(rt),T=bt),x=V,L=!1}function Rt(V,we){V.side===wi?pe(s.CULL_FACE):he(s.CULL_FACE);let Se=V.side===On;we&&(Se=!Se),ut(Se),V.blending===js&&V.transparent===!1?xt(Ji):xt(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),c.setFunc(V.depthFunc),c.setTest(V.depthTest),c.setMask(V.depthWrite),l.setMask(V.colorWrite);const De=V.stencilWrite;f.setTest(De),De&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Bt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):pe(s.SAMPLE_ALPHA_TO_COVERAGE)}function ut(V){Z!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),Z=V)}function Ut(V){V!==Kv?(he(s.CULL_FACE),V!==U&&(V===dm?s.cullFace(s.BACK):V===Jv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):pe(s.CULL_FACE),U=V}function z(V){V!==q&&(te&&s.lineWidth(V),q=V)}function Bt(V,we,Se){V?(he(s.POLYGON_OFFSET_FILL),(j!==we||se!==Se)&&(j=we,se=Se,c.getReversed()&&(we=-we),s.polygonOffset(we,Se))):pe(s.POLYGON_OFFSET_FILL)}function gt(V){V?he(s.SCISSOR_TEST):pe(s.SCISSOR_TEST)}function yt(V){V===void 0&&(V=s.TEXTURE0+Q-1),oe!==V&&(s.activeTexture(V),oe=V)}function We(V,we,Se){Se===void 0&&(oe===null?Se=s.TEXTURE0+Q-1:Se=oe);let De=ue[Se];De===void 0&&(De={type:void 0,texture:void 0},ue[Se]=De),(De.type!==V||De.texture!==we)&&(oe!==Se&&(s.activeTexture(Se),oe=Se),s.bindTexture(V,we||re[V]),De.type=V,De.texture=we)}function D(){const V=ue[oe];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function E(){try{s.compressedTexImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function de(){try{s.texSubImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function me(){try{s.texSubImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function Be(){try{s.compressedTexSubImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function Te(){try{s.texStorage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function je(){try{s.texStorage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function it(){try{s.texImage2D(...arguments)}catch(V){wt("WebGLState:",V)}}function xe(){try{s.texImage3D(...arguments)}catch(V){wt("WebGLState:",V)}}function Ee(V){Ae.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),Ae.copy(V))}function Xe(V){Re.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Re.copy(V))}function ke(V,we){let Se=p.get(we);Se===void 0&&(Se=new WeakMap,p.set(we,Se));let De=Se.get(V);De===void 0&&(De=s.getUniformBlockIndex(we,V.name),Se.set(V,De))}function Le(V,we){const De=p.get(we).get(V);h.get(we)!==De&&(s.uniformBlockBinding(we,De,V.__bindingPointIndex),h.set(we,De))}function lt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},oe=null,ue={},y={},g=new WeakMap,S=[],M=null,b=!1,x=null,_=null,R=null,C=null,P=null,B=null,F=null,N=new Ct(0,0,0),T=0,L=!1,Z=null,U=null,q=null,j=null,se=null,Ae.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:he,disable:pe,bindFramebuffer:Fe,drawBuffers:Ge,useProgram:nt,setBlending:xt,setMaterial:Rt,setFlipSided:ut,setCullFace:Ut,setLineWidth:z,setPolygonOffset:Bt,setScissorTest:gt,activeTexture:yt,bindTexture:We,unbindTexture:D,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:it,texImage3D:xe,updateUBOMapping:ke,uniformBlockBinding:Le,texStorage2D:Te,texStorage3D:je,texSubImage2D:de,texSubImage3D:me,compressedTexSubImage2D:ce,compressedTexSubImage3D:Be,scissor:Ee,viewport:Xe,reset:lt}}function q1(s,e,t,r,o,l,c){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Je,v=new WeakMap;let y;const g=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(D,E){return S?new OffscreenCanvas(D,E):eu("canvas")}function b(D,E,W){let de=1;const me=We(D);if((me.width>W||me.height>W)&&(de=W/Math.max(me.width,me.height)),de<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(de*me.width),Be=Math.floor(de*me.height);y===void 0&&(y=M(ce,Be));const Te=E?M(ce,Be):y;return Te.width=ce,Te.height=Be,Te.getContext("2d").drawImage(D,0,0,ce,Be),at("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+ce+"x"+Be+")."),Te}else return"data"in D&&at("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),D;return D}function x(D){return D.generateMipmaps}function _(D){s.generateMipmap(D)}function R(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function C(D,E,W,de,me=!1){if(D!==null){if(s[D]!==void 0)return s[D];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=E;if(E===s.RED&&(W===s.FLOAT&&(ce=s.R32F),W===s.HALF_FLOAT&&(ce=s.R16F),W===s.UNSIGNED_BYTE&&(ce=s.R8)),E===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(ce=s.R8UI),W===s.UNSIGNED_SHORT&&(ce=s.R16UI),W===s.UNSIGNED_INT&&(ce=s.R32UI),W===s.BYTE&&(ce=s.R8I),W===s.SHORT&&(ce=s.R16I),W===s.INT&&(ce=s.R32I)),E===s.RG&&(W===s.FLOAT&&(ce=s.RG32F),W===s.HALF_FLOAT&&(ce=s.RG16F),W===s.UNSIGNED_BYTE&&(ce=s.RG8)),E===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(ce=s.RG8UI),W===s.UNSIGNED_SHORT&&(ce=s.RG16UI),W===s.UNSIGNED_INT&&(ce=s.RG32UI),W===s.BYTE&&(ce=s.RG8I),W===s.SHORT&&(ce=s.RG16I),W===s.INT&&(ce=s.RG32I)),E===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),W===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),W===s.UNSIGNED_INT&&(ce=s.RGB32UI),W===s.BYTE&&(ce=s.RGB8I),W===s.SHORT&&(ce=s.RGB16I),W===s.INT&&(ce=s.RGB32I)),E===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),W===s.UNSIGNED_INT&&(ce=s.RGBA32UI),W===s.BYTE&&(ce=s.RGBA8I),W===s.SHORT&&(ce=s.RGBA16I),W===s.INT&&(ce=s.RGBA32I)),E===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),E===s.RGBA){const Be=me?Ql:Et.getTransfer(de);W===s.FLOAT&&(ce=s.RGBA32F),W===s.HALF_FLOAT&&(ce=s.RGBA16F),W===s.UNSIGNED_BYTE&&(ce=Be===Lt?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function P(D,E){let W;return D?E===null||E===Li||E===ta?W=s.DEPTH24_STENCIL8:E===Ai?W=s.DEPTH32F_STENCIL8:E===ea&&(W=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Li||E===ta?W=s.DEPTH_COMPONENT24:E===Ai?W=s.DEPTH_COMPONENT32F:E===ea&&(W=s.DEPTH_COMPONENT16),W}function B(D,E){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==dn&&D.minFilter!==yn?Math.log2(Math.max(E.width,E.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?E.mipmaps.length:1}function F(D){const E=D.target;E.removeEventListener("dispose",F),T(E),E.isVideoTexture&&v.delete(E)}function N(D){const E=D.target;E.removeEventListener("dispose",N),Z(E)}function T(D){const E=r.get(D);if(E.__webglInit===void 0)return;const W=D.source,de=g.get(W);if(de){const me=de[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&L(D),Object.keys(de).length===0&&g.delete(W)}r.remove(D)}function L(D){const E=r.get(D);s.deleteTexture(E.__webglTexture);const W=D.source,de=g.get(W);delete de[E.__cacheKey],c.memory.textures--}function Z(D){const E=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let de=0;de<6;de++){if(Array.isArray(E.__webglFramebuffer[de]))for(let me=0;me<E.__webglFramebuffer[de].length;me++)s.deleteFramebuffer(E.__webglFramebuffer[de][me]);else s.deleteFramebuffer(E.__webglFramebuffer[de]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[de])}else{if(Array.isArray(E.__webglFramebuffer))for(let de=0;de<E.__webglFramebuffer.length;de++)s.deleteFramebuffer(E.__webglFramebuffer[de]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let de=0;de<E.__webglColorRenderbuffer.length;de++)E.__webglColorRenderbuffer[de]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[de]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=D.textures;for(let de=0,me=W.length;de<me;de++){const ce=r.get(W[de]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),c.memory.textures--),r.remove(W[de])}r.remove(D)}let U=0;function q(){U=0}function j(){const D=U;return D>=o.maxTextures&&at("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+o.maxTextures),U+=1,D}function se(D){const E=[];return E.push(D.wrapS),E.push(D.wrapT),E.push(D.wrapR||0),E.push(D.magFilter),E.push(D.minFilter),E.push(D.anisotropy),E.push(D.internalFormat),E.push(D.format),E.push(D.type),E.push(D.generateMipmaps),E.push(D.premultiplyAlpha),E.push(D.flipY),E.push(D.unpackAlignment),E.push(D.colorSpace),E.join()}function Q(D,E){const W=r.get(D);if(D.isVideoTexture&&gt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const de=D.image;if(de===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(de.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{re(W,D,E);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+E)}function te(D,E){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){re(W,D,E);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+E)}function G(D,E){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){re(W,D,E);return}t.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+E)}function J(D,E){const W=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){he(W,D,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+E)}const oe={[Ff]:s.REPEAT,[Ki]:s.CLAMP_TO_EDGE,[Of]:s.MIRRORED_REPEAT},ue={[dn]:s.NEAREST,[y_]:s.NEAREST_MIPMAP_NEAREST,[xl]:s.NEAREST_MIPMAP_LINEAR,[yn]:s.LINEAR,[Yc]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},O={[E_]:s.NEVER,[R_]:s.ALWAYS,[T_]:s.LESS,[Rd]:s.LEQUAL,[w_]:s.EQUAL,[Pd]:s.GEQUAL,[A_]:s.GREATER,[C_]:s.NOTEQUAL};function $(D,E){if(E.type===Ai&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===yn||E.magFilter===Yc||E.magFilter===xl||E.magFilter===is||E.minFilter===yn||E.minFilter===Yc||E.minFilter===xl||E.minFilter===is)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,oe[E.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,oe[E.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,oe[E.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,ue[E.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,ue[E.minFilter]),E.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,O[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===dn||E.minFilter!==xl&&E.minFilter!==is||E.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function Ae(D,E){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,E.addEventListener("dispose",F));const de=E.source;let me=g.get(de);me===void 0&&(me={},g.set(de,me));const ce=se(E);if(ce!==D.__cacheKey){me[ce]===void 0&&(me[ce]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,W=!0),me[ce].usedTimes++;const Be=me[D.__cacheKey];Be!==void 0&&(me[D.__cacheKey].usedTimes--,Be.usedTimes===0&&L(E)),D.__cacheKey=ce,D.__webglTexture=me[ce].texture}return W}function Re(D,E,W){return Math.floor(Math.floor(D/W)/E)}function He(D,E,W,de){const ce=D.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,W,de,E.data);else{ce.sort((xe,Ee)=>xe.start-Ee.start);let Be=0;for(let xe=1;xe<ce.length;xe++){const Ee=ce[Be],Xe=ce[xe],ke=Ee.start+Ee.count,Le=Re(Xe.start,E.width,4),lt=Re(Ee.start,E.width,4);Xe.start<=ke+1&&Le===lt&&Re(Xe.start+Xe.count-1,E.width,4)===Le?Ee.count=Math.max(Ee.count,Xe.start+Xe.count-Ee.start):(++Be,ce[Be]=Xe)}ce.length=Be+1;const Te=s.getParameter(s.UNPACK_ROW_LENGTH),je=s.getParameter(s.UNPACK_SKIP_PIXELS),it=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let xe=0,Ee=ce.length;xe<Ee;xe++){const Xe=ce[xe],ke=Math.floor(Xe.start/4),Le=Math.ceil(Xe.count/4),lt=ke%E.width,V=Math.floor(ke/E.width),we=Le,Se=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,lt),s.pixelStorei(s.UNPACK_SKIP_ROWS,V),t.texSubImage2D(s.TEXTURE_2D,0,lt,V,we,Se,W,de,E.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,Te),s.pixelStorei(s.UNPACK_SKIP_PIXELS,je),s.pixelStorei(s.UNPACK_SKIP_ROWS,it)}}function re(D,E,W){let de=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(de=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(de=s.TEXTURE_3D);const me=Ae(D,E),ce=E.source;t.bindTexture(de,D.__webglTexture,s.TEXTURE0+W);const Be=r.get(ce);if(ce.version!==Be.__version||me===!0){t.activeTexture(s.TEXTURE0+W);const Te=Et.getPrimaries(Et.workingColorSpace),je=E.colorSpace===br?null:Et.getPrimaries(E.colorSpace),it=E.colorSpace===br||Te===je?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let xe=b(E.image,!1,o.maxTextureSize);xe=yt(E,xe);const Ee=l.convert(E.format,E.colorSpace),Xe=l.convert(E.type);let ke=C(E.internalFormat,Ee,Xe,E.colorSpace,E.isVideoTexture);$(de,E);let Le;const lt=E.mipmaps,V=E.isVideoTexture!==!0,we=Be.__version===void 0||me===!0,Se=ce.dataReady,De=B(E,xe);if(E.isDepthTexture)ke=P(E.format===rs,E.type),we&&(V?t.texStorage2D(s.TEXTURE_2D,1,ke,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,ke,xe.width,xe.height,0,Ee,Xe,null));else if(E.isDataTexture)if(lt.length>0){V&&we&&t.texStorage2D(s.TEXTURE_2D,De,ke,lt[0].width,lt[0].height);for(let ye=0,fe=lt.length;ye<fe;ye++)Le=lt[ye],V?Se&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ee,Xe,Le.data):t.texImage2D(s.TEXTURE_2D,ye,ke,Le.width,Le.height,0,Ee,Xe,Le.data);E.generateMipmaps=!1}else V?(we&&t.texStorage2D(s.TEXTURE_2D,De,ke,xe.width,xe.height),Se&&He(E,xe,Ee,Xe)):t.texImage2D(s.TEXTURE_2D,0,ke,xe.width,xe.height,0,Ee,Xe,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){V&&we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,ke,lt[0].width,lt[0].height,xe.depth);for(let ye=0,fe=lt.length;ye<fe;ye++)if(Le=lt[ye],E.format!==gi)if(Ee!==null)if(V){if(Se)if(E.layerUpdates.size>0){const ze=qm(Le.width,Le.height,E.format,E.type);for(const rt of E.layerUpdates){const bt=Le.data.subarray(rt*ze/Le.data.BYTES_PER_ELEMENT,(rt+1)*ze/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,rt,Le.width,Le.height,1,Ee,bt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,xe.depth,Ee,Le.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,ke,Le.width,Le.height,xe.depth,0,Le.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Se&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,Le.width,Le.height,xe.depth,Ee,Xe,Le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ye,ke,Le.width,Le.height,xe.depth,0,Ee,Xe,Le.data)}else{V&&we&&t.texStorage2D(s.TEXTURE_2D,De,ke,lt[0].width,lt[0].height);for(let ye=0,fe=lt.length;ye<fe;ye++)Le=lt[ye],E.format!==gi?Ee!==null?V?Se&&t.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ee,Le.data):t.compressedTexImage2D(s.TEXTURE_2D,ye,ke,Le.width,Le.height,0,Le.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Se&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Le.width,Le.height,Ee,Xe,Le.data):t.texImage2D(s.TEXTURE_2D,ye,ke,Le.width,Le.height,0,Ee,Xe,Le.data)}else if(E.isDataArrayTexture)if(V){if(we&&t.texStorage3D(s.TEXTURE_2D_ARRAY,De,ke,xe.width,xe.height,xe.depth),Se)if(E.layerUpdates.size>0){const ye=qm(xe.width,xe.height,E.format,E.type);for(const fe of E.layerUpdates){const ze=xe.data.subarray(fe*ye/xe.data.BYTES_PER_ELEMENT,(fe+1)*ye/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,fe,xe.width,xe.height,1,Ee,Xe,ze)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ee,Xe,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,ke,xe.width,xe.height,xe.depth,0,Ee,Xe,xe.data);else if(E.isData3DTexture)V?(we&&t.texStorage3D(s.TEXTURE_3D,De,ke,xe.width,xe.height,xe.depth),Se&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ee,Xe,xe.data)):t.texImage3D(s.TEXTURE_3D,0,ke,xe.width,xe.height,xe.depth,0,Ee,Xe,xe.data);else if(E.isFramebufferTexture){if(we)if(V)t.texStorage2D(s.TEXTURE_2D,De,ke,xe.width,xe.height);else{let ye=xe.width,fe=xe.height;for(let ze=0;ze<De;ze++)t.texImage2D(s.TEXTURE_2D,ze,ke,ye,fe,0,Ee,Xe,null),ye>>=1,fe>>=1}}else if(lt.length>0){if(V&&we){const ye=We(lt[0]);t.texStorage2D(s.TEXTURE_2D,De,ke,ye.width,ye.height)}for(let ye=0,fe=lt.length;ye<fe;ye++)Le=lt[ye],V?Se&&t.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ee,Xe,Le):t.texImage2D(s.TEXTURE_2D,ye,ke,Ee,Xe,Le);E.generateMipmaps=!1}else if(V){if(we){const ye=We(xe);t.texStorage2D(s.TEXTURE_2D,De,ke,ye.width,ye.height)}Se&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Xe,xe)}else t.texImage2D(s.TEXTURE_2D,0,ke,Ee,Xe,xe);x(E)&&_(de),Be.__version=ce.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function he(D,E,W){if(E.image.length!==6)return;const de=Ae(D,E),me=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+W);const ce=r.get(me);if(me.version!==ce.__version||de===!0){t.activeTexture(s.TEXTURE0+W);const Be=Et.getPrimaries(Et.workingColorSpace),Te=E.colorSpace===br?null:Et.getPrimaries(E.colorSpace),je=E.colorSpace===br||Be===Te?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);const it=E.isCompressedTexture||E.image[0].isCompressedTexture,xe=E.image[0]&&E.image[0].isDataTexture,Ee=[];for(let fe=0;fe<6;fe++)!it&&!xe?Ee[fe]=b(E.image[fe],!0,o.maxCubemapSize):Ee[fe]=xe?E.image[fe].image:E.image[fe],Ee[fe]=yt(E,Ee[fe]);const Xe=Ee[0],ke=l.convert(E.format,E.colorSpace),Le=l.convert(E.type),lt=C(E.internalFormat,ke,Le,E.colorSpace),V=E.isVideoTexture!==!0,we=ce.__version===void 0||de===!0,Se=me.dataReady;let De=B(E,Xe);$(s.TEXTURE_CUBE_MAP,E);let ye;if(it){V&&we&&t.texStorage2D(s.TEXTURE_CUBE_MAP,De,lt,Xe.width,Xe.height);for(let fe=0;fe<6;fe++){ye=Ee[fe].mipmaps;for(let ze=0;ze<ye.length;ze++){const rt=ye[ze];E.format!==gi?ke!==null?V?Se&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,0,0,rt.width,rt.height,ke,rt.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,lt,rt.width,rt.height,0,rt.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,0,0,rt.width,rt.height,ke,Le,rt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze,lt,rt.width,rt.height,0,ke,Le,rt.data)}}}else{if(ye=E.mipmaps,V&&we){ye.length>0&&De++;const fe=We(Ee[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,De,lt,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(xe){V?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ee[fe].width,Ee[fe].height,ke,Le,Ee[fe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,lt,Ee[fe].width,Ee[fe].height,0,ke,Le,Ee[fe].data);for(let ze=0;ze<ye.length;ze++){const bt=ye[ze].image[fe].image;V?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,0,0,bt.width,bt.height,ke,Le,bt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,lt,bt.width,bt.height,0,ke,Le,bt.data)}}else{V?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ke,Le,Ee[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,lt,ke,Le,Ee[fe]);for(let ze=0;ze<ye.length;ze++){const rt=ye[ze];V?Se&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,0,0,ke,Le,rt.image[fe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ze+1,lt,ke,Le,rt.image[fe])}}}x(E)&&_(s.TEXTURE_CUBE_MAP),ce.__version=me.version,E.onUpdate&&E.onUpdate(E)}D.__version=E.version}function pe(D,E,W,de,me,ce){const Be=l.convert(W.format,W.colorSpace),Te=l.convert(W.type),je=C(W.internalFormat,Be,Te,W.colorSpace),it=r.get(E),xe=r.get(W);if(xe.__renderTarget=E,!it.__hasExternalTextures){const Ee=Math.max(1,E.width>>ce),Xe=Math.max(1,E.height>>ce);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,ce,je,Ee,Xe,E.depth,0,Be,Te,null):t.texImage2D(me,ce,je,Ee,Xe,0,Be,Te,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Bt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,de,me,xe.__webglTexture,0,z(E)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,de,me,xe.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Fe(D,E,W){if(s.bindRenderbuffer(s.RENDERBUFFER,D),E.depthBuffer){const de=E.depthTexture,me=de&&de.isDepthTexture?de.type:null,ce=P(E.stencilBuffer,me),Be=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Bt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(E),ce,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(E),ce,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,ce,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Be,s.RENDERBUFFER,D)}else{const de=E.textures;for(let me=0;me<de.length;me++){const ce=de[me],Be=l.convert(ce.format,ce.colorSpace),Te=l.convert(ce.type),je=C(ce.internalFormat,Be,Te,ce.colorSpace);Bt(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,z(E),je,E.width,E.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,z(E),je,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,je,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(D,E,W){const de=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),de){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),$(s.TEXTURE_CUBE_MAP,E.depthTexture);const it=l.convert(E.depthTexture.format),xe=l.convert(E.depthTexture.type);let Ee;E.depthTexture.format===tr?Ee=s.DEPTH_COMPONENT24:E.depthTexture.format===rs&&(Ee=s.DEPTH24_STENCIL8);for(let Xe=0;Xe<6;Xe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,Ee,E.width,E.height,0,it,xe,null)}}else Q(E.depthTexture,0);const ce=me.__webglTexture,Be=z(E),Te=de?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,je=E.depthTexture.format===rs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===tr)Bt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,je,Te,ce,0,Be):s.framebufferTexture2D(s.FRAMEBUFFER,je,Te,ce,0);else if(E.depthTexture.format===rs)Bt(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,je,Te,ce,0,Be):s.framebufferTexture2D(s.FRAMEBUFFER,je,Te,ce,0);else throw new Error("Unknown depthTexture format")}function nt(D){const E=r.get(D),W=D.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==D.depthTexture){const de=D.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),de){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,de.removeEventListener("dispose",me)};de.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=de}if(D.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let de=0;de<6;de++)Ge(E.__webglFramebuffer[de],D,de);else{const de=D.texture.mipmaps;de&&de.length>0?Ge(E.__webglFramebuffer[0],D,0):Ge(E.__webglFramebuffer,D,0)}else if(W){E.__webglDepthbuffer=[];for(let de=0;de<6;de++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[de]),E.__webglDepthbuffer[de]===void 0)E.__webglDepthbuffer[de]=s.createRenderbuffer(),Fe(E.__webglDepthbuffer[de],D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer[de];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ce)}}else{const de=D.texture.mipmaps;if(de&&de.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Fe(E.__webglDepthbuffer,D,!1);else{const me=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ce)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Yt(D,E,W){const de=r.get(D);E!==void 0&&pe(de.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&nt(D)}function ht(D){const E=D.texture,W=r.get(D),de=r.get(E);D.addEventListener("dispose",N);const me=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Be=me.length>1;if(Be||(de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture()),de.__version=E.version,c.memory.textures++),ce){W.__webglFramebuffer=[];for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Te]=[];for(let je=0;je<E.mipmaps.length;je++)W.__webglFramebuffer[Te][je]=s.createFramebuffer()}else W.__webglFramebuffer[Te]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Te=0;Te<E.mipmaps.length;Te++)W.__webglFramebuffer[Te]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Be)for(let Te=0,je=me.length;Te<je;Te++){const it=r.get(me[Te]);it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture(),c.memory.textures++)}if(D.samples>0&&Bt(D)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Te=0;Te<me.length;Te++){const je=me[Te];W.__webglColorRenderbuffer[Te]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[Te]);const it=l.convert(je.format,je.colorSpace),xe=l.convert(je.type),Ee=C(je.internalFormat,it,xe,je.colorSpace,D.isXRRenderTarget===!0),Xe=z(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Xe,Ee,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Te,s.RENDERBUFFER,W.__webglColorRenderbuffer[Te])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Fe(W.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,de.__webglTexture),$(s.TEXTURE_CUBE_MAP,E);for(let Te=0;Te<6;Te++)if(E.mipmaps&&E.mipmaps.length>0)for(let je=0;je<E.mipmaps.length;je++)pe(W.__webglFramebuffer[Te][je],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je);else pe(W.__webglFramebuffer[Te],D,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0);x(E)&&_(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Te=0,je=me.length;Te<je;Te++){const it=me[Te],xe=r.get(it);let Ee=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ee,xe.__webglTexture),$(Ee,it),pe(W.__webglFramebuffer,D,it,s.COLOR_ATTACHMENT0+Te,Ee,0),x(it)&&_(Ee)}t.unbindTexture()}else{let Te=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,de.__webglTexture),$(Te,E),E.mipmaps&&E.mipmaps.length>0)for(let je=0;je<E.mipmaps.length;je++)pe(W.__webglFramebuffer[je],D,E,s.COLOR_ATTACHMENT0,Te,je);else pe(W.__webglFramebuffer,D,E,s.COLOR_ATTACHMENT0,Te,0);x(E)&&_(Te),t.unbindTexture()}D.depthBuffer&&nt(D)}function xt(D){const E=D.textures;for(let W=0,de=E.length;W<de;W++){const me=E[W];if(x(me)){const ce=R(D),Be=r.get(me).__webglTexture;t.bindTexture(ce,Be),_(ce),t.unbindTexture()}}}const Rt=[],ut=[];function Ut(D){if(D.samples>0){if(Bt(D)===!1){const E=D.textures,W=D.width,de=D.height;let me=s.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Be=r.get(D),Te=E.length>1;if(Te)for(let it=0;it<E.length;it++)t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const je=D.texture.mipmaps;je&&je.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let it=0;it<E.length;it++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),Te){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Be.__webglColorRenderbuffer[it]);const xe=r.get(E[it]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,xe,0)}s.blitFramebuffer(0,0,W,de,0,0,W,de,me,s.NEAREST),h===!0&&(Rt.length=0,ut.length=0,Rt.push(s.COLOR_ATTACHMENT0+it),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Rt.push(ce),ut.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ut)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Te)for(let it=0;it<E.length;it++){t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.RENDERBUFFER,Be.__webglColorRenderbuffer[it]);const xe=r.get(E[it]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+it,s.TEXTURE_2D,xe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&h){const E=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function z(D){return Math.min(o.maxSamples,D.samples)}function Bt(D){const E=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function gt(D){const E=c.render.frame;v.get(D)!==E&&(v.set(D,E),D.update())}function yt(D,E){const W=D.colorSpace,de=D.format,me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Qs&&W!==br&&(Et.getTransfer(W)===Lt?(de!==gi||me!==Xn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):wt("WebGLTextures: Unsupported texture color space:",W)),E}function We(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=j,this.resetTextureUnits=q,this.setTexture2D=Q,this.setTexture2DArray=te,this.setTexture3D=G,this.setTextureCube=J,this.rebindTextures=Yt,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Bt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function j1(s,e){function t(r,o=br){let l;const c=Et.getTransfer(o);if(r===Xn)return s.UNSIGNED_BYTE;if(r===Ed)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Td)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Rg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Pg)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ag)return s.BYTE;if(r===Cg)return s.SHORT;if(r===ea)return s.UNSIGNED_SHORT;if(r===Md)return s.INT;if(r===Li)return s.UNSIGNED_INT;if(r===Ai)return s.FLOAT;if(r===er)return s.HALF_FLOAT;if(r===bg)return s.ALPHA;if(r===Lg)return s.RGB;if(r===gi)return s.RGBA;if(r===tr)return s.DEPTH_COMPONENT;if(r===rs)return s.DEPTH_STENCIL;if(r===Dg)return s.RED;if(r===wd)return s.RED_INTEGER;if(r===Js)return s.RG;if(r===Ad)return s.RG_INTEGER;if(r===Cd)return s.RGBA_INTEGER;if(r===ql||r===jl||r===$l||r===Zl)if(c===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===ql)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===ql)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$l)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bf||r===kf||r===zf||r===Vf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Bf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===kf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Vf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hf||r===Gf||r===Wf||r===Xf||r===Yf||r===qf||r===jf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Hf||r===Gf)return c===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Wf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Xf)return l.COMPRESSED_R11_EAC;if(r===Yf)return l.COMPRESSED_SIGNED_R11_EAC;if(r===qf)return l.COMPRESSED_RG11_EAC;if(r===jf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===$f||r===Zf||r===Kf||r===Jf||r===Qf||r===ed||r===td||r===nd||r===id||r===rd||r===sd||r===od||r===ad||r===ld)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===$f)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Kf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Jf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qf)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ed)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===td)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===nd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===id)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===rd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===sd)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===od)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ad)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ld)return c===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ud||r===cd||r===fd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===ud)return c===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===cd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===fd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===dd||r===hd||r===pd||r===md)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===dd)return l.COMPRESSED_RED_RGTC1_EXT;if(r===hd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===pd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===md)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ta?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const $1=`
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

}`;class K1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Hg(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Ni({vertexShader:$1,fragmentShader:Z1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ln(new iu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J1 extends no{constructor(e,t){super();const r=this;let o=null,l=1,c=null,f="local-floor",h=1,p=null,v=null,y=null,g=null,S=null,M=null;const b=typeof XRWebGLBinding<"u",x=new K1,_={},R=t.getContextAttributes();let C=null,P=null;const B=[],F=[],N=new Je;let T=null;const L=new ii;L.viewport=new Xt;const Z=new ii;Z.viewport=new Xt;const U=[L,Z],q=new cy;let j=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(re){let he=B[re];return he===void 0&&(he=new Jc,B[re]=he),he.getTargetRaySpace()},this.getControllerGrip=function(re){let he=B[re];return he===void 0&&(he=new Jc,B[re]=he),he.getGripSpace()},this.getHand=function(re){let he=B[re];return he===void 0&&(he=new Jc,B[re]=he),he.getHandSpace()};function Q(re){const he=F.indexOf(re.inputSource);if(he===-1)return;const pe=B[he];pe!==void 0&&(pe.update(re.inputSource,re.frame,p||c),pe.dispatchEvent({type:re.type,data:re.inputSource}))}function te(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",te),o.removeEventListener("inputsourceschange",G);for(let re=0;re<B.length;re++){const he=F[re];he!==null&&(F[re]=null,B[re].disconnect(he))}j=null,se=null,x.reset();for(const re in _)delete _[re];e.setRenderTarget(C),S=null,g=null,y=null,o=null,P=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(N.width,N.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(re){l=re,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(re){f=re,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||c},this.setReferenceSpace=function(re){p=re},this.getBaseLayer=function(){return g!==null?g:S},this.getBinding=function(){return y===null&&b&&(y=new XRWebGLBinding(o,t)),y},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(re){if(o=re,o!==null){if(C=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",te),o.addEventListener("inputsourceschange",G),R.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(N),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Fe=null,Ge=null;R.depth&&(Ge=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,pe=R.stencil?rs:tr,Fe=R.stencil?ta:Li);const nt={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:l};y=this.getBinding(),g=y.createProjectionLayer(nt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Pi(g.textureWidth,g.textureHeight,{format:gi,type:Xn,depthTexture:new ra(g.textureWidth,g.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const pe={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,pe),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),P=new Pi(S.framebufferWidth,S.framebufferHeight,{format:gi,type:Xn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(h),p=null,c=await o.requestReferenceSpace(f),He.setContext(o),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function G(re){for(let he=0;he<re.removed.length;he++){const pe=re.removed[he],Fe=F.indexOf(pe);Fe>=0&&(F[Fe]=null,B[Fe].disconnect(pe))}for(let he=0;he<re.added.length;he++){const pe=re.added[he];let Fe=F.indexOf(pe);if(Fe===-1){for(let nt=0;nt<B.length;nt++)if(nt>=F.length){F.push(pe),Fe=nt;break}else if(F[nt]===null){F[nt]=pe,Fe=nt;break}if(Fe===-1)break}const Ge=B[Fe];Ge&&Ge.connect(pe)}}const J=new Y,oe=new Y;function ue(re,he,pe){J.setFromMatrixPosition(he.matrixWorld),oe.setFromMatrixPosition(pe.matrixWorld);const Fe=J.distanceTo(oe),Ge=he.projectionMatrix.elements,nt=pe.projectionMatrix.elements,Yt=Ge[14]/(Ge[10]-1),ht=Ge[14]/(Ge[10]+1),xt=(Ge[9]+1)/Ge[5],Rt=(Ge[9]-1)/Ge[5],ut=(Ge[8]-1)/Ge[0],Ut=(nt[8]+1)/nt[0],z=Yt*ut,Bt=Yt*Ut,gt=Fe/(-ut+Ut),yt=gt*-ut;if(he.matrixWorld.decompose(re.position,re.quaternion,re.scale),re.translateX(yt),re.translateZ(gt),re.matrixWorld.compose(re.position,re.quaternion,re.scale),re.matrixWorldInverse.copy(re.matrixWorld).invert(),Ge[10]===-1)re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const We=Yt+gt,D=ht+gt,E=z-yt,W=Bt+(Fe-yt),de=xt*ht/D*We,me=Rt*ht/D*We;re.projectionMatrix.makePerspective(E,W,de,me,We,D),re.projectionMatrixInverse.copy(re.projectionMatrix).invert()}}function O(re,he){he===null?re.matrixWorld.copy(re.matrix):re.matrixWorld.multiplyMatrices(he.matrixWorld,re.matrix),re.matrixWorldInverse.copy(re.matrixWorld).invert()}this.updateCamera=function(re){if(o===null)return;let he=re.near,pe=re.far;x.texture!==null&&(x.depthNear>0&&(he=x.depthNear),x.depthFar>0&&(pe=x.depthFar)),q.near=Z.near=L.near=he,q.far=Z.far=L.far=pe,(j!==q.near||se!==q.far)&&(o.updateRenderState({depthNear:q.near,depthFar:q.far}),j=q.near,se=q.far),q.layers.mask=re.layers.mask|6,L.layers.mask=q.layers.mask&-5,Z.layers.mask=q.layers.mask&-3;const Fe=re.parent,Ge=q.cameras;O(q,Fe);for(let nt=0;nt<Ge.length;nt++)O(Ge[nt],Fe);Ge.length===2?ue(q,L,Z):q.projectionMatrix.copy(L.projectionMatrix),$(re,q,Fe)};function $(re,he,pe){pe===null?re.matrix.copy(he.matrixWorld):(re.matrix.copy(pe.matrixWorld),re.matrix.invert(),re.matrix.multiply(he.matrixWorld)),re.matrix.decompose(re.position,re.quaternion,re.scale),re.updateMatrixWorld(!0),re.projectionMatrix.copy(he.projectionMatrix),re.projectionMatrixInverse.copy(he.projectionMatrixInverse),re.isPerspectiveCamera&&(re.fov=ia*2*Math.atan(1/re.projectionMatrix.elements[5]),re.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(g===null&&S===null))return h},this.setFoveation=function(re){h=re,g!==null&&(g.fixedFoveation=re),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=re)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(q)},this.getCameraTexture=function(re){return _[re]};let Ae=null;function Re(re,he){if(v=he.getViewerPose(p||c),M=he,v!==null){const pe=v.views;S!==null&&(e.setRenderTargetFramebuffer(P,S.framebuffer),e.setRenderTarget(P));let Fe=!1;pe.length!==q.cameras.length&&(q.cameras.length=0,Fe=!0);for(let ht=0;ht<pe.length;ht++){const xt=pe[ht];let Rt=null;if(S!==null)Rt=S.getViewport(xt);else{const Ut=y.getViewSubImage(g,xt);Rt=Ut.viewport,ht===0&&(e.setRenderTargetTextures(P,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(P))}let ut=U[ht];ut===void 0&&(ut=new ii,ut.layers.enable(ht),ut.viewport=new Xt,U[ht]=ut),ut.matrix.fromArray(xt.transform.matrix),ut.matrix.decompose(ut.position,ut.quaternion,ut.scale),ut.projectionMatrix.fromArray(xt.projectionMatrix),ut.projectionMatrixInverse.copy(ut.projectionMatrix).invert(),ut.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),ht===0&&(q.matrix.copy(ut.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),Fe===!0&&q.cameras.push(ut)}const Ge=o.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&b){y=r.getBinding();const ht=y.getDepthInformation(pe[0]);ht&&ht.isValid&&ht.texture&&x.init(ht,o.renderState)}if(Ge&&Ge.includes("camera-access")&&b){e.state.unbindTexture(),y=r.getBinding();for(let ht=0;ht<pe.length;ht++){const xt=pe[ht].camera;if(xt){let Rt=_[xt];Rt||(Rt=new Hg,_[xt]=Rt);const ut=y.getCameraImage(xt);Rt.sourceTexture=ut}}}}for(let pe=0;pe<B.length;pe++){const Fe=F[pe],Ge=B[pe];Fe!==null&&Ge!==void 0&&Ge.update(Fe,he,p||c)}Ae&&Ae(re,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),M=null}const He=new t0;He.setAnimationLoop(Re),this.setAnimationLoop=function(re){Ae=re},this.dispose=function(){}}}const Qr=new Di,Q1=new Gt;function eT(s,e){function t(x,_){x.matrixAutoUpdate===!0&&x.updateMatrix(),_.value.copy(x.matrix)}function r(x,_){_.color.getRGB(x.fogColor.value,Jg(s)),_.isFog?(x.fogNear.value=_.near,x.fogFar.value=_.far):_.isFogExp2&&(x.fogDensity.value=_.density)}function o(x,_,R,C,P){_.isMeshBasicMaterial?l(x,_):_.isMeshLambertMaterial?(l(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(l(x,_),y(x,_)):_.isMeshPhongMaterial?(l(x,_),v(x,_),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(l(x,_),g(x,_),_.isMeshPhysicalMaterial&&S(x,_,P)):_.isMeshMatcapMaterial?(l(x,_),M(x,_)):_.isMeshDepthMaterial?l(x,_):_.isMeshDistanceMaterial?(l(x,_),b(x,_)):_.isMeshNormalMaterial?l(x,_):_.isLineBasicMaterial?(c(x,_),_.isLineDashedMaterial&&f(x,_)):_.isPointsMaterial?h(x,_,R,C):_.isSpriteMaterial?p(x,_):_.isShadowMaterial?(x.color.value.copy(_.color),x.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function l(x,_){x.opacity.value=_.opacity,_.color&&x.diffuse.value.copy(_.color),_.emissive&&x.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.bumpMap&&(x.bumpMap.value=_.bumpMap,t(_.bumpMap,x.bumpMapTransform),x.bumpScale.value=_.bumpScale,_.side===On&&(x.bumpScale.value*=-1)),_.normalMap&&(x.normalMap.value=_.normalMap,t(_.normalMap,x.normalMapTransform),x.normalScale.value.copy(_.normalScale),_.side===On&&x.normalScale.value.negate()),_.displacementMap&&(x.displacementMap.value=_.displacementMap,t(_.displacementMap,x.displacementMapTransform),x.displacementScale.value=_.displacementScale,x.displacementBias.value=_.displacementBias),_.emissiveMap&&(x.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,x.emissiveMapTransform)),_.specularMap&&(x.specularMap.value=_.specularMap,t(_.specularMap,x.specularMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest);const R=e.get(_),C=R.envMap,P=R.envMapRotation;C&&(x.envMap.value=C,Qr.copy(P),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),x.envMapRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(Qr)),x.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=_.reflectivity,x.ior.value=_.ior,x.refractionRatio.value=_.refractionRatio),_.lightMap&&(x.lightMap.value=_.lightMap,x.lightMapIntensity.value=_.lightMapIntensity,t(_.lightMap,x.lightMapTransform)),_.aoMap&&(x.aoMap.value=_.aoMap,x.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,x.aoMapTransform))}function c(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform))}function f(x,_){x.dashSize.value=_.dashSize,x.totalSize.value=_.dashSize+_.gapSize,x.scale.value=_.scale}function h(x,_,R,C){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.size.value=_.size*R,x.scale.value=C*.5,_.map&&(x.map.value=_.map,t(_.map,x.uvTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function p(x,_){x.diffuse.value.copy(_.color),x.opacity.value=_.opacity,x.rotation.value=_.rotation,_.map&&(x.map.value=_.map,t(_.map,x.mapTransform)),_.alphaMap&&(x.alphaMap.value=_.alphaMap,t(_.alphaMap,x.alphaMapTransform)),_.alphaTest>0&&(x.alphaTest.value=_.alphaTest)}function v(x,_){x.specular.value.copy(_.specular),x.shininess.value=Math.max(_.shininess,1e-4)}function y(x,_){_.gradientMap&&(x.gradientMap.value=_.gradientMap)}function g(x,_){x.metalness.value=_.metalness,_.metalnessMap&&(x.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,x.metalnessMapTransform)),x.roughness.value=_.roughness,_.roughnessMap&&(x.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,x.roughnessMapTransform)),_.envMap&&(x.envMapIntensity.value=_.envMapIntensity)}function S(x,_,R){x.ior.value=_.ior,_.sheen>0&&(x.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),x.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(x.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,x.sheenColorMapTransform)),_.sheenRoughnessMap&&(x.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,x.sheenRoughnessMapTransform))),_.clearcoat>0&&(x.clearcoat.value=_.clearcoat,x.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(x.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,x.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(x.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===On&&x.clearcoatNormalScale.value.negate())),_.dispersion>0&&(x.dispersion.value=_.dispersion),_.iridescence>0&&(x.iridescence.value=_.iridescence,x.iridescenceIOR.value=_.iridescenceIOR,x.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(x.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,x.iridescenceMapTransform)),_.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),_.transmission>0&&(x.transmission.value=_.transmission,x.transmissionSamplerMap.value=R.texture,x.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(x.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,x.transmissionMapTransform)),x.thickness.value=_.thickness,_.thicknessMap&&(x.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=_.attenuationDistance,x.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(x.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(x.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=_.specularIntensity,x.specularColor.value.copy(_.specularColor),_.specularColorMap&&(x.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,x.specularColorMapTransform)),_.specularIntensityMap&&(x.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,x.specularIntensityMapTransform))}function M(x,_){_.matcap&&(x.matcap.value=_.matcap)}function b(x,_){const R=e.get(_).light;x.referencePosition.value.setFromMatrixPosition(R.matrixWorld),x.nearDistance.value=R.shadow.camera.near,x.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function tT(s,e,t,r){let o={},l={},c=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,C){const P=C.program;r.uniformBlockBinding(R,P)}function p(R,C){let P=o[R.id];P===void 0&&(M(R),P=v(R),o[R.id]=P,R.addEventListener("dispose",x));const B=C.program;r.updateUBOMapping(R,B);const F=e.render.frame;l[R.id]!==F&&(g(R),l[R.id]=F)}function v(R){const C=y();R.__bindingPointIndex=C;const P=s.createBuffer(),B=R.__size,F=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,B,F),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,C,P),P}function y(){for(let R=0;R<f;R++)if(c.indexOf(R)===-1)return c.push(R),R;return wt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const C=o[R.id],P=R.uniforms,B=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,C);for(let F=0,N=P.length;F<N;F++){const T=Array.isArray(P[F])?P[F]:[P[F]];for(let L=0,Z=T.length;L<Z;L++){const U=T[L];if(S(U,F,L,B)===!0){const q=U.__offset,j=Array.isArray(U.value)?U.value:[U.value];let se=0;for(let Q=0;Q<j.length;Q++){const te=j[Q],G=b(te);typeof te=="number"||typeof te=="boolean"?(U.__data[0]=te,s.bufferSubData(s.UNIFORM_BUFFER,q+se,U.__data)):te.isMatrix3?(U.__data[0]=te.elements[0],U.__data[1]=te.elements[1],U.__data[2]=te.elements[2],U.__data[3]=0,U.__data[4]=te.elements[3],U.__data[5]=te.elements[4],U.__data[6]=te.elements[5],U.__data[7]=0,U.__data[8]=te.elements[6],U.__data[9]=te.elements[7],U.__data[10]=te.elements[8],U.__data[11]=0):(te.toArray(U.__data,se),se+=G.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,q,U.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(R,C,P,B){const F=R.value,N=C+"_"+P;if(B[N]===void 0)return typeof F=="number"||typeof F=="boolean"?B[N]=F:B[N]=F.clone(),!0;{const T=B[N];if(typeof F=="number"||typeof F=="boolean"){if(T!==F)return B[N]=F,!0}else if(T.equals(F)===!1)return T.copy(F),!0}return!1}function M(R){const C=R.uniforms;let P=0;const B=16;for(let N=0,T=C.length;N<T;N++){const L=Array.isArray(C[N])?C[N]:[C[N]];for(let Z=0,U=L.length;Z<U;Z++){const q=L[Z],j=Array.isArray(q.value)?q.value:[q.value];for(let se=0,Q=j.length;se<Q;se++){const te=j[se],G=b(te),J=P%B,oe=J%G.boundary,ue=J+oe;P+=oe,ue!==0&&B-ue<G.storage&&(P+=B-ue),q.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=P,P+=G.storage}}}const F=P%B;return F>0&&(P+=B-F),R.__size=P,R.__cache={},this}function b(R){const C={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(C.boundary=4,C.storage=4):R.isVector2?(C.boundary=8,C.storage=8):R.isVector3||R.isColor?(C.boundary=16,C.storage=12):R.isVector4?(C.boundary=16,C.storage=16):R.isMatrix3?(C.boundary=48,C.storage=48):R.isMatrix4?(C.boundary=64,C.storage=64):R.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",R),C}function x(R){const C=R.target;C.removeEventListener("dispose",x);const P=c.indexOf(C.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(o[C.id]),delete o[C.id],delete l[C.id]}function _(){for(const R in o)s.deleteBuffer(o[R]);c=[],o={},l={}}return{bind:h,update:p,dispose:_}}const nT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ei=null;function iT(){return Ei===null&&(Ei=new gx(nT,16,16,Js,er),Ei.name="DFG_LUT",Ei.minFilter=yn,Ei.magFilter=yn,Ei.wrapS=Ki,Ei.wrapT=Ki,Ei.generateMipmaps=!1,Ei.needsUpdate=!0),Ei}class rT{constructor(e={}){const{canvas:t=b_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:y=!1,reversedDepthBuffer:g=!1,outputBufferType:S=Xn}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const b=S,x=new Set([Cd,Ad,wd]),_=new Set([Xn,Li,ea,ta,Ed,Td]),R=new Uint32Array(4),C=new Int32Array(4);let P=null,B=null;const F=[],N=[];let T=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let Z=!1;this._outputColorSpace=ni;let U=0,q=0,j=null,se=-1,Q=null;const te=new Xt,G=new Xt;let J=null;const oe=new Ct(0);let ue=0,O=t.width,$=t.height,Ae=1,Re=null,He=null;const re=new Xt(0,0,O,$),he=new Xt(0,0,O,$);let pe=!1;const Fe=new Nd;let Ge=!1,nt=!1;const Yt=new Gt,ht=new Y,xt=new Xt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Ut(){return j===null?Ae:1}let z=r;function Bt(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:y};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sd}`),t.addEventListener("webglcontextlost",ze,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",bt,!1),z===null){const X="webgl2";if(z=Bt(X,A),z===null)throw Bt(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw wt("WebGLRenderer: "+A.message),A}let gt,yt,We,D,E,W,de,me,ce,Be,Te,je,it,xe,Ee,Xe,ke,Le,lt,V,we,Se,De;function ye(){gt=new rE(z),gt.init(),we=new j1(z,gt),yt=new ZM(z,gt,e,we),We=new Y1(z,gt),yt.reversedDepthBuffer&&g&&We.buffers.depth.setReversed(!0),D=new aE(z),E=new D1,W=new q1(z,gt,We,E,yt,we,D),de=new iE(L),me=new dy(z),Se=new jM(z,me),ce=new sE(z,me,D,Se),Be=new uE(z,ce,me,Se,D),Le=new lE(z,yt,W),Ee=new KM(E),Te=new L1(L,de,gt,yt,Se,Ee),je=new eT(L,E),it=new I1,xe=new z1(gt),ke=new qM(L,de,We,Be,M,h),Xe=new X1(L,Be,yt),De=new tT(z,D,yt,We),lt=new $M(z,gt,D),V=new oE(z,gt,D),D.programs=Te.programs,L.capabilities=yt,L.extensions=gt,L.properties=E,L.renderLists=it,L.shadowMap=Xe,L.state=We,L.info=D}ye(),b!==Xn&&(T=new fE(b,t.width,t.height,o,l));const fe=new J1(L,z);this.xr=fe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(A){A!==void 0&&(Ae=A,this.setSize(O,$,!1))},this.getSize=function(A){return A.set(O,$)},this.setSize=function(A,X,le=!0){if(fe.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}O=A,$=X,t.width=Math.floor(A*Ae),t.height=Math.floor(X*Ae),le===!0&&(t.style.width=A+"px",t.style.height=X+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(O*Ae,$*Ae).floor()},this.setDrawingBufferSize=function(A,X,le){O=A,$=X,Ae=le,t.width=Math.floor(A*le),t.height=Math.floor(X*le),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(b===Xn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(te)},this.getViewport=function(A){return A.copy(re)},this.setViewport=function(A,X,le,ie){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,X,le,ie),We.viewport(te.copy(re).multiplyScalar(Ae).round())},this.getScissor=function(A){return A.copy(he)},this.setScissor=function(A,X,le,ie){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,X,le,ie),We.scissor(G.copy(he).multiplyScalar(Ae).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(A){We.setScissorTest(pe=A)},this.setOpaqueSort=function(A){Re=A},this.setTransparentSort=function(A){He=A},this.getClearColor=function(A){return A.copy(ke.getClearColor())},this.setClearColor=function(){ke.setClearColor(...arguments)},this.getClearAlpha=function(){return ke.getClearAlpha()},this.setClearAlpha=function(){ke.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,le=!0){let ie=0;if(A){let ee=!1;if(j!==null){const Pe=j.texture.format;ee=x.has(Pe)}if(ee){const Pe=j.texture.type,Ue=_.has(Pe),Ce=ke.getClearColor(),Ne=ke.getClearAlpha(),Ze=Ce.r,Qe=Ce.g,ct=Ce.b;Ue?(R[0]=Ze,R[1]=Qe,R[2]=ct,R[3]=Ne,z.clearBufferuiv(z.COLOR,0,R)):(C[0]=Ze,C[1]=Qe,C[2]=ct,C[3]=Ne,z.clearBufferiv(z.COLOR,0,C))}else ie|=z.COLOR_BUFFER_BIT}X&&(ie|=z.DEPTH_BUFFER_BIT),le&&(ie|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ie!==0&&z.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ze,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",bt,!1),ke.dispose(),it.dispose(),xe.dispose(),E.dispose(),de.dispose(),Be.dispose(),Se.dispose(),De.dispose(),Te.dispose(),fe.dispose(),fe.removeEventListener("sessionstart",nr),fe.removeEventListener("sessionend",Nr),qn.stop()};function ze(A){A.preventDefault(),ym("WebGLRenderer: Context Lost."),Z=!0}function rt(){ym("WebGLRenderer: Context Restored."),Z=!1;const A=D.autoReset,X=Xe.enabled,le=Xe.autoUpdate,ie=Xe.needsUpdate,ee=Xe.type;ye(),D.autoReset=A,Xe.enabled=X,Xe.autoUpdate=le,Xe.needsUpdate=ie,Xe.type=ee}function bt(A){wt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function St(A){const X=A.target;X.removeEventListener("dispose",St),Yn(X)}function Yn(A){Mn(A),E.remove(A)}function Mn(A){const X=E.get(A).programs;X!==void 0&&(X.forEach(function(le){Te.releaseProgram(le)}),A.isShaderMaterial&&Te.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,le,ie,ee,Pe){X===null&&(X=Rt);const Ue=ee.isMesh&&ee.matrixWorld.determinant()<0,Ce=pa(A,X,le,ie,ee);We.setMaterial(ie,Ue);let Ne=le.index,Ze=1;if(ie.wireframe===!0){if(Ne=ce.getWireframeAttribute(le),Ne===void 0)return;Ze=2}const Qe=le.drawRange,ct=le.attributes.position;let Ke=Qe.start*Ze,Pt=(Qe.start+Qe.count)*Ze;Pe!==null&&(Ke=Math.max(Ke,Pe.start*Ze),Pt=Math.min(Pt,(Pe.start+Pe.count)*Ze)),Ne!==null?(Ke=Math.max(Ke,0),Pt=Math.min(Pt,Ne.count)):ct!=null&&(Ke=Math.max(Ke,0),Pt=Math.min(Pt,ct.count));const Nt=Pt-Ke;if(Nt<0||Nt===1/0)return;Se.setup(ee,ie,Ce,le,Ne);let Dt,_t=lt;if(Ne!==null&&(Dt=me.get(Ne),_t=V,_t.setIndex(Dt)),ee.isMesh)ie.wireframe===!0?(We.setLineWidth(ie.wireframeLinewidth*Ut()),_t.setMode(z.LINES)):_t.setMode(z.TRIANGLES);else if(ee.isLine){let qt=ie.linewidth;qt===void 0&&(qt=1),We.setLineWidth(qt*Ut()),ee.isLineSegments?_t.setMode(z.LINES):ee.isLineLoop?_t.setMode(z.LINE_LOOP):_t.setMode(z.LINE_STRIP)}else ee.isPoints?_t.setMode(z.POINTS):ee.isSprite&&_t.setMode(z.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)tu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),_t.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))_t.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const qt=ee._multiDrawStarts,qe=ee._multiDrawCounts,En=ee._multiDrawCount,vt=Ne?me.get(Ne).bytesPerElement:1,Pn=E.get(ie).currentProgram.getUniforms();for(let bn=0;bn<En;bn++)Pn.setValue(z,"_gl_DrawID",bn),_t.render(qt[bn]/vt,qe[bn])}else if(ee.isInstancedMesh)_t.renderInstances(Ke,Nt,ee.count);else if(le.isInstancedBufferGeometry){const qt=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,qe=Math.min(le.instanceCount,qt);_t.renderInstances(Ke,Nt,qe)}else _t.render(Ke,Nt)};function ls(A,X,le){A.transparent===!0&&A.side===wi&&A.forceSinglePass===!1?(A.side=On,A.needsUpdate=!0,Ur(A,X,le),A.side=Dr,A.needsUpdate=!0,Ur(A,X,le),A.side=wi):Ur(A,X,le)}this.compile=function(A,X,le=null){le===null&&(le=A),B=xe.get(le),B.init(X),N.push(B),le.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(B.pushLight(ee),ee.castShadow&&B.pushShadow(ee))}),A!==le&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(X.layers)&&(B.pushLight(ee),ee.castShadow&&B.pushShadow(ee))}),B.setupLights();const ie=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Pe=ee.material;if(Pe)if(Array.isArray(Pe))for(let Ue=0;Ue<Pe.length;Ue++){const Ce=Pe[Ue];ls(Ce,le,ee),ie.add(Ce)}else ls(Pe,le,ee),ie.add(Pe)}),B=N.pop(),ie},this.compileAsync=function(A,X,le=null){const ie=this.compile(A,X,le);return new Promise(ee=>{function Pe(){if(ie.forEach(function(Ue){E.get(Ue).currentProgram.isReady()&&ie.delete(Ue)}),ie.size===0){ee(A);return}setTimeout(Pe,10)}gt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let Ui=null;function ou(A){Ui&&Ui(A)}function nr(){qn.stop()}function Nr(){qn.start()}const qn=new t0;qn.setAnimationLoop(ou),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(A){Ui=A,fe.setAnimationLoop(A),A===null?qn.stop():qn.start()},fe.addEventListener("sessionstart",nr),fe.addEventListener("sessionend",Nr),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){wt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Z===!0)return;const le=fe.enabled===!0&&fe.isPresenting===!0,ie=T!==null&&(j===null||le)&&T.begin(L,j);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),fe.enabled===!0&&fe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(fe.cameraAutoUpdate===!0&&fe.updateCamera(X),X=fe.getCamera()),A.isScene===!0&&A.onBeforeRender(L,A,X,j),B=xe.get(A,N.length),B.init(X),N.push(B),Yt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Fe.setFromProjectionMatrix(Yt,Ci,X.reversedDepth),nt=this.localClippingEnabled,Ge=Ee.init(this.clippingPlanes,nt),P=it.get(A,F.length),P.init(),F.push(P),fe.enabled===!0&&fe.isPresenting===!0){const Ue=L.xr.getDepthSensingMesh();Ue!==null&&Ir(Ue,X,-1/0,L.sortObjects)}Ir(A,X,0,L.sortObjects),P.finish(),L.sortObjects===!0&&P.sort(Re,He),ut=fe.enabled===!1||fe.isPresenting===!1||fe.hasDepthSensing()===!1,ut&&ke.addToRenderList(P,A),this.info.render.frame++,Ge===!0&&Ee.beginShadows();const ee=B.state.shadowsArray;if(Xe.render(ee,A,X),Ge===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ie&&T.hasRenderPass())===!1){const Ue=P.opaque,Ce=P.transmissive;if(B.setupLights(),X.isArrayCamera){const Ne=X.cameras;if(Ce.length>0)for(let Ze=0,Qe=Ne.length;Ze<Qe;Ze++){const ct=Ne[Ze];da(Ue,Ce,A,ct)}ut&&ke.render(A);for(let Ze=0,Qe=Ne.length;Ze<Qe;Ze++){const ct=Ne[Ze];fa(P,A,ct,ct.viewport)}}else Ce.length>0&&da(Ue,Ce,A,X),ut&&ke.render(A),fa(P,A,X)}j!==null&&q===0&&(W.updateMultisampleRenderTarget(j),W.updateRenderTargetMipmap(j)),ie&&T.end(L),A.isScene===!0&&A.onAfterRender(L,A,X),Se.resetDefaultState(),se=-1,Q=null,N.pop(),N.length>0?(B=N[N.length-1],Ge===!0&&Ee.setGlobalState(L.clippingPlanes,B.state.camera)):B=null,F.pop(),F.length>0?P=F[F.length-1]:P=null};function Ir(A,X,le,ie){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)le=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)B.pushLight(A),A.castShadow&&B.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Fe.intersectsSprite(A)){ie&&xt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Yt);const Ue=Be.update(A),Ce=A.material;Ce.visible&&P.push(A,Ue,Ce,le,xt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Fe.intersectsObject(A))){const Ue=Be.update(A),Ce=A.material;if(ie&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),xt.copy(A.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),xt.copy(Ue.boundingSphere.center)),xt.applyMatrix4(A.matrixWorld).applyMatrix4(Yt)),Array.isArray(Ce)){const Ne=Ue.groups;for(let Ze=0,Qe=Ne.length;Ze<Qe;Ze++){const ct=Ne[Ze],Ke=Ce[ct.materialIndex];Ke&&Ke.visible&&P.push(A,Ue,Ke,le,xt.z,ct)}}else Ce.visible&&P.push(A,Ue,Ce,le,xt.z,null)}}const Pe=A.children;for(let Ue=0,Ce=Pe.length;Ue<Ce;Ue++)Ir(Pe[Ue],X,le,ie)}function fa(A,X,le,ie){const{opaque:ee,transmissive:Pe,transparent:Ue}=A;B.setupLightsView(le),Ge===!0&&Ee.setGlobalState(L.clippingPlanes,le),ie&&We.viewport(te.copy(ie)),ee.length>0&&us(ee,X,le),Pe.length>0&&us(Pe,X,le),Ue.length>0&&us(Ue,X,le),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function da(A,X,le,ie){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(B.state.transmissionRenderTarget[ie.id]===void 0){const Ke=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");B.state.transmissionRenderTarget[ie.id]=new Pi(1,1,{generateMipmaps:!0,type:Ke?er:Xn,minFilter:is,samples:yt.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Et.workingColorSpace})}const Pe=B.state.transmissionRenderTarget[ie.id],Ue=ie.viewport||te;Pe.setSize(Ue.z*L.transmissionResolutionScale,Ue.w*L.transmissionResolutionScale);const Ce=L.getRenderTarget(),Ne=L.getActiveCubeFace(),Ze=L.getActiveMipmapLevel();L.setRenderTarget(Pe),L.getClearColor(oe),ue=L.getClearAlpha(),ue<1&&L.setClearColor(16777215,.5),L.clear(),ut&&ke.render(le);const Qe=L.toneMapping;L.toneMapping=Ri;const ct=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),B.setupLightsView(ie),Ge===!0&&Ee.setGlobalState(L.clippingPlanes,ie),us(A,le,ie),W.updateMultisampleRenderTarget(Pe),W.updateRenderTargetMipmap(Pe),gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let Pt=0,Nt=X.length;Pt<Nt;Pt++){const Dt=X[Pt],{object:_t,geometry:qt,material:qe,group:En}=Dt;if(qe.side===wi&&_t.layers.test(ie.layers)){const vt=qe.side;qe.side=On,qe.needsUpdate=!0,vi(_t,le,ie,qt,qe,En),qe.side=vt,qe.needsUpdate=!0,Ke=!0}}Ke===!0&&(W.updateMultisampleRenderTarget(Pe),W.updateRenderTargetMipmap(Pe))}L.setRenderTarget(Ce,Ne,Ze),L.setClearColor(oe,ue),ct!==void 0&&(ie.viewport=ct),L.toneMapping=Qe}function us(A,X,le){const ie=X.isScene===!0?X.overrideMaterial:null;for(let ee=0,Pe=A.length;ee<Pe;ee++){const Ue=A[ee],{object:Ce,geometry:Ne,group:Ze}=Ue;let Qe=Ue.material;Qe.allowOverride===!0&&ie!==null&&(Qe=ie),Ce.layers.test(le.layers)&&vi(Ce,X,le,Ne,Qe,Ze)}}function vi(A,X,le,ie,ee,Pe){A.onBeforeRender(L,X,le,ie,ee,Pe),A.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(L,X,le,ie,A,Pe),ee.transparent===!0&&ee.side===wi&&ee.forceSinglePass===!1?(ee.side=On,ee.needsUpdate=!0,L.renderBufferDirect(le,X,ie,ee,A,Pe),ee.side=Dr,ee.needsUpdate=!0,L.renderBufferDirect(le,X,ie,ee,A,Pe),ee.side=wi):L.renderBufferDirect(le,X,ie,ee,A,Pe),A.onAfterRender(L,X,le,ie,ee,Pe)}function Ur(A,X,le){X.isScene!==!0&&(X=Rt);const ie=E.get(A),ee=B.state.lights,Pe=B.state.shadowsArray,Ue=ee.state.version,Ce=Te.getParameters(A,ee.state,Pe,X,le),Ne=Te.getProgramCacheKey(Ce);let Ze=ie.programs;ie.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,ie.fog=X.fog;const Qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ie.envMap=de.get(A.envMap||ie.environment,Qe),ie.envMapRotation=ie.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",St),Ze=new Map,ie.programs=Ze);let ct=Ze.get(Ne);if(ct!==void 0){if(ie.currentProgram===ct&&ie.lightsStateVersion===Ue)return ha(A,Ce),ct}else Ce.uniforms=Te.getUniforms(A),A.onBeforeCompile(Ce,L),ct=Te.acquireProgram(Ce,Ne),Ze.set(Ne,ct),ie.uniforms=Ce.uniforms;const Ke=ie.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=Ee.uniform),ha(A,Ce),ie.needsLights=ga(A),ie.lightsStateVersion=Ue,ie.needsLights&&(Ke.ambientLightColor.value=ee.state.ambient,Ke.lightProbe.value=ee.state.probe,Ke.directionalLights.value=ee.state.directional,Ke.directionalLightShadows.value=ee.state.directionalShadow,Ke.spotLights.value=ee.state.spot,Ke.spotLightShadows.value=ee.state.spotShadow,Ke.rectAreaLights.value=ee.state.rectArea,Ke.ltc_1.value=ee.state.rectAreaLTC1,Ke.ltc_2.value=ee.state.rectAreaLTC2,Ke.pointLights.value=ee.state.point,Ke.pointLightShadows.value=ee.state.pointShadow,Ke.hemisphereLights.value=ee.state.hemi,Ke.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ke.spotLightMatrix.value=ee.state.spotLightMatrix,Ke.spotLightMap.value=ee.state.spotLightMap,Ke.pointShadowMatrix.value=ee.state.pointShadowMatrix),ie.currentProgram=ct,ie.uniformsList=null,ct}function so(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Kl.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function ha(A,X){const le=E.get(A);le.outputColorSpace=X.outputColorSpace,le.batching=X.batching,le.batchingColor=X.batchingColor,le.instancing=X.instancing,le.instancingColor=X.instancingColor,le.instancingMorph=X.instancingMorph,le.skinning=X.skinning,le.morphTargets=X.morphTargets,le.morphNormals=X.morphNormals,le.morphColors=X.morphColors,le.morphTargetsCount=X.morphTargetsCount,le.numClippingPlanes=X.numClippingPlanes,le.numIntersection=X.numClipIntersection,le.vertexAlphas=X.vertexAlphas,le.vertexTangents=X.vertexTangents,le.toneMapping=X.toneMapping}function pa(A,X,le,ie,ee){X.isScene!==!0&&(X=Rt),W.resetTextureUnits();const Pe=X.fog,Ue=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial?X.environment:null,Ce=j===null?L.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Qs,Ne=ie.isMeshStandardMaterial||ie.isMeshLambertMaterial&&!ie.envMap||ie.isMeshPhongMaterial&&!ie.envMap,Ze=de.get(ie.envMap||Ue,Ne),Qe=ie.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,ct=!!le.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),Ke=!!le.morphAttributes.position,Pt=!!le.morphAttributes.normal,Nt=!!le.morphAttributes.color;let Dt=Ri;ie.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Dt=L.toneMapping);const _t=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,qt=_t!==void 0?_t.length:0,qe=E.get(ie),En=B.state.lights;if(Ge===!0&&(nt===!0||A!==Q)){const jt=A===Q&&ie.id===se;Ee.setState(ie,A,jt)}let vt=!1;ie.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==En.state.version||qe.outputColorSpace!==Ce||ee.isBatchedMesh&&qe.batching===!1||!ee.isBatchedMesh&&qe.batching===!0||ee.isBatchedMesh&&qe.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&qe.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&qe.instancing===!1||!ee.isInstancedMesh&&qe.instancing===!0||ee.isSkinnedMesh&&qe.skinning===!1||!ee.isSkinnedMesh&&qe.skinning===!0||ee.isInstancedMesh&&qe.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&qe.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&qe.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&qe.instancingMorph===!1&&ee.morphTexture!==null||qe.envMap!==Ze||ie.fog===!0&&qe.fog!==Pe||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Ee.numPlanes||qe.numIntersection!==Ee.numIntersection)||qe.vertexAlphas!==Qe||qe.vertexTangents!==ct||qe.morphTargets!==Ke||qe.morphNormals!==Pt||qe.morphColors!==Nt||qe.toneMapping!==Dt||qe.morphTargetsCount!==qt)&&(vt=!0):(vt=!0,qe.__version=ie.version);let Pn=qe.currentProgram;vt===!0&&(Pn=Ur(ie,X,ee));let bn=!1,Bn=!1,ir=!1;const At=Pn.getUniforms(),st=qe.uniforms;if(We.useProgram(Pn.program)&&(bn=!0,Bn=!0,ir=!0),ie.id!==se&&(se=ie.id,Bn=!0),bn||Q!==A){We.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),At.setValue(z,"projectionMatrix",A.projectionMatrix),At.setValue(z,"viewMatrix",A.matrixWorldInverse);const jn=At.map.cameraPosition;jn!==void 0&&jn.setValue(z,ht.setFromMatrixPosition(A.matrixWorld)),yt.logarithmicDepthBuffer&&At.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&At.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,Bn=!0,ir=!0)}if(qe.needsLights&&(En.state.directionalShadowMap.length>0&&At.setValue(z,"directionalShadowMap",En.state.directionalShadowMap,W),En.state.spotShadowMap.length>0&&At.setValue(z,"spotShadowMap",En.state.spotShadowMap,W),En.state.pointShadowMap.length>0&&At.setValue(z,"pointShadowMap",En.state.pointShadowMap,W)),ee.isSkinnedMesh){At.setOptional(z,ee,"bindMatrix"),At.setOptional(z,ee,"bindMatrixInverse");const jt=ee.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),At.setValue(z,"boneTexture",jt.boneTexture,W))}ee.isBatchedMesh&&(At.setOptional(z,ee,"batchingTexture"),At.setValue(z,"batchingTexture",ee._matricesTexture,W),At.setOptional(z,ee,"batchingIdTexture"),At.setValue(z,"batchingIdTexture",ee._indirectTexture,W),At.setOptional(z,ee,"batchingColorTexture"),ee._colorsTexture!==null&&At.setValue(z,"batchingColorTexture",ee._colorsTexture,W));const si=le.morphAttributes;if((si.position!==void 0||si.normal!==void 0||si.color!==void 0)&&Le.update(ee,le,Pn),(Bn||qe.receiveShadow!==ee.receiveShadow)&&(qe.receiveShadow=ee.receiveShadow,At.setValue(z,"receiveShadow",ee.receiveShadow)),(ie.isMeshStandardMaterial||ie.isMeshLambertMaterial||ie.isMeshPhongMaterial)&&ie.envMap===null&&X.environment!==null&&(st.envMapIntensity.value=X.environmentIntensity),st.dfgLUT!==void 0&&(st.dfgLUT.value=iT()),Bn&&(At.setValue(z,"toneMappingExposure",L.toneMappingExposure),qe.needsLights&&ma(st,ir),Pe&&ie.fog===!0&&je.refreshFogUniforms(st,Pe),je.refreshMaterialUniforms(st,ie,Ae,$,B.state.transmissionRenderTarget[A.id]),Kl.upload(z,so(qe),st,W)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(Kl.upload(z,so(qe),st,W),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&At.setValue(z,"center",ee.center),At.setValue(z,"modelViewMatrix",ee.modelViewMatrix),At.setValue(z,"normalMatrix",ee.normalMatrix),At.setValue(z,"modelMatrix",ee.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const jt=ie.uniformsGroups;for(let jn=0,Fi=jt.length;jn<Fi;jn++){const oo=jt[jn];De.update(oo,Pn),De.bind(oo,Pn)}}return Pn}function ma(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function ga(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,X,le){const ie=E.get(A);ie.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ie.__autoAllocateDepthBuffer===!1&&(ie.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=X,E.get(A.depthTexture).__webglTexture=ie.__autoAllocateDepthBuffer?void 0:le,ie.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){const le=E.get(A);le.__webglFramebuffer=X,le.__useDefaultFramebuffer=X===void 0};const va=z.createFramebuffer();this.setRenderTarget=function(A,X=0,le=0){j=A,U=X,q=le;let ie=null,ee=!1,Pe=!1;if(A){const Ce=E.get(A);if(Ce.__useDefaultFramebuffer!==void 0){We.bindFramebuffer(z.FRAMEBUFFER,Ce.__webglFramebuffer),te.copy(A.viewport),G.copy(A.scissor),J=A.scissorTest,We.viewport(te),We.scissor(G),We.setScissorTest(J),se=-1;return}else if(Ce.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Ce.__hasExternalTextures)W.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Qe=A.depthTexture;if(Ce.__boundDepthTexture!==Qe){if(Qe!==null&&E.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Pe=!0);const Ze=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[X])?ie=Ze[X][le]:ie=Ze[X],ee=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?ie=E.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?ie=Ze[le]:ie=Ze,te.copy(A.viewport),G.copy(A.scissor),J=A.scissorTest}else te.copy(re).multiplyScalar(Ae).floor(),G.copy(he).multiplyScalar(Ae).floor(),J=pe;if(le!==0&&(ie=va),We.bindFramebuffer(z.FRAMEBUFFER,ie)&&We.drawBuffers(A,ie),We.viewport(te),We.scissor(G),We.setScissorTest(J),ee){const Ce=E.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,le)}else if(Pe){const Ce=X;for(let Ne=0;Ne<A.textures.length;Ne++){const Ze=E.get(A.textures[Ne]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+Ne,Ze.__webglTexture,le,Ce)}}else if(A!==null&&le!==0){const Ce=E.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ce.__webglTexture,le)}se=-1},this.readRenderTargetPixels=function(A,X,le,ie,ee,Pe,Ue,Ce=0){if(!(A&&A.isWebGLRenderTarget)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne){We.bindFramebuffer(z.FRAMEBUFFER,Ne);try{const Ze=A.textures[Ce],Qe=Ze.format,ct=Ze.type;if(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),!yt.textureFormatReadable(Qe)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!yt.textureTypeReadable(ct)){wt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-ie&&le>=0&&le<=A.height-ee&&z.readPixels(X,le,ie,ee,we.convert(Qe),we.convert(ct),Pe)}finally{const Ze=j!==null?E.get(j).__webglFramebuffer:null;We.bindFramebuffer(z.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,X,le,ie,ee,Pe,Ue,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ne=Ne[Ue]),Ne)if(X>=0&&X<=A.width-ie&&le>=0&&le<=A.height-ee){We.bindFramebuffer(z.FRAMEBUFFER,Ne);const Ze=A.textures[Ce],Qe=Ze.format,ct=Ze.type;if(A.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+Ce),!yt.textureFormatReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!yt.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,Ke),z.bufferData(z.PIXEL_PACK_BUFFER,Pe.byteLength,z.STREAM_READ),z.readPixels(X,le,ie,ee,we.convert(Qe),we.convert(ct),0);const Pt=j!==null?E.get(j).__webglFramebuffer:null;We.bindFramebuffer(z.FRAMEBUFFER,Pt);const Nt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await L_(z,Nt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,Ke),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Pe),z.deleteBuffer(Ke),z.deleteSync(Nt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,le=0){const ie=Math.pow(2,-le),ee=Math.floor(A.image.width*ie),Pe=Math.floor(A.image.height*ie),Ue=X!==null?X.x:0,Ce=X!==null?X.y:0;W.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,le,0,0,Ue,Ce,ee,Pe),We.unbindTexture()};const au=z.createFramebuffer(),lu=z.createFramebuffer();this.copyTextureToTexture=function(A,X,le=null,ie=null,ee=0,Pe=0){let Ue,Ce,Ne,Ze,Qe,ct,Ke,Pt,Nt;const Dt=A.isCompressedTexture?A.mipmaps[Pe]:A.image;if(le!==null)Ue=le.max.x-le.min.x,Ce=le.max.y-le.min.y,Ne=le.isBox3?le.max.z-le.min.z:1,Ze=le.min.x,Qe=le.min.y,ct=le.isBox3?le.min.z:0;else{const st=Math.pow(2,-ee);Ue=Math.floor(Dt.width*st),Ce=Math.floor(Dt.height*st),A.isDataArrayTexture?Ne=Dt.depth:A.isData3DTexture?Ne=Math.floor(Dt.depth*st):Ne=1,Ze=0,Qe=0,ct=0}ie!==null?(Ke=ie.x,Pt=ie.y,Nt=ie.z):(Ke=0,Pt=0,Nt=0);const _t=we.convert(X.format),qt=we.convert(X.type);let qe;X.isData3DTexture?(W.setTexture3D(X,0),qe=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(W.setTexture2DArray(X,0),qe=z.TEXTURE_2D_ARRAY):(W.setTexture2D(X,0),qe=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const En=z.getParameter(z.UNPACK_ROW_LENGTH),vt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Pn=z.getParameter(z.UNPACK_SKIP_PIXELS),bn=z.getParameter(z.UNPACK_SKIP_ROWS),Bn=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,Dt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Dt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ze),z.pixelStorei(z.UNPACK_SKIP_ROWS,Qe),z.pixelStorei(z.UNPACK_SKIP_IMAGES,ct);const ir=A.isDataArrayTexture||A.isData3DTexture,At=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const st=E.get(A),si=E.get(X),jt=E.get(st.__renderTarget),jn=E.get(si.__renderTarget);We.bindFramebuffer(z.READ_FRAMEBUFFER,jt.__webglFramebuffer),We.bindFramebuffer(z.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Fi=0;Fi<Ne;Fi++)ir&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(A).__webglTexture,ee,ct+Fi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,E.get(X).__webglTexture,Pe,Nt+Fi)),z.blitFramebuffer(Ze,Qe,Ue,Ce,Ke,Pt,Ue,Ce,z.DEPTH_BUFFER_BIT,z.NEAREST);We.bindFramebuffer(z.READ_FRAMEBUFFER,null),We.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||E.has(A)){const st=E.get(A),si=E.get(X);We.bindFramebuffer(z.READ_FRAMEBUFFER,au),We.bindFramebuffer(z.DRAW_FRAMEBUFFER,lu);for(let jt=0;jt<Ne;jt++)ir?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,st.__webglTexture,ee,ct+jt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,st.__webglTexture,ee),At?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,si.__webglTexture,Pe,Nt+jt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,si.__webglTexture,Pe),ee!==0?z.blitFramebuffer(Ze,Qe,Ue,Ce,Ke,Pt,Ue,Ce,z.COLOR_BUFFER_BIT,z.NEAREST):At?z.copyTexSubImage3D(qe,Pe,Ke,Pt,Nt+jt,Ze,Qe,Ue,Ce):z.copyTexSubImage2D(qe,Pe,Ke,Pt,Ze,Qe,Ue,Ce);We.bindFramebuffer(z.READ_FRAMEBUFFER,null),We.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else At?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(qe,Pe,Ke,Pt,Nt,Ue,Ce,Ne,_t,qt,Dt.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(qe,Pe,Ke,Pt,Nt,Ue,Ce,Ne,_t,Dt.data):z.texSubImage3D(qe,Pe,Ke,Pt,Nt,Ue,Ce,Ne,_t,qt,Dt):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Pe,Ke,Pt,Ue,Ce,_t,qt,Dt.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Pe,Ke,Pt,Dt.width,Dt.height,_t,Dt.data):z.texSubImage2D(z.TEXTURE_2D,Pe,Ke,Pt,Ue,Ce,_t,qt,Dt);z.pixelStorei(z.UNPACK_ROW_LENGTH,En),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,vt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Pn),z.pixelStorei(z.UNPACK_SKIP_ROWS,bn),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Bn),Pe===0&&X.generateMipmaps&&z.generateMipmap(qe),We.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),We.unbindTexture()},this.resetState=function(){U=0,q=0,j=null,We.reset(),Se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Et._getDrawingBufferColorSpace(e),t.unpackColorSpace=Et._getUnpackColorSpace()}}const sT=1e10,oT=1e3;function Wl(s,e){const t=s.map(r=>`"${r}"`).join(", ");return new Error(`This RPC instance cannot ${e} because the transport did not provide one or more of these methods: ${t}`)}function aT(s={}){let e={},t={},r;function o(N){var T;t.unregisterHandler&&t.unregisterHandler(),t=N,(T=t.registerHandler)==null||T.call(t,B)}function l(N){if(typeof N=="function"){r=N;return}r=(T,L)=>{const Z=N[T];if(Z)return Z(L);const U=N._;if(!U)throw new Error(`The requested method has no handler: ${String(T)}`);return U(T,L)}}const{maxRequestTime:c=oT}=s;s.transport&&o(s.transport),s.requestHandler&&l(s.requestHandler),s._debugHooks&&(e=s._debugHooks);let f=0;function h(){return f<=sT?++f:f=0}const p=new Map,v=new Map;function y(N,...T){const L=T[0];return new Promise((Z,U)=>{var se;if(!t.send)throw Wl(["send"],"make requests");const q=h(),j={type:"request",id:q,method:N,params:L};p.set(q,{resolve:Z,reject:U}),c!==1/0&&v.set(q,setTimeout(()=>{v.delete(q),U(new Error("RPC request timed out."))},c)),(se=e.onSend)==null||se.call(e,j),t.send(j)})}const g=new Proxy(y,{get:(N,T,L)=>T in N?Reflect.get(N,T,L):Z=>y(T,Z)}),S=g;function M(N,...T){var U;const L=T[0];if(!t.send)throw Wl(["send"],"send messages");const Z={type:"message",id:N,payload:L};(U=e.onSend)==null||U.call(e,Z),t.send(Z)}const b=new Proxy(M,{get:(N,T,L)=>T in N?Reflect.get(N,T,L):Z=>M(T,Z)}),x=b,_=new Map,R=new Set;function C(N,T){if(!t.registerHandler)throw Wl(["registerHandler"],"register message listeners");if(N==="*"){R.add(T);return}_.has(N)||_.set(N,new Set),_.get(N).add(T)}function P(N,T){var L,Z;if(N==="*"){R.delete(T);return}(L=_.get(N))==null||L.delete(T),((Z=_.get(N))==null?void 0:Z.size)===0&&_.delete(N)}async function B(N){var T,L;if((T=e.onReceive)==null||T.call(e,N),!("type"in N))throw new Error("Message does not contain a type.");if(N.type==="request"){if(!t.send||!r)throw Wl(["send","requestHandler"],"handle requests");const{id:Z,method:U,params:q}=N;let j;try{j={type:"response",id:Z,success:!0,payload:await r(U,q)}}catch(se){if(!(se instanceof Error))throw se;j={type:"response",id:Z,success:!1,error:se.message}}(L=e.onSend)==null||L.call(e,j),t.send(j);return}if(N.type==="response"){const Z=v.get(N.id);Z!=null&&clearTimeout(Z);const{resolve:U,reject:q}=p.get(N.id)??{};N.success?U==null||U(N.payload):q==null||q(new Error(N.error));return}if(N.type==="message"){for(const U of R)U(N.id,N.payload);const Z=_.get(N.id);if(!Z)return;for(const U of Z)U(N.payload);return}throw new Error(`Unexpected RPC message type: ${N.type}`)}return{setTransport:o,setRequestHandler:l,request:g,requestProxy:S,send:b,sendProxy:x,addMessageListener:C,removeMessageListener:P,proxy:{send:x,request:S}}}function lT(s,e){const t={maxRequestTime:e.maxRequestTime,requestHandler:{...e.handlers.requests,...e.extraRequestHandlers},transport:{registerHandler:()=>{}}},r=aT(t),o=e.handlers.messages;return o&&r.addMessageListener("*",((l,c)=>{const f=o["*"];f&&f(l,c);const h=o[l];h&&h(c)})),r}const uT=window.__electrobunWebviewId,cT=window.__electrobunRpcSocketPort;class a0{constructor(e){this.rpc=e.rpc,this.init()}init(){this.initSocketToBun(),window.__electrobun.receiveMessageFromBun=this.receiveMessageFromBun.bind(this),this.rpc&&this.rpc.setTransport(this.createTransport())}initSocketToBun(){const e=new WebSocket(`ws://localhost:${cT}/socket?webviewId=${uT}`);this.bunSocket=e,e.addEventListener("open",()=>{}),e.addEventListener("message",async t=>{var o;const r=t.data;if(typeof r=="string")try{const l=JSON.parse(r),c=await window.__electrobun_decrypt(l.encryptedData,l.iv,l.tag);(o=this.rpcHandler)==null||o.call(this,JSON.parse(c))}catch(l){console.error("Error parsing bun message:",l)}else r instanceof Blob||console.error("UNKNOWN DATA TYPE RECEIVED:",t.data)}),e.addEventListener("error",t=>{console.error("Socket error:",t)}),e.addEventListener("close",t=>{})}createTransport(){const e=this;return{send(t){try{const r=JSON.stringify(t);e.bunBridge(r)}catch(r){console.error("bun: failed to serialize message to webview",r)}},registerHandler(t){e.rpcHandler=t}}}async bunBridge(e){var t,r;if(((t=this.bunSocket)==null?void 0:t.readyState)===WebSocket.OPEN)try{const{encryptedData:o,iv:l,tag:c}=await window.__electrobun_encrypt(e),h=JSON.stringify({encryptedData:o,iv:l,tag:c});this.bunSocket.send(h);return}catch(o){console.error("Error sending message to bun via socket:",o)}(r=window.__electrobunBunBridge)==null||r.postMessage(e)}receiveMessageFromBun(e){this.rpcHandler&&this.rpcHandler(e)}static defineRPC(e){return lT("webview",{...e,extraRequestHandlers:{evaluateJavascriptWithResponse:({script:t})=>new Promise(r=>{try{const l=new Function(t)();l instanceof Promise?l.then(c=>{r(c)}).catch(c=>{console.error("bun: async script execution failed",c),r(String(c))}):r(l)}catch(o){console.error("bun: failed to eval script",o),r(String(o))}})}})}}const Jl=a0.defineRPC({handlers:{}});new a0({rpc:Jl});function fT(){const t=new qs,r=new Zi(.65,32,32),o=new Rr({color:4251856,roughness:.55,emissive:6356976,emissiveIntensity:.15}),l=new ln(r,o);t.add(l);const c=new Zi(.13,16,16),f=new Rr({color:2142368,roughness:1,transparent:!0,opacity:.4});for(const x of[-1,1]){const _=new ln(c,f);_.position.set(x*.35,-.05,.48),_.scale.set(1,.7,.3),t.add(_)}const h=new Rr({color:16777215,roughness:.1}),p=new Rr({color:1710638,roughness:.05}),v=new Rr({color:16777215,emissive:16777215});for(const x of[-1,1]){const _=new ln(new Zi(.14,16,16),h);_.position.set(x*.18,.12,.55),_.scale.set(.8,1.2,.8),t.add(_);const R=new ln(new Zi(.13,16,16),p);R.position.set(x*.18,.1,.58),R.scale.set(.85,1.15,.8),t.add(R);const C=new ln(new Zi(.04,8,8),v);C.position.set(x*.18+.04,.16,.65),t.add(C);const P=new ln(new Zi(.02,6,6),v);P.position.set(x*.18-.02,.06,.65),t.add(P)}const y=new qg;y.moveTo(-.06,0),y.quadraticCurveTo(0,-.05,.06,0);const g=new ln(new Od(y,12),new Rr({color:2134160,roughness:.5,side:wi}));g.position.set(0,-.08,.64),t.add(g);const S=new Rr({color:2134176,roughness:.5,emissive:2138288,emissiveIntensity:.1});for(const x of[-1,1]){const _=new ln(new Zi(.18,16,16),S);_.position.set(x*.25,-.62,.12),_.scale.set(1.1,.55,1.4),t.add(_)}const M=new Rr({color:4251856,roughness:.55,emissive:6356976,emissiveIntensity:.15}),b=[];for(const x of[-1,1]){const _=new qs;_.position.set(x*.58,-.05,.1),_.rotation.z=x*.25;const R=new ln(new Id(.09,.25,8,12),M);R.position.set(0,-.2,0),_.add(R),t.add(_),b.push(_)}return{root:t,arms:b}}const Af=200;class Xl{constructor(e=400,t=18){Bc(this,"value",0);Bc(this,"velocity",0);this.stiffness=e,this.damping=t}update(e,t,r=1/0){const o=-this.stiffness*(this.value-e),l=-this.damping*this.velocity;this.velocity+=(o+l)*t,this.value+=this.velocity*t,this.value=Math.max(-r,Math.min(r,this.value))}}function dT(){const s=xn.useRef(null),e=xn.useRef({x:0,y:0}),[t,r]=xn.useState(!1),[o,l]=xn.useState(!1),[c,f]=xn.useState(null),[h,p]=xn.useState(null),[v,y]=xn.useState(null),[g,S]=xn.useState(null),M=xn.useRef(!1),b=xn.useRef(null),x=xn.useCallback(()=>{const C=b.current;C&&C.focus({preventScroll:!0})},[]);xn.useEffect(()=>{M.current=t},[t]),xn.useEffect(()=>{if(!t)return;let C=!1;return(async()=>{try{await Jl.request.requestFocus()}catch{}C||!M.current||requestAnimationFrame(()=>x())})(),()=>{C=!0}},[t,x]),xn.useEffect(()=>{const C=P=>{P.key==="Escape"&&t&&r(!1)};return window.addEventListener("keydown",C),()=>window.removeEventListener("keydown",C)},[t]);async function _(){if(!o){l(!0),S(null);try{const C=await Jl.request.captureCurrentDisplay();C.ok?(f(C.imagePath),p(C.previewDataUrl),y(C.capturedAt),S(null)):(f(null),p(null),y(null),S({reason:C.reason,message:C.message})),r(!0)}catch(C){f(null),p(null),y(null),S({reason:"capture_failed",message:C instanceof Error?C.message:"Something went wrong while taking the screenshot."}),r(!0)}finally{l(!1)}}}async function R(){if(c)try{await Jl.request.openCapturedImage({imagePath:c})}catch{}}return xn.useEffect(()=>{const C=s.current;if(!C)return;const P=new ux,B=new ii(45,C.clientWidth/C.clientHeight,.1,100);B.position.set(0,0,3.2);const F=new rT({antialias:!0,alpha:!0});F.setPixelRatio(window.devicePixelRatio),F.setSize(C.clientWidth,C.clientHeight),F.setClearColor(0,0),C.appendChild(F.domElement),P.add(new ly(16774392,.9));const N=new Ym(16777215,1);N.position.set(3,5,4),P.add(N);const T=new Ym(16765152,.4);T.position.set(-3,2,2),P.add(T);const{root:L,arms:Z}=fT();P.add(L);const U=new Xl(500,22),q=new Xl(500,22),j=new Xl(400,25),se=new Xl(200,16);let Q=!1,te=0,G=0;const J=Re=>{C.contains(Re.target)&&(Q=!0,te=Re.screenX,G=Re.screenY)},oe=Re=>{Q&&(e.current.x=Re.screenX-te,e.current.y=Re.screenY-G,te=Re.screenX,G=Re.screenY)},ue=()=>{Q=!1};window.addEventListener("mousedown",J),window.addEventListener("mousemove",oe),window.addEventListener("mouseup",ue);let O=0,$;function Ae(){$=requestAnimationFrame(Ae);const Re=1/60;O+=Re;const He=e.current.x;e.current.x*=.5,e.current.y*=.5,j.update(0,Re,.25),j.velocity+=He*-.8,L.rotation.z=j.value+Math.sin(O*.8)*.02;const re=$_.clamp(He*.04,-.3,.3);L.rotation.y+=(re-L.rotation.y)*.1,U.update(0,Re,.3),U.velocity+=He*1.5,q.update(0,Re,.3),q.velocity+=He*1.5;const he=M.current?1.2:0;se.update(he,Re),Z[0].rotation.z=U.value,Z[1].rotation.z=q.value+se.value,L.position.y=.35+Math.sin(O*1.5)*.04,F.render(P,B)}return Ae(),()=>{cancelAnimationFrame($),window.removeEventListener("mousedown",J),window.removeEventListener("mousemove",oe),window.removeEventListener("mouseup",ue),C.removeChild(F.domElement),F.dispose()}},[]),Jt.jsx("div",{style:{position:"fixed",inset:0,display:"flex",flexDirection:"column",justifyContent:"flex-end"},children:Jt.jsxs("div",{style:{flex:1,position:"relative"},children:[Jt.jsx("div",{ref:s,style:{position:"absolute",left:0,right:0,bottom:0,height:Af}}),Jt.jsx("div",{className:"electrobun-webkit-app-region-drag",style:{position:"absolute",left:0,right:0,bottom:0,height:Af,zIndex:10,cursor:"pointer"},onMouseDown:C=>{C.target.style.cursor="grabbing",C.target.dataset.downX=String(C.screenX),C.target.dataset.downY=String(C.screenY)},onMouseUp:C=>{C.target.style.cursor="pointer";const P=Number(C.target.dataset.downX??0),B=Number(C.target.dataset.downY??0);Math.hypot(C.screenX-P,C.screenY-B)<5&&!o&&_()},onMouseLeave:C=>{C.target.style.cursor="pointer"}}),t&&Jt.jsxs("div",{style:{position:"absolute",left:0,right:0,bottom:Af,zIndex:20,display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"6px 12px 2px"},children:[Jt.jsx("div",{style:{background:"white",borderRadius:16,padding:"10px 14px",marginBottom:6,boxShadow:"0 2px 12px rgba(0,0,0,0.12)",fontSize:13,color:"#1a1a2e",lineHeight:1.4},children:(g==null?void 0:g.reason)==="permission_denied"?Jt.jsx(Jt.Fragment,{children:"Allow screen recording for this app in macOS System Settings > Privacy & Security > Screen & System Audio Recording, then click me again."}):g?Jt.jsxs(Jt.Fragment,{children:["I couldn't grab the screen: ",g.message]}):Jt.jsxs(Jt.Fragment,{children:["I grabbed your screen",v?` at ${new Date(v).toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})}`:"",". Ask me about it."]})}),h&&!g&&Jt.jsxs("div",{role:"button",tabIndex:0,onClick:()=>{R()},onKeyDown:C=>{(C.key==="Enter"||C.key===" ")&&(C.preventDefault(),R())},style:{background:"rgba(255,255,255,0.92)",borderRadius:16,padding:8,marginBottom:6,boxShadow:"0 2px 12px rgba(0,0,0,0.1)",cursor:"pointer"},children:[Jt.jsx("img",{src:h,alt:"Screenshot preview",style:{display:"block",width:"100%",maxHeight:120,objectFit:"cover",borderRadius:10}}),Jt.jsx("div",{style:{marginTop:6,fontSize:11,color:"#5a5a6f",textAlign:"center"},children:"Click to open full screenshot"})]}),Jt.jsxs("div",{style:{display:"flex",gap:6},children:[Jt.jsx("input",{ref:b,autoFocus:!0,type:"text",placeholder:"Ask me anything...",style:{flex:1,padding:"8px 12px",borderRadius:12,border:"1px solid #e0e0e0",fontSize:13,outline:"none",background:"white",color:"#1a1a2e"},onFocus:C=>C.target.style.borderColor="#40e0d0",onBlur:C=>C.target.style.borderColor="#e0e0e0",onKeyDown:C=>{C.key}}),Jt.jsx("button",{type:"button",style:{width:36,height:36,borderRadius:12,border:"none",background:"#40e0d0",color:"white",fontSize:16,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:"↑"})]})]})]})})}Zv.createRoot(document.getElementById("root")).render(Jt.jsx(xn.StrictMode,{children:Jt.jsx(dT,{})}));
