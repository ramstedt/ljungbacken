import Layout from '@/src/components/Layout/Layout';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import CourseCard from '@/src/components/CourseCard/CourseCard';
import imageUrlBuilder from '@sanity/image-url';
import CoursesWrapper from '@/src/components/CoursesWrapper/CoursesWrapper';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Courses() {
  const [courses, setCourses] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([client.fetch(`*[_type == "course"]`)])
      .then(([coursesData]) => {
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
      <CoursesWrapper>
        {courses.map((course, key) => {
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
    </Layout>
  );
}
