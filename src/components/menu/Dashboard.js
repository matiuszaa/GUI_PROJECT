import React from "react";
import { DashboardLayout } from "./DashboardLayout";

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <div className="Dashboard">
            <DashboardLayout />
          </div>
        )}
  }