module.exports=function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e,n){t.exports=n(3)()},function(t,e){t.exports=require("react")},function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),i=n(0),c=n.n(i);function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function l(t){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var p=function(t){var e=t.width,n=t.height,o=void 0===n?"3":n,r=t.color,i=void 0===r?"red":r,c=t.duration,u=void 0===c?"1":c,a=t.zIndex,l=void 0===a?"99":a;return{position:"fixed",top:0,margin:0,padding:0,backgroundColor:i,height:"".concat(o,"px"),width:e,transitionProperty:"width",transitionDuration:"".concat(u,"s"),transitionTimingFunction:"ease-out",zIndex:l}},d=function(t){var e=window.pageYOffset||document.body.scrollTop,n=window.innerHeight||document.body.clientHeight,o=Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)-n,r=Math.floor(e/o*100);return t&&console.log({scrollPos:r}),r},y=function(t){function e(t){var n,o,r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),o=this,(n=!(r=l(e).call(this,t))||"object"!==u(r)&&"function"!=typeof r?s(o):r).state={width:"0"},n.getScroll=n.getScroll.bind(s(n)),n}var n,o,i;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(e,t),n=e,(o=[{key:"getScroll",value:function(){var t=this.props.debug;d()>0?this.setState({width:"".concat(d(t),"%")}):this.setState({width:"0"})}},{key:"componentDidMount",value:function(){var t=this.props.debug;try{window.addEventListener("scroll",this.getScroll)}catch(e){t&&console.log(e)}}},{key:"componentWillUnmount",value:function(){var t=this.props.debug;try{window.removeEventListener("scroll",this.getScroll)}catch(e){t&&console.log(e)}}},{key:"render",value:function(){var t=this.state.width,e=this.props,n=e.height,o=e.color,i=e.duration,c=e.zIndex;return r.a.createElement("div",{style:p({width:t,height:n,color:o,duration:i,zIndex:c})})}}])&&a(n.prototype,o),i&&a(n,i),e}(o.Component);y.propTypes={debug:c.a.bool,height:c.a.string,duration:c.a.string,color:c.a.string,zIndex:c.a.string},e.default=y},function(t,e,n){"use strict";var o=n(4);function r(){}function i(){}i.resetWarningCache=r,t.exports=function(){function t(t,e,n,r,i,c){if(c!==o){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}]);