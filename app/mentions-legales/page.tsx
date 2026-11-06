import { ENTREPRISE as E } from "@/lib/entreprise";
import { PageLegale, H } from "../components/PageLegale";

export const metadata = { title: "Mentions légales — Fantômes" };

export default function Page() {
  return (
    <PageLegale titre="Mentions légales">
      <H>Éditeur du site</H>
      <p>
        Le site Fantômes est édité par {E.nom}, {E.statut}, SIRET {E.siret}.
        <br />Adresse : {E.adresse}
        <br />E-mail : <a className="underline" href={`mailto:${E.email}`}>{E.email}</a>
        <br />{E.tva}.
      </p>
      <p>Directeur de la publication : {E.nom}.</p>

      <H>Hébergeur</H>
      <p>
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
        (vercel.com).
      </p>

      <H>Propriété intellectuelle</H>
      <p>
        Les textes, le nom et l’identité visuelle de Fantômes sont protégés.
        Toute reproduction sans autorisation écrite est interdite.
      </p>

      <H>Données personnelles</H>
      <p>
        Le traitement de tes données est détaillé dans la{" "}
        <a className="underline" href="/confidentialite">politique de confidentialité</a>.
      </p>

      <p className="text-sm text-encre/70">Dernière mise à jour : {E.maj}.</p>
    </PageLegale>
  );
}
