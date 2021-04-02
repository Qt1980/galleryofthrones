import React from 'react'; 
import HornedBeasts from './HornedBeasts';
import CardColumns from 'react-bootstrap/CardColumns'
import './Main.css';
import { Form } from 'react-bootstrap';


class Main extends React.Component {
    //target form control to get selected number of horns
    filteredBeastArray = () => {
        // this.props.beast.filter
    }

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
             <Form className="Form">
                 <Form.Group controlId="bootstrapName">
                     <Form.Label>Number of Horns</Form.Label>
                     <Form.Control onInput={this.props.handleFormSubmitted} as="select">
                     <option value="1">1 Horn</option>
                     <option value="2">2 Horns</option>
                     <option value="3">3 horns</option>
                     <option value="100">100 Horns</option>
                     </Form.Control>
                 </Form.Group>
             </Form>
             <CardColumns>
                {beastArray} 
             </CardColumns>
            </main>
        );
    }
}

export default Main;
