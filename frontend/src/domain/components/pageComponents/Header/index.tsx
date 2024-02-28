import React, { useEffect, useState } from "react";
import "./style.css";
import { ReactComponent as RightArrow } from "../../../../assets/icons/arrow-right.svg";

function Header() {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");

  const handleDropdownChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedFilter(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError("");
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!searchQuery.trim()) {
      setError("Please enter a search query.");
      console.log(error);
      return;
    }

    const searchData = {
      filter: selectedFilter,
      query: searchQuery,
    };
    console.log(searchData);
  };
  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 4000);
  }, [error]);
  return (
    <div className="header">
      <h1>The PWR Chain Explorer</h1>
      <form className="header-search" onSubmit={handleSubmit}>
        {" "}
        <div className="header-search-container">
          <div className="search-dropdown-container">
            <select
              className="dropdown"
              value={selectedFilter}
              onChange={handleDropdownChange}
            >
              <option value="all">All Filters</option>
              <option value="filter1">Filter 1</option>
              <option value="filter2">Filter 2</option>
            </select>
          </div>
          <div className="search-input">
            <input
              type="text"
              placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
              value={searchQuery}
              onChange={handleInputChange}
            />
          </div>
          <div className="search-button">
            <button type="submit">
              <RightArrow />
              Enter
            </button>
          </div>
        </div>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Header;
