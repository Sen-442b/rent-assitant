import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  clearAllFiltersAction,
  getPropertyDetailsAction,
  updateFilterAction,
} from "../../redux/features/propertyDetailsSlice";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import { Button, IconButton } from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
const Filters = () => {
  const propertyDetails = useSelector(
    (storeState) => storeState.propertyDetails
  );
  const dispatch = useDispatch();
  console.log(propertyDetails);
  const { propertyDetailsArr, filter } = propertyDetails;
  const { location, date, priceRange, propertyType } = filter;
  useEffect(() => {
    dispatch(getPropertyDetailsAction());
  }, []);

  const getUniquePropertyArr = (data, property) => {
    console.log(data);
    return data.reduce((acc, cv) => {
      return acc.includes(cv[property]) ? acc : [...acc, cv[property]];
    }, []);
  };

  const getMinMaxNum = (numArr) => {
    return [
      numArr.reduce((acc, cv) => {
        return cv < acc ? cv : acc;
      }),
      numArr.reduce((acc, cv) => {
        return cv > acc ? cv : acc;
      }),
    ];
  };

  const getPriceRange = (data, range) => {
    const minMaxNumArr = getMinMaxNum(
      getUniquePropertyArr(data, "monthlyRent")
    );
    let [minNum, maxNum] = minMaxNumArr;
    const priceRange = [];
    let count = 0;
    let lowerLimit = minNum - (minNum % 10 ** Math.floor(Math.log10(minNum))); //getting lower 100
    do {
      priceRange[count] = {
        lowerLimit: lowerLimit,
        upperLimit: lowerLimit + range,
      };
      lowerLimit += range;
      count++;
    } while (lowerLimit < maxNum);

    return priceRange;
  };

  const handleFiltersChange = (event) => {
    dispatch(
      updateFilterAction({
        filterType: event.target.name,
        value: event.target.value,
      })
    );
  };

  const clearSelectedFilter = (event) => {
    const filterType = event.currentTarget.name.replace("clear-", "");
    dispatch(
      updateFilterAction({
        filterType,
        value: "",
      })
    );
  };

  return propertyDetailsArr.length !== 0 ? (
    <div className="filters">
      <div>
        <label htmlFor="location-select">Location</label>
        <select
          name="location"
          id="location-select"
          value={location}
          onChange={handleFiltersChange}
        >
          <option disabled></option>
          {getUniquePropertyArr(propertyDetailsArr, "location").map(
            (propertyLocation) => (
              <option value={propertyLocation} key={uuid()}>
                {propertyLocation}
              </option>
            )
          )}
        </select>

        <IconButton
          aria-label="Remove Filter"
          style={{ color: "white" }}
          name="clear-location"
          onClick={clearSelectedFilter}
          className={location ? "visibility-visible" : "visibility-hidden"}
        >
          <CancelOutlinedIcon />
        </IconButton>
      </div>
      <div>
        <label htmlFor="date-select">When</label>
        <input
          type="date"
          id="date-select"
          name="date"
          onChange={handleFiltersChange}
          value={date}
        />
        <IconButton
          aria-label="Remove Filter"
          style={{ color: "white" }}
          name="clear-date"
          onClick={clearSelectedFilter}
          className={date ? "visibility-visible" : "visibility-hidden"}
        >
          <CancelOutlinedIcon />
        </IconButton>
      </div>
      <div>
        <label htmlFor="price-select">Price</label>
        <select
          name="priceRange"
          id="price-select"
          value={priceRange}
          onChange={handleFiltersChange}
        >
          <option disabled></option>
          {getPriceRange(propertyDetailsArr, 1000).map((classInterval) => {
            const { lowerLimit, upperLimit } = classInterval;
            return (
              <option value={JSON.stringify(classInterval)} key={uuid()}>
                {`$${lowerLimit} - $${upperLimit}`}
              </option>
            );
          })}
        </select>
        <IconButton
          aria-label="Remove Filter"
          style={{ color: "white" }}
          name="clear-priceRange"
          onClick={clearSelectedFilter}
          className={priceRange ? "visibility-visible" : "visibility-hidden"}
        >
          <CancelOutlinedIcon />
        </IconButton>
      </div>

      <div>
        <label htmlFor="property-select">Property Type</label>
        <select
          name="propertyType"
          id="property-select"
          value={propertyType}
          onChange={handleFiltersChange}
        >
          <option disabled></option>
          {getUniquePropertyArr(propertyDetailsArr, "propertyType").map(
            (propertyLocation) => (
              <option value={propertyLocation} key={uuid()}>
                {propertyLocation}
              </option>
            )
          )}
        </select>
        <IconButton
          aria-label="Remove Filter"
          style={{ color: "white" }}
          name="clear-propertyType"
          onClick={clearSelectedFilter}
          className={propertyType ? "visibility-visible" : "visibility-hidden"}
        >
          <CancelOutlinedIcon />
        </IconButton>
      </div>
      <div>
        <Button
          variant="contained"
          style={{ backgroundColor: "gray" }}
          endIcon={<CloseOutlinedIcon />}
          onClick={() => dispatch(clearAllFiltersAction())}
        >
          Clear Filters
        </Button>
      </div>
    </div>
  ) : (
    <div>skeleton</div>
  );
};

export default Filters;
