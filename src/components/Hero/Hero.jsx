import React from 'react';
import styled from 'styled-components';
import Image1 from 'next/legacy/image';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 30vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  @media screen and (min-width: 768px) {
    height: 40vh;
  }
  @media screen and (min-width: 1020px) {
    height: 50vh;
  }
`;

const Text = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  z-index: 10;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: fit-content;
  color: black;
  background: rgb(255, 255, 255);
`;

const HeroImage = styled(Image1)`
  object-fit: cover;
  grid-area: 1 / 1 / 3 / 2;
`;

const Header = styled(motion.h1)`
  padding: 0.3rem;
  margin: 0;
  max-width: 1024px;
  margin-left: 0.7rem;
`;

export default function Hero() {
  return (
    <Wrapper>
      <HeroImage
        src='/images/hero.jpg'
        alt='Description'
        layout='fill'
        priority={true}
      />
      <Text>
        <Header
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          Konstnärlig frizon och gemenskap
        </Header>
      </Text>
    </Wrapper>
  );
}
