import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MovieBlocks from './components/MovieBlocks';
import SearchBar from './components/SearchBar';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Main from './components/layout/Main';
import store from './redux/store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import UserMovieBlocks from './components/UserMovieBlocks';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <BrowserRouter>
            <Routes>  
              <Route path='/' element={<Main />} />
              {/* <Route exact path='/user/registration' component={UserRegistrationForm} /> */}
              <Route path='/user/mylist' element={<UserMovieBlocks />} />
            </Routes>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;