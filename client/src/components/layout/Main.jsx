// Our main page used with router.
// This will construct how our app will layout and App.js will just call this file
import React, { useState } from 'react';
import SearchBar from '../SearchBar';
import NavBar from './NavBar';
import MovieBlocks from '../MovieBlocks';
import Footer from './Footer';

const Main = () => {

  const loadLoginState = () => {
    try {
        const login = localStorage.getItem('loginState')
        if (login === null) {
            return undefined;
        }
        return JSON.parse(login);
    } catch (err) {
        return undefined;
    }
  }

  const [login, loggedin] = useState(loadLoginState);

  return (
    <div className="App" style={{height: '100%'}}>
        <NavBar />
        <SearchBar />
        <MovieBlocks />
        <Footer/>
    </div>
  );
}

export default Main;