import Layout from "../../layout/layout";
import s from '../../styles/pages/product.module.scss'
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Container from "../../components/Container";
import Head from "next/head";
import {IBasketProduct, IProduct, IProductMore} from "../../types/Product.types";
import {API_BASE_URL} from "../../http/api";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {addToBasket, removeFromBasket} from "../../store/Slices/Basket.slice";
import {toggleFav} from "../../store/Slices/Fav.slice";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import Button from "../Button";

interface IProductPageProps {
  translates: any;
  product: IProduct;
}

const Product: React.FC<IProductPageProps> = ({translates, product}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const [isFav, setIsFav] = useState<boolean>(false)
  const [isBasket, setIsBasket] = useState<boolean>(false)

  const fav = useTypedSelector(state => state.fav)
  const basket = useTypedSelector(state => state.basket)

  const [more, setMore] = useState<IProductMore>(product.product_more[0])
  const [basketProduct, setBasketProduct] = useState<IBasketProduct | null>(null)

  useEffect(()=>{
    const includes = fav.products.filter((el)=>el.id === product.id)
    if(fav.products.includes(includes[0])){
      setIsFav(true)
      setMore(includes[0].product_more[0])
    }else{
      setIsFav(false)
    }
  }, [fav.products])

  useEffect(()=>{
    const includes = basket.products.filter((el)=>el.id === product.id)
    if(basket.products.includes(includes[0])){
      setBasketProduct(basket.products.filter((el)=>el.id === product.id)[0])
      setIsBasket(true)
      setMore(includes[0].product_more[0])
    }else{
      setBasketProduct(null)
      setIsBasket(false)
    }
  }, [basket.products])

  useEffect(()=>{
    const id = more.id
    const moreNew = product.product_more.filter((el, index) => el.id === id)
    if(moreNew[0]){
      setMore(moreNew[0])
    }
  },[product])

  const addToBasketHandler = () => {
    dispatch(addToBasket({product, more}))
  }

  const removeFromBasketHandler = () => {
    dispatch(removeFromBasket(product.id))
  }

  const toggleFavHandler = () => {
    dispatch(toggleFav({product, more}))
  }

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles}>
      <Head>
        <title>{product.name} | ™SHE</title>
      </Head>
      <div>
        <Container>
          <div className={s.container__product}>
            <div className={s.container__product__header}>
              <div className={s.container__product__header__path}>
                Главная / Каталог / {product.type.id} / {product.name}
              </div>
              <article className={s.container__product__header__article}>
                {translates.article} {product.article}
              </article>
            </div>
            <div className={s.container__product__product}>
              <div className={s.container__product__product__images}>
                <div className={s.container__product__product__images__slider}></div>
                <div className={s.container__product__product__images__main}>
                  <div className={s.container__product__product__images__main__tags}>
                    {product.is_new && <div className={s.container__product__product__images__main__new}>New</div>}
                    {product.is_hit && <div className={s.container__product__product__images__main__hit}>Hit</div>}
                  </div>
                  <img src={product.image ?`${API_BASE_URL}${product.image}` : ''} alt={product.name}/>
                </div>
              </div>
              <div className={s.container__product__product__info}>
                <div>
                  <h1 className={s.container__product__product__info__name}>{product.name}</h1>
                  <p className={s.container__product__product__info__about}>{product.about}</p>
                </div>
                <p className={s.container__product__product__info__color}>{translates.color}:
                  <span style={{background: product.color}} className={s.container__product__product__info__color__block} />
                </p>
                <div className={s.container__product__product__info__size}>
                  <p>{translates.ml}:</p>
                  <div className={s.container__product__product__info__size__container}>
                    {product.product_more.map((el)=>{
                      return <div key={el.id}
                        className={more.ml === el.ml ? s.container__product__product__info__size__container__active : ''}
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
                      {translates.inBasket} {basketProduct?.count}
                      <div onClick={addToBasketHandler}>+</div>
                    </div>
                    : <Button onClick={addToBasketHandler} text={translates.addToBasket} />
                  }
                  <div onClick={toggleFavHandler} className={s.container__product__product__info__button__fav + ' ' + (isFav ? s.container__product__product__info__button__fav__active : '')}>
                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1721 11.1855L12.0102 20L2.84826 11.1855M2.84826 11.1855C2.24395 10.6143 1.76794 9.9277 1.45021 9.16898C1.13248 8.41026 0.979915 7.59585 1.00212 6.77704C1.02432 5.95822 1.22081 5.15275 1.57922 4.41133C1.93763 3.66991 2.45019 3.0086 3.08462 2.46906C3.71905 1.92952 4.46162 1.52343 5.26555 1.27636C6.06949 1.02929 6.91738 0.94659 7.75583 1.03347C8.59429 1.12036 9.40514 1.37494 10.1373 1.78119C10.8695 2.18744 11.5072 2.73656 12.0102 3.39396C12.5153 2.74133 13.1538 2.19701 13.8854 1.79507C14.6171 1.39313 15.4263 1.14223 16.2624 1.05806C17.0985 0.973891 17.9435 1.05827 18.7445 1.30592C19.5455 1.55357 20.2853 1.95915 20.9175 2.49729C21.5497 3.03542 22.0607 3.69453 22.4186 4.43335C22.7766 5.17217 22.9736 5.9748 22.9975 6.79101C23.0214 7.60722 22.8716 8.41944 22.5575 9.17683C22.2434 9.93422 21.7718 10.6205 21.1721 11.1927" stroke="#A0A0A0" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={s.container__product__info}>
              <div className={s.container__product__info__menu}>
                <div className={s.container__product__info__menu__wrapper}>
                  <p>{translates.info}</p>
                  <p>{translates.video}</p>
                </div>
              </div>
              <div className={s.container__product__info__content}>
                
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Product