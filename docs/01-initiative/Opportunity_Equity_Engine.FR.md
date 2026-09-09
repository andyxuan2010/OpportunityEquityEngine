---
layout: default
title: Plan de projet IA
locale: fr
translation_en: /docs/01-initiative/Opportunity_Equity_Engine.md
translation_zh: /docs/01-initiative/Opportunity_Equity_Engine.CN.md
translation_fr: /docs/01-initiative/Opportunity_Equity_Engine.FR.md
---

# Plan de projet IA pour les élèves du secondaire

## Résumé du projet

Le Moteur d’équité des opportunités aide les élèves à trouver des possibilités adaptées à leur situation et à transformer la découverte en action. Le projet commence à Montréal et au Québec, avec une conception assez générale pour s’étendre plus tard.

## Le problème

Les bourses, concours, programmes de recherche, activités bénévoles, camps d’été et activités de préparation universitaire sont publiés par des organisations différentes. Les informations peuvent se trouver dans des pages Web, des PDF ou des annonces locales. La difficulté principale n’est pas le manque d’ambition, mais le manque d’accès clair, actuel et compréhensible.

## Solution proposée

L’élève fournit un profil simple : niveau scolaire, région, intérêts, langue, budget et disponibilité. Le système présente ensuite des occasions avec des critères d’admissibilité, des dates limites, des coûts, des sources et une explication du classement.

Le système doit répondre à cinq questions :

1. Quelles possibilités existent ?
2. Lesquelles correspondent à mon niveau et à mon lieu ?
3. Lesquelles correspondent à mes intérêts ?
4. Lesquelles puis-je me permettre ?
5. Quelle est la prochaine action la plus utile ?

## Principes de conception

- L’information officielle et vérifiée est prioritaire.
- Les règles d’admissibilité sont déterministes et visibles.
- Les explications doivent citer les données utilisées.
- Les résultats sont des conseils, jamais une garantie d’admission.
- L’IA aide à comprendre le langage et à extraire des données, mais la validation humaine reste requise.

## Première tranche verticale

```text
Profil → Données vérifiées → Admissibilité → Score → Explication
```

La première démonstration doit rester petite : un ensemble de données manuel, une expérience de profil, une recherche filtrée et une file de vérification administrative. Les idées plus avancées, comme le crawling à grande échelle et la recherche vectorielle, viendront après la preuve du parcours principal.

## Impact recherché

Le projet ne cherche pas à faire postuler chaque élève à tout. Il veut aider chaque élève à trouver quelques options pertinentes, à comprendre ses choix et à avancer avec confiance.
## Référence complète synchronisée

Le contenu anglais complet est inclus automatiquement ci-dessous, avec toutes les sections, exemples, liens, tableaux et ressources multimédias.

<details markdown="1">
<summary>Ouvrir la référence anglaise complète</summary>

{% capture canonical_source %}{% include_relative Opportunity_Equity_Engine.md %}{% endcapture %}
{{ canonical_source | split: 'translation_fr: /docs/01-initiative/Opportunity_Equity_Engine.FR.md' | last }}

</details>
