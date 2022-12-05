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
  coop: any;
}

const CoopPage: React.FC<IProductPageProps> = ({translates, coop}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  const [showAuth, setShowAuth] = useState(false)

  return (
    <>
      <Partnership translates={translates.partnership} show={showAuth} setShow={setShowAuth} />
      <Layout>
        <Head>
          <title>{translates.title} | ™SHE</title>
        </Head>
        <div className={s.coop}>
          <Container>
            <h2 className={s.coop__title}>{coop.partnership}</h2>
          </Container>
          <div className={s.coop__imgBackGround}></div>
          <Container>
            <div className={s.coop__body}>
              <div className={s.coop__body__specialСonditions}>
                <h2>{coop.title1}</h2>
                <div className={s.coop__body__specialСonditions__description}>{coop.paragraph_1}
                </div>
                <div className={s.coop__body__specialСonditions__discounts}>
                  <div>
                    <div className={s.coop__body__specialСonditions__discounts__title}>{coop.discount1}</div>
                    <ul className={s.coop__body__specialСonditions__discounts__first}>
                      <li>30%</li>
                      <li>20%</li>
                      <li>15%</li>
                      <li>10%</li>
                    </ul>
                  </div>
                  <div>
                    <div className={s.coop__body__specialСonditions__discounts__title}>{coop.discount2}</div>
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
                <h2 className={s.coop__body__request__title}>{coop.title2}</h2>
                <div className={s.coop__body__specialСonditions__description}>{coop.paragraph_2}
                </div>
                <Button text={coop.button} onClick={() => setShowAuth(true)}/>
                <div className={s.coop__body__request__contacts}>{coop.connect}</div>
              </div>
            </div>
          </Container>
        </div>
      </Layout>
    </>
  )
}

export default CoopPage