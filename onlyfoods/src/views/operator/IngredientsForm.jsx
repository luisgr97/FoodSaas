import React from "react";
import axios from "axios";
import { FormGroup, Form, Input, Button } from 'reactstrap';
import api from "../../api_route.js";
import ReactLoading from 'react-loading';

class IngredientsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // ingrediento: {
            id: props.ingredient.id,
            price: props.ingredient.price,
            ingredient_name: props.ingredient.ingredient_name,
            description: props.ingredient.description,
            image: props.ingredient.image,
            product: props.ingredient.product,
            editLoading: false
            // }
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    editingredient = e => {

        this.setState({ editLoading: true });

        let data = {
            ingredient_name: this.state.ingredient_name,
            description: this.state.description,
            price: this.state.price,
            image: this.state.image,
            product: this.state.product
            // franchise: api.subdomain
        }

        // console.log(data);

        axios.put(api.route + "/api/ingredients/update/" + this.state.id, data)
            .then(res => {
                alert("Cambios guardados!");
                this.setState({ editLoading: false });
                this.props.reloadIngredientes();
            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        return (
            <div className="content">
                <Form>
                    <FormGroup>
                        <Input value={this.state.ingredient_name} onChange={this.handleInput} name="ingredient_name" placeholder="Nombre del ingrediente"></Input>
                        <Input value={this.state.description} onChange={this.handleInput} name="description" placeholder="Descripcion del ingrediente"></Input>
                        <Input value={this.state.price} type="number" onChange={this.handleInput} name="price" placeholder="Precio del ingrediente"></Input>
                        <Input value={this.state.image} onChange={this.handleInput} name="image" placeholder="Imagen del ingrediente"></Input>
                    </FormGroup>
                    {
                        this.state.editLoading ?
                            <ReactLoading type="bars" color="#ffc107"></ReactLoading>
                            :
                            <Button color="warning" onClick={this.editingredient}>Guardar cambios</Button>
                    }
                </Form>
            </div>
        )
    }
};

export default IngredientsForm;

