import React, {useEffect, useState} from 'react';
import s from '../styles/components/cardfloat.module.scss'
import {IBasketProduct, IBasketProductFull, IFavProduct, IProduct} from "../types/Product.types";
import {API_BASE_URL} from "../http/api";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import {useRouter} from "next/router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {addToBasket, removeFromBasket} from "../store/Slices/Basket.slice";
import {removeFromFavs} from "../store/Slices/Fav.slice";

interface ICardProps {
  product: IProduct
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
    discount,
    image,
    name,
    price,
    product_more,
    color,
    article,
    id
  } = product

  const addToBasketHandler = () => {
    const obj = {
      id: product.id,
      more: product.product_more[0].id,
      buy_now: true,
      count: 1
    }
    dispatch(addToBasket(obj))
  }

  const removeFromBasketHandler = () => {
    dispatch(removeFromBasket(id))
  }

  const removeFromFavsHandler = () => {
    dispatch(removeFromFavs(id))
  }

  return (
    <div className={s.card}>
      <div className={s.card__content}>
        <div className={s.card__content__image}>
          <img src={`${API_BASE_URL}${`${image}`.split('').shift() === '/' ? '' : '/'}${image}`} alt={name} />
        </div>
        <div className={s.card__content__info}>
          <h2>{name}</h2>
          <p className={s.card__content__info__color}>Оттенок:
            <span style={{background: color}} className={s.card__content__info__color__block} />
          </p>
          <p className={s.card__content__info__size}>Объем, мл:
            <span>{product_more[0].ml}</span>
          </p>
          <p className={s.card__content__info__articul}>Артикул: {article}</p>
        </div>
      </div>
      <div className={s.card__price}>
        <svg onClick={isBasket ? removeFromBasketHandler : removeFromFavsHandler} className={s.card__price__remove} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.34314 12.6567L12.6568 1.34303" stroke="#A0A0A0"/>
          <path d="M1.34314 1.34326L12.6568 12.657" stroke="#A0A0A0"/>
        </svg>
        <div className={s.card__price__text}>
          {discount ? <h2 className={s.card__price__text__discount}>{(product_more[0].price*(discount/100+1)*(product?.count || 1)).toFixed(2)} {product_more[0].price_currency === 'RUB' ? '₽' : '$'}</h2> : ''}
          <h1 className={s.card__price__text__price}>{(product_more[0].price*(product?.count || 1)).toFixed(2)} {product_more[0].price_currency === 'RUB' ? '₽' : '$'}</h1>
        </div>
        {isBasket ? <div className={s.card__price__button}>
          <div onClick={removeFromBasketHandler}>-</div>
          {product?.count}
          <div onClick={addToBasketHandler}>+</div>
        </div> : <svg onClick={isInBasket ? removeFromBasketHandler : addToBasketHandler} className={s.card__price__basket} width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className={isInBasket ? s.card__price__basket__active : ''} d="M5 9V5C5 2.79 6.795 1 9 1C11.21 1 13 2.795 13 5V9M1 7H17V23H1V7Z" stroke="#A0A0A0" strokeLinecap="round"/>
        </svg>
        }
      </div>
    </div>
  );
};

export default CardFloat;