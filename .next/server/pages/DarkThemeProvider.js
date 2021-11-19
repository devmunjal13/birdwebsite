"use strict";
(() => {
var exports = {};
exports.id = 13;
exports.ids = [13,849,557,328,268,347];
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

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(2386));
module.exports = __webpack_exports__;

})();