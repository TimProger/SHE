import React from 'react';
import styles from '../styles/components/cardfloat.module.scss'
import {IBasketProduct} from "../types/Product.types";
import {API_BASE_URL} from "../http/api";
import {addToBasket, removeFromBasket} from "../store/Slices/Basket.slice";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import {useRouter} from "next/router";

interface ICardProps {
  product: IBasketProduct
  isBasket: boolean;
}

const CardFloat: React.FC<ICardProps> = ({product, isBasket = false}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const {
    is_new,
    is_hit,
    is_fav,
    discount,
    image,
    name,
    price,
    color,
    count,
    id
  } = product

  const addToBasketHandler = () => {
    dispatch(addToBasket(product))
  }

  const removeFromBasketHandler = () => {
    dispatch(removeFromBasket(id))
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__content}>
        <div className={styles.card__content__image}>
          <img src={`${API_BASE_URL}${image}`} alt={name} />
        </div>
        <div className={styles.card__content__info}>
          <h2>{name}</h2>
          <p className={styles.card__content__info__color}>Оттенок:
            <span style={{background: color}} className={styles.card__content__info__color__block} />
          </p>
          <p className={styles.card__content__info__size}>Объем, мл:
            <span>10 мл</span>
          </p>
          <p className={styles.card__content__info__articul}>Артикул: SHE503</p>
        </div>
      </div>
      <div className={styles.card__price}>
        <p></p>
        <div className={styles.card__price__text}>
          {!discount && <h2 className={styles.card__price__text__discount}>{price*(20/100+1)} ₽</h2>}
          <h1 className={styles.card__price__text__price}>{price} ₽</h1>
        </div>
        {isBasket ? <div className={styles.card__price__button}>
          <div onClick={removeFromBasketHandler}>-</div>
          {count}
          <div onClick={addToBasketHandler}>+</div>
        </div> : <p></p>}
      </div>
    </div>
  );
};

export default CardFloat;