import { Button } from 'bootstrap';
import React from 'react';

class HornedBeasts extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <img src={this.props.image_url} alt={this.props.title} title={this.props.title}/>
                <p>{this.props.description}</p>
            </div>
        )
    }
}
//testing github
export default HornedBeasts;
