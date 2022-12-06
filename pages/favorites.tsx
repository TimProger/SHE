import React, {useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {removeAllProductFromFav} from "../store/Slices/Fav.slice";
import {IBasketProductFull} from "../types/Product.types";
import {getFavs} from "../store/ActionCreators/Fav.ac";
import Layout from "../components/Layout";
import Head from "next/head";
import Container from "../components/Container";
import s from "../styles/pages/fav.module.scss";
import CardFloat from "../components/CardFloat";
import Button from "../components/Button";
import {useAppDispatch} from "../hooks/useTypedDispatch";

const Favorites: React.FC = () => {

  const { locale } = useRouter()
  const dispatch = useAppDispatch()
  const { t } = useTranslation('fav')

  const removeAllProductFromFavHandler = () => {
    dispatch(removeAllProductFromFav())
  }

  const {products, isLoading, error} = useTypedSelector(state => state.fav)
  const [newProducts, setNewProducts] = useState<IBasketProductFull[]>([])

  useEffect(()=>{
    dispatch(getFavs({ids: products.map((el)=>el.more), locale}))
  },[locale])

  useEffect(()=>{
    // @ts-ignore
    setNewProducts([...products])
  }, [locale, products])

  return (
    <Layout>
      <Head>
        <title>{t('title')} | ™SHE</title>
      </Head>
      <div>
        <Container>
          <div className={s.fav}>
            <div className={s.fav__header}>
              <h1>{t('title')}</h1>
              <div className={s.fav__header__btns}>
                <div onClick={removeAllProductFromFavHandler} className={s.fav__header__btns__btn}>{t('clear')}</div>
              </div>
            </div>
            <div className={s.fav__products}>
              {newProducts.length > 0 ? newProducts.map((el, index: number)=>{
                return <div className={s.fav__products__card}>
                  <CardFloat product={el} isBasket={false} />
                </div>
              }) : <div className={s.fav__products__empty}>
                <h2>{t('empty')}</h2>
                <Button type={'link'} href={'/catalog'} text={t('toCatalogue')} />
              </div>}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string ?? 'ru', ['fav', 'common']))
    },
    revalidate: 10
  }
}

export default Favorites;