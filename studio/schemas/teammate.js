export const teammate = {
    name: 'teammate',
    title: 'Teammate',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'role',
        title: 'Role',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
          validation: (Rule) => Rule.required(),
        },
      },
      {
        name: 'linkedIn',
        title: 'LinkedIn',
        type: 'string',
      },
      {
        name: 'index',
        title: 'Index',
        type: 'number',
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'role',
        media: 'image',
      },
    },
  };
  