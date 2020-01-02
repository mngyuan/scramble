webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FadeIn.js":
/*!******************************!*\
  !*** ./components/FadeIn.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/phorust/git/scramble/components/FadeIn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var FadeIn = function FadeIn(props) {
  var _props$delay = props.delay,
      delay = _props$delay === void 0 ? 0 : _props$delay,
      children = props.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(delay === 0),
      delayPassed = _useState[0],
      setDelayPassed = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    return setTimeout(function () {
      return setDelayPassed(true);
    }, delay);
  }, [delay]);
  return __jsx(InView, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, function (_ref) {
    var inView = _ref.inView,
        ref = _ref.ref,
        entry = _ref.entry;
    return __jsx("div", {
      ref: ref,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3242979269", [inView ? 1 : 0, inView ? 0 : 12]]]) + " " + "fade-in-on-load",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3242979269",
      dynamic: [inView ? 1 : 0, inView ? 0 : 12],
      __self: this
    }, ".fade-in-on-load.__jsx-style-dynamic-selector{opacity:".concat(inView ? 1 : 0, ";-webkit-transition:opacity 0.6s ease,top 0.6s ease;transition:opacity 0.6s ease,top 0.6s ease;position:relative;top:").concat(inView ? 0 : 12, "px;will-change:opacity,top;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9jb21wb25lbnRzL0ZhZGVJbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZc0IsQUFHb0QscUNBQ08sOEZBQzFCLGtCQUNpQixtQ0FDVix3QkFDM0IiLCJmaWxlIjoiL1VzZXJzL3Bob3J1c3QvZ2l0L3NjcmFtYmxlL2NvbXBvbmVudHMvRmFkZUluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBGYWRlSW4gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHtkZWxheSA9IDAsIGNoaWxkcmVufSA9IHByb3BzO1xuICBjb25zdCBbZGVsYXlQYXNzZWQsIHNldERlbGF5UGFzc2VkXSA9IHVzZVN0YXRlKGRlbGF5ID09PSAwKTtcbiAgdXNlRWZmZWN0KCgpID0+IHNldFRpbWVvdXQoKCkgPT4gc2V0RGVsYXlQYXNzZWQodHJ1ZSksIGRlbGF5KSwgW2RlbGF5XSk7XG5cbiAgcmV0dXJuIChcbiAgICA8SW5WaWV3PlxuICAgICAgeyh7aW5WaWV3LCByZWYsIGVudHJ5fSkgPT4gKFxuICAgICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9XCJmYWRlLWluLW9uLWxvYWRcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICAgLmZhZGUtaW4tb24tbG9hZCB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6ICR7aW5WaWV3ID8gMSA6IDB9O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZSwgdG9wIDAuNnMgZWFzZTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6ICR7aW5WaWV3ID8gMCA6IDEyfXB4O1xuICAgICAgICAgICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdG9wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvSW5WaWV3PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmFkZUluO1xuIl19 */\n/*@ sourceURL=/Users/phorust/git/scramble/components/FadeIn.js */")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FadeIn);

/***/ })

})
//# sourceMappingURL=index.js.3a13da6578f97ceb462b.hot-update.js.map