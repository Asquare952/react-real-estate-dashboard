import React from "react";

function main({ aside, value }) {
  const { main } = aside[value];
  return (
    <main className="main">
      {main.map((main, index) => {
        return <div key={index}>{main}</div>;
      })}
    </main>
  );
}

export default main;
