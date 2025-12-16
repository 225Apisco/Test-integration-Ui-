Transactions UI - React + Bootstrap 5

# Description

Ce projet est un exemple d’interface web simple pour afficher une liste de transactions avec statuts et actions interactives.
Il est conçu pour être responsive et facile à utiliser pour tout type d’utilisateur.

# Fonctionnalités :

Affichage d’une liste de transactions (nom, montant, statut)

Badges de statut colorés (validée, en attente, annulée)

Actions interactives : Valider / Annuler

Interface responsive avec Bootstrap 5

Simulation d’un chargement d’API

# Technologies utilisées

React 18, JavaScript , Bootstrap 5 , HTML & CSS

# Installation

# Cloner le projet 

git clone :  https://github.com/225Apisco/Test-integration-Ui-

cd transactions-ui

# Installer les dépendances :

npm install


# Lancer le projet :

npm run dev


Ouvrir le navigateur sur l’URL indiquée (ex: http://localhost:5173)

# Structure du projet
src/
├─ components/
│  ├─ Header.jsx       # En-tête
│  ├─ Footer.jsx       # Pied de page
│  ├─ StatusBadge.jsx  # Badge de statut
│  ├─ ActionButton.jsx # Bouton d’action
│  └─ TransactionItem.jsx # Ligne de transaction
├─ data/
│  └─ transactions.js  # Mock des transactions
├─ pages/
│  └─ Home.jsx         # Page principale
├─ App.jsx
└─ main.jsx

# Fonctionnement

Les transactions sont récupérées depuis un mock (data/transactions.js).

Lorsqu’un utilisateur clique sur Valider ou Annuler, le statut de la transaction change immédiatement.

Le tableau est responsive et s’adapte à toutes les tailles d’écran.

# Améliorations UX possibles

Ajouter un filtre par statut pour faciliter la recherche de transactions.

Ajouter un modal de confirmation avant de changer le statut d’une transaction.

Ajouter une animation de notification après chaque action pour informer l’utilisateur.

# Démo

Version locale : après npm run dev

 Version hébergée : 

# Auteur

BATIONO EPIPHANE – Développeur Frontend

Projet réalisé pour un test technique React js 