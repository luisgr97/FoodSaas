import React from "react"; // ,{ useState, useEffect }

import DemoNavbar from "components/Navbars/DemoNavbar.jsx";
import Sectionone from "../components/Landingpage/Sectionone";
import Sectiontwo from "components/Landingpage/Sectiontwo";
import Sectionthree from "components/Landingpage/Sectionthree";
import Sectionfour from "components/Landingpage/Sectionfour";
import Sectionfive from "components/Landingpage/Sectionfive";


// import ChatBot from "components/chatBot/ChatBot.jsx";

import counterpart from "counterpart";
// import * as Tr from "react-translate-component";
import spanish from "../langs/spanish.js";
import english from "../langs/english.js";
import portuguese from "../langs/portuguese.js";

import api from "../api_route.js";
import logo from "../assets/images/logo.png";

// import bot_gif from "./bot_gif.gif";

import { connect } from "react-redux";

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
              <h1>¡Gestiona tu restaurante facil y rapido!</h1>
              <img
                width="900"
                height="530"
                src={logo}
                alt="description"
                style={{
                  height: "250px",
                }}
              ></img>
              <div class="container mt-5"></div>
              <Sectionone />
              <hr />
              <h1>Nuestros servicios</h1>
              <Sectiontwo />
              <br />
              <Sectionthree />
              <br />
              <hr />
              <h1>Preguntas Frecuentes</h1>
              <Sectionfour />
              <hr />
              <Sectionfive/>
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
