import React, {useEffect, useState} from 'react';
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
import mir_logo from "../public/images/mir_logo.png";
import ms_logo from "../public/images/ms_logo.png";
import visa_logo from "../public/images/visa_logo.png";
import jcb_logo from "../public/images/jcb_logo.png";
import {Storage} from "../utils/storage";
import Compliment from "../components/Compliment";
import Image from "next/image";

const About: React.FC = () => {

  const { locale } = useRouter()
  const { t } = useTranslation('about')

  const [compliment, setCompliment] = useState<boolean>(false)

  useEffect(()=>{
    const comp = Storage.get('about_compliment')
    if(!comp){
      setCompliment(true)
    }
  }, [])

  return (
    <Layout>
      <Head>
        <title>{`${t('title')} | ™SHE`.replace('<!-\- -->','')}</title>
      </Head>
      <div className={s.about}>
        {compliment && <Compliment type={'about'} />}
        <Container>
          <div className={s.about__wrapper}>
            <div className={s.about__first}>
              <h1 className={s.about__first__title}>
                {t('title')}
              </h1>
              <div className={s.about__first__text}>
                <span>{t('about')}</span>
                <br />
                <br />
                {t('paragraph_1')}
              </div>
              <div className={s.about__first__img}>
                <Image
                  src={img1.src}
                  alt="img0"
                  width={200}
                  height={200} />
              </div>
              <h2 className={s.about__first__title}>{t('title2')}</h2>
              <div className={s.about__first__text}>{t('paragraph_2')}
              </div>
              <div className={s.about__first__img}>
                <Image
                  src={img2.src}
                  alt="img1"
                  width={200}
                  height={200} />
              </div>
              <div className={s.about__payment__about}>
                <h2>{t('payment__info.title')}</h2>
                <p>{t('payment__info.about')}</p>
                <div className={s.about__payment__imgs}>
                  <Image
                    src={mir_logo.src}
                    alt="mir_logo"
                    width={200}
                    height={200} />
                  <Image
                    src={ms_logo.src}
                    alt="ms_logo"
                    width={200}
                    height={200} />
                  <Image
                    src={visa_logo.src}
                    alt="visa_logo"
                    width={200}
                    height={200} />
                  <Image
                    src={jcb_logo.src}
                    alt="jcb_logo"
                    width={200}
                    height={200} />
                </div>
              </div>
            </div>
            <div className={s.about__second}>
              <div className={s.about__first__img}>
                <Image
                  src={img3.src}
                  alt="img2"
                  width={200}
                  height={200}  />
              </div>
              <h2 className={s.about__first__title}>
                {t('title3')}
              </h2>
              <div className={s.about__first__text}>{t('paragraph_3')}
              </div>
              <div className={s.about__first__img}>
                <Image
                  src={img4.src}
                  alt="img3"
                  width={200}
                  height={200}  />
              </div>
              <h2 className={s.about__first__title}>
                {t('title4')}
              </h2>
              <div className={s.about__first__text}>{t('paragraph_4')}
              </div>
            </div>
          </div>
          <div className={s.about__payment}>
            <div className={s.about__payment__col_1}>
              <div>{t('payment__info.info_1')}</div>
              <div>{t('payment__info.info_2')}</div>
            </div>
            <div className={s.about__payment__col_2}>
              {t('payment__info.info_3')}
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