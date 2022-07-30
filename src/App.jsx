import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import PropertyList from "./components/PropertyList/PropertyList";
import Filters from "./components/Filters/Filters";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  return (
    <div className="app">
      <SearchBar />
      <Filters />
      <PropertyList />
    </div>
  );
}

export default App;
