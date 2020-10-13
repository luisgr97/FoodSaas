import React from "react";
import { Table, Container, Card, CardBody, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";


function Sectionthree() {
  return (
    <Container>
      <Table bordered>
        <thead>
          <tr>
            <th>
              <center>
                Elige un plan y <br></br>
                empieza tu negocio
              </center>
            </th>
            <th>
              <center>
                <Card>
                  <CardBody>
                    <CardTitle>
                      Plan Basico
                      <br />
                      <b style={{ color: "gray" }}>$170.000 al mes</b>
                      <br />
                    </CardTitle>
                  </CardBody>
                </Card>
              </center>
            </th>
            <th>
              <center>
                <Card>
                  <CardBody>
                    <CardTitle>
                      Plan Normal
                      <br />
                      <b style={{ color: "gray" }}>$300.000 al mes</b>
                      <br />
                    </CardTitle>
                  </CardBody>
                </Card>
              </center>
            </th>
            <th>
              <center>
                <Card>
                  <CardBody>
                    <CardTitle>
                      Plan PREMIUM
                      <br />
                      <b style={{ color: "gray" }}>$590.000 al mes</b>
                      <br />
                    </CardTitle>
                  </CardBody>
                </Card>
              </center>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: "left" }}>Gestion de clientes</td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left" }}>Gestion de productos</td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left" }}>Gestion de pagos</td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left" }}>Reportes graficos</td>
            <td>
              <span role="img" aria-label=".">
                ❌
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left" }}>Reportes de ventas</td>
            <td>
              <span role="img" aria-label=".">
                ❌
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left" }}>
              Actualizar datos de los menús de comidas desde un archivo en
              excel.
            </td>
            <td>
              <span role="img" aria-label=".">
                ❌
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ❌
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left" }}>
              Generar Mapas de ubicación de clientes
            </td>
            <td>
              <span role="img" aria-label=".">
                ❌
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ❌
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left" }}>Personalizacion</td>
            <td>
              <span role="img" aria-label=".">
                ❌
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ❌
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left" }}>PWA</td>
            <td>
              <span role="img" aria-label=".">
                ❌
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ❌
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "left" }}>Bot</td>
            <td>
              <span role="img" aria-label=".">
                ❌
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ❌
              </span>
            </td>
            <td>
              <span role="img" aria-label=".">
                ✅
              </span>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <span className="btn btn-success">
                <Link to="/buy_plan/basico" style={{ color: "white" }}>
                  Comprar
                </Link>
              </span>
            </td>
            <td>
              <span className="btn btn-success">
                <Link to="/buy_plan/normal" style={{ color: "white" }}>
                  Comprar
                </Link>
              </span>{" "}
            </td>
            <td>
              <span className="btn btn-success">
                <Link to="/buy_plan/premium" style={{ color: "white" }}>
                  Comprar
                </Link>
              </span>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default Sectionthree;
