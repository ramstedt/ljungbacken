import Layout from '@/src/components/Layout/Layout';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import ContentBasic from '../components/ContentBasic/ContentBasic';
import { useRouter } from 'next/router';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Slug() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug) {
      setLoading(true);
      const query = `*[_type == "extra" && slug.current == $slug][0]`;
      client
        .fetch(query, { slug: slug })
        .then((data) => {
          if (!data) {
            router.replace('/404');
          } else {
            setData(data);
            setLoading(false);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
          setLoading(false);
        });
    }
  }, [slug, router]);

  return (
    <Layout>
      {isLoading ? (
        <div></div>
      ) : (
        <>
          <ContentBasic
            title={data.title}
            text={data.text}
            image={data.image && urlFor(data.image).url()}
            alt={data.image && data.image.alt}
          />
        </>
      )}
    </Layout>
  );
}
