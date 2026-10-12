import type { Metadata } from "next";
import Link from "next/link";
import { CONTACT_EMAIL, OFFER } from "@/lib/config";

export const metadata: Metadata = {
  title: "Bienvenue",
  robots: { index: false },
};

const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Ma première vidéo Clipperie",
)}&body=${encodeURIComponent("Bonjour,\n\nVoici le lien vers ma vidéo :\n\n\nMerci !")}`;

export default function Merci() {
  return (
    <main className="px-4 py-12 md:py-20">
      <div className="mx-auto max-w-lg">
        <p className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-rec">
          <span className="h-2 w-2 rounded-full bg-rec" /> C&apos;EST PARTI
        </p>
        <h1 className="mt-3 font-display text-4xl leading-tight font-extrabold">
          Bienvenue chez Clipperie.
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted">
          Ton abonnement est actif. Il ne reste qu&apos;une chose à faire : nous envoyer ta
          première vidéo. Tes clips arrivent sous {OFFER.deliveryDelay}.
        </p>
        <a
          href={mailto}
          className="mt-8 flex min-h-14 items-center justify-center rounded-xl bg-rec px-6 text-lg font-semibold text-white"
        >
          Envoyer ma première vidéo
        </a>
        <p className="mt-4 text-sm text-muted">
          Ton reçu de paiement arrive par email. Si le paiement n&apos;est pas passé, rien
          n&apos;a été débité : tu peux{" "}
          <Link href="/#offre" className="underline">
            réessayer ici
          </Link>{" "}
          ou nous écrire à {CONTACT_EMAIL}.
        </p>
      </div>
    </main>
  );
}
