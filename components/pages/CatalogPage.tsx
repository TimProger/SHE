import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Layout from "../../layout/layout";
import "swiper/css";
import "swiper/css/pagination";
import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Lazy, Navigation, Pagination} from "swiper";
import s from "../../styles/pages/main.module.scss";
import Container from "../Container";
import Card from "../Card";
import Head from "next/head";
import {IProduct, ISlide} from "../../types/Product.types";
import {API_BASE_URL} from "../../http/api";
import {toggleFav} from "../../store/Slices/Fav.slice";
import {useAppDispatch} from "../../hooks/useTypedDispatch";

interface IMainProps {
  translates: any;
}

const CatalogPage: React.FC<IMainProps> = ({translates}) => {
  const { locale, query } = useRouter()
  const dispatch = useAppDispatch()

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles} auth={translates.auth}>
      <Head>
        <title>{translates.title} | ™SHE</title>
      </Head>
      <div>
        <Container>
          Cata
        </Container>
      </div>
    </Layout>
  )
}

export default CatalogPage