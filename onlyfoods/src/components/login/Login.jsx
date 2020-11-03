import React from "react";

import logo from "logo.png";
import kokoriko from "../../assets/images/kokoriko.jpg";
import dominos from "../../assets/images/dominos.png";

import auth from "components/auth/auth.js";
import ReCAPTCHA from "react-google-recaptcha";
import axios from 'axios';
import api from "../../api_route.js";
import { Link } from "react-router-dom";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    Col, Form, FormGroup, Label, Input, Button, Alert
} from "reactstrap";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disabledLoginBtn: true,
            email: '',
            password: '',
            doAnime: false,
            errorLogin: false,
            messageError: "",
        };
    }

    onChange = params => {
        this.setState({
            disabledLoginBtn: false
        });
    };

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    signin = e => {
        e.preventDefault();

        const delay = 800;

        let data = {
            email: this.state.email,
            password: this.state.password,
            schema: api.subdomain
        };

        // let given; 
        // let obj;

        // dummy
        // obj = {
        //     "token": "asdasdsa",
        //     "user_id": "awqweqweqw",
        //     "user_type": 1,
        //     "user_type_name": "admin",
        //     "id": 100
        // };

        // auth.login(obj, rou => {
        //     this.setState({ doAnime: true });
        //     window.setTimeout(() => {
        //         this.props.history.push("/" + rou)
        //     }, delay);
        // });

        axios.post(api.route + "/api/logs/in", data)
            .then(res => {
                let given = res.data.data;
                console.log(res.data);

                let user_type_name;

                switch (given.user_data.typeuser) {
                    case 10:
                        user_type_name = "admin"; //admin ********
                        break;
                    case 11:
                        user_type_name = "operator" //digitador ********
                        break;
                    case 12:
                        user_type_name = "manager"; //cliente ********
                        break
                    default:
                        break;
                }

                let obj = {
                    "token": given.token,
                    "user_id": given.user_data.document_id,
                    "user_type": given.user_data.typeuser,
                    "user_type_name": user_type_name,
                    "id": given.user_data.id
                };

                auth.login(obj, rou => {
                    this.setState({ doAnime: true });
                    window.setTimeout(() => {
                        this.props.history.push("/" + rou)
                    }, delay);
                });
            })
            .catch(err => {
                console.log(err);
                this.setState({ errorLogin: true, messageError: "Error en los parametros" });
                window.setTimeout(() => {
                    this.setState({ errorLogin: false });
                }, 2000);
            })
    }

    render() {

        const alert = (this.state.errorLogin) ? <Alert className="animated rubberBand" color="danger">
            <center>
                <h6>{this.state.messageError}</h6>
            </center>
        </Alert> : true;

        return (
            <div>
                <Col md="4" id="login">
                    {alert}
                    <Card id="cardLogin" className={this.state.doAnime ? "animated zoomOutUp" : " "}>
                        <CardHeader>
                            <center>
                                <img src={api.subdomain === "kokoriko" ? kokoriko : api.subdomain === "dominos" ? dominos : logo}
                                    width="180px" height="130px" alt="description"></img>
                                <CardTitle tag="h5">Login</CardTitle>
                            </center>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={this.signin} id="loginForm">
                                <FormGroup>
                                    <Label for="exampleEmail">email</Label>
                                    <Input onChange={this.handleInput} type="email" name="email" id="exampleEmail" placeholder="Login" requiered />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="examplePassword">Password</Label>
                                    <Input onChange={this.handleInput} type="password" name="password" id="examplePassword" placeholder="Password" required />
                                </FormGroup>

                                <center>
                                    <ReCAPTCHA
                                        sitekey="6LfP99wUAAAAAPHZbEWQ8x6fXjgBkasCd4ztoqL8"
                                        onChange={this.onChange}
                                    />
                                </center>

                                <center>
                                    <Button color="success" type="submit" disabled={this.state.disabledLoginBtn}>SIGN IN</Button>
                                    <br />
                                    <Link to="/">Home</Link>
                                </center>
                            </Form>
                        </CardBody>
                        <CardFooter>
                        </CardFooter>
                    </Card>
                </Col>
            </div>
        )
    }
}

export default Login;