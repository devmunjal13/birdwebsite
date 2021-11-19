"use strict";
(() => {
var exports = {};
exports.id = 180;
exports.ids = [180];
exports.modules = {

/***/ 181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StyledBurger": () => (/* binding */ StyledBurger)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const StyledBurger = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  position: absolute;
  top: 1rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  span {
    width: 2rem;
    height: 0.25rem;
    background:  #FFF; ${({ theme , open  })=>open ? theme.primaryDark : theme.primaryLight
};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open  })=>open ? 'rotate(45deg)' : 'rotate(0)'
};
    }

    :nth-child(2) {
      opacity: ${({ open  })=>open ? '0' : '1'
};
      transform: ${({ open  })=>open ? 'translateX(20px)' : 'translateX(0)'
};
    }

    :nth-child(3) {
      transform: ${({ open  })=>open ? 'rotate(-45deg)' : 'rotate(0)'
};
    }
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
var __webpack_exports__ = (__webpack_exec__(181));
module.exports = __webpack_exports__;

})();