// ** Import React
import React from "react";

// ** Import Route
import PrivateRoute from "../../route/PrivateRoute";

// ** Import Components
import Sidebar from "@/components/sidebar/Sidebar";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivateRoute page="user" redirect="/">
      <div className="flex">
        <Sidebar />

        <div className="flex-1 bg-gray-100 min-h-[100vh]">{children}</div>
      </div>
    </PrivateRoute>
  );
};

export default UserLayout;
