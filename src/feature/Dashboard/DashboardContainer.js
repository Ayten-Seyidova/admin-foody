import PieChart from "./Donut";
import "./Donut.css";

const DashboardContainer = () => {
  return (
    <>
      <div className="piechart">{<PieChart />}</div>
    </>
  );
};

export default DashboardContainer;
