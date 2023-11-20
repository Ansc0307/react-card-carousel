var e,t={exports:{}},r={exports:{}};var n,o,a,u={};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */"production"===process.env.NODE_ENV?t.exports=function(){if(n)return u;n=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator,y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,h={};function v(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||y}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var _=g.prototype=new b;_.constructor=g,m(_,v.prototype),_.isPureReactComponent=!0;var w=Array.isArray,S=Object.prototype.hasOwnProperty,R={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function C(t,r,n){var o,a={},u=null,i=null;if(null!=r)for(o in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(u=""+r.key),r)S.call(r,o)&&!k.hasOwnProperty(o)&&(a[o]=r[o]);var c=arguments.length-2;if(1===c)a.children=n;else if(1<c){for(var s=Array(c),l=0;l<c;l++)s[l]=arguments[l+2];a.children=s}if(t&&t.defaultProps)for(o in c=t.defaultProps)void 0===a[o]&&(a[o]=c[o]);return{$$typeof:e,type:t,key:u,ref:i,props:a,_owner:R.current}}function E(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var O=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(r,n,o,a,u){var i=typeof r;"undefined"!==i&&"boolean"!==i||(r=null);var c=!1;if(null===r)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(r.$$typeof){case e:case t:c=!0}}if(c)return u=u(c=r),r=""===a?"."+j(c,0):a,w(u)?(o="",null!=r&&(o=r.replace(O,"$&/")+"/"),x(u,n,o,"",(function(e){return e}))):null!=u&&(E(u)&&(u=function(t,r){return{$$typeof:e,type:t.type,key:r,ref:t.ref,props:t.props,_owner:t._owner}}(u,o+(!u.key||c&&c.key===u.key?"":(""+u.key).replace(O,"$&/")+"/")+r)),n.push(u)),1;if(c=0,a=""===a?".":a+":",w(r))for(var s=0;s<r.length;s++){var l=a+j(i=r[s],s);c+=x(i,n,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(r),"function"==typeof l)for(r=l.call(r),s=0;!(i=r.next()).done;)c+=x(i=i.value,n,o,l=a+j(i,s++),u);else if("object"===i)throw n=String(r),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(r).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function P(e,t,r){if(null==e)return e;var n=[],o=0;return x(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function $(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var T={current:null},I={transition:null},D={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:I,ReactCurrentOwner:R};return u.Children={map:P,forEach:function(e,t,r){P(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return P(e,(function(){t++})),t},toArray:function(e){return P(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},u.Component=v,u.Fragment=r,u.Profiler=a,u.PureComponent=g,u.StrictMode=o,u.Suspense=l,u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,u.cloneElement=function(t,r,n){if(null==t)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var o=m({},t.props),a=t.key,u=t.ref,i=t._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,i=R.current),void 0!==r.key&&(a=""+r.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(s in r)S.call(r,s)&&!k.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==c?c[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){c=Array(s);for(var l=0;l<s;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:e,type:t.type,key:a,ref:u,props:o,_owner:i}},u.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},u.createElement=C,u.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},u.createRef=function(){return{current:null}},u.forwardRef=function(e){return{$$typeof:s,render:e}},u.isValidElement=E,u.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},u.memo=function(e,t){return{$$typeof:f,type:e,compare:void 0===t?null:t}},u.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},u.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},u.useCallback=function(e,t){return T.current.useCallback(e,t)},u.useContext=function(e){return T.current.useContext(e)},u.useDebugValue=function(){},u.useDeferredValue=function(e){return T.current.useDeferredValue(e)},u.useEffect=function(e,t){return T.current.useEffect(e,t)},u.useId=function(){return T.current.useId()},u.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},u.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},u.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},u.useMemo=function(e,t){return T.current.useMemo(e,t)},u.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},u.useRef=function(e){return T.current.useRef(e)},u.useState=function(e){return T.current.useState(e)},u.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},u.useTransition=function(){return T.current.useTransition()},u.version="18.2.0",u}():t.exports=(e||(e=1,o=r,a=r.exports,"production"!==process.env.NODE_ENV&&function(){"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error);var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),y=Symbol.for("react.offscreen"),m=Symbol.iterator,h="@@iterator";function v(e){if(null===e||"object"!=typeof e)return null;var t=m&&e[m]||e[h];return"function"==typeof t?t:null}var b={current:null},g={transition:null},_={current:null,isBatchingLegacy:!1,didScheduleLegacyUpdate:!1},w={current:null},S={},R=null;function k(e){R=e}S.setExtraStackFrame=function(e){R=e},S.getCurrentStack=null,S.getStackAddendum=function(){var e="";R&&(e+=R);var t=S.getCurrentStack;return t&&(e+=t()||""),e};var C=!1,E=!1,O=!1,j=!1,x=!1,P={ReactCurrentDispatcher:b,ReactCurrentBatchConfig:g,ReactCurrentOwner:w};function $(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];I("warn",e,r)}function T(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];I("error",e,r)}function I(e,t,r){var n=P.ReactDebugCurrentFrame.getStackAddendum();""!==n&&(t+="%s",r=r.concat([n]));var o=r.map((function(e){return String(e)}));o.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,o)}P.ReactDebugCurrentFrame=S,P.ReactCurrentActQueue=_;var D={};function L(e,t){var r=e.constructor,n=r&&(r.displayName||r.name)||"ReactClass",o=n+"."+t;D[o]||(T("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.",t,n),D[o]=!0)}var N={isMounted:function(e){return!1},enqueueForceUpdate:function(e,t,r){L(e,"forceUpdate")},enqueueReplaceState:function(e,t,r,n){L(e,"replaceState")},enqueueSetState:function(e,t,r,n){L(e,"setState")}},A=Object.assign,F={};function M(e,t,r){this.props=e,this.context=t,this.refs=F,this.updater=r||N}Object.freeze(F),M.prototype.isReactComponent={},M.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},M.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};var V={isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]},U=function(e,t){Object.defineProperty(M.prototype,e,{get:function(){$("%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})};for(var z in V)V.hasOwnProperty(z)&&U(z,V[z]);function B(){}function q(e,t,r){this.props=e,this.context=t,this.refs=F,this.updater=r||N}B.prototype=M.prototype;var W=q.prototype=new B;W.constructor=q,A(W,M.prototype),W.isPureReactComponent=!0;var Y=Array.isArray;function H(e){return Y(e)}function G(e){return""+e}function K(e){if(function(e){try{return G(e),!1}catch(e){return!0}}(e))return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",function(e){return"function"==typeof Symbol&&Symbol.toStringTag&&e[Symbol.toStringTag]||e.constructor.name||"Object"}(e)),G(e)}function X(e){return e.displayName||"Context"}function J(e){if(null==e)return null;if("number"==typeof e.tag&&T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),"function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case r:return"Fragment";case t:return"Portal";case u:return"Profiler";case n:return"StrictMode";case l:return"Suspense";case f:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case c:return X(e)+".Consumer";case i:return X(e._context)+".Provider";case s:return function(e,t,r){var n=e.displayName;if(n)return n;var o=t.displayName||t.name||"";return""!==o?r+"("+o+")":r}(e,e.render,"ForwardRef");case p:var o=e.displayName||null;return null!==o?o:J(e.type)||"Memo";case d:var a=e,y=a._payload,m=a._init;try{return J(m(y))}catch(e){return null}}return null}var Q,Z,ee,te=Object.prototype.hasOwnProperty,re={key:!0,ref:!0,__self:!0,__source:!0};function ne(e){if(te.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return void 0!==e.ref}function oe(e){if(te.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return void 0!==e.key}ee={};var ae=function(t,r,n,o,a,u,i){var c={$$typeof:e,type:t,key:r,ref:n,props:i,_owner:u,_store:{}};return Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:o}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function ue(e,t,r){var n,o={},a=null,u=null,i=null,c=null;if(null!=t)for(n in ne(t)&&(u=t.ref,function(e){if("string"==typeof e.ref&&w.current&&e.__self&&w.current.stateNode!==e.__self){var t=J(w.current.type);ee[t]||(T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',t,e.ref),ee[t]=!0)}}(t)),oe(t)&&(K(t.key),a=""+t.key),i=void 0===t.__self?null:t.__self,c=void 0===t.__source?null:t.__source,t)te.call(t,n)&&!re.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(1===s)o.children=r;else if(s>1){for(var l=Array(s),f=0;f<s;f++)l[f]=arguments[f+2];Object.freeze&&Object.freeze(l),o.children=l}if(e&&e.defaultProps){var p=e.defaultProps;for(n in p)void 0===o[n]&&(o[n]=p[n])}if(a||u){var d="function"==typeof e?e.displayName||e.name||"Unknown":e;a&&function(e,t){var r=function(){Q||(Q=!0,T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"key",{get:r,configurable:!0})}(o,d),u&&function(e,t){var r=function(){Z||(Z=!0,T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};r.isReactWarning=!0,Object.defineProperty(e,"ref",{get:r,configurable:!0})}(o,d)}return ae(e,a,u,i,c,w.current,o)}function ie(e,t,r){if(null==e)throw new Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n,o,a=A({},e.props),u=e.key,i=e.ref,c=e._self,s=e._source,l=e._owner;if(null!=t)for(n in ne(t)&&(i=t.ref,l=w.current),oe(t)&&(K(t.key),u=""+t.key),e.type&&e.type.defaultProps&&(o=e.type.defaultProps),t)te.call(t,n)&&!re.hasOwnProperty(n)&&(void 0===t[n]&&void 0!==o?a[n]=o[n]:a[n]=t[n]);var f=arguments.length-2;if(1===f)a.children=r;else if(f>1){for(var p=Array(f),d=0;d<f;d++)p[d]=arguments[d+2];a.children=p}return ae(e.type,u,i,c,s,l,a)}function ce(t){return"object"==typeof t&&null!==t&&t.$$typeof===e}var se=".",le=":",fe=!1,pe=/\/+/g;function de(e){return e.replace(pe,"$&/")}function ye(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(K(e.key),r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,(function(e){return n[e]}))):t.toString(36);var r,n}function me(r,n,o,a,u){var i=typeof r;"undefined"!==i&&"boolean"!==i||(r=null);var c,s,l,f=!1;if(null===r)f=!0;else switch(i){case"string":case"number":f=!0;break;case"object":switch(r.$$typeof){case e:case t:f=!0}}if(f){var p=r,d=u(p),y=""===a?se+ye(p,0):a;if(H(d)){var m="";null!=y&&(m=de(y)+"/"),me(d,n,m,"",(function(e){return e}))}else null!=d&&(ce(d)&&(!d.key||p&&p.key===d.key||K(d.key),c=d,s=o+(!d.key||p&&p.key===d.key?"":de(""+d.key)+"/")+y,d=ae(c.type,s,c.ref,c._self,c._source,c._owner,c.props)),n.push(d));return 1}var h=0,b=""===a?se:a+le;if(H(r))for(var g=0;g<r.length;g++)h+=me(l=r[g],n,o,b+ye(l,g),u);else{var _=v(r);if("function"==typeof _){var w=r;_===w.entries&&(fe||$("Using Maps as children is not supported. Use an array of keyed ReactElements instead."),fe=!0);for(var S,R=_.call(w),k=0;!(S=R.next()).done;)h+=me(l=S.value,n,o,b+ye(l,k++),u)}else if("object"===i){var C=String(r);throw new Error("Objects are not valid as a React child (found: "+("[object Object]"===C?"object with keys {"+Object.keys(r).join(", ")+"}":C)+"). If you meant to render a collection of children, use an array instead.")}}return h}function he(e,t,r){if(null==e)return e;var n=[],o=0;return me(e,n,"","",(function(e){return t.call(r,e,o++)})),n}var ve,be=-1,ge=0,_e=1,we=2;function Se(e){if(e._status===be){var t=(0,e._result)();if(t.then((function(t){if(e._status===ge||e._status===be){var r=e;r._status=_e,r._result=t}}),(function(t){if(e._status===ge||e._status===be){var r=e;r._status=we,r._result=t}})),e._status===be){var r=e;r._status=ge,r._result=t}}if(e._status===_e){var n=e._result;return void 0===n&&T("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?",n),"default"in n||T("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))",n),n.default}throw e._result}function Re(e){return"string"==typeof e||"function"==typeof e||!!(e===r||e===u||x||e===n||e===l||e===f||j||e===y||C||E||O)||"object"==typeof e&&null!==e&&(e.$$typeof===d||e.$$typeof===p||e.$$typeof===i||e.$$typeof===c||e.$$typeof===s||e.$$typeof===ve||void 0!==e.getModuleId)}function ke(){var e=b.current;return null===e&&T("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem."),e}ve=Symbol.for("react.module.reference");var Ce,Ee,Oe,je,xe,Pe,$e,Te=0;function Ie(){}Ie.__reactDisabledLog=!0;var De,Le=P.ReactCurrentDispatcher;function Ne(e,t,r){if(void 0===De)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);De=n&&n[1]||""}return"\n"+De+e}var Ae,Fe=!1,Me="function"==typeof WeakMap?WeakMap:Map;function Ve(e,t){if(!e||Fe)return"";var r,n=Ae.get(e);if(void 0!==n)return n;Fe=!0;var o,a=Error.prepareStackTrace;Error.prepareStackTrace=void 0,o=Le.current,Le.current=null,function(){if(0===Te){Ce=console.log,Ee=console.info,Oe=console.warn,je=console.error,xe=console.group,Pe=console.groupCollapsed,$e=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ie,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}Te++}();try{if(t){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(u,[])}catch(e){r=e}Reflect.construct(e,[],u)}else{try{u.call()}catch(e){r=e}e.call(u.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var i=t.stack.split("\n"),c=r.stack.split("\n"),s=i.length-1,l=c.length-1;s>=1&&l>=0&&i[s]!==c[l];)l--;for(;s>=1&&l>=0;s--,l--)if(i[s]!==c[l]){if(1!==s||1!==l)do{if(s--,--l<0||i[s]!==c[l]){var f="\n"+i[s].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),"function"==typeof e&&Ae.set(e,f),f}}while(s>=1&&l>=0);break}}}finally{Fe=!1,Le.current=o,function(){if(0==--Te){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:A({},e,{value:Ce}),info:A({},e,{value:Ee}),warn:A({},e,{value:Oe}),error:A({},e,{value:je}),group:A({},e,{value:xe}),groupCollapsed:A({},e,{value:Pe}),groupEnd:A({},e,{value:$e})})}Te<0&&T("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}(),Error.prepareStackTrace=a}var p=e?e.displayName||e.name:"",d=p?Ne(p):"";return"function"==typeof e&&Ae.set(e,d),d}function Ue(e,t,r){if(null==e)return"";if("function"==typeof e)return Ve(e,function(e){var t=e.prototype;return!(!t||!t.isReactComponent)}(e));if("string"==typeof e)return Ne(e);switch(e){case l:return Ne("Suspense");case f:return Ne("SuspenseList")}if("object"==typeof e)switch(e.$$typeof){case s:return Ve(e.render,!1);case p:return Ue(e.type,t,r);case d:var n=e,o=n._payload,a=n._init;try{return Ue(a(o),t,r)}catch(e){}}return""}Ae=new Me;var ze,Be={},qe=P.ReactDebugCurrentFrame;function We(e){if(e){var t=e._owner,r=Ue(e.type,e._source,t?t.type:null);qe.setExtraStackFrame(r)}else qe.setExtraStackFrame(null)}function Ye(e){if(e){var t=e._owner;k(Ue(e.type,e._source,t?t.type:null))}else k(null)}function He(){if(w.current){var e=J(w.current.type);if(e)return"\n\nCheck the render method of `"+e+"`."}return""}ze=!1;var Ge={};function Ke(e,t){if(e._store&&!e._store.validated&&null==e.key){e._store.validated=!0;var r=function(e){var t=He();if(!t){var r="string"==typeof e?e:e.displayName||e.name;r&&(t="\n\nCheck the top-level render call using <"+r+">.")}return t}(t);if(!Ge[r]){Ge[r]=!0;var n="";e&&e._owner&&e._owner!==w.current&&(n=" It was passed a child from "+J(e._owner.type)+"."),Ye(e),T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',r,n),Ye(null)}}}function Xe(e,t){if("object"==typeof e)if(H(e))for(var r=0;r<e.length;r++){var n=e[r];ce(n)&&Ke(n,t)}else if(ce(e))e._store&&(e._store.validated=!0);else if(e){var o=v(e);if("function"==typeof o&&o!==e.entries)for(var a,u=o.call(e);!(a=u.next()).done;)ce(a.value)&&Ke(a.value,t)}}function Je(e){var t,r=e.type;if(null!=r&&"string"!=typeof r){if("function"==typeof r)t=r.propTypes;else{if("object"!=typeof r||r.$$typeof!==s&&r.$$typeof!==p)return;t=r.propTypes}if(t){var n=J(r);!function(e,t,r,n,o){var a=Function.call.bind(te);for(var u in e)if(a(e,u)){var i=void 0;try{if("function"!=typeof e[u]){var c=Error((n||"React class")+": "+r+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw c.name="Invariant Violation",c}i=e[u](t,u,n,r,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(e){i=e}!i||i instanceof Error||(We(o),T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",r,u,typeof i),We(null)),i instanceof Error&&!(i.message in Be)&&(Be[i.message]=!0,We(o),T("Failed %s type: %s",r,i.message),We(null))}}(t,e.props,"prop",n,e)}else void 0===r.PropTypes||ze||(ze=!0,T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",J(r)||"Unknown"));"function"!=typeof r.getDefaultProps||r.getDefaultProps.isReactClassApproved||T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Qe(t,n,o){var a,u,i=Re(t);if(!i){var c,s="";(void 0===t||"object"==typeof t&&null!==t&&0===Object.keys(t).length)&&(s+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."),s+=(null!=(a=n)&&void 0!==(u=a.__source)?"\n\nCheck your code at "+u.fileName.replace(/^.*[\\\/]/,"")+":"+u.lineNumber+".":"")||He(),null===t?c="null":H(t)?c="array":void 0!==t&&t.$$typeof===e?(c="<"+(J(t.type)||"Unknown")+" />",s=" Did you accidentally export a JSX literal instead of a component?"):c=typeof t,T("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",c,s)}var l=ue.apply(this,arguments);if(null==l)return l;if(i)for(var f=2;f<arguments.length;f++)Xe(arguments[f],t);return t===r?function(e){for(var t=Object.keys(e.props),r=0;r<t.length;r++){var n=t[r];if("children"!==n&&"key"!==n){Ye(e),T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),Ye(null);break}}null!==e.ref&&(Ye(e),T("Invalid attribute `ref` supplied to `React.Fragment`."),Ye(null))}(l):Je(l),l}var Ze=!1,et=!1,tt=null,rt=0,nt=!1;function ot(e){e!==rt-1&&T("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "),rt=e}function at(e,t,r){var n=_.current;if(null!==n)try{it(n),function(e){if(null===tt)try{var t=("require"+Math.random()).slice(0,7);tt=(o&&o[t]).call(o,"timers").setImmediate}catch(e){tt=function(e){!1===et&&(et=!0,"undefined"==typeof MessageChannel&&T("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));var t=new MessageChannel;t.port1.onmessage=e,t.port2.postMessage(void 0)}}tt(e)}((function(){0===n.length?(_.current=null,t(e)):at(e,t,r)}))}catch(e){r(e)}else t(e)}var ut=!1;function it(e){if(!ut){ut=!0;var t=0;try{for(;t<e.length;t++){var r=e[t];do{r=r(!0)}while(null!==r)}e.length=0}catch(r){throw e=e.slice(t+1),r}finally{ut=!1}}}var ct=Qe,st=function(e,t,r){for(var n=ie.apply(this,arguments),o=2;o<arguments.length;o++)Xe(arguments[o],n.type);return Je(n),n},lt=function(e){var t=Qe.bind(null,e);return t.type=e,Ze||(Ze=!0,$("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")),Object.defineProperty(t,"type",{enumerable:!1,get:function(){return $("Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}}),t},ft={map:he,forEach:function(e,t,r){he(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return he(e,(function(){t++})),t},toArray:function(e){return he(e,(function(e){return e}))||[]},only:function(e){if(!ce(e))throw new Error("React.Children.only expected to receive a single React element child.");return e}};a.Children=ft,a.Component=M,a.Fragment=r,a.Profiler=u,a.PureComponent=q,a.StrictMode=n,a.Suspense=l,a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,a.cloneElement=st,a.createContext=function(e){var t={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};t.Provider={$$typeof:i,_context:t};var r=!1,n=!1,o=!1,a={$$typeof:c,_context:t};return Object.defineProperties(a,{Provider:{get:function(){return n||(n=!0,T("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")),t.Provider},set:function(e){t.Provider=e}},_currentValue:{get:function(){return t._currentValue},set:function(e){t._currentValue=e}},_currentValue2:{get:function(){return t._currentValue2},set:function(e){t._currentValue2=e}},_threadCount:{get:function(){return t._threadCount},set:function(e){t._threadCount=e}},Consumer:{get:function(){return r||(r=!0,T("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")),t.Consumer}},displayName:{get:function(){return t.displayName},set:function(e){o||($("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.",e),o=!0)}}}),t.Consumer=a,t._currentRenderer=null,t._currentRenderer2=null,t},a.createElement=ct,a.createFactory=lt,a.createRef=function(){var e={current:null};return Object.seal(e),e},a.forwardRef=function(e){null!=e&&e.$$typeof===p?T("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...))."):"function"!=typeof e?T("forwardRef requires a render function but was given %s.",null===e?"null":typeof e):0!==e.length&&2!==e.length&&T("forwardRef render functions accept exactly two parameters: props and ref. %s",1===e.length?"Did you forget to use the ref parameter?":"Any additional parameter will be undefined."),null!=e&&(null==e.defaultProps&&null==e.propTypes||T("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?"));var t,r={$$typeof:s,render:e};return Object.defineProperty(r,"displayName",{enumerable:!1,configurable:!0,get:function(){return t},set:function(r){t=r,e.name||e.displayName||(e.displayName=r)}}),r},a.isValidElement=ce,a.lazy=function(e){var t,r,n={$$typeof:d,_payload:{_status:be,_result:e},_init:Se};return Object.defineProperties(n,{defaultProps:{configurable:!0,get:function(){return t},set:function(e){T("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),t=e,Object.defineProperty(n,"defaultProps",{enumerable:!0})}},propTypes:{configurable:!0,get:function(){return r},set:function(e){T("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."),r=e,Object.defineProperty(n,"propTypes",{enumerable:!0})}}}),n},a.memo=function(e,t){Re(e)||T("memo: The first argument must be a component. Instead received: %s",null===e?"null":typeof e);var r,n={$$typeof:p,type:e,compare:void 0===t?null:t};return Object.defineProperty(n,"displayName",{enumerable:!1,configurable:!0,get:function(){return r},set:function(t){r=t,e.name||e.displayName||(e.displayName=t)}}),n},a.startTransition=function(e,t){var r=g.transition;g.transition={};var n=g.transition;g.transition._updatedFibers=new Set;try{e()}finally{g.transition=r,null===r&&n._updatedFibers&&(n._updatedFibers.size>10&&$("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."),n._updatedFibers.clear())}},a.unstable_act=function(e){var t=rt;rt++,null===_.current&&(_.current=[]);var r,n=_.isBatchingLegacy;try{if(_.isBatchingLegacy=!0,r=e(),!n&&_.didScheduleLegacyUpdate){var o=_.current;null!==o&&(_.didScheduleLegacyUpdate=!1,it(o))}}catch(e){throw ot(t),e}finally{_.isBatchingLegacy=n}if(null!==r&&"object"==typeof r&&"function"==typeof r.then){var a=r,u=!1,i={then:function(e,r){u=!0,a.then((function(n){ot(t),0===rt?at(n,e,r):e(n)}),(function(e){ot(t),r(e)}))}};return nt||"undefined"==typeof Promise||Promise.resolve().then((function(){})).then((function(){u||(nt=!0,T("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"))})),i}var c=r;if(ot(t),0===rt){var s=_.current;return null!==s&&(it(s),_.current=null),{then:function(e,t){null===_.current?(_.current=[],at(c,e,t)):e(c)}}}return{then:function(e,t){e(c)}}},a.useCallback=function(e,t){return ke().useCallback(e,t)},a.useContext=function(e){var t=ke();if(void 0!==e._context){var r=e._context;r.Consumer===e?T("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?"):r.Provider===e&&T("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?")}return t.useContext(e)},a.useDebugValue=function(e,t){return ke().useDebugValue(e,t)},a.useDeferredValue=function(e){return ke().useDeferredValue(e)},a.useEffect=function(e,t){return ke().useEffect(e,t)},a.useId=function(){return ke().useId()},a.useImperativeHandle=function(e,t,r){return ke().useImperativeHandle(e,t,r)},a.useInsertionEffect=function(e,t){return ke().useInsertionEffect(e,t)},a.useLayoutEffect=function(e,t){return ke().useLayoutEffect(e,t)},a.useMemo=function(e,t){return ke().useMemo(e,t)},a.useReducer=function(e,t,r){return ke().useReducer(e,t,r)},a.useRef=function(e){return ke().useRef(e)},a.useState=function(e){return ke().useState(e)},a.useSyncExternalStore=function(e,t,r){return ke().useSyncExternalStore(e,t,r)},a.useTransition=function(){return ke().useTransition()},a.version="18.2.0","undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop&&__REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error)}()),r.exports);var i=t.exports;const c=e=>{const{children:t,settings:r}=e,n={buffer:50,nextArrow:!1,prevArrow:!1,...r},[o,a]=i.useState(null),[u,c]=i.useState(0),[s,l]=i.useState(0),[f,p]=i.useState(0);let d=0;const y=i.useRef(),m=i.useRef();i.useEffect((()=>{p(t.length-1)}),[t.length]),i.useEffect((()=>{h()}),[y.current]),i.useEffect((()=>(window.addEventListener("resize",h),()=>{window.removeEventListener("resize",h)})),[void 0!==typeof window]),i.useEffect((()=>{v(s)}),[s]);const h=()=>{const e=y.current.children;if(e){let t=0;[...e].map((e=>t+=e.offsetWidth)),a(`${t}px`)}},v=e=>{if(u==e)return;const t=e>u?"next":"prev",r=y.current.children[e];if(!r)return;const o=r.getBoundingClientRect(),a=m.current.getBoundingClientRect();if(((e,t)=>e.left>t.left-n.buffer&&e.right<t.right+n.buffer)(o,a))return l("next"==t?s+1:s-1);{const e=((e,t,r="next")=>"next"==r?-1*(e.offsetLeft-t.width+e.offsetWidth):-1*e.offsetLeft)(r,a,t);y.current.style.transform=`translateX(${e}px)`}c(s)},b=e=>{let t=0;return t="next"==e?u+1<f?u+1:f:u-1>0?u-1:0,l(t)};return React.createElement("div",{className:"cardCarousel "+(o?"show":""),onTouchStart:e=>{d=e.changedTouches[0].clientX},onTouchEnd:e=>{let t=e.changedTouches[0].clientX-d;return t>100?b("prev"):-1*t>100?b("next"):void 0}},React.createElement("div",{className:"cardCarouselInner",ref:m},React.createElement("div",{ref:y,className:"carouselItems",style:{width:o||"99999px"}},t?.map(((e,t)=>React.createElement("div",{className:"carouselItemContent",key:t,"data-active":t===u},e))))),React.createElement("button",{className:"carousel-arrow prev-button "+(0==u?"disabled":"active"),onClick:()=>{b("prev")}},n?.nextArrow||"PREV"),React.createElement("button",{className:"carousel-arrow next-button "+(u==f?"disabled":"active"),onClick:()=>{b("next")}},n?.prevArrow||"NEXT"))};export{c as default};
