import React from "react";
// react plugin used to create charts
import { Bar, Pie } from "react-chartjs-2";

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
  Button
} from "reactstrap";

class CreateReports extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        rInit: true,
        r1: false,
        r2: false,
        pieChartData: {},
        barChartDataHighest: {},
        barChartDataLowest: {}
    }
  }

  async componentDidMount() {

    // PieChartData
    const res = await fetch('https://energycorp.herokuapp.com/api/reports/moraandsuspended/');

    const data = await res.json();

    let newPieChartData = {
      datasets: [{
        data: [5, 21],
        backgroundColor: ['red', 'yellow']
      }],
      labels: [
        'Productos individuales',
        'Combos'
      ]
    };

    this.setState({pieChartData: newPieChartData});

    // BarChartDataHighest
    const resBar = await fetch('https://energycorp.herokuapp.com/api/reports/topfive/');

    const dataBar = await resBar.json();

    let newBarChartDataHighest = {
      labels: ["Sandwich de pera", "Hamburguesa veg.", "Seviche de pollo", "Nuggets de pollo", "Waffle especial"],
      datasets: [{
        label: 'Número de productos vendidos',
        data: [
          17,
          15,
          12,
          7,
          5
        ],
        backgroundColor: [
          'rgba(255, 99, 132, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255,206, 86, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(153, 102, 255, 0.6)'
        ]
      }
      ]
    };
    // BarChartDataLowest
    let newBarChartDataLowest = {
      labels: ["Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
      datasets: [{
        label: 'Ventas por día',
        data: [
          15,
          19,
          23,
          29,
          25
        ],
        backgroundColor: [
          'rgba(153, 102, 255, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(175, 206, 86, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 99, 132, 0.6)'
        ]
      }
      ]
    };
    this.setState({barChartDataHighest: newBarChartDataHighest});
    this.setState({barChartDataLowest: newBarChartDataLowest});

  }

  renderR1 = () => {
    this.setState({
        rInit: false,
        r1: true,
        r2: false,
        r3: false
    });
  }

  renderR2 = () => {
    this.setState({
        rInit: false,
        r1: false,
        r2: true,
        r3: false
    });
  }

  renderR3 = () => {
    this.setState({
        rInit: false,
        r1: false,
        r2: false,
        r3: true
    });
  }

  render() {
    return (
        <div className="content">
          <Row>
            <Col md="4">
              <Card>
                <CardHeader>
                  <CardTitle tag="h5">Seleccione un reporte</CardTitle>
                  <p className="card-category">de entre las siguientes opciones</p>
                </CardHeader>
                <CardBody>
                  <Button color="primary" onClick={this.renderR1}>Compras por productos individuales / Combos 
                  </Button>
                  <br/>
                  <Button color="primary" onClick={this.renderR2}>Productos con la mayor cantidad de ventas /u
                  </Button>
                  <br/>
                  <Button color="primary" onClick={this.renderR3}>Número de ventas por cada día de la semana
                  </Button>
                </CardBody>
                <CardFooter>
                </CardFooter>
              </Card>
            </Col>
            <Col md="8">
              <Card className="card-chart">
                <CardHeader>
                  <CardTitle tag="h5">Reporte seleccionado</CardTitle>
                  <p className="card-category">-----</p>
                </CardHeader>
                <CardBody>
                  {
                    this.state.rInit ? (
                      <div>
                       <p>
                         Seleccione un reporte de las opciones a la izquierda
                       </p>
                      </div>
                    ) : true
                  }
                  {
                    this.state.r1 ? (
                      <div>
                        <p>
                         Compras individuales y de combos
                       </p>
                       <Pie
                        data = {{
                          labels: this.state.pieChartData.labels,
                          datasets: this.state.pieChartData.datasets
                        }}
                       />
                      </div>
                    ) : true
                  }
                  {
                    this.state.r2 ? (
                      <div>
                        <p>
                        Productos más vendidos
                       </p>
                       <Bar
                        data = {this.state.barChartDataHighest}
                        options = {{
                          maintainAspectRatio: true
                        }}
                       />
                      </div>
                    ) : true
                  }
                  {
                    this.state.r3 ? (
                      <div>
                        <p>
                        Ventas por días de la semana
                       </p>
                       <Bar
                        data = {this.state.barChartDataLowest}
                        options = {{
                          maintainAspectRatio: true
                        }}
                       />
                      </div>
                    ) : true
                  }
                  
                </CardBody>
                <CardFooter>
                  <hr />
                  <div className="card-stats">
                    <i className="fa fa-check" /> Data information certified
                  </div>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
    );
  }
}

export default CreateReports;

