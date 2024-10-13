// DeleteBook.js

import React from 'react';
import styled from 'styled-components';

const DeleteBook = ({ bookTitle, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete(bookTitle);
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalContainer>
        <h3>Confirmer la Suppression</h3>
        <p>Êtes-vous sûr de vouloir supprimer "{bookTitle}" ?</p>
        <div>
          <Button onClick={handleDelete}>Supprimer</Button>
          <Button onClick={onClose}>Annuler</Button>
        </div>
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
export default DeleteBook;
