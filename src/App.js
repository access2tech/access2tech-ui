import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Main from './components/Main'
import Header from './components/commons/Header'
import Footer from './components/commons/Footer'
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <div>
        <Header/>
          <div className="navbar">


          </div>
          <main>
            <Main/>
          </main>
          <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
