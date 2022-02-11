import React from "react";
import { Link } from "react-router-dom";

function ResetPassword() {
  return (
    <div className="p-4 box-border max-w-screen overflow-hidden">
      <div className="bg-light min-h-screen bg-cover flex items-center pl-[10vw] sm:pl-0 w-screen">
        <div>
          <h1 className="font-sans text-6xl text-skin-secondary font-medium tracking-tight">
            Reset Password
          </h1>
          <h3 className="font-sans text-xl text-skin-muted mb-4 sm:text-lg sm:ml-2">
            Enter the new password
          </h3>
          <form className="flex flex-col">
            <input
              autoFocus
              type="password"
              placeholder="Enter password"
              className="px-4 py-3 bg-skin-fill-muted w-96 sm:w-11/12 sm:ml-2 rounded my-1 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2"
              // value={credentials.email}
              // onChange={(e) =>
              //   setCredentials({ ...credentials, email: e.target.value })
              // }
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="px-4 py-3 bg-skin-fill-muted w-96 sm:w-11/12 sm:ml-2 rounded my-1 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2"
              // value={credentials.email}
              // onChange={(e) =>
              //   setCredentials({ ...credentials, email: e.target.value })
              // }
            />
            <input
              type="text"
              placeholder="Enter OTP"
              className="px-4 py-3 bg-skin-fill-muted w-96 rounded my-1 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2"
              //TODO: Validate OTP
              // value={valueOTP.OTP}
              // onChange={(e) =>
              //   setValueOTP({ ...valueOTP, OTP: e.target.value })
              // }
            />
          </form>
          <button
            // onClick={onSubmit}
            className="px-4 py-3 bg-skin-button-base text-skin-inverted w-96 sm:w-11/12 sm:ml-2 rounded my-1 font-sans font-medium"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResetPassword;
