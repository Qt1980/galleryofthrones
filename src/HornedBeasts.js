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
        this.props.handleClick({
            title: this.props.title,
            description: this.props.description,
            image_url: this.props.image_url
        })
    }

    render() {
        // const {title, description, image_url} = this.props; - could change this.props.title to 'title' and same for image_url and description
        return (
            <Card style={{ width: '30rem' }}>
                <Card.Img onClick={this.buttonClicked} variant="top" src={this.props.image_url} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Card.Text>
                        😈{this.state.numberOfClicks}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default HornedBeasts;
