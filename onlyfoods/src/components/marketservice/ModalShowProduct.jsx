/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const ModalCarShowProduct = (props) => {
  const { product_name, image, description, price, ingredients } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = (
    <Button className="close" onClick={toggle}>
      &times;
    </Button>
  );

  const addToCar = (e) => {
    e.preventDefault();
    //guarda en el storage el producto a comprar.
    var temp = JSON.parse(localStorage.getItem("Car-shop"));
    var repet = false;
    //Si ya esta adicionado al carrito, sumele uno a la cantidad.
    temp.forEach((element) => {
      if (element.product_name === product_name){
        repet = true;
      }else{
        element.amount += 1;
      }
    });
    //Si es la primera vez que se agrega.
    if (!repet) {
      temp.push({
        product_name,
        image,
        description,
        price,
        ingredients,
        amount: 1,
      });
    }
    console.log(temp);
    localStorage.setItem("Car-shop", JSON.stringify(temp));
    //cierra el modal.
    toggle();
  };

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
          <section className="text-center">
            <h3 className="font-weight-bold mb-5">Información del Producto</h3>

            <div className="row">
              <div className="col-lg-6">
                <div
                  id="carousel-thumb"
                  className="carousel slide carousel-fade carousel-thumbnails"
                  data-ride="carousel"
                >
                  <div
                    className="carousel-inner text-center text-md-left"
                    role="listbox"
                  >
                    <div className="carousel-item active">
                      <img
                        src={image}
                        alt="First slide"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 text-center text-md-left">
                <h2 className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4">
                  <strong>{product_name}</strong>
                </h2>
                <span className="badge badge-danger product mb-4 ml-xl-0 ml-4">
                  oferta
                </span>
                <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                  <span className="red-text font-weight-bold">
                    <strong>${price}</strong>
                  </span>
                </h3>

                <div
                  className="accordion md-accordion"
                  id="accordionEx"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="card">
                    <div className="card-header" role="tab" id="headingOne1">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseOne1"
                        aria-expanded="true"
                        aria-controls="collapseOne1"
                      >
                        <h5 className="mb-0">
                          Descripción
                          <i className="fas fa-angle-down rotate-icon"></i>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseOne1"
                      className="collapse show"
                      role="tabpanel"
                      aria-labelledby="headingOne1"
                      data-parent="#accordionEx"
                    >
                      <div className="card-body">
                        {description !== "" ? description : "Sin descripción"}
                      </div>
                    </div>
                  </div>

                  <div className="card">
                    <div className="card-header" role="tab" id="headingTwo2">
                      <a
                        className="collapsed"
                        data-toggle="collapse"
                        data-parent="#accordionEx"
                        href="#collapseTwo2"
                        aria-expanded="false"
                        aria-controls="collapseTwo2"
                      >
                        <h5 className="mb-0">
                          Ingredientes
                          <i className="fas fa-angle-down rotate-icon"></i>
                        </h5>
                      </a>
                    </div>

                    <div
                      id="collapseTwo2"
                      className="collapsed"
                      role="tabpanel"
                      aria-labelledby="headingTwo2"
                      data-parent="#accordionEx"
                    >
                      <div className="card-body">
                        {ingredients[0] != null ? (
                          ingredients.map((element) => (
                            <>
                              <span role="img" aria-label=".">
                                ✅{" "}
                                {element.ingredient_name + " $" + element.price}
                              </span>
                              <hr />
                            </>
                          ))
                        ) : (
                          <span role="img" aria-label=".">
                            ✅ sin ingredientes
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12 text-center text-md-left text-md-right">
                <button className="btn btn-primary" onClick={addToCar}>
                  <i className="fas fa-cart-plus mr-2" aria-hidden="true" />
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
