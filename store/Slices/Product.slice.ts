import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IProduct} from "../../types/Product.types";
import {getSearch} from "../ActionCreators/Product.ac";

interface IProductState {
  isLoading: boolean;
  error: string | null;
  products: IProduct[] | null;
  headerMobileDropdown: string | null;
}

const initialState: IProductState = {
  isLoading: false,
  error: null,
  products: null,
  headerMobileDropdown: null
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state: IProductState, action: PayloadAction<IProduct[] | null>) => {
      state.products = action.payload
    },
    setHeaderDropdown: (state: IProductState, action: PayloadAction<string | null>) => {
      state.headerMobileDropdown = action.payload
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
      state.products = []
    },
  }
})

export const { setProducts, setHeaderDropdown } = productSlice.actions

export default productSlice.reducer