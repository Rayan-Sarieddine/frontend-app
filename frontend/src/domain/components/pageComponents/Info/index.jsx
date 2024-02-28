import React from "react";
import Block from "../../common/Block";
import { ReactComponent as RightArrow } from "../../../../assets/icons/arrow-right.svg";
import "./style.css";

function Info() {
  const blocksData = [
    {
      Icon: RightArrow,
      number: "17214042",
      time: "10 secs ago",
      recipient: "rsync-build",
      value: "89 txns",
      pwr: "0.49867 PWR",
    },
    {
      Icon: RightArrow,
      number: "17214042",
      time: "10 secs ago",
      recipient: "rsync-build",
      value: "89 txns",
      pwr: "0.49867 PWR",
    },
    {
      Icon: RightArrow,
      number: "17214042",
      time: "10 secs ago",
      recipient: "rsync-build",
      value: "89 txns",
      pwr: "0.49867 PWR",
    },
    {
      Icon: RightArrow,
      number: "17214042",
      time: "10 secs ago",
      recipient: "rsync-build",
      value: "89 txns",
      pwr: "0.49867 PWR",
    },
    {
      Icon: RightArrow,
      number: "17214042",
      time: "10 secs ago",
      recipient: "rsync-build",
      value: "89 txns",
      pwr: "0.49867 PWR",
    },
  ];

  return (
    <div className="info">
      <h2>Latest Block</h2>
      {blocksData.map((block, index) => (
        <Block
          key={index}
          Icon={block.Icon}
          number={block.number}
          time={block.time}
          recipient={block.recipient}
          value={block.value}
          pwr={block.pwr}
        />
      ))}
      <div className="info-link">
        <p>VIEW ALL BLOCKS</p>
        <RightArrow />
      </div>
    </div>
  );
}

export default Info;
