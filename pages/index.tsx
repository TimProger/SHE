import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import MainPage from "../components/pages/MainPage";
import {IProduct, ISlide} from "../types/Product.types";
import {API_BASE_URL} from "../http/api";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const slides = await fetch(`${API_BASE_URL}/${locale}/product/slider`)
  const products = await fetch(`${API_BASE_URL}/${locale}/product`)
  const productsData: IProduct[] = await products.json()
  const slidesData: ISlide[] = await slides.json()

  return {
    props: {
      slides: slidesData,
      slidesNew: productsData.filter(el => el.is_new),
      slidesHit: productsData.filter(el => el.is_hit),
      ...(await serverSideTranslations(locale as string, ['main', 'auth', 'common', 'footer']))
    },
    revalidate: 10,
  }
}

interface IMainProps {
  slides: ISlide[],
  slidesNew: IProduct[],
  slidesHit: IProduct[]
}

const Main: React.FC<IMainProps> = ({slides, slidesNew, slidesHit}) => {
  const { locale } = useRouter()
  const { t } = useTranslation()

  const translates = {
    title: t('main:title'),
    news: t('main:news'),
    hits: t('main:hits'),
    sale: t('main:sale'),
    more: t('main:more'),
  }

  return (<MainPage translates={translates} slides={slides} slidesNew={slidesNew} slidesHit={slidesHit} />)
}

export default Main