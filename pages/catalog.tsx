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
import CardMobile from "../components/CardMobile";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";

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
  const { locale, query, push } = useRouter()
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
        let page1: number = 1
        if(query.page){
          setPage(+`${query.page}`)
        }
        page1 = query.page ? +`${query.page}` : +`${page}`
        if(query.category){
          data.append('category', `${query.category}`)
          if(query.category.includes(',')){
            usedFilters.category = `${query.category}`.split(',').map((el)=>+el)
          }else{
            usedFilters.category = [+`${query.category}`]
          }
          setFiltered(true)
        }
        if(query.collection){
          data.append('collection', `${query.collection}`)
          if(query.collection.includes(',')){
            usedFilters.collection = `${query.collection}`.split(',').map((el)=>+el)
          }else{
            usedFilters.collection = [+`${query.collection}`]
          }
          setFiltered(true)
        }
        if(query.type){
          data.append('type', `${query.type}`)
          if(query.type.includes(',')){
            usedFilters.type = `${query.type}`.split(',').map((el)=>+el)
          }else{
            usedFilters.type = [+`${query.type}`]
          }
          setFiltered(true)
        }
        if(query.color){
          data.append('color', `${query.color}`)
          if(query.color.includes(',')){
            usedFilters.color = `${query.color}`.split(',').map((el)=>+el)
          }else{
            usedFilters.color = [+`${query.color}`]
          }
          setFiltered(true)
        }
        $api.post(`${locale}/product/catalog/values/${limit}/${page1}/`, data)
          .then((res)=>{
            setPages(Math.floor(res.data.count_pages))
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
        setPages(Math.floor(res.data.count_pages))
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
        setPages(Math.floor(res.data.count_pages))
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
        setPages(Math.floor(res.data.count_pages))
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
    setPage(1)
    push(`/catalog?page=${1}${usedFilters.category.length > 0 ? `&category=${usedFilters.category}` : ''}${usedFilters.color.length > 0 ? `&color=${usedFilters.color}` : ''}${usedFilters.collection.length > 0 ? `&collection=${usedFilters.collection}` : ''}${usedFilters.type.length > 0 ? `&type=${usedFilters.type}` : ''}`)
    $api.post(`${locale}/product/catalog/values/${limit}/1/`, data)
      .then((res)=>{
        setPage(1)
        setPages(Math.floor(res.data.count_pages))
        setProducts(res.data.data)
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setFiltered(false)
        if(usedFilters.category.length > 0 || usedFilters.color.length > 0 || usedFilters.collection.length > 0 || usedFilters.type.length > 0) setFiltered(true)
        setShowFilters(false)
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
    push(`/catalog`)


    data.append('order', sort.value)
    $api.post(`${locale}/product/catalog/values/${limit}/1/`, data)
      .then((res)=>{
        setPage(1)
        setPages(Math.floor(res.data.count_pages))
        setProducts(res.data.data)
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setFiltered(false)
      })
  }

  const togglePageHandler = (el: number) =>{
    setPage(el)
    push(`/catalog?page=${el}${usedFilters.category.length > 0 ? `&category=${usedFilters.category}` : ''}${usedFilters.color.length > 0 ? `&color=${usedFilters.color}` : ''}${usedFilters.collection.length > 0 ? `&collection=${usedFilters.collection}` : ''}${usedFilters.type.length > 0 ? `&type=${usedFilters.type}` : ''}`)
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
    for (let i=0;i<filters.length;i++){
      if(i===index){
        open[i] = !open[i]
      }else{
        open[i] = false
      }
    }
    setOpen([...open])
  }
  const [width, setWidth] = useState<string>('desktop')

  const resize = (e: any) => {
    if(window){
      if(window.innerWidth > 1050){
        setWidth('desktop')
      }else if(window.innerWidth <= 1050 && window.innerWidth > 700) {
        setWidth('tablet')
      }else if(window.innerWidth <= 700) {
        setWidth('mobile')
      }else{
        setWidth('desktop')
      }
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', resize)
    if(window){
      if(window.innerWidth > 1050){
        setWidth('desktop')
      }else if(window.innerWidth <= 1050 && window.innerWidth > 700) {
        setWidth('tablet')
      }else if(window.innerWidth <= 700) {
        setWidth('mobile')
      }else{
        setWidth('desktop')
      }
    }

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  const displaySlides = (slidesArr: IProduct[]) => {
    return JSON.parse(JSON.stringify(slidesArr)).map((el: IProduct, index: number)=>{
      return (
        <SwiperSlide key={index} className={s.new}>
          <Card product={el}  />
        </SwiperSlide>
      )
    })
  }

  const [showFilters, setShowFilters] = useState<boolean>(false)

  return (
    <Layout>
      <Head>
        <title>{`${t('title')} | ™SHE`.replace('<!-\- -->','')}</title>
      </Head>
      <div>
        <Container>
          <div className={s.catalog}>
            <div className={s.catalog__header}>
              <div className={s.catalog__header__top}>
                <h1>
                  {(types.length > 0 && types.join(', ') || types[0]) || t('title')}
                </h1>
                {(width === 'mobile' || width === 'tablet') && <p onClick={()=>setShowFilters(true)}>{locale==='ru' ? 'Фильтры' : 'Filters'}
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 2.6C1 2.03995 1 1.75992 1.10899 1.54601C1.20487 1.35785 1.35785 1.20487 1.54601 1.10899C1.75992 1 2.03995 1 2.6 1H17.4C17.9601 1 18.2401 1 18.454 1.10899C18.6422 1.20487 18.7951 1.35785 18.891 1.54601C19 1.75992 19 2.03995 19 2.6V4.33726C19 4.58185 19 4.70414 18.9724 4.81923C18.9479 4.92127 18.9075 5.01881 18.8526 5.10828C18.7908 5.2092 18.7043 5.29568 18.5314 5.46863L12.4686 11.5314C12.2957 11.7043 12.2092 11.7908 12.1474 11.8917C12.0925 11.9812 12.0521 12.0787 12.0276 12.1808C12 12.2959 12 12.4182 12 12.6627V15L8 19V12.6627C8 12.4182 8 12.2959 7.97237 12.1808C7.94787 12.0787 7.90747 11.9812 7.85264 11.8917C7.7908 11.7908 7.70432 11.7043 7.53137 11.5314L1.46863 5.46863C1.29568 5.29568 1.2092 5.2092 1.14736 5.10828C1.09253 5.01881 1.05213 4.92127 1.02763 4.81923C1 4.70414 1 4.58185 1 4.33726V2.6Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </p>}
                {(width === 'mobile' || width === 'tablet') && <div className={s.catalog__header__top__filters + ` ${showFilters && s.catalog__header__top__filters__active}`}>
                  <svg className={s.catalog__header__top__close} onClick={() => setShowFilters(false)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.14648 20.2635L20.4099 4" stroke="black"/>
                    <path d="M4 4.14648L20.2635 20.4099" stroke="black"/>
                  </svg>
                  <div className={s.catalog__container__filters + ` ${s.catalog__container__filters__mobile}`}>
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
                </div>}
              </div>
              <div className={s.catalog__header__bottom}>
                <div className={s.catalog__sort}>
                  {(width === 'mobile') && <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3334 8.33268V12.3327M8.33335 10.3327H12.3334M9.93335 5.66602H10.7334C11.2934 5.66602 11.5734 5.66602 11.7873 5.55702C11.9755 5.46115 12.1285 5.30817 12.2244 5.12001C12.3334 4.90609 12.3334 4.62607 12.3334 4.06602V3.26602C12.3334 2.70596 12.3334 2.42594 12.2244 2.21203C12.1285 2.02386 11.9755 1.87088 11.7873 1.77501C11.5734 1.66602 11.2934 1.66602 10.7334 1.66602H9.93335C9.3733 1.66602 9.09327 1.66602 8.87936 1.77501C8.6912 1.87088 8.53822 2.02386 8.44235 2.21203C8.33335 2.42594 8.33335 2.70596 8.33335 3.26602V4.06602C8.33335 4.62607 8.33335 4.90609 8.44235 5.12001C8.53822 5.30817 8.6912 5.46115 8.87936 5.55702C9.09327 5.66602 9.3733 5.66602 9.93335 5.66602ZM3.26669 5.66602H4.06669C4.62674 5.66602 4.90677 5.66602 5.12068 5.55702C5.30884 5.46115 5.46182 5.30817 5.55769 5.12001C5.66669 4.90609 5.66669 4.62607 5.66669 4.06602V3.26602C5.66669 2.70596 5.66669 2.42594 5.55769 2.21203C5.46182 2.02386 5.30884 1.87088 5.12068 1.77501C4.90677 1.66602 4.62674 1.66602 4.06669 1.66602H3.26669C2.70663 1.66602 2.42661 1.66602 2.2127 1.77501C2.02453 1.87088 1.87155 2.02386 1.77568 2.21203C1.66669 2.42594 1.66669 2.70596 1.66669 3.26602V4.06602C1.66669 4.62607 1.66669 4.90609 1.77568 5.12001C1.87155 5.30817 2.02453 5.46115 2.2127 5.55702C2.42661 5.66602 2.70663 5.66602 3.26669 5.66602ZM3.26669 12.3327H4.06669C4.62674 12.3327 4.90677 12.3327 5.12068 12.2237C5.30884 12.1278 5.46182 11.9748 5.55769 11.7867C5.66669 11.5728 5.66669 11.2927 5.66669 10.7327V9.93268C5.66669 9.37263 5.66669 9.0926 5.55769 8.87869C5.46182 8.69053 5.30884 8.53755 5.12068 8.44168C4.90677 8.33268 4.62674 8.33268 4.06669 8.33268H3.26669C2.70663 8.33268 2.42661 8.33268 2.2127 8.44168C2.02453 8.53755 1.87155 8.69053 1.77568 8.87869C1.66669 9.0926 1.66669 9.37263 1.66669 9.93268V10.7327C1.66669 11.2927 1.66669 11.5728 1.77568 11.7867C1.87155 11.9748 2.02453 12.1278 2.2127 12.2237C2.42661 12.3327 2.70663 12.3327 3.26669 12.3327Z" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>}
                  <p style={{marginLeft: 10}}>{locale === 'ru' ? 'До' : 'To'}:</p> <Dropdown name={'limit'} type={'limit'} handler={(e: MouseEvent, value: string)=>onToggleLimitClick(e, +value)} value={limit} options={limitArr} />
                </div>
                <div className={s.catalog__sort}>
                  {(width !== 'mobile') ? (locale === 'ru' ? 'Сортировать по:' : 'Sort by:') :
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.66669 3L3.66669 1M3.66669 1L1.66669 3M3.66669 1V10.3333M8.33335 11L10.3334 13M10.3334 13L12.3334 11M10.3334 13V3.66667" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  } <p style={{marginLeft: 10}}>{locale === 'ru' ? 'По:' : 'By:'}</p> <Dropdown name={'sort'} type={'sort'} handler={(e: MouseEvent, value: {name: string, value: string})=>onToggleSortClick(e, value)} value={sort} options={sortArr} />
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
                    return <div className={s.catalog__container__products__cards__div}>{width === 'mobile' ? <CardMobile product={el}/> : <Card product={el} />}</div>
                  }) : <div className={s.catalog__container__products__nothing}>{t('nothing_is_found')}</div>}
                </div>
                <div className={s.catalog__container__products__footer}>
                  <div className={s.catalog__sort}>
                    {width === 'mobile' && <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.3334 8.33268V12.3327M8.33335 10.3327H12.3334M9.93335 5.66602H10.7334C11.2934 5.66602 11.5734 5.66602 11.7873 5.55702C11.9755 5.46115 12.1285 5.30817 12.2244 5.12001C12.3334 4.90609 12.3334 4.62607 12.3334 4.06602V3.26602C12.3334 2.70596 12.3334 2.42594 12.2244 2.21203C12.1285 2.02386 11.9755 1.87088 11.7873 1.77501C11.5734 1.66602 11.2934 1.66602 10.7334 1.66602H9.93335C9.3733 1.66602 9.09327 1.66602 8.87936 1.77501C8.6912 1.87088 8.53822 2.02386 8.44235 2.21203C8.33335 2.42594 8.33335 2.70596 8.33335 3.26602V4.06602C8.33335 4.62607 8.33335 4.90609 8.44235 5.12001C8.53822 5.30817 8.6912 5.46115 8.87936 5.55702C9.09327 5.66602 9.3733 5.66602 9.93335 5.66602ZM3.26669 5.66602H4.06669C4.62674 5.66602 4.90677 5.66602 5.12068 5.55702C5.30884 5.46115 5.46182 5.30817 5.55769 5.12001C5.66669 4.90609 5.66669 4.62607 5.66669 4.06602V3.26602C5.66669 2.70596 5.66669 2.42594 5.55769 2.21203C5.46182 2.02386 5.30884 1.87088 5.12068 1.77501C4.90677 1.66602 4.62674 1.66602 4.06669 1.66602H3.26669C2.70663 1.66602 2.42661 1.66602 2.2127 1.77501C2.02453 1.87088 1.87155 2.02386 1.77568 2.21203C1.66669 2.42594 1.66669 2.70596 1.66669 3.26602V4.06602C1.66669 4.62607 1.66669 4.90609 1.77568 5.12001C1.87155 5.30817 2.02453 5.46115 2.2127 5.55702C2.42661 5.66602 2.70663 5.66602 3.26669 5.66602ZM3.26669 12.3327H4.06669C4.62674 12.3327 4.90677 12.3327 5.12068 12.2237C5.30884 12.1278 5.46182 11.9748 5.55769 11.7867C5.66669 11.5728 5.66669 11.2927 5.66669 10.7327V9.93268C5.66669 9.37263 5.66669 9.0926 5.55769 8.87869C5.46182 8.69053 5.30884 8.53755 5.12068 8.44168C4.90677 8.33268 4.62674 8.33268 4.06669 8.33268H3.26669C2.70663 8.33268 2.42661 8.33268 2.2127 8.44168C2.02453 8.53755 1.87155 8.69053 1.77568 8.87869C1.66669 9.0926 1.66669 9.37263 1.66669 9.93268V10.7327C1.66669 11.2927 1.66669 11.5728 1.77568 11.7867C1.87155 11.9748 2.02453 12.1278 2.2127 12.2237C2.42661 12.3327 2.70663 12.3327 3.26669 12.3327Z" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>}
                    <p style={{marginLeft: 10}}>{locale === 'ru' ? 'До' : 'To'}:</p> <Dropdown name={'limit'} type={'limit'} handler={(e: MouseEvent, value: string)=>onToggleLimitClick(e, +value)} value={limit} options={limitArr} />
                  </div>
                  <div className={s.catalog__sort}>
                    {width !== 'mobile' ? (locale === 'ru' ? 'Сортировать по:' : 'Sort by:') :
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.66669 3L3.66669 1M3.66669 1L1.66669 3M3.66669 1V10.3333M8.33335 11L10.3334 13M10.3334 13L12.3334 11M10.3334 13V3.66667" stroke="#A0A0A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      </svg>
                    } <p style={{marginLeft: 10}}>{locale === 'ru' ? 'По:' : 'By:'}</p> <Dropdown name={'sort'} type={'sort'} handler={(e: MouseEvent, value: {name: string, value: string})=>onToggleSortClick(e, value)} value={sort} options={sortArr} />
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
            {width !== 'mobile' && <div className={s.catalog__seen}>
              <h1>{t('seen')}</h1>
              {seen.length > 0
                ? (width !== 'mobile' ? (<div className={s.catalog__seen__cards}>
                    {width === 'desktop' && <div className={s.catalog__seen__cards__card}>
                      {seen[0] ? <Card product={seen[0]}/> : <div></div>}
                    </div>}
                    <div className={s.catalog__seen__cards__card}>
                      {seen[1] ? <Card product={seen[1]}/> : <div></div>}
                    </div>
                    <div className={s.catalog__seen__cards__card}>
                      {seen[2] ? <Card product={seen[2]}/> : <div></div>}
                    </div>
                    <div className={s.catalog__seen__cards__card}>
                      {seen[3] ? <Card product={seen[3]}/> : <div></div>}
                    </div>
                  </div>)
                  :
                  (<Swiper
                    className={s.new}
                    modules={[Navigation, Pagination]}
                    pagination={{
                      clickable: true,
                      bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
                    }}
                    slidesPerView={1}
                  >
                    {displaySlides(seen)}
                  </Swiper>))
                : <p className={s.catalog__seen__not_found}>
                  {t('seen_nothing')}
                </p>}
            </div>}
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