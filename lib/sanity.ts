import { ClientConfig, createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';
import { capitalizeFirstLetter } from '@utils/helpers';
import { IFundContent } from '@utils/models';
import { cityfundFields, homePageFields, legalFields } from 'lib/queries';

const sanityConfig: ClientConfig = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-03-13',
  useCdn: true,
};

export const sanityClient = createClient(sanityConfig);
const imageBuilder = createImageUrlBuilder(sanityConfig as any);
export const urlForImage = (source: string, height?: number, width?: number) =>
  imageBuilder.image(source).fit('fill').height(height).width(width);

export const getAllFundsContent = async (): Promise<IFundContent[]> => {
  const res = await sanityClient.fetch(`
      *[_type == "cityfund"] | order(index asc, _updatedAt desc) {
        ${cityfundFields}
      }`);
  return res;
};

export const getFundContentById = async (id: string): Promise<IFundContent> => {
  const res = await sanityClient.fetch(`
      *[_type == "cityfund" && fund_name == "${capitalizeFirstLetter(id)}"] {
        ${cityfundFields}
      }`);
  return res[0];
};

export const getHomePageContent = async (): Promise<any> => {
  const res = await sanityClient.fetch(`
    *[_type == "home"] | order(index asc, _updatedAt desc) {
      ${homePageFields}
    }`);
  return res[0];
};

export const getFooterContent = async (): Promise<any> => {
  const res = await sanityClient.fetch(`
  *[_type == "legal" && slug.current == "footer"] | order(_updatedAt desc) [0] {
    ${legalFields}
  }`);
  return res?.content;
};
