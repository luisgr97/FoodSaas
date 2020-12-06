import React, { useEffect } from "react";
// import { Button, ButtonGroup, Input } from "reactstrap";
// import axios from "axios";

function Payment(props) {
  // const [rSelected, setRSelected] = useState(null);

  var temp = JSON.parse(localStorage.getItem("Car-shop"));
  var total = 0;

  useEffect(() => {
    // axios.post("")
  })

  return (
    <div className="container mt-5">
      <section className="dark-grey-text">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-8">
                <div
                  class="tab-pane active"
                  id="tabCheckoutAddons123"
                  role="tabpanel"
                >
                  <hr />
                  <div
                    class="tab-pane fade in show active"
                    id="tabCheckoutBilling123"
                    role="tabpanel"
                  >
                    <form>
                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <label for="firstName" class="">
                            First name
                </label>
                          <input type="text" id="firstName" class="form-control" />
                        </div>

                        <div class="col-md-6 mb-2">
                          <label for="lastName" class="">
                            Last name
                </label>
                          <input type="text" id="lastName" class="form-control" />
                        </div>
                      </div>

                      <div class="input-group mb-4">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="basic-addon1">
                            @
                </span>
                        </div>
                        <input
                          type="text"
                          class="form-control py-0"
                          placeholder="Username"
                          aria-describedby="basic-addon1"
                        />
                      </div>

                      <label for="email" class="">
                        Email (optional)
            </label>
                      <input
                        type="text"
                        id="email"
                        class="form-control mb-4"
                        placeholder="youremail@example.com"
                      />

                      <label for="address" class="">
                        Address
            </label>
                      <input
                        type="text"
                        id="address"
                        class="form-control mb-4"
                        placeholder="1234 Main St"
                      />

                      <label for="address-2" class="">
                        Address 2 (optional)
            </label>
                      <input
                        type="text"
                        id="address-2"
                        class="form-control mb-4"
                        placeholder="Apartment or suite"
                      />
                      <hr />

                      <div class="mb-1">
                        <input
                          type="checkbox"
                          class="form-check-input filled-in"
                          id="chekboxRules"
                        />
                        <label class="form-check-label" for="chekboxRules">
                          I accept the terms and conditions
              </label>
                      </div>
                    </form>
                  </div>
                  <hr class="mb-4" />
                </div>
              </div>

              <div className="col-lg-4 mb-4">
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
                <div>
                  <div class="row">
                    <div class="col">
                      <button class="btn btn-secondary btn-lg btn-block" type="submit" onClick={() => props.setStep(0)}>
                        Atrás
                        </button>
                    </div>

                    <div class="col">
                      <button class="btn btn-primary btn-lg btn-block" type="submit" onClick={() => props.setStep(2)}>
                        Seguir
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
      </section>
    </div>
  );
}

export default Payment;
