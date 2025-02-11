'use client';

import type { BlogPost } from '@/lib/services/blog';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export function BlogCard({
  title,
  description,
  date,
  readTime,
  categories,
  imageUrl,
  author,
  link,
}: BlogPost) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative overflow-hidden rounded-xl bg-card"
    >
      {/* Blog Image */}
      <Link href={link} className="relative block h-48 w-full overflow-hidden" target="_blank">
        <Image
          src={imageUrl}
          alt={title}
          width={800}
          height={400}
          priority={imageUrl === '/blog/default-cover.svg'}
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </Link>

      {/* Content */}
      <div className="p-6">
        {/* Categories & Date */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap gap-2 flex-1">
            {categories.map((category) => (
              <span
                key={category}
                className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {category}
              </span>
            ))}
          </div>
          <span className="text-xs text-muted-foreground shrink-0">{date}</span>
        </div>

        {/* Title & Description */}
        <Link href={link} className="mt-4 block space-y-2" target="_blank">
          <h3 className="line-clamp-2 text-xl font-semibold transition-colors group-hover:text-primary">
            {title}
          </h3>
          <p className="line-clamp-2 text-sm text-muted-foreground">{description}</p>
        </Link>

        {/* Author & Read Time */}
        <div className="mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={author.avatar}
              alt={author.name}
              width={32}
              height={32}
              className="rounded-full"
            />
            <span className="text-sm font-medium">{author.name}</span>
          </div>
          <span className="text-xs text-muted-foreground">{readTime} read</span>
        </div>
      </div>
    </motion.article>
  );
}
