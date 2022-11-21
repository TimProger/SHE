import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {$api} from "../http/api";

export const getStaticProps: GetStaticProps = async ({locale}) => {

  let res2 = await $api.get('todos/')

  return {
    props:{
      data: res2.data,
      ...(await serverSideTranslations(locale as string, ['main', 'header', 'footer']))
    }
  }
}

function ProductPage({data}: any) {
  const { locale } = useRouter()

  useEffect(()=>{
  }, [])
  return (
    <div>
      {data && data.map((el:any, index:any)=>{
        return <div>{el.title}</div>
      })}
    </div>
  )
}

export default ProductPage