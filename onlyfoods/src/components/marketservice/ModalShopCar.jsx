/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from "react";
import {
  Button,
  Badge,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
} from "reactstrap";

const ModalCarShop = (props) => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

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
          top: "52%",
          right: "3%",
          borderRadius: "100%",
          height: "95px",
          width: "85px",
          backgroundColor: "#80deea",
          border: "2px solid",
          zIndex: "3",
        }}
      >
        <i class="fas fa-shopping-cart lg">
          <Badge color="dark" pill>
            {/*n productos en */}
          </Badge>
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
            <div class="table-responsive">
              <table class="table product-table table-cart-v-1">
                <thead>
                  <tr>
                    <th></th>
                    <th class="font-weight-bold">
                      <strong>Producto</strong>
                    </th>
                    <th></th>
                    <th class="font-weight-bold">
                      <strong>Precio</strong>
                    </th>
                    <th></th>
                    <th class="font-weight-bold">
                      <strong>Cantidad</strong>
                    </th>
                    <th></th>
                    <th class="font-weight-bold">
                      <strong>Sub Total</strong>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg"
                        alt=""
                        class="img-fluid z-depth-0"
                      />
                    </th>
                    <td>
                      <h5 class="mt-3">
                        <strong>iPhone</strong>
                      </h5>
                    </td>
                    <td>|</td>
                    <td>$800</td>
                    <td>x</td>
                    <td>
                      <Input type="number" />
                    </td>
                    <td>=</td>
                    <td class="font-weight-bold">
                      <strong>$800</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-sm btn-primary"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Remove item"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img
                       src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/6.jpg"
                       alt=""
                        class="img-fluid z-depth-0"
                      />
                    </th>
                    <td>
                      <h5 class="mt-3">
                        <strong>iPhone</strong>
                      </h5>
                    </td>
                    <td>|</td>
                    <td>$800</td>
                    <td>x</td>
                    <td>
                      <Input type="number" />
                    </td>
                    <td>=</td>
                    <td class="font-weight-bold">
                      <strong>$800</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-sm btn-primary"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Remove item"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img
                      src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/1.jpg"
                      alt=""
                        class="img-fluid z-depth-0"
                      />
                    </th>
                    <td>
                      <h5 class="mt-3">
                        <strong>iPhone</strong>
                      </h5>
                    </td>
                    <td>|</td>
                    <td>$800</td>
                    <td>x</td>
                    <td>
                      <Input type="number" />
                    </td>
                    <td>=</td>
                    <td class="font-weight-bold">
                      <strong>$800</strong>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-sm btn-primary"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Remove item"
                      >
                        X
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td colspan="3"></td>
                    <td colspan="3"></td>
                    <td>
                      <h4 class="mt-2">
                        <strong>Total</strong>
                      </h4>
                    </td>
                    <td class="text-right">
                      <h4 class="mt-2">
                        <strong>$2600</strong>
                      </h4>
                    </td>
                    
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Personalizar Compra
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalCarShop;
