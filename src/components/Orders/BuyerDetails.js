import React from "react";

function BuyerDetails(props) {
  // const [accordian, setAccordian] = React.useState("hidden");
  return (
    <div
      className={`flex-col w-full border-2 border-t-0 border-base rounded-b-lg justify-between pr-5 px-5 py-3 ${props.accordian} `}>
      <h4 className="font-sans text-xl text-skin-base mt-2">Buyer Details</h4>
      <form>
        <div className="flex sm:block">
          <input
            type="text"
            className="px-4 py-3 text-skin-base bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base mb-2  focus:ring-0 focus:border-none focus:outline-offset-0"
            placeholder="Buyer Name"
          />
          <input
            type="number"
            className="px-4 py-3 text-skin-base bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base mb-2 mx-2 sm:mx-0 focus:ring-0 focus:border-none focus:outline-offset-0"
            placeholder="+91 | Phone Number"
          />
          <input
            type="number"
            className="px-4 py-3 text-skin-base bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base mb-2 mx-2 sm:mx-0 focus:ring-0 focus:border-none focus:outline-offset-0"
            placeholder="+91 | Alternate Phone Number"
          />
          <input
            type="email"
            className="px-4 py-3 text-skin-base bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base mb-2 mx-2 sm:mx-0 focus:ring-0 focus:border-none focus:outline-offset-0"
            placeholder="Email"
          />
        </div>
        <h4 className="font-sans text-xl text-skin-base mt-3">Buyer Address</h4>
        <div className="">
          <div className="flex sm:block">
            <input
              type="text"
              className="px-4 py-3 text-skin-base bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base mb-2 grow focus:ring-0 focus:border-none focus:outline-offset-0"
              placeholder="Address Line 1"
            />
            <input
              type="text"
              className="px-4 py-3 text-skin-base bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base mb-2 grow mx-2 sm:mx-0 focus:ring-0 focus:border-none focus:outline-offset-0"
              placeholder="Address Line 2"
            />
            <input
              type="text"
              className="px-4 py-3 text-skin-base bg-skin-fill-muted rounded my-1 font-sans focus:outline-base mb-2 w-2/3 sm:w-full focus:ring-0 focus:border-none focus:outline-offset-0"
              placeholder="Landmark"
            />
          </div>
          <div className="flex sm:block">
            <input
              type="text"
              className="px-4 py-3 text-skin-base bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base mb-2 focus:ring-0 focus:border-none focus:outline-offset-0"
              placeholder="City"
            />
            <input
              type="text"
              className="px-4 py-3 text-skin-base bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base mb-2 mx-2 sm:mx-0 focus:ring-0 focus:border-none focus:outline-offset-0"
              placeholder="Pincode"
            />
            <input
              type="text"
              className="px-4 py-3 text-skin-base bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base mb-2 mx-2 sm:mx-0 focus:ring-0 focus:border-none focus:outline-offset-0"
              placeholder="State"
            />
            <input
              type="text"
              className="px-4 py-3 text-skin-base bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base mb-2  sm:mx-0 focus:ring-0 focus:border-none focus:outline-offset-0"
              placeholder="Country"
            />
          </div>
          <div className="flex">
            <input
              type="text"
              className="px-4 py-3 text-skin-base bg-skin-fill-muted w-1/3 sm:w-full rounded my-1 font-sans focus:outline-base mb-2 focus:ring-0 focus:border-none focus:outline-offset-0"
              placeholder="Company Name"
            />
          </div>
          <label className="my-1 font-sans flex items-center text-skin-base">
            <input type="checkbox" className="w-4 h-4" />
            &nbsp; Billing Adress Same as Delivery
          </label>
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

export default BuyerDetails;
