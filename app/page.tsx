export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Container chính */}
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center min-h-[80vh]">
          <h1 className="text-4xl md:text-6xl font-bold text-center">
            Chào mừng đến với Portfolio của tôi
          </h1>
        </section>
      </div>
    </main>
  );
}
