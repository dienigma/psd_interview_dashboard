import React, { useState } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Grid } from "@chakra-ui/core";
// styles
import "./App.css";

import { getAnalytics, getOrderData, AnalyticsData } from "./dataGen";
import Header from "./components/Header";
import DashboardHeader from "./components/DashboardHeader";
import AnalyticsList from "./components/AnalyticsList";
import OrderTable from "./components/OrderTable";
import TabSelection from "./components/TabSelection";

interface Props {}

const App = (props: Props) => {
  // const analyticsData = getAnalytics();
  const orderData = getOrderData();
  // const [analytics] = useState<AnalyticsData>({ ...analyticsData });

  return (
    <div>
      <Header />
      <div style={{ margin: 30 }}>
        <DashboardHeader />
        <AnalyticsList />
        <Tabs size="md" variant="enclosed" marginTop={5}>
          <TabList>
            <Grid templateColumns="repeat(4,1fr)" w="50%" h="15" gap={4}>
              <Tab>All Orders</Tab>
              <Tab>Active</Tab>
              <Tab>Unpaid</Tab>
              <Tab>Fullfilled</Tab>
            </Grid>
          </TabList>

          <TabPanels>
            <TabPanel>
              <OrderTable orderData={orderData} />
            </TabPanel>
            <TabPanel>
              <OrderTable orderData={orderData} />
            </TabPanel>
            <TabPanel>
              <OrderTable orderData={orderData} />
            </TabPanel>
            <TabPanel>
              <OrderTable orderData={orderData} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
