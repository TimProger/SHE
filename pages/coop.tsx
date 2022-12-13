import React, {useState} from 'react';
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import Partnership from "../components/Partnership";
import Layout from "../components/Layout";
import Head from "next/head";
import s from "../styles/pages/coop.module.scss";
import Container from "../components/Container";
import coopDescriptionImg from "../public/images/coopDescription.png";
import Button from "../components/Button";

const Coop: React.FC = () => {

  const { locale } = useRouter()
  const { t } = useTranslation('coop')

  const [showAuth, setShowAuth] = useState(false)

  return (
    <>
      <Partnership show={showAuth} setShow={setShowAuth} />
      <Layout>
        <Head>
          <title>{t('title')} | ™SHE</title>
        </Head>
        <div className={s.coop}>
          <Container className={s.coop__container}>
            <h2 className={s.coop__title}>{t('title')}</h2>
          </Container>
          <div className={s.coop__imgBackGround}></div>
          <Container no_margin={true}>
            <div className={s.coop__body}>
              <div className={s.coop__body__special_conditions}>
                <h2>{t('title1')}</h2>
                <div className={s.coop__body__special_conditions__description}>{t('paragraph_1')}
                </div>
                <div className={s.coop__body__special_conditions__discounts}>
                  <div>
                    <div className={s.coop__body__special_conditions__discounts__title}>{t('discount1')}</div>
                    <ul className={s.coop__body__special_conditions__discounts__first}>
                      <li>30%</li>
                      <li>20%</li>
                      <li>15%</li>
                      <li>10%</li>
                    </ul>
                  </div>
                  <div>
                    <div className={s.coop__body__special_conditions__discounts__title}>{t('discount2')}</div>
                    <ul className={s.coop__body__special_conditions__discounts__second}>
                      <li>{locale === 'ru' ? '40.000₽' : '640$'}</li>
                      <li>{locale === 'ru' ? '30.000₽' : '480$'}</li>
                      <li>{locale === 'ru' ? '20.000₽' : '320$'}</li>
                      <li>{locale === 'ru' ? '10.000₽' : '160$'}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={s.coop__body__request}>
                <div className={s.coop__body__request__img}>
                  <img src={coopDescriptionImg.src} alt="coopDescriptionImage" />
                </div>
                <h2 className={s.coop__body__request__title}>{t('title2')}</h2>
                <div className={s.coop__body__special_conditions__description}>{t('paragraph_2')}
                </div>
                <Button text={t('button')} onClick={() => setShowAuth(true)}/>
                <div className={s.coop__body__request__contacts}>{t('connect')}</div>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string ?? 'ru', ['coop', 'common']))
    },
    revalidate: 10
  }
}

export default Coop;