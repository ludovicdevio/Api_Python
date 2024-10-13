import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const HomeContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  background: url('/images/background.jpg') no-repeat center center fixed; // Assurez-vous que l'image existe
  background-size: cover;
  color: white;
  padding: 50px;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const NavLink = styled(Link)`
  margin: 0 15px;
  padding: 10px 15px;
  font-size: 16px;
  background-color: rgba(0, 123, 255, 0.8);
  color: white;
  text-decoration: none;
  border-radius: 5px;

  &:hover {
    background-color: rgba(0, 123, 255, 1);
  }
`;

const Title = styled.h1`
  color: #007bff;
  font-size: 2.5rem;
`;

const Paragraph = styled.p`
  font-size: 18px;
  margin-top: 10px;
  color: #ddd;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin-top: 20px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <Navbar>
        <NavLink to="/books">Voir les Livres</NavLink>
        <NavLink to="/add-book">Ajouter un Livre</NavLink>
      </Navbar>
      <Title>Bienvenue dans l’application Book Manager 📚</Title>
      <Paragraph>Gérez facilement votre bibliothèque en ligne !</Paragraph>
    </HomeContainer>
  );
};

export default Home;
