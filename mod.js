// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return r&&"symbol"==typeof Symbol.toStringTag},n=Object.prototype.toString,o=n;var e=function(r){return o.call(r)},f=Object.prototype.hasOwnProperty;var a=function(r,t){return null!=r&&f.call(r,t)},u="function"==typeof Symbol?Symbol.toStringTag:"",y=a,c=u,i=n;var l,p=e,v=function(r){var t,n,o;if(null==r)return i.call(r);n=r[c],t=y(r,c);try{r[c]=void 0}catch(t){return i.call(r)}return o=i.call(r),t?r[c]=n:delete r[c],o},A=(l=t()?v:p,l),b="function"==typeof ArrayBuffer;var m=function(r){return b&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===A(r)},w=l,s="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null,d=function(r){return s&&r instanceof Float64Array||"[object Float64Array]"===w(r)},h=S;var B,F="function"==typeof Float64Array?Float64Array:void 0,g=function(){throw new Error("not implemented")};B=function(){var r,t;if("function"!=typeof h)return!1;try{t=new h([1,3.14,-3.14,NaN]),r=d(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?F:g;var j="function"==typeof ArrayBuffer?ArrayBuffer:null,N=m,O=B,E=j;var T="function"==typeof ArrayBuffer?ArrayBuffer:void 0,V=function(){throw new Error("not implemented")},x=function(){var r,t,n;if("function"!=typeof E)return!1;try{n=new E(16),(r=N(n)&&"function"==typeof E.isView)&&((t=new O(n))[0]=-3.14,t[1]=NaN,r=r&&E.isView(t)&&16===n.byteLength&&-3.14===t[0]&&t[1]!=t[1])}catch(t){r=!1}return r}()?T:V;export{x as default};
//# sourceMappingURL=mod.js.map
