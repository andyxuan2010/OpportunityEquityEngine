---
layout: default
title: Initiative
locale: fr
translation_en: /docs/01-initiative/initiative.md
translation_zh: /docs/01-initiative/initiative.CN.md
translation_fr: /docs/01-initiative/initiative.FR.md
---

# Moteur d’équité des opportunités — Initiative

## Déclaration

Le Moteur d’équité des opportunités aide les élèves du secondaire à découvrir, comprendre et prioriser les bourses, concours, projets de recherche, activités bénévoles, programmes d’été et possibilités de préparation universitaire qui leur correspondent.

## Problème à résoudre

Les élèves cherchent l’information dans des sites Web, des PDF, des annonces scolaires et des portails de candidature. Les possibilités sont difficiles à comparer, les critères peuvent être peu clairs et les dates limites peuvent être manquées. Le problème n’est pas un manque de motivation, mais un manque d’accès clair, actuel et compréhensible.

## Public cible

La première phase vise les élèves de Montréal et du Québec, en particulier ceux qui disposent de moins de soutien pour planifier leurs études. Les parents, enseignants et administrateurs qui vérifient les possibilités font aussi partie de l’écosystème.

## Vision du produit

L’élève fournit son niveau, sa région, ses intérêts, sa langue, son budget et ses disponibilités. La plateforme affiche ensuite des possibilités avec un score, des critères, des dates limites, des coûts, des sources et une explication. La recherche, les filtres, les sauvegardes et les rappels transforment la découverte en action.

## Principes

- Commencer par la clarté avant d’ajouter de la complexité.
- Conserver une source et une date de vérification pour les informations importantes.
- Rendre les règles d’admissibilité déterministes, explicables et testables.
- Utiliser l’IA pour comprendre le langage et aider à extraire, jamais pour deviner.
- Présenter un conseil, jamais une garantie d’admission.

## MVP

La première tranche utilise quelques données vérifiées manuellement et réalise le parcours suivant :

```text
Profil → Opportunités vérifiées → Admissibilité → Classement → Explication → Action
```

Un administrateur peut vérifier, corriger ou désactiver une fiche. Le crawling à grande échelle, les notifications et la recherche avancée viendront après la validation du parcours principal.

## Réussite

Un élève doit trouver rapidement quelques options pertinentes, comprendre pourquoi elles lui conviennent, consulter la source officielle et savoir quoi faire ensuite. La réussite se mesure par la compréhension, la confiance et l’action, pas par le nombre de candidatures.
## Référence complète synchronisée

Le contenu anglais complet est inclus automatiquement ci-dessous, avec toutes les sections, exemples, liens, tableaux et ressources multimédias.

<details markdown="1">
<summary>Ouvrir la référence anglaise complète</summary>

{% capture canonical_source %}{% include_relative initiative.md %}{% endcapture %}
{{ canonical_source | split: "\n" | slice: 7, 9999 | join: "\n" }}

</details>
