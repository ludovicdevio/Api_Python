from flask import Flask
from flask_cors import CORS  # Importer CORS
from app.routes import bp as book_routes

def create_app():
    app = Flask(__name__)
    
    # Activer CORS pour l'application
    CORS(app)  # Ajoute cette ligne pour permettre les requêtes cross-origin

    app.register_blueprint(book_routes)
    return app
