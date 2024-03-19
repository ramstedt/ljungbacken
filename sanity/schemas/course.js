export const course = {
  name: 'course',
  title: 'Kurs',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Namn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Bild',
      type: 'image',
      description:
        'Försök hålla filen så liten som möjligt för snabbare laddning. Bra sida för optimering av bilder: https://squoosh.app',
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternativ Text',
          description:
            'Enligt WCAG2 måste bilder ha en text som beskriver bilden för de som inte kan se. https://bernskioldmedia.com/sv/sa-skriver-du-bra-alt-texter-till-bilder-for-battre-seo-och-tillganglighet',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
    {
      name: 'startDate',
      title: 'Startdatum',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'hour',
      title: 'Antal timmar',
      type: 'number',
      description: 'Endast siffror',
    },
    {
      name: 'seats',
      title: 'Antal platser (total)',
      type: 'number',
      description: 'Endast siffror',
    },
    {
      name: 'freeSeats',
      title: 'Antalet lediga platser',
      type: 'number',
      description: 'Endast siffror',
    },
    {
      name: 'price',
      title: 'Pris',
      type: 'number',
      description: 'Endast siffror',
    },
    {
      name: 'instructor',
      title: 'Instruktör',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Beskrivning',
      type: 'array',
      validation: (Rule) => Rule.required(),
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    },
  ],
};
