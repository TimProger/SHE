(() => {
var exports = {};
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 4553:
/***/ ((module) => {

// Exports
module.exports = {
	"catalog": "catalog_catalog__gAzLd",
	"catalog__title": "catalog_catalog__title__RMc5e",
	"catalog__header": "catalog_catalog__header__vL4Nf",
	"catalog__header__top": "catalog_catalog__header__top__ZI_ie",
	"catalog__header__bottom": "catalog_catalog__header__bottom__GMq9B",
	"catalog__container": "catalog_catalog__container__yxe6i",
	"catalog__container__filters": "catalog_catalog__container__filters__MkFRA",
	"catalog__container__filters__button": "catalog_catalog__container__filters__button__XUDyq",
	"catalog__container__filters__button__apply": "catalog_catalog__container__filters__button__apply__M5W_w",
	"catalog__container__filters__block": "catalog_catalog__container__filters__block__zzv_d",
	"catalog__container__filters__block__container": "catalog_catalog__container__filters__block__container___15dM",
	"catalog__container__filters__block__open": "catalog_catalog__container__filters__block__open__5KJuy",
	"catalog__container__filters__block__closed": "catalog_catalog__container__filters__block__closed__dTunZ",
	"catalog__container__filters__block__option": "catalog_catalog__container__filters__block__option__md6o5",
	"catalog__container__filters__block__color": "catalog_catalog__container__filters__block__color__ksalQ",
	"catalog__container__filters__block__header": "catalog_catalog__container__filters__block__header__8Nve3",
	"catalog__container__products": "catalog_catalog__container__products__wozTa",
	"catalog__container__products__nothing": "catalog_catalog__container__products__nothing__mZk4k",
	"catalog__container__products__footer": "catalog_catalog__container__products__footer__vsKP0",
	"catalog__container__products__cards": "catalog_catalog__container__products__cards__YO9Vq",
	"catalog__container__products__pages": "catalog_catalog__container__products__pages__DWiyA",
	"catalog__container__products__pages__pl": "catalog_catalog__container__products__pages__pl__vErdE",
	"catalog__container__products__pages__page": "catalog_catalog__container__products__pages__page__SvGqy",
	"catalog__container__products__pages__active": "catalog_catalog__container__products__pages__active__cxVDA",
	"catalog__seen": "catalog_catalog__seen__eJ0d_",
	"catalog__seen__cards": "catalog_catalog__seen__cards__dqEnB",
	"catalog__seen__cards__card": "catalog_catalog__seen__cards__card__O_S9G",
	"catalog__seen__not_found": "catalog_catalog__seen__not_found__KciSM",
	"new__block": "catalog_new__block__2vxJ3",
	"hit__block": "catalog_hit__block__EUMNe"
};


/***/ }),

/***/ 1911:
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
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5460);
/* harmony import */ var next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1377);
/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks_useTypedDispatch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4840);
/* harmony import */ var _http_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2139);
/* harmony import */ var _styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(4553);
/* harmony import */ var _styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5838);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1943);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9334);
/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2676);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6050);
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(2422);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http_api__WEBPACK_IMPORTED_MODULE_6__, _components_Layout__WEBPACK_IMPORTED_MODULE_8__, _components_Card__WEBPACK_IMPORTED_MODULE_12__]);
([_http_api__WEBPACK_IMPORTED_MODULE_6__, _components_Layout__WEBPACK_IMPORTED_MODULE_8__, _components_Card__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















const Catalog = ()=>{
    const { locale , query  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { t  } = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)("catalog");
    const dispatch = (0,_hooks_useTypedDispatch__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .T)();
    const [types, setTypes] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const [pages, setPages] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(1);
    const [filters, setFilters] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const [products, setProducts] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    const [usedFilters, setUsedFilters] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
        category: [],
        color: [],
        collection: [],
        type: [],
        min_price: null,
        max_price: null
    });
    const [filtered, setFiltered] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [limit, setLimit] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(20);
    const [limitArr, setLimitArr] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([
        20,
        40,
        60
    ]);
    const [sortArr, setSortArr] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([
        {
            name: locale === "ru" ? "Новизне, новее" : "Newest, newer",
            value: "is_new desc"
        },
        {
            name: locale === "ru" ? "Новизне, старее" : "Newest, older",
            value: "is_new asc"
        },
        {
            name: locale === "ru" ? "Популярности" : "Popularity",
            value: "is_hit desc"
        }
    ]);
    const [sort, setSort] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(sortArr[0]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        let arr = [
            {
                name: locale === "ru" ? "Новизне, новее" : "Newest, newer",
                value: "is_new desc"
            },
            {
                name: locale === "ru" ? "Новизне, старее" : "Newest, older",
                value: "is_new asc"
            },
            {
                name: locale === "ru" ? "Популярности" : "Popularity",
                value: "is_hit desc"
            }
        ];
        setSort({
            name: locale === "ru" ? "Новизне, новее" : "Newest, newer",
            value: "is_new desc"
        });
        setSortArr(arr);
    }, [
        locale
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        _http_api__WEBPACK_IMPORTED_MODULE_6__/* .$api.get */ .Wh.get(`${locale}/product/catalog/get_filters`).then((res)=>{
            setFilters(res.data);
            const data = new FormData();
            data.append("order", sort.value);
            usedFilters.category = [];
            usedFilters.collection = [];
            usedFilters.type = [];
            if (query.category) {
                data.append("category", `${query.category}`);
                usedFilters.category = [
                    +`${query.category}`
                ];
                setFiltered(true);
            }
            if (query.collection) {
                data.append("collection", `${query.collection}`);
                usedFilters.collection = [
                    +`${query.collection}`
                ];
                setFiltered(true);
            }
            if (query.type) {
                data.append("type", `${query.type}`);
                usedFilters.type = [
                    +`${query.type}`
                ];
                setFiltered(true);
            }
            _http_api__WEBPACK_IMPORTED_MODULE_6__/* .$api.post */ .Wh.post(`${locale}/product/catalog/values/${limit}/${page}/`, data).then((res)=>{
                setPages(Math.ceil(res.data.count_pages));
                setProducts(res.data.data);
            });
        });
    }, [
        locale,
        query
    ]);
    const changePage = (page)=>{
        const data = new FormData();
        data.append("order", sort.value);
        if (usedFilters.category.length > 0) data.append("category", usedFilters.category.join(","));
        if (usedFilters.color.length > 0) data.append("color", usedFilters.color.join(","));
        if (usedFilters.collection.length > 0) data.append("collection", usedFilters.collection.join(","));
        if (usedFilters.type.length > 0) data.append("type", usedFilters.type.join(","));
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
        _http_api__WEBPACK_IMPORTED_MODULE_6__/* .$api.post */ .Wh.post(`${locale}/product/catalog/values/${limit}/${page}/`, data).then((res)=>{
            setPages(Math.ceil(res.data.count_pages));
            setProducts(res.data.data);
        });
    };
    const changeLimit = (limit)=>{
        const data = new FormData();
        data.append("order", sort.value);
        if (usedFilters.category.length > 0) data.append("category", usedFilters.category.join(","));
        if (usedFilters.color.length > 0) data.append("color", usedFilters.color.join(","));
        if (usedFilters.collection.length > 0) data.append("collection", usedFilters.collection.join(","));
        if (usedFilters.type.length > 0) data.append("type", usedFilters.type.join(","));
        _http_api__WEBPACK_IMPORTED_MODULE_6__/* .$api.post */ .Wh.post(`${locale}/product/catalog/values/${limit}/1/`, data).then((res)=>{
            setPage(1);
            setPages(Math.ceil(res.data.count_pages));
            setProducts(res.data.data);
        });
    };
    const changeSort = (sort)=>{
        if (!sort.value) return;
        const data = new FormData();
        data.append("order", sort.value);
        _http_api__WEBPACK_IMPORTED_MODULE_6__/* .$api.post */ .Wh.post(`${locale}/product/catalog/values/${limit}/1/`, data).then((res)=>{
            setPage(1);
            setPages(Math.ceil(res.data.count_pages));
            setProducts(res.data.data);
        });
    };
    const onToggleLimitClick = (e, value)=>{
        setLimit(value);
        changeLimit(value);
    };
    const onToggleSortClick = (e, value)=>{
        setSort(value);
        changeSort(value);
    };
    const toggleFilter = (value, type)=>{
        switch(type){
            case "category":
                if (!usedFilters.category.includes(+value)) {
                    usedFilters.category.push(+value);
                } else {
                    const index = usedFilters.category.indexOf(+value);
                    usedFilters.category.splice(index, 1);
                }
                break;
            case "color":
                if (!usedFilters.color.includes(+value)) {
                    usedFilters.color.push(+value);
                } else {
                    const index1 = usedFilters.color.indexOf(+value);
                    usedFilters.color.splice(index1, 1);
                }
                break;
            case "collection":
                if (!usedFilters.collection.includes(+value)) {
                    usedFilters.collection.push(+value);
                } else {
                    const index2 = usedFilters.collection.indexOf(+value);
                    usedFilters.collection.splice(index2, 1);
                }
                break;
            case "type":
                if (!usedFilters.type.includes(+value)) {
                    usedFilters.type.push(+value);
                } else {
                    const index3 = usedFilters.type.indexOf(+value);
                    usedFilters.type.splice(index3, 1);
                }
                break;
            case "price":
                if (!usedFilters.type.includes(+value)) {
                    usedFilters.type.push(+value);
                } else {
                    const index4 = usedFilters.type.indexOf(+value);
                    usedFilters.type.splice(index4, 1);
                }
                break;
        }
        setUsedFilters(Object.assign({}, usedFilters));
    };
    const useFilters = ()=>{
        const data = new FormData();
        data.append("order", sort.value);
        if (usedFilters.category.length > 0) data.append("category", usedFilters.category.join(","));
        if (usedFilters.color.length > 0) data.append("color", usedFilters.color.join(","));
        if (usedFilters.collection.length > 0) data.append("collection", usedFilters.collection.join(","));
        if (usedFilters.type.length > 0) data.append("type", usedFilters.type.join(","));
        _http_api__WEBPACK_IMPORTED_MODULE_6__/* .$api.post */ .Wh.post(`${locale}/product/catalog/values/${limit}/1/`, data).then((res)=>{
            setPage(1);
            setPages(Math.ceil(res.data.count_pages));
            setProducts(res.data.data);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            setFiltered(false);
            if (usedFilters.category.length > 0 || usedFilters.color.length > 0 || usedFilters.collection.length > 0 || usedFilters.type.length > 0) setFiltered(true);
        });
    };
    const clearFilters = ()=>{
        setUsedFilters({
            category: [],
            color: [],
            collection: [],
            type: [],
            min_price: null,
            max_price: null
        });
        const data = new FormData();
        data.append("order", sort.value);
        _http_api__WEBPACK_IMPORTED_MODULE_6__/* .$api.post */ .Wh.post(`${locale}/product/catalog/values/${limit}/1/`, data).then((res)=>{
            setPage(1);
            setPages(Math.ceil(res.data.count_pages));
            setProducts(res.data.data);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
            setFiltered(false);
        });
    };
    const togglePageHandler = (el)=>{
        setPage(el);
        changePage(el);
    };
    const displayPages = ()=>{
        const arr = [];
        if (pages > 5) {
            arr[0] = 1;
            for(let i = 0; i < 4; i++){
                if (page === 1) {
                    arr.push(page + i + 1);
                } else {
                    if (page + i >= pages) {
                        arr[3] = pages - 1;
                        arr[2] = pages - 2;
                        arr[1] = pages - 3;
                        break;
                    } else {
                        arr.push(page + i);
                    }
                }
            }
            arr[4] = pages;
        } else {
            for(let i1 = 0; i1 < pages; i1++){
                arr.push(i1 + 1);
            }
        }
        return arr.map((el)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                onClick: ()=>togglePageHandler(el),
                className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__products__pages__page) + " " + (page === el && (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__products__pages__active)),
                children: el
            });
        });
    };
    const [seen, setSeen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        const data = _utils_storage__WEBPACK_IMPORTED_MODULE_7__/* .Storage.get */ .K.get("seen");
        if (data && data.length > 0) {
            console.log("");
            _http_api__WEBPACK_IMPORTED_MODULE_6__/* .$api.post */ .Wh.post(`/${locale}/product/favs/`, {
                ids: data.join(",")
            }).then((res)=>{
                data.map((el, index)=>{
                    console.log(res.data, data);
                    const item = res.data.filter((el)=>el.id === +data[index]);
                    seen[index] = item[0];
                });
                setSeen([
                    ...seen
                ]);
            });
        }
    }, [
        locale
    ]);
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(filters.map((el)=>false));
    const openHandler = (index)=>{
        open[index] = !open[index];
        setOpen([
            ...open
        ]);
    };
    const [filtersTopPx, setFiltersTopPx] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
    function myFunction() {
        var filters = document.getElementsByClassName((_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__filters))[0];
        if (filters) {
            console.log(window.pageYOffset, filters.offsetTop, filters.style.top.split("px")[0]);
            if (window.pageYOffset > filters.offsetTop - +filters.style.top.split("px")[0]) {
                setFiltersTopPx(window.pageYOffset - +filters.style.height - 300);
            } else {
                setFiltersTopPx(0);
            }
        }
    }
    // useEffect(()=>{
    //   if(typeof window){
    //     window.addEventListener('scroll', myFunction)
    //     return () => {
    //       window.removeEventListener('scroll', myFunction)
    //     }
    //   }
    // })
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_Layout__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_9___default()), {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        t("title"),
                        " | ™SHE"
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Container__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog),
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__header),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__header__top),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                            children: types.length > 0 && types.join(", ") || types[0] || t("title")
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__header__bottom),
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    locale === "ru" ? "До" : "To",
                                                    ": ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dropdown__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                        type: "limit",
                                                        handler: (e, value)=>onToggleLimitClick(e, +value),
                                                        value: limit,
                                                        options: limitArr
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    locale === "ru" ? "Сортировать по" : "Sort by",
                                                    ": ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dropdown__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                        type: "sort",
                                                        handler: (e, value)=>onToggleSortClick(e, value),
                                                        value: sort,
                                                        options: sortArr
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__filters),
                                        children: [
                                            filters.length > 0 && filters.map((el, index)=>{
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__filters__block),
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            onClick: ()=>openHandler(index),
                                                            className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__filters__block__header),
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                    children: el.name_lang
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                                    style: {
                                                                        transform: open[index] ? "rotate(180deg)" : "rotate(0deg)"
                                                                    },
                                                                    width: "12",
                                                                    height: "6",
                                                                    viewBox: "0 0 12 6",
                                                                    fill: "none",
                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                                        d: "M11.1223 1.38952L6.3941 5.53084C6.33781 5.57999 6.27683 5.61473 6.21116 5.63505C6.14549 5.65569 6.07513 5.66602 6.00008 5.66602C5.92503 5.66602 5.85467 5.65569 5.789 5.63505C5.72333 5.61473 5.66235 5.57999 5.60606 5.53084L0.863757 1.38952C0.732418 1.27482 0.666748 1.13145 0.666748 0.959411C0.666748 0.787367 0.737108 0.639902 0.87783 0.517014C1.01855 0.394126 1.18273 0.332683 1.37035 0.332683C1.55798 0.332683 1.72216 0.394126 1.86288 0.517014L6.00008 4.12992L10.1373 0.517014C10.2686 0.402319 10.4304 0.344971 10.6225 0.344971C10.815 0.344971 10.9816 0.406415 11.1223 0.529303C11.2631 0.65219 11.3334 0.795559 11.3334 0.95941C11.3334 1.12326 11.2631 1.26663 11.1223 1.38952Z",
                                                                        fill: "#A0A0A0"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__filters__block__container) + ` ${open[index] ? (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__filters__block__open) : (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__filters__block__closed)}`,
                                                            children: el.option.map((elem, index)=>{
                                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__filters__block__option),
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            checked: usedFilters[`${el.name}`].includes(elem.id),
                                                                            onChange: (e)=>toggleFilter(e.target.value, el.name),
                                                                            type: "checkbox",
                                                                            value: elem.id,
                                                                            name: el.name + "i" + index,
                                                                            id: el.name + "i" + index
                                                                        }),
                                                                        elem.color && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            style: {
                                                                                background: elem.color
                                                                            },
                                                                            className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__filters__block__color)
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                                            htmlFor: el.name + "i" + index,
                                                                            children: elem.name
                                                                        })
                                                                    ]
                                                                });
                                                            })
                                                        })
                                                    ]
                                                });
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__filters__button__apply),
                                                onClick: ()=>useFilters(),
                                                text: t("filters.button")
                                            }),
                                            filtered && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Button__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {
                                                style_type: "outer",
                                                className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__filters__button) + ` ${(_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__filters__button__clear)}`,
                                                onClick: ()=>clearFilters(),
                                                text: t("filters.clear")
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__products),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__products__cards),
                                                children: products.length > 0 ? products.map((el)=>{
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                            product: el
                                                        })
                                                    });
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__products__nothing),
                                                    children: t("nothing_is_found")
                                                })
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__products__footer),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            locale === "ru" ? "До" : "To",
                                                            ": ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dropdown__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                type: "limit",
                                                                handler: (e, value)=>onToggleLimitClick(e, +value),
                                                                value: limit,
                                                                options: limitArr
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        children: [
                                                            locale === "ru" ? "Сортировать по" : "Sort by",
                                                            ": ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Dropdown__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                                type: "sort",
                                                                handler: (e, value)=>onToggleSortClick(e, value),
                                                                value: sort,
                                                                options: sortArr
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__products__pages),
                                                children: [
                                                    pages !== 0 && page !== 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        onClick: ()=>togglePageHandler(page - 1),
                                                        width: "32",
                                                        height: "32",
                                                        viewBox: "0 0 32 32",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M28.6666 15.5C28.9428 15.5 29.1666 15.7239 29.1666 16C29.1666 16.2761 28.9428 16.5 28.6666 16.5V15.5ZM0.979761 16.3536C0.7845 16.1583 0.7845 15.8417 0.979761 15.6464L4.16174 12.4645C4.357 12.2692 4.67359 12.2692 4.86885 12.4645C5.06411 12.6597 5.06411 12.9763 4.86885 13.1716L2.04042 16L4.86885 18.8284C5.06411 19.0237 5.06411 19.3403 4.86885 19.5355C4.67359 19.7308 4.357 19.7308 4.16174 19.5355L0.979761 16.3536ZM28.6666 16.5H1.33331V15.5H28.6666V16.5Z",
                                                            fill: "black"
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__products__pages__pl)
                                                    }),
                                                    displayPages(),
                                                    pages !== 0 && page !== pages ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                                        onClick: ()=>togglePageHandler(page + 1),
                                                        width: "32",
                                                        height: "32",
                                                        viewBox: "0 0 32 32",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                                            d: "M1.33334 15.5C1.0572 15.5 0.833344 15.7239 0.833344 16C0.833344 16.2761 1.0572 16.5 1.33334 16.5V15.5ZM29.0202 16.3536C29.2155 16.1583 29.2155 15.8417 29.0202 15.6464L25.8383 12.4645C25.643 12.2692 25.3264 12.2692 25.1311 12.4645C24.9359 12.6597 24.9359 12.9763 25.1311 13.1716L27.9596 16L25.1311 18.8284C24.9359 19.0237 24.9359 19.3403 25.1311 19.5355C25.3264 19.7308 25.643 19.7308 25.8383 19.5355L29.0202 16.3536ZM1.33334 16.5H28.6667V15.5H1.33334V16.5Z",
                                                            fill: "black"
                                                        })
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__container__products__pages__pl)
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__seen),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        children: t("seen")
                                    }),
                                    seen.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__seen__cards),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__seen__cards__card),
                                                children: seen[0] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    product: seen[0]
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__seen__cards__card),
                                                children: seen[1] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    product: seen[1]
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__seen__cards__card),
                                                children: seen[2] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    product: seen[2]
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__seen__cards__card),
                                                children: seen[3] ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Card__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                                                    product: seen[3]
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                                            })
                                        ]
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: (_styles_pages_catalog_module_scss__WEBPACK_IMPORTED_MODULE_14___default().catalog__seen__not_found),
                                        children: t("seen_nothing")
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
const getStaticProps = async ({ locale  })=>{
    return {
        props: {
            ...await (0,next_i18next_serverSideTranslations__WEBPACK_IMPORTED_MODULE_1__.serverSideTranslations)(locale ?? "ru", [
                "catalog",
                "common"
            ])
        },
        revalidate: 10
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Catalog);

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
var __webpack_exports__ = __webpack_require__.X(0, [676,664,50,227,714,75], () => (__webpack_exec__(1911)));
module.exports = __webpack_exports__;

})();