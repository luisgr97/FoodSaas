import React, { useState } from "react";
import { Button, ButtonGroup, Input } from "reactstrap";

function Payment(props) {

  var temp = JSON.parse(localStorage.getItem("Car-shop"));
  var total = 0;

  const [rSelected, setRSelected] = useState(null);

  const [info, setInfo] = useState({
    nombre: "",
    numero: "",
    fecha: "",
    cvv: "",
  });

  const handleInfo = e => {
    // console.log(info);
    let obj = info;
    obj[e.target.name] = e.target.value;
    setInfo(obj);
  }

  return (
    <div className="container mt-5">
      <section className="dark-grey-text">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-12">
                <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                  Efectuar Compra
                </h4>
                <hr />
                <div className="tab-content pt-4">
                  <div className="tab-pane active" role="tabpanel">
                    <center>
                      <div className="d-block my-3">
                        <div className="mb-2">
                          <ButtonGroup>
                            <Button
                              color="primary"
                              onClick={() => setRSelected("Tarjeta Credito")}
                              active={rSelected === "Tarjeta Credito"}
                            >
                              Tarjeta Credito
                          </Button>
                            <Button
                              color="primary"
                              onClick={() => setRSelected("Tarjeta Debito")}
                              active={rSelected === "Tarjeta Debito"}
                            >
                              Tarjeta Debito
                          </Button>
                            <Button
                              color="primary"
                              onClick={() => setRSelected("Paypal")}
                              active={rSelected === "Paypal"}
                            >
                              Paypal
                          </Button>
                          </ButtonGroup>
                          <p>
                            <strong>Metodo de Pago:</strong> {rSelected}
                          </p>
                        </div>
                      </div>
                    </center>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label for="cc-name123">Nombre</label>
                        <Input type="text" id="cc-name123" name="nombre" placeholder="Nombre completo escrito en la tarjeta" onChange={handleInfo} required />
                        <br />
                        <div className="invalid-feedback">
                          <br />
                        </div>
                        <label for="cc-number123">Número de la tarjeta</label>
                        <Input type="number" id="cc-name123" name="numero" placeholder="Número completo de la tarjeta" onChange={handleInfo} required />
                        <br />
                        <div className="invalid-feedback">
                          El número es requerido{" "}
                        </div>
                        <label for="cc-expiration123">
                          Fecha de Expiración
                        </label>
                        <Input type="date" id="cc-name123" name="fecha" placeholder="La fecha de expiración de tu tarjeta" onChange={handleInfo} required />
                        <br />
                        <div className="invalid-feedback">
                          Expiración es requerida
                        </div>
                        <label for="cc-cvv123">CVV</label>
                        <Input type="password" id="cc-name123" name="cvv" placeholder="Clave de seguridad de la tarjeta" onChange={handleInfo} required />
                        <br />
                        <div className="invalid-feedback">
                          clave de seguridad requerida.
                        </div>
                      </div>
                      <div className="col-md-5 mb-4 lg-6">
                        <center>
                          <img src="https://d30pf83g3s2iw3.cloudfront.net/wp-content/uploads/2019/11/debit-vs-credit-card-holiday-shopping.gif" alt=""
                            width="100%" />
                        </center>
                      </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="card z-depth-0 border border-light rounded-0">
                      <div className="card-body">
                        <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                          Resumen de la compra
                        </h4>

                        <hr />

                        {
                          temp.map((element, i) => {
                            total += parseInt(element.price) * parseInt(element.amount)
                            return (

                              <dl className="row" key={i}>
                                <dd className="col-sm-8">
                                  {element.product_name}
                                </dd>
                                <dd className="col-sm-4">$ {parseInt(element.price) * parseInt(element.amount)}</dd>
                              </dl>
                            )
                          })
                        }
                        <dl className="row">
                          <dt className="col-sm-8">Total</dt>
                          <dt className="col-sm-4">$ {total}</dt>
                        </dl>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <button class="btn btn-secondary btn-lg btn-block" type="submit" onClick={() => props.setStep(1)}>
                          Atrás
                        </button>
                      </div>
                      <div className="col">
                        <button className="btn btn-primary btn-lg btn-block" onClick={() => props.setStep(3)}>
                          Enviar Pago
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div >
  );
}

export default Payment;
