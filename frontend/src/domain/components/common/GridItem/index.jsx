import React from "react";
import "./style.css";
function GridItem({
  Icon,
  title,
  value,
  change,
  isMain,
  secondTitle,
  secondValue,
}) {
  return (
    <div className="grid-item">
      <div className="grid-item-icon">{Icon && <Icon />}</div>
      <div className="grid-item-info">
        <p>{title}</p>
        <span className="grid-item-value">{value}</span>
        {change && <span className="grid-item-change">{change}</span>}
      </div>
      {isMain && (
        <div className="grid-item-info">
          <p>{secondTitle}</p>
          <span className="grid-item-value">{secondValue}</span>
        </div>
      )}
    </div>
  );
}

export default GridItem;
