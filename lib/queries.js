// Post Queries
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

// Partner Queries
const partnerFields = `
  _id,
  name,
  coverImage,
  "slug": slug.current,
`;

export const partnerIndexQuery = `
*[_type == "partner"] | order(date desc, _updatedAt desc) {
  ${partnerFields}
}`;

export const partnerQuery = `
{
  "partner": *[_type == "partner" && slug.current == $slug] | order(_updatedAt desc) [0] {
    ${partnerFields}
  },
}`;

export const partnerSlugsQuery = `
*[_type == "partner" && defined(slug.current)][].slug.current
`;

export const partnerBySlugQuery = `
*[_type == "partner" && slug.current == $slug][0] {
  ${partnerFields}
}
`;

// Legal Queries
const legalFields = `
  _id,
  title,
  content,
  "slug": slug.current,
`;

export const legalIndexQuery = `
*[_type == "legal"] | order(date desc, _updatedAt desc) {
  ${legalFields}
}`;

export const legalQuery = `
{
  "legal": *[_type == "legal" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${legalFields}
  },
}`;

export const legalSlugsQuery = `
*[_type == "legal" && defined(slug.current)][].slug.current
`;

export const legalBySlugQuery = `
*[_type == "legal" && slug.current == $slug][0] {
  ${legalFields}
}
`;

// Press Queries
const pressFields = `
  _id,
  title,
  publisher,
  link,
  date,
`;

export const pressIndexQuery = `
*[_type == "press"] | order(date desc, _updatedAt desc) {
  ${pressFields}
}`;
