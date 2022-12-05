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
    <DocumentsPage translates={translates} documents={translates.documents}/>
  );
};

export default Documents;