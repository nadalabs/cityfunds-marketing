export const value = {
    name: 'value',
    title: 'Value Props',
    type: 'document',
    fields: [
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
        name: "category",
        title: "Category",
        type: "string",
        options: {
          list: [
            { title: "Cityfunds", value: "Cityfunds" },
            { title: "Nada", value: "Nada" },
          ],
          layout: 'dropdown'
        }
      },
    ],
    preview: {
      select: {
        title: 'title',
        subtitle: 'category',
      },
    },
  };
  