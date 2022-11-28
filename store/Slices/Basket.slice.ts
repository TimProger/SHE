import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IBasketProduct, IFavProduct, IProduct, IProductMore} from "../../types/Product.types";

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
      const includes = state.products.filter((el)=>el.id === action.payload.id)
      if(!state.products.includes(includes[0])){
        state.products.push(action.payload)
      }else{
        const index = state.products.indexOf(includes[0])
        state.products[index].count += 1
      }
    },
    removeFromBasket: (state: IBasketState, action: PayloadAction<number>) => {
      const product = state.products.find((el)=>el.id === action.payload)
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
  },
})

export const { addToBasket, removeFromBasket, removeAllProductFromBasket } = basketSlice.actions

export default basketSlice.reducer