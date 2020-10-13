import React from "react";
// import CreateUserForm from "views/admin/CreateUserForm.jsx";

import counterpart from "counterpart";
import * as Tr from "react-translate-component";
import spanish from "../../langs/spanish.js";
import english from "../../langs/english.js";
import portuguese from "../../langs/portuguese.js";

// reactstrap components
import {
    Card,
    CardBody,
    Row,
    Col, Button,
    Form, FormGroup, Label, Input
} from "reactstrap";

// import Axios from "axios";

import { connect } from "react-redux";

counterpart.registerTranslations('en', english);
counterpart.registerTranslations('es', spanish);
counterpart.registerTranslations('po', portuguese);

class CreateDigitator extends React.Component {
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
            typeuser: null,
            password: "",
            is_staff: false
        }
    }


    render() {
        return (
            <div className="content">
                <Row>
                    <Col md="6" >
                        <Card>
                            <CardBody>
                                <Form id="form" onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <div>
                                            <Row>
                                                <Col>
                                                    <Label for="">Email</Label>
                                                    <Input onChange={this.handleInput} value={this.state.email} type="email" name="email" required />
                                                </Col>
                                            </Row>

                                            <Row>
                                                <Col>
                                                    <Label for="">
                                                        Nombres
                                                    </Label>
                                                    <Input onChange={this.handleInput} value={this.state.name} type="text" name="first_name" required />
                                                </Col>
                                                <Col>
                                                    <Label for="">
                                                        Apellidos
                                                    </Label>
                                                    <Input onChange={this.handleInput} value={this.state.name} type="text" name="last_name" required />
                                                </Col>
                                            </Row>
                                            <Label for="">Documento</Label>
                                            <Input onChange={this.handleInput} value={this.state.document_id} type="int" name="document_id" required />
                                            <Label for="">Telefono</Label>
                                            <Input onChange={this.handleInput} value={this.state.phone_number} type="int" name="phone_number" required />

                                            <Row>
                                                <Col>
                                                    <Label for="">
                                                        Direccion
                                                    </Label>
                                                    <Input onChange={this.handleInput} value={this.state.address} type="text" name="address" required />
                                                </Col>
                                                <Col>
                                                    <Label for="">
                                                        Fecha de Naciemiento
                                                    </Label>
                                                    <Input onChange={this.handleInput} value={this.state.date_of_birth} type="date" name="date_of_birth" required />
                                                </Col>
                                            </Row>
                                        </div>
                                    </FormGroup>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Card>
                            <CardBody>
                            </CardBody>
                        </Card>
                        <center>
                            <Button color="success">
                                <Tr content="createClient.create" />
                            </Button>
                        </center>

                    </Col>
                </Row>
            </div>
        )
    }
};

const mapStateToProps = state => {
    counterpart.setLocale(state.language);
    return { lng: state.language }
}

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDigitator);