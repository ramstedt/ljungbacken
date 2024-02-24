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
import ContentBasic from '../components/ContentBasic/ContentBasic';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [about, setAbout] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([client.fetch(`*[_type == "about"]`)])
      .then(([aboutData]) => {
        setAbout(aboutData[0]);
        setLoading(false);
        console.log(about);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <Layout>
      {isLoading ? (
        <div></div>
      ) : (
        <>
          <ContentBasic
            title={about.title}
            text={about.text}
            image={about.image && urlFor(about.image).url()}
            alt={about.image.alt}
          />
        </>
      )}
    </Layout>
  );
}
