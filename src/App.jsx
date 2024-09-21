import React from "react";
import TopHeading from "./componets/TopHeading";
import ChartCom from "./componets/ChartCom";
import Bottom from "./componets/Bottom";

function App() {
  return (
    <div className="container mx-auto w-96 mt-14 md:w-600">
      <TopHeading />
      <div className="bg-white p-8 my-5 rounded-xl">
        <ChartCom />
        <Bottom />
      </div>
    </div>
  );
}

export default App;
