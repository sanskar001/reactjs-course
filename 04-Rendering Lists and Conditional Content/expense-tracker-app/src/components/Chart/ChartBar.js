import React from "react";
import "./ChartBar.css";

// Dynamic CSS Styling into chartBar
/*
Example:
    <div style = {{height: "100%"}} ></div>
    <div style = {{height: value}} ></div>
    <div style = {{"background-color": "red"}} ></div>
    <div style = {{backgroundColor: "red", height: value}} ></div>
*/

const ChartBar = (props) => {
  let barFillHeight = "0%";

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
