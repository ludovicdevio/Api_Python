import pandas as pd
from app.models import Book

class BookService:
    def __init__(self):
        self.books = []

    def load_books_from_excel(self, file_path):
        df = pd.read_excel(file_path)
        for _, row in df.iterrows():
            book = Book(
                title=row['Titre'],
                author=row['Auteur'],
                publication_year=row['Date de publication'],
                genre=row['Genre']
            )
            self.books.append(book)

    def get_all_books(self):
        return [book.to_dict() for book in self.books]

    def find_by_title(self, title):
        for book in self.books:
            if book.title == title:
                return book
        return None

    def add_book(self, new_book):
        self.books.append(new_book)

    def delete_book(self, title):
        book = self.find_by_title(title)
        if book:
            self.books.remove(book)
            return True
        return False

    def update_book(self, title, updated_data):
        book = self.find_by_title(title)
        if book:
            book.title = updated_data.get('title', book.title)
            book.author = updated_data.get('author', book.author)
            book.publication_year = updated_data.get('publication_year', book.publication_year)
            book.genre = updated_data.get('genre', book.genre)
            return True
        return False
