import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../http/api";
import {IBasketProductFull} from "../../types/Product.types";

export const getBasket = createAsyncThunk(
  'basket/getBasket',
  async (props: {locale: string; ids?: number[][]}, thunkAPI) => {
    try {
      const {locale, ids} = props
      if(ids && ids.length > 0){
        const data = await $api.get<IBasketProductFull[]>(`/${locale}/basket/`)
        const newArr = ids.map(async (el, index)=>{
          // @ts-ignore
          const includes = data.data.filter((elem)=>{
            console.log(data, el)
            // @ts-ignore
            return elem.more === el[0]
          })
          if(includes[0]){
            return
          }else{
            return await $api.post(`${locale}/basket/`, {
              product: el[0]
            })
          }
        })
        if(newArr) {
          const response = await $api.get<IBasketProductFull[]>(`/${locale}/basket/`)
          return response.data.map((el) => ({
            id: el.id,
            count: el.count,
            buy_now: el.buy_now,
            more: el.more
          }));
        }
      }else{
        const response = await $api.get<IBasketProductFull[]>(`/${props.locale}/basket/`)
        return response.data.map((el) => ({
          id: el.id,
          count: el.count,
          buy_now: el.buy_now,
          more: el.more
        }));
      }
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось найти товары")
    }
  }
)

export const getBasketNoAuth = createAsyncThunk(
  'basket/getBasketNoAuth',
  async ({ids, locale}: {ids: number[][]; locale?: string}, thunkAPI) => {
    try {
      const response = await $api.get<IBasketProductFull[]>(`/${locale}/basket/new/${ids.length > 0 && `?ids=${ids.map((el)=>el[0]).join(',')}`}`)
      console.log(response.data)
      return response.data.map((el, index) => ({
        id: el.id,
        count: ids.filter((elem)=>elem[0]===el.more)[0][1] || 1,
        buy_now: el.buy_now,
        more: el.more
      }));
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось найти товары")
    }
  }
)
