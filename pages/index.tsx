import Layout from "../layout/layout";
import styles from '../styles/main/main.module.scss'
import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['main']))
    }
  }
}

export default function Main() {
  const { t } = useTranslation()

  return (
    <Layout title={'Главная'}>
      <div>{t('main:welcome')}</div>
    </Layout>
  )
}
