import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IProductShort, IProduct} from "../../types/Product.types";
import {IUser} from "../../types/Auth.types";
import {getSearch} from "../ActionCreators/Product.ac";

interface IProductState {
  isLoading: boolean;
  error: string | null;
  products: IProduct[] | null
}

const initialState: IProductState = {
  isLoading: false,
  error: null,
  products: null
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setPosts: (state: IProductState, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload
    }
  },
  extraReducers: {
    [getSearch.fulfilled.type]: (state, action: PayloadAction<IProduct[]>) => {
      state.isLoading = false;
      state.error = null
      state.products = action.payload;
    },
    [getSearch.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getSearch.rejected.type]: (state,  action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload
    },
  }
})

export const { setPosts } = productSlice.actions

export default productSlice.reducer