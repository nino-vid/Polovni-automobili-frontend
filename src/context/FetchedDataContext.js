import React, { createContext, useCallback, useEffect, useState } from "react";

export const Data = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [infoData, setInfoData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // GETING JUST THE FIRST PAGE OF 25 CARS

  const itemsPerPage = 25;

  const fetchPageFromFilteredData = useCallback(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return infoData.slice(start, end);
  }, [page, infoData]);

  useEffect(() => {
    setData(fetchPageFromFilteredData());
  }, [page, infoData, fetchPageFromFilteredData]);

  function nextPageHandler(event) {
    event.preventDefault();
    // Ensure we don't exceed the number of pages available in the filtered data
    const maxPages = Math.ceil(infoData.length / itemsPerPage);
    setPage((prev) => (prev >= maxPages ? maxPages : prev + 1));
    console.log(page);
  }

  function prevPageHandler(event) {
    event.preventDefault();
    setPage((prev) => (prev <= 1 ? 1 : prev - 1));
    console.log(page);
  }

  // FETCH ALL DATA, 15 API CALLS AT ONCE, BECAUSE OF 80 API url-s

  useEffect(() => {
    const fetchData = async (startPage = 1) => {
      // setLoading(true);
      const numberOfPagesToFetchAtOnce = 15;
      const urls = Array.from({ length: numberOfPagesToFetchAtOnce }).map(
        (_, index) =>
          `https://www.polovniautomobili.com/json/v1/getLast24hAds/26/${
            startPage + index
          }`
      );

      const allRequests = urls.map((url) =>
        fetch(url).then((res) => res.json())
      );

      const getUniqueObjects = (data) => {
        const uniqueStrings = [...new Set(data.map(JSON.stringify))];
        return uniqueStrings.map(JSON.parse);
      };

      try {
        const allData = await Promise.all(allRequests);
        const classifiedsData = allData
          .map((data) => data.classifieds || [])
          .flat();

        const uniqueClassifiedsData = getUniqueObjects(classifiedsData);

        if (uniqueClassifiedsData.length > 0) {
          setInfoData((prevData) => {
            const combinedData = [...prevData, ...uniqueClassifiedsData];
            const uniqueAndSortedData = getUniqueObjects(combinedData);

            // Sort by 'brandName'
            uniqueAndSortedData.sort((a, b) =>
              a.brandName.localeCompare(b.brandName)
            );
            return uniqueAndSortedData;
          });
          fetchData(startPage + numberOfPagesToFetchAtOnce);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
      // setLoading(false);
    };

    fetchData();
  }, []);

  //

  const uniqueBrandNames = [
    ...new Set(infoData.map((item) => item.brandName)),
  ].sort();

  const getModelsForBrand = (brand, data) => {
    return [
      ...new Set(
        data
          .filter((item) => item.brandName === brand)
          .map((item) => item.modelName)
      ),
    ].sort();
  };

  // Get unique models for every brand
  const brandToModelsMap = uniqueBrandNames.reduce((acc, brand) => {
    acc[brand] = getModelsForBrand(brand, infoData);
    return acc;
  }, {});

  return (
    <Data.Provider
      value={{
        data,
        nextPageHandler,
        prevPageHandler,
        uniqueBrandNames,
        infoData,
        brandToModelsMap,
        // loading,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default DataProvider;
