import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React, {MouseEvent, useEffect, useState} from "react";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import {IFilter, IProduct} from "../types/Product.types";
import {$api} from "../http/api";
import s from "../styles/pages/catalog.module.scss";
import {Storage} from "../utils/storage";
import Layout from "../layout/layout";
import Head from "next/head";
import Container from "../components/Container";
import Dropdown from "../components/Dropdown";
import Card from "../components/Card";

interface ICatalogProps {
}

interface IUsedFilters {
  category: number[];
  color: number[];
  collection: number[];
  type: number[];
  min_price: number | null;
  max_price: number | null;
}

const Catalog: React.FC<ICatalogProps> = () => {
  const { locale, query } = useRouter()
  const { t } = useTranslation('catalog')
  const dispatch = useAppDispatch()

  const [types, setTypes] = useState<string[]>([])
  const [page, setPage] = useState<number>(1)
  const [pages, setPages] = useState<number>(1)
  const [filters, setFilters] = useState<IFilter[]>([])
  const [products, setProducts] = useState<IProduct[]>([])
  const [usedFilters, setUsedFilters] = useState<IUsedFilters>({
    category: [],
    color: [],
    collection: [],
    type: [],
    min_price: null,
    max_price: null
  })

  const [limit, setLimit] = useState<number>(20)
  const [limitArr, setLimitArr] = useState<number[]>([20, 40, 60]);

  useEffect(()=>{
    $api.get(`${locale}/product/catalog/get_filters`)
      .then((res)=>{
        setFilters(res.data)
        const data = new FormData()
        if(query.category){
          // @ts-ignore
          data.append('category', query.category)
          usedFilters.category.push(+`${query.category}`)
        }
        if(query.collection){
          // @ts-ignore
          data.append('collection', query.collection)
          usedFilters.collection.push(+`${query.collection}`)
        }
        if(query.type){
          // @ts-ignore
          data.append('type', query.type)
          usedFilters.type.push(+`${query.type}`)
        }
        $api.post(`${locale}/product/catalog/values/${limit}/${page}/`, data)
          .then((res)=>{
            setPages(Math.ceil(res.data.count_pages))
            setProducts(res.data.data)
          })
      })
  },[locale, limit, query])

  useEffect(()=>{
    const data = new FormData()
    if(usedFilters.category.length > 0) data.append('category', usedFilters.category.join(','))
    if(usedFilters.color.length > 0) data.append('color', usedFilters.color.join(','))
    if(usedFilters.collection.length > 0) data.append('collection', usedFilters.collection.join(','))
    if(usedFilters.type.length > 0) data.append('type', usedFilters.type.join(','))

    $api.post(`${locale}/product/catalog/values/${limit}/${page}/`, data)
      .then((res)=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setPages(Math.ceil(res.data.count_pages))
        setProducts(res.data.data)
      })
  },[page, limit])

  const onToggleLimitClick = (e: MouseEvent, value: number) => {
    setLimit(value)
  }

  const toggleFilter = (value: string, type: string) => {
    switch (type){
      case 'category':
        if(!usedFilters.category.includes(+value)){
          usedFilters.category.push(+value)
        }else{
          const index = usedFilters.category.indexOf(+value)
          usedFilters.category.splice(index, 1)
        }
        break;
      case 'color':
        if(!usedFilters.color.includes(+value)){
          usedFilters.color.push(+value)
        }else{
          const index = usedFilters.color.indexOf(+value)
          usedFilters.color.splice(index, 1)
        }
        break;
      case 'collection':
        if(!usedFilters.collection.includes(+value)){
          usedFilters.collection.push(+value)
        }else{
          const index = usedFilters.collection.indexOf(+value)
          usedFilters.collection.splice(index, 1)
        }
        break;
      case 'type':
        if(!usedFilters.type.includes(+value)){
          usedFilters.type.push(+value)
        }else{
          const index = usedFilters.type.indexOf(+value)
          usedFilters.type.splice(index, 1)
        }
        break;
      case 'price':
        if(!usedFilters.type.includes(+value)){
          usedFilters.type.push(+value)
        }else{
          const index = usedFilters.type.indexOf(+value)
          usedFilters.type.splice(index, 1)
        }
        break;
    }
    setUsedFilters(Object.assign({}, usedFilters))
  }

  useEffect(()=>{
    const data = new FormData()
    if(usedFilters.category.length > 0) data.append('category', usedFilters.category.join(','))
    if(usedFilters.color.length > 0) data.append('color', usedFilters.color.join(','))
    if(usedFilters.collection.length > 0) data.append('collection', usedFilters.collection.join(','))
    if(usedFilters.type.length > 0) data.append('type', usedFilters.type.join(','))
    $api.post(`${locale}/product/catalog/values/${limit}/1/`, data)
      .then((res)=>{
        setPages(Math.ceil(res.data.count_pages))
        setProducts(res.data.data)
      })
  },[usedFilters, limit])

  const displayPages = () => {
    const arr = []
    for(let i=0;i<pages;i++){
      arr.push(i+1)
    }
    return arr.map((el)=>{
      return <div
        onClick={()=>setPage(el)}
        className={s.catalog__container__products__pages__page + ' ' + (page === el && s.catalog__container__products__pages__active)}>
        {el}
      </div>
    })
  }

  const [seen, setSeen] = useState<IProduct[]>([])

  useEffect(()=>{
    const data = Storage.get('seen')
    if(data && data.length > 0){
      console.log('')
      $api.post<IProduct[]>(`/${locale}/product/favs/`, {
        ids: data.join(',')
      })
        .then((res)=>{
          data.map((el: string, index: number)=>{
            console.log(res.data, data)
            const item = res.data.filter((el)=> el.id === +data[index])
            seen[index] = item[0]
          })
          setSeen([...seen])
        })
    }
  },[locale])

  return (
    <Layout>
      <Head>
        <title>{t('title')} | ™SHE</title>
      </Head>
      <div>
        <Container>
          <div className={s.catalog}>
            <div className={s.catalog__header}>
              <div className={s.catalog__header__top}>
                <h1>
                  {(types.length > 0 && types.join(', ') || types[0]) || t('title')}
                </h1>
              </div>
              <div className={s.catalog__header__bottom}>
                {/*<Dropdown value={} options={} handler={} />*/}
                <div>
                  {/* @ts-ignore */}
                  {locale === 'ru' ? 'До' : 'To'}: <Dropdown type={'limit'} handler={(e: MouseEvent, value: number)=>onToggleLimitClick(e, value)} value={limit} options={limitArr} />
                </div>
              </div>
            </div>
            <div className={s.catalog__container}>
              <div className={s.catalog__container__filters}>
                {filters.length > 0 && filters.map((el)=>{
                  return <div className={s.catalog__container__filters__block}>
                    <h3>{el.name_lang}</h3>
                    <div>
                      {el.option.map((elem, index)=>{
                        return <div className={s.catalog__container__filters__block__option}>
                          {/* @ts-ignore */}
                          <input checked={usedFilters[`${el.name}`].includes(elem.id)} onChange={(e)=>toggleFilter(e.target.value, el.name)} type="checkbox" value={elem.id} name={el.name+'i'+index} id={el.name+'i'+index}/>
                          {/* @ts-ignore */}
                          {elem.color &&  <span style={{background: elem.color}} className={s.catalog__container__filters__block__color} /> }
                          <label htmlFor={el.name+'i'+index}>{elem.name}</label>
                        </div>
                      })}
                    </div>
                  </div>
                })}
              </div>
              <div className={s.catalog__container__products}>
                <div className={s.catalog__container__products__cards}>
                  {products.length > 0 && products.map((el)=>{
                    return <div><Card product={el}  /></div>
                  })}
                </div>
                <div className={s.catalog__container__products__footer}>
                  <div>
                    {/* @ts-ignore */}
                    {locale === 'ru' ? 'До' : 'To'}: <Dropdown type={'limit'} handler={(e: MouseEvent, value: number)=>onToggleLimitClick(e, value)} value={limit} options={limitArr} />
                  </div>
                </div>
                <div className={s.catalog__container__products__pages}>

                  {1 !== page ? <svg onClick={()=>setPage(prev => prev -= 1)} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.6666 15.5C28.9428 15.5 29.1666 15.7239 29.1666 16C29.1666 16.2761 28.9428 16.5 28.6666 16.5V15.5ZM0.979761 16.3536C0.7845 16.1583 0.7845 15.8417 0.979761 15.6464L4.16174 12.4645C4.357 12.2692 4.67359 12.2692 4.86885 12.4645C5.06411 12.6597 5.06411 12.9763 4.86885 13.1716L2.04042 16L4.86885 18.8284C5.06411 19.0237 5.06411 19.3403 4.86885 19.5355C4.67359 19.7308 4.357 19.7308 4.16174 19.5355L0.979761 16.3536ZM28.6666 16.5H1.33331V15.5H28.6666V16.5Z" fill="black"/>
                  </svg> : <p className={s.catalog__container__products__pages__pl}></p>}
                  {displayPages()}
                  {pages !== page ? <svg onClick={() => setPage(prev => prev += 1)} width="32" height="32" viewBox="0 0 32 32"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.33334 15.5C1.0572 15.5 0.833344 15.7239 0.833344 16C0.833344 16.2761 1.0572 16.5 1.33334 16.5V15.5ZM29.0202 16.3536C29.2155 16.1583 29.2155 15.8417 29.0202 15.6464L25.8383 12.4645C25.643 12.2692 25.3264 12.2692 25.1311 12.4645C24.9359 12.6597 24.9359 12.9763 25.1311 13.1716L27.9596 16L25.1311 18.8284C24.9359 19.0237 24.9359 19.3403 25.1311 19.5355C25.3264 19.7308 25.643 19.7308 25.8383 19.5355L29.0202 16.3536ZM1.33334 16.5H28.6667V15.5H1.33334V16.5Z"
                      fill="black"/>
                  </svg> : <p className={s.catalog__container__products__pages__pl}></p>}
                </div>
              </div>
            </div>
            <div className={s.catalog__seen}>
              <h1>{locale === 'ru' ? 'Недавно просмотренные' : 'Recently viewed'}</h1>
              {seen.length > 0
                ? <div className={s.catalog__seen__cards}>
                  {seen.map((el, index)=>{
                    return <div className={s.catalog__seen__cards__card}>
                      <Card product={el} key={index} />
                    </div>
                  })}
                </div>
                : <p className={s.catalog__seen__not_found}>
                  {locale === 'ru' ? 'Вы не просмотрели ни одного товара' : 'You haven\'t viewed any products'}
                </p>}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['catalog', 'common']))
    },
    revalidate: 10,
  }
}

export default Catalog