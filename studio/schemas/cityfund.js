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
        name: 'heroImage',
        title: 'Hero Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'CardImage',
        title: 'Card Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'mapImage',
        title: 'Map Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'accreditedImage',
        title: 'Accredited Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  };
  