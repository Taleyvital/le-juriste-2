import Link from "next/link";

const roles = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1M4.22 4.22l.707.707m12.728 12.728.707.707M3 12h1m16 0h1M4.927 19.073l.707-.707M18.364 5.636l.707-.707M12 7a5 5 0 100 10A5 5 0 0012 7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: "Directeur Juridique",
    description: "Expert en conformité et stratégie juridique d'entreprise.",
    href: null,
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Président d'ONG",
    description: "Engagement social pour l'accès au droit et l'éducation civique.",
    href: "/ong",
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.25} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
      </svg>
    ),
    title: "Conférencier Juridique",
    description: "Animer des conférences sur le droit pour rendre la loi accessible à tous.",
    href: "/jeune-parlementaire",
  },
];

export default function Roles() {
  return (
    <section className="w-full bg-[#f6f3f5] border-y border-[#e4e2e4]">
      <div className="max-w-[1200px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-[#e4e2e4]">
          {roles.map((role) => {
            const inner = (
              <>
                <div className="text-[#45464d]">{role.icon}</div>
                <h3 className="font-serif text-[18px] font-semibold text-[#1b1b1d] leading-snug">
                  {role.title}
                </h3>
                <p className="font-sans text-[14px] leading-[1.65] text-[#45464d]">
                  {role.description}
                </p>
                {role.href && (
                  <span className="font-sans text-[11px] font-semibold tracking-[0.08em] uppercase text-[#1b1b1d] underline underline-offset-4">
                    Découvrir →
                  </span>
                )}
              </>
            );

            return role.href ? (
              <Link
                key={role.title}
                href={role.href}
                className="flex flex-col gap-4 px-8 py-10 md:py-8 first:pl-0 last:pr-0 hover:bg-[#eae7e9] transition-colors duration-200 rounded-[4px]"
              >
                {inner}
              </Link>
            ) : (
              <div
                key={role.title}
                className="flex flex-col gap-4 px-8 py-10 md:py-8 first:pl-0 last:pr-0"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
