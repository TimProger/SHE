import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import MainPage from "../components/pages/MainPage";
import {IProduct, ISlide} from "../types/Product.types";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import {addToBasket, removeFromBasket} from "../store/Slices/Basket.slice";
import {toggleFav} from "../store/Slices/Fav.slice";

const Main: React.FC = () => {
  const dispatch = useAppDispatch()
  const { locale } = useRouter()

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

  const toggleHandler = () => {
    dispatch(toggleFav({
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

  return (
    <>
      <div>
        <button onClick={clickHandler}>Добавить продукт</button>
        <button onClick={deleteHandler}>Удалить продукт</button>
      </div>
      <div>
        <button onClick={toggleHandler}>Добавить избранное</button>
      </div>
    </>
  )
}

export default Main