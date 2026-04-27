import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConferenceGallery from "@/components/ConferenceGallery";

export const metadata = {
  title: "Conférences Juridiques — Yao Mardochée | Le Juriste 2.0",
  description:
    "Animateur de conférences sur le droit en Côte d'Ivoire. Découvrez les interventions de Yao Mardochée pour rendre le droit accessible à tous.",
};

const base = "/jeune-parlementaire";

const images = [
  {
    src: `${base}/WhatsApp%20Image%202026-04-27%20at%2010.31.38.jpeg`,
    alt: "Conférence juridique 1",
    quote: "Le droit n'est pas une arme réservée aux puissants. C'est un bouclier que chaque citoyen doit apprendre à tenir.",
  },
  {
    src: `${base}/WhatsApp%20Image%202026-04-27%20at%2010.31.38%20(1).jpeg`,
    alt: "Conférence juridique 2",
    quote: "Un entrepreneur qui ignore le droit des affaires construit sa réussite sur du sable. La loi est le fondement de toute ambition durable.",
  },
  {
    src: `${base}/WhatsApp%20Image%202026-04-27%20at%2010.31.38%20(2).jpeg`,
    alt: "Conférence juridique 3",
    quote: "Comprendre ses droits, c'est déjà refuser d'être victime. L'ignorance juridique coûte plus cher que n'importe quelle formation.",
  },
  {
    src: `${base}/WhatsApp%20Image%202026-04-27%20at%2010.31.38%20(3).jpeg`,
    alt: "Conférence juridique 4",
    quote: "La jeunesse africaine n'a pas besoin de permission pour exceller. Elle a besoin d'outils — et le droit est le premier d'entre eux.",
  },
  {
    src: `${base}/WhatsApp%20Image%202026-04-27%20at%2010.31.38%20(4).jpeg`,
    alt: "Conférence juridique 5",
    quote: "Signer un contrat sans le lire, c'est confier les clés de son avenir à un inconnu. Lisez. Comprenez. Négociez.",
  },
  {
    src: `${base}/WhatsApp%20Image%202026-04-27%20at%2010.31.39.jpeg`,
    alt: "Conférence juridique 6",
    quote: "Le développement d'un pays commence dans les salles de classe et les prétoires. Éduquons la jeunesse au droit, et elle bâtira des nations justes.",
  },
  {
    src: `${base}/WhatsApp%20Image%202026-04-27%20at%2010.31.39%20(1).jpeg`,
    alt: "Conférence juridique 7",
    quote: "Une société qui ne forme pas ses citoyens à leurs droits est une société qui choisit l'injustice par défaut.",
  },
  {
    src: `${base}/WhatsApp%20Image%202026-04-27%20at%2010.31.39%20(2).jpeg`,
    alt: "Conférence juridique 8",
    quote: "Le droit ivoirien est une richesse. Encore faut-il savoir l'exploiter. C'est tout l'enjeu de ce que nous construisons ensemble.",
  },
  {
    src: `${base}/WhatsApp%20Image%202026-04-27%20at%2010.31.39%20(3).jpeg`,
    alt: "Conférence juridique 9",
    quote: "Chaque question posée dans cette salle est une victoire contre l'ignorance. Continuez à questionner — c'est l'acte le plus juridique qui soit.",
  },
];

export default function ConferencesPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">

        {/* Hero */}
        <section className="w-full max-w-[1200px] mx-auto px-6 pt-16 pb-12">
          <div className="flex flex-col gap-5 max-w-[680px]">
            <span className="font-sans text-[11px] font-semibold tracking-[0.14em] uppercase text-[#76777d]">
              Conférences & Interventions
            </span>
            <h1 className="font-serif text-[38px] md:text-[52px] font-bold leading-[1.15] tracking-[-0.02em] text-[#1b1b1d]">
              Le Droit Expliqué, <br className="hidden md:block" />
              Partout où il le Faut
            </h1>
            <p className="font-sans text-[16px] md:text-[17px] leading-[1.7] text-[#45464d]">
              Intervenir dans les universités, les entreprises et les espaces
              communautaires pour rendre le droit compréhensible et actionnable.
              Chaque conférence est une opportunité de transformer la complexité
              juridique en outil concret pour les citoyens et les entrepreneurs.
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="w-full bg-[#f6f3f5] border-y border-[#e4e2e4]">
          <div className="max-w-[1200px] mx-auto px-6 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-[#e4e2e4]">
              {[
                { value: "30+", label: "Conférences animées" },
                { value: "1 000+", label: "Participants touchés" },
                { value: "5", label: "Villes couvertes" },
                { value: "3", label: "Thématiques phares" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1.5 px-6 py-4">
                  <span className="font-serif text-[32px] font-bold text-[#1b1b1d]">
                    {stat.value}
                  </span>
                  <span className="font-sans text-[12px] text-[#76777d] text-center tracking-wide">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Thématiques */}
        <section className="w-full max-w-[1200px] mx-auto px-6 py-16">
          <div className="flex flex-col gap-3 mb-10">
            <h2 className="font-serif text-[26px] md:text-[30px] font-semibold text-[#1b1b1d] leading-snug">
              Thématiques Abordées
            </h2>
            <div className="w-8 h-[2px] bg-[#1b1b1d]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                label: "Droit des Affaires",
                desc: "Création d'entreprise, contrats commerciaux, protection des actifs et conformité pour les entrepreneurs ivoiriens.",
              },
              {
                label: "Droits du Citoyen",
                desc: "Connaître ses droits fondamentaux, recours juridiques disponibles et interaction avec les institutions publiques.",
              },
              {
                label: "Droit du Travail",
                desc: "Relations employeur-employé, clauses abusives, licenciement et négociation des contrats de travail.",
              },
            ].map((theme) => (
              <div
                key={theme.label}
                className="flex flex-col gap-3 p-8 border border-[#e4e2e4] rounded-[4px] bg-white"
              >
                <h3 className="font-serif text-[17px] font-semibold text-[#1b1b1d]">
                  {theme.label}
                </h3>
                <p className="font-sans text-[14px] leading-[1.7] text-[#45464d]">
                  {theme.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="w-full max-w-[1200px] mx-auto px-6 pb-20">
          <div className="flex flex-col gap-3 mb-8">
            <h2 className="font-serif text-[26px] md:text-[30px] font-semibold text-[#1b1b1d] leading-snug">
              Moments de Conférences
            </h2>
            <div className="w-8 h-[2px] bg-[#1b1b1d]" />
          </div>
          <ConferenceGallery images={images} />
        </section>

      </main>
      <Footer />
    </>
  );
}
