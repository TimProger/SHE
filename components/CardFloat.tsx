import React, {useEffect, useState} from 'react';
import s from '../styles/components/cardfloat.module.scss'
import {IBasketProduct, IBasketProductFull, IFavProduct, IProduct, IProductMore} from "../types/Product.types";
import {$api, API_BASE_URL} from "../http/api";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import {useRouter} from "next/router";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {addToBasket, removeFromBasket, killProduct} from "../store/Slices/Basket.slice";
import {removeFromFavs} from "../store/Slices/Fav.slice";
import Stock from '../public/images/stock.png'
import Link from "next/link";
import {sendMetrik} from "../utils/metriks";
import Image from "next/image";

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
  const [newProduct, setNewProduct] = useState<IBasketProduct | null>(null)

  const user = useTypedSelector(state => state.profile)

  useEffect(()=>{
    const includes = products.filter((el)=>el.more === product.more)
    if(products.includes(includes[0])){
      setBasket(includes[0])
      setIsInBasket(true)
    }else{
      setIsInBasket(false)
    }
  }, [products, product, product.count])

  const {
    discount,
    image,
    name,
    article,
  } = product

  const addToBasketHandler = () => {
    sendMetrik('reachGoal', 'add_basket')
    if(user.isAuth){
      $api.patch(`${locale}/basket/${product.id}/`, {
        count: product.count + 1
      })
        .then((res)=>{
          dispatch(addToBasket(res.data))
        })
        .catch(()=>{})
    }else{
      const obj = {
        id: product.id,
        more: product.more,
        buy_now: true,
        count: 1
      }
      dispatch(addToBasket(obj))
    }
  }

  const removeFromBasketHandler = () => {
    if(user.isAuth){
      if(product.count <= 1){
        $api.delete(`${locale}/basket/${product.id}`)
          .then((res)=>{
            dispatch(killProduct(product.id))
          })
          .catch(()=>{
          })
      }else{
        $api.patch(`${locale}/basket/${product.id}/`, {
          count: product.count - 1
        })
          .then((res)=>{
            dispatch(removeFromBasket(product.more))
          })
          .catch(()=>{
          })
      }
    }else{
      dispatch(removeFromBasket(product.more))
    }
  }

  const killProductFromBasketHandler = () => {
    if(user.isAuth){
      $api.delete(`${locale}/basket/${product.id}`)
        .then((res)=>{
          dispatch(killProduct(product.more))
        })
        .catch(()=>{})
    }else{
      dispatch(killProduct(product.more))
    }
  }

  const removeFromFavsHandler = () => {
    dispatch(removeFromFavs(product.more))
  }
  const [width, setWidth] = useState<string>('desktop')

  const resize = (e: any) => {
    if(window){
      if(window.innerWidth > 1050){
        setWidth('desktop')
      }else if(window.innerWidth <= 1050 && window.innerWidth > 700) {
        setWidth('tablet')
      }else if(window.innerWidth <= 700) {
        setWidth('mobile')
      }else{
        setWidth('desktop')
      }
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', resize)
    if(window){
      if(window.innerWidth > 1050){
        setWidth('desktop')
      }else if(window.innerWidth <= 1050 && window.innerWidth > 700) {
        setWidth('tablet')
      }else if(window.innerWidth <= 700) {
        setWidth('mobile')
      }else{
        setWidth('desktop')
      }
    }

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className={s.card}>
      <div className={s.card__content}>
        <Link href={`${locale}/product/${product.product_id}`} className={s.card__content__image}>
          <Image
            width={200}
            height={200}
            src={image ? `${API_BASE_URL}${`${image}`.split('').shift() === '/' ? '' : '/'}${image}` : `${Stock.src}`} alt={name} />
        </Link>
        <div className={s.card__content__info}>
          {width === 'mobile' && <svg onClick={isBasket ? killProductFromBasketHandler : removeFromFavsHandler}
                                      className={s.card__close} width="14" height="14" viewBox="0 0 14 14" fill="none"
                                      xmlns="http://www.w3.org/2000/svg">
            <path d="M1.34314 12.6567L12.6568 1.34303" stroke="#A0A0A0"/>
            <path d="M1.34314 1.34326L12.6568 12.657" stroke="#A0A0A0"/>
          </svg>}
          {product.availability <= 0 && <div className={s.card__content__info__not_available}>{locale === 'ru' ? 'Нет в наличии' : 'Not available'}</div>}
          <h2>{name}</h2>
          {product.color ? <p className={s.card__content__info__color}>{locale === 'ru' ? 'Оттенок' : 'Color'}:
            <span style={{background: product.color}} className={s.card__content__info__color__block} />
          </p> : ''}
          {product.ml ? <p className={s.card__content__info__size}>{locale === 'ru' ? 'Объём, г.' : 'Size, g.'}:
            <span>{product.ml}</span>
          </p> : ''}
          <p className={s.card__content__info__articul}>{locale === 'ru' ? 'Артикул' : 'Article'}: {article}</p>
        </div>
      </div>
      <div className={s.card__price}>
        {width !== 'mobile' && <svg onClick={isBasket ? killProductFromBasketHandler : removeFromFavsHandler}
              className={s.card__price__remove} width="14" height="14" viewBox="0 0 14 14" fill="none"
              xmlns="http://www.w3.org/2000/svg">
          <path d="M1.34314 12.6567L12.6568 1.34303" stroke="#A0A0A0"/>
          <path d="M1.34314 1.34326L12.6568 12.657" stroke="#A0A0A0"/>
        </svg>}
        <div className={s.card__price__text}>
          {discount ? <h3 className={s.card__price__text__discount}>{(product.price*(product.count || 1)).toFixed(2)} {product.price_currency === 'RUB' ? '₽' : '$'}</h3> : ''}
          <h2 className={s.card__price__text__price}>{(product.price*(product.count || 1) - (discount ? (product.price/100)*discount : 0)).toFixed(2)} {product.price_currency === 'RUB' ? '₽' : '$'}</h2>
        </div>
        {isBasket
          ? <div className={s.card__price__button}>
          <div onClick={removeFromBasketHandler}>-</div>
          {user.isAuth ? product.count : (basket && basket.count)}
          <div onClick={addToBasketHandler}>+</div>
        </div> : <p></p>
        //   : <svg onClick={isInBasket ? removeFromBasketHandler : addToBasketHandler} className={s.card__price__basket} width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //   <path className={isInBasket ? s.card__price__basket__active : ''} d="M5 9V5C5 2.79 6.795 1 9 1C11.21 1 13 2.795 13 5V9M1 7H17V23H1V7Z" stroke="#A0A0A0" strokeLinecap="round"/>
        // </svg>
        }
      </div>
    </div>
  );
};

export default CardFloat;