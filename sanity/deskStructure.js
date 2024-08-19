import { BsPersonFill } from 'react-icons/bs';
import { IoMdSchool, IoMdInformationCircle } from 'react-icons/io';
import { PiHouseLineFill } from 'react-icons/pi';
import {
  MdFilterFrames,
  MdPeopleAlt,
  MdOutlineAttachMoney,
} from 'react-icons/md';
import { IoPeopleCircleSharp } from 'react-icons/io5';
import { BsCalendar2CheckFill } from 'react-icons/bs';
import { GoCheck } from 'react-icons/go';
import { IoMdPhotos } from 'react-icons/io';
import { FaKey } from 'react-icons/fa6';
import { RiLayoutBottom2Fill } from 'react-icons/ri';

export const myStructure = (S) =>
  S.list()
    .title('Innehåll')
    .items([
      S.documentTypeListItem('employee')
        .title('Lägg till instruktör')
        .icon(BsPersonFill),
      S.documentTypeListItem('course').title('Lägg till kurs').icon(IoMdSchool),
      S.listItem()
        .title('Footer')
        .child(S.document().schemaType('footer').documentId('footer'))
        .icon(RiLayoutBottom2Fill),
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
                .title('Om Villa Ljungbacken')
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
                    .title('Kurser')
                    .items([
                      S.listItem()
                        .title('Boka')
                        .child(
                          S.document()
                            .schemaType('bookCourse')
                            .documentId('bookCourse')
                        )
                        .icon(BsCalendar2CheckFill),
                      S.listItem()
                        .title('Instruktörer')
                        .child(
                          S.document()
                            .schemaType('instructors')
                            .documentId('instructors')
                        )
                        .icon(MdPeopleAlt),
                    ])
                ),
              S.listItem()
                .title('Hyr lokal')
                .child(
                  S.list()
                    .title('Hyr lokal')
                    .items([
                      S.listItem()
                        .title('Vad ingår')
                        .child(
                          S.document()
                            .schemaType('whatsIncluded')
                            .documentId('whatsIncluded')
                        )
                        .icon(GoCheck),
                      S.listItem()
                        .title('Priser')
                        .child(
                          S.document().schemaType('prices').documentId('prices')
                        )
                        .icon(MdOutlineAttachMoney),
                      S.listItem()
                        .title('Bilder')
                        .child(
                          S.document().schemaType('photos').documentId('photos')
                        )
                        .icon(IoMdPhotos),
                      S.listItem()
                        .title('Bokningsförfrågan')
                        .child(
                          S.document()
                            .schemaType('bookVenue')
                            .documentId('bookVenue')
                        )
                        .icon(FaKey),
                    ])
                ),
              S.documentTypeListItem('extra')
                .title('Sidor (tillägg)')
                .icon(IoMdSchool),
            ])
        ),
    ]);
