"use strict";
(() => {
var exports = {};
exports.id = 683;
exports.ids = [683];
exports.modules = {

/***/ 563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledMenu": () => (/* binding */ StyledMenu)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledMenu = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().nav)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: none; //  ${({ theme  })=>theme.primaryLight
};
  transform: ${({ open  })=>open ? 'translateX(0)' : 'translateX(-100%)'
};
  min-height: 100vh;
  width:100%;
  text-align: center;
  align-items: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  backdrop-filter: blur(2rem);
  margin: 0;
  a {

    @font-face {
      font-family: myFirstFont;
      src: url(./inter.ttf);
    }
    
    font-family: myFirstFont !important;


    font-size: 1.5rem;
    font-weight: bold;
    color: #FFF; 
    text-decoration: none;
    transition: color 0.3s linear;
    margin: 1rem 0;
  }
`;


/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(563));
module.exports = __webpack_exports__;

})();