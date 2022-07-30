import { v4 as uuid } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPropertyDetailsAction } from "../../redux/features/propertyDetailsSlice";
const Filters = () => {
  const propertyDetails = useSelector(
    (storeState) => storeState.propertyDetails
  );
  const dispatch = useDispatch();
  console.log(propertyDetails);
  const { propertyDetailsArr } = propertyDetails;
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

  useEffect(() => {
    if (propertyDetailsArr.length !== 0) getPriceRange(propertyDetailsArr);
  }, [propertyDetailsArr]);
  return propertyDetailsArr.length !== 0 ? (
    <div className="filters">
      <div>
        <label htmlFor="location-select">Location</label>
        <select name="location-select" id="location-select" defaultValue={""}>
          <option disabled></option>
          {getUniquePropertyArr(propertyDetailsArr, "location").map(
            (propertyLocation) => (
              <option value={propertyLocation} key={uuid()}>
                {propertyLocation}
              </option>
            )
          )}
        </select>
      </div>
      <div>
        <label htmlFor="date-select">When</label>
        <input type="date" id="date-select" />
      </div>
      <div>
        <label htmlFor="price-select">Price</label>
        <select name="price-select" id="price-select" defaultValue={""}>
          <option disabled></option>
          {getPriceRange(propertyDetailsArr, 500).map((classInterval) => {
            const { lowerLimit, upperLimit } = classInterval;
            return (
              <option value={JSON.stringify(classInterval)} key={uuid()}>
                {`$${lowerLimit} - $${upperLimit}`}
              </option>
            );
          })}
        </select>
      </div>

      <div>
        <label htmlFor="property-select">Property Type</label>
        <select name="property-select" id="property-select" defaultValue={""}>
          <option disabled></option>
          {getUniquePropertyArr(propertyDetailsArr, "propertyType").map(
            (propertyLocation) => (
              <option value={propertyLocation} key={uuid()}>
                {propertyLocation}
              </option>
            )
          )}
        </select>
      </div>
      <div></div>
    </div>
  ) : (
    <div>skeleton</div>
  );
};

export default Filters;
