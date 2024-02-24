import { about } from './schemas/about';
import { blockContent } from './schemas/blockContent';
import { bookCourse } from './schemas/bookCourse';
import { bookVenue } from './schemas/bookVenue';
import { course } from './schemas/course';
import { employee } from './schemas/employee';
import { exhibitions } from './schemas/exhibitions';
import { footer } from './schemas/footer';
import { forArtists } from './schemas/forArtists';
import { home } from './schemas/home';
import { information } from './schemas/information';
import { instructors } from './schemas/instruktorer';
import { photos } from './schemas/photos';
import { prices } from './schemas/prices';
import { whatsIncluded } from './schemas/whatsIncluded';

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
    bookCourse,
    instructors,
    whatsIncluded,
    photos,
    bookVenue,
    prices,
    footer,
  ],
};
