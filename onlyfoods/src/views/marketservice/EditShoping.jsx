import React, { Fragment } from "react";
import Search from "../../components/marketservice/Search";

function Payment(props) {
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
                  <Search />
                  <hr />
                  <div class="row">
                    <div class="col-md-5 mb-4">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
                        class="img-fluid z-depth-1-half"
                        alt="Second sample image"
                      />
                    </div>

                    <div class="col-md-7 mb-4">
                      <h5 class="mb-3 h5">Additional premium support</h5>

                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis, ea ut aperiam corrupti, dolorem.
                      </p>

                      <select class="mdb-select colorful-select dropdown-info">
                        <option value="" disabled>
                          Choose a period of time
                        </option>
                        <option value="1" selected>
                          +6 months : 200$
                        </option>
                        <option value="2">+12 months: 400$</option>
                        <option value="3">+18 months: 800$</option>
                        <option value="4">+24 months: 1200$</option>
                      </select>

                      <button type="button" class="btn btn-primary btn-md">
                        Add premium support to the cart
                      </button>
                    </div>
                  </div>

                  <hr class="mb-5" />

                  <div class="row">
                    <div class="col-md-5 mb-4">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Others/images/44.jpg"
                        class="img-fluid z-depth-1-half"
                        alt="Second sample image"
                      />
                    </div>

                    <div class="col-md-7 mb-4">
                      <h5 class="mb-3 h5">MDB Membership</h5>

                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Veritatis, ea ut aperiam corrupti, dolorem.
                      </p>

                      <select class="mdb-select colorful-select dropdown-info">
                        <option value="" disabled>
                          Choose a period of time
                        </option>
                        <option value="1" selected>
                          +6 months : 200$
                        </option>
                        <option value="2">+12 months: 400$</option>
                        <option value="3">+18 months: 800$</option>
                        <option value="4">+24 months: 1200$</option>
                      </select>

                      <button type="button" class="btn btn-primary btn-md">
                        Add MDB Membership to the cart
                      </button>
                    </div>
                  </div>

                  <hr class="mb-4" />

                  <button
                    class="btn btn-primary btn-lg btn-block"
                    type="submit"
                  >
                    Next step
                  </button>
                </div>
              </div>

              <div className="col-lg-4 mb-4">
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
                      <dd className="col-sm-8">Premium support - 2 years</dd>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Payment;
