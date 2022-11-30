import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import CoopPage from "../components/pages/CoopPage";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['coop', 'auth', 'header', 'footer', 'partnership']))
    },
    revalidate: 10
  }
}

const Coop: React.FC = () => {

  const { locale } = useRouter()
  const { t } = useTranslation()

  const translates = {
    title: t('fav:title'),
    clear: t('fav:clear'),
    empty: t('fav:empty'),
    toCatalogue: t('fav:toCatalogue'),
    header: {
      home: t('header:home'),
      catalogue: t('header:catalogue'),
      coop: t('header:coop'),
      about: t('header:about'),
      contacts: t('header:contacts'),
      search: t('header:search')
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
    partnership: {
      error_code_1: t('partnership:error_code_1'),
      title: t('partnership:title'),
      paragraph_1: t('partnership:paragraph_1'),
      paragraph_2: t('partnership:paragraph_2'),
      input_1: t('partnership:input_1'),
      message: t('partnership:message'),
      name: t('partnership:name'),
      button: t('partnership:button'),
      text: t('partnership:text'),
      link: t('partnership:link'),
      countries: {
        russia: t('partnership:country_russia'),
        usa: t('partnership:country_usa'),
        uar: t('partnership:country_uar'),
        korea: t('partnership:country_korea'),
        bel: t('partnership:country_bel'),
        azerb: t('partnership:country_azerb'),
        england: t('partnership:country_england'),
        oae: t('partnership:country_oae'),
        india: t('partnership:country_india'),
        turkey: t('partnership:country_turkey'),
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
    <CoopPage translates={translates} coop={translates.coop} />
  );
};

export default Coop;