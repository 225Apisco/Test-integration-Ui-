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
│  ├─ Header.jsx
│  ├─ Footer.jsx
│  ├─ StatusBadge.jsx
│  ├─ ActionButton.jsx
│  └─ TransactionItem.jsx
├─ pages/
│  └─ Home.jsx
├─ services/
│  └─ api.js        # API réelle (Test 2)
├─ data/
│  └─ transactions.js # Mock local (Test 1)
├─ App.jsx
└─ main.jsx


# Fonctionnement

📍 # Branche : main

Intégration UI avec données mockées (data/transactions.js)

Composants réutilisables : TransactionItem, StatusBadge, ActionButton

Interface responsive pour tous les types d’utilisateur

Actions interactives : Valider / Annuler

Logique métier : les transactions restent “en attente” tant qu’aucune action n’est faite

Test 2 – Consommation d’API

📍 # Branche : Test2

Consommation d’une API REST réelle (JSONPlaceholder

)

Gestion des états : chargement, erreur, succès

Transformation des données API pour les afficher comme transactions

Actions interactives conservées : Valider / Annuler

Logique métier respectée :

en attente → boutons actifs

validée ou annulée → boutons désactivés

Expérience utilisateur améliorée avec spinner et messages d’erreur

# Améliorations UX possibles

Ajouter un filtre par statut pour faciliter la recherche de transactions.

Ajouter un modal de confirmation avant de changer le statut d’une transaction.

Ajouter une animation de notification après chaque action pour informer l’utilisateur.

# Démo

Version locale : après npm run dev

# Auteur

BATIONO EPIPHANE – Développeur Frontend

Projet réalisé pour un test technique React js 
