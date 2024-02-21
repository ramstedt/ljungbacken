import { useRouter } from 'next/router';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';

import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import Layout from '@/src/components/Layout/Layout';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function CoursePage() {
  const router = useRouter();
  const { slug } = router.query;

  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    if (slug) {
      setIsLoading(true);
      const query = `*[_type == "course" && slug.current == $slug][0]`;
      client
        .fetch(query, { slug: slug })
        .then((courseData) => {
          if (!courseData) {
            router.replace('/404');
          } else {
            setCourse(courseData);
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
  return <Layout>Course Page for: {course.name}</Layout>;
}
