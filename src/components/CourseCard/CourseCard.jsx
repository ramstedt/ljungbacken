import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled(Link)`
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

  &:hover {
    img {
      transform: scale(1.1);
      transition: transform 0.3s ease-in-out;
    }
  }

`;

const ImageWrapper = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  overflow: hidden;
`;

const Text = styled.div`
  grid-area: 2 / 1 / 3 / 2;
  padding: 1rem;
  display: flex;
  align-items: flex-end;
  h3 {
    width: fit-content;
    padding: 0.5rem;
    border-radius: 5%;
    background: #00000062;
    z-index: 100;
    color: #fdfffb;
  }
`;
export default function CourseCard({ name, image, alt, slug }) {
  return (
    <Wrapper href={slug}>
      <ImageWrapper>
        {image ? (
          <Image src={image} alt={alt} layout='fill' objectFit='cover' />
        ) : null}
      </ImageWrapper>
      <Text>
        <h3>{name}</h3>
      </Text>
    </Wrapper>
  );
}
