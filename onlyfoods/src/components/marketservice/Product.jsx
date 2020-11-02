import React from "react";
import ModalShowProduct from "./ModalShowProduct";

function Product(props) {
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
            src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/img%20(38).jpg"
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
              Pizza Aaaa doble queso con tres leches para
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
              29.000$
            </strong>
          </span>
          <span className="float-right">
            <ModalShowProduct />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Product;
