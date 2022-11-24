import React, {useEffect, useState} from 'react';
import styles from '../styles/components/cardfloat.module.scss'
import {IBasketProduct, IFavProduct} from "../types/Product.types";
import {API_BASE_URL} from "../http/api";
import {addToBasket, removeFromBasket} from "../store/Slices/Basket.slice";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import {useRouter} from "next/router";
import {useTypedSelector} from "../hooks/useTypedSelector";

interface ICardProps {
  product: IBasketProduct | IFavProduct
  isBasket: boolean;
}

const CardFloat: React.FC<ICardProps> = ({product, isBasket = false}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const [isInBasket, setIsInBasket] = useState<boolean>(false)

  const {products} = useTypedSelector(state => state.basket)

  useEffect(()=>{
    const includes = products.filter((el)=>el.id === product.id)
    if(products.includes(includes[0])){
      setIsInBasket(true)
    }else{
      setIsInBasket(false)
    }
  }, [products])

  const {
    is_new,
    is_hit,
    is_fav,
    discount,
    image,
    name,
    price,
    color,
    article,
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
          <p className={styles.card__content__info__articul}>Артикул: SHE{article}</p>
        </div>
      </div>
      <div className={styles.card__price}>
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.34314 12.6567L12.6568 1.34303" stroke="#A0A0A0"/>
          <path d="M1.34314 1.34326L12.6568 12.657" stroke="#A0A0A0"/>
        </svg>
        <div className={styles.card__price__text}>
          {!discount && <h2 className={styles.card__price__text__discount}>{price*(20/100+1)} ₽</h2>}
          <h1 className={styles.card__price__text__price}>{price} ₽</h1>
        </div>
        {isBasket ? "count" in product && <div className={styles.card__price__button}>
          <div onClick={removeFromBasketHandler}>-</div>
          {product.count}
          <div onClick={addToBasketHandler}>+</div>
        </div> : <svg onClick={isInBasket ? removeFromBasketHandler : addToBasketHandler} className={styles.card__price__basket} width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={isInBasket ? styles.card__price__basket__active : ''} d="M5 9V5C5 2.79 6.795 1 9 1C11.21 1 13 2.795 13 5V9M1 7H17V23H1V7Z" stroke="#A0A0A0" stroke-linecap="round"/>
        </svg>
        }
      </div>
    </div>
  );
};

export default CardFloat;