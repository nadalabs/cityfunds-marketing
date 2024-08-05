import { ClientConfig, createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';
import { capitalizeFirstLetter } from '@utils/helpers';
import { IFundContent } from '@utils/models';
import {
  aboutPageFields,
  cityfundFields,
  cityfundsAppFields,
  cityfundsPageFields,
  legalFields,
  pressIndexQuery,
  tooltipFields,
} from 'lib/queries';

const sanityConfig: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2022-03-13',
  useCdn: true,
};

export const sanityClient = createClient(sanityConfig);
export const revalidateQuery = { next: { revalidate: 3600 } };
const imageBuilder = createImageUrlBuilder(sanityConfig as any);
export const urlForImage = (source: string, height?: number, width?: number) =>
  imageBuilder.image(source).fit('fill').height(height).width(width).url();

export const getAllFundsContent = async (): Promise<IFundContent[]> => {
  const res = await sanityClient.fetch(
    `
      *[_type == "cityfund"] | order(index asc, _updatedAt desc) {
        ${cityfundFields}
      }`,
    {},
    revalidateQuery
  );
  return res;
};

export const getFundContentById = async (id: string): Promise<IFundContent> => {
  const res = await sanityClient.fetch(
    `
      *[_type == "cityfund" && fund_name == "${capitalizeFirstLetter(id)}"] {
        ${cityfundFields}
      }`,
    {},
    revalidateQuery
  );
  return res[0];
};

export const getCityfundsPageContent = async (): Promise<any> => {
  const res = await sanityClient.fetch(
    `
    *[_type == "cityfundsPage"] | order(index asc, _updatedAt desc) {
      ${cityfundsPageFields}
    }`,
    {},
    revalidateQuery
  );
  return res[0];
};

export const getCityfundsAppContent = async (): Promise<any> => {
  const res = await sanityClient.fetch(
    `
    *[_type == "cityfundsApp"] | order(index asc, _updatedAt desc) {
      ${cityfundsAppFields}
    }`,
    {},
    revalidateQuery
  );
  return res[0];
};

export const getAboutPageContent = async (): Promise<any> => {
  const res = await sanityClient.fetch(
    `
    *[_type == "aboutPage"] | order(index asc, _updatedAt desc) {
      ${aboutPageFields}
    }`,
    {},
    revalidateQuery
  );
  return res[0];
};

export const getAllPress = async (): Promise<any> => {
  const res = await sanityClient.fetch(pressIndexQuery, {}, revalidateQuery);
  return res;
};

export const getFooterContent = async (): Promise<any> => {
  const res = await sanityClient.fetch(
    `
  *[_type == "legal" && slug.current == "footer"] | order(_updatedAt desc) [0] {
    ${legalFields}
  }`,
    {},
    revalidateQuery
  );
  return res?.content;
};

export const getAllTooltips = async (): Promise<any> => {
  const res = await sanityClient.fetch(
    `
    *[_type == "tooltips"] | order(index asc, _updatedAt desc) {
      ${tooltipFields}
      }`,
    {},
    { next: { revalidate: 3600 } }
  );
  return res;
};
