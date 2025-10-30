import Footer from "@components/Footer";
import Navigation from "@components/Navigation";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-linear-to-r from-primary to-primary-light bg-clip-text text-transparent">
              About Us
            </h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 mb-6">
                Welcome to Metta Vibes - your partner in mental health and wellness.
              </p>
              <p className="text-foreground/70 mb-4">
                Content coming soon...
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
