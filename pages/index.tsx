import Layout from "../layout/layout";
import styles from '../styles/main/main.module.scss'
import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation, WithTranslation} from "next-i18next";
import {withTranslation} from "next-i18next";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['main']))
    }
  }
}

function Main({t}: WithTranslation ) {
  return (
    <Layout title={t('main:title')}>
      <div>{t('main:welcome')}</div>
    </Layout>
  )
}

export default withTranslation('main')(Main)