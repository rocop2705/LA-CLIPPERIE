import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/config";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line px-4 pt-8 pb-28 text-sm text-muted md:pb-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p>
          <span className="font-display font-bold text-ink">Clipperie</span> ·
          Contact :{" "}
          <a className="underline" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </p>
        <nav className="flex flex-wrap gap-x-5 gap-y-2">
          <Link className="underline-offset-4 hover:underline" href="/mentions-legales">
            Mentions légales
          </Link>
          <Link className="underline-offset-4 hover:underline" href="/cgv">
            CGV
          </Link>
          <Link className="underline-offset-4 hover:underline" href="/confidentialite">
            Confidentialité
          </Link>
        </nav>
      </div>
    </footer>
  );
}
