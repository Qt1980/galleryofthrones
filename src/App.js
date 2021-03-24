import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Main />
        <h2>For the Button in You</h2>
        <button>Here's your button</button>
        <Footer />
      </div>
    )
  }
}


export default App;
