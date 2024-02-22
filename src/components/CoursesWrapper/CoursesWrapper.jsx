import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 225px);
    gap: 2rem;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 225px);
  }
`;

export default function CoursesWrapper({ children }) {
  const { ref, inView } = useInView();
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, transition: { duration: 1 } });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <Wrapper ref={ref} animate={controls} initial={{ opacity: 0 }}>
      {children}
    </Wrapper>
  );
}
