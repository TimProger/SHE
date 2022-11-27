import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IProduct} from "../../types/Product.types";
import {IUser} from "../../types/Profile.types";
import {getUser} from "../ActionCreators/Profile.ac";

interface IProfileState {
  isLoading: boolean;
  error: string | null;
  user: IUser | null;
  isAuth: boolean;
  history: IProduct[] | null
}

const initialState: IProfileState = {
  isLoading: false,
  error: null,
  user: null,
  isAuth: false,
  history: null
}

export const profileSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    exit: (state: IProfileState) => {
      state.user = null
      state.isAuth = false
      state.history = null
    }
  },
  extraReducers: {
    [getUser.fulfilled.type]: (state: IProfileState, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.error = null
      state.user = action.payload
      state.isAuth = true
    },
    [getUser.pending.type]: (state: IProfileState) => {
      state.isLoading = true;
    },
    [getUser.rejected.type]: (state: IProfileState,  action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload
    },
  }
})

export const { exit } = profileSlice.actions

export default profileSlice.reducer