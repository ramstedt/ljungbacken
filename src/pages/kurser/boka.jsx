import Layout from '@/src/components/Layout/Layout';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import CourseCard from '@/src/components/CourseCard/CourseCard';
import imageUrlBuilder from '@sanity/image-url';
import CoursesWrapper from '@/src/components/CoursesWrapper/CoursesWrapper';
import styled from 'styled-components';

const FormBlock = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  &:first-of-type {
    flex-direction: row;
  }
  &:first-of-type div {
    width: 100%;
  }
`;

const NameInputs = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Form = styled.form`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function Courses() {
  const [courses, setCourses] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch(`${process.env.NEXT_PUBLIC_FORMCARRY_URL}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert('We received your submission, thank you!');
        } else if (response.code === 422) {
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }

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

  return (
    <Layout>
      {isLoading ? null : (
        <Form onSubmit={(e) => onSubmit(e)}>
          <FormBlock>
            <div>
              <label htmlFor='firstName'>Ange ditt förnamn</label>{' '}
              <label htmlFor='surname'>och efternamn</label>
            </div>
            <NameInputs>
              <input
                type='text'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                id='firstName'
                placeholder='Förnamn'
              />
              <input
                type='text'
                value={surname}
                onChange={(e) => setSurname(e.target.value)}
                id='surname'
                placeholder='Efternamn'
              />
            </NameInputs>
          </FormBlock>

          <FormBlock>
            <label htmlFor='email'>Ange din emailadress</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id='email'
              placeholder='email@email.com'
            />
          </FormBlock>
          <FormBlock>
            <label htmlFor='course'>Vilken kurs är du intresserad av?</label>
            <select name='course' id='course'>
              <option value='' selected disabled hidden>
                Välj en kurs
              </option>
              {courses &&
                courses.map((course, key) => {
                  return (
                    <option key={key} value={course.name}>
                      {course.name}
                    </option>
                  );
                })}
            </select>
          </FormBlock>
          <FormBlock>
            <label htmlFor='message'>Meddelande</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              id='message'
              placeholder='Skriv ditt meddelande...'
            ></textarea>
          </FormBlock>
          <FormBlock>
            <button type='submit'>Skicka</button>
          </FormBlock>
        </Form>
      )}
    </Layout>
  );
}
