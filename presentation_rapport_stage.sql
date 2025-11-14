-- Création de la base de données
CREATE DATABASE IF NOT EXISTS presentation_rapport_stage 
CHARACTER SET utf8mb4 
COLLATE utf8mb4_unicode_ci;

-- Utilisation de la base
USE presentation_rapport_stage;

-- Table des pages
CREATE TABLE IF NOT EXISTS pages (
    id INT PRIMARY KEY AUTO_INCREMENT,
    slug VARCHAR(50) UNIQUE NOT NULL,
    titre VARCHAR(255) NOT NULL,
    contenu TEXT,
    ordre INT UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Table des images
CREATE TABLE IF NOT EXISTS images (
    id INT PRIMARY KEY AUTO_INCREMENT,
    page_id INT,
    nom_fichier VARCHAR(255),
    legende TEXT,
    ordre INT DEFAULT 0,
    FOREIGN KEY (page_id) REFERENCES pages(id) ON DELETE CASCADE
);

-- Insertion des 5 pages de base
INSERT INTO pages (slug, titre, ordre) VALUES
('accueil', 'Introduction - Pharma App', 1),
('contexte', 'Contexte du Projet', 2),
('mission', 'Mission et Objectifs', 3),
('methodologie', 'Méthodologie de Travail', 4),
('conclusion', 'Conclusion et Perspectives', 5);