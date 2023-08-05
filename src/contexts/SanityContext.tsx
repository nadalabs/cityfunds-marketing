import { ClientConfig, createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';
import { capitalizeFirstLetter } from '@utils/helpers';
import { IFundContent } from '@utils/models';
import { createContext, ReactNode, useContext } from 'react';

export interface ISanityContext {
  getAllFundsContent: () => Promise<IFundContent[]>;
  getFundContentById: (id: string) => Promise<IFundContent>;
}

const DefaultValues: ISanityContext = {
  getAllFundsContent: async () => [],
  getFundContentById: async () => Promise.resolve({} as IFundContent),
};

const SanityContext = createContext<ISanityContext>(DefaultValues);

export function useSanity() {
  return useContext(SanityContext);
}

interface IProps {
  children: ReactNode;
}

// Cityfund Queries
const cityfundFields = `
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

const sanityConfig: ClientConfig = {
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-03-13',
  useCdn: true,
};
export const sanityClient = createClient(sanityConfig);
const imageBuilder = createImageUrlBuilder(sanityConfig as any);
export const urlForImage = (source: string, height: number, width: number) =>
  imageBuilder.image(source).fit('fill').height(height).width(width);

export function SanityProvider({ children }: IProps) {
  const getAllFundsContent = async (): Promise<IFundContent[]> => {
    const res = await sanityClient.fetch(`
    *[_type == "cityfund"] | order(index asc, _updatedAt desc) {
      ${cityfundFields}
    }`);
    return res;
  };

  const getFundContentById = async (id: string): Promise<IFundContent> => {
    const res = await sanityClient.fetch(`
    *[_type == "cityfund" && fund_name == "${capitalizeFirstLetter(id)}"] {
      ${cityfundFields}
    }`);
    return res[0];
  };

  const value = {
    getAllFundsContent,
    getFundContentById,
  };

  return (
    <SanityContext.Provider value={value}>{children}</SanityContext.Provider>
  );
}
