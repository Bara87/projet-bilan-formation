<<<<<<< HEAD
# trouve-ton-artisan
=======
# TrouveTonArtisan

## Description
"Trouve ton Artisan" est une application Angular permettant aux utilisateurs de trouver facilement des artisans qualifiés dans divers domaines. L'application utilise Angular, Bootstrap pour le style, Sass pour les styles personnalisés, et EmailJS pour l'envoi d'emails.

## Prérequis

Avant de commencer l'installation, assurez-vous d'avoir les logiciels et dépendances suivants installés sur votre machine :

- **Node.js** (version 20.15) et **npm** (version 10.7)
  - Téléchargement : [Node.js](https://nodejs.org
    
- **Angular CLI** (version 18)
  - Installation : `npm install -g @angular/cli`  
    
- **Git** (pour cloner le repository)
  - Téléchargement : [Git](https://git-scm.com/)

## Instructions d'installation

Suivez ces étapes pour installer le projet sur votre machine locale :

1. **Cloner le repository**
   ```bash
   git clone https://github.com/your-username/trouve-ton-artisan.git
   cd trouve-ton-artisan
   
2.**Installer les dépendances**
    npm install
    
3.**Configurer EmailJS**
   Créez un compte sur EmailJS.
   Configurez votre service email, modèle et ID utilisateur.
   Mettez à jour les informations de configuration EmailJS dans votre projet Angular (probablement dans un service ou un composant spécifique).
   
## Instrcutions de lancement

Après l'installation, suivez ces étapes pour lancer le projet :

1. **Compiler les styles Sass**
   npm run build sass
   
2.**Lancer l'application Angular**
   ng serve
   
## Fonctionnalités et Composants

Le projet inclut plusieurs composants, services et pipes générés :

__Composants__ : Header, Footer, Home, ArtisanList, ArtisanDetail, etc.
__Services__ : ArtisanDataService, EmailService, etc.
__Pipes__ : Serach pipes pour formater les données de recherche.

## Contribution

Les contributions sont les bienvenues ! Veuillez suivre les étapes suivantes pour contribuer au projet :

 1. Fork le repository.
 2. Créez une branche pour votre fonctionnalité (__git checkout -b feature/YourFeature__).
 3. Commitez vos modifications (__git commit -m 'Add some feature__).
 4. Poussez vers la branche (__git push origin feature/YourFeature__).
 5. Ouvrez une Pull Request.
