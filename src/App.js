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
      beastToRender: data,
      beast: {}
    }
  }

    showBeastInModal = (clickedBeast) => {
      this.setState({
        show: true,
        beast: clickedBeast,

      })
      
    }

    hideBeastInModal = () => {
      this.setState({
        show: false,
      })
    }

    handleFormSubmitted = event => {
      event.preventDefault();
      const horns = parseInt(event.target.value);
      console.log(horns);
      let filteredBeastSubmitted = data.filter(beasts => beasts.horns === horns);
      console.log(filteredBeastSubmitted);
      this.setState({beastToRender: filteredBeastSubmitted})
        //I need to attach horns somehow, not sure

    }



    render() {
      return (
        <div>
          <Header />
          <Main
            beasts={this.state.beastToRender}
            handleClick={this.showBeastInModal}
            handleFormSubmitted={this.handleFormSubmitted}
          />
          
          <SelectedBeast
            show={this.state.show}
            hideBeast={this.hideBeastInModal}
            beast={this.state.beast}
          />

          <Footer />
        </div>
      )
    };
  }


  export default App;
