import Area from "./Area";
import Donut from "./Donut";
import "./Dashboard.css";

const DashboardContainer = () => {
  return (
    <div className="charts">
      <div className="donut">
        {<Donut />}
        <div className="donut-header">Projects by account</div>
      </div>
      <div className="area">{<Area />}</div>
      <div className="risk"></div>
      <div className="risk2"></div>
    </div>
  );
};

export default DashboardContainer;
