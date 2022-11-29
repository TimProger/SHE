import {useRouter} from "next/router";
import React, {ChangeEvent, useEffect, useState} from "react";
import Layout from "../../layout/layout";
import "swiper/css";
import "swiper/css/pagination";
import s from "../../styles/pages/basket.module.scss";
import Container from "../Container";
import Head from "next/head";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {IBasketProduct, IBasketProductFull, IProduct} from "../../types/Product.types";
import {
  removeAllProductFromBasket,
} from "../../store/Slices/Basket.slice";
import Link from "next/link";
import CardFloat from "../CardFloat";
import Button from "../Button";
import {$api} from "../../http/api";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface IBasketProps {
  translates: any;
  isLoading: boolean;
  products: IBasketProduct[];
  error: string | null;
}

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const BasketPage: React.FC<IBasketProps> = ({translates, products}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const user = useTypedSelector(state => state.profile)

  const [newProducts, setNewProducts] = useState<IBasketProductFull[]>([])
  const [selected, setSelected] = useState<IBasketProductFull[]>([])
  const [totalPriceNew, setTotalPrice] = useState<number>(0)
  const [page, setPage] = useState<number>(0)
  const [totalCountNew, setTotalCount] = useState<number>(0)

  useEffect(()=>{
    if(user.isAuth){
      $api.get<IBasketProductFull[]>(`/${locale}/basket/`)
      .then((res)=>{
        if(res.data){
          // @ts-ignore
          setNewProducts(res.data)
          // @ts-ignore
          setSelected(res.data.filter((el)=>el.buy_now))
        }
      }).catch((e)=>{
        setNewProducts([])
        setSelected([])
      })
      return;
    }else{
      $api.post<IProduct[]>(`/${locale}/product/favs/`, {
        ids: products.map((el)=>el.id).join(',')
      }).then((res)=>{
        if(res.data){
          const newArr = res.data.map((elem, index)=>{
            const data = products.find((el)=>el.id === elem.id)
            if(data){
              return data
            }
          })
          // @ts-ignore
          setSelected([...newArr])
          // @ts-ignore
          setNewProducts([...newArr])
        }
      }).catch((e)=>{
        setNewProducts([])
      })
      return;
    }
  }, [locale, products, user.isAuth])

  useEffect(()=>{
    if(user.isAuth){
    }else{
      let totalP = 0
      let totalC = 0

      selected.map((el)=>{
        totalP += (el.price * (el.product_more[0].count || 1))
        totalC += (el.product_more[0].count || 1)
      })

      setTotalCount(totalC)
      setTotalPrice(+totalP.toFixed(2))
    }
  },[selected])

  const selectHandler = (product: IBasketProductFull) => {
    const includes = selected.find((el)=>el.product_more[0].id === product.product_more[0].id)
    if(!includes){
      setSelected(prev => [...prev, product])
      if(user.isAuth){
        $api.patch(`${locale}/basket/${product.product_more[0].id}/`, {
          buy_now: true
        })
          .then(()=>{
            $api.get<number>(`/${locale}/basket/price`)
              .then((res)=>{
                let totalC = 0
                selected.map((el)=>{
                  totalC += (el.product_more[0].count || 1)
                })
                setTotalCount(totalC)
                setTotalPrice(+(res.data).toFixed(2))
              })
          })
      }
      return;
    }else{
      let arr = selected.filter((el)=>el.product_more[0].id !== product.product_more[0].id)
      setSelected(arr)
      if(user.isAuth){
        $api.patch(`${locale}/basket/${product.product_more[0].id}/`, {
          buy_now: false
        })
          .then(()=> {
            $api.get<number>(`/${locale}/basket/price`)
              .then((res) => {
                let totalC = 0
                selected.map((el) => {
                  totalC += (el.product_more[0].count || 1)
                })
                setTotalCount(totalC)
                setTotalPrice(+(res.data).toFixed(2))
              })
          })
      }
      return;
    }
  }

  const selectAllProductHandler = () => {
    newProducts.map((el)=>{
      $api.patch(`${locale}/basket/${el.product_more[0].id}/`, {
        buy_now: true
      })
    })
    setSelected([...newProducts])
  }

  const removeAllProductFromBasketHandler = () => {
    newProducts.map((el)=>{
      $api.delete(`${locale}/basket/${el.product_more[0].id}/`)
        .catch(()=>{})
    })
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
  }

  const onChangeLast = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value)
  }

  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    let phoneVal = e.target.value.replace(/\D/g, ""),
      formattedPhone = `+${digits}`

    if(!phoneVal){
      setPhoneUpd('');
    }

    const phoneLen = digits.length

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
      setErrors(prev => Object.assign(prev, {phone: 'Телефон слишком короткий'}))
    }
  }

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    if(!validEmailRegex.test(e.target.value)){
      setErrors(prev => Object.assign(prev, {email: 'Почта введена некорректно.'}))
    }else{
      setErrors(prev => Object.assign(prev, {email: null}))
    }
  }

  const returnPages = () => {
    switch (page){
      case 0:
        return (<>
          <div className={s.basket__header}>
            <h1>{translates.title}</h1>
            <div className={s.basket__header__btns}>
              <div onClick={removeAllProductFromBasketHandler} className={s.basket__header__btns__btn}>{translates.clear}</div>
              <div onClick={selectAllProductHandler} className={s.basket__header__btns__btn}>{translates.selectAll}</div>
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
              <h2>{translates.empty}</h2>
              <Button type={'link'} href={'/catalogue'} text={translates.toCatalogue} />
            </div>}
          </div>
        </>)
      case 1:
        return (<>
          <div>
            <div className={s.basket__header}>
              <h1>{translates.title_1}</h1>
            </div>
            <div className={s.basket__inputs}>
              <div>
                <h3>{translates.order.first}</h3>
                <input value={firstName} onChange={onChangeFirst} placeholder={translates.order.first_pl} type="text"/>
              </div>
              <div>
                <h3>{translates.order.last}</h3>
                <input value={lastName} onChange={onChangeLast} placeholder={translates.order.last_pl} type="text"/>
              </div>
              <div>
                <h3>{translates.order.phone}</h3>
                <input value={phoneUpd} onChange={onChangePhone} placeholder={'+7 999 999 99 99'} type="text"/>
              </div>
              <div>
                <h3>Email</h3>
                <input value={email} onChange={onChangeEmail} placeholder={'info@tmshe.com'} type="text"/>
              </div>
            </div>
          </div>
        </>)
    }
  }

  const makeOrder = () => {

  }

  const handleClick = () => {
    switch (page){
      case 0:
        setPage(1)
        break;
      case 1:
        makeOrder()
        break;
    }
  }

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles} auth={translates.auth}>
      <Head>
        <title>{translates.title}</title>
      </Head>
      <div>
        <Container>
          <div className={s.basket}>
            {returnPages()}
            <div className={s.basket__info}>
              <h1 className={s.basket__info__text}>
                {translates.total} {totalCountNew} {translates.productsToBuy}: <div>{totalPriceNew} {locale === 'ru' ? '₽' : '$'}</div>
              </h1>
              <Button text={translates.buy} onClick={handleClick} />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default BasketPage