import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import {combineReducers} from "@reduxjs/toolkit";
import AuthSlice from "./Slices/Auth.slice";
import ProductSlice from "./Slices/Product.slice";
import {productAPI} from "../services/product";

const combinedReducer = combineReducers({
  auth: AuthSlice,
  product: ProductSlice,
  [productAPI.reducerPath]: productAPI.reducer
});

export const Store = () =>
  configureStore({
    reducer: combinedReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(productAPI.middleware)
    }
  });

export type RootState = ReturnType<typeof combinedReducer>
export type AppStore = ReturnType<typeof Store>
export type AppDispatch = AppStore['dispatch']
export const wrapper = createWrapper(Store, { debug: true });