import Layout from "../../layout/layout";
import s from '../../styles/pages/about.module.scss'
import {useRouter} from "next/router";
import React, { useState } from "react";
import Container from "../../components/Container";
import Head from "next/head";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import img1 from '../../public/images/about1.png'
import img2 from '../../public/images/about2.png'
import img3 from '../../public/images/about3.png'
import img4 from '../../public/images/about4.png'
import Button from "../Button";

interface IProductPageProps {
  translates: any;
  about: any;
}

const AboutPage: React.FC<IProductPageProps> = ({translates, about}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()


  return (
    <>
      <Layout>
        <Head>
            <title>{translates.title} | ™SHE</title>
        </Head>
        <div className={s.about}>
            <Container>
                <div className={s.about__wrapper}>
                    <div className={s.about__first}>
                        <div className={s.about__first__title}>
                            {about.title}
                        </div>
                        <div className={s.about__first__text}>
                            <span>{about.about}</span>
                            <br />
                            <br />
                            {about.paragraph_1}
                        </div>
                        <div className={s.about__first__img}>
                            <img src={img1.src} alt="" />
                        </div>
                        <div className={s.about__first__title}>{about.title2}</div>
                        <div className={s.about__first__text}>{about.paragraph_2}
                        </div>
                        <div className={s.about__first__img}>
                            <img src={img2.src} alt="" />
                        </div>

                    </div>
                    <div className={s.about__second}>
                        <div className={s.about__first__img}>
                            <img src={img3.src} alt="" />
                        </div>
                        <div className={s.about__first__title}>
                        {about.title3}
                        </div>
                        <div className={s.about__first__text}>{about.paragraph_3}
                        </div>
                        <div className={s.about__first__img}>
                            <img src={img4.src} alt="" />
                        </div>
                        <div className={s.about__first__title}>
                        {about.title4}
                        </div>
                        <div className={s.about__first__text}>{about.paragraph_4}
                        </div>
                    </div>
                </div>
            </Container>
        </div>
      </Layout>
    </>
  )
}

export default AboutPage