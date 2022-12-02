import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IBasketProduct, IFavProduct, IProduct, IProductMore} from "../../types/Product.types";
import {getBasket} from "../ActionCreators/Basket.ac";
import {getFavs} from "../ActionCreators/Fav.ac";

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
    },
    removeFromBasket: (state: IBasketState, action: PayloadAction<number>) => {
      console.log(action.payload)
      const product = state.products.find((el)=>el.more === action.payload)
      if(product){
        let index = state.products.indexOf(product)
        state.products[index].count -= 1
        if(state.products[index].count <= 0){
          state.products.splice(index, 1)
        }
      }
    },
    removeAllProductFromBasket: (state: IBasketState) => {
      state.products = []
    },
    killProduct: (state: IBasketState, action: PayloadAction<number>) => {
      const product = state.products.find((el)=>el.more === action.payload)
      if(product){
        let index = state.products.indexOf(product)
        state.products.splice(index, 1)
      }
      state.products = [...state.products]
    },
  },
  extraReducers: {
    [getBasket.fulfilled.type]: (state, action: PayloadAction<IBasketProduct[]>) => {
      state.isLoading = false;
      state.error = null
      state.products = action.payload;
    },
    [getBasket.pending.type]: (state) => {
      state.isLoading = true;
    },
    [getBasket.rejected.type]: (state,  action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload
    },
  }
})

export const { addToBasket, removeFromBasket, removeAllProductFromBasket, killProduct } = basketSlice.actions

export default basketSlice.reducer