import React from "react";
// import CreateUserForm from "views/admin/CreateUserForm.jsx";
import { Button } from "reactstrap";
import counterpart from "counterpart";
// import * as Tr from "react-translate-component";
import spanish from "../../langs/spanish.js";
import english from "../../langs/english.js";
import portuguese from "../../langs/portuguese.js";
import axios from "axios";

import ProductsForm from "./ProductsForm.jsx";

import api from "../../api_route.js";

import { connect } from "react-redux";

import {
    Card,
    CardBody,
    Row,
    Col, FormGroup, Input, Table,
    Modal, ModalHeader, ModalBody
} from "reactstrap";

counterpart.registerTranslations('en', english);
counterpart.registerTranslations('es', spanish);
counterpart.registerTranslations('po', portuguese);

class Ingredientes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newproduct_name: "",
            newproduct_description: "",
            newproduct_price: "",
            newproduct_image: "",
            ingredientes: [],
            currentProduct: {},
            menus: [],
            selected_menu: "1",
            search: '',
            modal: false,
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    openToggle = obj => {
        this.setState({
            currentProduct: obj,
            modal: true
        });
    }

    closeToggle = () => {
        this.setState({
            modal: false
        });
    }

    createProduct = e => {

        let data = {
            product_name: this.state.newproduct_name,
            description: this.state.newproduct_description,
            image: this.state.newproduct_image,
            price: parseInt(this.state.newproduct_price),
            menu: this.state.selected_menu
        }

        axios.post(api.route + "/api/products/create", data)
            .then(res => {
                this.setState({
                    newproduct_name: "",
                    newproduct_description: "",
                    newproduct_price: "",
                });
                this.getingredientes();
                alert("ingrediente Creado con exito!");
            })
            .catch(err => {
                console.log(err);
            })
    }

    getMenus = async () => {
        const res = await fetch(api.route + "/api/menus/list");
        const data = await res.json();
        // console.log(data);
        this.setState({ menus: data });
    }

    getingredientes = async () => {
        const res = await fetch(api.route + "/api/ingredients/list");
        const data = await res.json();
        // console.log(data);
        this.setState({ ingredientes: data });
    }

    render() {

        return (
            <div className="content">
                <Row>
                    <Col sm="12">
                        <br></br>
                        <Card >
                            <CardBody>
                                <Col>
                                    <Row>
                                        <Col>
                                            <h3>Crear ingredientes</h3>
                                            <FormGroup>
                                                <Input onChange={this.handleInput} name="newproduct_name" placeholder="Crear ingrediente"></Input>
                                                <Input onChange={this.handleInput} name="newproduct_description" placeholder="Descripcion del ingrediente"></Input>
                                                <Input onChange={this.handleInput} name="newproduct_price" placeholder="Precio del ingrediente"></Input>
                                                <Input onChange={this.handleInput} name="newproduct_image" placeholder="Imagen del ingrediente"></Input>
                                                Selecciona tu menu: &nbsp;&nbsp;
                                                {/* <select onChange={this.handleInput} name="selected_menu">
                                                    {
                                                        this.state.menus.map((ing, i) => (
                                                            <option value={ing.id} key={i}>{ing.ingredient_name}</option>
                                                        ))
                                                    }
                                                </select> */}
                                            </FormGroup>
                                            <Button color="warning" onClick={this.createProduct}>Crear ingrediente</Button>
                                        </Col>
                                    </Row>
                                    <br></br>
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
                                                            <img src={ing.image} alt="abc" width="70px" height="65px" />
                                                        </td>
                                                        <td style={{ "textAlign": "left" }}>{ing.ingredient_name}</td>
                                                        <td style={{ "textAlign": "left" }}>{ing.description}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>

                    <div>
                        <Modal md="12" size="lg" isOpen={this.state.modal} toggle={this.closeToggle} className="danger">
                            <ModalHeader toggle={this.closeToggle}>
                                Ingredientes
                            </ModalHeader>
                            <ModalBody>
                                <ProductsForm size="lg" product={this.state.currentProduct} />
                            </ModalBody>
                        </Modal>
                    </div>

                </Row>
            </div>
        )
    }

    async componentDidMount() {
        this.getingredientes();
        this.getMenus();
    }

};

const mapStateToProps = state => {
    counterpart.setLocale(state.language);
    return { lng: state.language }
}

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredientes);

