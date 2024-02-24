import { about } from './schemas/about';
import { blockContent } from './schemas/blockContent';
import { book } from './schemas/book';
import { course } from './schemas/course';
import { employee } from './schemas/employee';
import { exhibitions } from './schemas/exhibitions';
import { forArtists } from './schemas/forArtists';
import { home } from './schemas/home';
import { information } from './schemas/information';
import { instructors } from './schemas/instruktorer';

export const schema = {
  types: [
    employee,
    blockContent,
    course,
    home,
    about,
    information,
    exhibitions,
    forArtists,
    book,
    instructors,
  ],
};
