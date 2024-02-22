import Layout from '@/src/components/Layout/Layout';
import StaffCard from '../components/StaffCard/StaffCard';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import CourseCard from '../components/CourseCard/CourseCard';
import imageUrlBuilder from '@sanity/image-url';
import CoursesWrapper from '../components/CoursesWrapper/CoursesWrapper';

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Home() {
  const [staff, setStaff] = useState(null);
  const [courses, setCourses] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([
      client.fetch(`*[_type == "employee"]`),
      client.fetch(`*[_type == "course"]`),
    ])
      .then(([staffData, coursesData]) => {
        setStaff(staffData);
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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis atque
        velit. Voluptas facilis tempora alias ab fugit, aliquam provident
        sapiente, architecto ipsam recusandae officia pariatur eligendi. Iusto
        veniam nisi quisquam labore, adipisci fugit esse voluptates ad quis
        fuga, natus, earum tempora voluptatem saepe ipsum ducimus facere nostrum
        praesentium hic mollitia quia blanditiis! Aliquam minima, dolor quisquam
        mollitia expedita quam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis atque
        velit. Voluptas facilis tempora alias ab fugit, aliquam provident
        sapiente, architecto ipsam recusandae officia pariatur eligendi. Iusto
        veniam nisi quisquam labore, adipisci fugit esse voluptates ad quis
        fuga, natus, earum tempora voluptatem saepe ipsum ducimus facere nostrum
        praesentium hic mollitia quia blanditiis! Aliquam minima, dolor quisquam
        mollitia expedita quam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis atque
        velit. Voluptas facilis tempora alias ab fugit, aliquam provident
        sapiente, architecto ipsam recusandae officia pariatur eligendi. Iusto
        veniam nisi quisquam labore, adipisci fugit esse voluptates ad quis
        fuga, natus, earum tempora voluptatem saepe ipsum ducimus facere nostrum
        praesentium hic mollitia quia blanditiis! Aliquam minima, dolor quisquam
        mollitia expedita quam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis atque
        velit. Voluptas facilis tempora alias ab fugit, aliquam provident
        sapiente, architecto ipsam recusandae officia pariatur eligendi. Iusto
        veniam nisi quisquam labore, adipisci fugit esse voluptates ad quis
        fuga, natus, earum tempora voluptatem saepe ipsum ducimus facere nostrum
        praesentium hic mollitia quia blanditiis! Aliquam minima, dolor quisquam
        mollitia expedita quam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis atque
        velit. Voluptas facilis tempora alias ab fugit, aliquam provident
        sapiente, architecto ipsam recusandae officia pariatur eligendi. Iusto
        veniam nisi quisquam labore, adipisci fugit esse voluptates ad quis
        fuga, natus, earum tempora voluptatem saepe ipsum ducimus facere nostrum
        praesentium hic mollitia quia blanditiis! Aliquam minima, dolor quisquam
        mollitia expedita quam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis atque
        velit. Voluptas facilis tempora alias ab fugit, aliquam provident
        sapiente, architecto ipsam recusandae officia pariatur eligendi. Iusto
        veniam nisi quisquam labore, adipisci fugit esse voluptates ad quis
        fuga, natus, earum tempora voluptatem saepe ipsum ducimus facere nostrum
        praesentium hic mollitia quia blanditiis! Aliquam minima, dolor quisquam
        mollitia expedita quam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis atque
        velit. Voluptas facilis tempora alias ab fugit, aliquam provident
        sapiente, architecto ipsam recusandae officia pariatur eligendi. Iusto
        veniam nisi quisquam labore, adipisci fugit esse voluptates ad quis
        fuga, natus, earum tempora voluptatem saepe ipsum ducimus facere nostrum
        praesentium hic mollitia quia blanditiis! Aliquam minima, dolor quisquam
        mollitia expedita quam?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel omnis atque
        velit. Voluptas facilis tempora alias ab fugit, aliquam provident
        sapiente, architecto ipsam recusandae officia pariatur eligendi. Iusto
        veniam nisi quisquam labore, adipisci fugit esse voluptates ad quis
        fuga, natus, earum tempora voluptatem saepe ipsum ducimus facere nostrum
        praesentium hic mollitia quia blanditiis! Aliquam minima, dolor quisquam
        mollitia expedita quam?
      </p>
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
      {/* {staff.map((employee, key) => {
        return <StaffCard key={key} />;
      })} */}
    </Layout>
  );
}
