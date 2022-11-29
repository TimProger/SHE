import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../http/api";
import {IBasketProductFull} from "../../types/Product.types";

export const getBasket = createAsyncThunk(
  'basket/getBasket',
  async (locale: string, thunkAPI) => {
    try {
      const response = await $api.get<IBasketProductFull[]>(`/${locale}/basket/`)
      return response.data.map((el) => ({
        id: el.id,
        count: el.product_more[0].count,
        buy_now: el.buy_now,
        product: el.product_id
      }));
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось найти товары")
    }
  }
)