import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import CoopPage from "../components/pages/CoopPage";
import AboutPage from '../components/pages/AboutPage';

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['common', 'footer', 'about']))
    },
    revalidate: 10
  }
}

const About: React.FC = () => {

  const { locale } = useRouter()
  const { t } = useTranslation()

  const translates = {
    toCatalogue: t('fav:toCatalogue'),
    about: {
      title: t('about:title'),
      title2: t('about:title2'),
      title3: t('about:title3'),
      title4: t('about:title4'),
      about: t('about:about'),
      paragraph_1: t('about:paragraph_1'),
      paragraph_2: t('about:paragraph_2'),
      paragraph_3: t('about:paragraph_3'),
      paragraph_4: t('about:paragraph_4'),
      connect: t('about:connect'),
    },
  }

  useEffect(()=>{

  }, [])

  return (
    <AboutPage translates={translates} about={translates.about}/>
  );
};

export default About;