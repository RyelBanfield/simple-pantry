/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SessionProvider } from 'next-auth/react';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <SessionProvider session={pageProps.session}>
    <Head>
      <title>Simple Pantry</title>
      <meta name="description" content="Your pantry shopping made simple." />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Component {...pageProps} />
  </SessionProvider>
);

export default MyApp;
