import React from "react";
import "./mobilesearch.css"
const mobilesearch = () => {
  return (
    <>
      <div className="searchInputMobile">
        <div className="mobileSearchInput">
          <CiSearch className="searchIconMobile" />
          <input type="search" placeholder="Search Property, Customer etc" />
        </div>
      </div>
    </>
  );
};

export default mobilesearch;
