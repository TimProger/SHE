exports.id = 413;
exports.ids = [413];
exports.modules = {

/***/ 4690:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "cardfloat_card__avXeZ",
	"card__content": "cardfloat_card__content__weenW",
	"card__content__image": "cardfloat_card__content__image__M_0hx",
	"card__content__info": "cardfloat_card__content__info__28BTh",
	"card__content__info__size": "cardfloat_card__content__info__size__s_0EN",
	"card__content__info__articul": "cardfloat_card__content__info__articul__4mq5z",
	"card__content__info__color": "cardfloat_card__content__info__color__MZfZL",
	"card__content__info__color__block": "cardfloat_card__content__info__color__block__4DRfO",
	"card__price": "cardfloat_card__price__PWtk_",
	"card__price__remove": "cardfloat_card__price__remove__rBhyL",
	"card__price__button": "cardfloat_card__price__button__rZxDb",
	"card__price__basket": "cardfloat_card__price__basket__9OOGb",
	"card__price__basket__active": "cardfloat_card__price__basket__active__1It_X",
	"card__price__text": "cardfloat_card__price__text__vSaKG",
	"card__price__text__discount": "cardfloat_card__price__text__discount__iK73e"
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

/***/ 9413:
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
/* harmony import */ var _styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(4690);
/* harmony import */ var _styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _http_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2139);
/* harmony import */ var _hooks_useTypedDispatch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4840);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4789);
/* harmony import */ var _store_Slices_Basket_slice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(201);
/* harmony import */ var _store_Slices_Fav_slice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9714);
/* harmony import */ var _public_images_stock_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8101);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http_api__WEBPACK_IMPORTED_MODULE_2__, _store_Slices_Basket_slice__WEBPACK_IMPORTED_MODULE_6__, _store_Slices_Fav_slice__WEBPACK_IMPORTED_MODULE_7__]);
([_http_api__WEBPACK_IMPORTED_MODULE_2__, _store_Slices_Basket_slice__WEBPACK_IMPORTED_MODULE_6__, _store_Slices_Fav_slice__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const CardFloat = ({ product , isBasket =false  })=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const dispatch = (0,_hooks_useTypedDispatch__WEBPACK_IMPORTED_MODULE_3__/* .useAppDispatch */ .T)();
    const { products  } = (0,_hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_5__/* .useTypedSelector */ .i)((state)=>state.basket);
    const [isInBasket, setIsInBasket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [basket, setBasket] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [newProduct, setNewProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const user = (0,_hooks_useTypedSelector__WEBPACK_IMPORTED_MODULE_5__/* .useTypedSelector */ .i)((state)=>state.profile);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const includes = products.filter((el)=>el.more === product.more);
        if (products.includes(includes[0])) {
            setBasket(includes[0]);
            setIsInBasket(true);
        } else {
            setIsInBasket(false);
        }
    }, [
        products
    ]);
    const { discount , image , name , article  } = product;
    const addToBasketHandler = ()=>{
        if (user.isAuth) {
            _http_api__WEBPACK_IMPORTED_MODULE_2__/* .$api.patch */ .Wh.patch(`${locale}/basket/${product.id}/`, {
                count: product.count + 1
            }).then((res)=>{
                dispatch((0,_store_Slices_Basket_slice__WEBPACK_IMPORTED_MODULE_6__/* .addToBasket */ .H)(res.data));
            }).catch(()=>{});
        } else {
            const obj = {
                id: product.id,
                more: product.more,
                buy_now: true,
                count: 1
            };
            dispatch((0,_store_Slices_Basket_slice__WEBPACK_IMPORTED_MODULE_6__/* .addToBasket */ .H)(obj));
        }
    };
    const removeFromBasketHandler = ()=>{
        if (user.isAuth) {
            if (product.count <= 1) {
                _http_api__WEBPACK_IMPORTED_MODULE_2__/* .$api["delete"] */ .Wh["delete"](`${locale}/basket/${product.id}`).then((res)=>{
                    dispatch((0,_store_Slices_Basket_slice__WEBPACK_IMPORTED_MODULE_6__/* .killProduct */ .rw)(product.id));
                }).catch(()=>{});
            } else {
                _http_api__WEBPACK_IMPORTED_MODULE_2__/* .$api.patch */ .Wh.patch(`${locale}/basket/${product.id}/`, {
                    count: product.count - 1
                }).then((res)=>{
                    dispatch((0,_store_Slices_Basket_slice__WEBPACK_IMPORTED_MODULE_6__/* .removeFromBasket */ .Er)(product.more));
                }).catch(()=>{});
            }
        } else {
            dispatch((0,_store_Slices_Basket_slice__WEBPACK_IMPORTED_MODULE_6__/* .removeFromBasket */ .Er)(product.more));
        }
    };
    const killProductFromBasketHandler = ()=>{
        if (user.isAuth) {
            _http_api__WEBPACK_IMPORTED_MODULE_2__/* .$api["delete"] */ .Wh["delete"](`${locale}/basket/${product.id}`).then((res)=>{
                dispatch((0,_store_Slices_Basket_slice__WEBPACK_IMPORTED_MODULE_6__/* .killProduct */ .rw)(product.id));
            }).catch(()=>{});
        } else {
            dispatch((0,_store_Slices_Basket_slice__WEBPACK_IMPORTED_MODULE_6__/* .killProduct */ .rw)(product.id));
        }
    };
    const removeFromFavsHandler = ()=>{
        dispatch((0,_store_Slices_Fav_slice__WEBPACK_IMPORTED_MODULE_7__/* .removeFromFavs */ .h2)(product.more));
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card__content),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_9___default()), {
                        href: `${locale}/product/${product.product_id}`,
                        className: (_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card__content__image),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: image ? `${_http_api__WEBPACK_IMPORTED_MODULE_2__/* .API_BASE_URL */ .CT}${`${image}`.split("").shift() === "/" ? "" : "/"}${image}` : `${_public_images_stock_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"].src */ .Z.src}`,
                            alt: name
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card__content__info),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: name
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card__content__info__color),
                                children: [
                                    locale === "ru" ? "Оттенок" : "Color",
                                    ":",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        style: {
                                            background: product.color
                                        },
                                        className: (_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card__content__info__color__block)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card__content__info__size),
                                children: [
                                    locale === "ru" ? "Объём, г." : "Size, g.",
                                    ":",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: product.ml
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: (_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card__content__info__articul),
                                children: [
                                    locale === "ru" ? "Артикул" : "Article",
                                    ": ",
                                    article
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card__price),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                        onClick: isBasket ? killProductFromBasketHandler : removeFromFavsHandler,
                        className: (_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card__price__remove),
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M1.34314 12.6567L12.6568 1.34303",
                                stroke: "#A0A0A0"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                d: "M1.34314 1.34326L12.6568 12.657",
                                stroke: "#A0A0A0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card__price__text),
                        children: [
                            discount ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h2", {
                                className: (_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card__price__text__discount),
                                children: [
                                    (product.price * (product.count || 1)).toFixed(2),
                                    " ",
                                    product.price_currency === "RUB" ? "₽" : "$"
                                ]
                            }) : "",
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                                className: (_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card__price__text__price),
                                children: [
                                    (product.price - (discount ? product.price / 100 * discount : 0) * (product.count || 1)).toFixed(2),
                                    " ",
                                    product.price_currency === "RUB" ? "₽" : "$"
                                ]
                            })
                        ]
                    }),
                    isBasket ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_components_cardfloat_module_scss__WEBPACK_IMPORTED_MODULE_10___default().card__price__button),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: removeFromBasketHandler,
                                children: "-"
                            }),
                            user.isAuth ? product.count : basket && basket.count,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: addToBasketHandler,
                                children: "+"
                            })
                        ]
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {})
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardFloat);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;