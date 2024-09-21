import React from "react";

const Bottom = () => {
  return (
    <div className="mt-6 ">
      <hr />
      <div className="flex justify-between my-4  items-center">
        <div className="">
          <p className="text-med-brown">Total this month</p>
          <h1 className="text-4xl mt-2 text-dark-brown font-bold">$478.33</h1>
        </div>
        <div>
          <strong>+2.4%</strong>
          <p className="text-med-brown">from last month</p>
        </div>
      </div>
    </div>
  );
};

export default Bottom;
