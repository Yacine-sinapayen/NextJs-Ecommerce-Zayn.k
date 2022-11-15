import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient ({
    projectId:'m22u0z3b',
    dataset:'production',
    apiVersion:'2022-03-10',
    useCdn:true,
    token:process.env.NEXT_PUBLICS_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);