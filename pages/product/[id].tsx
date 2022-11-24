import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React from "react";
import ProductPage from "../../components/pages/ProductPage";
import {IProduct} from "../../types/Product.types";

export async function getStaticPaths({locales, locale}: any) {
  const res = await fetch(`https://api.tm-she.com/all_product`)
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
  const res = await fetch(`https://api.tm-she.com/${locale}/product/${params?.id}`)
  const todo = await res.json()
  return {
    props:{
      todo: todo,
      ...(await serverSideTranslations(locale as string, ['main', 'header', 'footer']))
    },
    revalidate: 10
  }
}

interface IProductProps {
  todo: IProduct
}

const Product: React.FC<IProductProps> = ({todo}) => {
  const { locale } = useRouter()
  const { t } = useTranslation()

  const translates = {
    title: t('main:title'),
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
    <ProductPage todo={todo} translates={translates} />
  )
}

export default Product