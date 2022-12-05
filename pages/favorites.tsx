import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import FavPage from "../components/pages/FavPage";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string ?? 'ru', ['fav', 'auth', 'common', 'footer']))
    },
    revalidate: 10
  }
}

const Favorites: React.FC = () => {

  const { locale } = useRouter()
  const { t } = useTranslation()


  const translates = {
    title: t('fav:title'),
    clear: t('fav:clear'),
    empty: t('fav:empty'),
    toCatalogue: t('fav:toCatalogue'),
  }

  useEffect(()=>{

  }, [])

  return (
    <FavPage translates={translates} />
  );
};

export default Favorites;