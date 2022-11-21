import Layout from "../../layout/layout";
import styles from '../../styles/main/main.module.scss'
import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Container from "../../components/Container";
import {IProduct} from "../../types/Product.types";
import axios from "axios";
import ProductPage from "../../components/pages/ProductPage";

export async function getStaticPaths({locales}: any) {
  const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
  const paths: any[] = []
  res.data.map((el: { id: string; }) => {
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
  const todo = await axios.get('https://jsonplaceholder.typicode.com/todos/'+params?.id)
  return {
    props:{
      todo: todo.data,
      ...(await serverSideTranslations(locale as string, ['main', 'header', 'footer']))
    }
  }
}

function Product({todo}: any) {
  const { locale } = useRouter()
  const { t } = useTranslation()

  const translates = {
    header: [
      t('header:home'),
      t('header:catalogue'),
      t('header:coop'),
      t('header:about'),
      t('header:contacts'),
      t('header:search')
    ],
    footer: {
      titles: [
        t('footer:profile'),
        t('footer:info'),
        t('footer:contacts'),
        t('footer:video'),
      ],
      links: [
        t('footer:profile_link1'),
        t('footer:profile_link2'),
        t('footer:profile_link3'),
        t('footer:profile_link4'),
        t('footer:info_link1'),
        t('footer:info_link2'),
        t('footer:info_link3'),
        t('footer:info_link4'),
        t('footer:info_link5'),
        t('footer:contacts_link1'),
        t('footer:contacts_link2'),
        t('footer:contacts_link3'),
        t('footer:video_link1'),
        t('footer:video_link2'),
        t('footer:video_link3'),
        t('footer:video_link4'),
      ],
    },

  }

  return (
    <ProductPage todo={todo} translates={translates} />
  )
}

export default Product