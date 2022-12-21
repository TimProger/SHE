import React, {useEffect, useState} from 'react';
import {useTranslation} from "next-i18next";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IBasketProductFull, IOrder} from "../types/Product.types";
import {$api, API_BASE_URL} from "../http/api";
import s from "../styles/pages/order.module.scss";
import Link from "next/link";
import Layout from "../components/Layout";
import Head from "next/head";
import Container from "../components/Container";
import Stock from "../public/images/stock.png";

const Order: React.FC = () => {
  const { locale, query } = useRouter()
  const { t } = useTranslation('order')
  const dispatch = useAppDispatch()

  const {products, isLoading, error} = useTypedSelector(state => state.basket)
  const {isAuth} = useTypedSelector(state => state.profile)

  const [selected, setSelected] = useState<IBasketProductFull[]>([])

  const [done, setDone] = useState<IOrder | null>(null)

  useEffect(()=>{
    if(query.bank_id){
      $api.get(`/order/my_orders/?bank_id=${query.bank_id}`)
        .then((res)=>{
          setDone(res.data)
        })
    }else if(query.order_id){
      $api.get(`${locale}/order/my_orders/?id=${query.order_id}`)
        .then((res)=>{
          setDone(res.data)
          console.log(res.data)
        })
    }else{
    }
  }, [query])

  return (
    <Layout>
      <Head>
        <title>{t('title')}{done ? done.order_id : ''} | ™SHE</title>
      </Head>
      <div>
        <Container>
          {done && <div className={s.order}>
            <div className={s.order__header}>
              <h1>{t(`title_${done.status}`)}</h1>
              <p>{locale === 'ru' ? 'Дата' : 'Date'}: <span>{new Date(done.data_order).toLocaleString().split(', ').join(' ')}</span>
              </p>
            </div>
            <h2 className={s.order__order_id}>{locale === 'ru' ? 'Номер заказа' : 'Order id'}: #{done.order_id}</h2>
            <div className={s.order__products}>
              <h2>{t('order.products')}</h2>
              {done.order_list.map((el, index) => {
                return <Link href={`/product/${el.product_id}`}><div className={s.order__products__product}>
                  <div className={s.order__products__product__content}>
                    <div className={s.order__products__product__image}>
                      <img src={el.image ? `${API_BASE_URL}${`${el.image}`.split('').shift() === '/' ? '' : '/'}${el.image}` : `${Stock.src}`} alt={el.name} />
                    </div>
                    <div className={s.order__products__product__info}>
                      <div><h2>{el.name}</h2><p>x{el.count || 1}</p></div>
                      <p className={s.card__content__info__color}>{locale === 'ru' ? 'Оттенок' : 'Color'}:
                        <span style={{background: el.color}} className={s.card__content__info__color__block} />
                      </p>
                      <p className={s.card__content__info__size}>{locale === 'ru' ? 'Объём, мл' : 'Size, ml'}:
                        <span>{el.ml}</span>
                      </p>
                      <p className={s.card__content__info__articul}>{locale === 'ru' ? 'Артикул' : 'Article'}: <span>{el.article}</span></p>
                    </div>
                  </div>
                  <h1>{(el.money * (el.count || 1)).toFixed(2)} {locale === 'ru' ? '₽' : '$'}</h1>
                </div></Link>
              })}
            </div>
            <h2
              className={s.order__delivery}>{t('order.inputs.delivery')}: <span>{done.delivery_id === 2 ? t('order.inputs.delivery_2') : t('order.inputs.delivery_1')}</span>
            </h2>
          </div>}
        </Container>
      </div>
    </Layout>
  )
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string ?? 'ru', ['order', 'common']))
    },
    revalidate: 10
  }
}

export default Order;