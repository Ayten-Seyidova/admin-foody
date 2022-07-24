import React from "react";
import ReactApexChart from "react-apexcharts";

class Area extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "STOCK ABC",
          data: [12, 34, 59],
        },
      ],
      options: {
        chart: {
          type: "area",
          height: 350,
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: "straight",
        },

        title: {
          text: "Total salary",
          align: "left",
          style: {
            color: "#C7C7C7",
            fontSize: "20px",
          },
        },
        subtitle: {
          text: "Years",
          align: "left",
          style: {
            color: "#8E8E93",
            fontSize: "16px",
          },
        },
        labels: [120, 204, 30],
        xaxis: {
          type: "datetime",
        },
        yaxis: {
          opposite: true,
        },
        legend: {
          horizontalAlign: "left",
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={400}
          width={560}
        />
      </div>
    );
  }
}

export default Area;
