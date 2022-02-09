import React, { useState } from "react";

import { IoIosAddCircle } from "react-icons/io";
import { AiFillDelete } from "react-icons/ai";
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";
const totalProvider = React.createContext();
function OrderDetails(props) {
  // const [accordian, setAccordian] = React.useState("hidden");
  const [productCount, setProductCount] = useState(1);
  const [amount, setAmount] = useState(0);
  // const productCountRemove = () => {
  //   if (productCount > 1) {
  //     setProductCount(productCount - 1);
  //   }
  // };
  return (
    <div
      className={`flex-col w-full border-2 border-t-0 border-base rounded-b-lg justify-between pr-5 px-5 py-3 ${props.accordian}`}>
      <h4 className="font-sans text-xl text-skin-base mt-2">Order Details</h4>
      <form>
        <div className="flex items-baseline sm:block">
          <div className="flex items-center  px-4 py-3  bg-skin-fill-muted rounded my-1 border border-base focus-within:ring-1 focus-within:ring-base">
            <input
              type="text"
              className="w-[18vw] text-skin-base bg-skin-fill-muted font-sans border-none p-0 focus:ring-0 focus:border-none focus:outline-offset-0 sm:w-full"
              placeholder="Order ID"
            />
            <button className="font-sans p-none text-skin-base">
              Generate
            </button>
          </div>
          <input
            type="date"
            className="px-4 py-3 text-skin-base bg-skin-fill-muted w-full rounded  my-1 font-sans focus:outline-base mb-2 mx-2 focus:ring-0 focus:border-none focus:outline-offset-0 sm:mx-0"
            placeholder="Order Date"
          />
          <input
            type="number"
            className="px-4 py-3 text-skin-base bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base mb-2 mx-2 focus:ring-0 focus:border-none focus:outline-offset-0 sm:mx-0"
            placeholder="Order Channel"
          />
          <input
            type="text"
            className="px-4 py-3 text-skin-base bg-skin-fill-muted w-full rounded my-1 font-sans focus:outline-base mb-2 mx-2 focus:ring-0 focus:border-none focus:outline-offset-0 sm:mx-0"
            placeholder="Order Type"
          />
        </div>
        <input
          type="text"
          className="px-4 py-3 text-skin-base bg-skin-fill-muted w-1/2 rounded my-1 font-sans focus:outline-base mb-2  focus:ring-0 focus:border-none focus:outline-offset-0 sm:mx-0"
          placeholder="Order Tag"
        />

        <h4 className="font-sans text-xl text-skin-base mt-2">
          Product Details
        </h4>
        <totalProvider.Provider value={{ amount, setAmount }}>
          {Array.from({ length: productCount }, (_, i) => {
            return <AddProduct />;
          })}
        </totalProvider.Provider>
        <button
          className="flex justify-center items-center px-5 py-3 mb-2 border border-base text-skin-base font-sans text-md rounded-lg hover:bg-skin-fill-main w-full mt-2"
          onClick={(e) => {
            e.preventDefault();
            setProductCount(productCount + 1);
          }}>
          Add Product <IoIosAddCircle className="pl-2 text-3xl" />
        </button>

        <h4 className="font-sans text-xl text-skin-base mt-2">Payments</h4>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html" className="ml-2 mr-3 font-sans text-skin-base">
              Cash On Delivery
            </label>
            <br />
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label for="css" className="ml-2 mr-3 font-sans text-skin-base">
              Prepaid
            </label>
          </div>
          <div>
            <h4 className="font-sans font-semibold text-base">
              SubTotal:{amount}
            </h4>
          </div>
        </div>
        <br></br>
      </form>
      <div className="flex justify-end">
        <button className="px-5 py-3 mb-2 bg-skin-button-base text-skin-inverted font-sans text-md rounded-lg hover:bg-skin-button-base-hover sm:w-full mt-2">
          Next
        </button>
      </div>
    </div>
  );
}

export default OrderDetails;

const AddProduct = () => {
  // const { amount, setAmount } = React.useContext(totalProvider);
  const [showMore, setShowMore] = useState("");
  const [value, setValue] = useState(0);
  const setShowAction = () => {
    if (showMore === "") {
      setShowMore("hidden");
    } else {
      setShowMore("");
    }
  };
  return (
    <>
      <div className="flex items-center sm:block">
        <input
          type="text"
          className="px-4 py-3 bg-skin-fill-muted w-full text-skin-base rounded my-1 font-sans focus:outline-base mb-2  focus:ring-0 focus:border-none focus:outline-offset-0 sm:mx-0"
          placeholder="Product Name"
        />
        <input
          type="number"
          className="px-4 py-3 bg-skin-fill-muted w-full text-skin-base rounded my-1 font-sans focus:outline-base mb-2 mx-2 focus:ring-0 focus:border-none focus:outline-offset-0 sm:mx-0"
          placeholder="SKU"
        />
        <input
          type="number"
          className="px-4 py-3 bg-skin-fill-muted w-full text-skin-base rounded my-1 font-sans focus:outline-base mb-2 mx-2 focus:ring-0 focus:border-none focus:outline-offset-0 sm:mx-0"
          placeholder="Quantity"
        />
        <input
          type="number"
          className="px-4 py-3 bg-skin-fill-muted w-full text-skin-base rounded my-1 font-sans focus:outline-base mb-2 mx-2 focus:ring-0 focus:border-none focus:outline-offset-0 sm:mx-0"
          placeholder="Unit Price"
          value={value}
          onChange={(e) => {
            setValue(+e.target.value);
          }}
        />
        <input
          type="number"
          className="px-4 py-3 bg-skin-fill-muted w-full text-skin-base rounded my-1 font-sans focus:outline-base mb-2 mx-2 focus:ring-0 focus:border-none focus:outline-offset-0 sm:mx-0"
          placeholder="Tax Rate"
        />
        <div className="flex items-center">
          <div className="flex  cursor-pointer" onClick={setShowAction}>
            {showMore === "hidden" ? (
              <IoMdArrowDropdownCircle className="text-base text-4xl" />
            ) : (
              <IoMdArrowDropupCircle className="text-base text-4xl" />
            )}
          </div>
          <div className="flex text-base   cursor-pointer">
            <AiFillDelete className="text-inherit text-3xl " />
          </div>
        </div>
      </div>
      <div className={`flex items-center w-4/5 sm:w-full ${showMore}`}>
        <input
          type="text"
          className="px-4 py-3 bg-skin-fill-muted text-skin-base w-2/5 rounded my-1 font-sans focus:outline-base mb-2  focus:ring-0 focus:border-none focus:outline-offset-0 sm:mx-0"
          placeholder="HSN"
        />
        <input
          type="number"
          className="px-4 py-3 bg-skin-fill-muted text-skin-base w-2/5  rounded my-1 font-sans focus:outline-base mb-2 mx-2 focus:ring-0 focus:border-none focus:outline-offset-0 sm:mx-2"
          placeholder="Discount"
        />
        <input
          type="number"
          className="px-4 py-3 bg-skin-fill-muted text-skin-base w-2/3 rounded my-1 font-sans focus:outline-base mb-2 mx-2 focus:ring-0 focus:border-none focus:outline-offset-0 sm:mx-0"
          placeholder="Product Category"
        />
      </div>
      <hr className="my-2"></hr>
    </>
  );
};
