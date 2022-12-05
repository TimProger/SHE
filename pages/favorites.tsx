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
    footer: {
      titles: {
        profile: t('footer:profile'),
        info: t('footer:info'),
        contacts: t('footer:contacts'),
        video: t('footer:video'),
      },
      links: {
        profile_link1: t('footer:profile_link1'),
        profile_link2: t('footer:profile_link2'),
        profile_link3: t('footer:profile_link3'),
        profile_link4: t('footer:profile_link4'),
        info_link1: t('footer:info_link1'),
        info_link2: t('footer:info_link2'),
        info_link3: t('footer:info_link3'),
        info_link4: t('footer:info_link4'),
        info_link5: t('footer:info_link5'),
        contacts_link1: t('footer:contacts_link1'),
        contacts_link2: t('footer:contacts_link2'),
        contacts_link3: t('footer:contacts_link3'),
        video_link1: t('footer:video_link1'),
        video_link2: t('footer:video_link2'),
        video_link3: t('footer:video_link3'),
        video_link4: t('footer:video_link4'),
      },
    },
  }

  useEffect(()=>{

  }, [])

  return (
    <FavPage translates={translates} />
  );
};

export default Favorites;