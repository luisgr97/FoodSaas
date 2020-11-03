import React from "react";
// import CreateUserForm from "views/admin/CreateUserForm.jsx";
import { Button } from "reactstrap";
import counterpart from "counterpart";
// import * as Tr from "react-translate-component";
import spanish from "../../langs/spanish.js";
import english from "../../langs/english.js";
import portuguese from "../../langs/portuguese.js";
import axios from "axios";

import MenusForm from "./MenusForm.jsx";

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

class Menus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newmenu_name: "",
            newmenu_description: "",
            menus: [],
            currentMenu: {},
            search: '',
            modal: false,
            loading: true
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    openToggle = obj => {
        this.setState({
            currentMenu: obj,
            modal: true
        });
    }

    closeToggle = () => {
        this.setState({
            modal: false
        });
    }

    getMenus = async () => {
        const res = await fetch(api.route + "/api/menus/list");
        const data = await res.json();
        // console.log(data);
        this.setState({ menus: data, loading: false });
    }

    reloadMenus = () => {
        this.setState({ loading: true });
        this.getMenus();
    }

    createMenu = e => {

        let data = {
            menu_name: this.state.newmenu_name,
            description: this.state.newmenu_description,
            banner: "",
            is_active: true,
            // franchise: api.subdomain
        }

        // console.log(api.route + "/api/menus/create", data);
        this.setState({ loading: true });
        axios.post(api.route + "/api/menus/create", data)
            .then(res => {
                this.setState({
                    newmenu_name: "",
                    newmenu_description: "",
                });
                this.getMenus();
                alert("Menu Creado con exito!");
            })
            .catch(err => {
                console.log(err);
                this.setState({
                    newmenu_name: "",
                    newmenu_description: "",
                });
                this.getMenus();
                alert("Menu Creado con exito!");
            })
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
                                            <h3>Crear Menu</h3>
                                            <FormGroup>
                                                <Input onChange={this.handleInput} name="newmenu_name" placeholder="Nombre del Menu" value={this.state.newmenu_name}></Input>
                                                <Input onChange={this.handleInput} name="newmenu_description" placeholder="Descripcion del Menu" value={this.state.description}></Input>
                                            </FormGroup>
                                            <Button color="warning" onClick={this.createMenu}>Crear Menu</Button>
                                        </Col>
                                    </Row>
                                    <br></br>
                                    <h3>Consultar Menus</h3>
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
                                                        <th>Nombre</th>
                                                        <th>Descripcion</th>
                                                        <th>Acciones</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        this.state.menus.map((m, k) =>
                                                            <tr key={k}>
                                                                <td>{k + 1}</td>
                                                                <td style={{ "textAlign": "left" }}>{m.menu_name}</td>
                                                                <td style={{ "textAlign": "left" }}>{m.description}</td>
                                                                <td style={{ "textAlign": "left" }}>
                                                                    <Button color="warning" onClick={() => this.openToggle(m)}>
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
                                Editar Menu
                            </ModalHeader>
                            <ModalBody>
                                <MenusForm menu={this.state.currentMenu} reloadMenus={this.reloadMenus} />
                            </ModalBody>
                        </Modal>
                    </div>

                </Row>
            </div>
        )
    }

    async componentDidMount() {
        this.getMenus();
    }

};

const mapStateToProps = state => {
    counterpart.setLocale(state.language);
    return { lng: state.language }
}

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menus);

