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
    <AboutPage translates={translates} about={translates.about}/>
  );
};

export default About;