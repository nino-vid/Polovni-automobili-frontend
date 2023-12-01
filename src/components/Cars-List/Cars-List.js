import CarItemForm from "../parts/car-item-form";
import { useContext } from "react";
import { Data } from "../../context/FetchedDataContext";
import "./Cars-List.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CarList = () => {
  const { data, nextPageHandler, prevPageHandler } = useContext(Data);

  return (
    <div className="car-list-parent-container">
      <div className="car-list-container">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((dataObj, index) => (
            <CarItemForm
              name={dataObj.brandName + " " + dataObj.modelName}
              price={dataObj.tag_block
                .slice(0, dataObj.tag_block.indexOf(","))
                .trim()}
              imgUrl={dataObj.photoLink?.[1]}
              year={dataObj.year}
              id={dataObj.AdID}
              // index={index}
              key={index}
            />
          ))
        ) : (
          <div className="loader"></div> // loading spinner
        )}
      </div>
      <div className="car-list-arrows">
        <a
          href="/"
          rel="noopener noreferrer"
          onClick={(event) => prevPageHandler(event)}
        >
          <IoIosArrowBack
            size={50}
            color="orange"
            style={{ marginRight: "1rem" }}
          />
        </a>
        <a
          href="/"
          rel="noopener noreferrer"
          onClick={(event) => nextPageHandler(event)}
        >
          <IoIosArrowForward
            size={50}
            color="orange"
            style={{ marginRight: "1rem" }}
          />
        </a>
      </div>
    </div>
  );
};

export default CarList;
