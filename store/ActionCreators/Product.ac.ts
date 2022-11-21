import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../http/api";
import {IProductShort} from "../../types/Product.types";

export const getSearch = createAsyncThunk(
  'product/getSearch',
  async (name: string, thunkAPI) => {
    try {
      const response = await $api.post<IProductShort[]>('/product/search?name='+name)
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось найти товары")
    }
  }
)

export const getSlidesMain = createAsyncThunk(
  'product/getSlidesMain',
  async (name: string, thunkAPI) => {
    try {
      const response = await $api.post<IProductShort[]>('/product/slides')
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Произошла ошибка при получении слайдов")
    }
  }
)

export const getSlidesHit = createAsyncThunk(
  'product/getSlidesHit',
  async (name: string, thunkAPI) => {
    try {
      const response = await $api.post<IProductShort[]>('/product/slides/hit')
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Произошла ошибка при получении слайдов")
    }
  }
)

export const getSlidesNew = createAsyncThunk(
  'product/getSlidesNew',
  async (name: string, thunkAPI) => {
    try {
      const response = await $api.post<IProductShort[]>('/product/slides/new')
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Произошла ошибка при получении слайдов")
    }
  }
)