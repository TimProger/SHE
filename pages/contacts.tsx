import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import CoopPage from "../components/pages/CoopPage";
import ContactsPage from '../components/pages/ContactsPage';

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['coop', 'auth', 'common', 'footer', 'contacts',]))
    },
    revalidate: 10
  }
}

const Contacts: React.FC = () => {

  const { locale } = useRouter()
  const { t } = useTranslation()

  const translates = {
    title: t('fav:title'),
    clear: t('fav:clear'),
    empty: t('fav:empty'),
    toCatalogue: t('fav:toCatalogue'),
    contacts: {
      title1: t('contacts:title1'),
      title2: t('contacts:title2'),
      title3: t('contacts:title3'),
      title4: t('contacts:title4'),
      adress: t('contacts:adress'),
    },
  }

  useEffect(()=>{

  }, [])

  return (
    <ContactsPage translates={translates} contacts={translates.contacts}/>
  );
};

export default Contacts;