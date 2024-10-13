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
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 3;

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

  // Pagination logic
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <BookListContainer>
      <h2>Liste des Livres</h2>
      {currentBooks.map((book) => (
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

      <Pagination>
        {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, index) => (
          <PageNumber key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </PageNumber>
        ))}
      </Pagination>

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
  border-radius: 10px;
  margin: 10px 0;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.span`
  margin: 0 5px;
  padding: 5px 10px;
  border: 1px solid #ddd;
  cursor: pointer;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

export default BookList;
