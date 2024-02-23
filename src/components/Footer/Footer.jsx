import Link from 'next/link';
import styled from 'styled-components';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Wrapper = styled.footer`
  margin-top: auto;
  width: 100vw;
  background: grey;
  padding: 0.5rem;
  text-align: center;

  nav ul {
    padding: 1rem;
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    font-size: 0.6rem;
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

  h3 {
    margin-bottom: 0.8rem;
  }
  div {
    margin-bottom: 0.5rem;
    line-height: 1rem;
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
`;

const MapsWrapper = styled.div`
  height: 300px;
`;
//https://www.maps.ie/create-google-map/
export default function Footer() {
  return (
    <>
      <Wrapper>
        <div className='logo'>
          <Link href='/'>Ljungbacken</Link>
        </div>
        <ContactWrapper>
          <h3>Kontakta oss</h3>
          <div>Telefon: 123</div>
          <div>Email: email@email.se</div>
          <div>Adress: Gatuvägen 4, 414 54, Göteborg</div>
          <div>
            Connecta med oss: <FaInstagram /> <FaFacebook />
          </div>
          <hr />
        </ContactWrapper>
        <nav>
          <ul>
            <li>
              <Link href=''>Hem</Link>
            </li>
            <li>
              <Link href=''>Om Oss</Link>
            </li>
            <li>
              <Link href=''>Kurser</Link>
            </li>
          </ul>
        </nav>
      </Wrapper>
      <MapsWrapper>
        <iframe
          width='100%'
          height='300'
          frameborder='0'
          marginheight='0'
          marginwidth='0'
          src='https://maps.google.com/maps?25&amp;hl=sv&amp;q=Brunnsparken,%20411%2006%20G%C3%B6teborg+(brunnsparken)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        ></iframe>
      </MapsWrapper>
    </>
  );
}
