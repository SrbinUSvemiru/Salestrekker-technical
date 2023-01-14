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
  const [clickedListOption, setClickedListOption] = useState();

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
        <div className=" w-full mx-auto py-5 max-w-[800px] mt-5  "></div>
        <div className=" w-full mx-auto py-5 max-w-[800px] mt-5  ">
          <div className="w-full  font-medium  py-3    rounded z-10 bg-[#fff] shadow-md">
            <div className="w-full  flex px-4 py-3  text-slate-500  ">
              <p className="w-[25%] py-2 ">Frequency</p>
              <p className="w-[25%] py-2">Gross Income</p>
              <p className="w-[25%] py-2">Tax</p>
              <p className="w-[25%] py-2">Net Income</p>
            </div>

            <div className="w-full  px-2  ">
              {Object.values(calculatedIncomeValues).map((element, index) => (
                <div
                  className={
                    index % 2 !== 0
                      ? "flex  justify-start   text-slate-500  border-t-slate-300 border-t-[1px] px-3 cursor-pointer hover:bg-[#f3ffd0]"
                      : "flex  justify-start   text-slate-500  bg-slate-50 border-t-slate-300 border-t-[1px] px-3 cursor-pointer hover:bg-[#f3ffd0]"
                  }
                  key={index}
                  onClick={() => setClickedListOption(element[index])}
                >
                  <p className="  py-2 w-full">{element.frequency}</p>
                  <p className="  py-2 w-full font-normal">
                    ${element.grossValue}
                  </p>
                  <p className="  py-2 w-full font-normal">${element.tax}</p>
                  <p className="  py-2 w-full font-normal">
                    ${element.netValue}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default IncomeOverviewPage;
