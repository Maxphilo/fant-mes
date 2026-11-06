import Stripe from "stripe";

export const dynamic = "force-dynamic";
export const metadata = { title: "Merci — Fantômes", robots: { index: false } };

async function paiementConfirme(id: string | undefined) {
  if (!id || !id.startsWith("cs_") || id.length > 200) return false;
  const cle = process.env.STRIPE_SECRET_KEY;
  if (!cle) return false;
  try {
    const stripe = new Stripe(cle);
    const session = await stripe.checkout.sessions.retrieve(id);
    return session.payment_status === "paid";
  } catch {
    return false;
  }
}

export default async function Merci({
  searchParams,
}: {
  searchParams: { session_id?: string };
}) {
  const ok = await paiementConfirme(searchParams.session_id);
  const contact = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  return (
    <main className="mx-auto max-w-xl px-5 pb-20 pt-10">
      <a href="/" className="font-titre text-xl font-bold text-sapin">
        Fantômes
      </a>

      {ok ? (
        <>
          <h1 className="mt-10 font-titre text-4xl font-black leading-tight">
            Paiement reçu, merci.
          </h1>
          <p className="mt-6 text-lg leading-relaxed">
            Voici la suite, en une seule action : envoie-nous ton relevé
            bancaire par e-mail
            {contact ? (
              <>
                {" "}à{" "}
                <a className="font-bold underline" href={`mailto:${contact}`}>
                  {contact}
                </a>
              </>
            ) : null}
            . Tu reçois ta liste d’abonnements et tes lettres de résiliation
            sous 24 heures.
          </p>
          <p className="mt-4 text-sm text-encre/70">
            Satisfait ou remboursé pendant 14 jours : un simple e-mail suffit.
          </p>
        </>
      ) : (
        <>
          <h1 className="mt-10 font-titre text-4xl font-black leading-tight">
            On n’a pas pu confirmer ton paiement.
          </h1>
          <p className="mt-6 text-lg leading-relaxed">
            Aucun montant n’est pris tant que le paiement n’est pas confirmé.
            Tu peux réessayer depuis la page des formules.
          </p>
          <a
            href="/#formules"
            className="mt-8 flex h-14 w-full items-center justify-center rounded-lg bg-brule text-lg font-bold text-white"
          >
            Revenir aux formules
          </a>
        </>
      )}
    </main>
  );
}
