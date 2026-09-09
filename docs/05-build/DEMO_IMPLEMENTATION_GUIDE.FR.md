---
layout: default
title: Guide d’implémentation de la démonstration
locale: fr
translation_en: /docs/05-build/DEMO_IMPLEMENTATION_GUIDE.md
translation_zh: /docs/05-build/DEMO_IMPLEMENTATION_GUIDE.CN.md
translation_fr: /docs/05-build/DEMO_IMPLEMENTATION_GUIDE.FR.md
---

# Moteur d’équité des opportunités — Guide d’implémentation

## Objectif

Construire une démonstration complète, petite et explicable : l’élève remplit un profil, l’application lit des données vérifiées, applique des règles, calcule un score et explique les recommandations.

## Ordre conseillé

1. Créer le projet et les pages de base.
2. Définir la structure `Opportunity` et quelques fiches d’exemple.
3. Créer et valider le formulaire de profil.
4. Écrire une fonction d’admissibilité déterministe.
5. Écrire une fonction de classement transparente.
6. Afficher résultats, sources, dates limites et prochaine action.
7. Ajouter le détail, les sauvegardes et une petite file de revue.

## Modèle de données

Chaque fiche doit contenir au minimum le nom, l’organisme, la catégorie, le lieu, les niveaux, la langue, le coût, la date limite, la description des critères, l’URL officielle, la date de vérification et le statut de revue. Une information inconnue doit rester inconnue ou être marquée à vérifier.

## Règles

Évaluer d’abord les critères stricts et expliquer clairement un refus. Pour les fiches admissibles, classer selon les intérêts, le coût, le temps et la date limite. Le score doit être composé de facteurs compréhensibles et visibles.

## Tests et déploiement

Tester les niveaux, régions, langues, budgets et dates limites, ainsi que les champs manquants, les entrées invalides, l’absence de résultat et les erreurs de chargement. Ne jamais envoyer de secrets dans Git. La production nécessite authentification, permissions, sauvegardes, journaux et politique de confidentialité.
## Référence complète synchronisée

Le contenu anglais complet est inclus automatiquement ci-dessous, avec toutes les sections, exemples, liens, tableaux et ressources multimédias.

<details markdown="1">
<summary>Ouvrir la référence anglaise complète</summary>

{% capture canonical_source %}{% include_relative DEMO_IMPLEMENTATION_GUIDE.md %}{% endcapture %}
{{ canonical_source | split: "\n" | slice: 7, 9999 | join: "\n" }}

</details>
