import { ENTREPRISE as E } from "@/lib/entreprise";
import { PageLegale, H } from "../components/PageLegale";

export const metadata = { title: "Politique de confidentialité — Fantômes" };

export default function Page() {
  return (
    <PageLegale titre="Politique de confidentialité">
      <H>Qui est responsable de tes données</H>
      <p>
        {E.nom}, {E.statut}, SIRET {E.siret}. Contact :{" "}
        <a className="underline" href={`mailto:${E.email}`}>{E.email}</a>.
      </p>

      <H>Les données que nous traitons</H>
      <p>
        Ton adresse e-mail, les informations de paiement (traitées par Stripe,
        nous ne voyons pas ton numéro de carte) et le relevé bancaire que tu
        nous envoies par e-mail. Nous te recommandons de masquer ton IBAN et ton
        solde avant l’envoi : seules les lignes de transactions nous servent.
      </p>

      <H>Pourquoi</H>
      <p>
        Pour te livrer ton audit et gérer ton paiement (exécution du contrat),
        et pour respecter nos obligations comptables.
      </p>

      <H>Combien de temps</H>
      <p>
        Ton relevé est utilisé uniquement pour ton audit, puis supprimé dans les
        7 jours suivant la livraison. Les données de facturation sont conservées
        10 ans, comme la loi l’impose.
      </p>

      <H>Qui y accède</H>
      <p>
        Stripe (paiement), Vercel (hébergement du site) et Google (messagerie
        Gmail, par laquelle transite ton relevé). Ces prestataires peuvent
        traiter des données hors de l’Union européenne, dans le cadre de
        garanties prévues par le RGPD. Nous ne vendons jamais tes données.
      </p>

      <H>Tes droits</H>
      <p>
        Tu peux demander l’accès, la rectification, l’effacement ou la
        limitation de tes données en écrivant à {E.email}. Tu peux aussi
        déposer une réclamation auprès de la CNIL (cnil.fr).
      </p>

      <H>Cookies</H>
      <p>
        Ce site n’utilise aucun cookie publicitaire. La page de paiement Stripe
        peut déposer ses propres cookies, nécessaires au paiement sécurisé.
      </p>

      <p className="text-sm text-encre/70">Dernière mise à jour : {E.maj}.</p>
    </PageLegale>
  );
}
