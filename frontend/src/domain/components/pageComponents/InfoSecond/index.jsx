import React from "react";
import { ReactComponent as RightArrow } from "../../../../assets/icons/arrow-right.svg";
import "./style.css";
import Transaction from "../../common/Transaction";

function InfoSecond() {
  const transactionsData = [
    {
      Icon: RightArrow,
      number: "0x7796a..",
      time: "10 secs ago",
      recipient: "0x95222...feg5",
      value: "0x95222...CC4ba",
      pwr: "0.49867 PWR",
    },
    {
      Icon: RightArrow,
      number: "0x7796a..",
      time: "10 secs ago",
      recipient: "0x95222...feg5",
      value: "0x95222...CC4ba",
      pwr: "0 PWR",
    },
    {
      Icon: RightArrow,
      number: "0x7796a..",
      time: "10 secs ago",
      recipient: "0x95222...feg5",
      value: "0x95222...CC4ba",
      pwr: "0.49867 PWR",
    },
    {
      Icon: RightArrow,
      number: "0x7796a..",
      time: "10 secs ago",
      recipient: "0x95222...feg5",
      value: "0x95222...CC4ba",
      pwr: "0.49867 PWR",
    },
    {
      Icon: RightArrow,
      number: "0x7796a..",
      time: "10 secs ago",
      recipient: "0x95222...feg5",
      value: "0x95222...CC4ba",
      pwr: "0.49867 PWR",
    },
  ];

  return (
    <div className="info">
      <h2>Latest Transactions</h2>
      {transactionsData.map((transaction, index) => (
        <Transaction
          key={index}
          Icon={transaction.Icon}
          number={transaction.number}
          time={transaction.time}
          recipient={transaction.recipient}
          value={transaction.value}
          pwr={transaction.pwr}
        />
      ))}
      <div className="info-link">
        <p>VIEW ALL TRANSACTIONS</p>
        <RightArrow />
      </div>
    </div>
  );
}

export default InfoSecond;
