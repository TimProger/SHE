import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IProduct} from "../../types/Product.types";

interface IBasketProduct extends IProduct {
  count: number;
}

interface IBasketState {
  isLoading: boolean;
  error: string | null;
  products: IBasketProduct[];
  totalPrice: number;
}

const initialState: IBasketState = {
  isLoading: false,
  error: null,
  products: [],
  totalPrice: 0
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state: IBasketState, action: PayloadAction<IProduct>) => {
      const includes = state.products.filter((el)=>el.id === action.payload.id)
      if(!state.products.includes(includes[0])){
        const basketProduct = {
          count: 1,
        }
        const product = Object.assign(basketProduct, action.payload)
        state.products.push(product)
        state.totalPrice += product.price
      }else{
        const index = state.products.indexOf(includes[0])
        state.products[index].count += 1
        state.totalPrice += includes[0].price
      }
    },
    removeFromBasket: (state: IBasketState, action: PayloadAction<number>) => {
      const product = state.products.find((el)=>el.id === action.payload)
      if(product){
        let index = state.products.indexOf(product)
        state.products[index].count -= 1
        state.totalPrice -= product.price
        if(state.products[index].count <= 0){
          state.products.splice(index, 1)
        }
      }
    },
  },
})

export const { addToBasket, removeFromBasket } = basketSlice.actions

export default basketSlice.reducer