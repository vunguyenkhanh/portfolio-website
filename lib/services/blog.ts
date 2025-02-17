import Parser from 'rss-parser';

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  date: string;
  readTime: string;
  categories: string[];
  imageUrl: string;
  author: {
    name: string;
    avatar: string;
  };
  link: string;
}

// Extend Parser type to include custom fields
interface CustomFeed extends Parser.Output<CustomItem> {
  items: CustomItem[];
}

interface CustomItem {
  creator?: string;
  'content:encoded'?: string;
  categories?: string[];
  pubDate?: string;
  link?: string;
  title?: string;
  contentSnippet?: string;
}

// Create parser instance with custom fields
const parser = new Parser<CustomFeed>({
  customFields: {
    item: ['creator', 'content:encoded', 'categories'],
  },
});

const DEVTO_FEED_URL = 'https://dev.to/feed/';

export async function getDevToPosts(): Promise<BlogPost[]> {
  try {
    const feed = await parser.parseURL(DEVTO_FEED_URL);

    return feed.items.map((item) => {
      // Extract read time from content (assuming it's in the format "... X min read ...")
      const readTimeMatch = item['content:encoded']?.match(/(\d+)\s+min\s+read/i);
      const readTime = readTimeMatch ? `${readTimeMatch[1]} min` : '5 min';

      // Extract first image from content or use default
      const imageMatch = item['content:encoded']?.match(/<img[^>]+src="([^">]+)"/i);
      const imageUrl = imageMatch
        ? imageMatch[1].replace(/&amp;/g, '&') // Fix encoded ampersands in URLs
        : '/blog/default-cover.svg';

      // Get all categories or use default
      const categories = item.categories?.length ? item.categories : ['Web Development'];

      // Generate slug from title
      const slug =
        item.title
          ?.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') || '';

      // Get author name or use default
      const authorName = item.creator || 'Anonymous';

      // Format date using Intl.DateTimeFormat for better localization
      const date = item.pubDate
        ? new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          }).format(new Date(item.pubDate))
        : 'No date';

      return {
        slug,
        title: item.title || '',
        description: item.contentSnippet?.slice(0, 200) + '...' || '',
        content: item['content:encoded'] || '',
        date,
        readTime,
        categories,
        imageUrl,
        author: {
          name: authorName,
          avatar:
            item['content:encoded']?.match(/class="profile-pic"[^>]+src="([^"]+)"/i)?.[1] ||
            `https://ui-avatars.com/api/?name=${encodeURIComponent(authorName)}&background=random`,
        },
        link: item.link || '',
      };
    });
  } catch (error) {
    console.error('Error fetching dev.to posts:', error);
    return [];
  }
}
