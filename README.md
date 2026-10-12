# Clipperie — version « première vente »

Une landing qui encaisse : bouton « Commencer » (vidéo offerte, par email) et bouton
d'abonnement (lien de paiement Stripe). Pages légales, 404, page d'erreur, page
« merci » après paiement, aperçu de partage et mesure d'audience incluses.

## Mise en ligne (sans terminal)

1. **GitHub** : crée un compte sur github.com, puis un dépôt nommé `clipperie`
   (bouton « New »). Sur la page du dépôt vide, clique « uploading an existing file »
   et glisse **le contenu** du dossier `clipperie` (les dossiers `src`, `public` et
   les fichiers). Clique « Commit changes ».
2. **Vercel** : va sur vercel.com, « Sign Up » avec ton compte GitHub, puis
   « Add New… > Project », choisis `clipperie`, clique « Deploy ».
3. **Stripe** : crée un compte sur stripe.com, puis « Catalogue de produits » >
   « Ajouter un produit » : Clipperie, 49 €, récurrent, mensuel. Ensuite
   « Liens de paiement » > « Nouveau » > ce produit. Dans « Après le paiement »,
   choisis « Rediriger vers ton site » et colle `https://TON-SITE.vercel.app/merci`.
4. **Variables** : dans Vercel > ton projet > Settings > Environment Variables,
   ajoute les trois variables de `.env.example`, puis Deployments > ⋯ > Redeploy.
5. **Mesure d'audience** : Vercel > ton projet > Analytics > Enable.

## À compléter avant de vendre

Les champs `[À COMPLÉTER]` dans `src/lib/config.ts` (raison sociale, SIRET,
adresse, TVA, médiateur). Ils s'affichent dans les pages légales.
