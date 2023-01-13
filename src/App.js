import React, { useState, useEffect } from "react";
import IncomeDetailesPage from "./Components/IncomeDetailesPage";
import IncomeOverviewPage from "./Components/IncomeOverviewPage";
import "./index.css";

const App = () => {
  const [clickedPage, setClickedPage] = useState("income");
  const [selectedIncomeRange, setSelectedIncomeRange] = useState("weekly");
  const [selectedIncomeType, setSelectedIncomeType] = useState(null);
  const [inputedIncomeValue, setInputedIncomeValue] = useState(null);
  const [inputedValueString, setInputedValueString] = useState();
  const [conditionsForCalculation, setConditionsForCalculation] =
    useState(true);

  useEffect(() => {
    if (
      selectedIncomeType !== null &&
      inputedIncomeValue !== null &&
      inputedIncomeValue > 100
    ) {
      setConditionsForCalculation(true);
    } else {
      setConditionsForCalculation(false);
    }
  }, [selectedIncomeType, inputedIncomeValue]);

  const handleInput = (event) => {
    setInputedIncomeValue(event.target.value);
  };

  return (
    <div className="app">
      <div
        className={
          clickedPage === "income"
            ? "pageContainer bg-gradient-to-br from-stone-50 to-stone-100"
            : "pageContainer bg-gradient-to-br from-[#39c7b2] to-[#5be9d1] "
        }
      >
        <div className=" flex  items-center justify-start w-full">
          <button
            className={
              clickedPage === "income-detailes"
                ? "btn shadow-[inset_0_2px_10px_0_rgb(0,0,0,0.3)] bg-[#fddd92]  text-slate-300 rounded-br-md"
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
          setClickedPage={setClickedPage}
          selectedIncomeType={selectedIncomeType}
          setSelectedIncomeType={setSelectedIncomeType}
          handleInput={handleInput}
          inputedIncomeValue={inputedIncomeValue}
          conditionsForCalculation={conditionsForCalculation}
        />
        <IncomeOverviewPage
          clickedPage={clickedPage}
          selectedIncomeRange={selectedIncomeRange}
          selectedIncomeType={selectedIncomeType}
          inputedIncomeValue={inputedIncomeValue}
          conditionsForCalculation={conditionsForCalculation}
        />
      </div>
    </div>
  );
};

export default App;
