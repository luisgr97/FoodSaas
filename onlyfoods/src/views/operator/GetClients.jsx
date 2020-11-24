import React from "react";
import CreateClientForm from "views/operator/CreateClientForm.jsx";
import axios from 'axios';

import counterpart from "counterpart";
import * as Tr from "react-translate-component";
import spanish from "../../langs/spanish.js";
import english from "../../langs/english.js";
import portuguese from "../../langs/portuguese.js";

import api from "../../api_route.js";

import ReactLoading from 'react-loading';

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
            user: obj,
            modal: true
        });
    }

    closeToggle = () => {
        this.setState({
            modal: false
        });
    }

    getPersons = async () => {
        const res = await fetch(api.route + "/api/users/listclients");
        const data = await res.json();
        // console.log(data)
        this.setState({ persons: data, loading: false });
    }

    editUser = s => {
        // delete s.typeuser;
        console.log(s);
        axios.post(api.route + "/api/users/update/" + s.id, s)
            .then(res => {
                alert("AXION REALIZADA CON EXITO");
                this.setState({ persons: [], loading: true });
                this.getPersons();
            })
            .catch(err => {
                console.log(err);
            })
        this.closeToggle();
    }

    async componentDidMount() {
        this.getPersons();
    }

    render() {

        let filteredPeople = [];

        filteredPeople = this.state.persons.filter(p => (
            p.email.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        ));

        const people = filteredPeople.map((p, k) => (
            <tr key={k}>
                <th scope="row">{k + 1}</th>
                <th>
                    <img src={p.profile_picture} alt="asdasa" />
                </th>
                <th>{p.id}</th>
                <th>{p.first_name}</th>
                <th>{p.last_name}</th>
                <th>{p.email}</th>
                <th>{p.phone_number}</th>
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
                                    {
                                        this.state.loading
                                            ?
                                            <center>
                                                <ReactLoading type="spin" color="green"></ReactLoading>
                                            </center>
                                            :
                                            <Table responsive>
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Pic</th>
                                                        <th>ID</th>
                                                        <th>
                                                            Nombre
                                                    </th>
                                                        <th>
                                                            Apellido
                                                    </th>
                                                        <th>Email</th>
                                                        <th>
                                                            Telefono
                                                    </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {people}
                                                </tbody>
                                            </Table>
                                    }
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