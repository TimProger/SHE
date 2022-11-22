import Layout from "../../layout/layout";
import styles from '../../styles/product/product.module.scss'
import {useRouter} from "next/router";
import React from "react";
import Container from "../../components/Container";
import Head from "next/head";
import {IProduct} from "../../types/Product.types";
import {API_BASE_URL} from "../../http/api";

interface IProductPageProps {
  translates: any;
  todo: IProduct;
}

const Product: React.FC<IProductPageProps> = ({translates, todo}) => {
  const { locale } = useRouter()

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles}>
      <Head>
        <title>{todo.name} | ™SHE</title>
      </Head>
      <div>
        <Container>
          <div className={styles.container__product}>
            <div className={styles.container__product__header}>
              <div className={styles.container__product__header__path}>
                Главная / Каталог / {todo.type} / {todo.name}
              </div>
              <article className={styles.container__product__header__article}>
                Артикул
              </article>
            </div>
            <div className={styles.container__product__product}>
              <div className={styles.container__product__product__images}>
                <div className={styles.container__product__product__images__slider}></div>
                <div className={styles.container__product__product__images__main}>
                  <div className={styles.container__product__product__images__main__tags}>
                    {todo.is_new && <div className={styles.container__product__product__images__main__new}>New</div>}
                    {!todo.is_hit && <div className={styles.container__product__product__images__main__hit}>Hit</div>}
                  </div>
                  <img src={todo.image ?`${API_BASE_URL}${todo.image}` : ''} alt={todo.name}/>
                </div>
              </div>
              <div className={styles.container__product__product__info}>
                <div>
                  <h1 className={styles.container__product__product__info__name}>ГЕЛЬ-ЛАК ™SHE 203 «ELIZABETH»</h1>
                  <p className={styles.container__product__product__info__about}>Гель-лак с шиммером</p>
                </div>
                <p className={styles.container__product__product__info__color}>Оттенок:
                  <span style={{background: todo.color}} className={styles.container__product__product__info__color__block} />
                </p>
                <div className={styles.container__product__product__info__size}>
                  <p>Объем, мл:</p>
                  <div className={styles.container__product__product__info__size__container}>
                    <div>
                      10
                    </div>
                    <div>
                      20
                    </div>
                    <div>
                      30
                    </div>
                  </div>
                </div>
                <div className={styles.container__product__product__info__price}>
                  <p>{todo.price}₽</p>
                </div>
                <div className={styles.container__product__product__info__button}>
                  <div className={styles.container__product__product__info__button__add}>Добавить в корзину</div>
                  <div className={styles.container__product__product__info__button__fav}>
                    <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.1721 11.1855L12.0102 20L2.84826 11.1855M2.84826 11.1855C2.24395 10.6143 1.76794 9.9277 1.45021 9.16898C1.13248 8.41026 0.979915 7.59585 1.00212 6.77704C1.02432 5.95822 1.22081 5.15275 1.57922 4.41133C1.93763 3.66991 2.45019 3.0086 3.08462 2.46906C3.71905 1.92952 4.46162 1.52343 5.26555 1.27636C6.06949 1.02929 6.91738 0.94659 7.75583 1.03347C8.59429 1.12036 9.40514 1.37494 10.1373 1.78119C10.8695 2.18744 11.5072 2.73656 12.0102 3.39396C12.5153 2.74133 13.1538 2.19701 13.8854 1.79507C14.6171 1.39313 15.4263 1.14223 16.2624 1.05806C17.0985 0.973891 17.9435 1.05827 18.7445 1.30592C19.5455 1.55357 20.2853 1.95915 20.9175 2.49729C21.5497 3.03542 22.0607 3.69453 22.4186 4.43335C22.7766 5.17217 22.9736 5.9748 22.9975 6.79101C23.0214 7.60722 22.8716 8.41944 22.5575 9.17683C22.2434 9.93422 21.7718 10.6205 21.1721 11.1927" stroke="#A0A0A0" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Product