export const summary = {
    name: 'summary',
    title: 'Summaries',
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
      },
    ],
    preview: {
      select: {
        title: 'title',
      },
    },
  };
  