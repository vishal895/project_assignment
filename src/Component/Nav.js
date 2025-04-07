import React, { useState } from "react";

const Nav = ({ onSearch }) => {
  const [searchItem, setSearchItem] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchItem(value);
    onSearch(value);
  };

  return (
    <nav className="navbar bg-light shadow-sm p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <a className="navbar-brand fw-bold fs-4 text-primary">Food Product</a>
        <div className="search-container">
          <input
            className="form-control border rounded-pill px-3"
            type="search"
            placeholder="🔍 Search products..."
            aria-label="Search"
            value={searchItem}
            onChange={handleSearch}
            style={{ width: "300px" }} 
          />
        </div>
      </div>
    </nav>
  );
};

export default Nav;


