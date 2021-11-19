"use strict";
exports.id = 499;
exports.ids = [499];
exports.modules = {

/***/ 4499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Burger_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(181);




const Burger = ({ open , setOpen , ...props })=>{
    const isExpanded = open ? true : false;
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_Burger_styled__WEBPACK_IMPORTED_MODULE_3__.StyledBurger, {
        "aria-label": "Toggle menu",
        "aria-expanded": isExpanded,
        open: open,
        onClick: ()=>setOpen(!open)
        ,
        ...props,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
            })
        ]
    }));
};
Burger.propTypes = {
    open: prop_types__WEBPACK_IMPORTED_MODULE_2__.bool.isRequired,
    setOpen: prop_types__WEBPACK_IMPORTED_MODULE_2__.func.isRequired
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Burger);


/***/ }),

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


/***/ })

};
;