"use strict";
(() => {
var exports = {};
exports.id = 863;
exports.ids = [863,183];
exports.modules = {

/***/ 2657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TOGGLE_DARKTHEME": () => (/* binding */ TOGGLE_DARKTHEME),
/* harmony export */   "toggleDarkTheme": () => (/* binding */ toggleDarkTheme)
/* harmony export */ });
const TOGGLE_DARKTHEME = "TOGGLE_DARKTHEME";
const toggleDarkTheme = ()=>({
        type: TOGGLE_DARKTHEME
    })
;


/***/ }),

/***/ 1308:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2657);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);


const preferences = (state = {
    darkThemeEnabled: false
}, action)=>{
    switch(action.type){
        case _actions__WEBPACK_IMPORTED_MODULE_1__.TOGGLE_DARKTHEME:
            return {
                ...state,
                darkThemeEnabled: !state.darkThemeEnabled
            };
        default:
            return state;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    preferences
}));


/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1308));
module.exports = __webpack_exports__;

})();