import {useRouter} from "next/router";
import React, {useState} from "react";
import Layout from "../../layout/layout";
import "swiper/css";
import "swiper/css/pagination";
import styles from "../../styles/pages/basket.module.scss";
import Container from "../Container";
import Head from "next/head";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {IProduct} from "../../types/Product.types";
import {addToBasket, removeFromBasket} from "../../store/Slices/Basket.slice";

interface IBasketProps {
  translates: any;
  isLoading: boolean;
  products: IProduct[];
  error: string | null
}

const BasketPage: React.FC<IBasketProps> = ({translates, products}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const clickHandler = () => {
    dispatch(addToBasket({
      id: 3,
      type: "Гель-лак",
      name: "Первый----------",
      about: "в",
      image: "/staticfiles/img/product/product.png",
      is_hit: false,
      is_new: false,
      is_fav: false,
      discount: null,
      price: 230.0,
      color: "#000"
    }))
  }

  const deleteHandler = () => {
    dispatch(removeFromBasket(3))
  }

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles}>
      <Head>
        <title>{translates.title}</title>
      </Head>
      <div>
        <Container>
          <div>
            <button onClick={clickHandler}>Добавить продукт</button>
            <button onClick={deleteHandler}>Удалить продукт</button>
          </div>
          <div>{products.map((el, index: number)=>{
            return <div key={index}>{el.name}</div>
          })}</div>
        </Container>
      </div>
    </Layout>
  )
}

export default BasketPage