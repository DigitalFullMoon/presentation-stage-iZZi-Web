# Arborescence et explication technique du projet

## 1. Arborescence du projet

```
.
├── app.py
├── config.py
├── controllers/
│   ├── __init__.py
│   └── pages_controller.py
├── models/
│   ├── __init__.py
│   └── page.py
├── static/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── arrow-left.svg
│       ├── arrow-right.svg
│       ├── conclusion-icon.svg
│       ├── context-icon.svg
│       ├── home-icon.svg
│       ├── method-icon.svg
│       ├── mission-icon.svg
│       └── python-3.14.0-amd64.exe
├── templates/
│   ├── accueil.html
│   ├── base.html
│   ├── conclusion.html
│   ├── contexte.html
│   ├── methodologie.html
│   └── mission.html
├── instance/
│   └── presentation.db
├── presentation_rapport_stage.sql
├── requirements.txt
├── .env
├── .gitignore
├── README.md
├── deploiement.md
├── technique.md
└── .venv/
```

---

## 2. Explication des fichiers et dossiers

### app.py
Point d’entrée de l’application Flask. Initialise l’app, configure les blueprints, lance le serveur web. Alimente : toutes les routes et le rendu des templates.

### config.py
Contient la configuration de l’application (variables d’environnement, clés secrètes, etc.). Alimenté par `.env`. Alimente : Flask et SQLAlchemy.

### controllers/
- **pages_controller.py** : Définit les routes pour chaque page (accueil, contexte, mission, etc.), gère la navigation. Alimenté par les requêtes HTTP, alimente les templates.
- **__init__.py** : Permet d’importer le dossier comme module Python.

### models/
- **page.py** : Modèle SQLAlchemy pour les pages du site. Définit la structure de la table et les champs. Alimenté par la base SQLite, alimente les contrôleurs et templates.
- **__init__.py** : Permet d’importer le dossier comme module Python.

### static/
- **css/style.css** : Feuille de style principale pour le rendu visuel.
- **js/script.js** : Scripts JavaScript pour l’interactivité.
- **images/** : Icônes SVG et visuels utilisés dans les templates.

### templates/
- **base.html** : Template principal, structure commune à toutes les pages.
- **accueil.html, contexte.html, mission.html, methodologie.html, conclusion.html** : Templates spécifiques à chaque page, alimentés par les contrôleurs.

### instance/presentation.db
Base de données SQLite contenant les contenus des pages. Alimentée par le script SQL et l’application Flask. Alimente les modèles et les contrôleurs.

### presentation_rapport_stage.sql
Script SQL pour initialiser la base de données (tables, données de départ).

### requirements.txt
Liste des dépendances Python nécessaires au projet.

### .env
Variables d’environnement (clé secrète, config Flask, etc.). Alimenté manuellement, alimente Flask et SQLAlchemy.

### .gitignore
Liste des fichiers/dossiers à ignorer par Git (ex : `.env`, `.venv`, base de données).

### README.md
Présentation générale du projet, contexte, objectifs, équipe.

### deploiement.md
Guide d’installation et de lancement du projet en local.

### technique.md
Ce document : arborescence et explication technique.

### .venv/
Environnement virtuel Python pour isoler les dépendances.

---

## 3. Flux d’alimentation des fichiers

- **L’utilisateur** interagit avec l’application via le navigateur → requêtes HTTP → contrôleurs (routes Flask)
- **Les contrôleurs** récupèrent les données via les modèles (SQLAlchemy) → alimentent les templates HTML
- **Les templates** affichent les données et utilisent les fichiers statiques (CSS, JS, images)
- **La base de données** est alimentée par le script SQL et modifiée par l’application
- **La configuration** (config.py, .env) alimente Flask et la connexion à la base

---

Pour toute question technique, se référer à ce document ou au code source.
