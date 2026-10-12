import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL, LEGAL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Comment Clipperie traite tes données personnelles.",
};

export default function Page() {
  return (
    <LegalPage title="Politique de confidentialité">
      <h2>Qui est responsable de tes données ?</h2>
      <p>
        {LEGAL.editeur}, {LEGAL.adresse}. Contact :{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>

      <h2>Quelles données, et pourquoi ?</h2>
      <ul>
        <li>
          <strong>Ton adresse email et tes messages</strong> : pour te répondre et te
          livrer tes clips.
        </li>
        <li>
          <strong>Les vidéos que tu nous confies</strong> : uniquement pour en tirer tes
          clips.
        </li>
        <li>
          <strong>Tes informations de paiement</strong> : traitées directement par Stripe.
          Nous ne voyons jamais ton numéro de carte.
        </li>
        <li>
          <strong>Des statistiques de visite anonymes</strong> (Vercel Analytics) : pages
          vues et provenance, sans cookie et sans suivi d&apos;une visite à l&apos;autre.
        </li>
      </ul>
      <p>
        Base légale : l&apos;exécution du contrat (livraison, paiement), et notre intérêt
        légitime à mesurer l&apos;audience du site.
      </p>

      <h2>Combien de temps ?</h2>
      <p>
        Tes vidéos et tes clips sont supprimés 30 jours après la livraison. Les données
        de facturation sont conservées 10 ans, comme l&apos;exige la loi.
      </p>

      <h2>Qui y a accès ?</h2>
      <p>
        Seulement nous, et nos prestataires techniques : Vercel (hébergement), Stripe
        (paiement), et notre fournisseur de messagerie. Nous ne vendons jamais tes données.
      </p>

      <h2>Tes droits</h2>
      <p>
        Tu peux accéder à tes données, les corriger, les supprimer ou t&apos;opposer à leur
        traitement en écrivant à <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Si
        tu estimes que tes droits ne sont pas respectés, tu peux saisir la CNIL (
        <a href="https://www.cnil.fr">cnil.fr</a>).
      </p>
    </LegalPage>
  );
}
