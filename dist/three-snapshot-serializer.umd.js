!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("three")):"function"==typeof define&&define.amd?define(["exports","three"],n):n(t.jestThree={},t.three)}(this,(function(t,n){"use strict";function e(t){return null!=t&&"object"==typeof t&&!0===t["@@functional/placeholder"]}function r(t){return function n(r){return 0===arguments.length||e(r)?n:t.apply(this,arguments)}}function u(t){return function n(u,o){switch(arguments.length){case 0:return n;case 1:return e(u)?n:r((function(n){return t(u,n)}));default:return e(u)&&e(o)?n:e(u)?r((function(n){return t(n,o)})):e(o)?r((function(n){return t(u,n)})):t(u,o)}}}function o(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,e){return n.apply(this,arguments)};case 3:return function(t,e,r){return n.apply(this,arguments)};case 4:return function(t,e,r,u){return n.apply(this,arguments)};case 5:return function(t,e,r,u,o){return n.apply(this,arguments)};case 6:return function(t,e,r,u,o,c){return n.apply(this,arguments)};case 7:return function(t,e,r,u,o,c,i){return n.apply(this,arguments)};case 8:return function(t,e,r,u,o,c,i,a){return n.apply(this,arguments)};case 9:return function(t,e,r,u,o,c,i,a,f){return n.apply(this,arguments)};case 10:return function(t,e,r,u,o,c,i,a,f,s){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}}function c(t,n,r){return function(){for(var u=[],i=0,a=t,f=0;f<n.length||i<arguments.length;){var s;f<n.length&&(!e(n[f])||i>=arguments.length)?s=n[f]:(s=arguments[i],i+=1),u[f]=s,e(s)||(a-=1),f+=1}return a<=0?r.apply(this,u):o(a,c(t,u,r))}}var i=u((function(t,n){return 1===t?r(n):o(t,c(t,[],n))}));function a(t){return function n(o,c,i){switch(arguments.length){case 0:return n;case 1:return e(o)?n:u((function(n,e){return t(o,n,e)}));case 2:return e(o)&&e(c)?n:e(o)?u((function(n,e){return t(n,c,e)})):e(c)?u((function(n,e){return t(o,n,e)})):r((function(n){return t(o,c,n)}));default:return e(o)&&e(c)&&e(i)?n:e(o)&&e(c)?u((function(n,e){return t(n,e,i)})):e(o)&&e(i)?u((function(n,e){return t(n,c,e)})):e(c)&&e(i)?u((function(n,e){return t(o,n,e)})):e(o)?r((function(n){return t(n,c,i)})):e(c)?r((function(n){return t(o,n,i)})):e(i)?r((function(n){return t(o,c,n)})):t(o,c,i)}}}var f=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)};function s(t){return null!=t&&"function"==typeof t["@@transducer/step"]}function l(t,n,e){return function(){if(0===arguments.length)return e();var r=Array.prototype.slice.call(arguments,0),u=r.pop();if(!f(u)){for(var o=0;o<t.length;){if("function"==typeof u[t[o]])return u[t[o]].apply(u,r);o+=1}if(s(u)){var c=n.apply(null,r);return c(u)}}return e.apply(this,arguments)}}var p={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}};function y(t,n){for(var e=0,r=n.length,u=Array(r);e<r;)u[e]=t(n[e]),e+=1;return u}function g(t){return"[object String]"===Object.prototype.toString.call(t)}var h=r((function(t){return!!f(t)||!!t&&("object"==typeof t&&(!g(t)&&(1===t.nodeType?!!t.length:0===t.length||t.length>0&&(t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1)))))})),d=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},t}();function v(t){return new d(t)}var b=u((function(t,n){return o(t.length,(function(){return t.apply(n,arguments)}))}));function j(t,n,e){for(var r=e.next();!r.done;){if((n=t["@@transducer/step"](n,r.value))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r=e.next()}return t["@@transducer/result"](n)}function O(t,n,e,r){return t["@@transducer/result"](e[r](b(t["@@transducer/step"],t),n))}var m="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";function S(t,n,e){if("function"==typeof t&&(t=v(t)),h(e))return function(t,n,e){for(var r=0,u=e.length;r<u;){if((n=t["@@transducer/step"](n,e[r]))&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}r+=1}return t["@@transducer/result"](n)}(t,n,e);if("function"==typeof e["fantasy-land/reduce"])return O(t,n,e,"fantasy-land/reduce");if(null!=e[m])return j(t,n,e[m]());if("function"==typeof e.next)return j(t,n,e);if("function"==typeof e.reduce)return O(t,n,e,"reduce");throw new TypeError("reduce: list must be array or iterable")}var w=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=p.init,t.prototype["@@transducer/result"]=p.result,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},t}(),A=u((function(t,n){return new w(t,n)}));function x(t,n){return Object.prototype.hasOwnProperty.call(n,t)}var U=Object.prototype.toString,q=function(){return"[object Arguments]"===U.call(arguments)?function(t){return"[object Arguments]"===U.call(t)}:function(t){return x("callee",t)}}(),E=!{toString:null}.propertyIsEnumerable("toString"),C=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],N=function(){return arguments.propertyIsEnumerable("length")}(),T=function(t,n){for(var e=0;e<t.length;){if(t[e]===n)return!0;e+=1}return!1},k="function"!=typeof Object.keys||N?r((function(t){if(Object(t)!==t)return[];var n,e,r=[],u=N&&q(t);for(n in t)!x(n,t)||u&&"length"===n||(r[r.length]=n);if(E)for(e=C.length-1;e>=0;)x(n=C[e],t)&&!T(r,n)&&(r[r.length]=n),e-=1;return r})):r((function(t){return Object(t)!==t?[]:Object.keys(t)})),F=u(l(["fantasy-land/map","map"],A,(function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return i(n.length,(function(){return t.call(this,n.apply(this,arguments))}));case"[object Object]":return S((function(e,r){return e[r]=t(n[r]),e}),{},k(n));default:return y(t,n)}}))),I=a(S);var D=r((function(t){return i(t.length,t)}));var M=r((function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}));function P(t,n){return function(){return n.call(this,t.apply(this,arguments))}}function z(t,n){return function(){var e=arguments.length;if(0===e)return n();var r=arguments[e-1];return f(r)||"function"!=typeof r[t]?n.apply(this,arguments):r[t].apply(r,Array.prototype.slice.call(arguments,0,e-1))}}var R=a(z("slice",(function(t,n,e){return Array.prototype.slice.call(e,t,n)}))),B=r(z("tail",R(1,1/0)));function _(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return o(arguments[0].length,I(P,arguments[0],B(arguments)))}function J(t){return t}var $=r(J);function H(t){for(var n,e=[];!(n=t.next()).done;)e.push(n.value);return e}function L(t,n,e){for(var r=0,u=e.length;r<u;){if(t(n,e[r]))return!0;r+=1}return!1}var W="function"==typeof Object.is?Object.is:function(t,n){return t===n?0!==t||1/t==1/n:t!=t&&n!=n};function X(t,n,e,r){var u=H(t);function o(t,n){return Y(t,n,e.slice(),r.slice())}return!L((function(t,n){return!L(o,n,t)}),H(n),u)}function Y(t,n,e,r){if(W(t,n))return!0;var u,o,c=M(t);if(c!==M(n))return!1;if(null==t||null==n)return!1;if("function"==typeof t["fantasy-land/equals"]||"function"==typeof n["fantasy-land/equals"])return"function"==typeof t["fantasy-land/equals"]&&t["fantasy-land/equals"](n)&&"function"==typeof n["fantasy-land/equals"]&&n["fantasy-land/equals"](t);if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(c){case"Arguments":case"Array":case"Object":if("function"==typeof t.constructor&&"Promise"===(u=t.constructor,null==(o=String(u).match(/^function (\w*)/))?"":o[1]))return t===n;break;case"Boolean":case"Number":case"String":if(typeof t!=typeof n||!W(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!W(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1}for(var i=e.length-1;i>=0;){if(e[i]===t)return r[i]===n;i-=1}switch(c){case"Map":return t.size===n.size&&X(t.entries(),n.entries(),e.concat([t]),r.concat([n]));case"Set":return t.size===n.size&&X(t.values(),n.values(),e.concat([t]),r.concat([n]));case"Arguments":case"Array":case"Object":case"Boolean":case"Number":case"String":case"Date":case"Error":case"RegExp":case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"ArrayBuffer":break;default:return!1}var a=k(t);if(a.length!==k(n).length)return!1;var f=e.concat([t]),s=r.concat([n]);for(i=a.length-1;i>=0;){var l=a[i];if(!x(l,n)||!Y(n[l],t[l],f,s))return!1;i-=1}return!0}var Z=u((function(t,n){return Y(t,n,[],[])}));function G(t,n){return function(t,n,e){var r,u;if("function"==typeof t.indexOf)switch(typeof n){case"number":if(0===n){for(r=1/n;e<t.length;){if(0===(u=t[e])&&1/u===r)return e;e+=1}return-1}if(n!=n){for(;e<t.length;){if("number"==typeof(u=t[e])&&u!=u)return e;e+=1}return-1}return t.indexOf(n,e);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,e);case"object":if(null===n)return t.indexOf(n,e)}for(;e<t.length;){if(Z(t[e],n))return e;e+=1}return-1}(n,t,0)>=0}function K(t){return'"'+t.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0").replace(/"/g,'\\"')+'"'}var Q=function(t){return(t<10?"0":"")+t},V="function"==typeof Date.prototype.toISOString?function(t){return t.toISOString()}:function(t){return t.getUTCFullYear()+"-"+Q(t.getUTCMonth()+1)+"-"+Q(t.getUTCDate())+"T"+Q(t.getUTCHours())+":"+Q(t.getUTCMinutes())+":"+Q(t.getUTCSeconds())+"."+(t.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"};var tt=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=p.init,t.prototype["@@transducer/result"]=p.result,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):t},t}(),nt=u(l(["filter"],u((function(t,n){return new tt(t,n)})),(function(t,n){return e=n,"[object Object]"===Object.prototype.toString.call(e)?S((function(e,r){return t(n[r])&&(e[r]=n[r]),e}),{},k(n)):function(t,n){for(var e=0,r=n.length,u=[];e<r;)t(n[e])&&(u[u.length]=n[e]),e+=1;return u}(t,n);var e}))),et=u((function(t,n){return nt((e=t,function(){return!e.apply(this,arguments)}),n);var e}));var rt=r((function(t){return function t(n,e){var r=function(r){var u=e.concat([n]);return G(r,u)?"<Circular>":t(r,u)},u=function(t,n){return y((function(n){return K(n)+": "+r(t[n])}),n.slice().sort())};switch(Object.prototype.toString.call(n)){case"[object Arguments]":return"(function() { return arguments; }("+y(r,n).join(", ")+"))";case"[object Array]":return"["+y(r,n).concat(u(n,et((function(t){return/^\d+$/.test(t)}),k(n)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof n?"new Boolean("+r(n.valueOf())+")":n.toString();case"[object Date]":return"new Date("+(isNaN(n.valueOf())?r(NaN):K(V(n)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof n?"new Number("+r(n.valueOf())+")":1/n==-1/0?"-0":n.toString(10);case"[object String]":return"object"==typeof n?"new String("+r(n.valueOf())+")":K(n);case"[object Undefined]":return"undefined";default:if("function"==typeof n.toString){var o=n.toString();if("[object Object]"!==o)return o}return"{"+u(n,k(n)).join(", ")+"}"}}(t,[])}));var ut=a((function(t,n,e){return i(Math.max(t.length,n.length,e.length),(function(){return t.apply(this,arguments)?n.apply(this,arguments):e.apply(this,arguments)}))})),ot=u((function(t,n){return null!=n&&n.constructor===t||n instanceof t}));var ct=u((function(t,n){if(e=t,"[object RegExp]"!==Object.prototype.toString.call(e))throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received "+rt(t));var e;return function(t){return new RegExp(t.source,(t.global?"g":"")+(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.sticky?"y":"")+(t.unicode?"u":""))}(t).test(n)})),it="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",at=(String.prototype.trim,D((function(t,n){return ut(ot(Object),F((function(n){return at(t,n)})),t)(n)}))),ft="00000000-0000-0000-0000-000000000000",st=/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i;var lt=D((function(t,n){return ut((function(t){return t.has(n)}),(function(t){return t.get(n)}),_((function(t){return t.set(n,(e=t.size,r=e.toString(16).toUpperCase(),""+ft.slice(0,-r.length)+r));var e,r}),(function(t){return t.get(n)})))(t)})),pt=function(t){var n=new Map;return at(ut(ct(st),lt(n),$),t)};function yt(t,n){void 0===n&&(n={});var e=n.shouldReplaceUUIDs,r=void 0===e||e,u=t.toJSON();return r?pt(u):u}function gt(t){return{test:function(t){return t instanceof n.Object3D},print:function(n,e){return e(yt(n,t))}}}var ht=gt();t.toJSON=yt,t.createSerializer=gt,t.default=ht,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=three-snapshot-serializer.umd.js.map