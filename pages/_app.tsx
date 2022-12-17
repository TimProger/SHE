import React, {FC, useEffect} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from "../store";
import '../styles/globals.scss'
import {appWithTranslation} from "next-i18next";
import {Storage} from "../utils/storage";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import {getFavs} from "../store/ActionCreators/Fav.ac";
import {useRouter} from "next/router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {getUser} from "../store/ActionCreators/Profile.ac";
import {getBasket, getBasketNoAuth} from "../store/ActionCreators/Basket.ac";

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => {

  const { locale } = useRouter()
  const dispatch = useAppDispatch()
  const {isLoading} = useTypedSelector(state => state.fav)
  const profileState = useTypedSelector(state => state.profile)

  useEffect(()=>{
    if(!isLoading){
      // Проверить на isAuth и если true, то не заходить в Storage
      // и сразу отправлять запрос за favs и basket
      const favs = Storage.get('favs')
      if(favs && JSON.parse(favs).length > 0){
        dispatch(getFavs({ids: JSON.parse(favs), locale}))
      }
    }
  }, [])

  useEffect(()=>{
    if(!profileState.isAuth){
      if(Storage.get('accessToken')){
        dispatch(getUser())
      }
    }
  },[])

  useEffect(()=>{
    if(profileState.isAuth){
      const basket = Storage.get('basket')
      console.log(basket)
      if(basket && JSON.parse(basket).length > 0) {
        dispatch(getBasket({locale: locale ?? 'ru', ids: JSON.parse(basket)}))
      }else{
        dispatch(getBasket({locale: locale ?? 'ru'}))
      }
    }else{
      const basket = Storage.get('basket')
      console.log(basket)
      if(basket && JSON.parse(basket).length > 0) {
        dispatch(getBasketNoAuth({locale: locale ?? 'ru', ids: JSON.parse(basket)}))
      }
    }
  }, [profileState.isAuth])

  return <Component {...pageProps} />
};

export default wrapper.withRedux(appWithTranslation(WrappedApp));