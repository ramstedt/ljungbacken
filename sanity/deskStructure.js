import { BsPersonFill } from 'react-icons/bs';

export const myStructure = (S) =>
  S.list()
    .title('Innehåll')
    .items([
      S.documentTypeListItem('employee')
        .title('Medarbetare')
        .icon(BsPersonFill),
      S.documentTypeListItem('course').title('Kurser').icon(BsPersonFill),
    ]);
