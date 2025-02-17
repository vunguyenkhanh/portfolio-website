import { Metadata } from 'next';

interface GenerateMetadataProps {
  title: string;
  description: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  authors?: string[];
  keywords?: string[];
}

export function createMetadata({
  title,
  description,
  image = '/og-image.jpg',
  type = 'website',
  publishedTime,
  authors,
  keywords = [],
}: GenerateMetadataProps): Metadata {
  const metadata: Metadata = {
    title: {
      default: title,
      template: `%s | Vũ Nguyễn Khánh`,
    },
    description,
    keywords: [
      'portfolio',
      'web developer',
      'frontend developer',
      'software engineer',
      ...keywords,
    ],
    authors: authors?.map((author) => ({ name: author })) || [{ name: 'Vũ Nguyễn Khánh' }],
    creator: 'Vũ Nguyễn Khánh',
    metadataBase: new URL('https://vunguyenkhanh.com'),
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      ...(publishedTime && { publishedTime }),
      locale: 'en_US',
      siteName: 'Vũ Nguyễn Khánh',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@vunguyenkhanh',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-site-verification',
    },
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US',
        'vi-VN': '/vi-VN',
      },
    },
  };

  return metadata;
}
