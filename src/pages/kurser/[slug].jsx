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
  width: 400px;
  height: auto;
  position: relative;

  img {
    object-fit: cover;
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
                  Start: {selectedCourse && selectedCourse.startDate}
                </small>
              </div>
              <div>
                <small>
                  {selectedCourse.freeSeats === 0
                    ? 'Fullbokat'
                    : ` Antal platser: ${selectedCourse.seats} (
                  ${selectedCourse.freeSeats} lediga)`}
                </small>
              </div>
            </div>
            <div>
              <SanityBlockContent
                blocks={selectedCourse && selectedCourse.description}
              />
            </div>
            {selectedCourse.freeSeats === 0 ? null : <div>Boka knapp</div>}
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
