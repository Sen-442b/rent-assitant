import { InputBase } from "@mui/material";
import React from "react";

const SearchBar = () => {
  return (
    <div class="search-bar">
      <h2>Search For Properties</h2>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search For Property"
        className="search-bar-input"
      />
    </div>
  );
};

export default SearchBar;
