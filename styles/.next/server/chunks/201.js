"use strict";
exports.id = 201;
exports.ids = [201];
exports.modules = {

/***/ 5899:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ getBasket),
/* harmony export */   "l": () => (/* binding */ getBasketNoAuth)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http_api__WEBPACK_IMPORTED_MODULE_1__]);
_http_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getBasket = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("basket/getBasket", async (props, thunkAPI)=>{
    try {
        const { locale , ids  } = props;
        if (ids && ids.length > 0) {
            const data = await _http_api__WEBPACK_IMPORTED_MODULE_1__/* .$api.get */ .Wh.get(`/${locale}/basket/`);
            const newArr = ids.map(async (el, index)=>{
                // @ts-ignore
                const includes = data.data.filter((elem)=>{
                    // @ts-ignore
                    return elem.more === el[0];
                });
                if (includes[0]) {
                    return;
                } else {
                    return await _http_api__WEBPACK_IMPORTED_MODULE_1__/* .$api.post */ .Wh.post(`${locale}/basket/`, {
                        product: el[0]
                    }).then(async (res)=>{
                        if (el[1] > 1) {
                            return await _http_api__WEBPACK_IMPORTED_MODULE_1__/* .$api.patch */ .Wh.patch(`${locale}/basket/${res.data.id}/`, {
                                count: el[1]
                            });
                        }
                    });
                }
            });
            if (newArr) {
                const response = await _http_api__WEBPACK_IMPORTED_MODULE_1__/* .$api.get */ .Wh.get(`/${locale}/basket/`);
                return response.data.map((el)=>({
                        id: el.id,
                        count: el.count,
                        buy_now: el.buy_now,
                        more: el.more
                    }));
            }
        } else {
            const response1 = await _http_api__WEBPACK_IMPORTED_MODULE_1__/* .$api.get */ .Wh.get(`/${props.locale}/basket/`);
            return response1.data.map((el)=>({
                    id: el.id,
                    count: el.count,
                    buy_now: el.buy_now,
                    more: el.more
                }));
        }
    } catch (e) {
        return thunkAPI.rejectWithValue("Не удалось найти товары");
    }
});
const getBasketNoAuth = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("basket/getBasketNoAuth", async ({ ids , locale  }, thunkAPI)=>{
    try {
        const response = await _http_api__WEBPACK_IMPORTED_MODULE_1__/* .$api.get */ .Wh.get(`/${locale}/basket/new/${ids.length > 0 && `?ids=${ids.map((el)=>el[0]).join(",")}`}`);
        return response.data.map((el, index)=>({
                id: el.id,
                count: ids.filter((elem)=>elem[0] === el.more)[0][1] || 1,
                buy_now: el.buy_now,
                more: el.more
            }));
    } catch (e) {
        return thunkAPI.rejectWithValue("Не удалось найти товары");
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 201:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Er": () => (/* binding */ removeFromBasket),
/* harmony export */   "H": () => (/* binding */ addToBasket),
/* harmony export */   "LB": () => (/* binding */ removeAllProductFromBasket),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "rw": () => (/* binding */ killProduct)
/* harmony export */ });
/* unused harmony export basketSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActionCreators_Basket_ac__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5899);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ActionCreators_Basket_ac__WEBPACK_IMPORTED_MODULE_1__]);
_ActionCreators_Basket_ac__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const initialState = {
    isLoading: false,
    error: null,
    products: []
};
const basketSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "basket",
    initialState,
    reducers: {
        addToBasket: (state, action)=>{
            const includes = state.products.filter((el)=>el.more === action.payload.more);
            if (!state.products.includes(includes[0])) {
                state.products.push(action.payload);
            } else {
                const index = state.products.indexOf(includes[0]);
                state.products[index].count += 1;
            }
            _utils_storage__WEBPACK_IMPORTED_MODULE_2__/* .Storage.set */ .K.set("basket", JSON.stringify(state.products.map((el, index)=>[
                    el.more,
                    el.count
                ])));
        },
        removeFromBasket: (state, action)=>{
            const product = state.products.find((el)=>el.more === action.payload);
            if (product) {
                let index = state.products.indexOf(product);
                state.products[index].count -= 1;
                if (state.products[index].count <= 0) {
                    state.products.splice(index, 1);
                }
                _utils_storage__WEBPACK_IMPORTED_MODULE_2__/* .Storage.set */ .K.set("basket", JSON.stringify(state.products.map((el, index)=>[
                        el.more,
                        el.count
                    ])));
            }
        },
        removeAllProductFromBasket: (state)=>{
            state.products = [];
            _utils_storage__WEBPACK_IMPORTED_MODULE_2__/* .Storage.set */ .K.set("basket", JSON.stringify([]));
        },
        killProduct: (state, action)=>{
            const product = state.products.find((el)=>el.id === action.payload);
            if (product) {
                let index = state.products.indexOf(product);
                state.products.splice(index, 1);
            }
            state.products = [
                ...state.products
            ];
            _utils_storage__WEBPACK_IMPORTED_MODULE_2__/* .Storage.set */ .K.set("basket", JSON.stringify(state.products.map((el, index)=>[
                    el.more,
                    el.count
                ])));
        }
    },
    extraReducers: {
        [_ActionCreators_Basket_ac__WEBPACK_IMPORTED_MODULE_1__/* .getBasket.fulfilled.type */ .f.fulfilled.type]: (state, action)=>{
            state.isLoading = false;
            state.error = null;
            state.products = action.payload;
            _utils_storage__WEBPACK_IMPORTED_MODULE_2__/* .Storage.set */ .K.set("basket", JSON.stringify(state.products.map((el, index)=>[
                    el.more,
                    el.count
                ])));
        },
        [_ActionCreators_Basket_ac__WEBPACK_IMPORTED_MODULE_1__/* .getBasket.pending.type */ .f.pending.type]: (state)=>{
            state.isLoading = true;
        },
        [_ActionCreators_Basket_ac__WEBPACK_IMPORTED_MODULE_1__/* .getBasket.rejected.type */ .f.rejected.type]: (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        },
        [_ActionCreators_Basket_ac__WEBPACK_IMPORTED_MODULE_1__/* .getBasketNoAuth.fulfilled.type */ .l.fulfilled.type]: (state, action)=>{
            state.isLoading = false;
            state.error = null;
            state.products = action.payload;
            _utils_storage__WEBPACK_IMPORTED_MODULE_2__/* .Storage.set */ .K.set("basket", JSON.stringify(state.products.map((el, index)=>[
                    el.more,
                    el.count
                ])));
        },
        [_ActionCreators_Basket_ac__WEBPACK_IMPORTED_MODULE_1__/* .getBasketNoAuth.pending.type */ .l.pending.type]: (state)=>{
            state.isLoading = true;
        },
        [_ActionCreators_Basket_ac__WEBPACK_IMPORTED_MODULE_1__/* .getBasketNoAuth.rejected.type */ .l.rejected.type]: (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
const { addToBasket , removeFromBasket , removeAllProductFromBasket , killProduct  } = basketSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (basketSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;