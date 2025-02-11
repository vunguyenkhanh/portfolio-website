import { Metadata } from 'next';
import { BlogList } from '@/components/sections/blog/blog-list';
import { getDevToPosts } from '@/lib/services/blog';

export const metadata: Metadata = {
  title: 'Blog | Vu Nguyen Khanh',
  description:
    'Read my latest articles about web development, programming tips, and tech insights.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await getDevToPosts();
  const totalReadTime = posts.reduce(
    (total, post) => total + parseInt(post.readTime.replace(' min', '')),
    0,
  );

  return (
    <main className="flex min-h-screen flex-col pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      </div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="relative space-y-6 text-center sm:text-left">
          {/* Decorative Elements */}
          <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-3xl sm:h-32 sm:w-32" />
          <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-accent/10 blur-3xl sm:h-32 sm:w-32" />

          {/* Title */}
          <div className="relative space-y-2">
            <h1 className="text-4xl font-bold sm:text-5xl">Blog</h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Sharing my thoughts and experiences about web development, programming, and technology.
              Stay updated with the latest trends and best practices.
            </p>
          </div>

          {/* Stats */}
          <div className="relative flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8">
            <div className="flex items-center gap-8 rounded-2xl bg-card/50 p-4 backdrop-blur">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{posts.length}</p>
                <p className="text-sm text-muted-foreground">Articles</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">
                  {Array.from(new Set(posts.map((post) => post.category))).length}
                </p>
                <p className="text-sm text-muted-foreground">Categories</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">{totalReadTime}</p>
                <p className="text-sm text-muted-foreground">Min Read</p>
              </div>
            </div>
          </div>
        </div>

        {/* Blog List with Animation */}
        <div className="relative mt-12 sm:mt-16">
          {/* Decorative Elements */}
          <div className="absolute -left-4 top-1/2 h-48 w-48 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-4 top-1/2 h-48 w-48 rounded-full bg-accent/5 blur-3xl" />

          <BlogList initialPosts={posts} />
        </div>
      </div>
    </main>
  );
}
