import React from "react";

const Home = () => {
  return (
    <div className="flex flex-row justify-evenly items-center m-6">
      <div className="bg-gray-400 flex flex-col p-6 rounded-md">
        Total Invoices
      </div>
      <div className="bg-green-400 flex flex-col p-6 rounded-md">
        Paid Invoices
      </div>
      <div className="bg-red-400 flex flex-col p-6 rounded-md">
        Unpaid Invoices
      </div>
    </div>
  );
};

export default Home;
