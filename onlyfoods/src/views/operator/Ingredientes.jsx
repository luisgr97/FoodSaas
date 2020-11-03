import React from "react";
// import CreateUserForm from "views/admin/CreateUserForm.jsx";
import { Button } from "reactstrap";
import counterpart from "counterpart";
// import * as Tr from "react-translate-component";
import spanish from "../../langs/spanish.js";
import english from "../../langs/english.js";
import portuguese from "../../langs/portuguese.js";
import axios from "axios";

import IngredientsForm from "./IngredientsForm.jsx";

import api from "../../api_route.js";

import { connect } from "react-redux";

import {
    Card,
    CardBody,
    Row,
    Col, FormGroup, Input, Table,
    Modal, ModalHeader, ModalBody
} from "reactstrap";

import ReactLoading from 'react-loading';

counterpart.registerTranslations('en', english);
counterpart.registerTranslations('es', spanish);
counterpart.registerTranslations('po', portuguese);

class Ingredientes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newingredient_name: "",
            newingredient_description: "",
            newingredient_price: "",
            newingredient_image: "",
            ingredientes: [],
            productos: [],
            currentIngredient: {},
            selected_product: "1",
            search: '',
            modal: false,
            loading: true,
            selectLoading: true,
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    openToggle = obj => {
        this.setState({
            currentIngredient: obj,
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
            ingredient_name: this.state.newingredient_name,
            description: this.state.newingredient_description,
            image: this.state.newingredient_image,
            price: parseInt(this.state.newingredient_price),
            product: this.state.selected_product,
        }

        this.setState({ loading: true });

        axios.post(api.route + "/api/ingredients/create", data)
            .then(res => {
                this.setState({
                    newingredient_name: "",
                    newingredient_description: "",
                    newingredient_price: "",
                    newingredient_image: "",
                });
                this.getingredientes();
                alert("ingrediente Creado con exito!");
            })
            .catch(err => {
                console.log(err);
            })
    }

    getingredientes = async () => {
        const res = await fetch(api.route + "/api/ingredients/list");
        const data = await res.json();
        // console.log(data);
        this.setState({ ingredientes: data, loading: false });
    }

    getProductos = async () => {
        const res = await fetch(api.route + "/api/products/list");
        const data = await res.json();
        // console.log(data);
        this.setState({ productos: data, loading: false, selectLoading: false });
    }

    reloadIngredientes = () => {
        this.setState({ loading: true });
        this.getingredientes();
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
                                                <Row>
                                                    <Col>
                                                        <Input onChange={this.handleInput} name="newingredient_name" placeholder="Nombre ingrediente"></Input>
                                                    </Col>
                                                    <Col>
                                                        Selecciona tu Producto: &nbsp;&nbsp;
                                                        {
                                                            this.state.selectLoading ?
                                                                <ReactLoading type="bars" color="#ffc107" width="25px" height="25px"></ReactLoading>
                                                                :
                                                                <select onChange={this.handleInput} name="selected_product">
                                                                    {
                                                                        this.state.productos.map((p, i) => (
                                                                            <option value={p.id} key={i}>{p.product_name}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                        }

                                                    </Col>
                                                </Row>
                                                <Input onChange={this.handleInput} name="newingredient_description" placeholder="Descripcion del ingrediente"></Input>
                                                <Input onChange={this.handleInput} name="newingredient_price" placeholder="Precio del ingrediente"></Input>
                                                <Input onChange={this.handleInput} name="newingredient_image" placeholder="Imagen del ingrediente"></Input>

                                            </FormGroup>
                                            <Button color="warning" onClick={this.createProduct}>Crear ingrediente</Button>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <h3>Consultar Ingredientes</h3>
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
                                                        <th>Imagen</th>
                                                        <th>Nombre</th>
                                                        <th>Descripcion</th>
                                                        <th>Detalles</th>
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
                                                                <td style={{ "textAlign": "left" }}>
                                                                    <Button color="warning" onClick={() => this.openToggle(ing)}>
                                                                        Detalles
                                                                    </Button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </Table>
                                    }
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
                                <IngredientsForm size="lg" ingredient={this.state.currentIngredient} reloadIngredientes={this.reloadIngredientes} />
                            </ModalBody>
                        </Modal>
                    </div>

                </Row>
            </div>
        )
    }

    async componentDidMount() {
        this.getingredientes();
        this.getProductos();
    }

};

const mapStateToProps = state => {
    counterpart.setLocale(state.language);
    return { lng: state.language }
}

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredientes);

