import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IBasketProduct, IFavProduct, IProduct, IProductMore} from "../../types/Product.types";

interface IBasketState {
  isLoading: boolean;
  error: string | null;
  products: IBasketProduct[];
  totalPrice: number;
  totalCount: number;
}

const initialState: IBasketState = {
  isLoading: false,
  error: null,
  products: [],
  totalPrice: 0,
  totalCount: 0
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state: IBasketState, action: PayloadAction<{ product: IBasketProduct | IProduct; more: IProductMore }>) => {
      const includes = state.products.filter((el)=>el.id === action.payload.product.id)
      if(!state.products.includes(includes[0])){
        const basketProduct = {
          count: 1,
        }
        const product = Object.assign(basketProduct, action.payload.product)
        const obj = JSON.parse(JSON.stringify(product))
        obj.product_more = [action.payload.more]
        console.log(obj)
        state.products.push(obj)
        state.totalCount += 1
        state.totalPrice = +(obj.product_more[0].price * state.totalCount).toFixed(2)
      }else{
        const index = state.products.indexOf(includes[0])
        state.products[index].count += 1
        state.totalCount += 1
        state.totalPrice = +(includes[0].product_more[0].price * state.totalCount).toFixed(2)
      }
    },
    removeFromBasket: (state: IBasketState, action: PayloadAction<number>) => {
      const product = state.products.find((el)=>el.id === action.payload)
      if(product){
        let index = state.products.indexOf(product)
        state.products[index].count -= 1
        state.totalCount -= 1
        state.totalPrice = +(product.product_more[0].price * state.totalCount).toFixed(2)
        if(state.products[index].count <= 0){
          state.products.splice(index, 1)
        }
      }
    },
    removeAllProductFromBasket: (state: IBasketState) => {
      state.products = []
      state.totalCount = 0
      state.totalPrice = 0
    },
  },
})

export const { addToBasket, removeFromBasket, removeAllProductFromBasket } = basketSlice.actions

export default basketSlice.reducer