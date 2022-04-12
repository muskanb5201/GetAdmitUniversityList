import UniCard from "./components/UniCard/UniCard";
import DropdownMenu from "./components/DropdownMenu/DropdownMenu";
import { useState } from "react";
import universities from "./universities";
import "./App.css";

const App = () => {
  const [locationFilter, setLocationFilter] = useState("");
  const [tutionFeesFilter, setTutionFeesFilter] = useState("");
  const [universitiesList, setUniversitiesList] = useState(universities);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showTutionFessDropdown, setShowTutionFessDropdown] = useState(false);

  const locationOptions = [
    "Select",
    "Massachusetts",
    "California",
    "Pittsburgh",
    "Indiana",
    "Texas",
    "Georgia",
    "Michigan",
    "Illinois",
    "New York",
  ];

  const tutionFeesOptions = [
    "Select",
    10000,
    20000,
    30000,
    40000,
    50000,
    60000,
    70000,
    80000,
    90000,
    100000,
  ];

  const onLocationClickHandler = (e) => {
    const { value } = e.target;
    setLocationFilter(value);
    const list = universitiesList.filter((uni) => value === uni.location);
    setUniversitiesList(list);
  };

  const onTutionFeesClickHandler = (e) => {
    const { value } = e.target;
    console.log(value);
    setTutionFeesFilter(value);
    const list = universitiesList.filter((uni) => uni.tutionFees < value);
    setUniversitiesList(list);
  };

  return (
    <div className="app">
      <div className="menu-container">
        <h1 className="menu-heading">US Universities</h1>
        <div className="buttons">
          {!showLocationDropdown ? (
            <button
              onClick={() => setShowLocationDropdown(true)}
              className="menu-btn"
            >
              Location ∨
            </button>
          ) : (
            <DropdownMenu
              value={locationFilter}
              options={locationOptions}
              onClickHandler={onLocationClickHandler}
            />
          )}

          {!showTutionFessDropdown ? (
            <button
              onClick={() => setShowTutionFessDropdown(true)}
              className="menu-btn"
            >
              {" "}
              Tution fees less than ∨
            </button>
          ) : (
            <DropdownMenu
              value={tutionFeesFilter}
              options={tutionFeesOptions}
              onClickHandler={onTutionFeesClickHandler}
            />
          )}
        </div>
      </div>

      <UniCard universities={universitiesList} />
    </div>
  );
};

export default App;
