import React from "react";

function Sectionone() {
  return (
    <section className="container mt-5">
      <div className="row">
        <div className="col-lg-7 mb-4 align-self-center text-center text-lg-left">
          <h2 className="h2 mb-5">Ahora mas cerca de ti! </h2>
          <p
            className=" mb-4"
            style={{
              fontSize: "25px",
            }}
          >
            Descarga nuestra aplicación en tú télefono movil y encuentra los mas
            deliciosos platillos al mejor precio, encuentranos en:
          </p>
          <button
            type="button"
            className="btn btn-cyan waves-effect btn-md ml-lg-0"
          >
            <i className="fab fa-apple fa-lg pr-1"></i> App Store
          </button>
          <button type="button" className="btn btn-cyan waves-effect btn-md">
            <i className="fab fa-google-play fa-lg pr-1"></i> Google Play
          </button>
        </div>
        <div className="col-lg-5 mb-4">
          <div className="view overlay">
            <img
              className="img-fluid mx-auto"
              src="https://mdbootstrap.com/img/illustrations/app-user-colour.svg"
              alt="Sample image"
            />
            <a>
              <div className="mask rgba-white-slight"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sectionone;
