import {useTypedSelector} from "../../hooks/useTypedSelector";
import {LogIn} from "../../store/Slices/Auth.slice";
import {useDispatch} from "react-redux";
import Layout from "../../layout/layout";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['profile']))
    }
  }
}

export default function Profile() {
  const { t } = useTranslation()
  const { isAuth } = useTypedSelector(state => state.auth)
  const dispatch = useDispatch();

  const addNewUser = () => {
    console.log(isAuth)
    dispatch(LogIn(!isAuth));
  };

  return (
    <Layout title={'Профиль'}>
      <div>
        <button onClick={()=>addNewUser()}>dawdw</button>
        <h1>{isAuth ? 'YOOOO' : 'Hello'}</h1>
        {t('profile:welcome')}
      </div>
    </Layout>
  )
}
