import React from "react";

function PickupAddress(props) {
  return (
    <div
      className={`flex-col w-full border-2 border-t-0 border-base rounded-b-lg justify-between pr-5 px-5 py-3 ${props.accordian}`}>
      <h4 className="font-sans text-xl text-skin-base mt-2 leading-4">
        Pickup Address
      </h4>
      <p className="font-sans text-skin-muted">
        Select a pickup location for the Order
      </p>
      <input
        type="text"
        className="px-4 py-3 bg-skin-fill-muted text-skin-base w-full rounded my-1 font-sans focus:outline-base mb-2  focus:ring-0 focus:border-none focus:outline-offset-0 sm:mx-0"
        placeholder="Pickup Address"
      />
      <div className="flex justify-end">
        <button className="px-5 py-3 mb-2 bg-skin-button-base text-skin-inverted font-sans text-md rounded-lg hover:bg-skin-button-base-hover sm:w-full mt-2">
          Next
        </button>
      </div>
    </div>
  );
}

export default PickupAddress;
