



# **PRÉSENTATION DU PROJET**

![Pharma App Logo](pharma.png)

---

## 1. Introduction

Cette mini application a été réalisée avec Python et le framework Flask.
Elle présente mon stage chez **iZZi web**, agence web à Brive-la-Gaillarde.

Durant ce stage, ma mission principale fut l’aide à la réalisation d’une application web connectée à Prestashop (back-office client).

---

## 2. Contexte et équipe

Le projet a été mené en binôme :

* **Charles Massey** : Lead développeur, chef de projet, architecte, spécialiste backend et base de données, formateur Python.
* **Jean-François Poux** : Développeur Fullstack stagiaire, chef de projet web expérimenté, responsable wireframes, MLD, script SQL, développement de fonctionnalités, propositions d’amélioration.

---

## 3. Méthode de travail

* Travail collaboratif, échanges réguliers, validation des étapes par le lead développeur
* Utilisation de wireframes pour valider l’ergonomie et les attentes client
* Réalisation d’un MLD et d’un script SQL pour anticiper l’évolution du projet
* Développement itératif : chaque fonctionnalité est testée, validée, puis intégrée
* Meetings client à deux pour recueillir les besoins et ajuster le projet
* Gestion du code avec Git et Github

---

## 4. Aperçu de l’application

**Pharma App** aide les familles à créer une liste de produits pharmaceutiques et à la lier directement à leur pharmacie. Le pharmacien configure la liste, la maman la partage à ses proches, et chacun peut contribuer en payant tout ou partie des produits.

**Objectif :** simplifier le parcours d’achat, mutualiser les contributions familiales et permettre un retrait rapide et sécurisé des produits en pharmacie.

### 4.1 Parcours utilisateur

1. **Admin** crée le catalogue et les comptes pharmacies.
2. **Pharmacien** ajuste son catalogue et crée une liste avec la maman.
3. **Maman** active son compte et partage la liste.
4. **Proches** paient via un lien (produits ou cagnotte).
5. **Paiement** : argent transféré à la pharmacie, liste mise à jour.
6. **Pharmacien** remet les produits ou déduit la cagnotte lors du retrait en boutique.

### 4.2 Architecture & séparation des responsabilités

* **PrestaShop** : administration, création des pharmacies et du catalogue, prix spécifiques. Déclenche la création de la liste figée après saisie email/nom. Ne gère pas la vie de la liste ni les notifications.
* **WebApp (Flask)** : gestion courante de la liste, partage, paiements, cagnotte, suivi, notifications, tableau de bord, gestion des remerciements et clôture.

---

## 2. Introduction

Cette mini application a été réalisée avec Python et le framework Flask.
Elle présente mon stage chez **iZZi web**, agence web à Brive-la-Gaillarde.

Durant ce stage, ma mission principale fut l’aide à la réalisation d’une application web connectée à Prestashop (back-office client).

---

## 3. Contexte et équipe

Le projet a été mené en binôme :

* **Charles Massey** : Lead développeur, chef de projet, architecte, spécialiste backend et base de données, formateur Python.
* **Jean-François Poux** : Développeur Fullstack stagiaire, chef de projet web expérimenté, responsable wireframes, MLD, script SQL, développement de fonctionnalités, propositions d’amélioration.

---

## 4. Méthode de travail

* Travail collaboratif, échanges réguliers, validation des étapes par le lead développeur
* Utilisation de wireframes pour valider l’ergonomie et les attentes client
* Réalisation d’un MLD et d’un script SQL pour anticiper l’évolution du projet
* Développement itératif : chaque fonctionnalité est testée, validée, puis intégrée
* Meetings client à deux pour recueillir les besoins et ajuster le projet
* Gestion du code avec Git et Github

---

## 5. Aperçu de l’application

**Pharma App** aide les familles à créer une liste de produits pharmaceutiques et à la lier directement à leur pharmacie. Le pharmacien configure la liste, la maman la partage à ses proches, et chacun peut contribuer en payant tout ou partie des produits.

**Objectif :** simplifier le parcours d’achat, mutualiser les contributions familiales et permettre un retrait rapide et sécurisé des produits en pharmacie.

### 5.1 Parcours utilisateur

1. **Admin** crée le catalogue et les comptes pharmacies.
2. **Pharmacien** ajuste son catalogue et crée une liste avec la maman.
3. **Maman** active son compte et partage la liste.
4. **Proches** paient via un lien (produits ou cagnotte).
5. **Paiement** : argent transféré à la pharmacie, liste mise à jour.
6. **Pharmacien** remet les produits ou déduit la cagnotte lors du retrait en boutique.

### 5.2 Architecture & séparation des responsabilités

- **PrestaShop** : administration, création des pharmacies et du catalogue, prix spécifiques. Déclenche la création de la liste figée après saisie email/nom. Ne gère pas la vie de la liste ni les notifications.
- **WebApp (Flask)** : gestion courante de la liste, partage, paiements, cagnotte, suivi, notifications, tableau de bord, gestion des remerciements et clôture.
