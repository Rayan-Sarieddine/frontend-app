import React from "react";
import "./style.css";
function Block({ Icon, number, time, recipient, value, pwr }) {
  return (
    <div className="block">
      <div className="block-icon">{Icon && <Icon />}</div>
      <div className="block-info1">
        <p>{number}</p>
        <span className="grid-item-value">{time}</span>
      </div>
      <div className="block-info2">
        <div className="block-info2-recipient">
          <h4>Fee Recipient</h4>
          <span>{recipient}</span>
        </div>
        <span className="grid-item-value">{value}</span>
      </div>
      <div className="block-info3">
        <p>{pwr}</p>
      </div>
    </div>
  );
}

export default Block;
