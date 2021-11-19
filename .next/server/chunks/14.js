"use strict";
exports.id = 14;
exports.ids = [14];
exports.modules = {

/***/ 2014:
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



const StyledTesti = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
    width: 20rem;
    height: 20rem;
    padding:1rem;
    border:8px solid red;
    border-radius:50%;
    background-color: rgba(255, 255, 200);
    -webkit-backdrop-filter: blur(20px);
            backdrop-filter: blur(20px);
    -webkit-box-shadow: 20px 20px 22px rgba(0,0,0,0.2);
            box-shadow: 20px 20px 22px rgba(0,0,0,0.2);
`;
const T = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().p)`
    color: #000;
    font-weight: light;
    font-size: 1rem;
    margin-bottom: 1rem;

    text-align: center;
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
    color: #000;
    font-size: 3.5rem;
    font-weight: bold;
    font-family: 'Roboto', sans-serif !important;
    margin: 0;
    margin:auto;
    text-align:center;
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
const Image = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
      width: 5rem;
      height: 5rem;
      display:block;
      margin:auto;

`;
const SelfDescriptionCard = (props)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledTesti, {
        onClick: ()=>{
            (props === null || props === void 0 ? void 0 : props.onClick) || console.log("hii");
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Image, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    src: `${props.link ? props.link : "https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg"}`,
                    alt: "mlogo",
                    style: {
                        height: "100%",
                        width: "100%",
                        borderRadius: "50%"
                    }
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(H, {
                children: [
                    `${props.name ? props.name : "DOT"}`,
                    " "
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(T, {
                children: [
                    `${props.desc ? props.desc : "A paragraph is a series of sentences that are organized and coherent"}`,
                    " "
                ]
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelfDescriptionCard);


/***/ })

};
;