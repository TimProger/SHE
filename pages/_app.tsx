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
import {useAuth} from "../hooks/useAuth";

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => {

  const { locale } = useRouter()
  const dispatch = useAppDispatch()
  const {isLoading} = useTypedSelector(state => state.fav)

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

  return <Component {...pageProps} />
};

export default wrapper.withRedux(appWithTranslation(WrappedApp));