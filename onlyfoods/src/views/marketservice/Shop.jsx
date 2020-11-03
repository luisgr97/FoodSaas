import React, { Fragment } from "react";

//componentes.
import Product from "../../components/marketservice/Product";
import Search from "../../components/marketservice/Search";
import Modal from "../../components/marketservice/ModalShopCar";
import { Spinner } from "reactstrap";
//import { map } from "leaflet";

//libreria para peticiones http

function Shop(props) {
  //Propiedades.
  const { products } = props;

  return (
    <Fragment>
      <Search />
      <div className="row">
        <Modal />
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
                Menú
              </a>
            </li>
          </ul>
        </div>

        <div className="row">
          {products == null ? (
            <>
              <div className="col-12 text-center">
                <Spinner
                  type="grow"
                  color="info"
                  size="lg"
                  style={{ margin: "auto",
                  width: '1rem', height: '1rem' }}
                />{" "}
                <Spinner
                  type="grow"
                  color="info"
                  size="lg"
                  style={{ margin: "auto",
                  width: '2rem', height: '2rem' }}
                />{" "}
                <Spinner
                  type="grow"
                  color="info"
                  size="lg"
                  style={{ margin: "auto",
                  width: '3rem', height: '3rem' }}/>
                  <Spinner
                  type="grow"
                  color="info"
                  size="lg"
                  style={{ margin: "auto",
                  width: '4rem', height: '4rem' }}/>
                  <Spinner
                  type="grow"
                  color="info"
                  size="lg"
                  style={{ margin: "auto",
                  width: '5rem', height: '5rem' }}
                />
                <Spinner
                  type="grow"
                  color="info"
                  size="lg"
                  style={{ margin: "auto",
                  width: '6rem', height: '6rem' }}
                />
                <Spinner
                  type="grow"
                  color="info"
                  size="lg"
                  style={{ margin: "auto",
                  width: '7rem', height: '7rem' }}
                />
              </div>
            </>
          ) : (
            products.map((element) => (
              <Product
                product_name={element.product_name}
                image={element.image}
                description={element.description}
                price={element.price}
              />
            ))
          )}
        </div>
      </div>
    </Fragment>
  );
}

export default Shop;
