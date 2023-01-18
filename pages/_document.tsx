// @ts-nocheck
import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {

  return (
    <Html>
      <Head>
        <meta name={"viewport"} content={"width=device-width, initial-scale=1"} />
        <meta httpEquiv={'Content-Type'} content={"text/html; charset=utf-8"} />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="robots" content="index, follow"/>
      </Head>
      <body>
      <Main />
      <NextScript />
      <script
        dangerouslySetInnerHTML={{
          __html: `
                (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
      
                ym(92105532, "init", {
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            `,
        }}
      />
      <noscript>
        <div>
          <img src="https://mc.yandex.ru/watch/12345678" style={{ position:'absolute', left:'-9999px' }} alt="" />
        </div>
      </noscript>
      </body>
    </Html>
  )
}