'use client';

import type { BlogPost } from '@/lib/services/blog';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { BlogCard } from './blog-card';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface BlogListProps {
  initialPosts: BlogPost[];
}

export function BlogList({ initialPosts }: BlogListProps) {
  const [posts, setPosts] = useState<BlogPost[]>(initialPosts);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Get unique categories from all posts
  const categories = Array.from(
    new Set(posts.flatMap((post) => post.categories)),
  ).sort();

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = selectedCategory
      ? post.categories.includes(selectedCategory)
      : true;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFilter = async (category: string | null) => {
    setIsLoading(true);
    setSelectedCategory(category);
    // Simulate loading state
    await new Promise((resolve) => setTimeout(resolve, 300));
    setIsLoading(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Filters */}
      <div className="flex flex-col gap-6">
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-lg border border-border bg-card/50 px-4 py-2 pl-10 backdrop-blur focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:max-w-md"
          />
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          <button
            key="all"
            onClick={() => handleFilter(null)}
            disabled={isLoading}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              selectedCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-card/50 text-muted-foreground hover:bg-card/80 backdrop-blur'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              disabled={isLoading}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card/50 text-muted-foreground hover:bg-card/80 backdrop-blur'
              } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`${selectedCategory}-${searchQuery}`}
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredPosts.map((post) => (
            <motion.div key={post.slug} variants={item}>
              <BlogCard {...post} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="rounded-xl bg-card/50 p-8 text-center backdrop-blur"
        >
          <p className="text-lg text-muted-foreground">No articles found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              handleFilter(null);
            }}
            disabled={isLoading}
            className="mt-4 text-sm text-primary hover:underline disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear filters
          </button>
        </motion.div>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-sm"
        >
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </motion.div>
      )}
    </motion.div>
  );
}
