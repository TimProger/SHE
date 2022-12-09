import React, {ChangeEvent, FormEvent, useEffect, useState} from 'react';
import {useTranslation} from "next-i18next";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {IBasketProductFull} from "../types/Product.types";
import {$api} from "../http/api";
import {removeAllProductFromBasket} from "../store/Slices/Basket.slice";
import s from "../styles/pages/basket.module.scss";
import CardFloat from "../components/CardFloat";
import Button from "../components/Button";
import Link from "next/link";
import {getBasket} from "../store/ActionCreators/Basket.ac";
import Layout from "../components/Layout";
import Head from "next/head";
import Container from "../components/Container";
import {toggleShowAuth} from "../store/Slices/Profile.slice";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const Basket: React.FC = () => {
  const { locale } = useRouter()
  const { t } = useTranslation('basket')
  const dispatch = useAppDispatch()

  const user = useTypedSelector(state => state.profile)
  const {products, isLoading, error} = useTypedSelector(state => state.basket)

  const [newProducts, setNewProducts] = useState<IBasketProductFull[]>([])
  const [selected, setSelected] = useState<IBasketProductFull[]>([])
  const [totalPriceNew, setTotalPrice] = useState<number>(0)
  const [page, setPage] = useState<number>(0)
  const [totalCountNew, setTotalCount] = useState<number>(0)
  const [isDisabled, setIsDisabled] = useState<boolean>(true)

  useEffect(()=>{
    if(products.length === 0){
      setNewProducts([])
      setSelected([])
      return
    }
    setIsDisabled(true)
    if(user.isAuth){
      $api.get<IBasketProductFull[]>(`/${locale}/basket/`)
        .then((res)=>{
          if(res.data){
            setNewProducts(res.data.length > 0 ? res.data : [])
            setSelected([...res.data.filter((el)=> el.buy_now)])
          }
        }).catch((e)=>{
        setNewProducts([])
        setSelected([])
      })
      return;
    }else{
      if(products.length > 0){
        $api.get<IBasketProductFull[]>(`/${locale}/basket/new/${products.length > 0 && `?ids=${products.map((el)=>el.more).join(',')}`}`)
          .then((res)=>{
            if(res.data){
              setNewProducts(res.data.map((el, index)=>{
                el.count = products[index].count
                return el
              }))
              setSelected([...res.data])
            }
          }).catch((e)=>{
          setNewProducts([])
        })
      }else{
        setSelected([])
        setNewProducts([])
      }
      return;
    }
  }, [locale, products, user.isAuth])

  useEffect(()=>{
    setIsDisabled(true)
    if(user.isAuth){
      $api.get<number>(`/${locale}/basket/price`)
        .then((res)=>{
          let totalC = 0
          selected.map((el)=>{
            totalC += (el.count || 1)
          })
          setTotalCount(totalC)
          setTotalPrice(+(res.data).toFixed(2))

          if(+(res.data).toFixed(0) > 0 || totalC > 0){
            setIsDisabled(false)
          }else{
            setIsDisabled(true)
          }
        })
    }else{
      let totalP = 0
      let totalC = 0

      selected.map((el, index)=>{
        totalC += (el.count || 1)
        totalP += (el.price * (el.count || 1))
      })

      setTotalPrice(+totalP.toFixed(2))
      setTotalCount(totalC)

      if(+totalP.toFixed(0) > 0 || totalC > 0){
        setIsDisabled(false)
      }else{
        setIsDisabled(true)
      }
    }
  },[selected])

  const selectHandler = (product: IBasketProductFull) => {
    const includes = selected.find((el)=>el.more === product.more)
    if(!includes){
      if(user.isAuth){
        $api.patch(`${locale}/basket/${product.id}/`, {
          buy_now: true
        })
          .then(()=>{
            setSelected(prev => [...prev, product])
          })
      }else{
        setSelected(prev => [...prev, product])
      }
      return;
    }else{
      let arr = selected.filter((el)=>el.more !== product.more)
      if(user.isAuth){
        $api.patch(`${locale}/basket/${product.id}/`, {
          buy_now: false
        })
          .then(()=>{
            setSelected([...arr])
          })
      }else{
        setSelected([...arr])
      }
      return;
    }
  }

  const selectAllProductHandler = () => {
    if(user.isAuth){
      newProducts.map((el)=>{
        $api.patch(`${locale}/basket/${el.id}/`, {
          buy_now: true
        })
      })
    }
    setSelected([...newProducts])
  }

  const removeAllProductFromBasketHandler = () => {
    if(user.isAuth){
      newProducts.map((el)=>{
        $api.delete(`${locale}/basket/${el.id}/`)
          .then(()=>{
            setNewProducts([])
            setSelected([])
          })
          .catch(()=>{})
      })
    }
    setNewProducts([])
    dispatch(removeAllProductFromBasket())
  }

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneUpd, setPhoneUpd] = useState('')
  const [digits, setDigits] = useState('')
  const [email, setEmail] = useState('')
  const [errors, setErrors] = useState({
    first: null,
    last: null,
    phone: null,
    email: null,
    area: null,
    city: null,
    street: null,
    house: null,
    apart: null
  })

  useEffect(()=>{
    if(user.user){
      setFirstName(user.user.first_name || '')
      setLastName(user.user.last_name || '')
      setEmail(user.user.email || '')
      let phoneLen = user.user.phone.toString().length
      let digits = user.user.phone.toString().substring(0, phoneLen-10)
      let number = user.user.phone.toString().substring(phoneLen-10, 11)

      let formattedPhone: string = `+${digits}`
      formattedPhone += ' ' + number.substring(0, 3);
      formattedPhone += ' ' + number.substring(3, 6);
      formattedPhone += ' ' + number.substring(6, 8);
      formattedPhone += ' ' + number.substring(8, 10);

      setPhoneUpd(formattedPhone);
      setDigits(digits)
    }
  },[user.user])

  const onChangeFirst = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value)
    if(e.target.value.length <= 0){
      setErrors(prev => Object.assign(prev, {first: locale === 'ru' ? 'Введите имя' : 'Enter firstname'}))
    }else{
      setErrors(prev => Object.assign(prev, {first: null}))
    }
  }

  const onChangeLast = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
    if(e.target.value.length <= 0){
      setErrors(prev => Object.assign(prev, {last: locale === 'ru' ? 'Введите фамилию' : 'Enter lastname'}))
    }else{
      setErrors(prev => Object.assign(prev, {last: null}))
    }
  }

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    let phoneVal = e.target.value.replace(/\D/g, ""),
      formattedPhone = `+7`

    if(!phoneVal){
      setPhoneUpd('');
    }

    const phoneLen = 1

    if (phoneVal.length > phoneLen) {
      formattedPhone += ' ' + phoneVal.substring(phoneLen, phoneLen+3);
    }

    if (phoneVal.length >= phoneLen+4) {
      formattedPhone += ' ' + phoneVal.substring(phoneLen+3, phoneLen+6);
    }

    if (phoneVal.length >= phoneLen+7) {
      formattedPhone += ' ' + phoneVal.substring(phoneLen+6, phoneLen+8);
    }

    if (phoneVal.length >= phoneLen+9) {
      formattedPhone += ' ' + phoneVal.substring(phoneLen+8, phoneLen+10);
    }

    setPhoneUpd(formattedPhone);
    if(formattedPhone.length === phoneLen+15){
      setErrors(prev => Object.assign(prev, {phone: null}))
    }else{
      setErrors(prev => Object.assign(prev, {phone: locale === 'ru' ? 'Введите номер телефона' : 'Enter valid phone number'}))
    }
  }

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if(!validEmailRegex.test(e.target.value)){
      setErrors(prev => Object.assign(prev, {email: locale === 'ru' ? 'Введите корректный Email' : 'Enter valid Email'}))
    }else{
      setErrors(prev => Object.assign(prev, {email: null}))
    }
  }

  const [area, setArea] = useState('')
  const [city, setCity] = useState('')
  const [street, setStreet] = useState('')
  const [house, setHouse] = useState('')
  const [apart, setApart] = useState('')
  const [delivery, setDelivery] = useState('2')
  const [payment, setPayment] = useState('cash')
  const [done, setDone] = useState<any | null>(null)

  const onChangeArea = (e: ChangeEvent<HTMLInputElement>) => {
    setArea(e.target.value)
    if(e.target.value.length <= 0){
      setErrors(prev => Object.assign(prev, {area: locale === 'ru' ? 'Введите область' : 'Enter area'}))
    }else{
      setErrors(prev => Object.assign(prev, {area: null}))
    }
  }

  const onChangeCity = (e: ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value)
    if(e.target.value.length <= 0){
      setErrors(prev => Object.assign(prev, {city: locale === 'ru' ? 'Введите город' : 'Enter city'}))
    }else{
      setErrors(prev => Object.assign(prev, {city: null}))
    }
  }

  const onChangeStreet = (e: ChangeEvent<HTMLInputElement>) => {
    setStreet(e.target.value)
    if(e.target.value.length <= 0){
      setErrors(prev => Object.assign(prev, {street: locale === 'ru' ? 'Введите улицу' : 'Enter street'}))
    }else{
      setErrors(prev => Object.assign(prev, {street: null}))
    }
  }

  const onChangeHouse = (e: ChangeEvent<HTMLInputElement>) => {
    let house = e.target.value.replace(/\D/g, "").substring(0, 5);
    setHouse(house)
    if(e.target.value.length <= 0){
      setErrors(prev => Object.assign(prev, {house: locale === 'ru' ? 'Введите номер дома' : 'Enter the house number'}))
    }else{
      setErrors(prev => Object.assign(prev, {house: null}))
    }
  }

  const onChangeApart = (e: ChangeEvent<HTMLInputElement>) => {
    let apart = e.target.value.replace(/\D/g, "").substring(0, 5);
    setApart(apart)
    if(e.target.value.length <= 0){
      setErrors(prev => Object.assign(prev, {apart: locale === 'ru' ? 'Введите номер квартиры' : 'Enter the apartment number'}))
    }else{
      setErrors(prev => Object.assign(prev, {apart: null}))
    }
  }

  useEffect(()=>{
    setIsDisabled(true)
    if (errors.email || email.length <= 0) return
    if (errors.phone || phoneUpd.length <= 0) return
    if (errors.first || firstName.length <= 0) return
    if (errors.last || lastName.length <= 0) return
    if (errors.area || area.length <= 0) return
    if (errors.city || city.length <= 0) return
    if (errors.house || house.length <= 0) return
    if (errors.apart || apart.length <= 0) return
    setIsDisabled(false)

  },[errors, email, phoneUpd, firstName, lastName, area, city, street, house, apart])

  useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsDisabled(true)
    switch (page){
      case 0:
        setIsDisabled(false)
        break
      case 1:
        if (errors.email || email.length <= 0) return
        if (errors.phone || phoneUpd.length <= 0) return
        if (errors.first || firstName.length <= 0) return
        if (errors.last || lastName.length <= 0) return
        if (errors.area || area.length <= 0) return
        if (errors.city || city.length <= 0) return
        if (errors.house || house.length <= 0) return
        if (errors.apart || apart.length <= 0) return
        setIsDisabled(false)
        break
    }
  },[page])

  const returnPages = () => {
    switch (page){
      case 0:
        return (<>
          <div className={s.basket__header}>
            <h1>{t('title')}</h1>
            <div className={s.basket__header__btns}>
              <div onClick={removeAllProductFromBasketHandler} className={s.basket__header__btns__btn}>{t('clear')}</div>
              <div onClick={selectAllProductHandler} className={s.basket__header__btns__btn}>{t('selectAll')}</div>
            </div>
          </div>
          <div className={s.basket__products}>
            {newProducts.length > 0 ? newProducts.map((el, index: number)=>{
              return <div className={s.basket__products__card}>
                <input
                  onChange={()=>selectHandler(el)}
                  checked={selected.indexOf(el) !== -1}
                  type={'checkbox'} />
                <CardFloat product={el} isBasket={true} />
              </div>
            }) : <div className={s.basket__products__empty}>
              <h2>{t('empty')}</h2>
              <Button type={'link'} href={'/catalog'} text={t('toCatalogue')} />
            </div>}
          </div>
        </>)
      case 1:
        return (<div className={s.order}>
          <div>
            <p onClick={()=>setPage(0)} className={s.order__back}>
              <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.41475 0.316623L0.202765 7.40897C0.129032 7.4934 0.0769276 7.58487 0.0464514 7.68338C0.0154837 7.78188 0 7.88742 0 8C0 8.11258 0.0154837 8.21812 0.0464514 8.31662C0.0769276 8.41513 0.129032 8.5066 0.202765 8.59103L6.41475 15.7045C6.58679 15.9015 6.80184 16 7.05991 16C7.31797 16 7.53917 15.8945 7.7235 15.6834C7.90783 15.4723 8 15.226 8 14.9446C8 14.6631 7.90783 14.4169 7.7235 14.2058L2.30415 8L7.7235 1.7942C7.89554 1.59719 7.98157 1.35458 7.98157 1.06639C7.98157 0.777625 7.8894 0.527704 7.70507 0.316623C7.52074 0.10554 7.30568 0 7.05991 0C6.81413 0 6.59908 0.10554 6.41475 0.316623Z" fill="#A0A0A0"/>
              </svg>
              {t('back')}
            </p>
            <div className={s.order__header}>
              <h1>{t('title_1')}</h1>
            </div>
            <div className={s.order__inputs}>
              <div className={s.order__inputs__container}>
                <h3>{t('order.inputs.first')}</h3>
                <input className={errors.first ? s.order__inputs__input_error : ''} value={firstName} onChange={onChangeFirst} placeholder={t('order.inputs.first_pl')} type="text"/>
                <p>{errors.first ? errors.first : ''}</p>
              </div>
              <div className={s.order__inputs__container}>
                <h3>{t('order.inputs.last')}</h3>
                <input className={errors.last ? s.order__inputs__input_error : ''} value={lastName} onChange={onChangeLast} placeholder={t('order.inputs.last_pl')} type="text"/>
                <p>{errors.last ? errors.last : ''}</p>
              </div>
              <div className={s.order__inputs__container}>
                <h3>{t('order.inputs.phone')}</h3>
                <input className={errors.phone ? s.order__inputs__input_error : ''} value={phoneUpd} onChange={onChangePhone} placeholder={'+7 999 999 99 99'} type="text"/>
                <p>{errors.phone ? errors.phone : ''}</p>
              </div>
              <div className={s.order__inputs__container}>
                <h3>Email*</h3>
                <input className={errors.email ? s.order__inputs__input_error : ''} value={email} onChange={onChangeEmail} placeholder={'info@tmshe.com'} type="text"/>
                <p>{errors.email ? errors.email : ''}</p>
              </div>
            </div>
          </div>
          <div>
            <div className={s.order__header}>
              <h1>{t('order.title')}</h1>
            </div>
            <div className={s.order__inputs}>
              <div className={s.order__inputs__container}>
                <h3>{t('order.inputs.area')}</h3>
                <input className={errors.area ? s.order__inputs__input_error : ''} value={area} onChange={onChangeArea} placeholder={t('order.inputs.area_pl')} type="text"/>
                <p>{errors.area ? errors.area : ''}</p>
              </div>
              <div className={s.order__inputs__container}>
                <h3>{t('order.inputs.city')}</h3>
                <input className={errors.city ? s.order__inputs__input_error : ''} value={city} onChange={onChangeCity} placeholder={t('order.inputs.city_pl')} type="text"/>
                <p>{errors.city ? errors.city : ''}</p>
              </div>
              <div className={s.order__inputs__container}>
                <h3>{t('order.inputs.street')}</h3>
                <input className={errors.street ? s.order__inputs__input_error : ''} value={street} onChange={onChangeStreet} placeholder={t('order.inputs.street_pl')} type="text"/>
                <p>{errors.street ? errors.street : ''}</p>
              </div>
              <div className={s.order__inputs__container + ' ' + s.order__inputs__container__double}>
                <div>
                  <h3>{t('order.inputs.home')}</h3>
                  <input className={errors.house ? s.order__inputs__input_error : ''} value={house} onChange={onChangeHouse} placeholder={'1'} type="text"/>
                  <p>{errors.house ? errors.house : ''}</p>
                </div>
                <div>
                  <h3>{t('order.inputs.apartment')}</h3>
                  <input className={errors.apart ? s.order__inputs__input_error : ''} value={apart} onChange={onChangeApart} placeholder={'1'} type="text"/>
                  <p>{errors.apart ? errors.apart : ''}</p>
                </div>
              </div>
            </div>
            <div className={s.order__delivery}>
              <h2>{t('order.inputs.delivery')}</h2>
              <div className={s.order__delivery__radios} onChange={(e: ChangeEvent<HTMLInputElement>)=>setDelivery(e.target.value)}>
                <div>
                  <input checked={delivery === "1"} type="radio" value="1" name="delivery" id={'self'}/>
                  <label htmlFor="self">{t('order.inputs.radio_1')}</label>
                </div>
                <div>
                  <input checked={delivery === "2"} type="radio" value="2" name="delivery" id={'transport'}/>
                  <label htmlFor="transport">{t('order.inputs.radio_2')}</label>
                </div>
              </div>
              <p>{t('order.about_delivery')}</p>
            </div>
          </div>
          <div className={s.order__orders}>
            <div className={s.order__header}>
              <h1>{t('order.payment')}</h1>
            </div>
            <h2>{t('order.products')}</h2>
            <div className={s.order__orders__products}>
              {newProducts.length > 0 ? newProducts.map((el, index)=>{
                return <div className={s.order__orders__products__product}>
                  <div>
                    <Link href={`${locale}/product/${el.product_id}`}><h3>{el.name}</h3></Link>
                    <p>x{products[index].count}</p>
                  </div>
                  <h3>{(el.price*(products[index].count || 1)).toFixed(2)} {el.price_currency === 'RUB' ? '₽' : '$'}</h3>
                </div>
              }) : <p>{t('empty')}</p>}
            </div>
            <h2>{t('order.payment_methods')}</h2>
            <div className={s.order__orders__payment} onChange={(e: ChangeEvent<HTMLInputElement>)=>setPayment('cash')}>
              <div className={s.order__orders__payment__radio}>
                <div>
                  <input disabled={true} checked={false} type="radio" value="card" name="payment" id={'card'}/>
                  <label htmlFor="card">{t('order.inputs.radio_3')}</label>
                </div>
              </div>
              <div className={s.order__orders__payment__radio}>
                <div>
                  <input checked={payment === 'cash'} type="radio" value="cash" name="payment" id={'cash'}/>
                  <label htmlFor="cash">{t('order.inputs.radio_4')}</label>
                </div> <p>{t('order.about_payment')}</p>
              </div>
            </div>
          </div>
        </div>)
      case 2:
        return (
          <div className={s.done}>
            <div className={s.done__header}>
              <h1>{t('title_1')}</h1>
              <p>{locale === 'ru' ? 'Дата' : 'Date'}: <span>{new Date(done.data_order).toLocaleString().split(', ').join(' ')}</span></p>
            </div>
            <h2 className={s.done__order_id}>{locale === 'ru' ? 'Номер заказа' : 'Order id'}: #{done.order_id}</h2>
            <div className={s.done__products}>
              <h2>{t('order.products')}</h2>
              {newProducts.length > 0 ? newProducts.map((el, index)=>{
                return <div className={s.done__products__product}>
                  <div>
                    <Link href={`${locale}/product/${el.product_id}`}><h3>{el.name}</h3></Link>
                    <p>x{products[index].count || 1}</p>
                  </div>
                  <h3>{(el.price*(products[index].count || 1)).toFixed(2)} {el.price_currency === 'RUB' ? '₽' : '$'}</h3>
                </div>
              }) : <p>{t('empty')}</p>}
            </div>
            <h2 className={s.done__delivery}>{t('order.inputs.delivery')}: <span>{done.delivery_id === 2 ? t('order.inputs.delivery_2') : t('delivery_1')}</span></h2>
          </div>
        )
    }
  }

  const makeOrder = () => {

    if(email || phoneUpd || firstName || lastName){

    }

    const data = new FormData()
    // data.append('email', email);
    // data.append('phone', phoneUpd.replace(/\s/g, '').replace(/\+/, ''));
    // data.append('firstName', firstName);
    // data.append('lastName', lastName);
    // data.append('area', area);

    const fullAdress = `${area} ${city} ${street} ${house} ${apart}`

    data.append('address', fullAdress);
    data.append('pay_online', 'False');
    data.append('delivery', delivery);

    $api.post(`/${locale}/order/buy/`, data)
      .then((res) => {
        setDone(res.data)
        setPage(2)
        dispatch(getBasket(''))
      })
      .catch((res)=>{
      })
  }

  const handleClick = () => {
    setIsDisabled(true)
    switch (page){
      case 0:
        if(isAuth){
          setPage(1)
        }
        break;
      case 1:
        if(isAuth){
          makeOrder()
        }
        break;
    }
  }

  const {isAuth} = useTypedSelector(state => state.profile)

  return (
    <Layout>
      <Head>
        <title>{t('title')} | ™SHE</title>
      </Head>
      <div>
        <Container>
          <div className={s.basket}>
            {returnPages()}
            <div className={s.basket__info}>
              {page !== 2 ? <h1 className={s.basket__info__text}>
                {t('total')} {totalCountNew} {t('productsToBuy')}: <div>{totalPriceNew} {locale === 'ru' ? '₽' : '$'}</div>
              </h1>:<h1 className={s.basket__info__text}>
                {totalPriceNew} {locale === 'ru' ? '₽' : '$'}
              </h1>}
              {isAuth
                ? (page !== 2 && <Button disabled={isDisabled} text={t('buy')} onClick={handleClick}/>)
                : <Button onClick={()=>dispatch(toggleShowAuth(true))} text={'Авторизоваться'}/>}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string ?? 'ru', ['basket', 'common']))
    },
    revalidate: 10
  }
}

export default Basket;