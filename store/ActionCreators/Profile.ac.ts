import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../http/api";
import {IUser} from "../../types/Profile.types";

export const getUser = createAsyncThunk(
  'profile/getUser',
  async (_, thunkAPI) => {
    try {
      const response = await $api.get<IUser>(`/profile/`)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось найти пользователя")
    }
  }
)