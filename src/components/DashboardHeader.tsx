import React from "react";

interface Props {}

const DashboardHeader = (props: Props) => {
  return (
    <div className="dashboard-heading">
      <div style={{ width: "100rem" }}>
        <h2 className="dashboard-title" style={{ paddingLeft: "8rem" }}>
          Orders List
        </h2>
      </div>
      <div style={{ paddingRight: "10rem" }}>
        <button className="big-button">Create order</button>
      </div>
    </div>
  );
};

export default DashboardHeader;
