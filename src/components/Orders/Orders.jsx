import React, { useEffect } from "react";

const Orders = () => {
  useEffect(() => {
    fetch("http://localhost:4001/orders");
  }, []);

  return <div>Orders</div>;
};

export default Orders;
