import React, { useState } from "react";
import { Button, ButtonGroup, Input } from "reactstrap";

function Payment(props) {
  const [rSelected, setRSelected] = useState(null);

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
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label for="cc-name123">Nambre de la Tarjeta</label>
                        <Input type="text" id="cc-name123" required />
                        <small>Nombre completo escrito en la tarjeta.</small>
                        <div className="invalid-feedback">
                          El nombre de la tarjeta es un capo requerido{" "}
                        </div>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label for="cc-number123">Número de la tarjeta</label>
                        <Input type="text" id="cc-name123" required />
                        <small>Número completo de la tarjeta</small>
                        <div className="invalid-feedback">
                          El número es requerido{" "}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 mb-3">
                        <label for="cc-expiration123">
                          Fecha de Expiración
                        </label>
                        <Input type="text" id="cc-name123" required />
                        <small>La fecha de expiración de tu tarjeta</small>
                        <div className="invalid-feedback">
                          Expiración es requerida
                        </div>
                      </div>
                      <div className="col-md-3 mb-3">
                        <label for="cc-cvv123">CVV</label>
                        <Input type="password" id="cc-name123" required />
                        <small>Clave de seguridad de la tarjeta</small>
                        <div className="invalid-feedback">
                          clave de seguridad requerida.
                        </div>
                      </div>
                    </div>
                    <hr className="mb-4" />
                    <div className="card z-depth-0 border border-light rounded-0">
                      <div className="card-body">
                        <h4 className="mb-4 mt-1 h5 text-center font-weight-bold">
                          Resumen de la compra
                        </h4>

                        <hr />

                        <dl className="row">
                          <dd className="col-sm-8">
                            MDBootstrap UI KIT (jQuery version) - License 6-10
                            poeple + unlimited projects
                          </dd>
                          <dd className="col-sm-4">$ 2000</dd>
                        </dl>

                        <hr />

                        <dl className="row">
                          <dd className="col-sm-8">
                            Premium support - 2 years
                          </dd>
                          <dd className="col-sm-4">$ 2000</dd>
                        </dl>

                        <hr />

                        <dl className="row">
                          <dd className="col-sm-8">MDB Membership - 2 years</dd>
                          <dd className="col-sm-4">$ 2000</dd>
                        </dl>

                        <hr />

                        <dl className="row">
                          <dt className="col-sm-8">Total</dt>
                          <dt className="col-sm-4">$ 2000</dt>
                        </dl>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-lg btn-block">
                      Enviar Pago
                    </button>
                    <div class="row">
                      <div class="col">
                        <button class="btn btn-secondary btn-lg btn-block" type="submit" onClick={() => props.setStep(1)}>
                          Atrás
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
    </div>
  );
}

export default Payment;
