import OfferTable from "./OfferTable";
import "./Offers.css";
import TablePaginationDemo from "../Orders/TablePaginationDemo";

const OfferContainer = () => {
  return (
    <>
      <div className="offers-header">Offers</div>
      <OfferTable />
      <TablePaginationDemo />
    </>
  );
};

export default OfferContainer;
