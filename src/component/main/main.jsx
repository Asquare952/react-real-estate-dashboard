import React from "react";

function main({ aside, value,}) {
  const { main } = aside[value];
  return (
    <main className="main">
      {main.map((main, index) => {
        return (
          <div className="main-container" key={index}>
            {main}
            {/* {children} */}
          </div>
        );
      })}
    </main>
  );
}

export default main;
