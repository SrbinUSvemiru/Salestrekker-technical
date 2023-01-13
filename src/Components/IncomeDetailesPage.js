import React, { useState } from "react";
import useComponentVisible from "../Utilities/Utilities";

function IncomeDetailesPage({
  selectedIncomeRange,
  setSelectedIncomeRange,
  selectedIncomeType,
  setSelectedIncomeType,
  clickedPage,
  handleInput,
  conditionsForCalculation,
  setClickedPage,
  inputedIncomeValue,
}) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleListButtonClick = (event) => {
    setSelectedIncomeRange(event.target.value);
    setIsComponentVisible(false);
  };

  const handleIncomeBtnClick = (event) => {
    setSelectedIncomeType(event.target.value);
  };

  return (
    <div
      className={
        clickedPage === "income" ? "w-full p-3 min-h-[550px] " : "hidden"
      }
    >
      <div className="w-full  font-medium flex justify-center items-center py-8  text-slate-300  rounded z-10  ">
        <svg
          className="w-[60px]"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
          />
        </svg>

        <p className="text-[25px] leading-7 text-slate-300">
          Income tax calculator
        </p>
      </div>
      <div className=" w-full mx-auto py-8 max-w-[700px]  ">
        <div className="text-slate-700 rounded shadow-md w-full py-8  px-5 bg-[#fff] z-10">
          <p className="font-medium mb-3">What is your total income?</p>
          <div className="flex justify-end items-center relative border-2 rounded-md  px-[1px] py-[1px]">
            <div className=" rounded-l-md h-[25px] grow ">
              <input
                onChange={handleInput}
                type="number"
                placeholder="e.g 15,000"
                className="w-full pl-3 h-full rounded-l-md shadow-[inset_0_2px_10px_0_rgb(0,0,0,0.1)] focus:outline-pink-500 placeholder:font-light placeholder:italic placeholder:text-s focus:bg-sky-100 invalid:border-pink-500"
              />
            </div>
            <div>
              <p
                className="bg-slate-300 rounded-r-md px-2 h-full cursor-pointer grow"
                onClick={() => setIsComponentVisible(true)}
              >
                {selectedIncomeRange.charAt(0).toUpperCase() +
                  selectedIncomeRange.slice(1)}
              </p>
            </div>
            <div className="visibleList" ref={ref}>
              {isComponentVisible && (
                <>
                  <button
                    className="listBtn"
                    value="weekly"
                    onClick={handleListButtonClick}
                  >
                    Weekly
                  </button>
                  <button
                    className="listBtn"
                    value="fortnightly"
                    onClick={handleListButtonClick}
                  >
                    Fortnightly
                  </button>
                  <button
                    className="listBtn"
                    value="monthly"
                    onClick={handleListButtonClick}
                  >
                    Monthly
                  </button>
                  <button
                    className="listBtn"
                    value="annually"
                    onClick={handleListButtonClick}
                  >
                    Annually
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="text-slate-700 rounded shadow-md w-full py-8  px-5 mt-7 bg-white ">
          <p className="font-medium mb-3">Please choose income type</p>
          <div className="flex flex-col sm:flex-row justify-between ">
            <button
              className={
                selectedIncomeType === "gross"
                  ? "incomeBtn   pointer-events-none text-white before:top-0 before:shadow-[inset_0px_0px_10px_5px_rgb(7,255,255,0.3)]"
                  : "incomeBtn  "
              }
              value="gross"
              onClick={handleIncomeBtnClick}
            >
              Gross
            </button>
            <button
              className={
                selectedIncomeType === "net"
                  ? "incomeBtn mt-2  pointer-events-none text-white sm:mt-0 before:top-0 before:shadow-[inset_0px_0px_10px_5px_rgb(7,255,255,0.3)]"
                  : "incomeBtn mt-2 sm:mt-0 "
              }
              value="net"
              onClick={handleIncomeBtnClick}
            >
              Net
            </button>
          </div>
        </div>
        <div className="text-slate-700  w-full py-3  mt-7 flex justify-center ">
          <button
            onClick={() => setClickedPage("income-detailes")}
            className={
              conditionsForCalculation
                ? "calculateBtn   text-white before:left-0 before:shadow-[inset_0px_0px_10px_5px_rgb(7,255,255,0.3)] scale-[1.1] shadow-[12px_30px_21px_-4px_rgba(0,0,0,0.1)]"
                : "calculateBtn pointer-events-none shadow-md"
            }
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncomeDetailesPage;
