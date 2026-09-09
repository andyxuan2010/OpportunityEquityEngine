# Moteur d’équité des opportunités

> Aider les élèves du secondaire à découvrir, comprendre et prioriser des possibilités utiles.

Le Moteur d’équité des opportunités est une plateforme centrée sur les élèves qui aide les lycéens à trouver des bourses, concours, projets de recherche, activités bénévoles, programmes d’été et possibilités de préparation universitaire.

## Pourquoi ce projet existe

Les informations sont dispersées entre des sites Web, des PDF, des annonces scolaires et des portails de candidature. Les élèves ne savent pas toujours quelles possibilités existent, lesquelles correspondent à leur niveau, leur région, leurs intérêts ou leur budget, ni quelle action entreprendre en premier.

Le projet cherche à clarifier le parcours :

```text
Découvrir → Comprendre → Prioriser → Agir
```

La première version recueillera un petit ensemble d’opportunités vérifiées, permettra de filtrer par niveau, lieu, catégorie, coût, langue et date limite, appliquera des règles d’admissibilité déterministes et permettra de sauvegarder les prochaines étapes. Les administrateurs pourront vérifier et corriger les données.

Le projet est actuellement au stade de la planification et de la conception de la démonstration. La première livraison recommandée est un MVP ciblé, et non une grande plateforme nationale.

## Ce que fera le premier MVP

- Réunir un petit ensemble de possibilités vérifiées.
- Demander un profil simple de l’élève.
- Rechercher et filtrer par niveau, lieu, catégorie, coût, langue et date limite.
- Appliquer des règles d’admissibilité déterministes.
- Classer les possibilités pertinentes.
- Expliquer les recommandations à partir de sources vérifiées.
- Permettre aux élèves de sauvegarder des possibilités et de suivre les prochaines étapes.
- Donner aux administrateurs un moyen de vérifier et corriger les données.

## Structure du dépôt

- `docs/00-start-here/` : orientation, première contribution et accord de travail
- `docs/01-initiative/` : but, utilisateurs, vision et plans du projet
- `docs/02-architecture/` : architecture complète du système
- `docs/03-student-guides/` : guide débutant, prérequis, Vibe Coding et création rapide
- `docs/04-delivery/` : gestion, rôles, coûts, risques et calendrier
- `docs/05-build/` : implémentation guidée de la démonstration
- `docs/06-demo/` : livrables visuels, parcours et images
- `docs/07-research-and-validation/` : recherche, consentement, sources et utilisabilité
- `docs/08-student-toolkit/` : collaboration GitHub, accessibilité, confidentialité et dépannage
- `docs/09-showcase-and-reflection/` : présentation, portfolio, crédits et réflexion
- `docs/10-opportunity-sources/` : catalogue de 700 sources, vérification et qualité des données
- `docs/INDEX.FR.md` : index de la documentation et parcours recommandés

## Documentation

Commencez par [l’accueil français](index.FR.md). Les versions anglaise, chinoise et française sont disponibles avec le sélecteur de langue en haut du site GitHub Pages.

Les guides pour les élèves comprennent le [guide de projet pour débutants](docs/03-student-guides/BEGINNER_PROJECT_GUIDE.FR.md), le [guide Vibe Coding](docs/03-student-guides/VIBE_CODING_FOR_STUDENTS.FR.md), les [prérequis d’apprentissage](docs/03-student-guides/LEARNING_PREREQUISITES.FR.md) et le [guide de création rapide d’une application ou d’un site web](docs/03-student-guides/QUICK_APP_AND_WEBSITE_BUILD_GUIDE.FR.md). Le nouveau [catalogue de 700 sources d’opportunités](docs/10-opportunity-sources/Opportunity_Equity_Engine_600_Sources.FR.md) contient les sources de recherche, les niveaux de vérification, les champs et les règles de qualité.

| Document | Utilité |
|---|---|
| [Index de la documentation](docs/INDEX.FR.md) | Carte thématique et parcours recommandés |
| [Commencer ici](docs/00-start-here/START_HERE.FR.md) | Première heure, rôles, accord de travail et définition de terminé |
| [Initiative](docs/01-initiative/initiative.FR.md) | But, utilisateurs, problème, objectif, principes et impact |
| [Architecture](docs/02-architecture/architecture.FR.md) | Architecture complète et conception technique |
| [Guide de projet pour débutants](docs/03-student-guides/BEGINNER_PROJECT_GUIDE.FR.md) | Guide de zéro à la démonstration |
| [Guide Vibe Coding](docs/03-student-guides/VIBE_CODING_FOR_STUDENTS.FR.md) | Réduire les barrières techniques en gardant la créativité |
| [Prérequis d’apprentissage](docs/03-student-guides/LEARNING_PREREQUISITES.FR.md) | Connaissances à développer et parcours d’apprentissage |
| [Guide de création rapide](docs/03-student-guides/QUICK_APP_AND_WEBSITE_BUILD_GUIDE.FR.md) | Sites réactifs, PWA, prototypes iPhone et tests |
| [Guide d’implémentation](docs/05-build/DEMO_IMPLEMENTATION_GUIDE.FR.md) | Implémentation guidée avec exemples de code |
| [Plan de gestion](docs/04-delivery/PROJECT_MANAGEMENT_PLAN.FR.md) | Proposition, outils, coûts, rôles, risques et processus |
| [Calendrier du projet](docs/04-delivery/PROJECT_TIMELINE.FR.md) | Plan de livraison et jalons sur 16 semaines |
| [Livrables de démonstration](docs/06-demo/DEMO_DELIVERABLES.FR.md) | Parcours, objectifs d’implémentation et visuels |
| [Recherche et validation](docs/07-research-and-validation/RESEARCH_AND_VALIDATION.FR.md) | Entretiens, sources, utilisabilité et preuves |
| [Catalogue de 700 sources](docs/10-opportunity-sources/Opportunity_Equity_Engine_600_Sources.FR.md) | Sources, niveaux, champs et règles de qualité |
| [Boîte à outils](docs/08-student-toolkit/STUDENT_TOOLKIT.FR.md) | Collaboration, accessibilité, confidentialité, IA responsable et dépannage |
| [Présentation et réflexion](docs/09-showcase-and-reflection/SHOWCASE_AND_REFLECTION.FR.md) | Présentation, portfolio, crédits et réflexion |
| [Plan de projet IA](docs/01-initiative/Opportunity_Equity_Engine.FR.md) | Plan détaillé du produit et de l’IA |

## Aperçu du produit

![Tableau de bord de l’élève](docs/06-demo/demo-assets/01-student-dashboard.png)

Consultez les [livrables de démonstration et le parcours visuel](docs/06-demo/DEMO_DELIVERABLES.FR.md).

## Orientation technologique recommandée

```text
Frontend : Next.js + React + TypeScript
Backend : FastAPI ou une couche API Next.js simple pour la première démo
Base de données : Supabase PostgreSQL
Recherche : filtres structurés, recherche par mots-clés, puis pgvector
IA : extraction structurée et explications fondées sur des sources
Déploiement : Vercel + Supabase ou services gérés équivalents
Collaboration : GitHub + Vibe Coding assisté par IA
```

L’équipe n’a pas besoin de maîtriser chaque langage avant de commencer. Le Vibe Coding peut générer du code répétitif et expliquer l’inconnu. Les élèves restent responsables des décisions, des tests, de la confidentialité, de la vérification des données et du résultat final.

## Approche de livraison

1. Commencer par un public cible et un petit problème.
2. Construire une tranche verticale : profil → données → correspondance → résultat.
3. Utiliser d’abord des données d’exemple vérifiées manuellement.
4. Ajouter les règles d’admissibilité avant l’IA avancée.
5. Ajouter l’extraction et les explications IA avec validation et revue humaine.
6. Tester avec de vrais élèves et corriger les problèmes les plus importants.
7. Déployer un petit pilote fiable.

## Sécurité et principes de confiance

- Ne pas inventer de dates limites, exigences, coûts ou résultats d’admission.
- Afficher les URL sources et les dates de vérification.
- Considérer les données générées par l’IA comme non fiables avant vérification.
- Utiliser le code pour les règles d’admissibilité déterministes.
- Ne recueillir que les informations nécessaires à la correspondance.
- Garder les secrets hors de Git et du code exécuté dans le navigateur.
- Signaler clairement l’incertitude et expliquer que les scores sont indicatifs.

## Site documentaire en ligne

Visitez le [site GitHub Pages](https://andyxuan.ca/OpportunityEquityEngine/) pour consulter la documentation et la vision du produit.

## État du dépôt

Le dépôt contient l’initiative, l’architecture, les guides d’apprentissage, la livraison, l’implémentation, la recherche, le catalogue de sources, la boîte à outils, le calendrier, la présentation et la conception de la démonstration. La prochaine étape majeure est la petite tranche verticale décrite dans le [guide d’implémentation](docs/05-build/DEMO_IMPLEMENTATION_GUIDE.FR.md).
- Utiliser l’IA pour aider à extraire et expliquer, tout en laissant le code, les règles et la revue humaine garantir l’exactitude.
