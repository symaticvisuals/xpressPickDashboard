import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Dashboard from "../pages/Dashboard";
import Orders from "../pages/Orders";
import Home from "../pages/Dashboard/Home";
import Passbook from "../pages/Passbook";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
function WrapperRouter(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Orders />} />
          <Route path="invoices" element={<Orders />} />
          <Route path="customers" element={<Orders />} />
          <Route path="settings" element={<Orders />} />
          <Route path="users" element={<Orders />} />
          <Route path="reports" element={<Orders />} />
          <Route path="support" element={<Orders />} />
          <Route path="passbook" element={<Passbook />} />
        </Route>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </Router>
  );
}

WrapperRouter.propTypes = {};

export default WrapperRouter;
