import React from "react";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {LogIn} from "../../store/Slices/Auth.slice";
import {useDispatch} from "react-redux";
import Layout from "../../layout/layout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation, withTranslation} from "next-i18next";
import { GetStaticProps } from 'next'
import {IProfileProps} from "../../types/Profile.types";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['profile', 'header'])),
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

  const changeLanguage = async () => {
    console.log(`${t('title')}`)
    await i18n.changeLanguage('en')
      .then((t)=>{
        console.log(`${t('title')}`)
      })
  };

  let title = `${t('profile:title')}`

  return (
    <Layout btns={[t('header:home'),t('header:profile')]} title={t('profile:title')}>
      <div>
        <button onClick={()=>changeLanguage()}>Change</button>
        <button onClick={()=>addNewUser()}>{isAuth ? 'LogOut' : 'LogIn'}</button>
        <h1>{isAuth ? 'YOOOO' : 'Hello'}</h1>
        {t('profile:welcome')}
      </div>
    </Layout>
  )
}

export default Profile