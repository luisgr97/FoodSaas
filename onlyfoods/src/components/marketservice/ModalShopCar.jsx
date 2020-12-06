/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState, useEffect } from "react";
import {
  Button,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import { Link } from "react-router-dom";

import auth from "components/auth/auth.js";

const ModalCarShop = (props) => {
  const { className } = props;


  var temp = JSON.parse(localStorage.getItem("Car-shop"));
  var total = 0;

  const [products, setProducts] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setProducts(temp);
  }, [temp]);

  const toggle = () => setModal(!modal);

  const removeElement = index => {
    temp.splice(index, 1);
    setProducts(temp);
    localStorage.setItem("Car-shop", JSON.stringify(temp));
  }

  const setStep2 = () => {
    setModal(!modal);
    props.setStep(1);
  }

  const closeBtn = (
    <button
      className="close"
      onClick={toggle}
      style={{
        fontSize: "25px",
      }}
    >
      &times;
    </button>
  );

  return (
    <div>
      <Button
        onClick={toggle}
        style={{
          position: "fixed",
          top: "50%",
          right: "3%",
          borderRadius: "100%",
          height: "65px",
          width: "65px",
          backgroundColor: "#80deea",
          border: "2px solid",
          zIndex: "3",
        }}
      >
        <i className="fas fa-shopping-cart lg">
          <Badge color="dark" pill></Badge>
        </i>
      </Button>
      <Modal size="lg" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader
          toggle={toggle}
          close={closeBtn}
          style={{
            background: "#80deea",
          }}
        ></ModalHeader>
        <ModalBody>
          <section>
            <div className="table-responsive">
              <table className="table product-table table-cart-v-1">
                <thead>
                  <tr>
                    <th>
                      <strong>Imagen</strong>
                    </th>
                    <th className="font-weight-bold">
                      <strong>Producto</strong>
                    </th>
                    <th></th>
                    <th className="font-weight-bold">
                      <strong>Precio</strong>
                    </th>
                    <th></th>
                    <th className="font-weight-bold">
                      <strong>Cantidad</strong>
                    </th>
                    <th></th>
                    <th className="font-weight-bold">
                      <strong>Sub Total</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    products.map((element, index) => {
                      total += parseInt(element.price) * parseInt(element.amount);
                      return (
                        <tr key={index}>
                          <th scope="row">
                            <img
                              alt="imadfdsge"
                              src={element.image}
                              className="img-fluid z-depth-0"
                            />
                          </th>
                          <td>
                            <h6 className="mt-3">
                              {element.product_name}
                            </h6>
                          </td>
                          <td>|</td>
                          <td>${element.price}</td>
                          <td>
                            <center>x</center>
                          </td>
                          <td> {element.amount}</td>
                          <td>=</td>
                          <td className="font-weight-bold">
                            <strong>
                              $
                              {parseInt(element.price) *
                                parseInt(element.amount)}
                            </strong>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-sm btn-primary"
                              data-toggle="tooltip"
                              data-placement="top"
                              title="Remove item"
                              onClick={() => removeElement(index)}
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  }
                  <tr>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td>
                      <h4 className="mt-2">
                        <strong>Total</strong>
                      </h4>
                    </td>
                    <td className="text-right">
                      <h4 className="mt-2">
                        <strong>${total}</strong>
                      </h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </ModalBody>
        <ModalFooter>
          {
            auth.isAuthenticated() ?
              <Button color="primary" onClick={setStep2}>
                Avanzar al siguiente paso
              </Button> :
              <Link to="/login" className="btn btn-danger">
                Iniciar sesión para continuar
              </Link>
            //   <Button color="danger">
            //     Iniciar sesión para continuar
            // </Button>
          }

          {" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCarShop;
