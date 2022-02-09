import Cookies from "js-cookie";
import React, { useState } from "react";
import axios from "axios";
import { getApi } from "../utils/apis";
import { Link } from "react-router-dom";

function SignIn() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const onSubmit = () => {
    Cookies.set("isLoggedIn", true);
    console.log(credentials);

    axios
      .post(getApi("/users/signIn"), {
        email: credentials.email,
        password: credentials.password,
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

  return (
    <div className="bg-light min-h-screen bg-cover flex items-center pl-[10vw]">
      <div>
        <h1 className="font-sans text-6xl text-skin-secondary font-medium tracking-tight">
          Login
        </h1>
        <h3 className="font-sans text-xl text-skin-muted mb-4">
          Don't have an Account?{" "}
          <Link to="/signup" className="hover:underline">
            Create one
          </Link>
        </h3>
        <form className="flex flex-col">
          <input
            autoFocus
            type="email"
            placeholder="Email ID"
            className="px-4 py-3 bg-skin-fill-muted w-96 rounded my-1 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2"
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="px-4 py-3 bg-skin-fill-muted w-96 rounded my-1 font-sans focus:ring-0 focus:border-none focus:outline-base focus:outline-offset-0 mb-2"
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
          <div className="flex justify-between items-center">
            <label className="my-1 font-sans">
              <input type="checkbox" className="" />
              &nbsp; Remember me
            </label>
            <h6 className="font-sans">Forgot Password?</h6>
          </div>
        </form>
        <button
          onClick={onSubmit}
          className="px-4 py-3 bg-skin-button-base text-skin-inverted w-96 rounded my-1 font-sans font-medium">
          Login
        </button>
      </div>
    </div>
  );
}

export default SignIn;
