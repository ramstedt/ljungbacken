import Layout from '@/src/components/Layout/Layout';
import StaffCard from '@/src/components/StaffCard/StaffCard';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import CourseCard from '@/src/components/CourseCard/CourseCard';
import imageUrlBuilder from '@sanity/image-url';
import CoursesWrapper from '@/src/components/CoursesWrapper/CoursesWrapper';
import SanityBlockContent from '@sanity/block-content-to-react';
import styled from 'styled-components';
import Header from '@/src/components/_atoms/Header/Header';
const StaffWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
  }
`;

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Home() {
  const [staff, setStaff] = useState(null);
  const [instructors, setInstructors] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      client.fetch(`*[_type == "employee"]`),
      client.fetch(`*[_type == "instructors"]`),
    ])
      .then(([staffData, instructorsData]) => {
        setStaff(staffData);
        setInstructors(instructorsData[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (isLoading) return <div></div>;

  return (
    <Layout>
      <Header>
        <h1>{instructors.title}</h1>
        <SanityBlockContent blocks={instructors && instructors.text} />
        <StaffWrapper>
          {staff.map((employee, key) => {
            return (
              <StaffCard
                key={key}
                image={employee.image && urlFor(employee.image).url()}
                alt={employee.image.alt}
                name={employee.name}
                title={employee.jobtitle}
                slug={employee.slug.current}
              />
            );
          })}
        </StaffWrapper>
      </Header>
    </Layout>
  );
}
