import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.a`
  width: 260px;
  height: 125px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  justify-items: end;
  margin: auto;
  @media screen and (min-width: 425px) {
    width: 360px;
    height: 225px;
  }
  @media screen and (min-width: 2560px) {
    width: 460px;
    height: 325px;
  }
`;

const ImageWrapper = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  background: black;
`;

const Text = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  padding: 1rem;
  z-index: 100;
  display: flex;
  align-items: flex-end;
  h3 {
    width: fit-content;
    padding: 0.5rem;
    border-radius: 5%;
    background: #00000062;
  }
  h3 a {
    color: white;
  }
`;
export default function CourseCard() {
  return (
    <Wrapper href='' className='noHover'>
      <ImageWrapper>
        <Image src='/images/hero.jpg' alt='' layout='fill' />
      </ImageWrapper>
      <Text>
        <h3>
          <Link href=''>Kursnamn</Link>
        </h3>
      </Text>
    </Wrapper>
  );
}
