export const cityfund = {
    name: 'cityfund',
    title: 'Cityfunds',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'cardFront',
        title: 'Card Front',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'cardBack',
        title: 'Card Back',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'gallery',
        title: 'Gallery',
        type: 'array',
        of: [
          {
            type: 'image',
            options: { hotspot: true },
          },
        ],
      },
    ],
    preview: {
      select: {
        title: 'title',
        media: 'cardFront',
      },
    },
  };
  