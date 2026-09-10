import Link from "next/link";
import NavBar from "@/components/NavBar";
import PageHero from "@/components/PageHero";
import { posts } from "./posts";

export const metadata = {
  title: "Blog",
  description: "Artículos sobre investigación criminal, criminalística y ciencias forenses.",
};


export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <PageHero
        title="Blog"
        subtitle="Artículos sobre investigación criminal, criminalística y ciencias forenses."
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <ul className="space-y-8">
            {posts.map((p) => (
              <li key={p.slug} className="border-b border-gray-200 pb-8">
                <Link href={`/blog/${p.slug}`} className="group block">
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-udeo-red transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-2 text-gray-600">{p.excerpt}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-udeo-red">
                    Leer artículo →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
