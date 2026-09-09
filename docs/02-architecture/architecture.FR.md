---
layout: default
title: Architecture de haut niveau
locale: fr
translation_en: /docs/02-architecture/architecture.md
translation_zh: /docs/02-architecture/architecture.CN.md
translation_fr: /docs/02-architecture/architecture.FR.md
---

# Moteur d’équité des opportunités — Architecture de haut niveau

## Vue d’ensemble

Le système comprend l’expérience élève, le catalogue d’opportunités, le moteur de correspondance, la recherche, la revue administrative et l’infrastructure. La première version peut être une petite application Web avec une base de données gérée, en gardant des limites claires entre les composants.

## Flux principal

```text
Profil → Fiche structurée → Règles d’admissibilité → Score → Explication → Action
```

Les sources sont d’abord extraites avec l’aide de l’IA, puis contrôlées par des règles de validation et une revue humaine. Seules les fiches approuvées doivent apparaître dans les recommandations.

## Données principales

- Profil élève : niveau, région, intérêts, langue, budget et disponibilités.
- Opportunité : nom, catégorie, organisme, lieu, coût, date limite et critères.
- Preuve source : URL officielle, extrait, date de vérification, statut et réviseur.
- Activité : sauvegarde, masquage, rappel et prochaine action.

## Correspondance et recherche

Les conditions strictes, comme le niveau, la région et la date limite, sont évaluées avec des règles déterministes. Les facteurs souples, comme les intérêts, peuvent influencer un classement transparent. Le score doit montrer ses composantes au lieu de masquer une décision.

La recherche combine mots-clés et filtres structurés. Une similarité sémantique ne doit jamais être traitée comme une preuve d’admissibilité.

## Sécurité et confidentialité

Collecter seulement les données nécessaires et éviter les informations personnelles sensibles. La production doit prévoir authentification, permissions minimales, gestion des secrets, journaux d’audit, validation des entrées et sauvegardes.

## Évolution

Surveiller la fraîcheur des données, les échecs d’importation, la recherche, la file de revue et la disponibilité. Livrer d’abord une tranche testable, puis ajouter les notifications, de nouvelles sources, la recherche vectorielle et le déploiement à grande échelle.
## Référence complète synchronisée

Le contenu anglais complet est inclus automatiquement ci-dessous, y compris les sections, exemples, liens, tableaux et médias.

<details markdown="1">
<summary>Ouvrir la référence anglaise complète</summary>

{% capture canonical_source %}{% include_relative architecture.md %}{% endcapture %}
{{ canonical_source | split: 'translation_fr: /docs/02-architecture/architecture.FR.md' | last }}

</details>
