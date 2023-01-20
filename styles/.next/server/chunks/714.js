"use strict";
exports.id = 714;
exports.ids = [714];
exports.modules = {

/***/ 4800:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ getFavs)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http_api__WEBPACK_IMPORTED_MODULE_1__]);
_http_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getFavs = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("fav/getFavs", async ({ ids , locale  }, thunkAPI)=>{
    try {
        const response = await _http_api__WEBPACK_IMPORTED_MODULE_1__/* .$api.get */ .Wh.get(`/${locale}/basket/new/${ids.length > 0 && `?ids=${ids.join(",")}`}`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue("Не удалось найти товары");
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9714:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EF": () => (/* binding */ removeAllProductFromFav),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "h2": () => (/* binding */ removeFromFavs),
/* harmony export */   "w6": () => (/* binding */ toggleFav)
/* harmony export */ });
/* unused harmony export favSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5838);
/* harmony import */ var _ActionCreators_Fav_ac__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4800);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ActionCreators_Fav_ac__WEBPACK_IMPORTED_MODULE_2__]);
_ActionCreators_Fav_ac__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const initialState = {
    isLoading: false,
    error: null,
    products: []
};
const favSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "fav",
    initialState,
    reducers: {
        toggleFav: (state, action)=>{
            const includes = state.products.filter((el)=>el.more === action.payload.more);
            if (!state.products.includes(includes[0])) {
                state.products.push(action.payload);
            } else {
                const index = state.products.indexOf(includes[0]);
                state.products.splice(index, 1);
            }
            _utils_storage__WEBPACK_IMPORTED_MODULE_1__/* .Storage.set */ .K.set("favs", JSON.stringify(state.products.map((el, index)=>el.more)));
        },
        removeAllProductFromFav: (state)=>{
            state.products = [];
            _utils_storage__WEBPACK_IMPORTED_MODULE_1__/* .Storage.set */ .K.set("favs", JSON.stringify([]));
        },
        removeFromFavs: (state, action)=>{
            const product = state.products.find((el)=>el.more === action.payload);
            if (product) {
                let index = state.products.indexOf(product);
                state.products.splice(index, 1);
                _utils_storage__WEBPACK_IMPORTED_MODULE_1__/* .Storage.set */ .K.set("favs", JSON.stringify(state.products.map((el, index)=>el.more)));
            }
        }
    },
    extraReducers: {
        [_ActionCreators_Fav_ac__WEBPACK_IMPORTED_MODULE_2__/* .getFavs.fulfilled.type */ .W.fulfilled.type]: (state, action)=>{
            state.isLoading = false;
            state.error = null;
            state.products = action.payload;
            _utils_storage__WEBPACK_IMPORTED_MODULE_1__/* .Storage.set */ .K.set("favs", JSON.stringify(state.products.map((el, index)=>el.more)));
        },
        [_ActionCreators_Fav_ac__WEBPACK_IMPORTED_MODULE_2__/* .getFavs.pending.type */ .W.pending.type]: (state)=>{
            state.isLoading = true;
        },
        [_ActionCreators_Fav_ac__WEBPACK_IMPORTED_MODULE_2__/* .getFavs.rejected.type */ .W.rejected.type]: (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
const { toggleFav , removeAllProductFromFav , removeFromFavs  } = favSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (favSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;