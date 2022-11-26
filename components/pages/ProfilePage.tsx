import Layout from "../../layout/layout";
import s from '../../styles/pages/product.module.scss'
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Container from "../../components/Container";
import Head from "next/head";
import {IBasketProduct, IProduct, IProductMore} from "../../types/Product.types";
import {API_BASE_URL} from "../../http/api";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {addToBasket, removeFromBasket} from "../../store/Slices/Basket.slice";
import {toggleFav} from "../../store/Slices/Fav.slice";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {Storage} from "../../utils/storage";
import {getUser} from "../../store/ActionCreators/Profile.ac";

interface IProfilePageProps {
  translates: any;
}

const Product: React.FC<IProfilePageProps> = ({translates}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const { isAuth, isLoading, user } = useTypedSelector(state => state.profile)

  useEffect(()=>{
    if(typeof window !== undefined){
      if(!Storage.get('accessToken')){
        window.location.replace('/')
      }
    }
  },[])

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles}>
      <Head>
        <title>{translates.title} | ™SHE</title>
      </Head>
      <div>
        <Container>
          {!isLoading && user && <p>{user.phone}</p>}
        </Container>
      </div>
    </Layout>
  )
}

export default Product