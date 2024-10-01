import Link from 'next/link';
import styled from 'styled-components';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import Image from 'next/image';
import Logo from '../_atoms/Logo/Logo';

const Wrapper = styled.footer`
  margin-top: auto;
  width: 100vw;
  background: grey;
  padding: 0.5rem;
  text-align: center;

  div {
    margin: auto;
  }

  nav ul {
    padding: 1rem;
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.9rem;
  }
  nav ul li {
    border-style: solid;
    border-width: 0 1px 0 0;
    padding-right: 0.5rem;
  }

  nav ul li:last-of-type {
    border-style: none;
    padding: 0;
  }
  nav ul li a {
    color: #fdfffb;
  }
`;

const ContactWrapper = styled.div`
  color: #fdfffb;
  text-align: center;
  font-size: 0.9rem;
  div a {
    color: #fdfffb;
  }

  h3 {
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
  div {
    margin-bottom: 0.5rem;
    line-height: 1rem;
    max-width: fit-content;
  }
  div:last-of-type {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 0.5rem;
  }
  div svg {
    width: 1rem;
    height: 1rem;
  }
  div svg:hover {
    color: #fdfffb;
  }
`;

const MapsWrapper = styled.div`
  height: 300px;
`;
//https://www.maps.ie/create-google-map/

export default function Footer() {
  const [footer, setFooter] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    Promise.all([client.fetch(`*[_type == "footer"]`)])
      .then(([data]) => {
        setFooter(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
      <Wrapper>
        <div className='logo'>
          <Logo />
        </div>
        {isLoading ? null : (
          <>
            <ContactWrapper>
              <h3>Kontakta oss</h3>
              <div>
                {/* <Link href={`tel:${footer.phone}`}> */}
                {footer.phone}
                {/* </Link> */}
              </div>
              {footer.email && (
                <div>
                  <Link href={`mailto:${footer.email}`}>{footer.email}</Link>
                </div>
              )}
              <div>{footer.address}</div>
              {footer.directions && <div>Vägbeskrivning:</div>}
              <div>
                <Link href={`${footer.instagram}`}>
                  <FaInstagram />
                </Link>{' '}
                <Link href={`${footer.facebook}`}>
                  <FaFacebook />
                </Link>
              </div>
              <hr />
            </ContactWrapper>
            <nav>
              <ul>
                <li>
                  <Link href='/'>Hem</Link>
                </li>
                <li>
                  <Link href='/om-oss'>Om Oss</Link>
                </li>
                <li>
                  <Link href='/kurser'>Kurser</Link>
                </li>
              </ul>
            </nav>
          </>
        )}
      </Wrapper>
      <MapsWrapper>
        <iframe
          width='100%'
          height='300'
          src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ljungbackenv%C3%A4gen%2040E+(Ljungbacken)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        ></iframe>
      </MapsWrapper>
    </>
  );
}
