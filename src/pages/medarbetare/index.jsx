import Layout from '@/src/components/Layout/Layout';
import StaffCard from '../components/StaffCard/StaffCard';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import styled from 'styled-components';
const StaffWrapper = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
`;

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Home() {
  const [staff, setStaff] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([client.fetch(`*[_type == "employee"]`)])
      .then(([staffData]) => {
        setStaff(staffData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  if (isLoading) return <div></div>;

  return (
    <Layout header='{home.title}'>
      <StaffWrapper>
        {staff.map((employee, key) => {
          return (
            <StaffCard
              key={key}
              image={employee.image && urlFor(employee.image).url()}
              alt={employee.image.alt}
              name={employee.name}
              title={employee.title}
              slug={employee.slug.current}
            />
          );
        })}
      </StaffWrapper>
    </Layout>
  );
}
