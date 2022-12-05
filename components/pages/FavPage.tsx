import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Layout from "../../layout/layout";
import s from "../../styles/pages/fav.module.scss";
import Container from "../Container";
import Head from "next/head";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {IBasketProductFull, IFavProduct, IProduct} from "../../types/Product.types";
import CardFloat from "../CardFloat";
import Link from "next/link";
import {removeAllProductFromFav} from "../../store/Slices/Fav.slice";
import Button from "../Button";
import {$api} from "../../http/api";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {getFavs} from "../../store/ActionCreators/Fav.ac";

interface IFavProps {
  translates: any;
}

const FavPage: React.FC<IFavProps> = ({translates}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

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
        <title>{translates.title} | ™SHE</title>
      </Head>
      <div>
        <Container>
          <div className={s.fav}>
            <div className={s.fav__header}>
              <h1>{translates.title}</h1>
              <div className={s.fav__header__btns}>
                <div onClick={removeAllProductFromFavHandler} className={s.fav__header__btns__btn}>{translates.clear}</div>
              </div>
            </div>
            <div className={s.fav__products}>
              {newProducts.length > 0 ? newProducts.map((el, index: number)=>{
                return <div className={s.fav__products__card}>
                  <CardFloat product={el} isBasket={false} />
                </div>
              }) : <div className={s.fav__products__empty}>
                <h2>{translates.empty}</h2>
                <Button type={'link'} href={'/catalog'} text={translates.toCatalogue} />
              </div>}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default FavPage