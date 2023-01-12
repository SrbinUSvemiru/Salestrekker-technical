import React, { useState, useEffect } from "react";
import IncomeDetailesPage from "./Components/IncomeDetailesPage";
import IncomeOverviewPage from "./Components/IncomeOverviewPage";
import "./index.css";

const App = () => {
  const [clickedPage, setClickedPage] = useState("income");
  const [selectedIncomeRange, setSelectedIncomeRange] = useState("Weekly");
  const [selectedIncomeType, setSelectedIncomeType] = useState(null);
  const [inputedIncomeValue, setInputedIncomeValue] = useState();

  return (
    <div className="app">
      <div className="absolute w-[100%] h-[100%] top-0 right-[0]  ">
        <img src="./svg/tilt.svg" className="h-full " />
      </div>
      <div
        className={
          clickedPage === "income"
            ? "pageContainer bg-gradient-to-br from-slate-800 to-slate-500"
            : "pageContainer bg-gradient-to-br from-[#39c7b2] to-[#5be9d1] "
        }
      >
        <div className="absolute w-[300%] h-[70%] bottom-0 right-[0] z-[-1] rotate-180">
          <img src="./svg/wavesOpacity.svg" className="h-full " />
        </div>
        <div className=" flex  items-center justify-start w-full">
          <button
            className={
              clickedPage === "income-detailes"
                ? "btn shadow-[inset_0_2px_10px_0_rgb(0,0,0,0.3)] bg-slate-800  text-slate-300 rounded-br-md"
                : "btn text-slate-500"
            }
            onClick={() => setClickedPage("income")}
          >
            Income detailes
          </button>
          <button
            className={
              clickedPage === "income"
                ? "btn shadow-[inset_0_2px_10px_0_rgb(0,0,0,0.3)] grow bg-[#4be1c9]  text-slate-300 rounded-bl-md"
                : "btn grow  text-slate-500 "
            }
            onClick={() => setClickedPage("income-detailes")}
          >
            Income
          </button>
        </div>
        <IncomeDetailesPage
          selectedIncomeRange={selectedIncomeRange}
          setSelectedIncomeRange={setSelectedIncomeRange}
          clickedPage={clickedPage}
          selectedIncomeType={selectedIncomeType}
          setSelectedIncomeType={setSelectedIncomeType}
        />
        <IncomeOverviewPage clickedPage={clickedPage} />
      </div>
    </div>
  );
};

export default App;
