import React from 'react';
import Head from 'next/head';

import {PRIMARY_COLOR, DEFAULT_BG, DARKMODE_BG} from '../const';

const Layout = ({children}) => (
  <>
    <Head>
      <title key="title">Kevin Lee 李夢遠 @mngyuan</title>
      <meta
        property="og:description"
        content="Design technologist. Currently in New York. RCA, Facebook, Cal alum"
        key="og-description"
      />
      <meta
        property="og:title"
        content="Kevin Lee 李夢遠 @mngyuan"
        key="og-title"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <main className="centered">{children}</main>
    <style jsx global>{`
      html {
        font-family: 'Space Mono', 'Noto Sans Mono CJK SC', monospace;
        background: ${DEFAULT_BG};
        color: black;
      }

      ::selection {
        background: ${PRIMARY_COLOR};
        color: white;
      }

      .centered {
        padding-top: 14vh;
        margin: 0 auto;
        width: 80vw;
      }

      /*
      @media (prefers-color-scheme: dark) {
        html {
          background: ${DARKMODE_BG};
          color: white;
        }
        ::selection {
          color: black;
        }
      }
      */

      @media screen and (min-width: 640px) {
        .centered {
          padding-top: 24vh;
          width: 64vw;
        }
      }
    `}</style>
  </>
);

export default Layout;
