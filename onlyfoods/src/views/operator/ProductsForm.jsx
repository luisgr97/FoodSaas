import React from "react";
import axios from "axios";
import { Table, FormGroup, Form, Input, Button } from 'reactstrap';
import api from "../../api_route.js";
import ReactLoading from 'react-loading';

class ProductsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // producto: {
            id: props.product.id,
            price: props.product.price,
            product_name: props.product.product_name,
            description: props.product.description,
            ingredientes: props.product.ingredients,
            image: props.product.image,
            menu: props.product.menu,
            editLoading: false
            // }
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    editProduct = e => {

        this.setState({ editLoading: true });

        let data = {
            price: this.state.price,
            product_name: this.state.product_name,
            description: this.state.description,
            image: this.state.image,
            // ingredientes: this.state.ingredients,
            menu: this.state.menu
            // franchise: api.subdomain
        }

        // console.log(data);

        axios.put(api.route + "/api/products/update/" + this.state.id, data)
            .then(res => {
                alert("Cambios guardados!");
                this.setState({ editLoading: false });
                this.props.reloadProductos();
            })
            .catch(err => {
                console.log("error");
            })

    }

    render() {
        return (
            <div className="content">
                <Form>
                    <FormGroup>
                        <Input value={this.state.product_name} onChange={this.handleInput} name="product_name" placeholder="Nombre del producto"></Input>
                        <Input value={this.state.description} onChange={this.handleInput} name="description" placeholder="Descripcion del producto"></Input>
                        <Input value={this.state.price} type="number" onChange={this.handleInput} name="price" placeholder="Precio del producto"></Input>
                        <Input value={this.state.image} onChange={this.handleInput} name="image" placeholder="Imagen del producto"></Input>
                    </FormGroup>
                    {
                        this.state.editLoading ?
                            <ReactLoading type="bars" color="#ffc107"></ReactLoading>
                            :
                            <Button color="warning" onClick={this.editProduct}>Guardar cambios</Button>
                    }
                </Form>
                <hr />
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.ingredientes.map((ing, k) =>
                                <tr key={k}>
                                    <td>{k + 1}</td>
                                    <td>
                                        <img src={ing.image} alt="abc" width="65px" height="50px" />
                                    </td>
                                    <td>{ing.ingredient_name}</td>
                                    <td>{ing.description}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div>
        )
    }
};

export default ProductsForm;

