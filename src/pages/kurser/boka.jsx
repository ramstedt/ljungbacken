import Layout from '@/src/components/Layout/Layout';
import { client } from '@/sanity/lib/client';
import { useState, useEffect } from 'react';
import CourseCard from '@/src/components/CourseCard/CourseCard';
import imageUrlBuilder from '@sanity/image-url';
import CoursesWrapper from '@/src/components/CoursesWrapper/CoursesWrapper';
import styled from 'styled-components';
import Header from '@/src/components/_atoms/Header/Header';
import SanityBlockContent from '@sanity/block-content-to-react';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: normal;
  }
`;

const Text = styled.div`
  width: 100%;
`;

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
  gap: 1rem;
  input {
    width: 50%;
  }
`;

const Form = styled.form`
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Button = styled.button`
  max-width: 100px;
  padding: 0.2rem;
  background: #444c41;
  color: white;
  border-style: solid;
  border-color: #444c41;
  &:hover {
    color: #444c41;
    background: #f1f3f0;
  }
`;

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

export default function BookCourse() {
  const [courses, setCourses] = useState(null);
  const [book, setBook] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('');
  const [selectedCoursePrice, setSelectedCoursePrice] = useState('');
  const [message, setMessage] = useState('');

  const [error, setError] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch(`${process.env.NEXT_PUBLIC_FORMCARRY_COURSE_URL}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        surname,
        email,
        phone,
        selectedCourse,
        selectedCoursePrice,
        message,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert('Vi har tagit emot din förfrågan och hör av oss inom kort!');
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
    Promise.all([
      client.fetch(`*[_type == "course"]`),
      client.fetch(`*[_type == "bookCourse"]`),
    ])
      .then(([coursesData, bookData]) => {
        setCourses(coursesData);
        setBook(bookData[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleChange = (event) => {
    setSelectedCourse(event && event.target.value);
    courses.map((course) => {
      if (course.name === event.target.value) {
        setSelectedCoursePrice(course.price);
      }
    });
  };

  return (
    <Layout>
      {isLoading ? null : (
        <Wrapper>
          <Text>
            <Header>
              <h1>{book.title}</h1>
            </Header>
            <SanityBlockContent blocks={book && book.text} />
          </Text>
          <Form onSubmit={(e) => onSubmit(e)}>
            <h2>Boka en kurs</h2>
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
              <label htmlFor='phone'>Ange ditt telefonnummer</label>
              <input
                type='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                id='phone'
                placeholder='0702000000'
              />
            </FormBlock>
            <FormBlock>
              <label htmlFor='course'>Vilken kurs är du intresserad av?</label>
              <select
                name='course'
                id='course'
                onChange={handleChange} // Corrected: removed the parentheses
                value={selectedCourse}
              >
                <option value='' defaultValue disabled hidden>
                  Välj en kurs
                </option>
                {courses &&
                  courses.map((course, key) => {
                    if (course.freeSeats === 0) {
                      return;
                    } else {
                      return (
                        <option key={key} value={course.name}>
                          {course.name}
                        </option>
                      );
                    }
                  })}
              </select>
              {selectedCourse.length <= 2
                ? null
                : `${selectedCourse} - ${selectedCoursePrice} kr per person`}
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
              <Button type='submit'>Skicka</Button>
            </FormBlock>
          </Form>
        </Wrapper>
      )}
    </Layout>
  );
}
