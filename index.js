// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,n=Object.prototype.hasOwnProperty,e="function"==typeof Symbol?Symbol:void 0,f="function"==typeof e?e.toStringTag:"",i=o&&"symbol"==typeof Symbol.toStringTag?function(t){var o,e,i,u,a;if(null==t)return r.call(t);e=t[f],a=f,o=null!=(u=t)&&n.call(u,a);try{t[f]=void 0}catch(o){return r.call(t)}return i=r.call(t),o?t[f]=e:delete t[f],i}:function(t){return r.call(t)},u="function"==typeof ArrayBuffer,a="function"==typeof Float64Array,y="function"==typeof Float64Array?Float64Array:null,l="function"==typeof Float64Array?Float64Array:void 0,c=function(){var t,o,r;if("function"!=typeof y)return!1;try{o=new y([1,3.14,-3.14,NaN]),r=o,t=(a&&r instanceof Float64Array||"[object Float64Array]"===i(r))&&1===o[0]&&3.14===o[1]&&-3.14===o[2]&&o[3]!=o[3]}catch(o){t=!1}return t}()?l:function(){throw new Error("not implemented")},p="function"==typeof ArrayBuffer?ArrayBuffer:null,d="function"==typeof ArrayBuffer?ArrayBuffer:void 0;return t=function(){var t,o,r,n;if("function"!=typeof p)return!1;try{r=new p(16),n=r,(t=(u&&n instanceof ArrayBuffer||"[object ArrayBuffer]"===i(n))&&"function"==typeof p.isView)&&((o=new c(r))[0]=-3.14,o[1]=NaN,t=t&&p.isView(o)&&16===r.byteLength&&-3.14===o[0]&&o[1]!=o[1])}catch(o){t=!1}return t}()?d:function(){throw new Error(function(){var t,o=arguments,r="https://stdlib.io/e/"+o[0]+"?";for(t=1;t<o.length;t++)r+="&arg[]="+encodeURIComponent(o[t]);return r}("00N00"))},t},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).ArrayBuffer=o();
//# sourceMappingURL=index.js.map