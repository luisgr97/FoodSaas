import React from "react";

import logo from "logo.png";

import { Link } from "react-router-dom";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Col, Form, FormGroup, Label, Input, Button, Alert
} from "reactstrap";

// import axios from "axios";

// import api from "../api_route.js";

import counterpart from "counterpart";
import * as Tr from "react-translate-component";
import spanish from "../langs/spanish.js";
import english from "../langs/english.js";
import portuguese from "../langs/portuguese.js";

import { connect } from "react-redux";

counterpart.registerTranslations('en', english);
counterpart.registerTranslations('es', spanish);
counterpart.registerTranslations('po', portuguese);

class BuyPlan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            plan: "",

            franquicia: "",
            nombres: "",
            apellidos: "",
            email: "",
            telefono: 0,
            cedula: 0,
            tarjeta: 0,

            error: false,
            errorMsg: "",
            sended: false,
            sendedMsg: ""
        }
    }

    handleInput = e => {
        this.setState({ contract: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        alert("Esta es tu ruta: https://crepes.localhost.com/");
        // if (this.state.contract !== "") {
        //     axios.post("https://energycorp.herokuapp.com/api/invoice/by-contract/", { contractNumber: parseInt(this.state.contract) })
        //         .then(res => {
        //             var { error, find } = res.data;
        //             if (error === true || find === false) {
        //                 // MENSAJE DE ERROR POR TRANSLATE
        //                 // console.log(message)
        //                 this.setState({ error: true, errorMsg: counterpart.translate('getBill.error') });
        //                 window.setTimeout(() => {
        //                     this.setState({ error: false, errorMsg: "" });
        //                 }, 2000);
        //             } else {
        //                 this.setState({ bills: res.data.invoices })
        //             }
        //         })
        //         .catch(err => {
        //             console.log(err);
        //         })
        // }
    }

    componentDidMount() {
        console.log(window.location.hostname);
        this.setState({ plan: this.props.match.params.plan });
        window.scrollTo(0, 0);
    }

    render() {

        const alert = (this.state.error) ? <Alert className="animated rubberBand" color="danger">
            <center>
                <h6>{this.state.errorMsg}</h6>
            </center>
        </Alert> : true;

        const alertMail = (this.state.sended) ? <Alert className="animated rubberBand" color="success">
            <center>
                <h6>{this.state.sendedMsg}</h6>
            </center>
        </Alert> : true;

        return (
            <div>
                <Col md="5" id="login">
                    <Card>
                        {alert}
                        <div>
                            <Button block
                                color={this.state.plan === "basico" ? "primary" : this.state.plan === "normal" ? "success" : "danger"} >
                                <h2>
                                    <span role="img" aria-label=".">👉</span>
                                     Plan {this.state.plan}
                                    <span role="img" aria-label=".">👈</span>
                                </h2>
                            </Button>
                        </div>
                        <CardHeader>
                            <center>
                                <img src={logo} width="80px" height="80px" alt="description"></img>
                                <CardTitle tag="h5">
                                    Registra tu Franquicia
                                </CardTitle>
                            </center>

                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label for="exampleEmail">Nombre de la franquicia</Label>
                                    <Input onChange={this.handleInput} type="text" name="franquicia" required />
                                    <Label for="exampleEmail">Nombres del propietario</Label>
                                    <Input onChange={this.handleInput} type="text" name="nombres" required />
                                    <Label for="exampleEmail">Apellidos del propietario</Label>
                                    <Input onChange={this.handleInput} type="text" name="apellidos" required />
                                    <Label for="exampleEmail">Email del propietario</Label>
                                    <Input onChange={this.handleInput} type="email" name="email" required />
                                    <Label for="exampleEmail">Telefono del propietario</Label>
                                    <Input onChange={this.handleInput} type="number" name="telefono" required />
                                    <hr />
                                    <Label for="exampleEmail">Cedula</Label>
                                    <Input onChange={this.handleInput} type="number" name="cedula" required />
                                    <Label for="exampleEmail">Numero de Tarjeta</Label>
                                    <Input onChange={this.handleInput} type="number" name="tarjeta" required />


                                </FormGroup>
                                <center>
                                    <Button color="success">
                                        {/* <Tr content="getBill.download" /> */}
                                        Crear
                                    </Button>
                                    <br />
                                    <Link to="/">
                                        <Tr content="getBill.home" />
                                    </Link>
                                </center>
                            </Form>
                        </CardBody>
                        <CardFooter>
                        </CardFooter>
                    </Card>
                </Col>
                {alertMail}
            </div>
        )
    }
}

const mapStateToProps = state => {
    counterpart.setLocale(state.language);
    return { lng: state.language }
}

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BuyPlan);