import React from "react";

function clickA() {
  alert("hello");

  return (
    <>
      <h1>Event handler</h1>
      <button
        id="button-a"
        onClick={clickA}
        //{() => { alert("welcome");}}
      >
        click me
      </button>
    </>
  );
}
export default clickA;
