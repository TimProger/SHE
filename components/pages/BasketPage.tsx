import {useRouter} from "next/router";
import React, {useState} from "react";
import Layout from "../../layout/layout";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../styles/pages/basket.module.scss";
import Container from "../Container";
import Head from "next/head";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {IBasketProduct, IProduct} from "../../types/Product.types";
import {
  addToBasket,
  removeAllProductFromBasket,
  removeFromBasket
} from "../../store/Slices/Basket.slice";
import Link from "next/link";
import CardFloat from "../CardFloat";

interface IBasketProps {
  translates: any;
  isLoading: boolean;
  products: IBasketProduct[];
  error: string | null;
  totalPrice: number;
  totalCount: number;
}

const BasketPage: React.FC<IBasketProps> = ({translates, products, totalPrice, totalCount}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const removeAllProductFromBasketHandler = () => {
    dispatch(removeAllProductFromBasket())
  }

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles}>
      <Head>
        <title>{translates.title}</title>
      </Head>
      <div>
        <Container>
          <div className={styles.basket}>
            <div className={styles.basket__header}>
              <h1>{translates.title}</h1>
              <div className={styles.basket__header__btns}>
                <div onClick={removeAllProductFromBasketHandler} className={styles.basket__header__btns__btn}>{translates.clear}</div>
                <div className={styles.basket__header__btns__btn}>{translates.selectAll}</div>
              </div>
            </div>
            <div className={styles.basket__products}>
              {products.length > 0 ? products.map((el, index: number)=>{
                return <CardFloat product={el} isBasket={true} />
              }) : <div className={styles.basket__products__empty}>
                <h2>{translates.empty}</h2>
                <Link href={'/catalogue'} className={styles.basket__products__empty__button}>{translates.toCatalogue}</Link>
              </div>}
            </div>
            <div className={styles.basket__info}>
              <h1 className={styles.basket__info__text}>
                {translates.total} {totalCount} {translates.productsToBuy}: <div>{totalPrice} ₽</div>
              </h1>
              <div className={styles.basket__info__button}>{translates.buy}</div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default BasketPage