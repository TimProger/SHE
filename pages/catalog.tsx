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
import Layout from "../components/Layout";
import Head from "next/head";
import Container from "../components/Container";
import Dropdown from "../components/Dropdown";
import Card from "../components/Card";
import Button from "../components/Button";

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
  const [filtered, setFiltered] = useState<boolean>(false)
  const [limit, setLimit] = useState<number>(20)
  const [limitArr, setLimitArr] = useState<number[]>([20, 40, 60]);
  const [sortArr, setSortArr] = useState<{
    name: string;
    value: string;
  }[]>([
    {
      name: locale === 'ru' ? 'Новизне, новее' : 'Newest, newer',
      value: 'is_new desc'
    },
    {
      name: locale === 'ru' ? 'Новизне, старее' : 'Newest, older',
      value: 'is_new asc'
    },
    {
      name: locale === 'ru' ? 'Популярности' : 'Popularity',
      value: 'is_hit desc'
    },
    {
      name: locale === 'ru' ? 'Алфавиту, возрастание' : 'Alphabet, ascending',
      value: 'name desc'
    },
    {
      name: locale === 'ru' ? 'Алфавиту, убывание' : 'Alphabet, descending',
      value: 'name asc'
    }
  ])
  const [sort, setSort] = useState<{
    name: string;
    value: string;
  }>({
    name: locale === 'ru' ? 'Алфавиту, по возрастанию' : 'Alphabet, ascending',
    value: 'name asc'
  })

  useEffect(()=>{
    let arr = [
      {
        name: locale === 'ru' ? 'Новизне, новее' : 'Newest, newer',
        value: 'is_new desc'
      },
      {
        name: locale === 'ru' ? 'Новизне, старее' : 'Newest, older',
        value: 'is_new asc'
      },
      {
        name: locale === 'ru' ? 'Популярности' : 'Popularity',
        value: 'is_hit desc'
      },
      {
        name: locale === 'ru' ? 'Алфавиту, по возрастанию' : 'Alphabet, ascending',
        value: 'name asc'
      },
      {
        name: locale === 'ru' ? 'Алфавиту, по убыванию' : 'Alphabet, descending',
        value: 'name desc'
      }
    ]
    setSort({
      name: locale === 'ru' ? 'Алфавиту, по возрастанию' : 'Alphabet, ascending',
      value: 'name asc'
    })
    setSortArr(arr)
  },[locale])

  useEffect(()=>{
    $api.get(`${locale}/product/catalog/get_filters`)
      .then((res)=>{
        setFilters(res.data)
        const data = new FormData()
        data.append('order', sort.value)
        usedFilters.category = []
        usedFilters.collection = []
        usedFilters.type = []
        if(query.category){
          data.append('category', `${query.category}`)
          usedFilters.category = [+`${query.category}`]
          setFiltered(true)
        }
        if(query.collection){
          data.append('collection', `${query.collection}`)
          usedFilters.collection = [+`${query.collection}`]
          setFiltered(true)
        }
        if(query.type){
          data.append('type', `${query.type}`)
          usedFilters.type = [+`${query.type}`]
          setFiltered(true)
        }
        $api.post(`${locale}/product/catalog/values/${limit}/${page}/`, data)
          .then((res)=>{
            setPages(Math.ceil(res.data.count_pages))
            setProducts(res.data.data)
          })
      })
  },[locale, query])

  const changePage = (page: number) => {
    const data = new FormData()
    data.append('order', sort.value)
    if(usedFilters.category.length > 0) data.append('category', usedFilters.category.join(','))
    if(usedFilters.color.length > 0) data.append('color', usedFilters.color.join(','))
    if(usedFilters.collection.length > 0) data.append('collection', usedFilters.collection.join(','))
    if(usedFilters.type.length > 0) data.append('type', usedFilters.type.join(','))
    window.scrollTo({ top: 0, behavior: 'smooth' });
    $api.post(`${locale}/product/catalog/values/${limit}/${page}/`, data)
      .then((res)=>{
        setPages(Math.ceil(res.data.count_pages))
        setProducts(res.data.data)
      })
  }

  const changeLimit = (limit: number) => {
    const data = new FormData()
    data.append('order', sort.value)
    if(usedFilters.category.length > 0) data.append('category', usedFilters.category.join(','))
    if(usedFilters.color.length > 0) data.append('color', usedFilters.color.join(','))
    if(usedFilters.collection.length > 0) data.append('collection', usedFilters.collection.join(','))
    if(usedFilters.type.length > 0) data.append('type', usedFilters.type.join(','))
    $api.post(`${locale}/product/catalog/values/${limit}/1/`, data)
      .then((res)=>{
        setPage(1)
        setPages(Math.ceil(res.data.count_pages))
        setProducts(res.data.data)
      })
  }

  const changeSort = (sort: {
    name: string,
    value: string
  }) => {
    if(!sort.value) return
    const data = new FormData()
    data.append('order', sort.value)
    if(usedFilters.category.length > 0) data.append('category', usedFilters.category.join(','))
    if(usedFilters.color.length > 0) data.append('color', usedFilters.color.join(','))
    if(usedFilters.collection.length > 0) data.append('collection', usedFilters.collection.join(','))
    if(usedFilters.type.length > 0) data.append('type', usedFilters.type.join(','))
    $api.post(`${locale}/product/catalog/values/${limit}/1/`, data)
      .then((res)=>{
        setPage(1)
        setPages(Math.ceil(res.data.count_pages))
        setProducts(res.data.data)
      })
  }

  const onToggleLimitClick = (e: MouseEvent, value: number) => {
    setLimit(value)
    changeLimit(value)
  }

  const onToggleSortClick = (e: MouseEvent, value: {
    name: string,
    value: string
  }) => {
    setSort(value)
    changeSort(value)
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

  const useFilters = () => {
    const data = new FormData()
    data.append('order', sort.value)
    if(usedFilters.category.length > 0) data.append('category', usedFilters.category.join(','))
    if(usedFilters.color.length > 0) data.append('color', usedFilters.color.join(','))
    if(usedFilters.collection.length > 0) data.append('collection', usedFilters.collection.join(','))
    if(usedFilters.type.length > 0) data.append('type', usedFilters.type.join(','))
    $api.post(`${locale}/product/catalog/values/${limit}/1/`, data)
      .then((res)=>{
        setPage(1)
        setPages(Math.ceil(res.data.count_pages))
        setProducts(res.data.data)
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setFiltered(false)
        if(usedFilters.category.length > 0 || usedFilters.color.length > 0 || usedFilters.collection.length > 0 || usedFilters.type.length > 0) setFiltered(true)
      })
  }

  const clearFilters = () => {
    setUsedFilters({
      category: [],
      color: [],
      collection: [],
      type: [],
      min_price: null,
      max_price: null
    })
    const data = new FormData()
    data.append('order', sort.value)
    $api.post(`${locale}/product/catalog/values/${limit}/1/`, data)
      .then((res)=>{
        setPage(1)
        setPages(Math.ceil(res.data.count_pages))
        setProducts(res.data.data)
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setFiltered(false)
      })
  }

  const togglePageHandler = (el: number) =>{
    setPage(el)
    changePage(el)
  }

  const displayPages = () => {
    const arr = []
    if(pages > 5){
      arr[0] = 1
      for(let i=0;i<4;i++){
        if(page === 1){
          arr.push(page+i+1)
        }else{
          if(page+i >= pages){
            arr[3] = pages-1
            arr[2] = pages-2
            arr[1] = pages-3
            break
          }else{
            arr.push(page+i)
          }
        }
      }
      arr[4] = pages

    }else{
      for(let i=0;i<pages;i++){
        arr.push(i+1)
      }
    }
    return arr.map((el)=>{
      return <div
        onClick={()=>togglePageHandler(el)}
        className={s.catalog__container__products__pages__page + ' ' + (page === el ? s.catalog__container__products__pages__active : '')}>
        {el}
      </div>
    })
  }

  const [seen, setSeen] = useState<IProduct[]>([])

  useEffect(()=>{
    let data = Storage.get('seen')
    if(data && JSON.parse(data).length > 0){
      data = JSON.parse(data)
      $api.post<IProduct[]>(`/${locale}/product/favs/`, {
        ids: data.join(',')
      })
        .then((res)=>{
          data.map((el: string, index: number)=>{
            const item = res.data.filter((el)=> el.id === +data[index])
            seen[index] = item[0]
          })
          setSeen([...seen])
        })
    }
  },[locale])

  const [open, setOpen] = useState<boolean[]>(filters.map((el)=>false))

  const openHandler = (index: number) => {
    open[index] = !open[index]
    setOpen([...open])
  }

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
                <div>
                  {locale === 'ru' ? 'До' : 'To'}: <Dropdown name={'limit'} type={'limit'} handler={(e: MouseEvent, value: string)=>onToggleLimitClick(e, +value)} value={limit} options={limitArr} />
                </div>
                <div>
                  {locale === 'ru' ? 'Сортировать по' : 'Sort by'}: <Dropdown name={'sort'} type={'sort'} handler={(e: MouseEvent, value: {name: string, value: string})=>onToggleSortClick(e, value)} value={sort} options={sortArr} />
                </div>
              </div>
            </div>
            <div className={s.catalog__container}>
              <div className={s.catalog__container__filters}>
                {filters.length > 0 && filters.map((el, index)=>{
                  return <div className={s.catalog__container__filters__block}>
                    <div onClick={()=>openHandler(index)} className={s.catalog__container__filters__block__header}>
                      <h3>{el.name_lang}</h3>
                      <svg style={{transform: open[index] ? 'rotate(180deg)' : 'rotate(0deg)'}} width="12" height="6" viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1223 1.38952L6.3941 5.53084C6.33781 5.57999 6.27683 5.61473 6.21116 5.63505C6.14549 5.65569 6.07513 5.66602 6.00008 5.66602C5.92503 5.66602 5.85467 5.65569 5.789 5.63505C5.72333 5.61473 5.66235 5.57999 5.60606 5.53084L0.863757 1.38952C0.732418 1.27482 0.666748 1.13145 0.666748 0.959411C0.666748 0.787367 0.737108 0.639902 0.87783 0.517014C1.01855 0.394126 1.18273 0.332683 1.37035 0.332683C1.55798 0.332683 1.72216 0.394126 1.86288 0.517014L6.00008 4.12992L10.1373 0.517014C10.2686 0.402319 10.4304 0.344971 10.6225 0.344971C10.815 0.344971 10.9816 0.406415 11.1223 0.529303C11.2631 0.65219 11.3334 0.795559 11.3334 0.95941C11.3334 1.12326 11.2631 1.26663 11.1223 1.38952Z" fill="#A0A0A0"/>
                      </svg>
                    </div>
                    <div className={s.catalog__container__filters__block__container + ` ${open[index] ? s.catalog__container__filters__block__open : s.catalog__container__filters__block__closed}`}>
                      {el.option.map((elem, index)=>{
                        return <div className={s.catalog__container__filters__block__option}>
                          {/* @ts-ignore */}
                          <input checked={usedFilters[`${el.name}`].includes(elem.id)} onChange={(e)=>toggleFilter(e.target.value, el.name)} type="checkbox" value={elem.id} name={el.name+'i'+index} id={el.name+'i'+index}/>
                          {elem.color &&  <span style={{background: elem.color}} className={s.catalog__container__filters__block__color} /> }
                          <label htmlFor={el.name+'i'+index}>{elem.name}</label>
                        </div>
                      })}
                    </div>
                  </div>
                })}
                <Button className={s.catalog__container__filters__button__apply} onClick={()=>useFilters()} text={t('filters.button')} />
                {filtered && <Button style_type={'outer'} className={s.catalog__container__filters__button + ` ${s.catalog__container__filters__button__clear}`} onClick={()=>clearFilters()} text={t('filters.clear')} />}
              </div>
              <div className={s.catalog__container__products}>
                <div className={s.catalog__container__products__cards}>
                  {products.length > 0 ? products.map((el)=>{
                    return <div><Card product={el}  /></div>
                  }) : <div className={s.catalog__container__products__nothing}>{t('nothing_is_found')}</div>}
                </div>
                <div className={s.catalog__container__products__footer}>
                  <div>
                    {locale === 'ru' ? 'До' : 'To'}: <Dropdown name={'limit'} type={'limit'} handler={(e: MouseEvent, value: string)=>onToggleLimitClick(e, +value)} value={limit} options={limitArr} />
                  </div>
                  <div>
                    {locale === 'ru' ? 'Сортировать по' : 'Sort by'}: <Dropdown name={'sort'} type={'sort'} handler={(e: MouseEvent, value: {name: string, value: string})=>onToggleSortClick(e, value)} value={sort} options={sortArr} />
                  </div>
                </div>
                <div className={s.catalog__container__products__pages}>

                  {pages !== 0 && page !== 1 ? <svg onClick={()=>togglePageHandler(page - 1)} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.6666 15.5C28.9428 15.5 29.1666 15.7239 29.1666 16C29.1666 16.2761 28.9428 16.5 28.6666 16.5V15.5ZM0.979761 16.3536C0.7845 16.1583 0.7845 15.8417 0.979761 15.6464L4.16174 12.4645C4.357 12.2692 4.67359 12.2692 4.86885 12.4645C5.06411 12.6597 5.06411 12.9763 4.86885 13.1716L2.04042 16L4.86885 18.8284C5.06411 19.0237 5.06411 19.3403 4.86885 19.5355C4.67359 19.7308 4.357 19.7308 4.16174 19.5355L0.979761 16.3536ZM28.6666 16.5H1.33331V15.5H28.6666V16.5Z" fill="black"/>
                  </svg> : <p className={s.catalog__container__products__pages__pl}></p>}
                  {displayPages()}
                  {pages !== 0 && page !== pages ? <svg onClick={() => togglePageHandler(page + 1)} width="32" height="32" viewBox="0 0 32 32"
                                         fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.33334 15.5C1.0572 15.5 0.833344 15.7239 0.833344 16C0.833344 16.2761 1.0572 16.5 1.33334 16.5V15.5ZM29.0202 16.3536C29.2155 16.1583 29.2155 15.8417 29.0202 15.6464L25.8383 12.4645C25.643 12.2692 25.3264 12.2692 25.1311 12.4645C24.9359 12.6597 24.9359 12.9763 25.1311 13.1716L27.9596 16L25.1311 18.8284C24.9359 19.0237 24.9359 19.3403 25.1311 19.5355C25.3264 19.7308 25.643 19.7308 25.8383 19.5355L29.0202 16.3536ZM1.33334 16.5H28.6667V15.5H1.33334V16.5Z"
                      fill="black"/>
                  </svg> : <p className={s.catalog__container__products__pages__pl}></p>}
                </div>
              </div>
            </div>
            <div className={s.catalog__seen}>
              <h1>{t('seen')}</h1>
              {seen.length > 0
                ? <div className={s.catalog__seen__cards}>
                    <div className={s.catalog__seen__cards__card}>
                      {seen[0] ? <Card product={seen[0]} /> : <div></div>}
                    </div>
                    <div className={s.catalog__seen__cards__card}>
                      {seen[1] ? <Card product={seen[1]} /> : <div></div>}
                    </div>
                    <div className={s.catalog__seen__cards__card}>
                      {seen[2] ? <Card product={seen[2]} /> : <div></div>}
                    </div>
                    <div className={s.catalog__seen__cards__card}>
                      {seen[3] ? <Card product={seen[3]} /> : <div></div>}
                    </div>
                </div>
                : <p className={s.catalog__seen__not_found}>
                  {t('seen_nothing')}
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
      ...(await serverSideTranslations(locale as string ?? 'ru', ['catalog', 'common']))
    },
    revalidate: 10,
  }
}

export default Catalog