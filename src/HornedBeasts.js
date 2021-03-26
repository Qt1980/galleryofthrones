import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class HornedBeasts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         numberOfClicks: 0
        }
    }

    buttonClicked = () => {
        this.setState({
          numberOfClicks: this.state.numberOfClicks + 1
     });
    }

    render() {
        return (
            <Card style={{ width: '30rem' }}>
                <Card.Img variant="top" src={this.props.image_url} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                        <div>😈{this.state.numberOfClicks}</div>
                    </Card.Text>
                    <Button onClick={this.buttonClicked} variant="secondary" size="lg block">My Favorite Horned Beast!</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeasts;
