// EditBook.js

import React, { useState } from 'react';
import styled from 'styled-components';



const EditBook = ({ book, onClose, onSubmit }) => {
  const [editedBook, setEditedBook] = useState(book);

  const handleChange = (e) => {
    setEditedBook({ ...editedBook, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(editedBook);
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <h3>Modifier le Livre</h3>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            value={editedBook.title}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="author"
            value={editedBook.author}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="publication_year"
            value={editedBook.publication_year}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="genre"
            value={editedBook.genre}
            onChange={handleChange}
            required
          />
          <div>
            <Button type="submit">Enregistrer</Button>
            <Button type="button" onClick={onClose}>Annuler</Button>
          </div>
        </form>
      </ModalContainer>
    </ModalOverlay>
  );
};

// Styled components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  margin: 5px 0;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export default EditBook;
