import React from 'react';
import styled from 'styled-components';
import Image1 from 'next/legacy/image';
import { motion } from 'framer-motion';

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 30vh;
  @media screen and (min-width: 768px) {
    height: 40vh;
  }
  @media screen and (min-width: 1020px) {
    height: 50vh;
  }
`;

const HeroImage = styled(Image1)`
  object-fit: cover;
  grid-area: 1 / 1 / 3 / 2;
`;

export default function Hero({ header }) {
  return (
    <Wrapper>
      <HeroImage
        src='/images/hero.jpg'
        alt='Description'
        layout='fill'
        priority={true}
      />
    </Wrapper>
  );
}
