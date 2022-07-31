import { InputBase } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterAction } from "../../redux/features/propertyDetailsSlice";

const SearchBar = () => {
  const propertyDetails = useSelector(
    (storeState) => storeState.propertyDetails
  );
  const dispatch = useDispatch();

  const { filter } = propertyDetails;
  const { customSearch } = filter;
  return (
    <div class="search-bar">
      <h2>Search For Properties</h2>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search For Property"
        className="search-bar-input"
        value={customSearch}
        onChange={(e) =>
          dispatch(
            updateFilterAction({
              filterType: "customSearch",
              value: e.target.value,
            })
          )
        }
      />
    </div>
  );
};

export default SearchBar;
