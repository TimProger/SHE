import React, {FC} from 'react';
import {AppProps} from 'next/app';
import {wrapper} from "../store";
import '../styles/globals.scss'
import {appWithTranslation} from "next-i18next";

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(appWithTranslation(WrappedApp));