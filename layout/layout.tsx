import React from 'react';
import Header from "../components/Header";
import Head from "next/head";
import Container from "../components/Container";
import Footer from "../components/Footer";
import icon_16 from '../public/images/favicon/icon_16.png'
import icon_24 from '../public/images/favicon/icon_24.png'
import icon_32 from '../public/images/favicon/icon_32.png'
import icon_64 from '../public/images/favicon/icon_64.png'

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
            <Head>
              <title>{title || 'Главная | SHE'}</title>
              <meta name="description" content={`Интернет магазин в котором вы найдёте гели на любой вкус.` + description}/>
              <meta name="robots" content="index, follow"/>
              <meta name="keywords" content={keywords || "Товар, бесплатно, акция"}/>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <link rel="icon" type="image/png" sizes="16x16" href={icon_16.src} />
              <link rel="icon" type="image/png" sizes="24x24" href={icon_24.src} />
              <link rel="icon" type="image/png" sizes="32x32" href={icon_32.src} />
              <link rel="icon" type="image/png" sizes="64x64" href={icon_64.src} />
            </Head>
            <Header btns={btns} auth={auth} />
            {children}
            <Footer links={links} titles={titles} />
        </>
    );
};

export default Layout;