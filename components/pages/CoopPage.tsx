import Layout from "../../layout/layout";
import s from '../../styles/pages/coop.module.scss'
import {useRouter} from "next/router";
import React from "react";
import Container from "../../components/Container";
import Head from "next/head";
import {useAppDispatch} from "../../hooks/useTypedDispatch";

interface IProductPageProps {
  translates: any;
}

const Product: React.FC<IProductPageProps> = ({translates}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles}>
      <Head>
        <title>{translates.title} | ™SHE</title>
      </Head>
      <div>
        <Container>

        </Container>
      </div>
    </Layout>
  )
}

export default Product