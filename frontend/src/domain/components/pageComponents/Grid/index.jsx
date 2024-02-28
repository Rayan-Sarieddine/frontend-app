import React from "react";
import "./style.css";
import GridItem from "../../common/GridItem";
import { ReactComponent as RightArrow } from "../../../../assets/icons/arrow-right.svg";

function Grid() {
  return (
    <div className="grid">
      <div className="grid-1">
        <GridItem
          Icon={RightArrow}
          title="PWR PRICE"
          value="$1.098"
          change="(-4.19%)"
        />
      </div>
      <div className="grid-2">
        <GridItem
          Icon={RightArrow}
          title="TRANSACTIONS"
          value="1,960.01 M"
          isMain={true}
          secondTitle={"TPS"}
          secondValue={"5,200"}
        />{" "}
      </div>{" "}
      <div className="grid-3">
        <GridItem
          Icon={RightArrow}
          title="PWR MARKET CAP"
          value="$1,000,000,00..."
        />{" "}
      </div>
      <div className="grid-4">
        <GridItem Icon={RightArrow} title="BLOCKS" value="10199" />
      </div>
      <div className="grid-5">
        <GridItem Icon={RightArrow} title="VALIDATORS" value="191910" />
      </div>
      <div className="grid-6">
        <img src="./t-history.png" alt="img" className="grid-img" />
      </div>
    </div>
  );
}

export default Grid;
