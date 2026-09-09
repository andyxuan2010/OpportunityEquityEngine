---
layout: default
title: Boîte à outils des élèves
locale: fr
translation_en: /docs/08-student-toolkit/STUDENT_TOOLKIT.md
translation_zh: /docs/08-student-toolkit/STUDENT_TOOLKIT.CN.md
translation_fr: /docs/08-student-toolkit/STUDENT_TOOLKIT.FR.md
---

# Boîte à outils des élèves : collaborer, rester en sécurité et avancer

Cette référence pratique couvre les habitudes qui rendent un projet étudiant sain : collaboration, accessibilité, confidentialité, dépannage et communication claire.

## Un flux GitHub simple

1. Créez ou choisissez une issue avec un résultat et un contrôle d’acceptation clairs.
2. Créez une branche comme `docs/add-research-guide` ou `feature/save-opportunity`.
3. Faites une petite modification et utilisez un message de commit explicite.
4. Testez localement, puis ouvrez une pull request en expliquant le changement, le test effectué et ce qui reste à faire.
5. Demandez une revue. Répondez aux commentaires en améliorant le travail, plutôt qu’en masquant le problème.
6. Fusionnez lorsque les vérifications et la revue sont terminées.

Ne travaillez pas directement sur `main`, sauf accord explicite de l’équipe pour une minuscule correction documentaire.

## Modèle d’issue

```text
Objectif :
Bénéficiaire :
Hors périmètre :
Contrôle d’acceptation :
Preuve ou source :
Questions et risques :
```

## Checklist de pull request

- Le changement a un seul objectif clair.
- La page fonctionne sur téléphone et ordinateur.
- Les liens, images, traductions et titres ont été vérifiés.
- Aucun secret ni renseignement personnel inutile n’a été ajouté.
- Le code ou le texte généré par l’IA a été compris et révisé.
- La description explique au réviseur comment reproduire le résultat.

## L’accessibilité fait partie de la qualité

Utilisez des titres significatifs, un contraste lisible, des liens descriptifs, un texte alternatif pour les images informatives, des libellés de formulaire, des contrôles utilisables au clavier, ainsi que des sous-titres ou transcriptions pour les médias importants. N’utilisez pas la couleur seule pour communiquer un état ou un résultat de correspondance. Testez avec le zoom et le clavier avant de demander à un élève d’essayer la fonctionnalité.

## Confidentialité et IA responsable

Collectez le minimum d’informations sur les élèves nécessaire à la mise en correspondance. Évitez les données personnelles réelles pendant le développement et utilisez des exemples synthétiques. Conservez les clés API sur le serveur ou dans un stockage de secrets approuvé. Affichez la source et la date de vérification des informations sur les opportunités. L’IA peut aider à résumer ou expliquer, mais des règles déterministes et une revue humaine doivent protéger l’admissibilité, les dates limites, les coûts et les déclarations de sécurité.

## Outils et services utiles

Il n’existe pas une seule pile technologique « correcte ». Choisissez le plus petit ensemble d’outils qui permet à l’équipe d’étudier un besoin réel, de construire une tranche verticale fonctionnelle, de la tester et d’expliquer ses limites. Une équipe étudiante devrait normalement choisir un outil dans chaque ligne requise, plutôt que de s’inscrire à tous les services de cette liste.

### Fondations indispensables

| Besoin | Bons choix pour commencer | Utilité |
|---|---|---|
| Gestion du code et revue | [Git](https://git-scm.com/doc), [GitHub](https://docs.github.com/en/get-started), GitHub Issues et [Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/about-projects) | Historique, travail d’équipe, tâches, décisions et modifications vérifiables |
| Hébergement du site et de la documentation | [GitHub Pages](https://docs.github.com/en/pages), [Jekyll](https://jekyllrb.com/docs/), [GitHub Actions](https://docs.github.com/en/actions) | Publier la documentation et la tester ou la déployer automatiquement |
| Environnement de programmation | [Visual Studio Code](https://code.visualstudio.com/docs), [GitHub Codespaces](https://docs.github.com/en/codespaces), [Node.js](https://nodejs.org/en/learn), [Python](https://docs.python.org/3/) | Modifier, exécuter et déboguer le projet localement ou dans le cloud |
| Inspection du navigateur | [Chrome DevTools](https://developer.chrome.com/docs/devtools/overview), [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/) | Inspecter la mise en page, les erreurs de console, les requêtes réseau, le stockage et les performances |
| Design et parcours utilisateur | [Figma](https://help.figma.com/hc/en-us), Canva | Wireframes, prototypes, icônes, graphiques de présentation et discussions sur l’utilisabilité |

### Données, recherche et sources d’opportunités

| Besoin | Outils ou services possibles | Utilisation |
|---|---|---|
| Petits jeux de données | CSV, [Google Sheets API](https://developers.google.com/sheets/api), Microsoft [Graph Excel API](https://learn.microsoft.com/en-us/graph/api/resources/excel), [Airtable Web API](https://airtable.com/developers/web/api/introduction) | Un catalogue d’opportunités gérable que les élèves peuvent inspecter et corriger |
| Nettoyage des données | [OpenRefine](https://openrefine.org/docs), formules de tableur, Python avec [pandas](https://pandas.pydata.org/docs/) | Normaliser les noms, dates, lieux, catégories et valeurs manquantes |
| Données publiques et officielles | Portails gouvernementaux de données ouvertes, [CKAN](https://docs.ckan.org/en/latest/api/), [Socrata APIs](https://dev.socrata.com/), API officielles d’organisations, flux RSS/Atom | Importer des opportunités actuelles avec une URL source et une date de vérification |
| Recherche et entretiens | [Google Forms API](https://developers.google.com/workspace/forms/api), Microsoft Forms, entretiens, notes d’observation, [Miro](https://miro.com/) | Comprendre les besoins réels des élèves avant de construire des fonctionnalités |
| Stockage des données | [Supabase/Postgres](https://supabase.com/docs), [Firebase](https://firebase.google.com/docs), [Azure](https://learn.microsoft.com/en-us/azure/), [Cloudflare D1](https://developers.cloudflare.com/d1/), [Neon](https://neon.tech/docs) | Stocker les opportunités, profils, éléments enregistrés, retours et champs d’audit |

Pour chaque opportunité, conservez au minimum : `title`, `provider`, `description`, `eligibility`, `location`, `cost`, `deadline`, `source_url`, `last_verified_at` et `status`. Ne transformez pas silencieusement une information manquante en « admissible », « gratuite » ou « encore ouverte ».

### Choix frontend et interactions

| Besoin | Outils possibles | À choisir lorsque |
|---|---|---|
| Site simple | HTML sémantique, CSS, JavaScript, [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web) | Le projet est surtout composé de contenu, de recherche, de filtres et d’un peu d’état |
| Application Web à composants | [React](https://react.dev/learn), [Vue](https://vuejs.org/guide/introduction.html), [Svelte](https://svelte.dev/docs/svelte/overview) | Plusieurs écrans partagent des composants et interactions réutilisables |
| Application full-stack ou rendue côté serveur | [Next.js](https://nextjs.org/docs), [Nuxt](https://nuxt.com/docs), [SvelteKit](https://svelte.dev/docs/kit/introduction), [Astro](https://docs.astro.build/en/getting-started/) | La recherche, l’authentification, l’accès serveur aux données ou des pages structurées sont importants |
| Styles | [Tailwind CSS](https://tailwindcss.com/docs/installation), [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/), propriétés CSS personnalisées | L’équipe a besoin rapidement de mises en page responsives cohérentes |
| Graphiques et tableaux de bord | [Chart.js](https://www.chartjs.org/docs/latest/), [D3](https://d3js.org/getting-started), [Recharts](https://github.com/recharts/recharts) | Présenter le nombre d’opportunités, les dates limites, les résultats ou les indicateurs d’équité |
| Cartes et localisation | [Leaflet](https://leafletjs.com/), [Mapbox](https://docs.mapbox.com/), [OpenStreetMap](https://www.openstreetmap.org/) | La localisation aide les élèves à découvrir les opportunités proches ; respectez les règles d’utilisation des tuiles et du géocodage |

### Hébergement, backend et identité

| Besoin | Choix possibles | Décision importante |
|---|---|---|
| Déploiement statique | GitHub Pages, [Cloudflare Pages](https://developers.cloudflare.com/pages/), [Netlify](https://docs.netlify.com/), [Vercel](https://vercel.com/docs), [Azure Static Web Apps](https://learn.microsoft.com/en-us/azure/static-web-apps/) | Idéal pour un prototype public sans données privées d’élèves |
| API côté serveur | [Cloudflare Workers](https://developers.cloudflare.com/workers/), [Azure Functions](https://learn.microsoft.com/en-us/azure/azure-functions/), [Vercel Functions](https://vercel.com/docs/functions), [Netlify Functions](https://docs.netlify.com/build/functions/overview/), [Firebase Cloud Functions](https://firebase.google.com/docs/functions), [Supabase Edge Functions](https://supabase.com/docs/guides/functions) | Garder les clés API, la logique de correspondance et l’accès privilégié à la base hors du navigateur |
| Authentification | [Supabase Auth](https://supabase.com/docs/guides/auth), [Firebase Authentication](https://firebase.google.com/docs/auth), [Auth0](https://auth0.com/docs), [Clerk](https://clerk.com/docs), [Microsoft Entra External ID](https://learn.microsoft.com/en-us/entra/external-id/) | À utiliser seulement si le projet a réellement besoin de comptes ; ne collectez pas vous-mêmes les mots de passe |
| Recherche | Commencer par les filtres de la base ; [Algolia](https://www.algolia.com/doc/), [Typesense](https://typesense.org/docs/), [Meilisearch](https://www.meilisearch.com/docs), [OpenSearch](https://opensearch.org/docs/latest/) | Ajouter un service de recherche seulement si le jeu de données est trop grand ou trop lent pour la base |
| Courriels et rappels | [Resend](https://resend.com/docs), [SendGrid](https://docs.sendgrid.com/), [Twilio](https://www.twilio.com/docs), [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging) | Envoyer des confirmations, rappels de dates limites ou notifications d’administration sur abonnement ; prévoir le désabonnement et la gestion des échecs |

### API et LLM

Utilisez un LLM pour expliquer, rédiger, aider à classer, faire de la correspondance sémantique, traduire ou extraire des champs depuis un texte désordonné. Utilisez du code normal et un jeu de données révisé pour l’admissibilité, les dates, les frais, les contraintes de classement et les autres décisions qui doivent être reproductibles.

| Fournisseur ou approche | Utilisation possible | Conseil pour les élèves |
|---|---|---|
| [OpenAI Responses API](https://developers.openai.com/api/reference/cli/resources/responses/methods/create) | Extraction structurée, explications, embeddings, vision et assistants utilisant des outils | Bon point de départ général ; demandez du JSON structuré et validez-le |
| [Azure OpenAI](https://learn.microsoft.com/en-us/azure/ai-services/openai/) | Modèles OpenAI dans un environnement contrôlé par Azure | À envisager si l’école utilise déjà l’identité, la facturation ou la gouvernance Azure |
| [Anthropic Claude](https://docs.anthropic.com/en/docs/build-with-claude/overview) | Analyse de longs documents, rédaction, programmation et explications | Utile pour comparer un deuxième modèle pendant l’évaluation |
| [Google Gemini API](https://ai.google.dev/gemini-api/docs) | Entrées multimodales, extraction, résumés et conversation | Utile si l’équipe utilise déjà Google Cloud ou les outils Google AI |
| [Mistral](https://docs.mistral.ai/), [Cohere](https://docs.cohere.com/), [Hugging Face](https://huggingface.co/docs) | Modèles hébergés alternatifs, travail multilingue, recherche ou expériences | Comparez qualité, coût, vitesse, confidentialité et limites de débit, plutôt que de choisir selon la marque |
| Modèles locaux avec [Ollama](https://docs.ollama.com/) | Expériences privées ou hors ligne et données de développement à faible risque | Nécessite un ordinateur adapté ; local ne signifie pas automatiquement exact |
| Passerelle ou routeur de modèles | [LiteLLM](https://docs.litellm.ai/), SDK des fournisseurs ou petit adaptateur interne | Garder l’application indépendante d’un fournisseur et rendre le remplacement du modèle testable |
| Génération augmentée par récupération | [pgvector](https://github.com/pgvector/pgvector), [Pinecone](https://docs.pinecone.io/), [Qdrant](https://qdrant.tech/documentation/), [Chroma](https://docs.trychroma.com/), [Weaviate](https://docs.weaviate.io/) | Fonder les réponses sur les opportunités approuvées et afficher la source utilisée |
| Traduction | [DeepL API](https://developers.deepl.com/docs), [Google Cloud Translation](https://cloud.google.com/translate/docs), [Azure Translator](https://learn.microsoft.com/en-us/azure/ai-services/translator/) | Traduire les brouillons, puis vérifier les noms, l’admissibilité, les dates et les formulations culturellement sensibles |

#### Modèle LLM sûr pour ce projet

1. Ne récupérez que les enregistrements approuvés qui concernent la question.
2. Demandez au modèle de renvoyer un schéma défini, comme `summary`, `why_it_may_fit`, `source_url` et `confidence_notes`.
3. Validez la réponse dans le code et refusez les réponses sans URL source ou avec des dates invalides.
4. Affichez la source originale, la date de vérification et l’étiquette « assisté par IA ».
5. Permettez à un élève ou à un membre du personnel de corriger le résultat et enregistrez la correction.

Ne placez jamais une clé API de fournisseur dans le JavaScript du navigateur, ne la commitez pas dans GitHub et n’envoyez pas au modèle des informations personnelles inutiles sur un élève. Ajoutez des plafonds de dépenses, des limites de débit, des délais d’expiration, des nouvelles tentatives, des journaux sans données sensibles et une solution de repli sans IA.

### Tests, accessibilité, sécurité et fiabilité

| Domaine qualité | Outils et services | Vérification minimale par l’élève |
|---|---|---|
| Tests de navigateur de bout en bout | [Playwright](https://playwright.dev/docs/intro), [Cypress](https://docs.cypress.io/) | Tester le parcours principal sur ordinateur et dans une fenêtre de téléphone étroite |
| Tests unitaires et de données | [Vitest](https://vitest.dev/guide/), [Jest](https://jestjs.io/docs/getting-started), [pytest](https://docs.pytest.org/en/stable/) | Tester les règles de correspondance, les dates, les états vides et les entrées incorrectes |
| Accessibilité | [axe-core](https://www.deque.com/axe/core-documentation/), [WAVE](https://wave.webaim.org/), [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview), tests au clavier, [NVDA](https://www.nvaccess.org/about-nvda/), VoiceOver | Vérifier titres, libellés, ordre du focus, contraste, zoom, clavier et bases du lecteur d’écran |
| Sécurité du code et des dépendances | GitHub [CodeQL](https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning), [Dependabot](https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts), [Gitleaks](https://github.com/gitleaks/gitleaks), [Trivy](https://github.com/aquasecurity/trivy), [OWASP ZAP](https://www.zaproxy.org/docs/) | Scanner avant de partager ; supprimer les secrets et corriger les risques élevés |
| Stockage des secrets | [GitHub Actions secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions), [Azure Key Vault](https://learn.microsoft.com/en-us/azure/key-vault/general/overview), [Google Secret Manager](https://cloud.google.com/secret-manager/docs/overview), [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html) | Garder les secrets hors du code, des captures d’écran, des bundles navigateur et des commentaires d’issues |
| Monitoring et analytique | [Sentry](https://docs.sentry.io/), [PostHog](https://posthog.com/docs), [Plausible](https://plausible.io/docs), [Google Analytics](https://developers.google.com/analytics) | Mesurer les erreurs et les résultats utiles ; déclarer l’analytique et éviter le suivi inutile |
| Sauvegardes et disponibilité | Sauvegardes du fournisseur, exports planifiés, [Better Stack](https://betterstack.com/docs/), [Better Stack Uptime](https://betterstack.com/uptime) | Savoir restaurer les données et qui reçoit l’alerte d’une panne |

### Communication d’équipe et livraison du projet

[GitHub Discussions](https://docs.github.com/en/discussions), [Slack](https://slack.com/help/categories/360000049043-Slack-guides), Microsoft Teams, [Discord](https://support.discord.com/hc/en-us), [Notion](https://www.notion.so/help/guides), Google Docs et les calendriers partagés peuvent tous convenir. L’important n’est pas la marque : gardez un journal des décisions visible, un backlog de référence unique, les notes de réunion, les responsables, les échéances et les liens vers les preuves. Utilisez [GitHub Releases](https://docs.github.com/en/repositories/releasing-projects-on-github/about-releases) ou un changelog court afin qu’un autre élève puisse comprendre ce qui a changé.

## Une pile de départ raisonnable

Pour ce projet, une première version à faible risque pourrait utiliser :

- Un dépôt GitHub, Issues, Projects, Actions et Pages/Jekyll pour le code, la planification, les contrôles et la documentation.
- Un CSV ou Google Sheet vérifié avant d’ajouter une base de données. Passez à Supabase/Postgres lorsque les élèves ont besoin d’éléments enregistrés, de comptes ou de retours.
- HTML/CSS/JavaScript sémantique pour un catalogue simple ; ajoutez React, Vue ou Svelte seulement lorsque des composants interactifs partagés le justifient.
- Une API côté serveur pour tout LLM ou toute intégration privée. Commencez avec un fournisseur de modèles et isolez-le derrière un adaptateur.
- Des filtres déterministes pour l’admissibilité et les dates limites ; un LLM peut expliquer un résultat, mais ne doit pas être l’autorité finale.
- Playwright, axe, Lighthouse et une revue au clavier et sur téléphone dans GitHub Actions.
- Sentry ou un outil d’analytique respectueux de la confidentialité seulement après avoir écrit ce que l’équipe veut apprendre.

Cette pile est volontairement remplaçable. Un projet étudiant réussi est une expérience claire, testée, accessible et fondée sur des données fiables, pas une collection de nombreux comptes cloud.

## Les exigences non techniques qui déterminent la réussite

Avant de choisir les services, accordez-vous sur ces règles de projet :

- Un public étudiant défini et deux ou trois résultats mesurables.
- Un dictionnaire de données, un registre des sources, un responsable de vérification et un calendrier de mise à jour.
- Une définition écrite de la « correspondance », y compris le traitement des informations inconnues ou expirées.
- Des décisions sur le consentement, la confidentialité, la conservation, la suppression et la réponse aux incidents concernant les données des élèves.
- Un petit jeu de données de test avec les résultats attendus, y compris les cas limites et des enregistrements volontairement incorrects.
- Un parcours de revue humaine, un moyen de contact et une manière visible de signaler une opportunité incorrecte.
- Un responsable du budget, des limites des offres gratuites, un plan de sortie du fournisseur, des sauvegardes et une procédure d’arrêt.
- Un script de démonstration présentant le problème, le parcours utilisateur, les preuves, les limites et les apprentissages de l’équipe.

## En cas de problème

Vérifiez la console du navigateur, la sortie du terminal, la requête réseau, le chemin du fichier et l’orthographe. Reproduisez le problème avec le plus petit exemple. Déterminez s’il s’agit d’un bug de code, d’un problème de données, d’environnement ou d’une exigence peu claire. Notez la correction afin que le prochain élève n’ait pas à tout redécouvrir.

## Petit glossaire

| Terme | Signification simple |
|---|---|
| Issue | Question, tâche, bug ou décision suivie |
| Branche | Copie de travail sûre pour une modification |
| Pull request | Demande de revue par l’équipe |
| Tranche verticale | Petit parcours fonctionnel de bout en bout |
| Règle déterministe | Même résultat pour les mêmes entrées |
| IA fondée | Réponse liée à des sources vérifiables |

En cas de doute, choisissez l’option la plus facile à comprendre, tester et annuler pour un autre élève.

## Référence complète synchronisée

Le contenu anglais complet est inclus automatiquement ci-dessous, avec toutes les sections, exemples, liens, tableaux et ressources multimédias.

<details markdown="1">
<summary>Ouvrir la référence anglaise complète</summary>

{% capture canonical_source %}{% include_relative STUDENT_TOOLKIT.md %}{% endcapture %}
{{ canonical_source | split: 'translation_fr: /docs/08-student-toolkit/STUDENT_TOOLKIT.FR.md' | last }}

</details>
