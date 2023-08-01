export const sanityConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn:
    typeof document !== 'undefined' && process.env.NODE_ENV === 'production',
  apiVersion: '2022-03-13',
};
