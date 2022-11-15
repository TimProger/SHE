import {combineReducers} from "@reduxjs/toolkit";
import AuthSlice from "./Auth.slice";

export const combinedReducer = combineReducers({
    auth: AuthSlice,
});

