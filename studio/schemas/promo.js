export const promo = {
    name: 'promo',
    title: 'Promos',
    type: 'document',
    fields: [
      {
        name: 'banner',
        title: 'Banner',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'caption',
        title: 'Caption',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
        validation: (Rule) => Rule.required(),
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'description',
        media: 'image',
      },
    },
  };
  