from flask import Flask
from app.routes import bp as book_routes

def create_app():
    app = Flask(__name__)
    app.register_blueprint(book_routes)
    return app
