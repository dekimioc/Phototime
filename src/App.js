import React, { Component } from 'react';
import classes from './App.css';
import Header from './components/header/Header';
import Section from './components/section1/section1';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <Section />
      </div>
    );
  }
}

export default App;
