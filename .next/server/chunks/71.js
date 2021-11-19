"use strict";
exports.id = 71;
exports.ids = [71];
exports.modules = {

/***/ 8071:
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
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3124);
/* harmony import */ var react_parallax_tilt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_parallax_tilt__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);
framer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const StyledMainPage = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().section)`
    background-color: #000;
    min-height: 100vh; width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000;
    @media only screen and (max-width: 1200px) {
        flex-direction: column;
    } 

`;
const T = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().p)`
    color: #E5E5E5;
    font-weight: light;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    // text-align: center;
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
    font-size: 3.5rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif !important;
    margin: 0;
    @media only screen and (max-width: 1600px) {
        font-size: 3.5rem;
      }
    @media only screen and (max-width: 1400px) {
        font-size: 3rem;
      }
    @media only screen and (max-width: 768px) {
    
        font-size: 1.8rem;
        font-weight: bold;
        
      }
`;
const Left = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div)`
      cursor: grab;
      padding: 1rem 2rem 0.5rem 2rem;
      border-radius: 1rem;
`;
const Right = styled_components__WEBPACK_IMPORTED_MODULE_2___default()((react_parallax_tilt__WEBPACK_IMPORTED_MODULE_3___default()))`
      height: 45rem; 
      width: auto;
      cursor: grab;
      @media only screen and (max-width: 1600px) {
        height: 35rem; 
      }
      @media only screen and (max-width: 1400px) {
        height: 30rem; 
      }
      @media only screen and (max-width: 1000px) {
        height: 25rem; 
      }
      @media only screen and (max-width: 786px) {
        height: auto; 
        width: 85%;
      }
`;
const MainPage = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledMainPage, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Left, {
                whileHover: {
                    scale: 1.1,
                    boxShadow: "0 0 25px rgb(250, 0, 117)"
                },
                whileTap: {
                    scale: 0.7
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H, {
                        children: "HOW WE WORK"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(T, {
                        children: "Bird Software solutions ensure complete "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(T, {
                        children: " perfection in undergoing all our projects."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(T, {
                        children: "We deliver excellent projects by organizing"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(T, {
                        children: "the work procedure into simple phases."
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Right, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: "../images/bss.png",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainPage);

});

/***/ })

};
;