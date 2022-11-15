import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'
import {combinedReducer} from "./Slices";

export const Store = () =>
  configureStore({
    reducer: combinedReducer,
  });

export type RootState = ReturnType<typeof combinedReducer>
export const wrapper = createWrapper(Store, { debug: true });