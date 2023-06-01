export const content = {
    name: 'content',
    title: 'Content',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
        {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [{ type: 'block' }],
        validation: (Rule) => Rule.required(),
        },
      {
        name: 'label',
        title: 'Label',
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
      },
    },
  };
  