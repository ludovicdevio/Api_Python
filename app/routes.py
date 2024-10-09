from flask import Blueprint, jsonify, request
from .services import read_books_csv, write_books_csv

main = Blueprint('main', __name__)

@main.route('/')
def home():
    return "Bienvenue sur mon API de Gestion de Bibliotheque!"

@main.route('/books', methods=['GET'])
def get_books():
    data = read_books_csv()  # Appel de la fonction qui lit les données du CSV
    return jsonify(data)  # Retourne les données au format JSON

@main.route('/books/<string:title>', methods=['GET'])
def get_book_by_title(title):
    books = read_books_csv()
    book = next((book for book in books if book['Titre'].lower() == title.lower()), None)
    return jsonify(book) if book else jsonify({"error": "Book not found"}), 404

@main.route('/books', methods=['POST'])
def add_book():
    new_book = request.get_json()
    books = read_books_csv()
    
    # Vérifier si le livre existe déjà
    if any(book['Titre'].lower() == new_book['Titre'].lower() for book in books):
        return jsonify({"error": "Book already exists"}), 400
    
    books.append(new_book)
    write_books_csv(books)  # Fonction pour écrire les données mises à jour dans le CSV
    return jsonify(new_book), 201

@main.route('/books/<string:title>', methods=['PUT'])
def update_book(title):
    updated_book = request.get_json()
    books = read_books_csv()
    for i, book in enumerate(books):
        if book['Titre'].lower() == title.lower():
            books[i] = updated_book
            write_books_csv(books)
            return jsonify(updated_book)
    return jsonify({"error": "Book not found"}), 404

@main.route('/books/<string:title>', methods=['DELETE'])
def delete_book(title):
    books = read_books_csv()
    new_books = [book for book in books if book['Titre'].lower() != title.lower()]
    
    if len(new_books) == len(books):
        return jsonify({"error": "Book not found"}), 404
    
    write_books_csv(new_books)  # Fonction pour écrire les données mises à jour dans le CSV
    return jsonify({"message": "Book deleted"}), 204
