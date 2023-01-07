import React from "react";
import { SalesChartWidget } from "./../widgets/SalesChartWidget";
import "./dashboardLayout.css";

export class DashboardLayout extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="DashboardLayout">
            <div id="left_column_container">
              <SalesChartWidget />
              <SalesChartWidget />
              <SalesChartWidget />
            </div>

            <div id="right_column_container">
              <div id="orders_and_quality_container">
                <div id="orders_container">
                    <SalesChartWidget />
                    <SalesChartWidget />
                    <SalesChartWidget />
                </div>
                <SalesChartWidget />
              </div>
              <SalesChartWidget />
            </div>
          </div>
        )}
  }
