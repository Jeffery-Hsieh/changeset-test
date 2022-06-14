import React from "react";

export const Accordion = ({ onClick, children, isSelected }) => (
  <button
    style={{
      border: 0,
      backgroundColor: isSelected ? "rebeccapurple" : "hotpink",
      color: isSelected ? "white" : "black",
      padding: "12px 24px",
      margin: "12px",
      borderRadius: "3px",
    }}
    onClick={onClick}
  >
    {children}
  </button>
);
