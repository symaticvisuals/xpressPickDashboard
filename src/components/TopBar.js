import React from "react";
import logo from "../assets/images/logo-dark.png";
import logoDark from "../assets/images/logo-light.png";
import { FaWallet, FaRupeeSign } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useState } from "react";
import { modeProvider } from "../App";

import { Link } from "react-router-dom";
function TopBar() {
  const [popup, setPopup] = useState(false);
  const { mode, setMode } = React.useContext(modeProvider);
  const changeMode = () => {
    if (mode === "theme-dark") {
      setMode("");
    } else {
      setMode("theme-dark");
    }
  };
  return (
    <div className="h-auto border-b p-4 bg-skin-base max-w-full">
      <div className="flex justify-between">
        {mode === "theme-dark" ? (
          <Link to="/">
            <img src={logoDark} alt="logo" className="w-22" />
          </Link>
        ) : (
          <Link to="/">
            <img src={logo} alt="logo" className="w-22" />
          </Link>
        )}

        <div className="flex justify-around">
          <button className="px-4 py-1  border-base w-auto rounded my-1 font-sans font-regular border-2 text-skin-base mr-4  sm:hidden">
            Schedule Training
          </button>
          <button className="px-4 py-1 bg-skin-button-base text-skin-inverted w-auto rounded my-1 font-sans font-light mr-4 hover:bg-skin-button-base-hover  sm:hidden">
            Recharge
          </button>
          <div className="flex items-center">
            <FaWallet
              className="text-skin-base text-2xl hover:text-skin-dark"
              onClick={(e) => {
                e.preventDefault();
                setPopup(true);
              }}
            />

            <MdCall className="text-skin-base text-2xl mx-4 hover:text-skin-dark" />
          </div>
          <div className="flex items-center sm:hidden">
            <div className="flex-col justify-center">
              <h4 className="font-sans text-xl text-skin-base">
                Deepanshu Goel
              </h4>
              <h6 className="font-sans text-lg leading-3 text-skin-base">
                Amazon
              </h6>
            </div>
            <MdKeyboardArrowDown className="text-skin-base text-2xl mx-2 hover:text-skin-dark" />
          </div>
          <button
            onClick={changeMode}
            className="sm:hidden px-4 py-1 bg-skin-button-base text-skin-inverted w-auto rounded my-1 font-sans font-light mr-4 hover:bg-skin-button-base-hover">
            Mode
          </button>
        </div>
      </div>
      {popup ? (
        <div className="flex justify-center">
          <div
            className="absolute inset-0 bg-gray-800 bg-opacity-50 overflow-y-auto h-full w-full block"
            onClick={(e) => {
              e.preventDefault();
              setPopup(false);
            }}></div>
          <div className="fixed w-96 top-24">
            <div className="bg-skin-fill py-5 rounded-t-2xl">
              <div className="mt-3 text-center">
                <h3 className="text-2xl leading-6 font-sans font-medium text-skin-inverted">
                  Wallet
                </h3>
                <div className="px-7 py-3">
                  <p className="text-sm text-skin-inverted font-sans">
                    Wallet money is used for payment
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-skin-fill-muted py-5 px-5 rounded-b-2xl">
              <div className="">
                <h3 className="text-3xl leading-6 font-medium text-skin-dark flex items-end">
                  <FaRupeeSign className="text-xl" />0
                </h3>
                <div className="mt-2 py-3">
                  <p className="text-md text-skin-dark">
                    Add money to your wallet using Razorpay
                  </p>
                  <button className="px-4 py-1 bg-skin-button-base text-skin-inverted w-auto rounded my-1 font-sans font-light mr-4 hover:bg-skin-button-base-hover">
                    Add Money
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default TopBar;
