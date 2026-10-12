import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL, LEGAL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Clipperie.",
};

export default function Page() {
  return (
    <LegalPage title="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        {LEGAL.editeur}
        <br />
        {LEGAL.statut}
        <br />
        SIRET : {LEGAL.siret}
        <br />
        Adresse : {LEGAL.adresse}
        <br />
        TVA : {LEGAL.tva}
        <br />
        Email : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
      </p>
      <p>Directeur de la publication : {LEGAL.directeurPublication}</p>

      <h2>Hébergement</h2>
      <p>
        Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis —{" "}
        <a href="https://vercel.com">vercel.com</a>
      </p>

      <h2>Propriété intellectuelle</h2>
      <p>
        Les textes, le logo et la présentation du site sont la propriété de l&apos;éditeur.
        Toute reproduction sans autorisation est interdite. Les vidéos confiées par les
        clients restent leur propriété.
      </p>

      <h2>Contact</h2>
      <p>
        Pour toute question : <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
    </LegalPage>
  );
}
