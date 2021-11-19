"use strict";
exports.id = 241;
exports.ids = [241];
exports.modules = {

/***/ 6241:
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(812);
/* harmony import */ var react_focus_lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7344);
/* harmony import */ var react_focus_lock__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_focus_lock__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];


// import './NavBar.css';
// import logo from '../../components/images/logo/logo.png';
// import mlogo from '../../components/images/logo/logo.png';


// import BtnImg from './button.svg'



const H = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1)`
  margin-left: 1rem;
  font-size: 3rem;
  @media only screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;
const Link1 = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_scroll__WEBPACK_IMPORTED_MODULE_6__.Link)`
    display: flex;
    margin: 0 2rem;
    align-items: center;
    text-decoration: none;
    color: #FFF;
    cursor: pointer;
    width: 13rem;
`;
const Link2 = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_scroll__WEBPACK_IMPORTED_MODULE_6__.Link)`
    display: flex;
    margin: 0 3rem;
    align-items: center;
    text-decoration: none;
    color: #FFF;
    cursor: pointer;
    font-size: 1.8rem;
    font-weight: bold;
    @media only screen and (max-width: 1025px) {
      margin: 0 ;
 }
    @media only screen and (max-width: 768px) {
         margin: 0 1rem;
    }
`;
const Button = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div)`
    cursor: pointer;
    height: 3.5rem ;
    padding: 0 2rem;
    color: #E5E5E5;
    font-weight: bold;
    display: grid;
    place-items: center;
    border-radius: 1.4rem; 
    background: linear-gradient(to right, #bc4e9c, #f80759);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    border: none;
    @media only screen and (max-width: 768px) {
      width: 6rem;
    }
    
`;
const Mobile = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    display: none;
  @media only screen and (max-width: 768px) {
    display: block;
  }`;
const PC = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  display: block;
@media only screen and (max-width: 768px) {
  display: none;
}`;
const Li = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.li)``;
const NavBar = ()=>{
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const node = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const menuId = "main-menu";
    const { 0: navbar , 1: setNavbar  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const changeBackground = ()=>{
        console.log(window.scrollY);
        if (window.scrollY >= 100) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        changeBackground();
        // adding the event when scroll change background
        window.addEventListener("scroll", changeBackground);
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
        className: navbar ? "navActive" : "nav",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PC, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link1, {
                    to: "home",
                    spy: true,
                    smooth: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "../images/logo/logo.png",
                        alt: "Logo",
                        className: "Logo",
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Mobile, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link1, {
                    to: "home",
                    spy: true,
                    smooth: true,
                    style: {
                        marginRight: "0"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "../images/logo/logo.png",
                        alt: "mlogo",
                        className: "LogoB"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PC, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "list",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link2, {
                            to: "home",
                            spy: true,
                            smooth: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Li, {
                                children: "Services"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link2, {
                            to: "intellect",
                            spy: true,
                            smooth: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Li, {
                                children: "About"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Link2, {
                            to: "roadmap",
                            spy: true,
                            smooth: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Li, {
                                children: "Career"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                            whileHover: {
                                scale: 1.1,
                                boxShadow: "0 0 15px rgb(250, 0, 117)"
                            },
                            whileTap: {
                                scale: 0.7
                            },
                            style: {
                                marginRight: "2rem"
                            },
                            children: "Telegram"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Button, {
                            whileHover: {
                                scale: 1.1,
                                boxShadow: "0 0 15px rgb(250, 0, 117)"
                            },
                            whileTap: {
                                scale: 0.7
                            },
                            children: "Whatsapp"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Mobile, {
                ref: node,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_focus_lock__WEBPACK_IMPORTED_MODULE_5___default()), {
                    disabled: !open,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__.Burger, {
                            open: open,
                            setOpen: setOpen,
                            "aria-controls": menuId
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__.Menu, {
                            open: open,
                            setOpen: setOpen,
                            id: menuId
                        })
                    ]
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavBar);

});

/***/ }),

/***/ 1731:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Burger__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4499);



/***/ }),

/***/ 3192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _Menu__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9981);



/***/ }),

/***/ 812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Burger": () => (/* reexport safe */ _Burger__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   "Menu": () => (/* reexport safe */ _Menu__WEBPACK_IMPORTED_MODULE_1__["default"])
/* harmony export */ });
/* harmony import */ var _Burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1731);
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3192);




/***/ })

};
;