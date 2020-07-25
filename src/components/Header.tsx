import React from "react";

interface Props {}

const Header = (props: Props) => {
  return (
    <div className="navbar">
      <div className="navbar-item">Dashboards</div>
      <div className="navbar-item">Orders</div>
      <div className="navbar-item">Customers</div>
      <div className="navbar-item">Inventory</div>
      <div className="navbar-item">Settings</div>
    </div>
  );
};

export default Header;
