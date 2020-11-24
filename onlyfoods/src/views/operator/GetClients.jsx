import React from "react";
import CreateClientForm from "views/operator/CreateClientForm.jsx";
// import axios from 'axios';

import counterpart from "counterpart";
import * as Tr from "react-translate-component";
import spanish from "../../langs/spanish.js";
import english from "../../langs/english.js";
import portuguese from "../../langs/portuguese.js";

import api from "../../api_route.js";

import { connect } from "react-redux";

import {
    Card,
    CardBody,
    Row,
    Col, FormGroup, Input, Button, Table,
    Modal, ModalHeader, ModalBody
} from "reactstrap";

counterpart.registerTranslations('en', english);
counterpart.registerTranslations('es', spanish);
counterpart.registerTranslations('po', portuguese);

class GetClients extends React.Component {
    constructor(props) {
        super(props);
        this.state = { //PHONE IS NUMBER
            persons: [],
            search: '',
            modal: false,
            selected: 'All',
            user: {},
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    openToggle = obj => {
        this.setState({
            user: obj,
            modal: true
        });
    }

    closeToggle = () => {
        this.setState({
            modal: false
        });
    }

    editUser = state => {
        // alert('Axios');
        // axios.post("https://energycorp.herokuapp.com/api/user/client/" + state.id + "/update/", state)
        //     .then(res => {
        //         alert("AXION REALIZADA CON EXITO");
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     })
        this.closeToggle();
    }

    async componentDidMount() {
        const res = await fetch(api.route + "/api/users/listclients");
        const data = await res.json();
        // console.log(data)
        this.setState({ persons: data });
    }

    render() {

        // var filteredPeople = [];

        // filteredPeople = this.state.persons.filter(p => (
        //     p.user.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        // ));

        const people = this.state.persons.map((p, k) => (
            <tr key={k}>
                <th scope="row">{k + 1}</th>
                <th>
                    <img src={p.profile_picture} alt="asdasa" />
                </th>
                <th>{p.id}</th>
                <th>{p.first_name}</th>
                <th>{p.last_name}</th>

                <th></th>
                <th>
                    <Button color="success" onClick={() => this.openToggle(p)}>
                        <i className="nc-icon nc-zoom-split" />
                    </Button>
                </th>
            </tr>
        ));

        const placeholderSearch = counterpart.translate('getClients.search');

        return (
            <div className="content">
                <Row>
                    <Col sm="12">
                        <br></br>
                        <Card >
                            <CardBody>
                                <Col>
                                    <Row>
                                        <FormGroup>
                                            <Input onChange={this.handleInput} name="search" placeholder={placeholderSearch}></Input>
                                        </FormGroup>
                                    </Row>
                                    <br></br>
                                    <Table responsive>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Pic</th>
                                                <th>ID</th>
                                                <th>
                                                    <Tr content="clientForm.name" />
                                                </th>
                                                <th>
                                                    Apellido
                                                </th>
                                                <th>Email</th>
                                                <th>
                                                    <Tr content="getClients.review" />
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {people}
                                        </tbody>
                                    </Table>
                                </Col>
                            </CardBody>
                        </Card>
                    </Col>

                    <div>
                        <Modal md="7" isOpen={this.state.modal} toggle={this.closeToggle} className="danger">
                            <ModalHeader toggle={this.closeToggle}>
                                <Tr content="getClients.edit" />
                            </ModalHeader>
                            <ModalBody>
                                <CreateClientForm submitAction={this.editUser} user={this.state.user} editMode={true} />
                            </ModalBody>
                        </Modal>
                    </div>

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

export default connect(mapStateToProps, mapDispatchToProps)(GetClients);