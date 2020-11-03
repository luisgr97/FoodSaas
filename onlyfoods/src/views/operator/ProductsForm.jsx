import React from "react";
// import axios from "axios";
import { Table, FormGroup, Form, Input } from 'reactstrap';

// import api from "../../api_route.js";

class ProductsForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            producto: {
                id: props.product.id,
                price: props.product.price,
                product_name: props.product.product_name,
                description: props.product.description,
                ingredientes: props.product.ingredients,
                image: props.product.image
            }
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {

        // const res = await fetch(api.route + "/api/products/list");
        // const data = await res.json();
        // console.log(data);
        // this.setState({ products: data });
    }

    render() {
        return (
            <div className="content">
                <Form>
                    <FormGroup>
                        <Input value={this.state.producto.product_name} placeholder="Nombre del producto"></Input>
                        <Input value={this.state.producto.description} placeholder="Descripcion del producto"></Input>
                        <Input value={this.state.producto.price} placeholder="Precio del producto"></Input>
                    </FormGroup>
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
                            this.state.producto.ingredientes.map((ing, k) =>
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

