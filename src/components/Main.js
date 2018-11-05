import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Index from './Index'
import Contact from './Contact'
import About from './About'

const Main = () => (
  <div class="container-fluid">
    <Route path="/" exact component={Index} />
    <Route path="/contact" component={Contact} />
    <Route path="/about" exact component={About} />
  </div>
)

export default Main
