import Navbar from '@/components/Navbar/Navbar';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Ljungbacken</title>
        <link rel='icon' href='' />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='robots' content='index, follow' />
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
