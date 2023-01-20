exports.id = 75;
exports.ids = [75];
exports.modules = {

/***/ 399:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "card_card__H4Twr",
	"card__image": "card_card__image__mSDel",
	"card__new__block": "card_card__new__block__ALzM6",
	"card__hit__block": "card_card__hit__block__wd_Q1",
	"card__new": "card_card__new__B9wzM",
	"card__header__new__discount": "card_card__header__new__discount__8ObLl",
	"card__header__fav__active": "card_card__header__fav__active__fLgIP",
	"card__hit": "card_card__hit__WUiBW",
	"card__header": "card_card__header__rn50I",
	"card__header__fav": "card_card__header__fav__hlt9E",
	"card__header__new": "card_card__header__new__nwDeR",
	"card__content": "card_card__content__Iajtp",
	"card__content__footer": "card_card__content__footer__mNVsU",
	"card__content__footer__info": "card_card__content__footer__info__1bbro",
	"card__content__footer__color": "card_card__content__footer__color__YGTln"
};


/***/ }),

/***/ 8101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/stock.74d4bd29.png","height":464,"width":450,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAAAAADhZOFXAAAAN0lEQVR42hXJMQrAQAwDQf//nYG06QK2Vr5TIRixBdIISvs9728KT3cHu9wFlhw4Pwl1C4IZwQHVyD73rmNhiAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 6050:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(399);
/* harmony import */ var _styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _http_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2139);
/* harmony import */ var _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4789);
/* harmony import */ var _store_Slices_Fav_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9714);
/* harmony import */ var _hooks_useTypedDispatch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4840);
/* harmony import */ var _public_images_stock_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8101);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http_api__WEBPACK_IMPORTED_MODULE_3__, _store_Slices_Fav_slice__WEBPACK_IMPORTED_MODULE_5__]);
([_http_api__WEBPACK_IMPORTED_MODULE_3__, _store_Slices_Fav_slice__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const Card = ({ product , className  })=>{
    const dispatch = (0,_hooks_useTypedDispatch__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .T)();
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    const [more, setMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(product.product_more[0]);
    const [mainImage, setMainImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isFav, setIsFav] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { products  } = (0,_hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_4__/* .useTypedSelector */ .i)((state)=>state.fav);
    const favHandler = ()=>{
        const obj = {
            id: product.id,
            more: more.id
        };
        dispatch((0,_store_Slices_Fav_slice__WEBPACK_IMPORTED_MODULE_5__/* .toggleFav */ .w6)(obj));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const includes = products.filter((el)=>el.id === product.id);
        if (products.includes(includes[0])) {
            setIsFav(true);
        } else {
            setIsFav(false);
        }
    }, [
        products
    ]);
    const { is_new , is_hit , discount , images , name , price , color , id  } = product;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const showed = images.filter((el)=>el.show);
        if (showed[0]) {
            setMainImage(showed[0]);
        } else {
            setMainImage(images[0]);
        }
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card) + ` ${is_new && (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card__new)} ${is_hit && (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card__hit)} ${className ? className : ""}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card__header),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card__header__new),
                        children: [
                            is_new && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card__new__block),
                                children: "New"
                            }),
                            is_hit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card__hit__block),
                                children: "Hit"
                            }),
                            !!discount && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card__header__new__discount),
                                children: [
                                    "-",
                                    discount,
                                    "%"
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card__header__fav) + ` ${isFav && (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card__header__fav__active)}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                            onClick: ()=>favHandler(),
                            width: "24",
                            height: "21",
                            viewBox: "0 0 24 21",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M21.1721 11.1855L12.0102 20L2.84826 11.1855M2.84826 11.1855C2.24395 10.6143 1.76794 9.9277 1.45021 9.16898C1.13248 8.41026 0.979915 7.59585 1.00212 6.77704C1.02432 5.95822 1.22081 5.15275 1.57922 4.41133C1.93763 3.66991 2.45019 3.0086 3.08462 2.46906C3.71905 1.92952 4.46162 1.52343 5.26555 1.27636C6.06949 1.02929 6.91738 0.94659 7.75583 1.03347C8.59429 1.12036 9.40514 1.37494 10.1373 1.78119C10.8695 2.18744 11.5072 2.73656 12.0102 3.39396C12.5153 2.74133 13.1538 2.19701 13.8854 1.79507C14.6171 1.39313 15.4263 1.14223 16.2624 1.05806C17.0985 0.973891 17.9435 1.05827 18.7445 1.30592C19.5455 1.55357 20.2853 1.95915 20.9175 2.49729C21.5497 3.03542 22.0607 3.69453 22.4186 4.43335C22.7766 5.17217 22.9736 5.9748 22.9975 6.79101C23.0214 7.60722 22.8716 8.41944 22.5575 9.17683C22.2434 9.93422 21.7718 10.6205 21.1721 11.1927",
                                stroke: "#A0A0A0",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                draggable: false,
                href: "/product/" + id,
                className: (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card__image),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    draggable: false,
                    src: images.filter((el)=>el.show)[0] ? `${_http_api__WEBPACK_IMPORTED_MODULE_3__/* .API_BASE_URL */ .CT}/${images.filter((el)=>el.show)[0].image}` : images[0] ? `${_http_api__WEBPACK_IMPORTED_MODULE_3__/* .API_BASE_URL */ .CT}/${images[0].image}` : `${_public_images_stock_png__WEBPACK_IMPORTED_MODULE_7__/* ["default"].src */ .Z.src}`,
                    alt: name
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card__content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        draggable: false,
                        href: "/product/" + id,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                            children: name
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card__content__footer),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card__content__footer__info),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            product.product_more.map((el)=>el.ml).join("/"),
                                            " ml"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            background: product.color
                                        },
                                        className: (_styles_components_card_module_scss__WEBPACK_IMPORTED_MODULE_9___default().card__content__footer__color)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    locale === "ru" ? "от" : "from",
                                    " ",
                                    product.product_more[0].price,
                                    " ",
                                    product.product_more[0].price_currency === "RUB" ? "₽" : "$"
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;