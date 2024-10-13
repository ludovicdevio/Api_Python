from flask import Blueprint, jsonify, request
from app.services import BookService
from app.models import Book

bp = Blueprint('routes', __name__)

# Initialisation du service des livres
book_service = BookService()
book_service.load_books_from_excel('app/data/books.xlsx')

@bp.route('/', methods=['GET'])
def home():
    return "Bienvenue sur notre API de Gestion de Bibliotheque!"

# Route: Obtenir tous les livres
@bp.route('/books', methods=['GET'])
def get_books():
    return jsonify(book_service.get_all_books())

# Route: Obtenir un livre par titre
@bp.route('/books/<string:title>', methods=['GET'])
def get_book_by_title(title):
    book = book_service.find_by_title(title)
    if book:
        return jsonify(book.to_dict())
    return jsonify({"error": "Livre non trouvé"}), 404

# Route: Ajouter un nouveau livre
@bp.route('/books', methods=['POST'])
def add_book():
    data = request.json
    new_book = Book(
        title=data['title'],
        author=data['author'],
        publication_year=data['publication_year'],
        genre=data['genre']
    )
    book_service.add_book(new_book)
    return jsonify({"message": "Livre ajouté avec succès"}), 201

# Route: Supprimer un livre
@bp.route('/books/<string:title>', methods=['DELETE'])
def delete_book(title):
    if book_service.delete_book(title):
        return jsonify({"message": "Livre supprimé avec succès"}), 200
    return jsonify({"error": "Livre non trouvé"}), 404

# Route: Mettre à jour un livre
@bp.route('/books/<string:title>', methods=['PUT'])
def update_book(title):
    data = request.json
    if book_service.update_book(title, data):
        return jsonify({"message": "Livre mis à jour avec succès"}), 200
    return jsonify({"error": "Livre non trouvé"}), 404

# Route: Emprunter un livre
@bp.route('/books/<string:title>/borrow', methods=['POST'])
def borrow_book(title):
    book = book_service.find_by_title(title)
    if book:
        return jsonify({"message": book.borrow()})
    return jsonify({"error": "Livre non trouvé"}), 404

# Route: Retourner un livre
@bp.route('/books/<string:title>/return', methods=['POST'])
def return_book(title):
    book = book_service.find_by_title(title)
    if book:
        return jsonify({"message": book.return_book()})
    return jsonify({"error": "Livre non trouvé"}), 404
