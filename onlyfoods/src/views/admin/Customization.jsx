import React from "react";

import { connect } from "react-redux";

import {
    Card,
    CardBody,
    Row,
    Col, Button
} from "reactstrap";


class Customization extends React.Component {
    constructor(props) {
        super(props);
        this.state = { //PHONE IS NUMBER
            color: ""
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div className="content">
                <Row>
                    <Col sm="12">
                        <br></br>
                        <h4>Color del panel</h4>
                        <center>
                            <Card >
                                <CardBody>
                                    <Button style={{ backgroundColor: "#000f6c" }} onClick={() => this.props.changeColor('blue')}>AZUL</Button>
                                    <Button style={{ backgroundColor: "#ff0000" }} onClick={() => this.props.changeColor('red')}>ROJO</Button>
                                    <Button style={{ backgroundColor: "#006c11" }} onClick={() => this.props.changeColor('green')}>VERDE</Button>
                                    <Button style={{ backgroundColor: "#7a7e00" }} onClick={() => this.props.changeColor('yellow')}>AMARILLO</Button>
                                    <Button style={{ backgroundColor: "#000" }} onClick={() => this.props.changeColor('black')}>NEGRO</Button>
                                </CardBody>
                            </Card>
                        </center>
                    </Col>
                </Row>
            </div>
        )
    }
};

const mapStateToProps = state => {
    return { color: state.color }
}

const mapDispatchToProps = dispatch => ({
    changeColor(col) {
        dispatch({
            type: "CHANGE_COLOR",
            color: col
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Customization);

