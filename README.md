# Projet Nuit de l'Info 2024 - INSA HDF - Sous l'océan

## Description du projet  
Nous participons à la Nuit de l'Info 2024 à l'INSA Hauts-de-France (INSAHDF).  
Notre équipe (Veni Codi Vici) a décidé de relever les défis suivants :  
- **Sujet national** : FAIRE FACE AU CHANGEMENT CLIMATIQUE : LE VRAI DU FAUX
- **Site officiel** : https://www.nuitdelinfo.com/
- **Défis supplémentaires** :  
  1. Défi 1 : **L’accessibilité au cœur du développement : relevez le défi !** (ASI)
  2. Défi 2 : **A la chasse au logo!** (Lyrecco)
  3. Défi 3 : **Re-bienvenue au PHP** (Tetris)
  4. Défi 4 : **Key & Cipher** (MAIF)

Ce projet est conçu pour mettre en valeur nos compétences en développement web, tout en respectant les contraintes des défis.

---

## Architecture des fichiers  

Le projet est structuré comme suit :  

```plaintext
Projet/
│
├── assets/
│   ├── img/        # Images utilisées dans le projet
│   ├── video/      # Vidéos intégrées
│   └── style/
│       ├── css/    # Feuilles de style CSS
│       └── scss/   # Fichiers sources SCSS
│
├── js/
│   └── section.js  # Scripts JavaScript spécifiques aux sections
│
├── module/
│   ├── bdd.php     # Connexion à la base de données
│   └── reponse.php # Gestion des réponses
│
├── template/
│   ├── section.php # Sections principales du site
│   └── footer.php  # Pied de page
│
├── main.php        # Point d'entrée principal du site
├──  README.md       # Documentation
└── LICENSE
```

## Technologies utilisées
### Front-end  
- **HTML** : Structure des pages.  
- **CSS** : Mise en forme et styles des composants.  
- **SASS/SCSS** : Préprocesseur pour faciliter et organiser les styles CSS.  
- **jQuery** : Dynamisme et manipulation DOM simplifiés.  

### Back-end  
- **PHP** : Gestion des requêtes serveur et des interactions avec la base de données.  

## License
Ce projet est distribué sous la licence **GPL** (General Public License). Vous êtes libre de :  
- Utiliser, copier et distribuer le projet.  
- Modifier et partager vos modifications sous la même licence.  

Pour plus d'informations, consultez le fichier de licence ou [le site officiel de la licence GPL](https://www.gnu.org/licenses/gpl-3.0.fr.html).
