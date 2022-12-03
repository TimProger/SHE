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
      ...(await serverSideTranslations(locale as string, ['main', 'auth', 'header', 'footer']))
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
    header: {
      home: t('header:home'),
      catalogue: t('header:catalogue'),
      coop: t('header:coop'),
      about: t('header:about'),
      contacts: t('header:contacts'),
      search: t('header:search')
    },
    auth: {
      error_code_1: t('auth:error_code_1'),
      title: t('auth:title'),
      paragraph_1: t('auth:paragraph_1'),
      paragraph_2: t('auth:paragraph_2'),
      input_1: t('auth:input_1'),
      input_2: t('auth:input_2'),
      button: t('auth:button'),
      text: t('auth:text'),
      link: t('auth:link'),
      back: t('auth:back'),
      countries: {
        russia: t('auth:country_russia'),
        usa: t('auth:country_usa'),
        uar: t('auth:country_uar'),
        korea: t('auth:country_korea'),
        bel: t('auth:country_bel'),
        azerb: t('auth:country_azerb'),
        england: t('auth:country_england'),
        oae: t('auth:country_oae'),
        india: t('auth:country_india'),
        turkey: t('auth:country_turkey'),
      },
    },
    footer: {
      titles: {
        profile: t('footer:profile'),
        info: t('footer:info'),
        contacts: t('footer:contacts'),
        video: t('footer:video'),
      },
      links: {
        profile_link1: t('footer:profile_link1'),
        profile_link2: t('footer:profile_link2'),
        profile_link3: t('footer:profile_link3'),
        profile_link4: t('footer:profile_link4'),
        info_link1: t('footer:info_link1'),
        info_link2: t('footer:info_link2'),
        info_link3: t('footer:info_link3'),
        info_link4: t('footer:info_link4'),
        info_link5: t('footer:info_link5'),
        contacts_link1: t('footer:contacts_link1'),
        contacts_link2: t('footer:contacts_link2'),
        contacts_link3: t('footer:contacts_link3'),
        video_link1: t('footer:video_link1'),
        video_link2: t('footer:video_link2'),
        video_link3: t('footer:video_link3'),
        video_link4: t('footer:video_link4'),
      },
    },
  }

  return (<MainPage translates={translates} slides={slides} slidesNew={slidesNew} slidesHit={slidesHit} />)
}

export default Main