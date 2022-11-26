import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import {combineReducers} from "@reduxjs/toolkit";
import AuthSlice from "./Slices/Auth.slice";
import ProfileSlice from "./Slices/Profile.slice";
import ProductSlice from "./Slices/Product.slice";
import BasketSlice from "./Slices/Basket.slice";
import FavSlice from "./Slices/Fav.slice";

const combinedReducer = combineReducers({
  auth: AuthSlice,
  product: ProductSlice,
  profile: ProfileSlice,
  basket: BasketSlice,
  fav: FavSlice,
});

export const Store = () =>
  configureStore({
    reducer: combinedReducer,
  });

export type RootState = ReturnType<typeof combinedReducer>
export type AppStore = ReturnType<typeof Store>
export type AppDispatch = AppStore['dispatch']
export const wrapper = createWrapper(Store, { debug: true });