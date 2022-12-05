import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React from "react";
import CatalogPage from "../components/pages/CatalogPage";

export const getStaticProps: GetStaticProps = async ({locale}) => {

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['catalog', 'auth', 'common', 'footer']))
    },
    revalidate: 10,
  }
}

interface ICatalogueProps {
}

const Catalog: React.FC<ICatalogueProps> = () => {
  const { locale } = useRouter()
  const { t } = useTranslation()

  const translates = {
    title: t('catalog:title'),
  }

  return (<CatalogPage translates={translates} />)
}

export default Catalog