import React from "react";
import useComponentVisible from "../Utilities/Utilities";

function IncomeDetailesPage({
  selectedIncomeRange,
  setSelectedIncomeRange,
  selectedIncomeType,
  setSelectedIncomeType,
  clickedPage,
  setInputedIncomeValue,
  conditionsForCalculation,
  setClickedPage,
  inputedIncomeValue,

  setFinalValuesObject,
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

  const handleCalculateBtnClick = () => {
    setFinalValuesObject({
      inputValue: inputedIncomeValue,
      incomeType: selectedIncomeType,
      frequency: selectedIncomeRange,
    });
    setClickedPage("income-detailes");
  };

  const handleInput = (event) => {
    var removeChar = event.target.value.replace(/[^0-9\.]/g, "");

    var removeDot = removeChar.replace(/\./g, "");
    event.target.value = removeDot;

    var formatedNumber = event.target.value.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );

    event.target.value = formatedNumber;

    const num = parseFloat(event.target.value.replaceAll(",", ""));
    setInputedIncomeValue(num);
  };

  return (
    <div
      className={
        clickedPage === "income" ? "w-full p-3 min-h-[600px] " : "hidden"
      }
    >
      <div className="w-full  font-normal flex justify-center items-center py-8  text-[#5c608f] rounded z-10  ">
        <div className="w-[2rem] sm:w-[4rem]">
          <svg
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z"
            />
          </svg>
        </div>

        <h1 className="sm:text-[3rem] text-[1.5rem]">Income tax calculator</h1>
      </div>
      <div className=" w-full mx-auto py-8 max-w-[700px]  ">
        <div className="text-slate-600 rounded shadow-md w-full py-8  px-5 bg-[#fff] z-10">
          <p className="font-medium mb-3">What is your total income?</p>
          <div className="flex justify-end items-center relative border-2 rounded-md  ">
            <div className=" rounded-l-md h-[25px] grow ">
              <input
                onChange={handleInput}
                type="text"
                placeholder="e.g $15,000"
                className={
                  inputedIncomeValue < 50
                    ? "w-full pl-3 h-full rounded-l-md shadow-[inset_0_2px_10px_0_rgb(0,0,0,0.1)] focus:outline-red-400 placeholder:font-light placeholder:italic placeholder:text-s focus:bg-red-50"
                    : "w-full pl-3 h-full rounded-l-md shadow-[inset_0_2px_10px_0_rgb(0,0,0,0.1)] focus:outline-green-400 placeholder:font-light placeholder:italic placeholder:text-s focus:bg-green-50"
                }
              />
            </div>

            <p
              className="bg-slate-300 rounded-r-md px-2 h-full cursor-pointer ml-[1px] hover:text-stone-100"
              onClick={() => setIsComponentVisible(true)}
            >
              {selectedIncomeRange.charAt(0).toUpperCase() +
                selectedIncomeRange.slice(1)}
            </p>

            {isComponentVisible && (
              <div className="visibleList" ref={ref}>
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
              </div>
            )}
          </div>
        </div>
        <div className="text-slate-600 rounded shadow-md w-full py-8  px-5 mt-7 bg-white ">
          <p className="font-medium mb-3">Please choose income type</p>
          <div className="flex flex-col sm:flex-row justify-between ">
            <button
              className={
                selectedIncomeType === "gross"
                  ? "incomeBtn   pointer-events-none text-white before:top-0 before:shadow-[inset_0px_0px_10px_5px_rgb(7,255,255,0.3)] before:bg-gradient-to-br from-[#3eeaca] to-[#33dcc0]"
                  : "incomeBtn before:bg-gradient-to-br from-[#fed8a4] to-[#f6f6a4] "
              }
              value="gross"
              onClick={handleIncomeBtnClick}
            >
              Gross
            </button>
            <button
              className={
                selectedIncomeType === "net"
                  ? "incomeBtn mt-2  pointer-events-none text-white sm:mt-0 before:top-0 before:shadow-[inset_0px_0px_10px_5px_rgb(7,255,255,0.3)] before:bg-gradient-to-br from-[#3eeaca] to-[#33dcc0]"
                  : "incomeBtn mt-2 sm:mt-0  before:bg-gradient-to-br from-[#fed8a4] to-[#f6f6a4] "
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
            onClick={handleCalculateBtnClick}
            className={
              conditionsForCalculation
                ? "calculateBtn   text-white before:left-0 before:shadow-[inset_0px_0px_10px_5px_rgb(7,255,255,0.3)] scale-[1.1] shadow-[12px_30px_21px_-4px_rgba(0,0,0,0.1)] "
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
