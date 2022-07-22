import React, { Component } from "react";
import Chart from "react-apexcharts";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["KFC", "KLM", "American Express"],
        title: {
          text: "Orders",
          color:'white'
        },
        legend: {
          position: "bottom",
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                // color: "#000",
                name: {
                  show: true,
                  fontSize: "16px",
                  color: undefined,
                  fontWeight: "bold",
                },
                value: { show: false },
                total: {
                  label: "Projects by account",
                  show: true,
                  showAlways: true,
                  color: "grey",
                  fontSize: "16px",
                  // style: {
                  //   color: "red",
                  // },
                },
              },
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
      },
      series: [30, 40, 45],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              width={264}
              height={264}
              options={this.state.options}
              series={this.state.series}
              type="donut"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Donut;
