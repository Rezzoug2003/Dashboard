import React from "react";
import "./Dashboard.scss";
import DashboardImage from "../../assets/8899687.png";
import { Card, Container } from "react-bootstrap";
export const Dashboard = () => {
  return (
    <div className="Dashboard">
      <div className="container">
        <div className="title">
          <img src={DashboardImage} alt="" />
          <h2>Dashboard</h2>
        </div>
        <div className="cards row">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center text-sm-start">
            <Card>
              <p>Total Rides</p>
              <p>999</p>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center text-sm-start">
            <Card>
              <p>Completed Rides</p>
              <p>999</p>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center text-sm-start">
            <Card>
              <p>Conceled Rides</p>
              <p>999</p>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center text-sm-start">
            <Card>
              <p>Users Number</p>
              <p>999</p>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center text-sm-start">
            <Card>
              <p>Number of Drivers</p>
              <p>999</p>
            </Card>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center text-sm-start">
            <Card>
              <p>Profit</p>
              <p>999</p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
