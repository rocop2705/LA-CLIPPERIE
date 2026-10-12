// Tout ce qui se règle sans toucher au code est ici.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://clipperie.vercel.app";

export const PAYMENT_LINK = process.env.NEXT_PUBLIC_STRIPE_PAYMENT_LINK || "";

export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@exemple.fr";

export const OFFER = {
  price: 49,
  clips: 60,
  perDay: "1,63", // 49 € / 30 jours
  perClip: "0,82", // 49 € / 60 clips
  freeClips: 3,
  deliveryDelay: "48 h",
  guaranteeDays: 14,
  refundDelay: "5 jours ouvrés",
};

// Lien « Commencer » : ouvre l'email du visiteur, prérempli.
export const TRIAL_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Ma vidéo offerte Clipperie",
)}&body=${encodeURIComponent(
  "Bonjour,\n\nVoici le lien vers ma vidéo (YouTube, Twitch, Google Drive, WeTransfer…) :\n\n\nJe publie surtout sur : TikTok / Reels / Shorts\n\nMerci !",
)}`;

// À COMPLÉTER : informations légales (affichées dans les pages légales).
export const LEGAL = {
  editeur: "[À COMPLÉTER : nom et prénom, ou raison sociale]",
  statut: "[À COMPLÉTER : ex. entrepreneur individuel (micro-entreprise)]",
  siret: "[À COMPLÉTER : numéro SIRET]",
  adresse: "[À COMPLÉTER : adresse postale]",
  tva: "[À COMPLÉTER : n° de TVA, ou « TVA non applicable, art. 293 B du CGI »]",
  directeurPublication: "[À COMPLÉTER : nom du directeur de la publication]",
  mediateur:
    "[À COMPLÉTER : nom et site du médiateur de la consommation auquel tu adhères]",
  dateMaj: "12 octobre 2026",
};
