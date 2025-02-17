'use client';

import { LoadingSpinner } from '@/components/ui/loading-spinner';
import type { BlogPost } from '@/lib/services/blog';
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { BlogCard } from './blog-card';

const POSTS_PER_PAGE = 9;

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
  const [posts] = useState<BlogPost[]>(initialPosts);
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const loadingRef = useRef(false);

  // Intersection Observer for infinite scroll
  const { ref: loadMoreRef, inView } = useInView({
    threshold: 0,
    rootMargin: '100px',
  });

  // Debounced search with proper dependencies
  const debouncedSearch = useCallback((query: string) => {
    setSearchQuery(query);
    setPage(1);
  }, []);

  // Get unique categories from all posts
  const categories = useMemo(() => {
    return Array.from(new Set(posts.flatMap((post) => post.categories))).sort();
  }, [posts]);

  // Filter posts based on category and search
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory = selectedCategory ? post.categories.includes(selectedCategory) : true;
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [posts, selectedCategory, searchQuery]);

  // Load more posts when scrolling
  useEffect(() => {
    if (inView && !loadingRef.current) {
      loadingRef.current = true;
      setIsLoading(true);

      // Simulate API call delay
      setTimeout(() => {
        const nextPosts = filteredPosts.slice(0, page * POSTS_PER_PAGE);
        setDisplayedPosts(nextPosts);
        setPage((prev) => prev + 1);
        setIsLoading(false);
        loadingRef.current = false;
      }, 500);
    }
  }, [inView, filteredPosts, page]);

  // Reset displayed posts when filters change
  useEffect(() => {
    setDisplayedPosts(filteredPosts.slice(0, POSTS_PER_PAGE));
    setPage(1);
  }, [filteredPosts]);

  const handleFilter = async (category: string | null) => {
    setIsLoading(true);
    setSelectedCategory(category);
    setPage(1);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setIsLoading(false);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSearchQuery('');
        handleFilter(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Filters */}
      <div className="flex flex-col gap-6">
        {/* Search with loading indicator */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles... (Press Esc to clear)"
            onChange={(e) => debouncedSearch(e.target.value)}
            className="w-full rounded-lg border border-border bg-card/50 px-4 py-2 pl-10 backdrop-blur focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary sm:max-w-md"
            aria-label="Search articles"
          />
          {isLoading && (
            <div className="absolute right-3 top-2.5">
              <LoadingSpinner size="sm" variant="primary" />
            </div>
          )}
          <svg
            className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>

        {/* Category Filter with animations */}
        <motion.div
          className="flex flex-wrap gap-2"
          variants={container}
          initial="hidden"
          animate="show"
          role="group"
          aria-label="Filter by category"
        >
          <motion.button
            variants={item}
            key="all"
            onClick={() => handleFilter(null)}
            disabled={isLoading}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              selectedCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-card/50 text-muted-foreground hover:bg-card/80 backdrop-blur'
            } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
            aria-pressed={selectedCategory === null}
          >
            All
          </motion.button>
          {categories.map((category) => (
            <motion.button
              variants={item}
              key={category}
              onClick={() => handleFilter(category)}
              disabled={isLoading}
              className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card/50 text-muted-foreground hover:bg-card/80 backdrop-blur'
              } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* Blog Grid with Infinite Scroll */}
      <AnimatePresence mode="wait">
        {displayedPosts.length > 0 ? (
          <motion.div
            key="content"
            variants={container}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {displayedPosts.map((post) => (
              <motion.div
                key={post.slug}
                variants={item}
                whileHover={{ y: -5 }}
                whileTap={{ scale: 0.98 }}
              >
                <BlogCard {...post} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-card/50 p-8 text-center backdrop-blur"
          >
            <p className="text-lg text-muted-foreground">
              No articles found matching your criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                handleFilter(null);
              }}
              className="mt-4 text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              Clear filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Load More Trigger */}
      {displayedPosts.length < filteredPosts.length && (
        <div ref={loadMoreRef} className="h-10">
          {isLoading && (
            <LoadingSpinner
              size="lg"
              variant="primary"
              text="Loading more articles..."
              className="py-4"
            />
          )}
        </div>
      )}

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-4 right-4 rounded-full bg-primary p-3 text-primary-foreground shadow-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Scroll to top"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}
