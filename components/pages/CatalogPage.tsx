import {useRouter} from "next/router";
import React, {ChangeEvent, useEffect, useState} from "react";
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
}

const CatalogPage: React.FC<ICatalogProps> = ({translates}) => {
  const { locale, query } = useRouter()
  const dispatch = useAppDispatch()

  const [types, setTypes] = useState<string[]>([])
  const [limit, setLimit] = useState<number>(20)
  const [page, setPage] = useState<number>(1)
  const [pages, setPages] = useState<number>(1)
  const [filters, setFilters] = useState<IFilter[]>([])
  const [products, setProducts] = useState<IProduct[]>([])
  const [usedFilters, setUsedFilters] = useState<IUsedFilters>({
    category: [],
    color: [],
    collection: [],
    type: []
  })

  useEffect(()=>{
    $api.get(`${locale}/product/catalog/get_filters`)
      .then((res)=>{
        setFilters(res.data)
      })
    $api.post(`${locale}/product/catalog/values/${limit}/${page}/`)
      .then((res)=>{
        setPages(Math.ceil(res.data.count_pages))
        setProducts(res.data.data)
      })
  },[locale])

  useEffect(()=>{
    $api.post(`${locale}/product/catalog/values/${limit}/${page}/`)
      .then((res)=>{
        setPages(Math.ceil(res.data.count_pages))
        setProducts(res.data.data)
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
  },[page])

  const toggleFilter = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    switch (type){
      case 'category':
        if(!usedFilters.category.includes(+e.target.value)){
          usedFilters.category.push(+e.target.value)
        }else{
          const index = usedFilters.category.indexOf(+e.target.value)
          usedFilters.category.splice(index, 1)
        }
        break;
      case 'color':
        if(!usedFilters.color.includes(+e.target.value)){
          usedFilters.color.push(+e.target.value)
        }else{
          const index = usedFilters.color.indexOf(+e.target.value)
          usedFilters.color.splice(index, 1)
        }
        break;
      case 'collection':
        if(!usedFilters.collection.includes(+e.target.value)){
          usedFilters.collection.push(+e.target.value)
        }else{
          const index = usedFilters.collection.indexOf(+e.target.value)
          usedFilters.collection.splice(index, 1)
        }
        break;
      case 'type':
        if(!usedFilters.type.includes(+e.target.value)){
          usedFilters.type.push(+e.target.value)
        }else{
          const index = usedFilters.type.indexOf(+e.target.value)
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
    $api.post(`${locale}/product/catalog/values/${limit}/${page}/`, data)
      .then((res)=>{
        setPages(Math.ceil(res.data.count_pages))
        setProducts(res.data.data)
      })
  },[usedFilters])

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
              </div>
            </div>
            <div className={s.catalog__container}>
              <div className={s.catalog__container__filters}>
                {filters.length > 0 && filters.map((el)=>{
                  return <div className={s.catalog__container__filters__block}>
                    <h3>{el.name_lang}</h3>
                    <div>
                      {el.option.map((elem, index)=>{
                        return <div>
                          <input onChange={(e)=>toggleFilter(e, el.name)} type="checkbox" value={elem.id} name={el.name} id={elem.name}/>
                          <label htmlFor={elem.name}>{elem.name}</label>
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