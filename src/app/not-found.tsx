import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center px-4">
      <div className="mx-auto max-w-md text-center">
        <p className="font-mono text-sm text-rec">404 · 00:00:00</p>
        <h1 className="mt-3 font-display text-4xl font-extrabold">
          Ce passage a été coupé au montage.
        </h1>
        <p className="mt-3 text-muted">La page que tu cherches n&apos;existe pas, ou plus.</p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-14 items-center justify-center rounded-xl bg-ink px-8 font-semibold text-paper"
        >
          Revenir à l&apos;accueil
        </Link>
      </div>
    </main>
  );
}
