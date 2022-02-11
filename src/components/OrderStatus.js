import React from "react";

function OrderStatus() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Tracking Details",
        accessor: "trackingDetails",
      },
      {
        Header: "Order Details",
        accessor: "orderDetails",
      },
      {
        Header: "Status",
        accessor: "orderStatus",
      },
      {
        Header: "Dimentional Weight(cm/kg)",
        accessor: "dimentionalWeight",
      },
      {
        Header: "Order Amount(₹)",
        accessor: "orderAmount",
      },
      {
        Header: "Address Details",
        accessor: "addressDetails",
      },
      {
        Header: "Actions",
        accessor: "actions",
      },
    ],
    []
  );
  return <div></div>;
}

export default OrderStatus;
