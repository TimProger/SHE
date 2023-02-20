import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Head from "next/head";
import s from "../styles/pages/documents.module.scss";
import Container from "../components/Container";
import Link from "next/link";
import {API_BASE_URL} from "../http/api";
import Button from "../components/Button";
import Layout from "../components/Layout";

const Documents: React.FC = () => {

  const { locale } = useRouter()
  const { t } = useTranslation('documents')

  return (
    <Layout>
      <Head>
        <title>{`${t('title1')} | ™SHE`.replace('<!-\- -->','')}</title>
      </Head>
      <div className={s.documents}>
        <Container>
          <div className={s.documents__wrapper}>
            <h1>{t('title1')}</h1>
            <div className={s.documents__certificates}>
              <h2>{t('title2')}</h2>
              <div className={s.documents__certificates__pdf}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M30.5 4H12C10.8954 4 10 4.89543 10 6V43C10 44.1046 10.8954 45 12 45H39C40.1046 45 41 44.1046 41 43V12.9995L30.5 4Z" fill="#BC1919"/>
                  <path d="M30.2991 14.3376C29.6448 14.4194 29.0919 13.8567 29.1851 13.2039L30.5001 3.99835L41 13L30.2991 14.3376Z" fill="#740E0E"/>
                  <path d="M18.82 24.98C20.02 24.98 20.91 24.17 20.91 22.99C20.91 21.81 20.02 21 18.82 21H14.09V28H15.47V24.98H18.82ZM18.82 22.28C19.26 22.28 19.52 22.56 19.52 22.99C19.52 23.42 19.26 23.7 18.82 23.7H15.47V22.28H18.82ZM29.7643 24.52C29.7643 22.26 28.0843 21 25.6543 21H22.2443V28H25.6543C28.0843 28 29.7643 26.78 29.7643 24.52ZM28.3543 24.52C28.3543 25.95 27.3043 26.68 25.8043 26.72H23.6243V22.28H25.6543C27.2343 22.28 28.3543 23.05 28.3543 24.52ZM36.8482 24.8V23.52H32.6282V22.28H37.2682V21H31.2482V28H32.6282V24.8H36.8482Z" fill="white"/>
                </svg>
                <Link target="_blank" href={`${API_BASE_URL}/staticfiles/docx/Протокол Испытаний 42.22.08845.pdf`}>{t('title5')}</Link>
              </div>
              <div className={s.documents__certificates__doc}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M30.5 4H12C10.8954 4 10 4.89543 10 6V43C10 44.1046 10.8954 45 12 45H39C40.1046 45 41 44.1046 41 43V12.9995L30.5 4Z" fill="#BC1919"/>
                  <path d="M30.2991 14.3376C29.6448 14.4194 29.0919 13.8567 29.1851 13.2039L30.5001 3.99835L41 13L30.2991 14.3376Z" fill="#740E0E"/>
                  <path d="M18.82 24.98C20.02 24.98 20.91 24.17 20.91 22.99C20.91 21.81 20.02 21 18.82 21H14.09V28H15.47V24.98H18.82ZM18.82 22.28C19.26 22.28 19.52 22.56 19.52 22.99C19.52 23.42 19.26 23.7 18.82 23.7H15.47V22.28H18.82ZM29.7643 24.52C29.7643 22.26 28.0843 21 25.6543 21H22.2443V28H25.6543C28.0843 28 29.7643 26.78 29.7643 24.52ZM28.3543 24.52C28.3543 25.95 27.3043 26.68 25.8043 26.72H23.6243V22.28H25.6543C27.2343 22.28 28.3543 23.05 28.3543 24.52ZM36.8482 24.8V23.52H32.6282V22.28H37.2682V21H31.2482V28H32.6282V24.8H36.8482Z" fill="white"/>
                </svg>
                <Link target="_blank" href={locale==='ru'
                  ? `https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FGov4UQjxONhkwPbJN6O22SLWK67LW2ekumhQqDDE6rZMDqlsQJ%2B34sLuWF89DSJTEkI0e0it%2FP53JjBKdrjFug%3D%3D%3A%2F%D0%94%D0%B5%D0%BA%D0%BB%D0%B0%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%BE_%D1%81%D0%BE%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%B8%D0%B8_%D0%BD%D0%B0_%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%BC_%D1%8F%D0%B7%D1%8B%D0%BA%D0%B5.pdf&name=%D0%94%D0%B5%D0%BA%D0%BB%D0%B0%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D0%BE_%D1%81%D0%BE%D0%BE%D1%82%D0%B2%D0%B5%D1%82%D1%81%D1%82%D0%B2%D0%B8%D0%B8_%D0%BD%D0%B0_%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%BE%D0%BC_%D1%8F%D0%B7%D1%8B%D0%BA%D0%B5.pdf`
                  : `https://docs.yandex.ru/docs/view?url=ya-disk-public%3A%2F%2FGov4UQjxONhkwPbJN6O22SLWK67LW2ekumhQqDDE6rZMDqlsQJ%2B34sLuWF89DSJTEkI0e0it%2FP53JjBKdrjFug%3D%3D%3A%2FДекларация%20о%20соответствии%20(англ.).pdf&name=Декларация%20о%20соответствии%20(англ.).pdf&nosw=1`}>{t('title6')}</Link>
              </div>
              <div className={s.documents__certificates__doc}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M30.5 4H12C10.8954 4 10 4.89543 10 6V43C10 44.1046 10.8954 45 12 45H39C40.1046 45 41 44.1046 41 43V12.9995L30.5 4Z" fill="#BC1919"/>
                  <path d="M30.2991 14.3376C29.6448 14.4194 29.0919 13.8567 29.1851 13.2039L30.5001 3.99835L41 13L30.2991 14.3376Z" fill="#740E0E"/>
                  <path d="M18.82 24.98C20.02 24.98 20.91 24.17 20.91 22.99C20.91 21.81 20.02 21 18.82 21H14.09V28H15.47V24.98H18.82ZM18.82 22.28C19.26 22.28 19.52 22.56 19.52 22.99C19.52 23.42 19.26 23.7 18.82 23.7H15.47V22.28H18.82ZM29.7643 24.52C29.7643 22.26 28.0843 21 25.6543 21H22.2443V28H25.6543C28.0843 28 29.7643 26.78 29.7643 24.52ZM28.3543 24.52C28.3543 25.95 27.3043 26.68 25.8043 26.72H23.6243V22.28H25.6543C27.2343 22.28 28.3543 23.05 28.3543 24.52ZM36.8482 24.8V23.52H32.6282V22.28H37.2682V21H31.2482V28H32.6282V24.8H36.8482Z" fill="white"/>
                </svg>
                <Link target="_blank" href={`https://disk.yandex.ru/d/KhLBKzljL9llUA`}>{t('title7')}</Link>
              </div>
            </div>
            <div className={s.documents__cataloge}>
              <h2>{t('title3')}</h2>
              <div className={s.documents__cataloge__exel}>
                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5 4H12C10.8954 4 10 4.89543 10 6V43C10 44.1046 10.8954 45 12 45H39C40.1046 45 41 44.1046 41 43V12.9995L30.5 4Z" fill="#11740F"/>
                  <path d="M30.2991 14.3376C29.6448 14.4194 29.0919 13.8567 29.1851 13.2039L30.5001 3.99835L41 13L30.2991 14.3376Z" fill="#0A4A09"/>
                  <path d="M24.168 23H26.048L22.208 19.05L25.168 16H23.328L21.288 18.1L19.248 16H17.368L20.348 19.07L16.518 23H18.358L21.268 20.01L24.168 23ZM26.9103 23H32.9603V21.72H28.2903V16H26.9103V23ZM24.2533 27.46C23.5533 26.48 21.9533 25.89 20.2433 25.89C18.3533 25.89 16.8933 26.76 16.8933 28.04C16.8933 29.15 17.8533 29.79 20.3633 29.97C22.0133 30.09 22.8533 30.3 22.8533 30.86C22.8533 31.59 21.7533 31.84 20.6233 31.84C19.2933 31.84 18.1333 31.29 17.6033 30.53L16.4633 31.33C17.1633 32.33 18.6633 33.11 20.5433 33.11C22.3633 33.11 24.2433 32.47 24.2433 30.83C24.2433 29.46 22.9333 28.9 20.7133 28.74C18.7133 28.6 18.3233 28.41 18.3233 27.98C18.3233 27.47 19.1733 27.16 20.2533 27.16C21.4333 27.16 22.6433 27.58 23.1033 28.27L24.2533 27.46ZM32.2345 33H34.1145L30.2745 29.05L33.2345 26H31.3945L29.3545 28.1L27.3145 26H25.4345L28.4145 29.07L24.5845 33H26.4245L29.3345 30.01L32.2345 33Z" fill="white"/>
                </svg>
                <Link target="_blank" href={'https://docs.google.com/spreadsheets/d/1N36PsiRX6w9lfBdollKrGf1HXDeQ3D6u/edit#gid=1385872957'}>{t('title4')}</Link>
              </div>
            </div>
            <div className={s.documents__wrapper__export}>
              <Button
                type={'link'}
                href={'https://docs.google.com/spreadsheets/d/1N36PsiRX6w9lfBdollKrGf1HXDeQ3D6u/edit#gid=1385872957'}
                text={t('button')} />
            </div>
            <div className={s.documents__info}>
              <h2>{t('info.title')}</h2>
              <p>{t('info.address')}</p>
              <p>{t('info.email')}</p>
              <p>{t('info.phone')}</p>
              <div>
                <p>{t('info.requisites.name')}</p>
                <p>{t('info.requisites.inn')}</p>
                <p>{t('info.requisites.ogrnip')}</p>
                <p>{t('info.requisites.payment')}</p>
                <p>{t('info.requisites.address')}</p>
                <p>{t('info.requisites.phone')}</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string ?? 'ru', ['common', 'documents']))
    },
    revalidate: 10
  }
}

export default Documents;