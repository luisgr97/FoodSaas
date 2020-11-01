import React, { Fragment } from "react";
import Product from "../../components/marketservice/Product";
import Search from "../../components/marketservice/Search";
import Modal from "../../components/marketservice/ModalShopCar";

function Shop(props) {
  return (
    <Fragment>
      <Search />
      <div className="row">
        <Modal></Modal>
        <div className="col-12">
          <ul
            class="nav  nav-justified"
            style={{
              background: "#EAEAEA",
              margin: "1rem",
            }}
          >
            <li class="nav-item">
              <a
                class="nav-link active dark-grey-text font-weight-bold"
                data-toggle="tab"
                href="#panel5"
                role="tab"
              >
                {" "}
                Todo
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link dark-grey-text font-weight-bold"
                data-toggle="tab"
                href="#panel6"
                role="tab"
              >
                Top Ofertas
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link dark-grey-text font-weight-bold"
                data-toggle="tab"
                href="#panel7"
                role="tab"
              >
                Más Vendido
              </a>
            </li>
          </ul>
        </div>

        <div className="row">
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>

          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>

          <Product></Product>
          <Product></Product>
          <Product></Product>
          <Product></Product>
        </div>
      </div>
    </Fragment>
  );
}

export default Shop;
