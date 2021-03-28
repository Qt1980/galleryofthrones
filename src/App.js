import React from 'react';
import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'
import SelectedBeast from './SelectedBeasts';

import data from './data.json';

// console.log("imported data", data);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      // hornedBeasts: data
      beast: {}
    }
    // console.log("this is state========", this.state)
  }

  showBeastInModal = (clickedBeast) => {
    this.setState({
      show: true,
      beast: clickedBeast,
      
    }) 
    console.log(clickedBeast);
  }

  hideBeastInModal = () => {
    this.setState({
      show: false,
    })
  }


  render() {
    console.log(this.state)
    return (
      <div>
        <Header />
        <Main 
          beasts={data}
          handleClick={this.showBeastInModal}
        />
        <SelectedBeast
        show={this.state.show}
        hideBeast={this.hideBeastInModal}
        beast={this.state.beast}
        />
        
        <Footer />
      </div>
    )
  }
}


export default App;
