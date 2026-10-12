import Timeline from "@/components/Timeline";
import { CONTACT_EMAIL, OFFER, PAYMENT_LINK, TRIAL_MAILTO } from "@/lib/config";

const benefits = [
  {
    n: "01",
    title: "Les moments forts, repérés pour toi",
    text: "La blague qui fait réagir tout le live, la phrase qu'on a envie de partager, l'explication qui débloque tout. On les trouve dans tes deux heures.",
  },
  {
    n: "02",
    title: "Sous-titres incrustés, lisibles sans le son",
    text: "Beaucoup de gens regardent sans le son. Chaque clip est sous-titré mot à mot, en gros, au bon endroit.",
  },
  {
    n: "03",
    title: "Un titre par clip, tout d'un coup",
    text: "Chaque clip arrive au format vertical, de 30 à 60 secondes, avec un titre proposé. Tu télécharges le lot et tu publies.",
  },
];

const steps = [
  {
    t: "Tu envoies ta vidéo",
    d: "Un lien suffit : YouTube, Twitch, Google Drive, WeTransfer…",
  },
  {
    t: "On découpe tout",
    d: "Moments forts, format 9:16, sous-titres, titres.",
  },
  {
    t: `Tu reçois tes clips sous ${OFFER.deliveryDelay}`,
    d: "Par email, en un seul lien de téléchargement.",
  },
];

const faq = [
  {
    q: "Est-ce que ça marche pour mon cas ?",
    a: "Si tu fais du podcast, du live, des formations ou des interviews en français, oui : ces contenus regorgent de passages qui tiennent seuls en 45 secondes. Le plus simple pour en être sûr, c'est ta première vidéo offerte : tu juges sur pièce.",
  },
  {
    q: "Combien de temps ça me prend ?",
    a: `Deux minutes : le temps de nous envoyer le lien de ta vidéo. Tu reçois tes clips sous ${OFFER.deliveryDelay}, il ne te reste plus qu'à les publier.`,
  },
  {
    q: "Et si je veux arrêter ?",
    a: `L'abonnement est sans engagement : tu le résilies à tout moment par un simple email à ${CONTACT_EMAIL}, et il s'arrête à la fin du mois en cours. Et pendant les ${OFFER.guaranteeDays} premiers jours, tu es remboursé intégralement si tu n'es pas satisfait.`,
  },
  {
    q: "Qu'est-ce que je paie exactement ?",
    a: `${OFFER.price} € par mois pour ${OFFER.clips} clips verticaux prêts à publier : découpés, sous-titrés et titrés. Soit environ deux lives par mois, ou ${OFFER.perClip} € le clip.`,
  },
];

function PayButton({ className = "" }: { className?: string }) {
  if (!PAYMENT_LINK) {
    return (
      <span
        className={`flex min-h-14 items-center justify-center rounded-xl bg-ink/30 px-6 text-center font-semibold text-white ${className}`}
      >
        Paiement bientôt disponible
      </span>
    );
  }
  return (
    <a
      href={PAYMENT_LINK}
      className={`flex min-h-14 items-center justify-center rounded-xl bg-ink px-6 text-center text-lg font-semibold text-paper transition hover:bg-ink/85 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-rec ${className}`}
    >
      S&apos;abonner · {OFFER.price} € par mois
    </a>
  );
}

function StartButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={TRIAL_MAILTO}
      className={`flex min-h-14 items-center justify-center rounded-xl bg-rec px-6 text-center text-lg font-semibold text-white shadow-[0_3px_0_var(--color-rec-dark)] transition hover:bg-rec-dark focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-ink active:translate-y-[2px] active:shadow-none ${className}`}
    >
      Commencer : ma vidéo offerte
    </a>
  );
}

export default function Home() {
  return (
    <main>
      {/* En-tête */}
      <header className="px-4 pt-5">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="font-display text-xl font-extrabold tracking-tight">
            Clipperie
            <span className="ml-1 inline-block h-2 w-2 rounded-full bg-rec align-middle" />
          </span>
          <a href="#offre" className="text-sm font-medium underline underline-offset-4">
            Tarif
          </a>
        </div>
      </header>

      {/* Promesse — mot pour mot celle des vidéos */}
      <section className="px-4 pt-10 pb-12 md:pt-20 md:pb-20">
        <div className="mx-auto max-w-5xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-ink/15 bg-card px-3 py-1 font-mono text-xs tracking-wide">
            <span className="h-2 w-2 rounded-full bg-rec" /> REC · 02:00:00 → 30 CLIPS
          </p>
          <h1 className="font-display text-[2.6rem] leading-[1.02] font-extrabold tracking-tight md:text-7xl">
            Un live de deux heures devient{" "}
            <span className="text-rec">trente clips verticaux.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Sous-titrés, titrés, prêts à publier sur TikTok, Reels et Shorts. Tu
            envoies ta vidéo, on s&apos;occupe du découpage.
          </p>
          <div className="mt-8 max-w-sm">
            <StartButton />
            <p className="mt-3 text-center text-sm text-muted">
              Gratuit, sans carte bancaire. {OFFER.freeClips} clips offerts.
            </p>
          </div>
          <div className="mt-12 max-w-3xl">
            <Timeline />
          </div>
        </div>
      </section>

      {/* La douleur, chiffrée */}
      <section className="bg-ink px-4 py-14 text-paper md:py-20">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs tracking-widest text-rec">LE PROBLÈME</p>
          <h2 className="mt-3 font-display text-3xl leading-tight font-bold md:text-5xl">
            Découper un live à la main, c&apos;est une journée entière.
          </h2>
          <div className="mt-8 grid grid-cols-3 gap-3 md:max-w-2xl">
            {[
              ["8 h", "par vidéo"],
              ["16 min", "par clip"],
              ["0", "clip publié"],
            ].map(([big, small]) => (
              <div key={small} className="rounded-xl border border-paper/15 p-3 md:p-5">
                <p className="font-display text-2xl font-extrabold md:text-4xl">{big}</p>
                <p className="mt-1 text-sm text-paper/70">{small}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/80">
            Alors tu ne le fais pas. Tes heures de contenu dorment sur YouTube, et le
            format court, le seul qui amène de nouvelles personnes, reste vide.
          </p>
        </div>
      </section>

      {/* Trois bénéfices */}
      <section className="px-4 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-3xl leading-tight font-bold md:text-5xl">
            Ce que tu reçois
          </h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {benefits.map((b) => (
              <article key={b.n} className="rounded-2xl border border-line bg-card p-6">
                <p className="font-mono text-sm text-rec">{b.n}</p>
                <h3 className="mt-2 font-display text-xl leading-snug font-bold">{b.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{b.text}</p>
              </article>
            ))}
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.t} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink font-mono text-sm text-paper">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">{s.t}</p>
                  <p className="text-muted">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* L'offre */}
      <section id="offre" className="scroll-mt-4 px-4 pb-14 md:pb-20">
        <div className="mx-auto max-w-xl rounded-3xl border-2 border-ink bg-card p-6 md:p-10">
          <p className="font-mono text-xs tracking-widest text-rec">L&apos;ABONNEMENT</p>
          <p className="mt-3 text-muted">
            Une journée de découpage par vidéo, ou&nbsp;:
          </p>
          <p className="mt-1 font-display text-6xl font-extrabold tracking-tight">
            {OFFER.price} €<span className="text-2xl font-bold text-muted"> / mois</span>
          </p>
          <p className="mt-1 font-semibold">
            soit {OFFER.perDay} € par jour, pour {OFFER.clips} clips par mois.
          </p>

          <ul className="mt-6 space-y-2">
            {[
              `${OFFER.clips} clips verticaux de 30 à 60 s chaque mois`,
              "Sous-titres incrustés et titre proposé pour chaque clip",
              `Livraison par lot sous ${OFFER.deliveryDelay}`,
            ].map((li) => (
              <li key={li} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-rec" />
                <span>{li}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-xl bg-paper p-4 text-sm leading-relaxed">
            <p className="font-semibold">
              Satisfait ou remboursé pendant {OFFER.guaranteeDays} jours.
            </p>
            <p className="text-muted">
              Un email à {CONTACT_EMAIL} suffit, sans justification. Remboursement
              intégral sous {OFFER.refundDelay}.
            </p>
          </div>

          <PayButton className="mt-6 w-full" />
          <p className="mt-3 text-center text-sm font-medium">
            Sans engagement, résiliable à tout moment.
          </p>
          <p className="mt-4 text-center text-sm text-muted">
            Pas encore sûr ?{" "}
            <a className="font-medium text-ink underline underline-offset-4" href={TRIAL_MAILTO}>
              Essaie d&apos;abord sur une vidéo, gratuitement.
            </a>
          </p>
        </div>
      </section>

      {/* Questions fréquentes */}
      <section className="px-4 pb-16 md:pb-24">
        <div className="mx-auto max-w-xl">
          <h2 className="font-display text-3xl font-bold">Questions fréquentes</h2>
          <div className="mt-6 divide-y divide-line border-y border-line">
            {faq.map((f) => (
              <details key={f.q} className="group py-4">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                  {f.q}
                  <span className="font-mono text-xl text-rec transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2 leading-relaxed text-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bouton fixe sous le pouce (mobile uniquement) */}
      <div className="fixed inset-x-0 bottom-0 z-10 border-t border-line bg-paper/95 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <StartButton />
      </div>
    </main>
  );
}
