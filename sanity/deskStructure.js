import { BsPersonFill } from 'react-icons/bs';
import { IoMdSchool } from 'react-icons/io';
import { PiHouseLineFill } from 'react-icons/pi';

export const myStructure = (S) =>
  S.list()
    .title('Innehåll')
    .items([
      S.documentTypeListItem('employee')
        .title('Medarbetare')
        .icon(BsPersonFill),
      S.documentTypeListItem('course').title('Kurser').icon(IoMdSchool),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Hem')
                .child(S.document().schemaType('home').documentId('home'))
                .icon(PiHouseLineFill),
            ])
        ),
    ]);
