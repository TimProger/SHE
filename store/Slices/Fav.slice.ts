import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IFavProduct, IProduct, IProductMore} from "../../types/Product.types";
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
    toggleFav: (state: IFavState, action: PayloadAction<{ product: IFavProduct | IProduct; more: IProductMore }>) => {
      const includes = state.products.filter((el)=>el.id === action.payload.product.id)
      if(!state.products.includes(includes[0])){
        const obj = JSON.parse(JSON.stringify(action.payload.product))
        obj.product_more = [action.payload.more]
        state.products.push(obj)
        Storage.set('favs', JSON.stringify(state.products.map((el, index)=>`${el.id}:${el.product_more[0].id}`)))
      }else{
        const index = state.products.indexOf(includes[0])
        state.products.splice(index, 1)
        Storage.set('favs', JSON.stringify(state.products.map((el, index)=>`${el.id}:${el.product_more[0].id}`)))
      }
    },
    removeAllProductFromFav: (state: IFavState) => {
      state.products = []
      Storage.set('favs', JSON.stringify([]))
    },
    removeFromFavs: (state: IFavState, action: PayloadAction<number>) => {
      const product = state.products.find((el)=>el.id === action.payload)
      if(product){
        let index = state.products.indexOf(product)
        state.products.splice(index, 1)
        Storage.set('favs', JSON.stringify(state.products.map((el, index)=>`${el.id}:${el.product_more[0].id}`)))
      }
    }
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

export const { toggleFav, removeAllProductFromFav, removeFromFavs} = favSlice.actions

export default favSlice.reducer