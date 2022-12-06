import React, {useEffect} from 'react';
import {useTranslation} from "next-i18next";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {useRouter} from "next/router";
import BasketPage from "../components/pages/BasketPage";

const Basket: React.FC = () => {
  const { locale } = useRouter()
  const { t } = useTranslation()
  const translates = {
    title: t('basket:title'),
    title_1: t('basket:title_1'),
    title_2: t('basket:title_2'),
    clear: t('basket:clear'),
    selectAll: t('basket:selectAll'),
    total: t('basket:total'),
    productsToBuy: t('basket:productsToBuy'),
    buy: t('basket:buy'),
    empty: t('basket:empty'),
    back: t('basket:back'),
    toCatalogue: t('basket:toCatalogue'),
    order: {
      first: t('basket:order_first'),
      first_pl: t('basket:order_first_pl'),
      last: t('basket:order_last'),
      last_pl: t('basket:order_last_pl'),
      phone: t('basket:order_phone'),
      area: t('basket:order_area'),
      area_pl: t('basket:order_area_pl'),
      city: t('basket:order_city'),
      city_pl: t('basket:order_city_pl'),
      street: t('basket:order_street'),
      street_pl: t('basket:order_street_pl'),
      delivery: t('basket:order_delivery'),
      delivery_1: t('basket:order_delivery_1'),
      delivery_2: t('basket:order_delivery_2'),
      home: t('basket:order_home'),
      apartment: t('basket:order_apartment'),
      radio_1: t('basket:order_radio_1'),
      radio_2: t('basket:order_radio_2'),
      radio_3: t('basket:order_radio_3'),
      radio_4: t('basket:order_radio_4'),
      about_delivery: t('basket:order_about_delivery'),
      about_payment: t('basket:order_about_payment'),
      payment: t('basket:order_payment'),
      products: t('basket:order_products'),
      payment_methods: t('basket:order_payment_methods')
    },
  }

  useEffect(()=>{

  }, [])

  return (
    <BasketPage
      translates={translates}
    />
  );
};

export const getStaticProps: GetStaticProps = async ({locale}) => {
  return {
    props:{
      ...(await serverSideTranslations(locale as string, ['basket', 'auth', 'common', 'footer']))
    },
    revalidate: 10
  }
}

export default Basket;