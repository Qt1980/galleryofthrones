import React from 'react'; 
import HornedBeasts from './HornedBeasts';

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
                    {beastArray}
            </main>
        )
    }
}

export default Main;
