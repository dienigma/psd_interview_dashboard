import React from "react";
import { Box, Grid, Text } from "@chakra-ui/core";
import Chart from "./Chart";
import { AnalyticsData } from "../dataGen";

// interface Props {
//   text: string;
//   data: string;
//   color: string;
//   fill: string;
// }

const AnalyticsCard = ({ text, data, color, fill }: AnalyticsData) => {
  return (
    <Box w="100%" bg="white" h="auto">
      <Grid templateColumns="repeat(2,1fr)">
        <Box paddingTop={5}>
          <Text fontSize={20} w="100%" textAlign={"center"}>
            {text}
          </Text>
          <Text fontSize={20} w="100%" textAlign={"center"}>
            {data}
          </Text>
        </Box>
        <Box padding={5}>
          <Chart color={color} fill={fill} />
        </Box>
      </Grid>
    </Box>
  );
};

export default AnalyticsCard;
