import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  propertyDetailsArr: [],
  isLoading: false,
  message: "",
  hasError: false,
  filter: {
    location: "",
    date: "",
    priceRange: "",
    propertyType: "",
    customSearch: "",
  },
};

const getPropertyDetailsAction = createAsyncThunk(
  "propertyDetails/getPropertyDetailsAction",
  async (_, thunkAPI) => {
    try {
      const resp = await axios.get(
        "https://my-real-estate-app-backend.herokuapp.com/properties"
      );
      if (resp.status === 200) {
        return resp.data.propertyDetails;
      }
    } catch (error) {
      console.log(error);
      thunkAPI.rejectWithValue(error);
    }
  }
);

const propertyDetailsSlice = createSlice({
  name: "propertyDetails",
  initialState,
  reducers: {
    resetFlagsAction: (state) => {
      state.isLoading = false;
      state.hasError = false;
      state.message = "";
    },
    updateFilterAction: (state, action) => {
      const { filterType, value } = action.payload;
      state.filter[filterType] = value;
    },
    clearAllFiltersAction: (state) => {
      state.filter = initialState.filter;
    },
  },
  extraReducers: {
    [getPropertyDetailsAction.pending]: (state) => {
      state.isLoading = true;
    },
    [getPropertyDetailsAction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.hasError = false;
      state.message = "";
      state.propertyDetailsArr = action.payload;
    },
    [getPropertyDetailsAction.rejected]: (state, action) => {
      state.isLoading = false;
      state.message = action.payload;
    },
  },
});
const propertyDetailsSliceReducer = propertyDetailsSlice.reducer;
const { resetFlagsAction, updateFilterAction, clearAllFiltersAction } =
  propertyDetailsSlice.actions;
export {
  getPropertyDetailsAction,
  resetFlagsAction,
  propertyDetailsSliceReducer,
  updateFilterAction,
  clearAllFiltersAction,
};
