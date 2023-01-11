import React, { useState } from "react";
import useComponentVisible from "../Utilities/Utilities";

function IncomeDetailesPage({ selectedIncomeRange, setSelectedIncomeRange }) {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const handleListButtonClick = (event) => {
    setSelectedIncomeRange(event.target.value);
    setIsComponentVisible(false);
  };

  return (
    <div className="w-full  p-3 ">
      <div className="w-full  font-medium flex justify-center items-center py-2  text-white  rounded z-10">
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

        <p className="text-[25px] leading-7 ">Income tax calculator</p>
      </div>
      <div className=" w-full mx-auto py-5">
        <div className="text-slate-700 rounded shadow-md w-full py-3 px-3 bg-[#fff] z-10">
          <p className="font-medium mb-3">What is your total income?</p>
          <div className="flex justify-end items-center relative border-2 rounded-md ">
            <div className=" rounded-l-md h-[25px] grow">
              <input
                type="text"
                className="w-full h-full rounded-l-md shadow-[inset_0_2px_10px_0_rgb(0,0,0,0.1)] focus:outline-none"
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
        <div className="text-slate-700 rounded shadow-md w-full py-3 px-4 mt-7 bg-white max-w-sm">
          <p className="font-medium mb-3">Please choose income type</p>
          <div className="flex flex-col">
            <button className="bg-[#fe787a] rounded-md text-slate-50 cursor-pointer font-medium">
              Gross
            </button>
            <button className="bg-[#fe787a] rounded-md mt-2 text-slate-50 cursor-pointer font-medium">
              Net
            </button>
          </div>
        </div>
        <div className="text-slate-700  w-full py-3 px-2 mt-7 flex justify-center ">
          <button className="bg-[#4be1c9] rounded-md shadow-[21px_10px_33px_-4px_rgba(0,0,0,0.5)]  mt-2 text-slate-50 cursor-pointer font-medium w-full">
            Calculate
          </button>
        </div>
      </div>
    </div>
  );
}

export default IncomeDetailesPage;
