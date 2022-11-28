import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
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

const BasketPage: React.FC<IBasketProps> = ({translates, products}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const user = useTypedSelector(state => state.profile)

  const [newProducts, setNewProducts] = useState<IBasketProductFull[]>([])
  const [selected, setSelected] = useState<IBasketProductFull[]>([])
  const [totalPriceNew, setTotalPrice] = useState<number>(0)
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
              const more = elem.product_more.find((el)=>el.id === data.more)
              if(more){
                elem.price = more.price
                elem.ml = more.ml
                elem.count = data.count
                return elem
              }
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
      $api.get<number>(`/${locale}/basket/price`)
        .then((res)=>{
          let totalC = 0
          selected.map((el)=>{
            totalC += (el.count || 1)
          })
          setTotalCount(totalC)
          setTotalPrice(+(res.data).toFixed(2))
        })
    }else{
      let totalP = 0
      let totalC = 0

      selected.map((el)=>{
        totalP += (el.price * (el.count || 1))
        totalC += (el.count || 1)
      })

      setTotalCount(totalC)
      setTotalPrice(+totalP.toFixed(2))
    }
  },[selected])

  const selectHandler = (product: IBasketProductFull) => {
    const includes = selected.find((el)=>el.id === product.id)
    if(!includes){
      setSelected(prev => [...prev, product])
      if(user.isAuth){
        $api.patch(`${locale}/basket/${product.id}/`, {
          buy_now: true
        })
      }
      return;
    }else{
      let arr = selected.filter((el)=>el.id !== product.id)
      setSelected(arr)
      if(user.isAuth){
        $api.patch(`${locale}/basket/${product.id}/`, {
          buy_now: false
        })
      }
      return;
    }
  }

  const selectAllProductHandler = () => {
    newProducts.map((el)=>{
      $api.patch(`${locale}/basket/${el.id}/`, {
        buy_now: true
      })
    })
    setSelected([...newProducts])
  }

  const removeAllProductFromBasketHandler = () => {
    newProducts.map((el)=>{
      $api.delete(`${locale}/basket/${el.id}/`)
        .catch(()=>{})
    })
    setNewProducts([])
    dispatch(removeAllProductFromBasket())
  }

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles} auth={translates.auth}>
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