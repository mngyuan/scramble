webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Scramble.js":
/*!********************************!*\
  !*** ./components/Scramble.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/phorust/git/scramble/components/Scramble.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var RAND_CHAR_POOL = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

var randC = function randC() {
  return RAND_CHAR_POOL.charAt(Math.floor(Math.random() * RAND_CHAR_POOL.length));
};

var randS = function randS(l) {
  return Array(l).fill(' ').map(randC).join('');
};

var INITIAL_TIMEOUT = 35;
var DECAY_FACTOR = 2.5;

var timeout = function timeout(n) {
  return INITIAL_TIMEOUT * Math.pow(n, DECAY_FACTOR) + Math.random() * INITIAL_TIMEOUT * Math.pow(n, DECAY_FACTOR);
};

var timerFunction = function timerFunction(cb, cbFinal) {
  return function () {
    cb();
    setTimeout(function () {
      cb();
      setTimeout(function () {
        cb();
        setTimeout(function () {
          cbFinal();
        }, timeout(3));
      }, timeout(2));
    }, timeout(1));
  };
};

var ScrambleC = function ScrambleC(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.c),
      c = _useState[0],
      setC = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var timer = setTimeout(timerFunction(function () {
      return setC(randC);
    }, function () {
      return setC(props.c);
    }), INITIAL_TIMEOUT + Math.random() * INITIAL_TIMEOUT);
    return function () {
      return clearTimeout(timer);
    };
  }, [props.c]);
  return __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1167243264", [c === props.c ? 1.0 : 0.5]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, c, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1167243264",
    dynamic: [c === props.c ? 1.0 : 0.5],
    __self: this
  }, "span.__jsx-style-dynamic-selector{font-family:monospace;opacity:".concat(c === props.c ? 1.0 : 0.5, ";}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9jb21wb25lbnRzL1NjcmFtYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDUyxBQUdtQyxzQkFDZSxxQ0FDdkMiLCJmaWxlIjoiL1VzZXJzL3Bob3J1c3QvZ2l0L3NjcmFtYmxlL2NvbXBvbmVudHMvU2NyYW1ibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFJBTkRfQ0hBUl9QT09MID1cbiAgJyFcIiMkJSZcXCcoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXFxcXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX4nO1xuY29uc3QgcmFuZEMgPSAoKSA9PlxuICBSQU5EX0NIQVJfUE9PTC5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogUkFORF9DSEFSX1BPT0wubGVuZ3RoKSk7XG5jb25zdCByYW5kUyA9IGwgPT5cbiAgQXJyYXkobClcbiAgICAuZmlsbCgnICcpXG4gICAgLm1hcChyYW5kQylcbiAgICAuam9pbignJyk7XG5cbmNvbnN0IElOSVRJQUxfVElNRU9VVCA9IDM1O1xuY29uc3QgREVDQVlfRkFDVE9SID0gMi41O1xuY29uc3QgdGltZW91dCA9IG4gPT5cbiAgSU5JVElBTF9USU1FT1VUICogbiAqKiBERUNBWV9GQUNUT1IgK1xuICBNYXRoLnJhbmRvbSgpICogSU5JVElBTF9USU1FT1VUICogbiAqKiBERUNBWV9GQUNUT1I7XG5cbmNvbnN0IHRpbWVyRnVuY3Rpb24gPSAoY2IsIGNiRmluYWwpID0+ICgpID0+IHtcbiAgY2IoKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY2IoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNiKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2JGaW5hbCgpO1xuICAgICAgfSwgdGltZW91dCgzKSk7XG4gICAgfSwgdGltZW91dCgyKSk7XG4gIH0sIHRpbWVvdXQoMSkpO1xufTtcblxuY29uc3QgU2NyYW1ibGVDID0gcHJvcHMgPT4ge1xuICBjb25zdCBbYywgc2V0Q10gPSB1c2VTdGF0ZShwcm9wcy5jKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoXG4gICAgICB0aW1lckZ1bmN0aW9uKFxuICAgICAgICAoKSA9PiBzZXRDKHJhbmRDKSxcbiAgICAgICAgKCkgPT4gc2V0Qyhwcm9wcy5jKSxcbiAgICAgICksXG4gICAgICBJTklUSUFMX1RJTUVPVVQgKyBNYXRoLnJhbmRvbSgpICogSU5JVElBTF9USU1FT1VULFxuICAgICk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtwcm9wcy5jXSk7XG4gIHJldHVybiAoXG4gICAgPHNwYW4+XG4gICAgICB7Y31cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICAgICAgb3BhY2l0eTogJHtjID09PSBwcm9wcy5jID8gMS4wIDogMC41fTtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn07XG5cbmNvbnN0IFNjcmFtYmxlID0gcHJvcHMgPT4ge1xuICBjb25zdCBjcyA9IEFycmF5LmZyb20ocHJvcHMucykubWFwKChjLCBpKSA9PiA8U2NyYW1ibGVDIGM9e2N9IGtleT17aX0gLz4pO1xuICBjb25zb2xlLmxvZyhjcyk7XG4gIHJldHVybiA8c3Bhbj57Y3N9PC9zcGFuPjtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmFtYmxlO1xuIl19 */\n/*@ sourceURL=/Users/phorust/git/scramble/components/Scramble.js */")));
};

var Scramble = function Scramble(props) {
  var cs = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(props.s).map(function (c, i) {
    return __jsx(ScrambleC, {
      c: c,
      key: i,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    });
  });

  console.log(cs);
  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, cs);
};

/* harmony default export */ __webpack_exports__["default"] = (Scramble);

/***/ })

})
//# sourceMappingURL=index.js.ad15acd0361c7a04b850.hot-update.js.map