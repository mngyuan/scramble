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
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js");
var _jsxFileName = "/Users/phorust/git/scramble/components/FadeIn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var FadeIn = function FadeIn(props) {
  var _props$delay = props.delay,
      delay = _props$delay === void 0 ? 0 : _props$delay,
      children = props.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(delay === 0),
      delayPassed = _useState[0],
      setDelayPassed = _useState[1];

  if (delay !== 0) {
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      return setTimeout(function () {
        return setDelayPassed(true);
      }, delay);
    }, [delay]);
  }

  return __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["InView"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, function (_ref) {
    var inView = _ref.inView,
        ref = _ref.ref,
        entry = _ref.entry;
    return __jsx("div", {
      ref: ref,
      className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1754352228", [inView && delayPassed ? 1 : 0, inView && delayPassed ? 0 : 12]]]) + " " + "fade-in-on-load",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, delayPassed ? children : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1754352228",
      dynamic: [inView && delayPassed ? 1 : 0, inView && delayPassed ? 0 : 12],
      __self: this
    }, ".fade-in-on-load.__jsx-style-dynamic-selector{opacity:".concat(inView && delayPassed ? 1 : 0, ";-webkit-transition:opacity 0.6s ease,top 0.6s ease;transition:opacity 0.6s ease,top 0.6s ease;position:relative;top:").concat(inView && delayPassed ? 0 : 12, "px;will-change:opacity,top;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9jb21wb25lbnRzL0ZhZGVJbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlc0IsQUFHb0QscUNBQ08sOEZBQzFCLGtCQUNpQixtQ0FDVix3QkFDM0IiLCJmaWxlIjoiL1VzZXJzL3Bob3J1c3QvZ2l0L3NjcmFtYmxlL2NvbXBvbmVudHMvRmFkZUluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5cbmNvbnN0IEZhZGVJbiA9IHByb3BzID0+IHtcbiAgY29uc3Qge2RlbGF5ID0gMCwgY2hpbGRyZW59ID0gcHJvcHM7XG4gIGNvbnN0IFtkZWxheVBhc3NlZCwgc2V0RGVsYXlQYXNzZWRdID0gdXNlU3RhdGUoZGVsYXkgPT09IDApO1xuICBpZiAoZGVsYXkgIT09IDApIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4gc2V0VGltZW91dCgoKSA9PiBzZXREZWxheVBhc3NlZCh0cnVlKSwgZGVsYXkpLCBbZGVsYXldKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEluVmlldz5cbiAgICAgIHsoe2luVmlldywgcmVmLCBlbnRyeX0pID0+IChcbiAgICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiZmFkZS1pbi1vbi1sb2FkXCI+XG4gICAgICAgICAge2RlbGF5UGFzc2VkID8gY2hpbGRyZW4gOiBudWxsfVxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5mYWRlLWluLW9uLWxvYWQge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAke2luVmlldyAmJiBkZWxheVBhc3NlZCA/IDEgOiAwfTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UsIHRvcCAwLjZzIGVhc2U7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiAke2luVmlldyAmJiBkZWxheVBhc3NlZCA/IDAgOiAxMn1weDtcbiAgICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L0luVmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhZGVJbjtcbiJdfQ== */\n/*@ sourceURL=/Users/phorust/git/scramble/components/FadeIn.js */")));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FadeIn);

/***/ })

})
//# sourceMappingURL=index.js.bf315178880e0728fe0b.hot-update.js.map