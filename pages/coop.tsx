import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import CoopPage from "../components/pages/CoopPage";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['coop', 'auth', 'common', 'footer', 'fav']))
    },
    revalidate: 10
  }
}

const Coop: React.FC = () => {

  const { locale } = useRouter()
  const { t } = useTranslation()

  const translates = {
    title: t('fav:title3'),
    clear: t('fav:clear'),
    empty: t('fav:empty'),
    toCatalogue: t('fav:toCatalogue'),
    partnership: {
      error_code_1: t('coop:partnership_error_code_1'),
      title: t('coop:partnership_title'),
      paragraph_1: t('coop:partnership_paragraph_1'),
      paragraph_2: t('coop:partnership_paragraph_2'),
      name: t('coop:partnership_input_name'),
      name_pl: t('coop:partnership_input_name_pl'),
      phone: t('coop:partnership_input_phone'),
      message: t('coop:partnership_input_message'),
      message_pl: t('coop:partnership_input_message_pl'),
      button: t('coop:partnership_button'),
      text: t('coop:partnership_text'),
      link: t('coop:partnership_link'),
      countries: {
        russia: t('coop:partnership_country_russia'),
        usa: t('coop:partnership_country_usa'),
        uar: t('coop:partnership_country_uar'),
        korea: t('coop:partnership_country_korea'),
        bel: t('coop:partnership_country_bel'),
        azerb: t('coop:partnership_country_azerb'),
        england: t('coop:partnership_country_england'),
        oae: t('coop:partnership_country_oae'),
        india: t('coop:partnership_country_india'),
        turkey: t('coop:partnership_country_turkey'),
      },
    },
    coop: {
      partnership: t('coop:partnership'),
      title1: t('coop:title1'),
      title2: t('coop:title2'),
      paragraph_1: t('coop:paragraph_1'),
      paragraph_2: t('coop:paragraph_2'),
      discount1: t('coop:discount1'),
      discount2: t('coop:discount2'),
      connect: t('coop:connect'),
      button: t('coop:button'),
    },
  }

  useEffect(()=>{

  }, [])

  return (
    <CoopPage translates={translates} coop={translates.coop} />
  );
};

export default Coop;