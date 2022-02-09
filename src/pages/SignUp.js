import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { getApi } from "../utils/apis";
import Lottie from "lottie-react";
import * as animationData from "../assets/lf30_editor_t2l9yudc.json";

import { Link } from "react-router-dom";
function SignUp() {
  const [inputOTP] = useState(true);

  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    country_code: "+91",
    mobile_number: "",
    enc_password: "",
    address: "",
    city: "",
    pincode: "",
    state: "",
    country: "",
    organization_name: "",
  });

  const onSubmit = () => {
    Cookies.set("isLoggedIn", true);
    console.log(credentials);

    axios
      .post(getApi("/users"), {
        name: credentials.name,
        email: credentials.email,
        country_code: credentials.country_code,
        mobile_number: credentials.mobile_number,
        enc_password: credentials.enc_password,
        address: credentials.address,
        city: credentials.city,
        pincode: credentials.pincode,
        state: credentials.state,
        country: credentials.country,
        organization_name: credentials.organization_name,
      })
      .then((res) => {
        console.log(res);
        Cookies.set("jwtToken", res.data.data.jwtToken);
        Cookies.set("user", JSON.stringify(res.data.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
  };

  return (
    <div className="bg-glassmorphism bg-right bg-no-repeat  min-h-screen bg-cover flex items-center pl-[10vw] sm:pl-0 box-border max-w-[100vw] overflow-hidden">
      <div>
        <h1 className="font-sans text-5xl text-skin-secondary font-medium tracking-tight sm:text-4xl sm:ml-2">
          Create An Account
        </h1>
        <h3 className="font-sans text-xl text-skin-muted mb-4 sm:text-lg sm:ml-2">
          Already have an Account?{" "}
          <Link to="/" className="hover:underline">
            Login
          </Link>
        </h3>
        {inputOTP ? (
          <div>
            <form className="flex flex-col">
              <input
                autoFocus
                type="text"
                placeholder="Full Name"
                className="px-4 py-3 bg-skin-fill-muted w-96 rounded my-1 sm:w-11/12 sm:ml-2 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2"
                value={credentials.name}
                onChange={(e) =>
                  setCredentials({ ...credentials, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email ID"
                className="px-4 py-3 bg-skin-fill-muted w-96 rounded my-1 sm:w-11/12 sm:ml-2 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
              />
              <div className="flex items-center sm:w-11/12 sm:ml-2">
                <input
                  type="text"
                  placeholder="+91"
                  className="px-3 py-3 bg-skin-fill-muted w-14 rounded my-1  font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2"
                  value={credentials.country_code}
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      country_code: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="px-4 py-3 bg-skin-fill-muted w-80 rounded my-1  font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2 ml-2"
                  value={credentials.mobile_number}
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      mobile_number: e.target.value,
                    })
                  }
                />
              </div>
              <input
                type="password"
                placeholder="Password"
                className="px-4 py-3 bg-skin-fill-muted w-96 rounded my-1 sm:w-11/12 sm:ml-2 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2"
                value={credentials.enc_password}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    enc_password: e.target.value,
                  })
                }
              />
              <input
                type="text"
                placeholder="Address"
                className="px-4 py-3 bg-skin-fill-muted w-96 rounded my-1 sm:w-11/12 sm:ml-2 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2"
                value={credentials.address}
                onChange={(e) =>
                  setCredentials({ ...credentials, address: e.target.value })
                }
              />
              <div>
                <input
                  type="text"
                  placeholder="City"
                  className="px-4 py-3 bg-skin-fill-muted w-60 rounded my-1 sm:w-11/12 sm:ml-2 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2"
                  value={credentials.city}
                  onChange={(e) =>
                    setCredentials({ ...credentials, city: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Pincode"
                  className="px-4 py-3 bg-skin-fill-muted w-32 rounded my-1 sm:w-11/12 sm:ml-2 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2 ml-4"
                  value={credentials.pincode}
                  onChange={(e) =>
                    setCredentials({ ...credentials, pincode: e.target.value })
                  }
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="State"
                  className="px-4 py-3 bg-skin-fill-muted w-48 rounded my-1 sm:w-11/12 sm:ml-2 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2"
                  value={credentials.state}
                  onChange={(e) =>
                    setCredentials({ ...credentials, state: e.target.value })
                  }
                />
                <input
                  type="text"
                  placeholder="Country"
                  className="px-4 py-3 bg-skin-fill-muted w-44 rounded my-1 sm:w-11/12 sm:ml-2 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2 ml-4"
                  value={credentials.country}
                  onChange={(e) =>
                    setCredentials({ ...credentials, country: e.target.value })
                  }
                />
              </div>
              <input
                type="text"
                placeholder="Organization"
                className="px-4 py-3 bg-skin-fill-muted w-96 rounded my-1 sm:w-11/12 sm:ml-2 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2"
                value={credentials.organization_name}
                onChange={(e) =>
                  setCredentials({
                    ...credentials,
                    organization_name: e.target.value,
                  })
                }
              />
            </form>
            <button
              onClick={onSubmit}
              className="px-4 py-3 bg-skin-button-base text-skin-inverted sm:w-11/12 sm:ml-2 w-96 rounded my-1 font-sans font-medium">
              Get OTP
            </button>
          </div>
        ) : (
          <div>
            <form className="flex flex-col">
              <input
                type="text"
                placeholder="Enter OTP"
                className="px-4 py-3 bg-skin-fill-muted w-96 rounded my-1 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2"
                //TODO: Validate OTP
              />
            </form>
            <button
              onClick={onSubmit}
              className="px-4 py-3 bg-skin-button-base text-skin-inverted rounded my-1 font-sans font-medium mr-1">
              Resend
            </button>
            <button
              onClick={onSubmit}
              className="px-4 py-3 bg-skin-button-base text-skin-inverted rounded my-1 font-sans font-medium ml-1">
              Validate
            </button>
          </div>
        )}
      </div>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
}

export default SignUp;
