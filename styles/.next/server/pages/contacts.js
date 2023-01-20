(() => {
var exports = {};
exports.id = 192;
exports.ids = [192];
exports.modules = {

/***/ 8088:
/***/ ((module) => {

// Exports
module.exports = {
	"contacts": "contacts_contacts__gK_cC",
	"contacts__wrapper": "contacts_contacts__wrapper__pzUOj",
	"contacts__phone": "contacts_contacts__phone__AG1zj",
	"contacts__email": "contacts_contacts__email__gRa4_",
	"contacts__address": "contacts_contacts__address__g6TCp",
	"contacts__social_networks__buttons": "contacts_contacts__social_networks__buttons___A13b"
};


/***/ }),

/***/ 8045:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1943);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9334);
/* harmony import */ var _styles_pages_contacts_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8088);
/* harmony import */ var _styles_pages_contacts_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_contacts_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Layout__WEBPACK_IMPORTED_MODULE_5__]);
_components_Layout__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










const Contacts = ()=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("contacts");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            t("title1"),
                            " | ™SHE"
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_pages_contacts_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contacts),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_pages_contacts_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contacts__wrapper),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: t("title1")
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_pages_contacts_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contacts__phone),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: t("title2")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "+7 (915) 565-20-27"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_pages_contacts_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contacts__email),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: "Email"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: "info@tmshe.ru"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_pages_contacts_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contacts__address),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: t("title3")
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            href: "https://yandex.ru/maps/-/CCUjULH9GB",
                                            children: t("address")
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_pages_contacts_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contacts__social_networks),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                            children: t("title4")
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_pages_contacts_module_scss__WEBPACK_IMPORTED_MODULE_9___default().contacts__social_networks__buttons),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    href: "https://vk.com/tm_she",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "42",
                                                        height: "42",
                                                        viewBox: "0 0 42 42",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M27.4021 0.166992H14.6187C2.94374 0.166992 0.166656 2.94408 0.166656 14.5982V27.3816C0.166656 39.0545 2.92291 41.8337 14.5979 41.8337H27.3812C39.0542 41.8337 41.8333 39.0774 41.8333 27.4024V14.6191C41.8333 2.94408 39.0771 0.166992 27.4021 0.166992ZM33.8042 29.8962H30.7646C29.6146 29.8962 29.2687 28.9649 27.2062 26.9024C25.4062 25.167 24.6458 24.9503 24.1896 24.9503C23.5604 24.9503 23.3875 25.1232 23.3875 25.992V28.7253C23.3875 29.4649 23.1479 29.8982 21.2167 29.8982C19.3424 29.7723 17.5248 29.2029 15.9137 28.2369C14.3026 27.2708 12.9441 25.9359 11.95 24.342C9.58993 21.4045 7.94779 17.9569 7.15416 14.2732C7.15416 13.817 7.32707 13.4045 8.19582 13.4045H11.2333C12.0146 13.4045 12.2958 13.7524 12.6021 14.5545C14.0771 18.8962 16.5937 22.6712 17.6146 22.6712C18.0062 22.6712 18.1771 22.4982 18.1771 21.5212V17.0503C18.0479 15.0107 16.9646 14.8378 16.9646 14.1003C16.9785 13.9058 17.0676 13.7244 17.2131 13.5944C17.3586 13.4645 17.5489 13.3964 17.7437 13.4045H22.5187C23.1708 13.4045 23.3875 13.7295 23.3875 14.5107V20.5441C23.3875 21.1962 23.6687 21.4128 23.8646 21.4128C24.2562 21.4128 24.5583 21.1962 25.275 20.4795C26.8143 18.6023 28.0719 16.5109 29.0083 14.2712C29.104 14.0021 29.2851 13.7718 29.524 13.6153C29.7629 13.4588 30.0464 13.3848 30.3312 13.4045H33.3708C34.2812 13.4045 34.475 13.8607 34.2812 14.5107C33.176 16.9866 31.8085 19.3369 30.2021 21.5212C29.875 22.0212 29.7437 22.2816 30.2021 22.867C30.5042 23.3232 31.5687 24.2128 32.2854 25.0587C33.3269 26.0975 34.1917 27.2994 34.8458 28.617C35.1062 29.4628 34.6708 29.8982 33.8042 29.8982V29.8962Z",
                                                            fill: "#FFCBCC"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    href: "https://t.me/+QrWkpgPBl404NGZi",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        width: "42",
                                                        height: "42",
                                                        viewBox: "0 0 42 42",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M21 0.166992C9.49999 0.166992 0.166656 9.50033 0.166656 21.0003C0.166656 32.5003 9.49999 41.8337 21 41.8337C32.5 41.8337 41.8333 32.5003 41.8333 21.0003C41.8333 9.50033 32.5 0.166992 21 0.166992ZM30.6667 14.3337C30.3542 17.6253 29 25.6253 28.3125 29.3128C28.0208 30.8753 27.4375 31.3962 26.8958 31.4587C25.6875 31.5628 24.7708 30.667 23.6042 29.8962C21.7708 28.6878 20.7292 27.9378 18.9583 26.7712C16.8958 25.417 18.2292 24.667 19.4167 23.4587C19.7292 23.1462 25.0625 18.292 25.1667 17.8545C25.1811 17.7882 25.1792 17.7194 25.161 17.6541C25.1429 17.5887 25.1091 17.5288 25.0625 17.4795C24.9375 17.3753 24.7708 17.417 24.625 17.4378C24.4375 17.4795 21.5208 19.417 15.8333 23.2503C15 23.8128 14.25 24.1045 13.5833 24.0837C12.8333 24.0628 11.4167 23.667 10.3542 23.3128C9.04166 22.8962 8.02082 22.667 8.10416 21.9378C8.14582 21.5628 8.66666 21.1878 9.64582 20.792C15.7292 18.1462 19.7708 16.3962 21.7917 15.5628C27.5833 13.1462 28.7708 12.7295 29.5625 12.7295C29.7292 12.7295 30.125 12.7712 30.375 12.9795C30.5833 13.1462 30.6458 13.3753 30.6667 13.542C30.6458 13.667 30.6875 14.042 30.6667 14.3337Z",
                                                            fill: "#FFCBCC"
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                    href: "https://rutube.ru/channel/27054689/",
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
                                                        width: "114",
                                                        height: "26",
                                                        viewBox: "0 0 114 26",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M95.8436 25.5516C95.1491 26.003 94.4457 26.0287 93.7332 25.6287C93.0221 25.2301 92.6665 24.6141 92.6665 23.7808V2.21829C92.6665 1.38495 93.0221 0.768286 93.7332 0.368286C94.4457 -0.030325 95.1491 -0.00393591 95.8436 0.447453L112.823 11.2287C113.448 11.6454 113.76 12.2356 113.76 12.9995C113.76 13.7634 113.448 14.3537 112.823 14.7704L95.8436 25.5516Z",
                                                                fill: "#FFCBCC"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                d: "M10.8 17H13.536L9.392 11.864C11.184 11.768 12.48 10.632 12.48 8.84C12.48 6.968 11.072 5.8 9.152 5.8H1.744V17H3.952V11.864H6.672L10.8 17ZM9.152 7.848C9.776 7.848 10.256 8.184 10.256 8.84C10.256 9.496 9.776 9.816 9.152 9.816H3.952V7.848H9.152ZM24.2018 11.8C24.2018 13.944 22.8578 15.144 20.7138 15.144C18.5698 15.144 17.2258 13.944 17.2258 11.8V5.8H15.0178V11.8C15.0178 15.16 17.1778 17.176 20.7138 17.176C24.2498 17.176 26.4098 15.16 26.4098 11.8V5.8H24.2018V11.8ZM40.1161 7.848V5.8H32.9001H27.8921V7.848H32.9001V17H35.1081V7.848H40.1161ZM50.7955 11.8C50.7955 13.944 49.4515 15.144 47.3075 15.144C45.1635 15.144 43.8195 13.944 43.8195 11.8V5.8H41.6115V11.8C41.6115 15.16 43.7715 17.176 47.3075 17.176C50.8435 17.176 53.0035 15.16 53.0035 11.8V5.8H50.7955V11.8ZM63.8939 17C66.0539 17 67.6699 15.544 67.6699 13.496C67.6699 12.216 67.0299 11.16 66.0379 10.552C66.5019 10.072 66.7899 9.432 66.7899 8.648C66.7899 6.888 65.3819 5.8 63.4619 5.8H56.1659V17H63.8939ZM63.8939 11.864C64.7899 11.864 65.3979 12.456 65.3979 13.416C65.3979 14.376 64.7899 14.952 63.8939 14.952H58.3739V11.864H63.8939ZM63.4619 7.848C64.0859 7.848 64.5659 8.184 64.5659 8.84C64.5659 9.496 64.0859 9.816 63.4619 9.816H58.3739V7.848H63.4619ZM80.1153 17V14.952H72.4833V11.72H79.3953V9.672H72.4833V7.848H80.0673V5.8H70.2753V17H80.1153Z",
                                                                fill: "#FFCBCC"
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__.serverSideTranslations)(locale ?? "ru", [
                "common",
                "contacts"
            ])
        },
        revalidate: 10
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Contacts);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 1377:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ 5460:
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next/serverSideTranslations");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 3539:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/detect-domain-locale.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3431:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-locale.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9648:
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,50,227], () => (__webpack_exec__(8045)));
module.exports = __webpack_exports__;

})();