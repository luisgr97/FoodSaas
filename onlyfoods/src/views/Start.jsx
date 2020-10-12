import React
    // ,{ useState, useEffect }
    from "react";

import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
// import ChatBot from "components/chatBot/ChatBot.jsx";

import counterpart from "counterpart";
// import * as Tr from "react-translate-component";
import spanish from "../langs/spanish.js";
import english from "../langs/english.js";
import portuguese from "../langs/portuguese.js";

import api from "../api_route.js";

// import bot_gif from "./bot_gif.gif";

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import {
    Table, Container,
    Card, CardBody,
    CardTitle
} from "reactstrap";

counterpart.registerTranslations('en', english);
counterpart.registerTranslations('es', spanish);
counterpart.registerTranslations('po', portuguese);

counterpart.setLocale('en');

// const NewComp = ({ store_name, setName }) => {

//     const initialState = {
//         name: "test",
//         value: 0
//     }

//     const [values, setValues] = useState(initialState);

//     useEffect(() => {
//         console.log("Working...");
//     })

//     const handler = e => {
//         e.preventDefault();
//         const { name, value } = e.target;
//         setValues({ ...values, [name]: value });
//     }

//     const add1 = () => {
//         setValues({ ...values, value: values.value + 1 })
//     }

//     return (
//         <div>
//             <input type="text" onChange={handler} name="name"></input>
//             <button onClick={add1}>Add 1</button>
//             <button onClick={() => setName(values.name)}>SAVE NAME</button>
//             <h4>{values.name}</h4>
//             <h4>{values.value}</h4>
//             <h4>{store_name}</h4>
//         </div>
//     )
// }

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleChat: false
        }
    }

    openChat = () => {
        this.setState({ visibleChat: true });
    }

    closeChat = () => {
        this.setState({ visibleChat: false });
    }



    render() {
        return (
            <div>
                <DemoNavbar {...this.props} />
                <div className="contentStart">
                    {
                        api.isLocalhost ? (
                            <center>
                                {/* <NewComp {...this.props} /> */}
                                {/* <Tr content="home.title" component="h1" /> */}
                                <h1>
                                    ¡Tu restaurante facil y rapido!
                            </h1>
                                <img width="900" height="530" src="https://www.portugalresident.com/wp-content/uploads/2019/10/junk_food.jpg" alt="description"></img>
                                <br></br>
                                <br></br>
                                <hr />
                                <h3>
                                    Gestión de usuarios, Gestión de clientes y Gestión de productos
                            </h3>
                                <br />
                                <img width="900" height="530" src="https://hospitalduran.com/wp-content/uploads/2019/05/creative-business-people-working-on-business-L2HKPFY-1024x682.jpg" alt="" />
                                <hr />
                                <h1>
                                    Nuestros servicios
                            </h1>
                                <br />
                                <Container>
                                    <Table bordered>
                                        <thead>
                                            <tr>
                                                <th>
                                                    <center>
                                                        {/* <Card>
                                                        <CardBody>
                                                            <CardTitle>
                                                            </CardTitle>
                                                        </CardBody>
                                                    </Card> */}
                                                                Elige un plan y <br></br>
                                                                empieza tu negocio
                                                </center>
                                                </th>
                                                <th>
                                                    <center>
                                                        <Card>
                                                            <CardBody>
                                                                <CardTitle>
                                                                    Plan Basico
                                                                <br />
                                                                    <b style={{ color: "gray" }}>$300.000 al mes</b>
                                                                    <br />
                                                                </CardTitle>
                                                            </CardBody>
                                                        </Card>
                                                    </center>
                                                </th>
                                                <th>
                                                    <center>
                                                        <Card>
                                                            <CardBody>
                                                                <CardTitle>
                                                                    Plan Normal
                                                                <br />
                                                                    <b style={{ color: "gray" }}>$500.000 al mes</b>
                                                                    <br />
                                                                </CardTitle>
                                                            </CardBody>
                                                        </Card>
                                                    </center>
                                                </th>
                                                <th>
                                                    <center>
                                                        <Card>
                                                            <CardBody>
                                                                <CardTitle>
                                                                    Plan PREMIUM
                                                                <br />
                                                                    <b style={{ color: "gray" }}>$700.000 al mes</b>
                                                                    <br />
                                                                </CardTitle>
                                                            </CardBody>
                                                        </Card>
                                                    </center>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{ textAlign: "left" }}>Gestion de clientes</td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                            </tr>
                                            <tr>
                                                <td style={{ textAlign: "left" }}>Gestion de productos</td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                            </tr>
                                            <tr>
                                                <td style={{ textAlign: "left" }}>Gestion de pagos</td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                            </tr>
                                            <tr>
                                                <td style={{ textAlign: "left" }}>Reportes graficos</td>
                                                <td><span role="img" aria-label=".">❌</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                            </tr>
                                            <tr>
                                                <td style={{ textAlign: "left" }}>Reportes de ventas</td>
                                                <td><span role="img" aria-label=".">❌</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                            </tr>
                                            <tr>
                                                <td style={{ textAlign: "left" }}>Actualizar datos de los menús de comidas desde un archivo en excel.</td>
                                                <td><span role="img" aria-label=".">❌</span></td>
                                                <td><span role="img" aria-label=".">❌</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                            </tr>
                                            <tr>
                                                <td style={{ textAlign: "left" }}>Generar Mapas de ubicación de clientes</td>
                                                <td><span role="img" aria-label=".">❌</span></td>
                                                <td><span role="img" aria-label=".">❌</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                            </tr>
                                            <tr>
                                                <td style={{ textAlign: "left" }}>Personalizacion</td>
                                                <td><span role="img" aria-label=".">❌</span></td>
                                                <td><span role="img" aria-label=".">❌</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                            </tr>
                                            <tr>
                                                <td style={{ textAlign: "left" }}>PWA</td>
                                                <td><span role="img" aria-label=".">❌</span></td>
                                                <td><span role="img" aria-label=".">❌</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                            </tr>
                                            <tr>
                                                <td style={{ textAlign: "left" }}>Bot</td>
                                                <td><span role="img" aria-label=".">❌</span></td>
                                                <td><span role="img" aria-label=".">❌</span></td>
                                                <td><span role="img" aria-label=".">✅</span></td>
                                            </tr>
                                            <tr>
                                                <td></td>
                                                <td>
                                                    <span className="btn btn-success">
                                                        <Link to="/buy_plan/basico" style={{ "color": "white" }}>Comprar</Link>
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="btn btn-success">
                                                        <Link to="/buy_plan/normal" style={{ "color": "white" }}>Comprar</Link>
                                                    </span>                                        </td>
                                                <td>
                                                    <span className="btn btn-success">
                                                        <Link to="/buy_plan/premium" style={{ "color": "white" }}>Comprar</Link>
                                                    </span>                                        </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Container>
                            </center>
                        ) : (
                                <center>
                                    <h1>
                                        Bienvenido a {api.subdomain}
                                    </h1>
                                    <img width="900" height="530" src="https://crepesywaffles.com/sites/default/files/2020-05/03.png" alt="" />
                                </center>
                            )
                    }

                </div>
                {/* {
                    this.state.visibleChat
                        ? <ChatBot close={this.closeChat} />
                        : <img onClick={this.openChat} className="floatingBot animated wobble" src={bot_gif} width="95px" height="120px" alt="description"></img>
                    } */}
                {/* 
                <center>
                    <br />
                    <Link className="btn btn-danger" to="/getBill">
                        <Tr content="home.download" component="div" />
                    </Link>
                </center> */}
            </div >
        )
    }
}

const mapStateToProps = state => {
    counterpart.setLocale(state.language);
    return { lng: state.language, store_name: state.name }
}


// function mapDispatchToProps(dispatch) {
//     return {
//       addArticle: (article) => dispatch(addArticle(article)),        
//     };
//   }

const mapDispatchToProps = dispatch => ({
    // setName: name => dispatch(setName(name))
    setName(name) {
        dispatch({
            type: "CHANGE_NAME",
            name: name
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Start);