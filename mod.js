// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var t=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol:void 0,e="function"==typeof n?n.toStringTag:"";var f=r&&"symbol"==typeof Symbol.toStringTag?function(r){var n,f,a,y,u;if(null==r)return t.call(r);f=r[e],u=e,n=null!=(y=r)&&o.call(y,u);try{r[e]=void 0}catch(o){return t.call(r)}return a=t.call(r),n?r[e]=f:delete r[e],a}:function(r){return t.call(r)},a="function"==typeof ArrayBuffer;var y="function"==typeof Float64Array;var u="function"==typeof Float64Array?Float64Array:null;var i="function"==typeof Float64Array?Float64Array:void 0;var c=function(){var r,t,o;if("function"!=typeof u)return!1;try{t=new u([1,3.14,-3.14,NaN]),o=t,r=(y&&o instanceof Float64Array||"[object Float64Array]"===f(o))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?i:function(){throw new Error("not implemented")},l="function"==typeof ArrayBuffer?ArrayBuffer:null;var p="function"==typeof ArrayBuffer?ArrayBuffer:void 0;var v=function(){var r,t,o,n;if("function"!=typeof l)return!1;try{o=new l(16),n=o,(r=(a&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===f(n))&&"function"==typeof l.isView)&&((t=new c(o))[0]=-3.14,t[1]=NaN,r=r&&l.isView(t)&&16===o.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}()?p:function(){throw new Error(function(){var r,t=arguments,o="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)o+="&arg[]="+encodeURIComponent(t[r]);return o}("00N00"))};export{v as default};
//# sourceMappingURL=mod.js.map
