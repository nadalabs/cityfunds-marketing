export const logo = {
    name: 'logo',
    title: 'Featured Logos',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: { hotspot: true },
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'link',
        title: 'Link',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: "category",
        title: "Category",
        type: "string",
        options: {
          list: [
            { title: "Press", value: "Press" },
            { title: "Backer", value: "Backer" },
          ],
          layout: 'dropdown'
        }
      },
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'category',
        media: 'image',
      },
    },
  };
  