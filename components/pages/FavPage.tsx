import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Layout from "../../layout/layout";
import s from "../../styles/pages/fav.module.scss";
import Container from "../Container";
import Head from "next/head";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import {IFavProduct, IProduct} from "../../types/Product.types";
import CardFloat from "../CardFloat";
import Link from "next/link";
import {removeAllProductFromFav} from "../../store/Slices/Fav.slice";
import Button from "../Button";
import {$api} from "../../http/api";

interface IFavProps {
  translates: any;
  isLoading: boolean;
  products: IFavProduct[];
  error: string | null
}

const FavPage: React.FC<IFavProps> = ({translates, products}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const removeAllProductFromFavHandler = () => {
    dispatch(removeAllProductFromFav())
  }

  const [newProducts, setNewProducts] = useState<IProduct[]>([])

  useEffect(()=>{
    $api.post<IProduct[]>(`/${locale}/product/favs/`, {
      ids: products.map((el)=>el.id).join(',')
    }).then((res)=>{
      if(res.data){
        const newArr = res.data.map((elem, index)=>{
          const data = products.find((el)=>el.id === elem.id)
          if(data){
            const more = elem.product_more.find((el)=>el.id === data.more)
            if(more){
              elem.product_more = [more]
              return elem
            }
          }
        })
        // @ts-ignore
        setNewProducts(newArr)
      }
    }).catch((e)=>{
      setNewProducts([])
    })
  }, [locale, products])

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles} auth={translates.auth}>
      <Head>
        <title>{translates.title}</title>
      </Head>
      <div>
        <Container>
          <div className={s.fav}>
            <div className={s.fav__header}>
              <h1>{translates.title}</h1>
              <div className={s.fav__header__btns}>
                <div onClick={removeAllProductFromFavHandler} className={s.fav__header__btns__btn}>{translates.clear}</div>
              </div>
            </div>
            <div className={s.fav__products}>
              {newProducts.length > 0 ? newProducts.map((el, index: number)=>{
                return <div className={s.fav__products__card}>
                  <CardFloat product={el} isBasket={false} />
                </div>
              }) : <div className={s.fav__products__empty}>
                <h2>{translates.empty}</h2>
                <Button type={'link'} href={'/catalogue'} text={translates.toCatalogue} />
              </div>}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default FavPage