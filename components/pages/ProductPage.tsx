import Layout from "../../layout/layout";
import styles from '../../styles/main/main.module.scss'
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Container from "../../components/Container";

function Product({translates, todo}: any) {
  const { locale } = useRouter()

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles}>
      <div>
        <Container>
          <div className={styles.container__balls}>
            <div className={styles.container__balls__header}>
              {todo.title}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default Product