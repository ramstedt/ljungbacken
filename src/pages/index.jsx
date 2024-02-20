import Hero from '@/src/components/Hero/Hero';
import Layout from '@/src/components/Layout/Layout';
import StaffCard from '../components/StaffCard/StaffCard';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard/CourseCard';
import styled from 'styled-components';

const CoursesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 360px);
    gap: 2rem;
    margin: auto;
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 360px);
  }
  @media screen and (min-width: 2560px) {
    grid-template-columns: repeat(5, 460px);
  }
`;

export default function Home() {
  const [staff, setStaff] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    client
      .fetch(`*[_type == "employee"]`)
      .then((data) => {
        setStaff(data);
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
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </CoursesWrapper>
      {/* {staff.map((employee, key) => {
        return <StaffCard key={key} />;
      })} */}
    </Layout>
  );
}
