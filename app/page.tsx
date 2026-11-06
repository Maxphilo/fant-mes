const benefices = [
  {
    titre: "Tu déposes ton relevé",
    texte:
      "Un fichier, une fois. On repère tout ce qui est prélevé à intervalle régulier.",
  },
  {
    titre: "Tu vois ce que ça coûte par an",
    texte:
      "La liste est classée par montant annuel, pas mensuel. Les petites lignes cessent d’être petites.",
  },
  {
    titre: "Tu résilies en un envoi",
    texte:
      "Chaque abonnement a sa lettre de résiliation, déjà rédigée. Tu la copies, tu l’envoies.",
  },
];

export default function Accueil() {
  return (
    <main className="mx-auto max-w-xl px-5 pb-28 pt-10">
      <p className="font-titre text-xl font-bold text-sapin">Fantômes</p>

      <h1 className="mt-10 font-titre text-[2.6rem] font-black leading-[1.05] sm:text-5xl">
        Trouve les abonnements que tu paies sans t’en servir.
      </h1>

      <p className="mt-6 text-lg leading-relaxed">
        Un essai jamais résilié, un service remplacé, une option activée une
        seule fois. Chaque prélèvement est petit. Ensemble, ils ne le sont pas.
      </p>

      <a
        href="#formules"
        className="mt-8 flex h-14 w-full items-center justify-center rounded-lg bg-brule text-lg font-bold text-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-encre"
      >
        Commencer, c’est gratuit
      </a>
      <p className="mt-3 text-sm text-encre/70">
        Pas de carte bancaire pour commencer.
      </p>

      <section className="mt-16 border-t-2 border-dotted border-encre/40 pt-10">
        <p className="text-base">Trois abonnements oubliés à 8 € par mois, c’est</p>
        <p className="pointille mt-2 font-titre text-6xl font-black text-sapin">
          288 € par an
        </p>
        <p className="mt-4 text-base leading-relaxed">
          Soit de quoi payer des vacances de week-end, pour des services que tu
          n’ouvres plus.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-titre text-3xl font-bold leading-tight">
          Comment ça se passe
        </h2>
        <ol className="mt-6 space-y-6">
          {benefices.map((b, i) => (
            <li key={b.titre} className="flex gap-4">
              <span className="font-titre text-3xl font-black text-brule">
                {i + 1}
              </span>
              <div>
                <h3 className="text-lg font-bold">{b.titre}</h3>
                <p className="mt-1 leading-relaxed">{b.texte}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        id="formules"
        className="mt-16 scroll-mt-6 rounded-lg bg-sable p-6"
      >
        <h2 className="font-titre text-3xl font-bold leading-tight">
          Deux façons de faire
        </h2>

        <div className="mt-6 space-y-4">
          <div className="rounded-lg border-2 border-sapin bg-papier p-5">
            <p className="font-titre text-4xl font-black">
              19 €
              <span className="ml-2 font-texte text-base font-normal">
                une seule fois
              </span>
            </p>
            <p className="mt-2 leading-relaxed">
              Un audit complet de ton relevé. Tu gardes la liste et les lettres.
            </p>
          </div>

          <div className="rounded-lg border-2 border-encre/30 bg-papier p-5">
            <p className="font-titre text-4xl font-black">
              9 €
              <span className="ml-2 font-texte text-base font-normal">
                par mois, soit 30 centimes par jour
              </span>
            </p>
            <p className="mt-2 leading-relaxed">
              Tu déposes un nouveau relevé quand tu veux et ton total économisé
              reste à jour.
            </p>
          </div>
        </div>

        <p className="mt-6 font-bold">
          Satisfait ou remboursé pendant 14 jours.
        </p>
        <p className="mt-1 leading-relaxed">
          Écris-nous un e-mail dans les 14 jours, sans justification : tu es
          remboursé sous 5 jours ouvrés.
        </p>
        <p className="mt-3 text-sm text-encre/70">
          Sans engagement, résiliable à tout moment.
        </p>

        <p className="mt-6 rounded-lg bg-papier p-4 text-sm leading-relaxed">
          Le bouton de paiement arrive à l’étape suivante.
        </p>
      </section>
    </main>
  );
}
