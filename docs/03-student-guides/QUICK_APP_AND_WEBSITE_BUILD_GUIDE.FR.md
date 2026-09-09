---
layout: default
title: Guide pour créer rapidement une application ou un site web
locale: fr
translation_en: /docs/03-student-guides/QUICK_APP_AND_WEBSITE_BUILD_GUIDE.md
translation_zh: /docs/03-student-guides/QUICK_APP_AND_WEBSITE_BUILD_GUIDE.CN.md
translation_fr: /docs/03-student-guides/QUICK_APP_AND_WEBSITE_BUILD_GUIDE.FR.md
---

# Opportunity Equity Engine — Guide pour créer rapidement une application ou un site web

Ce guide montre aux élèves comment transformer rapidement une petite idée en site web fonctionnel, application web adaptée au téléphone ou premier prototype iPhone. Le but n’est pas de tout construire en une seule fois. Le but est de créer un parcours utile, de le tester avec des personnes, puis de l’améliorer.

## Choisir le plus petit parcours utile

| Ce que vous voulez créer | Point de départ rapide | Ce que vous pouvez démontrer |
|---|---|---|
| Un site web public | HTML, CSS et JavaScript | Une page soignée avec du contenu et des liens réels |
| Une application adaptée au téléphone | Site responsive ou PWA | Une expérience de type application dans un navigateur mobile |
| Un prototype iPhone | SwiftUI dans Xcode ou Expo | Quelques écrans et une interaction fonctionnelle |
| Une démonstration avec des données | Site avec une API simple ou une base hébergée | Recherche, filtres, éléments enregistrés ou recommandations |

Commencez par le parcours qui permet à l’équipe de tester l’idée le plus tôt possible. Un site responsive est souvent la meilleure première version, car il fonctionne sur ordinateur et téléphone sans attendre une publication dans une boutique d’applications.

## Le parcours web le plus rapide

Pour une première version, créez trois petits fichiers :

```text
my-project/
├── index.html
├── style.css
└── app.js
```

Utilisez `index.html` pour la structure, `style.css` pour l’apparence et `app.js` pour les interactions. Demandez à un assistant de programmation IA de créer une petite fonctionnalité à la fois, puis ouvrez la page dans un navigateur et testez-la vous-même.

Les bonnes premières fonctionnalités comprennent :

- Une zone de recherche qui filtre une liste d’opportunités.
- Un formulaire qui recueille la classe, les intérêts, le lieu et le budget.
- Une carte de résultat qui explique pourquoi une opportunité peut convenir.
- Un bouton d’enregistrement qui conserve une courte liste dans le navigateur.
- Un lien clair « postuler » qui ouvre la source originale.

Vous pouvez publier un site statique avec GitHub Pages ou un autre service d’hébergement statique. Ajoutez les données réelles seulement après avoir validé l’écran et le parcours avec des données d’exemple.

## Donner une sensation d’application mobile

Avant de créer une application native, rendez le site agréable sur un petit écran :

1. Utilisez une seule colonne sous environ 700 pixels de largeur.
2. Rendez les boutons et les champs faciles à toucher.
3. Gardez les actions importantes près du bas de l’écran.
4. Testez avec un vrai téléphone, pas seulement avec une fenêtre de bureau redimensionnée.
5. Ajoutez un manifeste et une icône web seulement lorsque l’expérience de base fonctionne.

Un site adapté au téléphone peut être partagé avec un lien et ajouté à l’écran d’accueil. C’est une bonne démonstration produit, car les élèves peuvent tester l’expérience immédiatement avec leurs camarades.

## Trois parcours iPhone pratiques

### SwiftUI et Xcode

Utilisez SwiftUI si l’équipe veut apprendre les outils natifs d’Apple et créer un prototype propre à l’iPhone. Concevez quelques écrans, utilisez d’abord des données d’exemple et connectez les vrais services plus tard. Le développement iPhone natif utilise généralement Xcode sur un Mac ; vérifiez donc que l’équipe dispose du matériel et de la configuration Apple nécessaires.

### Expo et React Native

Utilisez Expo si l’équipe connaît déjà JavaScript ou souhaite faire évoluer une base de code vers plusieurs plateformes mobiles. Les élèves peuvent commencer par un petit écran, une liste et une interaction. Évitez les systèmes complexes d’authentification, de paiement ou de tâches en arrière-plan dans le premier prototype.

### Une application web progressive

Utilisez un site responsive si la priorité est la rapidité, l’accès et le partage facile. Une PWA peut fournir une structure proche d’une application tout en gardant un déploiement simple. Pour la première démonstration étudiante de ce projet, c’est souvent le choix le plus pratique.

## Un plan de construction en 60 minutes

1. **Choisir un utilisateur :** par exemple, un élève de 11e année qui cherche des programmes d’été peu coûteux.
2. **Choisir une action :** rechercher, filtrer, comparer ou enregistrer une opportunité.
3. **Dessiner trois écrans :** accueil, résultats et détails.
4. **Créer des données d’exemple :** commencer avec cinq fiches crédibles et les identifier comme exemples.
5. **Construire le parcours principal :** faire fonctionner une interaction complète avant d’ajouter des options.
6. **Tester avec deux personnes :** observer leurs hésitations et noter leurs questions.
7. **Corriger le plus gros problème :** améliorer la clarté avant d’ajouter une fonctionnalité.

## Un prompt utile pour le codage IA

Donnez à l’assistant une demande précise, un contexte, des contraintes et un test :

```text
Construis une page responsive de recherche d’opportunités avec HTML, CSS et JavaScript simples.
Utilise cinq opportunités d’exemple dans un tableau. Ajoute des filtres pour la classe et le coût.
N’ajoute ni framework ni backend. Garde la mise en page accessible sur téléphone.
Après le codage, explique comment tester les filtres et quels fichiers ont changé.
```

Demandez ensuite une seule modification à la fois : « ajoute un état vide », « explique cette fonction » ou « rends le bouton accessible au clavier ». Vérifiez et testez chaque modification avant de continuer.

## Exemples de petits projets

- **Chercheur d’opportunités :** filtrer cinq programmes d’exemple et expliquer chaque résultat.
- **Planificateur de candidatures :** transformer les dates limites en liste avec des états.
- **Carte de ressources étudiantes :** présenter les ressources par lieu et catégorie.
- **Présentation d’équipe :** montrer le problème, le prototype, les preuves et l’étape suivante.

Chaque exemple suffit pour une première démonstration. Un petit parcours convaincant vaut mieux qu’une grande application composée d’écrans inachevés.

## Tester avant de partager

- Vérifiez la page sur un écran de téléphone étroit et sur un écran large.
- Utilisez le clavier pour atteindre chaque contrôle.
- Testez une recherche vide et une valeur de formulaire invalide.
- Confirmez que les liens ouvrent la bonne source.
- Ne placez pas de clés API, de mots de passe ou de renseignements privés d’élèves dans le code du navigateur.
- Identifiez honnêtement les fiches d’exemple, le contenu généré par IA et les fonctionnalités futures.
- Demandez à un élève qui n’a pas créé la page d’effectuer l’action principale.

## Ce qui appartient aux élèves

L’IA peut suggérer du code, des mises en page, des tests et des explications. Les élèves restent responsables du choix du problème, de la qualité des données, des décisions de confidentialité, de la communication visuelle, des tests et du choix de ce qui est prêt à être présenté. Construisez vite, mais gardez le projet assez compréhensible pour que chaque membre puisse l’expliquer.

## Parcours recommandé pour ce projet

Commencez par un site statique responsive utilisant des données d’opportunités d’exemple. Ajoutez le filtrage, une explication claire de chaque recommandation et un lien vers la source. Lorsque ce parcours fonctionne sur téléphone, décidez si une API simple, une base hébergée, une invite d’installation PWA ou un prototype iPhone natif apporte assez de valeur pour justifier sa complexité.
