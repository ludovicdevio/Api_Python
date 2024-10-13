class Book:
    def __init__(self, title, author, publication_year, genre):
        self.title = title
        self.author = author
        self.publication_year = publication_year
        self.genre = genre
        self.is_available = True  # Indique si le livre est disponible

    def borrow(self):
        if self.is_available:
            self.is_available = False
            return f"Le livre '{self.title}' a été emprunté."
        return f"Le livre '{self.title}' n'est pas disponible."

    def return_book(self):
        self.is_available = True
        return f"Le livre '{self.title}' a été retourné."

    def to_dict(self):
        return {
            'title': self.title,
            'author': self.author,
            'publication_year': self.publication_year,
            'genre': self.genre,
            'is_available': self.is_available
        }
