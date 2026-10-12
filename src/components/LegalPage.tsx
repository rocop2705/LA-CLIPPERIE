import Link from "next/link";
import { LEGAL } from "@/lib/config";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="px-4 py-8 md:py-14">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="font-display text-lg font-extrabold">
          ← Clipperie
        </Link>
        <h1 className="mt-6 font-display text-3xl font-extrabold md:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted">Dernière mise à jour : {LEGAL.dateMaj}</p>
        <div className="legal mt-6">{children}</div>
      </div>
    </main>
  );
}
