import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IProduct} from "../../types/Product.types";
import {IUser} from "../../types/Profile.types";
import {getUser} from "../ActionCreators/Profile.ac";

interface IProfileState {
  isLoading: boolean;
  error: string | null;
  user: IUser | null;
  isAuth: boolean;
  history: IProduct[] | null;
  showAuth: boolean;
  showModal: boolean;
  modal: {
    type: string;
    title: string;
    desc: string;
    link: string;
  }
}

const initialState: IProfileState = {
  isLoading: false,
  error: null,
  user: null,
  isAuth: false,
  history: null,
  showAuth: false,
  showModal: false,
  modal: {
    type: '',
    title: '',
    desc: '',
    link: '',
  }
}

export const profileSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    exit: (state: IProfileState) => {
      state.user = null
      state.isAuth = false
      state.history = null
    },
    setImage: (state: IProfileState, action: PayloadAction<any>) => {
      if(state.user){
        state.user.user_image = action.payload

      }
    },
    setUser: (state: IProfileState, action: PayloadAction<IUser>) => {
      state.user = action.payload
    },
    toggleShowAuth: (state: IProfileState, action: PayloadAction<boolean>) => {
      state.showAuth = action.payload
    },
    toggleShowModal: (state: IProfileState, action: PayloadAction<boolean>) => {
      state.showModal = action.payload
    },
    setModal: (state: IProfileState, action: PayloadAction<{
      type: string;
      title: string;
      desc: string;
      link: string;
    }>) => {
      state.modal = action.payload
    }
  },
  extraReducers: {
    [getUser.fulfilled.type]: (state: IProfileState, action: PayloadAction<IUser>) => {
      state.isLoading = false;
      state.error = null
      state.user = action.payload
      state.isAuth = true
    },
    [getUser.pending.type]: (state: IProfileState) => {
      state.isLoading = true;
    },
    [getUser.rejected.type]: (state: IProfileState,  action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload
    },
  }
})

export const { exit, setImage, setUser, toggleShowAuth, toggleShowModal, setModal } = profileSlice.actions

export default profileSlice.reducer