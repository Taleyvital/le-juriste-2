import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 py-16 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

        {/* Portrait */}
        <div className="w-full md:w-[45%] shrink-0">
          <div className="relative w-full aspect-[4/5] overflow-hidden rounded-[4px] bg-[#c8a882]">
            <Image
              src="/IMG_5212.jpg"
              alt="Yao Mardochée — Le Juriste 2.0"
              fill
              priority
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-6 md:gap-8">
          <h1 className="font-serif text-[38px] md:text-[48px] font-bold leading-[1.2] tracking-[-0.02em] text-[#1b1b1d]">
            LE JURISTE 2.0&nbsp;:{" "}
            <span className="text-[#45464d]">
              Le Droit au service de l&rsquo;Excellence
            </span>
          </h1>

          <p className="font-sans text-[16px] md:text-[17px] leading-[1.65] text-[#45464d] max-w-[480px]">
            Vulgariser le droit ivoirien pour les entrepreneurs et leaders de
            demain. Une expertise juridique moderne pour une vision stratégique.
          </p>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-sans text-[12px] font-semibold tracking-[0.08em] uppercase bg-[#1b1b1d] text-white px-6 py-3.5 rounded-[4px] hover:bg-[#000000] transition-colors duration-200"
            >
              ACCÉDER À L&rsquo;EXPERTISE
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
