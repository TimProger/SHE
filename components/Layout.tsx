import React from 'react';
import Header from "./Header";
import Head from "next/head";
import Container from "./Container";
import Footer from "./Footer";
import s from '../styles/components/layout.module.scss'
import Button from './Button';
import icon_16 from "../public/images/favicon/icon_16.png";
import icon_24 from "../public/images/favicon/icon_24.png";
import icon_32 from "../public/images/favicon/icon_32.png";
import icon_64 from "../public/images/favicon/icon_64.png";
import {useRouter} from "next/router";

interface IMainLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<IMainLayoutProps>
    = ({
         children,
         title,
         description,
         keywords
       }) => {
  const { locale } = useRouter()

  return (
    <>
      <div className={s.mobile_alert}>
        <div className={s.mobile_alert__container}>
          <h1>{locale === 'ru' ? 'Мы работаем над этим!' : 'We still working on it!'}</h1>
          <div>{locale === 'ru'
              ? 'Мобильная версия сайта сейчас недоступна. Мы работаем над ее созданием.'
              : 'The mobile version of the site is currently unavailable. We\'re working on it.'} <br />
            {locale === 'ru'
              ? 'Вы можете перейти на старую версию сайта по кнопке ниже.'
              : 'You can go to the old version of the site by clicking the button below'}</div>
          <Button type={'link'} href={'https://tmshe.ru'} text='Перейти' />
        </div>
      </div>
      <Head>
        <title>{title || 'Главная | ™SHE'}</title>
        <meta name="keywords" content={keywords || "SHE, ™SHE, Гель, Лак, Лаки, Gel, Дёшево, Купить"} />
        <link rel="icon" type="image/png" sizes="16x16" href={icon_16.src} />
        <link rel="icon" type="image/png" sizes="24x24" href={icon_24.src} />
        <link rel="icon" type="image/png" sizes="32x32" href={icon_32.src} />
        <link rel="icon" type="image/png" sizes="64x64" href={icon_64.src} />
      </Head>
      <div className={s.container}>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;