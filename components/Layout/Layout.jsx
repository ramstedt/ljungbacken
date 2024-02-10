import Navbar from '@/components/Navbar/Navbar';
import Head from 'next/head';
import styled from 'styled-components';

const Main = styled.main`
  padding-top: 68px;
`;

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
      <Main>{children}</Main>
    </>
  );
}
