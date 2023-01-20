(() => {
var exports = {};
exports.id = 398;
exports.ids = [398];
exports.modules = {

/***/ 6683:
/***/ ((module) => {

// Exports
module.exports = {
	"auth": "partnership_auth__2GlZK",
	"auth__active": "partnership_auth__active__qEO1e",
	"auth__form": "partnership_auth__form__I3ogo",
	"auth__form__container": "partnership_auth__form__container__tRHLE",
	"auth__form__container__button": "partnership_auth__form__container__button__AJkE_",
	"auth__form__container__input": "partnership_auth__form__container__input__vpwbi"
};


/***/ }),

/***/ 3309:
/***/ ((module) => {

// Exports
module.exports = {
	"coop": "coop_coop__DdhdK",
	"coop__imgBackGround": "coop_coop__imgBackGround__5o4MT",
	"coop__title": "coop_coop__title__wyjpN",
	"coop__body": "coop_coop__body__jOS3r",
	"coop__body__special_conditions": "coop_coop__body__special_conditions__UEaHq",
	"coop__body__special_conditions__description": "coop_coop__body__special_conditions__description__J_9ys",
	"coop__body__special_conditions__discounts": "coop_coop__body__special_conditions__discounts__WTVSk",
	"coop__body__special_conditions__discounts__first": "coop_coop__body__special_conditions__discounts__first__901RU",
	"coop__body__special_conditions__discounts__second": "coop_coop__body__special_conditions__discounts__second__UPZCP",
	"coop__body__special_conditions__discounts__title": "coop_coop__body__special_conditions__discounts__title__4vP_X",
	"coop__body__request": "coop_coop__body__request__7gTWD",
	"coop__body__request__title": "coop_coop__body__request__title__stea5",
	"coop__body__request__contacts": "coop_coop__body__request__contacts__lptO2"
};


/***/ }),

/***/ 685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/coopDescription.43c9a813.png","height":300,"width":576,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AOWx4uq23uy+1Oe/w+ervuOSz9qVudyVtQCPKHSDIl+kbX+/hpmsaXSOSlJ3KkmQRVIAVyM6YiFLbChXpW6Eqmh3gz5RgTtTikVWAF8iRl0UR45Kc7d1kaldcHQ1QWkuQW02QbCILpeEjcz4AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":4});

/***/ }),

/***/ 7423:
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
/* harmony import */ var _services_Auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9271);
/* harmony import */ var _styles_components_partnership_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6683);
/* harmony import */ var _styles_components_partnership_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_components_partnership_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _Dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2676);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2422);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5838);
/* harmony import */ var _store_ActionCreators_Profile_ac__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5303);
/* harmony import */ var _hooks_useTypedDispatch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4840);
/* harmony import */ var _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3833);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_Auth__WEBPACK_IMPORTED_MODULE_2__, _store_ActionCreators_Profile_ac__WEBPACK_IMPORTED_MODULE_6__]);
([_services_Auth__WEBPACK_IMPORTED_MODULE_2__, _store_ActionCreators_Profile_ac__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Partnership = ({ show , setShow  })=>{
    const dispatch = (0,_hooks_useTypedDispatch__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .T)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_10__.useTranslation)("coop");
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const [countries, setCountries] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            title: t("countries.russia"),
            img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].russia.src */ .Z.russia.src,
            phone: "7"
        },
        {
            title: t("countries.usa"),
            img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].usa.src */ .Z.usa.src,
            phone: "1"
        },
        {
            title: t("countries.uar"),
            img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].uar.src */ .Z.uar.src,
            phone: "27"
        },
        {
            title: t("countries.korea"),
            img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].korea.src */ .Z.korea.src,
            phone: "82"
        },
        {
            title: t("countries.bel"),
            img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].bel.src */ .Z.bel.src,
            phone: "375"
        },
        {
            title: t("countries.azerb"),
            img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].azerb.src */ .Z.azerb.src,
            phone: "994"
        },
        {
            title: t("countries.england"),
            img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].england.src */ .Z.england.src,
            phone: "44"
        },
        {
            title: t("countries.oae"),
            img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].oae.src */ .Z.oae.src,
            phone: "971"
        },
        {
            title: t("countries.india"),
            img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].india.src */ .Z.india.src,
            phone: "91"
        },
        {
            title: t("countries.turkey"),
            img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].turkey.src */ .Z.turkey.src,
            phone: "90"
        }
    ]);
    const [country, setCountry] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(countries[0]);
    const [phone, setPhone] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(`+${country.phone} `);
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [isError, setIsError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [errors, setErrors] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        phone: "",
        code: ""
    });
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [isDisabled, setIsDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setPhone(`+${country.phone} `);
    }, [
        country
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setCountries([
            {
                title: locale === "ru" ? "Россия" : "Russia",
                img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].russia.src */ .Z.russia.src,
                phone: "7"
            },
            {
                title: locale === "ru" ? "США" : "USA",
                img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].usa.src */ .Z.usa.src,
                phone: "1"
            },
            {
                title: locale === "ru" ? "ЮАР" : "UAR",
                img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].uar.src */ .Z.uar.src,
                phone: "27"
            },
            {
                title: locale === "ru" ? "Южная Корея" : "South Korea",
                img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].korea.src */ .Z.korea.src,
                phone: "82"
            },
            {
                title: locale === "ru" ? "Беларусь" : "Belarus",
                img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].bel.src */ .Z.bel.src,
                phone: "375"
            },
            {
                title: locale === "ru" ? "Азербайджан" : "Azerbaijan",
                img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].azerb.src */ .Z.azerb.src,
                phone: "994"
            },
            {
                title: locale === "ru" ? "Великобритания" : "United Kingdom",
                img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].england.src */ .Z.england.src,
                phone: "44"
            },
            {
                title: locale === "ru" ? "ОАЭ" : "UAE",
                img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].oae.src */ .Z.oae.src,
                phone: "971"
            },
            {
                title: locale === "ru" ? "Индия" : "India",
                img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].india.src */ .Z.india.src,
                phone: "91"
            },
            {
                title: locale === "ru" ? "Турция" : "Turkey",
                img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].turkey.src */ .Z.turkey.src,
                phone: "90"
            }
        ]);
        setCountry(locale === "ru" ? {
            title: locale === "ru" ? "Россия" : "Russia",
            img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].russia.src */ .Z.russia.src,
            phone: "7"
        } : {
            title: locale === "ru" ? "США" : "USA",
            img: _public_images_countries_countries__WEBPACK_IMPORTED_MODULE_8__/* ["default"].usa.src */ .Z.usa.src,
            phone: "1"
        });
    }, [
        locale
    ]);
    const onChangePhone = (e)=>{
        let phoneVal = e.target.value.replace(/\D/g, ""), formattedPhone = `+${country.phone} `;
        if (!phoneVal) {
            setPhone("");
        }
        const phoneLen = country.phone.length;
        if (phoneVal.length > phoneLen) {
            formattedPhone += "" + phoneVal.substring(phoneLen, phoneLen + 3);
        }
        if (phoneVal.length >= phoneLen + 4) {
            formattedPhone += " " + phoneVal.substring(phoneLen + 3, phoneLen + 6);
        }
        if (phoneVal.length >= phoneLen + 7) {
            formattedPhone += " " + phoneVal.substring(phoneLen + 6, phoneLen + 8);
        }
        if (phoneVal.length >= phoneLen + 9) {
            formattedPhone += " " + phoneVal.substring(phoneLen + 8, phoneLen + 10);
        }
        setPhone((prev)=>prev = formattedPhone);
        if (formattedPhone.length === phoneLen + 15) {
            setCode("");
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
        isError && setIsError(false);
    };
    const outsideClickHandler = ()=>{
        setShow(false);
    };
    const insideClickHandler = (e)=>{
        e.stopPropagation();
    };
    const sendCode = ()=>{
        let phoneUpd = phone.replace(/\s/g, "").replace(/\+/, "");
        _services_Auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"].confirm_phone */ .Z.confirm_phone(+phoneUpd).then((res)=>{
            setPage(1);
        }).catch((err)=>{
            if (err.response.detail === "Код не верный") {
                setErrors((prev)=>Object.assign(prev, {
                        code: t("error_code_1")
                    }));
            }
            setIsError(true);
            setIsDisabled(false);
        });
    };
    const confirmCode = ()=>{
        let codeUpd = code.replace(/\s/g, "");
        let phoneUpd = phone.replace(/\s/g, "").replace(/\+/, "");
        _services_Auth__WEBPACK_IMPORTED_MODULE_2__/* ["default"].confirm_code */ .Z.confirm_code(+phoneUpd, +codeUpd).then((res)=>{
            _utils_storage__WEBPACK_IMPORTED_MODULE_5__/* .Storage.set */ .K.set("accessToken", `Bearer ${res.data.access_token}`);
            _utils_storage__WEBPACK_IMPORTED_MODULE_5__/* .Storage.set */ .K.set("refreshToken", `Bearer ${res.data.refresh_token}`);
            setErrors({
                phone: "",
                code: ""
            });
            setPhone("");
            setCode("");
            setPage(0);
            dispatch((0,_store_ActionCreators_Profile_ac__WEBPACK_IMPORTED_MODULE_6__/* .getUser */ .P)());
            setShow(false);
            window.location.replace(`/${locale}/profile`);
        }).catch((err)=>{
            if (err.response.data.detail == "Код не верный") {
                setErrors((prev)=>Object.assign(prev, {
                        code: t("error_code_1")
                    }));
            } else {
                setErrors((prev)=>Object.assign(prev, {
                        code: "Произошла ошибка при проверке кода"
                    }));
            }
            setIsError(true);
            setIsDisabled(false);
        });
    };
    const authHandler = ()=>{
        setIsDisabled(true);
        switch(page){
            case 0:
                sendCode();
                break;
            case 1:
                confirmCode();
                break;
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onClick: outsideClickHandler,
        className: (_styles_components_partnership_module_scss__WEBPACK_IMPORTED_MODULE_11___default().auth) + " " + (show ? (_styles_components_partnership_module_scss__WEBPACK_IMPORTED_MODULE_11___default().auth__active) : ""),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            onClick: insideClickHandler,
            className: (_styles_components_partnership_module_scss__WEBPACK_IMPORTED_MODULE_11___default().auth__form),
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_components_partnership_module_scss__WEBPACK_IMPORTED_MODULE_11___default().auth__form__container),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: t("partnership.title")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        children: t("partnership.paragraph_1")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Dropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        type: "counties",
                        handler: (e, value)=>setCountry(value),
                        value: country,
                        options: countries || []
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_components_partnership_module_scss__WEBPACK_IMPORTED_MODULE_11___default().auth__form__container__input),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: t("partnership.inputs.phone")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: phone,
                                onChange: onChangePhone,
                                type: "text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: t("partnership.inputs.name")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: name,
                                placeholder: t("partnership.inputs.name_pl"),
                                onChange: (e)=>{
                                    setName(e.currentTarget.value);
                                },
                                type: "text"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: "Email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: email,
                                placeholder: "info@tmshe.ru",
                                onChange: (e)=>{
                                    setEmail(e.currentTarget.value);
                                },
                                type: "email"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                children: t("partnership.inputs.message")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                value: message,
                                placeholder: t("partnership.inputs.message_pl"),
                                onChange: (e)=>{
                                    setMessage(e.currentTarget.value);
                                },
                                type: "text"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_components_partnership_module_scss__WEBPACK_IMPORTED_MODULE_11___default().auth__form__container__button),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Button__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                disabled: isDisabled,
                                onClick: authHandler,
                                text: t("partnership.button")
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    errors.phone && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: errors.phone
                                    }),
                                    errors.code && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: errors.code
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Partnership);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5947:
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
/* harmony import */ var _components_Partnership__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7423);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1943);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3309);
/* harmony import */ var _styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9334);
/* harmony import */ var _public_images_coopDescription_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(685);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2422);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Partnership__WEBPACK_IMPORTED_MODULE_5__, _components_Layout__WEBPACK_IMPORTED_MODULE_6__]);
([_components_Partnership__WEBPACK_IMPORTED_MODULE_5__, _components_Layout__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const Coop = ()=>{
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_3__.useTranslation)("coop");
    const [showAuth, setShowAuth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Partnership__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                show: showAuth,
                setShow: setShowAuth
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_7___default()), {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                            children: [
                                t("title"),
                                " | ™SHE"
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__container),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                    className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__title),
                                    children: t("title")
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__imgBackGround)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                no_margin: true,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__body),
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__body__special_conditions),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    children: t("title1")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__body__special_conditions__description),
                                                    children: t("paragraph_1")
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__body__special_conditions__discounts),
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__body__special_conditions__discounts__title),
                                                                    children: t("discount1")
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                    className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__body__special_conditions__discounts__first),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: "30%"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: "20%"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: "15%"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: "10%"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__body__special_conditions__discounts__title),
                                                                    children: t("discount2")
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                                                    className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__body__special_conditions__discounts__second),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: locale === "ru" ? "40.000₽" : "640$"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: locale === "ru" ? "30.000₽" : "480$"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: locale === "ru" ? "20.000₽" : "320$"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                                            children: locale === "ru" ? "10.000₽" : "160$"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__body__request),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__body__request__img),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: _public_images_coopDescription_png__WEBPACK_IMPORTED_MODULE_9__/* ["default"].src */ .Z.src,
                                                        alt: "coopDescriptionImage"
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                    className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__body__request__title),
                                                    children: t("title2")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__body__special_conditions__description),
                                                    children: t("paragraph_2")
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                                    text: t("button"),
                                                    onClick: ()=>setShowAuth(true)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_pages_coop_module_scss__WEBPACK_IMPORTED_MODULE_11___default().coop__body__request__contacts),
                                                    children: t("connect")
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_4__.serverSideTranslations)(locale ?? "ru", [
                "coop",
                "common"
            ])
        },
        revalidate: 10
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Coop);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,50,227], () => (__webpack_exec__(5947)));
module.exports = __webpack_exports__;

})();