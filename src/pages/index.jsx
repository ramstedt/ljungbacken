import Hero from '@/src/components/Hero/Hero';
import Layout from '@/src/components/Layout/Layout';
import StaffCard from '../components/StaffCard/StaffCard';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <StaffCard />
    </Layout>
  );
}
