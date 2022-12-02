import {useRouter} from "next/router";
import React, {MouseEvent, useEffect, useState} from "react";
import Layout from "../../layout/layout";
import s from "../../styles/pages/catalog.module.scss";
import Container from "../Container";
import Card from "../Card";
import Head from "next/head";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import Dropdown from "../Dropdown";
import {$api} from "../../http/api";
import {IFilter, IProduct} from "../../types/Product.types";

interface ICatalogProps {
  translates: any;
}

interface IUsedFilters {
  category: number[];
  color: number[];
  collection: number[];
  type: number[];
  min_price: number | null;
  max_price: number | null;
}

const CatalogPage: React.FC<ICatalogProps> = ({translates}) => {
  const { locale, query } = useRouter()
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
  const [limitState, setLimitState] = useState(false);
  const [limitArr, setLimitArr] = useState<number[]>([20, 40, 60]);
  const [limitPage, setLimitPage] = useState(0)

  useEffect(()=>{
    $api.get(`${locale}/product/catalog/get_filters`)
      .then((res)=>{
        setFilters(res.data)
      })
    const data = new FormData()
    if(query.category){
      // @ts-ignore
      data.append('category', query.category)
    }
    if(query.collection){
      // @ts-ignore
      data.append('collection', query.collection)
    }
    $api.post(`${locale}/product/catalog/values/${limit}/${page}/`, data)
      .then((res)=>{
        setPages(Math.ceil(res.data.count_pages))
        setProducts(res.data.data)
      })
  },[locale, limit])

  useEffect(()=>{
    const data = new FormData()
    if(usedFilters.category.length > 0) data.append('category', usedFilters.category.join(','))
    if(usedFilters.color.length > 0) data.append('color', usedFilters.color.join(','))
    if(usedFilters.collection.length > 0) data.append('collection', usedFilters.collection.join(','))
    if(usedFilters.type.length > 0) data.append('type', usedFilters.type.join(','))

    $api.post(`${locale}/product/catalog/values/${limit}/${page}/`, data)
      .then((res)=>{
        setPages(Math.ceil(res.data.count_pages))
        setProducts(res.data.data)
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
  },[page])

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

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles} auth={translates.auth}>
      <Head>
        <title>{translates.title} | ™SHE</title>
      </Head>
      <div>
        <Container>
          <div className={s.catalog}>
            <div className={s.catalog__header}>
              <div className={s.catalog__header__top}>
                <h1>
                  {(types.length > 0 && types.join(', ') || types[0]) || translates.title || 'Catalog'}
                </h1>
              </div>
              <div className={s.catalog__header__bottom}>
                {/*<Dropdown value={} options={} handler={} />*/}
                <div>
                  {/* @ts-ignore */}
                  До: <Dropdown type={'limit'} handler={(e: MouseEvent, value: number)=>onToggleLimitClick(e, value)} value={limit} options={limitArr} />
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
                <div className={s.catalog__container__products__pages}>
                  {displayPages()}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default CatalogPage