import React from "react";
import { MdAdd } from "react-icons/md";
import OrderStatus from "../components/OrderStatus";
function Orders() {
  return (
    <div className="px-8 pr-12 sm:px-4 sm:pr-4 pt-6 bg-skin-fill-main">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-sans text-5xl text-skin-base">Orders</h1>
          <p className="pl-1 font-sans text-skin-muted text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod
          </p>
        </div>
        <button className="px-5 py-3 bg-skin-button-base text-skin-inverted rounded-md flex items-center">
          Create Order <MdAdd className="ml-2" />
        </button>
      </div>
      <div>
        <OrderStatus />
      </div>
    </div>
  );
}

export default Orders;
