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
      ...(await serverSideTranslations(locale as string, ['profile'])),
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

  return (
    <div>
      <button onClick={()=>addNewUser()}>{isAuth ? 'LogOut' : 'LogIn'}</button>
      <Container>
        <h1>{isAuth ? 'YOOOO' : 'Hello'}</h1>
        {t('profile:welcome')}
      </Container>
    </div>
  )
}

export default Profile