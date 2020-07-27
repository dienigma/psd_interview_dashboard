import React from "react";
import { Grid, Box, Text, Button, ButtonGroup } from "@chakra-ui/core";
interface Props {}

const DashboardHeader = (props: Props) => {
  return (
    <Box w="100%" h="10" marginBottom={2} padding={2}>
      <Grid templateColumns="repeat(2,1fr)">
        <Text fontSize={"40px"} w="100%">
          Orders List
        </Text>
        <Text textAlign={"right"}>
          <Button color="white" background="#6c5ce7" border={"none"}>
            Create Order
          </Button>
        </Text>
      </Grid>
    </Box>
  );
};

export default DashboardHeader;
