import React from "react"; // ,{ useState, useEffect }

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

import { Table, Container, Card, CardBody, CardTitle } from "reactstrap";

counterpart.registerTranslations("en", english);
counterpart.registerTranslations("es", spanish);
counterpart.registerTranslations("po", portuguese);

counterpart.setLocale("en");

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
      visibleChat: false,
    };
  }

  openChat = () => {
    this.setState({ visibleChat: true });
  };

  closeChat = () => {
    this.setState({ visibleChat: false });
  };

  render() {
    return (
      <div>
        <DemoNavbar {...this.props} />
        <div className="contentStart">
          {api.isLocalhost ? (
            <center>
              {/* <NewComp {...this.props} /> */}
              {/* <Tr content="home.title" component="h1" /> */}
              <h1>¡Tu restaurante facil y rapido!</h1>
              <img
                width="900"
                height="530"
                src="https://www.portugalresident.com/wp-content/uploads/2019/10/junk_food.jpg"
                alt="description"
              ></img>
              <br></br>
              <br></br>
              <hr />
              <h3>
                Gestión de usuarios, Gestión de clientes y Gestión de productos
              </h3>
              <br />
              <img
                width="900"
                height="530"
                src="https://hospitalduran.com/wp-content/uploads/2019/05/creative-business-people-working-on-business-L2HKPFY-1024x682.jpg"
                alt=""
              />
              <hr />
              <h1>Nuestros servicios</h1>
              <div class="container mt-5">
                <section class="dark-grey-text text-center">
                  <p class="text-center mx-auto w-responsive mb-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Fugit, error amet numquam iure provident voluptate esse
                    quasi, veritatis totam voluptas nostrum quisquam eum porro a
                    pariatur veniam.
                  </p>
                  <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4">
                      <div class="view overlay rounded z-depth-2 mb-4">
                        <img
                          class="img-fluid"
                          src="https://img-sharesprites.flaticon.com/pack/0/235/235167-reports-and-analytics.jpg"
                          alt="Sample image"
                        />
                        <a>
                          <div class="mask rgba-white-slight"></div>
                        </a>
                      </div>

                      <a href="#!" class="pink-text">
                        <h6 class="font-weight-bold mb-3">
                          <i class="fas fa-map pr-2"></i>Adventure
                        </h6>
                      </a>
                      <h4 class="font-weight-bold mb-3">
                        <strong>Title of the news</strong>
                      </h4>
                      <p>
                        by <a class="font-weight-bold">Billy Forester</a>,
                        15/07/2018
                      </p>
                      <p class="dark-grey-text">
                        Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat
                        facere possimus voluptas.
                      </p>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4">
                      <div class="view overlay rounded z-depth-2 mb-4">
                        <img
                          class="img-fluid"
                          src="https://image.flaticon.com/icons/png/512/395/395529.png"
                          alt="Sample image"
                        />
                        <a>
                          <div class="mask rgba-white-slight"></div>
                        </a>
                      </div>

                      <a href="#!" class="deep-orange-text">
                        <h6 class="font-weight-bold mb-3">
                          <i class="fas fa-graduation-cap pr-2"></i>Gestión de
                          Menus
                        </h6>
                      </a>
                      <h4 class="font-weight-bold mb-3">
                        <strong>Title of the news</strong>
                      </h4>
                      <p>
                        by <a class="font-weight-bold">Billy Forester</a>,
                        13/07/2018
                      </p>
                      <p class="dark-grey-text">
                        At vero eos et accusamus et iusto odio dignissimos
                        ducimus qui blanditiis voluptatum deleniti atque
                        corrupti quos dolores.
                      </p>
                    </div>

                    <div class="col-lg-4 col-md-6 mb-4">
                      <div class="view overlay rounded z-depth-2 mb-4">
                        <img
                          class="img-fluid"
                          src="https://icons-for-free.com/iconfiles/png/512/ecommerce+marketing+online+shopping+sale+shopping+icon-1320165954013206270.png"
                          alt="Sample image"
                        />
                        <a>
                          <div class="mask rgba-white-slight"></div>
                        </a>
                      </div>

                      <a href="#!" class="blue-text">
                        <h6 class="font-weight-bold mb-3">
                          <i class="fas fa-fire pr-2"></i>Culture
                        </h6>
                      </a>
                      <h4 class="font-weight-bold mb-3">
                        <strong>Title of the news</strong>
                      </h4>
                      <p>
                        by <a class="font-weight-bold">Billy Forester</a>,
                        11/07/2018
                      </p>
                      <p class="dark-grey-text">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione.
                      </p>
                    </div>
                  </div>
                </section>
              </div>

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
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>
                        Gestion de productos
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>Gestion de pagos</td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>Reportes graficos</td>
                      <td>
                        <span role="img" aria-label=".">
                          ❌
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>Reportes de ventas</td>
                      <td>
                        <span role="img" aria-label=".">
                          ❌
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>
                        Actualizar datos de los menús de comidas desde un
                        archivo en excel.
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ❌
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ❌
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>
                        Generar Mapas de ubicación de clientes
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ❌
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ❌
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>Personalizacion</td>
                      <td>
                        <span role="img" aria-label=".">
                          ❌
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ❌
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>PWA</td>
                      <td>
                        <span role="img" aria-label=".">
                          ❌
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ❌
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td style={{ textAlign: "left" }}>Bot</td>
                      <td>
                        <span role="img" aria-label=".">
                          ❌
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ❌
                        </span>
                      </td>
                      <td>
                        <span role="img" aria-label=".">
                          ✅
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                      <td>
                        <span className="btn btn-success">
                          <Link
                            to="/buy_plan/basico"
                            style={{ color: "white" }}
                          >
                            Comprar
                          </Link>
                        </span>
                      </td>
                      <td>
                        <span className="btn btn-success">
                          <Link
                            to="/buy_plan/normal"
                            style={{ color: "white" }}
                          >
                            Comprar
                          </Link>
                        </span>{" "}
                      </td>
                      <td>
                        <span className="btn btn-success">
                          <Link
                            to="/buy_plan/premium"
                            style={{ color: "white" }}
                          >
                            Comprar
                          </Link>
                        </span>{" "}
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
              <div class="container my-5">
                <section>
                  <h6 class="font-weight-normal text-uppercase font-small grey-text mb-4 text-center">
                    FAQ
                  </h6>
                  <h3 class="font-weight-bold black-text mb-4 pb-2 text-center">
                    Frequently Asked Questions
                  </h3>
                  <hr class="w-header" />
                  <p class="lead text-muted mx-auto mt-4 pt-2 mb-5 text-center">
                    Got a question? We've got answers. If you have some other
                    questions, see our support center.
                  </p>

                  <div class="row">
                    <div class="col-md-6 col-lg-4 mb-4">
                      <h5 class="font-weight-normal mb-3">
                        Is this a secure site for purchases?
                      </h5>
                      <p class="text-muted">
                        Absolutely! We work with top payment companies which
                        guarantees your safety and security. All billing
                        information is stored on our payment processing partner
                        which has the most stringent level of certification
                        available in the payments industry.
                      </p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                      <h5 class="font-weight-normal mb-3">
                        Can I cancel my subscription?
                      </h5>
                      <p class="text-muted">
                        You can cancel your subscription anytime in your
                        account. Once the subscription is cancelled, you will
                        not be charged next month. You will continue to have
                        access to your account until your current subscription
                        expires.
                      </p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                      <h5 class="font-weight-normal mb-3">
                        How long are your contracts?
                      </h5>
                      <p class="text-muted">
                        Currently, we only offer monthly subscription. You can
                        upgrade or cancel your monthly account at any time with
                        no further obligation.
                      </p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                      <h5 class="font-weight-normal mb-3">
                        Can I update my card details?
                      </h5>
                      <p class="text-muted">
                        Yes. Go to the billing section of your dashboard and
                        update your payment information.
                      </p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                      <h5 class="font-weight-normal mb-3">
                        Can I request refund?
                      </h5>
                      <p class="text-muted">
                        Unfortunately, not. We do not issue full or partial
                        refunds for any reason.
                      </p>
                    </div>

                    <div class="col-md-6 col-lg-4 mb-4">
                      <h5 class="font-weight-normal mb-3">
                        Can I try your service for free?
                      </h5>
                      <p class="text-muted">
                        Of course! We’re happy to offer a free plan to anyone
                        who wants to try our service.
                      </p>
                    </div>
                  </div>
                </section>

                <div class="container z-depth-1 my-5">
                  <section class="py-5">
                    <h1 class="font-weight-bold text-center indigo-text mb-5">
                      Nuestros Clientes
                    </h1>
                    <div class="row">
                      <div class="col-d-6 col-lg-5 offset-lg-1">
                        <div class="view">
                          <img class="img-fluid mx-auto" src="https://urbancomunicacion.com/wp-content/uploads/2018/05/Curiosa-historia-del-logo-de-Dominos-Pizza.png" />
                        </div>
                      </div>
                      <div class="col-md-6 col-lg-5">
                        <div class="view">
                          <img
                            class="img-fluid mx-auto"
                            src="https://i.pinimg.com/originals/52/31/8a/52318aaae6dfa67be0995a25f69014b3.jpg"
                            alt="Sample image"
                          />
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </center>
          ) : (
            <center>
              <h1>Bienvenido a {api.subdomain}</h1>
              <img
                width="900"
                height="530"
                src="https://crepesywaffles.com/sites/default/files/2020-05/03.png"
                alt=""
              />
            </center>
          )}
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  counterpart.setLocale(state.language);
  return { lng: state.language, store_name: state.name };
};

// function mapDispatchToProps(dispatch) {
//     return {
//       addArticle: (article) => dispatch(addArticle(article)),
//     };
//   }

const mapDispatchToProps = (dispatch) => ({
  // setName: name => dispatch(setName(name))
  setName(name) {
    dispatch({
      type: "CHANGE_NAME",
      name: name,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Start);
