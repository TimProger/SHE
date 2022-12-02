import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../http/api";
import {IProductShort} from "../../types/Product.types";

export const getFavs = createAsyncThunk(
  'fav/getFavs',
  async ({ids, locale}: {ids: number[]; locale?: string}, thunkAPI) => {
    try {
      const response = await $api.get<IProductShort[]>(`/${locale}/basket/new/${ids.length > 0 && `?ids=${ids.join(',')}`}`)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось найти товары")
    }
  }
)