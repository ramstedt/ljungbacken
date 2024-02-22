import styled from 'styled-components';
import { motion } from 'framer-motion';

const Text = styled(motion.div)``;

export default function Header({ children }) {
  return (
    <Text
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </Text>
  );
}
