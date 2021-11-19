"use strict";
exports.id = 981;
exports.ids = [981];
exports.modules = {

/***/ 9981:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Menu_Menu)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
// EXTERNAL MODULE: ./pages/home/components/components/Menu/Menu.styled.js
var Menu_styled = __webpack_require__(563);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./pages/home/components/components/Menu/navi_logo.svg
/* harmony default export */ const navi_logo = ({"src":"/_next/static/media/navi_logo.87bb72bf.svg","height":45,"width":152});
;// CONCATENATED MODULE: ./pages/home/components/components/Menu/Menu.js






// import twitter from '../../../page/Footer/twitter.svg'
// import opensea from '../../../page/Footer/opensea.svg'
const MenuItems = (external_styled_components_default()).div`
  display: grid;
  place-items: center;
  margin-top: 30%;
`;
const Link1 = (external_styled_components_default()).a`
    display: flex;
    margin: 0 2rem;
    align-items: center;
    text-decoration: none;
    color: #FFF;
    position: absolute;
    left: 2rem;
    top: -0.3rem;
`;
const Right = (external_styled_components_default()).div`
    display: flex;
    flex-direction: column;
    margin: 0 0 2rem 0;
    align-items: center;
`;
const Img = (external_styled_components_default()).img`
    width: 3rem;
`;
const Flex = (external_styled_components_default()).div`
    display: flex;
    justify-content: space-evenly;
    width: 70%;
`;
const T = (external_styled_components_default()).p`
    color: #FFF;
    font-weight: 500;
    font-size: 16px;
    margin-top: 1rem;
    @media only screen and (max-width: 600px) {
        font-weight: 510;
        font-size: 1rem;
      }
`;
const H = (external_styled_components_default()).h1`

@font-face {
  font-family: myFirstFont;
  src: url(./inter.ttf);
}

    font-family: myFirstFont !important;
  
`;
const Menu = ({ open , ...props })=>{
    const isHidden = open ? true : false;
    const tabIndex = isHidden ? 0 : -1;
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Menu_styled.StyledMenu, {
        open: open,
        "aria-hidden": !isHidden,
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Link1, {
                href: "#HOME",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: navi_logo,
                    alt: "Logo"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(MenuItems, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        style: {
                            padding: "0"
                        },
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(H, {
                            children: "Home"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        style: {
                            padding: "0"
                        },
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(H, {
                            children: "Buy Intellects"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        style: {
                            padding: "0"
                        },
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(H, {
                            children: " Roadmap"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        style: {
                            padding: "0"
                        },
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(H, {
                            children: "Connect Wallet"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Right, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Flex, {
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(T, {
                        children: "Intellects NFT All Right Reserved."
                    })
                ]
            })
        ]
    }));
};
Menu.propTypes = {
    open: external_prop_types_.bool.isRequired
};
/* harmony default export */ const Menu_Menu = (Menu);


/***/ }),

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


/***/ })

};
;