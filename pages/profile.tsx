import React, {ChangeEvent, useEffect, useState} from "react";
import Layout from "../components/Layout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation, withTranslation} from "next-i18next";
import { GetStaticProps } from 'next'
import {useRouter} from "next/router";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IOrder} from "../types/Product.types";
import {Storage} from "../utils/storage";
import {$api, API_BASE_URL} from "../http/api";
import {exit, setImage} from "../store/Slices/Profile.slice";
import s from "../styles/pages/profile.module.scss";
import Button from "../components/Button";
import Head from "next/head";
import Container from "../components/Container";
import ProfileImg from "../public/images/profile_mock.png";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const Profile: React.FC = () => {

  const { locale, query } = useRouter()
  const dispatch = useAppDispatch()
  const {t} = useTranslation('profile');

  const { user } = useTypedSelector(state => state.profile)

  const status = [
    'Created',
    'Accepted',
    'Waiting',
    'Delivery',
    'Point',
    'Received',
    'Error',
  ]

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneUpd, setPhoneUpd] = useState('')
  const [digits, setDigits] = useState('')
  const [orders, setOrders] = useState<IOrder[]>([])
  const [ordersActive, setOrdersActive] = useState<IOrder[]>([])
  const [ordersHistory, setOrdersHistory] = useState<IOrder[]>([])
  const [email, setEmail] = useState('')
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({
    first: null,
    last: null,
    email: null,
  })

  // Test

  useEffect(()=>{
    if(orders.length > 0){
      const orders_active = orders.filter((el)=>el.status_id !== 1)
      setOrdersActive(orders_active)
      const orders_history = orders.filter((el)=>+el.status_id === 1)
      setOrdersHistory(orders_history)
    }
  },[orders])

  useEffect(()=>{
    if(typeof window !== undefined){
      if(!Storage.get('accessToken')){
        window.location.replace(`/${locale}/`)
      }else{
        if(user){
          setFirstName(user.first_name)
          setLastName(user.last_name)
          setEmail(user.email)
          let phoneLen = user.phone.toString().length
          let digits = user.phone.toString().substring(0, phoneLen-10)
          let number = user.phone.toString().substring(phoneLen-10, 11)

          let formattedPhone: string = ''

          formattedPhone += `+${digits} ` + number.substring(0, 3);
          formattedPhone += ' ' + number.substring(3, 6);
          formattedPhone += ' ' + number.substring(6, 8);
          formattedPhone += ' ' + number.substring(8, 10);

          setPhoneUpd(formattedPhone);
          setDigits(digits)

          $api.get(`${locale}/order/my_orders`)
            .then((res)=>{
              setOrders(res.data)
            })
        }
      }
    }
  },[user])

  const changeFile = (e: ChangeEvent) => {
    const data = new FormData()
    const target = e.target as HTMLInputElement;
    const files = target.files as FileList;

    dispatch(setImage(files[0]))

    if(files[0]){
      data.append('user_image', files[0]);
    }
    $api.patch('/profile/', data)
      .then(()=>{
        setIsSuccess(true)
      })
  }

  const onChangeFirst = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
    setIsSuccess(false)
  }

  const onChangeLast = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
    setIsSuccess(false)
  }

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if(!validEmailRegex.test(e.target.value)){
      setErrors(prev => Object.assign(prev, {email: 'Почта введена некорректно.'}))
    }else{
      setErrors(prev => Object.assign(prev, {email: null}))
    }
    setIsSuccess(false)
  }

  const onSubmitSave = () => {
    const data = new FormData()

    if(!errors.email && email.length > 0){
      data.append('email', email);
    }
    if(!errors.first && firstName.length > 0){
      data.append('first_name', firstName);
    }
    if(!errors.last && lastName.length > 0){
      data.append('last_name', lastName);
    }

    $api.patch('/profile/', data)
      .then(()=>{
        setIsSuccess(true)
      })
  }

  const exitHandler = () => {
    dispatch(exit())
    Storage.delete('accessToken')
    Storage.delete('refreshToken')
    window.location.replace(`/${locale}/`)

  }

  const kill = () => {
    $api.delete('/profile/')
      .then(()=>{
        dispatch(exit())
        Storage.delete('accessToken')
        Storage.delete('refreshToken')
        window.location.replace(`/${locale}/`)

      })
  }

  const [page, setPage] = useState<number>(1)

  useEffect(()=>{
    if(query.page){
      setPage(+query.page)
    }
  }, [])

  const displayPage = () => {
    switch (page){
      case 1:
        return (
          <div className={s.profile__pages__page__info}>
            <div className={s.profile__pages__page__info__container}>
              <div className={s.profile__pages__page__info__inputs}>
                <div>
                  <h3>{t('pages.info.inputs.first')}</h3>
                  <input value={firstName} onChange={onChangeFirst} placeholder={t('pages.info.inputs.first_pl')} type="text"/>
                </div>
                <div>
                  <h3>{t('pages.info.inputs.last')}</h3>
                  <input value={lastName} onChange={onChangeLast} placeholder={t('pages.info.inputs.last_pl')} type="text"/>
                </div>
                <div>
                  <h3>{t('pages.info.inputs.phone')}</h3>
                  <input disabled={true} value={phoneUpd} placeholder={'+7 999 999 99 99'} type="text"/>
                </div>
                <div>
                  <h3>Email</h3>
                  <input value={email} onChange={onChangeEmail} placeholder={'info@tmshe.ru'} type="text"/>
                </div>
              </div>
              <div className={s.profile__pages__page__info__why}>
                <h3>{t('pages.info.why_title')}</h3>
                <p>{t('pages.info.why_parag')}</p>
              </div>
            </div>
            {isSuccess ? <Button success={isSuccess} text={t('pages.info.save__success')} />
              : <Button onClick={onSubmitSave} text={t('pages.info.save')}/>}
          </div>
        )
      case 2:
        return (
          <div className={s.profile__pages__page__products}>
            {orders.length > 0
              ? <div className={s.profile__pages__page__products__container}>
                <div className={s.profile__pages__page__products__active}>
                  <h2>{t('pages.orders.order.active')}</h2>
                  {ordersActive.map((el, index) => {
                    return <div className={s.profile__pages__page__products__active__product}>
                      <div>
                        <div className={s.profile__pages__page__products__active__product__imgs}>
                          <img src="" alt=""/>
                        </div>
                        <div className={s.profile__pages__page__products__active__product__info}>
                          <h2>{t('pages.orders.order.info.name')} #{el.order_id}</h2>
                          <p>{t('pages.orders.order.info.date')}: <span>{new Date(el.data_order).toLocaleString().split(', ').join(' ')}</span></p>
                          <p>{t('pages.orders.order.info.quantity')}: <span>{el.count_product}</span></p>
                          <p>{t('pages.orders.order.info.delivery')}: <span>{el.delivery_id === 2 ? t('pages.orders.order.info.delivery_2') : t('pages.orders.order.info.delivery_1')}</span></p>
                        </div>
                      </div>
                      <div className={s.profile__pages__page__products__active__product__price}>
                        <h2>{status[el.status_id-1]}</h2>
                        <h1>{el.sum} {locale === 'ru' ? '₽' : '$'}</h1>
                      </div>
                    </div>
                  })}
                </div>
                <div className={s.profile__pages__page__products__history}>
                  <h2>{t('pages.orders.order.history')}</h2>
                  {ordersHistory.map((el, index) => {
                    return <div className={s.profile__pages__page__products__active__product}>
                      <div>
                        <div className={s.profile__pages__page__products__active__product__imgs}>
                          <img src="" alt=""/>
                        </div>
                        <div className={s.profile__pages__page__products__active__product__info}>
                          <h2>{t('pages.orders.order.info.name')} #{el.order_id}</h2>
                          <p>{t('pages.orders.order.info.date')}: <span>{new Date(el.data_order).toLocaleString().split(', ').join(' ')}</span></p>
                          <p>{t('pages.orders.order.info.quantity')}: <span>{el.count_product}</span></p>
                          <p>{t('pages.orders.order.info.delivery')}: <span>{el.delivery_id === 2 ? t('pages.orders.order.info.delivery_2') : t('pages.orders.order.info.delivery_1')}</span></p>
                        </div>
                      </div>
                      <div className={s.profile__pages__page__products__active__product__price}>
                        <h2>{status[1]}</h2>
                        <h1>{el.sum} {locale === 'ru' ? '₽' : '$'}</h1>
                      </div>
                    </div>
                  })}
                </div>
              </div>
              : <div className={s.profile__pages__page__products__notfound}>
                <h2>{t('pages.orders.notfound')}</h2>
                <Button href={'/catalog'} type={'link'} text={t('pages.orders.toCatalogue')} />
              </div>}
          </div>
        )
      case 3:
        return (
          <div className={s.profile__pages__page__settings}>
            <div>
              <h3 onClick={()=>kill()}>{t('pages.settings.delete')}</h3>
              <p>{t('pages.settings.aboutDelete')}</p>
            </div>
          </div>
        )
    }
  }

  useEffect(()=>{
    setIsSuccess(false)
  },[page])

  return (
    <Layout>
      <Head>
        <title>{t('title')} | ™SHE</title>
      </Head>
      <div>
        <Container>
          <div className={s.profile}>
            <div className={s.profile__info}>
              <div className={s.profile__info__header}>
                <h1>{t('title')}</h1>
                <p onClick={exitHandler}>{t('exit')}</p>
              </div>
              <div className={s.profile__info__info}>
                <div>
                  <label title="&nbsp;" className='profileImgInputLabel' htmlFor="profileImgInput">
                    <img src={user?.user_image ? (typeof user.user_image !== 'string' ? URL.createObjectURL(user.user_image) : `${API_BASE_URL}${user?.user_image}`) : ProfileImg.src} alt="user_image"/>
                    <input title="&nbsp;" accept="image/*" id='profileImgInput' className='profileImgInput' type='file' onChange={changeFile} />
                  </label>
                </div>
                <div>
                  <h2>{firstName || user?.first_name || t('pages.info.inputs.first')} {lastName || user?.last_name || t('pages.info.inputs.last')}</h2>
                  <p>{t('status')}</p>
                </div>
              </div>
            </div>
            <div className={s.profile__pages}>
              <div className={s.profile__pages__navbar}>
                <div className={s.profile__pages__navbar__wrapper}>
                  <p style={{borderBottom : page == 1 ? '1px solid black' : 'none'}} onClick={()=> setPage(1)}>{t('btns.info')}</p>
                  <p style={{borderBottom : page == 2 ? '1px solid black' : 'none'}} onClick={()=> setPage(2)}>{t('btns.orders')}</p>
                  <p style={{borderBottom : page == 3 ? '1px solid black' : 'none'}} onClick={()=> setPage(3)}>{t('btns.settings')}</p>
                </div>
              </div>
              <div className={s.profile__pages__page}>
                {displayPage()}
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string ?? 'ru', ['profile', 'common'])),
    },
    revalidate: 10
  }
}

export default Profile