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
