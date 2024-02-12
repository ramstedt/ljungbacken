import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 250px;
  height: 250px;
  border-style: solid;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ImageWrapper = styled.div`
  width: 150px;
  height: 150px;
  background: green;
  border-radius: 50%;
`;
const Details = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export default function StaffCard() {
  return (
    <Wrapper>
      <ImageWrapper></ImageWrapper>
      <Details>
        <div>
          <h3>Namn</h3>

          <h4>Titel</h4>
        </div>
        <div>
          <button>
            <Link href=''>Läs mer</Link>
          </button>
        </div>
      </Details>
    </Wrapper>
  );
}
