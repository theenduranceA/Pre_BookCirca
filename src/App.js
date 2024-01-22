// src/App.js
import React from 'react';
import Homepage from './components/Homepage';
import Search from './components/Search';
import BookPage from './components/BookPage';
import UserProfile from './components/UserProfile';
import ReviewForm from './components/ReviewForm';

function App() {
  return (
    <div>
      <Homepage />
      <Search />
      <BookPage bookId="1" />
      <UserProfile userId="1" />
      <ReviewForm />
    </div>
  );
}

export default App;
