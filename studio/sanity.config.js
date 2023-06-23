import { visionTool } from '@sanity/vision';
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { unsplashImageAsset } from 'sanity-plugin-asset-source-unsplash';

import { resolveProductionUrl } from './resolveProductionUrl';
import { author } from './schemas/author';
import { post } from './schemas/post';
import { partner } from './schemas/partner';
import { legal } from './schemas/legal';
import { press } from './schemas/press';
import { teammate } from './schemas/teammate';
import { testimonial } from './schemas/testimonial';
import { promo } from './schemas/promo';
import { home } from './schemas/home';

const title = import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_TITLE || 'Nada Finance';
const projectId = import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineConfig({
  basePath: '/',
  projectId: projectId || '',
  dataset: dataset || '',
  title,
  schema: {
    // If you want more content types, you can add them to this array
    types: [author, post, partner, legal, press, teammate, testimonial, promo, home],
  },
  document: {
    productionUrl: resolveProductionUrl,
  },
  plugins: [
    deskTool({}),
    // Add an image asset source for Unsplash
    unsplashImageAsset(),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool(),
  ],
});
