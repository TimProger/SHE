import { GetStaticProps, GetStaticPaths } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {IBasketProduct, IProduct, IProductMore} from "../../types/Product.types";
import {$api, API_BASE_URL} from "../../http/api";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Stock from "../../public/images/stock.png";
import {Storage} from "../../utils/storage";
import {addToBasket, removeFromBasket} from "../../store/Slices/Basket.slice";
import {toggleFav} from "../../store/Slices/Fav.slice";
import Layout from "../../components/Layout";
import Head from "next/head";
import Container from "../../components/Container";
import s from "../../styles/pages/product.module.scss";
import Link from "next/link";
import Button from "../../components/Button";

interface IProductProps {
  product: IProduct
}

const Product: React.FC<IProductProps> = ({product}) => {
  const { locale } = useRouter()
  const { t } = useTranslation('product')
  const dispatch = useAppDispatch()

  const [isFav, setIsFav] = useState<boolean>(false)
  const [isBasket, setIsBasket] = useState<boolean>(false)

  const fav = useTypedSelector(state => state.fav)
  const basket = useTypedSelector(state => state.basket)
  const user = useTypedSelector(state => state.profile)

  const [more, setMore] = useState<IProductMore>(product.product_more[0])
  const [mainImage, setMainImage] = useState<string>(product.images[0] ? `${API_BASE_URL}/${product.images[0].image}` : `${Stock.src}`)
  const [basketProduct, setBasketProduct] = useState<IBasketProduct | null>(null)

  useEffect(()=>{
    if(window){
      const seen = Storage.get('seen')
      if(seen){
        const index = seen.indexOf(product.id)
        if(index === -1){
          if(seen.length === 4){
            seen.shift()
            seen.push(product.id)
            Storage.set('seen', seen)
          }else{
            seen.push(product.id)
            Storage.set('seen', seen)
          }
        }else{
          const id = seen[index]
          seen.splice(index, 1)
          seen.push(id)
          Storage.set('seen', seen)
        }
      }else{
        const seen = []
        seen.push(product.id)
        Storage.set('seen', seen)
      }
    }
  },[])

  useEffect(()=>{
    const id = more.id
    const moreNew = product.product_more.filter((el, index) => el.id === id)
    if(moreNew[0]){
      setMore(moreNew[0])
    }
  },[product])

  useEffect(()=>{
    const includes = fav.products.filter((el)=>el.more === more.id)
    if(includes[0]){
      setIsFav(true)
    }else{
      setIsFav(false)
    }
  }, [fav.products, more])

  useEffect(()=>{
    if(user.isAuth){
      const includes = basket.products.filter((el)=>el.more === more.id)
      if(includes[0]){
        setBasketProduct(basket.products.filter((el)=>el.more === more.id)[0])
        setIsBasket(true)
      }else{
        setBasketProduct(null)
        setIsBasket(false)
      }
    }else{
      const includes = basket.products.filter((el)=>el.more === more.id)
      if(basket.products.includes(includes[0])){
        setBasketProduct(basket.products.filter((el)=>el.more === more.id)[0])
        setIsBasket(true)
      }else{
        setBasketProduct(null)
        setIsBasket(false)
      }
    }
  }, [basket.products, more])

  const addToBasketHandler = () => {
    if(user.isAuth){
      const includes = basket.products.filter((el)=>el.more === more.id)
      if(includes[0]){
        $api.patch(`${locale}/basket/${includes[0].id}/`, {
          count: includes[0].count + 1
        })
          .then((res)=>{
            dispatch(addToBasket(res.data))
          })
          .catch(()=>{})
      }else{
        $api.post(`${locale}/basket/`, {
          product: more.id
        })
          .then((res)=>{
            dispatch(addToBasket(res.data))
          })
          .catch(()=>{})
      }
    }else{
      const obj = {
        id: product.id,
        more: more.id,
        buy_now: true,
        count: 1
      }
      dispatch(addToBasket(obj))
    }
  }

  const removeFromBasketHandler = () => {
    if(user.isAuth){
      const includes = basket.products.filter((el)=>el.more === more.id)
      if(includes[0].count <= 1){
        $api.delete(`${locale}/basket/${includes[0].id}`)
          .then((res)=>{
            dispatch(removeFromBasket(more.id))
          })
          .catch(()=>{})
      }else{
        $api.patch(`${locale}/basket/${includes[0].id}/`, {
          count: includes[0].count - 1
        })
          .then((res)=>{
            dispatch(removeFromBasket(more.id))
          })
          .catch(()=>{})
      }
    }else{
      dispatch(removeFromBasket(more.id))
    }

  }

  const toggleFavHandler = () => {
    const obj = {
      id: more.id,
      more: more.id
    }
    dispatch(toggleFav(obj))
  }

  const [infoPage, setInfoPage] = useState(1);

  const scrollHandler = (e: React.UIEvent<HTMLElement>) => {
  }

  return (
    <Layout>
      <Head>
        <title>{product.name} | ™SHE</title>
        <meta name={"description"} content={product.about || 'Product page description'} />
      </Head>
      <div>
        <Container>
          <div className={s.container__product}>
            <div className={s.container__product__header}>
              <div className={s.container__product__header__path}>
                <Link href={'/'}>{locale === 'ru' ? 'Главная' : 'Home'}</Link> / <Link href={'/catalog'}>{locale === 'ru' ? 'Каталог' : 'Catalog'}</Link> / <Link href={`/catalog?collection=${product.product_type}`}>{product.type}</Link> / <Link href={`/product/${product.id}`}>{product.name}</Link>
              </div>
              <article className={s.container__product__header__article}>
                {t('article')} {product.article}
              </article>
            </div>
            <div className={s.container__product__product}>
              <div className={s.container__product__product__images}>
                <div className={s.container__product__product__images__slider}>
                  {product.images.map((el)=>{
                    return <img
                      className={mainImage === `${API_BASE_URL}/${el.image}`
                        ? s.container__product__product__images__slider__active
                        : ''}
                      onClick={()=>setMainImage(`${API_BASE_URL}/${el.image}`)}
                      src={el.image ? `${API_BASE_URL}/${el.image}` : Stock.src}
                      alt={'img'} />
                  })}
                  <div onClick={(e: React.UIEvent<HTMLElement>)=>scrollHandler(e)}></div>
                </div>
                <div className={s.container__product__product__images__main}>
                  <div className={s.container__product__product__images__main__tags}>
                    {product.is_new && <div className={s.container__product__product__images__main__new}>New</div>}
                    {product.is_hit && <div className={s.container__product__product__images__main__hit}>Hit</div>}
                  </div>
                  <img src={mainImage} alt={product.name}/>
                </div>
              </div>
              <div className={s.container__product__product__info}>
                <div>
                  <h1 className={s.container__product__product__info__name}>{product.name}</h1>
                  <p className={s.container__product__product__info__about}>{product.about_title}</p>
                </div>
                <p className={s.container__product__product__info__color}>{t('color')}: <span>{product.color_name}</span> <span style={{background: product.color}} className={s.container__product__product__info__color__block} />
                </p>
                <div className={s.container__product__product__info__size}>
                  <p>{t('ml')}:</p>
                  <div className={s.container__product__product__info__size__container}>
                    {product.product_more.map((el)=>{
                      return <div key={el.id}
                                  className={more.ml === el.ml
                                    ? s.container__product__product__info__size__container__active
                                    : ''}
                                  onClick={()=>setMore(el)}>
                        {el.ml}
                      </div>
                    })}
                  </div>
                </div>
                <div className={s.container__product__product__info__price}>
                  <p>{more.price} {more.price_currency === 'RUB' ? '₽' : '$'}</p>
                </div>
                <div className={s.container__product__product__info__button}>
                  {isBasket
                    ? <div className={s.container__product__product__info__button__add + ' ' + s.container__product__product__info__button__add__active}>
                      <div onClick={removeFromBasketHandler}>-</div>
                      {t('inBasket')} {basketProduct?.count}
                      <div onClick={addToBasketHandler}>+</div>
                    </div>
                    : <div style={{display: 'flex'}}>
                      <Button className={s.container__product__product__info__button__add} onClick={addToBasketHandler} text={t('addToBasket')} />
                    </div>}
                  {<div onClick={toggleFavHandler} className={s.container__product__product__info__button__fav + ' ' + (isFav ? s.container__product__product__info__button__fav__active : '')}>
                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1721 11.1855L12.0102 20L2.84826 11.1855M2.84826 11.1855C2.24395 10.6143 1.76794 9.9277 1.45021 9.16898C1.13248 8.41026 0.979915 7.59585 1.00212 6.77704C1.02432 5.95822 1.22081 5.15275 1.57922 4.41133C1.93763 3.66991 2.45019 3.0086 3.08462 2.46906C3.71905 1.92952 4.46162 1.52343 5.26555 1.27636C6.06949 1.02929 6.91738 0.94659 7.75583 1.03347C8.59429 1.12036 9.40514 1.37494 10.1373 1.78119C10.8695 2.18744 11.5072 2.73656 12.0102 3.39396C12.5153 2.74133 13.1538 2.19701 13.8854 1.79507C14.6171 1.39313 15.4263 1.14223 16.2624 1.05806C17.0985 0.973891 17.9435 1.05827 18.7445 1.30592C19.5455 1.55357 20.2853 1.95915 20.9175 2.49729C21.5497 3.03542 22.0607 3.69453 22.4186 4.43335C22.7766 5.17217 22.9736 5.9748 22.9975 6.79101C23.0214 7.60722 22.8716 8.41944 22.5575 9.17683C22.2434 9.93422 21.7718 10.6205 21.1721 11.1927" stroke="#A0A0A0" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>}
                </div>
              </div>
            </div>
            <div className={s.container__product__info}>
              <div className={s.container__product__info__menu}>
                <div className={s.container__product__info__menu__wrapper}>
                  <p style={{borderBottom : infoPage == 1 ? '1px solid black' : 'none'}} onClick={()=> setInfoPage(1)}>Информация</p>
                  <p style={{borderBottom : infoPage == 2 ? '1px solid black' : 'none'}} onClick={()=> setInfoPage(2)}>Видео</p>
                </div>
              </div>
              <div className={s.container__product__info__content}>
                {infoPage == 1 ?
                  <div>
                    <div className={s.container__product__info__content__title}>
                      {product.about}
                    </div>
                    <div className={s.container__product__info__content__list}>
                      <p><span>{t('producer')}: </span>™SHE</p>
                      <p><span>{t('collection')}: </span>{product.type}</p>
                      <p><span>{t('country')}: </span>{locale === 'ru' ? 'Россия' : 'Russian'}</p>
                      <p><span>{t('color')}: </span>{product.color_name}</p>
                      <p><span>{t('ml')}: </span>{product.product_more.map((el)=>el.ml).join(' / ')}</p>
                    </div>
                    <div className={s.container__product__info__content__title}>
                      {product.about_text}
                    </div>
                  </div>
                  :
                  <div>

                  </div>
                }
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

interface Props {
  locales: string[];
  locale: string;
}

export const getStaticPaths = async ({locales, locale}: Props) => {
  const res = await fetch(`${API_BASE_URL}/all_product`)
  const data = await res.json()
  const paths: any[] = []
  data.map((el: { id: string; }) => {
    for (const locale of locales) {
      paths.push({
        params: {
          id: el.id.toString(),
        },
        locale,
      });
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({locale, params}) => {
  const res = await fetch(`${API_BASE_URL}/${locale}/product/${params?.id}`)
  const product = await res.json()
  return {
    props:{
      product: product,
      ...(await serverSideTranslations(locale as string ?? 'ru', ['product', 'common', 'footer']))
    },
    revalidate: 10
  }
}

export default Product