import React, { useState, useEffect } from "react";
import IncomeDetailesPage from "./Components/IncomeDetailesPage";
import IncomeOverviewPage from "./Components/IncomeOverviewPage";
import "./index.css";

const App = () => {
  const [clickedPage, setClickedPage] = useState("income");
  const [selectedIncomeRange, setSelectedIncomeRange] = useState("Weekly");

  return (
    <div className="container bg-gradient-to-br from-slate-800 to-slate-500 w-screen h-screen flex justify-center  p-5 relative">
      <div className=" bg-gradient-to-br from-[#fdd789] to-[#faba72] w-full  rounded-md shadow-xl overflow-hidden z-10 relative max-w-screen-sm h-fit">
        <div className="absolute w-[300%] h-[70%] bottom-0 right-[0] z-[-1] rotate-180">
          <img src="./svg/wavesOpacity.svg" className="h-full " />
        </div>
        <div className=" flex  items-center justify-start w-full">
          <button
            className={
              clickedPage === "income-detailes"
                ? "btn shadow-[inset_0_2px_10px_0_rgb(0,0,0,0.1)]  text-slate-300 rounded-br-md"
                : "btn text-slate-500"
            }
            onClick={() => setClickedPage("income")}
          >
            Income detailes
          </button>
          <button
            className={
              clickedPage === "income"
                ? "btn shadow-[inset_0_2px_10px_0_rgb(0,0,0,0.1)] grow bg-gradient-to-r from-indigo-100 text-slate-300 rounded-bl-md"
                : "btn grow  text-slate-500 bg-white "
            }
            onClick={() => setClickedPage("income-detailes")}
          >
            Income
          </button>
        </div>
        <IncomeDetailesPage
          selectedIncomeRange={selectedIncomeRange}
          setSelectedIncomeRange={setSelectedIncomeRange}
        />
        <IncomeOverviewPage />
      </div>
    </div>
  );
};

export default App;
