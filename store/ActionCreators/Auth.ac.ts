import {IUser} from "../../types/Auth.types";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../http/api";

export const Login = createAsyncThunk(
  'auth/Login',
  async (_, thunkAPI) => {
    try {
      const response = await $api.post<IUser[]>('')
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось авторизоваться")
    }
  }
)