import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopBar from "../components/TopBar";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-skin-fill-main">
      <Sidebar />
      <div className="grow">
        <TopBar />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
