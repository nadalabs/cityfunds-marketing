export const partner = {
    name: 'partner',
    title: 'Partners',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'coverImage',
        title: 'Cover Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'promo',
        title: 'Promo',
        type: 'reference',
        to: [{ type: 'promo' }],
      },
    ],
    preview: {
      select: {
        title: 'name',
        media: 'coverImage',
      },
    },
  };
  