import ReactApexChart from "react-apexcharts";
import { useTranslation } from "react-i18next";

function Area() {
  const { t } = useTranslation();
  const title = t("dashboard.area-title");
  const subtitle = t("dashboard.area-subtitle");
  const series = [
    {
      name: "STOCK ABC",
      data: [12, 34, 59],
    },
  ];
  const options = {
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
      text: title,
      align: "left",
      style: {
        color: "#C7C7C7",
        fontSize: "20px",
      },
    },
    subtitle: {
      text: subtitle,
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
  };

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={400}
        width={560}
      />
    </div>
  );
}

export default Area;
