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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
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
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2735553523", [inView ? 1 : 0, inView ? 0 : 12]]]) + " " + "fade-in-on-load",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2735553523",
      dynamic: [inView ? 1 : 0, inView ? 0 : 12],
      __self: this
    }, ".fade-in-on-load.__jsx-style-dynamic-selector{opacity:".concat(inView ? 1 : 0, ";-webkit-transition:opacity 0.6s ease,top 0.6s ease;transition:opacity 0.6s ease,top 0.6s ease;position:relative;top:").concat(inView ? 0 : 12, "px;will-change:opacity,top;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9jb21wb25lbnRzL0ZhZGVJbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZb0IsQUFHa0QscUNBQ08sOEZBQzFCLGtCQUNpQixtQ0FDVix3QkFDM0IiLCJmaWxlIjoiL1VzZXJzL3Bob3J1c3QvZ2l0L3NjcmFtYmxlL2NvbXBvbmVudHMvRmFkZUluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBGYWRlSW4gPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHtkZWxheSA9IDAsIGNoaWxkcmVufSA9IHByb3BzO1xuICBjb25zdCBbZGVsYXlQYXNzZWQsIHNldERlbGF5UGFzc2VkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHNldFRpbWVvdXQoKCkgPT4gc2V0RGVsYXlQYXNzZWQodHJ1ZSksIGRlbGF5KSwgW2RlbGF5XSk7XG5cbiAgcmV0dXJuIChcbiAgPEluVmlldz5cbiAgICB7KHtpblZpZXcsIHJlZiwgZW50cnl9KSA9PiAoXG4gICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9XCJmYWRlLWluLW9uLWxvYWRcIj5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZhZGUtaW4tb24tbG9hZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAke2luVmlldyA/IDEgOiAwfTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBlYXNlLCB0b3AgMC42cyBlYXNlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAke2luVmlldyA/IDAgOiAxMn1weDtcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0b3A7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICA8L0luVmlldz5cbilcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhZGVJbjtcbiJdfQ== */\n/*@ sourceURL=/Users/phorust/git/scramble/components/FadeIn.js */")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FadeIn);

/***/ })

})
//# sourceMappingURL=index.js.3afe81cb0a4c0f2efabf.hot-update.js.map