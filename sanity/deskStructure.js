import { BsPersonFill } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';

export const myStructure = (S) =>
  S.list()
    .title('Innehåll')
    .items([
      S.documentTypeListItem('employee')
        .title('Medarbetare')
        .icon(BsPersonFill),
      S.documentTypeListItem('course').title('Kurser').icon(IoMdSchool),
    ]);
