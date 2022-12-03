import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React from "react";
import ProductPage from "../../components/pages/ProductPage";
import {IProduct} from "../../types/Product.types";
import {API_BASE_URL} from "../../http/api";

export async function getStaticPaths({locales, locale}: any) {
  const res = await fetch(`${API_BASE_URL}/all_product`)
  const data = await res.json()
  const paths: any[] = []
  data.map((el: { id: string; }) => {
    for (const locale of locales) {
      paths.push({
        params: {
          id: el.id.toString(),
        },
        locale,
      });
    }
  })
  return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps = async ({locale, params}) => {
  const res = await fetch(`${API_BASE_URL}/${locale}/product/${params?.id}`)
  const product = await res.json()
  return {
    props:{
      product: product,
      ...(await serverSideTranslations(locale as string, ['product', 'auth', 'header', 'footer']))
    },
    revalidate: 10
  }
}

interface IProductProps {
  product: IProduct
}

const Product: React.FC<IProductProps> = ({product}) => {
  const { locale } = useRouter()
  const { t } = useTranslation()

  const translates = {
    article: t('product:article'),
    color: t('product:color'),
    producer: t('product:producer'),
    collection: t('product:collection'),
    country: t('product:country'),
    ml: t('product:ml'),
    addToBasket: t('product:addToBasket'),
    inBasket: t('product:inBasket'),
    info: t('product:info'),
    video: t('product:video'),
    header: {
      home: t('header:home'),
      catalogue: t('header:catalogue'),
      coop: t('header:coop'),
      about: t('header:about'),
      contacts: t('header:contacts'),
      search: t('header:search')
    },
    auth: {error_code_1: t('auth:error_code_1'),
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

  return (
    <ProductPage product={product} translates={translates} />
  )
}

export default Product