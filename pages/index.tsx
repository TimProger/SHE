import Layout from "../layout/layout";
import styles from '../styles/main/main.module.scss'
import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['main', 'header']))
    }
  }
}

function Main() {
  const { locale } = useRouter()

  const { t } = useTranslation()

  const btns = [
    t('header:home'),
    t('header:catalogue'),
    t('header:coop'),
    t('header:about'),
    t('header:contacts'),
  ]

  return (
      <Layout btns={btns}>
        <div>
          <h1>Locale: {locale}</h1>
          <div>{t('main:welcome')}</div>
        </div>
      </Layout>
  )
}

export default Main