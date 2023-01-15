import React, { useState, useEffect } from "react";
import { calculateIncome } from "../Utilities/Utilities";

function IncomeOverviewPage({
  clickedPage,
  conditionsForCalculation,
  finalValuesObject,
  selectedIncomeType,
  selectedIncomeRange,
}) {
  const [calculatedIncomeValues, setCalculatedIncomeValues] = useState();
  const [clickedListOption, setClickedListOption] = useState(null);

  useEffect(() => {
    if (conditionsForCalculation)
      setCalculatedIncomeValues(calculateIncome(finalValuesObject));
    setClickedListOption(selectedIncomeRange);
  }, [finalValuesObject]);

  return (
    <>
      {calculatedIncomeValues ? (
        <div
          className={
            clickedPage === "income-detailes"
              ? "w-full p-3 min-h-[600px] "
              : "hidden"
          }
        >
          <div className=" w-full mx-auto py-5 max-w-[800px]  bg-white  mt-[3rem] font-medium text-slate-300 flex flex-col sm:flex-row  items-center rounded-md shadow-md ">
            <p className="bg-gradient-to-br mb-2 sm:mb-0 sm:ml-5 from-[#3eeaca] to-[#33dcc0] text-stone-50 sm:text-[2rem] text-[1.5rem] py-2 px-4 rounded-md shadow-[0px_1px_10px_2px_rgba(0,0,0,0.1)]">
              $
              {calculatedIncomeValues[clickedListOption]?.[
                `${selectedIncomeType}Value`
              ]?.toLocaleString()}
            </p>
            <p className="sm:ml-5 text-slate-600 sm:text-[1.5rem] text-[1.2rem]">
              your {selectedIncomeType}{" "}
              <span className="text-[#40ceb4]">
                {calculatedIncomeValues[
                  clickedListOption
                ]?.frequency.toLowerCase() === "annually"
                  ? calculatedIncomeValues[clickedListOption]?.frequency
                      .toLowerCase()
                      .slice(0, 7)
                  : calculatedIncomeValues[
                      clickedListOption
                    ]?.frequency.toLowerCase()}
              </span>{" "}
              income
            </p>
          </div>
          <div className=" w-full mx-auto py-5 max-w-[800px] overflow-auto mt-2  ">
            <div className="w-full  font-medium  py-3  min-w-[500px]   rounded z-10 bg-[#fff] shadow-md">
              <div className="w-full  flex px-4 py-3  text-slate-500  ">
                <p className="w-[25%] py-2 ">Frequency</p>
                <p className="w-[25%] py-2">Gross Income</p>
                <p className="w-[25%] py-2">Tax</p>
                <p className="w-[25%] py-2">Net Income</p>
              </div>

              <div className="w-full  px-2  ">
                {Object.values(calculatedIncomeValues)?.map(
                  (element, index) => (
                    <div
                      className={
                        index % 2 !== 0
                          ? "flex  justify-start   text-slate-500  border-t-slate-300 border-t-[1px] px-3 cursor-pointer hover:bg-[#f3ffd0]"
                          : "flex  justify-start   text-slate-500  bg-slate-50 border-t-slate-300 border-t-[1px] px-3 cursor-pointer hover:bg-[#f3ffd0]"
                      }
                      key={index}
                      onClick={() =>
                        setClickedListOption(element.frequency.toLowerCase())
                      }
                    >
                      <p
                        className={
                          element.frequency.toLowerCase() === clickedListOption
                            ? "py-2 w-full text-[#33dcc0]"
                            : "py-2 w-full text-slate-500"
                        }
                      >
                        {element.frequency}{" "}
                      </p>
                      <p
                        className={
                          element.frequency.toLowerCase() === clickedListOption
                            ? "py-2 w-full text-[#33dcc0]"
                            : "py-2 w-full text-slate-500"
                        }
                      >
                        ${element.grossValue?.toLocaleString()}
                      </p>
                      <p
                        className={
                          element.frequency.toLowerCase() === clickedListOption
                            ? "py-2 w-full text-[#33dcc0]"
                            : "py-2 w-full text-slate-500"
                        }
                      >
                        ${element.tax?.toLocaleString()}
                      </p>
                      <p
                        className={
                          element.frequency.toLowerCase() === clickedListOption
                            ? "py-2 w-full text-[#33dcc0]"
                            : "py-2 w-full text-slate-500"
                        }
                      >
                        ${element.netValue?.toLocaleString()}
                      </p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className={
            clickedPage === "income-detailes"
              ? "w-full p-3 min-h-[600px] "
              : "hidden"
          }
        >
          <div className=" w-full mx-auto py-5 max-w-[800px]  bg-white  mt-[3rem] font-medium text-slate-300 flex flex-col sm:flex-row  items-center rounded-md shadow-md ">
            <p className="sm:ml-5 text-[#e7b46d] sm:text-[1.5rem] text-[1.2rem]">
              Go back, input values and calculate...
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default IncomeOverviewPage;
