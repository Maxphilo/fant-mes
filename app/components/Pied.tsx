import { ENTREPRISE } from "@/lib/entreprise";

export function Pied() {
  return (
    <footer className="mx-auto max-w-xl border-t-2 border-dotted border-encre/40 px-5 pb-10 pt-6 text-sm">
      <nav className="flex flex-wrap gap-x-5 gap-y-2">
        <a className="underline" href="/mentions-legales">Mentions légales</a>
        <a className="underline" href="/cgv">CGV</a>
        <a className="underline" href="/confidentialite">Confidentialité</a>
      </nav>
      <p className="mt-3 text-encre/70">
        {ENTREPRISE.nomCommercial} · {ENTREPRISE.nom}, {ENTREPRISE.statut} · SIRET {ENTREPRISE.siret}
      </p>
    </footer>
  );
}
