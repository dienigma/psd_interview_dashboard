import React from "react";
import { AnalyticsData } from "../dataGen";
import Chart from "./Chart";

interface Props {
  analytics: AnalyticsData;
}
// rgba(52, 152, 219,1.0)
const AnalyticsList = ({ analytics }: Props) => {
  return (
    <div className="analytics-container">
      <div className="analytics-card">
        Active Orders {analytics.activeOrders}
        <Chart color="rgba(241, 196, 15,1.0)" fill="rgba(241, 196, 15,0.2)" />
      </div>
      <div className="analytics-card">
        Unfullfilled {analytics.unfullfilled}
        <Chart color="rgba(46, 204, 113,1.0)" fill="rgba(46, 204, 113,0.2)" />
      </div>
      <div className="analytics-card">
        Pending Receipts {analytics.pendingReceipts}
        <Chart color="rgba(142, 68, 173,1.0)" fill="rgba(142, 68, 173,0.2)" />
      </div>
      <div className="analytics-card">
        Fullfilled {analytics.fullfilled}
        <Chart color="rgba(231, 76, 60,1.0)" fill="rgba(231, 76, 60,0.2)" />
      </div>
    </div>
  );
};

export default AnalyticsList;
