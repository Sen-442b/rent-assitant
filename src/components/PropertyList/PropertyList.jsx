import { Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyDetailsAction } from "../../redux/features/propertyDetailsSlice";
import PropertyCard from "./PropertyCard";

const PropertyList = () => {
  const propertyDetails = useSelector(
    (storeState) => storeState.propertyDetails
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPropertyDetailsAction());
  }, []);
  const { propertyDetailsArr, isLoading, filter, message, hasError } =
    propertyDetails;
  const { location, date, priceRange, propertyType, customSearch } = filter;
  const removeWhiteSpace = (inputStr) => {
    let outputStr = "";
    for (let i = 0; inputStr[i] !== undefined; i++) {
      if (inputStr[i] === " " && inputStr[i + 1] === " ") {
      } else {
        outputStr += inputStr[i];
      }
    }
    return outputStr;
  };
  const getFilteredData = (
    data,
    location,
    date,
    priceRange,
    propertyType,
    customSearch
  ) => {
    return data
      .filter((property) => (location ? property.location == location : true))
      .filter((property) => {
        if (date) {
          const checkInDateTime = new Date(property.checkInDate).setHours(
            0,
            0,
            0,
            0
          );
          const selectedDateTime = new Date(date).setHours(0, 0, 0, 0);
          return (
            new Date(checkInDateTime).getTime() ===
            new Date(selectedDateTime).getTime()
          );
        }
        return true;
      })
      .filter((property) => {
        if (priceRange) {
          const priceRangeObj = JSON.parse(priceRange);
          const { lowerLimit, upperLimit } = priceRangeObj;
          return (
            property.monthlyRent >= lowerLimit &&
            property.monthlyRent < upperLimit
          );
        }
        return true;
      })
      .filter((property) =>
        propertyType ? property.propertyType === propertyType : true
      )
      .filter((property) => {
        if (customSearch) {
          if (isNaN(customSearch)) {
            const { location, propertyType, propertyName, address } = property;
            const trimmedCustomSearch = removeWhiteSpace(customSearch.trim());

            return (
              location.includes(trimmedCustomSearch) ||
              propertyType.includes(trimmedCustomSearch) ||
              propertyName.includes(trimmedCustomSearch) ||
              address.includes(trimmedCustomSearch)
            );
          } else {
            return property.monthlyRent === Number(customSearch);
          }
        }
        return true;
      });
  };

  const filteredData = getFilteredData(
    propertyDetailsArr,
    location,
    date,
    priceRange,
    propertyType,
    customSearch
  );

  /*
  const getSearchedData = (data, customSearch) => {
    return data
    .filter((property) => {
      if (customSearch) {
        if (isNaN(customSearch)) {
          const { location, propertyType, propertyName, address } = property;
          const trimmedCustomSearch = removeWhiteSpace(customSearch.trim());

          return (
            location.includes(trimmedCustomSearch) ||
            propertyType.includes(trimmedCustomSearch) ||
            propertyName.includes(trimmedCustomSearch) ||
            address.includes(trimmedCustomSearch)
          );
        } else {
          return property.monthlyRent === Number(customSearch);
        }
      }
      return true;
    });
  };
  
  const searchedData = getSearchedData(propertyDetailsArr, customSearch);

  */

  if (isLoading) {
    return (
      <div className="property-list">
        {[1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 9, 10].map(() => (
          <Skeleton
            sx={{ bgcolor: "grey.900" }}
            variant="rectangular"
            width={300}
            height={300}
          />
        ))}
      </div>
    );
  }

  if (hasError) {
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        <p>Error</p>
        {message.toString()}
        <p>Please Try Again Later</p>
      </div>
    );
  }

  return (
    <div className="property-list">
      {filteredData.map((property) => {
        return <PropertyCard property={property} key={property.id} />;
      })}
    </div>
  );
};

export default PropertyList;
