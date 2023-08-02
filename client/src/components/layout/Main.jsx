// Our main page used with router.
// This will construct how our app will layout and App.js will just call this file
import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import NavBar from './NavBar';
import MovieBlocks from '../MovieBlocks';
import Footer from './Footer';

const Main = () => {
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