import React from "react";

function clickA() {
  return (
    <>
      <h1>Event handler</h1>
      <button
        id="button-a"
        onClick={() => {
          alert("welcome");
        }}
      >
        Print text
      </button>
    </>
  );
}
export default clickA;
