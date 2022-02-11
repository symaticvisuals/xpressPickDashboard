import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

import Dashboard from "../pages/Dashboard";
import CustomOrders from "../components/Orders/CustomOrders";
import Home from "../pages/Dashboard/Home";
import Passbook from "../pages/Passbook";
import Orders from "../pages/Orders";
import ForgotPassword from "../pages/ForgotPassword";
import ResetPassword from "../pages/ResetPassword";
function WrapperRouter(props) {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/orders" element={<CustomOrders />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="home" element={<Home />} />
            <Route path="orders" element={<Orders />} />
            <Route path="products" element={<CustomOrders />} />
            <Route path="invoices" element={<CustomOrders />} />
            <Route path="customers" element={<CustomOrders />} />
            <Route path="settings" element={<CustomOrders />} />
            <Route path="users" element={<CustomOrders />} />
            <Route path="reports" element={<CustomOrders />} />
            <Route path="support" element={<CustomOrders />} />
            <Route path="passbook" element={<Passbook />} />
          </Route>
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </Router>
    </>
  );
}

WrapperRouter.propTypes = {};

export default WrapperRouter;
