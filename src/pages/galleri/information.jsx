import Layout from '@/src/components/Layout/Layout';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url';
import ContentBasic from '@/src/components/ContentBasic/ContentBasic';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Information() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([client.fetch(`*[_type == "information"]`)])
      .then(([data]) => {
        setData(data[0]);
        setLoading(false);
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
