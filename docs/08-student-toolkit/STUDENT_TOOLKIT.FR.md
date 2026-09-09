---
layout: default
title: Boîte à outils des élèves
locale: fr
translation_en: /docs/08-student-toolkit/STUDENT_TOOLKIT.md
translation_zh: /docs/08-student-toolkit/STUDENT_TOOLKIT.CN.md
translation_fr: /docs/08-student-toolkit/STUDENT_TOOLKIT.FR.md
---

# Boîte à outils des élèves : collaborer et rester en sécurité

Cette référence couvre les habitudes qui rendent un projet étudiant sain : collaboration, accessibilité, confidentialité, dépannage et communication.

## Flux GitHub simple

1. Choisissez une issue avec un résultat et un critère d’acceptation clairs.
2. Créez une branche comme `docs/add-research-guide` ou `feature/save-opportunity`.
3. Faites une petite modification et utilisez un message de commit explicite.
4. Testez localement puis ouvrez une pull request en expliquant le changement et le test.
5. Demandez une revue et améliorez le travail selon les commentaires.
6. Fusionnez lorsque les vérifications et la revue sont terminées.

Ne travaillez pas directement sur `main`, sauf accord explicite pour une minuscule correction documentaire.

## Modèle d’issue

```text
Objectif :
Bénéficiaire :
Hors périmètre :
Critère d’acceptation :
Preuve ou source :
Questions et risques :
```

## Checklist de pull request

Le changement a un seul objectif, fonctionne sur téléphone et ordinateur, vérifie les liens, images, traductions et titres, n’ajoute ni secret ni donnée personnelle inutile, et explique comment reproduire le résultat. Le code ou texte généré par IA doit être compris et révisé.

## Accessibilité, confidentialité et IA responsable

Utilisez des titres structurés, un contraste lisible, des liens descriptifs, des textes alternatifs, des libellés de formulaire et des contrôles utilisables au clavier. Ne transmettez que les données d’élèves nécessaires et utilisez des exemples fictifs. Protégez les clés API. Affichez les sources et dates de vérification. L’IA peut aider à résumer, mais les règles d’admissibilité, les dates, les coûts et les déclarations de sécurité exigent des règles déterministes et une revue humaine.

## En cas de panne

Vérifiez la console, le terminal, la requête réseau, le chemin et l’orthographe. Reproduisez avec le plus petit exemple et indiquez s’il s’agit d’un problème de code, de données, d’environnement ou d’exigence. Notez la solution pour aider le prochain élève.

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
{{ canonical_source | split: "\n" | slice: 7, 9999 | join: "\n" }}

</details>
