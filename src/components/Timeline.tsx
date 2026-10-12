// Une timeline de 2 h avec les 30 clips repérés : le motif signature du site.
const CLIPS = Array.from({ length: 30 }, (_, i) => {
  // Positions pseudo-aléatoires mais stables (même rendu à chaque visite).
  const base = (i + 0.5) / 30;
  const jitter = (((i * 37) % 11) - 5) / 400;
  return Math.min(0.985, Math.max(0.005, base + jitter));
});

export default function Timeline() {
  return (
    <div aria-hidden="true" className="w-full">
      <div className="mb-2 flex justify-between font-mono text-[11px] tracking-wide text-muted">
        <span>00:00:00</span>
        <span>01:00:00</span>
        <span>02:00:00</span>
      </div>
      <div className="relative h-12 overflow-hidden rounded-md border border-ink/15 bg-card">
        {/* Graduations */}
        {Array.from({ length: 25 }, (_, i) => (
          <span
            key={`g${i}`}
            className="absolute bottom-0 w-px bg-ink/15"
            style={{ left: `${(i / 24) * 100}%`, height: i % 6 === 0 ? "40%" : "18%" }}
          />
        ))}
        {/* Clips repérés */}
        {CLIPS.map((x, i) => (
          <span
            key={`c${i}`}
            className="absolute top-2 h-6 rounded-[2px] bg-rec"
            style={{ left: `${x * 100}%`, width: "1.4%" }}
          />
        ))}
      </div>
      <p className="mt-2 font-mono text-[11px] tracking-wide text-muted">
        30 MOMENTS FORTS REPÉRÉS · 30 × 0:45 · 9:16
      </p>
    </div>
  );
}
