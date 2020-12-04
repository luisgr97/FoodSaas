import React, { useState } from "react";

//Componente para ilustrar el cambio de opción.
import Stepper from "react-stepper-horizontal";

//Componentes locales.
import Shop from "./marketservice/Shop";
import Payment from "./marketservice/Payment";
import EditShop from "./marketservice/EditShoping";
import Cofirmation from "./marketservice/Confirmation";

//Imagenes de los clientes.
import kokoriko from "../assets/images/kokoriko.jpg";
import dominos from "../assets/images/dominos.png";
import qbano from "../assets/images/qbano.png";


//peticiones http.
import Axios from "axios";

//Componente Para la venta de productos.
function MarketServices(props) {
  //Propiedades.
  const { subdomain } = props;
  //Estado.
  const [active_step] = useState(0);
  const [products, setProducts] = useState(null);
  //libreria para peticiones http
  var shop = [];
  localStorage.setItem("Car-shop", JSON.stringify(shop));




  //instancia mentodos.
  const getData = async () => {
    if (!products) {
      await Axios.get(
        "http://" + subdomain + ".localhost:8000/api/products/list"
      )
        .then((res) => {
          if (res.status === 200) {
            setProducts(res.data);
          } else {
            console.log("code: " + res.status + ", message: " + res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  //invoca el metodo.
  getData();
  //renderiza el componente.

  return (
    <div className="container">
      <div className="row text-center">
        <div className="col-12">
          <img
            src={subdomain === "kokoriko" ? kokoriko :
              subdomain === "dominos" ? dominos : qbano}
            style={{
              height: "300px",
              width: "400px",
              margin: "auto",
            }}
            alt="sample_photo"
          />
        </div>
        <Stepper
          steps={[
            { title: "Selecciona tus productos" },
            { title: "Personaliza tu compra" },
            { title: "Confirma el envio a tu domicilio" },
            { title: "Efectua tu compra" },
          ]}
          activeStep={active_step}
        />
      </div>
      {active_step === 0 ? (
        <Shop products={products} />
      ) : active_step === 1 ? (
        <EditShop />
      ) : active_step === 2 ? (
        <Cofirmation />
      ) : (
              <Payment />
            )}
    </div>
  );
}

export default MarketServices;
