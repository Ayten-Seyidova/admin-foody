import Area from "./Area";
import PieChart from "./Donut";
import "./Donut.css";

const DashboardContainer = () => {
  return (
    <>
      <div className="donut">{<PieChart />}</div>
      <div className="area">{<Area />}</div>
      <div className="risk"></div>
      <div className="risk2"></div>
    </>
  );
};

export default DashboardContainer;
