export default function page() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="px-4 py-20">
          <div className="container mx-auto max-w-4xl">
            <h1 className="from-primary to-primary-light mb-6 bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Contact Us
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 mb-6 text-lg">
                Get in touch with Metta Vibes today.
              </p>
              <p className="text-foreground/70 mb-4">Content coming soon...</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
