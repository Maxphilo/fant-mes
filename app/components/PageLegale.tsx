export function PageLegale({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-xl px-5 pb-20 pt-10">
      <a href="/" className="font-titre text-xl font-bold text-sapin">
        Fantômes
      </a>
      <h1 className="mt-10 font-titre text-4xl font-black leading-tight">
        {titre}
      </h1>
      <div className="mt-8 space-y-4 leading-relaxed">{children}</div>
    </main>
  );
}

export function H({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="pt-6 font-titre text-2xl font-bold leading-tight">
      {children}
    </h2>
  );
}
