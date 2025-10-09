# Portfolio — Astro + React + Tailwind

Site personnel statique multilingue (FR/EN) construit avec **Astro 5**, **React 19** et **Tailwind CSS**. Routage i18n simple via des pages paramétrées et un middleware qui redirige `/` vers la langue par défaut.

---

## Démo

Hébergez sur Vercel, Netlify ou tout autre hébergeur de fichiers statiques. Le projet est prêt pour un déploiement en sortie **`dist/`**.

---

## Stack

* **Astro 5** (sortie statique)
* **React 19** (îlots interactifs)
* **Tailwind CSS**
* **TypeScript**
* **Formspree** pour le formulaire de contact
* **Firebase / Firestore** prêt à l’emploi (optionnel)

---

## Prérequis

* **Node.js ≥ 18**
* Un gestionnaire de paquets: **pnpm** (recommandé) ou **npm**

---

## Installation et scripts

```bash
# avec pnpm (recommandé)
pnpm install
pnpm dev      # démarre le serveur de dev (port 4321)
pnpm build    # vérifie le projet puis construit dans dist/
pnpm preview  # sert le dossier dist/

# avec npm
npm install
npm run dev
npm run build
npm run preview
```

Serveur de dev sur **[http://localhost:4321](http://localhost:4321)**. Le middleware redirige automatiquement `/` vers **`/fr`** (langue par défaut).

---

## Configuration d’environnement

Créez un fichier `.env` à la racine si vous activez Firebase :

```ini
# Firestore (optionnel)
FIREBASE_API_KEY=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PUBLIC_FIREBASE_AUTH_DOMAIN=xxxxxx.firebaseapp.com
PUBLIC_FIREBASE_PROJECT_ID=xxxxxx
PUBLIC_FIREBASE_STORAGE_BUCKET=xxxxxx.appspot.com
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxxxxxxxxxx
PUBLIC_FIREBASE_APP_ID=1:xxxxxxxxxxxx:web:xxxxxxxxxxxxxxxx
```

> Les clés préfixées par `PUBLIC_` sont exposées côté client selon les règles Astro. Gardez les valeurs sensibles hors du repo public.

Ajustez également l’URL du **formulaire de contact** (Formspree) si besoin dans `src/components/contact.astro` :

```html
<form action="https://formspree.io/f/xxxxxx" method="POST">…</form>
```

---

## Internationalisation

* Langues supportées: **fr**, **en**
* Fichiers:

  * `src/i18n/config.ts` — constantes i18n (locales disponibles, libellés, langue par défaut)
  * `src/i18n/fr.ts`, `src/i18n/en.ts` — dictionnaires de traduction
  * `src/i18n/index.ts` — helper `getI18n`
  * `src/middleware.ts` — redirection de `/` vers `/<DEFAULT_LOCALE>`
* Pages:

  * `src/pages/[lang]/index.astro` — page d’accueil paramétrée par la locale

### Ajouter une langue

1. Ajouter le code langue à `LOCALES` dans `src/i18n/config.ts`.
2. Créer `src/i18n/<lang>.ts` sur le modèle de `fr.ts` et `en.ts`.
3. Traduire les clés utilisées par les composants.

---

## Structure des dossiers

```
.
├── public/                    # assets statiques (images, favicon, CV)
│   ├── svg/                   # logos et icônes
│   └── CV_MANGIONE_MELISSA.pdf
├── src/
│   ├── React/                 # îlots React
│   │   ├── LetterGlitch.tsx
│   │   ├── LikeButton.tsx
│   │   └── SkillsList.tsx
│   ├── components/            # composants Astro
│   │   ├── CustomCursor.astro
│   │   ├── contact.astro      # formulaire Formspree
│   │   ├── footer.astro
│   │   ├── home.astro
│   │   ├── logoWall.astro
│   │   ├── nav.astro
│   │   └── projects.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── i18n/                  # config et dictionnaires
│   ├── pages/
│   │   └── [lang]/index.astro
│   ├── firebase.ts            # init Firestore (optionnel)
│   ├── middleware.ts          # redirection / → /fr
│   └── env.d.ts
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── LICENSE (MIT)
```

---

## Points clés et personnalisation

* **SEO**

  * Les balises `title` et `description` sont tirées de `src/i18n/*`. Modifiez `meta.title` et `meta.description`.
  * L’Open Graph image attendue dans la page est `"/og-cover.png"`. Placez un fichier à ce chemin dans `public/` **ou** changez `ogImg` dans `src/pages/[lang]/index.astro` pour pointer vers `public/og.image.png` existant.
* **Réseaux sociaux / liens**

  * Mettez à jour les liens dans `home.astro` et `footer.astro` (GitHub, LinkedIn, e‑mail…)
* **Formulaire de contact**

  * Action Formspree à remplacer par votre endpoint.
  * Le JavaScript de `contact.astro` affiche un message de succès et masque le formulaire après soumission.
* **Firebase / Firestore (optionnel)**

  * `src/firebase.ts` initialise une instance Firestore exportée en `db`. Aucun composant ne l’utilise par défaut. Ajoutez vos appels client si nécessaire (attention à l’exposition des clés).
* **Accessibilité & perf**

  * Tailwind pour un CSS minimal, Astro sort une version statique par défaut.
  * Les îlots React ne chargent que là où nécessaire.

---

## Déploiement

### Vercel (recommandé)

1. Créez un projet à partir du repo.
2. **Framework preset**: *Astro*
3. **Build Command**: `astro build` (ou `pnpm build`)
4. **Output Directory**: `dist`
5. Variables d’environnement si Firebase est activé.

### Autres hébergeurs

* Build local puis uploadez le dossier **`dist/`** (GitHub Pages, Netlify, OVH statique, S3 + CloudFront, etc.).

---

## Scripts utiles

* `dev` démarre le serveur local sur 4321.
* `build` lance `astro check` puis `astro build`.
* `preview` sert le contenu de `dist/`.
* `zip:clean` génère une archive propre du repo: `git archive --format=zip --output portfolio-clean.zip HEAD`.

---

## Licence

**MIT** — © 2025 Mélissa Mangione

---

