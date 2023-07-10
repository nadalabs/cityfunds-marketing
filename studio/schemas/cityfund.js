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
        name: 'promo',
        title: 'Promo',
        type: 'reference',
        to: [{ type: 'promo' }],
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  };
  