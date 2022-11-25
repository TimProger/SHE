import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IAuthState {
  isAuth: boolean;
  isLoading: boolean;
  error: string | null;
}

const initialState: IAuthState = {
  isAuth: false,
  isLoading: false,
  error: null,
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
  }
})

export const { LogIn } = authSlice.actions

export default authSlice.reducer