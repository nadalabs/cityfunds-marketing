const postFields = `
  _id,
  name,
  title,
  date,
  excerpt,
  coverImage,
  "slug": slug.current,
  "author": author->{name, picture},
`;

export const indexQuery = `
*[_type == "post"] | order(date desc, _updatedAt desc) {
  ${postFields}
}`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${postFields}
  }
}`;

export const postSlugsQuery = `
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const postBySlugQuery = `
*[_type == "post" && slug.current == $slug][0] {
  ${postFields}
}
`;

const partnersFields = `
  _id,
  name,
  coverImage,
  "slug": slug.current,
`;

export const partnersIndexQuery = `
*[_type == "partners"] | order(date desc, _updatedAt desc) {
  ${partnersFields}
}`;

export const partnersQuery = `
{
  "partners": *[_type == "partners" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${partnersFields}
  },
  "morePartnerss": *[_type == "partners" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${partnersFields}
  }
}`;

export const partnersSlugsQuery = `
*[_type == "partners" && defined(slug.current)][].slug.current
`;

export const partnersBySlugQuery = `
*[_type == "partners" && slug.current == $slug][0] {
  ${partnersFields}
}
`;
