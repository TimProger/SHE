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
import {Storage} from "../utils/storage";
import Button from "../components/Button";

const Order: React.FC = () => {
  const { push, locale, query } = useRouter()
  const { t } = useTranslation('order')
  const dispatch = useAppDispatch()

  const profile = useTypedSelector(state => state.profile)

  const [done, setDone] = useState<IOrder | null>(null)

  useEffect(()=>{
    const asyncEffect = async () => {
      if(typeof window !== undefined) {
        if (Storage.get('accessToken')) {
          if(profile.isAuth){
            if (query.orderId) {
              $api.get(`${locale}/order/my_orders/?bank_id=${query.orderId}`)
                .then((res) => {
                  setDone(res.data)
                })
                .catch((res) => {
                  push('/')
                })
            } else if (query.order_id) {
              $api.get(`${locale}/order/my_orders/?id=${query.order_id}`)
                .then((res) => {
                  setDone(res.data)
                })
            } else {
            }
          }
        } else {
          push('/')
        }
      }
    }
    asyncEffect()
  }, [query, locale, profile.isAuth])

  return (
    <Layout>
      <Head>
        <title>{t('title')}{done ? done.order_id : ''} | ™SHE</title>
      </Head>
      <div>
        <Container>
          {done && <div className={s.order}>
            <div className={s.order__header}>
              <h2>{t(`title_${done.status}`)}</h2>
              <p>{locale === 'ru' ? 'Дата' : 'Date'}: <span>{new Date(done.data_order).toLocaleString().split(', ').join(' ')}</span>
              </p>
            </div>
            <h3 className={s.order__order_id}>{locale === 'ru' ? 'Номер заказа' : 'Order id'}: #{done.order_id}</h3>
            <div className={s.order__products}>
              <h3>{t('order.products')}</h3>
              {done.order_list.map((el, index) => {
                return <Link href={`/product/${el.product_id}`}><div className={s.order__products__product}>
                  <div className={s.order__products__product__content}>
                    <div className={s.order__products__product__image}>
                      <img src={el.image ? `${API_BASE_URL}${`${el.image}`.split('').shift() === '/' ? '' : '/'}${el.image}` : `${Stock.src}`} alt={el.name} />
                    </div>
                    <div className={s.order__products__product__info}>
                      <div><h3>{el.name}</h3><p>x{el.count || 1}</p></div>
                      <p className={s.order__products__product__info__color}>{locale === 'ru' ? 'Оттенок' : 'Color'}:
                        <span style={{background: el.color}} className={s.order__products__product__info__color__block} />
                      </p>
                      <p className={s.order__products__product__info__size}>{locale === 'ru' ? 'Объём, мл' : 'Size, ml'}:
                        <span>{el.ml}</span>
                      </p>
                      <p className={s.order__products__product__info__articul}>{locale === 'ru' ? 'Артикул' : 'Article'}: <span>{el.article}</span></p>
                    </div>
                  </div>
                  <div className={s.order__products__product__price}>
                    <h2>{(el.money * (el.count || 1)).toFixed(2)} {done.price_currency === 'RUB' ? '₽' : '$'}</h2>
                  </div>
                </div></Link>
              })}
            </div>
            <div className={s.order__container}>
              <h3
                className={s.order__delivery}>{t('order.inputs.delivery')}: <span>{done.delivery_id === 2 ? t('order.inputs.delivery_2') : t('order.inputs.delivery_1')}</span>
              </h3>
              <h2
                className={s.order__price}>{t('order.total_price')}: <span>{done.sum} {done.price_currency === 'RUB' ? '₽' : '$'}</span>
              </h2>
            </div>
            {done.pay_online && done.status === 0 &&<div className={s.order__confirming}>
              <h3 className={s.order__price}>{t('confirming_1')}</h3>
              <p className={s.order__price}>{t('confirming_2')}</p>
            </div>}
            {done.pay_online && done.status === 1 && <div className={s.order__pay}>
              <Button text={t('order.buy.button_1')} type={'link'} href={`${done.details}`} />
            </div>}
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