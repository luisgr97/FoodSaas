/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const ModalCarShowProduct = (props) => {
  const { product_name, image, description, price } = props;
  console.log("recibo:", props)

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <Button className="close" onClick={toggle}>
      &times;
    </Button>
  );

  return (
    <div>
      <Button onClick={toggle} size="sm">
        ver{" "}
      </Button>
      <Modal size="lg" isOpen={modal} toggle={toggle}>
        <ModalHeader
          toggle={toggle}
          close={closeBtn}
          style={{
            background: "#80deea",
          }}
        ></ModalHeader>
        <ModalBody>
          <section class="text-center">
            <h3 class="font-weight-bold mb-5">Información del Producto</h3>

            <div class="row">
              <div class="col-lg-6">
                <div
                  id="carousel-thumb"
                  class="carousel slide carousel-fade carousel-thumbnails"
                  data-ride="carousel"
                >
                  <div
                    class="carousel-inner text-center text-md-left"
                    role="listbox"
                  >
                    <div class="carousel-item active">
                      <img src={image} alt="First slide" class="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-5 text-center text-md-left">
                <h2 class="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                  <strong>{product_name}</strong>
                </h2>
                <span class="badge badge-danger product mb-4 ml-xl-0 ml-4">
                  oferta
                </span>
                <h3 class="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                  <span class="red-text font-weight-bold">
                    <strong>${price}</strong>
                  </span>
                </h3>

                <div
                  class="accordion md-accordion"
                  id="accordionEx"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div class="card">
                    <div class="card-header" role="tab" id="headingOne1">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseOne1"
                        aria-expanded="true"
                        aria-controls="collapseOne1"
                      >
                        <h5 class="mb-0">
                          {description}
                          <i class="fas fa-angle-down rotate-icon"></i>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseOne1"
                      class="collapse show"
                      role="tabpanel"
                      aria-labelledby="headingOne1"
                      data-parent="#accordionEx"
                    >
                      <div class="card-body">{description}</div>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-header" role="tab" id="headingTwo2">
                      <a
                        class="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseTwo2"
                        aria-expanded="false"
                        aria-controls="collapseTwo2"
                      >
                        <h5 class="mb-0">
                          Ingredientes
                          <i class="fas fa-angle-down rotate-icon"></i>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseTwo2"
                      class="collapsed"
                      role="tabpanel"
                      aria-labelledby="headingTwo2"
                      data-parent="#accordionEx"
                    >
                      <div class="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12 text-center text-md-left text-md-right">
                <button class="btn btn-primary">
                  <i class="fas fa-cart-plus mr-2" aria-hidden="true"></i>{" "}
                  Añadir al carrito
                </button>
              </div>
            </div>
          </section>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default ModalCarShowProduct;
