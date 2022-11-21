import { GetStaticProps } from 'next'
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useTranslation} from "next-i18next";
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import {IProduct, ISlide} from "../types/Product.types";
import MainPage from "../components/pages/MainPage";

export const getStaticProps: GetStaticProps = async ({locale}) => {
  let slides = [
    {
      title: `Обложка для
новостей и рекламы
будет выглядеть так!`,
      image: null,
      date: '01.01.23',
      id: 2
    },
    {
      title: 'daw',
      date: '20.12.22',
      image: null,
      id: 2
    },
    {
      title: 'daw',
      date: '13.12.22',
      image: null,
      id: 2
    },
    {
      title: 'daw',
      date: '25.12.22',
      image: null,
      id: 2
    },
  ]
  let slidesNew = [
    {
      isNew: true,
      isHit: false,
      isFav: false,
      discount: null,
      image: 'https://sun9-35.userapi.com/impg/2iloIEk0otsIlhnpGDNMug2f8b8EC0ycfHOVQQ/jtLn6j5CLOk.jpg?size=272x290&quality=96&sign=9449dd0515970b27587dbf16b931b226&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 0
    },
    {
      isNew: true,
      isHit: false,
      isFav: false,
      discount: 27,
      image: 'https://sun9-28.userapi.com/impg/HRcq2amtnKncBqj0ek6OBu7LmuggKWlm2llS5w/ws0TNam4kO4.jpg?size=272x290&quality=96&sign=50ed80ecde53f9d5389d8477af7cd7c7&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 1
    },
    {
      isNew: true,
      isHit: false,
      isFav: true,
      discount: 50,
      image: 'https://sun9-35.userapi.com/impg/2iloIEk0otsIlhnpGDNMug2f8b8EC0ycfHOVQQ/jtLn6j5CLOk.jpg?size=272x290&quality=96&sign=9449dd0515970b27587dbf16b931b226&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 2
    },
    {
      isNew: true,
      isHit: false,
      isFav: false,
      discount: 17,
      image: 'https://sun9-28.userapi.com/impg/HRcq2amtnKncBqj0ek6OBu7LmuggKWlm2llS5w/ws0TNam4kO4.jpg?size=272x290&quality=96&sign=50ed80ecde53f9d5389d8477af7cd7c7&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 3
    },
  ]
  let slidesHit = [
    {
      isNew: false,
      isHit: true,
      isFav: true,
      discount: null,
      image: 'https://sun9-35.userapi.com/impg/2iloIEk0otsIlhnpGDNMug2f8b8EC0ycfHOVQQ/jtLn6j5CLOk.jpg?size=272x290&quality=96&sign=9449dd0515970b27587dbf16b931b226&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 0
    },
    {
      isNew: false,
      isHit: true,
      isFav: false,
      discount: 17,
      image: 'https://sun9-28.userapi.com/impg/HRcq2amtnKncBqj0ek6OBu7LmuggKWlm2llS5w/ws0TNam4kO4.jpg?size=272x290&quality=96&sign=50ed80ecde53f9d5389d8477af7cd7c7&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 1
    },
    {
      isNew: false,
      isHit: true,
      isFav: true,
      discount: null,
      image: 'https://sun9-35.userapi.com/impg/2iloIEk0otsIlhnpGDNMug2f8b8EC0ycfHOVQQ/jtLn6j5CLOk.jpg?size=272x290&quality=96&sign=9449dd0515970b27587dbf16b931b226&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 2
    },
    {
      isNew: false,
      isHit: true,
      isFav: false,
      discount: null,
      image: 'https://sun9-28.userapi.com/impg/HRcq2amtnKncBqj0ek6OBu7LmuggKWlm2llS5w/ws0TNam4kO4.jpg?size=272x290&quality=96&sign=50ed80ecde53f9d5389d8477af7cd7c7&type=album',
      title: 'Гель-лак SHE 2003',
      price: 430,
      id: 3
    },
  ]
  return {
    props:{
      slides,
      slidesNew,
      slidesNew2: slidesHit,
      ...(await serverSideTranslations(locale as string, ['main', 'header', 'footer']))
    }
  }
}

function Main({slides, slidesNew, slidesNew2}: any) {
  const { locale } = useRouter()
  const { t } = useTranslation()

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

  return (<MainPage translates={translates} slides={slides} slidesNew={slidesNew} slidesNew2={slidesNew2} />)
}

export default Main