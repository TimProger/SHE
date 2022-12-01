import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../http/api";
import {IProductShort} from "../../types/Product.types";

export const getSearch = createAsyncThunk(
  'product/getSearch',
  async ({name, locale}: {name: string; locale?: string}, thunkAPI) => {
    try {
      const response = await $api.get<IProductShort[]>(`/${locale}/product/search/${name}?limit=10`)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось найти товары")
    }
  }
)