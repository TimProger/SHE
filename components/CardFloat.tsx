import React, {useEffect, useState} from 'react';
import s from '../styles/components/cardfloat.module.scss'
import {IBasketProduct, IBasketProductFull, IFavProduct, IProduct} from "../types/Product.types";
import {$api, API_BASE_URL} from "../http/api";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import {useRouter} from "next/router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {addToBasket, removeFromBasket, killProduct} from "../store/Slices/Basket.slice";
import {removeFromFavs} from "../store/Slices/Fav.slice";
import Stock from '../public/images/stock.png'
import Link from "next/link";

interface ICardProps {
  product: IBasketProductFull
  isBasket: boolean;
}

const CardFloat: React.FC<ICardProps> = ({product, isBasket = false}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()
  const {products} = useTypedSelector(state => state.basket)

  const [isInBasket, setIsInBasket] = useState<boolean>(false)
  const [basket, setBasket] = useState<IBasketProduct | null>(null)

  const user = useTypedSelector(state => state.profile)

  useEffect(()=>{
    const includes = products.filter((el)=>el.id === product.id)
    if(products.includes(includes[0])){
      setBasket(includes[0])
      setIsInBasket(true)
    }else{
      setIsInBasket(false)
    }
  }, [products])

  const {
    discount,
    images,
    name,
    price,
    color,
    article,
    id
  } = product

  const addToBasketHandler = () => {
    if(user.isAuth){
      console.log(product)
        $api.patch(`${locale}/basket/${product.basket_id}/`, {
          count: product.product_more[0].count + 1
        })
          .then((res)=>{
            dispatch(addToBasket(res.data))
          })
          .catch(()=>{})
    }else{
      const obj = {
        id: product.id,
        more: product.id,
        buy_now: true,
        count: 1
      }
      dispatch(addToBasket(obj))
    }
  }

  const removeFromBasketHandler = () => {
    if(user.isAuth){
      if(product?.product_more[0].count <= 1){
        $api.delete(`${locale}/basket/${product.basket_id}`)
          .then((res)=>{
            dispatch(killProduct(product.basket_id))
          })
          .catch(()=>{
            dispatch(killProduct(product.basket_id))
          })
      }else{
        $api.patch(`${locale}/basket/${product.basket_id}/`, {
          count: product.product_more[0].count - 1
        })
          .then((res)=>{
            // @ts-ignore
            dispatch(removeFromBasket(product.basket_id))
          })
          .catch(()=>{
          })
      }
    }else{
      dispatch(removeFromBasket(product.id))
    }
  }

  const killProductFromBasketHandler = () => {
    if(user.isAuth){
      $api.delete(`${locale}/basket/${product.basket_id}`)
        .then((res)=>{
          dispatch(killProduct(product.product_more[0].id))
        })
        .catch(()=>{})
    }else{
      dispatch(killProduct(product.product_more[0].id))
    }
  }

  const removeFromFavsHandler = () => {
    dispatch(removeFromFavs(id))
  }

  return (
    <div className={s.card}>
      <div className={s.card__content}>
        <Link href={`${locale}/product/${product.id}`} className={s.card__content__image}>
          <img src={(images && images.length > 0 && images[0]) ? `${API_BASE_URL}${`${images[0].image}`.split('').shift() === '/' ? '' : '/'}${images[0].image}` : `${Stock.src}`} alt={name} />
        </Link>
        <div className={s.card__content__info}>
          <h2>{name}</h2>
          <p className={s.card__content__info__color}>Оттенок:
            <span style={{background: color}} className={s.card__content__info__color__block} />
          </p>
          <p className={s.card__content__info__size}>Объем, мл:
            <span>{product.product_more[0].ml}</span>
          </p>
          <p className={s.card__content__info__articul}>Артикул: {article}</p>
        </div>
      </div>
      <div className={s.card__price}>
        <svg onClick={isBasket ? killProductFromBasketHandler : removeFromFavsHandler} className={s.card__price__remove} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.34314 12.6567L12.6568 1.34303" stroke="#A0A0A0"/>
          <path d="M1.34314 1.34326L12.6568 12.657" stroke="#A0A0A0"/>
        </svg>
        <div className={s.card__price__text}>
          {discount ? <h2 className={s.card__price__text__discount}>{(product.product_more[0].price*(product.product_more[0].count || 1)).toFixed(2)} {product.product_more[0].price_currency === 'RUB' ? '₽' : '$'}</h2> : ''}
          <h1 className={s.card__price__text__price}>{(product.product_more[0].price - (discount ? (product.product_more[0].price/100)*discount : 0)*(product.product_more[0].count || 1)).toFixed(2)} {product.product_more[0].price_currency === 'RUB' ? '₽' : '$'}</h1>
        </div>
        {isBasket ? <div className={s.card__price__button}>
          <div onClick={removeFromBasketHandler}>-</div>
          {user.isAuth ? product.product_more[0].count : basket && basket.count}
          <div onClick={addToBasketHandler}>+</div>
        </div> : ''
        // <svg className={s.card__price__basket} width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //   <path className={isInBasket ? s.card__price__basket__active : ''} d="M5 9V5C5 2.79 6.795 1 9 1C11.21 1 13 2.795 13 5V9M1 7H17V23H1V7Z" stroke="#A0A0A0" strokeLinecap="round"/>
        // </svg>
        }
      </div>
    </div>
  );
};

export default CardFloat;