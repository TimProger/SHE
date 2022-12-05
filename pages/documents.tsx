import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import DocumentsPage from '../components/pages/DocumentsPage';

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['coop', 'auth', 'common', 'footer', 'partnership','documents']))
    },
    revalidate: 10
  }
}

const Documents: React.FC = () => {

  const { locale } = useRouter()
  const { t } = useTranslation()

  const translates = {
    title: t('fav:title'),
    clear: t('fav:clear'),
    empty: t('fav:empty'),
    toCatalogue: t('fav:toCatalogue'),
    documents: {
      title1: t('documents:title1'),
      title2: t('documents:title2'),
      title3: t('documents:title3'),
      title4: t('documents:title4'),
      title5: t('documents:title5'),
      title6: t('documents:title6'),
      button: t('documents:button'),
    },
  }

  useEffect(()=>{

  }, [])

  return (
    <DocumentsPage translates={translates} documents={translates.documents}/>
  );
};

export default Documents;