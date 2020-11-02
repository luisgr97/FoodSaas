import React from "react";
// import { Button, ButtonGroup, Input } from "reactstrap";

function Payment(props) {
  // const [rSelected, setRSelected] = useState(null);

  return (
    <div className="container mt-5">
      <section>
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

            <div class="row">
              <div class="col-lg-4 col-md-12 mb-4">
                <label for="country">Country</label>
                <select
                  class="custom-select d-block w-100"
                  id="country"
                  required
                >
                  <option value="">Choose...</option>
                  <option>United States</option>
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <label for="state">State</label>
                <select class="custom-select d-block w-100" id="state" required>
                  <option value="">Choose...</option>
                  <option>California</option>
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>

              <div class="col-lg-4 col-md-6 mb-4">
                <label for="zip">Zip</label>
                <input
                  type="text"
                  class="form-control"
                  id="zip"
                  placeholder=""
                  required
                />
                <div class="invalid-feedback">Zip code required.</div>
              </div>
            </div>

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
            <div class="mb-1">
              <input
                type="checkbox"
                class="form-check-input filled-in"
                id="safeTheInfo"
              />
              <label class="form-check-label" for="safeTheInfo">
                Save this information for next time
              </label>
            </div>
            <div class="mb-1">
              <input
                type="checkbox"
                class="form-check-input filled-in"
                id="subscribeNewsletter"
              />
              <label class="form-check-label" for="subscribeNewsletter">
                Subscribe to the newsletter
              </label>
            </div>

            <hr />

            <button class="btn btn-primary btn-lg btn-block" type="submit">
              Siguiente Paso
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Payment;
