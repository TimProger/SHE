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
      ...(await serverSideTranslations(locale as string, ['product', 'header', 'footer']))
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