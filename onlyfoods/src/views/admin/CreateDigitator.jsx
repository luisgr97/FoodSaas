import React from "react";

import axios from "axios";

import api from "../../api_route.js";

// reactstrap components
import {
    Row, Col, Form, FormGroup, Input, Button, Card, CardBody
} from "reactstrap";

class CrerateDigitator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            first_name: "", 
            last_name: "",
            document_id: "",
            phone_number: "",
            address: "", 
            date_of_birth: null, 
            type_user: 11,
            password: "uv2020", 
            is_staff: true,
        }
    }

    handleInput = e => {

        let v = e.target.value;
        // if (e.target.name === "document_id" || e.target.name === "phone_number"){
        //     v = parseInt(v);
        // }

        this.setState({
            [e.target.name]: v
        });
    }
    cleanForm = () => {
        document.getElementById("form").reset();
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post(api.route + "/api/users/create", this.state)
            .then(res => {
                alert("Creado");
            })
            .catch(err => {
                console.log(err);
            })

    }

    render() {
        return (
            <div className="content">
                <Card>
                    <CardBody>
                        <Form id="form" onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <div>
                                    <Row>
                                        <Col>
                                            <Input onChange={this.handleInput} value={this.state.id} type="number" name="document_id" placeholder="Cedula" required />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            {/* <Input onChange={this.handleInput} value={this.state.profile_picture} type="text" name="profile_picture" placeholder="Imagen" required /> */}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Input onChange={this.handleInput} value={this.state.first_name} type="text" name="first_name" placeholder="Nombre" required />
                                        </Col>
                                    </Row>
                                    <Input onChange={this.handleInput} value={this.state.last_name} type="text" name="last_name" placeholder="Apellido" required />

                                    <Row>
                                        <Col>
                                            <Input onChange={this.handleInput} value={this.state.email} type="email" name="email" placeholder="Email" required />
                                        </Col>
                                        <Col>
                                            <Input onChange={this.handleInput} value={this.state.phone_number} type="number" name="phone_number" placeholder="Telefono" required />
                                        </Col>

                                    </Row>

                                    <Input onChange={this.handleInput} value={this.state.address} type="text" name="address" placeholder="Direccion" required />

                                </div>
                            </FormGroup>
                            <Button color="success">
                                Crear
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        )
    }
};

export default CrerateDigitator;