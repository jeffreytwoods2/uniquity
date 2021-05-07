import React from "react";
import "./style.css";


export function Unique() {
  return (
    <p className="fs-1" style={{ color: "green" }} id="confirm">Unique!</p>
  );
}

export function NotUnique() {
    return (
      <p className="fs-1" style={{ color: "red" }} id="confirm">Not Unique :/</p>
    );
}

export function NotANum() {
    return (
      <p className="fs-1" style={{ color: "red" }} id="confirm">That's not a number</p>
    );
}
