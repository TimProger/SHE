import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IBasketProduct, IFavProduct, IProduct, IProductMore} from "../../types/Product.types";
import {getBasket, getBasketNoAuth} from "../ActionCreators/Basket.ac";
import {getFavs} from "../ActionCreators/Fav.ac";
import {Storage} from "../../utils/storage";

interface IBasketState {
  isLoading: boolean;
  error: string | null;
  products: IBasketProduct[];
}

const initialState: IBasketState = {
  isLoading: false,
  error: null,
  products: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state: IBasketState, action: PayloadAction<IBasketProduct>) => {
      const includes = state.products.filter((el)=>el.more === action.payload.more)
      if(!state.products.includes(includes[0])){
        state.products.push(action.payload)
      }else{
        const index = state.products.indexOf(includes[0])
        state.products[index].count += 1
      }
      Storage.set('basket', JSON.stringify(state.products.map((el, index)=>[el.more, el.count])))
    },
    removeFromBasket: (state: IBasketState, action: PayloadAction<number>) => {
      const product = state.products.find((el)=>el.more === action.payload)
      if(product){
        let index = state.products.indexOf(product)
        state.products[index].count -= 1
        if(state.products[index].count <= 0){
          state.products.splice(index, 1)

        }
        Storage.set('basket', JSON.stringify(state.products.map((el, index)=>[el.more, el.count])))
      }
    },
    removeAllProductFromBasket: (state: IBasketState) => {
      state.products = []
      Storage.set('basket', JSON.stringify([]))
    },
    killProduct: (state: IBasketState, action: PayloadAction<number>) => {
      const product = state.products.find((el)=>el.id === action.payload)
      if(product){
        let index = state.products.indexOf(product)
        state.products.splice(index, 1)
      }
      state.products = [...state.products]
      console.log(state.products)
      Storage.set('basket', JSON.stringify(state.products.map((el, index)=>[el.more, el.count])))
      console.log(state.products)
    },
  },
  extraReducers: {
    [getBasket.fulfilled.type]: (state, action: PayloadAction<IBasketProduct[]>) => {
      state.isLoading = false;
      state.error = null
      state.products = action.payload;
      Storage.set('basket', JSON.stringify(state.products.map((el, index)=>[el.more, el.count])))
    },
    [getBasket.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBasket.rejected.type]: (state,  action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload
    },
    [getBasketNoAuth.fulfilled.type]: (state, action: PayloadAction<IBasketProduct[]>) => {
      state.isLoading = false;
      state.error = null
      state.products = action.payload;
      Storage.set('basket', JSON.stringify(state.products.map((el, index)=>[el.more, el.count])))
    },
    [getBasketNoAuth.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBasketNoAuth.rejected.type]: (state,  action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload
    },
  }
})

export const { addToBasket, removeFromBasket, removeAllProductFromBasket, killProduct } = basketSlice.actions

export default basketSlice.reducer