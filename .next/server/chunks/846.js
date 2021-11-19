"use strict";
exports.id = 846;
exports.ids = [846];
exports.modules = {

/***/ 9846:
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
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3124);
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_parallax_tilt__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const StyledVision = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().section)`
    background-color: #000;
    min-height: 100vh; width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000;
    flex-direction: row-reverse;
    @media only screen and (max-width: 1200px) {
        flex-direction: column-reverse;
    } 
`;
const T = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().p)`
    color: #E5E5E5;
    font-weight: light;
    font-size: 1.7rem;
    margin-bottom: 1rem;
    font-family: 'Montserrat', sans-serif !important;
    @media only screen and (max-width: 1600px) {
        font-size: 1.6rem;
      }
      @media only screen and (max-width: 1400px) {
        font-size: 1.3rem;
      } 

    @media only screen and (max-width: 768px) {
        font-weight: 510;
        font-size: 1rem;
        
      }
`;
const H = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1)`
    color: #E5E5E5;
    font-size: 2.5rem;
    font-weight: bold;
    
    font-family: 'Roboto', sans-serif !important;
    @media only screen and (max-width: 1600px) {
        font-size: 1.5rem;
      }
    @media only screen and (max-width: 1400px) {
        font-size: 1.2rem;
      }
    @media only screen and (max-width: 768px) {
    
        font-size: 1.2rem;
        font-weight: bold;
        
      }
`;
const Left = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
      cursor: grab;
      padding: 1rem 2rem 0 2rem;
      border-radius: 1rem;
      display: flex;
`;
const Right = styled_components__WEBPACK_IMPORTED_MODULE_2___default()((react_parallax_tilt__WEBPACK_IMPORTED_MODULE_4___default()))`
      height: 30rem; 
      width: auto;
      cursor: grab;
      @media only screen and (max-width: 1600px) {
        height: 25rem; 
      }
      @media only screen and (max-width: 1400px) {
        height: 20rem; 
      }
      @media only screen and (max-width: 1000px) {
        height: 15rem; 
      }
      @media only screen and (max-width: 786px) {
        height: auto; 
        width: 85%;
      }
`;
const Divider = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div)`
    height: 20rem; 
        width: 5rem;
        margin: 0 2rem;
      
`;
const Vision = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledVision, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Left, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H, {
                                children: "Vision"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(T, {
                                children: "a verse or passage of Scripture chosen"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(T, {
                                children: "especially for the subject of a sermon or for "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(T, {
                                children: "authoritative support (as for a doctrine)"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Divider, {
                        initial: {
                            x: 0,
                            y: 0
                        },
                        animate: {
                            x: 0,
                            y: -15
                        },
                        transition: {
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "reverse"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "../images/divider.png",
                            alt: "mlogo",
                            style: {
                                height: "100%",
                                width: "100%"
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H, {
                                children: "Mission"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(T, {
                                children: "a verse or passage of Scripture chosen"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(T, {
                                children: "especially for the subject of a sermon or for "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(T, {
                                children: "authoritative support (as for a doctrine)"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Right, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "../images/boy.gif",
                    alt: "mlogo",
                    style: {
                        height: "100%",
                        width: "100%"
                    }
                })
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Vision);

});

/***/ })

};
;