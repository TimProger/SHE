import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import TestPage from "../components/pages/TestPage";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['common']))
    },
    revalidate: 10
  }
}

export default function Test() {

  const { t } = useTranslation()

  return (
    <TestPage />
  )
}
