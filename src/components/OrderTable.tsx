import React from "react";
import { OrderDetails } from "../dataGen";

interface Props {
  orderData: OrderDetails[];
}

const OrderTable = ({ orderData }: Props) => {
  return (
    <div className="order-table">
      <table style={{ width: "100%" }}>
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
      </table>
    </div>
  );
};

export default OrderTable;
