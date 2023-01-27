import React, {ChangeEvent, MouseEvent, useEffect, useState} from 'react';
import s from '../styles/components/copy.module.scss'
import Button from "./Button";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {insertIntoBasket, setBasket, setShowCopy} from "../store/Slices/Basket.slice";
import {$api, API_BASE_URL} from "../http/api";
import {IBasketProductFull} from "../types/Product.types";
import Link from "next/link";
import Stock from "../public/images/stock.png";
import {Storage} from "../utils/storage";
import {getBasket, getBasketNoAuth} from "../store/ActionCreators/Basket.ac";

interface ICopyBasketProps {
}

const CopyBasket: React.FC<ICopyBasketProps> = () => {
  const dispatch = useAppDispatch()
  const {push,  locale} = useRouter()

  const { t } = useTranslation('basket')

  const [newProducts, setNewProducts] = useState<IBasketProductFull[]>([])

  const {showCopy, showCopyData, products} = useTypedSelector(state => state.basket)
  const {isAuth, isLoading} = useTypedSelector(state => state.profile)

  const outsideClickHandler = () => {
    dispatch(setShowCopy(false))
    push('/basket')
  }

  const insideClickHandler = (e: MouseEvent) => {
    e.stopPropagation()
  }

  useEffect(()=>{
    if(showCopyData.length > 0){
      $api.get<IBasketProductFull[]>(`/${locale}/basket/new/${showCopyData.length > 0 && `?ids=${showCopyData.map((el)=>el.split(',')[0]).join(',')}`}`)
        .then((res)=>{
          console.log(res)
          if(res.data){
            setNewProducts(res.data.map((el, index)=>{
              el.count = +showCopyData[index].split(',')[1]
              return el
            }))
          }
        })
    }
  },[showCopyData])

  return (
    <div onClick={outsideClickHandler} className={s.copy + ' ' + (showCopy ? s.copy__active : '')}>
      <div onClick={insideClickHandler} className={s.copy__block}>
        <svg className={s.copy__block__close + ' ' + (showCopy ? s.copy__block__close__active : '')} onClick={outsideClickHandler} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.14648 20.2635L20.4099 4" stroke="black"/>
          <path d="M4 4.14648L20.2635 20.4099" stroke="black"/>
        </svg>
        <div className={s.copy__block__container}>
          <h1>{t('copy.title')}</h1>
          <p>{t('copy.about')}</p>
          <div className={s.copy__block__container__items}>
            {newProducts && newProducts.length > 0 && newProducts.map((el)=>{
              return <div className={s.copy__block__container__items__item}>
                <div className={s.copy__block__container__items__item__image}>
                  <div className={s.copy__block__container__items__item__image__header}>
                    {el.is_new && <div className={s.copy__block__new__block}>New</div>}
                    {el.is_hit && <div className={s.copy__block__hit__block}>Hit</div>}
                  </div>
                  <Link draggable={false}
                        href={'/product/'+el.product_id}
                        className={s.copy__block__container__items__item__image__block}>
                    <img draggable={false} src={`${API_BASE_URL}/${el.image}`} alt={el.name}/>
                  </Link>
                </div>
                <div className={s.copy__block__container__items__item__info}>
                  <div className={s.copy__block__container__items__item__info__header}>
                    <p>x{el.count}</p>
                  </div>
                  <div className={s.copy__block__container__items__item__info__content}>
                    <h3>{el.name}</h3>
                  </div>
                  <div className={s.copy__block__container__items__item__info__footer}>
                    <div className={s.copy__block__container__items__item__info__footer__left}>
                      {el.ml && <div>{el.ml} {locale === 'ru' ? 'г.' : 'g.'}</div>}
                      {el.color && <p className={s.copy__block__container__items__item__info__footer__color}>
                        <span style={{background: el.color}} className={s.copy__block__container__items__item__info__footer__color__block} />
                      </p>}
                    </div>
                    <h3>{(el.price*el.count).toFixed(2)} {el.price_currency === 'RUB' ? '₽' : '$'}</h3>
                  </div>
                </div>
              </div>
            })}
          </div>
          <div className={s.copy__block__container__button}>
            <Button onClick={async ()=>{
              if(isAuth){
                Promise.all(products.map(async (el)=>{
                  return await $api.delete(`${locale}/basket/${el.id}/`)
                }))
                  .then(()=>{
                    Promise.all(newProducts.map((el)=>{
                      return $api.post(`${locale}/basket/`, {
                        product: el.more
                      }).then(async (res)=>{
                        if(el.count > 1){
                          return await $api.patch(`${locale}/basket/${res.data.id}/`, {
                            count: el.count
                          })
                        }
                      })
                    }))
                      .then((res)=>{
                        dispatch(setBasket(newProducts))
                        dispatch(setShowCopy(false))
                      })
                  })
              }else{
                dispatch(setBasket(newProducts))
                dispatch(setShowCopy(false))
              }
              push('/basket')
            }} text={t('copy.button_1')} />
            <Button onClick={async ()=>{
              if(isAuth){
                const insert = [...JSON.parse(JSON.stringify(products))]
                const data = await Promise.all(newProducts.map((el)=>{
                  let x: boolean = false // Проверка наличия
                  insert.map((elem)=>{
                    if(elem.more === el.more){
                      x = true
                    }
                  })
                  if(x) return
                  return $api.post(`${locale}/basket/`, {
                    product: el.more
                  }).then(async (res)=>{
                    insert.push(JSON.parse(JSON.stringify(res.data)))
                    if(el.count > 1){
                      return await $api.patch(`${locale}/basket/${res.data.id}/`, {
                        count: el.count
                      })
                    }
                  })
                }))
                if(data){
                  dispatch(setBasket(insert))
                }
              }else{
                const insert = [...JSON.parse(JSON.stringify(products))]
                newProducts.map((el)=>{
                  let x: boolean = false // Проверка наличия
                  insert.map((elem)=>{
                    if(elem.more === el.more){
                      x = true
                    }
                  })
                  if(x) return
                  insert.push(el)
                })
                dispatch(setBasket(insert))
              }
              dispatch(setShowCopy(false))
              push('/basket')
            }} style_type={'outer'}
                    text={t('copy.button_2')} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyBasket;