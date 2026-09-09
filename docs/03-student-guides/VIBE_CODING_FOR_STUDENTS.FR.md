---
layout: default
title: Vibe Coding pour les élèves
locale: fr
translation_en: /docs/03-student-guides/VIBE_CODING_FOR_STUDENTS.md
translation_zh: /docs/03-student-guides/VIBE_CODING_FOR_STUDENTS.CN.md
translation_fr: /docs/03-student-guides/VIBE_CODING_FOR_STUDENTS.FR.md
---

# Vibe Coding pour les élèves du secondaire

## Il n’est pas nécessaire d’avoir peur du code

Le Vibe Coding consiste à décrire un objectif en langage naturel, demander à l’IA de proposer un petit changement, exécuter le résultat, lire les erreurs et améliorer progressivement. Cela facilite le début, mais ne remplace pas le jugement produit.

## Une boucle saine

```text
Décrire un petit objectif → Générer → Exécuter → Observer → Demander pourquoi → Modifier → Tester
```

Ne changez qu’un comportement à la fois. Demandez ce qui a changé, pourquoi, où le code peut échouer et comment le vérifier.

## Ce que le Vibe Coding fait bien

Il est particulièrement utile lorsque l’objectif est clair mais que la syntaxe ou le framework ne le sont pas encore :

| Bon usage | Exemple de demande | Ce que vous devez faire |
|---|---|---|
| Créer une première interface | « Crée une carte d’occasion adaptée au téléphone avec titre, date limite, coût, source et bouton de sauvegarde. » | Décider l’information utile et vérifier l’affichage sur téléphone. |
| Définir les données | « Propose une structure JSON pour une possibilité et explique chaque champ. » | Choisir les champs nécessaires et vérifier les sources officielles. |
| Explorer une règle | « Écris une fonction qui compare le niveau de l’élève aux niveaux minimum et maximum. » | Définir les limites, tester les valeurs et vérifier l’équité. |
| Comprendre une erreur | « Explique cette erreur et propose la plus petite correction sûre. » | Reproduire, corriger et vérifier les effets secondaires. |
| Écrire des tests | « Ajoute des tests pour aucun résultat, une date passée et une correspondance. » | Lire chaque test et confirmer qu’il représente un comportement réel. |

L’IA est moins fiable pour décider les vrais besoins, confirmer une date limite actuelle, protéger des données privées ou juger si le produit est juste et sûr. Ces responsabilités restent celles de l’équipe.

## Trois exemples concrets

### Exemple 1 : de l’histoire utilisateur à l’écran

```text
Je suis en 10e année et j’aime la biologie. Je veux voir les possibilités encore accessibles
et comprendre pourquoi elles me conviennent. Crée seulement une première page avec trois cartes.
Affiche le nom, la catégorie, la date limite, le coût, la raison de la correspondance et la source officielle.
Utilise des données d’exemple, rends la page accessible au clavier et lisible à 390 px.
N’ajoute ni connexion ni base de données pour l’instant et explique chaque fichier.
```

Exécutez la page, testez sa largeur et demandez à un camarade de trouver une possibilité pertinente. S’il ne comprend pas pourquoi elle apparaît, améliorez le texte ou les données avant les couleurs.

### Exemple 2 : d’une politique à une règle testée

Si l’équipe décide qu’une possibilité est admissible lorsque le niveau de l’élève se trouve entre les niveaux minimum et maximum, demandez une fonction et des tests pour les deux limites, l’intérieur, les valeurs hors plage et les données manquantes. Vous décidez si les limites sont inclusives, inspectez le code et exécutez les tests. L’IA exprime la règle ; elle ne crée pas la politique.

### Exemple 3 : de l’erreur à l’apprentissage

Donnez à l’assistant le message exact, la réponse réseau et le plus petit extrait de code pertinent. Demandez une explication du flux de données, deux causes possibles et une seule étape de diagnostic à la fois. Vous apprendrez si le problème vient de la requête, des données, du filtre ou de l’affichage, sans accepter une réécriture inexpliquée.

## Structure de prompt utile

```text
Contexte : nous construisons un moteur de possibilités pour un écran de téléphone.
Objectif : ajouter un message lorsque la recherche ne donne aucun résultat.
Contraintes : garder le style actuel ; ne pas modifier l’API ni les traductions.
Vérification : lister les fichiers modifiés et fournir deux tests, dont le cas vide.
```

Un bon prompt contient le contexte, un petit objectif, des contraintes et une vérification. Si vous ne pouvez pas expliquer le changement, ne le fusionnez pas.

## Créativité et responsabilité

Les élèves restent responsables du produit, du design, de la recherche, des tests et des décisions. L’IA n’est pas une source. Les noms, coûts, critères, dates limites et résultats doivent être confirmés dans les documents officiels.

## Erreurs fréquentes

- Demander de construire toute l’application en une seule fois.
- Copier du code sans l’exécuter ni le comprendre.
- Prendre une réponse plausible pour un fait.
- Ne pas créer de petits commits récupérables.
- Négliger les données, la confidentialité et les états d’erreur au profit de l’interface.

## Bonnes pratiques

Commencer par une fonction démontrable, noter les problèmes et les décisions, conserver des commits compréhensibles, faire tester par un pair et écrire dans la documentation ce qui a été appris.
## Référence complète synchronisée

Le contenu anglais complet est inclus automatiquement ci-dessous, avec toutes les sections, exemples, liens, tableaux et ressources multimédias.

<details markdown="1">
<summary>Ouvrir la référence anglaise complète</summary>

{% capture canonical_source %}{% include_relative VIBE_CODING_FOR_STUDENTS.md %}{% endcapture %}
{{ canonical_source | remove_first: '---' | remove_first: '---' }}

</details>
