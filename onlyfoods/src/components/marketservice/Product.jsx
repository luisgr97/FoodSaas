import React from "react";
import ModalShowProduct from "./ModalShowProduct";

function Product(props) {
  const { product_name, image,description, price, ingredients } = props;

  return (
    <div
      className="col-3"
      style={{
        maxWidth: "18rem",
      }}
    >
      <div
        className="card"
        style={{
          width: "18rem",
          height: "30rem",
          margin: "auto",
          border: " 2px solid #e1f5fe",
          marginTop: "1rem",
          marginRight: "5rem",
          marginLeft: "2rem",
        }}
      >
        <div className="flex-sm-row">
          <img
            src={image}
            className="card-img-top"
            alt="sample_photo"
            style={{
              borderRadius: "10px",
            }}
          />
        </div>

        <div className="card-body">
          <p>
            <strong
              style={{
                color: "#90caf9",
                fontSize: "100%",
              }}
            >
              {product_name}
            </strong>
          </p>
        </div>
        <div className="card-footer px-1">
          <hr />
          <span className="float-left">
            <strong
              style={{
                color: "#90caf9",
              }}
            >
              {price}$
            </strong>
          </span>
          <span className="float-right">
            <ModalShowProduct
              product_name={product_name}
              image={image}
              description={description}
              price={price}
              ingredients = {ingredients}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;
