import styled from 'styled-components';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import './App.css';

const Nav = styled.nav`
  background-color: #333;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;

  &:hover {
    background-color: #ddd;
    color: black;
  }

  &.active {
    background-color: #4CAF50;
    color: white;
  }
`;

function App() {
  return (
    <Router>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/books">Books</StyledLink>
        <StyledLink to="/add-book">Add Book</StyledLink>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/add-book" element={<AddBook />} />
      </Routes>
    </Router>
  );
}

export default App;
