import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.a`
  width: 100px;
  height: 210px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
`;

const ImageWrapper = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: black;
  &:hover {
    color: grey;
  }
`;
export default function StaffCard({ image, alt, name, title, slug }) {
  return (
    <Wrapper href={`medarbetare/${slug}`}>
      <ImageWrapper>
        <Image src={image} alt={alt} layout='fill' />
      </ImageWrapper>
      <Details>
        <h3>{name}</h3>
        <h4>{title}</h4>
      </Details>
    </Wrapper>
  );
}
