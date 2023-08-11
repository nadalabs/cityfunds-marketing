import { ClientConfig, createClient } from '@sanity/client';
import { capitalizeFirstLetter } from '@utils/helpers';
import { IFundContent } from '@utils/models';
import createImageUrlBuilder from '@sanity/image-url';

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

  export const cityfundFields = `
    _id,
    fund_name,
    description,
    image_gallery,
    card_front,
    card_back,
    culture_gallery,
    culture_description,
    culture_articles
  `;
  
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

