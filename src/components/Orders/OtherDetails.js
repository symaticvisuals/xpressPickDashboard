import React from "react";

function OtherDetails(props) {
  return (
    <div
      className={`flex-col w-full border-2 border-t-0 border-base rounded-b-lg justify-between pr-5 px-5 py-3 ${props.accordian} `}>
      <h4 className="font-sans text-xl text-skin-base mt-2">Buyer Details</h4>
      <form>
        <div className="flex sm:block">
          <input
            type="text"
            className="px-4 py-3 bg-skin-fill-muted w-full rounded text-skin-base my-1 font-sans focus:outline-base mb-2  focus:ring-0 focus:border-none focus:outline-offset-0"
            placeholder="Reseller Name (Optional)"
          />
          <input
            type="number"
            className="px-4 py-3 bg-skin-fill-muted w-full rounded text-skin-base my-1 font-sans focus:outline-base mb-2 mx-2 sm:mx-0 focus:ring-0 focus:border-none focus:outline-offset-0"
            placeholder="GSTIN Number(Optional)"
          />
        </div>
      </form>
      <div className="flex justify-end">
        <button className="px-5 py-3 mb-2 bg-skin-button-base text-skin-inverted font-sans text-md rounded-lg hover:bg-skin-button-base-hover sm:w-full mt-2">
          Next
        </button>
      </div>
    </div>
  );
}

export default OtherDetails;
