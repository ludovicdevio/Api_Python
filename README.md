Pour démarrer le projet il faudra:

1. vous rendre dans le dossier Api_Python, avec la commande : cd Api_Python
2. lancer l'api Python avec la commande :  python run.py
3. Se rendre dans le dossier book-manager avec la commande : cd book-manager
4. installer les nodes modules avec : npm install
5. lancer le front-end en react avec : npm start

Routes Implémentées
GET /books : Récupérer tous les livres.
GET /books/<title> : Récupérer un livre par titre.
POST /books : Ajouter un nouveau livre.
PUT /books/<title> : Mettre à jour les informations d'un livre.
DELETE /books/<title> : Supprimer un livre.
POST /books/<title>/borrow : Emprunter un livre.
POST /books/<title>/return : Retourner un livre.

##Utilisation de l'API
POST /books
Ajouter un nouveau livre.

Requête :

json
{
"title": "Le Seigneur des Anneaux",
"author": "J.R.R. Tolkien",
"publication_year": 1954,
"genre": "Fantasy"
}

##Principes de Programmation Orientée Objet (POO)

La classe Book encapsule les informations et les comportements associés à un livre, et la classe BookService gère les opérations courantes sur les livres. L'API offre des routes pour toutes les opérations de gestion de livres, ainsi que des fonctionnalités comme l'emprunt et le retour.

Cette API est construite autour de la classe Book, qui encapsule les informations et les comportements d'un livre. Voici quelques exemples de principes de POO appliqués :

Encapsulation : Les attributs d'un livre, comme le titre, l'auteur, et la disponibilité, sont regroupés au sein de la classe Book.

Méthodes : La classe Book définit des méthodes comme borrow() (emprunter un livre) et return_book() (retourner un livre), qui manipulent directement les attributs d'instance.

Abstraction : L'utilisateur de l'API ne voit que les résultats des opérations (par exemple, emprunter ou retourner un livre), tandis que les détails de l'implémentation sont cachés dans les méthodes de la classe.



Contenu Front : 



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
