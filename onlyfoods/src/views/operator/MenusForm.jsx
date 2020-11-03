import React from "react";
// import axios from "axios";
import { Table, Input, FormGroup, Form } from 'reactstrap';
import api from "../../api_route.js";

class MenusForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: {
                id: props.menu.id,
                menu_name: props.menu.menu_name,
                description: props.menu.description,
            },
            products: [],
            allproducts: []
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    async componentDidMount() {
        const res = await fetch(api.route + "/api/products/getbymenu/" + this.state.menu.id);
        const data = await res.json();
        this.setState({ products: data });
    }

    render() {
        return (
            <div className="content">
                <Form>
                    <FormGroup>
                        <Input value={this.state.menu.menu_name} placeholder="Nombre del menu"></Input>
                        <Input value={this.state.menu.description} placeholder="Descripcion del menu" ></Input>
                    </FormGroup>
                </Form>
                <hr />
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Nombre</th>
                            <th>Descripcion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.products.map((p, k) =>
                                <tr key={k}>
                                    <td>{k + 1}</td>
                                    <td>
                                        <img src={p.image} alt="abc" width="75px" height="60px" />
                                    </td>
                                    <td style={{ "textAlign": "left" }}>{p.product_name}</td>
                                    <td style={{ "textAlign": "left" }}>{p.description}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div >
        )
    }
};

export default MenusForm;

