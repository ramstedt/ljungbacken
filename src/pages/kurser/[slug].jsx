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
    max-width: 90%;
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
  width: fit-content;
  padding: 0.3rem 1rem 0.3rem 1rem;
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

export default function CoursePage() {
  const router = useRouter();
  const { slug } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [courses, setCourses] = useState(null);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      Promise.all([client.fetch(`*[_type == "course"]`)])
        .then(([coursesData]) => {
          if (!coursesData) {
            router.replace('/404');
          } else {
            setCourses(coursesData);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setIsLoading(false);
        });
    }
  }, [slug, router]);

  useEffect(() => {
    if (courses) {
      courses.forEach((course) => {
        if (course.slug.current === slug) {
          setSelectedCourse(course);
        }
      });
      setIsLoading(false);
    }
  }, [courses, slug]);

  if (isLoading) return <div></div>;
  return (
    <Layout>
      <Wrapper>
        <Header>
          <Content>
            <h1>{selectedCourse && selectedCourse.name}</h1>
            <div>
              <div>
                <small>
                  Instruktör: {selectedCourse && selectedCourse.instructor}
                </small>
              </div>
              <div>
                <small>När: {selectedCourse && selectedCourse.startDate}</small>
              </div>
              <div>
                <small>
                  Antal timmar: {selectedCourse && selectedCourse.hour} h
                </small>
              </div>
              <div>
                <small>Pris: {selectedCourse && selectedCourse.price} kr</small>
              </div>
              <div>
                <small>
                  Antal platser: {selectedCourse.seats}{' '}
                  {selectedCourse.freeSeats === 0
                    ? '(Fullbokat)'
                    : `(${selectedCourse.freeSeats} lediga)`}
                </small>
              </div>
            </div>
            <div>
              <SanityBlockContent
                blocks={selectedCourse && selectedCourse.description}
              />
            </div>
            <Button
              href='/kurser/boka'
              className={selectedCourse.freeSeats === 0 ? 'disabled' : null}
            >
              {selectedCourse.freeSeats === 0
                ? 'Kursen är för tillfället fullbokad'
                : 'Boka Kurs'}
            </Button>
          </Content>
        </Header>
        <ImageWrapper>
          <Image
            src={selectedCourse.image && urlFor(selectedCourse.image).url()}
            alt={selectedCourse.image.alt}
            layout='fill'
          />
        </ImageWrapper>
      </Wrapper>
      <hr />
      <h2>Kurser</h2>
      <CoursesWrapper>
        {courses &&
          courses.map((course, key) => {
            return (
              <CourseCard
                key={key}
                name={course.name}
                slug={course.slug.current}
                image={course.image && urlFor(course.image).url()}
                alt={course.image.alt}
              />
            );
          })}
      </CoursesWrapper>
    </Layout>
  );
}
