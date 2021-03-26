import React from 'react'; 
import HornedBeasts from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns'
import './Main.css';

import data from './data.json';

class Main extends React.Component {
    render () {
        let beastArray = [];
        data.forEach((beasts) => {
            beastArray.push(
                <HornedBeasts
                name = {beasts.keyword}
                title = {beasts.ttle}
                image_url = {beasts.image_url}
                description = {beasts.description}
                />
                );
            });

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
