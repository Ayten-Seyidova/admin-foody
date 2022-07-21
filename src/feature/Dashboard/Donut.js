import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        labels: ["KFC", "KLM", "American Express"],
        title: {
          text: "Orders",
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
          enabled: true,
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
              width={472}
              height={472}
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

export default App;
