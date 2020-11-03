import React from "react";
import axios from "axios";
import { Table, Input, FormGroup, Form, Button } from 'reactstrap';
import api from "../../api_route.js";
import ReactLoading from 'react-loading';

class MenusForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // menu: {
            id: props.menu.id,
            menu_name: props.menu.menu_name,
            description: props.menu.description,
            // },
            products: [],
            allproducts: [],
            loading: true,
            editLoading: false
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    editMenu = e => {

        this.setState({ editLoading: true });

        let data = {
            menu_name: this.state.menu_name,
            description: this.state.description,
            banner: "",
            is_active: true,
            // franchise: api.subdomain
        }

        axios.put(api.route + "/api/menus/update/" + this.state.id, data)
            .then(res => {
                alert("Cambios guardados!");
                this.setState({ editLoading: false });
                this.props.reloadMenus();
            })
            .catch(err => {
                console.log("error");
            })

    }

    async componentDidMount() {
        const res = await fetch(api.route + "/api/products/getbymenu/" + this.state.id);
        const data = await res.json();
        this.setState({ products: data, loading: false });
    }

    render() {
        return (
            <div className="content">
                <Form>
                    <FormGroup>
                        <Input value={this.state.menu_name} onChange={this.handleInput} name="menu_name" placeholder="Nombre del menu"></Input>
                        <Input value={this.state.description} onChange={this.handleInput} name="description" placeholder="Descripcion del menu" ></Input>
                    </FormGroup>
                    {
                        this.state.editLoading ?
                            <ReactLoading type="bars" color="#ffc107"></ReactLoading>
                            :
                            <Button color="warning" onClick={this.editMenu}>Guardar cambios</Button>
                    }
                </Form>
                <hr />
                {
                    this.state.loading
                        ?
                        <center>
                            <ReactLoading type="spin" color="#ffc107"></ReactLoading>
                        </center>
                        :
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
                }
            </div >
        )
    }
};

export default MenusForm;

