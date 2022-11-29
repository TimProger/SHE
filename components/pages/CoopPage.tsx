import Layout from "../../layout/layout";
import s from '../../styles/pages/coop.module.scss'
import {useRouter} from "next/router";
import React, { useState } from "react";
import Container from "../../components/Container";
import Head from "next/head";
import {useAppDispatch} from "../../hooks/useTypedDispatch";
import coopDescriptionImg from '../../public/images/coopDescription.png'
import Button from "../Button";
import Partnership from "../Partnership";

interface IProductPageProps {
  translates: any;
}

const CoopPage: React.FC<IProductPageProps> = ({translates}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const [showAuth, setShowAuth] = useState(false)

  return (
    <>
      <Partnership translates={translates.partnership} show={showAuth} setShow={setShowAuth} />
      <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles} auth={translates.auth}>
        <Head>
          <title>{translates.title} | ™SHE</title>
        </Head>
        <div className={s.coop}>
          <Container>
            <h2 className={s.coop__title}>Сотрудничество</h2>
          </Container>
          <div className={s.coop__imgBackGround}></div>
          <Container>
            <div className={s.coop__body}>
              <div className={s.coop__body__specialСonditions}>
                <h2>Оптовые условия</h2>
                <div className={s.coop__body__specialСonditions__description}>Мы предоставляем оптовые условия сотрудничества для студий, школ и магазинов.
                  При оптовом сотрудничестве мы предоставляем:
                </div>
                <div className={s.coop__body__specialСonditions__discounts}>
                  <div>
                    <div className={s.coop__body__specialСonditions__discounts__title}>Скидка</div>
                    <ul className={s.coop__body__specialСonditions__discounts__first}>
                      <li>30%</li>
                      <li>20%</li>
                      <li>15%</li>
                      <li>10%</li>
                    </ul>
                  </div>
                  <div>
                    <div className={s.coop__body__specialСonditions__discounts__title}>Заказ от</div>
                    <ul className={s.coop__body__specialСonditions__discounts__second}>
                      <li>40.000₽</li>
                      <li>30.000₽</li>
                      <li>20.000₽</li>
                      <li>10.000₽</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={s.coop__body__request}>
                <div className={s.coop__body__request__img}>
                  <img src={coopDescriptionImg.src} alt="coopDescriptionImage" />
                </div>
                <h2 className={s.coop__body__request__title}>Преставитель TM SHE</h2>
                <div className={s.coop__body__specialСonditions__description}>Как стать ЭКСКЛЮЗИВНЫМ представителем TM SHE в Вашем городе? Для получения подробной информации по условиям представительства Вам нужно заполнить форму "Отправить заявку" и мы свяжемся с Вами в течении часа.
                </div>
                <Button text="Отправить заявку" onClick={() => setShowAuth(true)}/>
                <div className={s.coop__body__request__contacts}>Или Вы можете обратиться непосредственно к менеджеру по телефону +7 (915) 565-20-27</div>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  )
}

export default CoopPage