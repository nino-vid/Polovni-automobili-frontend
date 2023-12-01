import { useEffect, useState } from "react";

// Function for canceling choosed option to default

export const UseCarBrandHandler = (initialValue, resetModelValue) => {
  const [carBrandValue, setCarBrandValue] = useState(initialValue);
  const [isCarBrandChecked, setIsCarBrandChecked] = useState(false);

  useEffect(() => {
    if (carBrandValue === "cancel") {
      setCarBrandValue("Sve marke");
    }

    if (carBrandValue === "cancel" || carBrandValue !== "Sve marke") {
      resetModelValue("Svi modeli");
    }
    if (carBrandValue !== "cancel" && carBrandValue !== "Sve marke") {
      setIsCarBrandChecked(true); // Enable section for car models only when brand is choosed
    } else {
      setIsCarBrandChecked(false);
    }
    // if (carBrandValue === "cancel") {
    //   setCarBrandValue("Sve marke");
    // }

    // if (carBrandValue === "cancel" || carBrandValue !== "Sve marke") {
    //   resetModelValue("Svi modeli");
    // }
    // if (carBrandValue !== "cancel" && carBrandValue !== "Sve marke") {
    //   setIsCarBrandChecked(true);
    // } else {
    //   setIsCarBrandChecked(false);
    // }
  }, [carBrandValue, resetModelValue]);

  return [carBrandValue, setCarBrandValue, isCarBrandChecked];
};
