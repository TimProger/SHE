import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React from "react";
import {API_BASE_URL} from "../http/api";
import Layout from "../components/Layout";
import Head from "next/head";
import Container from "../components/Container";
import s from "../styles/pages/policy.module.scss";

interface IPolicyProps {
  data: {
    id: number;
    title: string;
    text: string;
  }[],
}

const Policy: React.FC<IPolicyProps> = ({data}) => {
  const { locale } = useRouter()
  const { t } = useTranslation('policy')

  function urlify(text: any) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url: any) {
      return '<a href="' + url + '">' + url + '</a>';
    })
  }

  return (
    <Layout>
      <Head>
        <title>{t('title')} | ™SHE</title>
      </Head>
      <div>
        <Container>
          <div className={s.policy}>
            <h1>{t('title')}</h1>
            <ul>
              {data.map((el, index)=>{
                let html = urlify(el.text);
                return <div>
                  <li><h2>{el.title}</h2></li>
                  <p dangerouslySetInnerHTML={{ __html: html }} />
                </div>
              })}
            </ul>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const data = await fetch(`${API_BASE_URL}/profile/${locale}/agreement/`)
  const policyData = await data.json()
  return {
    props: {
      data: policyData,
      ...(await serverSideTranslations(locale as string ?? 'ru', ['policy', 'common']))
    },
    revalidate: 10,
  }
}

export default Policy