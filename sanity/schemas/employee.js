export const employee = {
  name: 'employee',
  title: 'Medarbetare',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Namn',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'jobtitle',
      title: 'Titel',
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
      name: 'bio',
      title: 'Bio',
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
