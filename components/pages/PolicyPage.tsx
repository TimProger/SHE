import Layout from "../../layout/layout";
import s from '../../styles/pages/policy.module.scss'
import {useRouter} from "next/router";
import React from "react";
import Container from "../../components/Container";
import Head from "next/head";
import {useAppDispatch} from "../../hooks/useTypedDispatch";

interface IPolicyData {
  id: number;
  title: string;
  text: string;
}

interface IPolicyPageProps {
  translates: any;
  data: IPolicyData[],
}

const PolicyPage: React.FC<IPolicyPageProps> = ({translates, data}) => {
  const { locale } = useRouter()
  const dispatch = useAppDispatch()

  function urlify(text: any) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlRegex, function(url: any) {
      return '<a href="' + url + '">' + url + '</a>';
    })
    // or alternatively
    // return text.replace(urlRegex, '<a href="$1">$1</a>')
  }

  return (
    <Layout btns={translates.header} links={translates.footer.links} titles={translates.footer.titles} auth={translates.auth}>
      <Head>
        <title>{translates.title} | ™SHE</title>
      </Head>
      <div>
        <Container>
          <div className={s.policy}>
            <h1>{translates.title}</h1>
            <ul>
              {data.map((el, index)=>{
                let html = urlify(el.text);
                return <div>
                  <li><h2>{el.title}</h2></li>
                  <p dangerouslySetInnerHTML={{ __html: html }} />
                </div>
              })}
            </ul>
          </div>
        </Container>
      </div>
    </Layout>
  )
}

export default PolicyPage