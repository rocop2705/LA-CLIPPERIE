import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { CONTACT_EMAIL, LEGAL, OFFER } from "@/lib/config";

export const metadata: Metadata = {
  title: "Conditions générales de vente",
  description: "Conditions générales de vente de l'abonnement Clipperie.",
};

export default function Page() {
  return (
    <LegalPage title="Conditions générales de vente">
      <h2>1. Objet</h2>
      <p>
        Les présentes conditions régissent la vente de l&apos;abonnement Clipperie, proposé
        par {LEGAL.editeur} (SIRET {LEGAL.siret}), ci-après « le Prestataire ». Le service
        consiste à transformer des vidéos longues fournies par le client en clips verticaux
        de 30 à 60 secondes, sous-titrés, accompagnés d&apos;un titre proposé et livrés par
        lot.
      </p>

      <h2>2. Prix et abonnement</h2>
      <p>
        L&apos;abonnement coûte {OFFER.price} € par mois, {LEGAL.tva}. Il donne droit à{" "}
        {OFFER.clips} clips par période mensuelle. Les clips non utilisés ne sont pas
        reportés sur le mois suivant. Le paiement est prélevé chaque mois par carte
        bancaire, via la société Stripe, à la date anniversaire de la souscription.
      </p>

      <h2>3. Essai gratuit</h2>
      <p>
        Toute personne peut demander gratuitement le traitement d&apos;une vidéo, sans
        fournir de moyen de paiement. L&apos;essai donne lieu à la livraison de{" "}
        {OFFER.freeClips} clips. Il est limité à une vidéo par personne.
      </p>

      <h2>4. Livraison</h2>
      <p>
        Le client transmet sa vidéo par lien ou par fichier. Les clips sont livrés par
        email, sous forme de lien de téléchargement, dans un délai indicatif de{" "}
        {OFFER.deliveryDelay} à compter de la réception de la vidéo.
      </p>

      <h2>5. Contenus du client</h2>
      <p>
        Le client garantit détenir les droits sur les vidéos qu&apos;il transmet. Il reste
        propriétaire de ses vidéos et des clips produits, qu&apos;il peut publier librement.
        Le Prestataire n&apos;utilise ces contenus que pour réaliser le service, et ne les
        publie jamais sans l&apos;accord écrit du client.
      </p>

      <h2>6. Garantie satisfait ou remboursé</h2>
      <p>
        Pendant les {OFFER.guaranteeDays} jours qui suivent le premier paiement, le client
        peut demander le remboursement intégral de ce paiement, sans avoir à se justifier,
        par simple email à <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Le
        remboursement est effectué sur la carte utilisée, sous {OFFER.refundDelay} à compter
        de la demande, et l&apos;abonnement est alors résilié.
      </p>

      <h2>7. Droit de rétractation</h2>
      <p>
        Conformément au Code de la consommation, le client consommateur dispose d&apos;un
        délai de 14 jours à compter de la souscription pour se rétracter, par email à{" "}
        <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. S&apos;il a demandé que le
        service commence avant la fin de ce délai, le montant correspondant au service
        déjà fourni peut être retenu. En pratique, la garantie de l&apos;article 6, plus
        favorable, s&apos;applique : le remboursement est intégral.
      </p>

      <h2>8. Résiliation</h2>
      <p>
        L&apos;abonnement est sans engagement. Le client peut le résilier à tout moment par
        email à <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. La résiliation prend
        effet à la fin de la période mensuelle en cours ; aucun nouveau prélèvement
        n&apos;a lieu ensuite.
      </p>

      <h2>9. Responsabilité</h2>
      <p>
        Le Prestataire s&apos;engage à fournir le service avec soin. Il ne garantit pas un
        nombre de vues ou d&apos;abonnés obtenus grâce aux clips.
      </p>

      <h2>10. Litiges et médiation</h2>
      <p>
        Les présentes conditions sont soumises au droit français. En cas de litige, le
        client peut d&apos;abord contacter le Prestataire par email. À défaut d&apos;accord,
        le client consommateur peut recourir gratuitement au médiateur de la consommation
        : {LEGAL.mediateur}.
      </p>
    </LegalPage>
  );
}
