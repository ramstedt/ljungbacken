import Hero from '@/src/components/Hero/Hero';
import Layout from '@/src/components/Layout/Layout';
import StaffCard from '../components/StaffCard/StaffCard';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard/CourseCard';
import styled from 'styled-components';
import imageUrlBuilder from '@sanity/image-url';

const CoursesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 225px);
    gap: 2rem;
    margin-left: auto;
    margin-right: auto;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 225px);
  }
`;

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Home() {
  const [staff, setStaff] = useState(null);
  const [courses, setCourses] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      client.fetch(`*[_type == "employee"]`),
      client.fetch(`*[_type == "course"]`),
    ])
      .then(([staffData, coursesData]) => {
        setStaff(staffData);
        setCourses(coursesData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (isLoading) return <div></div>;

  return (
    <Layout>
      <Hero />
      <CoursesWrapper>
        {courses.map((course, key) => {
          {
            console.log(course.slug.current);
          }
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
      {/* {staff.map((employee, key) => {
        return <StaffCard key={key} />;
      })} */}
    </Layout>
  );
}
