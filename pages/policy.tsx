import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React from "react";
import {API_BASE_URL} from "../http/api";
import PolicyPage from "../components/pages/PolicyPage";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const data = await fetch(`${API_BASE_URL}/profile/${locale}/agreement/`)
  const policyData = await data.json()
  return {
    props: {
      data: policyData,
      ...(await serverSideTranslations(locale as string, ['policy', 'auth', 'common', 'footer']))
    },
    revalidate: 10,
  }
}

interface IPolicyData {
  id: number;
  title: string;
  text: string;
}

interface IPolicyProps {
  data: IPolicyData[],
}

const Policy: React.FC<IPolicyProps> = ({data}) => {
  const { locale } = useRouter()
  const { t } = useTranslation()

  const translates = {
    title: t('policy:title'),
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

  return (<PolicyPage translates={translates} data={data} />)
}

export default Policy