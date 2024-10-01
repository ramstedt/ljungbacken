import Navbar from '@/src/components/Navbar/Navbar';
import Head from 'next/head';
import styled from 'styled-components';
import Footer from '@/src/components/Footer/Footer';
import Hero from '../Hero/Hero';
import favicon from '@/public/images/favicon.ico';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100lvh;
`;

const Main = styled.main`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  margin: auto;
  gap: 2rem;
  padding: 0.5rem;
  width: 100%;
  max-width: 1024px;
`;

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Head>
        <title>Villa Ljungbacken</title>
        <link rel='icon' href='/images/favicon.ico' />
        <meta name='description' content='' />
        <meta name='keywords' content='' />
        <meta name='robots' content='index, follow' />
      </Head>
      <Navbar />
      <Hero />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  );
}
