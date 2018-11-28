import React, { Component } from 'react';
import classes from './App.css';
import Header from './components/header/Header';
import Section from './components/section1/section1';
import Design from './components/design/design';
import Section2 from './components/section2/section2';
import Subscribe from './components/subscribe/subscribe';
import Download from './components/download/download';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <Header />
        <Section />
        <Design />
        <Section2 />
        <Subscribe />
        <Download />
      </div>
    );
  }
}

export default App;
