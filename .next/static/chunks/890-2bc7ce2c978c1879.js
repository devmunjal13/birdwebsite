"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{4890:function(r,n,t){function e(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}t.d(n,{UY:function(){return p},MT:function(){return c}});var o="function"===typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},i={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function u(r){if("object"!==typeof r||null===r)return!1;for(var n=r;null!==Object.getPrototypeOf(n);)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(r)===n}function c(r,n,t){var f;if("function"===typeof n&&"function"===typeof t||"function"===typeof t&&"function"===typeof arguments[3])throw new Error(e(0));if("function"===typeof n&&"undefined"===typeof t&&(t=n,n=void 0),"undefined"!==typeof t){if("function"!==typeof t)throw new Error(e(1));return t(c)(r,n)}if("function"!==typeof r)throw new Error(e(2));var p=r,y=n,h=[],s=h,w=!1;function d(){s===h&&(s=h.slice())}function l(){if(w)throw new Error(e(3));return y}function E(r){if("function"!==typeof r)throw new Error(e(4));if(w)throw new Error(e(5));var n=!0;return d(),s.push(r),function(){if(n){if(w)throw new Error(e(6));n=!1,d();var t=s.indexOf(r);s.splice(t,1),h=null}}}function a(r){if(!u(r))throw new Error(e(7));if("undefined"===typeof r.type)throw new Error(e(8));if(w)throw new Error(e(9));try{w=!0,y=p(y,r)}finally{w=!1}for(var n=h=s,t=0;t<n.length;t++){(0,n[t])()}return r}function b(r){if("function"!==typeof r)throw new Error(e(10));p=r,a({type:i.REPLACE})}function v(){var r,n=E;return(r={subscribe:function(r){if("object"!==typeof r||null===r)throw new Error(e(11));function t(){r.next&&r.next(l())}return t(),{unsubscribe:n(t)}}})[o]=function(){return this},r}return a({type:i.INIT}),(f={dispatch:a,subscribe:E,getState:l,replaceReducer:b})[o]=v,f}function p(r){for(var n=Object.keys(r),t={},o=0;o<n.length;o++){var f=n[o];0,"function"===typeof r[f]&&(t[f]=r[f])}var u,c=Object.keys(t);try{!function(r){Object.keys(r).forEach((function(n){var t=r[n];if("undefined"===typeof t(void 0,{type:i.INIT}))throw new Error(e(12));if("undefined"===typeof t(void 0,{type:i.PROBE_UNKNOWN_ACTION()}))throw new Error(e(13))}))}(t)}catch(p){u=p}return function(r,n){if(void 0===r&&(r={}),u)throw u;for(var o=!1,f={},i=0;i<c.length;i++){var p=c[i],y=t[p],h=r[p],s=y(h,n);if("undefined"===typeof s){n&&n.type;throw new Error(e(14))}f[p]=s,o=o||s!==h}return(o=o||c.length!==Object.keys(r).length)?f:r}}}}]);