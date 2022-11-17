import Layout from "../layout/layout";
import styles from '../styles/main/main.module.scss'
import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation, WithTranslation} from "next-i18next";
import {withTranslation} from "next-i18next";
import {useRouter} from "next/router";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['main']))
    }
  }
}

function Main() {
  const { locale, locales, push } = useRouter()
  const { t } = useTranslation('main')
  return (
    <Layout title={t('title')}>
      <h1>Locale: {locale}</h1>

      <div>{t('welcome')}</div>
    </Layout>
  )
}

export default Main