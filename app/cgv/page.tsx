import { ENTREPRISE as E } from "@/lib/entreprise";
import { PageLegale, H } from "../components/PageLegale";

export const metadata = { title: "Conditions générales de vente — Fantômes" };

export default function Page() {
  return (
    <PageLegale titre="Conditions générales de vente">
      <H>1. Vendeur</H>
      <p>
        {E.nom}, {E.statut}, SIRET {E.siret}, {E.adresse}. Contact :{" "}
        <a className="underline" href={`mailto:${E.email}`}>{E.email}</a>.
      </p>

      <H>2. Offres et prix</H>
      <p>
        Audit complet : 19 € en une seule fois. Abonnement : 9 € par mois. Les
        prix sont en euros. {E.tva}.
      </p>
      <p>
        L’audit consiste à repérer, dans le relevé bancaire que tu nous
        transmets, les prélèvements réguliers, à les classer par montant annuel
        et à te fournir une lettre de résiliation pour chacun.
      </p>

      <H>3. Paiement</H>
      <p>
        Le paiement se fait en ligne par carte via Stripe. Nous n’avons jamais
        accès à ton numéro de carte.
      </p>

      <H>4. Livraison</H>
      <p>
        Une fois le paiement effectué, tu nous envoies ton relevé par e-mail.
        Tu reçois ton audit par e-mail sous 24 heures après réception du
        relevé.
      </p>

      <H>5. Abonnement</H>
      <p>
        L’abonnement est mensuel, sans engagement, et se renouvelle chaque mois
        jusqu’à sa résiliation. Tu peux le résilier à tout moment par e-mail :
        la résiliation prend effet à la fin de la période déjà payée.
      </p>

      <H>6. Satisfait ou remboursé, 14 jours</H>
      <p>
        Si le service ne te convient pas, écris-nous à {E.email} dans les 14
        jours suivant ton paiement (ou le début de ton abonnement), sans avoir
        à te justifier. Tu es remboursé sous 5 jours ouvrés, avec le même moyen
        de paiement.
      </p>

      <H>7. Droit de rétractation</H>
      <p>
        Si tu es consommateur, tu disposes en plus du droit légal de
        rétractation de 14 jours. La garantie ci-dessus s’applique dans tous
        les cas, même si l’audit t’a déjà été livré.
      </p>

      <H>8. Limites du service</H>
      <p>
        La détection repose sur l’analyse des transactions de ton relevé et peut
        comporter des erreurs. Vérifie chaque prélèvement avant de résilier.
        Les lettres sont des modèles et ne constituent pas un conseil
        juridique. Nous ne garantissons pas un montant d’économies.
      </p>

      <H>9. Données personnelles</H>
      <p>
        Voir la <a className="underline" href="/confidentialite">politique de confidentialité</a>.
      </p>

      <H>10. Médiation</H>
      <p>
        En cas de litige, tu peux contacter gratuitement le médiateur de la
        consommation : {E.mediateur}
      </p>

      <H>11. Droit applicable</H>
      <p>Les présentes conditions sont soumises au droit français.</p>

      <p className="text-sm text-encre/70">Dernière mise à jour : {E.maj}.</p>
    </PageLegale>
  );
}
