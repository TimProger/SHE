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
      ...(await serverSideTranslations(locale as string, ['product', 'common', 'footer']))
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
  }

  return (
    <ProductPage product={product} translates={translates} />
  )
}

export default Product