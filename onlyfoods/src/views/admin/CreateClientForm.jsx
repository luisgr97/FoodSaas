import React from "react";

import counterpart from "counterpart";
// import * as Tr from "react-translate-component";
import spanish from "../../langs/spanish.js";
import english from "../../langs/english.js";
import portuguese from "../../langs/portuguese.js";

// import auth from "components/auth/auth.js";

import { connect } from "react-redux";

// reactstrap components
import {
    Row, Col, Form, FormGroup, Label, Input, Button
} from "reactstrap";

counterpart.registerTranslations('en', english);
counterpart.registerTranslations('es', spanish);
counterpart.registerTranslations('po', portuguese);

class CreateClientForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.user || {
            id: "",
            nombre: "",
            apellido: "",
            email: "",
            telefono: ""
        }
    }

    handleInput = e => {

        this.setState({
            [e.target.name]: e.target.value
        });
    }
    cleanForm = () => {
        document.getElementById("form").reset();
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.submitAction(this.state);
        this.cleanForm();

    }

    render() {

        // const showStateAttr = this.props.editMode ? <div>
        //     <Label for="">
        //         <Tr content="clientForm.state" />
        //     </Label>
        //     <select onChange={this.handleInput} value={this.state.user.is_active} className="form-control" name="is_active" required>
        //         <Tr content="clientForm.active" component="option"/>
        //         <Tr content="clientForm.inactive" component="option"/>
        //     </select>
        // </div> : true

        // const placeholderRate = counterpart.translate('clientForm.rate');
        // const placeholderName = counterpart.translate('clientForm.name');
        // const placeholderAddress = counterpart.translate('clientForm.address');
        // const placeholderNeighborhood = counterpart.translate('clientForm.neighborhood');
        // const placeholderPhone = counterpart.translate('clientForm.phone');

        return (
            <Form id="form" onSubmit={this.handleSubmit}>
                <FormGroup>
                    <div>
                        <Row>
                            <Col>
                                <Label for="">ID</Label>
                                <Input onChange={this.handleInput} value={this.state.id} type="number" name="id_user" placeholder="ID" required readOnly />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label for="">Imagen</Label>
                                <Input onChange={this.handleInput} value={this.state.profile_picture} type="text" name="profile_picture" placeholder="Imagen" required />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label for="">
                                    Nombre
                                </Label>
                                <Input onChange={this.handleInput} value={this.state.first_name} type="text" name="first_name" placeholder="Nombre" required />
                            </Col>
                        </Row>
                        <Label for="">Apellido</Label>
                        <Input onChange={this.handleInput} value={this.state.last_name} type="text" name="last_name" placeholder="Apellido" required />

                        <Row>
                            <Col>
                                <Label for="">
                                    Email
                                </Label>
                                <Input onChange={this.handleInput} value={this.state.email} type="email" name="email" placeholder="Email" required />
                            </Col>
                            <Col>
                                <Label for="">
                                    telefono
                                </Label>
                                <Input onChange={this.handleInput} value={this.state.phone_number} type="text" name="phone_number" placeholder="Telefono" required />
                            </Col>

                        </Row>
                        {/* 
                        <Label for="">
                            <Tr content="clientForm.phone"/>
                        </Label>
                        <Input onChange={this.handleInput} value={this.state.user.phone} type="number" name="phone" placeholder={placeholderPhone} required />
                        {showStateAttr}
                        {aditional} */}
                    </div>
                </FormGroup>
                <Button color="success">
                    Editar
                </Button>
            </Form>
        )
    }
};

const mapStateToProps = state => {
    counterpart.setLocale(state.language);
    return { lng: state.language }
}

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(CreateClientForm);