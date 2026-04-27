import Image from "next/image";
import Link from "next/link";

const articles = [
  {
    category: "ENTREPRENEURIAT",
    title: "Droit des Affaires : Les fondamentaux",
    excerpt: "Tout ce qu'un leader doit savoir pour sécuriser ses actifs en Côte d'Ivoire.",
    image: "/blog-1.jpg",
    slug: "droit-des-affaires-fondamentaux",
  },
  {
    category: "CITOYENNETÉ",
    title: "Vie Civile et Droits de l'Homme",
    excerpt: "Comprendre ses droits pour mieux s'épanouir dans la société moderne.",
    image: "/blog-2.jpg",
    slug: "vie-civile-droits-homme",
  },
  {
    category: "LEADERSHIP",
    title: "Le Guide du Jeune Leader",
    excerpt: "L'éthique et la loi comme piliers fondamentaux de votre ascension…",
    image: "/blog-3.jpg",
    slug: "guide-jeune-leader",
  },
];

export default function Blog() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-20">
      {/* Header */}
      <div className="flex items-end justify-between mb-10">
        <div>
          <h2 className="font-serif text-[32px] md:text-[36px] font-semibold text-[#1b1b1d] leading-tight">
            La Gazette Juridique
          </h2>
          <div className="mt-2 w-10 h-[2px] bg-[#1b1b1d]" />
        </div>
        <Link
          href="/blog"
          className="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase text-[#45464d] hover:text-[#1b1b1d] transition-colors duration-200"
        >
          VOIR TOUS LES ARTICLES
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <Link
            key={article.slug}
            href={`/blog/${article.slug}`}
            className="group flex flex-col gap-4"
          >
            {/* Thumbnail */}
            <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[4px] bg-[#e4e2e4]">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Meta */}
            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#76777d]">
                {article.category}
              </span>
              <h3 className="font-serif text-[17px] font-semibold text-[#1b1b1d] leading-snug group-hover:text-[#45464d] transition-colors duration-200">
                {article.title}
              </h3>
              <p className="font-sans text-[13px] leading-[1.65] text-[#45464d]">
                {article.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
