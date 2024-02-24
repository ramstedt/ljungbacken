import { about } from './schemas/about';
import { blockContent } from './schemas/blockContent';
import { course } from './schemas/course';
import { employee } from './schemas/employee';
import { home } from './schemas/home';

export const schema = {
  types: [employee, blockContent, course, home, about],
};
