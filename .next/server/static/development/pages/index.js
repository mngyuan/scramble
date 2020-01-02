module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/FadeIn.js":
/*!******************************!*\
  !*** ./components/FadeIn.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-intersection-observer */ "react-intersection-observer");
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/phorust/git/scramble/components/FadeIn.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const FadeIn = props => {
  const {
    delay = 0,
    children
  } = props;
  const {
    0: delayPassed,
    1: setDelayPassed
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(delay === 0);

  if (delay !== 0) {
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => setTimeout(() => setDelayPassed(true), delay), [delay]);
  }

  return __jsx(react_intersection_observer__WEBPACK_IMPORTED_MODULE_2__["InView"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, ({
    inView,
    ref,
    entry
  }) => __jsx("div", {
    ref: ref,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1754352228", [inView && delayPassed ? 1 : 0, inView && delayPassed ? 0 : 12]]]) + " " + "fade-in-on-load",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, delayPassed ? children : null, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1754352228",
    dynamic: [inView && delayPassed ? 1 : 0, inView && delayPassed ? 0 : 12],
    __self: undefined
  }, `.fade-in-on-load.__jsx-style-dynamic-selector{opacity:${inView && delayPassed ? 1 : 0};-webkit-transition:opacity 0.6s ease,top 0.6s ease;transition:opacity 0.6s ease,top 0.6s ease;position:relative;top:${inView && delayPassed ? 0 : 12}px;will-change:opacity,top;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9jb21wb25lbnRzL0ZhZGVJbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlc0IsQUFHb0QscUNBQ08sOEZBQzFCLGtCQUNpQixtQ0FDVix3QkFDM0IiLCJmaWxlIjoiL1VzZXJzL3Bob3J1c3QvZ2l0L3NjcmFtYmxlL2NvbXBvbmVudHMvRmFkZUluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtJblZpZXd9IGZyb20gJ3JlYWN0LWludGVyc2VjdGlvbi1vYnNlcnZlcic7XG5cbmNvbnN0IEZhZGVJbiA9IHByb3BzID0+IHtcbiAgY29uc3Qge2RlbGF5ID0gMCwgY2hpbGRyZW59ID0gcHJvcHM7XG4gIGNvbnN0IFtkZWxheVBhc3NlZCwgc2V0RGVsYXlQYXNzZWRdID0gdXNlU3RhdGUoZGVsYXkgPT09IDApO1xuICBpZiAoZGVsYXkgIT09IDApIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4gc2V0VGltZW91dCgoKSA9PiBzZXREZWxheVBhc3NlZCh0cnVlKSwgZGVsYXkpLCBbZGVsYXldKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPEluVmlldz5cbiAgICAgIHsoe2luVmlldywgcmVmLCBlbnRyeX0pID0+IChcbiAgICAgICAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiZmFkZS1pbi1vbi1sb2FkXCI+XG4gICAgICAgICAge2RlbGF5UGFzc2VkID8gY2hpbGRyZW4gOiBudWxsfVxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgIC5mYWRlLWluLW9uLWxvYWQge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAke2luVmlldyAmJiBkZWxheVBhc3NlZCA/IDEgOiAwfTtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjZzIGVhc2UsIHRvcCAwLjZzIGVhc2U7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgdG9wOiAke2luVmlldyAmJiBkZWxheVBhc3NlZCA/IDAgOiAxMn1weDtcbiAgICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L0luVmlldz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZhZGVJbjtcbiJdfQ== */
/*@ sourceURL=/Users/phorust/git/scramble/components/FadeIn.js */`)));
};

/* harmony default export */ __webpack_exports__["default"] = (FadeIn);

/***/ }),

/***/ "./components/FadeInGroup.js":
/*!***********************************!*\
  !*** ./components/FadeInGroup.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FadeIn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FadeIn */ "./components/FadeIn.js");
var _jsxFileName = "/Users/phorust/git/scramble/components/FadeInGroup.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const DELAY_AMT = 300;

const FadeInGroup = props => props.children.map((node, i) => __jsx(_FadeIn__WEBPACK_IMPORTED_MODULE_1__["default"], {
  delay: i * (props.delayAmount || DELAY_AMT),
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, node));

/* harmony default export */ __webpack_exports__["default"] = (FadeInGroup);

/***/ }),

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/phorust/git/scramble/components/Scramble.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

const RAND_CHAR_POOL = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';

const randC = () => RAND_CHAR_POOL.charAt(Math.floor(Math.random() * RAND_CHAR_POOL.length));

const randS = l => Array(l).fill(' ').map(randC).join('');

const INITIAL_TIMEOUT = 35;
const DECAY_FACTOR = 2.5;

const timeout = n => INITIAL_TIMEOUT * n ** DECAY_FACTOR + Math.random() * INITIAL_TIMEOUT * n ** DECAY_FACTOR;

const timerFunction = (cb, cbFinal) => () => {
  cb();
  setTimeout(() => {
    cb();
    setTimeout(() => {
      cb();
      setTimeout(() => {
        cbFinal();
      }, timeout(3));
    }, timeout(2));
  }, timeout(1));
};

const ScrambleC = props => {
  const {
    0: c,
    1: setC
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.c);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    const timer = setTimeout(timerFunction(() => setC(randC), () => setC(props.c)), INITIAL_TIMEOUT + Math.random() * INITIAL_TIMEOUT);
    return () => clearTimeout(timer);
  }, [props.c]);
  return __jsx("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1972477326", [c === props.c ? 1.0 : 0.5]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, c, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1972477326",
    dynamic: [c === props.c ? 1.0 : 0.5],
    __self: undefined
  }, `span.__jsx-style-dynamic-selector{opacity:${c === props.c ? 1.0 : 0.5};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9jb21wb25lbnRzL1NjcmFtYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDUyxBQUdrRCxxQ0FDdkMiLCJmaWxlIjoiL1VzZXJzL3Bob3J1c3QvZ2l0L3NjcmFtYmxlL2NvbXBvbmVudHMvU2NyYW1ibGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VTdGF0ZSwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFJBTkRfQ0hBUl9QT09MID1cbiAgJyFcIiMkJSZcXCcoKSorLC0uLzAxMjM0NTY3ODk6Ozw9Pj9AQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVpbXFxcXF1eX2BhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent8fX4nO1xuY29uc3QgcmFuZEMgPSAoKSA9PlxuICBSQU5EX0NIQVJfUE9PTC5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogUkFORF9DSEFSX1BPT0wubGVuZ3RoKSk7XG5jb25zdCByYW5kUyA9IGwgPT5cbiAgQXJyYXkobClcbiAgICAuZmlsbCgnICcpXG4gICAgLm1hcChyYW5kQylcbiAgICAuam9pbignJyk7XG5cbmNvbnN0IElOSVRJQUxfVElNRU9VVCA9IDM1O1xuY29uc3QgREVDQVlfRkFDVE9SID0gMi41O1xuY29uc3QgdGltZW91dCA9IG4gPT5cbiAgSU5JVElBTF9USU1FT1VUICogbiAqKiBERUNBWV9GQUNUT1IgK1xuICBNYXRoLnJhbmRvbSgpICogSU5JVElBTF9USU1FT1VUICogbiAqKiBERUNBWV9GQUNUT1I7XG5cbmNvbnN0IHRpbWVyRnVuY3Rpb24gPSAoY2IsIGNiRmluYWwpID0+ICgpID0+IHtcbiAgY2IoKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgY2IoKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNiKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY2JGaW5hbCgpO1xuICAgICAgfSwgdGltZW91dCgzKSk7XG4gICAgfSwgdGltZW91dCgyKSk7XG4gIH0sIHRpbWVvdXQoMSkpO1xufTtcblxuY29uc3QgU2NyYW1ibGVDID0gcHJvcHMgPT4ge1xuICBjb25zdCBbYywgc2V0Q10gPSB1c2VTdGF0ZShwcm9wcy5jKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoXG4gICAgICB0aW1lckZ1bmN0aW9uKFxuICAgICAgICAoKSA9PiBzZXRDKHJhbmRDKSxcbiAgICAgICAgKCkgPT4gc2V0Qyhwcm9wcy5jKSxcbiAgICAgICksXG4gICAgICBJTklUSUFMX1RJTUVPVVQgKyBNYXRoLnJhbmRvbSgpICogSU5JVElBTF9USU1FT1VULFxuICAgICk7XG4gICAgcmV0dXJuICgpID0+IGNsZWFyVGltZW91dCh0aW1lcik7XG4gIH0sIFtwcm9wcy5jXSk7XG4gIHJldHVybiAoXG4gICAgPHNwYW4+XG4gICAgICB7Y31cbiAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAke2MgPT09IHByb3BzLmMgPyAxLjAgOiAwLjV9O1xuICAgICAgICAgIH1cbiAgICAgICAgYH1cbiAgICAgIDwvc3R5bGU+XG4gICAgPC9zcGFuPlxuICApO1xufTtcblxuY29uc3QgU2NyYW1ibGUgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGNzID0gQXJyYXkuZnJvbShwcm9wcy5zKS5tYXAoKGMsIGkpID0+IDxTY3JhbWJsZUMgYz17Y30ga2V5PXtpfSAvPik7XG4gIGNvbnNvbGUubG9nKGNzKTtcbiAgcmV0dXJuIDxzcGFuPntjc308L3NwYW4+O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NyYW1ibGU7XG4iXX0= */
/*@ sourceURL=/Users/phorust/git/scramble/components/Scramble.js */`));
};

const Scramble = props => {
  const cs = _babel_runtime_corejs2_core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(props.s).map((c, i) => __jsx(ScrambleC, {
    c: c,
    key: i,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: undefined
  }));

  console.log(cs);
  return __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, cs);
};

/* harmony default export */ __webpack_exports__["default"] = (Scramble);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var intersection_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! intersection-observer */ "intersection-observer");
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
  }, "html{font-family:'Space Mono','Noto Sans Mono CJK SC',monospace;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFheUIsQUFHd0UsMkRBQy9EIiwiZmlsZSI6Ii9Vc2Vycy9waG9ydXN0L2dpdC9zY3JhbWJsZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcblxuaW1wb3J0IFNjcmFtYmxlIGZyb20gJy4uL2NvbXBvbmVudHMvU2NyYW1ibGUnO1xuaW1wb3J0IEZhZGVJbkdyb3VwIGZyb20gJy4uL2NvbXBvbmVudHMvRmFkZUluR3JvdXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleCgpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEZhZGVJbkdyb3VwPlxuICAgICAgICA8U2NyYW1ibGUgcz1cIkhlbGxvLCBteSBuYW1lIGlzIEtldmluIExlZS5cIiAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPFNjcmFtYmxlIHM9XCJJIGdvIGJ5IG15IENoaW5lc2UgbmFtZSwgTU5HWVVBTi5cIiAvPlxuICAgICAgPC9GYWRlSW5Hcm91cD5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU3BhY2UgTW9ubycsICdOb3RvIFNhbnMgTW9ubyBDSksgU0MnLCBtb25vc3BhY2U7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/phorust/git/scramble/pages/index.js */"));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/phorust/git/scramble/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "intersection-observer":
/*!****************************************!*\
  !*** external "intersection-observer" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("intersection-observer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-intersection-observer":
/*!**********************************************!*\
  !*** external "react-intersection-observer" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-intersection-observer");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map