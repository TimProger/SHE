import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Layout from "../components/Layout";
import Head from "next/head";
import s from "../styles/pages/about.module.scss";
import Container from "../components/Container";
import img1 from "../public/images/about1.png";
import img2 from "../public/images/about2.png";
import img3 from "../public/images/about3.png";
import img4 from "../public/images/about4.png";

const About: React.FC = () => {

  const { locale } = useRouter()
  const { t } = useTranslation('about')

  useEffect(()=>{

  }, [])

  return (
    <Layout>
      <Head>
        <title>{t('title')} | ™SHE</title>
      </Head>
      <div className={s.about}>
        <Container>
          <div className={s.about__wrapper}>
            <div className={s.about__first}>
              <div className={s.about__first__title}>
                {t('title')}
              </div>
              <div className={s.about__first__text}>
                <span>{t('about')}</span>
                <br />
                <br />
                {t('paragraph_1')}
              </div>
              <div className={s.about__first__img}>
                <img src={img1.src} alt="img0" />
              </div>
              <div className={s.about__first__title}>{t('title2')}</div>
              <div className={s.about__first__text}>{t('paragraph_2')}
              </div>
              <div className={s.about__first__img}>
                <img src={img2.src} alt="img1" />
              </div>

            </div>
            <div className={s.about__second}>
              <div className={s.about__first__img}>
                <img src={img3.src} alt="img2" />
              </div>
              <div className={s.about__first__title}>
                {t('title3')}
              </div>
              <div className={s.about__first__text}>{t('paragraph_3')}
              </div>
              <div className={s.about__first__img}>
                <img src={img4.src} alt="img3" />
              </div>
              <div className={s.about__first__title}>
                {t('title4')}
              </div>
              <div className={s.about__first__text}>{t('paragraph_4')}
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
      ...(await serverSideTranslations(locale as string ?? 'ru', ['common', 'about']))
    },
    revalidate: 10
  }
}

export default About;