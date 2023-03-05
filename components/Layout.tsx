import React, {useEffect, useState} from 'react';
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
import {useTranslation} from "next-i18next";

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
  const { t } = useTranslation('common')
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const resize = (e: any) => {
    if(window){
      let currentHideNav = (window.innerWidth <= 575);
      currentHideNav ? setIsMobile(true) : setIsMobile(false)
    }
  }

  useEffect(()=>{
    window.addEventListener('resize', resize)
    resize(null)

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords || "SHE, ™SHE, Гель, Лак, Лаки, Gel, Дёшево, Купить"} />
        <meta property="og:image" content="https://sun9-16.userapi.com/impg/-YosiRavKRC097-ESF_3BIApSKWmJ8PBZGuoeA/BQp3kv64i4Q.jpg?size=1157x487&quality=96&sign=6da03011033b4332146fbf175bbcd6f2&type=album"/>
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