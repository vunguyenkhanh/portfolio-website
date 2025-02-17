'use client';

import { OptimizedImage } from '@/components/ui/optimized-image';
import { BlogPost } from '@/lib/services/blog';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { memo } from 'react';

export const BlogCard = memo(function BlogCard(post: BlogPost) {
  const isDefaultCover = post.imageUrl === '/blog/default-cover.svg';

  return (
    <Link href={post.link} target="_blank" rel="noopener noreferrer">
      <motion.article
        className="group relative h-full overflow-hidden rounded-xl bg-card/50 backdrop-blur transition-all hover:bg-card/80"
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Image */}
        <div className="relative aspect-video w-full">
          <OptimizedImage
            src={post.imageUrl}
            alt={post.title}
            fill
            priority={isDefaultCover}
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            loading={isDefaultCover ? undefined : 'lazy'}
            wrapperClassName="h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Categories */}
          <div className="mb-3 flex flex-wrap gap-2">
            {post.categories.map((category) => (
              <span
                key={category}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="mb-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary">
            {post.title}
          </h2>

          {/* Description */}
          <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{post.description}</p>

          {/* Metadata */}
          <div className="mt-auto flex items-center justify-between text-sm text-muted-foreground">
            {/* Author */}
            <div className="flex items-center space-x-2">
              <div className="relative h-6 w-6">
                <OptimizedImage
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="rounded-full object-cover"
                  sizes="24px"
                  loading="lazy"
                  wrapperClassName="h-full"
                />
              </div>
              <span>{post.author.name}</span>
            </div>

            {/* Date and Read Time */}
            <div className="flex items-center space-x-2 text-xs">
              <time dateTime={new Date(post.date).toISOString()}>{post.date}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
});
