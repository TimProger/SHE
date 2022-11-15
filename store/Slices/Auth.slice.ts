import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IAuthState {
  isAuth: boolean
}

const initialState: IAuthState = {
  isAuth: false
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    LogIn: (state: IAuthState, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    }
  }
})

export const { LogIn } = authSlice.actions

export default authSlice.reducer