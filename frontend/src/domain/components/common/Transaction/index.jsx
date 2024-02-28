import React from "react";
import "./style.css";
function Transaction({ Icon, number, time, recipient, value, pwr }) {
  return (
    <div className="transaction">
      <div className="transaction-icon">{Icon && <Icon />}</div>
      <div className="transaction-info1">
        <p>{number}</p>
        <span className="grid-item-value">{time}</span>
      </div>
      <div className="transaction-info2">
        <div className="transaction-info2-recipient1">
          <h4>From</h4>
          <span>{recipient}</span>
        </div>
        <div className="transaction-info2-recipient2">
          <h4 className="info-to">To</h4>
          <span>{recipient}</span>
        </div>
      </div>
      <div className="transaction-info3">
        <p>{pwr}</p>
      </div>
    </div>
  );
}

export default Transaction;
