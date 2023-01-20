"use strict";
exports.id = 50;
exports.ids = [50];
exports.modules = {

/***/ 4840:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ useAppDispatch)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useAppDispatch = ()=>(0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();


/***/ }),

/***/ 4789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ useTypedSelector)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);

const useTypedSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;


/***/ }),

/***/ 2139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CT": () => (/* binding */ API_BASE_URL),
/* harmony export */   "Wh": () => (/* binding */ $api)
/* harmony export */ });
/* unused harmony exports APP_BASE_URL, $api_with_auth */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
/* harmony import */ var _utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const PORT = 3000;
const API_BASE_URL = "https://api.tm-she.com";
const APP_BASE_URL = (/* unused pure expression or super */ null && (`http://localhost:3000`));
const $api = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: API_BASE_URL,
    headers: {
        common: {
            accept: "application/json"
        }
    }
});
const $api_with_auth = axios__WEBPACK_IMPORTED_MODULE_0__["default"].create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    headers: {
        common: {
            accept: "application/json"
        }
    }
});
const authInterceptor = (config)=>{
    if (config.headers) {
        config.headers.Authorization = _utils_storage__WEBPACK_IMPORTED_MODULE_1__/* .Storage.get */ .K.get("accessToken");
    }
    return config;
};
$api.interceptors.request.use(authInterceptor);
$api.interceptors.response.use((config)=>{
    return config;
}, async (error)=>{
    const originalRequest = error.config;
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try {
            const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${API_BASE_URL}/api_v2/jwt/refresh`);
            _utils_storage__WEBPACK_IMPORTED_MODULE_1__/* .Storage.set */ .K.set("accessToken", "Bearer " + response.data.access);
            originalRequest.headers.Authorization = "Bearer " + response.data.access;
            return $api.request(originalRequest);
        } catch (e) {
            _utils_storage__WEBPACK_IMPORTED_MODULE_1__/* .Storage["delete"] */ .K["delete"]("accessToken");
            window.location.replace(`/`);
        }
    }
    throw error;
});


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9266:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ getSearch)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http_api__WEBPACK_IMPORTED_MODULE_1__]);
_http_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getSearch = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("product/getSearch", async ({ name , locale  }, thunkAPI)=>{
    try {
        const response = await _http_api__WEBPACK_IMPORTED_MODULE_1__/* .$api.get */ .Wh.get(`/${locale}/product/search/${name}?limit=10`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue("Не удалось найти товары");
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5303:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ getUser)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _http_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2139);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_http_api__WEBPACK_IMPORTED_MODULE_1__]);
_http_api__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("profile/getUser", async (_, thunkAPI)=>{
    try {
        const response = await _http_api__WEBPACK_IMPORTED_MODULE_1__/* .$api.get */ .Wh.get(`/profile/`);
        return response.data;
    } catch (e) {
        return thunkAPI.rejectWithValue("Не удалось найти пользователя");
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 43:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JF": () => (/* binding */ exit),
/* harmony export */   "QL": () => (/* binding */ setImage),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "zD": () => (/* binding */ toggleShowAuth)
/* harmony export */ });
/* unused harmony export profileSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActionCreators_Profile_ac__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5303);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ActionCreators_Profile_ac__WEBPACK_IMPORTED_MODULE_1__]);
_ActionCreators_Profile_ac__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const initialState = {
    isLoading: false,
    error: null,
    user: null,
    isAuth: false,
    history: null,
    showAuth: false
};
const profileSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "product",
    initialState,
    reducers: {
        exit: (state)=>{
            state.user = null;
            state.isAuth = false;
            state.history = null;
        },
        setImage: (state, action)=>{
            if (state.user) {
                state.user.user_image = action.payload;
            }
        },
        toggleShowAuth: (state, action)=>{
            state.showAuth = action.payload;
        }
    },
    extraReducers: {
        [_ActionCreators_Profile_ac__WEBPACK_IMPORTED_MODULE_1__/* .getUser.fulfilled.type */ .P.fulfilled.type]: (state, action)=>{
            state.isLoading = false;
            state.error = null;
            state.user = action.payload;
            state.isAuth = true;
        },
        [_ActionCreators_Profile_ac__WEBPACK_IMPORTED_MODULE_1__/* .getUser.pending.type */ .P.pending.type]: (state)=>{
            state.isLoading = true;
        },
        [_ActionCreators_Profile_ac__WEBPACK_IMPORTED_MODULE_1__/* .getUser.rejected.type */ .P.rejected.type]: (state, action)=>{
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});
const { exit , setImage , toggleShowAuth  } = profileSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (profileSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ Storage)
/* harmony export */ });
const Storage = {
    set: (name, item)=>{
        localStorage.setItem("pb_" + name, JSON.stringify(item));
    },
    get: (name)=>{
        const item = localStorage.getItem("pb_" + name);
        if (item) {
            return JSON.parse(item);
        }
    },
    delete: (name)=>{
        localStorage.removeItem("pb_" + name);
    }
};


/***/ })

};
;