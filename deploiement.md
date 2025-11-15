# Déploiement local du projet

Ce guide explique comment installer et lancer le projet Flask en local.

---

## 1. Prérequis

- Python 3.10 ou supérieur
- Git
- (Optionnel) VS Code ou un éditeur de texte

---

## 2. Récupération du projet

Cloner le dépôt GitHub :
```powershell
git clone https://github.com/DigitalFullMoon/presentation-stage-iZZi-Web.git
cd presentation-stage-iZZi-Web
```

---

## 3. Création de l’environnement virtuel
```powershell
python -m venv .venv
```
Activer l’environnement :
```powershell
.\.venv\Scripts\Activate
```

---

## 4. Installation des dépendances
```powershell
pip install --upgrade pip
pip install -r requirements.txt
```

---

## 5. Configuration des variables d’environnement
Créer un fichier `.env` à la racine avec, par exemple :
```
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=change_me
```

---

## 6. Initialisation de la base de données
Si besoin, exécuter le script SQL :
```powershell
sqlite3 instance/presentation.db < presentation_rapport_stage.sql
```

---

## 7. Lancement de l’application
```powershell
python app.py
```
Ou avec Flask :
```powershell
flask run
```

L’application est accessible sur http://127.0.0.1:5000

---

## 8. Structure du projet
- `app.py` : point d’entrée Flask
- `controllers/` : routes
- `models/` : modèles
- `templates/` : pages HTML
- `static/` : assets (CSS, JS, images)
- `instance/` : base SQLite

---

## 9. Dépannage
- Vérifier la version de Python : `python --version`
- Installer les dépendances manquantes : `pip install nom_du_module`
- Pour réinitialiser la base : supprimer `instance/presentation.db` et relancer le script SQL

---

Pour toute question, consulter le README ou contacter le mainteneur du projet.
