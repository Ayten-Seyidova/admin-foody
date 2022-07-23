import './Orders.css'

import BasicTable from "./OrderTable";

const OrderContainer = () => {
  return (
    <>
      <div className="orders-header">Orders</div>
      <BasicTable />
    </>
  );
};

export default OrderContainer;
