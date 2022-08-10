import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Simple Pantry</title>
      <meta name="description" content="Your pantry made simple" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="h-screen grid place-content-center">
      <h1 className="text-3xl font-bold">Hello World!</h1>
    </main>
  </>
);

export default Home;
