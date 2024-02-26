import React from "react";
import "./LeftBar.scss";
import { Link, useLocation} from "react-router-dom";
import dashboardIamge from "../../assets/8899687.png";
import customerdIamge from "../../assets/4814852.png";
import driverdIamge from "../../assets/8583437.png";

export const LeftBar = () => {
  const location = useLocation();
 console.log(location.pathname);
  
  return (
    <div className="LeftBar">
      <Link to="/" className="link">
        <div className={location.pathname === "/" ? "item active" : "item"}>
          <img src={dashboardIamge} alt="" />
          <span>dashboard</span>
        </div>
      </Link>
      <Link to="/customers" className="link">
        <div
          className={
            location.pathname === "/customers" ||
            location.pathname === "/customerUpdate"
              ? "item active"
              : "item"
          }>
          <img src={customerdIamge} alt="" />
          <span>customers</span>
        </div>
      </Link>
      <Link to="/drivers" className="link">
        <div
          className={
            location.pathname === "/drivers" || location.pathname === "/driverUpdate"
              ? "item active"
              : "item"
          }>
          <img src={driverdIamge} alt="" />
          <span>drivers</span>
        </div>
      </Link>
    </div>
  );
};
