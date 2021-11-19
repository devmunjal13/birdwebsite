"use strict";
exports.id = 253;
exports.ids = [253];
exports.modules = {

/***/ 4253:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _home_components_TestimonialCard_Testi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4516);




const StyledTestimonials = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().section)`
    background-color: #000;
    min-height: 100vh; width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #000;
    flex-direction: column;
    background-image:url('../images/bg1.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
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
const Heading = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)``;
const Testimonials = ()=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTestimonials, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Heading, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(T, {
                        children: "You are"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H, {
                        children: "THE CENTER OF"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(H, {
                        children: "OUR UNIVERSE"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_home_components_TestimonialCard_Testi__WEBPACK_IMPORTED_MODULE_3__["default"], {
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Testimonials);


/***/ })

};
;