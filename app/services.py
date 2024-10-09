import pandas as pd

def read_books_csv():
    df = pd.read_csv('data/books.csv', encoding='ISO-8859-1')  # Lecture avec encodage spécifié
    return df.to_dict(orient='records')  # Conversion en liste de dictionnaires

def write_books_csv(books):
    df = pd.DataFrame(books)
    df.to_csv('data/books.csv', index=False, encoding='ISO-8859-1')  # Écriture des données mises à jour
