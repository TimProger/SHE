import Layout from "../../layout/layout";
import s from '../../styles/pages/documents.module.scss'
import {useRouter} from "next/router";
import React, { useState } from "react";
import Container from "../Container";
import Head from "next/head";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import Button from "../Button";

interface IContactsPageProps {
  translates: any;
  documents:any;
}

const DocumentsPage: React.FC<IContactsPageProps> = ({translates, documents}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  return (
    <>
      <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles} auth={translates.auth}>
        <Head>
          <title>{translates.title} | ™SHE</title>
        </Head>
        <div className={s.documents}>
          <Container>
            <div className={s.documents__wrapper}>
              <h1>{documents.title1}</h1>
              <div className={s.documents__certificates}>
                <h2>{documents.title2}</h2>
                <div className={s.documents__certificates__pdf}>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5 4H12C10.8954 4 10 4.89543 10 6V43C10 44.1046 10.8954 45 12 45H39C40.1046 45 41 44.1046 41 43V12.9995L30.5 4Z" fill="#BC1919"/>
                  <path d="M30.2991 14.3376C29.6448 14.4194 29.0919 13.8567 29.1851 13.2039L30.5001 3.99835L41 13L30.2991 14.3376Z" fill="#740E0E"/>
                  <path d="M18.82 24.98C20.02 24.98 20.91 24.17 20.91 22.99C20.91 21.81 20.02 21 18.82 21H14.09V28H15.47V24.98H18.82ZM18.82 22.28C19.26 22.28 19.52 22.56 19.52 22.99C19.52 23.42 19.26 23.7 18.82 23.7H15.47V22.28H18.82ZM29.7643 24.52C29.7643 22.26 28.0843 21 25.6543 21H22.2443V28H25.6543C28.0843 28 29.7643 26.78 29.7643 24.52ZM28.3543 24.52C28.3543 25.95 27.3043 26.68 25.8043 26.72H23.6243V22.28H25.6543C27.2343 22.28 28.3543 23.05 28.3543 24.52ZM36.8482 24.8V23.52H32.6282V22.28H37.2682V21H31.2482V28H32.6282V24.8H36.8482Z" fill="white"/>
                  </svg>
                  <p>Протокол Испытаний 42.22.08845.pdf</p>
                </div>
                <div className={s.documents__certificates__doc}>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5 4H12C10.8954 4 10 4.89543 10 6V43C10 44.1046 10.8954 45 12 45H39C40.1046 45 41 44.1046 41 43V12.9995L30.5 4Z" fill="#1929BC"/>
                  <path d="M30.2991 14.3376C29.6448 14.4194 29.0919 13.8567 29.1851 13.2039L30.5001 3.99835L41 13L30.2991 14.3376Z" fill="#160E74"/>
                  <path d="M20.61 24.52C20.61 22.26 18.93 21 16.5 21H13.09V28H16.5C18.93 28 20.61 26.78 20.61 24.52ZM19.2 24.52C19.2 25.95 18.15 26.68 16.65 26.72H14.47V22.28H16.5C18.08 22.28 19.2 23.05 19.2 24.52ZM21.3939 24.5C21.3939 26.79 23.0639 28.1 25.5539 28.1C28.0439 28.1 29.7139 26.79 29.7139 24.5C29.7139 22.21 28.0439 20.9 25.5539 20.9C23.0639 20.9 21.3939 22.21 21.3939 24.5ZM25.5539 22.17C27.1639 22.17 28.3039 22.98 28.3039 24.5C28.3039 26.02 27.1639 26.83 25.5539 26.83C23.9439 26.83 22.8039 26.02 22.8039 24.5C22.8039 22.98 23.9439 22.17 25.5539 22.17ZM38.1955 22.41C37.4955 21.43 36.2455 20.9 34.6555 20.9C32.1655 20.9 30.4955 22.21 30.4955 24.5C30.4955 26.79 32.1655 28.1 34.6555 28.1C36.2555 28.1 37.5155 27.54 38.2155 26.54L37.0755 25.74C36.6255 26.45 35.7455 26.83 34.6555 26.83C33.0455 26.83 31.9055 26.02 31.9055 24.5C31.9055 22.98 33.0455 22.17 34.6555 22.17C35.7255 22.17 36.5855 22.53 37.0455 23.22L38.1955 22.41Z" fill="white"/>
                  </svg>
                  <p>Декларация о соответствии зарег 16999058 от 08 09 2022.docx</p>
                </div>
              </div>
              <div className={s.documents__cataloge}>
                <h2>{documents.title3}</h2>
                <div className={s.documents__cataloge__exel}>
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5 4H12C10.8954 4 10 4.89543 10 6V43C10 44.1046 10.8954 45 12 45H39C40.1046 45 41 44.1046 41 43V12.9995L30.5 4Z" fill="#11740F"/>
                  <path d="M30.2991 14.3376C29.6448 14.4194 29.0919 13.8567 29.1851 13.2039L30.5001 3.99835L41 13L30.2991 14.3376Z" fill="#0A4A09"/>
                  <path d="M24.168 23H26.048L22.208 19.05L25.168 16H23.328L21.288 18.1L19.248 16H17.368L20.348 19.07L16.518 23H18.358L21.268 20.01L24.168 23ZM26.9103 23H32.9603V21.72H28.2903V16H26.9103V23ZM24.2533 27.46C23.5533 26.48 21.9533 25.89 20.2433 25.89C18.3533 25.89 16.8933 26.76 16.8933 28.04C16.8933 29.15 17.8533 29.79 20.3633 29.97C22.0133 30.09 22.8533 30.3 22.8533 30.86C22.8533 31.59 21.7533 31.84 20.6233 31.84C19.2933 31.84 18.1333 31.29 17.6033 30.53L16.4633 31.33C17.1633 32.33 18.6633 33.11 20.5433 33.11C22.3633 33.11 24.2433 32.47 24.2433 30.83C24.2433 29.46 22.9333 28.9 20.7133 28.74C18.7133 28.6 18.3233 28.41 18.3233 27.98C18.3233 27.47 19.1733 27.16 20.2533 27.16C21.4333 27.16 22.6433 27.58 23.1033 28.27L24.2533 27.46ZM32.2345 33H34.1145L30.2745 29.05L33.2345 26H31.3945L29.3545 28.1L27.3145 26H25.4345L28.4145 29.07L24.5845 33H26.4245L29.3345 30.01L32.2345 33Z" fill="white"/>
                  </svg>
                  <p>{documents.title4}</p>
                </div>
              </div>
              <div>
                <Button text={documents.button} />
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  )
}

export default DocumentsPage