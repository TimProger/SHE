import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../http/api";
import {IProductShort} from "../../types/Product.types";

export const getSearch = createAsyncThunk(
  'product/getSearch',
  async (name: string, thunkAPI) => {
    try {
      console.log('res1')
      const response = await $api.post<IProductShort[]>('/product/search?name='+name)
      console.log('res2', response)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось найти товары")
    }
  }
)