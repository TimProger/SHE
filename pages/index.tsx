import Layout from "../layout/layout";
import styles from '../styles/main/main.module.scss'
import "swiper/css";
import "swiper/css/pagination";
import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Container from "../components/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Pagination, Lazy, Navigation} from 'swiper';
import {IProduct, ISlide} from "../types/Product.types";
import Card from "../components/Card";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['main', 'header', 'footer']))
    }
  }
}

function Main() {
  const { locale } = useRouter()
  const { t } = useTranslation()

  const [mySwiper, setMySwiper] = useState(null)
  const [mySwiper2, setMySwiper2] = useState(null)

  const [slides, setSlides] = useState<ISlide[]>([
    {
      title: `Обложка для
новостей и рекламы
будет выглядеть так!`,
      date: '01.01.23',
      id: 2
    },
    {
      title: 'daw',
      date: '20.12.22',
      id: 2
    },
    {
      title: 'daw',
      date: '13.12.22',
      id: 2
    },
    {
      title: 'daw',
      date: '25.12.22',
      id: 2
    },
  ])

  const [slidesNew, setSlidesNew] = useState<IProduct[]>([
    {
      isNew: true,
      isHit: false,
      discount: 17,
      image: 'https://sun9-35.userapi.com/impg/2iloIEk0otsIlhnpGDNMug2f8b8EC0ycfHOVQQ/jtLn6j5CLOk.jpg?size=272x290&quality=96&sign=9449dd0515970b27587dbf16b931b226&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 0
    },
    {
      isNew: true,
      isHit: false,
      discount: 17,
      image: 'https://sun9-28.userapi.com/impg/HRcq2amtnKncBqj0ek6OBu7LmuggKWlm2llS5w/ws0TNam4kO4.jpg?size=272x290&quality=96&sign=50ed80ecde53f9d5389d8477af7cd7c7&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 1
    },
    {
      isNew: true,
      isHit: false,
      discount: 17,
      image: 'https://sun9-35.userapi.com/impg/2iloIEk0otsIlhnpGDNMug2f8b8EC0ycfHOVQQ/jtLn6j5CLOk.jpg?size=272x290&quality=96&sign=9449dd0515970b27587dbf16b931b226&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 2
    },
    {
      isNew: true,
      isHit: false,
      discount: 17,
      image: 'https://sun9-28.userapi.com/impg/HRcq2amtnKncBqj0ek6OBu7LmuggKWlm2llS5w/ws0TNam4kO4.jpg?size=272x290&quality=96&sign=50ed80ecde53f9d5389d8477af7cd7c7&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 3
    },
  ])

  const [slidesNew2, setSlidesNew2] = useState<IProduct[]>([
    {
      isNew: false,
      isHit: true,
      discount: 17,
      image: 'https://sun9-35.userapi.com/impg/2iloIEk0otsIlhnpGDNMug2f8b8EC0ycfHOVQQ/jtLn6j5CLOk.jpg?size=272x290&quality=96&sign=9449dd0515970b27587dbf16b931b226&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 0
    },
    {
      isNew: false,
      isHit: true,
      discount: 17,
      image: 'https://sun9-28.userapi.com/impg/HRcq2amtnKncBqj0ek6OBu7LmuggKWlm2llS5w/ws0TNam4kO4.jpg?size=272x290&quality=96&sign=50ed80ecde53f9d5389d8477af7cd7c7&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 1
    },
    {
      isNew: false,
      isHit: true,
      discount: 17,
      image: 'https://sun9-35.userapi.com/impg/2iloIEk0otsIlhnpGDNMug2f8b8EC0ycfHOVQQ/jtLn6j5CLOk.jpg?size=272x290&quality=96&sign=9449dd0515970b27587dbf16b931b226&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 2
    },
    {
      isNew: false,
      isHit: true,
      discount: 17,
      image: 'https://sun9-28.userapi.com/impg/HRcq2amtnKncBqj0ek6OBu7LmuggKWlm2llS5w/ws0TNam4kO4.jpg?size=272x290&quality=96&sign=50ed80ecde53f9d5389d8477af7cd7c7&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 3
    },
  ])

  const translates = {
    header: [
      t('header:home'),
      t('header:catalogue'),
      t('header:coop'),
      t('header:about'),
      t('header:contacts'),
      t('header:search')
    ],
    footer: {
      titles: [
        t('footer:profile'),
        t('footer:info'),
        t('footer:contacts'),
        t('footer:video'),
      ],
      links: [
        t('footer:profile_link1'),
        t('footer:profile_link2'),
        t('footer:profile_link3'),
        t('footer:profile_link4'),
        t('footer:info_link1'),
        t('footer:info_link2'),
        t('footer:info_link3'),
        t('footer:info_link4'),
        t('footer:info_link5'),
        t('footer:contacts_link1'),
        t('footer:contacts_link2'),
        t('footer:contacts_link3'),
        t('footer:video_link1'),
        t('footer:video_link2'),
        t('footer:video_link3'),
        t('footer:video_link4'),
      ],
    },

}

  const AddToFavs = (id: number) => {
    console.log(id)
  }

  return (
      <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles}>
        <div>
          <Swiper
            className={styles.swiper}
            modules={[Pagination, Autoplay, Lazy]}
            lazy={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
            }}
          >
            {slides.length !== 0 && slides.map((el, index) => {
              return (
                <SwiperSlide key={index} className={styles.swiper__slide}>
                  <div className={styles.swiper__slide__wrapper}>
                    <p></p>
                    <div className={styles.swiper__slide__title}>
                      <h1 className={styles.swiper__slide__title__h1}>{el.title}</h1>
                    </div>
                    <div className={styles.swiper__slide__footer}>
                      <p className={styles.swiper__slide__footer__date}>
                        Акция действуте до {el.date}
                      </p>
                      <button className={styles.swiper__slide__footer__btn}>
                        Подробнее
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <Container>
            <div className={styles.container__balls}>
              <div className={styles.container__balls__header}>
                <div className={styles.container__balls__title}>
                  <h1>Новинки</h1>
                  <div className={styles.new__block}>New</div>
                </div>
                <div className={styles.container__balls__title__arrows}>
                  <div onClick={()=> {
                    // @ts-ignore
                    mySwiper && mySwiper.slidePrev()
                  }} className={styles.arrow_back}>
                    <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.6666 3.5C28.9428 3.5 29.1666 3.72386 29.1666 4C29.1666 4.27614 28.9428 4.5 28.6666 4.5V3.5ZM0.979738 4.35355C0.784477 4.15829 0.784477 3.84171 0.979738 3.64645L4.16172 0.464466C4.35698 0.269204 4.67356 0.269204 4.86883 0.464466C5.06409 0.659728 5.06409 0.976311 4.86883 1.17157L2.0404 4L4.86883 6.82843C5.06409 7.02369 5.06409 7.34027 4.86883 7.53553C4.67356 7.7308 4.35698 7.7308 4.16172 7.53553L0.979738 4.35355ZM28.6666 4.5H1.33329V3.5H28.6666V4.5Z" fill="black"/>
                    </svg>
                  </div>
                  <div onClick={()=> {
                    // @ts-ignore
                    mySwiper && mySwiper.slideNext()
                  }} className={styles.arrow_next}>
                    <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.33331 3.5C1.05717 3.5 0.833313 3.72386 0.833313 4C0.833313 4.27614 1.05717 4.5 1.33331 4.5V3.5ZM29.0202 4.35355C29.2155 4.15829 29.2155 3.84171 29.0202 3.64645L25.8382 0.464466C25.643 0.269204 25.3264 0.269204 25.1311 0.464466C24.9359 0.659728 24.9359 0.976311 25.1311 1.17157L27.9595 4L25.1311 6.82843C24.9359 7.02369 24.9359 7.34027 25.1311 7.53553C25.3264 7.7308 25.643 7.7308 25.8382 7.53553L29.0202 4.35355ZM1.33331 4.5H28.6666V3.5H1.33331V4.5Z" fill="black"/>
                    </svg>
                  </div>
                </div>
              </div>
              <Swiper
                className={styles.new}
                modules={[Navigation, Autoplay, Lazy]}
                lazy={true}
                loop={true}
                slidesPerView={4}
                navigation={true}
                onInit={(ev) => {
                  // @ts-ignore
                  setMySwiper(ev)
                }}
              >
                {slidesNew.length !== 0 && slidesNew.map((el, index) => {
                  return (
                    <SwiperSlide key={index} className={styles.new}>
                      <Card favHandler={AddToFavs} id={el.id} isNew={el.isNew} isHit={el.isHit} discount={el.discount} image={el.image} title={el.title} price={el.price} colors={el.colors}  />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            <div className={styles.container__balls}>
              <div className={styles.container__balls__header}>
                <div className={styles.container__balls__title}>
                  <h1>Хиты</h1>
                  <div className={styles.hit__block}>Hit</div>
                </div>
                <div className={styles.container__balls__title__arrows}>
                  <div onClick={()=> {
                    // @ts-ignore
                    mySwiper2 && mySwiper2.slidePrev()
                  }} className={styles.arrow_back}>
                    <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M28.6666 3.5C28.9428 3.5 29.1666 3.72386 29.1666 4C29.1666 4.27614 28.9428 4.5 28.6666 4.5V3.5ZM0.979738 4.35355C0.784477 4.15829 0.784477 3.84171 0.979738 3.64645L4.16172 0.464466C4.35698 0.269204 4.67356 0.269204 4.86883 0.464466C5.06409 0.659728 5.06409 0.976311 4.86883 1.17157L2.0404 4L4.86883 6.82843C5.06409 7.02369 5.06409 7.34027 4.86883 7.53553C4.67356 7.7308 4.35698 7.7308 4.16172 7.53553L0.979738 4.35355ZM28.6666 4.5H1.33329V3.5H28.6666V4.5Z" fill="black"/>
                    </svg>
                  </div>
                  <div onClick={()=> {
                    // @ts-ignore
                    mySwiper2 && mySwiper2.slideNext()
                  }} className={styles.arrow_next}>
                    <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.33331 3.5C1.05717 3.5 0.833313 3.72386 0.833313 4C0.833313 4.27614 1.05717 4.5 1.33331 4.5V3.5ZM29.0202 4.35355C29.2155 4.15829 29.2155 3.84171 29.0202 3.64645L25.8382 0.464466C25.643 0.269204 25.3264 0.269204 25.1311 0.464466C24.9359 0.659728 24.9359 0.976311 25.1311 1.17157L27.9595 4L25.1311 6.82843C24.9359 7.02369 24.9359 7.34027 25.1311 7.53553C25.3264 7.7308 25.643 7.7308 25.8382 7.53553L29.0202 4.35355ZM1.33331 4.5H28.6666V3.5H1.33331V4.5Z" fill="black"/>
                    </svg>
                  </div>
                </div>
              </div>
              <Swiper
                className={styles.new}
                modules={[Navigation, Autoplay, Lazy]}
                lazy={true}
                loop={true}
                slidesPerView={4}
                navigation={true}
                onInit={(ev) => {
                  // @ts-ignore
                  setMySwiper2(ev)
                }}
              >
                {slidesNew2.length !== 0 && slidesNew2.map((el, index) => {
                  return (
                    <SwiperSlide key={index} className={styles.new}>
                      <Card favHandler={AddToFavs} id={el.id} isNew={el.isNew} isHit={el.isHit} discount={el.discount} image={el.image} title={el.title} price={el.price} colors={el.colors}  />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            <div className={styles.container__imgs}>
              <div className={styles.container__imgs__img + " " + styles.container__imgs__img__img1}></div>
              <div className={styles.container__imgs__img + " " + styles.container__imgs__img__img2}></div>
            </div>
          </Container>
        </div>
      </Layout>
  )
}

export default Main