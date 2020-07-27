import React, { useState } from "react";
import { AnalyticsData, getAnalytics } from "../dataGen";
import { Grid, Box, Text } from "@chakra-ui/core";
import AnalyticsCard from "./AnalyticsCard";

// rgba(52, 152, 219,1.0)
const AnalyticsList = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>(
    getAnalytics()
  );
  return (
    <Box w="100%" h="auto">
      <Grid templateColumns="repeat(4,1fr)" gap={6}>
        {analyticsData.map((item) => (
          <AnalyticsCard
            text={item.text}
            data={item.data}
            color={item.color}
            fill={item.fill}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default AnalyticsList;
