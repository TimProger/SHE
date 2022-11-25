import {useRouter} from "next/router";
import React, {useState} from "react";
import Layout from "../../layout/layout";
import styles from "../../styles/pages/fav.module.scss";
import Container from "../Container";
import Head from "next/head";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {IFavProduct} from "../../types/Product.types";
import CardFloat from "../CardFloat";
import Link from "next/link";
import {removeAllProductFromFav} from "../../store/Slices/Fav.slice";

interface IFavProps {
  translates: any;
  isLoading: boolean;
  products: IFavProduct[];
  error: string | null
}

const FavPage: React.FC<IFavProps> = ({translates, products}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const removeAllProductFromFavHandler = () => {
    dispatch(removeAllProductFromFav())
  }

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles}>
      <Head>
        <title>{translates.title}</title>
      </Head>
      <div>
        <Container>
          <div className={styles.fav}>
            <div className={styles.fav__header}>
              <h1>{translates.title}</h1>
              <div className={styles.fav__header__btns}>
                <div onClick={removeAllProductFromFavHandler} className={styles.fav__header__btns__btn}>{translates.clear}</div>
              </div>
            </div>
            <div className={styles.fav__products}>
              {products.length > 0 ? products.map((el, index: number)=>{
                return <div className={styles.fav__products__card}>
                  <CardFloat product={el} isBasket={false} />
                </div>
              }) : <div className={styles.fav__products__empty}>
                <h2>{translates.empty}</h2>
                <Link href={'/catalogue'} className={styles.fav__products__empty__button}>{translates.toCatalogue}</Link>
              </div>}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default FavPage