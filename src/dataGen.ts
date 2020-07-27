import { type } from "os";

export enum FullFillments {
  UNFULLFILLED = "Unfullfilled",
  PENDING_RECEIPT = "Pending Receipt",
  FULLFILLED = "Fullfilled",
}

export enum Statuses {
  AUTHORIZED = "Authorized",
  PAID = "Paid",
}
export type OrderDetails = {
  orderID: number;
  created: string;
  customerName: string;
  fullfillment: FullFillments;
  total: number;
  profit: number;
  status: Statuses;
  upadted: string;
};

export type AnalyticsData = {
  text: string;
  data: number;
  color: string;
  fill: string;
};

export const getOrderData = (): OrderDetails[] => {
  return [
    {
      orderID: 121091,
      created: "Aug 1, 2019",
      customerName: "Harriet Sanitago",
      fullfillment: FullFillments.UNFULLFILLED,
      status: Statuses.AUTHORIZED,
      total: 604.5,
      profit: 182.5,
      upadted: "Today",
    },
    {
      orderID: 121090,
      created: "Jul 21, 2019",
      customerName: "Sara Graham",
      fullfillment: FullFillments.PENDING_RECEIPT,
      status: Statuses.PAID,
      total: 1175.5,
      profit: 524.25,
      upadted: "Today",
    },
    {
      orderID: 121058,
      created: "Jul 16, 2019",
      customerName: "Elmer McGee",
      fullfillment: FullFillments.FULLFILLED,
      status: Statuses.AUTHORIZED,
      total: 175.5,
      profit: 78,
      upadted: "Yesterday",
    },
    {
      orderID: 121999,
      created: "Jul 17, 2019",
      customerName: "Victor Arnold",
      fullfillment: FullFillments.FULLFILLED,
      status: Statuses.AUTHORIZED,
      total: 402.5,
      profit: 83,
      upadted: "Jul 26, 2019",
    },
    {
      orderID: 121049,
      created: "Jul 21, 2019",
      customerName: "Harriet Scott",
      fullfillment: FullFillments.FULLFILLED,
      status: Statuses.PAID,
      total: 178,
      profit: 27.15,
      upadted: "Jul 26, 2019",
    },
    {
      orderID: 121094,
      created: "Jul 27, 2019",
      customerName: "Patricia Vaughn",
      fullfillment: FullFillments.PENDING_RECEIPT,
      status: Statuses.PAID,
      total: 824.5,
      profit: 113.5,
      upadted: "Jul 26, 2019",
    },
  ];
};

export const getAnalytics = (): AnalyticsData[] => {
  return [
    {
      text: "Active Orders",
      data: 1046,
      color: "rgba(241, 196, 15,1.0)",
      fill: "rgba(241, 196, 15,0.2)",
      // activeOrders: 1046,
      // unfullfilled: 159,
      // pendingReceipts: 624,
      // fullfilled: 263,
    },
    {
      text: "Unfullfilled",
      data: 159,
      color: "rgba(46, 204, 113,1.0)",
      fill: "rgba(46, 204, 113,0.2)",
    },

    {
      text: "Pending Receipts",
      data: 624,
      color: "rgba(142, 68, 173,1.0)",
      fill: "rgba(142, 68, 173,0.2)",
    },
    {
      text: "Fullfilled",
      data: 159,
      color: "rgba(231, 76, 60,1.0)",
      fill: "rgba(231, 76, 60,0.2)",
    },
  ];
};
