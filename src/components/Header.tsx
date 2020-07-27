import React from "react";
import { Grid, Box, Text } from "@chakra-ui/core";

interface Props {}

const Header = (props: Props) => {
  return (
    <Box bg="white">
      <div style={{ marginRight: 30, marginLeft: 30 }}>
        <Grid templateColumns="repeat(3, 1fr)" padding={2}>
          <Box
            w="100%"
            h="10"
            bg="white.500"
            paddingLeft={4}
            // borderBottom={"1px"}
          >
            <Text fontSize="lg">PSD</Text>
          </Box>
          <Box w="100%" h="10" bg="white.500">
            <Grid templateColumns="repeat(5,1fr)" gap={3}>
              <Text fontSize="md" textAlign={"center"}>
                Dashboards
              </Text>
              <Text fontSize="md" textAlign={"center"}>
                Orders
              </Text>
              <Text fontSize="md" textAlign={"center"}>
                Customers
              </Text>
              <Text fontSize="md" textAlign={"center"}>
                Inventory
              </Text>
              <Text fontSize="md" textAlign={"center"}>
                Settings
              </Text>
            </Grid>
          </Box>
          <Box w="100%" h="10" bg="white.500">
            <Grid templateColumns="repeat(1,1fr)">
              <Text fontSize="md" textAlign="right">
                <span style={{ marginRight: 20 }}>
                  <i
                    className="fas fa-bell"
                    style={{ fontSize: 20, color: "#A0AEC0" }}
                  ></i>
                </span>
                John Doe
              </Text>
            </Grid>
          </Box>
        </Grid>
      </div>
    </Box>
  );
};

export default Header;
