// @ts-nocheck
import { Html, Head, Main, NextScript } from 'next/document'
import React from "react";

export default function Document() {

  return (
    <Html>
      <Head>
        <meta name={"viewport"} content={"width=device-width, initial-scale=1"} />
        <meta httpEquiv={'Content-Type'} content={"text/html; charset=utf-8"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script dangerouslySetInnerHTML={{
          __html: `
          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

          ym(92586797, "init", {
                clickmap: true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
          });`}} />
        <script dangerouslySetInnerHTML={{
          __html: `
           (function(w,d,u){
                var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/60000|0);
                var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
        })(window,document,'https://cdn-ru.bitrix24.ru/b25708846/crm/site_button/loader_4_dkngi4.js');`}} />
        <noscript>
          <div>
            <img src="https://mc.yandex.ru/watch/92586797" style={{ position: 'absolute', left: '-9999px' }} alt="" />
          </div>
        </noscript>
      </body>
    </Html>
  )
}