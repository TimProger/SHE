import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Layout from "../../layout/layout";
import "swiper/css";
import "swiper/css/pagination";
import s from "../../styles/pages/basket.module.scss";
import Container from "../Container";
import Head from "next/head";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {IBasketProduct} from "../../types/Product.types";
import {
  removeAllProductFromBasket,
} from "../../store/Slices/Basket.slice";
import Link from "next/link";
import CardFloat from "../CardFloat";
import Button from "../Button";

interface IBasketProps {
  translates: any;
  isLoading: boolean;
  products: IBasketProduct[];
  error: string | null;
  totalPrice: number;
  totalCount: number;
}

const BasketPage: React.FC<IBasketProps> = ({translates, products, totalPrice, totalCount}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const [selected, setSelected] = useState<IBasketProduct[]>([])
  const [totalPriceNew, setTotalPrice] = useState<number>(0)
  const [totalCountNew, setTotalCount] = useState<number>(0)

  useEffect(()=>{
    setSelected([...products])
    setTotalPrice(totalPrice)
    setTotalCount(totalCount)
  },[products])

  const selectHandler = (product: IBasketProduct) => {
    const includes = selected.find((el)=>el.id === product.id)
    if(!includes){
      setSelected(prev => [...prev, product])
      const elem = products.filter((element, index)=>element.id===product.id)[0]
      console.log(elem)
      setTotalPrice(prev => prev += elem.price*elem.count)
      setTotalCount(prev => prev += elem.count)
      return;
    }else{
      let index = selected.indexOf(includes)
      selected.splice(index, 1)
      setSelected(prev => [...prev])
      const elem = products.filter((element, index)=>element.id===product.id)[0]
      setTotalPrice(prev => prev -= elem.price*elem.count)
      setTotalCount(prev => prev -= elem.count)
      return;
    }
  }

  const selectAllProductHandler = () => {
    setSelected([...products])
    setTotalPrice(totalPrice)
    setTotalCount(totalCount)
  }

  const removeAllProductFromBasketHandler = () => {
    dispatch(removeAllProductFromBasket())
  }

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles}>
      <Head>
        <title>{translates.title}</title>
      </Head>
      <div>
        <Container>
          <div className={s.basket}>
            <div className={s.basket__header}>
              <h1>{translates.title}</h1>
              <div className={s.basket__header__btns}>
                <div onClick={removeAllProductFromBasketHandler} className={s.basket__header__btns__btn}>{translates.clear}</div>
                <div onClick={selectAllProductHandler} className={s.basket__header__btns__btn}>{translates.selectAll}</div>
              </div>
            </div>
            <div className={s.basket__products}>
              {products.length > 0 ? products.map((el, index: number)=>{
                return <div className={s.basket__products__card}>
                  <input
                    onChange={()=>selectHandler(el)}
                    checked={!!selected.find((elem)=>elem.id === el.id)}
                    type={'checkbox'} />
                  <CardFloat product={el} isBasket={true} />
                </div>
              }) : <div className={s.basket__products__empty}>
                <h2>{translates.empty}</h2>
                <Button type={'link'} href={'/catalogue'} text={translates.toCatalogue} />
              </div>}
            </div>
            <div className={s.basket__info}>
              <h1 className={s.basket__info__text}>
                {translates.total} {totalCountNew} {translates.productsToBuy}: <div>{totalPriceNew} {locale === 'ru' ? '₽' : '$'}</div>
              </h1>
              <Button text={translates.buy} />
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default BasketPage