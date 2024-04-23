const postFields = `
  _id,
  title,
  date,
  excerpt,
  coverImage,
  author,
  keywords,
  link,
  tag,
  "slug": slug.current,
`;

export const postIndexQuery = `
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

const mediaFields = `
  _id,
  title,
  date,
  excerpt,
  coverImage,
  link,
  tag,
  "slug": slug.current,
`;

export const mediaIndexQuery = `
*[_type == "media"] | order(date desc, _updatedAt desc) {
  ${mediaFields}
}`;

export const mediaQuery = `
{
  "media": *[_type == "media" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${mediaFields}
  },
  "moreMedias": *[_type == "media" && slug.current != $slug] | order(date desc, _updatedAt desc) [0...2] {
    content,
    ${mediaFields}
  }
}`;

export const mediaSlugsQuery = `
*[_type == "media" && defined(slug.current)][].slug.current
`;

export const mediaBySlugQuery = `
*[_type == "media" && slug.current == $slug][0] {
  ${mediaFields}
}
`;

export const legalFields = `
  _id,
  title,
  content,
  date,
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

export const cityfundFields = `
  _id,
  fund_name,
  call_to_action,
  description,
  image_gallery,
  card_back,
  culture_gallery,
  culture_description,
  culture_articles
`;

export const cityfundsPageFields = `
  _id,
  logos,
  marketing_hero,
  hero_banner,
  metrics,
  cityfunds_feature,
  hei_feature,
  video,
  tutorials,
  values,
  questions,
  testimonials,
  homeowners_feature,
`;

export const cityfundsAppFields = `
  _id,
  hero_slider,
  investor_promo,
  investor_webinar,
`;

export const nadaOfferingFields = `
  _id,
  fund_name,
  call_to_action,
  image_gallery,
  card_back,
  highlights,
  description,
  sections,
  banner,
  feature,
  video,
  webinar
`;

export const aboutPageFields = `
  _id,
  about_hero,
  ourStory,
  logos,
  teammates,
  team_logos,
  leadership,
  values,
  careers,
  news_hero
`;

export const footerQuery = `
{
  "legal": *[_type == "legal" && slug.current == "footer"] | order(_updatedAt desc) [0] {
    ${legalFields}
  },
}`;
