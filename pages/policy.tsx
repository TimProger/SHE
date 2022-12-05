import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React from "react";
import {API_BASE_URL} from "../http/api";
import PolicyPage from "../components/pages/PolicyPage";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const data = await fetch(`${API_BASE_URL}/profile/${locale}/agreement/`)
  const policyData = await data.json()
  return {
    props: {
      data: policyData,
      ...(await serverSideTranslations(locale as string, ['policy', 'auth', 'common', 'footer']))
    },
    revalidate: 10,
  }
}

interface IPolicyData {
  id: number;
  title: string;
  text: string;
}

interface IPolicyProps {
  data: IPolicyData[],
}

const Policy: React.FC<IPolicyProps> = ({data}) => {
  const { locale } = useRouter()
  const { t } = useTranslation()

  const translates = {
    title: t('policy:title'),
  }

  return (<PolicyPage translates={translates} data={data} />)
}

export default Policy