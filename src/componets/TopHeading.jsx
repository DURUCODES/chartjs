import React from "react";
import logo from "../assets/images/logo.svg";
const TopHeading = () => {
  return (
    <div className="flex justify-between items-center p-6 w-full bg-soft-red rounded-xl">
      <div className="text-white">
        <p>My balance</p>
        <h2 className="font-bold text-2xl">$921.48</h2>
      </div>
      <div>
        <img src={logo} />
      </div>
    </div>
  );
};

export default TopHeading;
