import './App.css';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MovieBlocks from './components/MovieBlocks';
import SearchBar from './components/SearchBar';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <div className="App">
          <div>
            <div>
              <NavBar />
              <div>
              <SearchBar/>
            </div>
              <div>
                {/* <MovieBlocks/> */}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </Provider>
    )
  }
}

export default App;