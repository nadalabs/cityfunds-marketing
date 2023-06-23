export const testimonial = {
    name: 'testimonial',
    title: 'Testimonials',
    type: 'document',
    fields: [
      {
        name: 'review',
        title: 'Review',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'name',
        title: 'Name',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: 'city',
        title: 'City',
        type: 'string',
        validation: (Rule) => Rule.required(),
      },
      {
        name: "category",
        title: "Category",
        type: "string",
        options: {
          list: [
            { title: "Cityfunds", value: "cityfunds" },
            { title: "Homeshares", value: "homeshares" },
          ],
          layout: 'dropdown'
        }
      },
      {
        name: 'date',
        title: 'Date',
        type: 'datetime',
      },
    ],
    preview: {
      select: {
        title: 'review',
        subtitle: 'category',
      },
    },
  };
  