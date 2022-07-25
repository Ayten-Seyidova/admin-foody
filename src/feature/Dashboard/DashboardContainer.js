import Area from "./Area";
import Donut from "./Donut";
import "./Dashboard.css";
import Risk from "./Risk";

const DashboardContainer = () => {
  return (
    <div className="charts">
      <div className="donut">
        {<Donut />}
        <div className="donut-header">Projects by account</div>
      </div>
      <div className="area">{<Area />}</div>
      <div className="risk">
        {<Risk name="Assigned Risks" desc="There are no risks assigned." />}
      </div>
      <div className="risk2">
        {
          <Risk
            name="Assigned action items"
            desc="There are no action items assigned."
          />
        }
      </div>
    </div>
  );
};

export default DashboardContainer;
