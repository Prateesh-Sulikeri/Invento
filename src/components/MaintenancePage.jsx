import React from "react";
import hero from "../../public/images/hero1.png"

const MaintenancePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold mb-4 text-center">Website Under Maintenance</h1>
        <p className="text-gray-700 mb-4 text-center">
          We are sorry for the inconvenience, but our website is currently under maintenance.
          Please check back later.
        </p>
        <img
          className="mx-auto mb-4"
          src={hero}
          alt="Under Maintenance"
        />
        <p className="text-gray-700 text-center">
          For urgent queries, please contact us at invento2k24@gmail.com.
        </p>
      </div>
    </div>
  );
};

export default MaintenancePage;
