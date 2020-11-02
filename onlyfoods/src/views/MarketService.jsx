import React from "react";

import Stepper from "react-stepper-horizontal";
import kokoriko from "../assets/images/kokoriko.jpg";
import dominos from "../assets/images/dominos.png";
import Shop from "./marketservice/Shop";
import Payment from "./marketservice/Payment";
import EditShop from "./marketservice/EditShoping";
import Cofirmation from "./marketservice/Confirmation";

function MarketServices(props) {
 var active_step = 1
  
  return (
    <div className="container">

      <div className="row text-center">
        <Stepper
          steps={[
            { title: "Selecciona tus productos" },
            { title: "Personaliza tu compra" },
            { title: "Confirma el envio a tu domicilio" },
            { title: "Efectua tu compra" },
          ]}
          activeStep={0}
        />
        <div className="col-12">
          <img
            src={props.subdomain === "kokoriko" ? kokoriko : dominos}
            style={{
              height: "300px",
              width: "400px",
              margin: "auto",
            }}
            alt="sample_photo"
          />
        </div>
      </div>
      {active_step === 0 ? <Shop/> : active_step === 1 ? <EditShop/>: active_step === 2 ? <Cofirmation/> : <Payment/>}
    </div>

  );
}

export default MarketServices;
