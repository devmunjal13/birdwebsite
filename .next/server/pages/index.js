"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,13,829,371,630,849,216,557,793,328,268,347,138,883];
exports.modules = {

/***/ 2386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_DarkThemeProvider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
;// CONCATENATED MODULE: ./pages/DarkThemeProvider.js




const DarkThemeProvider = ({ children  })=>{
    const darkThemeEnabled = (0,external_react_redux_namespaceObject.useSelector)((state)=>state.preferences.darkThemeEnabled
    );
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_styled_components_.ThemeProvider, {
        theme: {
            theme: darkThemeEnabled ? "dark" : "light"
        },
        children: children
    }));
};
/* harmony default export */ const pages_DarkThemeProvider = (DarkThemeProvider);


/***/ }),

/***/ 3862:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6241);
/* harmony import */ var _home_MainPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8071);
/* harmony import */ var _home_Vision__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9846);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_home_MainPage__WEBPACK_IMPORTED_MODULE_3__, _home_Vision__WEBPACK_IMPORTED_MODULE_4__, _home_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__]);
([_home_MainPage__WEBPACK_IMPORTED_MODULE_3__, _home_Vision__WEBPACK_IMPORTED_MODULE_4__, _home_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const Render = ()=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_MainPage__WEBPACK_IMPORTED_MODULE_3__["default"], {
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Render);

});

/***/ }),

/***/ 3678:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3862);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _DarkThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2386);
/* harmony import */ var _home_Vision__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9846);
/* harmony import */ var _home_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6241);
/* harmony import */ var _home_MainPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8071);
/* harmony import */ var _home_Testimonials__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(4253);
/* harmony import */ var _home_Projects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7374);
/* harmony import */ var _home_WhyChooseUs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_home_Vision__WEBPACK_IMPORTED_MODULE_5__, _home_MainPage__WEBPACK_IMPORTED_MODULE_7__, _home_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__, _Render__WEBPACK_IMPORTED_MODULE_2__]);
([_home_Vision__WEBPACK_IMPORTED_MODULE_5__, _home_MainPage__WEBPACK_IMPORTED_MODULE_7__, _home_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__, _Render__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);












function Home() {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_components_NavBar_NavBar__WEBPACK_IMPORTED_MODULE_6__["default"], {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_MainPage__WEBPACK_IMPORTED_MODULE_7__["default"], {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_Vision__WEBPACK_IMPORTED_MODULE_5__["default"], {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_Testimonials__WEBPACK_IMPORTED_MODULE_8__["default"], {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_Projects__WEBPACK_IMPORTED_MODULE_9__["default"], {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_WhyChooseUs__WEBPACK_IMPORTED_MODULE_10__["default"], {
            })
        ]
    }));
};

});

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 580:
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 7344:
/***/ ((module) => {

module.exports = require("react-focus-lock");

/***/ }),

/***/ 9931:
/***/ ((module) => {

module.exports = require("react-modal");

/***/ }),

/***/ 3124:
/***/ ((module) => {

module.exports = require("react-parallax-tilt");

/***/ }),

/***/ 3094:
/***/ ((module) => {

module.exports = require("react-scroll");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 6197:
/***/ ((module) => {

module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [981,499,516,241,846,71,506,14,374,253,566], () => (__webpack_exec__(3678)));
module.exports = __webpack_exports__;

})();