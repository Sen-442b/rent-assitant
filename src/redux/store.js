import { configureStore } from "@reduxjs/toolkit";
import { propertyDetailsSliceReducer } from "./features/propertyDetailsSlice";

const store = configureStore({
  reducer: {
    propertyDetails: propertyDetailsSliceReducer,
  },
});

export { store };
