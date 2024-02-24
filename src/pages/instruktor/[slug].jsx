import { useRouter } from 'next/router';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import Layout from '@/src/components/Layout/Layout';
import Header from '@/src/components/_atoms/Header/Header';
import CoursesWrapper from '@/src/components/CoursesWrapper/CoursesWrapper';
import CourseCard from '@/src/components/CourseCard/CourseCard';
import SanityBlockContent from '@sanity/block-content-to-react';
import Image from 'next/image';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 300px;
  @media screen and (min-width: 768px) {
    max-width: 50%;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  min-height: 320px;
  position: relative;

  img {
    object-fit: scale-down;
  }
`;

const Button = styled.a`
  max-width: 100px;
  padding: 0.2rem;
  background: #444c41;
  color: white;
  border-style: solid;
  border-color: #444c41;
  text-align: center;
  &:hover {
    color: #444c41;
    background: #f1f3f0;
  }
  &::after {
    border-bottom: none;
  }
`;

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function InstructorPage() {
  const router = useRouter();
  const { slug } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [instructor, setInstructor] = useState(null);

  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      const query = `*[_type == "employee" && slug.current == $slug][0]`;
      client
        .fetch(query, { slug: slug })
        .then((data) => {
          if (!data) {
            router.replace('/404');
          } else {
            setInstructor(data);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setIsLoading(false);
        });
    }
  }, [slug, router]);

  if (isLoading) return <div></div>;
  return (
    <Layout>
      <Wrapper>
        <Header>
          <Content>
            <h1>{instructor && instructor.name}</h1>
            <SanityBlockContent blocks={instructor && instructor.bio} />
          </Content>
        </Header>
        <ImageWrapper>
          <Image
            src={instructor.image && urlFor(instructor.image).url()}
            alt={instructor.image.alt}
            layout='fill'
          />
        </ImageWrapper>
      </Wrapper>
    </Layout>
  );
}
