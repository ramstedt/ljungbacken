import { blockContent } from './schemas/blockContent';
import { course } from './schemas/course';
import { employee } from './schemas/employee';

export const schema = {
  types: [employee, blockContent, course],
};
