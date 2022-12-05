import React, {useEffect} from "react";
import Layout from "../layout/layout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation, withTranslation} from "next-i18next";
import { GetStaticProps } from 'next'
import ProfilePage from "../components/pages/ProfilePage";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['profile', 'auth', 'common', 'footer'])),
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
    btns: {
      info: t('profile:btns__info'),
      orders: t('profile:btns__orders'),
      settings: t('profile:btns__settings'),
    },
  }

  return (
    <ProfilePage translates={translates} />
  )
}

export default Profile