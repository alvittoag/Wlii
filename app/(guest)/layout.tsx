// ** Import React
import React from "react";

// ** Import Components
import Footer from "@/components/guest/Footer";
import Navbar from "@/components/guest/navbar/Navbar";
import PrivateRoute from "@/route/PrivateRoute";

const GuestLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrivateRoute page="auth" redirect="/dashboard">
      <div className="flex flex-col justify-between gap-[110px] h-[100vh]">
        <Navbar />

        {children}

        <Footer />
      </div>
    </PrivateRoute>
  );
};

export default GuestLayout;
