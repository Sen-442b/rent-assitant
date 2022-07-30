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
  const { propertyDetailsArr } = propertyDetails;
  return (
    <div className="property-list">
      {propertyDetailsArr.map((property) => {
        return <PropertyCard property={property} key={property.id} />;
      })}
    </div>
  );
};

export default PropertyList;
