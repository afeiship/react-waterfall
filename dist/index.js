/*!
 *  name: @jswork/react-waterfall
 *  description: Waterfall component for react.
 *  homepage: https://github.com/afeiship/react-waterfall#readme
 *  version: 1.0.0
 *  date: 2021-03-06T05:30:18.214Z
 *  license: MIT
 */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ReactWaterfall=e():t.ReactWaterfall=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e){t.exports=require("prop-types")},function(t,e){t.exports=require("react")},function(t,e){t.exports=require("classnames")},function(t,e){t.exports=require("@jswork/noop")},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n.n(r),u=n(0),i=n.n(u),c=n(2),f=n.n(c),a=n(3),l=n.n(a);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function p(){return(p=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function y(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function m(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function d(t,e){return(d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=j(t);if(e){var o=j(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return v(this,n)}}function v(t,e){return!e||"object"!==s(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var O=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(i,t);var e,n,r,u=h(i);function i(){return m(this,i),u.apply(this,arguments)}return e=i,(n=[{key:"justify",get:function(){var t=this.props,e=t.column;return t.items.length>=e}},{key:"items",get:function(){var t=this.props,e=t.column,n=t.items,r=[];return n.forEach((function(t,n){var o=n%e;r[o]=r[o]||[],r[o].push(t)})),r}},{key:"children",get:function(){for(var t=this,e=this.props,n=e.template,r=e.column,u=e.items,i=[],c=this.justify?r:u.length,f=function(e){i.push(o.a.createElement("div",{key:e,className:"".concat("react-waterfall","__column is-column")},t.items[e].map((function(t,r){return n({item:t,index:r,column:e})}))),"\n")},a=0;a<c;a++)f(a);return i}},{key:"render",value:function(){var t=this.props,e=t.className,n=(t.children,t.items,t.template,t.column,y(t,["className","children","items","template","column"]));return o.a.createElement("div",p({"data-component":"react-waterfall",className:f()({"is-justify":this.justify},{"is-aside":!this.justify},"react-waterfall",e)},n),this.children)}}])&&b(e.prototype,n),r&&b(e,r),i}(r.Component);O.displayName="react-waterfall",O.propTypes={className:i.a.string,items:i.a.array,template:i.a.func,column:i.a.number},O.defaultProps={items:[],template:l.a,column:3};e.default=O}])}));
//# sourceMappingURL=index.js.map