import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Login} from "../ActionCreators/Auth.ac";
import {IUser} from "../../types/Auth.types";

interface IAuthState {
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
  user: IUser | null
}

const initialState: IAuthState = {
  isAuth: false,
  isLoading: false,
  error: null,
  user: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LogIn: (state: IAuthState, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    }
  },
  extraReducers: {
    [Login.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.isLoading = false;
      state.error = null
      state.user = action.payload;
    },
    [Login.pending.type]: (state) => {
      state.isLoading = true;
    },
    [Login.rejected.type]: (state,  action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload
    },
  }
})

export const { LogIn } = authSlice.actions

export default authSlice.reducer