import React from 'react';
import Header from "../components/Header";
import Head from "next/head";
import styles from '../styles/layout.module.scss'
import Container from "../components/Container";

interface MainLayoutProps {
  btns: string[];
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

const Layout: React.FC<MainLayoutProps>
    = ({
          btns,
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
            </Head>
            <Header btns={btns} />
            <Container>
                {children}
            </Container>
        </>
    );
};

export default Layout;