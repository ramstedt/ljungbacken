import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.a`
  width: 100px;
  height: 190px;
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
  img {
    object-fit: cover;
  }
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #1f1f1f;
  text-align: center;
  &:hover {
    color: #645757;
  }
  div {
    font-size: 0.7rem;
  }
`;
export default function StaffCard({ image, alt, name, title, slug }) {
  return (
    <Wrapper href={`/instruktor/${slug}`}>
      <ImageWrapper>
        <Image src={image} alt={alt} layout='fill' />
      </ImageWrapper>
      <Details>
        <h3>{name}</h3>
        <div>{title}</div>
      </Details>
    </Wrapper>
  );
}
