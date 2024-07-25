import React from "react";

const ButtonPropertyList = ({ propertyList, value, setValue }) => {
  // const {} = propertyList[value];

  return (
    <div className="property-list-cartigories-btn-container">
      {propertyList.map((item, index) => {
        return (
          <button
            key={item.id}
            onClick={() => setValue(index)}
            className={`cart-btn ${index === value && "cart-btn-active"}`}
          >
            {item.cartigory}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonPropertyList;
