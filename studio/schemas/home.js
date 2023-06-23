export const home = {
    name: 'home',
    title: 'Home Page',
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
  