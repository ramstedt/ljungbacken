import { BsPersonFill } from 'react-icons/bs';
import { IoMdSchool, IoMdInformationCircle } from 'react-icons/io';
import { PiHouseLineFill } from 'react-icons/pi';
import { MdFilterFrames } from 'react-icons/md';
import { IoPeopleCircleSharp } from 'react-icons/io5';
import { BsCalendar2CheckFill } from 'react-icons/bs';

export const myStructure = (S) =>
  S.list()
    .title('Innehåll')
    .items([
      S.documentTypeListItem('employee')
        .title('Lägg till medarbetare')
        .icon(BsPersonFill),
      S.documentTypeListItem('course').title('Lägg till kurs').icon(IoMdSchool),
      S.listItem()
        .title('Sidor')
        .child(
          S.list()
            .title('Sidor')
            .items([
              S.listItem()
                .title('Hem')
                .child(S.document().schemaType('home').documentId('home'))
                .icon(PiHouseLineFill),
              S.listItem()
                .title('Om Ljungbacken')
                .child(S.document().schemaType('about').documentId('about'))
                .icon(IoMdInformationCircle),
              S.listItem()
                .title('Galleri')
                .child(
                  S.list()
                    .title('Galleri')
                    .items([
                      S.listItem()
                        .title('Information')
                        .child(
                          S.document()
                            .schemaType('information')
                            .documentId('information')
                        )
                        .icon(IoMdInformationCircle),
                      S.listItem()
                        .title('Utställningar')
                        .child(
                          S.document()
                            .schemaType('exhibitions')
                            .documentId('exhibitions')
                        )
                        .icon(MdFilterFrames),
                      S.listItem()
                        .title('För Konstnärer')
                        .child(
                          S.document()
                            .schemaType('forArtists')
                            .documentId('forArtists')
                        )
                        .icon(IoPeopleCircleSharp),
                    ])
                ),
              S.listItem()
                .title('Kurser')
                .child(
                  S.list()
                    .title('Instruktörer')
                    .items([
                      S.listItem()
                        .title('Boka')
                        .child(
                          S.document().schemaType('book').documentId('book')
                        )
                        .icon(BsCalendar2CheckFill),
                    ])
                ),
            ])
        ),
    ]);
