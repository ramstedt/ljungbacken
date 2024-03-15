import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import imageUrlBuilder from '@sanity/image-url';
import { client } from '@/sanity/lib/client';
import { useState } from 'react';
import Modal from 'react-modal';
import { getImageDimensions } from '@sanity/asset-utils';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  position: relative;
  overflow: hidden;

  img {
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.5s ease-in-out;
  }

  img:hover {
    transform: scale(1.2);
  }
`;

const customStyles = {
  content: {
    position: 'absolute',
    zIndex: '999',
    cursor: 'pointer',
    border: 'none',
  },
};
function GalleryModal({ image }) {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {}

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <ImageWrapper width='292' height='195'>
      <Image
        src={image.image && urlFor(image.image).url()}
        alt={image.alt}
        layout='fill'
        onClick={openModal}
      />
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel={image.alt}
        style={customStyles}
      >
        <Image
          src={image.image && urlFor(image.image).url()}
          alt={image.alt}
          layout='fill'
          style={{ objectFit: 'none' }}
          sizes='(max-width: 80vw)'
          onClick={closeModal}
        />
      </Modal>
    </ImageWrapper>
  );
}

export default function GalleryComponent({ images }) {
  return (
    <Wrapper>
      {images &&
        images.map((image, key) => {
          return <GalleryModal key={key} image={image} />;
        })}
    </Wrapper>
  );
}
