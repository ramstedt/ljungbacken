import styled from 'styled-components';

const Wrapper = styled.footer`
  margin-top: auto;
  width: 100vw;
  background: grey;
  display: flex;
`;

const ContactWrapper = styled.div``;

const MapsWrapper = styled.div`
  width: 300px;
  height: 300px;
`;
//https://www.maps.ie/create-google-map/
export default function Footer() {
  return (
    <Wrapper>
      <ContactWrapper>Kontakt</ContactWrapper>
      <MapsWrapper>
        <iframe
          width='100%'
          height='100%'
          src='https://maps.google.com/maps?25&amp;hl=sv&amp;q=Brunnsparken,%20411%2006%20G%C3%B6teborg+(brunnsparken)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        ></iframe>
      </MapsWrapper>
    </Wrapper>
  );
}
