import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {IProduct, ISlide} from "../types/Product.types";
import {API_BASE_URL} from "../http/api";
import "swiper/css";
import "swiper/css/pagination";
import {useAppDispatch} from "../hooks/useTypedDispatch";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Lazy, Navigation, Pagination} from "swiper";
import s from "../styles/pages/main.module.scss";
import Card from "../components/Card";
import Layout from "../components/Layout";
import Head from "next/head";
import Container from "../components/Container";
import Link from "next/link";
import {setModal, toggleShowModal} from "../store/Slices/Profile.slice";

interface IMainProps {
  slides: ISlide[],
  slidesNew: IProduct[],
  slidesHit: IProduct[]
}

const Main: React.FC<IMainProps> = ({slides, slidesNew, slidesHit}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()
  const { t } = useTranslation('main')

  const [mySwiper, setMySwiper] = useState(null)
  const [mySwiper2, setMySwiper2] = useState(null)

  const displaySlides = (slidesArr: IProduct[]) => {
    return JSON.parse(JSON.stringify(slidesArr)).map((el: IProduct, index: number)=>{
      return (
        <SwiperSlide key={index} className={s.new}>
          <Card product={el}  />
        </SwiperSlide>
      )
    })
  }

  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [sliderCount, setSliderCount] = useState<number>(4)
  const [pagination, setPagination] = useState<boolean>(false)

  const resize = (e: any) => {
    if(window){
      let currentHideNav = (window.innerWidth <= 575);
      currentHideNav ? setIsMobile(true) : setIsMobile(false)
      if(window.innerWidth > 1050){
        setSliderCount(4)
        setPagination(false)
      }else if(window.innerWidth <= 1050 && window.innerWidth > 700) {
        setSliderCount(3)
        setPagination(false)
      }else if(window.innerWidth <= 700 && window.innerWidth > 575) {
        setSliderCount(2)
        setPagination(false)
      }else if(window.innerWidth <= 575) {
        setSliderCount(1)
        setPagination(true)
      }
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
    <Layout>
      <Head>
        <title>{`${t('title')} | ™SHE`.replace('<!-\- -->','')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={t('meta.description')} />
      </Head>
      <div>
        <Swiper
          className={s.swiper}
          modules={[Pagination, Autoplay, Lazy]}
          lazy={true}
          loop={true}
          autoplay={{
            delay: 15000,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
          }}
        >
          {slides.length !== 0 && slides.map((el, index: number) => {
            return (
              <SwiperSlide style={
                {
                  background: `url(${API_BASE_URL+''+el.image})`,
                  backgroundSize: `cover`
                }} key={index} className={s.swiper__slide}>
                <div className={s.swiper__slide__wrapper}>
                  <p></p>
                  <div className={s.swiper__slide__title}>
                    <h1 className={s.swiper__slide__title__h1}>{el.title}</h1>
                  </div>
                  <div className={s.swiper__slide__about}>
                    <span></span>
                    {el.about && el.about !== '-' ? <p>{el.about}</p> : ''}
                  </div>
                  <div className={s.swiper__slide__footer}>
                    {el.data_finish && <p className={s.swiper__slide__footer__date}>
                      {t('sale')} {new Date(el.data_finish).toLocaleString().split(', ')[0]}
                    </p>}
                    {el.link && <Link onClick={(e)=>{
                      e.preventDefault()
                      dispatch(toggleShowModal(true))
                      dispatch(setModal({
                        type: 'default',
                        title: el.title,
                        desc: el.about,
                        link: el.link,
                      }))
                    }} href={''} className={s.swiper__slide__footer__btn}>
                      {t('more')}
                    </Link>}
                  </div>
                  <p></p>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        <Container className={s.container__relative} no_margin={true}>
          <div className={s.container__products}>
            <div className={s.container__products__header}>
              <div className={s.container__products__title}>
                <h1>{t('news')}</h1>
                <div className={s.new__block}>New</div>
              </div>
              <div className={s.container__products__title__arrows}>
                <div onClick={()=> {
                  // @ts-ignore
                  mySwiper.slidePrev()
                }} className={s.arrow_back}>
                  <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.6666 3.5C28.9428 3.5 29.1666 3.72386 29.1666 4C29.1666 4.27614 28.9428 4.5 28.6666 4.5V3.5ZM0.979738 4.35355C0.784477 4.15829 0.784477 3.84171 0.979738 3.64645L4.16172 0.464466C4.35698 0.269204 4.67356 0.269204 4.86883 0.464466C5.06409 0.659728 5.06409 0.976311 4.86883 1.17157L2.0404 4L4.86883 6.82843C5.06409 7.02369 5.06409 7.34027 4.86883 7.53553C4.67356 7.7308 4.35698 7.7308 4.16172 7.53553L0.979738 4.35355ZM28.6666 4.5H1.33329V3.5H28.6666V4.5Z" fill="black"/>
                  </svg>
                </div>
                <div onClick={()=> {
                  // @ts-ignore
                  mySwiper.slideNext()
                }} className={s.arrow_next}>
                  <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33331 3.5C1.05717 3.5 0.833313 3.72386 0.833313 4C0.833313 4.27614 1.05717 4.5 1.33331 4.5V3.5ZM29.0202 4.35355C29.2155 4.15829 29.2155 3.84171 29.0202 3.64645L25.8382 0.464466C25.643 0.269204 25.3264 0.269204 25.1311 0.464466C24.9359 0.659728 24.9359 0.976311 25.1311 1.17157L27.9595 4L25.1311 6.82843C24.9359 7.02369 24.9359 7.34027 25.1311 7.53553C25.3264 7.7308 25.643 7.7308 25.8382 7.53553L29.0202 4.35355ZM1.33331 4.5H28.6666V3.5H1.33331V4.5Z" fill="black"/>
                  </svg>
                </div>
              </div>
            </div>
            <Swiper
              className={s.swiper}
              modules={[Navigation, Pagination]}
              navigation={true}
              pagination={pagination && {
                clickable: true,
                bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
              }}
              slidesPerView={sliderCount}
              onInit={(ev) => {
                // @ts-ignore
                setMySwiper(ev)
              }}
            >
              {displaySlides(slidesNew)}
            </Swiper>
          </div>
          <div className={s.container__products}>
            <div className={s.container__products__header}>
              <div className={s.container__products__title}>
                <h1>{t('hits')}</h1>
                <div className={s.hit__block}>Hit</div>
              </div>
              <div className={s.container__products__title__arrows}>
                <div onClick={()=> {
                  // @ts-ignore
                  mySwiper2 && mySwiper2.slidePrev()
                }} className={s.arrow_back}>
                  <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.6666 3.5C28.9428 3.5 29.1666 3.72386 29.1666 4C29.1666 4.27614 28.9428 4.5 28.6666 4.5V3.5ZM0.979738 4.35355C0.784477 4.15829 0.784477 3.84171 0.979738 3.64645L4.16172 0.464466C4.35698 0.269204 4.67356 0.269204 4.86883 0.464466C5.06409 0.659728 5.06409 0.976311 4.86883 1.17157L2.0404 4L4.86883 6.82843C5.06409 7.02369 5.06409 7.34027 4.86883 7.53553C4.67356 7.7308 4.35698 7.7308 4.16172 7.53553L0.979738 4.35355ZM28.6666 4.5H1.33329V3.5H28.6666V4.5Z" fill="black"/>
                  </svg>
                </div>
                <div onClick={()=> {
                  // @ts-ignore
                  mySwiper2 && mySwiper2.slideNext()
                }} className={s.arrow_next}>
                  <svg width="30" height="8" viewBox="0 0 30 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.33331 3.5C1.05717 3.5 0.833313 3.72386 0.833313 4C0.833313 4.27614 1.05717 4.5 1.33331 4.5V3.5ZM29.0202 4.35355C29.2155 4.15829 29.2155 3.84171 29.0202 3.64645L25.8382 0.464466C25.643 0.269204 25.3264 0.269204 25.1311 0.464466C24.9359 0.659728 24.9359 0.976311 25.1311 1.17157L27.9595 4L25.1311 6.82843C24.9359 7.02369 24.9359 7.34027 25.1311 7.53553C25.3264 7.7308 25.643 7.7308 25.8382 7.53553L29.0202 4.35355ZM1.33331 4.5H28.6666V3.5H1.33331V4.5Z" fill="black"/>
                  </svg>
                </div>
              </div>
            </div>
            <Swiper
              className={s.new}
              modules={[Navigation, Pagination]}
              navigation={true}
              pagination={pagination && {
                clickable: true,
                bulletClass: `swiper-pagination-bullet swiper-pagination-testClass`
              }}
              slidesPerView={sliderCount}
              onInit={(ev) => {
                // @ts-ignore
                setMySwiper2(ev)
              }}
            >
              {displaySlides(slidesHit)}
            </Swiper>
          </div>
          <div className={s.container__imgs}>
            <div className={s.container__imgs__img + " " + s.container__imgs__img__img1}></div>
            <div className={s.container__imgs__img + " " + s.container__imgs__img__img2}></div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const slides = await fetch(`${API_BASE_URL}/${locale}/product/slider`)
  const products = await fetch(`${API_BASE_URL}/${locale}/product`)
  const productsData: IProduct[] = await products.json()
  const slidesData: ISlide[] = await slides.json()

  return {
    props: {
      slides: slidesData,
      slidesNew: productsData.filter(el => el.is_new).splice(0, 10),
      slidesHit: productsData.filter(el => el.is_hit).splice(0, 10),
      ...(await serverSideTranslations(locale as string ?? 'ru', ['main', 'common']))
    },
    revalidate: 10,
  }
}

export default Main