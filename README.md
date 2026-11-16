# 3.EuData — les pays d'Europe depuis une API

Une grille de cartes triées par ordre alphabétique, une par pays d'Europe, alimentée par l'API REST Countries.

## Pourquoi ce projet
Troisième exercice de la série (septembre 2023) : un exercice sur l'appel d'une API et sur Tailwind.

## Ce que j'ai appris
- Appeler une API avec `fetch` dans un `useEffect` et ranger la réponse dans l'état (`App.jsx`).
- Trier les données avant de les afficher (`sort` sur le nom du pays).
- Afficher une liste avec `map` et un composant par carte (`Listcard.jsx`, `modalcontent.jsx`).
- Mettre en page avec une grille Tailwind qui change de colonnes selon la largeur de l'écran.

## Stack
React 18, Vite 4 (plugin React avec SWC), Tailwind CSS 3, PostCSS.

## Lancer en local
```bash
npm install
npm run dev      # serveur de développement (Vite)
npm run build    # version de production dans dist/
```

## Démo
Pas de démo en ligne.

## Crédits et transparence
Projet d'apprentissage personnel. Données : [REST Countries](https://restcountries.com) (API tierce, qui peut changer ou s'arrêter).
Code d'origine : 2023, exercice personnel. Novembre 2026 : README, charte de code et mise à jour des dépendances réalisés avec Claude Code (voir l'historique Git).

## État du projet
Entretien minimal (voir `AGENTS.md`). `npm run lint` ne fonctionne pas : le dépôt n'a pas de fichier de configuration ESLint.
