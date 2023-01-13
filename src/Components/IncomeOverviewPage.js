import React, { useState, useEffect } from "react";
import { calculateIncome } from "../Utilities/Utilities";

function IncomeOverviewPage({
  clickedPage,
  selectedIncomeRange,
  selectedIncomeType,
  inputedIncomeValue,
  conditionsForCalculation,
}) {
  const [calculatedIncomeValues, setCalculatedIncomeValues] = useState();

  useEffect(() => {
    if (conditionsForCalculation)
      setCalculatedIncomeValues(
        calculateIncome(
          selectedIncomeRange,
          selectedIncomeType,
          inputedIncomeValue
        )
      );
  }, [
    selectedIncomeRange,
    selectedIncomeType,
    inputedIncomeValue,
    conditionsForCalculation,
  ]);

  if (calculatedIncomeValues)
    return (
      <div
        className={
          clickedPage === "income-detailes"
            ? "w-full p-3 min-h-[550px]"
            : "hidden"
        }
      >
        <div className=" w-full mx-auto py-5 max-w-[600px] mt-5 ">
          <div className="w-full  font-medium  py-3   text-white  rounded z-10 bg-stone-100 px-2">
            <div className="w-full bg-stone-100 flex px-2   text-slate-500 border-b-slate-300 border-b-[1px] ">
              <p className="w-[25%] py-2 ">Frequency</p>
              <p className="w-[25%] py-2">Gross Income</p>
              <p className="w-[25%] py-2">Tax</p>
              <p className="w-[25%] py-2">Net Income</p>
            </div>

            <div className="w-full  px-2 ">
              {Object.values(calculatedIncomeValues).map((element) => (
                <div className="  flex  justify-start   text-slate-500 border-b-slate-300 border-b-[1px]">
                  <p className="  py-2 w-full">{element.frequency}</p>
                  <p className="  py-2 w-full">{element.grossValue}</p>
                  <p className="  py-2 w-full">{element.tax}</p>
                  <p className="  py-2 w-full">{element.netValue}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default IncomeOverviewPage;
