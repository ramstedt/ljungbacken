import Hero from '@/src/components/Hero/Hero';
import Layout from '@/src/components/Layout/Layout';
import StaffCard from '../components/StaffCard/StaffCard';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';

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
      {staff.map((employee, key) => {
        return <StaffCard key={key} />;
      })}
    </Layout>
  );
}
