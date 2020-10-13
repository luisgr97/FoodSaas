import React from "react";

function Sectiontwo() {
  return (
    <div className="container mt-5">
      <section className="dark-grey-text text-center">
        <p
          className=" text-justify mx-auto w-responsive mb-5"
          style={{
            fontSize: "25px",
          }}
        >
          Onlyfoods es una aplicación web que funciona en el modelo de
          Franquicias, ofreciendo un Software como Servicio(Saas) para la
          gestión y comercialización de alimentos a traves del mercado digital
          (E-Comerce). En Onlyfoods podras administrar el inventario de tus
          productos, ofrecer un menu digital, realizar ventas y promociones,
          generar reportes y mucho más!
        </p>
        <div className="row">
          <div className="col-lg-4 col-md-12 mb-4">
            <div className="view overlay rounded z-depth-2 mb-4">
              <img
                className="img-fluid"
                src="https://img-sharesprites.flaticon.com/pack/0/235/235167-reports-and-analytics.jpg"
                alt="Sample image"
              />
              <a>
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>
            <h4 className="font-weight-bold mb-3">
              <strong>Reportes</strong>
            </h4>
            <p
              className="dark-grey-text"
              style={{
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              Onlyfoods te permite generar diferentes reportes sobre el flujo de
              tú información, como los productos preferidos por tus clientes, el
              estado de ventas mensual, reporte de inventario, concurrencia de
              usuarios y reporte de calficación de productos.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="view overlay rounded z-depth-2 mb-4">
              <img
                className="img-fluid"
                src="https://image.flaticon.com/icons/png/512/395/395529.png"
                alt="Sample image"
              />
              <a>
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>
            <h4 className="font-weight-bold mb-3">
              <strong>Menú Digital</strong>
            </h4>
            <p
              className="dark-grey-text"
              style={{
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              Onlyfoods te permite tener un inventario online y ofrecer uno o
              varios catalogos de tus productos, los caules podran ser
              consultados y consumidos por tus clientes a traves de tu propio
              portal E-Comerce.
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <div className="view overlay rounded z-depth-2 mb-4">
              <img
                className="img-fluid"
                src="https://icons-for-free.com/iconfiles/png/512/ecommerce+marketing+online+shopping+sale+shopping+icon-1320165954013206270.png"
                alt="Sample image"
              />
              <a>
                <div className="mask rgba-white-slight"></div>
              </a>
            </div>
            <h4 className="font-weight-bold mb-3">
              <strong>Comercio en Linea</strong>
            </h4>

            <p
              className="dark-grey-text"
              style={{
                fontSize: "20px",
                textAlign: "justify",
              }}
            >
              Onlyfoods te permite realizar contar con un sistema de pagos
              electronicos para la compra de los producos dispuestos en tus
              catalogos, contamos con servicio paypal.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sectiontwo;
