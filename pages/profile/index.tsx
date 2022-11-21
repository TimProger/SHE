import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {LogIn} from "../../store/Slices/Auth.slice";
import {useDispatch} from "react-redux";
import Layout from "../../layout/layout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation, withTranslation} from "next-i18next";
import { GetStaticProps } from 'next'
import {IProfileProps} from "../../types/Profile.types";
import Container from "../../components/Container";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['profile', 'header', 'footer'])),
    }
  }
}

const Profile: React.FC<IProfileProps> = () => {
  const { isAuth } = useTypedSelector(state => state.auth)
  const {t, i18n} = useTranslation();
  const dispatch = useDispatch();

  const addNewUser = () => {
    dispatch(LogIn(!isAuth));
  };

  const translates = {
    title: t('profile:title'),
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
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles}>
      <div>
        <button onClick={()=>addNewUser()}>{isAuth ? 'LogOut' : 'LogIn'}</button>
        <Container>
          <h1>{isAuth ? 'YOOOO' : 'Hello'}</h1>
          {t('profile:welcome')}
        </Container>
      </div>
    </Layout>
  )
}

export default Profile