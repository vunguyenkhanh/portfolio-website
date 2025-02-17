import { BlogPost } from '@/lib/services/blog';
import Script from 'next/script';

interface BlogSchemaProps {
  posts: BlogPost[];
  baseUrl: string;
}

export function BlogSchema({ posts, baseUrl }: BlogSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: posts.map((post, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        image: post.imageUrl,
        author: {
          '@type': 'Person',
          name: post.author.name,
          image: post.author.avatar,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Vũ Nguyễn Khánh',
          logo: {
            '@type': 'ImageObject',
            url: `${baseUrl}/logo.png`,
          },
        },
        url: post.link,
        datePublished: new Date(post.date).toISOString(),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': post.link,
        },
        keywords: post.categories.join(', '),
      },
    })),
  };

  return (
    <Script
      id="blog-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
