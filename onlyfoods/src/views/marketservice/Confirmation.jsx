import React, { useEffect, useState } from "react";
import { Input } from "reactstrap";
// import axios from "axios";

function Payment(props) {

  var temp = JSON.parse(localStorage.getItem("Car-shop"));
  var total = 0;

  // const [rSelected, setRSelected] = useState(null);
  const [check, setCheck] = useState(false);
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: ""
  });

  const setCheckHandler = () => {
    setCheck(!check);
  }

  const handleInfo = e => {
    // console.log(info);
    // console.log(check);
    let obj = info;
    obj[e.target.name] = e.target.value;
    setInfo(obj);
  }


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
                  className="tab-pane active"
                  id="tabCheckoutAddons123"
                  role="tabpanel"
                >
                  <hr />
                  <div
                    className="tab-pane fade in show active"
                    id="tabCheckoutBilling123"
                    role="tabpanel"
                  >
                    <form>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label for="firstName" className="">
                            Nombres
                </label>
                          <input type="text" name="firstName" className="form-control" onChange={handleInfo} />
                        </div>

                        <div className="col-md-6 mb-2">
                          <label for="lastName" className="">
                            Apellidos
                </label>
                          <input type="text" name="lastName" className="form-control" onChange={handleInfo} />
                        </div>
                      </div>
                      <label for="email" className="">
                        Email
            </label>
                      <input
                        type="text"
                        name="email"
                        className="form-control mb-4"
                        onChange={handleInfo}
                      />

                      <label for="address" className="">
                        Dirección
            </label>
                      <input
                        type="text"
                        name="address"
                        className="form-control mb-4"
                        onChange={handleInfo}
                      />

                      <label for="address-2" className="">
                        Celular
            </label>
                      <input
                        type="number"
                        name="phone"
                        className="form-control mb-4"
                        onChange={handleInfo}
                      />
                      <hr />
                      <div className="form-control mb-4">
                        <Input type="checkbox" onChange={setCheckHandler} />
                        <label>
                          Acepto los terminos y condiciones
                        </label>
                      </div>
                    </form>
                  </div>
                  <hr className="mb-4" />
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
                  <div className="row">
                    <div className="col">
                      <button className="btn btn-secondary btn-lg btn-block" type="submit" onClick={() => props.setStep(0)}>
                        Atrás
                        </button>
                    </div>

                    <div className="col">
                      <button className="btn btn-primary btn-lg btn-block" type="submit" onClick={() => props.setStep(2)} disabled={!check}>
                        Siguiente
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
