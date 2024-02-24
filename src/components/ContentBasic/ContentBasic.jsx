import styled from 'styled-components';
import Header from '../_atoms/Header/Header';
import SanityBlockContent from '@sanity/block-content-to-react';
import Image from 'next/image';

const Wrapper = styled.div``;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    margin: 1rem 0 1rem 0;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const Text = styled.div`
  @media screen and (min-width: 768px) {
    max-width: 40%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: auto;
  min-height: 200px;
  img {
    object-fit: cover;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

export default function ContentBasic({ title, text, image, alt }) {
  return (
    <Wrapper>
      <Header>
        <h1>{title}</h1>
      </Header>
      <Content>
        {image ? (
          <ImageWrapper>
            <Image src={image} alt={alt} layout='fill' />
          </ImageWrapper>
        ) : null}
        <Text>
          <SanityBlockContent blocks={text} />
        </Text>
      </Content>
    </Wrapper>
  );
}
