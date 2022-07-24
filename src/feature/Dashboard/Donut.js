import { style } from "@mui/system";
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
          style: { color: "#C7C7C7", fontSize: "20px" },
        },
        legend: {
          position: "bottom",
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
              width={450}
              height={450}
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
