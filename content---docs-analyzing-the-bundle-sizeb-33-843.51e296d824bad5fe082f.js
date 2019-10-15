/*! For license information please see content---docs-analyzing-the-bundle-sizeb-33-843.51e296d824bad5fe082f.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{129:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r),u=o.a.createContext({}),a=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},c=function(e){var t=a(e.components);return o.a.createElement(u.Provider,{value:t},e.children)};var l="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,c=e.parentName,l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),f=a(n),p=r,s=f[c+"."+p]||f[p]||i[p]||u;return n?o.a.createElement(s,Object.assign({},{ref:t},l,{components:n})):o.a.createElement(s,Object.assign({},{ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,a=new Array(u);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[l]="string"==typeof e?e:r,a[1]=c;for(var p=2;p<u;p++)a[p]=n[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},130:function(e,t,n){"use strict";e.exports=n(131)},131:function(e,t,n){"use strict";var r=n(132),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.concurrent_mode"):60111,y=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113,b=o?Symbol.for("react.memo"):60115,m=o?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function h(e){for(var t=arguments.length-1,n="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=0;r<t;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);!function(e,t,n,r,o,u,a,c){if(!e){if(e=void 0,void 0===t)e=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,u,a,c],i=0;(e=Error(t.replace(/%s/g,(function(){return l[i++]})))).name="Invariant Violation"}throw e.framesToPop=1,e}}(!1,"Minified React error #"+e+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",n)}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||g}function w(){}function S(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||g}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){"object"!=typeof e&&"function"!=typeof e&&null!=e&&h("85"),this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=j.prototype;var x=S.prototype=new w;x.constructor=S,r(x,j.prototype),x.isPureReactComponent=!0;var _={current:null},k={current:null},C=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function P(e,t,n){var r=void 0,o={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)C.call(t,r)&&!E.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var i=Array(l),f=0;f<l;f++)i[f]=arguments[f+2];o.children=i}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:u,type:e,key:a,ref:c,props:o,_owner:k.current}}function $(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var N=/\/+/g,R=[];function T(e,t,n,r){if(R.length){var o=R.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function z(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>R.length&&R.push(e)}function A(e,t,n){return null==e?0:function e(t,n,r,o){var c=typeof t;"undefined"!==c&&"boolean"!==c||(t=null);var l=!1;if(null===t)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case u:case a:l=!0}}if(l)return r(o,t,""===n?"."+M(t,0):n),1;if(l=0,n=""===n?".":n+":",Array.isArray(t))for(var i=0;i<t.length;i++){var f=n+M(c=t[i],i);l+=e(c,f,r,o)}else if(null===t||"object"!=typeof t?f=null:f="function"==typeof(f=v&&t[v]||t["@@iterator"])?f:null,"function"==typeof f)for(t=f.call(t),i=0;!(c=t.next()).done;)l+=e(c=c.value,f=n+M(c,i++),r,o);else"object"===c&&h("31","[object Object]"===(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r,"");return l}(e,"",t,n)}function M(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function q(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?D(e,r,n,(function(e){return e})):null!=e&&($(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(N,"$&/")+"/")+n)),r.push(e))}function D(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(N,"$&/")+"/"),A(e,q,t=T(t,u,r,o)),z(t)}function U(){var e=_.current;return null===e&&h("321"),e}var F={Children:{map:function(e,t,n){if(null==e)return e;var r=[];return D(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;A(e,I,t=T(null,null,t,n)),z(t)},count:function(e){return A(e,(function(){return null}),null)},toArray:function(e){var t=[];return D(e,t,null,(function(e){return e})),t},only:function(e){return $(e)||h("143"),e}},createRef:function(){return{current:null}},Component:j,PureComponent:S,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:y,render:e}},lazy:function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return U().useCallback(e,t)},useContext:function(e,t){return U().useContext(e,t)},useEffect:function(e,t){return U().useEffect(e,t)},useImperativeHandle:function(e,t,n){return U().useImperativeHandle(e,t,n)},useDebugValue:function(){},useLayoutEffect:function(e,t){return U().useLayoutEffect(e,t)},useMemo:function(e,t){return U().useMemo(e,t)},useReducer:function(e,t,n){return U().useReducer(e,t,n)},useRef:function(e){return U().useRef(e)},useState:function(e){return U().useState(e)},Fragment:c,StrictMode:l,Suspense:d,createElement:P,cloneElement:function(e,t,n){null==e&&h("267",e);var o=void 0,a=r({},e.props),c=e.key,l=e.ref,i=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,i=k.current),void 0!==t.key&&(c=""+t.key);var f=void 0;for(o in e.type&&e.type.defaultProps&&(f=e.type.defaultProps),t)C.call(t,o)&&!E.hasOwnProperty(o)&&(a[o]=void 0===t[o]&&void 0!==f?f[o]:t[o])}if(1===(o=arguments.length-2))a.children=n;else if(1<o){f=Array(o);for(var p=0;p<o;p++)f[p]=arguments[p+2];a.children=f}return{$$typeof:u,type:e.type,key:c,ref:l,props:a,_owner:i}},createFactory:function(e){var t=P.bind(null,e);return t.type=e,t},isValidElement:$,version:"16.8.6",unstable_ConcurrentMode:s,unstable_Profiler:i,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:_,ReactCurrentOwner:k,assign:r}},L={default:F},V=L&&F||L;e.exports=V.default||V},132:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,c,l=a(e),i=1;i<arguments.length;i++){for(var f in n=Object(arguments[i]))o.call(n,f)&&(l[f]=n[f]);if(r){c=r(n);for(var p=0;p<c.length;p++)u.call(n,c[p])&&(l[c[p]]=n[c[p]])}}return l}},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return f}));n(130);var r=n(129);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a={id:"analyzing-the-bundle-size",title:"Analyzing the Bundle Size",sidebar_label:"Analyzing Bundle Size"},c=[],l={rightToc:c},i="wrapper";function f(e){var t=e.components,n=u(e,["components"]);return Object(r.b)(i,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",o({parentName:"p"},{href:"https://www.npmjs.com/package/source-map-explorer"}),"Source map explorer")," analyzes\nJavaScript bundles using the source maps. This helps you understand where code\nbloat is coming from."),Object(r.b)("p",null,"To add Source map explorer to a Create React App project, follow these steps:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-sh"}),"npm install --save source-map-explorer\n")),Object(r.b)("p",null,"Alternatively you may use ",Object(r.b)("inlineCode",{parentName:"p"},"yarn"),":"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-sh"}),"yarn add source-map-explorer\n")),Object(r.b)("p",null,"Then in ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),", add the following line to ",Object(r.b)("inlineCode",{parentName:"p"},"scripts"),":"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-diff"}),'   "scripts": {\n+    "analyze": "source-map-explorer \'build/static/js/*.js\'",\n     "start": "react-scripts start",\n     "build": "react-scripts build",\n     "test": "react-scripts test",\n')),Object(r.b)("p",null,"Then to analyze the bundle run the production build then run the analyze\nscript."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-sh"}),"npm run build\nnpm run analyze\n")))}f.isMDXComponent=!0}}]);