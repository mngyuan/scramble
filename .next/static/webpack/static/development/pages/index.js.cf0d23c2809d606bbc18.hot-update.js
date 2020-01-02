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
    }, ".fade-in-on-load.__jsx-style-dynamic-selector{opacity:".concat(inView ? 1 : 0, ";-webkit-transition:opacity 0.6s ease,top 0.6s ease;transition:opacity 0.6s ease,top 0.6s ease;position:relative;top:").concat(inView ? 0 : 12, "px;will-change:opacity,top;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVb0IsQUFHa0QscUNBQ08sOEZBQzFCLGtCQUNpQixtQ0FDVix3QkFDM0IiLCJmaWxlIjoiL1VzZXJzL3Bob3J1c3QvZ2l0L3NjcmFtYmxlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdpbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuaW1wb3J0IHtJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5cbmltcG9ydCBTY3JhbWJsZSBmcm9tICcuLi9jb21wb25lbnRzL1NjcmFtYmxlJztcblxuY29uc3QgRmFkZUluID0gKHByb3BzKSA9PiAoXG4gIDxJblZpZXc+XG4gICAgeyh7aW5WaWV3LCByZWYsIGVudHJ5fSkgPT4gKFxuICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiZmFkZS1pbi1vbi1sb2FkXCI+XG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5mYWRlLWluLW9uLWxvYWQge1xuICAgICAgICAgICAgb3BhY2l0eTogJHtpblZpZXcgPyAxIDogMH07XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZSwgdG9wIDAuNnMgZWFzZTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogJHtpblZpZXcgPyAwIDogMTJ9cHg7XG4gICAgICAgICAgICB3aWxsLWNoYW5nZTogb3BhY2l0eSwgdG9wO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgPC9JblZpZXc+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZhZGVJbj5cbiAgICAgICAgPFNjcmFtYmxlIHM9XCJIZWxsbywgbXkgbmFtZSBpcyBLZXZpbiBMZWUuXCIgLz5cbiAgICAgIDwvRmFkZUluPlxuICAgICAgPEZhZGVJbj5cbiAgICAgICAgPFNjcmFtYmxlIHM9XCJJIGdvIGJ5IG15IENoaW5lc2UgbmFtZSwg5qKm6L+cIE1OR1lVQU4uXCIgLz5cbiAgICAgIDwvRmFkZUluPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdJQk0gUGxleCBNb25vJywgJ1NwYWNlIE1vbm8nLCAnTm90byBTYW5zIE1vbm8gQ0pLIFNDJyxcbiAgICAgICAgICAgIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufVxuIl19 */\n/*@ sourceURL=/Users/phorust/git/scramble/pages/index.js */")));
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
  })), __jsx(FadeIn, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_Scramble__WEBPACK_IMPORTED_MODULE_4__["default"], {
    s: "I go by my Chinese name, \u68A6\u8FDC MNGYUAN.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2912181215",
    __self: this
  }, "html{font-family:'IBM Plex Mono','Space Mono','Noto Sans Mono CJK SC', monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ3lCLEFBSXNCLDRFQUNiIiwiZmlsZSI6Ii9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcbmltcG9ydCB7SW5WaWV3fSBmcm9tICdyZWFjdC1pbnRlcnNlY3Rpb24tb2JzZXJ2ZXInO1xuXG5pbXBvcnQgU2NyYW1ibGUgZnJvbSAnLi4vY29tcG9uZW50cy9TY3JhbWJsZSc7XG5cbmNvbnN0IEZhZGVJbiA9IChwcm9wcykgPT4gKFxuICA8SW5WaWV3PlxuICAgIHsoe2luVmlldywgcmVmLCBlbnRyeX0pID0+IChcbiAgICAgIDxkaXYgcmVmPXtyZWZ9IGNsYXNzTmFtZT1cImZhZGUtaW4tb24tbG9hZFwiPlxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZmFkZS1pbi1vbi1sb2FkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6ICR7aW5WaWV3ID8gMSA6IDB9O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UsIHRvcCAwLjZzIGVhc2U7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6ICR7aW5WaWV3ID8gMCA6IDEyfXB4O1xuICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRvcDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gIDwvSW5WaWV3PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXgoKSB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxGYWRlSW4+XG4gICAgICAgIDxTY3JhbWJsZSBzPVwiSGVsbG8sIG15IG5hbWUgaXMgS2V2aW4gTGVlLlwiIC8+XG4gICAgICA8L0ZhZGVJbj5cbiAgICAgIDxGYWRlSW4+XG4gICAgICAgIDxTY3JhbWJsZSBzPVwiSSBnbyBieSBteSBDaGluZXNlIG5hbWUsIOaipui/nCBNTkdZVUFOLlwiIC8+XG4gICAgICA8L0ZhZGVJbj5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnSUJNIFBsZXggTW9ubycsICdTcGFjZSBNb25vJywgJ05vdG8gU2FucyBNb25vIENKSyBTQycsXG4gICAgICAgICAgICBtb25vc3BhY2U7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/phorust/git/scramble/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.cf0d23c2809d606bbc18.hot-update.js.map