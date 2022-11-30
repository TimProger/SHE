import React, {useEffect} from "react";
import Layout from "../layout/layout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation, withTranslation} from "next-i18next";
import { GetStaticProps } from 'next'
import ProfilePage from "../components/pages/ProfilePage";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['profile', 'auth', 'header', 'footer'])),
    },
    revalidate: 10
  }
}

const Profile: React.FC = () => {

  const {t, i18n} = useTranslation();

  const translates = {
    title: t('profile:title'),
    exit: t('profile:exit'),
    status: t('profile:status'),
    pages: {
      info: {
        why_title: t('profile:why_title'),
        why_parag: t('profile:why_parag'),
        save: t('profile:save'),
        save__success: t('profile:save__success'),
        inputs: {
          first: t('profile:input_first'),
          first_pl: t('profile:input_first__pl'),
          last: t('profile:input_last'),
          last_pl: t('profile:input_last__pl'),
          phone: t('profile:input_phone'),
        },
      },
      orders: {
        notfound: t('profile:notfound'),
        toCatalogue: t('profile:toCatalogue'),
      },
      settings: {
        delete: t('profile:delete'),
        aboutDelete: t('profile:aboutDelete'),
      }
    },
    auth: {
      error_code_1: t('auth:error_code_1'),
      title: t('auth:title'),
      paragraph_1: t('auth:paragraph_1'),
      paragraph_2: t('auth:paragraph_2'),
      input_1: t('auth:input_1'),
      input_2: t('auth:input_2'),
      button: t('auth:button'),
      text: t('auth:text'),
      link: t('auth:link'),
      countries: {
        russia: t('auth:country_russia'),
        usa: t('auth:country_usa'),
        uar: t('auth:country_uar'),
        korea: t('auth:country_korea'),
        bel: t('auth:country_bel'),
        azerb: t('auth:country_azerb'),
        england: t('auth:country_england'),
        oae: t('auth:country_oae'),
        india: t('auth:country_india'),
        turkey: t('auth:country_turkey'),
      },
    },
    btns: {
      info: t('profile:btns__info'),
      orders: t('profile:btns__orders'),
      settings: t('profile:btns__settings'),
    },
    header: {
      home: t('header:home'),
      catalogue: t('header:catalogue'),
      coop: t('header:coop'),
      about: t('header:about'),
      contacts: t('header:contacts'),
      search: t('header:search')
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

  return (
    <ProfilePage translates={translates} />
  )
}

export default Profile