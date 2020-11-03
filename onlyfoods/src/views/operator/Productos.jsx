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

import ReactLoading from 'react-loading';

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

class Productos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newproduct_name: "",
            newproduct_description: "",
            newproduct_price: "",
            newproduct_image: "",
            productos: [],
            currentProduct: {},
            menus: [],
            selected_menu: "1",
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

        this.setState({ loading: true });

        axios.post(api.route + "/api/products/create", data)
            .then(res => {
                this.setState({
                    newproduct_name: "",
                    newproduct_description: "",
                    newproduct_price: "",
                    newproduct_image: "",
                });
                this.getProductos();
                alert("Producto Creado con exito!");
            })
            .catch(err => {
                console.log(err);
            })
    }

    getMenus = async () => {
        const res = await fetch(api.route + "/api/menus/list");
        const data = await res.json();
        // console.log(data);
        this.setState({ menus: data, selectLoading: false });
    }

    getProductos = async () => {
        const res = await fetch(api.route + "/api/products/list");
        const data = await res.json();
        // console.log(data);
        this.setState({ productos: data, loading: false });
    }

    reloadProductos = () => {
        this.setState({ loading: true });
        this.getProductos();
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
                                            <h3>Crear Productos</h3>
                                            <FormGroup>
                                                <Row>
                                                    <Col>
                                                        <Input onChange={this.handleInput} name="newproduct_name" placeholder="Nombre del Producto"></Input>
                                                    </Col>
                                                    <Col>
                                                        Selecciona tu menu: &nbsp;&nbsp;
                                                        {
                                                            this.state.selectLoading ?
                                                                <ReactLoading type="bars" color="#ffc107" width="25px" height="25px"></ReactLoading>
                                                                :
                                                                <select onChange={this.handleInput} name="selected_menu">
                                                                    {
                                                                        this.state.menus.map((m, i) => (
                                                                            <option value={m.id} key={i}>{m.menu_name}</option>
                                                                        ))
                                                                    }
                                                                </select>
                                                        }

                                                    </Col>
                                                </Row>
                                                <Input onChange={this.handleInput} name="newproduct_description" placeholder="Descripcion del Producto"></Input>
                                                <Input onChange={this.handleInput} type="number" name="newproduct_price" placeholder="Precio del Producto"></Input>
                                                <Input onChange={this.handleInput} name="newproduct_image" placeholder="Imagen del Producto"></Input>
                                            </FormGroup>
                                            <Button color="warning" onClick={this.createProduct}>Crear Producto</Button>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <h3>Consultar Productos</h3>
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
                                                        <th>Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.productos.map((p, k) =>
                                                            <tr key={k}>
                                                                <td>{k + 1}</td>
                                                                <td>
                                                                    <img src={p.image} alt="abc" width="70px" height="65px" />
                                                                </td>
                                                                <td style={{ "textAlign": "left" }}>{p.product_name}</td>
                                                                <td style={{ "textAlign": "left" }}>{p.description}</td>
                                                                <td style={{ "textAlign": "left" }}>
                                                                    <Button color="warning" onClick={() => this.openToggle(p)}>
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
                                Ediatar producto
                            </ModalHeader>
                            <ModalBody>
                                <ProductsForm size="lg" product={this.state.currentProduct} reloadProductos={this.reloadProductos} />
                            </ModalBody>
                        </Modal>
                    </div>

                </Row>
            </div>
        )
    }

    async componentDidMount() {
        this.getProductos();
        this.getMenus();
    }

};

const mapStateToProps = state => {
    counterpart.setLocale(state.language);
    return { lng: state.language }
}

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Productos);

