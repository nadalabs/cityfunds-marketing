export const press = {
    name: 'press',
    title: 'Press Articles',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'publisher',
        title: 'Publisher',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'link',
        title: 'Link',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'publisher',
      },
    },
  };
  