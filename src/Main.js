import React from 'react'; 
import HornedBeasts from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns'
import './Main.css';


class Main extends React.Component {
    render () {
        let beastArray = this.props.beasts.map((beast, index) => (
            <HornedBeasts
            name = {beast.keyword}
            title = {beast.ttle}
            image_url = {beast.image_url}
            description = {beast.description}
            key={index}
            handleClick={this.props.handleClick}
            />
        ));

            return (
            <main>
             <CardColumns>
                {beastArray} 
             </CardColumns>
            </main>
        );
    }
}

export default Main;
