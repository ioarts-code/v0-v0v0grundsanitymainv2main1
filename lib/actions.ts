'use server';

import { sanityClient } from './sanity';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(sanityClient);

function urlFor(source: any) {
  return builder.image(source);
}

export interface Post {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  content: string;
  image?: any;
  imageUrl?: string;
  price?: number;
}

export async function getPosts(): Promise<Post[]> {
  try {
    const posts = await sanityClient.fetch(
      `*[_type == "post"] | order(_createdAt desc) {
        _id,
        title,
        slug,
        content,
        image,
        price
      }`
    );
    return posts.map((post: Post) => ({
      ...post,
      imageUrl: post.image ? urlFor(post.image).width(800).height(600).url() : undefined,
    }));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const post = await sanityClient.fetch(
      `*[_type == "post" && slug.current == $slug][0] {
        _id,
        title,
        slug,
        content,
        image,
        price
      }`,
      { slug }
    );
    
    if (!post) return null;
    
    return {
      ...post,
      imageUrl: post.image ? urlFor(post.image).url() : undefined,
    };
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}
