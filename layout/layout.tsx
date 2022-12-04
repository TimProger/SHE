import React from 'react';
import Header from "../components/Header";
import Head from "next/head";
import Container from "../components/Container";
import Footer from "../components/Footer";
import s from '../styles/components/layout.module.scss'
import Button from '../components/Button';
import icon_16 from "../public/images/favicon/icon_16.png";
import icon_24 from "../public/images/favicon/icon_24.png";
import icon_32 from "../public/images/favicon/icon_32.png";
import icon_64 from "../public/images/favicon/icon_64.png";

interface IMainLayoutProps {
  btns: any;
  links: any;
  titles: any;
  auth: any;
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<IMainLayoutProps>
    = ({
         btns,
         links,
         titles,
         auth,
         children,
         title,
         description,
         keywords
       }) => {
    return (
        <>
              <div className={s.mobile_alert}>
                <div className={s.mobile_alert__container}>
                  <h1>Мы работаем над этим!</h1>
                  <div>Мобильная версия сайта сейчас недоступна. Мы работаем над ее созданием.<br /> Вы можете перейти на старую версию сайта по кнопке.</div>
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
            <Header btns={btns} auth={auth} />
            {children}
            <Footer links={links} titles={titles} />
          </div>
        </>
    );
};

export default Layout;