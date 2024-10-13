import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const AddBook = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    publication_year: '',
    genre: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/books', book);
      alert('Livre ajouté avec succès !');
      setBook({ title: '', author: '', publication_year: '', genre: '' });
    } catch (error) {
      console.error('Erreur lors de l\'ajout du livre :', error);
    }
  };

  return (
    <FormContainer>
      <Title>Ajouter un Nouveau Livre</Title>
      <form onSubmit={handleSubmit}>
        <Input
          name="title"
          placeholder="Titre"
          value={book.title}
          onChange={handleChange}
        />
        <Input
          name="author"
          placeholder="Auteur"
          value={book.author}
          onChange={handleChange}
        />
        <Input
          name="publication_year"
          placeholder="Année de Publication"
          value={book.publication_year}
          onChange={handleChange}
        />
        <Input
          name="genre"
          placeholder="Genre"
          value={book.genre}
          onChange={handleChange}
        />
        <Button type="submit">Ajouter</Button>
      </form>
    </FormContainer>
  );
};

// Styled components
const FormContainer = styled.div`
  margin: 50px auto;
  max-width: 400px;
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  color: #007bff;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ced4da;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;


export default AddBook;
