import * as Prismic from '@prismicio/client';

export function getPrismicClient(req?: {}) {
  const prismic = Prismic.createClient(process.env.PRISMIC_API_ENDPOINT, {
    ...req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });

  return prismic;
}