import Image from 'next/image';
import styled from 'styled-components';

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

const HeroImage = styled(Image)`
  object-fit: cover;
`;
export default function Hero() {
  return (
    <Wrapper>
      <HeroImage src='/images/hero.jpg' alt='Description' layout='fill' />
    </Wrapper>
  );
}
