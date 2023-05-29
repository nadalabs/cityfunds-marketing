export const press = {
    name: 'press',
    title: 'Press',
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
  };
  