webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FadeInGroup.js":
/*!***********************************!*\
  !*** ./components/FadeInGroup.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FadeIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FadeIn */ "./components/FadeIn.js");
var _jsxFileName = "/Users/phorust/git/scramble/components/FadeInGroup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var DELAY_AMT = 100;

var FadeInGroup = function FadeInGroup(props) {
  return props.children.map(function (node, i) {
    return __jsx(_FadeIn__WEBPACK_IMPORTED_MODULE_1__["default"], {
      delay: i * (props.delayAmount || DELAY_AMT),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, node);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (FadeInGroup);

/***/ }),

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
/* harmony import */ var _components_Scramble__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Scramble */ "./components/Scramble.js");
/* harmony import */ var _components_FadeInGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/FadeInGroup */ "./components/FadeInGroup.js");
var _jsxFileName = "/Users/phorust/git/scramble/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_FadeInGroup__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx(_components_Scramble__WEBPACK_IMPORTED_MODULE_3__["default"], {
    s: "Hello, my name is Kevin Lee.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), __jsx("br", {
    className: "jsx-1688547587",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), __jsx(_components_Scramble__WEBPACK_IMPORTED_MODULE_3__["default"], {
    s: "I go by my Chinese name, MNGYUAN.",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1688547587",
    __self: this
  }, "html{font-family:'Space Mono','Noto Sans Mono CJK SC',monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFheUIsQUFHd0UsMkRBQy9EIiwiZmlsZSI6Ii9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcblxuaW1wb3J0IFNjcmFtYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvU2NyYW1ibGUnO1xuaW1wb3J0IEZhZGVJbkdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvRmFkZUluR3JvdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZhZGVJbkdyb3VwPlxuICAgICAgICA8U2NyYW1ibGUgcz1cIkhlbGxvLCBteSBuYW1lIGlzIEtldmluIExlZS5cIiAvPlxuICAgICAgPGJyIC8+XG4gICAgICAgIDxTY3JhbWJsZSBzPVwiSSBnbyBieSBteSBDaGluZXNlIG5hbWUsIE1OR1lVQU4uXCIgLz5cbiAgICAgIDwvRmFkZUluR3JvdXA+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ1NwYWNlIE1vbm8nLCAnTm90byBTYW5zIE1vbm8gQ0pLIFNDJywgbW9ub3NwYWNlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59XG4iXX0= */\n/*@ sourceURL=/Users/phorust/git/scramble/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.424c0ebb1d3377bb53d4.hot-update.js.map