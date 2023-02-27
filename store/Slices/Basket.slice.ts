import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IBasketProduct, IFavProduct, IProduct, IProductMore} from "../../types/Product.types";
import {getBasket, getBasketNoAuth} from "../ActionCreators/Basket.ac";
import {getFavs} from "../ActionCreators/Fav.ac";
import {Storage} from "../../utils/storage";

interface IBasketState {
  isLoading: boolean;
  error: string | null;
  products: IBasketProduct[];
  showCopy: boolean,
  showCopyData: string[]
}

const initialState: IBasketState = {
  isLoading: false,
  error: null,
  products: [],
  showCopy: false,
  showCopyData: []
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {

    // Принимает товар, смотрит, есть ли товар в корзине и если нет,
    // то пушит в массив новый товар, а если есть, то увеличивает его count на +1
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

    setBasket: (state: IBasketState, action: PayloadAction<IBasketProduct[]>) => {
      state.products = [...JSON.parse(JSON.stringify(action.payload))]
      Storage.set('basket', JSON.stringify(state.products.map((el, index)=>[el.more, el.count])))
    },

    insertIntoBasket: (state: IBasketState, action: PayloadAction<IBasketProduct[]>) => {
      Storage.set('basket', JSON.stringify(state.products.map((el, index)=>[el.more, el.count])))
    },

    // Принимает more_id товара и ищет его в массиве товаров.
    // Если находит, то уменьшает счётчик на -1.
    // Если счётчик меньше или равен 0, то товар удаляется из массива.
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

    removeAllProductFromBasket: (state: IBasketState, action: PayloadAction<undefined | number[]>) => {
      if(action.payload){
        action.payload.map((el)=>{
          const includes = state.products.find(elem => elem.more === el)
          if(includes){
            const index = state.products.indexOf(includes)
            state.products.splice(index, 1)
          }
        })
      }else{
        state.products = []
      }
      Storage.set('basket', JSON.stringify([]))
    },

    killProduct: (state: IBasketState, action: PayloadAction<number>) => {
      const product = state.products.find((el)=>el.more === action.payload)
      if(product){
        let index = state.products.indexOf(product)
        state.products.splice(index, 1)
      }
      state.products = [...state.products]
      Storage.set('basket', JSON.stringify(state.products.map((el, index)=>[el.more, el.count])))
    },

    setShowCopy: (state: IBasketState, action: PayloadAction<boolean>) => {
      state.showCopy = action.payload
    },

    setShowCopyData: (state: IBasketState, action: PayloadAction<string[]>) => {
      state.showCopyData = action.payload
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

export const {
  addToBasket,
  removeFromBasket,
  removeAllProductFromBasket,
  killProduct,
  setBasket,
  setShowCopy,
  setShowCopyData,
  insertIntoBasket
} = basketSlice.actions

export default basketSlice.reducer