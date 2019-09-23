import React from "react";
import "./index.css";

export default function Wheel({ position }) {
  const symbols = ["🍌", "🍓", "🍊", "🐵"];

  return <div className="wheel">{symbols[position]}</div>;
}
