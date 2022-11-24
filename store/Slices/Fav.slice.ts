import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IFavProduct, IProduct} from "../../types/Product.types";
import {Storage} from "../../utils/storage";
import {getFavs} from "../ActionCreators/Fav.ac";

interface IFavState {
  isLoading: boolean;
  error: string | null;
  products: IFavProduct[];
}

const initialState: IFavState = {
  isLoading: false,
  error: null,
  products: [],
}

export const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    toggleFav: (state: IFavState, action: PayloadAction<IFavProduct>) => {
      const includes = state.products.filter((el)=>el.id === action.payload.id)
      if(!state.products.includes(includes[0])){
        state.products.push(action.payload)
        Storage.set('favs', JSON.stringify(state.products.map((el, index)=>el.id)))
      }else{
        const index = state.products.indexOf(includes[0])
        state.products.splice(index, 1)
        Storage.set('favs', JSON.stringify(state.products.map((el, index)=>el.id)))
      }
    },
    removeAllProductFromFav: (state: IFavState) => {
      state.products = []
      Storage.set('favs', JSON.stringify([]))
    },
  },
  extraReducers: {
    [getFavs.fulfilled.type]: (state, action: PayloadAction<IFavProduct[]>) => {
      state.isLoading = false;
      state.error = null
      state.products = action.payload;
    },
    [getFavs.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getFavs.rejected.type]: (state,  action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload
    },
  }
})

export const { toggleFav, removeAllProductFromFav } = favSlice.actions

export default favSlice.reducer