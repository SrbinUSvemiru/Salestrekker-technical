import { useState, useEffect, useRef } from "react";

export default function useComponentVisible(initialIsVisible) {
  const [isComponentVisible, setIsComponentVisible] =
    useState(initialIsVisible);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return { ref, isComponentVisible, setIsComponentVisible };
}

function taxCalculator(inputValue, incomeType) {
  if (incomeType === "gross") {
    let netValue = Math.round((55 / 100) * inputValue);
    let tax = inputValue - netValue;
    let grossValue = inputValue;

    return {
      netValue: netValue,
      tax: tax,
      grossValue: grossValue,
    };
  } else {
    let grossValue = Math.round(inputValue / (55 / 100));
    let tax = grossValue - inputValue;
    let netValue = inputValue;
    return {
      netValue: netValue,
      tax: tax,
      grossValue: grossValue,
    };
  }
}

function calculateWeekly(inputValue, incomeType) {
  let weeklyValues = taxCalculator(inputValue, incomeType);
  let fortnightlyValues = taxCalculator(Math.round(inputValue * 2), incomeType);
  let monthlyValues = taxCalculator(Math.round(inputValue * 4.28), incomeType);
  let annuallyValues = taxCalculator(Math.round(inputValue * 52), incomeType);

  return {
    weekly: { ...weeklyValues, frequency: "Weekly" },
    fortnightly: { ...fortnightlyValues, frequency: "Fortnightly" },
    monthly: { ...monthlyValues, frequency: "Monthly" },
    annually: { ...annuallyValues, frequency: "Annually" },
  };
}

function calculateFortnightly(inputValue, incomeType) {
  let weeklyValues = taxCalculator(Math.round(inputValue / 2), incomeType);
  let fortnightlyValues = taxCalculator(inputValue, incomeType);
  let monthlyValues = taxCalculator(Math.round(inputValue * 2.14), incomeType);
  let annuallyValues = taxCalculator(Math.round(inputValue * 26), incomeType);

  return {
    weekly: { ...weeklyValues, frequency: "Weekly" },
    fortnightly: { ...fortnightlyValues, frequency: "Fortnightly" },
    monthly: { ...monthlyValues, frequency: "Monthly" },
    annually: { ...annuallyValues, frequency: "Annually" },
  };
}

function calculateMonthly(inputValue, incomeType) {
  let weeklyValues = taxCalculator(Math.round(inputValue / 4.28), incomeType);
  let fortnightlyValues = taxCalculator(
    Math.round(inputValue / 2.14),
    incomeType
  );
  let monthlyValues = taxCalculator(inputValue, incomeType);
  let annuallyValues = taxCalculator(Math.round(inputValue * 12), incomeType);

  return {
    weekly: { ...weeklyValues, frequency: "Weekly" },
    fortnightly: { ...fortnightlyValues, frequency: "Fortnightly" },
    monthly: { ...monthlyValues, frequency: "Monthly" },
    annually: { ...annuallyValues, frequency: "Annually" },
  };
}

function calculateAnnually(inputValue, incomeType) {
  let weeklyValues = taxCalculator(Math.round(inputValue / 52), incomeType);
  let fortnightlyValues = taxCalculator(
    Math.round(inputValue / 26),
    incomeType
  );
  let monthlyValues = taxCalculator(Math.round(inputValue / 12), incomeType);
  let annuallyValues = taxCalculator(inputValue, incomeType);

  return {
    weekly: { ...weeklyValues, frequency: "Weekly" },
    fortnightly: { ...fortnightlyValues, frequency: "Fortnightly" },
    monthly: { ...monthlyValues, frequency: "Monthly" },
    annually: { ...annuallyValues, frequency: "Annually" },
  };
}

export function calculateIncome({ inputValue, incomeType, frequency }) {
  let selected = frequency;

  switch (selected) {
    case "weekly":
      selected = calculateWeekly(inputValue, incomeType);
      break;
    case "fortnightly":
      selected = calculateFortnightly(inputValue, incomeType);
      break;
    case "monthly":
      selected = calculateMonthly(inputValue, incomeType);
      break;
    case "annually":
      selected = calculateAnnually(inputValue, incomeType);
      break;
    default:
      selected = calculateWeekly(inputValue, incomeType);
  }
  return selected;
}
