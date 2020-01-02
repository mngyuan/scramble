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

var DELAY_AMT = 1000;

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

/***/ })

})
//# sourceMappingURL=index.js.4aeb35a03e955b974e90.hot-update.js.map