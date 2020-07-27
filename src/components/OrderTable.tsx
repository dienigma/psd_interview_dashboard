import React from "react";
import { OrderDetails } from "../dataGen";
import { Grid, Box, Text } from "@chakra-ui/core";
interface Props {
  orderData: OrderDetails[];
}

const tagStyles = {
  Unfullfilled: "#ED8936",
  "Pending Receipt": "#6B46C1",
  Fullfilled: "#38A169",
};
const statusStyles = {
  Authorized: "#ED8936",
  Paid: "#38A169",
};

const OrderTable = ({ orderData }: Props) => {
  return (
    <Box w="100%">
      <Box
        borderBottom="1px"
        marginTop={2}
        padding={2}
        height="10"
        borderBottomColor="#CBD5E0"
        textAlign="center"
      >
        <Grid templateColumns="repeat(9,1fr)">
          <Text paddingTop={2}>
            {" "}
            <input type="checkbox" name="selectAll" />
          </Text>
          <Text paddingTop={2}>Order ID</Text>
          <Text paddingTop={2}>Created</Text>
          <Text paddingTop={2}>Customer</Text>
          <Text paddingTop={2}>Fullfillment</Text>
          <Text paddingTop={2}>Total</Text>
          <Text paddingTop={2}>Profit</Text>
          <Text paddingTop={2}>Status</Text>
          <Text paddingTop={2}>Updated</Text>
        </Grid>
      </Box>
      {orderData.map((item) => (
        <Box
          bg="white"
          textAlign="center"
          marginTop={2}
          height="10"
          padding={2}
          borderRadius={"5px"}
          borderColor="#CBD5E0"
          boxShadow={"2px 2px 5px rgba(0,0,0,0.5)"}
          // border="1px"
        >
          <Grid templateColumns="repeat(9,1fr)">
            <Text paddingTop={2}>
              {" "}
              <input type="checkbox" name="selectAll" />
            </Text>
            <Text paddingTop={2}>{item.orderID}</Text>
            <Text paddingTop={2}>{item.created}</Text>
            <Text paddingTop={2}>{item.customerName}</Text>
            <Text
              paddingTop={2}
              color="white"
              backgroundColor={tagStyles[item.fullfillment]}
              padding={2}
              borderRadius={"5px"}
              textAlign="center"
            >
              {item.fullfillment}
            </Text>
            <Text paddingTop={2}>{item.total}</Text>
            <Text paddingTop={2}>{item.profit}</Text>
            <Text
              paddingTop={2}
              color="white"
              backgroundColor={statusStyles[item.status]}
              padding={2}
              borderRadius={"5px"}
              textAlign="center"
            >
              {item.status}
            </Text>
            <Text paddingTop={2}>{item.upadted}</Text>
          </Grid>
        </Box>
      ))}
    </Box>
  );
};

export default OrderTable;

{
  /* <table style={{ width: "100%" }}>
<tr>
  <th>
    <input type="checkbox" name="selectAll" />
  </th>
  <th>Order ID</th>
  <th>Created</th>
  <th>Customer</th>
  <th>Fullfillment</th>
  <th>Total</th>
  <th>Profit</th>
  <th>Status</th>
  <th>Updated</th>
</tr>
{orderData.map((item) => (
  <tr key={item.orderID} className="table-row">
    <td>
      <input type="checkbox" name="selectOne" />
    </td>
    <td>{item.orderID}</td>
    <td>{item.created}</td>
    <td>{item.customerName}</td>
    <td>{item.fullfillment}</td>
    <td>$ {item.total}</td>
    <td>$ {item.profit}</td>
    <td>
      <span>{item.status}</span>
    </td>
    <td>
      <span>{item.upadted}</span>
    </td>
  </tr>
))}
</table> */
}
