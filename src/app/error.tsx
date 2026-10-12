"use client";

import Link from "next/link";

export default function ErrorPage({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[70vh] items-center px-4">
      <div className="mx-auto max-w-md text-center">
        <p className="font-mono text-sm text-rec">ERREUR</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold">
          Quelque chose a coincé.
        </h1>
        <p className="mt-3 text-muted">
          Ce n&apos;est pas de ta faute. Réessaie, ou reviens à l&apos;accueil.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <button
            onClick={reset}
            className="min-h-14 rounded-xl bg-rec px-8 font-semibold text-white"
          >
            Réessayer
          </button>
          <Link href="/" className="min-h-11 py-3 font-semibold underline underline-offset-4">
            Revenir à l&apos;accueil
          </Link>
        </div>
      </div>
    </main>
  );
}
