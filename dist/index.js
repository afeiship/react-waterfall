!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("prop-types"),require("react"),require("classnames"),require("@feizheng/noop"),require("react-dom"),require("object-assign")):"function"==typeof define&&define.amd?define(["prop-types","react","classnames","@feizheng/noop","react-dom","object-assign"],t):"object"==typeof exports?exports.ReactWaterfall=t(require("prop-types"),require("react"),require("classnames"),require("@feizheng/noop"),require("react-dom"),require("object-assign")):e.ReactWaterfall=t(e["prop-types"],e.react,e.classnames,e["@feizheng/noop"],e["react-dom"],e["object-assign"])}(window,(function(e,t,r,n,o,i){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},function(e,t){e.exports=i},function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),i=(r(4),r(0)),u=r.n(i),c=r(2),a=r.n(c),f=r(3),l=r.n(f);r(5);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),b(this,d(t).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this.props,t=e.className,r=(e.children,e.items,e.template,e.column,m(e,["className","children","items","template","column"]));return o.a.createElement("div",p({"data-component":"react-waterfall",className:a()("react-waterfall",t)},r),this.children)}},{key:"items",get:function(){var e=this.props,t=e.column,r=e.items,n=[];return r.forEach((function(e,r){var o=r%t;n[o]=n[o]||[],n[o].push(e)})),n}},{key:"children",get:function(){for(var e=this,t=this.props,r=t.template,n=t.column,i=t.items,u=[],c=i.length<n?i.length:n,a=function(t){u.push(o.a.createElement("div",{key:t,className:"".concat("react-waterfall","__column is-column")},e.items[t].map((function(e,n){return r({item:e,index:n,column:t})}))),"\n")},f=0;f<c;f++)a(f);return u}}])&&y(r.prototype,n),i&&y(r,i),t}(n.Component);g.displayName="react-waterfall",g.propTypes={className:u.a.string,items:u.a.array,template:u.a.func,column:u.a.number},g.defaultProps={items:[],template:l.a,column:3};t.default=g}])}));