webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intersection-observer */ "./node_modules/intersection-observer/intersection-observer.js");
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(intersection_observer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-intersection-observer */ "./node_modules/react-intersection-observer/react-intersection-observer.esm.js");
/* harmony import */ var _components_Scramble__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Scramble */ "./components/Scramble.js");
var _jsxFileName = "/Users/phorust/git/scramble/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var FadeIn = function FadeIn(props) {
  return __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_3__["InView"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
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
        lineNumber: 9
      },
      __self: this
    }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2735553523",
      dynamic: [inView ? 1 : 0, inView ? 0 : 12],
      __self: this
    }, ".fade-in-on-load.__jsx-style-dynamic-selector{opacity:".concat(inView ? 1 : 0, ";-webkit-transition:opacity 0.6s ease,top 0.6s ease;transition:opacity 0.6s ease,top 0.6s ease;position:relative;top:").concat(inView ? 0 : 12, "px;will-change:opacity,top;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVb0IsQUFHa0QscUNBQ08sOEZBQzFCLGtCQUNpQixtQ0FDVix3QkFDM0IiLCJmaWxlIjoiL1VzZXJzL3Bob3J1c3QvZ2l0L3NjcmFtYmxlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuaW1wb3J0IHtJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5cbmltcG9ydCBTY3JhbWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1NjcmFtYmxlJztcblxuY29uc3QgRmFkZUluID0gcHJvcHMgPT4gKFxuICA8SW5WaWV3PlxuICAgIHsoe2luVmlldywgcmVmLCBlbnRyeX0pID0+IChcbiAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImZhZGUtaW4tb24tbG9hZFwiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZmFkZS1pbi1vbi1sb2FkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICR7aW5WaWV3ID8gMSA6IDB9O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UsIHRvcCAwLjZzIGVhc2U7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6ICR7aW5WaWV3ID8gMCA6IDEyfXB4O1xuICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRvcDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gIDwvSW5WaWV3PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGYWRlSW4+XG4gICAgICAgIDxTY3JhbWJsZSBzPVwiSGVsbG8sIG15IG5hbWUgaXMgS2V2aW4gTGVlLlwiIC8+XG4gICAgICA8L0ZhZGVJbj5cbiAgICAgIDxiciAvPlxuICAgICAgPEZhZGVJbj5cbiAgICAgICAgPFNjcmFtYmxlIHM9XCJJIGdvIGJ5IG15IENoaW5lc2UgbmFtZSwgTU5HWVVBTi5cIiAvPlxuICAgICAgPC9GYWRlSW4+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0lCTSBQbGV4IE1vbm8nLCAnU3BhY2UgTW9ubycsICdOb3RvIFNhbnMgTW9ubyBDSksgU0MnLFxuICAgICAgICAgICAgbW9ub3NwYWNlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/phorust/git/scramble/pages/index.js */")));
  });
};

function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(FadeIn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_Scramble__WEBPACK_IMPORTED_MODULE_4__["default"], {
    s: "Hello, my name is Kevin Lee.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("br", {
    className: "jsx-2912181215",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(FadeIn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_components_Scramble__WEBPACK_IMPORTED_MODULE_4__["default"], {
    s: "I go by my Chinese name, MNGYUAN.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2912181215",
    __self: this
  }, "html{font-family:'IBM Plex Mono','Space Mono','Noto Sans Mono CJK SC', monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQ3lCLEFBSXNCLDRFQUNiIiwiZmlsZSI6Ii9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcbmltcG9ydCB7SW5WaWV3fSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuXG5pbXBvcnQgU2NyYW1ibGUgZnJvbSAnLi4vY29tcG9uZW50cy9TY3JhbWJsZSc7XG5cbmNvbnN0IEZhZGVJbiA9IHByb3BzID0+IChcbiAgPEluVmlldz5cbiAgICB7KHtpblZpZXcsIHJlZiwgZW50cnl9KSA9PiAoXG4gICAgICA8ZGl2IHJlZj17cmVmfSBjbGFzc05hbWU9XCJmYWRlLWluLW9uLWxvYWRcIj5cbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZhZGUtaW4tb24tbG9hZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAke2luVmlldyA/IDEgOiAwfTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC42cyBlYXNlLCB0b3AgMC42cyBlYXNlO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgdG9wOiAke2luVmlldyA/IDAgOiAxMn1weDtcbiAgICAgICAgICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0b3A7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICA8L0luVmlldz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8RmFkZUluPlxuICAgICAgICA8U2NyYW1ibGUgcz1cIkhlbGxvLCBteSBuYW1lIGlzIEtldmluIExlZS5cIiAvPlxuICAgICAgPC9GYWRlSW4+XG4gICAgICA8YnIgLz5cbiAgICAgIDxGYWRlSW4+XG4gICAgICAgIDxTY3JhbWJsZSBzPVwiSSBnbyBieSBteSBDaGluZXNlIG5hbWUsIE1OR1lVQU4uXCIgLz5cbiAgICAgIDwvRmFkZUluPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJywgJ1NwYWNlIE1vbm8nLCAnTm90byBTYW5zIE1vbm8gQ0pLIFNDJyxcbiAgICAgICAgICAgIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/phorust/git/scramble/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.f369caebe6e3204b03dc.hot-update.js.map