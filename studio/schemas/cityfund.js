export const cityfund = {
    name: 'cityfund',
    title: 'Cityfunds',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'array',
        of: [{ type: 'block' }],
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'cardFront',
        title: 'Card Front',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'cardBack',
        title: 'Card Back',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'galleryImages',
        title: 'Gallery Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: { hotspot: true },
          },
        ],
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'cultureImages',
        title: 'Culture Images',
        type: 'array',
        of: [
          {
            type: 'image',
            options: { hotspot: true },
          },
        ],
      },
      {
        name: 'cultureDescription',
        title: 'Culture Description',
        type: 'array',
        of: [{ type: 'block' }],
      },
      {
        name: 'articles',
        title: 'Articles',
        type: 'array',
        of: [{ type: 'press' }],
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'description',
        media: 'cardFront',
      },
    },
  };
  