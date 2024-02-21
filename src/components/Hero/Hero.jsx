import styled from 'styled-components';
import Image1 from 'next/legacy/image';

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
    </Wrapper>
  );
}
