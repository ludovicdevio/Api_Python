// BookList.js

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditBook from './EditBook'; // Import du composant EditBook
import DeleteBook from './DeleteBook'; // Import du composant DeleteBook


const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/books');
        setBooks(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des livres:", error);
      }
    };

    fetchBooks();
  }, []);

  const handleDelete = async (title) => {
    try {
      await axios.delete(`http://127.0.0.1:5000/books/${title}`);
      setBooks(books.filter(book => book.title !== title));
      alert('Livre supprimé avec succès !');
    } catch (error) {
      console.error("Erreur lors de la suppression du livre:", error);
    }
  };

  const openEditModal = (book) => {
    setSelectedBook(book);
    setShowEditModal(true);
  };

  const handleEditSubmit = async (editedBook) => {
    try {
      await axios.put(`http://127.0.0.1:5000/books/${editedBook.title}`, editedBook);
      setBooks(books.map(book => (book.title === editedBook.title ? editedBook : book)));
      setShowEditModal(false);
      alert('Livre mis à jour avec succès !');
    } catch (error) {
      console.error("Erreur lors de la mise à jour du livre:", error);
    }
  };

  return (
    <BookListContainer>
      <h2>Liste des Livres</h2>
      {books.map((book) => (
        <BookItem key={book.title}>
          <div>
            <BookTitle>{book.title}</BookTitle>
            <BookAuthor>Auteur: {book.author}</BookAuthor>
            <p>Année de Publication: {book.publication_year}</p>
            <p>Genre: {book.genre}</p>
          </div>
          <IconContainer>
            <FontAwesomeIcon icon={faEdit} style={{ color: 'green' }} title="Modifier" onClick={() => openEditModal(book)} />
            <FontAwesomeIcon icon={faTrash} style={{ color: 'red' }} title="Supprimer" onClick={() => {
              setBookToDelete(book.title);
              setShowDeleteModal(true);
            }} />
          </IconContainer>
        </BookItem>
      ))}

      {showEditModal && (
        <EditBook
          book={selectedBook}
          onClose={() => setShowEditModal(false)}
          onSubmit={handleEditSubmit}
        />
      )}

      {showDeleteModal && (
        <DeleteBook
          bookTitle={bookToDelete}
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDelete}
        />
      )}
    </BookListContainer>
  );
};

// Styled components
const BookListContainer = styled.div`
  padding: 20px;
`;

const BookItem = styled.div`
  background: #f8f9fa;
  border-radius: 5px;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BookTitle = styled.h3`
  color: #007bff;
`;

const BookAuthor = styled.p`
  color: #555;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-left: 10px;
    cursor: pointer;

    &:hover {
      color: #007bff;
    }
  }
`;
export default BookList;
