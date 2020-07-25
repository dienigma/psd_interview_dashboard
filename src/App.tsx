import React, { useState } from "react";

// styles
import { AppGlobal, HeaderWrapper } from "./App.style";
import "./App.css";
// data
import { getAnalytics, getOrderData, AnalyticsData } from "./dataGen";
import Header from "./components/Header";
import DashboardHeader from "./components/DashboardHeader";
import AnalyticsList from "./components/AnalyticsList";
import OrderTable from "./components/OrderTable";

interface Props {}

const App = (props: Props) => {
  const analyticsData = getAnalytics();
  const orderData = getOrderData();
  const [analytics] = useState<AnalyticsData>({ ...analyticsData });

  return (
    <div>
      <Header />
      <div className="content-wrapper">
        <DashboardHeader />
        <AnalyticsList analytics={analytics} />
        <OrderTable orderData={orderData} />
      </div>
    </div>
  );
};

export default App;
